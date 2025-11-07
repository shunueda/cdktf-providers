// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntelligenceServicesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#auto_redaction IntelligenceServicesV2#auto_redaction}
  */
  readonly autoRedaction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#auto_transcribe IntelligenceServicesV2#auto_transcribe}
  */
  readonly autoTranscribe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#data_logging IntelligenceServicesV2#data_logging}
  */
  readonly dataLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#friendly_name IntelligenceServicesV2#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#id IntelligenceServicesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#if_match IntelligenceServicesV2#if_match}
  */
  readonly ifMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#language_code IntelligenceServicesV2#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#media_redaction IntelligenceServicesV2#media_redaction}
  */
  readonly mediaRedaction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#unique_name IntelligenceServicesV2#unique_name}
  */
  readonly uniqueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#webhook_http_method IntelligenceServicesV2#webhook_http_method}
  */
  readonly webhookHttpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#webhook_url IntelligenceServicesV2#webhook_url}
  */
  readonly webhookUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2 twilio_intelligence_services_v2}
*/
export class IntelligenceServicesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_intelligence_services_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntelligenceServicesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntelligenceServicesV2 to import
  * @param importFromId The id of the existing IntelligenceServicesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntelligenceServicesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_intelligence_services_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/intelligence_services_v2 twilio_intelligence_services_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntelligenceServicesV2Config
  */
  public constructor(scope: Construct, id: string, config: IntelligenceServicesV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_intelligence_services_v2',
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
    this._autoRedaction = config.autoRedaction;
    this._autoTranscribe = config.autoTranscribe;
    this._dataLogging = config.dataLogging;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._ifMatch = config.ifMatch;
    this._languageCode = config.languageCode;
    this._mediaRedaction = config.mediaRedaction;
    this._uniqueName = config.uniqueName;
    this._webhookHttpMethod = config.webhookHttpMethod;
    this._webhookUrl = config.webhookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_redaction - computed: true, optional: true, required: false
  private _autoRedaction?: boolean | cdktf.IResolvable; 
  public get autoRedaction() {
    return this.getBooleanAttribute('auto_redaction');
  }
  public set autoRedaction(value: boolean | cdktf.IResolvable) {
    this._autoRedaction = value;
  }
  public resetAutoRedaction() {
    this._autoRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedactionInput() {
    return this._autoRedaction;
  }

  // auto_transcribe - computed: true, optional: true, required: false
  private _autoTranscribe?: boolean | cdktf.IResolvable; 
  public get autoTranscribe() {
    return this.getBooleanAttribute('auto_transcribe');
  }
  public set autoTranscribe(value: boolean | cdktf.IResolvable) {
    this._autoTranscribe = value;
  }
  public resetAutoTranscribe() {
    this._autoTranscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTranscribeInput() {
    return this._autoTranscribe;
  }

  // data_logging - computed: true, optional: true, required: false
  private _dataLogging?: boolean | cdktf.IResolvable; 
  public get dataLogging() {
    return this.getBooleanAttribute('data_logging');
  }
  public set dataLogging(value: boolean | cdktf.IResolvable) {
    this._dataLogging = value;
  }
  public resetDataLogging() {
    this._dataLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLoggingInput() {
    return this._dataLogging;
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

  // if_match - computed: true, optional: true, required: false
  private _ifMatch?: string; 
  public get ifMatch() {
    return this.getStringAttribute('if_match');
  }
  public set ifMatch(value: string) {
    this._ifMatch = value;
  }
  public resetIfMatch() {
    this._ifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMatchInput() {
    return this._ifMatch;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // media_redaction - computed: true, optional: true, required: false
  private _mediaRedaction?: boolean | cdktf.IResolvable; 
  public get mediaRedaction() {
    return this.getBooleanAttribute('media_redaction');
  }
  public set mediaRedaction(value: boolean | cdktf.IResolvable) {
    this._mediaRedaction = value;
  }
  public resetMediaRedaction() {
    this._mediaRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaRedactionInput() {
    return this._mediaRedaction;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // unique_name - computed: false, optional: false, required: true
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // webhook_http_method - computed: true, optional: true, required: false
  private _webhookHttpMethod?: string; 
  public get webhookHttpMethod() {
    return this.getStringAttribute('webhook_http_method');
  }
  public set webhookHttpMethod(value: string) {
    this._webhookHttpMethod = value;
  }
  public resetWebhookHttpMethod() {
    this._webhookHttpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookHttpMethodInput() {
    return this._webhookHttpMethod;
  }

  // webhook_url - computed: true, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_redaction: cdktf.booleanToTerraform(this._autoRedaction),
      auto_transcribe: cdktf.booleanToTerraform(this._autoTranscribe),
      data_logging: cdktf.booleanToTerraform(this._dataLogging),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      if_match: cdktf.stringToTerraform(this._ifMatch),
      language_code: cdktf.stringToTerraform(this._languageCode),
      media_redaction: cdktf.booleanToTerraform(this._mediaRedaction),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
      webhook_http_method: cdktf.stringToTerraform(this._webhookHttpMethod),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_redaction: {
        value: cdktf.booleanToHclTerraform(this._autoRedaction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_transcribe: {
        value: cdktf.booleanToHclTerraform(this._autoTranscribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_logging: {
        value: cdktf.booleanToHclTerraform(this._dataLogging),
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
      if_match: {
        value: cdktf.stringToHclTerraform(this._ifMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_redaction: {
        value: cdktf.booleanToHclTerraform(this._mediaRedaction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_http_method: {
        value: cdktf.stringToHclTerraform(this._webhookHttpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
