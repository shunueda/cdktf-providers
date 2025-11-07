// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsCallsRecordingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#call_sid ApiAccountsCallsRecordings#call_sid}
  */
  readonly callSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#id ApiAccountsCallsRecordings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#path_account_sid ApiAccountsCallsRecordings#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#pause_behavior ApiAccountsCallsRecordings#pause_behavior}
  */
  readonly pauseBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#recording_channels ApiAccountsCallsRecordings#recording_channels}
  */
  readonly recordingChannels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#recording_status_callback ApiAccountsCallsRecordings#recording_status_callback}
  */
  readonly recordingStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#recording_status_callback_event ApiAccountsCallsRecordings#recording_status_callback_event}
  */
  readonly recordingStatusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#recording_status_callback_method ApiAccountsCallsRecordings#recording_status_callback_method}
  */
  readonly recordingStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#recording_track ApiAccountsCallsRecordings#recording_track}
  */
  readonly recordingTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#status ApiAccountsCallsRecordings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#trim ApiAccountsCallsRecordings#trim}
  */
  readonly trim?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings twilio_api_accounts_calls_recordings}
*/
export class ApiAccountsCallsRecordings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_calls_recordings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsCallsRecordings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsCallsRecordings to import
  * @param importFromId The id of the existing ApiAccountsCallsRecordings that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsCallsRecordings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_calls_recordings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls_recordings twilio_api_accounts_calls_recordings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsCallsRecordingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsCallsRecordingsConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_calls_recordings',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callSid = config.callSid;
    this._id = config.id;
    this._pathAccountSid = config.pathAccountSid;
    this._pauseBehavior = config.pauseBehavior;
    this._recordingChannels = config.recordingChannels;
    this._recordingStatusCallback = config.recordingStatusCallback;
    this._recordingStatusCallbackEvent = config.recordingStatusCallbackEvent;
    this._recordingStatusCallbackMethod = config.recordingStatusCallbackMethod;
    this._recordingTrack = config.recordingTrack;
    this._status = config.status;
    this._trim = config.trim;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // call_sid - computed: false, optional: false, required: true
  private _callSid?: string; 
  public get callSid() {
    return this.getStringAttribute('call_sid');
  }
  public set callSid(value: string) {
    this._callSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callSidInput() {
    return this._callSid;
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

  // path_account_sid - computed: true, optional: true, required: false
  private _pathAccountSid?: string; 
  public get pathAccountSid() {
    return this.getStringAttribute('path_account_sid');
  }
  public set pathAccountSid(value: string) {
    this._pathAccountSid = value;
  }
  public resetPathAccountSid() {
    this._pathAccountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAccountSidInput() {
    return this._pathAccountSid;
  }

  // pause_behavior - computed: true, optional: true, required: false
  private _pauseBehavior?: string; 
  public get pauseBehavior() {
    return this.getStringAttribute('pause_behavior');
  }
  public set pauseBehavior(value: string) {
    this._pauseBehavior = value;
  }
  public resetPauseBehavior() {
    this._pauseBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseBehaviorInput() {
    return this._pauseBehavior;
  }

  // recording_channels - computed: true, optional: true, required: false
  private _recordingChannels?: string; 
  public get recordingChannels() {
    return this.getStringAttribute('recording_channels');
  }
  public set recordingChannels(value: string) {
    this._recordingChannels = value;
  }
  public resetRecordingChannels() {
    this._recordingChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingChannelsInput() {
    return this._recordingChannels;
  }

  // recording_status_callback - computed: true, optional: true, required: false
  private _recordingStatusCallback?: string; 
  public get recordingStatusCallback() {
    return this.getStringAttribute('recording_status_callback');
  }
  public set recordingStatusCallback(value: string) {
    this._recordingStatusCallback = value;
  }
  public resetRecordingStatusCallback() {
    this._recordingStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStatusCallbackInput() {
    return this._recordingStatusCallback;
  }

  // recording_status_callback_event - computed: true, optional: true, required: false
  private _recordingStatusCallbackEvent?: string[]; 
  public get recordingStatusCallbackEvent() {
    return this.getListAttribute('recording_status_callback_event');
  }
  public set recordingStatusCallbackEvent(value: string[]) {
    this._recordingStatusCallbackEvent = value;
  }
  public resetRecordingStatusCallbackEvent() {
    this._recordingStatusCallbackEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStatusCallbackEventInput() {
    return this._recordingStatusCallbackEvent;
  }

  // recording_status_callback_method - computed: true, optional: true, required: false
  private _recordingStatusCallbackMethod?: string; 
  public get recordingStatusCallbackMethod() {
    return this.getStringAttribute('recording_status_callback_method');
  }
  public set recordingStatusCallbackMethod(value: string) {
    this._recordingStatusCallbackMethod = value;
  }
  public resetRecordingStatusCallbackMethod() {
    this._recordingStatusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStatusCallbackMethodInput() {
    return this._recordingStatusCallbackMethod;
  }

  // recording_track - computed: true, optional: true, required: false
  private _recordingTrack?: string; 
  public get recordingTrack() {
    return this.getStringAttribute('recording_track');
  }
  public set recordingTrack(value: string) {
    this._recordingTrack = value;
  }
  public resetRecordingTrack() {
    this._recordingTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingTrackInput() {
    return this._recordingTrack;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trim - computed: true, optional: true, required: false
  private _trim?: string; 
  public get trim() {
    return this.getStringAttribute('trim');
  }
  public set trim(value: string) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      call_sid: cdktf.stringToTerraform(this._callSid),
      id: cdktf.stringToTerraform(this._id),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      pause_behavior: cdktf.stringToTerraform(this._pauseBehavior),
      recording_channels: cdktf.stringToTerraform(this._recordingChannels),
      recording_status_callback: cdktf.stringToTerraform(this._recordingStatusCallback),
      recording_status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordingStatusCallbackEvent),
      recording_status_callback_method: cdktf.stringToTerraform(this._recordingStatusCallbackMethod),
      recording_track: cdktf.stringToTerraform(this._recordingTrack),
      status: cdktf.stringToTerraform(this._status),
      trim: cdktf.stringToTerraform(this._trim),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      call_sid: {
        value: cdktf.stringToHclTerraform(this._callSid),
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
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_behavior: {
        value: cdktf.stringToHclTerraform(this._pauseBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_channels: {
        value: cdktf.stringToHclTerraform(this._recordingChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_status_callback: {
        value: cdktf.stringToHclTerraform(this._recordingStatusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_status_callback_event: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordingStatusCallbackEvent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recording_status_callback_method: {
        value: cdktf.stringToHclTerraform(this._recordingStatusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_track: {
        value: cdktf.stringToHclTerraform(this._recordingTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim: {
        value: cdktf.stringToHclTerraform(this._trim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
