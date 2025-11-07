// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsIncomingPhoneNumbersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#account_sid ApiAccountsIncomingPhoneNumbers#account_sid}
  */
  readonly accountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#address_sid ApiAccountsIncomingPhoneNumbers#address_sid}
  */
  readonly addressSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#api_version ApiAccountsIncomingPhoneNumbers#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#area_code ApiAccountsIncomingPhoneNumbers#area_code}
  */
  readonly areaCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#bundle_sid ApiAccountsIncomingPhoneNumbers#bundle_sid}
  */
  readonly bundleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#emergency_address_sid ApiAccountsIncomingPhoneNumbers#emergency_address_sid}
  */
  readonly emergencyAddressSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#emergency_status ApiAccountsIncomingPhoneNumbers#emergency_status}
  */
  readonly emergencyStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#friendly_name ApiAccountsIncomingPhoneNumbers#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#id ApiAccountsIncomingPhoneNumbers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#identity_sid ApiAccountsIncomingPhoneNumbers#identity_sid}
  */
  readonly identitySid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#path_account_sid ApiAccountsIncomingPhoneNumbers#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#phone_number ApiAccountsIncomingPhoneNumbers#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#sms_application_sid ApiAccountsIncomingPhoneNumbers#sms_application_sid}
  */
  readonly smsApplicationSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#sms_fallback_method ApiAccountsIncomingPhoneNumbers#sms_fallback_method}
  */
  readonly smsFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#sms_fallback_url ApiAccountsIncomingPhoneNumbers#sms_fallback_url}
  */
  readonly smsFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#sms_method ApiAccountsIncomingPhoneNumbers#sms_method}
  */
  readonly smsMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#sms_url ApiAccountsIncomingPhoneNumbers#sms_url}
  */
  readonly smsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#status_callback ApiAccountsIncomingPhoneNumbers#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#status_callback_method ApiAccountsIncomingPhoneNumbers#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#trunk_sid ApiAccountsIncomingPhoneNumbers#trunk_sid}
  */
  readonly trunkSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_application_sid ApiAccountsIncomingPhoneNumbers#voice_application_sid}
  */
  readonly voiceApplicationSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_caller_id_lookup ApiAccountsIncomingPhoneNumbers#voice_caller_id_lookup}
  */
  readonly voiceCallerIdLookup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_fallback_method ApiAccountsIncomingPhoneNumbers#voice_fallback_method}
  */
  readonly voiceFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_fallback_url ApiAccountsIncomingPhoneNumbers#voice_fallback_url}
  */
  readonly voiceFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_method ApiAccountsIncomingPhoneNumbers#voice_method}
  */
  readonly voiceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_receive_mode ApiAccountsIncomingPhoneNumbers#voice_receive_mode}
  */
  readonly voiceReceiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#voice_url ApiAccountsIncomingPhoneNumbers#voice_url}
  */
  readonly voiceUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers twilio_api_accounts_incoming_phone_numbers}
