// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSflowGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#id DataThunderSflowGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#stats DataThunderSflowGlobalStats#stats}
  */
  readonly stats?: DataThunderSflowGlobalStatsStats;
}
export interface DataThunderSflowGlobalStatsStats {
  /**
  * Total counter sample records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#total_counter_sample_records DataThunderSflowGlobalStats#total_counter_sample_records}
  */
  readonly totalCounterSampleRecords?: number;
  /**
  * Total packet sample records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#total_packet_sample_records DataThunderSflowGlobalStats#total_packet_sample_records}
  */
  readonly totalPacketSampleRecords?: number;
  /**
  * Total sflow packets sent  desc {}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#total_sflow_local_packets_sent DataThunderSflowGlobalStats#total_sflow_local_packets_sent}
  */
  readonly totalSflowLocalPacketsSent?: number;
  /**
  * sflow packets dropped because of rate limit via Mgmt Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#total_sflow_packets_drop_mgmt DataThunderSflowGlobalStats#total_sflow_packets_drop_mgmt}
  */
  readonly totalSflowPacketsDropMgmt?: number;
  /**
  * Total sflow packets sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#total_sflow_packets_sent DataThunderSflowGlobalStats#total_sflow_packets_sent}
  */
  readonly totalSflowPacketsSent?: number;
  /**
  * Total sflow packets sent via Mgmt Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#total_sflow_packets_sent_mgmt DataThunderSflowGlobalStats#total_sflow_packets_sent_mgmt}
  */
  readonly totalSflowPacketsSentMgmt?: number;
}

export function dataThunderSflowGlobalStatsStatsToTerraform(struct?: DataThunderSflowGlobalStatsStatsOutputReference | DataThunderSflowGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_counter_sample_records: cdktf.numberToTerraform(struct!.totalCounterSampleRecords),
    total_packet_sample_records: cdktf.numberToTerraform(struct!.totalPacketSampleRecords),
    total_sflow_local_packets_sent: cdktf.numberToTerraform(struct!.totalSflowLocalPacketsSent),
    total_sflow_packets_drop_mgmt: cdktf.numberToTerraform(struct!.totalSflowPacketsDropMgmt),
    total_sflow_packets_sent: cdktf.numberToTerraform(struct!.totalSflowPacketsSent),
    total_sflow_packets_sent_mgmt: cdktf.numberToTerraform(struct!.totalSflowPacketsSentMgmt),
  }
}


