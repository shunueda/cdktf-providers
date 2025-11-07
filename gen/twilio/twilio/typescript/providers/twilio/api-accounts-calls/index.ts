// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsCallsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#application_sid ApiAccountsCalls#application_sid}
  */
  readonly applicationSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#async_amd ApiAccountsCalls#async_amd}
  */
  readonly asyncAmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#async_amd_status_callback ApiAccountsCalls#async_amd_status_callback}
  */
  readonly asyncAmdStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#async_amd_status_callback_method ApiAccountsCalls#async_amd_status_callback_method}
  */
  readonly asyncAmdStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#byoc ApiAccountsCalls#byoc}
  */
  readonly byoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#call_reason ApiAccountsCalls#call_reason}
  */
  readonly callReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#call_token ApiAccountsCalls#call_token}
  */
  readonly callToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#caller_id ApiAccountsCalls#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#fallback_method ApiAccountsCalls#fallback_method}
  */
  readonly fallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#fallback_url ApiAccountsCalls#fallback_url}
  */
  readonly fallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#from ApiAccountsCalls#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#id ApiAccountsCalls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#machine_detection ApiAccountsCalls#machine_detection}
  */
  readonly machineDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#machine_detection_silence_timeout ApiAccountsCalls#machine_detection_silence_timeout}
  */
  readonly machineDetectionSilenceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#machine_detection_speech_end_threshold ApiAccountsCalls#machine_detection_speech_end_threshold}
  */
  readonly machineDetectionSpeechEndThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#machine_detection_speech_threshold ApiAccountsCalls#machine_detection_speech_threshold}
  */
  readonly machineDetectionSpeechThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#machine_detection_timeout ApiAccountsCalls#machine_detection_timeout}
  */
  readonly machineDetectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#method ApiAccountsCalls#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#path_account_sid ApiAccountsCalls#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#record ApiAccountsCalls#record}
  */
  readonly record?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#recording_channels ApiAccountsCalls#recording_channels}
  */
  readonly recordingChannels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#recording_status_callback ApiAccountsCalls#recording_status_callback}
  */
  readonly recordingStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#recording_status_callback_event ApiAccountsCalls#recording_status_callback_event}
  */
  readonly recordingStatusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#recording_status_callback_method ApiAccountsCalls#recording_status_callback_method}
  */
  readonly recordingStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#recording_track ApiAccountsCalls#recording_track}
  */
  readonly recordingTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#send_digits ApiAccountsCalls#send_digits}
  */
  readonly sendDigits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#sip_auth_password ApiAccountsCalls#sip_auth_password}
  */
  readonly sipAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#sip_auth_username ApiAccountsCalls#sip_auth_username}
  */
  readonly sipAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#status ApiAccountsCalls#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#status_callback ApiAccountsCalls#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#status_callback_event ApiAccountsCalls#status_callback_event}
  */
  readonly statusCallbackEvent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#status_callback_method ApiAccountsCalls#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#time_limit ApiAccountsCalls#time_limit}
  */
  readonly timeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#timeout ApiAccountsCalls#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#to ApiAccountsCalls#to}
  */
  readonly to: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#trim ApiAccountsCalls#trim}
  */
  readonly trim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#twiml ApiAccountsCalls#twiml}
  */
  readonly twiml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#url ApiAccountsCalls#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls twilio_api_accounts_calls}
