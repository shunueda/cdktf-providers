// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CpsThirdPartyEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether acknowledge warnings before certificate verification. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#acknowledge_pre_verification_warnings CpsThirdPartyEnrollment#acknowledge_pre_verification_warnings}
  */
  readonly acknowledgePreVerificationWarnings?: boolean | cdktf.IResolvable;
  /**
  * Allow to duplicate common name. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#allow_duplicate_common_name CpsThirdPartyEnrollment#allow_duplicate_common_name}
  */
  readonly allowDuplicateCommonName?: boolean | cdktf.IResolvable;
  /**
  * List of warnings to be automatically approved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#auto_approve_warnings CpsThirdPartyEnrollment#auto_approve_warnings}
  */
  readonly autoApproveWarnings?: string[];
  /**
  * Certificate trust chain type. Default is 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#certificate_chain_type CpsThirdPartyEnrollment#certificate_chain_type}
  */
  readonly certificateChainType?: string;
  /**
  * When set to false, the certificate will be deployed to both staging and production networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#change_management CpsThirdPartyEnrollment#change_management}
  */
  readonly changeManagement?: boolean | cdktf.IResolvable;
  /**
  * Common name used for enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#common_name CpsThirdPartyEnrollment#common_name}
  */
  readonly commonName: string;
  /**
  * Contract ID for which enrollment is retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#contract_id CpsThirdPartyEnrollment#contract_id}
  */
  readonly contractId: string;
  /**
  * When true, SANs are excluded from the CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#exclude_sans CpsThirdPartyEnrollment#exclude_sans}
  */
  readonly excludeSans?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#id CpsThirdPartyEnrollment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of SANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#sans CpsThirdPartyEnrollment#sans}
  */
  readonly sans?: string[];
  /**
  * Type of TLS deployment network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#secure_network CpsThirdPartyEnrollment#secure_network}
  */
  readonly secureNetwork: string;
  /**
  * The SHA function. Changing this value may require running terraform destroy, terraform apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#signature_algorithm CpsThirdPartyEnrollment#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Whether Server Name Indication is used for enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#sni_only CpsThirdPartyEnrollment#sni_only}
  */
  readonly sniOnly: boolean | cdktf.IResolvable;
  /**
  * admin_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#admin_contact CpsThirdPartyEnrollment#admin_contact}
  */
  readonly adminContact: CpsThirdPartyEnrollmentAdminContact;
  /**
  * csr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#csr CpsThirdPartyEnrollment#csr}
  */
  readonly csr: CpsThirdPartyEnrollmentCsr;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#network_configuration CpsThirdPartyEnrollment#network_configuration}
  */
  readonly networkConfiguration: CpsThirdPartyEnrollmentNetworkConfiguration;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#organization CpsThirdPartyEnrollment#organization}
  */
  readonly organization: CpsThirdPartyEnrollmentOrganization;
  /**
  * tech_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#tech_contact CpsThirdPartyEnrollment#tech_contact}
  */
  readonly techContact: CpsThirdPartyEnrollmentTechContact;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#timeouts CpsThirdPartyEnrollment#timeouts}
  */
  readonly timeouts?: CpsThirdPartyEnrollmentTimeouts;
}
export interface CpsThirdPartyEnrollmentAdminContact {
  /**
  * The address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#address_line_one CpsThirdPartyEnrollment#address_line_one}
  */
  readonly addressLineOne?: string;
  /**
  * The address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#address_line_two CpsThirdPartyEnrollment#address_line_two}
  */
  readonly addressLineTwo?: string;
  /**
  * City of residence of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#city CpsThirdPartyEnrollment#city}
  */
  readonly city?: string;
  /**
  * Country code of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#country_code CpsThirdPartyEnrollment#country_code}
  */
  readonly countryCode?: string;
  /**
  * E-mail address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#email CpsThirdPartyEnrollment#email}
  */
  readonly email: string;
  /**
  * First name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#first_name CpsThirdPartyEnrollment#first_name}
  */
  readonly firstName: string;
  /**
  * Last name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#last_name CpsThirdPartyEnrollment#last_name}
  */
  readonly lastName: string;
  /**
  * Organization where contact is hired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#organization CpsThirdPartyEnrollment#organization}
  */
  readonly organization?: string;
  /**
  * Phone number of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#phone CpsThirdPartyEnrollment#phone}
  */
  readonly phone: string;
  /**
  * Postal code of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#postal_code CpsThirdPartyEnrollment#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The region of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#region CpsThirdPartyEnrollment#region}
  */
  readonly region?: string;
  /**
  * Title of the the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#title CpsThirdPartyEnrollment#title}
  */
  readonly title?: string;
}

