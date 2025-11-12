// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#description Channel#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#id Channel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Any arbitrary string key that uniquely identifies this channel within the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#key Channel#key}
  */
  readonly key: string;
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#name Channel#name}
  */
  readonly name?: { [key: string]: string };
  /**
  * The [roles](https://docs.commercetools.com/api/projects/channels#channelroleenum) of this channel. Each channel must have at least one role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#roles Channel#roles}
  */
  readonly roles: string[];
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#address Channel#address}
  */
  readonly address?: ChannelAddress;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#custom Channel#custom}
  */
  readonly custom?: ChannelCustom;
  /**
  * geolocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#geolocation Channel#geolocation}
  */
  readonly geolocation?: ChannelGeolocation;
}
export interface ChannelAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#additional_address_info Channel#additional_address_info}
  */
  readonly additionalAddressInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#additional_street_info Channel#additional_street_info}
  */
  readonly additionalStreetInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#apartment Channel#apartment}
  */
  readonly apartment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#building Channel#building}
  */
  readonly building?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#city Channel#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#company Channel#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#country Channel#country}
  */
  readonly country: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#department Channel#department}
  */
  readonly department?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#email Channel#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#external_id Channel#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#fax Channel#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#first_name Channel#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#key Channel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#last_name Channel#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#mobile Channel#mobile}
  */
  readonly mobile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#phone Channel#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#po_box Channel#po_box}
  */
  readonly poBox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#postal_code Channel#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#region Channel#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#salutation Channel#salutation}
  */
  readonly salutation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#state Channel#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#street_name Channel#street_name}
  */
  readonly streetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#street_number Channel#street_number}
  */
  readonly streetNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#title Channel#title}
  */
  readonly title?: string;
}

export function channelAddressToTerraform(struct?: ChannelAddressOutputReference | ChannelAddress): any {
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


export function channelAddressToHclTerraform(struct?: ChannelAddressOutputReference | ChannelAddress): any {
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

export class ChannelAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChannelAddress | undefined {
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

  public set internalValue(value: ChannelAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ChannelCustom {
  /**
  * Custom fields for this resource. Note that the values need to be provided as JSON encoded strings: `my-value = jsonencode({"key": "value"})`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#fields Channel#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#type_id Channel#type_id}
  */
  readonly typeId: string;
}

export function channelCustomToTerraform(struct?: ChannelCustomOutputReference | ChannelCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    type_id: cdktf.stringToTerraform(struct!.typeId),
  }
}


export function channelCustomToHclTerraform(struct?: ChannelCustomOutputReference | ChannelCustom): any {
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

export class ChannelCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChannelCustom | undefined {
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

  public set internalValue(value: ChannelCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._typeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }
}
export interface ChannelGeolocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#coordinates Channel#coordinates}
  */
  readonly coordinates: number[];
}

export function channelGeolocationToTerraform(struct?: ChannelGeolocationOutputReference | ChannelGeolocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.coordinates),
  }
}


export function channelGeolocationToHclTerraform(struct?: ChannelGeolocationOutputReference | ChannelGeolocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.coordinates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChannelGeolocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChannelGeolocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChannelGeolocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: number[]; 
  public get coordinates() {
    return this.getNumberListAttribute('coordinates');
  }
  public set coordinates(value: number[]) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel commercetools_channel}
*/
export class Channel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Channel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Channel to import
  * @param importFromId The id of the existing Channel that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Channel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/channel commercetools_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_channel',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._roles = config.roles;
    this._address.internalValue = config.address;
    this._custom.internalValue = config.custom;
    this._geolocation.internalValue = config.geolocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: true, required: false
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // address - computed: false, optional: true, required: false
  private _address = new ChannelAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: ChannelAddress) {
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
  private _custom = new ChannelCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ChannelCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // geolocation - computed: false, optional: true, required: false
  private _geolocation = new ChannelGeolocationOutputReference(this, "geolocation");
  public get geolocation() {
    return this._geolocation;
  }
  public putGeolocation(value: ChannelGeolocation) {
    this._geolocation.internalValue = value;
  }
  public resetGeolocation() {
    this._geolocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationInput() {
    return this._geolocation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.hashMapper(cdktf.stringToTerraform)(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      address: channelAddressToTerraform(this._address.internalValue),
      custom: channelCustomToTerraform(this._custom.internalValue),
      geolocation: channelGeolocationToTerraform(this._geolocation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._description),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      address: {
        value: channelAddressToHclTerraform(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChannelAddressList",
      },
      custom: {
        value: channelCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChannelCustomList",
      },
      geolocation: {
        value: channelGeolocationToHclTerraform(this._geolocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChannelGeolocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