*/
export class ApiAccountsIncomingPhoneNumbers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_incoming_phone_numbers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsIncomingPhoneNumbers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsIncomingPhoneNumbers to import
  * @param importFromId The id of the existing ApiAccountsIncomingPhoneNumbers that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsIncomingPhoneNumbers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_incoming_phone_numbers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers twilio_api_accounts_incoming_phone_numbers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsIncomingPhoneNumbersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsIncomingPhoneNumbersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_incoming_phone_numbers',
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
    this._accountSid = config.accountSid;
    this._addressSid = config.addressSid;
    this._apiVersion = config.apiVersion;
    this._areaCode = config.areaCode;
    this._bundleSid = config.bundleSid;
    this._emergencyAddressSid = config.emergencyAddressSid;
    this._emergencyStatus = config.emergencyStatus;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._identitySid = config.identitySid;
    this._pathAccountSid = config.pathAccountSid;
    this._phoneNumber = config.phoneNumber;
    this._smsApplicationSid = config.smsApplicationSid;
    this._smsFallbackMethod = config.smsFallbackMethod;
    this._smsFallbackUrl = config.smsFallbackUrl;
    this._smsMethod = config.smsMethod;
    this._smsUrl = config.smsUrl;
    this._statusCallback = config.statusCallback;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._trunkSid = config.trunkSid;
    this._voiceApplicationSid = config.voiceApplicationSid;
    this._voiceCallerIdLookup = config.voiceCallerIdLookup;
    this._voiceFallbackMethod = config.voiceFallbackMethod;
    this._voiceFallbackUrl = config.voiceFallbackUrl;
    this._voiceMethod = config.voiceMethod;
    this._voiceReceiveMode = config.voiceReceiveMode;
    this._voiceUrl = config.voiceUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_sid - computed: true, optional: true, required: false
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  public resetAccountSid() {
    this._accountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // address_sid - computed: true, optional: true, required: false
  private _addressSid?: string; 
  public get addressSid() {
    return this.getStringAttribute('address_sid');
  }
  public set addressSid(value: string) {
    this._addressSid = value;
  }
  public resetAddressSid() {
    this._addressSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSidInput() {
    return this._addressSid;
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // area_code - computed: true, optional: true, required: false
  private _areaCode?: string; 
  public get areaCode() {
    return this.getStringAttribute('area_code');
  }
  public set areaCode(value: string) {
    this._areaCode = value;
  }
  public resetAreaCode() {
    this._areaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCodeInput() {
    return this._areaCode;
  }

  // bundle_sid - computed: true, optional: true, required: false
  private _bundleSid?: string; 
  public get bundleSid() {
    return this.getStringAttribute('bundle_sid');
  }
  public set bundleSid(value: string) {
    this._bundleSid = value;
  }
  public resetBundleSid() {
    this._bundleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleSidInput() {
    return this._bundleSid;
  }

  // emergency_address_sid - computed: true, optional: true, required: false
  private _emergencyAddressSid?: string; 
  public get emergencyAddressSid() {
    return this.getStringAttribute('emergency_address_sid');
  }
  public set emergencyAddressSid(value: string) {
    this._emergencyAddressSid = value;
  }
  public resetEmergencyAddressSid() {
    this._emergencyAddressSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyAddressSidInput() {
    return this._emergencyAddressSid;
  }

  // emergency_status - computed: true, optional: true, required: false
  private _emergencyStatus?: string; 
  public get emergencyStatus() {
    return this.getStringAttribute('emergency_status');
  }
  public set emergencyStatus(value: string) {
    this._emergencyStatus = value;
  }
  public resetEmergencyStatus() {
    this._emergencyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyStatusInput() {
    return this._emergencyStatus;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // identity_sid - computed: true, optional: true, required: false
  private _identitySid?: string; 
  public get identitySid() {
    return this.getStringAttribute('identity_sid');
  }
  public set identitySid(value: string) {
    this._identitySid = value;
  }
  public resetIdentitySid() {
    this._identitySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySidInput() {
    return this._identitySid;
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

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sms_application_sid - computed: true, optional: true, required: false
  private _smsApplicationSid?: string; 
  public get smsApplicationSid() {
    return this.getStringAttribute('sms_application_sid');
  }
  public set smsApplicationSid(value: string) {
    this._smsApplicationSid = value;
  }
  public resetSmsApplicationSid() {
    this._smsApplicationSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsApplicationSidInput() {
    return this._smsApplicationSid;
  }

  // sms_fallback_method - computed: true, optional: true, required: false
  private _smsFallbackMethod?: string; 
  public get smsFallbackMethod() {
    return this.getStringAttribute('sms_fallback_method');
  }
  public set smsFallbackMethod(value: string) {
    this._smsFallbackMethod = value;
  }
  public resetSmsFallbackMethod() {
    this._smsFallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsFallbackMethodInput() {
    return this._smsFallbackMethod;
  }

  // sms_fallback_url - computed: true, optional: true, required: false
  private _smsFallbackUrl?: string; 
  public get smsFallbackUrl() {
    return this.getStringAttribute('sms_fallback_url');
  }
  public set smsFallbackUrl(value: string) {
    this._smsFallbackUrl = value;
  }
  public resetSmsFallbackUrl() {
    this._smsFallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsFallbackUrlInput() {
    return this._smsFallbackUrl;
  }

  // sms_method - computed: true, optional: true, required: false
  private _smsMethod?: string; 
  public get smsMethod() {
    return this.getStringAttribute('sms_method');
  }
  public set smsMethod(value: string) {
    this._smsMethod = value;
  }
  public resetSmsMethod() {
    this._smsMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMethodInput() {
    return this._smsMethod;
  }

  // sms_url - computed: true, optional: true, required: false
  private _smsUrl?: string; 
  public get smsUrl() {
    return this.getStringAttribute('sms_url');
  }
  public set smsUrl(value: string) {
    this._smsUrl = value;
  }
  public resetSmsUrl() {
    this._smsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsUrlInput() {
    return this._smsUrl;
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

  // trunk_sid - computed: true, optional: true, required: false
  private _trunkSid?: string; 
  public get trunkSid() {
    return this.getStringAttribute('trunk_sid');
  }
  public set trunkSid(value: string) {
    this._trunkSid = value;
  }
  public resetTrunkSid() {
    this._trunkSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkSidInput() {
    return this._trunkSid;
  }

  // voice_application_sid - computed: true, optional: true, required: false
  private _voiceApplicationSid?: string; 
  public get voiceApplicationSid() {
    return this.getStringAttribute('voice_application_sid');
  }
  public set voiceApplicationSid(value: string) {
    this._voiceApplicationSid = value;
  }
  public resetVoiceApplicationSid() {
    this._voiceApplicationSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceApplicationSidInput() {
    return this._voiceApplicationSid;
  }

  // voice_caller_id_lookup - computed: true, optional: true, required: false
  private _voiceCallerIdLookup?: boolean | cdktf.IResolvable; 
  public get voiceCallerIdLookup() {
    return this.getBooleanAttribute('voice_caller_id_lookup');
  }
  public set voiceCallerIdLookup(value: boolean | cdktf.IResolvable) {
    this._voiceCallerIdLookup = value;
  }
  public resetVoiceCallerIdLookup() {
    this._voiceCallerIdLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceCallerIdLookupInput() {
    return this._voiceCallerIdLookup;
  }

  // voice_fallback_method - computed: true, optional: true, required: false
  private _voiceFallbackMethod?: string; 
  public get voiceFallbackMethod() {
    return this.getStringAttribute('voice_fallback_method');
  }
  public set voiceFallbackMethod(value: string) {
    this._voiceFallbackMethod = value;
  }
  public resetVoiceFallbackMethod() {
    this._voiceFallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceFallbackMethodInput() {
    return this._voiceFallbackMethod;
  }

  // voice_fallback_url - computed: true, optional: true, required: false
  private _voiceFallbackUrl?: string; 
  public get voiceFallbackUrl() {
    return this.getStringAttribute('voice_fallback_url');
  }
  public set voiceFallbackUrl(value: string) {
    this._voiceFallbackUrl = value;
  }
  public resetVoiceFallbackUrl() {
    this._voiceFallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceFallbackUrlInput() {
    return this._voiceFallbackUrl;
  }

  // voice_method - computed: true, optional: true, required: false
  private _voiceMethod?: string; 
  public get voiceMethod() {
    return this.getStringAttribute('voice_method');
  }
  public set voiceMethod(value: string) {
    this._voiceMethod = value;
  }
  public resetVoiceMethod() {
    this._voiceMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceMethodInput() {
    return this._voiceMethod;
  }

  // voice_receive_mode - computed: true, optional: true, required: false
  private _voiceReceiveMode?: string; 
  public get voiceReceiveMode() {
    return this.getStringAttribute('voice_receive_mode');
  }
  public set voiceReceiveMode(value: string) {
    this._voiceReceiveMode = value;
  }
  public resetVoiceReceiveMode() {
    this._voiceReceiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceReceiveModeInput() {
    return this._voiceReceiveMode;
  }

  // voice_url - computed: true, optional: true, required: false
  private _voiceUrl?: string; 
  public get voiceUrl() {
    return this.getStringAttribute('voice_url');
  }
  public set voiceUrl(value: string) {
    this._voiceUrl = value;
  }
  public resetVoiceUrl() {
    this._voiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceUrlInput() {
    return this._voiceUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_sid: cdktf.stringToTerraform(this._accountSid),
      address_sid: cdktf.stringToTerraform(this._addressSid),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      area_code: cdktf.stringToTerraform(this._areaCode),
      bundle_sid: cdktf.stringToTerraform(this._bundleSid),
      emergency_address_sid: cdktf.stringToTerraform(this._emergencyAddressSid),
      emergency_status: cdktf.stringToTerraform(this._emergencyStatus),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      identity_sid: cdktf.stringToTerraform(this._identitySid),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      sms_application_sid: cdktf.stringToTerraform(this._smsApplicationSid),
      sms_fallback_method: cdktf.stringToTerraform(this._smsFallbackMethod),
      sms_fallback_url: cdktf.stringToTerraform(this._smsFallbackUrl),
      sms_method: cdktf.stringToTerraform(this._smsMethod),
      sms_url: cdktf.stringToTerraform(this._smsUrl),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      trunk_sid: cdktf.stringToTerraform(this._trunkSid),
      voice_application_sid: cdktf.stringToTerraform(this._voiceApplicationSid),
      voice_caller_id_lookup: cdktf.booleanToTerraform(this._voiceCallerIdLookup),
      voice_fallback_method: cdktf.stringToTerraform(this._voiceFallbackMethod),
      voice_fallback_url: cdktf.stringToTerraform(this._voiceFallbackUrl),
      voice_method: cdktf.stringToTerraform(this._voiceMethod),
      voice_receive_mode: cdktf.stringToTerraform(this._voiceReceiveMode),
      voice_url: cdktf.stringToTerraform(this._voiceUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_sid: {
        value: cdktf.stringToHclTerraform(this._accountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_sid: {
        value: cdktf.stringToHclTerraform(this._addressSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_code: {
        value: cdktf.stringToHclTerraform(this._areaCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_sid: {
        value: cdktf.stringToHclTerraform(this._bundleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emergency_address_sid: {
        value: cdktf.stringToHclTerraform(this._emergencyAddressSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emergency_status: {
        value: cdktf.stringToHclTerraform(this._emergencyStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      identity_sid: {
        value: cdktf.stringToHclTerraform(this._identitySid),
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
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_application_sid: {
        value: cdktf.stringToHclTerraform(this._smsApplicationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_fallback_method: {
        value: cdktf.stringToHclTerraform(this._smsFallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_fallback_url: {
        value: cdktf.stringToHclTerraform(this._smsFallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_method: {
        value: cdktf.stringToHclTerraform(this._smsMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_url: {
        value: cdktf.stringToHclTerraform(this._smsUrl),
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
      status_callback_method: {
        value: cdktf.stringToHclTerraform(this._statusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_sid: {
        value: cdktf.stringToHclTerraform(this._trunkSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_application_sid: {
        value: cdktf.stringToHclTerraform(this._voiceApplicationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_caller_id_lookup: {
        value: cdktf.booleanToHclTerraform(this._voiceCallerIdLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      voice_fallback_method: {
        value: cdktf.stringToHclTerraform(this._voiceFallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_fallback_url: {
        value: cdktf.stringToHclTerraform(this._voiceFallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_method: {
        value: cdktf.stringToHclTerraform(this._voiceMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_receive_mode: {
        value: cdktf.stringToHclTerraform(this._voiceReceiveMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_url: {
        value: cdktf.stringToHclTerraform(this._voiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
