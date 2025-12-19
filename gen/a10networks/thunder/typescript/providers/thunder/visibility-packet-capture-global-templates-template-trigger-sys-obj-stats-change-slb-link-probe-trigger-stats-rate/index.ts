// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Entry Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_entry_create_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Enable automatic packet-capture for Entry Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_entry_create_oom VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Enable automatic packet-capture for Entry Insert Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_entry_insert_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Enable automatic packet-capture for Error allocating L4 session for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_l4_sess_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_l4_sess_alloc}
  */
  readonly errL4SessAlloc?: number;
  /**
  * Enable automatic packet-capture for Error in initiating TCP connection for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_probe_tcp_conn_send VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_probe_tcp_conn_send}
  */
  readonly errProbeTcpConnSend?: number;
  /**
  * Enable automatic packet-capture for Error creating Smart NAT Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_smart_nat_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_smart_nat_alloc}
  */
  readonly errSmartNatAlloc?: number;
  /**
  * Enable automatic packet-capture for Error obtaining Smart NAT source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_smart_nat_port_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_smart_nat_port_alloc}
  */
  readonly errSmartNatPortAlloc?: number;
  /**
  * Enable automatic packet-capture for Probe Template Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_tmpl_probe_create_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_tmpl_probe_create_failed}
  */
  readonly errTmplProbeCreateFailed?: number;
  /**
  * Enable automatic packet-capture for Probe Template Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#err_tmpl_probe_create_oom VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#err_tmpl_probe_create_oom}
  */
  readonly errTmplProbeCreateOom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#template_name}
  */
  readonly templateName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total HTTP responses not matching probe template config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#total_http_response_bad VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#total_http_response_bad}
  */
  readonly totalHttpResponseBad?: number;
  /**
  * Enable automatic packet-capture for Total TCP errors in probes sent out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#total_tcp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#total_tcp_err}
  */
  readonly totalTcpErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe_trigger_stats_rate',
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
    this._duration = config.duration;
    this._errEntryCreateFailed = config.errEntryCreateFailed;
    this._errEntryCreateOom = config.errEntryCreateOom;
    this._errEntryInsertFailed = config.errEntryInsertFailed;
    this._errL4SessAlloc = config.errL4SessAlloc;
    this._errProbeTcpConnSend = config.errProbeTcpConnSend;
    this._errSmartNatAlloc = config.errSmartNatAlloc;
    this._errSmartNatPortAlloc = config.errSmartNatPortAlloc;
    this._errTmplProbeCreateFailed = config.errTmplProbeCreateFailed;
    this._errTmplProbeCreateOom = config.errTmplProbeCreateOom;
    this._id = config.id;
    this._templateName = config.templateName;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._totalHttpResponseBad = config.totalHttpResponseBad;
    this._totalTcpErr = config.totalTcpErr;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // err_entry_create_failed - computed: false, optional: true, required: false
  private _errEntryCreateFailed?: number; 
  public get errEntryCreateFailed() {
    return this.getNumberAttribute('err_entry_create_failed');
  }
  public set errEntryCreateFailed(value: number) {
    this._errEntryCreateFailed = value;
  }
  public resetErrEntryCreateFailed() {
    this._errEntryCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateFailedInput() {
    return this._errEntryCreateFailed;
  }

  // err_entry_create_oom - computed: false, optional: true, required: false
  private _errEntryCreateOom?: number; 
  public get errEntryCreateOom() {
    return this.getNumberAttribute('err_entry_create_oom');
  }
  public set errEntryCreateOom(value: number) {
    this._errEntryCreateOom = value;
  }
  public resetErrEntryCreateOom() {
    this._errEntryCreateOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateOomInput() {
    return this._errEntryCreateOom;
  }

  // err_entry_insert_failed - computed: false, optional: true, required: false
  private _errEntryInsertFailed?: number; 
  public get errEntryInsertFailed() {
    return this.getNumberAttribute('err_entry_insert_failed');
  }
  public set errEntryInsertFailed(value: number) {
    this._errEntryInsertFailed = value;
  }
  public resetErrEntryInsertFailed() {
    this._errEntryInsertFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryInsertFailedInput() {
    return this._errEntryInsertFailed;
  }

  // err_l4_sess_alloc - computed: false, optional: true, required: false
  private _errL4SessAlloc?: number; 
  public get errL4SessAlloc() {
    return this.getNumberAttribute('err_l4_sess_alloc');
  }
  public set errL4SessAlloc(value: number) {
    this._errL4SessAlloc = value;
  }
  public resetErrL4SessAlloc() {
    this._errL4SessAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errL4SessAllocInput() {
    return this._errL4SessAlloc;
  }

  // err_probe_tcp_conn_send - computed: false, optional: true, required: false
  private _errProbeTcpConnSend?: number; 
  public get errProbeTcpConnSend() {
    return this.getNumberAttribute('err_probe_tcp_conn_send');
  }
  public set errProbeTcpConnSend(value: number) {
    this._errProbeTcpConnSend = value;
  }
  public resetErrProbeTcpConnSend() {
    this._errProbeTcpConnSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errProbeTcpConnSendInput() {
    return this._errProbeTcpConnSend;
  }

  // err_smart_nat_alloc - computed: false, optional: true, required: false
  private _errSmartNatAlloc?: number; 
  public get errSmartNatAlloc() {
    return this.getNumberAttribute('err_smart_nat_alloc');
  }
  public set errSmartNatAlloc(value: number) {
    this._errSmartNatAlloc = value;
  }
  public resetErrSmartNatAlloc() {
    this._errSmartNatAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSmartNatAllocInput() {
    return this._errSmartNatAlloc;
  }

  // err_smart_nat_port_alloc - computed: false, optional: true, required: false
  private _errSmartNatPortAlloc?: number; 
  public get errSmartNatPortAlloc() {
    return this.getNumberAttribute('err_smart_nat_port_alloc');
  }
  public set errSmartNatPortAlloc(value: number) {
    this._errSmartNatPortAlloc = value;
  }
  public resetErrSmartNatPortAlloc() {
    this._errSmartNatPortAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSmartNatPortAllocInput() {
    return this._errSmartNatPortAlloc;
  }

  // err_tmpl_probe_create_failed - computed: false, optional: true, required: false
  private _errTmplProbeCreateFailed?: number; 
  public get errTmplProbeCreateFailed() {
    return this.getNumberAttribute('err_tmpl_probe_create_failed');
  }
  public set errTmplProbeCreateFailed(value: number) {
    this._errTmplProbeCreateFailed = value;
  }
  public resetErrTmplProbeCreateFailed() {
    this._errTmplProbeCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errTmplProbeCreateFailedInput() {
    return this._errTmplProbeCreateFailed;
  }

  // err_tmpl_probe_create_oom - computed: false, optional: true, required: false
  private _errTmplProbeCreateOom?: number; 
  public get errTmplProbeCreateOom() {
    return this.getNumberAttribute('err_tmpl_probe_create_oom');
  }
  public set errTmplProbeCreateOom(value: number) {
    this._errTmplProbeCreateOom = value;
  }
  public resetErrTmplProbeCreateOom() {
    this._errTmplProbeCreateOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errTmplProbeCreateOomInput() {
    return this._errTmplProbeCreateOom;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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

  // total_http_response_bad - computed: false, optional: true, required: false
  private _totalHttpResponseBad?: number; 
  public get totalHttpResponseBad() {
    return this.getNumberAttribute('total_http_response_bad');
  }
  public set totalHttpResponseBad(value: number) {
    this._totalHttpResponseBad = value;
  }
  public resetTotalHttpResponseBad() {
    this._totalHttpResponseBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpResponseBadInput() {
    return this._totalHttpResponseBad;
  }

  // total_tcp_err - computed: false, optional: true, required: false
  private _totalTcpErr?: number; 
  public get totalTcpErr() {
    return this.getNumberAttribute('total_tcp_err');
  }
  public set totalTcpErr(value: number) {
    this._totalTcpErr = value;
  }
  public resetTotalTcpErr() {
    this._totalTcpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpErrInput() {
    return this._totalTcpErr;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      err_entry_create_failed: cdktf.numberToTerraform(this._errEntryCreateFailed),
      err_entry_create_oom: cdktf.numberToTerraform(this._errEntryCreateOom),
      err_entry_insert_failed: cdktf.numberToTerraform(this._errEntryInsertFailed),
      err_l4_sess_alloc: cdktf.numberToTerraform(this._errL4SessAlloc),
      err_probe_tcp_conn_send: cdktf.numberToTerraform(this._errProbeTcpConnSend),
      err_smart_nat_alloc: cdktf.numberToTerraform(this._errSmartNatAlloc),
      err_smart_nat_port_alloc: cdktf.numberToTerraform(this._errSmartNatPortAlloc),
      err_tmpl_probe_create_failed: cdktf.numberToTerraform(this._errTmplProbeCreateFailed),
      err_tmpl_probe_create_oom: cdktf.numberToTerraform(this._errTmplProbeCreateOom),
      id: cdktf.stringToTerraform(this._id),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      total_http_response_bad: cdktf.numberToTerraform(this._totalHttpResponseBad),
      total_tcp_err: cdktf.numberToTerraform(this._totalTcpErr),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_entry_create_failed: {
        value: cdktf.numberToHclTerraform(this._errEntryCreateFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_entry_create_oom: {
        value: cdktf.numberToHclTerraform(this._errEntryCreateOom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_entry_insert_failed: {
        value: cdktf.numberToHclTerraform(this._errEntryInsertFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_l4_sess_alloc: {
        value: cdktf.numberToHclTerraform(this._errL4SessAlloc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_probe_tcp_conn_send: {
        value: cdktf.numberToHclTerraform(this._errProbeTcpConnSend),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_smart_nat_alloc: {
        value: cdktf.numberToHclTerraform(this._errSmartNatAlloc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_smart_nat_port_alloc: {
        value: cdktf.numberToHclTerraform(this._errSmartNatPortAlloc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_tmpl_probe_create_failed: {
        value: cdktf.numberToHclTerraform(this._errTmplProbeCreateFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_tmpl_probe_create_oom: {
        value: cdktf.numberToHclTerraform(this._errTmplProbeCreateOom),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_http_response_bad: {
        value: cdktf.numberToHclTerraform(this._totalHttpResponseBad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_tcp_err: {
        value: cdktf.numberToHclTerraform(this._totalTcpErr),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
