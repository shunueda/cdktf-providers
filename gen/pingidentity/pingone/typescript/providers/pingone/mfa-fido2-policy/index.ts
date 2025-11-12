// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaFido2PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the level of attestation to apply.  Options are `DIRECT` (perform attestation), `NONE` (don't perform attestation).  If `NONE` is specified, the `mds_authentication_requirements.option` parameter should also be set to `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#attestation_requirements MfaFido2Policy#attestation_requirements}
  */
  readonly attestationRequirements: string;
  /**
  * A string that specifies the types of authenticators that are allowed.  Options are `BOTH` (allow both categories of authenticators), `CROSS_PLATFORM` (allow use of cross-platform authenticators, which are external to the accessing device (such as a security key)), `PLATFORM` (only allow the use of FIDO device authenticators that contain an internal authenticator (such as a face or fingerprint scanner)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#authenticator_attachment MfaFido2Policy#authenticator_attachment}
  */
  readonly authenticatorAttachment: string;
  /**
  * A single nested object that contains settings used to control whether users should be allowed to register and authenticate with a device that uses cloud-synced credentials, such as a passkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#backup_eligibility MfaFido2Policy#backup_eligibility}
  */
  readonly backupEligibility: MfaFido2PolicyBackupEligibility;
  /**
  * A string that specifies the description of the FIDO2 policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#description MfaFido2Policy#description}
  */
  readonly description?: string;
  /**
  * The name to display for the device in registration and authentication windows. Can be up to 100 characters. If you want to use translatable text (configured for each language under **Languages** in the Admin Console), you can use any of the keys listed on the `FIDO Policy` page of the `Self-Service` module and the `Sign On Policy` module. The value of the parameter should include only the part of the key name that comes after the module name, for example, `fidoPolicy.deviceDisplayName01` or `fidoPolicy.deviceDisplayName07`. See each language under the **Languages** section of the admin console UI for the full list of keys. For more information on translatable keys, see [Modifying translatable keys](https://docs.pingidentity.com/access/sources/dita/topic?category=p1&resourceid=pingone_modifying_translatable_keys) in the PingOne documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#device_display_name MfaFido2Policy#device_display_name}
  */
  readonly deviceDisplayName: string;
  /**
  * A string that specifies the behaviour when registered users are authenticating without providing credentials.  Options are `DISCOURAGED` (discoverable credentials are not used, even when supported by the FIDO device. In cases where use of discoverable credentials is required by the FIDO device itself, this setting does not override the device setting), `PREFERRED` (use discoverable credentials where possible), `REQUIRED` (require the use of discoverable credentials. This option is required for usernameless authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#discoverable_credentials MfaFido2Policy#discoverable_credentials}
  */
  readonly discoverableCredentials: string;
  /**
  * The ID of the environment to configure the FIDO2 policy in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#environment_id MfaFido2Policy#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single nested object that specifies MDS authenticator requirements, used to specify whether attestation is requested from the authenticator, and whether this information is used to restrict authenticator usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#mds_authenticators_requirements MfaFido2Policy#mds_authenticators_requirements}
  */
  readonly mdsAuthenticatorsRequirements: MfaFido2PolicyMdsAuthenticatorsRequirements;
  /**
  * A string that specifies the unique, friendly name for this FIDO2 policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#name MfaFido2Policy#name}
  */
  readonly name: string;
  /**
  * The ID of the relying party. The value should be a domain name, such as `bxretail.org` (in lower-case characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#relying_party_id MfaFido2Policy#relying_party_id}
  */
  readonly relyingPartyId: string;
  /**
  * A single nested object that specifies the string associated with the users's account that is displayed during registration and authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#user_display_name_attributes MfaFido2Policy#user_display_name_attributes}
  */
  readonly userDisplayNameAttributes: MfaFido2PolicyUserDisplayNameAttributes;
  /**
  * A single nested object that specifies the user presence timeout settings, used to control the amount of time a user has to perform a user presence gesture with their FIDO device. If not provided, defaults to 2 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#user_presence_timeout MfaFido2Policy#user_presence_timeout}
  */
  readonly userPresenceTimeout?: MfaFido2PolicyUserPresenceTimeout;
  /**
  * A single nested object that specifies user verification settings, used to control whether the user must perform a gesture (such as a public key credential, fingerprint scan, or a PIN code) when registering or authenticating with their FIDO device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#user_verification MfaFido2Policy#user_verification}
  */
  readonly userVerification: MfaFido2PolicyUserVerification;
}
export interface MfaFido2PolicyBackupEligibility {
  /**
  * A boolean that specifies whether to allow users to register and authenticate with a device that uses cloud-synced credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#allow MfaFido2Policy#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies whether the backup eligibility of the device should be checked again at each authentication attempt.  Set to `true` if you want the backup eligibility of the device to be checked again at each authentication attempt and not just once during registration. Set to `false` to have it checked only at registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#enforce_during_authentication MfaFido2Policy#enforce_during_authentication}
  */
  readonly enforceDuringAuthentication: boolean | cdktf.IResolvable;
}

