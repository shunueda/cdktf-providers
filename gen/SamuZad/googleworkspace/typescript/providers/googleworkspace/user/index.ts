// https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * asps.list of the user's alias email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#aliases User#aliases}
  */
  readonly aliases?: string[];
  /**
  * Indicates if user is archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#archived User#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the user is forced to change their password at next login. This setting doesn't apply when the user signs in via a third-party identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#change_password_at_next_login User#change_password_at_next_login}
  */
  readonly changePasswordAtNextLogin?: boolean | cdktf.IResolvable;
  /**
  * Stores the hash format of the password property. We recommend sending the password property value as a base 16 bit hexadecimal-encoded hash value. Set the hashFunction values as either the SHA-1, MD5, or crypt hash format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#hash_function User#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * Defaults to `true`. Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#include_in_global_address_list User#include_in_global_address_list}
  */
  readonly includeInGlobalAddressList?: boolean | cdktf.IResolvable;
  /**
  * If true, the user's IP address is added to the allow list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#ip_allowlist User#ip_allowlist}
  */
  readonly ipAllowlist?: boolean | cdktf.IResolvable;
  /**
  * Indicates a user with super admininistrator privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#is_admin User#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#org_unit_path User#org_unit_path}
  */
  readonly orgUnitPath?: string;
  /**
  * Stores the password for the user account. A password can contain any combination of ASCII characters. A minimum of 8 characters is required. The maximum length is 100 characters. As the API does not return the value of password, this field is write-only, and the value stored in the state will be what is provided in the configuration. The field is required on create and will be empty on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * The user's primary email address. The primaryEmail must be unique and cannot be an alias of another user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary_email User#primary_email}
  */
  readonly primaryEmail: string;
  /**
  * Recovery email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#recovery_email User#recovery_email}
  */
  readonly recoveryEmail?: string;
  /**
  * Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: +16506661212.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#recovery_phone User#recovery_phone}
  */
  readonly recoveryPhone?: string;
  /**
  * Indicates if user is suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#suspended User#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#addresses User#addresses}
  */
  readonly addresses?: UserAddresses[] | cdktf.IResolvable;
  /**
  * custom_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_schemas User#custom_schemas}
  */
  readonly customSchemas?: UserCustomSchemas[] | cdktf.IResolvable;
  /**
  * emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#emails User#emails}
  */
  readonly emails?: UserEmails[] | cdktf.IResolvable;
  /**
  * external_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#external_ids User#external_ids}
  */
  readonly externalIds?: UserExternalIds[] | cdktf.IResolvable;
  /**
  * ims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#ims User#ims}
  */
  readonly ims?: UserIms[] | cdktf.IResolvable;
  /**
  * keywords block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#keywords User#keywords}
  */
  readonly keywords?: UserKeywords[] | cdktf.IResolvable;
  /**
  * languages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#languages User#languages}
  */
  readonly languages?: UserLanguages[] | cdktf.IResolvable;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#locations User#locations}
  */
  readonly locations?: UserLocations[] | cdktf.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#name User#name}
  */
  readonly name: UserName;
  /**
  * on_delete_data_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#on_delete_data_transfer User#on_delete_data_transfer}
  */
  readonly onDeleteDataTransfer?: UserOnDeleteDataTransfer;
  /**
  * organizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#organizations User#organizations}
  */
  readonly organizations?: UserOrganizations[] | cdktf.IResolvable;
  /**
  * phones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#phones User#phones}
  */
  readonly phones?: UserPhones[] | cdktf.IResolvable;
  /**
  * posix_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#posix_accounts User#posix_accounts}
  */
  readonly posixAccounts?: UserPosixAccounts[] | cdktf.IResolvable;
  /**
  * relations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#relations User#relations}
  */
  readonly relations?: UserRelations[] | cdktf.IResolvable;
  /**
  * ssh_public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#ssh_public_keys User#ssh_public_keys}
  */
  readonly sshPublicKeys?: UserSshPublicKeys[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#timeouts User#timeouts}
  */
  readonly timeouts?: UserTimeouts;
  /**
  * websites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#websites User#websites}
  */
  readonly websites?: UserWebsites[] | cdktf.IResolvable;
}
export interface UserAddresses {
  /**
  * Country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#country User#country}
  */
  readonly country?: string;
  /**
  * The country code. Uses the ISO 3166-1 standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#country_code User#country_code}
  */
  readonly countryCode?: string;
  /**
  * If the address type is custom, this property contains the custom value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * For extended addresses, such as an address that includes a sub-region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#extended_address User#extended_address}
  */
  readonly extendedAddress?: string;
  /**
  * A full and unstructured postal address. This is not synced with the structured address fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#formatted User#formatted}
  */
  readonly formatted?: string;
  /**
  * The town or city of the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#locality User#locality}
  */
  readonly locality?: string;
  /**
  * The post office box, if present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#po_box User#po_box}
  */
  readonly poBox?: string;
  /**
  * The ZIP or postal code, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#postal_code User#postal_code}
  */
  readonly postalCode?: string;
  /**
  * If this is the user's primary address. The addresses list may contain only one primary address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The abbreviated province or state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#region User#region}
  */
  readonly region?: string;
  /**
  * Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#source_is_structured User#source_is_structured}
  */
  readonly sourceIsStructured?: boolean | cdktf.IResolvable;
  /**
  * The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
  /**
  * The address type. Acceptable values: `custom`, `home`, `other`, `work`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
}

export function userAddressesToTerraform(struct?: UserAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    custom_type: cdktf.stringToTerraform(struct!.customType),
    extended_address: cdktf.stringToTerraform(struct!.extendedAddress),
    formatted: cdktf.stringToTerraform(struct!.formatted),
    locality: cdktf.stringToTerraform(struct!.locality),
    po_box: cdktf.stringToTerraform(struct!.poBox),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    primary: cdktf.booleanToTerraform(struct!.primary),
    region: cdktf.stringToTerraform(struct!.region),
    source_is_structured: cdktf.booleanToTerraform(struct!.sourceIsStructured),
    street_address: cdktf.stringToTerraform(struct!.streetAddress),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userAddressesToHclTerraform(struct?: UserAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
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
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_address: {
      value: cdktf.stringToHclTerraform(struct!.extendedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formatted: {
      value: cdktf.stringToHclTerraform(struct!.formatted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
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
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_is_structured: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIsStructured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    street_address: {
      value: cdktf.stringToHclTerraform(struct!.streetAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._extendedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAddress = this._extendedAddress;
    }
    if (this._formatted !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatted = this._formatted;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._poBox !== undefined) {
      hasAnyValues = true;
      internalValueResult.poBox = this._poBox;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sourceIsStructured !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIsStructured = this._sourceIsStructured;
    }
    if (this._streetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddress = this._streetAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._countryCode = undefined;
      this._customType = undefined;
      this._extendedAddress = undefined;
      this._formatted = undefined;
      this._locality = undefined;
      this._poBox = undefined;
      this._postalCode = undefined;
      this._primary = undefined;
      this._region = undefined;
      this._sourceIsStructured = undefined;
      this._streetAddress = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._country = value.country;
      this._countryCode = value.countryCode;
      this._customType = value.customType;
      this._extendedAddress = value.extendedAddress;
      this._formatted = value.formatted;
      this._locality = value.locality;
      this._poBox = value.poBox;
      this._postalCode = value.postalCode;
      this._primary = value.primary;
      this._region = value.region;
      this._sourceIsStructured = value.sourceIsStructured;
      this._streetAddress = value.streetAddress;
      this._type = value.type;
    }
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

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // extended_address - computed: false, optional: true, required: false
  private _extendedAddress?: string; 
  public get extendedAddress() {
    return this.getStringAttribute('extended_address');
  }
  public set extendedAddress(value: string) {
    this._extendedAddress = value;
  }
  public resetExtendedAddress() {
    this._extendedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAddressInput() {
    return this._extendedAddress;
  }

  // formatted - computed: false, optional: true, required: false
  private _formatted?: string; 
  public get formatted() {
    return this.getStringAttribute('formatted');
  }
  public set formatted(value: string) {
    this._formatted = value;
  }
  public resetFormatted() {
    this._formatted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formattedInput() {
    return this._formatted;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
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

  // source_is_structured - computed: false, optional: true, required: false
  private _sourceIsStructured?: boolean | cdktf.IResolvable; 
  public get sourceIsStructured() {
    return this.getBooleanAttribute('source_is_structured');
  }
  public set sourceIsStructured(value: boolean | cdktf.IResolvable) {
    this._sourceIsStructured = value;
  }
  public resetSourceIsStructured() {
    this._sourceIsStructured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIsStructuredInput() {
    return this._sourceIsStructured;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
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
}

export class UserAddressesList extends cdktf.ComplexList {
  public internalValue? : UserAddresses[] | cdktf.IResolvable

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
  public get(index: number): UserAddressesOutputReference {
    return new UserAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserCustomSchemas {
  /**
  * The name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#schema_name User#schema_name}
  */
  readonly schemaName: string;
  /**
  * JSON encoded map that represents key/value pairs that correspond to the given schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#schema_values User#schema_values}
  */
  readonly schemaValues: { [key: string]: string };
}

