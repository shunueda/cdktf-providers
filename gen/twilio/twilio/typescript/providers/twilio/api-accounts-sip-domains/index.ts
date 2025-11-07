// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsSipDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#byoc_trunk_sid ApiAccountsSipDomains#byoc_trunk_sid}
  */
  readonly byocTrunkSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#domain_name ApiAccountsSipDomains#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#emergency_caller_sid ApiAccountsSipDomains#emergency_caller_sid}
  */
  readonly emergencyCallerSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#emergency_calling_enabled ApiAccountsSipDomains#emergency_calling_enabled}
  */
  readonly emergencyCallingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#friendly_name ApiAccountsSipDomains#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#id ApiAccountsSipDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#path_account_sid ApiAccountsSipDomains#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#secure ApiAccountsSipDomains#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#sip_registration ApiAccountsSipDomains#sip_registration}
  */
  readonly sipRegistration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#voice_fallback_method ApiAccountsSipDomains#voice_fallback_method}
  */
  readonly voiceFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#voice_fallback_url ApiAccountsSipDomains#voice_fallback_url}
  */
  readonly voiceFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#voice_method ApiAccountsSipDomains#voice_method}
  */
  readonly voiceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#voice_status_callback_method ApiAccountsSipDomains#voice_status_callback_method}
  */
  readonly voiceStatusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#voice_status_callback_url ApiAccountsSipDomains#voice_status_callback_url}
  */
  readonly voiceStatusCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#voice_url ApiAccountsSipDomains#voice_url}
  */
  readonly voiceUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains twilio_api_accounts_sip_domains}
*/
export class ApiAccountsSipDomains extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_sip_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsSipDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsSipDomains to import
  * @param importFromId The id of the existing ApiAccountsSipDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsSipDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_sip_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_domains twilio_api_accounts_sip_domains} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsSipDomainsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsSipDomainsConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_sip_domains',
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
    this._byocTrunkSid = config.byocTrunkSid;
    this._domainName = config.domainName;
    this._emergencyCallerSid = config.emergencyCallerSid;
    this._emergencyCallingEnabled = config.emergencyCallingEnabled;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._pathAccountSid = config.pathAccountSid;
    this._secure = config.secure;
    this._sipRegistration = config.sipRegistration;
    this._voiceFallbackMethod = config.voiceFallbackMethod;
    this._voiceFallbackUrl = config.voiceFallbackUrl;
    this._voiceMethod = config.voiceMethod;
    this._voiceStatusCallbackMethod = config.voiceStatusCallbackMethod;
    this._voiceStatusCallbackUrl = config.voiceStatusCallbackUrl;
    this._voiceUrl = config.voiceUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // byoc_trunk_sid - computed: true, optional: true, required: false
  private _byocTrunkSid?: string; 
  public get byocTrunkSid() {
    return this.getStringAttribute('byoc_trunk_sid');
  }
  public set byocTrunkSid(value: string) {
    this._byocTrunkSid = value;
  }
  public resetByocTrunkSid() {
    this._byocTrunkSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byocTrunkSidInput() {
    return this._byocTrunkSid;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // emergency_caller_sid - computed: true, optional: true, required: false
  private _emergencyCallerSid?: string; 
  public get emergencyCallerSid() {
    return this.getStringAttribute('emergency_caller_sid');
  }
  public set emergencyCallerSid(value: string) {
    this._emergencyCallerSid = value;
  }
  public resetEmergencyCallerSid() {
    this._emergencyCallerSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyCallerSidInput() {
    return this._emergencyCallerSid;
  }

  // emergency_calling_enabled - computed: true, optional: true, required: false
  private _emergencyCallingEnabled?: boolean | cdktf.IResolvable; 
  public get emergencyCallingEnabled() {
    return this.getBooleanAttribute('emergency_calling_enabled');
  }
  public set emergencyCallingEnabled(value: boolean | cdktf.IResolvable) {
    this._emergencyCallingEnabled = value;
  }
  public resetEmergencyCallingEnabled() {
    this._emergencyCallingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyCallingEnabledInput() {
    return this._emergencyCallingEnabled;
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

  // secure - computed: true, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sip_registration - computed: true, optional: true, required: false
  private _sipRegistration?: boolean | cdktf.IResolvable; 
  public get sipRegistration() {
    return this.getBooleanAttribute('sip_registration');
  }
  public set sipRegistration(value: boolean | cdktf.IResolvable) {
    this._sipRegistration = value;
  }
  public resetSipRegistration() {
    this._sipRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipRegistrationInput() {
    return this._sipRegistration;
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

  // voice_status_callback_method - computed: true, optional: true, required: false
  private _voiceStatusCallbackMethod?: string; 
  public get voiceStatusCallbackMethod() {
    return this.getStringAttribute('voice_status_callback_method');
  }
  public set voiceStatusCallbackMethod(value: string) {
    this._voiceStatusCallbackMethod = value;
  }
  public resetVoiceStatusCallbackMethod() {
    this._voiceStatusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceStatusCallbackMethodInput() {
    return this._voiceStatusCallbackMethod;
  }

  // voice_status_callback_url - computed: true, optional: true, required: false
  private _voiceStatusCallbackUrl?: string; 
  public get voiceStatusCallbackUrl() {
    return this.getStringAttribute('voice_status_callback_url');
  }
  public set voiceStatusCallbackUrl(value: string) {
    this._voiceStatusCallbackUrl = value;
  }
  public resetVoiceStatusCallbackUrl() {
    this._voiceStatusCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceStatusCallbackUrlInput() {
    return this._voiceStatusCallbackUrl;
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
      byoc_trunk_sid: cdktf.stringToTerraform(this._byocTrunkSid),
      domain_name: cdktf.stringToTerraform(this._domainName),
      emergency_caller_sid: cdktf.stringToTerraform(this._emergencyCallerSid),
      emergency_calling_enabled: cdktf.booleanToTerraform(this._emergencyCallingEnabled),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      secure: cdktf.booleanToTerraform(this._secure),
      sip_registration: cdktf.booleanToTerraform(this._sipRegistration),
      voice_fallback_method: cdktf.stringToTerraform(this._voiceFallbackMethod),
      voice_fallback_url: cdktf.stringToTerraform(this._voiceFallbackUrl),
      voice_method: cdktf.stringToTerraform(this._voiceMethod),
      voice_status_callback_method: cdktf.stringToTerraform(this._voiceStatusCallbackMethod),
      voice_status_callback_url: cdktf.stringToTerraform(this._voiceStatusCallbackUrl),
      voice_url: cdktf.stringToTerraform(this._voiceUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byoc_trunk_sid: {
        value: cdktf.stringToHclTerraform(this._byocTrunkSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emergency_caller_sid: {
        value: cdktf.stringToHclTerraform(this._emergencyCallerSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emergency_calling_enabled: {
        value: cdktf.booleanToHclTerraform(this._emergencyCallingEnabled),
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
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sip_registration: {
        value: cdktf.booleanToHclTerraform(this._sipRegistration),
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
      voice_status_callback_method: {
        value: cdktf.stringToHclTerraform(this._voiceStatusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_status_callback_url: {
        value: cdktf.stringToHclTerraform(this._voiceStatusCallbackUrl),
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
