// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemDpdkStatsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#id DataThunderSystemDpdkStatsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#stats DataThunderSystemDpdkStatsStats#stats}
  */
  readonly stats?: DataThunderSystemDpdkStatsStatsStats;
}
export interface DataThunderSystemDpdkStatsStatsStats {
  /**
  * Total error packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#err_pkt_drop DataThunderSystemDpdkStatsStats#err_pkt_drop}
  */
  readonly errPktDrop?: number;
  /**
  * Total IO core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#io_ring_drop DataThunderSystemDpdkStatsStats#io_ring_drop}
  */
  readonly ioRingDrop?: number;
  /**
  * Total IO core Rx queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#io_rx_que_drop DataThunderSystemDpdkStatsStats#io_rx_que_drop}
  */
  readonly ioRxQueDrop?: number;
  /**
  * Total IO core TX queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#io_tx_que_drop DataThunderSystemDpdkStatsStats#io_tx_que_drop}
  */
  readonly ioTxQueDrop?: number;
  /**
  * Total packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#pkt_drop DataThunderSystemDpdkStatsStats#pkt_drop}
  */
  readonly pktDrop?: number;
  /**
  * Total packets link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#pkt_lnk_down_drop DataThunderSystemDpdkStatsStats#pkt_lnk_down_drop}
  */
  readonly pktLnkDownDrop?: number;
  /**
  * Total RX packet align error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_align_err DataThunderSystemDpdkStatsStats#rx_align_err}
  */
  readonly rxAlignErr?: number;
  /**
  * Total RX packet CRC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_crc_err DataThunderSystemDpdkStatsStats#rx_crc_err}
  */
  readonly rxCrcErr?: number;
  /**
  * Total Rx packet check-sum offload error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_csum_offload_err DataThunderSystemDpdkStatsStats#rx_csum_offload_err}
  */
  readonly rxCsumOffloadErr?: number;
  /**
  * Total RX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_err DataThunderSystemDpdkStatsStats#rx_err}
  */
  readonly rxErr?: number;
  /**
  * Total RX packet frame error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_frame_err DataThunderSystemDpdkStatsStats#rx_frame_err}
  */
  readonly rxFrameErr?: number;
  /**
  * Total RX packet length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_len_err DataThunderSystemDpdkStatsStats#rx_len_err}
  */
  readonly rxLenErr?: number;
  /**
  * Total RX packet long length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_long_len_err DataThunderSystemDpdkStatsStats#rx_long_len_err}
  */
  readonly rxLongLenErr?: number;
  /**
  * Total RX packet miss error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_miss_err DataThunderSystemDpdkStatsStats#rx_miss_err}
  */
  readonly rxMissErr?: number;
  /**
  * Total RX packet no buffer error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_no_buff_err DataThunderSystemDpdkStatsStats#rx_no_buff_err}
  */
  readonly rxNoBuffErr?: number;
  /**
  * Total RX packet over error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_over_err DataThunderSystemDpdkStatsStats#rx_over_err}
  */
  readonly rxOverErr?: number;
  /**
  * Total RX packet short length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#rx_short_len_err DataThunderSystemDpdkStatsStats#rx_short_len_err}
  */
  readonly rxShortLenErr?: number;
  /**
  * Total TX packet abort error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_abort_err DataThunderSystemDpdkStatsStats#tx_abort_err}
  */
  readonly txAbortErr?: number;
  /**
  * Total TX packert carrier error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_carrier_err DataThunderSystemDpdkStatsStats#tx_carrier_err}
  */
  readonly txCarrierErr?: number;
  /**
  * Total TX packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_drop DataThunderSystemDpdkStatsStats#tx_drop}
  */
  readonly txDrop?: number;
  /**
  * Total TX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_err DataThunderSystemDpdkStatsStats#tx_err}
  */
  readonly txErr?: number;
  /**
  * Total TX packet fifo error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_fifo_err DataThunderSystemDpdkStatsStats#tx_fifo_err}
  */
  readonly txFifoErr?: number;
  /**
  * Total TX packet HBEAT error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_hbeat_err DataThunderSystemDpdkStatsStats#tx_hbeat_err}
  */
  readonly txHbeatErr?: number;
  /**
  * Total TX windows error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#tx_windows_err DataThunderSystemDpdkStatsStats#tx_windows_err}
  */
  readonly txWindowsErr?: number;
  /**
  * Total worker core link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#w_link_down_drop DataThunderSystemDpdkStatsStats#w_link_down_drop}
  */
  readonly wLinkDownDrop?: number;
  /**
  * Total worker core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#w_ring_drop DataThunderSystemDpdkStatsStats#w_ring_drop}
  */
  readonly wRingDrop?: number;
  /**
  * Total worker core queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#w_tx_que_drop DataThunderSystemDpdkStatsStats#w_tx_que_drop}
  */
  readonly wTxQueDrop?: number;
}

