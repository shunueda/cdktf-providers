// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#bad_req VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#bad_req}
  */
  readonly badReq?: number;
  /**
  * Enable automatic packet-capture for Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#forbidden VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#forbidden}
  */
  readonly forbidden?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for No Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#no_creds VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#no_creds}
  */
  readonly noCreds?: number;
  /**
  * Enable automatic packet-capture for Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#not_found VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#not_found}
  */
  readonly notFound?: number;
  /**
  * Enable automatic packet-capture for Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#server_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#server_error}
  */
  readonly serverError?: number;
  /**
  * Enable automatic packet-capture for Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#unauth VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#unauth}
  */
  readonly unauth?: number;
  /**
  * Enable automatic packet-capture for Service Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#unavailable VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#unavailable}
  */
  readonly unavailable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_inc',
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
    this._badReq = config.badReq;
    this._forbidden = config.forbidden;
    this._id = config.id;
    this._name = config.name;
    this._noCreds = config.noCreds;
    this._notFound = config.notFound;
    this._serverError = config.serverError;
    this._unauth = config.unauth;
    this._unavailable = config.unavailable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // forbidden - computed: false, optional: true, required: false
  private _forbidden?: number; 
  public get forbidden() {
    return this.getNumberAttribute('forbidden');
  }
  public set forbidden(value: number) {
    this._forbidden = value;
  }
  public resetForbidden() {
    this._forbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenInput() {
    return this._forbidden;
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

  // no_creds - computed: false, optional: true, required: false
  private _noCreds?: number; 
  public get noCreds() {
    return this.getNumberAttribute('no_creds');
  }
  public set noCreds(value: number) {
    this._noCreds = value;
  }
  public resetNoCreds() {
    this._noCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCredsInput() {
    return this._noCreds;
  }

  // not_found - computed: false, optional: true, required: false
  private _notFound?: number; 
  public get notFound() {
    return this.getNumberAttribute('not_found');
  }
  public set notFound(value: number) {
    this._notFound = value;
  }
  public resetNotFound() {
    this._notFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundInput() {
    return this._notFound;
  }

  // server_error - computed: false, optional: true, required: false
  private _serverError?: number; 
  public get serverError() {
    return this.getNumberAttribute('server_error');
  }
  public set serverError(value: number) {
    this._serverError = value;
  }
  public resetServerError() {
    this._serverError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorInput() {
    return this._serverError;
  }

  // unauth - computed: false, optional: true, required: false
  private _unauth?: number; 
  public get unauth() {
    return this.getNumberAttribute('unauth');
  }
  public set unauth(value: number) {
    this._unauth = value;
  }
  public resetUnauth() {
    this._unauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthInput() {
    return this._unauth;
  }

  // unavailable - computed: false, optional: true, required: false
  private _unavailable?: number; 
  public get unavailable() {
    return this.getNumberAttribute('unavailable');
  }
  public set unavailable(value: number) {
    this._unavailable = value;
  }
  public resetUnavailable() {
    this._unavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableInput() {
    return this._unavailable;
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
      bad_req: cdktf.numberToTerraform(this._badReq),
      forbidden: cdktf.numberToTerraform(this._forbidden),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      no_creds: cdktf.numberToTerraform(this._noCreds),
      not_found: cdktf.numberToTerraform(this._notFound),
      server_error: cdktf.numberToTerraform(this._serverError),
      unauth: cdktf.numberToTerraform(this._unauth),
      unavailable: cdktf.numberToTerraform(this._unavailable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bad_req: {
        value: cdktf.numberToHclTerraform(this._badReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forbidden: {
        value: cdktf.numberToHclTerraform(this._forbidden),
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
      no_creds: {
        value: cdktf.numberToHclTerraform(this._noCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_found: {
        value: cdktf.numberToHclTerraform(this._notFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_error: {
        value: cdktf.numberToHclTerraform(this._serverError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unauth: {
        value: cdktf.numberToHclTerraform(this._unauth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unavailable: {
        value: cdktf.numberToHclTerraform(this._unavailable),
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
