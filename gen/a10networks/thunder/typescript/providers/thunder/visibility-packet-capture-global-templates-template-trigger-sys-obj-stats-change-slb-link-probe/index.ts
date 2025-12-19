// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Entry Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_entry_create_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Enable automatic packet-capture for Entry Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_entry_create_oom VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Enable automatic packet-capture for Entry Insert Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_entry_insert_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Enable automatic packet-capture for Error allocating L4 session for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_l4_sess_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_l4_sess_alloc}
  */
  readonly errL4SessAlloc?: number;
  /**
  * Enable automatic packet-capture for Error in initiating TCP connection for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_probe_tcp_conn_send VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_probe_tcp_conn_send}
  */
  readonly errProbeTcpConnSend?: number;
  /**
  * Enable automatic packet-capture for Error creating Smart NAT Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_smart_nat_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_smart_nat_alloc}
  */
  readonly errSmartNatAlloc?: number;
  /**
  * Enable automatic packet-capture for Error obtaining Smart NAT source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_smart_nat_port_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_smart_nat_port_alloc}
  */
  readonly errSmartNatPortAlloc?: number;
  /**
  * Enable automatic packet-capture for Probe Template Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_tmpl_probe_create_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_tmpl_probe_create_failed}
  */
  readonly errTmplProbeCreateFailed?: number;
  /**
  * Enable automatic packet-capture for Probe Template Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_tmpl_probe_create_oom VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_tmpl_probe_create_oom}
  */
  readonly errTmplProbeCreateOom?: number;
  /**
  * Enable automatic packet-capture for Total HTTP responses not matching probe template config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#total_http_response_bad VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#total_http_response_bad}
  */
  readonly totalHttpResponseBad?: number;
  /**
  * Enable automatic packet-capture for Total TCP errors in probes sent out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#total_tcp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#total_tcp_err}
  */
  readonly totalTcpErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    err_entry_create_failed: cdktf.numberToTerraform(struct!.errEntryCreateFailed),
    err_entry_create_oom: cdktf.numberToTerraform(struct!.errEntryCreateOom),
    err_entry_insert_failed: cdktf.numberToTerraform(struct!.errEntryInsertFailed),
    err_l4_sess_alloc: cdktf.numberToTerraform(struct!.errL4SessAlloc),
    err_probe_tcp_conn_send: cdktf.numberToTerraform(struct!.errProbeTcpConnSend),
    err_smart_nat_alloc: cdktf.numberToTerraform(struct!.errSmartNatAlloc),
    err_smart_nat_port_alloc: cdktf.numberToTerraform(struct!.errSmartNatPortAlloc),
    err_tmpl_probe_create_failed: cdktf.numberToTerraform(struct!.errTmplProbeCreateFailed),
    err_tmpl_probe_create_oom: cdktf.numberToTerraform(struct!.errTmplProbeCreateOom),
    total_http_response_bad: cdktf.numberToTerraform(struct!.totalHttpResponseBad),
    total_tcp_err: cdktf.numberToTerraform(struct!.totalTcpErr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    err_entry_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_insert_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryInsertFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_l4_sess_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errL4SessAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_probe_tcp_conn_send: {
      value: cdktf.numberToHclTerraform(struct!.errProbeTcpConnSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_smart_nat_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errSmartNatAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_smart_nat_port_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errSmartNatPortAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_tmpl_probe_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errTmplProbeCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_tmpl_probe_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errTmplProbeCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http_response_bad: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpResponseBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_err: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpErr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errEntryCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateFailed = this._errEntryCreateFailed;
    }
    if (this._errEntryCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateOom = this._errEntryCreateOom;
    }
    if (this._errEntryInsertFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryInsertFailed = this._errEntryInsertFailed;
    }
    if (this._errL4SessAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errL4SessAlloc = this._errL4SessAlloc;
    }
    if (this._errProbeTcpConnSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.errProbeTcpConnSend = this._errProbeTcpConnSend;
    }
    if (this._errSmartNatAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatAlloc = this._errSmartNatAlloc;
    }
    if (this._errSmartNatPortAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatPortAlloc = this._errSmartNatPortAlloc;
    }
    if (this._errTmplProbeCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errTmplProbeCreateFailed = this._errTmplProbeCreateFailed;
    }
    if (this._errTmplProbeCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errTmplProbeCreateOom = this._errTmplProbeCreateOom;
    }
    if (this._totalHttpResponseBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpResponseBad = this._totalHttpResponseBad;
    }
    if (this._totalTcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpErr = this._totalTcpErr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errEntryCreateFailed = undefined;
      this._errEntryCreateOom = undefined;
      this._errEntryInsertFailed = undefined;
      this._errL4SessAlloc = undefined;
      this._errProbeTcpConnSend = undefined;
      this._errSmartNatAlloc = undefined;
      this._errSmartNatPortAlloc = undefined;
      this._errTmplProbeCreateFailed = undefined;
      this._errTmplProbeCreateOom = undefined;
      this._totalHttpResponseBad = undefined;
      this._totalTcpErr = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errEntryCreateFailed = value.errEntryCreateFailed;
      this._errEntryCreateOom = value.errEntryCreateOom;
      this._errEntryInsertFailed = value.errEntryInsertFailed;
      this._errL4SessAlloc = value.errL4SessAlloc;
      this._errProbeTcpConnSend = value.errProbeTcpConnSend;
      this._errSmartNatAlloc = value.errSmartNatAlloc;
      this._errSmartNatPortAlloc = value.errSmartNatPortAlloc;
      this._errTmplProbeCreateFailed = value.errTmplProbeCreateFailed;
      this._errTmplProbeCreateOom = value.errTmplProbeCreateOom;
      this._totalHttpResponseBad = value.totalHttpResponseBad;
      this._totalTcpErr = value.totalTcpErr;
      this._uuid = value.uuid;
    }
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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Entry Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_entry_create_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Enable automatic packet-capture for Entry Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_entry_create_oom VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Enable automatic packet-capture for Entry Insert Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_entry_insert_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Enable automatic packet-capture for Error allocating L4 session for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_l4_sess_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_l4_sess_alloc}
  */
  readonly errL4SessAlloc?: number;
  /**
  * Enable automatic packet-capture for Error in initiating TCP connection for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_probe_tcp_conn_send VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_probe_tcp_conn_send}
  */
  readonly errProbeTcpConnSend?: number;
  /**
  * Enable automatic packet-capture for Error creating Smart NAT Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_smart_nat_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_smart_nat_alloc}
  */
  readonly errSmartNatAlloc?: number;
  /**
  * Enable automatic packet-capture for Error obtaining Smart NAT source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_smart_nat_port_alloc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_smart_nat_port_alloc}
  */
  readonly errSmartNatPortAlloc?: number;
  /**
  * Enable automatic packet-capture for Probe Template Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_tmpl_probe_create_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_tmpl_probe_create_failed}
  */
  readonly errTmplProbeCreateFailed?: number;
  /**
  * Enable automatic packet-capture for Probe Template Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#err_tmpl_probe_create_oom VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#err_tmpl_probe_create_oom}
  */
  readonly errTmplProbeCreateOom?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total HTTP responses not matching probe template config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#total_http_response_bad VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#total_http_response_bad}
  */
  readonly totalHttpResponseBad?: number;
  /**
  * Enable automatic packet-capture for Total TCP errors in probes sent out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#total_tcp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#total_tcp_err}
  */
  readonly totalTcpErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    err_entry_create_failed: cdktf.numberToTerraform(struct!.errEntryCreateFailed),
    err_entry_create_oom: cdktf.numberToTerraform(struct!.errEntryCreateOom),
    err_entry_insert_failed: cdktf.numberToTerraform(struct!.errEntryInsertFailed),
    err_l4_sess_alloc: cdktf.numberToTerraform(struct!.errL4SessAlloc),
    err_probe_tcp_conn_send: cdktf.numberToTerraform(struct!.errProbeTcpConnSend),
    err_smart_nat_alloc: cdktf.numberToTerraform(struct!.errSmartNatAlloc),
    err_smart_nat_port_alloc: cdktf.numberToTerraform(struct!.errSmartNatPortAlloc),
    err_tmpl_probe_create_failed: cdktf.numberToTerraform(struct!.errTmplProbeCreateFailed),
    err_tmpl_probe_create_oom: cdktf.numberToTerraform(struct!.errTmplProbeCreateOom),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    total_http_response_bad: cdktf.numberToTerraform(struct!.totalHttpResponseBad),
    total_tcp_err: cdktf.numberToTerraform(struct!.totalTcpErr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA): any {
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
    err_entry_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_insert_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryInsertFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_l4_sess_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errL4SessAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_probe_tcp_conn_send: {
      value: cdktf.numberToHclTerraform(struct!.errProbeTcpConnSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_smart_nat_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errSmartNatAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_smart_nat_port_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errSmartNatPortAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_tmpl_probe_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errTmplProbeCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_tmpl_probe_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errTmplProbeCreateOom),
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
    total_http_response_bad: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpResponseBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_err: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpErr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._errEntryCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateFailed = this._errEntryCreateFailed;
    }
    if (this._errEntryCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateOom = this._errEntryCreateOom;
    }
    if (this._errEntryInsertFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryInsertFailed = this._errEntryInsertFailed;
    }
    if (this._errL4SessAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errL4SessAlloc = this._errL4SessAlloc;
    }
    if (this._errProbeTcpConnSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.errProbeTcpConnSend = this._errProbeTcpConnSend;
    }
    if (this._errSmartNatAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatAlloc = this._errSmartNatAlloc;
    }
    if (this._errSmartNatPortAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatPortAlloc = this._errSmartNatPortAlloc;
    }
    if (this._errTmplProbeCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errTmplProbeCreateFailed = this._errTmplProbeCreateFailed;
    }
    if (this._errTmplProbeCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errTmplProbeCreateOom = this._errTmplProbeCreateOom;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._totalHttpResponseBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpResponseBad = this._totalHttpResponseBad;
    }
    if (this._totalTcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpErr = this._totalTcpErr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._errEntryCreateFailed = undefined;
      this._errEntryCreateOom = undefined;
      this._errEntryInsertFailed = undefined;
      this._errL4SessAlloc = undefined;
      this._errProbeTcpConnSend = undefined;
      this._errSmartNatAlloc = undefined;
      this._errSmartNatPortAlloc = undefined;
      this._errTmplProbeCreateFailed = undefined;
      this._errTmplProbeCreateOom = undefined;
      this._thresholdExceededBy = undefined;
      this._totalHttpResponseBad = undefined;
      this._totalTcpErr = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._errEntryCreateFailed = value.errEntryCreateFailed;
      this._errEntryCreateOom = value.errEntryCreateOom;
      this._errEntryInsertFailed = value.errEntryInsertFailed;
      this._errL4SessAlloc = value.errL4SessAlloc;
      this._errProbeTcpConnSend = value.errProbeTcpConnSend;
      this._errSmartNatAlloc = value.errSmartNatAlloc;
      this._errSmartNatPortAlloc = value.errSmartNatPortAlloc;
      this._errTmplProbeCreateFailed = value.errTmplProbeCreateFailed;
      this._errTmplProbeCreateOom = value.errTmplProbeCreateOom;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._totalHttpResponseBad = value.totalHttpResponseBad;
      this._totalTcpErr = value.totalTcpErr;
      this._uuid = value.uuid;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_link_probe',
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
    this._templateName = config.templateName;
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateA) {
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
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
