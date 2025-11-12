// https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should the domain autorenew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#autorenew Domain#autorenew}
  */
  readonly autorenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The FQDN of the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * A list of nameservers for the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#nameservers Domain#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of tags attached to the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#tags Domain#tags}
  */
  readonly tags?: string[];
  /**
  * admin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#admin Domain#admin}
  */
  readonly admin?: DomainAdmin;
  /**
  * billing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#billing Domain#billing}
  */
  readonly billing?: DomainBilling;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#owner Domain#owner}
  */
  readonly owner: DomainOwner;
  /**
  * tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#tech Domain#tech}
  */
  readonly tech?: DomainTech;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#timeouts Domain#timeouts}
  */
  readonly timeouts?: DomainTimeouts;
}
export interface DomainAdmin {
  /**
  * City for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#city Domain#city}
  */
  readonly city: string;
  /**
  * The two letter country code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#country Domain#country}
  */
  readonly country: string;
  /**
  * Whether or not to obfuscate contact data in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#data_obfuscated Domain#data_obfuscated}
  */
  readonly dataObfuscated?: boolean | cdktf.IResolvable;
  /**
  * Contact email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#email Domain#email}
  */
  readonly email: string;
  /**
  * Extra parameters, needed for some jurisdictions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#extra_parameters Domain#extra_parameters}
  */
  readonly extraParameters?: { [key: string]: string };
  /**
  * Family name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#family_name Domain#family_name}
  */
  readonly familyName: string;
  /**
  * Given name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#given_name Domain#given_name}
  */
  readonly givenName: string;
  /**
  * Whether or not to obfuscate contact email in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#mail_obfuscated Domain#mail_obfuscated}
  */
  readonly mailObfuscated?: boolean | cdktf.IResolvable;
  /**
  * The legal name of the organisation. Required for types other than person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#organisation Domain#organisation}
  */
  readonly organisation?: string;
  /**
  * Phone number for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#phone Domain#phone}
  */
  readonly phone: string;
  /**
  * The state code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#state Domain#state}
  */
  readonly state?: string;
  /**
  * Street Address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#street_addr Domain#street_addr}
  */
  readonly streetAddr: string;
  /**
  * One of 'person', 'company', 'association', 'public body', or 'reseller'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
  /**
  * Postal Code/Zipcode of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#zip Domain#zip}
  */
  readonly zip: string;
}

export function domainAdminToTerraform(struct?: DomainAdminOutputReference | DomainAdmin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    data_obfuscated: cdktf.booleanToTerraform(struct!.dataObfuscated),
    email: cdktf.stringToTerraform(struct!.email),
    extra_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParameters),
    family_name: cdktf.stringToTerraform(struct!.familyName),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    mail_obfuscated: cdktf.booleanToTerraform(struct!.mailObfuscated),
    organisation: cdktf.stringToTerraform(struct!.organisation),
    phone: cdktf.stringToTerraform(struct!.phone),
    state: cdktf.stringToTerraform(struct!.state),
    street_addr: cdktf.stringToTerraform(struct!.streetAddr),
    type: cdktf.stringToTerraform(struct!.type),
    zip: cdktf.stringToTerraform(struct!.zip),
  }
}


