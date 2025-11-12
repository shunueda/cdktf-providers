// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVlanStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#id DataThunderNetworkVlanStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VLAN number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#vlan_num DataThunderNetworkVlanStats#vlan_num}
  */
  readonly vlanNum: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#stats DataThunderNetworkVlanStats#stats}
  */
  readonly stats?: DataThunderNetworkVlanStatsStats;
}
export interface DataThunderNetworkVlanStatsStats {
  /**
  * Broadcast counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#broadcast_count DataThunderNetworkVlanStats#broadcast_count}
  */
  readonly broadcastCount?: number;
  /**
  * IP Multicast counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#ip_multicast_count DataThunderNetworkVlanStats#ip_multicast_count}
  */
  readonly ipMulticastCount?: number;
  /**
  * Mac Movement counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#mac_movement_count DataThunderNetworkVlanStats#mac_movement_count}
  */
  readonly macMovementCount?: number;
  /**
  * Multicast counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#multicast_count DataThunderNetworkVlanStats#multicast_count}
  */
  readonly multicastCount?: number;
  /**
  * SVLAN Partition switched counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#shared_vlan_partition_switched_counter DataThunderNetworkVlanStats#shared_vlan_partition_switched_counter}
  */
  readonly sharedVlanPartitionSwitchedCounter?: number;
  /**
  * Unknown Unicast counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#unknown_unicast_count DataThunderNetworkVlanStats#unknown_unicast_count}
  */
  readonly unknownUnicastCount?: number;
}

export function dataThunderNetworkVlanStatsStatsToTerraform(struct?: DataThunderNetworkVlanStatsStatsOutputReference | DataThunderNetworkVlanStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_count: cdktf.numberToTerraform(struct!.broadcastCount),
    ip_multicast_count: cdktf.numberToTerraform(struct!.ipMulticastCount),
    mac_movement_count: cdktf.numberToTerraform(struct!.macMovementCount),
    multicast_count: cdktf.numberToTerraform(struct!.multicastCount),
    shared_vlan_partition_switched_counter: cdktf.numberToTerraform(struct!.sharedVlanPartitionSwitchedCounter),
    unknown_unicast_count: cdktf.numberToTerraform(struct!.unknownUnicastCount),
  }
}


