// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Buffer Allocation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#buffer_alloc_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#buffer_alloc_fail}
  */
  readonly bufferAllocFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Encoding Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#encoding_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#encoding_fail}
  */
  readonly encodingFail?: number;
  /**
  * Enable automatic packet-capture for Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#failure VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#failure}
  */
  readonly failure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Insert Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#insert_header_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#insert_header_fail}
  */
  readonly insertHeaderFail?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#internal_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#internal_error}
  */
  readonly internalError?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#name VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Parse Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#parse_header_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#parse_header_fail}
  */
  readonly parseHeaderFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayNtlmTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_ntlm_tmpl_trigger_stats_rate',
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
    this._bufferAllocFail = config.bufferAllocFail;
    this._duration = config.duration;
    this._encodingFail = config.encodingFail;
    this._failure = config.failure;
    this._id = config.id;
    this._insertHeaderFail = config.insertHeaderFail;
    this._internalError = config.internalError;
    this._name = config.name;
    this._parseHeaderFail = config.parseHeaderFail;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffer_alloc_fail - computed: false, optional: true, required: false
  private _bufferAllocFail?: number; 
  public get bufferAllocFail() {
    return this.getNumberAttribute('buffer_alloc_fail');
  }
  public set bufferAllocFail(value: number) {
    this._bufferAllocFail = value;
  }
  public resetBufferAllocFail() {
    this._bufferAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferAllocFailInput() {
    return this._bufferAllocFail;
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

  // encoding_fail - computed: false, optional: true, required: false
  private _encodingFail?: number; 
  public get encodingFail() {
    return this.getNumberAttribute('encoding_fail');
  }
  public set encodingFail(value: number) {
    this._encodingFail = value;
  }
  public resetEncodingFail() {
    this._encodingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingFailInput() {
    return this._encodingFail;
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
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

  // insert_header_fail - computed: false, optional: true, required: false
  private _insertHeaderFail?: number; 
  public get insertHeaderFail() {
    return this.getNumberAttribute('insert_header_fail');
  }
  public set insertHeaderFail(value: number) {
    this._insertHeaderFail = value;
  }
  public resetInsertHeaderFail() {
    this._insertHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderFailInput() {
    return this._insertHeaderFail;
  }

  // internal_error - computed: false, optional: true, required: false
  private _internalError?: number; 
  public get internalError() {
    return this.getNumberAttribute('internal_error');
  }
  public set internalError(value: number) {
    this._internalError = value;
  }
  public resetInternalError() {
    this._internalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorInput() {
    return this._internalError;
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

  // parse_header_fail - computed: false, optional: true, required: false
  private _parseHeaderFail?: number; 
  public get parseHeaderFail() {
    return this.getNumberAttribute('parse_header_fail');
  }
  public set parseHeaderFail(value: number) {
    this._parseHeaderFail = value;
  }
  public resetParseHeaderFail() {
    this._parseHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderFailInput() {
    return this._parseHeaderFail;
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
      buffer_alloc_fail: cdktf.numberToTerraform(this._bufferAllocFail),
      duration: cdktf.numberToTerraform(this._duration),
      encoding_fail: cdktf.numberToTerraform(this._encodingFail),
      failure: cdktf.numberToTerraform(this._failure),
      id: cdktf.stringToTerraform(this._id),
      insert_header_fail: cdktf.numberToTerraform(this._insertHeaderFail),
      internal_error: cdktf.numberToTerraform(this._internalError),
      name: cdktf.stringToTerraform(this._name),
      parse_header_fail: cdktf.numberToTerraform(this._parseHeaderFail),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffer_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._bufferAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encoding_fail: {
        value: cdktf.numberToHclTerraform(this._encodingFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure: {
        value: cdktf.numberToHclTerraform(this._failure),
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
      insert_header_fail: {
        value: cdktf.numberToHclTerraform(this._insertHeaderFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_error: {
        value: cdktf.numberToHclTerraform(this._internalError),
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
      parse_header_fail: {
        value: cdktf.numberToHclTerraform(this._parseHeaderFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
