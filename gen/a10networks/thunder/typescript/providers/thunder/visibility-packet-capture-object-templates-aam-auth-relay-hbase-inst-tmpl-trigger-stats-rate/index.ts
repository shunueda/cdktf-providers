// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_relay_hbase_inst_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#aam_auth_relay_hbase_inst_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#aam_auth_relay_hbase_inst_tmpl_name}
  */
  readonly aamAuthRelayHbaseInstTmplName: string;
  /**
  * Enable automatic packet-capture for Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#bad_req VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#bad_req}
  */
  readonly badReq?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#forbidden VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#forbidden}
  */
  readonly forbidden?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for No Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#no_creds VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#no_creds}
  */
  readonly noCreds?: number;
  /**
  * Enable automatic packet-capture for Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#not_found VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#not_found}
  */
  readonly notFound?: number;
  /**
  * Enable automatic packet-capture for Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#server_error VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#server_error}
  */
  readonly serverError?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#unauth VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#unauth}
  */
  readonly unauth?: number;
  /**
  * Enable automatic packet-capture for Service Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#unavailable VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#unavailable}
  */
  readonly unavailable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayHbaseInstTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_hbase_inst_tmpl_trigger_stats_rate',
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
    this._aamAuthRelayHbaseInstTmplName = config.aamAuthRelayHbaseInstTmplName;
    this._badReq = config.badReq;
    this._duration = config.duration;
    this._forbidden = config.forbidden;
    this._id = config.id;
    this._noCreds = config.noCreds;
    this._notFound = config.notFound;
    this._serverError = config.serverError;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._unauth = config.unauth;
    this._unavailable = config.unavailable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_relay_hbase_inst_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthRelayHbaseInstTmplName?: string; 
  public get aamAuthRelayHbaseInstTmplName() {
    return this.getStringAttribute('aam_auth_relay_hbase_inst_tmpl_name');
  }
  public set aamAuthRelayHbaseInstTmplName(value: string) {
    this._aamAuthRelayHbaseInstTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthRelayHbaseInstTmplNameInput() {
    return this._aamAuthRelayHbaseInstTmplName;
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
      aam_auth_relay_hbase_inst_tmpl_name: cdktf.stringToTerraform(this._aamAuthRelayHbaseInstTmplName),
      bad_req: cdktf.numberToTerraform(this._badReq),
      duration: cdktf.numberToTerraform(this._duration),
      forbidden: cdktf.numberToTerraform(this._forbidden),
      id: cdktf.stringToTerraform(this._id),
      no_creds: cdktf.numberToTerraform(this._noCreds),
      not_found: cdktf.numberToTerraform(this._notFound),
      server_error: cdktf.numberToTerraform(this._serverError),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      unauth: cdktf.numberToTerraform(this._unauth),
      unavailable: cdktf.numberToTerraform(this._unavailable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_relay_hbase_inst_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthRelayHbaseInstTmplName),
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
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
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
