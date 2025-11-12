// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessagingTollfreeVerificationsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#additional_information MessagingTollfreeVerificationsV1#additional_information}
  */
  readonly additionalInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_city MessagingTollfreeVerificationsV1#business_city}
  */
  readonly businessCity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_contact_email MessagingTollfreeVerificationsV1#business_contact_email}
  */
  readonly businessContactEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_contact_first_name MessagingTollfreeVerificationsV1#business_contact_first_name}
  */
  readonly businessContactFirstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_contact_last_name MessagingTollfreeVerificationsV1#business_contact_last_name}
  */
  readonly businessContactLastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_contact_phone MessagingTollfreeVerificationsV1#business_contact_phone}
  */
  readonly businessContactPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_country MessagingTollfreeVerificationsV1#business_country}
  */
  readonly businessCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_name MessagingTollfreeVerificationsV1#business_name}
  */
  readonly businessName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_postal_code MessagingTollfreeVerificationsV1#business_postal_code}
  */
  readonly businessPostalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_state_province_region MessagingTollfreeVerificationsV1#business_state_province_region}
  */
  readonly businessStateProvinceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_street_address MessagingTollfreeVerificationsV1#business_street_address}
  */
  readonly businessStreetAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_street_address2 MessagingTollfreeVerificationsV1#business_street_address2}
  */
  readonly businessStreetAddress2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#business_website MessagingTollfreeVerificationsV1#business_website}
  */
  readonly businessWebsite: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#customer_profile_sid MessagingTollfreeVerificationsV1#customer_profile_sid}
  */
  readonly customerProfileSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#edit_reason MessagingTollfreeVerificationsV1#edit_reason}
  */
  readonly editReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#external_reference_id MessagingTollfreeVerificationsV1#external_reference_id}
  */
  readonly externalReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#id MessagingTollfreeVerificationsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#message_volume MessagingTollfreeVerificationsV1#message_volume}
  */
  readonly messageVolume: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#notification_email MessagingTollfreeVerificationsV1#notification_email}
  */
  readonly notificationEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#opt_in_image_urls MessagingTollfreeVerificationsV1#opt_in_image_urls}
  */
  readonly optInImageUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#opt_in_type MessagingTollfreeVerificationsV1#opt_in_type}
  */
  readonly optInType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#production_message_sample MessagingTollfreeVerificationsV1#production_message_sample}
  */
  readonly productionMessageSample: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#tollfree_phone_number_sid MessagingTollfreeVerificationsV1#tollfree_phone_number_sid}
  */
  readonly tollfreePhoneNumberSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#use_case_categories MessagingTollfreeVerificationsV1#use_case_categories}
  */
  readonly useCaseCategories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#use_case_summary MessagingTollfreeVerificationsV1#use_case_summary}
  */
  readonly useCaseSummary: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1 twilio_messaging_tollfree_verifications_v1}
