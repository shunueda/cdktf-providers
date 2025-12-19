// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6GlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats#id DataThunderCgnv6GlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats#stats DataThunderCgnv6GlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6GlobalStatsStats;
}
export interface DataThunderCgnv6GlobalStatsStats {
  /**
  * Total ICMP ports allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats#icmp_total_ports_allocated DataThunderCgnv6GlobalStats#icmp_total_ports_allocated}
  */
  readonly icmpTotalPortsAllocated?: number;
  /**
  * Total TCP ports allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats#tcp_total_ports_allocated DataThunderCgnv6GlobalStats#tcp_total_ports_allocated}
  */
  readonly tcpTotalPortsAllocated?: number;
  /**
  * Total UDP ports allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats#udp_total_ports_allocated DataThunderCgnv6GlobalStats#udp_total_ports_allocated}
  */
  readonly udpTotalPortsAllocated?: number;
}

export function dataThunderCgnv6GlobalStatsStatsToTerraform(struct?: DataThunderCgnv6GlobalStatsStatsOutputReference | DataThunderCgnv6GlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_total_ports_allocated: cdktf.numberToTerraform(struct!.icmpTotalPortsAllocated),
    tcp_total_ports_allocated: cdktf.numberToTerraform(struct!.tcpTotalPortsAllocated),
    udp_total_ports_allocated: cdktf.numberToTerraform(struct!.udpTotalPortsAllocated),
  }
}


export function dataThunderCgnv6GlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6GlobalStatsStatsOutputReference | DataThunderCgnv6GlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_total_ports_allocated: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalPortsAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_ports_allocated: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalPortsAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_ports_allocated: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalPortsAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6GlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6GlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpTotalPortsAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalPortsAllocated = this._icmpTotalPortsAllocated;
    }
    if (this._tcpTotalPortsAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalPortsAllocated = this._tcpTotalPortsAllocated;
    }
    if (this._udpTotalPortsAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalPortsAllocated = this._udpTotalPortsAllocated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6GlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpTotalPortsAllocated = undefined;
      this._tcpTotalPortsAllocated = undefined;
      this._udpTotalPortsAllocated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpTotalPortsAllocated = value.icmpTotalPortsAllocated;
      this._tcpTotalPortsAllocated = value.tcpTotalPortsAllocated;
      this._udpTotalPortsAllocated = value.udpTotalPortsAllocated;
    }
  }

  // icmp_total_ports_allocated - computed: false, optional: true, required: false
  private _icmpTotalPortsAllocated?: number; 
  public get icmpTotalPortsAllocated() {
    return this.getNumberAttribute('icmp_total_ports_allocated');
  }
  public set icmpTotalPortsAllocated(value: number) {
    this._icmpTotalPortsAllocated = value;
  }
  public resetIcmpTotalPortsAllocated() {
    this._icmpTotalPortsAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalPortsAllocatedInput() {
    return this._icmpTotalPortsAllocated;
  }

  // tcp_total_ports_allocated - computed: false, optional: true, required: false
  private _tcpTotalPortsAllocated?: number; 
  public get tcpTotalPortsAllocated() {
    return this.getNumberAttribute('tcp_total_ports_allocated');
  }
  public set tcpTotalPortsAllocated(value: number) {
    this._tcpTotalPortsAllocated = value;
  }
  public resetTcpTotalPortsAllocated() {
    this._tcpTotalPortsAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalPortsAllocatedInput() {
    return this._tcpTotalPortsAllocated;
  }

  // udp_total_ports_allocated - computed: false, optional: true, required: false
  private _udpTotalPortsAllocated?: number; 
  public get udpTotalPortsAllocated() {
    return this.getNumberAttribute('udp_total_ports_allocated');
  }
  public set udpTotalPortsAllocated(value: number) {
    this._udpTotalPortsAllocated = value;
  }
  public resetUdpTotalPortsAllocated() {
    this._udpTotalPortsAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalPortsAllocatedInput() {
    return this._udpTotalPortsAllocated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats thunder_cgnv6_global_stats}
*/
export class DataThunderCgnv6GlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6GlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6GlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6GlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6GlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_global_stats thunder_cgnv6_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6GlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6GlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_global_stats',
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
  private _stats = new DataThunderCgnv6GlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6GlobalStatsStats) {
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
      stats: dataThunderCgnv6GlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6GlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6GlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
