// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemAppPerformanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#id DataThunderSystemAppPerformanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#stats DataThunderSystemAppPerformanceStats#stats}
  */
  readonly stats?: DataThunderSystemAppPerformanceStatsStats;
}
export interface DataThunderSystemAppPerformanceStatsStats {
  /**
  * FW Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#fw_conns_per_sec DataThunderSystemAppPerformanceStats#fw_conns_per_sec}
  */
  readonly fwConnsPerSec?: number;
  /**
  * GiFW Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#gifw_conns_per_sec DataThunderSystemAppPerformanceStats#gifw_conns_per_sec}
  */
  readonly gifwConnsPerSec?: number;
  /**
  * IP NAT Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#ip_nat_conns_per_sec DataThunderSystemAppPerformanceStats#ip_nat_conns_per_sec}
  */
  readonly ipNatConnsPerSec?: number;
  /**
  * L4 Bandwidth in bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#l4_bandwidth DataThunderSystemAppPerformanceStats#l4_bandwidth}
  */
  readonly l4Bandwidth?: number;
  /**
  * L4 Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#l4_conns_per_sec DataThunderSystemAppPerformanceStats#l4_conns_per_sec}
  */
  readonly l4ConnsPerSec?: number;
  /**
  * L7 Bandwidth in bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#l7_bandwidth DataThunderSystemAppPerformanceStats#l7_bandwidth}
  */
  readonly l7Bandwidth?: number;
  /**
  * L7 Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#l7_conns_per_sec DataThunderSystemAppPerformanceStats#l7_conns_per_sec}
  */
  readonly l7ConnsPerSec?: number;
  /**
  * L7 Transactions/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#l7_trans_per_sec DataThunderSystemAppPerformanceStats#l7_trans_per_sec}
  */
  readonly l7TransPerSec?: number;
  /**
  * Server SSL Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#serv_ssl_conns_per_sec DataThunderSystemAppPerformanceStats#serv_ssl_conns_per_sec}
  */
  readonly servSslConnsPerSec?: number;
  /**
  * SSL Connections/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#ssl_conns_per_sec DataThunderSystemAppPerformanceStats#ssl_conns_per_sec}
  */
  readonly sslConnsPerSec?: number;
  /**
  * Total Current Established Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#total_curr_conns DataThunderSystemAppPerformanceStats#total_curr_conns}
  */
  readonly totalCurrConns?: number;
  /**
  * Total New Connections Established/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#total_new_conns_per_sec DataThunderSystemAppPerformanceStats#total_new_conns_per_sec}
  */
  readonly totalNewConnsPerSec?: number;
  /**
  * Total Throughput in bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#total_throughput_bits_per_sec DataThunderSystemAppPerformanceStats#total_throughput_bits_per_sec}
  */
  readonly totalThroughputBitsPerSec?: number;
}

export function dataThunderSystemAppPerformanceStatsStatsToTerraform(struct?: DataThunderSystemAppPerformanceStatsStatsOutputReference | DataThunderSystemAppPerformanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fw_conns_per_sec: cdktf.numberToTerraform(struct!.fwConnsPerSec),
    gifw_conns_per_sec: cdktf.numberToTerraform(struct!.gifwConnsPerSec),
    ip_nat_conns_per_sec: cdktf.numberToTerraform(struct!.ipNatConnsPerSec),
    l4_bandwidth: cdktf.numberToTerraform(struct!.l4Bandwidth),
    l4_conns_per_sec: cdktf.numberToTerraform(struct!.l4ConnsPerSec),
    l7_bandwidth: cdktf.numberToTerraform(struct!.l7Bandwidth),
    l7_conns_per_sec: cdktf.numberToTerraform(struct!.l7ConnsPerSec),
    l7_trans_per_sec: cdktf.numberToTerraform(struct!.l7TransPerSec),
    serv_ssl_conns_per_sec: cdktf.numberToTerraform(struct!.servSslConnsPerSec),
    ssl_conns_per_sec: cdktf.numberToTerraform(struct!.sslConnsPerSec),
    total_curr_conns: cdktf.numberToTerraform(struct!.totalCurrConns),
    total_new_conns_per_sec: cdktf.numberToTerraform(struct!.totalNewConnsPerSec),
    total_throughput_bits_per_sec: cdktf.numberToTerraform(struct!.totalThroughputBitsPerSec),
  }
}


