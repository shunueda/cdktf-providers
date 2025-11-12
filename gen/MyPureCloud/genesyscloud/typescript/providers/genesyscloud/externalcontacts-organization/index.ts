// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalcontactsOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#company_type ExternalcontactsOrganization#company_type}
  */
  readonly companyType?: string;
  /**
  * JSON formatted object for custom field values defined in the schema referenced by the worktype of the workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#custom_fields ExternalcontactsOrganization#custom_fields}
  */
  readonly customFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#employee_count ExternalcontactsOrganization#employee_count}
  */
  readonly employeeCount?: number;
  /**
  * A string that identifies an external system-of-record resource that may have more detailed information on the organization. It should be a valid URL (including the http/https protocol, port, and path [if any]). The value is automatically trimmed of any leading and trailing whitespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#external_system_url ExternalcontactsOrganization#external_system_url}
  */
  readonly externalSystemUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#id ExternalcontactsOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#industry ExternalcontactsOrganization#industry}
  */
  readonly industry?: string;
  /**
  * The name of the company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#name ExternalcontactsOrganization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#revenue ExternalcontactsOrganization#revenue}
  */
  readonly revenue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#tags ExternalcontactsOrganization#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#websites ExternalcontactsOrganization#websites}
  */
  readonly websites?: string[];
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#address ExternalcontactsOrganization#address}
  */
  readonly address?: ExternalcontactsOrganizationAddress;
  /**
  * external_data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#external_data_sources ExternalcontactsOrganization#external_data_sources}
  */
  readonly externalDataSources?: ExternalcontactsOrganizationExternalDataSources[] | cdktf.IResolvable;
  /**
  * fax_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#fax_number ExternalcontactsOrganization#fax_number}
  */
  readonly faxNumber?: ExternalcontactsOrganizationFaxNumber;
  /**
  * phone_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#phone_number ExternalcontactsOrganization#phone_number}
  */
  readonly phoneNumber?: ExternalcontactsOrganizationPhoneNumber;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#schema ExternalcontactsOrganization#schema}
  */
  readonly schema?: ExternalcontactsOrganizationSchema;
  /**
  * tickers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#tickers ExternalcontactsOrganization#tickers}
  */
  readonly tickers?: ExternalcontactsOrganizationTickers[] | cdktf.IResolvable;
  /**
  * trustor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#trustor ExternalcontactsOrganization#trustor}
  */
  readonly trustor?: ExternalcontactsOrganizationTrustor;
  /**
  * twitter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#twitter ExternalcontactsOrganization#twitter}
  */
  readonly twitter?: ExternalcontactsOrganizationTwitter;
}
export interface ExternalcontactsOrganizationAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#address1 ExternalcontactsOrganization#address1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#address2 ExternalcontactsOrganization#address2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#city ExternalcontactsOrganization#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#country_code ExternalcontactsOrganization#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#postal_code ExternalcontactsOrganization#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#state ExternalcontactsOrganization#state}
  */
  readonly state?: string;
}

