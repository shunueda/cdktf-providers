// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifyServicesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#code_length VerifyServicesV2#code_length}
  */
  readonly codeLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#custom_code_enabled VerifyServicesV2#custom_code_enabled}
  */
  readonly customCodeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#default_template_sid VerifyServicesV2#default_template_sid}
  */
  readonly defaultTemplateSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#do_not_share_warning_enabled VerifyServicesV2#do_not_share_warning_enabled}
  */
  readonly doNotShareWarningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#dtmf_input_required VerifyServicesV2#dtmf_input_required}
  */
  readonly dtmfInputRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#friendly_name VerifyServicesV2#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#id VerifyServicesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#lookup_enabled VerifyServicesV2#lookup_enabled}
  */
  readonly lookupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#psd2_enabled VerifyServicesV2#psd2_enabled}
  */
  readonly psd2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#push_apn_credential_sid VerifyServicesV2#push_apn_credential_sid}
  */
  readonly pushApnCredentialSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#push_fcm_credential_sid VerifyServicesV2#push_fcm_credential_sid}
  */
  readonly pushFcmCredentialSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#push_include_date VerifyServicesV2#push_include_date}
  */
  readonly pushIncludeDate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#skip_sms_to_landlines VerifyServicesV2#skip_sms_to_landlines}
  */
  readonly skipSmsToLandlines?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#totp_code_length VerifyServicesV2#totp_code_length}
  */
  readonly totpCodeLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#totp_issuer VerifyServicesV2#totp_issuer}
  */
  readonly totpIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#totp_skew VerifyServicesV2#totp_skew}
  */
  readonly totpSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#totp_time_step VerifyServicesV2#totp_time_step}
  */
  readonly totpTimeStep?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#tts_name VerifyServicesV2#tts_name}
  */
  readonly ttsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#verify_event_subscription_enabled VerifyServicesV2#verify_event_subscription_enabled}
  */
  readonly verifyEventSubscriptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#whatsapp_from VerifyServicesV2#whatsapp_from}
  */
  readonly whatsappFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#whatsapp_msg_service_sid VerifyServicesV2#whatsapp_msg_service_sid}
  */
  readonly whatsappMsgServiceSid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2 twilio_verify_services_v2}
