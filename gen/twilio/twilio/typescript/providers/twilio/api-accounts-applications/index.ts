// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#api_version ApiAccountsApplications#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#friendly_name ApiAccountsApplications#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#id ApiAccountsApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#message_status_callback ApiAccountsApplications#message_status_callback}
  */
  readonly messageStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#path_account_sid ApiAccountsApplications#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#public_application_connect_enabled ApiAccountsApplications#public_application_connect_enabled}
  */
  readonly publicApplicationConnectEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#sms_fallback_method ApiAccountsApplications#sms_fallback_method}
  */
  readonly smsFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#sms_fallback_url ApiAccountsApplications#sms_fallback_url}
  */
  readonly smsFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#sms_method ApiAccountsApplications#sms_method}
  */
  readonly smsMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#sms_status_callback ApiAccountsApplications#sms_status_callback}
  */
  readonly smsStatusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#sms_url ApiAccountsApplications#sms_url}
  */
  readonly smsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#status_callback ApiAccountsApplications#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#status_callback_method ApiAccountsApplications#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#voice_caller_id_lookup ApiAccountsApplications#voice_caller_id_lookup}
  */
  readonly voiceCallerIdLookup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#voice_fallback_method ApiAccountsApplications#voice_fallback_method}
  */
  readonly voiceFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#voice_fallback_url ApiAccountsApplications#voice_fallback_url}
  */
  readonly voiceFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#voice_method ApiAccountsApplications#voice_method}
  */
  readonly voiceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#voice_url ApiAccountsApplications#voice_url}
  */
  readonly voiceUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications twilio_api_accounts_applications}
*/
export class ApiAccountsApplications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsApplications to import
  * @param importFromId The id of the existing ApiAccountsApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_applications twilio_api_accounts_applications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_applications',
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
    this._apiVersion = config.apiVersion;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._messageStatusCallback = config.messageStatusCallback;
    this._pathAccountSid = config.pathAccountSid;
    this._publicApplicationConnectEnabled = config.publicApplicationConnectEnabled;
    this._smsFallbackMethod = config.smsFallbackMethod;
    this._smsFallbackUrl = config.smsFallbackUrl;
    this._smsMethod = config.smsMethod;
    this._smsStatusCallback = config.smsStatusCallback;
    this._smsUrl = config.smsUrl;
    this._statusCallback = config.statusCallback;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._voiceCallerIdLookup = config.voiceCallerIdLookup;
    this._voiceFallbackMethod = config.voiceFallbackMethod;
    this._voiceFallbackUrl = config.voiceFallbackUrl;
    this._voiceMethod = config.voiceMethod;
    this._voiceUrl = config.voiceUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // message_status_callback - computed: true, optional: true, required: false
  private _messageStatusCallback?: string; 
  public get messageStatusCallback() {
    return this.getStringAttribute('message_status_callback');
  }
  public set messageStatusCallback(value: string) {
    this._messageStatusCallback = value;
  }
  public resetMessageStatusCallback() {
    this._messageStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageStatusCallbackInput() {
    return this._messageStatusCallback;
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

  // public_application_connect_enabled - computed: true, optional: true, required: false
  private _publicApplicationConnectEnabled?: boolean | cdktf.IResolvable; 
  public get publicApplicationConnectEnabled() {
    return this.getBooleanAttribute('public_application_connect_enabled');
  }
  public set publicApplicationConnectEnabled(value: boolean | cdktf.IResolvable) {
    this._publicApplicationConnectEnabled = value;
  }
  public resetPublicApplicationConnectEnabled() {
    this._publicApplicationConnectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicApplicationConnectEnabledInput() {
    return this._publicApplicationConnectEnabled;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // sms_status_callback - computed: true, optional: true, required: false
  private _smsStatusCallback?: string; 
  public get smsStatusCallback() {
    return this.getStringAttribute('sms_status_callback');
  }
  public set smsStatusCallback(value: string) {
    this._smsStatusCallback = value;
  }
  public resetSmsStatusCallback() {
    this._smsStatusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsStatusCallbackInput() {
    return this._smsStatusCallback;
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      message_status_callback: cdktf.stringToTerraform(this._messageStatusCallback),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      public_application_connect_enabled: cdktf.booleanToTerraform(this._publicApplicationConnectEnabled),
      sms_fallback_method: cdktf.stringToTerraform(this._smsFallbackMethod),
      sms_fallback_url: cdktf.stringToTerraform(this._smsFallbackUrl),
      sms_method: cdktf.stringToTerraform(this._smsMethod),
      sms_status_callback: cdktf.stringToTerraform(this._smsStatusCallback),
      sms_url: cdktf.stringToTerraform(this._smsUrl),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      voice_caller_id_lookup: cdktf.booleanToTerraform(this._voiceCallerIdLookup),
      voice_fallback_method: cdktf.stringToTerraform(this._voiceFallbackMethod),
      voice_fallback_url: cdktf.stringToTerraform(this._voiceFallbackUrl),
      voice_method: cdktf.stringToTerraform(this._voiceMethod),
      voice_url: cdktf.stringToTerraform(this._voiceUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
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
      message_status_callback: {
        value: cdktf.stringToHclTerraform(this._messageStatusCallback),
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
      public_application_connect_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicApplicationConnectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      sms_status_callback: {
        value: cdktf.stringToHclTerraform(this._smsStatusCallback),
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