export function dataThunderSystemDpdkStatsStatsStatsToTerraform(struct?: DataThunderSystemDpdkStatsStatsStatsOutputReference | DataThunderSystemDpdkStatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    err_pkt_drop: cdktf.numberToTerraform(struct!.errPktDrop),
    io_ring_drop: cdktf.numberToTerraform(struct!.ioRingDrop),
    io_rx_que_drop: cdktf.numberToTerraform(struct!.ioRxQueDrop),
    io_tx_que_drop: cdktf.numberToTerraform(struct!.ioTxQueDrop),
    pkt_drop: cdktf.numberToTerraform(struct!.pktDrop),
    pkt_lnk_down_drop: cdktf.numberToTerraform(struct!.pktLnkDownDrop),
    rx_align_err: cdktf.numberToTerraform(struct!.rxAlignErr),
    rx_crc_err: cdktf.numberToTerraform(struct!.rxCrcErr),
    rx_csum_offload_err: cdktf.numberToTerraform(struct!.rxCsumOffloadErr),
    rx_err: cdktf.numberToTerraform(struct!.rxErr),
    rx_frame_err: cdktf.numberToTerraform(struct!.rxFrameErr),
    rx_len_err: cdktf.numberToTerraform(struct!.rxLenErr),
    rx_long_len_err: cdktf.numberToTerraform(struct!.rxLongLenErr),
    rx_miss_err: cdktf.numberToTerraform(struct!.rxMissErr),
    rx_no_buff_err: cdktf.numberToTerraform(struct!.rxNoBuffErr),
    rx_over_err: cdktf.numberToTerraform(struct!.rxOverErr),
    rx_short_len_err: cdktf.numberToTerraform(struct!.rxShortLenErr),
    tx_abort_err: cdktf.numberToTerraform(struct!.txAbortErr),
    tx_carrier_err: cdktf.numberToTerraform(struct!.txCarrierErr),
    tx_drop: cdktf.numberToTerraform(struct!.txDrop),
    tx_err: cdktf.numberToTerraform(struct!.txErr),
    tx_fifo_err: cdktf.numberToTerraform(struct!.txFifoErr),
    tx_hbeat_err: cdktf.numberToTerraform(struct!.txHbeatErr),
    tx_windows_err: cdktf.numberToTerraform(struct!.txWindowsErr),
    w_link_down_drop: cdktf.numberToTerraform(struct!.wLinkDownDrop),
    w_ring_drop: cdktf.numberToTerraform(struct!.wRingDrop),
    w_tx_que_drop: cdktf.numberToTerraform(struct!.wTxQueDrop),
  }
}


