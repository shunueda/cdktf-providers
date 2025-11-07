// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessUnitDivisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the business unit can inherit Approval Rules from a parent. Defaults to `ExplicitAndFromParent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#approval_rule_mode BusinessUnitDivision#approval_rule_mode}
  */
  readonly approvalRuleMode?: string;
  /**
  * Determines whether the business unit can inherit Associates from a parent. Defaults to `ExplicitAndFromParent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#associate_mode BusinessUnitDivision#associate_mode}
  */
  readonly associateMode?: string;
  /**
  * List of the billing addresses used by the division.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#billing_address_keys BusinessUnitDivision#billing_address_keys}
  */
  readonly billingAddressKeys?: string[];
  /**
  * The email address of the division.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#contact_email BusinessUnitDivision#contact_email}
  */
  readonly contactEmail?: string;
  /**
  * Key of the default billing Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#default_billing_address_key BusinessUnitDivision#default_billing_address_key}
  */
  readonly defaultBillingAddressKey?: string;
  /**
  * Key of the default shipping Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#default_shipping_address_key BusinessUnitDivision#default_shipping_address_key}
  */
  readonly defaultShippingAddressKey?: string;
  /**
  * User-defined unique key for the division. Must be unique within the project. Updating this value is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#key BusinessUnitDivision#key}
  */
  readonly key: string;
  /**
  * The name of the division.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#name BusinessUnitDivision#name}
  */
  readonly name: string;
  /**
  * List of the shipping addresses used by the division.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#shipping_address_keys BusinessUnitDivision#shipping_address_keys}
  */
  readonly shippingAddressKeys?: string[];
  /**
  * Indicates whether the business unit can be edited and used in [Orders](https://docs.commercetools.com/api/projects/orders). Defaults to `Active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#status BusinessUnitDivision#status}
  */
  readonly status?: string;
  /**
  * Defines whether the Stores of the business unit are set directly on the business unit or are inherited from a parent. Defaults to `FromParent`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#store_mode BusinessUnitDivision#store_mode}
  */
  readonly storeMode?: string;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#address BusinessUnitDivision#address}
  */
  readonly address?: BusinessUnitDivisionAddress[] | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#custom BusinessUnitDivision#custom}
  */
  readonly custom?: BusinessUnitDivisionCustom;
  /**
  * parent_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#parent_unit BusinessUnitDivision#parent_unit}
  */
  readonly parentUnit?: BusinessUnitDivisionParentUnit;
  /**
  * store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#store BusinessUnitDivision#store}
  */
  readonly store?: BusinessUnitDivisionStore[] | cdktf.IResolvable;
}
export interface BusinessUnitDivisionAddress {
  /**
  * Further information on the Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#additional_address_info BusinessUnitDivision#additional_address_info}
  */
  readonly additionalAddressInfo?: string;
  /**
  * Further information on the street address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#additional_street_info BusinessUnitDivision#additional_street_info}
  */
  readonly additionalStreetInfo?: string;
  /**
  * Name or number of the apartment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#apartment BusinessUnitDivision#apartment}
  */
  readonly apartment?: string;
  /**
  * Name or number of the building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#building BusinessUnitDivision#building}
  */
  readonly building?: string;
  /**
  * Name of the city
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#city BusinessUnitDivision#city}
  */
  readonly city?: string;
  /**
  * Name of the company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#company BusinessUnitDivision#company}
  */
  readonly company?: string;
  /**
  * Name of the country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#country BusinessUnitDivision#country}
  */
  readonly country: string;
  /**
  * Name of the department
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#department BusinessUnitDivision#department}
  */
  readonly department?: string;
  /**
  * Email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#email BusinessUnitDivision#email}
  */
  readonly email?: string;
  /**
  * ID for the contact used in an external system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#external_id BusinessUnitDivision#external_id}
  */
  readonly externalId?: string;
  /**
  * Fax number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#fax BusinessUnitDivision#fax}
  */
  readonly fax?: string;
  /**
  * First name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#first_name BusinessUnitDivision#first_name}
  */
  readonly firstName?: string;
  /**
  * User-defined identifier of the Address that must be unique when multiple addresses are referenced in BusinessUnits, Customers, and itemShippingAddresses (LineItem-specific addresses) of a Cart, Order, QuoteRequest, or Quote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#key BusinessUnitDivision#key}
  */
  readonly key: string;
  /**
  * Last name of the contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#last_name BusinessUnitDivision#last_name}
  */
  readonly lastName?: string;
  /**
  * Mobile phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#mobile BusinessUnitDivision#mobile}
  */
  readonly mobile?: string;
  /**
  * Phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#phone BusinessUnitDivision#phone}
  */
  readonly phone?: string;
  /**
  * Post office box number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#po_box BusinessUnitDivision#po_box}
  */
  readonly poBox?: string;
  /**
  * Postal code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#postal_code BusinessUnitDivision#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Name of the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#region BusinessUnitDivision#region}
  */
  readonly region?: string;
  /**
  * Salutation of the contact, for example Ms., Mr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#salutation BusinessUnitDivision#salutation}
  */
  readonly salutation?: string;
  /**
  * Name of the state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#state BusinessUnitDivision#state}
  */
  readonly state?: string;
  /**
  * Name of the street
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#street_name BusinessUnitDivision#street_name}
  */
  readonly streetName?: string;
  /**
  * Street number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#street_number BusinessUnitDivision#street_number}
  */
  readonly streetNumber?: string;
  /**
  * Title of the contact, for example Dr., Prof.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#title BusinessUnitDivision#title}
  */
  readonly title?: string;
}

