// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow error count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_flow_error_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_flow_error_count}
  */
  readonly hwFwdFlowErrorCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward sequence mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_flow_seq_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_flow_seq_mismatch}
  */
  readonly hwFwdFlowSeqMismatch?: number;
  /**
  * Enable automatic packet-capture for Hardware forward singlebit Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_flow_singlebit_errors VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_flow_singlebit_errors}
  */
  readonly hwFwdFlowSinglebitErrors?: number;
  /**
  * Enable automatic packet-capture for Hardware forward tag mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_flow_tag_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_flow_tag_mismatch}
  */
  readonly hwFwdFlowTagMismatch?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow unalign count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_flow_unalign_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_flow_unalign_count}
  */
  readonly hwFwdFlowUnalignCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward flow underflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_flow_underflow_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_flow_underflow_count}
  */
  readonly hwFwdFlowUnderflowCount?: number;
  /**
  * Enable automatic packet-capture for Hardware forward programming Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#hw_fwd_prog_errors VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#hw_fwd_prog_errors}
  */
  readonly hwFwdProgErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSystemHardwareAccelerateTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_system_hardware_accelerate_trigger_stats_rate',
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
    this._duration = config.duration;
    this._hwFwdFlowErrorCount = config.hwFwdFlowErrorCount;
    this._hwFwdFlowSeqMismatch = config.hwFwdFlowSeqMismatch;
    this._hwFwdFlowSinglebitErrors = config.hwFwdFlowSinglebitErrors;
    this._hwFwdFlowTagMismatch = config.hwFwdFlowTagMismatch;
    this._hwFwdFlowUnalignCount = config.hwFwdFlowUnalignCount;
    this._hwFwdFlowUnderflowCount = config.hwFwdFlowUnderflowCount;
    this._hwFwdProgErrors = config.hwFwdProgErrors;
    this._id = config.id;
    this._name = config.name;
    this._thresholdExceededBy = config.thresholdExceededBy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      hw_fwd_flow_error_count: cdktf.numberToTerraform(this._hwFwdFlowErrorCount),
      hw_fwd_flow_seq_mismatch: cdktf.numberToTerraform(this._hwFwdFlowSeqMismatch),
      hw_fwd_flow_singlebit_errors: cdktf.numberToTerraform(this._hwFwdFlowSinglebitErrors),
      hw_fwd_flow_tag_mismatch: cdktf.numberToTerraform(this._hwFwdFlowTagMismatch),
      hw_fwd_flow_unalign_count: cdktf.numberToTerraform(this._hwFwdFlowUnalignCount),
      hw_fwd_flow_underflow_count: cdktf.numberToTerraform(this._hwFwdFlowUnderflowCount),
      hw_fwd_prog_errors: cdktf.numberToTerraform(this._hwFwdProgErrors),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
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
      hw_fwd_flow_error_count: {
        value: cdktf.numberToHclTerraform(this._hwFwdFlowErrorCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_fwd_flow_seq_mismatch: {
        value: cdktf.numberToHclTerraform(this._hwFwdFlowSeqMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_fwd_flow_singlebit_errors: {
        value: cdktf.numberToHclTerraform(this._hwFwdFlowSinglebitErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_fwd_flow_tag_mismatch: {
        value: cdktf.numberToHclTerraform(this._hwFwdFlowTagMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_fwd_flow_unalign_count: {
        value: cdktf.numberToHclTerraform(this._hwFwdFlowUnalignCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_fwd_flow_underflow_count: {
        value: cdktf.numberToHclTerraform(this._hwFwdFlowUnderflowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_fwd_prog_errors: {
        value: cdktf.numberToHclTerraform(this._hwFwdProgErrors),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
