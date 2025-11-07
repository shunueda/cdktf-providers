// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VoiceByocTrunksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#cnam_lookup_enabled VoiceByocTrunksV1#cnam_lookup_enabled}
  */
  readonly cnamLookupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#connection_policy_sid VoiceByocTrunksV1#connection_policy_sid}
  */
  readonly connectionPolicySid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#friendly_name VoiceByocTrunksV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#from_domain_sid VoiceByocTrunksV1#from_domain_sid}
  */
  readonly fromDomainSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#id VoiceByocTrunksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#status_callback_method VoiceByocTrunksV1#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#status_callback_url VoiceByocTrunksV1#status_callback_url}
  */
  readonly statusCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#voice_fallback_method VoiceByocTrunksV1#voice_fallback_method}
  */
  readonly voiceFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#voice_fallback_url VoiceByocTrunksV1#voice_fallback_url}
  */
  readonly voiceFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#voice_method VoiceByocTrunksV1#voice_method}
  */
  readonly voiceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#voice_url VoiceByocTrunksV1#voice_url}
  */
  readonly voiceUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1 twilio_voice_byoc_trunks_v1}
*/
export class VoiceByocTrunksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_voice_byoc_trunks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VoiceByocTrunksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VoiceByocTrunksV1 to import
  * @param importFromId The id of the existing VoiceByocTrunksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VoiceByocTrunksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_voice_byoc_trunks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/voice_byoc_trunks_v1 twilio_voice_byoc_trunks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VoiceByocTrunksV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: VoiceByocTrunksV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_voice_byoc_trunks_v1',
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
    this._cnamLookupEnabled = config.cnamLookupEnabled;
    this._connectionPolicySid = config.connectionPolicySid;
    this._friendlyName = config.friendlyName;
    this._fromDomainSid = config.fromDomainSid;
    this._id = config.id;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._statusCallbackUrl = config.statusCallbackUrl;
    this._voiceFallbackMethod = config.voiceFallbackMethod;
    this._voiceFallbackUrl = config.voiceFallbackUrl;
    this._voiceMethod = config.voiceMethod;
    this._voiceUrl = config.voiceUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cnam_lookup_enabled - computed: true, optional: true, required: false
  private _cnamLookupEnabled?: boolean | cdktf.IResolvable; 
  public get cnamLookupEnabled() {
    return this.getBooleanAttribute('cnam_lookup_enabled');
  }
  public set cnamLookupEnabled(value: boolean | cdktf.IResolvable) {
    this._cnamLookupEnabled = value;
  }
  public resetCnamLookupEnabled() {
    this._cnamLookupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnamLookupEnabledInput() {
    return this._cnamLookupEnabled;
  }

  // connection_policy_sid - computed: true, optional: true, required: false
  private _connectionPolicySid?: string; 
  public get connectionPolicySid() {
    return this.getStringAttribute('connection_policy_sid');
  }
  public set connectionPolicySid(value: string) {
    this._connectionPolicySid = value;
  }
  public resetConnectionPolicySid() {
    this._connectionPolicySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPolicySidInput() {
    return this._connectionPolicySid;
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

  // from_domain_sid - computed: true, optional: true, required: false
  private _fromDomainSid?: string; 
  public get fromDomainSid() {
    return this.getStringAttribute('from_domain_sid');
  }
  public set fromDomainSid(value: string) {
    this._fromDomainSid = value;
  }
  public resetFromDomainSid() {
    this._fromDomainSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromDomainSidInput() {
    return this._fromDomainSid;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // status_callback_url - computed: true, optional: true, required: false
  private _statusCallbackUrl?: string; 
  public get statusCallbackUrl() {
    return this.getStringAttribute('status_callback_url');
  }
  public set statusCallbackUrl(value: string) {
    this._statusCallbackUrl = value;
  }
  public resetStatusCallbackUrl() {
    this._statusCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackUrlInput() {
    return this._statusCallbackUrl;
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
      cnam_lookup_enabled: cdktf.booleanToTerraform(this._cnamLookupEnabled),
      connection_policy_sid: cdktf.stringToTerraform(this._connectionPolicySid),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      from_domain_sid: cdktf.stringToTerraform(this._fromDomainSid),
      id: cdktf.stringToTerraform(this._id),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      status_callback_url: cdktf.stringToTerraform(this._statusCallbackUrl),
      voice_fallback_method: cdktf.stringToTerraform(this._voiceFallbackMethod),
      voice_fallback_url: cdktf.stringToTerraform(this._voiceFallbackUrl),
      voice_method: cdktf.stringToTerraform(this._voiceMethod),
      voice_url: cdktf.stringToTerraform(this._voiceUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cnam_lookup_enabled: {
        value: cdktf.booleanToHclTerraform(this._cnamLookupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_policy_sid: {
        value: cdktf.stringToHclTerraform(this._connectionPolicySid),
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
      from_domain_sid: {
        value: cdktf.stringToHclTerraform(this._fromDomainSid),
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
      status_callback_method: {
        value: cdktf.stringToHclTerraform(this._statusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback_url: {
        value: cdktf.stringToHclTerraform(this._statusCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
