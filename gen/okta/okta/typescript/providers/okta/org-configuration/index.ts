// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primary address of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#address_1 OrgConfiguration#address_1}
  */
  readonly address1?: string;
  /**
  * Secondary address of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#address_2 OrgConfiguration#address_2}
  */
  readonly address2?: string;
  /**
  * User ID representing the billing contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#billing_contact_user OrgConfiguration#billing_contact_user}
  */
  readonly billingContactUser?: string;
  /**
  * City of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#city OrgConfiguration#city}
  */
  readonly city?: string;
  /**
  * Name of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#company_name OrgConfiguration#company_name}
  */
  readonly companyName: string;
  /**
  * Country of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#country OrgConfiguration#country}
  */
  readonly country?: string;
  /**
  * Support link of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#end_user_support_help_url OrgConfiguration#end_user_support_help_url}
  */
  readonly endUserSupportHelpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#id OrgConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logo of org. The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#logo OrgConfiguration#logo}
  */
  readonly logo?: string;
  /**
  * Indicates whether the org's users receive Okta Communication emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#opt_out_communication_emails OrgConfiguration#opt_out_communication_emails}
  */
  readonly optOutCommunicationEmails?: boolean | cdktf.IResolvable;
  /**
  * Support help phone of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#phone_number OrgConfiguration#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Postal code of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#postal_code OrgConfiguration#postal_code}
  */
  readonly postalCode?: string;
  /**
  * State of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#state OrgConfiguration#state}
  */
  readonly state?: string;
  /**
  * Support help phone of org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#support_phone_number OrgConfiguration#support_phone_number}
  */
  readonly supportPhoneNumber?: string;
  /**
  * User ID representing the technical contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#technical_contact_user OrgConfiguration#technical_contact_user}
  */
  readonly technicalContactUser?: string;
  /**
  * The org's website
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#website OrgConfiguration#website}
  */
  readonly website?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration okta_org_configuration}
*/
export class OrgConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_org_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgConfiguration to import
  * @param importFromId The id of the existing OrgConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_org_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/org_configuration okta_org_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_org_configuration',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address1 = config.address1;
    this._address2 = config.address2;
    this._billingContactUser = config.billingContactUser;
    this._city = config.city;
    this._companyName = config.companyName;
    this._country = config.country;
    this._endUserSupportHelpUrl = config.endUserSupportHelpUrl;
    this._id = config.id;
    this._logo = config.logo;
    this._optOutCommunicationEmails = config.optOutCommunicationEmails;
    this._phoneNumber = config.phoneNumber;
    this._postalCode = config.postalCode;
    this._state = config.state;
    this._supportPhoneNumber = config.supportPhoneNumber;
    this._technicalContactUser = config.technicalContactUser;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_1 - computed: false, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address_1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address_2 - computed: false, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address_2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // billing_contact_user - computed: false, optional: true, required: false
  private _billingContactUser?: string; 
  public get billingContactUser() {
    return this.getStringAttribute('billing_contact_user');
  }
  public set billingContactUser(value: string) {
    this._billingContactUser = value;
  }
  public resetBillingContactUser() {
    this._billingContactUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingContactUserInput() {
    return this._billingContactUser;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company_name - computed: false, optional: false, required: true
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // end_user_support_help_url - computed: false, optional: true, required: false
  private _endUserSupportHelpUrl?: string; 
  public get endUserSupportHelpUrl() {
    return this.getStringAttribute('end_user_support_help_url');
  }
  public set endUserSupportHelpUrl(value: string) {
    this._endUserSupportHelpUrl = value;
  }
  public resetEndUserSupportHelpUrl() {
    this._endUserSupportHelpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserSupportHelpUrlInput() {
    return this._endUserSupportHelpUrl;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // opt_out_communication_emails - computed: false, optional: true, required: false
  private _optOutCommunicationEmails?: boolean | cdktf.IResolvable; 
  public get optOutCommunicationEmails() {
    return this.getBooleanAttribute('opt_out_communication_emails');
  }
  public set optOutCommunicationEmails(value: boolean | cdktf.IResolvable) {
    this._optOutCommunicationEmails = value;
  }
  public resetOptOutCommunicationEmails() {
    this._optOutCommunicationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutCommunicationEmailsInput() {
    return this._optOutCommunicationEmails;
  }

  // phone_number - computed: false, optional: true, required: false
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

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // support_phone_number - computed: false, optional: true, required: false
  private _supportPhoneNumber?: string; 
  public get supportPhoneNumber() {
    return this.getStringAttribute('support_phone_number');
  }
  public set supportPhoneNumber(value: string) {
    this._supportPhoneNumber = value;
  }
  public resetSupportPhoneNumber() {
    this._supportPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportPhoneNumberInput() {
    return this._supportPhoneNumber;
  }

  // technical_contact_user - computed: false, optional: true, required: false
  private _technicalContactUser?: string; 
  public get technicalContactUser() {
    return this.getStringAttribute('technical_contact_user');
  }
  public set technicalContactUser(value: string) {
    this._technicalContactUser = value;
  }
  public resetTechnicalContactUser() {
    this._technicalContactUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalContactUserInput() {
    return this._technicalContactUser;
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_1: cdktf.stringToTerraform(this._address1),
      address_2: cdktf.stringToTerraform(this._address2),
      billing_contact_user: cdktf.stringToTerraform(this._billingContactUser),
      city: cdktf.stringToTerraform(this._city),
      company_name: cdktf.stringToTerraform(this._companyName),
      country: cdktf.stringToTerraform(this._country),
      end_user_support_help_url: cdktf.stringToTerraform(this._endUserSupportHelpUrl),
      id: cdktf.stringToTerraform(this._id),
      logo: cdktf.stringToTerraform(this._logo),
      opt_out_communication_emails: cdktf.booleanToTerraform(this._optOutCommunicationEmails),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      state: cdktf.stringToTerraform(this._state),
      support_phone_number: cdktf.stringToTerraform(this._supportPhoneNumber),
      technical_contact_user: cdktf.stringToTerraform(this._technicalContactUser),
      website: cdktf.stringToTerraform(this._website),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_1: {
        value: cdktf.stringToHclTerraform(this._address1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_2: {
        value: cdktf.stringToHclTerraform(this._address2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_contact_user: {
        value: cdktf.stringToHclTerraform(this._billingContactUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_user_support_help_url: {
        value: cdktf.stringToHclTerraform(this._endUserSupportHelpUrl),
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
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_communication_emails: {
        value: cdktf.booleanToHclTerraform(this._optOutCommunicationEmails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_phone_number: {
        value: cdktf.stringToHclTerraform(this._supportPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technical_contact_user: {
        value: cdktf.stringToHclTerraform(this._technicalContactUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website: {
        value: cdktf.stringToHclTerraform(this._website),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