export function mfaFido2PolicyBackupEligibilityToTerraform(struct?: MfaFido2PolicyBackupEligibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    enforce_during_authentication: cdktf.booleanToTerraform(struct!.enforceDuringAuthentication),
  }
}


export function mfaFido2PolicyBackupEligibilityToHclTerraform(struct?: MfaFido2PolicyBackupEligibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_during_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enforceDuringAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyBackupEligibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaFido2PolicyBackupEligibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._enforceDuringAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceDuringAuthentication = this._enforceDuringAuthentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyBackupEligibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._enforceDuringAuthentication = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._enforceDuringAuthentication = value.enforceDuringAuthentication;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // enforce_during_authentication - computed: false, optional: false, required: true
  private _enforceDuringAuthentication?: boolean | cdktf.IResolvable; 
  public get enforceDuringAuthentication() {
    return this.getBooleanAttribute('enforce_during_authentication');
  }
  public set enforceDuringAuthentication(value: boolean | cdktf.IResolvable) {
    this._enforceDuringAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDuringAuthenticationInput() {
    return this._enforceDuringAuthentication;
  }
}
export interface MfaFido2PolicyMdsAuthenticatorsRequirements {
  /**
  * A set of strings that is used if `option` is set to `SPECIFIC`, to specify the mdsIdentitfer IDs of authenticators that are allowed in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#allowed_authenticator_ids MfaFido2Policy#allowed_authenticator_ids}
  */
  readonly allowedAuthenticatorIds?: string[];
  /**
  * A boolean that specifies whether devices characteristics related to verification are checked again on each authentication attempt.  Set to `true` if you want the device characteristics related to attestation to be checked again at each authentication attempt and not just once during registration. Set to `false` to have them checked only at registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#enforce_during_authentication MfaFido2Policy#enforce_during_authentication}
  */
  readonly enforceDuringAuthentication: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the types of device that are allowed on the basis of the attestation provided.  Options are `AUDIT_ONLY` (attestation is requested and the information is used for logging purposes, but the information is not used for filtering authenticators), `CERTIFIED` (allow only FIDO Certified authenticators), `GLOBAL` (allow use of all FIDO authenticators listed in the Global Authenticators table), `NONE` (do not request attestation, allow all FIDO devices), `SPECIFIC` (allow only the authenticators specified with the `allowed_authenticator_ids` parameter).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#option MfaFido2Policy#option}
  */
  readonly option: string;
}

export function mfaFido2PolicyMdsAuthenticatorsRequirementsToTerraform(struct?: MfaFido2PolicyMdsAuthenticatorsRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_authenticator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAuthenticatorIds),
    enforce_during_authentication: cdktf.booleanToTerraform(struct!.enforceDuringAuthentication),
    option: cdktf.stringToTerraform(struct!.option),
  }
}


