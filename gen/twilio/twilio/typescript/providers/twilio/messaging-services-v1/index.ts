// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessagingServicesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#area_code_geomatch MessagingServicesV1#area_code_geomatch}
  */
  readonly areaCodeGeomatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#fallback_method MessagingServicesV1#fallback_method}
  */
  readonly fallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#fallback_to_long_code MessagingServicesV1#fallback_to_long_code}
  */
  readonly fallbackToLongCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#fallback_url MessagingServicesV1#fallback_url}
  */
  readonly fallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#friendly_name MessagingServicesV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#id MessagingServicesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#inbound_method MessagingServicesV1#inbound_method}
  */
  readonly inboundMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#inbound_request_url MessagingServicesV1#inbound_request_url}
  */
  readonly inboundRequestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#mms_converter MessagingServicesV1#mms_converter}
  */
  readonly mmsConverter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#scan_message_content MessagingServicesV1#scan_message_content}
  */
  readonly scanMessageContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#smart_encoding MessagingServicesV1#smart_encoding}
  */
  readonly smartEncoding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#status_callback MessagingServicesV1#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#sticky_sender MessagingServicesV1#sticky_sender}
  */
  readonly stickySender?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#synchronous_validation MessagingServicesV1#synchronous_validation}
  */
  readonly synchronousValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#use_inbound_webhook_on_number MessagingServicesV1#use_inbound_webhook_on_number}
  */
  readonly useInboundWebhookOnNumber?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#usecase MessagingServicesV1#usecase}
  */
  readonly usecase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#validity_period MessagingServicesV1#validity_period}
  */
  readonly validityPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1 twilio_messaging_services_v1}
