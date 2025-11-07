// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessagingServicesComplianceUsa2PV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#age_gated MessagingServicesComplianceUsa2PV1#age_gated}
  */
  readonly ageGated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#brand_registration_sid MessagingServicesComplianceUsa2PV1#brand_registration_sid}
  */
  readonly brandRegistrationSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#description MessagingServicesComplianceUsa2PV1#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#direct_lending MessagingServicesComplianceUsa2PV1#direct_lending}
  */
  readonly directLending?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#has_embedded_links MessagingServicesComplianceUsa2PV1#has_embedded_links}
  */
  readonly hasEmbeddedLinks: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#has_embedded_phone MessagingServicesComplianceUsa2PV1#has_embedded_phone}
  */
  readonly hasEmbeddedPhone: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#help_keywords MessagingServicesComplianceUsa2PV1#help_keywords}
  */
  readonly helpKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#help_message MessagingServicesComplianceUsa2PV1#help_message}
  */
  readonly helpMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#id MessagingServicesComplianceUsa2PV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#message_flow MessagingServicesComplianceUsa2PV1#message_flow}
  */
  readonly messageFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#message_samples MessagingServicesComplianceUsa2PV1#message_samples}
  */
  readonly messageSamples: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#messaging_service_sid MessagingServicesComplianceUsa2PV1#messaging_service_sid}
  */
  readonly messagingServiceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#opt_in_keywords MessagingServicesComplianceUsa2PV1#opt_in_keywords}
  */
  readonly optInKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#opt_in_message MessagingServicesComplianceUsa2PV1#opt_in_message}
  */
  readonly optInMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#opt_out_keywords MessagingServicesComplianceUsa2PV1#opt_out_keywords}
  */
  readonly optOutKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#opt_out_message MessagingServicesComplianceUsa2PV1#opt_out_message}
  */
  readonly optOutMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#subscriber_opt_in MessagingServicesComplianceUsa2PV1#subscriber_opt_in}
  */
  readonly subscriberOptIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#us_app_to_person_usecase MessagingServicesComplianceUsa2PV1#us_app_to_person_usecase}
  */
  readonly usAppToPersonUsecase: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1 twilio_messaging_services_compliance_usa2p_v1}