*/
export class ApiAccountsCalls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_calls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsCalls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsCalls to import
  * @param importFromId The id of the existing ApiAccountsCalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsCalls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_calls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_calls twilio_api_accounts_calls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsCallsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsCallsConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_calls',
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
    this._applicationSid = config.applicationSid;
    this._asyncAmd = config.asyncAmd;
    this._asyncAmdStatusCallback = config.asyncAmdStatusCallback;
    this._asyncAmdStatusCallbackMethod = config.asyncAmdStatusCallbackMethod;
    this._byoc = config.byoc;
    this._callReason = config.callReason;
    this._callToken = config.callToken;
    this._callerId = config.callerId;
    this._fallbackMethod = config.fallbackMethod;
    this._fallbackUrl = config.fallbackUrl;
    this._from = config.from;
    this._id = config.id;
    this._machineDetection = config.machineDetection;
    this._machineDetectionSilenceTimeout = config.machineDetectionSilenceTimeout;
    this._machineDetectionSpeechEndThreshold = config.machineDetectionSpeechEndThreshold;
    this._machineDetectionSpeechThreshold = config.machineDetectionSpeechThreshold;
    this._machineDetectionTimeout = config.machineDetectionTimeout;
    this._method = config.method;
    this._pathAccountSid = config.pathAccountSid;
    this._record = config.record;
    this._recordingChannels = config.recordingChannels;
    this._recordingStatusCallback = config.recordingStatusCallback;
    this._recordingStatusCallbackEvent = config.recordingStatusCallbackEvent;
    this._recordingStatusCallbackMethod = config.recordingStatusCallbackMethod;
    this._recordingTrack = config.recordingTrack;
    this._sendDigits = config.sendDigits;
    this._sipAuthPassword = config.sipAuthPassword;
    this._sipAuthUsername = config.sipAuthUsername;
    this._status = config.status;
    this._statusCallback = config.statusCallback;
    this._statusCallbackEvent = config.statusCallbackEvent;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._timeLimit = config.timeLimit;
    this._timeout = config.timeout;
    this._to = config.to;
    this._trim = config.trim;
    this._twiml = config.twiml;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_sid - computed: true, optional: true, required: false
  private _applicationSid?: string; 
  public get applicationSid() {
    return this.getStringAttribute('application_sid');
  }
  public set applicationSid(value: string) {
    this._applicationSid = value;
  }
  public resetApplicationSid() {
    this._applicationSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSidInput() {
    return this._applicationSid;
  }

  // async_amd - computed: true, optional: true, required: false
  private _asyncAmd?: string; 
  public get asyncAmd() {
    return this.getStringAttribute('async_amd');
  }
  public set asyncAmd(value: string) {
    this._asyncAmd = value;
  }
  public resetAsyncAmd() {
    this._asyncAmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncAmdInput() {
    return this._asyncAmd;
  }

  // async_amd_status_callback - computed: true, optional: true, required: false
  private _asyncAmdStatusCallback?: string; 
  public get asyncAmdStatusCallback() {
    return this.getStringAttribute('async_amd_status_callback');
  }
  public set asyncAmdStatusCallback(value: string) {
    this._asyncAmdStatusCallback = value;
  }
  public resetAsyncAmdStatusCallback() {
    this._asyncAmdStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncAmdStatusCallbackInput() {
    return this._asyncAmdStatusCallback;
  }

  // async_amd_status_callback_method - computed: true, optional: true, required: false
  private _asyncAmdStatusCallbackMethod?: string; 
  public get asyncAmdStatusCallbackMethod() {
    return this.getStringAttribute('async_amd_status_callback_method');
  }
  public set asyncAmdStatusCallbackMethod(value: string) {
    this._asyncAmdStatusCallbackMethod = value;
  }
  public resetAsyncAmdStatusCallbackMethod() {
    this._asyncAmdStatusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncAmdStatusCallbackMethodInput() {
    return this._asyncAmdStatusCallbackMethod;
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

  // fallback_method - computed: true, optional: true, required: false
  private _fallbackMethod?: string; 
  public get fallbackMethod() {
    return this.getStringAttribute('fallback_method');
  }
  public set fallbackMethod(value: string) {
    this._fallbackMethod = value;
  }
  public resetFallbackMethod() {
    this._fallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackMethodInput() {
    return this._fallbackMethod;
  }

  // fallback_url - computed: true, optional: true, required: false
  private _fallbackUrl?: string; 
  public get fallbackUrl() {
    return this.getStringAttribute('fallback_url');
  }
  public set fallbackUrl(value: string) {
    this._fallbackUrl = value;
  }
  public resetFallbackUrl() {
    this._fallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackUrlInput() {
    return this._fallbackUrl;
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

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // send_digits - computed: true, optional: true, required: false
  private _sendDigits?: string; 
  public get sendDigits() {
    return this.getStringAttribute('send_digits');
  }
  public set sendDigits(value: string) {
    this._sendDigits = value;
  }
  public resetSendDigits() {
    this._sendDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDigitsInput() {
    return this._sendDigits;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // twiml - computed: true, optional: true, required: false
  private _twiml?: string; 
  public get twiml() {
    return this.getStringAttribute('twiml');
  }
  public set twiml(value: string) {
    this._twiml = value;
  }
  public resetTwiml() {
    this._twiml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twimlInput() {
    return this._twiml;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_sid: cdktf.stringToTerraform(this._applicationSid),
      async_amd: cdktf.stringToTerraform(this._asyncAmd),
      async_amd_status_callback: cdktf.stringToTerraform(this._asyncAmdStatusCallback),
      async_amd_status_callback_method: cdktf.stringToTerraform(this._asyncAmdStatusCallbackMethod),
      byoc: cdktf.stringToTerraform(this._byoc),
      call_reason: cdktf.stringToTerraform(this._callReason),
      call_token: cdktf.stringToTerraform(this._callToken),
      caller_id: cdktf.stringToTerraform(this._callerId),
      fallback_method: cdktf.stringToTerraform(this._fallbackMethod),
      fallback_url: cdktf.stringToTerraform(this._fallbackUrl),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      machine_detection: cdktf.stringToTerraform(this._machineDetection),
      machine_detection_silence_timeout: cdktf.numberToTerraform(this._machineDetectionSilenceTimeout),
      machine_detection_speech_end_threshold: cdktf.numberToTerraform(this._machineDetectionSpeechEndThreshold),
      machine_detection_speech_threshold: cdktf.numberToTerraform(this._machineDetectionSpeechThreshold),
      machine_detection_timeout: cdktf.numberToTerraform(this._machineDetectionTimeout),
      method: cdktf.stringToTerraform(this._method),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      record: cdktf.booleanToTerraform(this._record),
      recording_channels: cdktf.stringToTerraform(this._recordingChannels),
      recording_status_callback: cdktf.stringToTerraform(this._recordingStatusCallback),
      recording_status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordingStatusCallbackEvent),
      recording_status_callback_method: cdktf.stringToTerraform(this._recordingStatusCallbackMethod),
      recording_track: cdktf.stringToTerraform(this._recordingTrack),
      send_digits: cdktf.stringToTerraform(this._sendDigits),
      sip_auth_password: cdktf.stringToTerraform(this._sipAuthPassword),
      sip_auth_username: cdktf.stringToTerraform(this._sipAuthUsername),
      status: cdktf.stringToTerraform(this._status),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      status_callback_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statusCallbackEvent),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      time_limit: cdktf.numberToTerraform(this._timeLimit),
      timeout: cdktf.numberToTerraform(this._timeout),
      to: cdktf.stringToTerraform(this._to),
      trim: cdktf.stringToTerraform(this._trim),
      twiml: cdktf.stringToTerraform(this._twiml),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_sid: {
        value: cdktf.stringToHclTerraform(this._applicationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_amd: {
        value: cdktf.stringToHclTerraform(this._asyncAmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_amd_status_callback: {
        value: cdktf.stringToHclTerraform(this._asyncAmdStatusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_amd_status_callback_method: {
        value: cdktf.stringToHclTerraform(this._asyncAmdStatusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      fallback_method: {
        value: cdktf.stringToHclTerraform(this._fallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_url: {
        value: cdktf.stringToHclTerraform(this._fallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      send_digits: {
        value: cdktf.stringToHclTerraform(this._sendDigits),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      twiml: {
        value: cdktf.stringToHclTerraform(this._twiml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
