// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Hardware forward flow error count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_error_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_error_count}
  */
  readonly hwFwdFlowErrorCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward sequence mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_seq_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_seq_mismatch}
  */
  readonly hwFwdFlowSeqMismatch?: number;
  /**
  * Enable automatic packet-capture for Hardware forward singlebit Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_singlebit_errors VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_singlebit_errors}
  */
  readonly hwFwdFlowSinglebitErrors?: number;
  /**
  * Enable automatic packet-capture for Hardware forward tag mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_tag_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_tag_mismatch}
  */
  readonly hwFwdFlowTagMismatch?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow unalign count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_unalign_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_unalign_count}
  */
  readonly hwFwdFlowUnalignCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow underflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_underflow_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_underflow_count}
  */
  readonly hwFwdFlowUnderflowCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward programming Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_prog_errors VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_prog_errors}
  */
  readonly hwFwdProgErrors?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_fwd_flow_error_count: cdktf.numberToTerraform(struct!.hwFwdFlowErrorCount),
    hw_fwd_flow_seq_mismatch: cdktf.numberToTerraform(struct!.hwFwdFlowSeqMismatch),
    hw_fwd_flow_singlebit_errors: cdktf.numberToTerraform(struct!.hwFwdFlowSinglebitErrors),
    hw_fwd_flow_tag_mismatch: cdktf.numberToTerraform(struct!.hwFwdFlowTagMismatch),
    hw_fwd_flow_unalign_count: cdktf.numberToTerraform(struct!.hwFwdFlowUnalignCount),
    hw_fwd_flow_underflow_count: cdktf.numberToTerraform(struct!.hwFwdFlowUnderflowCount),
    hw_fwd_prog_errors: cdktf.numberToTerraform(struct!.hwFwdProgErrors),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_fwd_flow_error_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowErrorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_seq_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSeqMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_singlebit_errors: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSinglebitErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_tag_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowTagMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_unalign_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowUnalignCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_underflow_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowUnderflowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_prog_errors: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdProgErrors),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwFwdFlowErrorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowErrorCount = this._hwFwdFlowErrorCount;
    }
    if (this._hwFwdFlowSeqMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSeqMismatch = this._hwFwdFlowSeqMismatch;
    }
    if (this._hwFwdFlowSinglebitErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSinglebitErrors = this._hwFwdFlowSinglebitErrors;
    }
    if (this._hwFwdFlowTagMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowTagMismatch = this._hwFwdFlowTagMismatch;
    }
    if (this._hwFwdFlowUnalignCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowUnalignCount = this._hwFwdFlowUnalignCount;
    }
    if (this._hwFwdFlowUnderflowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowUnderflowCount = this._hwFwdFlowUnderflowCount;
    }
    if (this._hwFwdProgErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdProgErrors = this._hwFwdProgErrors;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hwFwdFlowErrorCount = undefined;
      this._hwFwdFlowSeqMismatch = undefined;
      this._hwFwdFlowSinglebitErrors = undefined;
      this._hwFwdFlowTagMismatch = undefined;
      this._hwFwdFlowUnalignCount = undefined;
      this._hwFwdFlowUnderflowCount = undefined;
      this._hwFwdProgErrors = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hwFwdFlowErrorCount = value.hwFwdFlowErrorCount;
      this._hwFwdFlowSeqMismatch = value.hwFwdFlowSeqMismatch;
      this._hwFwdFlowSinglebitErrors = value.hwFwdFlowSinglebitErrors;
      this._hwFwdFlowTagMismatch = value.hwFwdFlowTagMismatch;
      this._hwFwdFlowUnalignCount = value.hwFwdFlowUnalignCount;
      this._hwFwdFlowUnderflowCount = value.hwFwdFlowUnderflowCount;
      this._hwFwdProgErrors = value.hwFwdProgErrors;
      this._uuid = value.uuid;
    }
  }

  // hw_fwd_flow_error_count - computed: false, optional: true, required: false
  private _hwFwdFlowErrorCount?: number; 
  public get hwFwdFlowErrorCount() {
    return this.getNumberAttribute('hw_fwd_flow_error_count');
  }
  public set hwFwdFlowErrorCount(value: number) {
    this._hwFwdFlowErrorCount = value;
  }
  public resetHwFwdFlowErrorCount() {
    this._hwFwdFlowErrorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowErrorCountInput() {
    return this._hwFwdFlowErrorCount;
  }

  // hw_fwd_flow_seq_mismatch - computed: false, optional: true, required: false
  private _hwFwdFlowSeqMismatch?: number; 
  public get hwFwdFlowSeqMismatch() {
    return this.getNumberAttribute('hw_fwd_flow_seq_mismatch');
  }
  public set hwFwdFlowSeqMismatch(value: number) {
    this._hwFwdFlowSeqMismatch = value;
  }
  public resetHwFwdFlowSeqMismatch() {
    this._hwFwdFlowSeqMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSeqMismatchInput() {
    return this._hwFwdFlowSeqMismatch;
  }

  // hw_fwd_flow_singlebit_errors - computed: false, optional: true, required: false
  private _hwFwdFlowSinglebitErrors?: number; 
  public get hwFwdFlowSinglebitErrors() {
    return this.getNumberAttribute('hw_fwd_flow_singlebit_errors');
  }
  public set hwFwdFlowSinglebitErrors(value: number) {
    this._hwFwdFlowSinglebitErrors = value;
  }
  public resetHwFwdFlowSinglebitErrors() {
    this._hwFwdFlowSinglebitErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSinglebitErrorsInput() {
    return this._hwFwdFlowSinglebitErrors;
  }

  // hw_fwd_flow_tag_mismatch - computed: false, optional: true, required: false
  private _hwFwdFlowTagMismatch?: number; 
  public get hwFwdFlowTagMismatch() {
    return this.getNumberAttribute('hw_fwd_flow_tag_mismatch');
  }
  public set hwFwdFlowTagMismatch(value: number) {
    this._hwFwdFlowTagMismatch = value;
  }
  public resetHwFwdFlowTagMismatch() {
    this._hwFwdFlowTagMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowTagMismatchInput() {
    return this._hwFwdFlowTagMismatch;
  }

  // hw_fwd_flow_unalign_count - computed: false, optional: true, required: false
  private _hwFwdFlowUnalignCount?: number; 
  public get hwFwdFlowUnalignCount() {
    return this.getNumberAttribute('hw_fwd_flow_unalign_count');
  }
  public set hwFwdFlowUnalignCount(value: number) {
    this._hwFwdFlowUnalignCount = value;
  }
  public resetHwFwdFlowUnalignCount() {
    this._hwFwdFlowUnalignCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowUnalignCountInput() {
    return this._hwFwdFlowUnalignCount;
  }

  // hw_fwd_flow_underflow_count - computed: false, optional: true, required: false
  private _hwFwdFlowUnderflowCount?: number; 
  public get hwFwdFlowUnderflowCount() {
    return this.getNumberAttribute('hw_fwd_flow_underflow_count');
  }
  public set hwFwdFlowUnderflowCount(value: number) {
    this._hwFwdFlowUnderflowCount = value;
  }
  public resetHwFwdFlowUnderflowCount() {
    this._hwFwdFlowUnderflowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowUnderflowCountInput() {
    return this._hwFwdFlowUnderflowCount;
  }

  // hw_fwd_prog_errors - computed: false, optional: true, required: false
  private _hwFwdProgErrors?: number; 
  public get hwFwdProgErrors() {
    return this.getNumberAttribute('hw_fwd_prog_errors');
  }
  public set hwFwdProgErrors(value: number) {
    this._hwFwdProgErrors = value;
  }
  public resetHwFwdProgErrors() {
    this._hwFwdProgErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdProgErrorsInput() {
    return this._hwFwdProgErrors;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow error count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_error_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_error_count}
  */
  readonly hwFwdFlowErrorCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward sequence mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_seq_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_seq_mismatch}
  */
  readonly hwFwdFlowSeqMismatch?: number;
  /**
  * Enable automatic packet-capture for Hardware forward singlebit Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_singlebit_errors VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_singlebit_errors}
  */
  readonly hwFwdFlowSinglebitErrors?: number;
  /**
  * Enable automatic packet-capture for Hardware forward tag mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_tag_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_tag_mismatch}
  */
  readonly hwFwdFlowTagMismatch?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow unalign count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_unalign_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_unalign_count}
  */
  readonly hwFwdFlowUnalignCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow underflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_flow_underflow_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_flow_underflow_count}
  */
  readonly hwFwdFlowUnderflowCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward programming Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#hw_fwd_prog_errors VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#hw_fwd_prog_errors}
  */
  readonly hwFwdProgErrors?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    hw_fwd_flow_error_count: cdktf.numberToTerraform(struct!.hwFwdFlowErrorCount),
    hw_fwd_flow_seq_mismatch: cdktf.numberToTerraform(struct!.hwFwdFlowSeqMismatch),
    hw_fwd_flow_singlebit_errors: cdktf.numberToTerraform(struct!.hwFwdFlowSinglebitErrors),
    hw_fwd_flow_tag_mismatch: cdktf.numberToTerraform(struct!.hwFwdFlowTagMismatch),
    hw_fwd_flow_unalign_count: cdktf.numberToTerraform(struct!.hwFwdFlowUnalignCount),
    hw_fwd_flow_underflow_count: cdktf.numberToTerraform(struct!.hwFwdFlowUnderflowCount),
    hw_fwd_prog_errors: cdktf.numberToTerraform(struct!.hwFwdProgErrors),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA): any {
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
    hw_fwd_flow_error_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowErrorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_seq_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSeqMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_singlebit_errors: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSinglebitErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_tag_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowTagMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_unalign_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowUnalignCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_underflow_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowUnderflowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_prog_errors: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdProgErrors),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._hwFwdFlowErrorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowErrorCount = this._hwFwdFlowErrorCount;
    }
    if (this._hwFwdFlowSeqMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSeqMismatch = this._hwFwdFlowSeqMismatch;
    }
    if (this._hwFwdFlowSinglebitErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSinglebitErrors = this._hwFwdFlowSinglebitErrors;
    }
    if (this._hwFwdFlowTagMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowTagMismatch = this._hwFwdFlowTagMismatch;
    }
    if (this._hwFwdFlowUnalignCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowUnalignCount = this._hwFwdFlowUnalignCount;
    }
    if (this._hwFwdFlowUnderflowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowUnderflowCount = this._hwFwdFlowUnderflowCount;
    }
    if (this._hwFwdProgErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdProgErrors = this._hwFwdProgErrors;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._hwFwdFlowErrorCount = undefined;
      this._hwFwdFlowSeqMismatch = undefined;
      this._hwFwdFlowSinglebitErrors = undefined;
      this._hwFwdFlowTagMismatch = undefined;
      this._hwFwdFlowUnalignCount = undefined;
      this._hwFwdFlowUnderflowCount = undefined;
      this._hwFwdProgErrors = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._hwFwdFlowErrorCount = value.hwFwdFlowErrorCount;
      this._hwFwdFlowSeqMismatch = value.hwFwdFlowSeqMismatch;
      this._hwFwdFlowSinglebitErrors = value.hwFwdFlowSinglebitErrors;
      this._hwFwdFlowTagMismatch = value.hwFwdFlowTagMismatch;
      this._hwFwdFlowUnalignCount = value.hwFwdFlowUnalignCount;
      this._hwFwdFlowUnderflowCount = value.hwFwdFlowUnderflowCount;
      this._hwFwdProgErrors = value.hwFwdProgErrors;
      this._thresholdExceededBy = value.thresholdExceededBy;
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

  // hw_fwd_flow_error_count - computed: false, optional: true, required: false
  private _hwFwdFlowErrorCount?: number; 
  public get hwFwdFlowErrorCount() {
    return this.getNumberAttribute('hw_fwd_flow_error_count');
  }
  public set hwFwdFlowErrorCount(value: number) {
    this._hwFwdFlowErrorCount = value;
  }
  public resetHwFwdFlowErrorCount() {
    this._hwFwdFlowErrorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowErrorCountInput() {
    return this._hwFwdFlowErrorCount;
  }

  // hw_fwd_flow_seq_mismatch - computed: false, optional: true, required: false
  private _hwFwdFlowSeqMismatch?: number; 
  public get hwFwdFlowSeqMismatch() {
    return this.getNumberAttribute('hw_fwd_flow_seq_mismatch');
  }
  public set hwFwdFlowSeqMismatch(value: number) {
    this._hwFwdFlowSeqMismatch = value;
  }
  public resetHwFwdFlowSeqMismatch() {
    this._hwFwdFlowSeqMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSeqMismatchInput() {
    return this._hwFwdFlowSeqMismatch;
  }

  // hw_fwd_flow_singlebit_errors - computed: false, optional: true, required: false
  private _hwFwdFlowSinglebitErrors?: number; 
  public get hwFwdFlowSinglebitErrors() {
    return this.getNumberAttribute('hw_fwd_flow_singlebit_errors');
  }
  public set hwFwdFlowSinglebitErrors(value: number) {
    this._hwFwdFlowSinglebitErrors = value;
  }
  public resetHwFwdFlowSinglebitErrors() {
    this._hwFwdFlowSinglebitErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSinglebitErrorsInput() {
    return this._hwFwdFlowSinglebitErrors;
  }

  // hw_fwd_flow_tag_mismatch - computed: false, optional: true, required: false
  private _hwFwdFlowTagMismatch?: number; 
  public get hwFwdFlowTagMismatch() {
    return this.getNumberAttribute('hw_fwd_flow_tag_mismatch');
  }
  public set hwFwdFlowTagMismatch(value: number) {
    this._hwFwdFlowTagMismatch = value;
  }
  public resetHwFwdFlowTagMismatch() {
    this._hwFwdFlowTagMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowTagMismatchInput() {
    return this._hwFwdFlowTagMismatch;
  }

  // hw_fwd_flow_unalign_count - computed: false, optional: true, required: false
  private _hwFwdFlowUnalignCount?: number; 
  public get hwFwdFlowUnalignCount() {
    return this.getNumberAttribute('hw_fwd_flow_unalign_count');
  }
  public set hwFwdFlowUnalignCount(value: number) {
    this._hwFwdFlowUnalignCount = value;
  }
  public resetHwFwdFlowUnalignCount() {
    this._hwFwdFlowUnalignCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowUnalignCountInput() {
    return this._hwFwdFlowUnalignCount;
  }

  // hw_fwd_flow_underflow_count - computed: false, optional: true, required: false
  private _hwFwdFlowUnderflowCount?: number; 
  public get hwFwdFlowUnderflowCount() {
    return this.getNumberAttribute('hw_fwd_flow_underflow_count');
  }
  public set hwFwdFlowUnderflowCount(value: number) {
    this._hwFwdFlowUnderflowCount = value;
  }
  public resetHwFwdFlowUnderflowCount() {
    this._hwFwdFlowUnderflowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowUnderflowCountInput() {
    return this._hwFwdFlowUnderflowCount;
  }

  // hw_fwd_prog_errors - computed: false, optional: true, required: false
  private _hwFwdProgErrors?: number; 
  public get hwFwdProgErrors() {
    return this.getNumberAttribute('hw_fwd_prog_errors');
  }
  public set hwFwdProgErrors(value: number) {
    this._hwFwdProgErrors = value;
  }
  public resetHwFwdProgErrors() {
    this._hwFwdProgErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdProgErrorsInput() {
    return this._hwFwdProgErrors;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
