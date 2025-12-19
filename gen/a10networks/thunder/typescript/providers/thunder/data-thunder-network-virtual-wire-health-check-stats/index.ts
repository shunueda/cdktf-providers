// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVirtualWireHealthCheckStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#id DataThunderNetworkVirtualWireHealthCheckStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VLAN ID, specify 1 for untagged traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#vlan DataThunderNetworkVirtualWireHealthCheckStats#vlan}
  */
  readonly vlan: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#stats DataThunderNetworkVirtualWireHealthCheckStats#stats}
  */
  readonly stats?: DataThunderNetworkVirtualWireHealthCheckStatsStats;
}
export interface DataThunderNetworkVirtualWireHealthCheckStatsStats {
  /**
  * Active Event Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#act_event DataThunderNetworkVirtualWireHealthCheckStats#act_event}
  */
  readonly actEvent?: number;
  /**
  * Packet Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#packet_count DataThunderNetworkVirtualWireHealthCheckStats#packet_count}
  */
  readonly packetCount?: number;
  /**
  * Standby Event Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#sby_event DataThunderNetworkVirtualWireHealthCheckStats#sby_event}
  */
  readonly sbyEvent?: number;
}

export function dataThunderNetworkVirtualWireHealthCheckStatsStatsToTerraform(struct?: DataThunderNetworkVirtualWireHealthCheckStatsStatsOutputReference | DataThunderNetworkVirtualWireHealthCheckStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act_event: cdktf.numberToTerraform(struct!.actEvent),
    packet_count: cdktf.numberToTerraform(struct!.packetCount),
    sby_event: cdktf.numberToTerraform(struct!.sbyEvent),
  }
}


export function dataThunderNetworkVirtualWireHealthCheckStatsStatsToHclTerraform(struct?: DataThunderNetworkVirtualWireHealthCheckStatsStatsOutputReference | DataThunderNetworkVirtualWireHealthCheckStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act_event: {
      value: cdktf.numberToHclTerraform(struct!.actEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_count: {
      value: cdktf.numberToHclTerraform(struct!.packetCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_event: {
      value: cdktf.numberToHclTerraform(struct!.sbyEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireHealthCheckStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVirtualWireHealthCheckStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.actEvent = this._actEvent;
    }
    if (this._packetCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCount = this._packetCount;
    }
    if (this._sbyEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbyEvent = this._sbyEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireHealthCheckStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actEvent = undefined;
      this._packetCount = undefined;
      this._sbyEvent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actEvent = value.actEvent;
      this._packetCount = value.packetCount;
      this._sbyEvent = value.sbyEvent;
    }
  }

  // act_event - computed: false, optional: true, required: false
  private _actEvent?: number; 
  public get actEvent() {
    return this.getNumberAttribute('act_event');
  }
  public set actEvent(value: number) {
    this._actEvent = value;
  }
  public resetActEvent() {
    this._actEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actEventInput() {
    return this._actEvent;
  }

  // packet_count - computed: false, optional: true, required: false
  private _packetCount?: number; 
  public get packetCount() {
    return this.getNumberAttribute('packet_count');
  }
  public set packetCount(value: number) {
    this._packetCount = value;
  }
  public resetPacketCount() {
    this._packetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCountInput() {
    return this._packetCount;
  }

  // sby_event - computed: false, optional: true, required: false
  private _sbyEvent?: number; 
  public get sbyEvent() {
    return this.getNumberAttribute('sby_event');
  }
  public set sbyEvent(value: number) {
    this._sbyEvent = value;
  }
  public resetSbyEvent() {
    this._sbyEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyEventInput() {
    return this._sbyEvent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats thunder_network_virtual_wire_health_check_stats}
*/
export class DataThunderNetworkVirtualWireHealthCheckStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_health_check_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVirtualWireHealthCheckStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVirtualWireHealthCheckStats to import
  * @param importFromId The id of the existing DataThunderNetworkVirtualWireHealthCheckStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVirtualWireHealthCheckStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_health_check_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_stats thunder_network_virtual_wire_health_check_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVirtualWireHealthCheckStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVirtualWireHealthCheckStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_health_check_stats',
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
    this._vlan = config.vlan;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderNetworkVirtualWireHealthCheckStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetworkVirtualWireHealthCheckStatsStats) {
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
      vlan: cdktf.numberToTerraform(this._vlan),
      stats: dataThunderNetworkVirtualWireHealthCheckStatsStatsToTerraform(this._stats.internalValue),
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
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderNetworkVirtualWireHealthCheckStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVirtualWireHealthCheckStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
