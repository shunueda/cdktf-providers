// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiameterfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#cmd_flags_reserve_set DiameterfilterProfile#cmd_flags_reserve_set}
  */
  readonly cmdFlagsReserveSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#command_code_invalid DiameterfilterProfile#command_code_invalid}
  */
  readonly commandCodeInvalid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#command_code_range DiameterfilterProfile#command_code_range}
  */
  readonly commandCodeRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#comment DiameterfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#id DiameterfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#log_packet DiameterfilterProfile#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#message_length_invalid DiameterfilterProfile#message_length_invalid}
  */
  readonly messageLengthInvalid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#missing_request_action DiameterfilterProfile#missing_request_action}
  */
  readonly missingRequestAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#monitor_all_messages DiameterfilterProfile#monitor_all_messages}
  */
  readonly monitorAllMessages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#name DiameterfilterProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#protocol_version_invalid DiameterfilterProfile#protocol_version_invalid}
  */
  readonly protocolVersionInvalid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#request_error_flag_set DiameterfilterProfile#request_error_flag_set}
  */
  readonly requestErrorFlagSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#track_requests_answers DiameterfilterProfile#track_requests_answers}
  */
  readonly trackRequestsAnswers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#vdomparam DiameterfilterProfile#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile fortios_diameterfilter_profile}
