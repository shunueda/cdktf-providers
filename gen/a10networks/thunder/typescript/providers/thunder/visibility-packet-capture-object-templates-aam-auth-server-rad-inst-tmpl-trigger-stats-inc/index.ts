// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_server_rad_inst_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#aam_auth_server_rad_inst_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#aam_auth_server_rad_inst_tmpl_name}
  */
  readonly aamAuthServerRadInstTmplName: string;
  /**
  * Enable automatic packet-capture for Accounting Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#accounting_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#accounting_failure}
  */
  readonly accountingFailure?: number;
  /**
  * Enable automatic packet-capture for Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#authen_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#authen_failure}
  */
  readonly authenFailure?: number;
  /**
  * Enable automatic packet-capture for Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#authorize_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#other_error}
  */
  readonly otherError?: number;
  /**
  * Enable automatic packet-capture for Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#timeout_error}
  */
  readonly timeoutError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerRadInstTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_rad_inst_tmpl_trigger_stats_inc',
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
    this._aamAuthServerRadInstTmplName = config.aamAuthServerRadInstTmplName;
    this._accountingFailure = config.accountingFailure;
    this._authenFailure = config.authenFailure;
    this._authorizeFailure = config.authorizeFailure;
    this._id = config.id;
    this._otherError = config.otherError;
    this._timeoutError = config.timeoutError;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_server_rad_inst_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthServerRadInstTmplName?: string; 
  public get aamAuthServerRadInstTmplName() {
    return this.getStringAttribute('aam_auth_server_rad_inst_tmpl_name');
  }
  public set aamAuthServerRadInstTmplName(value: string) {
    this._aamAuthServerRadInstTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthServerRadInstTmplNameInput() {
    return this._aamAuthServerRadInstTmplName;
  }

  // accounting_failure - computed: false, optional: true, required: false
  private _accountingFailure?: number; 
  public get accountingFailure() {
    return this.getNumberAttribute('accounting_failure');
  }
  public set accountingFailure(value: number) {
    this._accountingFailure = value;
  }
  public resetAccountingFailure() {
    this._accountingFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingFailureInput() {
    return this._accountingFailure;
  }

  // authen_failure - computed: false, optional: true, required: false
  private _authenFailure?: number; 
  public get authenFailure() {
    return this.getNumberAttribute('authen_failure');
  }
  public set authenFailure(value: number) {
    this._authenFailure = value;
  }
  public resetAuthenFailure() {
    this._authenFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenFailureInput() {
    return this._authenFailure;
  }

  // authorize_failure - computed: false, optional: true, required: false
  private _authorizeFailure?: number; 
  public get authorizeFailure() {
    return this.getNumberAttribute('authorize_failure');
  }
  public set authorizeFailure(value: number) {
    this._authorizeFailure = value;
  }
  public resetAuthorizeFailure() {
    this._authorizeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeFailureInput() {
    return this._authorizeFailure;
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
      aam_auth_server_rad_inst_tmpl_name: cdktf.stringToTerraform(this._aamAuthServerRadInstTmplName),
      accounting_failure: cdktf.numberToTerraform(this._accountingFailure),
      authen_failure: cdktf.numberToTerraform(this._authenFailure),
      authorize_failure: cdktf.numberToTerraform(this._authorizeFailure),
      id: cdktf.stringToTerraform(this._id),
      other_error: cdktf.numberToTerraform(this._otherError),
      timeout_error: cdktf.numberToTerraform(this._timeoutError),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_server_rad_inst_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthServerRadInstTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_failure: {
        value: cdktf.numberToHclTerraform(this._accountingFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authen_failure: {
        value: cdktf.numberToHclTerraform(this._authenFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorize_failure: {
        value: cdktf.numberToHclTerraform(this._authorizeFailure),
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
      other_error: {
        value: cdktf.numberToHclTerraform(this._otherError),
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
