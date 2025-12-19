// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceTrunkStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#id DataThunderInterfaceTrunkStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#ifnum DataThunderInterfaceTrunkStats#ifnum}
  */
  readonly ifnum: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#stats DataThunderInterfaceTrunkStats#stats}
  */
  readonly stats?: DataThunderInterfaceTrunkStatsStats;
}
export interface DataThunderInterfaceTrunkStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#dropped_dis_rx_pkts DataThunderInterfaceTrunkStats#dropped_dis_rx_pkts}
  */
  readonly droppedDisRxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#dropped_dis_tx_pkts DataThunderInterfaceTrunkStats#dropped_dis_tx_pkts}
  */
  readonly droppedDisTxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#dropped_rx_pkts DataThunderInterfaceTrunkStats#dropped_rx_pkts}
  */
  readonly droppedRxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#dropped_tx_pkts DataThunderInterfaceTrunkStats#dropped_tx_pkts}
  */
  readonly droppedTxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_broadcast_pkts DataThunderInterfaceTrunkStats#num_broadcast_pkts}
  */
  readonly numBroadcastPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_broadcast_tx_pkts DataThunderInterfaceTrunkStats#num_broadcast_tx_pkts}
  */
  readonly numBroadcastTxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_multicast_pkts DataThunderInterfaceTrunkStats#num_multicast_pkts}
  */
  readonly numMulticastPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_multicast_tx_pkts DataThunderInterfaceTrunkStats#num_multicast_tx_pkts}
  */
  readonly numMulticastTxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_pkts DataThunderInterfaceTrunkStats#num_pkts}
  */
  readonly numPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_total_bytes DataThunderInterfaceTrunkStats#num_total_bytes}
  */
  readonly numTotalBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_total_tx_bytes DataThunderInterfaceTrunkStats#num_total_tx_bytes}
  */
  readonly numTotalTxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_tx_pkts DataThunderInterfaceTrunkStats#num_tx_pkts}
  */
  readonly numTxPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_unicast_pkts DataThunderInterfaceTrunkStats#num_unicast_pkts}
  */
  readonly numUnicastPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#num_unicast_tx_pkts DataThunderInterfaceTrunkStats#num_unicast_tx_pkts}
  */
  readonly numUnicastTxPkts?: number;
}

export function dataThunderInterfaceTrunkStatsStatsToTerraform(struct?: DataThunderInterfaceTrunkStatsStatsOutputReference | DataThunderInterfaceTrunkStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dropped_dis_rx_pkts: cdktf.numberToTerraform(struct!.droppedDisRxPkts),
    dropped_dis_tx_pkts: cdktf.numberToTerraform(struct!.droppedDisTxPkts),
    dropped_rx_pkts: cdktf.numberToTerraform(struct!.droppedRxPkts),
    dropped_tx_pkts: cdktf.numberToTerraform(struct!.droppedTxPkts),
    num_broadcast_pkts: cdktf.numberToTerraform(struct!.numBroadcastPkts),
    num_broadcast_tx_pkts: cdktf.numberToTerraform(struct!.numBroadcastTxPkts),
    num_multicast_pkts: cdktf.numberToTerraform(struct!.numMulticastPkts),
    num_multicast_tx_pkts: cdktf.numberToTerraform(struct!.numMulticastTxPkts),
    num_pkts: cdktf.numberToTerraform(struct!.numPkts),
    num_total_bytes: cdktf.numberToTerraform(struct!.numTotalBytes),
    num_total_tx_bytes: cdktf.numberToTerraform(struct!.numTotalTxBytes),
    num_tx_pkts: cdktf.numberToTerraform(struct!.numTxPkts),
    num_unicast_pkts: cdktf.numberToTerraform(struct!.numUnicastPkts),
    num_unicast_tx_pkts: cdktf.numberToTerraform(struct!.numUnicastTxPkts),
  }
}