export function externalcontactsOrganizationAddressToTerraform(struct?: ExternalcontactsOrganizationAddressOutputReference | ExternalcontactsOrganizationAddress): any {
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


export function externalcontactsOrganizationAddressToHclTerraform(struct?: ExternalcontactsOrganizationAddressOutputReference | ExternalcontactsOrganizationAddress): any {
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

export class ExternalcontactsOrganizationAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationAddress | undefined {
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

  public set internalValue(value: ExternalcontactsOrganizationAddress | undefined) {
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
export interface ExternalcontactsOrganizationExternalDataSources {
  /**
  * The platform that was the source of the data.  Example: a CRM like SALESFORCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#platform ExternalcontactsOrganization#platform}
  */
  readonly platform?: string;
  /**
  * An URL that links to the source record that contributed data to the associated entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#url ExternalcontactsOrganization#url}
  */
  readonly url?: string;
}

export function externalcontactsOrganizationExternalDataSourcesToTerraform(struct?: ExternalcontactsOrganizationExternalDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform: cdktf.stringToTerraform(struct!.platform),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalcontactsOrganizationExternalDataSourcesToHclTerraform(struct?: ExternalcontactsOrganizationExternalDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsOrganizationExternalDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalcontactsOrganizationExternalDataSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsOrganizationExternalDataSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._platform = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._platform = value.platform;
      this._url = value.url;
    }
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ExternalcontactsOrganizationExternalDataSourcesList extends cdktf.ComplexList {
  public internalValue? : ExternalcontactsOrganizationExternalDataSources[] | cdktf.IResolvable

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
  public get(index: number): ExternalcontactsOrganizationExternalDataSourcesOutputReference {
    return new ExternalcontactsOrganizationExternalDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalcontactsOrganizationFaxNumber {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#accepts_sms ExternalcontactsOrganization#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#country_code ExternalcontactsOrganization#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#display ExternalcontactsOrganization#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#e164 ExternalcontactsOrganization#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#extension ExternalcontactsOrganization#extension}
  */
  readonly extension?: number;
}

export function externalcontactsOrganizationFaxNumberToTerraform(struct?: ExternalcontactsOrganizationFaxNumberOutputReference | ExternalcontactsOrganizationFaxNumber): any {
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


export function externalcontactsOrganizationFaxNumberToHclTerraform(struct?: ExternalcontactsOrganizationFaxNumberOutputReference | ExternalcontactsOrganizationFaxNumber): any {
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

export class ExternalcontactsOrganizationFaxNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationFaxNumber | undefined {
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

  public set internalValue(value: ExternalcontactsOrganizationFaxNumber | undefined) {
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
export interface ExternalcontactsOrganizationPhoneNumber {
  /**
  * If contact accept SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#accepts_sms ExternalcontactsOrganization#accepts_sms}
  */
  readonly acceptsSms?: boolean | cdktf.IResolvable;
  /**
  * Phone number country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#country_code ExternalcontactsOrganization#country_code}
  */
  readonly countryCode?: string;
  /**
  * Display string of the phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#display ExternalcontactsOrganization#display}
  */
  readonly display?: string;
  /**
  * Phone number in e164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#e164 ExternalcontactsOrganization#e164}
  */
  readonly e164?: string;
  /**
  * Phone extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#extension ExternalcontactsOrganization#extension}
  */
  readonly extension?: number;
}

export function externalcontactsOrganizationPhoneNumberToTerraform(struct?: ExternalcontactsOrganizationPhoneNumberOutputReference | ExternalcontactsOrganizationPhoneNumber): any {
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


export function externalcontactsOrganizationPhoneNumberToHclTerraform(struct?: ExternalcontactsOrganizationPhoneNumberOutputReference | ExternalcontactsOrganizationPhoneNumber): any {
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

export class ExternalcontactsOrganizationPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationPhoneNumber | undefined {
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

  public set internalValue(value: ExternalcontactsOrganizationPhoneNumber | undefined) {
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
export interface ExternalcontactsOrganizationSchemaJsonSchema {
  /**
  * A brief description of the custom fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#description ExternalcontactsOrganization#description}
  */
  readonly description?: string;
  /**
  * The properties for the JSON Schema document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#properties ExternalcontactsOrganization#properties}
  */
  readonly properties?: string;
  /**
  * The required fields in the schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#required ExternalcontactsOrganization#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#title ExternalcontactsOrganization#title}
  */
  readonly title?: string;
}

export function externalcontactsOrganizationSchemaJsonSchemaToTerraform(struct?: ExternalcontactsOrganizationSchemaJsonSchemaOutputReference | ExternalcontactsOrganizationSchemaJsonSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    properties: cdktf.stringToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function externalcontactsOrganizationSchemaJsonSchemaToHclTerraform(struct?: ExternalcontactsOrganizationSchemaJsonSchemaOutputReference | ExternalcontactsOrganizationSchemaJsonSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ExternalcontactsOrganizationSchemaJsonSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationSchemaJsonSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsOrganizationSchemaJsonSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._properties = undefined;
      this._required = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._properties = value.properties;
      this._required = value.required;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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
export interface ExternalcontactsOrganizationSchema {
  /**
  * The schema's enabled/disabled status. A disabled schema cannot be assigned to any other entities, but the data on those entities from the schema still exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#enabled ExternalcontactsOrganization#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#name ExternalcontactsOrganization#name}
  */
  readonly name?: string;
  /**
  * The globally unique identifier for the schema. Only required if a schema is used for custom fields during external entity creation or updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#schema_id ExternalcontactsOrganization#schema_id}
  */
  readonly schemaId?: string;
  /**
  * The schema's version, a positive integer. Required for updates. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#version ExternalcontactsOrganization#version}
  */
  readonly version?: number;
  /**
  * json_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#json_schema ExternalcontactsOrganization#json_schema}
  */
  readonly jsonSchema?: ExternalcontactsOrganizationSchemaJsonSchema;
}

export function externalcontactsOrganizationSchemaToTerraform(struct?: ExternalcontactsOrganizationSchemaOutputReference | ExternalcontactsOrganizationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    version: cdktf.numberToTerraform(struct!.version),
    json_schema: externalcontactsOrganizationSchemaJsonSchemaToTerraform(struct!.jsonSchema),
  }
}


export function externalcontactsOrganizationSchemaToHclTerraform(struct?: ExternalcontactsOrganizationSchemaOutputReference | ExternalcontactsOrganizationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    json_schema: {
      value: externalcontactsOrganizationSchemaJsonSchemaToHclTerraform(struct!.jsonSchema),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalcontactsOrganizationSchemaJsonSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsOrganizationSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._jsonSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsOrganizationSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._name = undefined;
      this._schemaId = undefined;
      this._version = undefined;
      this._jsonSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._name = value.name;
      this._schemaId = value.schemaId;
      this._version = value.version;
      this._jsonSchema.internalValue = value.jsonSchema;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // json_schema - computed: false, optional: true, required: false
  private _jsonSchema = new ExternalcontactsOrganizationSchemaJsonSchemaOutputReference(this, "json_schema");
  public get jsonSchema() {
    return this._jsonSchema;
  }
  public putJsonSchema(value: ExternalcontactsOrganizationSchemaJsonSchema) {
    this._jsonSchema.internalValue = value;
  }
  public resetJsonSchema() {
    this._jsonSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema.internalValue;
  }
}
export interface ExternalcontactsOrganizationTickers {
  /**
  * The exchange for this ticker symbol. Examples: NYSE, FTSE, NASDAQ, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#exchange ExternalcontactsOrganization#exchange}
  */
  readonly exchange: string;
  /**
  * The ticker symbol for this organization. Example: ININ, AAPL, MSFT, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#symbol ExternalcontactsOrganization#symbol}
  */
  readonly symbol: string;
}

export function externalcontactsOrganizationTickersToTerraform(struct?: ExternalcontactsOrganizationTickers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exchange: cdktf.stringToTerraform(struct!.exchange),
    symbol: cdktf.stringToTerraform(struct!.symbol),
  }
}


export function externalcontactsOrganizationTickersToHclTerraform(struct?: ExternalcontactsOrganizationTickers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exchange: {
      value: cdktf.stringToHclTerraform(struct!.exchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    symbol: {
      value: cdktf.stringToHclTerraform(struct!.symbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsOrganizationTickersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalcontactsOrganizationTickers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchange = this._exchange;
    }
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsOrganizationTickers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exchange = undefined;
      this._symbol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exchange = value.exchange;
      this._symbol = value.symbol;
    }
  }

  // exchange - computed: false, optional: false, required: true
  private _exchange?: string; 
  public get exchange() {
    return this.getStringAttribute('exchange');
  }
  public set exchange(value: string) {
    this._exchange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeInput() {
    return this._exchange;
  }

  // symbol - computed: false, optional: false, required: true
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
  }
}

export class ExternalcontactsOrganizationTickersList extends cdktf.ComplexList {
  public internalValue? : ExternalcontactsOrganizationTickers[] | cdktf.IResolvable

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
  public get(index: number): ExternalcontactsOrganizationTickersOutputReference {
    return new ExternalcontactsOrganizationTickersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalcontactsOrganizationTrustor {
  /**
  * If disabled no trustee user will have access, even if they were previously added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#enabled ExternalcontactsOrganization#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function externalcontactsOrganizationTrustorToTerraform(struct?: ExternalcontactsOrganizationTrustorOutputReference | ExternalcontactsOrganizationTrustor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function externalcontactsOrganizationTrustorToHclTerraform(struct?: ExternalcontactsOrganizationTrustorOutputReference | ExternalcontactsOrganizationTrustor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsOrganizationTrustorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationTrustor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsOrganizationTrustor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ExternalcontactsOrganizationTwitter {
  /**
  * Contact twitter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#name ExternalcontactsOrganization#name}
  */
  readonly name: string;
  /**
  * Contact twitter screen name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#screen_name ExternalcontactsOrganization#screen_name}
  */
  readonly screenName: string;
  /**
  * Contact twitter id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#twitter_id ExternalcontactsOrganization#twitter_id}
  */
  readonly twitterId: string;
}

export function externalcontactsOrganizationTwitterToTerraform(struct?: ExternalcontactsOrganizationTwitterOutputReference | ExternalcontactsOrganizationTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    screen_name: cdktf.stringToTerraform(struct!.screenName),
    twitter_id: cdktf.stringToTerraform(struct!.twitterId),
  }
}


export function externalcontactsOrganizationTwitterToHclTerraform(struct?: ExternalcontactsOrganizationTwitterOutputReference | ExternalcontactsOrganizationTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    twitter_id: {
      value: cdktf.stringToHclTerraform(struct!.twitterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsOrganizationTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsOrganizationTwitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._screenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenName = this._screenName;
    }
    if (this._twitterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.twitterId = this._twitterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsOrganizationTwitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._screenName = undefined;
      this._twitterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._screenName = value.screenName;
      this._twitterId = value.twitterId;
    }
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

  // screen_name - computed: false, optional: false, required: true
  private _screenName?: string; 
  public get screenName() {
    return this.getStringAttribute('screen_name');
  }
  public set screenName(value: string) {
    this._screenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get screenNameInput() {
    return this._screenName;
  }

  // twitter_id - computed: false, optional: false, required: true
  private _twitterId?: string; 
  public get twitterId() {
    return this.getStringAttribute('twitter_id');
  }
  public set twitterId(value: string) {
    this._twitterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterIdInput() {
    return this._twitterId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization genesyscloud_externalcontacts_organization}
*/
export class ExternalcontactsOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_externalcontacts_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalcontactsOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalcontactsOrganization to import
  * @param importFromId The id of the existing ExternalcontactsOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalcontactsOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_externalcontacts_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalcontacts_organization genesyscloud_externalcontacts_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalcontactsOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalcontactsOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_externalcontacts_organization',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._companyType = config.companyType;
    this._customFields = config.customFields;
    this._employeeCount = config.employeeCount;
    this._externalSystemUrl = config.externalSystemUrl;
    this._id = config.id;
    this._industry = config.industry;
    this._name = config.name;
    this._revenue = config.revenue;
    this._tags = config.tags;
    this._websites = config.websites;
    this._address.internalValue = config.address;
    this._externalDataSources.internalValue = config.externalDataSources;
    this._faxNumber.internalValue = config.faxNumber;
    this._phoneNumber.internalValue = config.phoneNumber;
    this._schema.internalValue = config.schema;
    this._tickers.internalValue = config.tickers;
    this._trustor.internalValue = config.trustor;
    this._twitter.internalValue = config.twitter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_type - computed: false, optional: true, required: false
  private _companyType?: string; 
  public get companyType() {
    return this.getStringAttribute('company_type');
  }
  public set companyType(value: string) {
    this._companyType = value;
  }
  public resetCompanyType() {
    this._companyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyTypeInput() {
    return this._companyType;
  }

  // custom_fields - computed: true, optional: true, required: false
  private _customFields?: string; 
  public get customFields() {
    return this.getStringAttribute('custom_fields');
  }
  public set customFields(value: string) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // employee_count - computed: false, optional: true, required: false
  private _employeeCount?: number; 
  public get employeeCount() {
    return this.getNumberAttribute('employee_count');
  }
  public set employeeCount(value: number) {
    this._employeeCount = value;
  }
  public resetEmployeeCount() {
    this._employeeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeCountInput() {
    return this._employeeCount;
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

  // industry - computed: false, optional: true, required: false
  private _industry?: string; 
  public get industry() {
    return this.getStringAttribute('industry');
  }
  public set industry(value: string) {
    this._industry = value;
  }
  public resetIndustry() {
    this._industry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryInput() {
    return this._industry;
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

  // revenue - computed: false, optional: true, required: false
  private _revenue?: number; 
  public get revenue() {
    return this.getNumberAttribute('revenue');
  }
  public set revenue(value: number) {
    this._revenue = value;
  }
  public resetRevenue() {
    this._revenue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revenueInput() {
    return this._revenue;
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

  // websites - computed: false, optional: true, required: false
  private _websites?: string[]; 
  public get websites() {
    return this.getListAttribute('websites');
  }
  public set websites(value: string[]) {
    this._websites = value;
  }
  public resetWebsites() {
    this._websites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websitesInput() {
    return this._websites;
  }

  // address - computed: false, optional: true, required: false
  private _address = new ExternalcontactsOrganizationAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: ExternalcontactsOrganizationAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // external_data_sources - computed: false, optional: true, required: false
  private _externalDataSources = new ExternalcontactsOrganizationExternalDataSourcesList(this, "external_data_sources", false);
  public get externalDataSources() {
    return this._externalDataSources;
  }
  public putExternalDataSources(value: ExternalcontactsOrganizationExternalDataSources[] | cdktf.IResolvable) {
    this._externalDataSources.internalValue = value;
  }
  public resetExternalDataSources() {
    this._externalDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSourcesInput() {
    return this._externalDataSources.internalValue;
  }

  // fax_number - computed: false, optional: true, required: false
  private _faxNumber = new ExternalcontactsOrganizationFaxNumberOutputReference(this, "fax_number");
  public get faxNumber() {
    return this._faxNumber;
  }
  public putFaxNumber(value: ExternalcontactsOrganizationFaxNumber) {
    this._faxNumber.internalValue = value;
  }
  public resetFaxNumber() {
    this._faxNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxNumberInput() {
    return this._faxNumber.internalValue;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber = new ExternalcontactsOrganizationPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: ExternalcontactsOrganizationPhoneNumber) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ExternalcontactsOrganizationSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ExternalcontactsOrganizationSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // tickers - computed: false, optional: true, required: false
  private _tickers = new ExternalcontactsOrganizationTickersList(this, "tickers", false);
  public get tickers() {
    return this._tickers;
  }
  public putTickers(value: ExternalcontactsOrganizationTickers[] | cdktf.IResolvable) {
    this._tickers.internalValue = value;
  }
  public resetTickers() {
    this._tickers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickersInput() {
    return this._tickers.internalValue;
  }

  // trustor - computed: false, optional: true, required: false
  private _trustor = new ExternalcontactsOrganizationTrustorOutputReference(this, "trustor");
  public get trustor() {
    return this._trustor;
  }
  public putTrustor(value: ExternalcontactsOrganizationTrustor) {
    this._trustor.internalValue = value;
  }
  public resetTrustor() {
    this._trustor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustorInput() {
    return this._trustor.internalValue;
  }

  // twitter - computed: false, optional: true, required: false
  private _twitter = new ExternalcontactsOrganizationTwitterOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: ExternalcontactsOrganizationTwitter) {
    this._twitter.internalValue = value;
  }
  public resetTwitter() {
    this._twitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_type: cdktf.stringToTerraform(this._companyType),
      custom_fields: cdktf.stringToTerraform(this._customFields),
      employee_count: cdktf.numberToTerraform(this._employeeCount),
      external_system_url: cdktf.stringToTerraform(this._externalSystemUrl),
      id: cdktf.stringToTerraform(this._id),
      industry: cdktf.stringToTerraform(this._industry),
      name: cdktf.stringToTerraform(this._name),
      revenue: cdktf.numberToTerraform(this._revenue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      websites: cdktf.listMapper(cdktf.stringToTerraform, false)(this._websites),
      address: externalcontactsOrganizationAddressToTerraform(this._address.internalValue),
      external_data_sources: cdktf.listMapper(externalcontactsOrganizationExternalDataSourcesToTerraform, true)(this._externalDataSources.internalValue),
      fax_number: externalcontactsOrganizationFaxNumberToTerraform(this._faxNumber.internalValue),
      phone_number: externalcontactsOrganizationPhoneNumberToTerraform(this._phoneNumber.internalValue),
      schema: externalcontactsOrganizationSchemaToTerraform(this._schema.internalValue),
      tickers: cdktf.listMapper(externalcontactsOrganizationTickersToTerraform, true)(this._tickers.internalValue),
      trustor: externalcontactsOrganizationTrustorToTerraform(this._trustor.internalValue),
      twitter: externalcontactsOrganizationTwitterToTerraform(this._twitter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_type: {
        value: cdktf.stringToHclTerraform(this._companyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_fields: {
        value: cdktf.stringToHclTerraform(this._customFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      employee_count: {
        value: cdktf.numberToHclTerraform(this._employeeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_system_url: {
        value: cdktf.stringToHclTerraform(this._externalSystemUrl),
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
      industry: {
        value: cdktf.stringToHclTerraform(this._industry),
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
      revenue: {
        value: cdktf.numberToHclTerraform(this._revenue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      websites: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._websites),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      address: {
        value: externalcontactsOrganizationAddressToHclTerraform(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationAddressList",
      },
      external_data_sources: {
        value: cdktf.listMapperHcl(externalcontactsOrganizationExternalDataSourcesToHclTerraform, true)(this._externalDataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationExternalDataSourcesList",
      },
      fax_number: {
        value: externalcontactsOrganizationFaxNumberToHclTerraform(this._faxNumber.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationFaxNumberList",
      },
      phone_number: {
        value: externalcontactsOrganizationPhoneNumberToHclTerraform(this._phoneNumber.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationPhoneNumberList",
      },
      schema: {
        value: externalcontactsOrganizationSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationSchemaList",
      },
      tickers: {
        value: cdktf.listMapperHcl(externalcontactsOrganizationTickersToHclTerraform, true)(this._tickers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationTickersList",
      },
      trustor: {
        value: externalcontactsOrganizationTrustorToHclTerraform(this._trustor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationTrustorList",
      },
      twitter: {
        value: externalcontactsOrganizationTwitterToHclTerraform(this._twitter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsOrganizationTwitterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
