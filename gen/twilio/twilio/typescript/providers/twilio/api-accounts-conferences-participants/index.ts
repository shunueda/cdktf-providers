// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsConferencesParticipantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#amd_status_callback ApiAccountsConferencesParticipants#amd_status_callback}
  */
  readonly amdStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#amd_status_callback_method ApiAccountsConferencesParticipants#amd_status_callback_method}
  */
  readonly amdStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#announce_method ApiAccountsConferencesParticipants#announce_method}
  */
  readonly announceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#announce_url ApiAccountsConferencesParticipants#announce_url}
  */
  readonly announceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#beep ApiAccountsConferencesParticipants#beep}
  */
  readonly beep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#beep_on_exit ApiAccountsConferencesParticipants#beep_on_exit}
  */
  readonly beepOnExit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#byoc ApiAccountsConferencesParticipants#byoc}
  */
  readonly byoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#call_reason ApiAccountsConferencesParticipants#call_reason}
  */
  readonly callReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#call_sid_to_coach ApiAccountsConferencesParticipants#call_sid_to_coach}
  */
  readonly callSidToCoach?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#call_token ApiAccountsConferencesParticipants#call_token}
  */
  readonly callToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#caller_id ApiAccountsConferencesParticipants#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#coaching ApiAccountsConferencesParticipants#coaching}
  */
  readonly coaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_record ApiAccountsConferencesParticipants#conference_record}
  */
  readonly conferenceRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_recording_status_callback ApiAccountsConferencesParticipants#conference_recording_status_callback}
  */
  readonly conferenceRecordingStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_recording_status_callback_event ApiAccountsConferencesParticipants#conference_recording_status_callback_event}
  */
  readonly conferenceRecordingStatusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_recording_status_callback_method ApiAccountsConferencesParticipants#conference_recording_status_callback_method}
  */
  readonly conferenceRecordingStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_sid ApiAccountsConferencesParticipants#conference_sid}
  */
  readonly conferenceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_status_callback ApiAccountsConferencesParticipants#conference_status_callback}
  */
  readonly conferenceStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_status_callback_event ApiAccountsConferencesParticipants#conference_status_callback_event}
  */
  readonly conferenceStatusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_status_callback_method ApiAccountsConferencesParticipants#conference_status_callback_method}
  */
  readonly conferenceStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#conference_trim ApiAccountsConferencesParticipants#conference_trim}
  */
  readonly conferenceTrim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#early_media ApiAccountsConferencesParticipants#early_media}
  */
  readonly earlyMedia?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#end_conference_on_exit ApiAccountsConferencesParticipants#end_conference_on_exit}
  */
  readonly endConferenceOnExit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#from ApiAccountsConferencesParticipants#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#hold ApiAccountsConferencesParticipants#hold}
  */
  readonly hold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#hold_method ApiAccountsConferencesParticipants#hold_method}
  */
  readonly holdMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#hold_url ApiAccountsConferencesParticipants#hold_url}
  */
  readonly holdUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#id ApiAccountsConferencesParticipants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#jitter_buffer_size ApiAccountsConferencesParticipants#jitter_buffer_size}
  */
  readonly jitterBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#label ApiAccountsConferencesParticipants#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#machine_detection ApiAccountsConferencesParticipants#machine_detection}
  */
  readonly machineDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#machine_detection_silence_timeout ApiAccountsConferencesParticipants#machine_detection_silence_timeout}
  */
  readonly machineDetectionSilenceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#machine_detection_speech_end_threshold ApiAccountsConferencesParticipants#machine_detection_speech_end_threshold}
  */
  readonly machineDetectionSpeechEndThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#machine_detection_speech_threshold ApiAccountsConferencesParticipants#machine_detection_speech_threshold}
  */
  readonly machineDetectionSpeechThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#machine_detection_timeout ApiAccountsConferencesParticipants#machine_detection_timeout}
  */
  readonly machineDetectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#max_participants ApiAccountsConferencesParticipants#max_participants}
  */
  readonly maxParticipants?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#muted ApiAccountsConferencesParticipants#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#path_account_sid ApiAccountsConferencesParticipants#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#record ApiAccountsConferencesParticipants#record}
  */
  readonly record?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#recording_channels ApiAccountsConferencesParticipants#recording_channels}
  */
  readonly recordingChannels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#recording_status_callback ApiAccountsConferencesParticipants#recording_status_callback}
  */
  readonly recordingStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#recording_status_callback_event ApiAccountsConferencesParticipants#recording_status_callback_event}
  */
  readonly recordingStatusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#recording_status_callback_method ApiAccountsConferencesParticipants#recording_status_callback_method}
  */
  readonly recordingStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#recording_track ApiAccountsConferencesParticipants#recording_track}
  */
  readonly recordingTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#region ApiAccountsConferencesParticipants#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#sip_auth_password ApiAccountsConferencesParticipants#sip_auth_password}
  */
  readonly sipAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#sip_auth_username ApiAccountsConferencesParticipants#sip_auth_username}
  */
  readonly sipAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#start_conference_on_enter ApiAccountsConferencesParticipants#start_conference_on_enter}
  */
  readonly startConferenceOnEnter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#status_callback ApiAccountsConferencesParticipants#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#status_callback_event ApiAccountsConferencesParticipants#status_callback_event}
  */
  readonly statusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#status_callback_method ApiAccountsConferencesParticipants#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#time_limit ApiAccountsConferencesParticipants#time_limit}
  */
  readonly timeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#timeout ApiAccountsConferencesParticipants#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#to ApiAccountsConferencesParticipants#to}
  */
  readonly to: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#trim ApiAccountsConferencesParticipants#trim}
  */
  readonly trim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#wait_method ApiAccountsConferencesParticipants#wait_method}
  */
  readonly waitMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#wait_url ApiAccountsConferencesParticipants#wait_url}
  */
  readonly waitUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants twilio_api_accounts_conferences_participants}