export function dataThunderInterfaceTrunkStatsStatsToHclTerraform(struct?: DataThunderInterfaceTrunkStatsStatsOutputReference | DataThunderInterfaceTrunkStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dropped_dis_rx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.droppedDisRxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dropped_dis_tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.droppedDisTxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dropped_rx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.droppedRxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dropped_tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.droppedTxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_broadcast_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numBroadcastPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_broadcast_tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numBroadcastTxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_multicast_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numMulticastPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_multicast_tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numMulticastTxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_total_bytes: {
      value: cdktf.numberToHclTerraform(struct!.numTotalBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_total_tx_bytes: {
      value: cdktf.numberToHclTerraform(struct!.numTotalTxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numTxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_unicast_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numUnicastPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_unicast_tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numUnicastTxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceTrunkStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceTrunkStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._droppedDisRxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedDisRxPkts = this._droppedDisRxPkts;
    }
    if (this._droppedDisTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedDisTxPkts = this._droppedDisTxPkts;
    }
    if (this._droppedRxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedRxPkts = this._droppedRxPkts;
    }
    if (this._droppedTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedTxPkts = this._droppedTxPkts;
    }
    if (this._numBroadcastPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBroadcastPkts = this._numBroadcastPkts;
    }
    if (this._numBroadcastTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBroadcastTxPkts = this._numBroadcastTxPkts;
    }
    if (this._numMulticastPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMulticastPkts = this._numMulticastPkts;
    }
    if (this._numMulticastTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMulticastTxPkts = this._numMulticastTxPkts;
    }
    if (this._numPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPkts = this._numPkts;
    }
    if (this._numTotalBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTotalBytes = this._numTotalBytes;
    }
    if (this._numTotalTxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTotalTxBytes = this._numTotalTxBytes;
    }
    if (this._numTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTxPkts = this._numTxPkts;
    }
    if (this._numUnicastPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numUnicastPkts = this._numUnicastPkts;
    }
    if (this._numUnicastTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numUnicastTxPkts = this._numUnicastTxPkts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceTrunkStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._droppedDisRxPkts = undefined;
      this._droppedDisTxPkts = undefined;
      this._droppedRxPkts = undefined;
      this._droppedTxPkts = undefined;
      this._numBroadcastPkts = undefined;
      this._numBroadcastTxPkts = undefined;
      this._numMulticastPkts = undefined;
      this._numMulticastTxPkts = undefined;
      this._numPkts = undefined;
      this._numTotalBytes = undefined;
      this._numTotalTxBytes = undefined;
      this._numTxPkts = undefined;
      this._numUnicastPkts = undefined;
      this._numUnicastTxPkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._droppedDisRxPkts = value.droppedDisRxPkts;
      this._droppedDisTxPkts = value.droppedDisTxPkts;
      this._droppedRxPkts = value.droppedRxPkts;
      this._droppedTxPkts = value.droppedTxPkts;
      this._numBroadcastPkts = value.numBroadcastPkts;
      this._numBroadcastTxPkts = value.numBroadcastTxPkts;
      this._numMulticastPkts = value.numMulticastPkts;
      this._numMulticastTxPkts = value.numMulticastTxPkts;
      this._numPkts = value.numPkts;
      this._numTotalBytes = value.numTotalBytes;
      this._numTotalTxBytes = value.numTotalTxBytes;
      this._numTxPkts = value.numTxPkts;
      this._numUnicastPkts = value.numUnicastPkts;
      this._numUnicastTxPkts = value.numUnicastTxPkts;
    }
  }

  // dropped_dis_rx_pkts - computed: false, optional: true, required: false
  private _droppedDisRxPkts?: number; 
  public get droppedDisRxPkts() {
    return this.getNumberAttribute('dropped_dis_rx_pkts');
  }
  public set droppedDisRxPkts(value: number) {
    this._droppedDisRxPkts = value;
  }
  public resetDroppedDisRxPkts() {
    this._droppedDisRxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedDisRxPktsInput() {
    return this._droppedDisRxPkts;
  }

  // dropped_dis_tx_pkts - computed: false, optional: true, required: false
  private _droppedDisTxPkts?: number; 
  public get droppedDisTxPkts() {
    return this.getNumberAttribute('dropped_dis_tx_pkts');
  }
  public set droppedDisTxPkts(value: number) {
    this._droppedDisTxPkts = value;
  }
  public resetDroppedDisTxPkts() {
    this._droppedDisTxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedDisTxPktsInput() {
    return this._droppedDisTxPkts;
  }

  // dropped_rx_pkts - computed: false, optional: true, required: false
  private _droppedRxPkts?: number; 
  public get droppedRxPkts() {
    return this.getNumberAttribute('dropped_rx_pkts');
  }
  public set droppedRxPkts(value: number) {
    this._droppedRxPkts = value;
  }
  public resetDroppedRxPkts() {
    this._droppedRxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedRxPktsInput() {
    return this._droppedRxPkts;
  }

  // dropped_tx_pkts - computed: false, optional: true, required: false
  private _droppedTxPkts?: number; 
  public get droppedTxPkts() {
    return this.getNumberAttribute('dropped_tx_pkts');
  }
  public set droppedTxPkts(value: number) {
    this._droppedTxPkts = value;
  }
  public resetDroppedTxPkts() {
    this._droppedTxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedTxPktsInput() {
    return this._droppedTxPkts;
  }

  // num_broadcast_pkts - computed: false, optional: true, required: false
  private _numBroadcastPkts?: number; 
  public get numBroadcastPkts() {
    return this.getNumberAttribute('num_broadcast_pkts');
  }
  public set numBroadcastPkts(value: number) {
    this._numBroadcastPkts = value;
  }
  public resetNumBroadcastPkts() {
    this._numBroadcastPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBroadcastPktsInput() {
    return this._numBroadcastPkts;
  }

  // num_broadcast_tx_pkts - computed: false, optional: true, required: false
  private _numBroadcastTxPkts?: number; 
  public get numBroadcastTxPkts() {
    return this.getNumberAttribute('num_broadcast_tx_pkts');
  }
  public set numBroadcastTxPkts(value: number) {
    this._numBroadcastTxPkts = value;
  }
  public resetNumBroadcastTxPkts() {
    this._numBroadcastTxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBroadcastTxPktsInput() {
    return this._numBroadcastTxPkts;
  }

  // num_multicast_pkts - computed: false, optional: true, required: false
  private _numMulticastPkts?: number; 
  public get numMulticastPkts() {
    return this.getNumberAttribute('num_multicast_pkts');
  }
  public set numMulticastPkts(value: number) {
    this._numMulticastPkts = value;
  }
  public resetNumMulticastPkts() {
    this._numMulticastPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMulticastPktsInput() {
    return this._numMulticastPkts;
  }

  // num_multicast_tx_pkts - computed: false, optional: true, required: false
  private _numMulticastTxPkts?: number; 
  public get numMulticastTxPkts() {
    return this.getNumberAttribute('num_multicast_tx_pkts');
  }
  public set numMulticastTxPkts(value: number) {
    this._numMulticastTxPkts = value;
  }
  public resetNumMulticastTxPkts() {
    this._numMulticastTxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMulticastTxPktsInput() {
    return this._numMulticastTxPkts;
  }

  // num_pkts - computed: false, optional: true, required: false
  private _numPkts?: number; 
  public get numPkts() {
    return this.getNumberAttribute('num_pkts');
  }
  public set numPkts(value: number) {
    this._numPkts = value;
  }
  public resetNumPkts() {
    this._numPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPktsInput() {
    return this._numPkts;
  }

  // num_total_bytes - computed: false, optional: true, required: false
  private _numTotalBytes?: number; 
  public get numTotalBytes() {
    return this.getNumberAttribute('num_total_bytes');
  }
  public set numTotalBytes(value: number) {
    this._numTotalBytes = value;
  }
  public resetNumTotalBytes() {
    this._numTotalBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTotalBytesInput() {
    return this._numTotalBytes;
  }

  // num_total_tx_bytes - computed: false, optional: true, required: false
  private _numTotalTxBytes?: number; 
  public get numTotalTxBytes() {
    return this.getNumberAttribute('num_total_tx_bytes');
  }
  public set numTotalTxBytes(value: number) {
    this._numTotalTxBytes = value;
  }
  public resetNumTotalTxBytes() {
    this._numTotalTxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTotalTxBytesInput() {
    return this._numTotalTxBytes;
  }

  // num_tx_pkts - computed: false, optional: true, required: false
  private _numTxPkts?: number; 
  public get numTxPkts() {
    return this.getNumberAttribute('num_tx_pkts');
  }
  public set numTxPkts(value: number) {
    this._numTxPkts = value;
  }
  public resetNumTxPkts() {
    this._numTxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTxPktsInput() {
    return this._numTxPkts;
  }

  // num_unicast_pkts - computed: false, optional: true, required: false
  private _numUnicastPkts?: number; 
  public get numUnicastPkts() {
    return this.getNumberAttribute('num_unicast_pkts');
  }
  public set numUnicastPkts(value: number) {
    this._numUnicastPkts = value;
  }
  public resetNumUnicastPkts() {
    this._numUnicastPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUnicastPktsInput() {
    return this._numUnicastPkts;
  }

  // num_unicast_tx_pkts - computed: false, optional: true, required: false
  private _numUnicastTxPkts?: number; 
  public get numUnicastTxPkts() {
    return this.getNumberAttribute('num_unicast_tx_pkts');
  }
  public set numUnicastTxPkts(value: number) {
    this._numUnicastTxPkts = value;
  }
  public resetNumUnicastTxPkts() {
    this._numUnicastTxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUnicastTxPktsInput() {
    return this._numUnicastTxPkts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats thunder_interface_trunk_stats}
*/
export class DataThunderInterfaceTrunkStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceTrunkStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceTrunkStats to import
  * @param importFromId The id of the existing DataThunderInterfaceTrunkStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceTrunkStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_stats thunder_interface_trunk_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceTrunkStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceTrunkStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk_stats',
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
    this._ifnum = config.ifnum;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderInterfaceTrunkStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderInterfaceTrunkStatsStats) {
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
      ifnum: cdktf.numberToTerraform(this._ifnum),
      stats: dataThunderInterfaceTrunkStatsStatsToTerraform(this._stats.internalValue),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderInterfaceTrunkStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceTrunkStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