export function businessUnitDivisionAddressToTerraform(struct?: BusinessUnitDivisionAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_address_info: cdktf.stringToTerraform(struct!.additionalAddressInfo),
    additional_street_info: cdktf.stringToTerraform(struct!.additionalStreetInfo),
    apartment: cdktf.stringToTerraform(struct!.apartment),
    building: cdktf.stringToTerraform(struct!.building),
    city: cdktf.stringToTerraform(struct!.city),
    company: cdktf.stringToTerraform(struct!.company),
    country: cdktf.stringToTerraform(struct!.country),
    department: cdktf.stringToTerraform(struct!.department),
    email: cdktf.stringToTerraform(struct!.email),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    key: cdktf.stringToTerraform(struct!.key),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    mobile: cdktf.stringToTerraform(struct!.mobile),
    phone: cdktf.stringToTerraform(struct!.phone),
    po_box: cdktf.stringToTerraform(struct!.poBox),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    region: cdktf.stringToTerraform(struct!.region),
    salutation: cdktf.stringToTerraform(struct!.salutation),
    state: cdktf.stringToTerraform(struct!.state),
    street_name: cdktf.stringToTerraform(struct!.streetName),
    street_number: cdktf.stringToTerraform(struct!.streetNumber),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function businessUnitDivisionAddressToHclTerraform(struct?: BusinessUnitDivisionAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_address_info: {
      value: cdktf.stringToHclTerraform(struct!.additionalAddressInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_street_info: {
      value: cdktf.stringToHclTerraform(struct!.additionalStreetInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apartment: {
      value: cdktf.stringToHclTerraform(struct!.apartment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    building: {
      value: cdktf.stringToHclTerraform(struct!.building),
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
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
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
    department: {
      value: cdktf.stringToHclTerraform(struct!.department),
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
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax: {
      value: cdktf.stringToHclTerraform(struct!.fax),
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    mobile: {
      value: cdktf.stringToHclTerraform(struct!.mobile),
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
    po_box: {
      value: cdktf.stringToHclTerraform(struct!.poBox),
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
    salutation: {
      value: cdktf.stringToHclTerraform(struct!.salutation),
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
    street_name: {
      value: cdktf.stringToHclTerraform(struct!.streetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_number: {
      value: cdktf.stringToHclTerraform(struct!.streetNumber),
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

export class BusinessUnitDivisionAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessUnitDivisionAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAddressInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAddressInfo = this._additionalAddressInfo;
    }
    if (this._additionalStreetInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStreetInfo = this._additionalStreetInfo;
    }
    if (this._apartment !== undefined) {
      hasAnyValues = true;
      internalValueResult.apartment = this._apartment;
    }
    if (this._building !== undefined) {
      hasAnyValues = true;
      internalValueResult.building = this._building;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._department !== undefined) {
      hasAnyValues = true;
      internalValueResult.department = this._department;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._mobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._poBox !== undefined) {
      hasAnyValues = true;
      internalValueResult.poBox = this._poBox;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._salutation !== undefined) {
      hasAnyValues = true;
      internalValueResult.salutation = this._salutation;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._streetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetName = this._streetName;
    }
    if (this._streetNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetNumber = this._streetNumber;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessUnitDivisionAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAddressInfo = undefined;
      this._additionalStreetInfo = undefined;
      this._apartment = undefined;
      this._building = undefined;
      this._city = undefined;
      this._company = undefined;
      this._country = undefined;
      this._department = undefined;
      this._email = undefined;
      this._externalId = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._key = undefined;
      this._lastName = undefined;
      this._mobile = undefined;
      this._phone = undefined;
      this._poBox = undefined;
      this._postalCode = undefined;
      this._region = undefined;
      this._salutation = undefined;
      this._state = undefined;
      this._streetName = undefined;
      this._streetNumber = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAddressInfo = value.additionalAddressInfo;
      this._additionalStreetInfo = value.additionalStreetInfo;
      this._apartment = value.apartment;
      this._building = value.building;
      this._city = value.city;
      this._company = value.company;
      this._country = value.country;
      this._department = value.department;
      this._email = value.email;
      this._externalId = value.externalId;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._key = value.key;
      this._lastName = value.lastName;
      this._mobile = value.mobile;
      this._phone = value.phone;
      this._poBox = value.poBox;
      this._postalCode = value.postalCode;
      this._region = value.region;
      this._salutation = value.salutation;
      this._state = value.state;
      this._streetName = value.streetName;
      this._streetNumber = value.streetNumber;
      this._title = value.title;
    }
  }

  // additional_address_info - computed: false, optional: true, required: false
  private _additionalAddressInfo?: string; 
  public get additionalAddressInfo() {
    return this.getStringAttribute('additional_address_info');
  }
  public set additionalAddressInfo(value: string) {
    this._additionalAddressInfo = value;
  }
  public resetAdditionalAddressInfo() {
    this._additionalAddressInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAddressInfoInput() {
    return this._additionalAddressInfo;
  }

  // additional_street_info - computed: false, optional: true, required: false
  private _additionalStreetInfo?: string; 
  public get additionalStreetInfo() {
    return this.getStringAttribute('additional_street_info');
  }
  public set additionalStreetInfo(value: string) {
    this._additionalStreetInfo = value;
  }
  public resetAdditionalStreetInfo() {
    this._additionalStreetInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStreetInfoInput() {
    return this._additionalStreetInfo;
  }

  // apartment - computed: false, optional: true, required: false
  private _apartment?: string; 
  public get apartment() {
    return this.getStringAttribute('apartment');
  }
  public set apartment(value: string) {
    this._apartment = value;
  }
  public resetApartment() {
    this._apartment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apartmentInput() {
    return this._apartment;
  }

  // building - computed: false, optional: true, required: false
  private _building?: string; 
  public get building() {
    return this.getStringAttribute('building');
  }
  public set building(value: string) {
    this._building = value;
  }
  public resetBuilding() {
    this._building = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildingInput() {
    return this._building;
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

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
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

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // fax - computed: false, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // mobile - computed: false, optional: true, required: false
  private _mobile?: string; 
  public get mobile() {
    return this.getStringAttribute('mobile');
  }
  public set mobile(value: string) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // po_box - computed: false, optional: true, required: false
  private _poBox?: string; 
  public get poBox() {
    return this.getStringAttribute('po_box');
  }
  public set poBox(value: string) {
    this._poBox = value;
  }
  public resetPoBox() {
    this._poBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poBoxInput() {
    return this._poBox;
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

  // street_name - computed: false, optional: true, required: false
  private _streetName?: string; 
  public get streetName() {
    return this.getStringAttribute('street_name');
  }
  public set streetName(value: string) {
    this._streetName = value;
  }
  public resetStreetName() {
    this._streetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNameInput() {
    return this._streetName;
  }

  // street_number - computed: false, optional: true, required: false
  private _streetNumber?: string; 
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
  public set streetNumber(value: string) {
    this._streetNumber = value;
  }
  public resetStreetNumber() {
    this._streetNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNumberInput() {
    return this._streetNumber;
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

export class BusinessUnitDivisionAddressList extends cdktf.ComplexList {
  public internalValue? : BusinessUnitDivisionAddress[] | cdktf.IResolvable

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
  public get(index: number): BusinessUnitDivisionAddressOutputReference {
    return new BusinessUnitDivisionAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessUnitDivisionCustom {
  /**
  * CustomValue fields for this resource. Note that the values need to be provided as JSON encoded strings: `my-value = jsonencode({"key": "value"})`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#fields BusinessUnitDivision#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * The ID of the custom type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#type_id BusinessUnitDivision#type_id}
  */
  readonly typeId?: string;
}

export function businessUnitDivisionCustomToTerraform(struct?: BusinessUnitDivisionCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    type_id: cdktf.stringToTerraform(struct!.typeId),
  }
}


export function businessUnitDivisionCustomToHclTerraform(struct?: BusinessUnitDivisionCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessUnitDivisionCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BusinessUnitDivisionCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessUnitDivisionCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._typeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._typeId = value.typeId;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }
}
export interface BusinessUnitDivisionParentUnit {
  /**
  * User-defined unique identifier of the business unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#id BusinessUnitDivision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined unique key of the business unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#key BusinessUnitDivision#key}
  */
  readonly key?: string;
}

export function businessUnitDivisionParentUnitToTerraform(struct?: BusinessUnitDivisionParentUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function businessUnitDivisionParentUnitToHclTerraform(struct?: BusinessUnitDivisionParentUnit | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessUnitDivisionParentUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BusinessUnitDivisionParentUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessUnitDivisionParentUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface BusinessUnitDivisionStore {
  /**
  * User-defined unique identifier of the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#key BusinessUnitDivision#key}
  */
  readonly key?: string;
}

export function businessUnitDivisionStoreToTerraform(struct?: BusinessUnitDivisionStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function businessUnitDivisionStoreToHclTerraform(struct?: BusinessUnitDivisionStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessUnitDivisionStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessUnitDivisionStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessUnitDivisionStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class BusinessUnitDivisionStoreList extends cdktf.ComplexList {
  public internalValue? : BusinessUnitDivisionStore[] | cdktf.IResolvable

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
  public get(index: number): BusinessUnitDivisionStoreOutputReference {
    return new BusinessUnitDivisionStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division commercetools_business_unit_division}
*/
export class BusinessUnitDivision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_business_unit_division";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessUnitDivision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessUnitDivision to import
  * @param importFromId The id of the existing BusinessUnitDivision that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessUnitDivision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_business_unit_division", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/business_unit_division commercetools_business_unit_division} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessUnitDivisionConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessUnitDivisionConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_business_unit_division',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalRuleMode = config.approvalRuleMode;
    this._associateMode = config.associateMode;
    this._billingAddressKeys = config.billingAddressKeys;
    this._contactEmail = config.contactEmail;
    this._defaultBillingAddressKey = config.defaultBillingAddressKey;
    this._defaultShippingAddressKey = config.defaultShippingAddressKey;
    this._key = config.key;
    this._name = config.name;
    this._shippingAddressKeys = config.shippingAddressKeys;
    this._status = config.status;
    this._storeMode = config.storeMode;
    this._address.internalValue = config.address;
    this._custom.internalValue = config.custom;
    this._parentUnit.internalValue = config.parentUnit;
    this._store.internalValue = config.store;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_rule_mode - computed: true, optional: true, required: false
  private _approvalRuleMode?: string; 
  public get approvalRuleMode() {
    return this.getStringAttribute('approval_rule_mode');
  }
  public set approvalRuleMode(value: string) {
    this._approvalRuleMode = value;
  }
  public resetApprovalRuleMode() {
    this._approvalRuleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRuleModeInput() {
    return this._approvalRuleMode;
  }

  // associate_mode - computed: true, optional: true, required: false
  private _associateMode?: string; 
  public get associateMode() {
    return this.getStringAttribute('associate_mode');
  }
  public set associateMode(value: string) {
    this._associateMode = value;
  }
  public resetAssociateMode() {
    this._associateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateModeInput() {
    return this._associateMode;
  }

  // billing_address_keys - computed: false, optional: true, required: false
  private _billingAddressKeys?: string[]; 
  public get billingAddressKeys() {
    return this.getListAttribute('billing_address_keys');
  }
  public set billingAddressKeys(value: string[]) {
    this._billingAddressKeys = value;
  }
  public resetBillingAddressKeys() {
    this._billingAddressKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAddressKeysInput() {
    return this._billingAddressKeys;
  }

  // contact_email - computed: false, optional: true, required: false
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  public resetContactEmail() {
    this._contactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // default_billing_address_key - computed: false, optional: true, required: false
  private _defaultBillingAddressKey?: string; 
  public get defaultBillingAddressKey() {
    return this.getStringAttribute('default_billing_address_key');
  }
  public set defaultBillingAddressKey(value: string) {
    this._defaultBillingAddressKey = value;
  }
  public resetDefaultBillingAddressKey() {
    this._defaultBillingAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBillingAddressKeyInput() {
    return this._defaultBillingAddressKey;
  }

  // default_shipping_address_key - computed: false, optional: true, required: false
  private _defaultShippingAddressKey?: string; 
  public get defaultShippingAddressKey() {
    return this.getStringAttribute('default_shipping_address_key');
  }
  public set defaultShippingAddressKey(value: string) {
    this._defaultShippingAddressKey = value;
  }
  public resetDefaultShippingAddressKey() {
    this._defaultShippingAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultShippingAddressKeyInput() {
    return this._defaultShippingAddressKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // shipping_address_keys - computed: false, optional: true, required: false
  private _shippingAddressKeys?: string[]; 
  public get shippingAddressKeys() {
    return this.getListAttribute('shipping_address_keys');
  }
  public set shippingAddressKeys(value: string[]) {
    this._shippingAddressKeys = value;
  }
  public resetShippingAddressKeys() {
    this._shippingAddressKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingAddressKeysInput() {
    return this._shippingAddressKeys;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // store_mode - computed: true, optional: true, required: false
  private _storeMode?: string; 
  public get storeMode() {
    return this.getStringAttribute('store_mode');
  }
  public set storeMode(value: string) {
    this._storeMode = value;
  }
  public resetStoreMode() {
    this._storeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeModeInput() {
    return this._storeMode;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // address - computed: false, optional: true, required: false
  private _address = new BusinessUnitDivisionAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: BusinessUnitDivisionAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new BusinessUnitDivisionCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: BusinessUnitDivisionCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // parent_unit - computed: false, optional: true, required: false
  private _parentUnit = new BusinessUnitDivisionParentUnitOutputReference(this, "parent_unit");
  public get parentUnit() {
    return this._parentUnit;
  }
  public putParentUnit(value: BusinessUnitDivisionParentUnit) {
    this._parentUnit.internalValue = value;
  }
  public resetParentUnit() {
    this._parentUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentUnitInput() {
    return this._parentUnit.internalValue;
  }

  // store - computed: false, optional: true, required: false
  private _store = new BusinessUnitDivisionStoreList(this, "store", false);
  public get store() {
    return this._store;
  }
  public putStore(value: BusinessUnitDivisionStore[] | cdktf.IResolvable) {
    this._store.internalValue = value;
  }
  public resetStore() {
    this._store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_rule_mode: cdktf.stringToTerraform(this._approvalRuleMode),
      associate_mode: cdktf.stringToTerraform(this._associateMode),
      billing_address_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingAddressKeys),
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      default_billing_address_key: cdktf.stringToTerraform(this._defaultBillingAddressKey),
      default_shipping_address_key: cdktf.stringToTerraform(this._defaultShippingAddressKey),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      shipping_address_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shippingAddressKeys),
      status: cdktf.stringToTerraform(this._status),
      store_mode: cdktf.stringToTerraform(this._storeMode),
      address: cdktf.listMapper(businessUnitDivisionAddressToTerraform, true)(this._address.internalValue),
      custom: businessUnitDivisionCustomToTerraform(this._custom.internalValue),
      parent_unit: businessUnitDivisionParentUnitToTerraform(this._parentUnit.internalValue),
      store: cdktf.listMapper(businessUnitDivisionStoreToTerraform, true)(this._store.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_rule_mode: {
        value: cdktf.stringToHclTerraform(this._approvalRuleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associate_mode: {
        value: cdktf.stringToHclTerraform(this._associateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_address_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingAddressKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_billing_address_key: {
        value: cdktf.stringToHclTerraform(this._defaultBillingAddressKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_shipping_address_key: {
        value: cdktf.stringToHclTerraform(this._defaultShippingAddressKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      shipping_address_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shippingAddressKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_mode: {
        value: cdktf.stringToHclTerraform(this._storeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.listMapperHcl(businessUnitDivisionAddressToHclTerraform, true)(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessUnitDivisionAddressList",
      },
      custom: {
        value: businessUnitDivisionCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BusinessUnitDivisionCustom",
      },
      parent_unit: {
        value: businessUnitDivisionParentUnitToHclTerraform(this._parentUnit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BusinessUnitDivisionParentUnit",
      },
      store: {
        value: cdktf.listMapperHcl(businessUnitDivisionStoreToHclTerraform, true)(this._store.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessUnitDivisionStoreList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