export function dataThunderSystemAppPerformanceStatsStatsToHclTerraform(struct?: DataThunderSystemAppPerformanceStatsStatsOutputReference | DataThunderSystemAppPerformanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fw_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.fwConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gifw_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.gifwConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_nat_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.ipNatConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.l4Bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.l4ConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.l7Bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.l7ConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_trans_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.l7TransPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_ssl_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.servSslConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.sslConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_curr_conns: {
      value: cdktf.numberToHclTerraform(struct!.totalCurrConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_new_conns_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.totalNewConnsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_throughput_bits_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.totalThroughputBitsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemAppPerformanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemAppPerformanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwConnsPerSec = this._fwConnsPerSec;
    }
    if (this._gifwConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gifwConnsPerSec = this._gifwConnsPerSec;
    }
    if (this._ipNatConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatConnsPerSec = this._ipNatConnsPerSec;
    }
    if (this._l4Bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Bandwidth = this._l4Bandwidth;
    }
    if (this._l4ConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ConnsPerSec = this._l4ConnsPerSec;
    }
    if (this._l7Bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Bandwidth = this._l7Bandwidth;
    }
    if (this._l7ConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7ConnsPerSec = this._l7ConnsPerSec;
    }
    if (this._l7TransPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7TransPerSec = this._l7TransPerSec;
    }
    if (this._servSslConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSslConnsPerSec = this._servSslConnsPerSec;
    }
    if (this._sslConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConnsPerSec = this._sslConnsPerSec;
    }
    if (this._totalCurrConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCurrConns = this._totalCurrConns;
    }
    if (this._totalNewConnsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNewConnsPerSec = this._totalNewConnsPerSec;
    }
    if (this._totalThroughputBitsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalThroughputBitsPerSec = this._totalThroughputBitsPerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemAppPerformanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fwConnsPerSec = undefined;
      this._gifwConnsPerSec = undefined;
      this._ipNatConnsPerSec = undefined;
      this._l4Bandwidth = undefined;
      this._l4ConnsPerSec = undefined;
      this._l7Bandwidth = undefined;
      this._l7ConnsPerSec = undefined;
      this._l7TransPerSec = undefined;
      this._servSslConnsPerSec = undefined;
      this._sslConnsPerSec = undefined;
      this._totalCurrConns = undefined;
      this._totalNewConnsPerSec = undefined;
      this._totalThroughputBitsPerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fwConnsPerSec = value.fwConnsPerSec;
      this._gifwConnsPerSec = value.gifwConnsPerSec;
      this._ipNatConnsPerSec = value.ipNatConnsPerSec;
      this._l4Bandwidth = value.l4Bandwidth;
      this._l4ConnsPerSec = value.l4ConnsPerSec;
      this._l7Bandwidth = value.l7Bandwidth;
      this._l7ConnsPerSec = value.l7ConnsPerSec;
      this._l7TransPerSec = value.l7TransPerSec;
      this._servSslConnsPerSec = value.servSslConnsPerSec;
      this._sslConnsPerSec = value.sslConnsPerSec;
      this._totalCurrConns = value.totalCurrConns;
      this._totalNewConnsPerSec = value.totalNewConnsPerSec;
      this._totalThroughputBitsPerSec = value.totalThroughputBitsPerSec;
    }
  }

  // fw_conns_per_sec - computed: false, optional: true, required: false
  private _fwConnsPerSec?: number; 
  public get fwConnsPerSec() {
    return this.getNumberAttribute('fw_conns_per_sec');
  }
  public set fwConnsPerSec(value: number) {
    this._fwConnsPerSec = value;
  }
  public resetFwConnsPerSec() {
    this._fwConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwConnsPerSecInput() {
    return this._fwConnsPerSec;
  }

  // gifw_conns_per_sec - computed: false, optional: true, required: false
  private _gifwConnsPerSec?: number; 
  public get gifwConnsPerSec() {
    return this.getNumberAttribute('gifw_conns_per_sec');
  }
  public set gifwConnsPerSec(value: number) {
    this._gifwConnsPerSec = value;
  }
  public resetGifwConnsPerSec() {
    this._gifwConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gifwConnsPerSecInput() {
    return this._gifwConnsPerSec;
  }

  // ip_nat_conns_per_sec - computed: false, optional: true, required: false
  private _ipNatConnsPerSec?: number; 
  public get ipNatConnsPerSec() {
    return this.getNumberAttribute('ip_nat_conns_per_sec');
  }
  public set ipNatConnsPerSec(value: number) {
    this._ipNatConnsPerSec = value;
  }
  public resetIpNatConnsPerSec() {
    this._ipNatConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatConnsPerSecInput() {
    return this._ipNatConnsPerSec;
  }

  // l4_bandwidth - computed: false, optional: true, required: false
  private _l4Bandwidth?: number; 
  public get l4Bandwidth() {
    return this.getNumberAttribute('l4_bandwidth');
  }
  public set l4Bandwidth(value: number) {
    this._l4Bandwidth = value;
  }
  public resetL4Bandwidth() {
    this._l4Bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4BandwidthInput() {
    return this._l4Bandwidth;
  }

  // l4_conns_per_sec - computed: false, optional: true, required: false
  private _l4ConnsPerSec?: number; 
  public get l4ConnsPerSec() {
    return this.getNumberAttribute('l4_conns_per_sec');
  }
  public set l4ConnsPerSec(value: number) {
    this._l4ConnsPerSec = value;
  }
  public resetL4ConnsPerSec() {
    this._l4ConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ConnsPerSecInput() {
    return this._l4ConnsPerSec;
  }

  // l7_bandwidth - computed: false, optional: true, required: false
  private _l7Bandwidth?: number; 
  public get l7Bandwidth() {
    return this.getNumberAttribute('l7_bandwidth');
  }
  public set l7Bandwidth(value: number) {
    this._l7Bandwidth = value;
  }
  public resetL7Bandwidth() {
    this._l7Bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7BandwidthInput() {
    return this._l7Bandwidth;
  }

  // l7_conns_per_sec - computed: false, optional: true, required: false
  private _l7ConnsPerSec?: number; 
  public get l7ConnsPerSec() {
    return this.getNumberAttribute('l7_conns_per_sec');
  }
  public set l7ConnsPerSec(value: number) {
    this._l7ConnsPerSec = value;
  }
  public resetL7ConnsPerSec() {
    this._l7ConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ConnsPerSecInput() {
    return this._l7ConnsPerSec;
  }

  // l7_trans_per_sec - computed: false, optional: true, required: false
  private _l7TransPerSec?: number; 
  public get l7TransPerSec() {
    return this.getNumberAttribute('l7_trans_per_sec');
  }
  public set l7TransPerSec(value: number) {
    this._l7TransPerSec = value;
  }
  public resetL7TransPerSec() {
    this._l7TransPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7TransPerSecInput() {
    return this._l7TransPerSec;
  }

  // serv_ssl_conns_per_sec - computed: false, optional: true, required: false
  private _servSslConnsPerSec?: number; 
  public get servSslConnsPerSec() {
    return this.getNumberAttribute('serv_ssl_conns_per_sec');
  }
  public set servSslConnsPerSec(value: number) {
    this._servSslConnsPerSec = value;
  }
  public resetServSslConnsPerSec() {
    this._servSslConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSslConnsPerSecInput() {
    return this._servSslConnsPerSec;
  }

  // ssl_conns_per_sec - computed: false, optional: true, required: false
  private _sslConnsPerSec?: number; 
  public get sslConnsPerSec() {
    return this.getNumberAttribute('ssl_conns_per_sec');
  }
  public set sslConnsPerSec(value: number) {
    this._sslConnsPerSec = value;
  }
  public resetSslConnsPerSec() {
    this._sslConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConnsPerSecInput() {
    return this._sslConnsPerSec;
  }

  // total_curr_conns - computed: false, optional: true, required: false
  private _totalCurrConns?: number; 
  public get totalCurrConns() {
    return this.getNumberAttribute('total_curr_conns');
  }
  public set totalCurrConns(value: number) {
    this._totalCurrConns = value;
  }
  public resetTotalCurrConns() {
    this._totalCurrConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCurrConnsInput() {
    return this._totalCurrConns;
  }

  // total_new_conns_per_sec - computed: false, optional: true, required: false
  private _totalNewConnsPerSec?: number; 
  public get totalNewConnsPerSec() {
    return this.getNumberAttribute('total_new_conns_per_sec');
  }
  public set totalNewConnsPerSec(value: number) {
    this._totalNewConnsPerSec = value;
  }
  public resetTotalNewConnsPerSec() {
    this._totalNewConnsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNewConnsPerSecInput() {
    return this._totalNewConnsPerSec;
  }

  // total_throughput_bits_per_sec - computed: false, optional: true, required: false
  private _totalThroughputBitsPerSec?: number; 
  public get totalThroughputBitsPerSec() {
    return this.getNumberAttribute('total_throughput_bits_per_sec');
  }
  public set totalThroughputBitsPerSec(value: number) {
    this._totalThroughputBitsPerSec = value;
  }
  public resetTotalThroughputBitsPerSec() {
    this._totalThroughputBitsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalThroughputBitsPerSecInput() {
    return this._totalThroughputBitsPerSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats thunder_system_app_performance_stats}
*/
export class DataThunderSystemAppPerformanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_app_performance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemAppPerformanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemAppPerformanceStats to import
  * @param importFromId The id of the existing DataThunderSystemAppPerformanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemAppPerformanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_app_performance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_app_performance_stats thunder_system_app_performance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemAppPerformanceStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemAppPerformanceStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_app_performance_stats',
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
  private _stats = new DataThunderSystemAppPerformanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemAppPerformanceStatsStats) {
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
      stats: dataThunderSystemAppPerformanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemAppPerformanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemAppPerformanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
