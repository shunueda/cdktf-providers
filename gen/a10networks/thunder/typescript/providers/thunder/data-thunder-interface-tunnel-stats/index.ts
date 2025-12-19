// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceTunnelStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#id DataThunderInterfaceTunnelStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tunnel interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#ifnum DataThunderInterfaceTunnelStats#ifnum}
  */
  readonly ifnum: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#stats DataThunderInterfaceTunnelStats#stats}
  */
  readonly stats?: DataThunderInterfaceTunnelStatsStats;
}
export interface DataThunderInterfaceTunnelStatsStats {
  /**
  * received error packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#num_rx_err_pkts DataThunderInterfaceTunnelStats#num_rx_err_pkts}
  */
  readonly numRxErrPkts?: number;
  /**
  * received packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#num_rx_pkts DataThunderInterfaceTunnelStats#num_rx_pkts}
  */
  readonly numRxPkts?: number;
  /**
  * received bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#num_total_rx_bytes DataThunderInterfaceTunnelStats#num_total_rx_bytes}
  */
  readonly numTotalRxBytes?: number;
  /**
  * sent bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#num_total_tx_bytes DataThunderInterfaceTunnelStats#num_total_tx_bytes}
  */
  readonly numTotalTxBytes?: number;
  /**
  * sent error packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#num_tx_err_pkts DataThunderInterfaceTunnelStats#num_tx_err_pkts}
  */
  readonly numTxErrPkts?: number;
  /**
  * sent packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#num_tx_pkts DataThunderInterfaceTunnelStats#num_tx_pkts}
  */
  readonly numTxPkts?: number;
  /**
  * Byte received rate bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#rate_byte_rcvd DataThunderInterfaceTunnelStats#rate_byte_rcvd}
  */
  readonly rateByteRcvd?: number;
  /**
  * Byte sent rate bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#rate_byte_sent DataThunderInterfaceTunnelStats#rate_byte_sent}
  */
  readonly rateByteSent?: number;
  /**
  * Packet received rate packets/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#rate_pkt_rcvd DataThunderInterfaceTunnelStats#rate_pkt_rcvd}
  */
  readonly ratePktRcvd?: number;
  /**
  * Packet sent rate packets/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#rate_pkt_sent DataThunderInterfaceTunnelStats#rate_pkt_sent}
  */
  readonly ratePktSent?: number;
}

export function dataThunderInterfaceTunnelStatsStatsToTerraform(struct?: DataThunderInterfaceTunnelStatsStatsOutputReference | DataThunderInterfaceTunnelStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_rx_err_pkts: cdktf.numberToTerraform(struct!.numRxErrPkts),
    num_rx_pkts: cdktf.numberToTerraform(struct!.numRxPkts),
    num_total_rx_bytes: cdktf.numberToTerraform(struct!.numTotalRxBytes),
    num_total_tx_bytes: cdktf.numberToTerraform(struct!.numTotalTxBytes),
    num_tx_err_pkts: cdktf.numberToTerraform(struct!.numTxErrPkts),
    num_tx_pkts: cdktf.numberToTerraform(struct!.numTxPkts),
    rate_byte_rcvd: cdktf.numberToTerraform(struct!.rateByteRcvd),
    rate_byte_sent: cdktf.numberToTerraform(struct!.rateByteSent),
    rate_pkt_rcvd: cdktf.numberToTerraform(struct!.ratePktRcvd),
    rate_pkt_sent: cdktf.numberToTerraform(struct!.ratePktSent),
  }
}


