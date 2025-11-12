// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#krb_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#krb_other_error}
  */
  readonly krbOtherError?: number;
  /**
  * Enable automatic packet-capture for Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#krb_pw_change_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#krb_pw_change_failure}
  */
  readonly krbPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#krb_pw_expiry VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#krb_pw_expiry}
  */
  readonly krbPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#krb_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#krb_timeout_error}
  */
  readonly krbTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#krb_validate_kdc_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#krb_validate_kdc_failure}
  */
  readonly krbValidateKdcFailure?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#name VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for NTLM Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#ntlm_auth_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#ntlm_auth_failure}
  */
  readonly ntlmAuthFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#ntlm_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#ntlm_other_error}
  */
  readonly ntlmOtherError?: number;
  /**
  * Enable automatic packet-capture for NTLM Prepare Request Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#ntlm_prepare_req_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#ntlm_prepare_req_error}
  */
  readonly ntlmPrepareReqError?: number;
  /**
  * Enable automatic packet-capture for NTLM Protocol Negotiation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#ntlm_proto_nego_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#ntlm_proto_nego_failure}
  */
  readonly ntlmProtoNegoFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Session Setup Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#ntlm_session_setup_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#ntlm_session_setup_failure}
  */
  readonly ntlmSessionSetupFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#ntlm_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#ntlm_timeout_error}
  */
  readonly ntlmTimeoutError?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_rate',
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
    this._id = config.id;
    this._krbOtherError = config.krbOtherError;
    this._krbPwChangeFailure = config.krbPwChangeFailure;
    this._krbPwExpiry = config.krbPwExpiry;
    this._krbTimeoutError = config.krbTimeoutError;
    this._krbValidateKdcFailure = config.krbValidateKdcFailure;
    this._name = config.name;
    this._ntlmAuthFailure = config.ntlmAuthFailure;
    this._ntlmOtherError = config.ntlmOtherError;
    this._ntlmPrepareReqError = config.ntlmPrepareReqError;
    this._ntlmProtoNegoFailure = config.ntlmProtoNegoFailure;
    this._ntlmSessionSetupFailure = config.ntlmSessionSetupFailure;
    this._ntlmTimeoutError = config.ntlmTimeoutError;
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

  // krb_other_error - computed: false, optional: true, required: false
  private _krbOtherError?: number; 
  public get krbOtherError() {
    return this.getNumberAttribute('krb_other_error');
  }
  public set krbOtherError(value: number) {
    this._krbOtherError = value;
  }
  public resetKrbOtherError() {
    this._krbOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbOtherErrorInput() {
    return this._krbOtherError;
  }

  // krb_pw_change_failure - computed: false, optional: true, required: false
  private _krbPwChangeFailure?: number; 
  public get krbPwChangeFailure() {
    return this.getNumberAttribute('krb_pw_change_failure');
  }
  public set krbPwChangeFailure(value: number) {
    this._krbPwChangeFailure = value;
  }
  public resetKrbPwChangeFailure() {
    this._krbPwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwChangeFailureInput() {
    return this._krbPwChangeFailure;
  }

  // krb_pw_expiry - computed: false, optional: true, required: false
  private _krbPwExpiry?: number; 
  public get krbPwExpiry() {
    return this.getNumberAttribute('krb_pw_expiry');
  }
  public set krbPwExpiry(value: number) {
    this._krbPwExpiry = value;
  }
  public resetKrbPwExpiry() {
    this._krbPwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwExpiryInput() {
    return this._krbPwExpiry;
  }

  // krb_timeout_error - computed: false, optional: true, required: false
  private _krbTimeoutError?: number; 
  public get krbTimeoutError() {
    return this.getNumberAttribute('krb_timeout_error');
  }
  public set krbTimeoutError(value: number) {
    this._krbTimeoutError = value;
  }
  public resetKrbTimeoutError() {
    this._krbTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbTimeoutErrorInput() {
    return this._krbTimeoutError;
  }

  // krb_validate_kdc_failure - computed: false, optional: true, required: false
  private _krbValidateKdcFailure?: number; 
  public get krbValidateKdcFailure() {
    return this.getNumberAttribute('krb_validate_kdc_failure');
  }
  public set krbValidateKdcFailure(value: number) {
    this._krbValidateKdcFailure = value;
  }
  public resetKrbValidateKdcFailure() {
    this._krbValidateKdcFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbValidateKdcFailureInput() {
    return this._krbValidateKdcFailure;
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

  // ntlm_auth_failure - computed: false, optional: true, required: false
  private _ntlmAuthFailure?: number; 
  public get ntlmAuthFailure() {
    return this.getNumberAttribute('ntlm_auth_failure');
  }
  public set ntlmAuthFailure(value: number) {
    this._ntlmAuthFailure = value;
  }
  public resetNtlmAuthFailure() {
    this._ntlmAuthFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthFailureInput() {
    return this._ntlmAuthFailure;
  }

  // ntlm_other_error - computed: false, optional: true, required: false
  private _ntlmOtherError?: number; 
  public get ntlmOtherError() {
    return this.getNumberAttribute('ntlm_other_error');
  }
  public set ntlmOtherError(value: number) {
    this._ntlmOtherError = value;
  }
  public resetNtlmOtherError() {
    this._ntlmOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmOtherErrorInput() {
    return this._ntlmOtherError;
  }

  // ntlm_prepare_req_error - computed: false, optional: true, required: false
  private _ntlmPrepareReqError?: number; 
  public get ntlmPrepareReqError() {
    return this.getNumberAttribute('ntlm_prepare_req_error');
  }
  public set ntlmPrepareReqError(value: number) {
    this._ntlmPrepareReqError = value;
  }
  public resetNtlmPrepareReqError() {
    this._ntlmPrepareReqError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPrepareReqErrorInput() {
    return this._ntlmPrepareReqError;
  }

  // ntlm_proto_nego_failure - computed: false, optional: true, required: false
  private _ntlmProtoNegoFailure?: number; 
  public get ntlmProtoNegoFailure() {
    return this.getNumberAttribute('ntlm_proto_nego_failure');
  }
  public set ntlmProtoNegoFailure(value: number) {
    this._ntlmProtoNegoFailure = value;
  }
  public resetNtlmProtoNegoFailure() {
    this._ntlmProtoNegoFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmProtoNegoFailureInput() {
    return this._ntlmProtoNegoFailure;
  }

  // ntlm_session_setup_failure - computed: false, optional: true, required: false
  private _ntlmSessionSetupFailure?: number; 
  public get ntlmSessionSetupFailure() {
    return this.getNumberAttribute('ntlm_session_setup_failure');
  }
  public set ntlmSessionSetupFailure(value: number) {
    this._ntlmSessionSetupFailure = value;
  }
  public resetNtlmSessionSetupFailure() {
    this._ntlmSessionSetupFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSessionSetupFailureInput() {
    return this._ntlmSessionSetupFailure;
  }

  // ntlm_timeout_error - computed: false, optional: true, required: false
  private _ntlmTimeoutError?: number; 
  public get ntlmTimeoutError() {
    return this.getNumberAttribute('ntlm_timeout_error');
  }
  public set ntlmTimeoutError(value: number) {
    this._ntlmTimeoutError = value;
  }
  public resetNtlmTimeoutError() {
    this._ntlmTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmTimeoutErrorInput() {
    return this._ntlmTimeoutError;
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
      id: cdktf.stringToTerraform(this._id),
      krb_other_error: cdktf.numberToTerraform(this._krbOtherError),
      krb_pw_change_failure: cdktf.numberToTerraform(this._krbPwChangeFailure),
      krb_pw_expiry: cdktf.numberToTerraform(this._krbPwExpiry),
      krb_timeout_error: cdktf.numberToTerraform(this._krbTimeoutError),
      krb_validate_kdc_failure: cdktf.numberToTerraform(this._krbValidateKdcFailure),
      name: cdktf.stringToTerraform(this._name),
      ntlm_auth_failure: cdktf.numberToTerraform(this._ntlmAuthFailure),
      ntlm_other_error: cdktf.numberToTerraform(this._ntlmOtherError),
      ntlm_prepare_req_error: cdktf.numberToTerraform(this._ntlmPrepareReqError),
      ntlm_proto_nego_failure: cdktf.numberToTerraform(this._ntlmProtoNegoFailure),
      ntlm_session_setup_failure: cdktf.numberToTerraform(this._ntlmSessionSetupFailure),
      ntlm_timeout_error: cdktf.numberToTerraform(this._ntlmTimeoutError),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      krb_other_error: {
        value: cdktf.numberToHclTerraform(this._krbOtherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb_pw_change_failure: {
        value: cdktf.numberToHclTerraform(this._krbPwChangeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb_pw_expiry: {
        value: cdktf.numberToHclTerraform(this._krbPwExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb_timeout_error: {
        value: cdktf.numberToHclTerraform(this._krbTimeoutError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      krb_validate_kdc_failure: {
        value: cdktf.numberToHclTerraform(this._krbValidateKdcFailure),
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
      ntlm_auth_failure: {
        value: cdktf.numberToHclTerraform(this._ntlmAuthFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntlm_other_error: {
        value: cdktf.numberToHclTerraform(this._ntlmOtherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntlm_prepare_req_error: {
        value: cdktf.numberToHclTerraform(this._ntlmPrepareReqError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntlm_proto_nego_failure: {
        value: cdktf.numberToHclTerraform(this._ntlmProtoNegoFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntlm_session_setup_failure: {
        value: cdktf.numberToHclTerraform(this._ntlmSessionSetupFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntlm_timeout_error: {
        value: cdktf.numberToHclTerraform(this._ntlmTimeoutError),
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
