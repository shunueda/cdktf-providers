// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable ACD auto-answer. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#acd_auto_answer User#acd_auto_answer}
  */
  readonly acdAutoAnswer?: boolean | cdktf.IResolvable;
  /**
  * The address settings for this user. If not set, this resource will not manage addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#addresses User#addresses}
  */
  readonly addresses?: UserAddresses[] | cdktf.IResolvable;
  /**
  * Certifications for this user. If not set, this resource will not manage certifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#certifications User#certifications}
  */
  readonly certifications?: string[];
  /**
  * User's department.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#department User#department}
  */
  readonly department?: string;
  /**
  * The division to which this user will belong. If not set, the home division will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#division_id User#division_id}
  */
  readonly divisionId?: string;
  /**
  * User's primary email and username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * The employer info for this user. If not set, this resource will not manage employer info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#employer_info User#employer_info}
  */
  readonly employerInfo?: UserEmployerInfo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user placement at each site location. If not set, this resource will not manage user locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#locations User#locations}
  */
  readonly locations?: UserLocations[] | cdktf.IResolvable;
  /**
  * User ID of this user's manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#manager User#manager}
  */
  readonly manager?: string;
  /**
  * User's full name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * User's password. If specified, this is only set on user create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Profile skills for this user. If not set, this resource will not manage profile skills.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#profile_skills User#profile_skills}
  */
  readonly profileSkills?: string[];
  /**
  * Languages and proficiencies for this user. If not set, this resource will not manage user languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#routing_languages User#routing_languages}
  */
  readonly routingLanguages?: UserRoutingLanguages[] | cdktf.IResolvable;
  /**
  * Skills and proficiencies for this user. If not set, this resource will not manage user skills.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#routing_skills User#routing_skills}
  */
  readonly routingSkills?: UserRoutingSkills[] | cdktf.IResolvable;
  /**
  * The routing utilization settings for this user. If empty list, the org default settings are used. If not set, this resource will not manage the users's utilization settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#routing_utilization User#routing_utilization}
  */
  readonly routingUtilization?: UserRoutingUtilization[] | cdktf.IResolvable;
  /**
  * User's state (active | inactive). Default is 'active'. Defaults to `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#state User#state}
  */
  readonly state?: string;
  /**
  * User's title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#title User#title}
  */
  readonly title?: string;
  /**
  * voicemail_userpolicies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#voicemail_userpolicies User#voicemail_userpolicies}
  */
  readonly voicemailUserpolicies?: UserVoicemailUserpolicies;
}
export interface UserAddressesOtherEmails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#address User#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userAddressesOtherEmailsToTerraform(struct?: UserAddressesOtherEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userAddressesOtherEmailsToHclTerraform(struct?: UserAddressesOtherEmails | cdktf.IResolvable): any {
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

