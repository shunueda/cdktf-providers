// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalcontactsContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * External organization for this external contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#external_organization_id ExternalcontactsContact#external_organization_id}
  */
  readonly externalOrganizationId?: string;
  /**
  * Contact external system url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#external_system_url ExternalcontactsContact#external_system_url}
  */
  readonly externalSystemUrl?: string;
  /**
  * The first name of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#first_name ExternalcontactsContact#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#id ExternalcontactsContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The last name of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#last_name ExternalcontactsContact#last_name}
  */
  readonly lastName?: string;
  /**
  * The middle name of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#middle_name ExternalcontactsContact#middle_name}
  */
  readonly middleName?: string;
  /**
  * Contact other email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#other_email ExternalcontactsContact#other_email}
  */
  readonly otherEmail?: string;
  /**
  * Contact personal email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#personal_email ExternalcontactsContact#personal_email}
  */
  readonly personalEmail?: string;
  /**
  * The salutation of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#salutation ExternalcontactsContact#salutation}
  */
  readonly salutation?: string;
  /**
  * Contact survey opt out preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#survey_opt_out ExternalcontactsContact#survey_opt_out}
  */
  readonly surveyOptOut?: boolean | cdktf.IResolvable;
  /**
  * The title of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#title ExternalcontactsContact#title}
  */
  readonly title?: string;
  /**
  * Contact work email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#work_email ExternalcontactsContact#work_email}
  */
  readonly workEmail?: string;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#address ExternalcontactsContact#address}
  */
  readonly address?: ExternalcontactsContactAddress;
  /**
  * cell_phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#cell_phone ExternalcontactsContact#cell_phone}
  */
  readonly cellPhone?: ExternalcontactsContactCellPhone;
  /**
  * facebook_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#facebook_id ExternalcontactsContact#facebook_id}
  */
  readonly facebookId?: ExternalcontactsContactFacebookId;
  /**
  * home_phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#home_phone ExternalcontactsContact#home_phone}
  */
  readonly homePhone?: ExternalcontactsContactHomePhone;
  /**
  * line_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#line_id ExternalcontactsContact#line_id}
  */
  readonly lineId?: ExternalcontactsContactLineId;
  /**
  * other_phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#other_phone ExternalcontactsContact#other_phone}
  */
  readonly otherPhone?: ExternalcontactsContactOtherPhone;
  /**
  * twitter_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#twitter_id ExternalcontactsContact#twitter_id}
  */
  readonly twitterId?: ExternalcontactsContactTwitterId;
  /**
  * whatsapp_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#whatsapp_id ExternalcontactsContact#whatsapp_id}
  */
  readonly whatsappId?: ExternalcontactsContactWhatsappId;
  /**
  * work_phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#work_phone ExternalcontactsContact#work_phone}
  */
  readonly workPhone?: ExternalcontactsContactWorkPhone;
}
export interface ExternalcontactsContactAddress {
  /**
  * Contact address 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#address1 ExternalcontactsContact#address1}
  */
  readonly address1?: string;
  /**
  * Contact address 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#address2 ExternalcontactsContact#address2}
  */
  readonly address2?: string;
  /**
  * Contact address city.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#city ExternalcontactsContact#city}
  */
  readonly city?: string;
  /**
  * Contact address country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#country_code ExternalcontactsContact#country_code}
  */
  readonly countryCode?: string;
  /**
  * Contact address postal code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#postal_code ExternalcontactsContact#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Contact address state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#state ExternalcontactsContact#state}
  */
  readonly state?: string;
}

export function externalcontactsContactAddressToTerraform(struct?: ExternalcontactsContactAddressOutputReference | ExternalcontactsContactAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address1: cdktf.stringToTerraform(struct!.address1),
    address2: cdktf.stringToTerraform(struct!.address2),
    city: cdktf.stringToTerraform(struct!.city),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function externalcontactsContactAddressToHclTerraform(struct?: ExternalcontactsContactAddressOutputReference | ExternalcontactsContactAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address1 = undefined;
      this._address2 = undefined;
      this._city = undefined;
      this._countryCode = undefined;
      this._postalCode = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._city = value.city;
      this._countryCode = value.countryCode;
      this._postalCode = value.postalCode;
      this._state = value.state;
    }
  }

  // address1 - computed: false, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address1');
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

  // address2 - computed: false, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address2');
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

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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
}
export interface ExternalcontactsContactCellPhone {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#accepts_sms ExternalcontactsContact#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#country_code ExternalcontactsContact#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display ExternalcontactsContact#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#e164 ExternalcontactsContact#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#extension ExternalcontactsContact#extension}
  */
  readonly extension?: number;
}