*/
export class MessagingServicesComplianceUsa2PV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_messaging_services_compliance_usa2p_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessagingServicesComplianceUsa2PV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessagingServicesComplianceUsa2PV1 to import
  * @param importFromId The id of the existing MessagingServicesComplianceUsa2PV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessagingServicesComplianceUsa2PV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_messaging_services_compliance_usa2p_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_compliance_usa2p_v1 twilio_messaging_services_compliance_usa2p_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessagingServicesComplianceUsa2PV1Config
  */
  public constructor(scope: Construct, id: string, config: MessagingServicesComplianceUsa2PV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_messaging_services_compliance_usa2p_v1',
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
    this._ageGated = config.ageGated;
    this._brandRegistrationSid = config.brandRegistrationSid;
    this._description = config.description;
    this._directLending = config.directLending;
    this._hasEmbeddedLinks = config.hasEmbeddedLinks;
    this._hasEmbeddedPhone = config.hasEmbeddedPhone;
    this._helpKeywords = config.helpKeywords;
    this._helpMessage = config.helpMessage;
    this._id = config.id;
    this._messageFlow = config.messageFlow;
    this._messageSamples = config.messageSamples;
    this._messagingServiceSid = config.messagingServiceSid;
    this._optInKeywords = config.optInKeywords;
    this._optInMessage = config.optInMessage;
    this._optOutKeywords = config.optOutKeywords;
    this._optOutMessage = config.optOutMessage;
    this._subscriberOptIn = config.subscriberOptIn;
    this._usAppToPersonUsecase = config.usAppToPersonUsecase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age_gated - computed: true, optional: true, required: false
  private _ageGated?: boolean | cdktf.IResolvable; 
  public get ageGated() {
    return this.getBooleanAttribute('age_gated');
  }
  public set ageGated(value: boolean | cdktf.IResolvable) {
    this._ageGated = value;
  }
  public resetAgeGated() {
    this._ageGated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageGatedInput() {
    return this._ageGated;
  }

  // brand_registration_sid - computed: false, optional: false, required: true
  private _brandRegistrationSid?: string; 
  public get brandRegistrationSid() {
    return this.getStringAttribute('brand_registration_sid');
  }
  public set brandRegistrationSid(value: string) {
    this._brandRegistrationSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandRegistrationSidInput() {
    return this._brandRegistrationSid;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // direct_lending - computed: true, optional: true, required: false
  private _directLending?: boolean | cdktf.IResolvable; 
  public get directLending() {
    return this.getBooleanAttribute('direct_lending');
  }
  public set directLending(value: boolean | cdktf.IResolvable) {
    this._directLending = value;
  }
  public resetDirectLending() {
    this._directLending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directLendingInput() {
    return this._directLending;
  }

  // has_embedded_links - computed: false, optional: false, required: true
  private _hasEmbeddedLinks?: boolean | cdktf.IResolvable; 
  public get hasEmbeddedLinks() {
    return this.getBooleanAttribute('has_embedded_links');
  }
  public set hasEmbeddedLinks(value: boolean | cdktf.IResolvable) {
    this._hasEmbeddedLinks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasEmbeddedLinksInput() {
    return this._hasEmbeddedLinks;
  }

  // has_embedded_phone - computed: false, optional: false, required: true
  private _hasEmbeddedPhone?: boolean | cdktf.IResolvable; 
  public get hasEmbeddedPhone() {
    return this.getBooleanAttribute('has_embedded_phone');
  }
  public set hasEmbeddedPhone(value: boolean | cdktf.IResolvable) {
    this._hasEmbeddedPhone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasEmbeddedPhoneInput() {
    return this._hasEmbeddedPhone;
  }

  // help_keywords - computed: true, optional: true, required: false
  private _helpKeywords?: string[]; 
  public get helpKeywords() {
    return this.getListAttribute('help_keywords');
  }
  public set helpKeywords(value: string[]) {
    this._helpKeywords = value;
  }
  public resetHelpKeywords() {
    this._helpKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpKeywordsInput() {
    return this._helpKeywords;
  }

  // help_message - computed: true, optional: true, required: false
  private _helpMessage?: string; 
  public get helpMessage() {
    return this.getStringAttribute('help_message');
  }
  public set helpMessage(value: string) {
    this._helpMessage = value;
  }
  public resetHelpMessage() {
    this._helpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpMessageInput() {
    return this._helpMessage;
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

  // message_flow - computed: false, optional: false, required: true
  private _messageFlow?: string; 
  public get messageFlow() {
    return this.getStringAttribute('message_flow');
  }
  public set messageFlow(value: string) {
    this._messageFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFlowInput() {
    return this._messageFlow;
  }

  // message_samples - computed: false, optional: false, required: true
  private _messageSamples?: string[]; 
  public get messageSamples() {
    return this.getListAttribute('message_samples');
  }
  public set messageSamples(value: string[]) {
    this._messageSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSamplesInput() {
    return this._messageSamples;
  }

  // messaging_service_sid - computed: false, optional: false, required: true
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // opt_in_keywords - computed: true, optional: true, required: false
  private _optInKeywords?: string[]; 
  public get optInKeywords() {
    return this.getListAttribute('opt_in_keywords');
  }
  public set optInKeywords(value: string[]) {
    this._optInKeywords = value;
  }
  public resetOptInKeywords() {
    this._optInKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInKeywordsInput() {
    return this._optInKeywords;
  }

  // opt_in_message - computed: true, optional: true, required: false
  private _optInMessage?: string; 
  public get optInMessage() {
    return this.getStringAttribute('opt_in_message');
  }
  public set optInMessage(value: string) {
    this._optInMessage = value;
  }
  public resetOptInMessage() {
    this._optInMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInMessageInput() {
    return this._optInMessage;
  }

  // opt_out_keywords - computed: true, optional: true, required: false
  private _optOutKeywords?: string[]; 
  public get optOutKeywords() {
    return this.getListAttribute('opt_out_keywords');
  }
  public set optOutKeywords(value: string[]) {
    this._optOutKeywords = value;
  }
  public resetOptOutKeywords() {
    this._optOutKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutKeywordsInput() {
    return this._optOutKeywords;
  }

  // opt_out_message - computed: true, optional: true, required: false
  private _optOutMessage?: string; 
  public get optOutMessage() {
    return this.getStringAttribute('opt_out_message');
  }
  public set optOutMessage(value: string) {
    this._optOutMessage = value;
  }
  public resetOptOutMessage() {
    this._optOutMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutMessageInput() {
    return this._optOutMessage;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // subscriber_opt_in - computed: true, optional: true, required: false
  private _subscriberOptIn?: boolean | cdktf.IResolvable; 
  public get subscriberOptIn() {
    return this.getBooleanAttribute('subscriber_opt_in');
  }
  public set subscriberOptIn(value: boolean | cdktf.IResolvable) {
    this._subscriberOptIn = value;
  }
  public resetSubscriberOptIn() {
    this._subscriberOptIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberOptInInput() {
    return this._subscriberOptIn;
  }

  // us_app_to_person_usecase - computed: false, optional: false, required: true
  private _usAppToPersonUsecase?: string; 
  public get usAppToPersonUsecase() {
    return this.getStringAttribute('us_app_to_person_usecase');
  }
  public set usAppToPersonUsecase(value: string) {
    this._usAppToPersonUsecase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usAppToPersonUsecaseInput() {
    return this._usAppToPersonUsecase;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age_gated: cdktf.booleanToTerraform(this._ageGated),
      brand_registration_sid: cdktf.stringToTerraform(this._brandRegistrationSid),
      description: cdktf.stringToTerraform(this._description),
      direct_lending: cdktf.booleanToTerraform(this._directLending),
      has_embedded_links: cdktf.booleanToTerraform(this._hasEmbeddedLinks),
      has_embedded_phone: cdktf.booleanToTerraform(this._hasEmbeddedPhone),
      help_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._helpKeywords),
      help_message: cdktf.stringToTerraform(this._helpMessage),
      id: cdktf.stringToTerraform(this._id),
      message_flow: cdktf.stringToTerraform(this._messageFlow),
      message_samples: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messageSamples),
      messaging_service_sid: cdktf.stringToTerraform(this._messagingServiceSid),
      opt_in_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optInKeywords),
      opt_in_message: cdktf.stringToTerraform(this._optInMessage),
      opt_out_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optOutKeywords),
      opt_out_message: cdktf.stringToTerraform(this._optOutMessage),
      subscriber_opt_in: cdktf.booleanToTerraform(this._subscriberOptIn),
      us_app_to_person_usecase: cdktf.stringToTerraform(this._usAppToPersonUsecase),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age_gated: {
        value: cdktf.booleanToHclTerraform(this._ageGated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      brand_registration_sid: {
        value: cdktf.stringToHclTerraform(this._brandRegistrationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_lending: {
        value: cdktf.booleanToHclTerraform(this._directLending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_embedded_links: {
        value: cdktf.booleanToHclTerraform(this._hasEmbeddedLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_embedded_phone: {
        value: cdktf.booleanToHclTerraform(this._hasEmbeddedPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      help_keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._helpKeywords),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      help_message: {
        value: cdktf.stringToHclTerraform(this._helpMessage),
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
      message_flow: {
        value: cdktf.stringToHclTerraform(this._messageFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_samples: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messageSamples),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      messaging_service_sid: {
        value: cdktf.stringToHclTerraform(this._messagingServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_in_keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optInKeywords),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opt_in_message: {
        value: cdktf.stringToHclTerraform(this._optInMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optOutKeywords),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opt_out_message: {
        value: cdktf.stringToHclTerraform(this._optOutMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_opt_in: {
        value: cdktf.booleanToHclTerraform(this._subscriberOptIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      us_app_to_person_usecase: {
        value: cdktf.stringToHclTerraform(this._usAppToPersonUsecase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
