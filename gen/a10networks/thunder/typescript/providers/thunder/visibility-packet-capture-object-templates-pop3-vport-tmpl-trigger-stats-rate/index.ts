// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#bad_sequence VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Enable automatic packet-capture for Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#cl_est_err VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#insert_tuple_fail VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * Enable automatic packet-capture for invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#invalid_start_line VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Enable automatic packet-capture for line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#line_too_long VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#name VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#no_route VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#rsv_persist_conn_fail VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#ser_connecting_err VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Enable automatic packet-capture for Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#server_response_err VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#smp_v4_fail VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#smp_v6_fail VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * Enable automatic packet-capture for source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#snat_fail VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#svrsel_fail VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unsupported cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#unsupported_command VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#unsupported_command}
  */
  readonly unsupportedCommand?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesPop3VportTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_pop3_vport_tmpl_trigger_stats_rate',
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
    this._badSequence = config.badSequence;
    this._clEstErr = config.clEstErr;
    this._duration = config.duration;
    this._id = config.id;
    this._insertTupleFail = config.insertTupleFail;
    this._invalidStartLine = config.invalidStartLine;
    this._lineTooLong = config.lineTooLong;
    this._name = config.name;
    this._noRoute = config.noRoute;
    this._rsvPersistConnFail = config.rsvPersistConnFail;
    this._serConnectingErr = config.serConnectingErr;
    this._serverResponseErr = config.serverResponseErr;
    this._smpV4Fail = config.smpV4Fail;
    this._smpV6Fail = config.smpV6Fail;
    this._snatFail = config.snatFail;
    this._svrselFail = config.svrselFail;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._unsupportedCommand = config.unsupportedCommand;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bad_sequence - computed: false, optional: true, required: false
  private _badSequence?: number; 
  public get badSequence() {
    return this.getNumberAttribute('bad_sequence');
  }
  public set badSequence(value: number) {
    this._badSequence = value;
  }
  public resetBadSequence() {
    this._badSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSequenceInput() {
    return this._badSequence;
  }

  // cl_est_err - computed: false, optional: true, required: false
  private _clEstErr?: number; 
  public get clEstErr() {
    return this.getNumberAttribute('cl_est_err');
  }
  public set clEstErr(value: number) {
    this._clEstErr = value;
  }
  public resetClEstErr() {
    this._clEstErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clEstErrInput() {
    return this._clEstErr;
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

  // insert_tuple_fail - computed: false, optional: true, required: false
  private _insertTupleFail?: number; 
  public get insertTupleFail() {
    return this.getNumberAttribute('insert_tuple_fail');
  }
  public set insertTupleFail(value: number) {
    this._insertTupleFail = value;
  }
  public resetInsertTupleFail() {
    this._insertTupleFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertTupleFailInput() {
    return this._insertTupleFail;
  }

  // invalid_start_line - computed: false, optional: true, required: false
  private _invalidStartLine?: number; 
  public get invalidStartLine() {
    return this.getNumberAttribute('invalid_start_line');
  }
  public set invalidStartLine(value: number) {
    this._invalidStartLine = value;
  }
  public resetInvalidStartLine() {
    this._invalidStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineInput() {
    return this._invalidStartLine;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
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

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // rsv_persist_conn_fail - computed: false, optional: true, required: false
  private _rsvPersistConnFail?: number; 
  public get rsvPersistConnFail() {
    return this.getNumberAttribute('rsv_persist_conn_fail');
  }
  public set rsvPersistConnFail(value: number) {
    this._rsvPersistConnFail = value;
  }
  public resetRsvPersistConnFail() {
    this._rsvPersistConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsvPersistConnFailInput() {
    return this._rsvPersistConnFail;
  }

  // ser_connecting_err - computed: false, optional: true, required: false
  private _serConnectingErr?: number; 
  public get serConnectingErr() {
    return this.getNumberAttribute('ser_connecting_err');
  }
  public set serConnectingErr(value: number) {
    this._serConnectingErr = value;
  }
  public resetSerConnectingErr() {
    this._serConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serConnectingErrInput() {
    return this._serConnectingErr;
  }

  // server_response_err - computed: false, optional: true, required: false
  private _serverResponseErr?: number; 
  public get serverResponseErr() {
    return this.getNumberAttribute('server_response_err');
  }
  public set serverResponseErr(value: number) {
    this._serverResponseErr = value;
  }
  public resetServerResponseErr() {
    this._serverResponseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseErrInput() {
    return this._serverResponseErr;
  }

  // smp_v4_fail - computed: false, optional: true, required: false
  private _smpV4Fail?: number; 
  public get smpV4Fail() {
    return this.getNumberAttribute('smp_v4_fail');
  }
  public set smpV4Fail(value: number) {
    this._smpV4Fail = value;
  }
  public resetSmpV4Fail() {
    this._smpV4Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV4FailInput() {
    return this._smpV4Fail;
  }

  // smp_v6_fail - computed: false, optional: true, required: false
  private _smpV6Fail?: number; 
  public get smpV6Fail() {
    return this.getNumberAttribute('smp_v6_fail');
  }
  public set smpV6Fail(value: number) {
    this._smpV6Fail = value;
  }
  public resetSmpV6Fail() {
    this._smpV6Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV6FailInput() {
    return this._smpV6Fail;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
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

  // unsupported_command - computed: false, optional: true, required: false
  private _unsupportedCommand?: number; 
  public get unsupportedCommand() {
    return this.getNumberAttribute('unsupported_command');
  }
  public set unsupportedCommand(value: number) {
    this._unsupportedCommand = value;
  }
  public resetUnsupportedCommand() {
    this._unsupportedCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCommandInput() {
    return this._unsupportedCommand;
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
      bad_sequence: cdktf.numberToTerraform(this._badSequence),
      cl_est_err: cdktf.numberToTerraform(this._clEstErr),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      insert_tuple_fail: cdktf.numberToTerraform(this._insertTupleFail),
      invalid_start_line: cdktf.numberToTerraform(this._invalidStartLine),
      line_too_long: cdktf.numberToTerraform(this._lineTooLong),
      name: cdktf.stringToTerraform(this._name),
      no_route: cdktf.numberToTerraform(this._noRoute),
      rsv_persist_conn_fail: cdktf.numberToTerraform(this._rsvPersistConnFail),
      ser_connecting_err: cdktf.numberToTerraform(this._serConnectingErr),
      server_response_err: cdktf.numberToTerraform(this._serverResponseErr),
      smp_v4_fail: cdktf.numberToTerraform(this._smpV4Fail),
      smp_v6_fail: cdktf.numberToTerraform(this._smpV6Fail),
      snat_fail: cdktf.numberToTerraform(this._snatFail),
      svrsel_fail: cdktf.numberToTerraform(this._svrselFail),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      unsupported_command: cdktf.numberToTerraform(this._unsupportedCommand),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bad_sequence: {
        value: cdktf.numberToHclTerraform(this._badSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cl_est_err: {
        value: cdktf.numberToHclTerraform(this._clEstErr),
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
      insert_tuple_fail: {
        value: cdktf.numberToHclTerraform(this._insertTupleFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_start_line: {
        value: cdktf.numberToHclTerraform(this._invalidStartLine),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      line_too_long: {
        value: cdktf.numberToHclTerraform(this._lineTooLong),
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
      no_route: {
        value: cdktf.numberToHclTerraform(this._noRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsv_persist_conn_fail: {
        value: cdktf.numberToHclTerraform(this._rsvPersistConnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ser_connecting_err: {
        value: cdktf.numberToHclTerraform(this._serConnectingErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_response_err: {
        value: cdktf.numberToHclTerraform(this._serverResponseErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_v4_fail: {
        value: cdktf.numberToHclTerraform(this._smpV4Fail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_v6_fail: {
        value: cdktf.numberToHclTerraform(this._smpV6Fail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_fail: {
        value: cdktf.numberToHclTerraform(this._snatFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svrsel_fail: {
        value: cdktf.numberToHclTerraform(this._svrselFail),
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
      unsupported_command: {
        value: cdktf.numberToHclTerraform(this._unsupportedCommand),
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