export function externalcontactsContactCellPhoneToTerraform(struct?: ExternalcontactsContactCellPhoneOutputReference | ExternalcontactsContactCellPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepts_sms: cdktf.booleanToTerraform(struct!.acceptsSms),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    display: cdktf.stringToTerraform(struct!.display),
    e164: cdktf.stringToTerraform(struct!.e164),
    extension: cdktf.numberToTerraform(struct!.extension),
  }
}


export function externalcontactsContactCellPhoneToHclTerraform(struct?: ExternalcontactsContactCellPhoneOutputReference | ExternalcontactsContactCellPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepts_sms: {
      value: cdktf.booleanToHclTerraform(struct!.acceptsSms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e164: {
      value: cdktf.stringToHclTerraform(struct!.e164),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.numberToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactCellPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactCellPhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptsSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptsSms = this._acceptsSms;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._e164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.e164 = this._e164;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactCellPhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptsSms = undefined;
      this._countryCode = undefined;
      this._display = undefined;
      this._e164 = undefined;
      this._extension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptsSms = value.acceptsSms;
      this._countryCode = value.countryCode;
      this._display = value.display;
      this._e164 = value.e164;
      this._extension = value.extension;
    }
  }

  // accepts_sms - computed: false, optional: true, required: false
  private _acceptsSms?: boolean | cdktf.IResolvable; 
  public get acceptsSms() {
    return this.getBooleanAttribute('accepts_sms');
  }
  public set acceptsSms(value: boolean | cdktf.IResolvable) {
    this._acceptsSms = value;
  }
  public resetAcceptsSms() {
    this._acceptsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptsSmsInput() {
    return this._acceptsSms;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // e164 - computed: true, optional: true, required: false
  private _e164?: string; 
  public get e164() {
    return this.getStringAttribute('e164');
  }
  public set e164(value: string) {
    this._e164 = value;
  }
  public resetE164() {
    this._e164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e164Input() {
    return this._e164;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: number; 
  public get extension() {
    return this.getNumberAttribute('extension');
  }
  public set extension(value: number) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }
}
export interface ExternalcontactsContactFacebookIdIds {
  /**
  * Contact facebook scoped id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#scoped_id ExternalcontactsContact#scoped_id}
  */
  readonly scopedId?: string;
}

export function externalcontactsContactFacebookIdIdsToTerraform(struct?: ExternalcontactsContactFacebookIdIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scoped_id: cdktf.stringToTerraform(struct!.scopedId),
  }
}


export function externalcontactsContactFacebookIdIdsToHclTerraform(struct?: ExternalcontactsContactFacebookIdIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scoped_id: {
      value: cdktf.stringToHclTerraform(struct!.scopedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactFacebookIdIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExternalcontactsContactFacebookIdIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopedId = this._scopedId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactFacebookIdIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopedId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopedId = value.scopedId;
    }
  }

  // scoped_id - computed: false, optional: true, required: false
  private _scopedId?: string; 
  public get scopedId() {
    return this.getStringAttribute('scoped_id');
  }
  public set scopedId(value: string) {
    this._scopedId = value;
  }
  public resetScopedId() {
    this._scopedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedIdInput() {
    return this._scopedId;
  }
}

export class ExternalcontactsContactFacebookIdIdsList extends cdktf.ComplexList {
  public internalValue? : ExternalcontactsContactFacebookIdIds[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ExternalcontactsContactFacebookIdIdsOutputReference {
    return new ExternalcontactsContactFacebookIdIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalcontactsContactFacebookId {
  /**
  * Contact whatsapp display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display_name ExternalcontactsContact#display_name}
  */
  readonly displayName?: string;
  /**
  * ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#ids ExternalcontactsContact#ids}
  */
  readonly ids?: ExternalcontactsContactFacebookIdIds[] | cdktf.IResolvable;
}

export function externalcontactsContactFacebookIdToTerraform(struct?: ExternalcontactsContactFacebookIdOutputReference | ExternalcontactsContactFacebookId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ids: cdktf.listMapper(externalcontactsContactFacebookIdIdsToTerraform, true)(struct!.ids),
  }
}


export function externalcontactsContactFacebookIdToHclTerraform(struct?: ExternalcontactsContactFacebookIdOutputReference | ExternalcontactsContactFacebookId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ids: {
      value: cdktf.listMapperHcl(externalcontactsContactFacebookIdIdsToHclTerraform, true)(struct!.ids),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalcontactsContactFacebookIdIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactFacebookIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactFacebookId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactFacebookId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._ids.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._ids.internalValue = value.ids;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ids - computed: false, optional: true, required: false
  private _ids = new ExternalcontactsContactFacebookIdIdsList(this, "ids", false);
  public get ids() {
    return this._ids;
  }
  public putIds(value: ExternalcontactsContactFacebookIdIds[] | cdktf.IResolvable) {
    this._ids.internalValue = value;
  }
  public resetIds() {
    this._ids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids.internalValue;
  }
}
export interface ExternalcontactsContactHomePhone {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#accepts_sms ExternalcontactsContact#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#country_code ExternalcontactsContact#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display ExternalcontactsContact#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#e164 ExternalcontactsContact#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#extension ExternalcontactsContact#extension}
  */
  readonly extension?: number;
}

export function externalcontactsContactHomePhoneToTerraform(struct?: ExternalcontactsContactHomePhoneOutputReference | ExternalcontactsContactHomePhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepts_sms: cdktf.booleanToTerraform(struct!.acceptsSms),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    display: cdktf.stringToTerraform(struct!.display),
    e164: cdktf.stringToTerraform(struct!.e164),
    extension: cdktf.numberToTerraform(struct!.extension),
  }
}


export function externalcontactsContactHomePhoneToHclTerraform(struct?: ExternalcontactsContactHomePhoneOutputReference | ExternalcontactsContactHomePhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepts_sms: {
      value: cdktf.booleanToHclTerraform(struct!.acceptsSms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e164: {
      value: cdktf.stringToHclTerraform(struct!.e164),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.numberToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactHomePhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactHomePhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptsSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptsSms = this._acceptsSms;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._e164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.e164 = this._e164;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactHomePhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptsSms = undefined;
      this._countryCode = undefined;
      this._display = undefined;
      this._e164 = undefined;
      this._extension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptsSms = value.acceptsSms;
      this._countryCode = value.countryCode;
      this._display = value.display;
      this._e164 = value.e164;
      this._extension = value.extension;
    }
  }

  // accepts_sms - computed: false, optional: true, required: false
  private _acceptsSms?: boolean | cdktf.IResolvable; 
  public get acceptsSms() {
    return this.getBooleanAttribute('accepts_sms');
  }
  public set acceptsSms(value: boolean | cdktf.IResolvable) {
    this._acceptsSms = value;
  }
  public resetAcceptsSms() {
    this._acceptsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptsSmsInput() {
    return this._acceptsSms;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // e164 - computed: true, optional: true, required: false
  private _e164?: string; 
  public get e164() {
    return this.getStringAttribute('e164');
  }
  public set e164(value: string) {
    this._e164 = value;
  }
  public resetE164() {
    this._e164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e164Input() {
    return this._e164;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: number; 
  public get extension() {
    return this.getNumberAttribute('extension');
  }
  public set extension(value: number) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }
}
export interface ExternalcontactsContactLineIdIds {
  /**
  * Contact line id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#user_id ExternalcontactsContact#user_id}
  */
  readonly userId?: string;
}

export function externalcontactsContactLineIdIdsToTerraform(struct?: ExternalcontactsContactLineIdIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function externalcontactsContactLineIdIdsToHclTerraform(struct?: ExternalcontactsContactLineIdIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactLineIdIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExternalcontactsContactLineIdIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactLineIdIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userId = value.userId;
    }
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class ExternalcontactsContactLineIdIdsList extends cdktf.ComplexList {
  public internalValue? : ExternalcontactsContactLineIdIds[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ExternalcontactsContactLineIdIdsOutputReference {
    return new ExternalcontactsContactLineIdIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalcontactsContactLineId {
  /**
  * Contact line display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display_name ExternalcontactsContact#display_name}
  */
  readonly displayName?: string;
  /**
  * ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#ids ExternalcontactsContact#ids}
  */
  readonly ids?: ExternalcontactsContactLineIdIds[] | cdktf.IResolvable;
}

export function externalcontactsContactLineIdToTerraform(struct?: ExternalcontactsContactLineIdOutputReference | ExternalcontactsContactLineId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ids: cdktf.listMapper(externalcontactsContactLineIdIdsToTerraform, true)(struct!.ids),
  }
}


export function externalcontactsContactLineIdToHclTerraform(struct?: ExternalcontactsContactLineIdOutputReference | ExternalcontactsContactLineId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ids: {
      value: cdktf.listMapperHcl(externalcontactsContactLineIdIdsToHclTerraform, true)(struct!.ids),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalcontactsContactLineIdIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactLineIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactLineId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactLineId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._ids.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._ids.internalValue = value.ids;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ids - computed: false, optional: true, required: false
  private _ids = new ExternalcontactsContactLineIdIdsList(this, "ids", false);
  public get ids() {
    return this._ids;
  }
  public putIds(value: ExternalcontactsContactLineIdIds[] | cdktf.IResolvable) {
    this._ids.internalValue = value;
  }
  public resetIds() {
    this._ids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids.internalValue;
  }
}
export interface ExternalcontactsContactOtherPhone {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#accepts_sms ExternalcontactsContact#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#country_code ExternalcontactsContact#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display ExternalcontactsContact#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#e164 ExternalcontactsContact#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#extension ExternalcontactsContact#extension}
  */
  readonly extension?: number;
}

export function externalcontactsContactOtherPhoneToTerraform(struct?: ExternalcontactsContactOtherPhoneOutputReference | ExternalcontactsContactOtherPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepts_sms: cdktf.booleanToTerraform(struct!.acceptsSms),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    display: cdktf.stringToTerraform(struct!.display),
    e164: cdktf.stringToTerraform(struct!.e164),
    extension: cdktf.numberToTerraform(struct!.extension),
  }
}


export function externalcontactsContactOtherPhoneToHclTerraform(struct?: ExternalcontactsContactOtherPhoneOutputReference | ExternalcontactsContactOtherPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepts_sms: {
      value: cdktf.booleanToHclTerraform(struct!.acceptsSms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e164: {
      value: cdktf.stringToHclTerraform(struct!.e164),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.numberToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactOtherPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactOtherPhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptsSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptsSms = this._acceptsSms;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._e164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.e164 = this._e164;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactOtherPhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptsSms = undefined;
      this._countryCode = undefined;
      this._display = undefined;
      this._e164 = undefined;
      this._extension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptsSms = value.acceptsSms;
      this._countryCode = value.countryCode;
      this._display = value.display;
      this._e164 = value.e164;
      this._extension = value.extension;
    }
  }

  // accepts_sms - computed: false, optional: true, required: false
  private _acceptsSms?: boolean | cdktf.IResolvable; 
  public get acceptsSms() {
    return this.getBooleanAttribute('accepts_sms');
  }
  public set acceptsSms(value: boolean | cdktf.IResolvable) {
    this._acceptsSms = value;
  }
  public resetAcceptsSms() {
    this._acceptsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptsSmsInput() {
    return this._acceptsSms;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // e164 - computed: true, optional: true, required: false
  private _e164?: string; 
  public get e164() {
    return this.getStringAttribute('e164');
  }
  public set e164(value: string) {
    this._e164 = value;
  }
  public resetE164() {
    this._e164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e164Input() {
    return this._e164;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: number; 
  public get extension() {
    return this.getNumberAttribute('extension');
  }
  public set extension(value: number) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }
}
export interface ExternalcontactsContactTwitterId {
  /**
  * Contact twitter id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#id ExternalcontactsContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Contact twitter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#name ExternalcontactsContact#name}
  */
  readonly name?: string;
  /**
  * Contact twitter screen name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#screen_name ExternalcontactsContact#screen_name}
  */
  readonly screenName?: string;
}

export function externalcontactsContactTwitterIdToTerraform(struct?: ExternalcontactsContactTwitterIdOutputReference | ExternalcontactsContactTwitterId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    screen_name: cdktf.stringToTerraform(struct!.screenName),
  }
}


export function externalcontactsContactTwitterIdToHclTerraform(struct?: ExternalcontactsContactTwitterIdOutputReference | ExternalcontactsContactTwitterId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screen_name: {
      value: cdktf.stringToHclTerraform(struct!.screenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactTwitterIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactTwitterId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._screenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenName = this._screenName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactTwitterId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._screenName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._screenName = value.screenName;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // profile_url - computed: true, optional: false, required: false
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }

  // screen_name - computed: false, optional: true, required: false
  private _screenName?: string; 
  public get screenName() {
    return this.getStringAttribute('screen_name');
  }
  public set screenName(value: string) {
    this._screenName = value;
  }
  public resetScreenName() {
    this._screenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenNameInput() {
    return this._screenName;
  }
}
export interface ExternalcontactsContactWhatsappIdPhoneNumber {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#accepts_sms ExternalcontactsContact#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#country_code ExternalcontactsContact#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display ExternalcontactsContact#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#e164 ExternalcontactsContact#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#extension ExternalcontactsContact#extension}
  */
  readonly extension?: number;
}

export function externalcontactsContactWhatsappIdPhoneNumberToTerraform(struct?: ExternalcontactsContactWhatsappIdPhoneNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepts_sms: cdktf.booleanToTerraform(struct!.acceptsSms),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    display: cdktf.stringToTerraform(struct!.display),
    e164: cdktf.stringToTerraform(struct!.e164),
    extension: cdktf.numberToTerraform(struct!.extension),
  }
}


export function externalcontactsContactWhatsappIdPhoneNumberToHclTerraform(struct?: ExternalcontactsContactWhatsappIdPhoneNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepts_sms: {
      value: cdktf.booleanToHclTerraform(struct!.acceptsSms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e164: {
      value: cdktf.stringToHclTerraform(struct!.e164),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.numberToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactWhatsappIdPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExternalcontactsContactWhatsappIdPhoneNumber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptsSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptsSms = this._acceptsSms;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._e164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.e164 = this._e164;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactWhatsappIdPhoneNumber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptsSms = undefined;
      this._countryCode = undefined;
      this._display = undefined;
      this._e164 = undefined;
      this._extension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptsSms = value.acceptsSms;
      this._countryCode = value.countryCode;
      this._display = value.display;
      this._e164 = value.e164;
      this._extension = value.extension;
    }
  }

  // accepts_sms - computed: false, optional: true, required: false
  private _acceptsSms?: boolean | cdktf.IResolvable; 
  public get acceptsSms() {
    return this.getBooleanAttribute('accepts_sms');
  }
  public set acceptsSms(value: boolean | cdktf.IResolvable) {
    this._acceptsSms = value;
  }
  public resetAcceptsSms() {
    this._acceptsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptsSmsInput() {
    return this._acceptsSms;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // e164 - computed: true, optional: true, required: false
  private _e164?: string; 
  public get e164() {
    return this.getStringAttribute('e164');
  }
  public set e164(value: string) {
    this._e164 = value;
  }
  public resetE164() {
    this._e164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e164Input() {
    return this._e164;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: number; 
  public get extension() {
    return this.getNumberAttribute('extension');
  }
  public set extension(value: number) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }
}

export class ExternalcontactsContactWhatsappIdPhoneNumberList extends cdktf.ComplexList {
  public internalValue? : ExternalcontactsContactWhatsappIdPhoneNumber[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ExternalcontactsContactWhatsappIdPhoneNumberOutputReference {
    return new ExternalcontactsContactWhatsappIdPhoneNumberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalcontactsContactWhatsappId {
  /**
  * Contact whatsapp display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display_name ExternalcontactsContact#display_name}
  */
  readonly displayName: string;
  /**
  * phone_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#phone_number ExternalcontactsContact#phone_number}
  */
  readonly phoneNumber: ExternalcontactsContactWhatsappIdPhoneNumber[] | cdktf.IResolvable;
}

export function externalcontactsContactWhatsappIdToTerraform(struct?: ExternalcontactsContactWhatsappIdOutputReference | ExternalcontactsContactWhatsappId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    phone_number: cdktf.listMapper(externalcontactsContactWhatsappIdPhoneNumberToTerraform, true)(struct!.phoneNumber),
  }
}


export function externalcontactsContactWhatsappIdToHclTerraform(struct?: ExternalcontactsContactWhatsappIdOutputReference | ExternalcontactsContactWhatsappId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.listMapperHcl(externalcontactsContactWhatsappIdPhoneNumberToHclTerraform, true)(struct!.phoneNumber),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalcontactsContactWhatsappIdPhoneNumberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactWhatsappIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactWhatsappId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactWhatsappId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._phoneNumber.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._phoneNumber.internalValue = value.phoneNumber;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber = new ExternalcontactsContactWhatsappIdPhoneNumberList(this, "phone_number", false);
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: ExternalcontactsContactWhatsappIdPhoneNumber[] | cdktf.IResolvable) {
    this._phoneNumber.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }
}
export interface ExternalcontactsContactWorkPhone {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#accepts_sms ExternalcontactsContact#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#country_code ExternalcontactsContact#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#display ExternalcontactsContact#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#e164 ExternalcontactsContact#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#extension ExternalcontactsContact#extension}
  */
  readonly extension?: number;
}

export function externalcontactsContactWorkPhoneToTerraform(struct?: ExternalcontactsContactWorkPhoneOutputReference | ExternalcontactsContactWorkPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepts_sms: cdktf.booleanToTerraform(struct!.acceptsSms),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    display: cdktf.stringToTerraform(struct!.display),
    e164: cdktf.stringToTerraform(struct!.e164),
    extension: cdktf.numberToTerraform(struct!.extension),
  }
}


export function externalcontactsContactWorkPhoneToHclTerraform(struct?: ExternalcontactsContactWorkPhoneOutputReference | ExternalcontactsContactWorkPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepts_sms: {
      value: cdktf.booleanToHclTerraform(struct!.acceptsSms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e164: {
      value: cdktf.stringToHclTerraform(struct!.e164),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.numberToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsContactWorkPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsContactWorkPhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptsSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptsSms = this._acceptsSms;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._e164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.e164 = this._e164;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsContactWorkPhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptsSms = undefined;
      this._countryCode = undefined;
      this._display = undefined;
      this._e164 = undefined;
      this._extension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptsSms = value.acceptsSms;
      this._countryCode = value.countryCode;
      this._display = value.display;
      this._e164 = value.e164;
      this._extension = value.extension;
    }
  }

  // accepts_sms - computed: false, optional: true, required: false
  private _acceptsSms?: boolean | cdktf.IResolvable; 
  public get acceptsSms() {
    return this.getBooleanAttribute('accepts_sms');
  }
  public set acceptsSms(value: boolean | cdktf.IResolvable) {
    this._acceptsSms = value;
  }
  public resetAcceptsSms() {
    this._acceptsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptsSmsInput() {
    return this._acceptsSms;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // e164 - computed: true, optional: true, required: false
  private _e164?: string; 
  public get e164() {
    return this.getStringAttribute('e164');
  }
  public set e164(value: string) {
    this._e164 = value;
  }
  public resetE164() {
    this._e164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e164Input() {
    return this._e164;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: number; 
  public get extension() {
    return this.getNumberAttribute('extension');
  }
  public set extension(value: number) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact genesyscloud_externalcontacts_contact}
*/
export class ExternalcontactsContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_externalcontacts_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalcontactsContact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalcontactsContact to import
  * @param importFromId The id of the existing ExternalcontactsContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalcontactsContact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_externalcontacts_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_contact genesyscloud_externalcontacts_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalcontactsContactConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExternalcontactsContactConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_externalcontacts_contact',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalOrganizationId = config.externalOrganizationId;
    this._externalSystemUrl = config.externalSystemUrl;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._middleName = config.middleName;
    this._otherEmail = config.otherEmail;
    this._personalEmail = config.personalEmail;
    this._salutation = config.salutation;
    this._surveyOptOut = config.surveyOptOut;
    this._title = config.title;
    this._workEmail = config.workEmail;
    this._address.internalValue = config.address;
    this._cellPhone.internalValue = config.cellPhone;
    this._facebookId.internalValue = config.facebookId;
    this._homePhone.internalValue = config.homePhone;
    this._lineId.internalValue = config.lineId;
    this._otherPhone.internalValue = config.otherPhone;
    this._twitterId.internalValue = config.twitterId;
    this._whatsappId.internalValue = config.whatsappId;
    this._workPhone.internalValue = config.workPhone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_organization_id - computed: false, optional: true, required: false
  private _externalOrganizationId?: string; 
  public get externalOrganizationId() {
    return this.getStringAttribute('external_organization_id');
  }
  public set externalOrganizationId(value: string) {
    this._externalOrganizationId = value;
  }
  public resetExternalOrganizationId() {
    this._externalOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOrganizationIdInput() {
    return this._externalOrganizationId;
  }

  // external_system_url - computed: false, optional: true, required: false
  private _externalSystemUrl?: string; 
  public get externalSystemUrl() {
    return this.getStringAttribute('external_system_url');
  }
  public set externalSystemUrl(value: string) {
    this._externalSystemUrl = value;
  }
  public resetExternalSystemUrl() {
    this._externalSystemUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSystemUrlInput() {
    return this._externalSystemUrl;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // middle_name - computed: false, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // other_email - computed: false, optional: true, required: false
  private _otherEmail?: string; 
  public get otherEmail() {
    return this.getStringAttribute('other_email');
  }
  public set otherEmail(value: string) {
    this._otherEmail = value;
  }
  public resetOtherEmail() {
    this._otherEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherEmailInput() {
    return this._otherEmail;
  }

  // personal_email - computed: false, optional: true, required: false
  private _personalEmail?: string; 
  public get personalEmail() {
    return this.getStringAttribute('personal_email');
  }
  public set personalEmail(value: string) {
    this._personalEmail = value;
  }
  public resetPersonalEmail() {
    this._personalEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalEmailInput() {
    return this._personalEmail;
  }

  // salutation - computed: false, optional: true, required: false
  private _salutation?: string; 
  public get salutation() {
    return this.getStringAttribute('salutation');
  }
  public set salutation(value: string) {
    this._salutation = value;
  }
  public resetSalutation() {
    this._salutation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salutationInput() {
    return this._salutation;
  }

  // survey_opt_out - computed: false, optional: true, required: false
  private _surveyOptOut?: boolean | cdktf.IResolvable; 
  public get surveyOptOut() {
    return this.getBooleanAttribute('survey_opt_out');
  }
  public set surveyOptOut(value: boolean | cdktf.IResolvable) {
    this._surveyOptOut = value;
  }
  public resetSurveyOptOut() {
    this._surveyOptOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyOptOutInput() {
    return this._surveyOptOut;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // work_email - computed: false, optional: true, required: false
  private _workEmail?: string; 
  public get workEmail() {
    return this.getStringAttribute('work_email');
  }
  public set workEmail(value: string) {
    this._workEmail = value;
  }
  public resetWorkEmail() {
    this._workEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workEmailInput() {
    return this._workEmail;
  }

  // address - computed: false, optional: true, required: false
  private _address = new ExternalcontactsContactAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: ExternalcontactsContactAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // cell_phone - computed: false, optional: true, required: false
  private _cellPhone = new ExternalcontactsContactCellPhoneOutputReference(this, "cell_phone");
  public get cellPhone() {
    return this._cellPhone;
  }
  public putCellPhone(value: ExternalcontactsContactCellPhone) {
    this._cellPhone.internalValue = value;
  }
  public resetCellPhone() {
    this._cellPhone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellPhoneInput() {
    return this._cellPhone.internalValue;
  }

  // facebook_id - computed: false, optional: true, required: false
  private _facebookId = new ExternalcontactsContactFacebookIdOutputReference(this, "facebook_id");
  public get facebookId() {
    return this._facebookId;
  }
  public putFacebookId(value: ExternalcontactsContactFacebookId) {
    this._facebookId.internalValue = value;
  }
  public resetFacebookId() {
    this._facebookId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookIdInput() {
    return this._facebookId.internalValue;
  }

  // home_phone - computed: false, optional: true, required: false
  private _homePhone = new ExternalcontactsContactHomePhoneOutputReference(this, "home_phone");
  public get homePhone() {
    return this._homePhone;
  }
  public putHomePhone(value: ExternalcontactsContactHomePhone) {
    this._homePhone.internalValue = value;
  }
  public resetHomePhone() {
    this._homePhone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePhoneInput() {
    return this._homePhone.internalValue;
  }

  // line_id - computed: false, optional: true, required: false
  private _lineId = new ExternalcontactsContactLineIdOutputReference(this, "line_id");
  public get lineId() {
    return this._lineId;
  }
  public putLineId(value: ExternalcontactsContactLineId) {
    this._lineId.internalValue = value;
  }
  public resetLineId() {
    this._lineId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineIdInput() {
    return this._lineId.internalValue;
  }

  // other_phone - computed: false, optional: true, required: false
  private _otherPhone = new ExternalcontactsContactOtherPhoneOutputReference(this, "other_phone");
  public get otherPhone() {
    return this._otherPhone;
  }
  public putOtherPhone(value: ExternalcontactsContactOtherPhone) {
    this._otherPhone.internalValue = value;
  }
  public resetOtherPhone() {
    this._otherPhone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherPhoneInput() {
    return this._otherPhone.internalValue;
  }

  // twitter_id - computed: false, optional: true, required: false
  private _twitterId = new ExternalcontactsContactTwitterIdOutputReference(this, "twitter_id");
  public get twitterId() {
    return this._twitterId;
  }
  public putTwitterId(value: ExternalcontactsContactTwitterId) {
    this._twitterId.internalValue = value;
  }
  public resetTwitterId() {
    this._twitterId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterIdInput() {
    return this._twitterId.internalValue;
  }

  // whatsapp_id - computed: false, optional: true, required: false
  private _whatsappId = new ExternalcontactsContactWhatsappIdOutputReference(this, "whatsapp_id");
  public get whatsappId() {
    return this._whatsappId;
  }
  public putWhatsappId(value: ExternalcontactsContactWhatsappId) {
    this._whatsappId.internalValue = value;
  }
  public resetWhatsappId() {
    this._whatsappId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsappIdInput() {
    return this._whatsappId.internalValue;
  }

  // work_phone - computed: false, optional: true, required: false
  private _workPhone = new ExternalcontactsContactWorkPhoneOutputReference(this, "work_phone");
  public get workPhone() {
    return this._workPhone;
  }
  public putWorkPhone(value: ExternalcontactsContactWorkPhone) {
    this._workPhone.internalValue = value;
  }
  public resetWorkPhone() {
    this._workPhone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workPhoneInput() {
    return this._workPhone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_organization_id: cdktf.stringToTerraform(this._externalOrganizationId),
      external_system_url: cdktf.stringToTerraform(this._externalSystemUrl),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      middle_name: cdktf.stringToTerraform(this._middleName),
      other_email: cdktf.stringToTerraform(this._otherEmail),
      personal_email: cdktf.stringToTerraform(this._personalEmail),
      salutation: cdktf.stringToTerraform(this._salutation),
      survey_opt_out: cdktf.booleanToTerraform(this._surveyOptOut),
      title: cdktf.stringToTerraform(this._title),
      work_email: cdktf.stringToTerraform(this._workEmail),
      address: externalcontactsContactAddressToTerraform(this._address.internalValue),
      cell_phone: externalcontactsContactCellPhoneToTerraform(this._cellPhone.internalValue),
      facebook_id: externalcontactsContactFacebookIdToTerraform(this._facebookId.internalValue),
      home_phone: externalcontactsContactHomePhoneToTerraform(this._homePhone.internalValue),
      line_id: externalcontactsContactLineIdToTerraform(this._lineId.internalValue),
      other_phone: externalcontactsContactOtherPhoneToTerraform(this._otherPhone.internalValue),
      twitter_id: externalcontactsContactTwitterIdToTerraform(this._twitterId.internalValue),
      whatsapp_id: externalcontactsContactWhatsappIdToTerraform(this._whatsappId.internalValue),
      work_phone: externalcontactsContactWorkPhoneToTerraform(this._workPhone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_organization_id: {
        value: cdktf.stringToHclTerraform(this._externalOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_system_url: {
        value: cdktf.stringToHclTerraform(this._externalSystemUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      middle_name: {
        value: cdktf.stringToHclTerraform(this._middleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_email: {
        value: cdktf.stringToHclTerraform(this._otherEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_email: {
        value: cdktf.stringToHclTerraform(this._personalEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salutation: {
        value: cdktf.stringToHclTerraform(this._salutation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      survey_opt_out: {
        value: cdktf.booleanToHclTerraform(this._surveyOptOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_email: {
        value: cdktf.stringToHclTerraform(this._workEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: externalcontactsContactAddressToHclTerraform(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactAddressList",
      },
      cell_phone: {
        value: externalcontactsContactCellPhoneToHclTerraform(this._cellPhone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactCellPhoneList",
      },
      facebook_id: {
        value: externalcontactsContactFacebookIdToHclTerraform(this._facebookId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactFacebookIdList",
      },
      home_phone: {
        value: externalcontactsContactHomePhoneToHclTerraform(this._homePhone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactHomePhoneList",
      },
      line_id: {
        value: externalcontactsContactLineIdToHclTerraform(this._lineId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactLineIdList",
      },
      other_phone: {
        value: externalcontactsContactOtherPhoneToHclTerraform(this._otherPhone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactOtherPhoneList",
      },
      twitter_id: {
        value: externalcontactsContactTwitterIdToHclTerraform(this._twitterId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactTwitterIdList",
      },
      whatsapp_id: {
        value: externalcontactsContactWhatsappIdToHclTerraform(this._whatsappId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactWhatsappIdList",
      },
      work_phone: {
        value: externalcontactsContactWorkPhoneToHclTerraform(this._workPhone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsContactWorkPhoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