export function dataThunderNetworkVlanStatsStatsToHclTerraform(struct?: DataThunderNetworkVlanStatsStatsOutputReference | DataThunderNetworkVlanStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_count: {
      value: cdktf.numberToHclTerraform(struct!.broadcastCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_multicast_count: {
      value: cdktf.numberToHclTerraform(struct!.ipMulticastCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_movement_count: {
      value: cdktf.numberToHclTerraform(struct!.macMovementCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_count: {
      value: cdktf.numberToHclTerraform(struct!.multicastCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_vlan_partition_switched_counter: {
      value: cdktf.numberToHclTerraform(struct!.sharedVlanPartitionSwitchedCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_unicast_count: {
      value: cdktf.numberToHclTerraform(struct!.unknownUnicastCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastCount = this._broadcastCount;
    }
    if (this._ipMulticastCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMulticastCount = this._ipMulticastCount;
    }
    if (this._macMovementCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.macMovementCount = this._macMovementCount;
    }
    if (this._multicastCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastCount = this._multicastCount;
    }
    if (this._sharedVlanPartitionSwitchedCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedVlanPartitionSwitchedCounter = this._sharedVlanPartitionSwitchedCounter;
    }
    if (this._unknownUnicastCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownUnicastCount = this._unknownUnicastCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcastCount = undefined;
      this._ipMulticastCount = undefined;
      this._macMovementCount = undefined;
      this._multicastCount = undefined;
      this._sharedVlanPartitionSwitchedCounter = undefined;
      this._unknownUnicastCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcastCount = value.broadcastCount;
      this._ipMulticastCount = value.ipMulticastCount;
      this._macMovementCount = value.macMovementCount;
      this._multicastCount = value.multicastCount;
      this._sharedVlanPartitionSwitchedCounter = value.sharedVlanPartitionSwitchedCounter;
      this._unknownUnicastCount = value.unknownUnicastCount;
    }
  }

  // broadcast_count - computed: false, optional: true, required: false
  private _broadcastCount?: number; 
  public get broadcastCount() {
    return this.getNumberAttribute('broadcast_count');
  }
  public set broadcastCount(value: number) {
    this._broadcastCount = value;
  }
  public resetBroadcastCount() {
    this._broadcastCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastCountInput() {
    return this._broadcastCount;
  }

  // ip_multicast_count - computed: false, optional: true, required: false
  private _ipMulticastCount?: number; 
  public get ipMulticastCount() {
    return this.getNumberAttribute('ip_multicast_count');
  }
  public set ipMulticastCount(value: number) {
    this._ipMulticastCount = value;
  }
  public resetIpMulticastCount() {
    this._ipMulticastCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMulticastCountInput() {
    return this._ipMulticastCount;
  }

  // mac_movement_count - computed: false, optional: true, required: false
  private _macMovementCount?: number; 
  public get macMovementCount() {
    return this.getNumberAttribute('mac_movement_count');
  }
  public set macMovementCount(value: number) {
    this._macMovementCount = value;
  }
  public resetMacMovementCount() {
    this._macMovementCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macMovementCountInput() {
    return this._macMovementCount;
  }

  // multicast_count - computed: false, optional: true, required: false
  private _multicastCount?: number; 
  public get multicastCount() {
    return this.getNumberAttribute('multicast_count');
  }
  public set multicastCount(value: number) {
    this._multicastCount = value;
  }
  public resetMulticastCount() {
    this._multicastCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastCountInput() {
    return this._multicastCount;
  }

  // shared_vlan_partition_switched_counter - computed: false, optional: true, required: false
  private _sharedVlanPartitionSwitchedCounter?: number; 
  public get sharedVlanPartitionSwitchedCounter() {
    return this.getNumberAttribute('shared_vlan_partition_switched_counter');
  }
  public set sharedVlanPartitionSwitchedCounter(value: number) {
    this._sharedVlanPartitionSwitchedCounter = value;
  }
  public resetSharedVlanPartitionSwitchedCounter() {
    this._sharedVlanPartitionSwitchedCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVlanPartitionSwitchedCounterInput() {
    return this._sharedVlanPartitionSwitchedCounter;
  }

  // unknown_unicast_count - computed: false, optional: true, required: false
  private _unknownUnicastCount?: number; 
  public get unknownUnicastCount() {
    return this.getNumberAttribute('unknown_unicast_count');
  }
  public set unknownUnicastCount(value: number) {
    this._unknownUnicastCount = value;
  }
  public resetUnknownUnicastCount() {
    this._unknownUnicastCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastCountInput() {
    return this._unknownUnicastCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats thunder_network_vlan_stats}
*/
export class DataThunderNetworkVlanStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_vlan_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVlanStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVlanStats to import
  * @param importFromId The id of the existing DataThunderNetworkVlanStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVlanStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_vlan_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_stats thunder_network_vlan_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVlanStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVlanStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_vlan_stats',
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
    this._vlanNum = config.vlanNum;
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

  // vlan_num - computed: false, optional: false, required: true
  private _vlanNum?: number; 
  public get vlanNum() {
    return this.getNumberAttribute('vlan_num');
  }
  public set vlanNum(value: number) {
    this._vlanNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNumInput() {
    return this._vlanNum;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderNetworkVlanStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetworkVlanStatsStats) {
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
      vlan_num: cdktf.numberToTerraform(this._vlanNum),
      stats: dataThunderNetworkVlanStatsStatsToTerraform(this._stats.internalValue),
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
      vlan_num: {
        value: cdktf.numberToHclTerraform(this._vlanNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderNetworkVlanStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVlanStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
