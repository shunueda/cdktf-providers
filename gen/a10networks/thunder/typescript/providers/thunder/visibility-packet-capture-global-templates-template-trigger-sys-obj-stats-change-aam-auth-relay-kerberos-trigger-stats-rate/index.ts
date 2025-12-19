// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Enable automatic packet-capture for Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#other_error}
  */
  readonly otherError?: number;
  /**
  * Enable automatic packet-capture for Total Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Enable automatic packet-capture for Total Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#response_error}
  */
  readonly responseError?: number;
  /**
  * Enable automatic packet-capture for Total Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Enable automatic packet-capture for Total Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#template_name}
  */
  readonly templateName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#timeout_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#timeout_error}
  */
  readonly timeoutError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthRelayKerberosTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_relay_kerberos_trigger_stats_rate',
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
    this._id = config.id;
    this._jobStartError = config.jobStartError;
    this._otherError = config.otherError;
    this._pollingControlError = config.pollingControlError;
    this._requestDropped = config.requestDropped;
    this._responseError = config.responseError;
    this._responseFailure = config.responseFailure;
    this._responseTimeout = config.responseTimeout;
    this._templateName = config.templateName;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._timeoutError = config.timeoutError;
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

  // job_start_error - computed: false, optional: true, required: false
  private _jobStartError?: number; 
  public get jobStartError() {
    return this.getNumberAttribute('job_start_error');
  }
  public set jobStartError(value: number) {
    this._jobStartError = value;
  }
  public resetJobStartError() {
    this._jobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStartErrorInput() {
    return this._jobStartError;
  }

  // other_error - computed: false, optional: true, required: false
  private _otherError?: number; 
  public get otherError() {
    return this.getNumberAttribute('other_error');
  }
  public set otherError(value: number) {
    this._otherError = value;
  }
  public resetOtherError() {
    this._otherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrorInput() {
    return this._otherError;
  }

  // polling_control_error - computed: false, optional: true, required: false
  private _pollingControlError?: number; 
  public get pollingControlError() {
    return this.getNumberAttribute('polling_control_error');
  }
  public set pollingControlError(value: number) {
    this._pollingControlError = value;
  }
  public resetPollingControlError() {
    this._pollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingControlErrorInput() {
    return this._pollingControlError;
  }

  // request_dropped - computed: false, optional: true, required: false
  private _requestDropped?: number; 
  public get requestDropped() {
    return this.getNumberAttribute('request_dropped');
  }
  public set requestDropped(value: number) {
    this._requestDropped = value;
  }
  public resetRequestDropped() {
    this._requestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDroppedInput() {
    return this._requestDropped;
  }

  // response_error - computed: false, optional: true, required: false
  private _responseError?: number; 
  public get responseError() {
    return this.getNumberAttribute('response_error');
  }
  public set responseError(value: number) {
    this._responseError = value;
  }
  public resetResponseError() {
    this._responseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorInput() {
    return this._responseError;
  }

  // response_failure - computed: false, optional: true, required: false
  private _responseFailure?: number; 
  public get responseFailure() {
    return this.getNumberAttribute('response_failure');
  }
  public set responseFailure(value: number) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
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

  // timeout_error - computed: false, optional: true, required: false
  private _timeoutError?: number; 
  public get timeoutError() {
    return this.getNumberAttribute('timeout_error');
  }
  public set timeoutError(value: number) {
    this._timeoutError = value;
  }
  public resetTimeoutError() {
    this._timeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutErrorInput() {
    return this._timeoutError;
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
      id: cdktf.stringToTerraform(this._id),
      job_start_error: cdktf.numberToTerraform(this._jobStartError),
      other_error: cdktf.numberToTerraform(this._otherError),
      polling_control_error: cdktf.numberToTerraform(this._pollingControlError),
      request_dropped: cdktf.numberToTerraform(this._requestDropped),
      response_error: cdktf.numberToTerraform(this._responseError),
      response_failure: cdktf.numberToTerraform(this._responseFailure),
      response_timeout: cdktf.numberToTerraform(this._responseTimeout),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      timeout_error: cdktf.numberToTerraform(this._timeoutError),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_start_error: {
        value: cdktf.numberToHclTerraform(this._jobStartError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      other_error: {
        value: cdktf.numberToHclTerraform(this._otherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polling_control_error: {
        value: cdktf.numberToHclTerraform(this._pollingControlError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_dropped: {
        value: cdktf.numberToHclTerraform(this._requestDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_error: {
        value: cdktf.numberToHclTerraform(this._responseError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_failure: {
        value: cdktf.numberToHclTerraform(this._responseFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_timeout: {
        value: cdktf.numberToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      timeout_error: {
        value: cdktf.numberToHclTerraform(this._timeoutError),
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
