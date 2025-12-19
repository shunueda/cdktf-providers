// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_server_win_inst_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#aam_auth_server_win_inst_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#aam_auth_server_win_inst_tmpl_name}
  */
  readonly aamAuthServerWinInstTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#krb_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#krb_other_error}
  */
  readonly krbOtherError?: number;
  /**
  * Enable automatic packet-capture for Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#krb_pw_change_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#krb_pw_change_failure}
  */
  readonly krbPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#krb_pw_expiry VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#krb_pw_expiry}
  */
  readonly krbPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#krb_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#krb_timeout_error}
  */
  readonly krbTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#krb_validate_kdc_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#krb_validate_kdc_failure}
  */
  readonly krbValidateKdcFailure?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl_trigger_stats_inc',
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
    this._aamAuthServerWinInstTmplName = config.aamAuthServerWinInstTmplName;
    this._id = config.id;
    this._krbOtherError = config.krbOtherError;
    this._krbPwChangeFailure = config.krbPwChangeFailure;
    this._krbPwExpiry = config.krbPwExpiry;
    this._krbTimeoutError = config.krbTimeoutError;
    this._krbValidateKdcFailure = config.krbValidateKdcFailure;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_server_win_inst_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthServerWinInstTmplName?: string; 
  public get aamAuthServerWinInstTmplName() {
    return this.getStringAttribute('aam_auth_server_win_inst_tmpl_name');
  }
  public set aamAuthServerWinInstTmplName(value: string) {
    this._aamAuthServerWinInstTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthServerWinInstTmplNameInput() {
    return this._aamAuthServerWinInstTmplName;
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
      aam_auth_server_win_inst_tmpl_name: cdktf.stringToTerraform(this._aamAuthServerWinInstTmplName),
      id: cdktf.stringToTerraform(this._id),
      krb_other_error: cdktf.numberToTerraform(this._krbOtherError),
      krb_pw_change_failure: cdktf.numberToTerraform(this._krbPwChangeFailure),
      krb_pw_expiry: cdktf.numberToTerraform(this._krbPwExpiry),
      krb_timeout_error: cdktf.numberToTerraform(this._krbTimeoutError),
      krb_validate_kdc_failure: cdktf.numberToTerraform(this._krbValidateKdcFailure),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_server_win_inst_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthServerWinInstTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