export class UserAddressesOtherEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAddressesOtherEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAddressesOtherEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class UserAddressesOtherEmailsList extends cdktf.ComplexList {
  public internalValue? : UserAddressesOtherEmails[] | cdktf.IResolvable

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
  public get(index: number): UserAddressesOtherEmailsOutputReference {
    return new UserAddressesOtherEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserAddressesPhoneNumbers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#extension User#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#extension_pool_id User#extension_pool_id}
  */
  readonly extensionPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#media_type User#media_type}
  */
  readonly mediaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#number User#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userAddressesPhoneNumbersToTerraform(struct?: UserAddressesPhoneNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension: cdktf.stringToTerraform(struct!.extension),
    extension_pool_id: cdktf.stringToTerraform(struct!.extensionPoolId),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    number: cdktf.stringToTerraform(struct!.number),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userAddressesPhoneNumbersToHclTerraform(struct?: UserAddressesPhoneNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension: {
      value: cdktf.stringToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.extensionPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
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

export class UserAddressesPhoneNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAddressesPhoneNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    if (this._extensionPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionPoolId = this._extensionPoolId;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAddressesPhoneNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extension = undefined;
      this._extensionPoolId = undefined;
      this._mediaType = undefined;
      this._number = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extension = value.extension;
      this._extensionPoolId = value.extensionPoolId;
      this._mediaType = value.mediaType;
      this._number = value.number;
      this._type = value.type;
    }
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // extension_pool_id - computed: false, optional: true, required: false
  private _extensionPoolId?: string; 
  public get extensionPoolId() {
    return this.getStringAttribute('extension_pool_id');
  }
  public set extensionPoolId(value: string) {
    this._extensionPoolId = value;
  }
  public resetExtensionPoolId() {
    this._extensionPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionPoolIdInput() {
    return this._extensionPoolId;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class UserAddressesPhoneNumbersList extends cdktf.ComplexList {
  public internalValue? : UserAddressesPhoneNumbers[] | cdktf.IResolvable

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
  public get(index: number): UserAddressesPhoneNumbersOutputReference {
    return new UserAddressesPhoneNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#other_emails User#other_emails}
  */
  readonly otherEmails?: UserAddressesOtherEmails[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#phone_numbers User#phone_numbers}
  */
  readonly phoneNumbers?: UserAddressesPhoneNumbers[] | cdktf.IResolvable;
}

export function userAddressesToTerraform(struct?: UserAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_emails: cdktf.listMapper(userAddressesOtherEmailsToTerraform, false)(struct!.otherEmails),
    phone_numbers: cdktf.listMapper(userAddressesPhoneNumbersToTerraform, false)(struct!.phoneNumbers),
  }
}


export function userAddressesToHclTerraform(struct?: UserAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_emails: {
      value: cdktf.listMapperHcl(userAddressesOtherEmailsToHclTerraform, false)(struct!.otherEmails),
      isBlock: true,
      type: "set",
      storageClassType: "UserAddressesOtherEmailsList",
    },
    phone_numbers: {
      value: cdktf.listMapperHcl(userAddressesPhoneNumbersToHclTerraform, false)(struct!.phoneNumbers),
      isBlock: true,
      type: "set",
      storageClassType: "UserAddressesPhoneNumbersList",
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
    if (this._otherEmails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherEmails = this._otherEmails?.internalValue;
    }
    if (this._phoneNumbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumbers = this._phoneNumbers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._otherEmails.internalValue = undefined;
      this._phoneNumbers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._otherEmails.internalValue = value.otherEmails;
      this._phoneNumbers.internalValue = value.phoneNumbers;
    }
  }

  // other_emails - computed: false, optional: true, required: false
  private _otherEmails = new UserAddressesOtherEmailsList(this, "other_emails", true);
  public get otherEmails() {
    return this._otherEmails;
  }
  public putOtherEmails(value: UserAddressesOtherEmails[] | cdktf.IResolvable) {
    this._otherEmails.internalValue = value;
  }
  public resetOtherEmails() {
    this._otherEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherEmailsInput() {
    return this._otherEmails.internalValue;
  }

  // phone_numbers - computed: false, optional: true, required: false
  private _phoneNumbers = new UserAddressesPhoneNumbersList(this, "phone_numbers", true);
  public get phoneNumbers() {
    return this._phoneNumbers;
  }
  public putPhoneNumbers(value: UserAddressesPhoneNumbers[] | cdktf.IResolvable) {
    this._phoneNumbers.internalValue = value;
  }
  public resetPhoneNumbers() {
    this._phoneNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumbersInput() {
    return this._phoneNumbers.internalValue;
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
export interface UserEmployerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#date_hire User#date_hire}
  */
  readonly dateHire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#employee_id User#employee_id}
  */
  readonly employeeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#employee_type User#employee_type}
  */
  readonly employeeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#official_name User#official_name}
  */
  readonly officialName?: string;
}

export function userEmployerInfoToTerraform(struct?: UserEmployerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_hire: cdktf.stringToTerraform(struct!.dateHire),
    employee_id: cdktf.stringToTerraform(struct!.employeeId),
    employee_type: cdktf.stringToTerraform(struct!.employeeType),
    official_name: cdktf.stringToTerraform(struct!.officialName),
  }
}


export function userEmployerInfoToHclTerraform(struct?: UserEmployerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_hire: {
      value: cdktf.stringToHclTerraform(struct!.dateHire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    employee_id: {
      value: cdktf.stringToHclTerraform(struct!.employeeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    employee_type: {
      value: cdktf.stringToHclTerraform(struct!.employeeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    official_name: {
      value: cdktf.stringToHclTerraform(struct!.officialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserEmployerInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserEmployerInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateHire !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHire = this._dateHire;
    }
    if (this._employeeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.employeeId = this._employeeId;
    }
    if (this._employeeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.employeeType = this._employeeType;
    }
    if (this._officialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.officialName = this._officialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserEmployerInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateHire = undefined;
      this._employeeId = undefined;
      this._employeeType = undefined;
      this._officialName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateHire = value.dateHire;
      this._employeeId = value.employeeId;
      this._employeeType = value.employeeType;
      this._officialName = value.officialName;
    }
  }

  // date_hire - computed: true, optional: true, required: false
  private _dateHire?: string; 
  public get dateHire() {
    return this.getStringAttribute('date_hire');
  }
  public set dateHire(value: string) {
    this._dateHire = value;
  }
  public resetDateHire() {
    this._dateHire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHireInput() {
    return this._dateHire;
  }

  // employee_id - computed: true, optional: true, required: false
  private _employeeId?: string; 
  public get employeeId() {
    return this.getStringAttribute('employee_id');
  }
  public set employeeId(value: string) {
    this._employeeId = value;
  }
  public resetEmployeeId() {
    this._employeeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeIdInput() {
    return this._employeeId;
  }

  // employee_type - computed: true, optional: true, required: false
  private _employeeType?: string; 
  public get employeeType() {
    return this.getStringAttribute('employee_type');
  }
  public set employeeType(value: string) {
    this._employeeType = value;
  }
  public resetEmployeeType() {
    this._employeeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeTypeInput() {
    return this._employeeType;
  }

  // official_name - computed: true, optional: true, required: false
  private _officialName?: string; 
  public get officialName() {
    return this.getStringAttribute('official_name');
  }
  public set officialName(value: string) {
    this._officialName = value;
  }
  public resetOfficialName() {
    this._officialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officialNameInput() {
    return this._officialName;
  }
}

export class UserEmployerInfoList extends cdktf.ComplexList {
  public internalValue? : UserEmployerInfo[] | cdktf.IResolvable

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
  public get(index: number): UserEmployerInfoOutputReference {
    return new UserEmployerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#location_id User#location_id}
  */
  readonly locationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#notes User#notes}
  */
  readonly notes?: string;
}

export function userLocationsToTerraform(struct?: UserLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_id: cdktf.stringToTerraform(struct!.locationId),
    notes: cdktf.stringToTerraform(struct!.notes),
  }
}


export function userLocationsToHclTerraform(struct?: UserLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
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
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationId = undefined;
      this._notes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationId = value.locationId;
      this._notes = value.notes;
    }
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
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
export interface UserRoutingLanguages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#language_id User#language_id}
  */
  readonly languageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#proficiency User#proficiency}
  */
  readonly proficiency?: number;
}

export function userRoutingLanguagesToTerraform(struct?: UserRoutingLanguages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_id: cdktf.stringToTerraform(struct!.languageId),
    proficiency: cdktf.numberToTerraform(struct!.proficiency),
  }
}


export function userRoutingLanguagesToHclTerraform(struct?: UserRoutingLanguages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language_id: {
      value: cdktf.stringToHclTerraform(struct!.languageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proficiency: {
      value: cdktf.numberToHclTerraform(struct!.proficiency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingLanguagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingLanguages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageId = this._languageId;
    }
    if (this._proficiency !== undefined) {
      hasAnyValues = true;
      internalValueResult.proficiency = this._proficiency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingLanguages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._languageId = undefined;
      this._proficiency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._languageId = value.languageId;
      this._proficiency = value.proficiency;
    }
  }

  // language_id - computed: true, optional: true, required: false
  private _languageId?: string; 
  public get languageId() {
    return this.getStringAttribute('language_id');
  }
  public set languageId(value: string) {
    this._languageId = value;
  }
  public resetLanguageId() {
    this._languageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdInput() {
    return this._languageId;
  }

  // proficiency - computed: true, optional: true, required: false
  private _proficiency?: number; 
  public get proficiency() {
    return this.getNumberAttribute('proficiency');
  }
  public set proficiency(value: number) {
    this._proficiency = value;
  }
  public resetProficiency() {
    this._proficiency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proficiencyInput() {
    return this._proficiency;
  }
}

export class UserRoutingLanguagesList extends cdktf.ComplexList {
  public internalValue? : UserRoutingLanguages[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingLanguagesOutputReference {
    return new UserRoutingLanguagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingSkills {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#proficiency User#proficiency}
  */
  readonly proficiency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#skill_id User#skill_id}
  */
  readonly skillId?: string;
}

export function userRoutingSkillsToTerraform(struct?: UserRoutingSkills | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proficiency: cdktf.numberToTerraform(struct!.proficiency),
    skill_id: cdktf.stringToTerraform(struct!.skillId),
  }
}


export function userRoutingSkillsToHclTerraform(struct?: UserRoutingSkills | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proficiency: {
      value: cdktf.numberToHclTerraform(struct!.proficiency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skill_id: {
      value: cdktf.stringToHclTerraform(struct!.skillId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingSkillsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingSkills | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proficiency !== undefined) {
      hasAnyValues = true;
      internalValueResult.proficiency = this._proficiency;
    }
    if (this._skillId !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillId = this._skillId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingSkills | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proficiency = undefined;
      this._skillId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proficiency = value.proficiency;
      this._skillId = value.skillId;
    }
  }

  // proficiency - computed: true, optional: true, required: false
  private _proficiency?: number; 
  public get proficiency() {
    return this.getNumberAttribute('proficiency');
  }
  public set proficiency(value: number) {
    this._proficiency = value;
  }
  public resetProficiency() {
    this._proficiency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proficiencyInput() {
    return this._proficiency;
  }

  // skill_id - computed: true, optional: true, required: false
  private _skillId?: string; 
  public get skillId() {
    return this.getStringAttribute('skill_id');
  }
  public set skillId(value: string) {
    this._skillId = value;
  }
  public resetSkillId() {
    this._skillId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillIdInput() {
    return this._skillId;
  }
}

export class UserRoutingSkillsList extends cdktf.ComplexList {
  public internalValue? : UserRoutingSkills[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingSkillsOutputReference {
    return new UserRoutingSkillsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilizationCall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#include_non_acd User#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#interruptible_media_types User#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#maximum_capacity User#maximum_capacity}
  */
  readonly maximumCapacity?: number;
}

export function userRoutingUtilizationCallToTerraform(struct?: UserRoutingUtilizationCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function userRoutingUtilizationCallToHclTerraform(struct?: UserRoutingUtilizationCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationCallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilizationCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilizationCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: true, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: true, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class UserRoutingUtilizationCallList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilizationCall[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationCallOutputReference {
    return new UserRoutingUtilizationCallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilizationCallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#include_non_acd User#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#interruptible_media_types User#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#maximum_capacity User#maximum_capacity}
  */
  readonly maximumCapacity?: number;
}

export function userRoutingUtilizationCallbackToTerraform(struct?: UserRoutingUtilizationCallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function userRoutingUtilizationCallbackToHclTerraform(struct?: UserRoutingUtilizationCallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationCallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilizationCallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilizationCallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: true, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: true, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class UserRoutingUtilizationCallbackList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilizationCallback[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationCallbackOutputReference {
    return new UserRoutingUtilizationCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilizationChat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#include_non_acd User#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#interruptible_media_types User#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#maximum_capacity User#maximum_capacity}
  */
  readonly maximumCapacity?: number;
}

export function userRoutingUtilizationChatToTerraform(struct?: UserRoutingUtilizationChat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function userRoutingUtilizationChatToHclTerraform(struct?: UserRoutingUtilizationChat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationChatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilizationChat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilizationChat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: true, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: true, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class UserRoutingUtilizationChatList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilizationChat[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationChatOutputReference {
    return new UserRoutingUtilizationChatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilizationEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#include_non_acd User#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#interruptible_media_types User#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#maximum_capacity User#maximum_capacity}
  */
  readonly maximumCapacity?: number;
}

export function userRoutingUtilizationEmailToTerraform(struct?: UserRoutingUtilizationEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function userRoutingUtilizationEmailToHclTerraform(struct?: UserRoutingUtilizationEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilizationEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilizationEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: true, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: true, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class UserRoutingUtilizationEmailList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilizationEmail[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationEmailOutputReference {
    return new UserRoutingUtilizationEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilizationLabelUtilizations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#interrupting_label_ids User#interrupting_label_ids}
  */
  readonly interruptingLabelIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#label_id User#label_id}
  */
  readonly labelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#maximum_capacity User#maximum_capacity}
  */
  readonly maximumCapacity?: number;
}

export function userRoutingUtilizationLabelUtilizationsToTerraform(struct?: UserRoutingUtilizationLabelUtilizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interrupting_label_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptingLabelIds),
    label_id: cdktf.stringToTerraform(struct!.labelId),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function userRoutingUtilizationLabelUtilizationsToHclTerraform(struct?: UserRoutingUtilizationLabelUtilizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interrupting_label_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptingLabelIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    label_id: {
      value: cdktf.stringToHclTerraform(struct!.labelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationLabelUtilizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilizationLabelUtilizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interruptingLabelIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptingLabelIds = this._interruptingLabelIds;
    }
    if (this._labelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelId = this._labelId;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilizationLabelUtilizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interruptingLabelIds = undefined;
      this._labelId = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interruptingLabelIds = value.interruptingLabelIds;
      this._labelId = value.labelId;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // interrupting_label_ids - computed: true, optional: true, required: false
  private _interruptingLabelIds?: string[]; 
  public get interruptingLabelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('interrupting_label_ids'));
  }
  public set interruptingLabelIds(value: string[]) {
    this._interruptingLabelIds = value;
  }
  public resetInterruptingLabelIds() {
    this._interruptingLabelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptingLabelIdsInput() {
    return this._interruptingLabelIds;
  }

  // label_id - computed: true, optional: true, required: false
  private _labelId?: string; 
  public get labelId() {
    return this.getStringAttribute('label_id');
  }
  public set labelId(value: string) {
    this._labelId = value;
  }
  public resetLabelId() {
    this._labelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelIdInput() {
    return this._labelId;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class UserRoutingUtilizationLabelUtilizationsList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilizationLabelUtilizations[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationLabelUtilizationsOutputReference {
    return new UserRoutingUtilizationLabelUtilizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilizationMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#include_non_acd User#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#interruptible_media_types User#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#maximum_capacity User#maximum_capacity}
  */
  readonly maximumCapacity?: number;
}

export function userRoutingUtilizationMessageToTerraform(struct?: UserRoutingUtilizationMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function userRoutingUtilizationMessageToHclTerraform(struct?: UserRoutingUtilizationMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilizationMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilizationMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: true, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: true, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class UserRoutingUtilizationMessageList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilizationMessage[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationMessageOutputReference {
    return new UserRoutingUtilizationMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoutingUtilization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#call User#call}
  */
  readonly call?: UserRoutingUtilizationCall[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#callback User#callback}
  */
  readonly callback?: UserRoutingUtilizationCallback[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#chat User#chat}
  */
  readonly chat?: UserRoutingUtilizationChat[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#email User#email}
  */
  readonly email?: UserRoutingUtilizationEmail[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#label_utilizations User#label_utilizations}
  */
  readonly labelUtilizations?: UserRoutingUtilizationLabelUtilizations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#message User#message}
  */
  readonly message?: UserRoutingUtilizationMessage[] | cdktf.IResolvable;
}

export function userRoutingUtilizationToTerraform(struct?: UserRoutingUtilization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call: cdktf.listMapper(userRoutingUtilizationCallToTerraform, false)(struct!.call),
    callback: cdktf.listMapper(userRoutingUtilizationCallbackToTerraform, false)(struct!.callback),
    chat: cdktf.listMapper(userRoutingUtilizationChatToTerraform, false)(struct!.chat),
    email: cdktf.listMapper(userRoutingUtilizationEmailToTerraform, false)(struct!.email),
    label_utilizations: cdktf.listMapper(userRoutingUtilizationLabelUtilizationsToTerraform, false)(struct!.labelUtilizations),
    message: cdktf.listMapper(userRoutingUtilizationMessageToTerraform, false)(struct!.message),
  }
}


export function userRoutingUtilizationToHclTerraform(struct?: UserRoutingUtilization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call: {
      value: cdktf.listMapperHcl(userRoutingUtilizationCallToHclTerraform, false)(struct!.call),
      isBlock: true,
      type: "list",
      storageClassType: "UserRoutingUtilizationCallList",
    },
    callback: {
      value: cdktf.listMapperHcl(userRoutingUtilizationCallbackToHclTerraform, false)(struct!.callback),
      isBlock: true,
      type: "list",
      storageClassType: "UserRoutingUtilizationCallbackList",
    },
    chat: {
      value: cdktf.listMapperHcl(userRoutingUtilizationChatToHclTerraform, false)(struct!.chat),
      isBlock: true,
      type: "list",
      storageClassType: "UserRoutingUtilizationChatList",
    },
    email: {
      value: cdktf.listMapperHcl(userRoutingUtilizationEmailToHclTerraform, false)(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "UserRoutingUtilizationEmailList",
    },
    label_utilizations: {
      value: cdktf.listMapperHcl(userRoutingUtilizationLabelUtilizationsToHclTerraform, false)(struct!.labelUtilizations),
      isBlock: true,
      type: "list",
      storageClassType: "UserRoutingUtilizationLabelUtilizationsList",
    },
    message: {
      value: cdktf.listMapperHcl(userRoutingUtilizationMessageToHclTerraform, false)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "UserRoutingUtilizationMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoutingUtilizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoutingUtilization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._call?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call?.internalValue;
    }
    if (this._callback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callback = this._callback?.internalValue;
    }
    if (this._chat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chat = this._chat?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._labelUtilizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelUtilizations = this._labelUtilizations?.internalValue;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoutingUtilization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._call.internalValue = undefined;
      this._callback.internalValue = undefined;
      this._chat.internalValue = undefined;
      this._email.internalValue = undefined;
      this._labelUtilizations.internalValue = undefined;
      this._message.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._call.internalValue = value.call;
      this._callback.internalValue = value.callback;
      this._chat.internalValue = value.chat;
      this._email.internalValue = value.email;
      this._labelUtilizations.internalValue = value.labelUtilizations;
      this._message.internalValue = value.message;
    }
  }

  // call - computed: true, optional: true, required: false
  private _call = new UserRoutingUtilizationCallList(this, "call", false);
  public get call() {
    return this._call;
  }
  public putCall(value: UserRoutingUtilizationCall[] | cdktf.IResolvable) {
    this._call.internalValue = value;
  }
  public resetCall() {
    this._call.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call.internalValue;
  }

  // callback - computed: true, optional: true, required: false
  private _callback = new UserRoutingUtilizationCallbackList(this, "callback", false);
  public get callback() {
    return this._callback;
  }
  public putCallback(value: UserRoutingUtilizationCallback[] | cdktf.IResolvable) {
    this._callback.internalValue = value;
  }
  public resetCallback() {
    this._callback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback.internalValue;
  }

  // chat - computed: true, optional: true, required: false
  private _chat = new UserRoutingUtilizationChatList(this, "chat", false);
  public get chat() {
    return this._chat;
  }
  public putChat(value: UserRoutingUtilizationChat[] | cdktf.IResolvable) {
    this._chat.internalValue = value;
  }
  public resetChat() {
    this._chat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatInput() {
    return this._chat.internalValue;
  }

  // email - computed: true, optional: true, required: false
  private _email = new UserRoutingUtilizationEmailList(this, "email", false);
  public get email() {
    return this._email;
  }
  public putEmail(value: UserRoutingUtilizationEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // label_utilizations - computed: true, optional: true, required: false
  private _labelUtilizations = new UserRoutingUtilizationLabelUtilizationsList(this, "label_utilizations", false);
  public get labelUtilizations() {
    return this._labelUtilizations;
  }
  public putLabelUtilizations(value: UserRoutingUtilizationLabelUtilizations[] | cdktf.IResolvable) {
    this._labelUtilizations.internalValue = value;
  }
  public resetLabelUtilizations() {
    this._labelUtilizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelUtilizationsInput() {
    return this._labelUtilizations.internalValue;
  }

  // message - computed: true, optional: true, required: false
  private _message = new UserRoutingUtilizationMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: UserRoutingUtilizationMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}

export class UserRoutingUtilizationList extends cdktf.ComplexList {
  public internalValue? : UserRoutingUtilization[] | cdktf.IResolvable

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
  public get(index: number): UserRoutingUtilizationOutputReference {
    return new UserRoutingUtilizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserVoicemailUserpolicies {
  /**
  * The number of seconds to ring the user's phone before a call is transferred to voicemail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#alert_timeout_seconds User#alert_timeout_seconds}
  */
  readonly alertTimeoutSeconds?: number;
  /**
  * Whether email notifications are sent to the user when a new voicemail is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#send_email_notifications User#send_email_notifications}
  */
  readonly sendEmailNotifications?: boolean | cdktf.IResolvable;
}

export function userVoicemailUserpoliciesToTerraform(struct?: UserVoicemailUserpoliciesOutputReference | UserVoicemailUserpolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_timeout_seconds: cdktf.numberToTerraform(struct!.alertTimeoutSeconds),
    send_email_notifications: cdktf.booleanToTerraform(struct!.sendEmailNotifications),
  }
}


export function userVoicemailUserpoliciesToHclTerraform(struct?: UserVoicemailUserpoliciesOutputReference | UserVoicemailUserpolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.alertTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_email_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.sendEmailNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserVoicemailUserpoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserVoicemailUserpolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTimeoutSeconds = this._alertTimeoutSeconds;
    }
    if (this._sendEmailNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEmailNotifications = this._sendEmailNotifications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVoicemailUserpolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertTimeoutSeconds = undefined;
      this._sendEmailNotifications = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertTimeoutSeconds = value.alertTimeoutSeconds;
      this._sendEmailNotifications = value.sendEmailNotifications;
    }
  }

  // alert_timeout_seconds - computed: false, optional: true, required: false
  private _alertTimeoutSeconds?: number; 
  public get alertTimeoutSeconds() {
    return this.getNumberAttribute('alert_timeout_seconds');
  }
  public set alertTimeoutSeconds(value: number) {
    this._alertTimeoutSeconds = value;
  }
  public resetAlertTimeoutSeconds() {
    this._alertTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTimeoutSecondsInput() {
    return this._alertTimeoutSeconds;
  }

  // send_email_notifications - computed: true, optional: true, required: false
  private _sendEmailNotifications?: boolean | cdktf.IResolvable; 
  public get sendEmailNotifications() {
    return this.getBooleanAttribute('send_email_notifications');
  }
  public set sendEmailNotifications(value: boolean | cdktf.IResolvable) {
    this._sendEmailNotifications = value;
  }
  public resetSendEmailNotifications() {
    this._sendEmailNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailNotificationsInput() {
    return this._sendEmailNotifications;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user genesyscloud_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/user genesyscloud_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_user',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acdAutoAnswer = config.acdAutoAnswer;
    this._addresses.internalValue = config.addresses;
    this._certifications = config.certifications;
    this._department = config.department;
    this._divisionId = config.divisionId;
    this._email = config.email;
    this._employerInfo.internalValue = config.employerInfo;
    this._id = config.id;
    this._locations.internalValue = config.locations;
    this._manager = config.manager;
    this._name = config.name;
    this._password = config.password;
    this._profileSkills = config.profileSkills;
    this._routingLanguages.internalValue = config.routingLanguages;
    this._routingSkills.internalValue = config.routingSkills;
    this._routingUtilization.internalValue = config.routingUtilization;
    this._state = config.state;
    this._title = config.title;
    this._voicemailUserpolicies.internalValue = config.voicemailUserpolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acd_auto_answer - computed: false, optional: true, required: false
  private _acdAutoAnswer?: boolean | cdktf.IResolvable; 
  public get acdAutoAnswer() {
    return this.getBooleanAttribute('acd_auto_answer');
  }
  public set acdAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._acdAutoAnswer = value;
  }
  public resetAcdAutoAnswer() {
    this._acdAutoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acdAutoAnswerInput() {
    return this._acdAutoAnswer;
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

  // certifications - computed: true, optional: true, required: false
  private _certifications?: string[]; 
  public get certifications() {
    return cdktf.Fn.tolist(this.getListAttribute('certifications'));
  }
  public set certifications(value: string[]) {
    this._certifications = value;
  }
  public resetCertifications() {
    this._certifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificationsInput() {
    return this._certifications;
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

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
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

  // employer_info - computed: true, optional: true, required: false
  private _employerInfo = new UserEmployerInfoList(this, "employer_info", false);
  public get employerInfo() {
    return this._employerInfo;
  }
  public putEmployerInfo(value: UserEmployerInfo[] | cdktf.IResolvable) {
    this._employerInfo.internalValue = value;
  }
  public resetEmployerInfo() {
    this._employerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employerInfoInput() {
    return this._employerInfo.internalValue;
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

  // locations - computed: true, optional: true, required: false
  private _locations = new UserLocationsList(this, "locations", true);
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

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
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

  // profile_skills - computed: true, optional: true, required: false
  private _profileSkills?: string[]; 
  public get profileSkills() {
    return cdktf.Fn.tolist(this.getListAttribute('profile_skills'));
  }
  public set profileSkills(value: string[]) {
    this._profileSkills = value;
  }
  public resetProfileSkills() {
    this._profileSkills = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSkillsInput() {
    return this._profileSkills;
  }

  // routing_languages - computed: true, optional: true, required: false
  private _routingLanguages = new UserRoutingLanguagesList(this, "routing_languages", true);
  public get routingLanguages() {
    return this._routingLanguages;
  }
  public putRoutingLanguages(value: UserRoutingLanguages[] | cdktf.IResolvable) {
    this._routingLanguages.internalValue = value;
  }
  public resetRoutingLanguages() {
    this._routingLanguages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingLanguagesInput() {
    return this._routingLanguages.internalValue;
  }

  // routing_skills - computed: true, optional: true, required: false
  private _routingSkills = new UserRoutingSkillsList(this, "routing_skills", true);
  public get routingSkills() {
    return this._routingSkills;
  }
  public putRoutingSkills(value: UserRoutingSkills[] | cdktf.IResolvable) {
    this._routingSkills.internalValue = value;
  }
  public resetRoutingSkills() {
    this._routingSkills.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingSkillsInput() {
    return this._routingSkills.internalValue;
  }

  // routing_utilization - computed: true, optional: true, required: false
  private _routingUtilization = new UserRoutingUtilizationList(this, "routing_utilization", false);
  public get routingUtilization() {
    return this._routingUtilization;
  }
  public putRoutingUtilization(value: UserRoutingUtilization[] | cdktf.IResolvable) {
    this._routingUtilization.internalValue = value;
  }
  public resetRoutingUtilization() {
    this._routingUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingUtilizationInput() {
    return this._routingUtilization.internalValue;
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

  // voicemail_userpolicies - computed: false, optional: true, required: false
  private _voicemailUserpolicies = new UserVoicemailUserpoliciesOutputReference(this, "voicemail_userpolicies");
  public get voicemailUserpolicies() {
    return this._voicemailUserpolicies;
  }
  public putVoicemailUserpolicies(value: UserVoicemailUserpolicies) {
    this._voicemailUserpolicies.internalValue = value;
  }
  public resetVoicemailUserpolicies() {
    this._voicemailUserpolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicemailUserpoliciesInput() {
    return this._voicemailUserpolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acd_auto_answer: cdktf.booleanToTerraform(this._acdAutoAnswer),
      addresses: cdktf.listMapper(userAddressesToTerraform, false)(this._addresses.internalValue),
      certifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certifications),
      department: cdktf.stringToTerraform(this._department),
      division_id: cdktf.stringToTerraform(this._divisionId),
      email: cdktf.stringToTerraform(this._email),
      employer_info: cdktf.listMapper(userEmployerInfoToTerraform, false)(this._employerInfo.internalValue),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(userLocationsToTerraform, false)(this._locations.internalValue),
      manager: cdktf.stringToTerraform(this._manager),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      profile_skills: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profileSkills),
      routing_languages: cdktf.listMapper(userRoutingLanguagesToTerraform, false)(this._routingLanguages.internalValue),
      routing_skills: cdktf.listMapper(userRoutingSkillsToTerraform, false)(this._routingSkills.internalValue),
      routing_utilization: cdktf.listMapper(userRoutingUtilizationToTerraform, false)(this._routingUtilization.internalValue),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
      voicemail_userpolicies: userVoicemailUserpoliciesToTerraform(this._voicemailUserpolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acd_auto_answer: {
        value: cdktf.booleanToHclTerraform(this._acdAutoAnswer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      addresses: {
        value: cdktf.listMapperHcl(userAddressesToHclTerraform, false)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAddressesList",
      },
      certifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certifications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      department: {
        value: cdktf.stringToHclTerraform(this._department),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      employer_info: {
        value: cdktf.listMapperHcl(userEmployerInfoToHclTerraform, false)(this._employerInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserEmployerInfoList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(userLocationsToHclTerraform, false)(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserLocationsList",
      },
      manager: {
        value: cdktf.stringToHclTerraform(this._manager),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_skills: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profileSkills),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      routing_languages: {
        value: cdktf.listMapperHcl(userRoutingLanguagesToHclTerraform, false)(this._routingLanguages.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserRoutingLanguagesList",
      },
      routing_skills: {
        value: cdktf.listMapperHcl(userRoutingSkillsToHclTerraform, false)(this._routingSkills.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserRoutingSkillsList",
      },
      routing_utilization: {
        value: cdktf.listMapperHcl(userRoutingUtilizationToHclTerraform, false)(this._routingUtilization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRoutingUtilizationList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voicemail_userpolicies: {
        value: userVoicemailUserpoliciesToHclTerraform(this._voicemailUserpolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserVoicemailUserpoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
