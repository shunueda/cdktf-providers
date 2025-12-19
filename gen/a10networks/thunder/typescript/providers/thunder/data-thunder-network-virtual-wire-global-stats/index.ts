// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVirtualWireGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#id DataThunderNetworkVirtualWireGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#stats DataThunderNetworkVirtualWireGlobalStats#stats}
  */
  readonly stats?: DataThunderNetworkVirtualWireGlobalStatsStats;
}
export interface DataThunderNetworkVirtualWireGlobalStatsStats {
  /**
  * Packet drop due to health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#hc_pkt_drop DataThunderNetworkVirtualWireGlobalStats#hc_pkt_drop}
  */
  readonly hcPktDrop?: number;
  /**
  * MAC update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#mac_update DataThunderNetworkVirtualWireGlobalStats#mac_update}
  */
  readonly macUpdate?: number;
  /**
  * VLAN pair update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#vlan_pair_update DataThunderNetworkVirtualWireGlobalStats#vlan_pair_update}
  */
  readonly vlanPairUpdate?: number;
  /**
  * VLAN update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#vlan_update DataThunderNetworkVirtualWireGlobalStats#vlan_update}
  */
  readonly vlanUpdate?: number;
}

export function dataThunderNetworkVirtualWireGlobalStatsStatsToTerraform(struct?: DataThunderNetworkVirtualWireGlobalStatsStatsOutputReference | DataThunderNetworkVirtualWireGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hc_pkt_drop: cdktf.numberToTerraform(struct!.hcPktDrop),
    mac_update: cdktf.numberToTerraform(struct!.macUpdate),
    vlan_pair_update: cdktf.numberToTerraform(struct!.vlanPairUpdate),
    vlan_update: cdktf.numberToTerraform(struct!.vlanUpdate),
  }
}


export function dataThunderNetworkVirtualWireGlobalStatsStatsToHclTerraform(struct?: DataThunderNetworkVirtualWireGlobalStatsStatsOutputReference | DataThunderNetworkVirtualWireGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hc_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.hcPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_update: {
      value: cdktf.numberToHclTerraform(struct!.macUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_pair_update: {
      value: cdktf.numberToHclTerraform(struct!.vlanPairUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_update: {
      value: cdktf.numberToHclTerraform(struct!.vlanUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVirtualWireGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hcPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcPktDrop = this._hcPktDrop;
    }
    if (this._macUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.macUpdate = this._macUpdate;
    }
    if (this._vlanPairUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanPairUpdate = this._vlanPairUpdate;
    }
    if (this._vlanUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanUpdate = this._vlanUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hcPktDrop = undefined;
      this._macUpdate = undefined;
      this._vlanPairUpdate = undefined;
      this._vlanUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hcPktDrop = value.hcPktDrop;
      this._macUpdate = value.macUpdate;
      this._vlanPairUpdate = value.vlanPairUpdate;
      this._vlanUpdate = value.vlanUpdate;
    }
  }

  // hc_pkt_drop - computed: false, optional: true, required: false
  private _hcPktDrop?: number; 
  public get hcPktDrop() {
    return this.getNumberAttribute('hc_pkt_drop');
  }
  public set hcPktDrop(value: number) {
    this._hcPktDrop = value;
  }
  public resetHcPktDrop() {
    this._hcPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcPktDropInput() {
    return this._hcPktDrop;
  }

  // mac_update - computed: false, optional: true, required: false
  private _macUpdate?: number; 
  public get macUpdate() {
    return this.getNumberAttribute('mac_update');
  }
  public set macUpdate(value: number) {
    this._macUpdate = value;
  }
  public resetMacUpdate() {
    this._macUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macUpdateInput() {
    return this._macUpdate;
  }

  // vlan_pair_update - computed: false, optional: true, required: false
  private _vlanPairUpdate?: number; 
  public get vlanPairUpdate() {
    return this.getNumberAttribute('vlan_pair_update');
  }
  public set vlanPairUpdate(value: number) {
    this._vlanPairUpdate = value;
  }
  public resetVlanPairUpdate() {
    this._vlanPairUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPairUpdateInput() {
    return this._vlanPairUpdate;
  }

  // vlan_update - computed: false, optional: true, required: false
  private _vlanUpdate?: number; 
  public get vlanUpdate() {
    return this.getNumberAttribute('vlan_update');
  }
  public set vlanUpdate(value: number) {
    this._vlanUpdate = value;
  }
  public resetVlanUpdate() {
    this._vlanUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanUpdateInput() {
    return this._vlanUpdate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats thunder_network_virtual_wire_global_stats}
*/
export class DataThunderNetworkVirtualWireGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVirtualWireGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVirtualWireGlobalStats to import
  * @param importFromId The id of the existing DataThunderNetworkVirtualWireGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVirtualWireGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_global_stats thunder_network_virtual_wire_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVirtualWireGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVirtualWireGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_global_stats',
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
  private _stats = new DataThunderNetworkVirtualWireGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetworkVirtualWireGlobalStatsStats) {
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
      stats: dataThunderNetworkVirtualWireGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderNetworkVirtualWireGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVirtualWireGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