*/
export class ApiAccountsConferencesParticipants extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_conferences_participants";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsConferencesParticipants resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsConferencesParticipants to import
  * @param importFromId The id of the existing ApiAccountsConferencesParticipants that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsConferencesParticipants to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_conferences_participants", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_conferences_participants twilio_api_accounts_conferences_participants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsConferencesParticipantsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsConferencesParticipantsConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_conferences_participants',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amdStatusCallback = config.amdStatusCallback;
    this._amdStatusCallbackMethod = config.amdStatusCallbackMethod;
    this._announceMethod = config.announceMethod;
    this._announceUrl = config.announceUrl;
    this._beep = config.beep;
    this._beepOnExit = config.beepOnExit;
    this._byoc = config.byoc;
    this._callReason = config.callReason;
    this._callSidToCoach = config.callSidToCoach;
    this._callToken = config.callToken;
    this._callerId = config.callerId;
    this._coaching = config.coaching;
    this._conferenceRecord = config.conferenceRecord;
    this._conferenceRecordingStatusCallback = config.conferenceRecordingStatusCallback;
    this._conferenceRecordingStatusCallbackEvent = config.conferenceRecordingStatusCallbackEvent;
    this._conferenceRecordingStatusCallbackMethod = config.conferenceRecordingStatusCallbackMethod;
    this._conferenceSid = config.conferenceSid;
    this._conferenceStatusCallback = config.conferenceStatusCallback;
    this._conferenceStatusCallbackEvent = config.conferenceStatusCallbackEvent;
    this._conferenceStatusCallbackMethod = config.conferenceStatusCallbackMethod;
    this._conferenceTrim = config.conferenceTrim;
    this._earlyMedia = config.earlyMedia;
    this._endConferenceOnExit = config.endConferenceOnExit;
    this._from = config.from;
    this._hold = config.hold;
    this._holdMethod = config.holdMethod;
    this._holdUrl = config.holdUrl;
    this._id = config.id;
    this._jitterBufferSize = config.jitterBufferSize;
    this._label = config.label;
    this._machineDetection = config.machineDetection;
    this._machineDetectionSilenceTimeout = config.machineDetectionSilenceTimeout;
    this._machineDetectionSpeechEndThreshold = config.machineDetectionSpeechEndThreshold;
    this._machineDetectionSpeechThreshold = config.machineDetectionSpeechThreshold;
    this._machineDetectionTimeout = config.machineDetectionTimeout;
    this._maxParticipants = config.maxParticipants;
    this._muted = config.muted;
    this._pathAccountSid = config.pathAccountSid;
    this._record = config.record;
    this._recordingChannels = config.recordingChannels;
    this._recordingStatusCallback = config.recordingStatusCallback;
    this._recordingStatusCallbackEvent = config.recordingStatusCallbackEvent;
    this._recordingStatusCallbackMethod = config.recordingStatusCallbackMethod;
    this._recordingTrack = config.recordingTrack;
    this._region = config.region;
    this._sipAuthPassword = config.sipAuthPassword;
    this._sipAuthUsername = config.sipAuthUsername;
    this._startConferenceOnEnter = config.startConferenceOnEnter;
    this._statusCallback = config.statusCallback;
    this._statusCallbackEvent = config.statusCallbackEvent;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._timeLimit = config.timeLimit;
    this._timeout = config.timeout;
    this._to = config.to;
    this._trim = config.trim;
    this._waitMethod = config.waitMethod;
    this._waitUrl = config.waitUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amd_status_callback - computed: true, optional: true, required: false
  private _amdStatusCallback?: string; 
  public get amdStatusCallback() {
    return this.getStringAttribute('amd_status_callback');
  }
  public set amdStatusCallback(value: string) {
    this._amdStatusCallback = value;
  }
  public resetAmdStatusCallback() {
    this._amdStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amdStatusCallbackInput() {
    return this._amdStatusCallback;
  }

  // amd_status_callback_method - computed: true, optional: true, required: false
  private _amdStatusCallbackMethod?: string; 
  public get amdStatusCallbackMethod() {
    return this.getStringAttribute('amd_status_callback_method');
  }
  public set amdStatusCallbackMethod(value: string) {
    this._amdStatusCallbackMethod = value;
  }
  public resetAmdStatusCallbackMethod() {
    this._amdStatusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amdStatusCallbackMethodInput() {
    return this._amdStatusCallbackMethod;
  }

  // announce_method - computed: true, optional: true, required: false
  private _announceMethod?: string; 
  public get announceMethod() {
    return this.getStringAttribute('announce_method');
  }
  public set announceMethod(value: string) {
    this._announceMethod = value;
  }
  public resetAnnounceMethod() {
    this._announceMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceMethodInput() {
    return this._announceMethod;
  }

  // announce_url - computed: true, optional: true, required: false
  private _announceUrl?: string; 
  public get announceUrl() {
    return this.getStringAttribute('announce_url');
  }
  public set announceUrl(value: string) {
    this._announceUrl = value;
  }
  public resetAnnounceUrl() {
    this._announceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceUrlInput() {
    return this._announceUrl;
  }

  // beep - computed: true, optional: true, required: false
  private _beep?: string; 
  public get beep() {
    return this.getStringAttribute('beep');
  }
  public set beep(value: string) {
    this._beep = value;
  }
  public resetBeep() {
    this._beep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beepInput() {
    return this._beep;
  }

  // beep_on_exit - computed: true, optional: true, required: false
  private _beepOnExit?: boolean | cdktf.IResolvable; 
  public get beepOnExit() {
    return this.getBooleanAttribute('beep_on_exit');
  }
  public set beepOnExit(value: boolean | cdktf.IResolvable) {
    this._beepOnExit = value;
  }
  public resetBeepOnExit() {
    this._beepOnExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beepOnExitInput() {
    return this._beepOnExit;
  }

  // byoc - computed: true, optional: true, required: false
  private _byoc?: string; 
  public get byoc() {
    return this.getStringAttribute('byoc');
  }
  public set byoc(value: string) {
    this._byoc = value;
  }
  public resetByoc() {
    this._byoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byocInput() {
    return this._byoc;
  }

  // call_reason - computed: true, optional: true, required: false
  private _callReason?: string; 
  public get callReason() {
    return this.getStringAttribute('call_reason');
  }
  public set callReason(value: string) {
    this._callReason = value;
  }
  public resetCallReason() {
    this._callReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callReasonInput() {
    return this._callReason;
  }

  // call_sid - computed: true, optional: false, required: false
  public get callSid() {
    return this.getStringAttribute('call_sid');
  }

  // call_sid_to_coach - computed: true, optional: true, required: false
  private _callSidToCoach?: string; 
  public get callSidToCoach() {
    return this.getStringAttribute('call_sid_to_coach');
  }
  public set callSidToCoach(value: string) {
    this._callSidToCoach = value;
  }
  public resetCallSidToCoach() {
    this._callSidToCoach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callSidToCoachInput() {
    return this._callSidToCoach;
  }

  // call_token - computed: true, optional: true, required: false
  private _callToken?: string; 
  public get callToken() {
    return this.getStringAttribute('call_token');
  }
  public set callToken(value: string) {
    this._callToken = value;
  }
  public resetCallToken() {
    this._callToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callTokenInput() {
    return this._callToken;
  }

  // caller_id - computed: true, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // coaching - computed: true, optional: true, required: false
  private _coaching?: boolean | cdktf.IResolvable; 
  public get coaching() {
    return this.getBooleanAttribute('coaching');
  }
  public set coaching(value: boolean | cdktf.IResolvable) {
    this._coaching = value;
  }
  public resetCoaching() {
    this._coaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coachingInput() {
    return this._coaching;
  }

  // conference_record - computed: true, optional: true, required: false
  private _conferenceRecord?: string; 
  public get conferenceRecord() {
    return this.getStringAttribute('conference_record');
  }
  public set conferenceRecord(value: string) {
    this._conferenceRecord = value;
  }
  public resetConferenceRecord() {
    this._conferenceRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceRecordInput() {
    return this._conferenceRecord;
  }

  // conference_recording_status_callback - computed: true, optional: true, required: false
  private _conferenceRecordingStatusCallback?: string; 
  public get conferenceRecordingStatusCallback() {
    return this.getStringAttribute('conference_recording_status_callback');
  }
  public set conferenceRecordingStatusCallback(value: string) {
    this._conferenceRecordingStatusCallback = value;
  }
  public resetConferenceRecordingStatusCallback() {
    this._conferenceRecordingStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceRecordingStatusCallbackInput() {
    return this._conferenceRecordingStatusCallback;
  }

  // conference_recording_status_callback_event - computed: true, optional: true, required: false
  private _conferenceRecordingStatusCallbackEvent?: string[]; 
  public get conferenceRecordingStatusCallbackEvent() {
    return this.getListAttribute('conference_recording_status_callback_event');
  }
  public set conferenceRecordingStatusCallbackEvent(value: string[]) {
    this._conferenceRecordingStatusCallbackEvent = value;
  }
  public resetConferenceRecordingStatusCallbackEvent() {
    this._conferenceRecordingStatusCallbackEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceRecordingStatusCallbackEventInput() {
    return this._conferenceRecordingStatusCallbackEvent;
  }

  // conference_recording_status_callback_method - computed: true, optional: true, required: false
  private _conferenceRecordingStatusCallbackMethod?: string; 
  public get conferenceRecordingStatusCallbackMethod() {
    return this.getStringAttribute('conference_recording_status_callback_method');
  }
  public set conferenceRecordingStatusCallbackMethod(value: string) {
    this._conferenceRecordingStatusCallbackMethod = value;
  }
  public resetConferenceRecordingStatusCallbackMethod() {
    this._conferenceRecordingStatusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceRecordingStatusCallbackMethodInput() {
    return this._conferenceRecordingStatusCallbackMethod;
  }

  // conference_sid - computed: false, optional: false, required: true
  private _conferenceSid?: string; 
  public get conferenceSid() {
    return this.getStringAttribute('conference_sid');
  }
  public set conferenceSid(value: string) {
    this._conferenceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceSidInput() {
    return this._conferenceSid;
  }

  // conference_status_callback - computed: true, optional: true, required: false
  private _conferenceStatusCallback?: string; 
  public get conferenceStatusCallback() {
    return this.getStringAttribute('conference_status_callback');
  }
  public set conferenceStatusCallback(value: string) {
    this._conferenceStatusCallback = value;
  }
  public resetConferenceStatusCallback() {
    this._conferenceStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceStatusCallbackInput() {
    return this._conferenceStatusCallback;
  }

  // conference_status_callback_event - computed: true, optional: true, required: false
  private _conferenceStatusCallbackEvent?: string[]; 
  public get conferenceStatusCallbackEvent() {
    return this.getListAttribute('conference_status_callback_event');
  }
  public set conferenceStatusCallbackEvent(value: string[]) {
    this._conferenceStatusCallbackEvent = value;
  }
  public resetConferenceStatusCallbackEvent() {
    this._conferenceStatusCallbackEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceStatusCallbackEventInput() {
    return this._conferenceStatusCallbackEvent;
  }

  // conference_status_callback_method - computed: true, optional: true, required: false
  private _conferenceStatusCallbackMethod?: string; 
  public get conferenceStatusCallbackMethod() {
    return this.getStringAttribute('conference_status_callback_method');
  }
  public set conferenceStatusCallbackMethod(value: string) {
    this._conferenceStatusCallbackMethod = value;
  }
  public resetConferenceStatusCallbackMethod() {
    this._conferenceStatusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceStatusCallbackMethodInput() {
    return this._conferenceStatusCallbackMethod;
  }

  // conference_trim - computed: true, optional: true, required: false
  private _conferenceTrim?: string; 
  public get conferenceTrim() {
    return this.getStringAttribute('conference_trim');
  }
  public set conferenceTrim(value: string) {
    this._conferenceTrim = value;
  }
  public resetConferenceTrim() {
    this._conferenceTrim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceTrimInput() {
    return this._conferenceTrim;
  }

  // early_media - computed: true, optional: true, required: false
  private _earlyMedia?: boolean | cdktf.IResolvable; 
  public get earlyMedia() {
    return this.getBooleanAttribute('early_media');
  }
  public set earlyMedia(value: boolean | cdktf.IResolvable) {
    this._earlyMedia = value;
  }
  public resetEarlyMedia() {
    this._earlyMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyMediaInput() {
    return this._earlyMedia;
  }

  // end_conference_on_exit - computed: true, optional: true, required: false
  private _endConferenceOnExit?: boolean | cdktf.IResolvable; 
  public get endConferenceOnExit() {
    return this.getBooleanAttribute('end_conference_on_exit');
  }
  public set endConferenceOnExit(value: boolean | cdktf.IResolvable) {
    this._endConferenceOnExit = value;
  }
  public resetEndConferenceOnExit() {
    this._endConferenceOnExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endConferenceOnExitInput() {
    return this._endConferenceOnExit;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // hold - computed: true, optional: true, required: false
  private _hold?: boolean | cdktf.IResolvable; 
  public get hold() {
    return this.getBooleanAttribute('hold');
  }
  public set hold(value: boolean | cdktf.IResolvable) {
    this._hold = value;
  }
  public resetHold() {
    this._hold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdInput() {
    return this._hold;
  }

  // hold_method - computed: true, optional: true, required: false
  private _holdMethod?: string; 
  public get holdMethod() {
    return this.getStringAttribute('hold_method');
  }
  public set holdMethod(value: string) {
    this._holdMethod = value;
  }
  public resetHoldMethod() {
    this._holdMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdMethodInput() {
    return this._holdMethod;
  }

  // hold_url - computed: true, optional: true, required: false
  private _holdUrl?: string; 
  public get holdUrl() {
    return this.getStringAttribute('hold_url');
  }
  public set holdUrl(value: string) {
    this._holdUrl = value;
  }
  public resetHoldUrl() {
    this._holdUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdUrlInput() {
    return this._holdUrl;
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

  // jitter_buffer_size - computed: true, optional: true, required: false
  private _jitterBufferSize?: string; 
  public get jitterBufferSize() {
    return this.getStringAttribute('jitter_buffer_size');
  }
  public set jitterBufferSize(value: string) {
    this._jitterBufferSize = value;
  }
  public resetJitterBufferSize() {
    this._jitterBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterBufferSizeInput() {
    return this._jitterBufferSize;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // machine_detection - computed: true, optional: true, required: false
  private _machineDetection?: string; 
  public get machineDetection() {
    return this.getStringAttribute('machine_detection');
  }
  public set machineDetection(value: string) {
    this._machineDetection = value;
  }
  public resetMachineDetection() {
    this._machineDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDetectionInput() {
    return this._machineDetection;
  }

  // machine_detection_silence_timeout - computed: true, optional: true, required: false
  private _machineDetectionSilenceTimeout?: number; 
  public get machineDetectionSilenceTimeout() {
    return this.getNumberAttribute('machine_detection_silence_timeout');
  }
  public set machineDetectionSilenceTimeout(value: number) {
    this._machineDetectionSilenceTimeout = value;
  }
  public resetMachineDetectionSilenceTimeout() {
    this._machineDetectionSilenceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDetectionSilenceTimeoutInput() {
    return this._machineDetectionSilenceTimeout;
  }

  // machine_detection_speech_end_threshold - computed: true, optional: true, required: false
  private _machineDetectionSpeechEndThreshold?: number; 
  public get machineDetectionSpeechEndThreshold() {
    return this.getNumberAttribute('machine_detection_speech_end_threshold');
  }
  public set machineDetectionSpeechEndThreshold(value: number) {
    this._machineDetectionSpeechEndThreshold = value;
  }
  public resetMachineDetectionSpeechEndThreshold() {
    this._machineDetectionSpeechEndThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDetectionSpeechEndThresholdInput() {
    return this._machineDetectionSpeechEndThreshold;
  }

  // machine_detection_speech_threshold - computed: true, optional: true, required: false
  private _machineDetectionSpeechThreshold?: number; 
  public get machineDetectionSpeechThreshold() {
    return this.getNumberAttribute('machine_detection_speech_threshold');
  }
  public set machineDetectionSpeechThreshold(value: number) {
    this._machineDetectionSpeechThreshold = value;
  }
  public resetMachineDetectionSpeechThreshold() {
    this._machineDetectionSpeechThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDetectionSpeechThresholdInput() {
    return this._machineDetectionSpeechThreshold;
  }

  // machine_detection_timeout - computed: true, optional: true, required: false
  private _machineDetectionTimeout?: number; 
  public get machineDetectionTimeout() {
    return this.getNumberAttribute('machine_detection_timeout');
  }
  public set machineDetectionTimeout(value: number) {
    this._machineDetectionTimeout = value;
  }
  public resetMachineDetectionTimeout() {
    this._machineDetectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDetectionTimeoutInput() {
    return this._machineDetectionTimeout;
  }

  // max_participants - computed: true, optional: true, required: false
  private _maxParticipants?: number; 
  public get maxParticipants() {
    return this.getNumberAttribute('max_participants');
  }
  public set maxParticipants(value: number) {
    this._maxParticipants = value;
  }
  public resetMaxParticipants() {
    this._maxParticipants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParticipantsInput() {
    return this._maxParticipants;
  }

  // muted - computed: true, optional: true, required: false
  private _muted?: boolean | cdktf.IResolvable; 
  public get muted() {
    return this.getBooleanAttribute('muted');
  }
  public set muted(value: boolean | cdktf.IResolvable) {
    this._muted = value;
  }
  public resetMuted() {
    this._muted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutedInput() {
    return this._muted;
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

  // record - computed: true, optional: true, required: false
  private _record?: boolean | cdktf.IResolvable; 
  public get record() {
    return this.getBooleanAttribute('record');
  }
  public set record(value: boolean | cdktf.IResolvable) {
    this._record = value;
  }
  public resetRecord() {
    this._record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sip_auth_password - computed: true, optional: true, required: false
  private _sipAuthPassword?: string; 
  public get sipAuthPassword() {
    return this.getStringAttribute('sip_auth_password');
  }
  public set sipAuthPassword(value: string) {
    this._sipAuthPassword = value;
  }
  public resetSipAuthPassword() {
    this._sipAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAuthPasswordInput() {
    return this._sipAuthPassword;
  }

  // sip_auth_username - computed: true, optional: true, required: false
  private _sipAuthUsername?: string; 
  public get sipAuthUsername() {
    return this.getStringAttribute('sip_auth_username');
  }
  public set sipAuthUsername(value: string) {
    this._sipAuthUsername = value;
  }
  public resetSipAuthUsername() {
    this._sipAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAuthUsernameInput() {
    return this._sipAuthUsername;
  }

  // start_conference_on_enter - computed: true, optional: true, required: false
  private _startConferenceOnEnter?: boolean | cdktf.IResolvable; 
  public get startConferenceOnEnter() {
    return this.getBooleanAttribute('start_conference_on_enter');
  }
  public set startConferenceOnEnter(value: boolean | cdktf.IResolvable) {
    this._startConferenceOnEnter = value;
  }
  public resetStartConferenceOnEnter() {
    this._startConferenceOnEnter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startConferenceOnEnterInput() {
    return this._startConferenceOnEnter;
  }

  // status_callback - computed: true, optional: true, required: false
  private _statusCallback?: string; 
  public get statusCallback() {
    return this.getStringAttribute('status_callback');
  }
  public set statusCallback(value: string) {
    this._statusCallback = value;
  }
  public resetStatusCallback() {
    this._statusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackInput() {
    return this._statusCallback;
  }

  // status_callback_event - computed: true, optional: true, required: false
  private _statusCallbackEvent?: string[]; 
  public get statusCallbackEvent() {
    return this.getListAttribute('status_callback_event');
  }
  public set statusCallbackEvent(value: string[]) {
    this._statusCallbackEvent = value;
  }
  public resetStatusCallbackEvent() {
    this._statusCallbackEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackEventInput() {
    return this._statusCallbackEvent;
  }

  // status_callback_method - computed: true, optional: true, required: false
  private _statusCallbackMethod?: string; 
  public get statusCallbackMethod() {
    return this.getStringAttribute('status_callback_method');
  }
  public set statusCallbackMethod(value: string) {
    this._statusCallbackMethod = value;
  }
  public resetStatusCallbackMethod() {
    this._statusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackMethodInput() {
    return this._statusCallbackMethod;
  }

  // time_limit - computed: true, optional: true, required: false
  private _timeLimit?: number; 
  public get timeLimit() {
    return this.getNumberAttribute('time_limit');
  }
  public set timeLimit(value: number) {
    this._timeLimit = value;
  }
  public resetTimeLimit() {
    this._timeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitInput() {
    return this._timeLimit;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
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

  // wait_method - computed: true, optional: true, required: false
  private _waitMethod?: string; 
  public get waitMethod() {
    return this.getStringAttribute('wait_method');
  }
  public set waitMethod(value: string) {
    this._waitMethod = value;
  }
  public resetWaitMethod() {
    this._waitMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitMethodInput() {
    return this._waitMethod;
  }

  // wait_url - computed: true, optional: true, required: false
  private _waitUrl?: string; 
  public get waitUrl() {
    return this.getStringAttribute('wait_url');
  }
  public set waitUrl(value: string) {
    this._waitUrl = value;
  }
  public resetWaitUrl() {
    this._waitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUrlInput() {
    return this._waitUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amd_status_callback: cdktf.stringToTerraform(this._amdStatusCallback),
      amd_status_callback_method: cdktf.stringToTerraform(this._amdStatusCallbackMethod),
      announce_method: cdktf.stringToTerraform(this._announceMethod),
      announce_url: cdktf.stringToTerraform(this._announceUrl),
      beep: cdktf.stringToTerraform(this._beep),
      beep_on_exit: cdktf.booleanToTerraform(this._beepOnExit),
      byoc: cdktf.stringToTerraform(this._byoc),
      call_reason: cdktf.stringToTerraform(this._callReason),
      call_sid_to_coach: cdktf.stringToTerraform(this._callSidToCoach),
      call_token: cdktf.stringToTerraform(this._callToken),
      caller_id: cdktf.stringToTerraform(this._callerId),
      coaching: cdktf.booleanToTerraform(this._coaching),
      conference_record: cdktf.stringToTerraform(this._conferenceRecord),
      conference_recording_status_callback: cdktf.stringToTerraform(this._conferenceRecordingStatusCallback),
      conference_recording_status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conferenceRecordingStatusCallbackEvent),
      conference_recording_status_callback_method: cdktf.stringToTerraform(this._conferenceRecordingStatusCallbackMethod),
      conference_sid: cdktf.stringToTerraform(this._conferenceSid),
      conference_status_callback: cdktf.stringToTerraform(this._conferenceStatusCallback),
      conference_status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conferenceStatusCallbackEvent),
      conference_status_callback_method: cdktf.stringToTerraform(this._conferenceStatusCallbackMethod),
      conference_trim: cdktf.stringToTerraform(this._conferenceTrim),
      early_media: cdktf.booleanToTerraform(this._earlyMedia),
      end_conference_on_exit: cdktf.booleanToTerraform(this._endConferenceOnExit),
      from: cdktf.stringToTerraform(this._from),
      hold: cdktf.booleanToTerraform(this._hold),
      hold_method: cdktf.stringToTerraform(this._holdMethod),
      hold_url: cdktf.stringToTerraform(this._holdUrl),
      id: cdktf.stringToTerraform(this._id),
      jitter_buffer_size: cdktf.stringToTerraform(this._jitterBufferSize),
      label: cdktf.stringToTerraform(this._label),
      machine_detection: cdktf.stringToTerraform(this._machineDetection),
      machine_detection_silence_timeout: cdktf.numberToTerraform(this._machineDetectionSilenceTimeout),
      machine_detection_speech_end_threshold: cdktf.numberToTerraform(this._machineDetectionSpeechEndThreshold),
      machine_detection_speech_threshold: cdktf.numberToTerraform(this._machineDetectionSpeechThreshold),
      machine_detection_timeout: cdktf.numberToTerraform(this._machineDetectionTimeout),
      max_participants: cdktf.numberToTerraform(this._maxParticipants),
      muted: cdktf.booleanToTerraform(this._muted),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      record: cdktf.booleanToTerraform(this._record),
      recording_channels: cdktf.stringToTerraform(this._recordingChannels),
      recording_status_callback: cdktf.stringToTerraform(this._recordingStatusCallback),
      recording_status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordingStatusCallbackEvent),
      recording_status_callback_method: cdktf.stringToTerraform(this._recordingStatusCallbackMethod),
      recording_track: cdktf.stringToTerraform(this._recordingTrack),
      region: cdktf.stringToTerraform(this._region),
      sip_auth_password: cdktf.stringToTerraform(this._sipAuthPassword),
      sip_auth_username: cdktf.stringToTerraform(this._sipAuthUsername),
      start_conference_on_enter: cdktf.booleanToTerraform(this._startConferenceOnEnter),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statusCallbackEvent),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      time_limit: cdktf.numberToTerraform(this._timeLimit),
      timeout: cdktf.numberToTerraform(this._timeout),
      to: cdktf.stringToTerraform(this._to),
      trim: cdktf.stringToTerraform(this._trim),
      wait_method: cdktf.stringToTerraform(this._waitMethod),
      wait_url: cdktf.stringToTerraform(this._waitUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amd_status_callback: {
        value: cdktf.stringToHclTerraform(this._amdStatusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      amd_status_callback_method: {
        value: cdktf.stringToHclTerraform(this._amdStatusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announce_method: {
        value: cdktf.stringToHclTerraform(this._announceMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announce_url: {
        value: cdktf.stringToHclTerraform(this._announceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beep: {
        value: cdktf.stringToHclTerraform(this._beep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beep_on_exit: {
        value: cdktf.booleanToHclTerraform(this._beepOnExit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      byoc: {
        value: cdktf.stringToHclTerraform(this._byoc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_reason: {
        value: cdktf.stringToHclTerraform(this._callReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_sid_to_coach: {
        value: cdktf.stringToHclTerraform(this._callSidToCoach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_token: {
        value: cdktf.stringToHclTerraform(this._callToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caller_id: {
        value: cdktf.stringToHclTerraform(this._callerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coaching: {
        value: cdktf.booleanToHclTerraform(this._coaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conference_record: {
        value: cdktf.stringToHclTerraform(this._conferenceRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conference_recording_status_callback: {
        value: cdktf.stringToHclTerraform(this._conferenceRecordingStatusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conference_recording_status_callback_event: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._conferenceRecordingStatusCallbackEvent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      conference_recording_status_callback_method: {
        value: cdktf.stringToHclTerraform(this._conferenceRecordingStatusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conference_sid: {
        value: cdktf.stringToHclTerraform(this._conferenceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conference_status_callback: {
        value: cdktf.stringToHclTerraform(this._conferenceStatusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conference_status_callback_event: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._conferenceStatusCallbackEvent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      conference_status_callback_method: {
        value: cdktf.stringToHclTerraform(this._conferenceStatusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conference_trim: {
        value: cdktf.stringToHclTerraform(this._conferenceTrim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_media: {
        value: cdktf.booleanToHclTerraform(this._earlyMedia),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_conference_on_exit: {
        value: cdktf.booleanToHclTerraform(this._endConferenceOnExit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold: {
        value: cdktf.booleanToHclTerraform(this._hold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hold_method: {
        value: cdktf.stringToHclTerraform(this._holdMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_url: {
        value: cdktf.stringToHclTerraform(this._holdUrl),
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
      jitter_buffer_size: {
        value: cdktf.stringToHclTerraform(this._jitterBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_detection: {
        value: cdktf.stringToHclTerraform(this._machineDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_detection_silence_timeout: {
        value: cdktf.numberToHclTerraform(this._machineDetectionSilenceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      machine_detection_speech_end_threshold: {
        value: cdktf.numberToHclTerraform(this._machineDetectionSpeechEndThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      machine_detection_speech_threshold: {
        value: cdktf.numberToHclTerraform(this._machineDetectionSpeechThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      machine_detection_timeout: {
        value: cdktf.numberToHclTerraform(this._machineDetectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_participants: {
        value: cdktf.numberToHclTerraform(this._maxParticipants),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      muted: {
        value: cdktf.booleanToHclTerraform(this._muted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record: {
        value: cdktf.booleanToHclTerraform(this._record),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_auth_password: {
        value: cdktf.stringToHclTerraform(this._sipAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_auth_username: {
        value: cdktf.stringToHclTerraform(this._sipAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_conference_on_enter: {
        value: cdktf.booleanToHclTerraform(this._startConferenceOnEnter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status_callback: {
        value: cdktf.stringToHclTerraform(this._statusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback_event: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statusCallbackEvent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status_callback_method: {
        value: cdktf.stringToHclTerraform(this._statusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_limit: {
        value: cdktf.numberToHclTerraform(this._timeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      to: {
        value: cdktf.stringToHclTerraform(this._to),
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
      wait_method: {
        value: cdktf.stringToHclTerraform(this._waitMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_url: {
        value: cdktf.stringToHclTerraform(this._waitUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
