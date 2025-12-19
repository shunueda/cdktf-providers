// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_relay_form_inst_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#aam_auth_relay_form_inst_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#aam_auth_relay_form_inst_tmpl_name}
  */
  readonly aamAuthRelayFormInstTmplName: string;
  /**
  * Enable automatic packet-capture for Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#bad_req VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#bad_req}
  */
  readonly badReq?: number;
  /**
  * Enable automatic packet-capture for Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#error VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#error}
  */
  readonly error?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Invalid Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#invalid_cred VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#invalid_cred}
  */
  readonly invalidCred?: number;
  /**
  * Enable automatic packet-capture for Invalid Server Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#invalid_srv_rsp VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#invalid_srv_rsp}
  */
  readonly invalidSrvRsp?: number;
  /**
  * Enable automatic packet-capture for Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#not_fnd VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#not_fnd}
  */
  readonly notFnd?: number;
  /**
  * Enable automatic packet-capture for Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#other_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#other_error}
  */
  readonly otherError?: number;
  /**
  * Enable automatic packet-capture for POST Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#post_fail VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#post_fail}
  */
  readonly postFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayFormInstTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_form_inst_tmpl_trigger_stats_inc',
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
    this._aamAuthRelayFormInstTmplName = config.aamAuthRelayFormInstTmplName;
    this._badReq = config.badReq;
    this._error = config.error;
    this._id = config.id;
    this._invalidCred = config.invalidCred;
    this._invalidSrvRsp = config.invalidSrvRsp;
    this._notFnd = config.notFnd;
    this._otherError = config.otherError;
    this._postFail = config.postFail;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_relay_form_inst_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthRelayFormInstTmplName?: string; 
  public get aamAuthRelayFormInstTmplName() {
    return this.getStringAttribute('aam_auth_relay_form_inst_tmpl_name');
  }
  public set aamAuthRelayFormInstTmplName(value: string) {
    this._aamAuthRelayFormInstTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthRelayFormInstTmplNameInput() {
    return this._aamAuthRelayFormInstTmplName;
  }

  // bad_req - computed: false, optional: true, required: false
  private _badReq?: number; 
  public get badReq() {
    return this.getNumberAttribute('bad_req');
  }
  public set badReq(value: number) {
    this._badReq = value;
  }
  public resetBadReq() {
    this._badReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badReqInput() {
    return this._badReq;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
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

  // invalid_cred - computed: false, optional: true, required: false
  private _invalidCred?: number; 
  public get invalidCred() {
    return this.getNumberAttribute('invalid_cred');
  }
  public set invalidCred(value: number) {
    this._invalidCred = value;
  }
  public resetInvalidCred() {
    this._invalidCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCredInput() {
    return this._invalidCred;
  }

  // invalid_srv_rsp - computed: false, optional: true, required: false
  private _invalidSrvRsp?: number; 
  public get invalidSrvRsp() {
    return this.getNumberAttribute('invalid_srv_rsp');
  }
  public set invalidSrvRsp(value: number) {
    this._invalidSrvRsp = value;
  }
  public resetInvalidSrvRsp() {
    this._invalidSrvRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSrvRspInput() {
    return this._invalidSrvRsp;
  }

  // not_fnd - computed: false, optional: true, required: false
  private _notFnd?: number; 
  public get notFnd() {
    return this.getNumberAttribute('not_fnd');
  }
  public set notFnd(value: number) {
    this._notFnd = value;
  }
  public resetNotFnd() {
    this._notFnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFndInput() {
    return this._notFnd;
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

  // post_fail - computed: false, optional: true, required: false
  private _postFail?: number; 
  public get postFail() {
    return this.getNumberAttribute('post_fail');
  }
  public set postFail(value: number) {
    this._postFail = value;
  }
  public resetPostFail() {
    this._postFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postFailInput() {
    return this._postFail;
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
      aam_auth_relay_form_inst_tmpl_name: cdktf.stringToTerraform(this._aamAuthRelayFormInstTmplName),
      bad_req: cdktf.numberToTerraform(this._badReq),
      error: cdktf.numberToTerraform(this._error),
      id: cdktf.stringToTerraform(this._id),
      invalid_cred: cdktf.numberToTerraform(this._invalidCred),
      invalid_srv_rsp: cdktf.numberToTerraform(this._invalidSrvRsp),
      not_fnd: cdktf.numberToTerraform(this._notFnd),
      other_error: cdktf.numberToTerraform(this._otherError),
      post_fail: cdktf.numberToTerraform(this._postFail),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_relay_form_inst_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthRelayFormInstTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bad_req: {
        value: cdktf.numberToHclTerraform(this._badReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error: {
        value: cdktf.numberToHclTerraform(this._error),
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
      invalid_cred: {
        value: cdktf.numberToHclTerraform(this._invalidCred),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_srv_rsp: {
        value: cdktf.numberToHclTerraform(this._invalidSrvRsp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_fnd: {
        value: cdktf.numberToHclTerraform(this._notFnd),
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
      post_fail: {
        value: cdktf.numberToHclTerraform(this._postFail),
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
