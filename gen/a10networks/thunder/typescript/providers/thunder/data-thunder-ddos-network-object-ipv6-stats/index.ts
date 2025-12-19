// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosNetworkObjectIpv6StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#id DataThunderDdosNetworkObjectIpv6Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ObjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#object_name DataThunderDdosNetworkObjectIpv6Stats#object_name}
  */
  readonly objectName: string;
  /**
  * IPV6 Subnet, supported prefix range is from 40 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#subnet_ipv6_addr DataThunderDdosNetworkObjectIpv6Stats#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#stats DataThunderDdosNetworkObjectIpv6Stats#stats}
  */
  readonly stats?: DataThunderDdosNetworkObjectIpv6StatsStats;
}
export interface DataThunderDdosNetworkObjectIpv6StatsStats {
  /**
  * B(bits)PS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#bit_rate DataThunderDdosNetworkObjectIpv6Stats#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * PPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#packet_rate DataThunderDdosNetworkObjectIpv6Stats#packet_rate}
  */
  readonly packetRate?: number;
}

export function dataThunderDdosNetworkObjectIpv6StatsStatsToTerraform(struct?: DataThunderDdosNetworkObjectIpv6StatsStatsOutputReference | DataThunderDdosNetworkObjectIpv6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
  }
}


export function dataThunderDdosNetworkObjectIpv6StatsStatsToHclTerraform(struct?: DataThunderDdosNetworkObjectIpv6StatsStatsOutputReference | DataThunderDdosNetworkObjectIpv6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectIpv6StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectIpv6StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectIpv6StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitRate = undefined;
      this._packetRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitRate = value.bitRate;
      this._packetRate = value.packetRate;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats thunder_ddos_network_object_ipv6_stats}
*/
export class DataThunderDdosNetworkObjectIpv6Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_ipv6_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosNetworkObjectIpv6Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosNetworkObjectIpv6Stats to import
  * @param importFromId The id of the existing DataThunderDdosNetworkObjectIpv6Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosNetworkObjectIpv6Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_ipv6_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_ipv6_stats thunder_ddos_network_object_ipv6_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosNetworkObjectIpv6StatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosNetworkObjectIpv6StatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_ipv6_stats',
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
    this._objectName = config.objectName;
    this._subnetIpv6Addr = config.subnetIpv6Addr;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // subnet_ipv6_addr - computed: false, optional: false, required: true
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosNetworkObjectIpv6StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosNetworkObjectIpv6StatsStats) {
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
      object_name: cdktf.stringToTerraform(this._objectName),
      subnet_ipv6_addr: cdktf.stringToTerraform(this._subnetIpv6Addr),
      stats: dataThunderDdosNetworkObjectIpv6StatsStatsToTerraform(this._stats.internalValue),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._subnetIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderDdosNetworkObjectIpv6StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNetworkObjectIpv6StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