export function dataThunderInterfaceTunnelStatsStatsToHclTerraform(struct?: DataThunderInterfaceTunnelStatsStatsOutputReference | DataThunderInterfaceTunnelStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_rx_err_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numRxErrPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_rx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numRxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_total_rx_bytes: {
      value: cdktf.numberToHclTerraform(struct!.numTotalRxBytes),
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
    num_tx_err_pkts: {
      value: cdktf.numberToHclTerraform(struct!.numTxErrPkts),
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
    rate_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.rateByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.rateByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ratePktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.ratePktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceTunnelStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceTunnelStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRxErrPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRxErrPkts = this._numRxErrPkts;
    }
    if (this._numRxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRxPkts = this._numRxPkts;
    }
    if (this._numTotalRxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTotalRxBytes = this._numTotalRxBytes;
    }
    if (this._numTotalTxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTotalTxBytes = this._numTotalTxBytes;
    }
    if (this._numTxErrPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTxErrPkts = this._numTxErrPkts;
    }
    if (this._numTxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTxPkts = this._numTxPkts;
    }
    if (this._rateByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteRcvd = this._rateByteRcvd;
    }
    if (this._rateByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteSent = this._rateByteSent;
    }
    if (this._ratePktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktRcvd = this._ratePktRcvd;
    }
    if (this._ratePktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktSent = this._ratePktSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceTunnelStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRxErrPkts = undefined;
      this._numRxPkts = undefined;
      this._numTotalRxBytes = undefined;
      this._numTotalTxBytes = undefined;
      this._numTxErrPkts = undefined;
      this._numTxPkts = undefined;
      this._rateByteRcvd = undefined;
      this._rateByteSent = undefined;
      this._ratePktRcvd = undefined;
      this._ratePktSent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRxErrPkts = value.numRxErrPkts;
      this._numRxPkts = value.numRxPkts;
      this._numTotalRxBytes = value.numTotalRxBytes;
      this._numTotalTxBytes = value.numTotalTxBytes;
      this._numTxErrPkts = value.numTxErrPkts;
      this._numTxPkts = value.numTxPkts;
      this._rateByteRcvd = value.rateByteRcvd;
      this._rateByteSent = value.rateByteSent;
      this._ratePktRcvd = value.ratePktRcvd;
      this._ratePktSent = value.ratePktSent;
    }
  }

  // num_rx_err_pkts - computed: false, optional: true, required: false
  private _numRxErrPkts?: number; 
  public get numRxErrPkts() {
    return this.getNumberAttribute('num_rx_err_pkts');
  }
  public set numRxErrPkts(value: number) {
    this._numRxErrPkts = value;
  }
  public resetNumRxErrPkts() {
    this._numRxErrPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRxErrPktsInput() {
    return this._numRxErrPkts;
  }

  // num_rx_pkts - computed: false, optional: true, required: false
  private _numRxPkts?: number; 
  public get numRxPkts() {
    return this.getNumberAttribute('num_rx_pkts');
  }
  public set numRxPkts(value: number) {
    this._numRxPkts = value;
  }
  public resetNumRxPkts() {
    this._numRxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRxPktsInput() {
    return this._numRxPkts;
  }

  // num_total_rx_bytes - computed: false, optional: true, required: false
  private _numTotalRxBytes?: number; 
  public get numTotalRxBytes() {
    return this.getNumberAttribute('num_total_rx_bytes');
  }
  public set numTotalRxBytes(value: number) {
    this._numTotalRxBytes = value;
  }
  public resetNumTotalRxBytes() {
    this._numTotalRxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTotalRxBytesInput() {
    return this._numTotalRxBytes;
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

  // num_tx_err_pkts - computed: false, optional: true, required: false
  private _numTxErrPkts?: number; 
  public get numTxErrPkts() {
    return this.getNumberAttribute('num_tx_err_pkts');
  }
  public set numTxErrPkts(value: number) {
    this._numTxErrPkts = value;
  }
  public resetNumTxErrPkts() {
    this._numTxErrPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTxErrPktsInput() {
    return this._numTxErrPkts;
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

  // rate_byte_rcvd - computed: false, optional: true, required: false
  private _rateByteRcvd?: number; 
  public get rateByteRcvd() {
    return this.getNumberAttribute('rate_byte_rcvd');
  }
  public set rateByteRcvd(value: number) {
    this._rateByteRcvd = value;
  }
  public resetRateByteRcvd() {
    this._rateByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteRcvdInput() {
    return this._rateByteRcvd;
  }

  // rate_byte_sent - computed: false, optional: true, required: false
  private _rateByteSent?: number; 
  public get rateByteSent() {
    return this.getNumberAttribute('rate_byte_sent');
  }
  public set rateByteSent(value: number) {
    this._rateByteSent = value;
  }
  public resetRateByteSent() {
    this._rateByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteSentInput() {
    return this._rateByteSent;
  }

  // rate_pkt_rcvd - computed: false, optional: true, required: false
  private _ratePktRcvd?: number; 
  public get ratePktRcvd() {
    return this.getNumberAttribute('rate_pkt_rcvd');
  }
  public set ratePktRcvd(value: number) {
    this._ratePktRcvd = value;
  }
  public resetRatePktRcvd() {
    this._ratePktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktRcvdInput() {
    return this._ratePktRcvd;
  }

  // rate_pkt_sent - computed: false, optional: true, required: false
  private _ratePktSent?: number; 
  public get ratePktSent() {
    return this.getNumberAttribute('rate_pkt_sent');
  }
  public set ratePktSent(value: number) {
    this._ratePktSent = value;
  }
  public resetRatePktSent() {
    this._ratePktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktSentInput() {
    return this._ratePktSent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats thunder_interface_tunnel_stats}
*/
export class DataThunderInterfaceTunnelStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_tunnel_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceTunnelStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceTunnelStats to import
  * @param importFromId The id of the existing DataThunderInterfaceTunnelStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceTunnelStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_tunnel_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_tunnel_stats thunder_interface_tunnel_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceTunnelStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceTunnelStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_tunnel_stats',
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
  private _stats = new DataThunderInterfaceTunnelStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderInterfaceTunnelStatsStats) {
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
      stats: dataThunderInterfaceTunnelStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderInterfaceTunnelStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceTunnelStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