export function mfaFido2PolicyMdsAuthenticatorsRequirementsToHclTerraform(struct?: MfaFido2PolicyMdsAuthenticatorsRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_authenticator_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAuthenticatorIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enforce_during_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enforceDuringAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyMdsAuthenticatorsRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaFido2PolicyMdsAuthenticatorsRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAuthenticatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAuthenticatorIds = this._allowedAuthenticatorIds;
    }
    if (this._enforceDuringAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceDuringAuthentication = this._enforceDuringAuthentication;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyMdsAuthenticatorsRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAuthenticatorIds = undefined;
      this._enforceDuringAuthentication = undefined;
      this._option = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAuthenticatorIds = value.allowedAuthenticatorIds;
      this._enforceDuringAuthentication = value.enforceDuringAuthentication;
      this._option = value.option;
    }
  }

  // allowed_authenticator_ids - computed: false, optional: true, required: false
  private _allowedAuthenticatorIds?: string[]; 
  public get allowedAuthenticatorIds() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authenticator_ids'));
  }
  public set allowedAuthenticatorIds(value: string[]) {
    this._allowedAuthenticatorIds = value;
  }
  public resetAllowedAuthenticatorIds() {
    this._allowedAuthenticatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticatorIdsInput() {
    return this._allowedAuthenticatorIds;
  }

  // enforce_during_authentication - computed: false, optional: false, required: true
  private _enforceDuringAuthentication?: boolean | cdktf.IResolvable; 
  public get enforceDuringAuthentication() {
    return this.getBooleanAttribute('enforce_during_authentication');
  }
  public set enforceDuringAuthentication(value: boolean | cdktf.IResolvable) {
    this._enforceDuringAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDuringAuthenticationInput() {
    return this._enforceDuringAuthentication;
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes {
  /**
  * The name of a complex attribute's sub attribute in PingOne, for example `given` or `formatted` where the parent object has a name value of `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#name MfaFido2Policy#name}
  */
  readonly name: string;
}

export function mfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesToTerraform(struct?: MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesToHclTerraform(struct?: MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesList extends cdktf.ComplexList {
  public internalValue? : MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes[] | cdktf.IResolvable

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
  public get(index: number): MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesOutputReference {
    return new MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MfaFido2PolicyUserDisplayNameAttributesAttributes {
  /**
  * The name of the attribute in PingOne, for example `username` or `email`.  The attribute can be any user attribute, including a custom attribute, that is a string data type and does not have enumerated values configured.  If you want to use the `name` attribute for the user (or any attribute that is a complex data type), you must also specify the `sub_attributes` parameter, which can be either the `given` and `family` user attributes or the `formatted` user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#name MfaFido2Policy#name}
  */
  readonly name: string;
  /**
  * A lsit of objects that describe the sub attributes to use when `name` is configured to use an attribute that is a complex data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#sub_attributes MfaFido2Policy#sub_attributes}
  */
  readonly subAttributes?: MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes[] | cdktf.IResolvable;
}

export function mfaFido2PolicyUserDisplayNameAttributesAttributesToTerraform(struct?: MfaFido2PolicyUserDisplayNameAttributesAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sub_attributes: cdktf.listMapper(mfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesToTerraform, false)(struct!.subAttributes),
  }
}


export function mfaFido2PolicyUserDisplayNameAttributesAttributesToHclTerraform(struct?: MfaFido2PolicyUserDisplayNameAttributesAttributes | cdktf.IResolvable): any {
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
    sub_attributes: {
      value: cdktf.listMapperHcl(mfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesToHclTerraform, false)(struct!.subAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyUserDisplayNameAttributesAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MfaFido2PolicyUserDisplayNameAttributesAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAttributes = this._subAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyUserDisplayNameAttributesAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._subAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._subAttributes.internalValue = value.subAttributes;
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

  // sub_attributes - computed: false, optional: true, required: false
  private _subAttributes = new MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributesList(this, "sub_attributes", false);
  public get subAttributes() {
    return this._subAttributes;
  }
  public putSubAttributes(value: MfaFido2PolicyUserDisplayNameAttributesAttributesSubAttributes[] | cdktf.IResolvable) {
    this._subAttributes.internalValue = value;
  }
  public resetSubAttributes() {
    this._subAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAttributesInput() {
    return this._subAttributes.internalValue;
  }
}

export class MfaFido2PolicyUserDisplayNameAttributesAttributesList extends cdktf.ComplexList {
  public internalValue? : MfaFido2PolicyUserDisplayNameAttributesAttributes[] | cdktf.IResolvable

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
  public get(index: number): MfaFido2PolicyUserDisplayNameAttributesAttributesOutputReference {
    return new MfaFido2PolicyUserDisplayNameAttributesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MfaFido2PolicyUserDisplayNameAttributes {
  /**
  * A list of objects that describe attributes associated with the users's account that can be displayed during registration and authentication.
  *     - The content of the list should reflect the preferred order.
  *     - If the first attribute is empty for the user, PingOne will continue through the list until a non-empty attribute is found.
  *     - You can specify any user attribute (including custom attributes) that meet the following criteria: attribute type must be String, validation cannot be set to enumerated values.
  *     - The array must contain the user attribute `username` to ensure that there is at least one non-empty attribute.
  *     - You can have a maximum of six user attributes in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#attributes MfaFido2Policy#attributes}
  */
  readonly attributes: MfaFido2PolicyUserDisplayNameAttributesAttributes[] | cdktf.IResolvable;
}

export function mfaFido2PolicyUserDisplayNameAttributesToTerraform(struct?: MfaFido2PolicyUserDisplayNameAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(mfaFido2PolicyUserDisplayNameAttributesAttributesToTerraform, false)(struct!.attributes),
  }
}


export function mfaFido2PolicyUserDisplayNameAttributesToHclTerraform(struct?: MfaFido2PolicyUserDisplayNameAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(mfaFido2PolicyUserDisplayNameAttributesAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "MfaFido2PolicyUserDisplayNameAttributesAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyUserDisplayNameAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaFido2PolicyUserDisplayNameAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyUserDisplayNameAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
    }
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new MfaFido2PolicyUserDisplayNameAttributesAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: MfaFido2PolicyUserDisplayNameAttributesAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }
}
export interface MfaFido2PolicyUserPresenceTimeout {
  /**
  * The amount of time (minutes or seconds) a user presence gesture will be accepted for the authentication request. Minimum is one minute (60 seconds); maxiumum is ten minutes (600 seconds).  Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#duration MfaFido2Policy#duration}
  */
  readonly duration?: number;
  /**
  * The units for specifying the amount of time a user presence gesture will be accepted for the authentication request.  Options are `MINUTES`, `SECONDS`.  Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#time_unit MfaFido2Policy#time_unit}
  */
  readonly timeUnit?: string;
}

export function mfaFido2PolicyUserPresenceTimeoutToTerraform(struct?: MfaFido2PolicyUserPresenceTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaFido2PolicyUserPresenceTimeoutToHclTerraform(struct?: MfaFido2PolicyUserPresenceTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyUserPresenceTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaFido2PolicyUserPresenceTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyUserPresenceTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaFido2PolicyUserVerification {
  /**
  * A boolean that specifies whether device characteristics related to user verification are to be checked again at each authentication attempt. Set to `true` if you want the device characteristics related to user verification to be checked again at each authentication attempt and not just once during registration. Set to `false` to have them checked only at registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#enforce_during_authentication MfaFido2Policy#enforce_during_authentication}
  */
  readonly enforceDuringAuthentication: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the type of user verification to perform.  Options are `DISCOURAGED`, `PREFERRED`, `REQUIRED`.  Options are `DISCOURAGED` (user verification is not required, even when supported by the FIDO device. In cases where user verification is required by the FIDO device itself, this setting does not override the device setting), `PREFERRED` (user verification is required if the user's FIDO device supports it, but is not required if the user's device does not support it), `REQUIRED` (only FIDO devices supporting user verification can be used).  For usernameless flows, only FIDO devices supporting user verification can be used, regardless of the value configured in this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#option MfaFido2Policy#option}
  */
  readonly option: string;
}

export function mfaFido2PolicyUserVerificationToTerraform(struct?: MfaFido2PolicyUserVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_during_authentication: cdktf.booleanToTerraform(struct!.enforceDuringAuthentication),
    option: cdktf.stringToTerraform(struct!.option),
  }
}


export function mfaFido2PolicyUserVerificationToHclTerraform(struct?: MfaFido2PolicyUserVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_during_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enforceDuringAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaFido2PolicyUserVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaFido2PolicyUserVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceDuringAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceDuringAuthentication = this._enforceDuringAuthentication;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaFido2PolicyUserVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceDuringAuthentication = undefined;
      this._option = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceDuringAuthentication = value.enforceDuringAuthentication;
      this._option = value.option;
    }
  }

  // enforce_during_authentication - computed: false, optional: false, required: true
  private _enforceDuringAuthentication?: boolean | cdktf.IResolvable; 
  public get enforceDuringAuthentication() {
    return this.getBooleanAttribute('enforce_during_authentication');
  }
  public set enforceDuringAuthentication(value: boolean | cdktf.IResolvable) {
    this._enforceDuringAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDuringAuthenticationInput() {
    return this._enforceDuringAuthentication;
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy pingone_mfa_fido2_policy}
*/
export class MfaFido2Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_mfa_fido2_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MfaFido2Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MfaFido2Policy to import
  * @param importFromId The id of the existing MfaFido2Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MfaFido2Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_mfa_fido2_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_fido2_policy pingone_mfa_fido2_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaFido2PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MfaFido2PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_mfa_fido2_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attestationRequirements = config.attestationRequirements;
    this._authenticatorAttachment = config.authenticatorAttachment;
    this._backupEligibility.internalValue = config.backupEligibility;
    this._description = config.description;
    this._deviceDisplayName = config.deviceDisplayName;
    this._discoverableCredentials = config.discoverableCredentials;
    this._environmentId = config.environmentId;
    this._mdsAuthenticatorsRequirements.internalValue = config.mdsAuthenticatorsRequirements;
    this._name = config.name;
    this._relyingPartyId = config.relyingPartyId;
    this._userDisplayNameAttributes.internalValue = config.userDisplayNameAttributes;
    this._userPresenceTimeout.internalValue = config.userPresenceTimeout;
    this._userVerification.internalValue = config.userVerification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestation_requirements - computed: false, optional: false, required: true
  private _attestationRequirements?: string; 
  public get attestationRequirements() {
    return this.getStringAttribute('attestation_requirements');
  }
  public set attestationRequirements(value: string) {
    this._attestationRequirements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationRequirementsInput() {
    return this._attestationRequirements;
  }

  // authenticator_attachment - computed: false, optional: false, required: true
  private _authenticatorAttachment?: string; 
  public get authenticatorAttachment() {
    return this.getStringAttribute('authenticator_attachment');
  }
  public set authenticatorAttachment(value: string) {
    this._authenticatorAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorAttachmentInput() {
    return this._authenticatorAttachment;
  }

  // backup_eligibility - computed: false, optional: false, required: true
  private _backupEligibility = new MfaFido2PolicyBackupEligibilityOutputReference(this, "backup_eligibility");
  public get backupEligibility() {
    return this._backupEligibility;
  }
  public putBackupEligibility(value: MfaFido2PolicyBackupEligibility) {
    this._backupEligibility.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupEligibilityInput() {
    return this._backupEligibility.internalValue;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // device_display_name - computed: false, optional: false, required: true
  private _deviceDisplayName?: string; 
  public get deviceDisplayName() {
    return this.getStringAttribute('device_display_name');
  }
  public set deviceDisplayName(value: string) {
    this._deviceDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameInput() {
    return this._deviceDisplayName;
  }

  // discoverable_credentials - computed: false, optional: false, required: true
  private _discoverableCredentials?: string; 
  public get discoverableCredentials() {
    return this.getStringAttribute('discoverable_credentials');
  }
  public set discoverableCredentials(value: string) {
    this._discoverableCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverableCredentialsInput() {
    return this._discoverableCredentials;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mds_authenticators_requirements - computed: false, optional: false, required: true
  private _mdsAuthenticatorsRequirements = new MfaFido2PolicyMdsAuthenticatorsRequirementsOutputReference(this, "mds_authenticators_requirements");
  public get mdsAuthenticatorsRequirements() {
    return this._mdsAuthenticatorsRequirements;
  }
  public putMdsAuthenticatorsRequirements(value: MfaFido2PolicyMdsAuthenticatorsRequirements) {
    this._mdsAuthenticatorsRequirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mdsAuthenticatorsRequirementsInput() {
    return this._mdsAuthenticatorsRequirements.internalValue;
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

  // relying_party_id - computed: false, optional: false, required: true
  private _relyingPartyId?: string; 
  public get relyingPartyId() {
    return this.getStringAttribute('relying_party_id');
  }
  public set relyingPartyId(value: string) {
    this._relyingPartyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdInput() {
    return this._relyingPartyId;
  }

  // user_display_name_attributes - computed: false, optional: false, required: true
  private _userDisplayNameAttributes = new MfaFido2PolicyUserDisplayNameAttributesOutputReference(this, "user_display_name_attributes");
  public get userDisplayNameAttributes() {
    return this._userDisplayNameAttributes;
  }
  public putUserDisplayNameAttributes(value: MfaFido2PolicyUserDisplayNameAttributes) {
    this._userDisplayNameAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDisplayNameAttributesInput() {
    return this._userDisplayNameAttributes.internalValue;
  }

  // user_presence_timeout - computed: true, optional: true, required: false
  private _userPresenceTimeout = new MfaFido2PolicyUserPresenceTimeoutOutputReference(this, "user_presence_timeout");
  public get userPresenceTimeout() {
    return this._userPresenceTimeout;
  }
  public putUserPresenceTimeout(value: MfaFido2PolicyUserPresenceTimeout) {
    this._userPresenceTimeout.internalValue = value;
  }
  public resetUserPresenceTimeout() {
    this._userPresenceTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPresenceTimeoutInput() {
    return this._userPresenceTimeout.internalValue;
  }

  // user_verification - computed: false, optional: false, required: true
  private _userVerification = new MfaFido2PolicyUserVerificationOutputReference(this, "user_verification");
  public get userVerification() {
    return this._userVerification;
  }
  public putUserVerification(value: MfaFido2PolicyUserVerification) {
    this._userVerification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVerificationInput() {
    return this._userVerification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attestation_requirements: cdktf.stringToTerraform(this._attestationRequirements),
      authenticator_attachment: cdktf.stringToTerraform(this._authenticatorAttachment),
      backup_eligibility: mfaFido2PolicyBackupEligibilityToTerraform(this._backupEligibility.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_display_name: cdktf.stringToTerraform(this._deviceDisplayName),
      discoverable_credentials: cdktf.stringToTerraform(this._discoverableCredentials),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      mds_authenticators_requirements: mfaFido2PolicyMdsAuthenticatorsRequirementsToTerraform(this._mdsAuthenticatorsRequirements.internalValue),
      name: cdktf.stringToTerraform(this._name),
      relying_party_id: cdktf.stringToTerraform(this._relyingPartyId),
      user_display_name_attributes: mfaFido2PolicyUserDisplayNameAttributesToTerraform(this._userDisplayNameAttributes.internalValue),
      user_presence_timeout: mfaFido2PolicyUserPresenceTimeoutToTerraform(this._userPresenceTimeout.internalValue),
      user_verification: mfaFido2PolicyUserVerificationToTerraform(this._userVerification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attestation_requirements: {
        value: cdktf.stringToHclTerraform(this._attestationRequirements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticator_attachment: {
        value: cdktf.stringToHclTerraform(this._authenticatorAttachment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_eligibility: {
        value: mfaFido2PolicyBackupEligibilityToHclTerraform(this._backupEligibility.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaFido2PolicyBackupEligibility",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_display_name: {
        value: cdktf.stringToHclTerraform(this._deviceDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discoverable_credentials: {
        value: cdktf.stringToHclTerraform(this._discoverableCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mds_authenticators_requirements: {
        value: mfaFido2PolicyMdsAuthenticatorsRequirementsToHclTerraform(this._mdsAuthenticatorsRequirements.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaFido2PolicyMdsAuthenticatorsRequirements",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relying_party_id: {
        value: cdktf.stringToHclTerraform(this._relyingPartyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_display_name_attributes: {
        value: mfaFido2PolicyUserDisplayNameAttributesToHclTerraform(this._userDisplayNameAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaFido2PolicyUserDisplayNameAttributes",
      },
      user_presence_timeout: {
        value: mfaFido2PolicyUserPresenceTimeoutToHclTerraform(this._userPresenceTimeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaFido2PolicyUserPresenceTimeout",
      },
      user_verification: {
        value: mfaFido2PolicyUserVerificationToHclTerraform(this._userVerification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaFido2PolicyUserVerification",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