*/
export class VerifyServicesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_verify_services_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifyServicesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifyServicesV2 to import
  * @param importFromId The id of the existing VerifyServicesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifyServicesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_verify_services_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_v2 twilio_verify_services_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifyServicesV2Config
  */
  public constructor(scope: Construct, id: string, config: VerifyServicesV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_verify_services_v2',
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
    this._codeLength = config.codeLength;
    this._customCodeEnabled = config.customCodeEnabled;
    this._defaultTemplateSid = config.defaultTemplateSid;
    this._doNotShareWarningEnabled = config.doNotShareWarningEnabled;
    this._dtmfInputRequired = config.dtmfInputRequired;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._lookupEnabled = config.lookupEnabled;
    this._psd2Enabled = config.psd2Enabled;
    this._pushApnCredentialSid = config.pushApnCredentialSid;
    this._pushFcmCredentialSid = config.pushFcmCredentialSid;
    this._pushIncludeDate = config.pushIncludeDate;
    this._skipSmsToLandlines = config.skipSmsToLandlines;
    this._totpCodeLength = config.totpCodeLength;
    this._totpIssuer = config.totpIssuer;
    this._totpSkew = config.totpSkew;
    this._totpTimeStep = config.totpTimeStep;
    this._ttsName = config.ttsName;
    this._verifyEventSubscriptionEnabled = config.verifyEventSubscriptionEnabled;
    this._whatsappFrom = config.whatsappFrom;
    this._whatsappMsgServiceSid = config.whatsappMsgServiceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code_length - computed: true, optional: true, required: false
  private _codeLength?: number; 
  public get codeLength() {
    return this.getNumberAttribute('code_length');
  }
  public set codeLength(value: number) {
    this._codeLength = value;
  }
  public resetCodeLength() {
    this._codeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLengthInput() {
    return this._codeLength;
  }

  // custom_code_enabled - computed: true, optional: true, required: false
  private _customCodeEnabled?: boolean | cdktf.IResolvable; 
  public get customCodeEnabled() {
    return this.getBooleanAttribute('custom_code_enabled');
  }
  public set customCodeEnabled(value: boolean | cdktf.IResolvable) {
    this._customCodeEnabled = value;
  }
  public resetCustomCodeEnabled() {
    this._customCodeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCodeEnabledInput() {
    return this._customCodeEnabled;
  }

  // default_template_sid - computed: true, optional: true, required: false
  private _defaultTemplateSid?: string; 
  public get defaultTemplateSid() {
    return this.getStringAttribute('default_template_sid');
  }
  public set defaultTemplateSid(value: string) {
    this._defaultTemplateSid = value;
  }
  public resetDefaultTemplateSid() {
    this._defaultTemplateSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateSidInput() {
    return this._defaultTemplateSid;
  }

  // do_not_share_warning_enabled - computed: true, optional: true, required: false
  private _doNotShareWarningEnabled?: boolean | cdktf.IResolvable; 
  public get doNotShareWarningEnabled() {
    return this.getBooleanAttribute('do_not_share_warning_enabled');
  }
  public set doNotShareWarningEnabled(value: boolean | cdktf.IResolvable) {
    this._doNotShareWarningEnabled = value;
  }
  public resetDoNotShareWarningEnabled() {
    this._doNotShareWarningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotShareWarningEnabledInput() {
    return this._doNotShareWarningEnabled;
  }

  // dtmf_input_required - computed: true, optional: true, required: false
  private _dtmfInputRequired?: boolean | cdktf.IResolvable; 
  public get dtmfInputRequired() {
    return this.getBooleanAttribute('dtmf_input_required');
  }
  public set dtmfInputRequired(value: boolean | cdktf.IResolvable) {
    this._dtmfInputRequired = value;
  }
  public resetDtmfInputRequired() {
    this._dtmfInputRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfInputRequiredInput() {
    return this._dtmfInputRequired;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
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

  // lookup_enabled - computed: true, optional: true, required: false
  private _lookupEnabled?: boolean | cdktf.IResolvable; 
  public get lookupEnabled() {
    return this.getBooleanAttribute('lookup_enabled');
  }
  public set lookupEnabled(value: boolean | cdktf.IResolvable) {
    this._lookupEnabled = value;
  }
  public resetLookupEnabled() {
    this._lookupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupEnabledInput() {
    return this._lookupEnabled;
  }

  // psd2_enabled - computed: true, optional: true, required: false
  private _psd2Enabled?: boolean | cdktf.IResolvable; 
  public get psd2Enabled() {
    return this.getBooleanAttribute('psd2_enabled');
  }
  public set psd2Enabled(value: boolean | cdktf.IResolvable) {
    this._psd2Enabled = value;
  }
  public resetPsd2Enabled() {
    this._psd2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psd2EnabledInput() {
    return this._psd2Enabled;
  }

  // push_apn_credential_sid - computed: true, optional: true, required: false
  private _pushApnCredentialSid?: string; 
  public get pushApnCredentialSid() {
    return this.getStringAttribute('push_apn_credential_sid');
  }
  public set pushApnCredentialSid(value: string) {
    this._pushApnCredentialSid = value;
  }
  public resetPushApnCredentialSid() {
    this._pushApnCredentialSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushApnCredentialSidInput() {
    return this._pushApnCredentialSid;
  }

  // push_fcm_credential_sid - computed: true, optional: true, required: false
  private _pushFcmCredentialSid?: string; 
  public get pushFcmCredentialSid() {
    return this.getStringAttribute('push_fcm_credential_sid');
  }
  public set pushFcmCredentialSid(value: string) {
    this._pushFcmCredentialSid = value;
  }
  public resetPushFcmCredentialSid() {
    this._pushFcmCredentialSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushFcmCredentialSidInput() {
    return this._pushFcmCredentialSid;
  }

  // push_include_date - computed: true, optional: true, required: false
  private _pushIncludeDate?: boolean | cdktf.IResolvable; 
  public get pushIncludeDate() {
    return this.getBooleanAttribute('push_include_date');
  }
  public set pushIncludeDate(value: boolean | cdktf.IResolvable) {
    this._pushIncludeDate = value;
  }
  public resetPushIncludeDate() {
    this._pushIncludeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushIncludeDateInput() {
    return this._pushIncludeDate;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // skip_sms_to_landlines - computed: true, optional: true, required: false
  private _skipSmsToLandlines?: boolean | cdktf.IResolvable; 
  public get skipSmsToLandlines() {
    return this.getBooleanAttribute('skip_sms_to_landlines');
  }
  public set skipSmsToLandlines(value: boolean | cdktf.IResolvable) {
    this._skipSmsToLandlines = value;
  }
  public resetSkipSmsToLandlines() {
    this._skipSmsToLandlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSmsToLandlinesInput() {
    return this._skipSmsToLandlines;
  }

  // totp_code_length - computed: true, optional: true, required: false
  private _totpCodeLength?: number; 
  public get totpCodeLength() {
    return this.getNumberAttribute('totp_code_length');
  }
  public set totpCodeLength(value: number) {
    this._totpCodeLength = value;
  }
  public resetTotpCodeLength() {
    this._totpCodeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpCodeLengthInput() {
    return this._totpCodeLength;
  }

  // totp_issuer - computed: true, optional: true, required: false
  private _totpIssuer?: string; 
  public get totpIssuer() {
    return this.getStringAttribute('totp_issuer');
  }
  public set totpIssuer(value: string) {
    this._totpIssuer = value;
  }
  public resetTotpIssuer() {
    this._totpIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpIssuerInput() {
    return this._totpIssuer;
  }

  // totp_skew - computed: true, optional: true, required: false
  private _totpSkew?: number; 
  public get totpSkew() {
    return this.getNumberAttribute('totp_skew');
  }
  public set totpSkew(value: number) {
    this._totpSkew = value;
  }
  public resetTotpSkew() {
    this._totpSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpSkewInput() {
    return this._totpSkew;
  }

  // totp_time_step - computed: true, optional: true, required: false
  private _totpTimeStep?: number; 
  public get totpTimeStep() {
    return this.getNumberAttribute('totp_time_step');
  }
  public set totpTimeStep(value: number) {
    this._totpTimeStep = value;
  }
  public resetTotpTimeStep() {
    this._totpTimeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpTimeStepInput() {
    return this._totpTimeStep;
  }

  // tts_name - computed: true, optional: true, required: false
  private _ttsName?: string; 
  public get ttsName() {
    return this.getStringAttribute('tts_name');
  }
  public set ttsName(value: string) {
    this._ttsName = value;
  }
  public resetTtsName() {
    this._ttsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsNameInput() {
    return this._ttsName;
  }

  // verify_event_subscription_enabled - computed: true, optional: true, required: false
  private _verifyEventSubscriptionEnabled?: boolean | cdktf.IResolvable; 
  public get verifyEventSubscriptionEnabled() {
    return this.getBooleanAttribute('verify_event_subscription_enabled');
  }
  public set verifyEventSubscriptionEnabled(value: boolean | cdktf.IResolvable) {
    this._verifyEventSubscriptionEnabled = value;
  }
  public resetVerifyEventSubscriptionEnabled() {
    this._verifyEventSubscriptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEventSubscriptionEnabledInput() {
    return this._verifyEventSubscriptionEnabled;
  }

  // whatsapp_from - computed: true, optional: true, required: false
  private _whatsappFrom?: string; 
  public get whatsappFrom() {
    return this.getStringAttribute('whatsapp_from');
  }
  public set whatsappFrom(value: string) {
    this._whatsappFrom = value;
  }
  public resetWhatsappFrom() {
    this._whatsappFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsappFromInput() {
    return this._whatsappFrom;
  }

  // whatsapp_msg_service_sid - computed: true, optional: true, required: false
  private _whatsappMsgServiceSid?: string; 
  public get whatsappMsgServiceSid() {
    return this.getStringAttribute('whatsapp_msg_service_sid');
  }
  public set whatsappMsgServiceSid(value: string) {
    this._whatsappMsgServiceSid = value;
  }
  public resetWhatsappMsgServiceSid() {
    this._whatsappMsgServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsappMsgServiceSidInput() {
    return this._whatsappMsgServiceSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_length: cdktf.numberToTerraform(this._codeLength),
      custom_code_enabled: cdktf.booleanToTerraform(this._customCodeEnabled),
      default_template_sid: cdktf.stringToTerraform(this._defaultTemplateSid),
      do_not_share_warning_enabled: cdktf.booleanToTerraform(this._doNotShareWarningEnabled),
      dtmf_input_required: cdktf.booleanToTerraform(this._dtmfInputRequired),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      lookup_enabled: cdktf.booleanToTerraform(this._lookupEnabled),
      psd2_enabled: cdktf.booleanToTerraform(this._psd2Enabled),
      push_apn_credential_sid: cdktf.stringToTerraform(this._pushApnCredentialSid),
      push_fcm_credential_sid: cdktf.stringToTerraform(this._pushFcmCredentialSid),
      push_include_date: cdktf.booleanToTerraform(this._pushIncludeDate),
      skip_sms_to_landlines: cdktf.booleanToTerraform(this._skipSmsToLandlines),
      totp_code_length: cdktf.numberToTerraform(this._totpCodeLength),
      totp_issuer: cdktf.stringToTerraform(this._totpIssuer),
      totp_skew: cdktf.numberToTerraform(this._totpSkew),
      totp_time_step: cdktf.numberToTerraform(this._totpTimeStep),
      tts_name: cdktf.stringToTerraform(this._ttsName),
      verify_event_subscription_enabled: cdktf.booleanToTerraform(this._verifyEventSubscriptionEnabled),
      whatsapp_from: cdktf.stringToTerraform(this._whatsappFrom),
      whatsapp_msg_service_sid: cdktf.stringToTerraform(this._whatsappMsgServiceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code_length: {
        value: cdktf.numberToHclTerraform(this._codeLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_code_enabled: {
        value: cdktf.booleanToHclTerraform(this._customCodeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_template_sid: {
        value: cdktf.stringToHclTerraform(this._defaultTemplateSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_not_share_warning_enabled: {
        value: cdktf.booleanToHclTerraform(this._doNotShareWarningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dtmf_input_required: {
        value: cdktf.booleanToHclTerraform(this._dtmfInputRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      lookup_enabled: {
        value: cdktf.booleanToHclTerraform(this._lookupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      psd2_enabled: {
        value: cdktf.booleanToHclTerraform(this._psd2Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_apn_credential_sid: {
        value: cdktf.stringToHclTerraform(this._pushApnCredentialSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_fcm_credential_sid: {
        value: cdktf.stringToHclTerraform(this._pushFcmCredentialSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_include_date: {
        value: cdktf.booleanToHclTerraform(this._pushIncludeDate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_sms_to_landlines: {
        value: cdktf.booleanToHclTerraform(this._skipSmsToLandlines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      totp_code_length: {
        value: cdktf.numberToHclTerraform(this._totpCodeLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      totp_issuer: {
        value: cdktf.stringToHclTerraform(this._totpIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      totp_skew: {
        value: cdktf.numberToHclTerraform(this._totpSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      totp_time_step: {
        value: cdktf.numberToHclTerraform(this._totpTimeStep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tts_name: {
        value: cdktf.stringToHclTerraform(this._ttsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_event_subscription_enabled: {
        value: cdktf.booleanToHclTerraform(this._verifyEventSubscriptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      whatsapp_from: {
        value: cdktf.stringToHclTerraform(this._whatsappFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whatsapp_msg_service_sid: {
        value: cdktf.stringToHclTerraform(this._whatsappMsgServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
