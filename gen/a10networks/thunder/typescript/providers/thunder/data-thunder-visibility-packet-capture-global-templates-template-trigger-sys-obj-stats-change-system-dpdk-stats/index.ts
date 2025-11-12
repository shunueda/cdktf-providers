// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#id DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#name DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#uuid DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#trigger_stats_inc DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#trigger_stats_inc}
  */
  readonly triggerStatsInc?: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#trigger_stats_rate DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#trigger_stats_rate}
  */
  readonly triggerStatsRate?: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate;
}
export interface DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Total error packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#err_pkt_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#err_pkt_drop}
  */
  readonly errPktDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#io_ring_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#io_ring_drop}
  */
  readonly ioRingDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core Rx queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#io_rx_que_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#io_rx_que_drop}
  */
  readonly ioRxQueDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core TX queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#io_tx_que_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#io_tx_que_drop}
  */
  readonly ioTxQueDrop?: number;
  /**
  * Enable automatic packet-capture for Total packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#pkt_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#pkt_drop}
  */
  readonly pktDrop?: number;
  /**
  * Enable automatic packet-capture for Total packets link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#pkt_lnk_down_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#pkt_lnk_down_drop}
  */
  readonly pktLnkDownDrop?: number;
  /**
  * Enable automatic packet-capture for Total RX packet align error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_align_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_align_err}
  */
  readonly rxAlignErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet CRC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_crc_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_crc_err}
  */
  readonly rxCrcErr?: number;
  /**
  * Enable automatic packet-capture for Total Rx packet check-sum offload error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_csum_offload_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_csum_offload_err}
  */
  readonly rxCsumOffloadErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_err}
  */
  readonly rxErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet frame error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_frame_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_frame_err}
  */
  readonly rxFrameErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_len_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_len_err}
  */
  readonly rxLenErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet long length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_long_len_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_long_len_err}
  */
  readonly rxLongLenErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet miss error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_miss_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_miss_err}
  */
  readonly rxMissErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet no buffer error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_no_buff_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_no_buff_err}
  */
  readonly rxNoBuffErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet over error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_over_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_over_err}
  */
  readonly rxOverErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet short length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_short_len_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_short_len_err}
  */
  readonly rxShortLenErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet abort error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_abort_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_abort_err}
  */
  readonly txAbortErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packert carrier error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_carrier_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_carrier_err}
  */
  readonly txCarrierErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_drop}
  */
  readonly txDrop?: number;
  /**
  * Enable automatic packet-capture for Total TX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_err}
  */
  readonly txErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet fifo error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_fifo_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_fifo_err}
  */
  readonly txFifoErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet HBEAT error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_hbeat_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_hbeat_err}
  */
  readonly txHbeatErr?: number;
  /**
  * Enable automatic packet-capture for Total TX windows error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_windows_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_windows_err}
  */
  readonly txWindowsErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#uuid DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Total worker core link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#w_link_down_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#w_link_down_drop}
  */
  readonly wLinkDownDrop?: number;
  /**
  * Enable automatic packet-capture for Total worker core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#w_ring_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#w_ring_drop}
  */
  readonly wRingDrop?: number;
  /**
  * Enable automatic packet-capture for Total worker core queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#w_tx_que_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#w_tx_que_drop}
  */
  readonly wTxQueDrop?: number;
}

export function dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncToTerraform(struct?: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncOutputReference | DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc): any {
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
    uuid: cdktf.stringToTerraform(struct!.uuid),
    w_link_down_drop: cdktf.numberToTerraform(struct!.wLinkDownDrop),
    w_ring_drop: cdktf.numberToTerraform(struct!.wRingDrop),
    w_tx_que_drop: cdktf.numberToTerraform(struct!.wTxQueDrop),
  }
}