export function userCustomSchemasToTerraform(struct?: UserCustomSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    schema_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.schemaValues),
  }
}


export function userCustomSchemasToHclTerraform(struct?: UserCustomSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.schemaValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserCustomSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserCustomSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._schemaValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaValues = this._schemaValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserCustomSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaName = undefined;
      this._schemaValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaName = value.schemaName;
      this._schemaValues = value.schemaValues;
    }
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // schema_values - computed: false, optional: false, required: true
  private _schemaValues?: { [key: string]: string }; 
  public get schemaValues() {
    return this.getStringMapAttribute('schema_values');
  }
  public set schemaValues(value: { [key: string]: string }) {
    this._schemaValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaValuesInput() {
    return this._schemaValues;
  }
}

export class UserCustomSchemasList extends cdktf.ComplexList {
  public internalValue? : UserCustomSchemas[] | cdktf.IResolvable

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
  public get(index: number): UserCustomSchemasOutputReference {
    return new UserCustomSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserEmails {
  /**
  * The user's email address. Also serves as the email ID. This value can be the user's primary email address or an alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#address User#address}
  */
  readonly address?: string;
  /**
  * If the value of type is custom, this property contains the custom type string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Defaults to `false`. Indicates if this is the user's primary email. Only one entry can be marked as primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The type of the email account. Acceptable values: `custom`, `home`, `other`, `work`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
}

export function userEmailsToTerraform(struct?: UserEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    custom_type: cdktf.stringToTerraform(struct!.customType),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userEmailsToHclTerraform(struct?: UserEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._customType = undefined;
      this._primary = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._customType = value.customType;
      this._primary = value.primary;
      this._type = value.type;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
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
}

export class UserEmailsList extends cdktf.ComplexList {
  public internalValue? : UserEmails[] | cdktf.IResolvable

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
  public get(index: number): UserEmailsOutputReference {
    return new UserEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserExternalIds {
  /**
  * If the external ID type is custom, this property contains the custom value and must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * The type of external ID. If set to custom, customType must also be set. Acceptable values: `account`, `custom`, `customer`, `login_id`, `network`, `organization`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * The value of the ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userExternalIdsToTerraform(struct?: UserExternalIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_type: cdktf.stringToTerraform(struct!.customType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userExternalIdsToHclTerraform(struct?: UserExternalIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserExternalIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserExternalIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserExternalIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customType = value.customType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserExternalIdsList extends cdktf.ComplexList {
  public internalValue? : UserExternalIds[] | cdktf.IResolvable

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
  public get(index: number): UserExternalIdsOutputReference {
    return new UserExternalIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserIms {
  /**
  * If the protocol value is custom_protocol, this property holds the custom protocol's string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_protocol User#custom_protocol}
  */
  readonly customProtocol?: string;
  /**
  * If the IM type is custom, this property holds the custom type string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * The user's IM network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#im User#im}
  */
  readonly im?: string;
  /**
  * If this is the user's primary IM. Only one entry in the IM list can have a value of true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * An IM protocol identifies the IM network. The value can be a custom network or the standard network. Acceptable values: `aim`, `custom_protocol`, `gtalk`, `icq`, `jabber`, `msn`, `net_meeting`, `qq`, `skype`, `yahoo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#protocol User#protocol}
  */
  readonly protocol: string;
  /**
  * Acceptable values: `custom`, `home`, `other`, `work`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
}

export function userImsToTerraform(struct?: UserIms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_protocol: cdktf.stringToTerraform(struct!.customProtocol),
    custom_type: cdktf.stringToTerraform(struct!.customType),
    im: cdktf.stringToTerraform(struct!.im),
    primary: cdktf.booleanToTerraform(struct!.primary),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userImsToHclTerraform(struct?: UserIms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_protocol: {
      value: cdktf.stringToHclTerraform(struct!.customProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    im: {
      value: cdktf.stringToHclTerraform(struct!.im),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserImsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProtocol = this._customProtocol;
    }
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._im !== undefined) {
      hasAnyValues = true;
      internalValueResult.im = this._im;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customProtocol = undefined;
      this._customType = undefined;
      this._im = undefined;
      this._primary = undefined;
      this._protocol = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customProtocol = value.customProtocol;
      this._customType = value.customType;
      this._im = value.im;
      this._primary = value.primary;
      this._protocol = value.protocol;
      this._type = value.type;
    }
  }

  // custom_protocol - computed: false, optional: true, required: false
  private _customProtocol?: string; 
  public get customProtocol() {
    return this.getStringAttribute('custom_protocol');
  }
  public set customProtocol(value: string) {
    this._customProtocol = value;
  }
  public resetCustomProtocol() {
    this._customProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProtocolInput() {
    return this._customProtocol;
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // im - computed: false, optional: true, required: false
  private _im?: string; 
  public get im() {
    return this.getStringAttribute('im');
  }
  public set im(value: string) {
    this._im = value;
  }
  public resetIm() {
    this._im = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imInput() {
    return this._im;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
}

export class UserImsList extends cdktf.ComplexList {
  public internalValue? : UserIms[] | cdktf.IResolvable

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
  public get(index: number): UserImsOutputReference {
    return new UserImsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserKeywords {
  /**
  * Custom Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Each entry can have a type which indicates standard type of that entry. For example, keyword could be of type occupation or outlook. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. Acceptable values: `custom`, `mission`, `occupation`, `outlook`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * Keyword.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userKeywordsToTerraform(struct?: UserKeywords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_type: cdktf.stringToTerraform(struct!.customType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userKeywordsToHclTerraform(struct?: UserKeywords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserKeywordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserKeywords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserKeywords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customType = value.customType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserKeywordsList extends cdktf.ComplexList {
  public internalValue? : UserKeywords[] | cdktf.IResolvable

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
  public get(index: number): UserKeywordsOutputReference {
    return new UserKeywordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserLanguages {
  /**
  * Other language. A user can provide their own language name if there is no corresponding Google III language code. If this is set, LanguageCode can't be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_language User#custom_language}
  */
  readonly customLanguage?: string;
  /**
  * Defaults to `en`. Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#language_code User#language_code}
  */
  readonly languageCode?: string;
  /**
  * Defaults to `preferred`. If present, controls whether the specified languageCode is the user's preferred language. Allowed values are `preferred` and `not_preferred`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#preference User#preference}
  */
  readonly preference?: string;
}

export function userLanguagesToTerraform(struct?: UserLanguages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_language: cdktf.stringToTerraform(struct!.customLanguage),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    preference: cdktf.stringToTerraform(struct!.preference),
  }
}


export function userLanguagesToHclTerraform(struct?: UserLanguages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_language: {
      value: cdktf.stringToHclTerraform(struct!.customLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserLanguagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserLanguages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLanguage = this._customLanguage;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserLanguages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customLanguage = undefined;
      this._languageCode = undefined;
      this._preference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customLanguage = value.customLanguage;
      this._languageCode = value.languageCode;
      this._preference = value.preference;
    }
  }

  // custom_language - computed: false, optional: true, required: false
  private _customLanguage?: string; 
  public get customLanguage() {
    return this.getStringAttribute('custom_language');
  }
  public set customLanguage(value: string) {
    this._customLanguage = value;
  }
  public resetCustomLanguage() {
    this._customLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLanguageInput() {
    return this._customLanguage;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }
}

export class UserLanguagesList extends cdktf.ComplexList {
  public internalValue? : UserLanguages[] | cdktf.IResolvable

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
  public get(index: number): UserLanguagesOutputReference {
    return new UserLanguagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserLocations {
  /**
  * Textual location. This is most useful for display purposes to concisely describe the location. For example, Mountain View, CA or Near Seattle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#area User#area}
  */
  readonly area?: string;
  /**
  * Building identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#building_id User#building_id}
  */
  readonly buildingId?: string;
  /**
  * If the location type is custom, this property contains the custom value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Most specific textual code of individual desk location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#desk_code User#desk_code}
  */
  readonly deskCode?: string;
  /**
  * Floor name/number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#floor_name User#floor_name}
  */
  readonly floorName?: string;
  /**
  * Floor section. More specific location within the floor. For example, if a floor is divided into sections A, B, and C, this field would identify one of those values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#floor_section User#floor_section}
  */
  readonly floorSection?: string;
  /**
  * The location type. Acceptable values: `custom`, `default`, `desk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
}

export function userLocationsToTerraform(struct?: UserLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.stringToTerraform(struct!.area),
    building_id: cdktf.stringToTerraform(struct!.buildingId),
    custom_type: cdktf.stringToTerraform(struct!.customType),
    desk_code: cdktf.stringToTerraform(struct!.deskCode),
    floor_name: cdktf.stringToTerraform(struct!.floorName),
    floor_section: cdktf.stringToTerraform(struct!.floorSection),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userLocationsToHclTerraform(struct?: UserLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.stringToHclTerraform(struct!.area),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    building_id: {
      value: cdktf.stringToHclTerraform(struct!.buildingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desk_code: {
      value: cdktf.stringToHclTerraform(struct!.deskCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floor_name: {
      value: cdktf.stringToHclTerraform(struct!.floorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floor_section: {
      value: cdktf.stringToHclTerraform(struct!.floorSection),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._buildingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildingId = this._buildingId;
    }
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._deskCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deskCode = this._deskCode;
    }
    if (this._floorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.floorName = this._floorName;
    }
    if (this._floorSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.floorSection = this._floorSection;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._buildingId = undefined;
      this._customType = undefined;
      this._deskCode = undefined;
      this._floorName = undefined;
      this._floorSection = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._buildingId = value.buildingId;
      this._customType = value.customType;
      this._deskCode = value.deskCode;
      this._floorName = value.floorName;
      this._floorSection = value.floorSection;
      this._type = value.type;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // building_id - computed: false, optional: true, required: false
  private _buildingId?: string; 
  public get buildingId() {
    return this.getStringAttribute('building_id');
  }
  public set buildingId(value: string) {
    this._buildingId = value;
  }
  public resetBuildingId() {
    this._buildingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildingIdInput() {
    return this._buildingId;
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // desk_code - computed: false, optional: true, required: false
  private _deskCode?: string; 
  public get deskCode() {
    return this.getStringAttribute('desk_code');
  }
  public set deskCode(value: string) {
    this._deskCode = value;
  }
  public resetDeskCode() {
    this._deskCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deskCodeInput() {
    return this._deskCode;
  }

  // floor_name - computed: false, optional: true, required: false
  private _floorName?: string; 
  public get floorName() {
    return this.getStringAttribute('floor_name');
  }
  public set floorName(value: string) {
    this._floorName = value;
  }
  public resetFloorName() {
    this._floorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorNameInput() {
    return this._floorName;
  }

  // floor_section - computed: false, optional: true, required: false
  private _floorSection?: string; 
  public get floorSection() {
    return this.getStringAttribute('floor_section');
  }
  public set floorSection(value: string) {
    this._floorSection = value;
  }
  public resetFloorSection() {
    this._floorSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorSectionInput() {
    return this._floorSection;
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
}

export class UserLocationsList extends cdktf.ComplexList {
  public internalValue? : UserLocations[] | cdktf.IResolvable

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
  public get(index: number): UserLocationsOutputReference {
    return new UserLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserName {
  /**
  * The user's last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#family_name User#family_name}
  */
  readonly familyName: string;
  /**
  * The user's first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#given_name User#given_name}
  */
  readonly givenName?: string;
}

export function userNameToTerraform(struct?: UserNameOutputReference | UserName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_name: cdktf.stringToTerraform(struct!.familyName),
    given_name: cdktf.stringToTerraform(struct!.givenName),
  }
}


export function userNameToHclTerraform(struct?: UserNameOutputReference | UserName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._familyName = undefined;
      this._givenName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._familyName = value.familyName;
      this._givenName = value.givenName;
    }
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

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }
}
export interface UserOnDeleteDataTransfer {
  /**
  * Defaults to `FALSE`. Indicates if the user's calendar resources are released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#calendar_release_resources User#calendar_release_resources}
  */
  readonly calendarReleaseResources?: string;
  /**
  * Defaults to `true`. Indicates if the user's calendar data is transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#calendar_transfer User#calendar_transfer}
  */
  readonly calendarTransfer?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `SHARED`. The privacy level of the transferred Drive and Docs data. Acceptable values: `PRIVATE`, `SHARED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#drive_and_docs_privacy_level User#drive_and_docs_privacy_level}
  */
  readonly driveAndDocsPrivacyLevel?: string;
  /**
  * Defaults to `true`. Indicates if the user's Drive and Docs data is transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#drive_and_docs_transfer User#drive_and_docs_transfer}
  */
  readonly driveAndDocsTransfer?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `SHARED`. The privacy level of the transferred Looker Studio data. Acceptable values: `PRIVATE`, `SHARED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#looker_studio_privacy_level User#looker_studio_privacy_level}
  */
  readonly lookerStudioPrivacyLevel?: string;
  /**
  * Defaults to `true`. Indicates if the user's Looker Studio data is transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#looker_studio_transfer User#looker_studio_transfer}
  */
  readonly lookerStudioTransfer?: boolean | cdktf.IResolvable;
  /**
  * The email of the recipient of the transferred data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#new_data_owner_email User#new_data_owner_email}
  */
  readonly newDataOwnerEmail: string;
}

export function userOnDeleteDataTransferToTerraform(struct?: UserOnDeleteDataTransferOutputReference | UserOnDeleteDataTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calendar_release_resources: cdktf.stringToTerraform(struct!.calendarReleaseResources),
    calendar_transfer: cdktf.booleanToTerraform(struct!.calendarTransfer),
    drive_and_docs_privacy_level: cdktf.stringToTerraform(struct!.driveAndDocsPrivacyLevel),
    drive_and_docs_transfer: cdktf.booleanToTerraform(struct!.driveAndDocsTransfer),
    looker_studio_privacy_level: cdktf.stringToTerraform(struct!.lookerStudioPrivacyLevel),
    looker_studio_transfer: cdktf.booleanToTerraform(struct!.lookerStudioTransfer),
    new_data_owner_email: cdktf.stringToTerraform(struct!.newDataOwnerEmail),
  }
}