export function dataThunderSflowGlobalStatsStatsToHclTerraform(struct?: DataThunderSflowGlobalStatsStatsOutputReference | DataThunderSflowGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_counter_sample_records: {
      value: cdktf.numberToHclTerraform(struct!.totalCounterSampleRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_packet_sample_records: {
      value: cdktf.numberToHclTerraform(struct!.totalPacketSampleRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sflow_local_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalSflowLocalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sflow_packets_drop_mgmt: {
      value: cdktf.numberToHclTerraform(struct!.totalSflowPacketsDropMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sflow_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalSflowPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sflow_packets_sent_mgmt: {
      value: cdktf.numberToHclTerraform(struct!.totalSflowPacketsSentMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSflowGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSflowGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalCounterSampleRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCounterSampleRecords = this._totalCounterSampleRecords;
    }
    if (this._totalPacketSampleRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPacketSampleRecords = this._totalPacketSampleRecords;
    }
    if (this._totalSflowLocalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSflowLocalPacketsSent = this._totalSflowLocalPacketsSent;
    }
    if (this._totalSflowPacketsDropMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSflowPacketsDropMgmt = this._totalSflowPacketsDropMgmt;
    }
    if (this._totalSflowPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSflowPacketsSent = this._totalSflowPacketsSent;
    }
    if (this._totalSflowPacketsSentMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSflowPacketsSentMgmt = this._totalSflowPacketsSentMgmt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSflowGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalCounterSampleRecords = undefined;
      this._totalPacketSampleRecords = undefined;
      this._totalSflowLocalPacketsSent = undefined;
      this._totalSflowPacketsDropMgmt = undefined;
      this._totalSflowPacketsSent = undefined;
      this._totalSflowPacketsSentMgmt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalCounterSampleRecords = value.totalCounterSampleRecords;
      this._totalPacketSampleRecords = value.totalPacketSampleRecords;
      this._totalSflowLocalPacketsSent = value.totalSflowLocalPacketsSent;
      this._totalSflowPacketsDropMgmt = value.totalSflowPacketsDropMgmt;
      this._totalSflowPacketsSent = value.totalSflowPacketsSent;
      this._totalSflowPacketsSentMgmt = value.totalSflowPacketsSentMgmt;
    }
  }

  // total_counter_sample_records - computed: false, optional: true, required: false
  private _totalCounterSampleRecords?: number; 
  public get totalCounterSampleRecords() {
    return this.getNumberAttribute('total_counter_sample_records');
  }
  public set totalCounterSampleRecords(value: number) {
    this._totalCounterSampleRecords = value;
  }
  public resetTotalCounterSampleRecords() {
    this._totalCounterSampleRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCounterSampleRecordsInput() {
    return this._totalCounterSampleRecords;
  }

  // total_packet_sample_records - computed: false, optional: true, required: false
  private _totalPacketSampleRecords?: number; 
  public get totalPacketSampleRecords() {
    return this.getNumberAttribute('total_packet_sample_records');
  }
  public set totalPacketSampleRecords(value: number) {
    this._totalPacketSampleRecords = value;
  }
  public resetTotalPacketSampleRecords() {
    this._totalPacketSampleRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPacketSampleRecordsInput() {
    return this._totalPacketSampleRecords;
  }

  // total_sflow_local_packets_sent - computed: false, optional: true, required: false
  private _totalSflowLocalPacketsSent?: number; 
  public get totalSflowLocalPacketsSent() {
    return this.getNumberAttribute('total_sflow_local_packets_sent');
  }
  public set totalSflowLocalPacketsSent(value: number) {
    this._totalSflowLocalPacketsSent = value;
  }
  public resetTotalSflowLocalPacketsSent() {
    this._totalSflowLocalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSflowLocalPacketsSentInput() {
    return this._totalSflowLocalPacketsSent;
  }

  // total_sflow_packets_drop_mgmt - computed: false, optional: true, required: false
  private _totalSflowPacketsDropMgmt?: number; 
  public get totalSflowPacketsDropMgmt() {
    return this.getNumberAttribute('total_sflow_packets_drop_mgmt');
  }
  public set totalSflowPacketsDropMgmt(value: number) {
    this._totalSflowPacketsDropMgmt = value;
  }
  public resetTotalSflowPacketsDropMgmt() {
    this._totalSflowPacketsDropMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSflowPacketsDropMgmtInput() {
    return this._totalSflowPacketsDropMgmt;
  }

  // total_sflow_packets_sent - computed: false, optional: true, required: false
  private _totalSflowPacketsSent?: number; 
  public get totalSflowPacketsSent() {
    return this.getNumberAttribute('total_sflow_packets_sent');
  }
  public set totalSflowPacketsSent(value: number) {
    this._totalSflowPacketsSent = value;
  }
  public resetTotalSflowPacketsSent() {
    this._totalSflowPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSflowPacketsSentInput() {
    return this._totalSflowPacketsSent;
  }

  // total_sflow_packets_sent_mgmt - computed: false, optional: true, required: false
  private _totalSflowPacketsSentMgmt?: number; 
  public get totalSflowPacketsSentMgmt() {
    return this.getNumberAttribute('total_sflow_packets_sent_mgmt');
  }
  public set totalSflowPacketsSentMgmt(value: number) {
    this._totalSflowPacketsSentMgmt = value;
  }
  public resetTotalSflowPacketsSentMgmt() {
    this._totalSflowPacketsSentMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSflowPacketsSentMgmtInput() {
    return this._totalSflowPacketsSentMgmt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats thunder_sflow_global_stats}
*/
export class DataThunderSflowGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSflowGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSflowGlobalStats to import
  * @param importFromId The id of the existing DataThunderSflowGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSflowGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sflow_global_stats thunder_sflow_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSflowGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSflowGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_global_stats',
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
  private _stats = new DataThunderSflowGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSflowGlobalStatsStats) {
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
      stats: dataThunderSflowGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSflowGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSflowGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