export function dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncToHclTerraform(struct?: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncOutputReference | DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc | undefined {
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
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

  public set internalValue(value: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc | undefined) {
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
      this._uuid = undefined;
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
      this._uuid = value.uuid;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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
export interface DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#duration DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total error packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#err_pkt_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#err_pkt_drop}
  */
  readonly errPktDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#io_ring_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#io_ring_drop}
  */
  readonly ioRingDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core Rx queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#io_rx_que_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#io_rx_que_drop}
  */
  readonly ioRxQueDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core TX queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#io_tx_que_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#io_tx_que_drop}
  */
  readonly ioTxQueDrop?: number;
  /**
  * Enable automatic packet-capture for Total packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#pkt_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#pkt_drop}
  */
  readonly pktDrop?: number;
  /**
  * Enable automatic packet-capture for Total packets link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#pkt_lnk_down_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#pkt_lnk_down_drop}
  */
  readonly pktLnkDownDrop?: number;
  /**
  * Enable automatic packet-capture for Total RX packet align error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_align_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_align_err}
  */
  readonly rxAlignErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet CRC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_crc_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_crc_err}
  */
  readonly rxCrcErr?: number;
  /**
  * Enable automatic packet-capture for Total Rx packet check-sum offload error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_csum_offload_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_csum_offload_err}
  */
  readonly rxCsumOffloadErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_err}
  */
  readonly rxErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet frame error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_frame_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_frame_err}
  */
  readonly rxFrameErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_len_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_len_err}
  */
  readonly rxLenErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet long length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_long_len_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_long_len_err}
  */
  readonly rxLongLenErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet miss error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_miss_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_miss_err}
  */
  readonly rxMissErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet no buffer error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_no_buff_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_no_buff_err}
  */
  readonly rxNoBuffErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet over error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_over_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_over_err}
  */
  readonly rxOverErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet short length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#rx_short_len_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#rx_short_len_err}
  */
  readonly rxShortLenErr?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#threshold_exceeded_by DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total TX packet abort error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_abort_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_abort_err}
  */
  readonly txAbortErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packert carrier error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_carrier_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_carrier_err}
  */
  readonly txCarrierErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_drop}
  */
  readonly txDrop?: number;
  /**
  * Enable automatic packet-capture for Total TX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_err}
  */
  readonly txErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet fifo error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_fifo_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_fifo_err}
  */
  readonly txFifoErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet HBEAT error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_hbeat_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_hbeat_err}
  */
  readonly txHbeatErr?: number;
  /**
  * Enable automatic packet-capture for Total TX windows error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#tx_windows_err DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#tx_windows_err}
  */
  readonly txWindowsErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#uuid DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Total worker core link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#w_link_down_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#w_link_down_drop}
  */
  readonly wLinkDownDrop?: number;
  /**
  * Enable automatic packet-capture for Total worker core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#w_ring_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#w_ring_drop}
  */
  readonly wRingDrop?: number;
  /**
  * Enable automatic packet-capture for Total worker core queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#w_tx_que_drop DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats#w_tx_que_drop}
  */
  readonly wTxQueDrop?: number;
}

export function dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateToTerraform(struct?: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateOutputReference | DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
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
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    tx_abort_err: cdktf.numberToTerraform(struct!.txAbortErr),
    tx_carrier_err: cdktf.numberToTerraform(struct!.txCarrierErr),
    tx_drop: cdktf.numberToTerraform(struct!.txDrop),
    tx_err: cdktf.numberToTerraform(struct!.txErr),
    tx_fifo_err: cdktf.numberToTerraform(struct!.txFifoErr),
    tx_hbeat_err: cdktf.numberToTerraform(struct!.txHbeatErr),
    tx_windows_err: cdktf.numberToTerraform(struct!.txWindowsErr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    w_link_down_drop: cdktf.numberToTerraform(struct!.wLinkDownDrop),
    w_ring_drop: cdktf.numberToTerraform(struct!.wRingDrop),
    w_tx_que_drop: cdktf.numberToTerraform(struct!.wTxQueDrop),
  }
}


export function dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateToHclTerraform(struct?: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateOutputReference | DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
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
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
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

  public set internalValue(value: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
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
      this._thresholdExceededBy = undefined;
      this._txAbortErr = undefined;
      this._txCarrierErr = undefined;
      this._txDrop = undefined;
      this._txErr = undefined;
      this._txFifoErr = undefined;
      this._txHbeatErr = undefined;
      this._txWindowsErr = undefined;
      this._uuid = undefined;
      this._wLinkDownDrop = undefined;
      this._wRingDrop = undefined;
      this._wTxQueDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
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
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._txAbortErr = value.txAbortErr;
      this._txCarrierErr = value.txCarrierErr;
      this._txDrop = value.txDrop;
      this._txErr = value.txErr;
      this._txFifoErr = value.txFifoErr;
      this._txHbeatErr = value.txHbeatErr;
      this._txWindowsErr = value.txWindowsErr;
      this._uuid = value.uuid;
      this._wLinkDownDrop = value.wLinkDownDrop;
      this._wRingDrop = value.wRingDrop;
      this._wTxQueDrop = value.wTxQueDrop;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats}
*/
export class DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats to import
  * @param importFromId The id of the existing DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats',
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
    this._name = config.name;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsInc) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_stats_inc: {
        value: dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: dataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsRateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