export function userOnDeleteDataTransferToHclTerraform(struct?: UserOnDeleteDataTransferOutputReference | UserOnDeleteDataTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calendar_release_resources: {
      value: cdktf.stringToHclTerraform(struct!.calendarReleaseResources),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calendar_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.calendarTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drive_and_docs_privacy_level: {
      value: cdktf.stringToHclTerraform(struct!.driveAndDocsPrivacyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drive_and_docs_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.driveAndDocsTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    looker_studio_privacy_level: {
      value: cdktf.stringToHclTerraform(struct!.lookerStudioPrivacyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    looker_studio_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.lookerStudioTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    new_data_owner_email: {
      value: cdktf.stringToHclTerraform(struct!.newDataOwnerEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserOnDeleteDataTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserOnDeleteDataTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calendarReleaseResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarReleaseResources = this._calendarReleaseResources;
    }
    if (this._calendarTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarTransfer = this._calendarTransfer;
    }
    if (this._driveAndDocsPrivacyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveAndDocsPrivacyLevel = this._driveAndDocsPrivacyLevel;
    }
    if (this._driveAndDocsTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveAndDocsTransfer = this._driveAndDocsTransfer;
    }
    if (this._lookerStudioPrivacyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerStudioPrivacyLevel = this._lookerStudioPrivacyLevel;
    }
    if (this._lookerStudioTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerStudioTransfer = this._lookerStudioTransfer;
    }
    if (this._newDataOwnerEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.newDataOwnerEmail = this._newDataOwnerEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserOnDeleteDataTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calendarReleaseResources = undefined;
      this._calendarTransfer = undefined;
      this._driveAndDocsPrivacyLevel = undefined;
      this._driveAndDocsTransfer = undefined;
      this._lookerStudioPrivacyLevel = undefined;
      this._lookerStudioTransfer = undefined;
      this._newDataOwnerEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calendarReleaseResources = value.calendarReleaseResources;
      this._calendarTransfer = value.calendarTransfer;
      this._driveAndDocsPrivacyLevel = value.driveAndDocsPrivacyLevel;
      this._driveAndDocsTransfer = value.driveAndDocsTransfer;
      this._lookerStudioPrivacyLevel = value.lookerStudioPrivacyLevel;
      this._lookerStudioTransfer = value.lookerStudioTransfer;
      this._newDataOwnerEmail = value.newDataOwnerEmail;
    }
  }

  // calendar_release_resources - computed: false, optional: true, required: false
  private _calendarReleaseResources?: string; 
  public get calendarReleaseResources() {
    return this.getStringAttribute('calendar_release_resources');
  }
  public set calendarReleaseResources(value: string) {
    this._calendarReleaseResources = value;
  }
  public resetCalendarReleaseResources() {
    this._calendarReleaseResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarReleaseResourcesInput() {
    return this._calendarReleaseResources;
  }

  // calendar_transfer - computed: false, optional: true, required: false
  private _calendarTransfer?: boolean | cdktf.IResolvable; 
  public get calendarTransfer() {
    return this.getBooleanAttribute('calendar_transfer');
  }
  public set calendarTransfer(value: boolean | cdktf.IResolvable) {
    this._calendarTransfer = value;
  }
  public resetCalendarTransfer() {
    this._calendarTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarTransferInput() {
    return this._calendarTransfer;
  }

  // drive_and_docs_privacy_level - computed: false, optional: true, required: false
  private _driveAndDocsPrivacyLevel?: string; 
  public get driveAndDocsPrivacyLevel() {
    return this.getStringAttribute('drive_and_docs_privacy_level');
  }
  public set driveAndDocsPrivacyLevel(value: string) {
    this._driveAndDocsPrivacyLevel = value;
  }
  public resetDriveAndDocsPrivacyLevel() {
    this._driveAndDocsPrivacyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveAndDocsPrivacyLevelInput() {
    return this._driveAndDocsPrivacyLevel;
  }

  // drive_and_docs_transfer - computed: false, optional: true, required: false
  private _driveAndDocsTransfer?: boolean | cdktf.IResolvable; 
  public get driveAndDocsTransfer() {
    return this.getBooleanAttribute('drive_and_docs_transfer');
  }
  public set driveAndDocsTransfer(value: boolean | cdktf.IResolvable) {
    this._driveAndDocsTransfer = value;
  }
  public resetDriveAndDocsTransfer() {
    this._driveAndDocsTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveAndDocsTransferInput() {
    return this._driveAndDocsTransfer;
  }

  // looker_studio_privacy_level - computed: false, optional: true, required: false
  private _lookerStudioPrivacyLevel?: string; 
  public get lookerStudioPrivacyLevel() {
    return this.getStringAttribute('looker_studio_privacy_level');
  }
  public set lookerStudioPrivacyLevel(value: string) {
    this._lookerStudioPrivacyLevel = value;
  }
  public resetLookerStudioPrivacyLevel() {
    this._lookerStudioPrivacyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerStudioPrivacyLevelInput() {
    return this._lookerStudioPrivacyLevel;
  }

  // looker_studio_transfer - computed: false, optional: true, required: false
  private _lookerStudioTransfer?: boolean | cdktf.IResolvable; 
  public get lookerStudioTransfer() {
    return this.getBooleanAttribute('looker_studio_transfer');
  }
  public set lookerStudioTransfer(value: boolean | cdktf.IResolvable) {
    this._lookerStudioTransfer = value;
  }
  public resetLookerStudioTransfer() {
    this._lookerStudioTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerStudioTransferInput() {
    return this._lookerStudioTransfer;
  }

  // new_data_owner_email - computed: false, optional: false, required: true
  private _newDataOwnerEmail?: string; 
  public get newDataOwnerEmail() {
    return this.getStringAttribute('new_data_owner_email');
  }
  public set newDataOwnerEmail(value: string) {
    this._newDataOwnerEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newDataOwnerEmailInput() {
    return this._newDataOwnerEmail;
  }
}
export interface UserOrganizations {
  /**
  * The cost center of the user's organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#cost_center User#cost_center}
  */
  readonly costCenter?: string;
  /**
  * If the value of type is custom, this property contains the custom value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Specifies the department within the organization, such as sales or engineering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#department User#department}
  */
  readonly department?: string;
  /**
  * The description of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * The domain the organization belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#domain User#domain}
  */
  readonly domain?: string;
  /**
  * The full-time equivalent millipercent within the organization (100000 = 100%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#full_time_equivalent User#full_time_equivalent}
  */
  readonly fullTimeEquivalent?: number;
  /**
  * The physical location of the organization. This does not need to be a fully qualified address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#location User#location}
  */
  readonly location?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * Indicates if this is the user's primary organization. A user may only have one primary organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Text string symbol of the organization. For example, the text symbol for Google is GOOG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#symbol User#symbol}
  */
  readonly symbol?: string;
  /**
  * The user's title within the organization. For example, member or engineer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#title User#title}
  */
  readonly title?: string;
  /**
  * The type of organization. Acceptable values: `domain_only`, `school`, `unknown`, `work`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
}

export function userOrganizationsToTerraform(struct?: UserOrganizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_center: cdktf.stringToTerraform(struct!.costCenter),
    custom_type: cdktf.stringToTerraform(struct!.customType),
    department: cdktf.stringToTerraform(struct!.department),
    description: cdktf.stringToTerraform(struct!.description),
    domain: cdktf.stringToTerraform(struct!.domain),
    full_time_equivalent: cdktf.numberToTerraform(struct!.fullTimeEquivalent),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userOrganizationsToHclTerraform(struct?: UserOrganizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_center: {
      value: cdktf.stringToHclTerraform(struct!.costCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_time_equivalent: {
      value: cdktf.numberToHclTerraform(struct!.fullTimeEquivalent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    symbol: {
      value: cdktf.stringToHclTerraform(struct!.symbol),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserOrganizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserOrganizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCenter = this._costCenter;
    }
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._department !== undefined) {
      hasAnyValues = true;
      internalValueResult.department = this._department;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._fullTimeEquivalent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullTimeEquivalent = this._fullTimeEquivalent;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserOrganizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCenter = undefined;
      this._customType = undefined;
      this._department = undefined;
      this._description = undefined;
      this._domain = undefined;
      this._fullTimeEquivalent = undefined;
      this._location = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._symbol = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCenter = value.costCenter;
      this._customType = value.customType;
      this._department = value.department;
      this._description = value.description;
      this._domain = value.domain;
      this._fullTimeEquivalent = value.fullTimeEquivalent;
      this._location = value.location;
      this._name = value.name;
      this._primary = value.primary;
      this._symbol = value.symbol;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // cost_center - computed: false, optional: true, required: false
  private _costCenter?: string; 
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }
  public set costCenter(value: string) {
    this._costCenter = value;
  }
  public resetCostCenter() {
    this._costCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCenterInput() {
    return this._costCenter;
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // full_time_equivalent - computed: false, optional: true, required: false
  private _fullTimeEquivalent?: number; 
  public get fullTimeEquivalent() {
    return this.getNumberAttribute('full_time_equivalent');
  }
  public set fullTimeEquivalent(value: number) {
    this._fullTimeEquivalent = value;
  }
  public resetFullTimeEquivalent() {
    this._fullTimeEquivalent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullTimeEquivalentInput() {
    return this._fullTimeEquivalent;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
}

export class UserOrganizationsList extends cdktf.ComplexList {
  public internalValue? : UserOrganizations[] | cdktf.IResolvable

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
  public get(index: number): UserOrganizationsOutputReference {
    return new UserOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserPhones {
  /**
  * If the phone number type is custom, this property contains the custom value and must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Indicates if this is the user's primary phone number. A user may only have one primary phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The type of phone number. Acceptable values: `assistant`, `callback`, `car`, `company_main` , `custom`, `grand_central`, `home`, `home_fax`, `isdn`, `main`, `mobile`, `other`, `other_fax`, `pager`, `radio`, `telex`, `tty_tdd`, `work`, `work_fax`, `work_mobile`, `work_pager`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * A human-readable phone number. It may be in any telephone number format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userPhonesToTerraform(struct?: UserPhones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_type: cdktf.stringToTerraform(struct!.customType),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userPhonesToHclTerraform(struct?: UserPhones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPhonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserPhones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPhones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customType = undefined;
      this._primary = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customType = value.customType;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserPhonesList extends cdktf.ComplexList {
  public internalValue? : UserPhones[] | cdktf.IResolvable

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
  public get(index: number): UserPhonesOutputReference {
    return new UserPhonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserPosixAccounts {
  /**
  * A POSIX account field identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#account_id User#account_id}
  */
  readonly accountId?: string;
  /**
  * The GECOS (user information) for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#gecos User#gecos}
  */
  readonly gecos?: string;
  /**
  * The default group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#gid User#gid}
  */
  readonly gid?: string;
  /**
  * The path to the home directory for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#home_directory User#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * The operating system type for this account. Acceptable values: `linux`, `unspecified`, `windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#operating_system_type User#operating_system_type}
  */
  readonly operatingSystemType?: string;
  /**
  * If this is user's primary account within the SystemId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The path to the login shell for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#shell User#shell}
  */
  readonly shell?: string;
  /**
  * System identifier for which account Username or Uid apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#system_id User#system_id}
  */
  readonly systemId?: string;
  /**
  * The POSIX compliant user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#uid User#uid}
  */
  readonly uid?: string;
  /**
  * The username of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#username User#username}
  */
  readonly username?: string;
}

export function userPosixAccountsToTerraform(struct?: UserPosixAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    gecos: cdktf.stringToTerraform(struct!.gecos),
    gid: cdktf.stringToTerraform(struct!.gid),
    home_directory: cdktf.stringToTerraform(struct!.homeDirectory),
    operating_system_type: cdktf.stringToTerraform(struct!.operatingSystemType),
    primary: cdktf.booleanToTerraform(struct!.primary),
    shell: cdktf.stringToTerraform(struct!.shell),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    uid: cdktf.stringToTerraform(struct!.uid),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function userPosixAccountsToHclTerraform(struct?: UserPosixAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gecos: {
      value: cdktf.stringToHclTerraform(struct!.gecos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    home_directory: {
      value: cdktf.stringToHclTerraform(struct!.homeDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_type: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPosixAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserPosixAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._gecos !== undefined) {
      hasAnyValues = true;
      internalValueResult.gecos = this._gecos;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._homeDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDirectory = this._homeDirectory;
    }
    if (this._operatingSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemType = this._operatingSystemType;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPosixAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._gecos = undefined;
      this._gid = undefined;
      this._homeDirectory = undefined;
      this._operatingSystemType = undefined;
      this._primary = undefined;
      this._shell = undefined;
      this._systemId = undefined;
      this._uid = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._gecos = value.gecos;
      this._gid = value.gid;
      this._homeDirectory = value.homeDirectory;
      this._operatingSystemType = value.operatingSystemType;
      this._primary = value.primary;
      this._shell = value.shell;
      this._systemId = value.systemId;
      this._uid = value.uid;
      this._username = value.username;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // gecos - computed: false, optional: true, required: false
  private _gecos?: string; 
  public get gecos() {
    return this.getStringAttribute('gecos');
  }
  public set gecos(value: string) {
    this._gecos = value;
  }
  public resetGecos() {
    this._gecos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gecosInput() {
    return this._gecos;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // operating_system_type - computed: false, optional: true, required: false
  private _operatingSystemType?: string; 
  public get operatingSystemType() {
    return this.getStringAttribute('operating_system_type');
  }
  public set operatingSystemType(value: string) {
    this._operatingSystemType = value;
  }
  public resetOperatingSystemType() {
    this._operatingSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemTypeInput() {
    return this._operatingSystemType;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class UserPosixAccountsList extends cdktf.ComplexList {
  public internalValue? : UserPosixAccounts[] | cdktf.IResolvable

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
  public get(index: number): UserPosixAccountsOutputReference {
    return new UserPosixAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRelations {
  /**
  * If the value of type is custom, this property contains the custom type string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * The type of relation. Acceptable values: `admin_assistant`, `assistant`, `brother`, `child`, `custom`, `domestic_partner`, `dotted_line_manager`, `exec_assistant`, `father`, `friend`, `manager`, `mother`, `parent`, `partner`, `referred_by`, `relative`, `sister`, `spouse`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * The name of the person the user is related to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userRelationsToTerraform(struct?: UserRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_type: cdktf.stringToTerraform(struct!.customType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userRelationsToHclTerraform(struct?: UserRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRelations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRelations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customType = value.customType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserRelationsList extends cdktf.ComplexList {
  public internalValue? : UserRelations[] | cdktf.IResolvable

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
  public get(index: number): UserRelationsOutputReference {
    return new UserRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSshPublicKeys {
  /**
  * An expiration time in microseconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#expiration_time_usec User#expiration_time_usec}
  */
  readonly expirationTimeUsec?: string;
  /**
  * An SSH public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#key User#key}
  */
  readonly key: string;
}

export function userSshPublicKeysToTerraform(struct?: UserSshPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time_usec: cdktf.stringToTerraform(struct!.expirationTimeUsec),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function userSshPublicKeysToHclTerraform(struct?: UserSshPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time_usec: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimeUsec),
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

export class UserSshPublicKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserSshPublicKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTimeUsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimeUsec = this._expirationTimeUsec;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSshPublicKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTimeUsec = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTimeUsec = value.expirationTimeUsec;
      this._key = value.key;
    }
  }

  // expiration_time_usec - computed: false, optional: true, required: false
  private _expirationTimeUsec?: string; 
  public get expirationTimeUsec() {
    return this.getStringAttribute('expiration_time_usec');
  }
  public set expirationTimeUsec(value: string) {
    this._expirationTimeUsec = value;
  }
  public resetExpirationTimeUsec() {
    this._expirationTimeUsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUsecInput() {
    return this._expirationTimeUsec;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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
}

export class UserSshPublicKeysList extends cdktf.ComplexList {
  public internalValue? : UserSshPublicKeys[] | cdktf.IResolvable

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
  public get(index: number): UserSshPublicKeysOutputReference {
    return new UserSshPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#create User#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#delete User#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#update User#update}
  */
  readonly update?: string;
}

export function userTimeoutsToTerraform(struct?: UserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function userTimeoutsToHclTerraform(struct?: UserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface UserWebsites {
  /**
  * The custom type. Only used if the type is custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * If this is user's primary website or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The type or purpose of the website. For example, a website could be labeled as home or blog. Alternatively, an entry can have a custom type Custom types must have a customType value. Acceptable values: `app_install_page`, `blog`, `custom`, `ftp` , `home`, `home_page`, `other`, `profile`, `reservations`, `resume`, `work`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * The URL of the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userWebsitesToTerraform(struct?: UserWebsites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_type: cdktf.stringToTerraform(struct!.customType),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userWebsitesToHclTerraform(struct?: UserWebsites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserWebsitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserWebsites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserWebsites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customType = undefined;
      this._primary = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customType = value.customType;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserWebsitesList extends cdktf.ComplexList {
  public internalValue? : UserWebsites[] | cdktf.IResolvable

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
  public get(index: number): UserWebsitesOutputReference {
    return new UserWebsitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user googleworkspace_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/user googleworkspace_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_user',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._archived = config.archived;
    this._changePasswordAtNextLogin = config.changePasswordAtNextLogin;
    this._hashFunction = config.hashFunction;
    this._includeInGlobalAddressList = config.includeInGlobalAddressList;
    this._ipAllowlist = config.ipAllowlist;
    this._isAdmin = config.isAdmin;
    this._orgUnitPath = config.orgUnitPath;
    this._password = config.password;
    this._primaryEmail = config.primaryEmail;
    this._recoveryEmail = config.recoveryEmail;
    this._recoveryPhone = config.recoveryPhone;
    this._suspended = config.suspended;
    this._addresses.internalValue = config.addresses;
    this._customSchemas.internalValue = config.customSchemas;
    this._emails.internalValue = config.emails;
    this._externalIds.internalValue = config.externalIds;
    this._ims.internalValue = config.ims;
    this._keywords.internalValue = config.keywords;
    this._languages.internalValue = config.languages;
    this._locations.internalValue = config.locations;
    this._name.internalValue = config.name;
    this._onDeleteDataTransfer.internalValue = config.onDeleteDataTransfer;
    this._organizations.internalValue = config.organizations;
    this._phones.internalValue = config.phones;
    this._posixAccounts.internalValue = config.posixAccounts;
    this._relations.internalValue = config.relations;
    this._sshPublicKeys.internalValue = config.sshPublicKeys;
    this._timeouts.internalValue = config.timeouts;
    this._websites.internalValue = config.websites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreed_to_terms - computed: true, optional: false, required: false
  public get agreedToTerms() {
    return this.getBooleanAttribute('agreed_to_terms');
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // change_password_at_next_login - computed: false, optional: true, required: false
  private _changePasswordAtNextLogin?: boolean | cdktf.IResolvable; 
  public get changePasswordAtNextLogin() {
    return this.getBooleanAttribute('change_password_at_next_login');
  }
  public set changePasswordAtNextLogin(value: boolean | cdktf.IResolvable) {
    this._changePasswordAtNextLogin = value;
  }
  public resetChangePasswordAtNextLogin() {
    this._changePasswordAtNextLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordAtNextLoginInput() {
    return this._changePasswordAtNextLogin;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // deletion_time - computed: true, optional: false, required: false
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hash_function - computed: false, optional: true, required: false
  private _hashFunction?: string; 
  public get hashFunction() {
    return this.getStringAttribute('hash_function');
  }
  public set hashFunction(value: string) {
    this._hashFunction = value;
  }
  public resetHashFunction() {
    this._hashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFunctionInput() {
    return this._hashFunction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_in_global_address_list - computed: false, optional: true, required: false
  private _includeInGlobalAddressList?: boolean | cdktf.IResolvable; 
  public get includeInGlobalAddressList() {
    return this.getBooleanAttribute('include_in_global_address_list');
  }
  public set includeInGlobalAddressList(value: boolean | cdktf.IResolvable) {
    this._includeInGlobalAddressList = value;
  }
  public resetIncludeInGlobalAddressList() {
    this._includeInGlobalAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInGlobalAddressListInput() {
    return this._includeInGlobalAddressList;
  }

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist?: boolean | cdktf.IResolvable; 
  public get ipAllowlist() {
    return this.getBooleanAttribute('ip_allowlist');
  }
  public set ipAllowlist(value: boolean | cdktf.IResolvable) {
    this._ipAllowlist = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist;
  }

  // is_admin - computed: true, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // is_delegated_admin - computed: true, optional: false, required: false
  public get isDelegatedAdmin() {
    return this.getBooleanAttribute('is_delegated_admin');
  }

  // is_enforced_in_2_step_verification - computed: true, optional: false, required: false
  public get isEnforcedIn2StepVerification() {
    return this.getBooleanAttribute('is_enforced_in_2_step_verification');
  }

  // is_enrolled_in_2_step_verification - computed: true, optional: false, required: false
  public get isEnrolledIn2StepVerification() {
    return this.getBooleanAttribute('is_enrolled_in_2_step_verification');
  }

  // is_mailbox_setup - computed: true, optional: false, required: false
  public get isMailboxSetup() {
    return this.getBooleanAttribute('is_mailbox_setup');
  }

  // last_login_time - computed: true, optional: false, required: false
  public get lastLoginTime() {
    return this.getStringAttribute('last_login_time');
  }

  // non_editable_aliases - computed: true, optional: false, required: false
  public get nonEditableAliases() {
    return this.getListAttribute('non_editable_aliases');
  }

  // org_unit_path - computed: true, optional: true, required: false
  private _orgUnitPath?: string; 
  public get orgUnitPath() {
    return this.getStringAttribute('org_unit_path');
  }
  public set orgUnitPath(value: string) {
    this._orgUnitPath = value;
  }
  public resetOrgUnitPath() {
    this._orgUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitPathInput() {
    return this._orgUnitPath;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // primary_email - computed: false, optional: false, required: true
  private _primaryEmail?: string; 
  public get primaryEmail() {
    return this.getStringAttribute('primary_email');
  }
  public set primaryEmail(value: string) {
    this._primaryEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // recovery_email - computed: false, optional: true, required: false
  private _recoveryEmail?: string; 
  public get recoveryEmail() {
    return this.getStringAttribute('recovery_email');
  }
  public set recoveryEmail(value: string) {
    this._recoveryEmail = value;
  }
  public resetRecoveryEmail() {
    this._recoveryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEmailInput() {
    return this._recoveryEmail;
  }

  // recovery_phone - computed: false, optional: true, required: false
  private _recoveryPhone?: string; 
  public get recoveryPhone() {
    return this.getStringAttribute('recovery_phone');
  }
  public set recoveryPhone(value: string) {
    this._recoveryPhone = value;
  }
  public resetRecoveryPhone() {
    this._recoveryPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPhoneInput() {
    return this._recoveryPhone;
  }

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // suspension_reason - computed: true, optional: false, required: false
  public get suspensionReason() {
    return this.getStringAttribute('suspension_reason');
  }

  // thumbnail_photo_etag - computed: true, optional: false, required: false
  public get thumbnailPhotoEtag() {
    return this.getStringAttribute('thumbnail_photo_etag');
  }

  // thumbnail_photo_url - computed: true, optional: false, required: false
  public get thumbnailPhotoUrl() {
    return this.getStringAttribute('thumbnail_photo_url');
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new UserAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: UserAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // custom_schemas - computed: false, optional: true, required: false
  private _customSchemas = new UserCustomSchemasList(this, "custom_schemas", false);
  public get customSchemas() {
    return this._customSchemas;
  }
  public putCustomSchemas(value: UserCustomSchemas[] | cdktf.IResolvable) {
    this._customSchemas.internalValue = value;
  }
  public resetCustomSchemas() {
    this._customSchemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSchemasInput() {
    return this._customSchemas.internalValue;
  }

  // emails - computed: false, optional: true, required: false
  private _emails = new UserEmailsList(this, "emails", false);
  public get emails() {
    return this._emails;
  }
  public putEmails(value: UserEmails[] | cdktf.IResolvable) {
    this._emails.internalValue = value;
  }
  public resetEmails() {
    this._emails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails.internalValue;
  }

  // external_ids - computed: false, optional: true, required: false
  private _externalIds = new UserExternalIdsList(this, "external_ids", false);
  public get externalIds() {
    return this._externalIds;
  }
  public putExternalIds(value: UserExternalIds[] | cdktf.IResolvable) {
    this._externalIds.internalValue = value;
  }
  public resetExternalIds() {
    this._externalIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdsInput() {
    return this._externalIds.internalValue;
  }

  // ims - computed: false, optional: true, required: false
  private _ims = new UserImsList(this, "ims", false);
  public get ims() {
    return this._ims;
  }
  public putIms(value: UserIms[] | cdktf.IResolvable) {
    this._ims.internalValue = value;
  }
  public resetIms() {
    this._ims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsInput() {
    return this._ims.internalValue;
  }

  // keywords - computed: false, optional: true, required: false
  private _keywords = new UserKeywordsList(this, "keywords", false);
  public get keywords() {
    return this._keywords;
  }
  public putKeywords(value: UserKeywords[] | cdktf.IResolvable) {
    this._keywords.internalValue = value;
  }
  public resetKeywords() {
    this._keywords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords.internalValue;
  }

  // languages - computed: false, optional: true, required: false
  private _languages = new UserLanguagesList(this, "languages", false);
  public get languages() {
    return this._languages;
  }
  public putLanguages(value: UserLanguages[] | cdktf.IResolvable) {
    this._languages.internalValue = value;
  }
  public resetLanguages() {
    this._languages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new UserLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: UserLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name = new UserNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: UserName) {
    this._name.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // on_delete_data_transfer - computed: false, optional: true, required: false
  private _onDeleteDataTransfer = new UserOnDeleteDataTransferOutputReference(this, "on_delete_data_transfer");
  public get onDeleteDataTransfer() {
    return this._onDeleteDataTransfer;
  }
  public putOnDeleteDataTransfer(value: UserOnDeleteDataTransfer) {
    this._onDeleteDataTransfer.internalValue = value;
  }
  public resetOnDeleteDataTransfer() {
    this._onDeleteDataTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteDataTransferInput() {
    return this._onDeleteDataTransfer.internalValue;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations = new UserOrganizationsList(this, "organizations", false);
  public get organizations() {
    return this._organizations;
  }
  public putOrganizations(value: UserOrganizations[] | cdktf.IResolvable) {
    this._organizations.internalValue = value;
  }
  public resetOrganizations() {
    this._organizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations.internalValue;
  }

  // phones - computed: false, optional: true, required: false
  private _phones = new UserPhonesList(this, "phones", false);
  public get phones() {
    return this._phones;
  }
  public putPhones(value: UserPhones[] | cdktf.IResolvable) {
    this._phones.internalValue = value;
  }
  public resetPhones() {
    this._phones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phonesInput() {
    return this._phones.internalValue;
  }

  // posix_accounts - computed: false, optional: true, required: false
  private _posixAccounts = new UserPosixAccountsList(this, "posix_accounts", false);
  public get posixAccounts() {
    return this._posixAccounts;
  }
  public putPosixAccounts(value: UserPosixAccounts[] | cdktf.IResolvable) {
    this._posixAccounts.internalValue = value;
  }
  public resetPosixAccounts() {
    this._posixAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixAccountsInput() {
    return this._posixAccounts.internalValue;
  }

  // relations - computed: false, optional: true, required: false
  private _relations = new UserRelationsList(this, "relations", false);
  public get relations() {
    return this._relations;
  }
  public putRelations(value: UserRelations[] | cdktf.IResolvable) {
    this._relations.internalValue = value;
  }
  public resetRelations() {
    this._relations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys = new UserSshPublicKeysList(this, "ssh_public_keys", false);
  public get sshPublicKeys() {
    return this._sshPublicKeys;
  }
  public putSshPublicKeys(value: UserSshPublicKeys[] | cdktf.IResolvable) {
    this._sshPublicKeys.internalValue = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // websites - computed: false, optional: true, required: false
  private _websites = new UserWebsitesList(this, "websites", false);
  public get websites() {
    return this._websites;
  }
  public putWebsites(value: UserWebsites[] | cdktf.IResolvable) {
    this._websites.internalValue = value;
  }
  public resetWebsites() {
    this._websites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websitesInput() {
    return this._websites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      archived: cdktf.booleanToTerraform(this._archived),
      change_password_at_next_login: cdktf.booleanToTerraform(this._changePasswordAtNextLogin),
      hash_function: cdktf.stringToTerraform(this._hashFunction),
      include_in_global_address_list: cdktf.booleanToTerraform(this._includeInGlobalAddressList),
      ip_allowlist: cdktf.booleanToTerraform(this._ipAllowlist),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      org_unit_path: cdktf.stringToTerraform(this._orgUnitPath),
      password: cdktf.stringToTerraform(this._password),
      primary_email: cdktf.stringToTerraform(this._primaryEmail),
      recovery_email: cdktf.stringToTerraform(this._recoveryEmail),
      recovery_phone: cdktf.stringToTerraform(this._recoveryPhone),
      suspended: cdktf.booleanToTerraform(this._suspended),
      addresses: cdktf.listMapper(userAddressesToTerraform, true)(this._addresses.internalValue),
      custom_schemas: cdktf.listMapper(userCustomSchemasToTerraform, true)(this._customSchemas.internalValue),
      emails: cdktf.listMapper(userEmailsToTerraform, true)(this._emails.internalValue),
      external_ids: cdktf.listMapper(userExternalIdsToTerraform, true)(this._externalIds.internalValue),
      ims: cdktf.listMapper(userImsToTerraform, true)(this._ims.internalValue),
      keywords: cdktf.listMapper(userKeywordsToTerraform, true)(this._keywords.internalValue),
      languages: cdktf.listMapper(userLanguagesToTerraform, true)(this._languages.internalValue),
      locations: cdktf.listMapper(userLocationsToTerraform, true)(this._locations.internalValue),
      name: userNameToTerraform(this._name.internalValue),
      on_delete_data_transfer: userOnDeleteDataTransferToTerraform(this._onDeleteDataTransfer.internalValue),
      organizations: cdktf.listMapper(userOrganizationsToTerraform, true)(this._organizations.internalValue),
      phones: cdktf.listMapper(userPhonesToTerraform, true)(this._phones.internalValue),
      posix_accounts: cdktf.listMapper(userPosixAccountsToTerraform, true)(this._posixAccounts.internalValue),
      relations: cdktf.listMapper(userRelationsToTerraform, true)(this._relations.internalValue),
      ssh_public_keys: cdktf.listMapper(userSshPublicKeysToTerraform, true)(this._sshPublicKeys.internalValue),
      timeouts: userTimeoutsToTerraform(this._timeouts.internalValue),
      websites: cdktf.listMapper(userWebsitesToTerraform, true)(this._websites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      change_password_at_next_login: {
        value: cdktf.booleanToHclTerraform(this._changePasswordAtNextLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_function: {
        value: cdktf.stringToHclTerraform(this._hashFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_global_address_list: {
        value: cdktf.booleanToHclTerraform(this._includeInGlobalAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_allowlist: {
        value: cdktf.booleanToHclTerraform(this._ipAllowlist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_unit_path: {
        value: cdktf.stringToHclTerraform(this._orgUnitPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_email: {
        value: cdktf.stringToHclTerraform(this._primaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_email: {
        value: cdktf.stringToHclTerraform(this._recoveryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_phone: {
        value: cdktf.stringToHclTerraform(this._recoveryPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      addresses: {
        value: cdktf.listMapperHcl(userAddressesToHclTerraform, true)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAddressesList",
      },
      custom_schemas: {
        value: cdktf.listMapperHcl(userCustomSchemasToHclTerraform, true)(this._customSchemas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserCustomSchemasList",
      },
      emails: {
        value: cdktf.listMapperHcl(userEmailsToHclTerraform, true)(this._emails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserEmailsList",
      },
      external_ids: {
        value: cdktf.listMapperHcl(userExternalIdsToHclTerraform, true)(this._externalIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserExternalIdsList",
      },
      ims: {
        value: cdktf.listMapperHcl(userImsToHclTerraform, true)(this._ims.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserImsList",
      },
      keywords: {
        value: cdktf.listMapperHcl(userKeywordsToHclTerraform, true)(this._keywords.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserKeywordsList",
      },
      languages: {
        value: cdktf.listMapperHcl(userLanguagesToHclTerraform, true)(this._languages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserLanguagesList",
      },
      locations: {
        value: cdktf.listMapperHcl(userLocationsToHclTerraform, true)(this._locations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserLocationsList",
      },
      name: {
        value: userNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserNameList",
      },
      on_delete_data_transfer: {
        value: userOnDeleteDataTransferToHclTerraform(this._onDeleteDataTransfer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserOnDeleteDataTransferList",
      },
      organizations: {
        value: cdktf.listMapperHcl(userOrganizationsToHclTerraform, true)(this._organizations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserOrganizationsList",
      },
      phones: {
        value: cdktf.listMapperHcl(userPhonesToHclTerraform, true)(this._phones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserPhonesList",
      },
      posix_accounts: {
        value: cdktf.listMapperHcl(userPosixAccountsToHclTerraform, true)(this._posixAccounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserPosixAccountsList",
      },
      relations: {
        value: cdktf.listMapperHcl(userRelationsToHclTerraform, true)(this._relations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRelationsList",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(userSshPublicKeysToHclTerraform, true)(this._sshPublicKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserSshPublicKeysList",
      },
      timeouts: {
        value: userTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserTimeouts",
      },
      websites: {
        value: cdktf.listMapperHcl(userWebsitesToHclTerraform, true)(this._websites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserWebsitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