export function dataThunderSystemDpdkStatsStatsStatsToHclTerraform(struct?: DataThunderSystemDpdkStatsStatsStatsOutputReference | DataThunderSystemDpdkStatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    err_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.errPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_ring_drop: {
      value: cdktf.numberToHclTerraform(struct!.ioRingDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_rx_que_drop: {
      value: cdktf.numberToHclTerraform(struct!.ioRxQueDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_tx_que_drop: {
      value: cdktf.numberToHclTerraform(struct!.ioTxQueDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_lnk_down_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktLnkDownDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_align_err: {
      value: cdktf.numberToHclTerraform(struct!.rxAlignErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_crc_err: {
      value: cdktf.numberToHclTerraform(struct!.rxCrcErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_csum_offload_err: {
      value: cdktf.numberToHclTerraform(struct!.rxCsumOffloadErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_err: {
      value: cdktf.numberToHclTerraform(struct!.rxErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_frame_err: {
      value: cdktf.numberToHclTerraform(struct!.rxFrameErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_len_err: {
      value: cdktf.numberToHclTerraform(struct!.rxLenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_long_len_err: {
      value: cdktf.numberToHclTerraform(struct!.rxLongLenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_miss_err: {
      value: cdktf.numberToHclTerraform(struct!.rxMissErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_no_buff_err: {
      value: cdktf.numberToHclTerraform(struct!.rxNoBuffErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_over_err: {
      value: cdktf.numberToHclTerraform(struct!.rxOverErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_short_len_err: {
      value: cdktf.numberToHclTerraform(struct!.rxShortLenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_abort_err: {
      value: cdktf.numberToHclTerraform(struct!.txAbortErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_carrier_err: {
      value: cdktf.numberToHclTerraform(struct!.txCarrierErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_drop: {
      value: cdktf.numberToHclTerraform(struct!.txDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_err: {
      value: cdktf.numberToHclTerraform(struct!.txErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_fifo_err: {
      value: cdktf.numberToHclTerraform(struct!.txFifoErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_hbeat_err: {
      value: cdktf.numberToHclTerraform(struct!.txHbeatErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_windows_err: {
      value: cdktf.numberToHclTerraform(struct!.txWindowsErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w_link_down_drop: {
      value: cdktf.numberToHclTerraform(struct!.wLinkDownDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w_ring_drop: {
      value: cdktf.numberToHclTerraform(struct!.wRingDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w_tx_que_drop: {
      value: cdktf.numberToHclTerraform(struct!.wTxQueDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemDpdkStatsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemDpdkStatsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.errPktDrop = this._errPktDrop;
    }
    if (this._ioRingDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioRingDrop = this._ioRingDrop;
    }
    if (this._ioRxQueDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioRxQueDrop = this._ioRxQueDrop;
    }
    if (this._ioTxQueDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioTxQueDrop = this._ioTxQueDrop;
    }
    if (this._pktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktDrop = this._pktDrop;
    }
    if (this._pktLnkDownDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktLnkDownDrop = this._pktLnkDownDrop;
    }
    if (this._rxAlignErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxAlignErr = this._rxAlignErr;
    }
    if (this._rxCrcErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxCrcErr = this._rxCrcErr;
    }
    if (this._rxCsumOffloadErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxCsumOffloadErr = this._rxCsumOffloadErr;
    }
    if (this._rxErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxErr = this._rxErr;
    }
    if (this._rxFrameErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxFrameErr = this._rxFrameErr;
    }
    if (this._rxLenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxLenErr = this._rxLenErr;
    }
    if (this._rxLongLenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxLongLenErr = this._rxLongLenErr;
    }
    if (this._rxMissErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxMissErr = this._rxMissErr;
    }
    if (this._rxNoBuffErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxNoBuffErr = this._rxNoBuffErr;
    }
    if (this._rxOverErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxOverErr = this._rxOverErr;
    }
    if (this._rxShortLenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxShortLenErr = this._rxShortLenErr;
    }
    if (this._txAbortErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.txAbortErr = this._txAbortErr;
    }
    if (this._txCarrierErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.txCarrierErr = this._txCarrierErr;
    }
    if (this._txDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDrop = this._txDrop;
    }
    if (this._txErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.txErr = this._txErr;
    }
    if (this._txFifoErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.txFifoErr = this._txFifoErr;
    }
    if (this._txHbeatErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.txHbeatErr = this._txHbeatErr;
    }
    if (this._txWindowsErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.txWindowsErr = this._txWindowsErr;
    }
    if (this._wLinkDownDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wLinkDownDrop = this._wLinkDownDrop;
    }
    if (this._wRingDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wRingDrop = this._wRingDrop;
    }
    if (this._wTxQueDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wTxQueDrop = this._wTxQueDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemDpdkStatsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errPktDrop = undefined;
      this._ioRingDrop = undefined;
      this._ioRxQueDrop = undefined;
      this._ioTxQueDrop = undefined;
      this._pktDrop = undefined;
      this._pktLnkDownDrop = undefined;
      this._rxAlignErr = undefined;
      this._rxCrcErr = undefined;
      this._rxCsumOffloadErr = undefined;
      this._rxErr = undefined;
      this._rxFrameErr = undefined;
      this._rxLenErr = undefined;
      this._rxLongLenErr = undefined;
      this._rxMissErr = undefined;
      this._rxNoBuffErr = undefined;
      this._rxOverErr = undefined;
      this._rxShortLenErr = undefined;
      this._txAbortErr = undefined;
      this._txCarrierErr = undefined;
      this._txDrop = undefined;
      this._txErr = undefined;
      this._txFifoErr = undefined;
      this._txHbeatErr = undefined;
      this._txWindowsErr = undefined;
      this._wLinkDownDrop = undefined;
      this._wRingDrop = undefined;
      this._wTxQueDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errPktDrop = value.errPktDrop;
      this._ioRingDrop = value.ioRingDrop;
      this._ioRxQueDrop = value.ioRxQueDrop;
      this._ioTxQueDrop = value.ioTxQueDrop;
      this._pktDrop = value.pktDrop;
      this._pktLnkDownDrop = value.pktLnkDownDrop;
      this._rxAlignErr = value.rxAlignErr;
      this._rxCrcErr = value.rxCrcErr;
      this._rxCsumOffloadErr = value.rxCsumOffloadErr;
      this._rxErr = value.rxErr;
      this._rxFrameErr = value.rxFrameErr;
      this._rxLenErr = value.rxLenErr;
      this._rxLongLenErr = value.rxLongLenErr;
      this._rxMissErr = value.rxMissErr;
      this._rxNoBuffErr = value.rxNoBuffErr;
      this._rxOverErr = value.rxOverErr;
      this._rxShortLenErr = value.rxShortLenErr;
      this._txAbortErr = value.txAbortErr;
      this._txCarrierErr = value.txCarrierErr;
      this._txDrop = value.txDrop;
      this._txErr = value.txErr;
      this._txFifoErr = value.txFifoErr;
      this._txHbeatErr = value.txHbeatErr;
      this._txWindowsErr = value.txWindowsErr;
      this._wLinkDownDrop = value.wLinkDownDrop;
      this._wRingDrop = value.wRingDrop;
      this._wTxQueDrop = value.wTxQueDrop;
    }
  }

  // err_pkt_drop - computed: false, optional: true, required: false
  private _errPktDrop?: number; 
  public get errPktDrop() {
    return this.getNumberAttribute('err_pkt_drop');
  }
  public set errPktDrop(value: number) {
    this._errPktDrop = value;
  }
  public resetErrPktDrop() {
    this._errPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errPktDropInput() {
    return this._errPktDrop;
  }

  // io_ring_drop - computed: false, optional: true, required: false
  private _ioRingDrop?: number; 
  public get ioRingDrop() {
    return this.getNumberAttribute('io_ring_drop');
  }
  public set ioRingDrop(value: number) {
    this._ioRingDrop = value;
  }
  public resetIoRingDrop() {
    this._ioRingDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioRingDropInput() {
    return this._ioRingDrop;
  }

  // io_rx_que_drop - computed: false, optional: true, required: false
  private _ioRxQueDrop?: number; 
  public get ioRxQueDrop() {
    return this.getNumberAttribute('io_rx_que_drop');
  }
  public set ioRxQueDrop(value: number) {
    this._ioRxQueDrop = value;
  }
  public resetIoRxQueDrop() {
    this._ioRxQueDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioRxQueDropInput() {
    return this._ioRxQueDrop;
  }

  // io_tx_que_drop - computed: false, optional: true, required: false
  private _ioTxQueDrop?: number; 
  public get ioTxQueDrop() {
    return this.getNumberAttribute('io_tx_que_drop');
  }
  public set ioTxQueDrop(value: number) {
    this._ioTxQueDrop = value;
  }
  public resetIoTxQueDrop() {
    this._ioTxQueDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioTxQueDropInput() {
    return this._ioTxQueDrop;
  }

  // pkt_drop - computed: false, optional: true, required: false
  private _pktDrop?: number; 
  public get pktDrop() {
    return this.getNumberAttribute('pkt_drop');
  }
  public set pktDrop(value: number) {
    this._pktDrop = value;
  }
  public resetPktDrop() {
    this._pktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktDropInput() {
    return this._pktDrop;
  }

  // pkt_lnk_down_drop - computed: false, optional: true, required: false
  private _pktLnkDownDrop?: number; 
  public get pktLnkDownDrop() {
    return this.getNumberAttribute('pkt_lnk_down_drop');
  }
  public set pktLnkDownDrop(value: number) {
    this._pktLnkDownDrop = value;
  }
  public resetPktLnkDownDrop() {
    this._pktLnkDownDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktLnkDownDropInput() {
    return this._pktLnkDownDrop;
  }

  // rx_align_err - computed: false, optional: true, required: false
  private _rxAlignErr?: number; 
  public get rxAlignErr() {
    return this.getNumberAttribute('rx_align_err');
  }
  public set rxAlignErr(value: number) {
    this._rxAlignErr = value;
  }
  public resetRxAlignErr() {
    this._rxAlignErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxAlignErrInput() {
    return this._rxAlignErr;
  }

  // rx_crc_err - computed: false, optional: true, required: false
  private _rxCrcErr?: number; 
  public get rxCrcErr() {
    return this.getNumberAttribute('rx_crc_err');
  }
  public set rxCrcErr(value: number) {
    this._rxCrcErr = value;
  }
  public resetRxCrcErr() {
    this._rxCrcErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxCrcErrInput() {
    return this._rxCrcErr;
  }

  // rx_csum_offload_err - computed: false, optional: true, required: false
  private _rxCsumOffloadErr?: number; 
  public get rxCsumOffloadErr() {
    return this.getNumberAttribute('rx_csum_offload_err');
  }
  public set rxCsumOffloadErr(value: number) {
    this._rxCsumOffloadErr = value;
  }
  public resetRxCsumOffloadErr() {
    this._rxCsumOffloadErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxCsumOffloadErrInput() {
    return this._rxCsumOffloadErr;
  }

  // rx_err - computed: false, optional: true, required: false
  private _rxErr?: number; 
  public get rxErr() {
    return this.getNumberAttribute('rx_err');
  }
  public set rxErr(value: number) {
    this._rxErr = value;
  }
  public resetRxErr() {
    this._rxErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxErrInput() {
    return this._rxErr;
  }

  // rx_frame_err - computed: false, optional: true, required: false
  private _rxFrameErr?: number; 
  public get rxFrameErr() {
    return this.getNumberAttribute('rx_frame_err');
  }
  public set rxFrameErr(value: number) {
    this._rxFrameErr = value;
  }
  public resetRxFrameErr() {
    this._rxFrameErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxFrameErrInput() {
    return this._rxFrameErr;
  }

  // rx_len_err - computed: false, optional: true, required: false
  private _rxLenErr?: number; 
  public get rxLenErr() {
    return this.getNumberAttribute('rx_len_err');
  }
  public set rxLenErr(value: number) {
    this._rxLenErr = value;
  }
  public resetRxLenErr() {
    this._rxLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxLenErrInput() {
    return this._rxLenErr;
  }

  // rx_long_len_err - computed: false, optional: true, required: false
  private _rxLongLenErr?: number; 
  public get rxLongLenErr() {
    return this.getNumberAttribute('rx_long_len_err');
  }
  public set rxLongLenErr(value: number) {
    this._rxLongLenErr = value;
  }
  public resetRxLongLenErr() {
    this._rxLongLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxLongLenErrInput() {
    return this._rxLongLenErr;
  }

  // rx_miss_err - computed: false, optional: true, required: false
  private _rxMissErr?: number; 
  public get rxMissErr() {
    return this.getNumberAttribute('rx_miss_err');
  }
  public set rxMissErr(value: number) {
    this._rxMissErr = value;
  }
  public resetRxMissErr() {
    this._rxMissErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxMissErrInput() {
    return this._rxMissErr;
  }

  // rx_no_buff_err - computed: false, optional: true, required: false
  private _rxNoBuffErr?: number; 
  public get rxNoBuffErr() {
    return this.getNumberAttribute('rx_no_buff_err');
  }
  public set rxNoBuffErr(value: number) {
    this._rxNoBuffErr = value;
  }
  public resetRxNoBuffErr() {
    this._rxNoBuffErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxNoBuffErrInput() {
    return this._rxNoBuffErr;
  }

  // rx_over_err - computed: false, optional: true, required: false
  private _rxOverErr?: number; 
  public get rxOverErr() {
    return this.getNumberAttribute('rx_over_err');
  }
  public set rxOverErr(value: number) {
    this._rxOverErr = value;
  }
  public resetRxOverErr() {
    this._rxOverErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxOverErrInput() {
    return this._rxOverErr;
  }

  // rx_short_len_err - computed: false, optional: true, required: false
  private _rxShortLenErr?: number; 
  public get rxShortLenErr() {
    return this.getNumberAttribute('rx_short_len_err');
  }
  public set rxShortLenErr(value: number) {
    this._rxShortLenErr = value;
  }
  public resetRxShortLenErr() {
    this._rxShortLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxShortLenErrInput() {
    return this._rxShortLenErr;
  }

  // tx_abort_err - computed: false, optional: true, required: false
  private _txAbortErr?: number; 
  public get txAbortErr() {
    return this.getNumberAttribute('tx_abort_err');
  }
  public set txAbortErr(value: number) {
    this._txAbortErr = value;
  }
  public resetTxAbortErr() {
    this._txAbortErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txAbortErrInput() {
    return this._txAbortErr;
  }

  // tx_carrier_err - computed: false, optional: true, required: false
  private _txCarrierErr?: number; 
  public get txCarrierErr() {
    return this.getNumberAttribute('tx_carrier_err');
  }
  public set txCarrierErr(value: number) {
    this._txCarrierErr = value;
  }
  public resetTxCarrierErr() {
    this._txCarrierErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txCarrierErrInput() {
    return this._txCarrierErr;
  }

  // tx_drop - computed: false, optional: true, required: false
  private _txDrop?: number; 
  public get txDrop() {
    return this.getNumberAttribute('tx_drop');
  }
  public set txDrop(value: number) {
    this._txDrop = value;
  }
  public resetTxDrop() {
    this._txDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDropInput() {
    return this._txDrop;
  }

  // tx_err - computed: false, optional: true, required: false
  private _txErr?: number; 
  public get txErr() {
    return this.getNumberAttribute('tx_err');
  }
  public set txErr(value: number) {
    this._txErr = value;
  }
  public resetTxErr() {
    this._txErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txErrInput() {
    return this._txErr;
  }

  // tx_fifo_err - computed: false, optional: true, required: false
  private _txFifoErr?: number; 
  public get txFifoErr() {
    return this.getNumberAttribute('tx_fifo_err');
  }
  public set txFifoErr(value: number) {
    this._txFifoErr = value;
  }
  public resetTxFifoErr() {
    this._txFifoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txFifoErrInput() {
    return this._txFifoErr;
  }

  // tx_hbeat_err - computed: false, optional: true, required: false
  private _txHbeatErr?: number; 
  public get txHbeatErr() {
    return this.getNumberAttribute('tx_hbeat_err');
  }
  public set txHbeatErr(value: number) {
    this._txHbeatErr = value;
  }
  public resetTxHbeatErr() {
    this._txHbeatErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txHbeatErrInput() {
    return this._txHbeatErr;
  }

  // tx_windows_err - computed: false, optional: true, required: false
  private _txWindowsErr?: number; 
  public get txWindowsErr() {
    return this.getNumberAttribute('tx_windows_err');
  }
  public set txWindowsErr(value: number) {
    this._txWindowsErr = value;
  }
  public resetTxWindowsErr() {
    this._txWindowsErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txWindowsErrInput() {
    return this._txWindowsErr;
  }

  // w_link_down_drop - computed: false, optional: true, required: false
  private _wLinkDownDrop?: number; 
  public get wLinkDownDrop() {
    return this.getNumberAttribute('w_link_down_drop');
  }
  public set wLinkDownDrop(value: number) {
    this._wLinkDownDrop = value;
  }
  public resetWLinkDownDrop() {
    this._wLinkDownDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wLinkDownDropInput() {
    return this._wLinkDownDrop;
  }

  // w_ring_drop - computed: false, optional: true, required: false
  private _wRingDrop?: number; 
  public get wRingDrop() {
    return this.getNumberAttribute('w_ring_drop');
  }
  public set wRingDrop(value: number) {
    this._wRingDrop = value;
  }
  public resetWRingDrop() {
    this._wRingDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wRingDropInput() {
    return this._wRingDrop;
  }

  // w_tx_que_drop - computed: false, optional: true, required: false
  private _wTxQueDrop?: number; 
  public get wTxQueDrop() {
    return this.getNumberAttribute('w_tx_que_drop');
  }
  public set wTxQueDrop(value: number) {
    this._wTxQueDrop = value;
  }
  public resetWTxQueDrop() {
    this._wTxQueDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wTxQueDropInput() {
    return this._wTxQueDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats thunder_system_dpdk_stats_stats}
*/
export class DataThunderSystemDpdkStatsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_dpdk_stats_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemDpdkStatsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemDpdkStatsStats to import
  * @param importFromId The id of the existing DataThunderSystemDpdkStatsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemDpdkStatsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_dpdk_stats_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_dpdk_stats_stats thunder_system_dpdk_stats_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemDpdkStatsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemDpdkStatsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_dpdk_stats_stats',
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
  private _stats = new DataThunderSystemDpdkStatsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemDpdkStatsStatsStats) {
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
      stats: dataThunderSystemDpdkStatsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemDpdkStatsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemDpdkStatsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