*/
export class MessagingServicesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_messaging_services_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessagingServicesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessagingServicesV1 to import
  * @param importFromId The id of the existing MessagingServicesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessagingServicesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_messaging_services_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_v1 twilio_messaging_services_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessagingServicesV1Config
  */
  public constructor(scope: Construct, id: string, config: MessagingServicesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_messaging_services_v1',
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
    this._areaCodeGeomatch = config.areaCodeGeomatch;
    this._fallbackMethod = config.fallbackMethod;
    this._fallbackToLongCode = config.fallbackToLongCode;
    this._fallbackUrl = config.fallbackUrl;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._inboundMethod = config.inboundMethod;
    this._inboundRequestUrl = config.inboundRequestUrl;
    this._mmsConverter = config.mmsConverter;
    this._scanMessageContent = config.scanMessageContent;
    this._smartEncoding = config.smartEncoding;
    this._statusCallback = config.statusCallback;
    this._stickySender = config.stickySender;
    this._synchronousValidation = config.synchronousValidation;
    this._useInboundWebhookOnNumber = config.useInboundWebhookOnNumber;
    this._usecase = config.usecase;
    this._validityPeriod = config.validityPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_code_geomatch - computed: true, optional: true, required: false
  private _areaCodeGeomatch?: boolean | cdktf.IResolvable; 
  public get areaCodeGeomatch() {
    return this.getBooleanAttribute('area_code_geomatch');
  }
  public set areaCodeGeomatch(value: boolean | cdktf.IResolvable) {
    this._areaCodeGeomatch = value;
  }
  public resetAreaCodeGeomatch() {
    this._areaCodeGeomatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCodeGeomatchInput() {
    return this._areaCodeGeomatch;
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

  // fallback_to_long_code - computed: true, optional: true, required: false
  private _fallbackToLongCode?: boolean | cdktf.IResolvable; 
  public get fallbackToLongCode() {
    return this.getBooleanAttribute('fallback_to_long_code');
  }
  public set fallbackToLongCode(value: boolean | cdktf.IResolvable) {
    this._fallbackToLongCode = value;
  }
  public resetFallbackToLongCode() {
    this._fallbackToLongCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToLongCodeInput() {
    return this._fallbackToLongCode;
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

  // inbound_method - computed: true, optional: true, required: false
  private _inboundMethod?: string; 
  public get inboundMethod() {
    return this.getStringAttribute('inbound_method');
  }
  public set inboundMethod(value: string) {
    this._inboundMethod = value;
  }
  public resetInboundMethod() {
    this._inboundMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundMethodInput() {
    return this._inboundMethod;
  }

  // inbound_request_url - computed: true, optional: true, required: false
  private _inboundRequestUrl?: string; 
  public get inboundRequestUrl() {
    return this.getStringAttribute('inbound_request_url');
  }
  public set inboundRequestUrl(value: string) {
    this._inboundRequestUrl = value;
  }
  public resetInboundRequestUrl() {
    this._inboundRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRequestUrlInput() {
    return this._inboundRequestUrl;
  }

  // mms_converter - computed: true, optional: true, required: false
  private _mmsConverter?: boolean | cdktf.IResolvable; 
  public get mmsConverter() {
    return this.getBooleanAttribute('mms_converter');
  }
  public set mmsConverter(value: boolean | cdktf.IResolvable) {
    this._mmsConverter = value;
  }
  public resetMmsConverter() {
    this._mmsConverter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsConverterInput() {
    return this._mmsConverter;
  }

  // scan_message_content - computed: true, optional: true, required: false
  private _scanMessageContent?: string; 
  public get scanMessageContent() {
    return this.getStringAttribute('scan_message_content');
  }
  public set scanMessageContent(value: string) {
    this._scanMessageContent = value;
  }
  public resetScanMessageContent() {
    this._scanMessageContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMessageContentInput() {
    return this._scanMessageContent;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // smart_encoding - computed: true, optional: true, required: false
  private _smartEncoding?: boolean | cdktf.IResolvable; 
  public get smartEncoding() {
    return this.getBooleanAttribute('smart_encoding');
  }
  public set smartEncoding(value: boolean | cdktf.IResolvable) {
    this._smartEncoding = value;
  }
  public resetSmartEncoding() {
    this._smartEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartEncodingInput() {
    return this._smartEncoding;
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

  // sticky_sender - computed: true, optional: true, required: false
  private _stickySender?: boolean | cdktf.IResolvable; 
  public get stickySender() {
    return this.getBooleanAttribute('sticky_sender');
  }
  public set stickySender(value: boolean | cdktf.IResolvable) {
    this._stickySender = value;
  }
  public resetStickySender() {
    this._stickySender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySenderInput() {
    return this._stickySender;
  }

  // synchronous_validation - computed: true, optional: true, required: false
  private _synchronousValidation?: boolean | cdktf.IResolvable; 
  public get synchronousValidation() {
    return this.getBooleanAttribute('synchronous_validation');
  }
  public set synchronousValidation(value: boolean | cdktf.IResolvable) {
    this._synchronousValidation = value;
  }
  public resetSynchronousValidation() {
    this._synchronousValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousValidationInput() {
    return this._synchronousValidation;
  }

  // use_inbound_webhook_on_number - computed: true, optional: true, required: false
  private _useInboundWebhookOnNumber?: boolean | cdktf.IResolvable; 
  public get useInboundWebhookOnNumber() {
    return this.getBooleanAttribute('use_inbound_webhook_on_number');
  }
  public set useInboundWebhookOnNumber(value: boolean | cdktf.IResolvable) {
    this._useInboundWebhookOnNumber = value;
  }
  public resetUseInboundWebhookOnNumber() {
    this._useInboundWebhookOnNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInboundWebhookOnNumberInput() {
    return this._useInboundWebhookOnNumber;
  }

  // usecase - computed: true, optional: true, required: false
  private _usecase?: string; 
  public get usecase() {
    return this.getStringAttribute('usecase');
  }
  public set usecase(value: string) {
    this._usecase = value;
  }
  public resetUsecase() {
    this._usecase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usecaseInput() {
    return this._usecase;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod?: number; 
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
  }
  public set validityPeriod(value: number) {
    this._validityPeriod = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_code_geomatch: cdktf.booleanToTerraform(this._areaCodeGeomatch),
      fallback_method: cdktf.stringToTerraform(this._fallbackMethod),
      fallback_to_long_code: cdktf.booleanToTerraform(this._fallbackToLongCode),
      fallback_url: cdktf.stringToTerraform(this._fallbackUrl),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      inbound_method: cdktf.stringToTerraform(this._inboundMethod),
      inbound_request_url: cdktf.stringToTerraform(this._inboundRequestUrl),
      mms_converter: cdktf.booleanToTerraform(this._mmsConverter),
      scan_message_content: cdktf.stringToTerraform(this._scanMessageContent),
      smart_encoding: cdktf.booleanToTerraform(this._smartEncoding),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      sticky_sender: cdktf.booleanToTerraform(this._stickySender),
      synchronous_validation: cdktf.booleanToTerraform(this._synchronousValidation),
      use_inbound_webhook_on_number: cdktf.booleanToTerraform(this._useInboundWebhookOnNumber),
      usecase: cdktf.stringToTerraform(this._usecase),
      validity_period: cdktf.numberToTerraform(this._validityPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_code_geomatch: {
        value: cdktf.booleanToHclTerraform(this._areaCodeGeomatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_method: {
        value: cdktf.stringToHclTerraform(this._fallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_to_long_code: {
        value: cdktf.booleanToHclTerraform(this._fallbackToLongCode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_url: {
        value: cdktf.stringToHclTerraform(this._fallbackUrl),
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
      inbound_method: {
        value: cdktf.stringToHclTerraform(this._inboundMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_request_url: {
        value: cdktf.stringToHclTerraform(this._inboundRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_converter: {
        value: cdktf.booleanToHclTerraform(this._mmsConverter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_message_content: {
        value: cdktf.stringToHclTerraform(this._scanMessageContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_encoding: {
        value: cdktf.booleanToHclTerraform(this._smartEncoding),
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
      sticky_sender: {
        value: cdktf.booleanToHclTerraform(this._stickySender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      synchronous_validation: {
        value: cdktf.booleanToHclTerraform(this._synchronousValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_inbound_webhook_on_number: {
        value: cdktf.booleanToHclTerraform(this._useInboundWebhookOnNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usecase: {
        value: cdktf.stringToHclTerraform(this._usecase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_period: {
        value: cdktf.numberToHclTerraform(this._validityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
