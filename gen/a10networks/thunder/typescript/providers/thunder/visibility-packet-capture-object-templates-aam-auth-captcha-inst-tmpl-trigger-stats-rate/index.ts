// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_captcha_inst_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#aam_auth_captcha_inst_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#aam_auth_captcha_inst_tmpl_name}
  */
  readonly aamAuthCaptchaInstTmplName: string;
  /**
  * Enable automatic packet-capture for Total Attibute Check Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#attr_fail VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#attr_fail}
  */
  readonly attrFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total Failure JSON Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#json_fail VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#json_fail}
  */
  readonly jsonFail?: number;
  /**
  * Enable automatic packet-capture for Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#other_error VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#other_error}
  */
  readonly otherError?: number;
  /**
  * Enable automatic packet-capture for Total JSON Response Parse Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#parse_fail VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#parse_fail}
  */
  readonly parseFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#timeout_error}
  */
  readonly timeoutError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthCaptchaInstTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_captcha_inst_tmpl_trigger_stats_rate',
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
    this._aamAuthCaptchaInstTmplName = config.aamAuthCaptchaInstTmplName;
    this._attrFail = config.attrFail;
    this._duration = config.duration;
    this._id = config.id;
    this._jsonFail = config.jsonFail;
    this._otherError = config.otherError;
    this._parseFail = config.parseFail;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._timeoutError = config.timeoutError;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_captcha_inst_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthCaptchaInstTmplName?: string; 
  public get aamAuthCaptchaInstTmplName() {
    return this.getStringAttribute('aam_auth_captcha_inst_tmpl_name');
  }
  public set aamAuthCaptchaInstTmplName(value: string) {
    this._aamAuthCaptchaInstTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthCaptchaInstTmplNameInput() {
    return this._aamAuthCaptchaInstTmplName;
  }

  // attr_fail - computed: false, optional: true, required: false
  private _attrFail?: number; 
  public get attrFail() {
    return this.getNumberAttribute('attr_fail');
  }
  public set attrFail(value: number) {
    this._attrFail = value;
  }
  public resetAttrFail() {
    this._attrFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrFailInput() {
    return this._attrFail;
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

  // json_fail - computed: false, optional: true, required: false
  private _jsonFail?: number; 
  public get jsonFail() {
    return this.getNumberAttribute('json_fail');
  }
  public set jsonFail(value: number) {
    this._jsonFail = value;
  }
  public resetJsonFail() {
    this._jsonFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFailInput() {
    return this._jsonFail;
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

  // parse_fail - computed: false, optional: true, required: false
  private _parseFail?: number; 
  public get parseFail() {
    return this.getNumberAttribute('parse_fail');
  }
  public set parseFail(value: number) {
    this._parseFail = value;
  }
  public resetParseFail() {
    this._parseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseFailInput() {
    return this._parseFail;
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
      aam_auth_captcha_inst_tmpl_name: cdktf.stringToTerraform(this._aamAuthCaptchaInstTmplName),
      attr_fail: cdktf.numberToTerraform(this._attrFail),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      json_fail: cdktf.numberToTerraform(this._jsonFail),
      other_error: cdktf.numberToTerraform(this._otherError),
      parse_fail: cdktf.numberToTerraform(this._parseFail),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      timeout_error: cdktf.numberToTerraform(this._timeoutError),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_captcha_inst_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthCaptchaInstTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_fail: {
        value: cdktf.numberToHclTerraform(this._attrFail),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_fail: {
        value: cdktf.numberToHclTerraform(this._jsonFail),
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
      parse_fail: {
        value: cdktf.numberToHclTerraform(this._parseFail),
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