export function cpsThirdPartyEnrollmentAdminContactToTerraform(struct?: CpsThirdPartyEnrollmentAdminContactOutputReference | CpsThirdPartyEnrollmentAdminContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_one: cdktf.stringToTerraform(struct!.addressLineOne),
    address_line_two: cdktf.stringToTerraform(struct!.addressLineTwo),
    city: cdktf.stringToTerraform(struct!.city),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization: cdktf.stringToTerraform(struct!.organization),
    phone: cdktf.stringToTerraform(struct!.phone),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    region: cdktf.stringToTerraform(struct!.region),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function cpsThirdPartyEnrollmentAdminContactToHclTerraform(struct?: CpsThirdPartyEnrollmentAdminContactOutputReference | CpsThirdPartyEnrollmentAdminContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_one: {
      value: cdktf.stringToHclTerraform(struct!.addressLineOne),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_two: {
      value: cdktf.stringToHclTerraform(struct!.addressLineTwo),
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
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
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
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsThirdPartyEnrollmentAdminContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentAdminContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLineOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLineOne = this._addressLineOne;
    }
    if (this._addressLineTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLineTwo = this._addressLineTwo;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentAdminContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLineOne = undefined;
      this._addressLineTwo = undefined;
      this._city = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organization = undefined;
      this._phone = undefined;
      this._postalCode = undefined;
      this._region = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLineOne = value.addressLineOne;
      this._addressLineTwo = value.addressLineTwo;
      this._city = value.city;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organization = value.organization;
      this._phone = value.phone;
      this._postalCode = value.postalCode;
      this._region = value.region;
      this._title = value.title;
    }
  }

  // address_line_one - computed: false, optional: true, required: false
  private _addressLineOne?: string; 
  public get addressLineOne() {
    return this.getStringAttribute('address_line_one');
  }
  public set addressLineOne(value: string) {
    this._addressLineOne = value;
  }
  public resetAddressLineOne() {
    this._addressLineOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineOneInput() {
    return this._addressLineOne;
  }

  // address_line_two - computed: false, optional: true, required: false
  private _addressLineTwo?: string; 
  public get addressLineTwo() {
    return this.getStringAttribute('address_line_two');
  }
  public set addressLineTwo(value: string) {
    this._addressLineTwo = value;
  }
  public resetAddressLineTwo() {
    this._addressLineTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineTwoInput() {
    return this._addressLineTwo;
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

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
}
export interface CpsThirdPartyEnrollmentCsr {
  /**
  * City where organization is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#city CpsThirdPartyEnrollment#city}
  */
  readonly city: string;
  /**
  * The code of the country where organization is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#country_code CpsThirdPartyEnrollment#country_code}
  */
  readonly countryCode: string;
  /**
  * Name of organization used in all legal documents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#organization CpsThirdPartyEnrollment#organization}
  */
  readonly organization: string;
  /**
  * Organizational unit of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#organizational_unit CpsThirdPartyEnrollment#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * For the Let's Encrypt Domain Validated (DV) SAN certificates, the preferred trust chain will be included by CPS with the leaf certificate in the TLS handshake. If the field does not have a value, whichever trust chain Akamai chooses will be used by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#preferred_trust_chain CpsThirdPartyEnrollment#preferred_trust_chain}
  */
  readonly preferredTrustChain?: string;
  /**
  * State or province of organization location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#state CpsThirdPartyEnrollment#state}
  */
  readonly state?: string;
}

export function cpsThirdPartyEnrollmentCsrToTerraform(struct?: CpsThirdPartyEnrollmentCsrOutputReference | CpsThirdPartyEnrollmentCsr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    preferred_trust_chain: cdktf.stringToTerraform(struct!.preferredTrustChain),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function cpsThirdPartyEnrollmentCsrToHclTerraform(struct?: CpsThirdPartyEnrollmentCsrOutputReference | CpsThirdPartyEnrollmentCsr): any {
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
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_trust_chain: {
      value: cdktf.stringToHclTerraform(struct!.preferredTrustChain),
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

export class CpsThirdPartyEnrollmentCsrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentCsr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._preferredTrustChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredTrustChain = this._preferredTrustChain;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentCsr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._city = undefined;
      this._countryCode = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._preferredTrustChain = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._city = value.city;
      this._countryCode = value.countryCode;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._preferredTrustChain = value.preferredTrustChain;
      this._state = value.state;
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

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // preferred_trust_chain - computed: false, optional: true, required: false
  private _preferredTrustChain?: string; 
  public get preferredTrustChain() {
    return this.getStringAttribute('preferred_trust_chain');
  }
  public set preferredTrustChain(value: string) {
    this._preferredTrustChain = value;
  }
  public resetPreferredTrustChain() {
    this._preferredTrustChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTrustChainInput() {
    return this._preferredTrustChain;
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
export interface CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication {
  /**
  * Enable OCSP stapling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#ocsp_enabled CpsThirdPartyEnrollment#ocsp_enabled}
  */
  readonly ocspEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable the server to send the certificate authority (CA) list to the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#send_ca_list_to_client CpsThirdPartyEnrollment#send_ca_list_to_client}
  */
  readonly sendCaListToClient?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the set of trust chains, created in the Trust Chain Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#set_id CpsThirdPartyEnrollment#set_id}
  */
  readonly setId?: string;
}

export function cpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationToTerraform(struct?: CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationOutputReference | CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocsp_enabled: cdktf.booleanToTerraform(struct!.ocspEnabled),
    send_ca_list_to_client: cdktf.booleanToTerraform(struct!.sendCaListToClient),
    set_id: cdktf.stringToTerraform(struct!.setId),
  }
}


export function cpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationToHclTerraform(struct?: CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationOutputReference | CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocsp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ocspEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_ca_list_to_client: {
      value: cdktf.booleanToHclTerraform(struct!.sendCaListToClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_id: {
      value: cdktf.stringToHclTerraform(struct!.setId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocspEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspEnabled = this._ocspEnabled;
    }
    if (this._sendCaListToClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCaListToClient = this._sendCaListToClient;
    }
    if (this._setId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setId = this._setId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocspEnabled = undefined;
      this._sendCaListToClient = undefined;
      this._setId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocspEnabled = value.ocspEnabled;
      this._sendCaListToClient = value.sendCaListToClient;
      this._setId = value.setId;
    }
  }

  // ocsp_enabled - computed: false, optional: true, required: false
  private _ocspEnabled?: boolean | cdktf.IResolvable; 
  public get ocspEnabled() {
    return this.getBooleanAttribute('ocsp_enabled');
  }
  public set ocspEnabled(value: boolean | cdktf.IResolvable) {
    this._ocspEnabled = value;
  }
  public resetOcspEnabled() {
    this._ocspEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspEnabledInput() {
    return this._ocspEnabled;
  }

  // send_ca_list_to_client - computed: false, optional: true, required: false
  private _sendCaListToClient?: boolean | cdktf.IResolvable; 
  public get sendCaListToClient() {
    return this.getBooleanAttribute('send_ca_list_to_client');
  }
  public set sendCaListToClient(value: boolean | cdktf.IResolvable) {
    this._sendCaListToClient = value;
  }
  public resetSendCaListToClient() {
    this._sendCaListToClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCaListToClientInput() {
    return this._sendCaListToClient;
  }

  // set_id - computed: false, optional: true, required: false
  private _setId?: string; 
  public get setId() {
    return this.getStringAttribute('set_id');
  }
  public set setId(value: string) {
    this._setId = value;
  }
  public resetSetId() {
    this._setId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
  }
}
export interface CpsThirdPartyEnrollmentNetworkConfiguration {
  /**
  * Enable CPS to direct traffic using all the SANs listed in the SANs parameter when enrollment is created. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#clone_dns_names CpsThirdPartyEnrollment#clone_dns_names}
  */
  readonly cloneDnsNames?: boolean | cdktf.IResolvable;
  /**
  * TLS versions which are disallowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#disallowed_tls_versions CpsThirdPartyEnrollment#disallowed_tls_versions}
  */
  readonly disallowedTlsVersions?: string[];
  /**
  * Geography type used for enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#geography CpsThirdPartyEnrollment#geography}
  */
  readonly geography: string;
  /**
  * Mandatory Ciphers which are included for enrollment. Default is 'ak-akamai-2020q1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#must_have_ciphers CpsThirdPartyEnrollment#must_have_ciphers}
  */
  readonly mustHaveCiphers?: string;
  /**
  * Enable OCSP stapling. Default is 'on'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#ocsp_stapling CpsThirdPartyEnrollment#ocsp_stapling}
  */
  readonly ocspStapling?: string;
  /**
  * Preferred Ciphers which are included for enrollment. Default is 'ak-akamai-2020q1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#preferred_ciphers CpsThirdPartyEnrollment#preferred_ciphers}
  */
  readonly preferredCiphers?: string;
  /**
  * Enable QUIC protocol. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#quic_enabled CpsThirdPartyEnrollment#quic_enabled}
  */
  readonly quicEnabled?: boolean | cdktf.IResolvable;
  /**
  * client_mutual_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#client_mutual_authentication CpsThirdPartyEnrollment#client_mutual_authentication}
  */
  readonly clientMutualAuthentication?: CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication;
}

export function cpsThirdPartyEnrollmentNetworkConfigurationToTerraform(struct?: CpsThirdPartyEnrollmentNetworkConfigurationOutputReference | CpsThirdPartyEnrollmentNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clone_dns_names: cdktf.booleanToTerraform(struct!.cloneDnsNames),
    disallowed_tls_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disallowedTlsVersions),
    geography: cdktf.stringToTerraform(struct!.geography),
    must_have_ciphers: cdktf.stringToTerraform(struct!.mustHaveCiphers),
    ocsp_stapling: cdktf.stringToTerraform(struct!.ocspStapling),
    preferred_ciphers: cdktf.stringToTerraform(struct!.preferredCiphers),
    quic_enabled: cdktf.booleanToTerraform(struct!.quicEnabled),
    client_mutual_authentication: cpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationToTerraform(struct!.clientMutualAuthentication),
  }
}


export function cpsThirdPartyEnrollmentNetworkConfigurationToHclTerraform(struct?: CpsThirdPartyEnrollmentNetworkConfigurationOutputReference | CpsThirdPartyEnrollmentNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clone_dns_names: {
      value: cdktf.booleanToHclTerraform(struct!.cloneDnsNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallowed_tls_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disallowedTlsVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    geography: {
      value: cdktf.stringToHclTerraform(struct!.geography),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    must_have_ciphers: {
      value: cdktf.stringToHclTerraform(struct!.mustHaveCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_stapling: {
      value: cdktf.stringToHclTerraform(struct!.ocspStapling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_ciphers: {
      value: cdktf.stringToHclTerraform(struct!.preferredCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.quicEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_mutual_authentication: {
      value: cpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationToHclTerraform(struct!.clientMutualAuthentication),
      isBlock: true,
      type: "set",
      storageClassType: "CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsThirdPartyEnrollmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneDnsNames = this._cloneDnsNames;
    }
    if (this._disallowedTlsVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedTlsVersions = this._disallowedTlsVersions;
    }
    if (this._geography !== undefined) {
      hasAnyValues = true;
      internalValueResult.geography = this._geography;
    }
    if (this._mustHaveCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.mustHaveCiphers = this._mustHaveCiphers;
    }
    if (this._ocspStapling !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStapling = this._ocspStapling;
    }
    if (this._preferredCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredCiphers = this._preferredCiphers;
    }
    if (this._quicEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicEnabled = this._quicEnabled;
    }
    if (this._clientMutualAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMutualAuthentication = this._clientMutualAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloneDnsNames = undefined;
      this._disallowedTlsVersions = undefined;
      this._geography = undefined;
      this._mustHaveCiphers = undefined;
      this._ocspStapling = undefined;
      this._preferredCiphers = undefined;
      this._quicEnabled = undefined;
      this._clientMutualAuthentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloneDnsNames = value.cloneDnsNames;
      this._disallowedTlsVersions = value.disallowedTlsVersions;
      this._geography = value.geography;
      this._mustHaveCiphers = value.mustHaveCiphers;
      this._ocspStapling = value.ocspStapling;
      this._preferredCiphers = value.preferredCiphers;
      this._quicEnabled = value.quicEnabled;
      this._clientMutualAuthentication.internalValue = value.clientMutualAuthentication;
    }
  }

  // clone_dns_names - computed: false, optional: true, required: false
  private _cloneDnsNames?: boolean | cdktf.IResolvable; 
  public get cloneDnsNames() {
    return this.getBooleanAttribute('clone_dns_names');
  }
  public set cloneDnsNames(value: boolean | cdktf.IResolvable) {
    this._cloneDnsNames = value;
  }
  public resetCloneDnsNames() {
    this._cloneDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneDnsNamesInput() {
    return this._cloneDnsNames;
  }

  // disallowed_tls_versions - computed: false, optional: true, required: false
  private _disallowedTlsVersions?: string[]; 
  public get disallowedTlsVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_tls_versions'));
  }
  public set disallowedTlsVersions(value: string[]) {
    this._disallowedTlsVersions = value;
  }
  public resetDisallowedTlsVersions() {
    this._disallowedTlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedTlsVersionsInput() {
    return this._disallowedTlsVersions;
  }

  // geography - computed: false, optional: false, required: true
  private _geography?: string; 
  public get geography() {
    return this.getStringAttribute('geography');
  }
  public set geography(value: string) {
    this._geography = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geographyInput() {
    return this._geography;
  }

  // must_have_ciphers - computed: false, optional: true, required: false
  private _mustHaveCiphers?: string; 
  public get mustHaveCiphers() {
    return this.getStringAttribute('must_have_ciphers');
  }
  public set mustHaveCiphers(value: string) {
    this._mustHaveCiphers = value;
  }
  public resetMustHaveCiphers() {
    this._mustHaveCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustHaveCiphersInput() {
    return this._mustHaveCiphers;
  }

  // ocsp_stapling - computed: false, optional: true, required: false
  private _ocspStapling?: string; 
  public get ocspStapling() {
    return this.getStringAttribute('ocsp_stapling');
  }
  public set ocspStapling(value: string) {
    this._ocspStapling = value;
  }
  public resetOcspStapling() {
    this._ocspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling;
  }

  // preferred_ciphers - computed: false, optional: true, required: false
  private _preferredCiphers?: string; 
  public get preferredCiphers() {
    return this.getStringAttribute('preferred_ciphers');
  }
  public set preferredCiphers(value: string) {
    this._preferredCiphers = value;
  }
  public resetPreferredCiphers() {
    this._preferredCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCiphersInput() {
    return this._preferredCiphers;
  }

  // quic_enabled - computed: false, optional: true, required: false
  private _quicEnabled?: boolean | cdktf.IResolvable; 
  public get quicEnabled() {
    return this.getBooleanAttribute('quic_enabled');
  }
  public set quicEnabled(value: boolean | cdktf.IResolvable) {
    this._quicEnabled = value;
  }
  public resetQuicEnabled() {
    this._quicEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicEnabledInput() {
    return this._quicEnabled;
  }

  // client_mutual_authentication - computed: false, optional: true, required: false
  private _clientMutualAuthentication = new CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthenticationOutputReference(this, "client_mutual_authentication");
  public get clientMutualAuthentication() {
    return this._clientMutualAuthentication;
  }
  public putClientMutualAuthentication(value: CpsThirdPartyEnrollmentNetworkConfigurationClientMutualAuthentication) {
    this._clientMutualAuthentication.internalValue = value;
  }
  public resetClientMutualAuthentication() {
    this._clientMutualAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMutualAuthenticationInput() {
    return this._clientMutualAuthentication.internalValue;
  }
}
export interface CpsThirdPartyEnrollmentOrganization {
  /**
  * The address of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#address_line_one CpsThirdPartyEnrollment#address_line_one}
  */
  readonly addressLineOne: string;
  /**
  * The address of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#address_line_two CpsThirdPartyEnrollment#address_line_two}
  */
  readonly addressLineTwo?: string;
  /**
  * City of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#city CpsThirdPartyEnrollment#city}
  */
  readonly city: string;
  /**
  * Country code of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#country_code CpsThirdPartyEnrollment#country_code}
  */
  readonly countryCode: string;
  /**
  * Name of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#name CpsThirdPartyEnrollment#name}
  */
  readonly name: string;
  /**
  * Phone number of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#phone CpsThirdPartyEnrollment#phone}
  */
  readonly phone: string;
  /**
  * Postal code of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#postal_code CpsThirdPartyEnrollment#postal_code}
  */
  readonly postalCode: string;
  /**
  * The region of organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#region CpsThirdPartyEnrollment#region}
  */
  readonly region: string;
}

export function cpsThirdPartyEnrollmentOrganizationToTerraform(struct?: CpsThirdPartyEnrollmentOrganizationOutputReference | CpsThirdPartyEnrollmentOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_one: cdktf.stringToTerraform(struct!.addressLineOne),
    address_line_two: cdktf.stringToTerraform(struct!.addressLineTwo),
    city: cdktf.stringToTerraform(struct!.city),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function cpsThirdPartyEnrollmentOrganizationToHclTerraform(struct?: CpsThirdPartyEnrollmentOrganizationOutputReference | CpsThirdPartyEnrollmentOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_one: {
      value: cdktf.stringToHclTerraform(struct!.addressLineOne),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_two: {
      value: cdktf.stringToHclTerraform(struct!.addressLineTwo),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsThirdPartyEnrollmentOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLineOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLineOne = this._addressLineOne;
    }
    if (this._addressLineTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLineTwo = this._addressLineTwo;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLineOne = undefined;
      this._addressLineTwo = undefined;
      this._city = undefined;
      this._countryCode = undefined;
      this._name = undefined;
      this._phone = undefined;
      this._postalCode = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLineOne = value.addressLineOne;
      this._addressLineTwo = value.addressLineTwo;
      this._city = value.city;
      this._countryCode = value.countryCode;
      this._name = value.name;
      this._phone = value.phone;
      this._postalCode = value.postalCode;
      this._region = value.region;
    }
  }

  // address_line_one - computed: false, optional: false, required: true
  private _addressLineOne?: string; 
  public get addressLineOne() {
    return this.getStringAttribute('address_line_one');
  }
  public set addressLineOne(value: string) {
    this._addressLineOne = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineOneInput() {
    return this._addressLineOne;
  }

  // address_line_two - computed: false, optional: true, required: false
  private _addressLineTwo?: string; 
  public get addressLineTwo() {
    return this.getStringAttribute('address_line_two');
  }
  public set addressLineTwo(value: string) {
    this._addressLineTwo = value;
  }
  public resetAddressLineTwo() {
    this._addressLineTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineTwoInput() {
    return this._addressLineTwo;
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

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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

  // postal_code - computed: false, optional: false, required: true
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface CpsThirdPartyEnrollmentTechContact {
  /**
  * The address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#address_line_one CpsThirdPartyEnrollment#address_line_one}
  */
  readonly addressLineOne?: string;
  /**
  * The address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#address_line_two CpsThirdPartyEnrollment#address_line_two}
  */
  readonly addressLineTwo?: string;
  /**
  * City of residence of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#city CpsThirdPartyEnrollment#city}
  */
  readonly city?: string;
  /**
  * Country code of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#country_code CpsThirdPartyEnrollment#country_code}
  */
  readonly countryCode?: string;
  /**
  * E-mail address of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#email CpsThirdPartyEnrollment#email}
  */
  readonly email: string;
  /**
  * First name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#first_name CpsThirdPartyEnrollment#first_name}
  */
  readonly firstName: string;
  /**
  * Last name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#last_name CpsThirdPartyEnrollment#last_name}
  */
  readonly lastName: string;
  /**
  * Organization where contact is hired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#organization CpsThirdPartyEnrollment#organization}
  */
  readonly organization?: string;
  /**
  * Phone number of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#phone CpsThirdPartyEnrollment#phone}
  */
  readonly phone: string;
  /**
  * Postal code of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#postal_code CpsThirdPartyEnrollment#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The region of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#region CpsThirdPartyEnrollment#region}
  */
  readonly region?: string;
  /**
  * Title of the the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#title CpsThirdPartyEnrollment#title}
  */
  readonly title?: string;
}

export function cpsThirdPartyEnrollmentTechContactToTerraform(struct?: CpsThirdPartyEnrollmentTechContactOutputReference | CpsThirdPartyEnrollmentTechContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_one: cdktf.stringToTerraform(struct!.addressLineOne),
    address_line_two: cdktf.stringToTerraform(struct!.addressLineTwo),
    city: cdktf.stringToTerraform(struct!.city),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization: cdktf.stringToTerraform(struct!.organization),
    phone: cdktf.stringToTerraform(struct!.phone),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    region: cdktf.stringToTerraform(struct!.region),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function cpsThirdPartyEnrollmentTechContactToHclTerraform(struct?: CpsThirdPartyEnrollmentTechContactOutputReference | CpsThirdPartyEnrollmentTechContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_one: {
      value: cdktf.stringToHclTerraform(struct!.addressLineOne),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_two: {
      value: cdktf.stringToHclTerraform(struct!.addressLineTwo),
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
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
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
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsThirdPartyEnrollmentTechContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentTechContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLineOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLineOne = this._addressLineOne;
    }
    if (this._addressLineTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLineTwo = this._addressLineTwo;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentTechContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLineOne = undefined;
      this._addressLineTwo = undefined;
      this._city = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organization = undefined;
      this._phone = undefined;
      this._postalCode = undefined;
      this._region = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLineOne = value.addressLineOne;
      this._addressLineTwo = value.addressLineTwo;
      this._city = value.city;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organization = value.organization;
      this._phone = value.phone;
      this._postalCode = value.postalCode;
      this._region = value.region;
      this._title = value.title;
    }
  }

  // address_line_one - computed: false, optional: true, required: false
  private _addressLineOne?: string; 
  public get addressLineOne() {
    return this.getStringAttribute('address_line_one');
  }
  public set addressLineOne(value: string) {
    this._addressLineOne = value;
  }
  public resetAddressLineOne() {
    this._addressLineOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineOneInput() {
    return this._addressLineOne;
  }

  // address_line_two - computed: false, optional: true, required: false
  private _addressLineTwo?: string; 
  public get addressLineTwo() {
    return this.getStringAttribute('address_line_two');
  }
  public set addressLineTwo(value: string) {
    this._addressLineTwo = value;
  }
  public resetAddressLineTwo() {
    this._addressLineTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineTwoInput() {
    return this._addressLineTwo;
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

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
}
export interface CpsThirdPartyEnrollmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#default CpsThirdPartyEnrollment#default}
  */
  readonly default?: string;
}

export function cpsThirdPartyEnrollmentTimeoutsToTerraform(struct?: CpsThirdPartyEnrollmentTimeoutsOutputReference | CpsThirdPartyEnrollmentTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function cpsThirdPartyEnrollmentTimeoutsToHclTerraform(struct?: CpsThirdPartyEnrollmentTimeoutsOutputReference | CpsThirdPartyEnrollmentTimeouts): any {
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

export class CpsThirdPartyEnrollmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsThirdPartyEnrollmentTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsThirdPartyEnrollmentTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment akamai_cps_third_party_enrollment}
*/
export class CpsThirdPartyEnrollment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cps_third_party_enrollment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CpsThirdPartyEnrollment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CpsThirdPartyEnrollment to import
  * @param importFromId The id of the existing CpsThirdPartyEnrollment that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CpsThirdPartyEnrollment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cps_third_party_enrollment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_third_party_enrollment akamai_cps_third_party_enrollment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CpsThirdPartyEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: CpsThirdPartyEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cps_third_party_enrollment',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acknowledgePreVerificationWarnings = config.acknowledgePreVerificationWarnings;
    this._allowDuplicateCommonName = config.allowDuplicateCommonName;
    this._autoApproveWarnings = config.autoApproveWarnings;
    this._certificateChainType = config.certificateChainType;
    this._changeManagement = config.changeManagement;
    this._commonName = config.commonName;
    this._contractId = config.contractId;
    this._excludeSans = config.excludeSans;
    this._id = config.id;
    this._sans = config.sans;
    this._secureNetwork = config.secureNetwork;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._sniOnly = config.sniOnly;
    this._adminContact.internalValue = config.adminContact;
    this._csr.internalValue = config.csr;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._organization.internalValue = config.organization;
    this._techContact.internalValue = config.techContact;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledge_pre_verification_warnings - computed: false, optional: true, required: false
  private _acknowledgePreVerificationWarnings?: boolean | cdktf.IResolvable; 
  public get acknowledgePreVerificationWarnings() {
    return this.getBooleanAttribute('acknowledge_pre_verification_warnings');
  }
  public set acknowledgePreVerificationWarnings(value: boolean | cdktf.IResolvable) {
    this._acknowledgePreVerificationWarnings = value;
  }
  public resetAcknowledgePreVerificationWarnings() {
    this._acknowledgePreVerificationWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgePreVerificationWarningsInput() {
    return this._acknowledgePreVerificationWarnings;
  }

  // allow_duplicate_common_name - computed: false, optional: true, required: false
  private _allowDuplicateCommonName?: boolean | cdktf.IResolvable; 
  public get allowDuplicateCommonName() {
    return this.getBooleanAttribute('allow_duplicate_common_name');
  }
  public set allowDuplicateCommonName(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateCommonName = value;
  }
  public resetAllowDuplicateCommonName() {
    this._allowDuplicateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateCommonNameInput() {
    return this._allowDuplicateCommonName;
  }

  // auto_approve_warnings - computed: false, optional: true, required: false
  private _autoApproveWarnings?: string[]; 
  public get autoApproveWarnings() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_approve_warnings'));
  }
  public set autoApproveWarnings(value: string[]) {
    this._autoApproveWarnings = value;
  }
  public resetAutoApproveWarnings() {
    this._autoApproveWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveWarningsInput() {
    return this._autoApproveWarnings;
  }

  // certificate_chain_type - computed: false, optional: true, required: false
  private _certificateChainType?: string; 
  public get certificateChainType() {
    return this.getStringAttribute('certificate_chain_type');
  }
  public set certificateChainType(value: string) {
    this._certificateChainType = value;
  }
  public resetCertificateChainType() {
    this._certificateChainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainTypeInput() {
    return this._certificateChainType;
  }

  // change_management - computed: false, optional: true, required: false
  private _changeManagement?: boolean | cdktf.IResolvable; 
  public get changeManagement() {
    return this.getBooleanAttribute('change_management');
  }
  public set changeManagement(value: boolean | cdktf.IResolvable) {
    this._changeManagement = value;
  }
  public resetChangeManagement() {
    this._changeManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeManagementInput() {
    return this._changeManagement;
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // exclude_sans - computed: false, optional: true, required: false
  private _excludeSans?: boolean | cdktf.IResolvable; 
  public get excludeSans() {
    return this.getBooleanAttribute('exclude_sans');
  }
  public set excludeSans(value: boolean | cdktf.IResolvable) {
    this._excludeSans = value;
  }
  public resetExcludeSans() {
    this._excludeSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSansInput() {
    return this._excludeSans;
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

  // sans - computed: false, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return cdktf.Fn.tolist(this.getListAttribute('sans'));
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // secure_network - computed: false, optional: false, required: true
  private _secureNetwork?: string; 
  public get secureNetwork() {
    return this.getStringAttribute('secure_network');
  }
  public set secureNetwork(value: string) {
    this._secureNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secureNetworkInput() {
    return this._secureNetwork;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // sni_only - computed: false, optional: false, required: true
  private _sniOnly?: boolean | cdktf.IResolvable; 
  public get sniOnly() {
    return this.getBooleanAttribute('sni_only');
  }
  public set sniOnly(value: boolean | cdktf.IResolvable) {
    this._sniOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniOnlyInput() {
    return this._sniOnly;
  }

  // admin_contact - computed: false, optional: false, required: true
  private _adminContact = new CpsThirdPartyEnrollmentAdminContactOutputReference(this, "admin_contact");
  public get adminContact() {
    return this._adminContact;
  }
  public putAdminContact(value: CpsThirdPartyEnrollmentAdminContact) {
    this._adminContact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminContactInput() {
    return this._adminContact.internalValue;
  }

  // csr - computed: false, optional: false, required: true
  private _csr = new CpsThirdPartyEnrollmentCsrOutputReference(this, "csr");
  public get csr() {
    return this._csr;
  }
  public putCsr(value: CpsThirdPartyEnrollmentCsr) {
    this._csr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new CpsThirdPartyEnrollmentNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: CpsThirdPartyEnrollmentNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // organization - computed: false, optional: false, required: true
  private _organization = new CpsThirdPartyEnrollmentOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: CpsThirdPartyEnrollmentOrganization) {
    this._organization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // tech_contact - computed: false, optional: false, required: true
  private _techContact = new CpsThirdPartyEnrollmentTechContactOutputReference(this, "tech_contact");
  public get techContact() {
    return this._techContact;
  }
  public putTechContact(value: CpsThirdPartyEnrollmentTechContact) {
    this._techContact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get techContactInput() {
    return this._techContact.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CpsThirdPartyEnrollmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CpsThirdPartyEnrollmentTimeouts) {
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
      acknowledge_pre_verification_warnings: cdktf.booleanToTerraform(this._acknowledgePreVerificationWarnings),
      allow_duplicate_common_name: cdktf.booleanToTerraform(this._allowDuplicateCommonName),
      auto_approve_warnings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoApproveWarnings),
      certificate_chain_type: cdktf.stringToTerraform(this._certificateChainType),
      change_management: cdktf.booleanToTerraform(this._changeManagement),
      common_name: cdktf.stringToTerraform(this._commonName),
      contract_id: cdktf.stringToTerraform(this._contractId),
      exclude_sans: cdktf.booleanToTerraform(this._excludeSans),
      id: cdktf.stringToTerraform(this._id),
      sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sans),
      secure_network: cdktf.stringToTerraform(this._secureNetwork),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      sni_only: cdktf.booleanToTerraform(this._sniOnly),
      admin_contact: cpsThirdPartyEnrollmentAdminContactToTerraform(this._adminContact.internalValue),
      csr: cpsThirdPartyEnrollmentCsrToTerraform(this._csr.internalValue),
      network_configuration: cpsThirdPartyEnrollmentNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      organization: cpsThirdPartyEnrollmentOrganizationToTerraform(this._organization.internalValue),
      tech_contact: cpsThirdPartyEnrollmentTechContactToTerraform(this._techContact.internalValue),
      timeouts: cpsThirdPartyEnrollmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acknowledge_pre_verification_warnings: {
        value: cdktf.booleanToHclTerraform(this._acknowledgePreVerificationWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_duplicate_common_name: {
        value: cdktf.booleanToHclTerraform(this._allowDuplicateCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_approve_warnings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoApproveWarnings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_chain_type: {
        value: cdktf.stringToHclTerraform(this._certificateChainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_management: {
        value: cdktf.booleanToHclTerraform(this._changeManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_sans: {
        value: cdktf.booleanToHclTerraform(this._excludeSans),
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
      sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_network: {
        value: cdktf.stringToHclTerraform(this._secureNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_only: {
        value: cdktf.booleanToHclTerraform(this._sniOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_contact: {
        value: cpsThirdPartyEnrollmentAdminContactToHclTerraform(this._adminContact.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CpsThirdPartyEnrollmentAdminContactList",
      },
      csr: {
        value: cpsThirdPartyEnrollmentCsrToHclTerraform(this._csr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CpsThirdPartyEnrollmentCsrList",
      },
      network_configuration: {
        value: cpsThirdPartyEnrollmentNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CpsThirdPartyEnrollmentNetworkConfigurationList",
      },
      organization: {
        value: cpsThirdPartyEnrollmentOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CpsThirdPartyEnrollmentOrganizationList",
      },
      tech_contact: {
        value: cpsThirdPartyEnrollmentTechContactToHclTerraform(this._techContact.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CpsThirdPartyEnrollmentTechContactList",
      },
      timeouts: {
        value: cpsThirdPartyEnrollmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CpsThirdPartyEnrollmentTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
