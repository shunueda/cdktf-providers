// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total OCSP Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Total OCSP Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#response_error}
  */
  readonly responseError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#stapling_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#stapling_request_dropped}
  */
  readonly staplingRequestDropped?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#stapling_response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#stapling_response_error}
  */
  readonly staplingResponseError?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#stapling_response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#stapling_response_failure}
  */
  readonly staplingResponseFailure?: number;
  /**
  * Enable automatic packet-capture for Total OCSP Stapling Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#stapling_response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#stapling_response_timeout}
  */
  readonly staplingResponseTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerOcspTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_ocsp_trigger_stats_inc',
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
    this._jobStartError = config.jobStartError;
    this._name = config.name;
    this._pollingControlError = config.pollingControlError;
    this._requestDropped = config.requestDropped;
    this._responseError = config.responseError;
    this._responseFailure = config.responseFailure;
    this._responseTimeout = config.responseTimeout;
    this._staplingRequestDropped = config.staplingRequestDropped;
    this._staplingResponseError = config.staplingResponseError;
    this._staplingResponseFailure = config.staplingResponseFailure;
    this._staplingResponseTimeout = config.staplingResponseTimeout;
    this._uuid = config.uuid;
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

  // stapling_request_dropped - computed: false, optional: true, required: false
  private _staplingRequestDropped?: number; 
  public get staplingRequestDropped() {
    return this.getNumberAttribute('stapling_request_dropped');
  }
  public set staplingRequestDropped(value: number) {
    this._staplingRequestDropped = value;
  }
  public resetStaplingRequestDropped() {
    this._staplingRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingRequestDroppedInput() {
    return this._staplingRequestDropped;
  }

  // stapling_response_error - computed: false, optional: true, required: false
  private _staplingResponseError?: number; 
  public get staplingResponseError() {
    return this.getNumberAttribute('stapling_response_error');
  }
  public set staplingResponseError(value: number) {
    this._staplingResponseError = value;
  }
  public resetStaplingResponseError() {
    this._staplingResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseErrorInput() {
    return this._staplingResponseError;
  }

  // stapling_response_failure - computed: false, optional: true, required: false
  private _staplingResponseFailure?: number; 
  public get staplingResponseFailure() {
    return this.getNumberAttribute('stapling_response_failure');
  }
  public set staplingResponseFailure(value: number) {
    this._staplingResponseFailure = value;
  }
  public resetStaplingResponseFailure() {
    this._staplingResponseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseFailureInput() {
    return this._staplingResponseFailure;
  }

  // stapling_response_timeout - computed: false, optional: true, required: false
  private _staplingResponseTimeout?: number; 
  public get staplingResponseTimeout() {
    return this.getNumberAttribute('stapling_response_timeout');
  }
  public set staplingResponseTimeout(value: number) {
    this._staplingResponseTimeout = value;
  }
  public resetStaplingResponseTimeout() {
    this._staplingResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseTimeoutInput() {
    return this._staplingResponseTimeout;
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
      id: cdktf.stringToTerraform(this._id),
      job_start_error: cdktf.numberToTerraform(this._jobStartError),
      name: cdktf.stringToTerraform(this._name),
      polling_control_error: cdktf.numberToTerraform(this._pollingControlError),
      request_dropped: cdktf.numberToTerraform(this._requestDropped),
      response_error: cdktf.numberToTerraform(this._responseError),
      response_failure: cdktf.numberToTerraform(this._responseFailure),
      response_timeout: cdktf.numberToTerraform(this._responseTimeout),
      stapling_request_dropped: cdktf.numberToTerraform(this._staplingRequestDropped),
      stapling_response_error: cdktf.numberToTerraform(this._staplingResponseError),
      stapling_response_failure: cdktf.numberToTerraform(this._staplingResponseFailure),
      stapling_response_timeout: cdktf.numberToTerraform(this._staplingResponseTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      job_start_error: {
        value: cdktf.numberToHclTerraform(this._jobStartError),
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
      stapling_request_dropped: {
        value: cdktf.numberToHclTerraform(this._staplingRequestDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stapling_response_error: {
        value: cdktf.numberToHclTerraform(this._staplingResponseError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stapling_response_failure: {
        value: cdktf.numberToHclTerraform(this._staplingResponseFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stapling_response_timeout: {
        value: cdktf.numberToHclTerraform(this._staplingResponseTimeout),
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