*/
export class MessagingTollfreeVerificationsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_messaging_tollfree_verifications_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessagingTollfreeVerificationsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessagingTollfreeVerificationsV1 to import
  * @param importFromId The id of the existing MessagingTollfreeVerificationsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessagingTollfreeVerificationsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_messaging_tollfree_verifications_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_tollfree_verifications_v1 twilio_messaging_tollfree_verifications_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessagingTollfreeVerificationsV1Config
  */
  public constructor(scope: Construct, id: string, config: MessagingTollfreeVerificationsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_messaging_tollfree_verifications_v1',
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
    this._additionalInformation = config.additionalInformation;
    this._businessCity = config.businessCity;
    this._businessContactEmail = config.businessContactEmail;
    this._businessContactFirstName = config.businessContactFirstName;
    this._businessContactLastName = config.businessContactLastName;
    this._businessContactPhone = config.businessContactPhone;
    this._businessCountry = config.businessCountry;
    this._businessName = config.businessName;
    this._businessPostalCode = config.businessPostalCode;
    this._businessStateProvinceRegion = config.businessStateProvinceRegion;
    this._businessStreetAddress = config.businessStreetAddress;
    this._businessStreetAddress2 = config.businessStreetAddress2;
    this._businessWebsite = config.businessWebsite;
    this._customerProfileSid = config.customerProfileSid;
    this._editReason = config.editReason;
    this._externalReferenceId = config.externalReferenceId;
    this._id = config.id;
    this._messageVolume = config.messageVolume;
    this._notificationEmail = config.notificationEmail;
    this._optInImageUrls = config.optInImageUrls;
    this._optInType = config.optInType;
    this._productionMessageSample = config.productionMessageSample;
    this._tollfreePhoneNumberSid = config.tollfreePhoneNumberSid;
    this._useCaseCategories = config.useCaseCategories;
    this._useCaseSummary = config.useCaseSummary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_information - computed: true, optional: true, required: false
  private _additionalInformation?: string; 
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }
  public set additionalInformation(value: string) {
    this._additionalInformation = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation;
  }

  // business_city - computed: true, optional: true, required: false
  private _businessCity?: string; 
  public get businessCity() {
    return this.getStringAttribute('business_city');
  }
  public set businessCity(value: string) {
    this._businessCity = value;
  }
  public resetBusinessCity() {
    this._businessCity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessCityInput() {
    return this._businessCity;
  }

  // business_contact_email - computed: true, optional: true, required: false
  private _businessContactEmail?: string; 
  public get businessContactEmail() {
    return this.getStringAttribute('business_contact_email');
  }
  public set businessContactEmail(value: string) {
    this._businessContactEmail = value;
  }
  public resetBusinessContactEmail() {
    this._businessContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessContactEmailInput() {
    return this._businessContactEmail;
  }

  // business_contact_first_name - computed: true, optional: true, required: false
  private _businessContactFirstName?: string; 
  public get businessContactFirstName() {
    return this.getStringAttribute('business_contact_first_name');
  }
  public set businessContactFirstName(value: string) {
    this._businessContactFirstName = value;
  }
  public resetBusinessContactFirstName() {
    this._businessContactFirstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessContactFirstNameInput() {
    return this._businessContactFirstName;
  }

  // business_contact_last_name - computed: true, optional: true, required: false
  private _businessContactLastName?: string; 
  public get businessContactLastName() {
    return this.getStringAttribute('business_contact_last_name');
  }
  public set businessContactLastName(value: string) {
    this._businessContactLastName = value;
  }
  public resetBusinessContactLastName() {
    this._businessContactLastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessContactLastNameInput() {
    return this._businessContactLastName;
  }

  // business_contact_phone - computed: true, optional: true, required: false
  private _businessContactPhone?: string; 
  public get businessContactPhone() {
    return this.getStringAttribute('business_contact_phone');
  }
  public set businessContactPhone(value: string) {
    this._businessContactPhone = value;
  }
  public resetBusinessContactPhone() {
    this._businessContactPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessContactPhoneInput() {
    return this._businessContactPhone;
  }

  // business_country - computed: true, optional: true, required: false
  private _businessCountry?: string; 
  public get businessCountry() {
    return this.getStringAttribute('business_country');
  }
  public set businessCountry(value: string) {
    this._businessCountry = value;
  }
  public resetBusinessCountry() {
    this._businessCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessCountryInput() {
    return this._businessCountry;
  }

  // business_name - computed: false, optional: false, required: true
  private _businessName?: string; 
  public get businessName() {
    return this.getStringAttribute('business_name');
  }
  public set businessName(value: string) {
    this._businessName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName;
  }

  // business_postal_code - computed: true, optional: true, required: false
  private _businessPostalCode?: string; 
  public get businessPostalCode() {
    return this.getStringAttribute('business_postal_code');
  }
  public set businessPostalCode(value: string) {
    this._businessPostalCode = value;
  }
  public resetBusinessPostalCode() {
    this._businessPostalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessPostalCodeInput() {
    return this._businessPostalCode;
  }

  // business_state_province_region - computed: true, optional: true, required: false
  private _businessStateProvinceRegion?: string; 
  public get businessStateProvinceRegion() {
    return this.getStringAttribute('business_state_province_region');
  }
  public set businessStateProvinceRegion(value: string) {
    this._businessStateProvinceRegion = value;
  }
  public resetBusinessStateProvinceRegion() {
    this._businessStateProvinceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessStateProvinceRegionInput() {
    return this._businessStateProvinceRegion;
  }

  // business_street_address - computed: true, optional: true, required: false
  private _businessStreetAddress?: string; 
  public get businessStreetAddress() {
    return this.getStringAttribute('business_street_address');
  }
  public set businessStreetAddress(value: string) {
    this._businessStreetAddress = value;
  }
  public resetBusinessStreetAddress() {
    this._businessStreetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessStreetAddressInput() {
    return this._businessStreetAddress;
  }

  // business_street_address2 - computed: true, optional: true, required: false
  private _businessStreetAddress2?: string; 
  public get businessStreetAddress2() {
    return this.getStringAttribute('business_street_address2');
  }
  public set businessStreetAddress2(value: string) {
    this._businessStreetAddress2 = value;
  }
  public resetBusinessStreetAddress2() {
    this._businessStreetAddress2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessStreetAddress2Input() {
    return this._businessStreetAddress2;
  }

  // business_website - computed: false, optional: false, required: true
  private _businessWebsite?: string; 
  public get businessWebsite() {
    return this.getStringAttribute('business_website');
  }
  public set businessWebsite(value: string) {
    this._businessWebsite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessWebsiteInput() {
    return this._businessWebsite;
  }

  // customer_profile_sid - computed: true, optional: true, required: false
  private _customerProfileSid?: string; 
  public get customerProfileSid() {
    return this.getStringAttribute('customer_profile_sid');
  }
  public set customerProfileSid(value: string) {
    this._customerProfileSid = value;
  }
  public resetCustomerProfileSid() {
    this._customerProfileSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProfileSidInput() {
    return this._customerProfileSid;
  }

  // edit_reason - computed: true, optional: true, required: false
  private _editReason?: string; 
  public get editReason() {
    return this.getStringAttribute('edit_reason');
  }
  public set editReason(value: string) {
    this._editReason = value;
  }
  public resetEditReason() {
    this._editReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editReasonInput() {
    return this._editReason;
  }

  // external_reference_id - computed: true, optional: true, required: false
  private _externalReferenceId?: string; 
  public get externalReferenceId() {
    return this.getStringAttribute('external_reference_id');
  }
  public set externalReferenceId(value: string) {
    this._externalReferenceId = value;
  }
  public resetExternalReferenceId() {
    this._externalReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalReferenceIdInput() {
    return this._externalReferenceId;
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

  // message_volume - computed: false, optional: false, required: true
  private _messageVolume?: string; 
  public get messageVolume() {
    return this.getStringAttribute('message_volume');
  }
  public set messageVolume(value: string) {
    this._messageVolume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageVolumeInput() {
    return this._messageVolume;
  }

  // notification_email - computed: false, optional: false, required: true
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // opt_in_image_urls - computed: false, optional: false, required: true
  private _optInImageUrls?: string[]; 
  public get optInImageUrls() {
    return this.getListAttribute('opt_in_image_urls');
  }
  public set optInImageUrls(value: string[]) {
    this._optInImageUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInImageUrlsInput() {
    return this._optInImageUrls;
  }

  // opt_in_type - computed: false, optional: false, required: true
  private _optInType?: string; 
  public get optInType() {
    return this.getStringAttribute('opt_in_type');
  }
  public set optInType(value: string) {
    this._optInType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInTypeInput() {
    return this._optInType;
  }

  // production_message_sample - computed: false, optional: false, required: true
  private _productionMessageSample?: string; 
  public get productionMessageSample() {
    return this.getStringAttribute('production_message_sample');
  }
  public set productionMessageSample(value: string) {
    this._productionMessageSample = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionMessageSampleInput() {
    return this._productionMessageSample;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // tollfree_phone_number_sid - computed: false, optional: false, required: true
  private _tollfreePhoneNumberSid?: string; 
  public get tollfreePhoneNumberSid() {
    return this.getStringAttribute('tollfree_phone_number_sid');
  }
  public set tollfreePhoneNumberSid(value: string) {
    this._tollfreePhoneNumberSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tollfreePhoneNumberSidInput() {
    return this._tollfreePhoneNumberSid;
  }

  // use_case_categories - computed: false, optional: false, required: true
  private _useCaseCategories?: string[]; 
  public get useCaseCategories() {
    return this.getListAttribute('use_case_categories');
  }
  public set useCaseCategories(value: string[]) {
    this._useCaseCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useCaseCategoriesInput() {
    return this._useCaseCategories;
  }

  // use_case_summary - computed: false, optional: false, required: true
  private _useCaseSummary?: string; 
  public get useCaseSummary() {
    return this.getStringAttribute('use_case_summary');
  }
  public set useCaseSummary(value: string) {
    this._useCaseSummary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useCaseSummaryInput() {
    return this._useCaseSummary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_information: cdktf.stringToTerraform(this._additionalInformation),
      business_city: cdktf.stringToTerraform(this._businessCity),
      business_contact_email: cdktf.stringToTerraform(this._businessContactEmail),
      business_contact_first_name: cdktf.stringToTerraform(this._businessContactFirstName),
      business_contact_last_name: cdktf.stringToTerraform(this._businessContactLastName),
      business_contact_phone: cdktf.stringToTerraform(this._businessContactPhone),
      business_country: cdktf.stringToTerraform(this._businessCountry),
      business_name: cdktf.stringToTerraform(this._businessName),
      business_postal_code: cdktf.stringToTerraform(this._businessPostalCode),
      business_state_province_region: cdktf.stringToTerraform(this._businessStateProvinceRegion),
      business_street_address: cdktf.stringToTerraform(this._businessStreetAddress),
      business_street_address2: cdktf.stringToTerraform(this._businessStreetAddress2),
      business_website: cdktf.stringToTerraform(this._businessWebsite),
      customer_profile_sid: cdktf.stringToTerraform(this._customerProfileSid),
      edit_reason: cdktf.stringToTerraform(this._editReason),
      external_reference_id: cdktf.stringToTerraform(this._externalReferenceId),
      id: cdktf.stringToTerraform(this._id),
      message_volume: cdktf.stringToTerraform(this._messageVolume),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      opt_in_image_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optInImageUrls),
      opt_in_type: cdktf.stringToTerraform(this._optInType),
      production_message_sample: cdktf.stringToTerraform(this._productionMessageSample),
      tollfree_phone_number_sid: cdktf.stringToTerraform(this._tollfreePhoneNumberSid),
      use_case_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._useCaseCategories),
      use_case_summary: cdktf.stringToTerraform(this._useCaseSummary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_information: {
        value: cdktf.stringToHclTerraform(this._additionalInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_city: {
        value: cdktf.stringToHclTerraform(this._businessCity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_contact_email: {
        value: cdktf.stringToHclTerraform(this._businessContactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_contact_first_name: {
        value: cdktf.stringToHclTerraform(this._businessContactFirstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_contact_last_name: {
        value: cdktf.stringToHclTerraform(this._businessContactLastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_contact_phone: {
        value: cdktf.stringToHclTerraform(this._businessContactPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_country: {
        value: cdktf.stringToHclTerraform(this._businessCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_name: {
        value: cdktf.stringToHclTerraform(this._businessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_postal_code: {
        value: cdktf.stringToHclTerraform(this._businessPostalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_state_province_region: {
        value: cdktf.stringToHclTerraform(this._businessStateProvinceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_street_address: {
        value: cdktf.stringToHclTerraform(this._businessStreetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_street_address2: {
        value: cdktf.stringToHclTerraform(this._businessStreetAddress2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_website: {
        value: cdktf.stringToHclTerraform(this._businessWebsite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_profile_sid: {
        value: cdktf.stringToHclTerraform(this._customerProfileSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edit_reason: {
        value: cdktf.stringToHclTerraform(this._editReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_reference_id: {
        value: cdktf.stringToHclTerraform(this._externalReferenceId),
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
      message_volume: {
        value: cdktf.stringToHclTerraform(this._messageVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_email: {
        value: cdktf.stringToHclTerraform(this._notificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_in_image_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optInImageUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opt_in_type: {
        value: cdktf.stringToHclTerraform(this._optInType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      production_message_sample: {
        value: cdktf.stringToHclTerraform(this._productionMessageSample),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tollfree_phone_number_sid: {
        value: cdktf.stringToHclTerraform(this._tollfreePhoneNumberSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_case_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._useCaseCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_case_summary: {
        value: cdktf.stringToHclTerraform(this._useCaseSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