*/
export class DiameterfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_diameterfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiameterfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiameterfilterProfile to import
  * @param importFromId The id of the existing DiameterfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiameterfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_diameterfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/diameterfilter_profile fortios_diameterfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiameterfilterProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DiameterfilterProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_diameterfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cmdFlagsReserveSet = config.cmdFlagsReserveSet;
    this._commandCodeInvalid = config.commandCodeInvalid;
    this._commandCodeRange = config.commandCodeRange;
    this._comment = config.comment;
    this._id = config.id;
    this._logPacket = config.logPacket;
    this._messageLengthInvalid = config.messageLengthInvalid;
    this._missingRequestAction = config.missingRequestAction;
    this._monitorAllMessages = config.monitorAllMessages;
    this._name = config.name;
    this._protocolVersionInvalid = config.protocolVersionInvalid;
    this._requestErrorFlagSet = config.requestErrorFlagSet;
    this._trackRequestsAnswers = config.trackRequestsAnswers;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmd_flags_reserve_set - computed: true, optional: true, required: false
  private _cmdFlagsReserveSet?: string; 
  public get cmdFlagsReserveSet() {
    return this.getStringAttribute('cmd_flags_reserve_set');
  }
  public set cmdFlagsReserveSet(value: string) {
    this._cmdFlagsReserveSet = value;
  }
  public resetCmdFlagsReserveSet() {
    this._cmdFlagsReserveSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdFlagsReserveSetInput() {
    return this._cmdFlagsReserveSet;
  }

  // command_code_invalid - computed: true, optional: true, required: false
  private _commandCodeInvalid?: string; 
  public get commandCodeInvalid() {
    return this.getStringAttribute('command_code_invalid');
  }
  public set commandCodeInvalid(value: string) {
    this._commandCodeInvalid = value;
  }
  public resetCommandCodeInvalid() {
    this._commandCodeInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandCodeInvalidInput() {
    return this._commandCodeInvalid;
  }

  // command_code_range - computed: false, optional: true, required: false
  private _commandCodeRange?: string; 
  public get commandCodeRange() {
    return this.getStringAttribute('command_code_range');
  }
  public set commandCodeRange(value: string) {
    this._commandCodeRange = value;
  }
  public resetCommandCodeRange() {
    this._commandCodeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandCodeRangeInput() {
    return this._commandCodeRange;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // log_packet - computed: true, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // message_length_invalid - computed: true, optional: true, required: false
  private _messageLengthInvalid?: string; 
  public get messageLengthInvalid() {
    return this.getStringAttribute('message_length_invalid');
  }
  public set messageLengthInvalid(value: string) {
    this._messageLengthInvalid = value;
  }
  public resetMessageLengthInvalid() {
    this._messageLengthInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageLengthInvalidInput() {
    return this._messageLengthInvalid;
  }

  // missing_request_action - computed: true, optional: true, required: false
  private _missingRequestAction?: string; 
  public get missingRequestAction() {
    return this.getStringAttribute('missing_request_action');
  }
  public set missingRequestAction(value: string) {
    this._missingRequestAction = value;
  }
  public resetMissingRequestAction() {
    this._missingRequestAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRequestActionInput() {
    return this._missingRequestAction;
  }

  // monitor_all_messages - computed: true, optional: true, required: false
  private _monitorAllMessages?: string; 
  public get monitorAllMessages() {
    return this.getStringAttribute('monitor_all_messages');
  }
  public set monitorAllMessages(value: string) {
    this._monitorAllMessages = value;
  }
  public resetMonitorAllMessages() {
    this._monitorAllMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAllMessagesInput() {
    return this._monitorAllMessages;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol_version_invalid - computed: true, optional: true, required: false
  private _protocolVersionInvalid?: string; 
  public get protocolVersionInvalid() {
    return this.getStringAttribute('protocol_version_invalid');
  }
  public set protocolVersionInvalid(value: string) {
    this._protocolVersionInvalid = value;
  }
  public resetProtocolVersionInvalid() {
    this._protocolVersionInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInvalidInput() {
    return this._protocolVersionInvalid;
  }

  // request_error_flag_set - computed: true, optional: true, required: false
  private _requestErrorFlagSet?: string; 
  public get requestErrorFlagSet() {
    return this.getStringAttribute('request_error_flag_set');
  }
  public set requestErrorFlagSet(value: string) {
    this._requestErrorFlagSet = value;
  }
  public resetRequestErrorFlagSet() {
    this._requestErrorFlagSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestErrorFlagSetInput() {
    return this._requestErrorFlagSet;
  }

  // track_requests_answers - computed: true, optional: true, required: false
  private _trackRequestsAnswers?: string; 
  public get trackRequestsAnswers() {
    return this.getStringAttribute('track_requests_answers');
  }
  public set trackRequestsAnswers(value: string) {
    this._trackRequestsAnswers = value;
  }
  public resetTrackRequestsAnswers() {
    this._trackRequestsAnswers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackRequestsAnswersInput() {
    return this._trackRequestsAnswers;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cmd_flags_reserve_set: cdktf.stringToTerraform(this._cmdFlagsReserveSet),
      command_code_invalid: cdktf.stringToTerraform(this._commandCodeInvalid),
      command_code_range: cdktf.stringToTerraform(this._commandCodeRange),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      log_packet: cdktf.stringToTerraform(this._logPacket),
      message_length_invalid: cdktf.stringToTerraform(this._messageLengthInvalid),
      missing_request_action: cdktf.stringToTerraform(this._missingRequestAction),
      monitor_all_messages: cdktf.stringToTerraform(this._monitorAllMessages),
      name: cdktf.stringToTerraform(this._name),
      protocol_version_invalid: cdktf.stringToTerraform(this._protocolVersionInvalid),
      request_error_flag_set: cdktf.stringToTerraform(this._requestErrorFlagSet),
      track_requests_answers: cdktf.stringToTerraform(this._trackRequestsAnswers),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cmd_flags_reserve_set: {
        value: cdktf.stringToHclTerraform(this._cmdFlagsReserveSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_code_invalid: {
        value: cdktf.stringToHclTerraform(this._commandCodeInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_code_range: {
        value: cdktf.stringToHclTerraform(this._commandCodeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      log_packet: {
        value: cdktf.stringToHclTerraform(this._logPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_length_invalid: {
        value: cdktf.stringToHclTerraform(this._messageLengthInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      missing_request_action: {
        value: cdktf.stringToHclTerraform(this._missingRequestAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_all_messages: {
        value: cdktf.stringToHclTerraform(this._monitorAllMessages),
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
      protocol_version_invalid: {
        value: cdktf.stringToHclTerraform(this._protocolVersionInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_error_flag_set: {
        value: cdktf.stringToHclTerraform(this._requestErrorFlagSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_requests_answers: {
        value: cdktf.stringToHclTerraform(this._trackRequestsAnswers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
