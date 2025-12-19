// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceVeStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#id DataThunderInterfaceVeStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#ifnum DataThunderInterfaceVeStats#ifnum}
  */
  readonly ifnum: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#stats DataThunderInterfaceVeStats#stats}
  */
  readonly stats?: DataThunderInterfaceVeStatsStats;
}
export interface DataThunderInterfaceVeStatsStats {
  /**
  * Load Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#load_interval DataThunderInterfaceVeStats#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Received broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_broadcast_pkts DataThunderInterfaceVeStats#num_broadcast_pkts}
  */
  readonly numBroadcastPkts?: number;
  /**
  * Transmitted broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_broadcast_tx_pkts DataThunderInterfaceVeStats#num_broadcast_tx_pkts}
  */
  readonly numBroadcastTxPkts?: number;
  /**
  * Received multicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_multicast_pkts DataThunderInterfaceVeStats#num_multicast_pkts}
  */
  readonly numMulticastPkts?: number;
  /**
  * Transmitted multicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_multicast_tx_pkts DataThunderInterfaceVeStats#num_multicast_tx_pkts}
  */
  readonly numMulticastTxPkts?: number;
  /**
  * Input packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_pkts DataThunderInterfaceVeStats#num_pkts}
  */
  readonly numPkts?: number;
  /**
  * Input bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_total_bytes DataThunderInterfaceVeStats#num_total_bytes}
  */
  readonly numTotalBytes?: number;
  /**
  * Transmitted bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_total_tx_bytes DataThunderInterfaceVeStats#num_total_tx_bytes}
  */
  readonly numTotalTxBytes?: number;
  /**
  * Transmitted packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_tx_pkts DataThunderInterfaceVeStats#num_tx_pkts}
  */
  readonly numTxPkts?: number;
  /**
  * Received unicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_unicast_pkts DataThunderInterfaceVeStats#num_unicast_pkts}
  */
  readonly numUnicastPkts?: number;
  /**
  * Transmitted unicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#num_unicast_tx_pkts DataThunderInterfaceVeStats#num_unicast_tx_pkts}
  */
  readonly numUnicastTxPkts?: number;
  /**
  * Byte received rate bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#rate_byte_rcvd DataThunderInterfaceVeStats#rate_byte_rcvd}
  */
  readonly rateByteRcvd?: number;
  /**
  * Byte sent rate bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#rate_byte_sent DataThunderInterfaceVeStats#rate_byte_sent}
  */
  readonly rateByteSent?: number;
  /**
  * Packet received rate packets/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#rate_pkt_rcvd DataThunderInterfaceVeStats#rate_pkt_rcvd}
  */
  readonly ratePktRcvd?: number;
  /**
  * Packet sent rate packets/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#rate_pkt_sent DataThunderInterfaceVeStats#rate_pkt_sent}
  */
  readonly ratePktSent?: number;
}

export function dataThunderInterfaceVeStatsStatsToTerraform(struct?: DataThunderInterfaceVeStatsStatsOutputReference | DataThunderInterfaceVeStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_interval: cdktf.numberToTerraform(struct!.loadInterval),
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
    rate_byte_rcvd: cdktf.numberToTerraform(struct!.rateByteRcvd),
    rate_byte_sent: cdktf.numberToTerraform(struct!.rateByteSent),
    rate_pkt_rcvd: cdktf.numberToTerraform(struct!.ratePktRcvd),
    rate_pkt_sent: cdktf.numberToTerraform(struct!.ratePktSent),
  }
}


export function dataThunderInterfaceVeStatsStatsToHclTerraform(struct?: DataThunderInterfaceVeStatsStatsOutputReference | DataThunderInterfaceVeStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_interval: {
      value: cdktf.numberToHclTerraform(struct!.loadInterval),
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

export class DataThunderInterfaceVeStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceVeStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadInterval = this._loadInterval;
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

  public set internalValue(value: DataThunderInterfaceVeStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadInterval = undefined;
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
      this._rateByteRcvd = undefined;
      this._rateByteSent = undefined;
      this._ratePktRcvd = undefined;
      this._ratePktSent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadInterval = value.loadInterval;
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
      this._rateByteRcvd = value.rateByteRcvd;
      this._rateByteSent = value.rateByteSent;
      this._ratePktRcvd = value.ratePktRcvd;
      this._ratePktSent = value.ratePktSent;
    }
  }

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats thunder_interface_ve_stats}
*/
export class DataThunderInterfaceVeStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ve_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceVeStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceVeStats to import
  * @param importFromId The id of the existing DataThunderInterfaceVeStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceVeStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ve_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ve_stats thunder_interface_ve_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceVeStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceVeStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ve_stats',
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
  private _stats = new DataThunderInterfaceVeStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderInterfaceVeStatsStats) {
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
      stats: dataThunderInterfaceVeStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderInterfaceVeStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceVeStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
