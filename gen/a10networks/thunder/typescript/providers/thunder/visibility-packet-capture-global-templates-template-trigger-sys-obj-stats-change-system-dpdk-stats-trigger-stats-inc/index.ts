// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Total error packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#err_pkt_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#err_pkt_drop}
  */
  readonly errPktDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total IO core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#io_ring_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#io_ring_drop}
  */
  readonly ioRingDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core Rx queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#io_rx_que_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#io_rx_que_drop}
  */
  readonly ioRxQueDrop?: number;
  /**
  * Enable automatic packet-capture for Total IO core TX queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#io_tx_que_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#io_tx_que_drop}
  */
  readonly ioTxQueDrop?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Total packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#pkt_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#pkt_drop}
  */
  readonly pktDrop?: number;
  /**
  * Enable automatic packet-capture for Total packets link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#pkt_lnk_down_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#pkt_lnk_down_drop}
  */
  readonly pktLnkDownDrop?: number;
  /**
  * Enable automatic packet-capture for Total RX packet align error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_align_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_align_err}
  */
  readonly rxAlignErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet CRC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_crc_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_crc_err}
  */
  readonly rxCrcErr?: number;
  /**
  * Enable automatic packet-capture for Total Rx packet check-sum offload error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_csum_offload_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_csum_offload_err}
  */
  readonly rxCsumOffloadErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_err}
  */
  readonly rxErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet frame error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_frame_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_frame_err}
  */
  readonly rxFrameErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_len_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_len_err}
  */
  readonly rxLenErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet long length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_long_len_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_long_len_err}
  */
  readonly rxLongLenErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet miss error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_miss_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_miss_err}
  */
  readonly rxMissErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet no buffer error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_no_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_no_buff_err}
  */
  readonly rxNoBuffErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet over error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_over_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_over_err}
  */
  readonly rxOverErr?: number;
  /**
  * Enable automatic packet-capture for Total RX packet short length error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#rx_short_len_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#rx_short_len_err}
  */
  readonly rxShortLenErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet abort error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_abort_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_abort_err}
  */
  readonly txAbortErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packert carrier error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_carrier_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_carrier_err}
  */
  readonly txCarrierErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_drop}
  */
  readonly txDrop?: number;
  /**
  * Enable automatic packet-capture for Total TX packet error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_err}
  */
  readonly txErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet fifo error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_fifo_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_fifo_err}
  */
  readonly txFifoErr?: number;
  /**
  * Enable automatic packet-capture for Total TX packet HBEAT error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_hbeat_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_hbeat_err}
  */
  readonly txHbeatErr?: number;
  /**
  * Enable automatic packet-capture for Total TX windows error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#tx_windows_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#tx_windows_err}
  */
  readonly txWindowsErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Total worker core link down drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#w_link_down_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#w_link_down_drop}
  */
  readonly wLinkDownDrop?: number;
  /**
  * Enable automatic packet-capture for Total worker core ring drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#w_ring_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#w_ring_drop}
  */
  readonly wRingDrop?: number;
  /**
  * Enable automatic packet-capture for Total worker core queue drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#w_tx_que_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA#w_tx_que_drop}
  */
  readonly wTxQueDrop?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemDpdkStatsTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_dpdk_stats_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._errPktDrop = config.errPktDrop;
    this._id = config.id;
    this._ioRingDrop = config.ioRingDrop;
    this._ioRxQueDrop = config.ioRxQueDrop;
    this._ioTxQueDrop = config.ioTxQueDrop;
    this._name = config.name;
    this._pktDrop = config.pktDrop;
    this._pktLnkDownDrop = config.pktLnkDownDrop;
    this._rxAlignErr = config.rxAlignErr;
    this._rxCrcErr = config.rxCrcErr;
    this._rxCsumOffloadErr = config.rxCsumOffloadErr;
    this._rxErr = config.rxErr;
    this._rxFrameErr = config.rxFrameErr;
    this._rxLenErr = config.rxLenErr;
    this._rxLongLenErr = config.rxLongLenErr;
    this._rxMissErr = config.rxMissErr;
    this._rxNoBuffErr = config.rxNoBuffErr;
    this._rxOverErr = config.rxOverErr;
    this._rxShortLenErr = config.rxShortLenErr;
    this._txAbortErr = config.txAbortErr;
    this._txCarrierErr = config.txCarrierErr;
    this._txDrop = config.txDrop;
    this._txErr = config.txErr;
    this._txFifoErr = config.txFifoErr;
    this._txHbeatErr = config.txHbeatErr;
    this._txWindowsErr = config.txWindowsErr;
    this._uuid = config.uuid;
    this._wLinkDownDrop = config.wLinkDownDrop;
    this._wRingDrop = config.wRingDrop;
    this._wTxQueDrop = config.wTxQueDrop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      err_pkt_drop: cdktf.numberToTerraform(this._errPktDrop),
      id: cdktf.stringToTerraform(this._id),
      io_ring_drop: cdktf.numberToTerraform(this._ioRingDrop),
      io_rx_que_drop: cdktf.numberToTerraform(this._ioRxQueDrop),
      io_tx_que_drop: cdktf.numberToTerraform(this._ioTxQueDrop),
      name: cdktf.stringToTerraform(this._name),
      pkt_drop: cdktf.numberToTerraform(this._pktDrop),
      pkt_lnk_down_drop: cdktf.numberToTerraform(this._pktLnkDownDrop),
      rx_align_err: cdktf.numberToTerraform(this._rxAlignErr),
      rx_crc_err: cdktf.numberToTerraform(this._rxCrcErr),
      rx_csum_offload_err: cdktf.numberToTerraform(this._rxCsumOffloadErr),
      rx_err: cdktf.numberToTerraform(this._rxErr),
      rx_frame_err: cdktf.numberToTerraform(this._rxFrameErr),
      rx_len_err: cdktf.numberToTerraform(this._rxLenErr),
      rx_long_len_err: cdktf.numberToTerraform(this._rxLongLenErr),
      rx_miss_err: cdktf.numberToTerraform(this._rxMissErr),
      rx_no_buff_err: cdktf.numberToTerraform(this._rxNoBuffErr),
      rx_over_err: cdktf.numberToTerraform(this._rxOverErr),
      rx_short_len_err: cdktf.numberToTerraform(this._rxShortLenErr),
      tx_abort_err: cdktf.numberToTerraform(this._txAbortErr),
      tx_carrier_err: cdktf.numberToTerraform(this._txCarrierErr),
      tx_drop: cdktf.numberToTerraform(this._txDrop),
      tx_err: cdktf.numberToTerraform(this._txErr),
      tx_fifo_err: cdktf.numberToTerraform(this._txFifoErr),
      tx_hbeat_err: cdktf.numberToTerraform(this._txHbeatErr),
      tx_windows_err: cdktf.numberToTerraform(this._txWindowsErr),
      uuid: cdktf.stringToTerraform(this._uuid),
      w_link_down_drop: cdktf.numberToTerraform(this._wLinkDownDrop),
      w_ring_drop: cdktf.numberToTerraform(this._wRingDrop),
      w_tx_que_drop: cdktf.numberToTerraform(this._wTxQueDrop),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      err_pkt_drop: {
        value: cdktf.numberToHclTerraform(this._errPktDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      io_ring_drop: {
        value: cdktf.numberToHclTerraform(this._ioRingDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      io_rx_que_drop: {
        value: cdktf.numberToHclTerraform(this._ioRxQueDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      io_tx_que_drop: {
        value: cdktf.numberToHclTerraform(this._ioTxQueDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkt_drop: {
        value: cdktf.numberToHclTerraform(this._pktDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_lnk_down_drop: {
        value: cdktf.numberToHclTerraform(this._pktLnkDownDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_align_err: {
        value: cdktf.numberToHclTerraform(this._rxAlignErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_crc_err: {
        value: cdktf.numberToHclTerraform(this._rxCrcErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_csum_offload_err: {
        value: cdktf.numberToHclTerraform(this._rxCsumOffloadErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_err: {
        value: cdktf.numberToHclTerraform(this._rxErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_frame_err: {
        value: cdktf.numberToHclTerraform(this._rxFrameErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_len_err: {
        value: cdktf.numberToHclTerraform(this._rxLenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_long_len_err: {
        value: cdktf.numberToHclTerraform(this._rxLongLenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_miss_err: {
        value: cdktf.numberToHclTerraform(this._rxMissErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_no_buff_err: {
        value: cdktf.numberToHclTerraform(this._rxNoBuffErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_over_err: {
        value: cdktf.numberToHclTerraform(this._rxOverErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_short_len_err: {
        value: cdktf.numberToHclTerraform(this._rxShortLenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_abort_err: {
        value: cdktf.numberToHclTerraform(this._txAbortErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_carrier_err: {
        value: cdktf.numberToHclTerraform(this._txCarrierErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_drop: {
        value: cdktf.numberToHclTerraform(this._txDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_err: {
        value: cdktf.numberToHclTerraform(this._txErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_fifo_err: {
        value: cdktf.numberToHclTerraform(this._txFifoErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_hbeat_err: {
        value: cdktf.numberToHclTerraform(this._txHbeatErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_windows_err: {
        value: cdktf.numberToHclTerraform(this._txWindowsErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      w_link_down_drop: {
        value: cdktf.numberToHclTerraform(this._wLinkDownDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      w_ring_drop: {
        value: cdktf.numberToHclTerraform(this._wRingDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      w_tx_que_drop: {
        value: cdktf.numberToHclTerraform(this._wTxQueDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