export function domainAdminToHclTerraform(struct?: DomainAdminOutputReference | DomainAdmin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.dataObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    family_name: {
      value: cdktf.stringToHclTerraform(struct!.familyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.mailObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organisation: {
      value: cdktf.stringToHclTerraform(struct!.organisation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
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
    street_addr: {
      value: cdktf.stringToHclTerraform(struct!.streetAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip: {
      value: cdktf.stringToHclTerraform(struct!.zip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainAdmin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._dataObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataObfuscated = this._dataObfuscated;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters;
    }
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._mailObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailObfuscated = this._mailObfuscated;
    }
    if (this._organisation !== undefined) {
      hasAnyValues = true;
      internalValueResult.organisation = this._organisation;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._streetAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddr = this._streetAddr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zip !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainAdmin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._city = undefined;
      this._country = undefined;
      this._dataObfuscated = undefined;
      this._email = undefined;
      this._extraParameters = undefined;
      this._familyName = undefined;
      this._givenName = undefined;
      this._mailObfuscated = undefined;
      this._organisation = undefined;
      this._phone = undefined;
      this._state = undefined;
      this._streetAddr = undefined;
      this._type = undefined;
      this._zip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._city = value.city;
      this._country = value.country;
      this._dataObfuscated = value.dataObfuscated;
      this._email = value.email;
      this._extraParameters = value.extraParameters;
      this._familyName = value.familyName;
      this._givenName = value.givenName;
      this._mailObfuscated = value.mailObfuscated;
      this._organisation = value.organisation;
      this._phone = value.phone;
      this._state = value.state;
      this._streetAddr = value.streetAddr;
      this._type = value.type;
      this._zip = value.zip;
    }
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // data_obfuscated - computed: false, optional: true, required: false
  private _dataObfuscated?: boolean | cdktf.IResolvable; 
  public get dataObfuscated() {
    return this.getBooleanAttribute('data_obfuscated');
  }
  public set dataObfuscated(value: boolean | cdktf.IResolvable) {
    this._dataObfuscated = value;
  }
  public resetDataObfuscated() {
    this._dataObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObfuscatedInput() {
    return this._dataObfuscated;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_parameters - computed: false, optional: true, required: false
  private _extraParameters?: { [key: string]: string }; 
  public get extraParameters() {
    return this.getStringMapAttribute('extra_parameters');
  }
  public set extraParameters(value: { [key: string]: string }) {
    this._extraParameters = value;
  }
  public resetExtraParameters() {
    this._extraParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters;
  }

  // family_name - computed: false, optional: false, required: true
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // given_name - computed: false, optional: false, required: true
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // mail_obfuscated - computed: false, optional: true, required: false
  private _mailObfuscated?: boolean | cdktf.IResolvable; 
  public get mailObfuscated() {
    return this.getBooleanAttribute('mail_obfuscated');
  }
  public set mailObfuscated(value: boolean | cdktf.IResolvable) {
    this._mailObfuscated = value;
  }
  public resetMailObfuscated() {
    this._mailObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailObfuscatedInput() {
    return this._mailObfuscated;
  }

  // organisation - computed: false, optional: true, required: false
  private _organisation?: string; 
  public get organisation() {
    return this.getStringAttribute('organisation');
  }
  public set organisation(value: string) {
    this._organisation = value;
  }
  public resetOrganisation() {
    this._organisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
  }

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
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

  // street_addr - computed: false, optional: false, required: true
  private _streetAddr?: string; 
  public get streetAddr() {
    return this.getStringAttribute('street_addr');
  }
  public set streetAddr(value: string) {
    this._streetAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddrInput() {
    return this._streetAddr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zip - computed: false, optional: false, required: true
  private _zip?: string; 
  public get zip() {
    return this.getStringAttribute('zip');
  }
  public set zip(value: string) {
    this._zip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip;
  }
}
export interface DomainBilling {
  /**
  * City for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#city Domain#city}
  */
  readonly city: string;
  /**
  * The two letter country code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#country Domain#country}
  */
  readonly country: string;
  /**
  * Whether or not to obfuscate contact data in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#data_obfuscated Domain#data_obfuscated}
  */
  readonly dataObfuscated?: boolean | cdktf.IResolvable;
  /**
  * Contact email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#email Domain#email}
  */
  readonly email: string;
  /**
  * Extra parameters, needed for some jurisdictions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#extra_parameters Domain#extra_parameters}
  */
  readonly extraParameters?: { [key: string]: string };
  /**
  * Family name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#family_name Domain#family_name}
  */
  readonly familyName: string;
  /**
  * Given name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#given_name Domain#given_name}
  */
  readonly givenName: string;
  /**
  * Whether or not to obfuscate contact email in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#mail_obfuscated Domain#mail_obfuscated}
  */
  readonly mailObfuscated?: boolean | cdktf.IResolvable;
  /**
  * The legal name of the organisation. Required for types other than person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#organisation Domain#organisation}
  */
  readonly organisation?: string;
  /**
  * Phone number for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#phone Domain#phone}
  */
  readonly phone: string;
  /**
  * The state code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#state Domain#state}
  */
  readonly state?: string;
  /**
  * Street Address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#street_addr Domain#street_addr}
  */
  readonly streetAddr: string;
  /**
  * One of 'person', 'company', 'association', 'public body', or 'reseller'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
  /**
  * Postal Code/Zipcode of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#zip Domain#zip}
  */
  readonly zip: string;
}

export function domainBillingToTerraform(struct?: DomainBillingOutputReference | DomainBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    data_obfuscated: cdktf.booleanToTerraform(struct!.dataObfuscated),
    email: cdktf.stringToTerraform(struct!.email),
    extra_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParameters),
    family_name: cdktf.stringToTerraform(struct!.familyName),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    mail_obfuscated: cdktf.booleanToTerraform(struct!.mailObfuscated),
    organisation: cdktf.stringToTerraform(struct!.organisation),
    phone: cdktf.stringToTerraform(struct!.phone),
    state: cdktf.stringToTerraform(struct!.state),
    street_addr: cdktf.stringToTerraform(struct!.streetAddr),
    type: cdktf.stringToTerraform(struct!.type),
    zip: cdktf.stringToTerraform(struct!.zip),
  }
}


export function domainBillingToHclTerraform(struct?: DomainBillingOutputReference | DomainBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.dataObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    family_name: {
      value: cdktf.stringToHclTerraform(struct!.familyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.mailObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organisation: {
      value: cdktf.stringToHclTerraform(struct!.organisation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
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
    street_addr: {
      value: cdktf.stringToHclTerraform(struct!.streetAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip: {
      value: cdktf.stringToHclTerraform(struct!.zip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainBillingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainBilling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._dataObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataObfuscated = this._dataObfuscated;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters;
    }
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._mailObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailObfuscated = this._mailObfuscated;
    }
    if (this._organisation !== undefined) {
      hasAnyValues = true;
      internalValueResult.organisation = this._organisation;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._streetAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddr = this._streetAddr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zip !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainBilling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._city = undefined;
      this._country = undefined;
      this._dataObfuscated = undefined;
      this._email = undefined;
      this._extraParameters = undefined;
      this._familyName = undefined;
      this._givenName = undefined;
      this._mailObfuscated = undefined;
      this._organisation = undefined;
      this._phone = undefined;
      this._state = undefined;
      this._streetAddr = undefined;
      this._type = undefined;
      this._zip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._city = value.city;
      this._country = value.country;
      this._dataObfuscated = value.dataObfuscated;
      this._email = value.email;
      this._extraParameters = value.extraParameters;
      this._familyName = value.familyName;
      this._givenName = value.givenName;
      this._mailObfuscated = value.mailObfuscated;
      this._organisation = value.organisation;
      this._phone = value.phone;
      this._state = value.state;
      this._streetAddr = value.streetAddr;
      this._type = value.type;
      this._zip = value.zip;
    }
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // data_obfuscated - computed: false, optional: true, required: false
  private _dataObfuscated?: boolean | cdktf.IResolvable; 
  public get dataObfuscated() {
    return this.getBooleanAttribute('data_obfuscated');
  }
  public set dataObfuscated(value: boolean | cdktf.IResolvable) {
    this._dataObfuscated = value;
  }
  public resetDataObfuscated() {
    this._dataObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObfuscatedInput() {
    return this._dataObfuscated;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_parameters - computed: false, optional: true, required: false
  private _extraParameters?: { [key: string]: string }; 
  public get extraParameters() {
    return this.getStringMapAttribute('extra_parameters');
  }
  public set extraParameters(value: { [key: string]: string }) {
    this._extraParameters = value;
  }
  public resetExtraParameters() {
    this._extraParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters;
  }

  // family_name - computed: false, optional: false, required: true
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // given_name - computed: false, optional: false, required: true
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // mail_obfuscated - computed: false, optional: true, required: false
  private _mailObfuscated?: boolean | cdktf.IResolvable; 
  public get mailObfuscated() {
    return this.getBooleanAttribute('mail_obfuscated');
  }
  public set mailObfuscated(value: boolean | cdktf.IResolvable) {
    this._mailObfuscated = value;
  }
  public resetMailObfuscated() {
    this._mailObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailObfuscatedInput() {
    return this._mailObfuscated;
  }

  // organisation - computed: false, optional: true, required: false
  private _organisation?: string; 
  public get organisation() {
    return this.getStringAttribute('organisation');
  }
  public set organisation(value: string) {
    this._organisation = value;
  }
  public resetOrganisation() {
    this._organisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
  }

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
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

  // street_addr - computed: false, optional: false, required: true
  private _streetAddr?: string; 
  public get streetAddr() {
    return this.getStringAttribute('street_addr');
  }
  public set streetAddr(value: string) {
    this._streetAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddrInput() {
    return this._streetAddr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zip - computed: false, optional: false, required: true
  private _zip?: string; 
  public get zip() {
    return this.getStringAttribute('zip');
  }
  public set zip(value: string) {
    this._zip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip;
  }
}
export interface DomainOwner {
  /**
  * City for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#city Domain#city}
  */
  readonly city: string;
  /**
  * The two letter country code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#country Domain#country}
  */
  readonly country: string;
  /**
  * Whether or not to obfuscate contact data in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#data_obfuscated Domain#data_obfuscated}
  */
  readonly dataObfuscated?: boolean | cdktf.IResolvable;
  /**
  * Contact email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#email Domain#email}
  */
  readonly email: string;
  /**
  * Extra parameters, needed for some jurisdictions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#extra_parameters Domain#extra_parameters}
  */
  readonly extraParameters?: { [key: string]: string };
  /**
  * Family name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#family_name Domain#family_name}
  */
  readonly familyName: string;
  /**
  * Given name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#given_name Domain#given_name}
  */
  readonly givenName: string;
  /**
  * Whether or not to obfuscate contact email in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#mail_obfuscated Domain#mail_obfuscated}
  */
  readonly mailObfuscated?: boolean | cdktf.IResolvable;
  /**
  * The legal name of the organisation. Required for types other than person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#organisation Domain#organisation}
  */
  readonly organisation?: string;
  /**
  * Phone number for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#phone Domain#phone}
  */
  readonly phone: string;
  /**
  * The state code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#state Domain#state}
  */
  readonly state?: string;
  /**
  * Street Address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#street_addr Domain#street_addr}
  */
  readonly streetAddr: string;
  /**
  * One of 'person', 'company', 'association', 'public body', or 'reseller'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
  /**
  * Postal Code/Zipcode of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#zip Domain#zip}
  */
  readonly zip: string;
}

export function domainOwnerToTerraform(struct?: DomainOwnerOutputReference | DomainOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    data_obfuscated: cdktf.booleanToTerraform(struct!.dataObfuscated),
    email: cdktf.stringToTerraform(struct!.email),
    extra_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParameters),
    family_name: cdktf.stringToTerraform(struct!.familyName),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    mail_obfuscated: cdktf.booleanToTerraform(struct!.mailObfuscated),
    organisation: cdktf.stringToTerraform(struct!.organisation),
    phone: cdktf.stringToTerraform(struct!.phone),
    state: cdktf.stringToTerraform(struct!.state),
    street_addr: cdktf.stringToTerraform(struct!.streetAddr),
    type: cdktf.stringToTerraform(struct!.type),
    zip: cdktf.stringToTerraform(struct!.zip),
  }
}


export function domainOwnerToHclTerraform(struct?: DomainOwnerOutputReference | DomainOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.dataObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    family_name: {
      value: cdktf.stringToHclTerraform(struct!.familyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.mailObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organisation: {
      value: cdktf.stringToHclTerraform(struct!.organisation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
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
    street_addr: {
      value: cdktf.stringToHclTerraform(struct!.streetAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip: {
      value: cdktf.stringToHclTerraform(struct!.zip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._dataObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataObfuscated = this._dataObfuscated;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters;
    }
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._mailObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailObfuscated = this._mailObfuscated;
    }
    if (this._organisation !== undefined) {
      hasAnyValues = true;
      internalValueResult.organisation = this._organisation;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._streetAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddr = this._streetAddr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zip !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._city = undefined;
      this._country = undefined;
      this._dataObfuscated = undefined;
      this._email = undefined;
      this._extraParameters = undefined;
      this._familyName = undefined;
      this._givenName = undefined;
      this._mailObfuscated = undefined;
      this._organisation = undefined;
      this._phone = undefined;
      this._state = undefined;
      this._streetAddr = undefined;
      this._type = undefined;
      this._zip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._city = value.city;
      this._country = value.country;
      this._dataObfuscated = value.dataObfuscated;
      this._email = value.email;
      this._extraParameters = value.extraParameters;
      this._familyName = value.familyName;
      this._givenName = value.givenName;
      this._mailObfuscated = value.mailObfuscated;
      this._organisation = value.organisation;
      this._phone = value.phone;
      this._state = value.state;
      this._streetAddr = value.streetAddr;
      this._type = value.type;
      this._zip = value.zip;
    }
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // data_obfuscated - computed: false, optional: true, required: false
  private _dataObfuscated?: boolean | cdktf.IResolvable; 
  public get dataObfuscated() {
    return this.getBooleanAttribute('data_obfuscated');
  }
  public set dataObfuscated(value: boolean | cdktf.IResolvable) {
    this._dataObfuscated = value;
  }
  public resetDataObfuscated() {
    this._dataObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObfuscatedInput() {
    return this._dataObfuscated;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_parameters - computed: false, optional: true, required: false
  private _extraParameters?: { [key: string]: string }; 
  public get extraParameters() {
    return this.getStringMapAttribute('extra_parameters');
  }
  public set extraParameters(value: { [key: string]: string }) {
    this._extraParameters = value;
  }
  public resetExtraParameters() {
    this._extraParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters;
  }

  // family_name - computed: false, optional: false, required: true
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // given_name - computed: false, optional: false, required: true
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // mail_obfuscated - computed: false, optional: true, required: false
  private _mailObfuscated?: boolean | cdktf.IResolvable; 
  public get mailObfuscated() {
    return this.getBooleanAttribute('mail_obfuscated');
  }
  public set mailObfuscated(value: boolean | cdktf.IResolvable) {
    this._mailObfuscated = value;
  }
  public resetMailObfuscated() {
    this._mailObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailObfuscatedInput() {
    return this._mailObfuscated;
  }

  // organisation - computed: false, optional: true, required: false
  private _organisation?: string; 
  public get organisation() {
    return this.getStringAttribute('organisation');
  }
  public set organisation(value: string) {
    this._organisation = value;
  }
  public resetOrganisation() {
    this._organisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
  }

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
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

  // street_addr - computed: false, optional: false, required: true
  private _streetAddr?: string; 
  public get streetAddr() {
    return this.getStringAttribute('street_addr');
  }
  public set streetAddr(value: string) {
    this._streetAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddrInput() {
    return this._streetAddr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zip - computed: false, optional: false, required: true
  private _zip?: string; 
  public get zip() {
    return this.getStringAttribute('zip');
  }
  public set zip(value: string) {
    this._zip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip;
  }
}
export interface DomainTech {
  /**
  * City for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#city Domain#city}
  */
  readonly city: string;
  /**
  * The two letter country code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#country Domain#country}
  */
  readonly country: string;
  /**
  * Whether or not to obfuscate contact data in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#data_obfuscated Domain#data_obfuscated}
  */
  readonly dataObfuscated?: boolean | cdktf.IResolvable;
  /**
  * Contact email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#email Domain#email}
  */
  readonly email: string;
  /**
  * Extra parameters, needed for some jurisdictions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#extra_parameters Domain#extra_parameters}
  */
  readonly extraParameters?: { [key: string]: string };
  /**
  * Family name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#family_name Domain#family_name}
  */
  readonly familyName: string;
  /**
  * Given name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#given_name Domain#given_name}
  */
  readonly givenName: string;
  /**
  * Whether or not to obfuscate contact email in WHOIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#mail_obfuscated Domain#mail_obfuscated}
  */
  readonly mailObfuscated?: boolean | cdktf.IResolvable;
  /**
  * The legal name of the organisation. Required for types other than person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#organisation Domain#organisation}
  */
  readonly organisation?: string;
  /**
  * Phone number for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#phone Domain#phone}
  */
  readonly phone: string;
  /**
  * The state code for the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#state Domain#state}
  */
  readonly state?: string;
  /**
  * Street Address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#street_addr Domain#street_addr}
  */
  readonly streetAddr: string;
  /**
  * One of 'person', 'company', 'association', 'public body', or 'reseller'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
  /**
  * Postal Code/Zipcode of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#zip Domain#zip}
  */
  readonly zip: string;
}

export function domainTechToTerraform(struct?: DomainTechOutputReference | DomainTech): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    data_obfuscated: cdktf.booleanToTerraform(struct!.dataObfuscated),
    email: cdktf.stringToTerraform(struct!.email),
    extra_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParameters),
    family_name: cdktf.stringToTerraform(struct!.familyName),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    mail_obfuscated: cdktf.booleanToTerraform(struct!.mailObfuscated),
    organisation: cdktf.stringToTerraform(struct!.organisation),
    phone: cdktf.stringToTerraform(struct!.phone),
    state: cdktf.stringToTerraform(struct!.state),
    street_addr: cdktf.stringToTerraform(struct!.streetAddr),
    type: cdktf.stringToTerraform(struct!.type),
    zip: cdktf.stringToTerraform(struct!.zip),
  }
}


export function domainTechToHclTerraform(struct?: DomainTechOutputReference | DomainTech): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.dataObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    family_name: {
      value: cdktf.stringToHclTerraform(struct!.familyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_obfuscated: {
      value: cdktf.booleanToHclTerraform(struct!.mailObfuscated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organisation: {
      value: cdktf.stringToHclTerraform(struct!.organisation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
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
    street_addr: {
      value: cdktf.stringToHclTerraform(struct!.streetAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip: {
      value: cdktf.stringToHclTerraform(struct!.zip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainTechOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainTech | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._dataObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataObfuscated = this._dataObfuscated;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters;
    }
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._mailObfuscated !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailObfuscated = this._mailObfuscated;
    }
    if (this._organisation !== undefined) {
      hasAnyValues = true;
      internalValueResult.organisation = this._organisation;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._streetAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddr = this._streetAddr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zip !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainTech | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._city = undefined;
      this._country = undefined;
      this._dataObfuscated = undefined;
      this._email = undefined;
      this._extraParameters = undefined;
      this._familyName = undefined;
      this._givenName = undefined;
      this._mailObfuscated = undefined;
      this._organisation = undefined;
      this._phone = undefined;
      this._state = undefined;
      this._streetAddr = undefined;
      this._type = undefined;
      this._zip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._city = value.city;
      this._country = value.country;
      this._dataObfuscated = value.dataObfuscated;
      this._email = value.email;
      this._extraParameters = value.extraParameters;
      this._familyName = value.familyName;
      this._givenName = value.givenName;
      this._mailObfuscated = value.mailObfuscated;
      this._organisation = value.organisation;
      this._phone = value.phone;
      this._state = value.state;
      this._streetAddr = value.streetAddr;
      this._type = value.type;
      this._zip = value.zip;
    }
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // data_obfuscated - computed: false, optional: true, required: false
  private _dataObfuscated?: boolean | cdktf.IResolvable; 
  public get dataObfuscated() {
    return this.getBooleanAttribute('data_obfuscated');
  }
  public set dataObfuscated(value: boolean | cdktf.IResolvable) {
    this._dataObfuscated = value;
  }
  public resetDataObfuscated() {
    this._dataObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObfuscatedInput() {
    return this._dataObfuscated;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_parameters - computed: false, optional: true, required: false
  private _extraParameters?: { [key: string]: string }; 
  public get extraParameters() {
    return this.getStringMapAttribute('extra_parameters');
  }
  public set extraParameters(value: { [key: string]: string }) {
    this._extraParameters = value;
  }
  public resetExtraParameters() {
    this._extraParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters;
  }

  // family_name - computed: false, optional: false, required: true
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // given_name - computed: false, optional: false, required: true
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // mail_obfuscated - computed: false, optional: true, required: false
  private _mailObfuscated?: boolean | cdktf.IResolvable; 
  public get mailObfuscated() {
    return this.getBooleanAttribute('mail_obfuscated');
  }
  public set mailObfuscated(value: boolean | cdktf.IResolvable) {
    this._mailObfuscated = value;
  }
  public resetMailObfuscated() {
    this._mailObfuscated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailObfuscatedInput() {
    return this._mailObfuscated;
  }

  // organisation - computed: false, optional: true, required: false
  private _organisation?: string; 
  public get organisation() {
    return this.getStringAttribute('organisation');
  }
  public set organisation(value: string) {
    this._organisation = value;
  }
  public resetOrganisation() {
    this._organisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
  }

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
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

  // street_addr - computed: false, optional: false, required: true
  private _streetAddr?: string; 
  public get streetAddr() {
    return this.getStringAttribute('street_addr');
  }
  public set streetAddr(value: string) {
    this._streetAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddrInput() {
    return this._streetAddr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zip - computed: false, optional: false, required: true
  private _zip?: string; 
  public get zip() {
    return this.getStringAttribute('zip');
  }
  public set zip(value: string) {
    this._zip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip;
  }
}
export interface DomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#default Domain#default}
  */
  readonly default?: string;
}

export function domainTimeoutsToTerraform(struct?: DomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function domainTimeoutsToHclTerraform(struct?: DomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain gandi_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gandi_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gandi_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/domain gandi_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'gandi_domain',
      terraformGeneratorMetadata: {
        providerName: 'gandi',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autorenew = config.autorenew;
    this._id = config.id;
    this._name = config.name;
    this._nameservers = config.nameservers;
    this._tags = config.tags;
    this._admin.internalValue = config.admin;
    this._billing.internalValue = config.billing;
    this._owner.internalValue = config.owner;
    this._tech.internalValue = config.tech;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autorenew - computed: false, optional: true, required: false
  private _autorenew?: boolean | cdktf.IResolvable; 
  public get autorenew() {
    return this.getBooleanAttribute('autorenew');
  }
  public set autorenew(value: boolean | cdktf.IResolvable) {
    this._autorenew = value;
  }
  public resetAutorenew() {
    this._autorenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorenewInput() {
    return this._autorenew;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new DomainAdminOutputReference(this, "admin");
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: DomainAdmin) {
    this._admin.internalValue = value;
  }
  public resetAdmin() {
    this._admin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // billing - computed: false, optional: true, required: false
  private _billing = new DomainBillingOutputReference(this, "billing");
  public get billing() {
    return this._billing;
  }
  public putBilling(value: DomainBilling) {
    this._billing.internalValue = value;
  }
  public resetBilling() {
    this._billing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInput() {
    return this._billing.internalValue;
  }

  // owner - computed: false, optional: false, required: true
  private _owner = new DomainOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DomainOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // tech - computed: false, optional: true, required: false
  private _tech = new DomainTechOutputReference(this, "tech");
  public get tech() {
    return this._tech;
  }
  public putTech(value: DomainTech) {
    this._tech.internalValue = value;
  }
  public resetTech() {
    this._tech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techInput() {
    return this._tech.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autorenew: cdktf.booleanToTerraform(this._autorenew),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      admin: domainAdminToTerraform(this._admin.internalValue),
      billing: domainBillingToTerraform(this._billing.internalValue),
      owner: domainOwnerToTerraform(this._owner.internalValue),
      tech: domainTechToTerraform(this._tech.internalValue),
      timeouts: domainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autorenew: {
        value: cdktf.booleanToHclTerraform(this._autorenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin: {
        value: domainAdminToHclTerraform(this._admin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DomainAdminList",
      },
      billing: {
        value: domainBillingToHclTerraform(this._billing.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DomainBillingList",
      },
      owner: {
        value: domainOwnerToHclTerraform(this._owner.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DomainOwnerList",
      },
      tech: {
        value: domainTechToHclTerraform(this._tech.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DomainTechList",
      },
      timeouts: {
        value: domainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
