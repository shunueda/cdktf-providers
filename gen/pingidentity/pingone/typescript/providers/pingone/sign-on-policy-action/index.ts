// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignOnPolicyActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean that if set to true and if the user's account is locked (the account.canAuthenticate attribute is set to false), then social sign on with an external identity provider is prevented. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#enforce_lockout_for_identity_providers SignOnPolicyAction#enforce_lockout_for_identity_providers}
  */
  readonly enforceLockoutForIdentityProviders?: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to create the sign on policy action in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#environment_id SignOnPolicyAction#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#id SignOnPolicyAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An integer that specifies the order in which the policy referenced by this assignment is evaluated during an authentication flow relative to other policies. An assignment with a lower priority will be evaluated first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#priority SignOnPolicyAction#priority}
  */
  readonly priority: number;
  /**
  * A boolean that specifies whether users must confirm data returned from an identity provider prior to registration. Users can modify the data and omit non-required attributes. Modified attributes are added to the user's profile during account creation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#registration_confirm_user_attributes SignOnPolicyAction#registration_confirm_user_attributes}
  */
  readonly registrationConfirmUserAttributes?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the link to the external identity provider's identity store. This property is set when the administrator chooses to have users register in an external identity store. This attribute can be set only when the registration.enabled property is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#registration_external_href SignOnPolicyAction#registration_external_href}
  */
  readonly registrationExternalHref?: string;
  /**
  * A string that specifies the population ID associated with the newly registered user. Setting this enables local registration features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#registration_local_population_id SignOnPolicyAction#registration_local_population_id}
  */
  readonly registrationLocalPopulationId?: string;
  /**
  * The ID of the sign on policy to associate the sign on policy action to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#sign_on_policy_id SignOnPolicyAction#sign_on_policy_id}
  */
  readonly signOnPolicyId: string;
  /**
  * One or more IDs of the identity providers that can be used for the social login sign-on flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#social_provider_ids SignOnPolicyAction#social_provider_ids}
  */
  readonly socialProviderIds?: string[];
  /**
  * agreement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#agreement SignOnPolicyAction#agreement}
  */
  readonly agreement?: SignOnPolicyActionAgreement;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#conditions SignOnPolicyAction#conditions}
  */
  readonly conditions?: SignOnPolicyActionConditions;
  /**
  * identifier_first block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#identifier_first SignOnPolicyAction#identifier_first}
  */
  readonly identifierFirst?: SignOnPolicyActionIdentifierFirst;
  /**
  * identity_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#identity_provider SignOnPolicyAction#identity_provider}
  */
  readonly identityProvider?: SignOnPolicyActionIdentityProvider;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#login SignOnPolicyAction#login}
  */
  readonly login?: SignOnPolicyActionLogin;
  /**
  * mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#mfa SignOnPolicyAction#mfa}
  */
  readonly mfa?: SignOnPolicyActionMfa;
  /**
  * pingid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#pingid SignOnPolicyAction#pingid}
  */
  readonly pingid?: SignOnPolicyActionPingid;
  /**
  * pingid_windows_login_passwordless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#pingid_windows_login_passwordless SignOnPolicyAction#pingid_windows_login_passwordless}
  */
  readonly pingidWindowsLoginPasswordless?: SignOnPolicyActionPingidWindowsLoginPasswordless;
  /**
  * progressive_profiling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#progressive_profiling SignOnPolicyAction#progressive_profiling}
  */
  readonly progressiveProfiling?: SignOnPolicyActionProgressiveProfiling;
}
export interface SignOnPolicyActionAgreement {
  /**
  * A string that specifies the ID of the agreement to which the user must consent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#agreement_id SignOnPolicyAction#agreement_id}
  */
  readonly agreementId: string;
  /**
  * When enabled, the `Do Not Accept` button will terminate the Flow and display an error message to the user. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#show_decline_option SignOnPolicyAction#show_decline_option}
  */
  readonly showDeclineOption?: boolean | cdktf.IResolvable;
}

export function signOnPolicyActionAgreementToTerraform(struct?: SignOnPolicyActionAgreementOutputReference | SignOnPolicyActionAgreement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agreement_id: cdktf.stringToTerraform(struct!.agreementId),
    show_decline_option: cdktf.booleanToTerraform(struct!.showDeclineOption),
  }
}


export function signOnPolicyActionAgreementToHclTerraform(struct?: SignOnPolicyActionAgreementOutputReference | SignOnPolicyActionAgreement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agreement_id: {
      value: cdktf.stringToHclTerraform(struct!.agreementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_decline_option: {
      value: cdktf.booleanToHclTerraform(struct!.showDeclineOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionAgreementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionAgreement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreementId = this._agreementId;
    }
    if (this._showDeclineOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDeclineOption = this._showDeclineOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionAgreement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agreementId = undefined;
      this._showDeclineOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agreementId = value.agreementId;
      this._showDeclineOption = value.showDeclineOption;
    }
  }

  // agreement_id - computed: false, optional: false, required: true
  private _agreementId?: string; 
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementIdInput() {
    return this._agreementId;
  }

  // show_decline_option - computed: false, optional: true, required: false
  private _showDeclineOption?: boolean | cdktf.IResolvable; 
  public get showDeclineOption() {
    return this.getBooleanAttribute('show_decline_option');
  }
  public set showDeclineOption(value: boolean | cdktf.IResolvable) {
    this._showDeclineOption = value;
  }
  public resetShowDeclineOption() {
    this._showDeclineOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDeclineOptionInput() {
    return this._showDeclineOption;
  }
}
export interface SignOnPolicyActionConditionsUserAttributeEquals {
  /**
  * Specifies the user attribute used in the condition. Only string core, standard, and custom attributes are supported. For complex attribute types, you must reference the sub-attribute (`$${user.name.firstName}`).  Note values that begin with a dollar sign (`$`) must be prefixed with an additional dollar sign.  E.g. `${name.given}` should be configured as `$${name.given}`.  When configured, one of `value` (for attributes of type `STRING` or `INTEGER`) or `value_boolean` (for attributes of type `BOOLEAN`) must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#attribute_reference SignOnPolicyAction#attribute_reference}
  */
  readonly attributeReference: string;
  /**
  * The string or integer (as string) value of the attribute (declared in `attribute_reference`) on the user profile that should be matched.  This value parameter should be used where the data type of the schema attribute in `attribute_reference` is of type `STRING` or `INTEGER`.  Conflicts with `value_boolean`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#value SignOnPolicyAction#value}
  */
  readonly value?: string;
  /**
  * The boolean value of the attribute (declared in `attribute_reference`) on the user profile that should be matched.  This value parameter should be used where the data type of the schema attribute in `attribute_reference` is of type `BOOLEAN` (e.g `$${user.emailVerified}`, `$${user.verified}` and `$${user.mfaEnabled}`).  Conflicts with `value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#value_boolean SignOnPolicyAction#value_boolean}
  */
  readonly valueBoolean?: boolean | cdktf.IResolvable;
}

export function signOnPolicyActionConditionsUserAttributeEqualsToTerraform(struct?: SignOnPolicyActionConditionsUserAttributeEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_reference: cdktf.stringToTerraform(struct!.attributeReference),
    value: cdktf.stringToTerraform(struct!.value),
    value_boolean: cdktf.booleanToTerraform(struct!.valueBoolean),
  }
}


export function signOnPolicyActionConditionsUserAttributeEqualsToHclTerraform(struct?: SignOnPolicyActionConditionsUserAttributeEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_reference: {
      value: cdktf.stringToHclTerraform(struct!.attributeReference),
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
    value_boolean: {
      value: cdktf.booleanToHclTerraform(struct!.valueBoolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionConditionsUserAttributeEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignOnPolicyActionConditionsUserAttributeEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeReference = this._attributeReference;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueBoolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueBoolean = this._valueBoolean;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionConditionsUserAttributeEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeReference = undefined;
      this._value = undefined;
      this._valueBoolean = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeReference = value.attributeReference;
      this._value = value.value;
      this._valueBoolean = value.valueBoolean;
    }
  }

  // attribute_reference - computed: false, optional: false, required: true
  private _attributeReference?: string; 
  public get attributeReference() {
    return this.getStringAttribute('attribute_reference');
  }
  public set attributeReference(value: string) {
    this._attributeReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeReferenceInput() {
    return this._attributeReference;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_boolean - computed: false, optional: true, required: false
  private _valueBoolean?: boolean | cdktf.IResolvable; 
  public get valueBoolean() {
    return this.getBooleanAttribute('value_boolean');
  }
  public set valueBoolean(value: boolean | cdktf.IResolvable) {
    this._valueBoolean = value;
  }
  public resetValueBoolean() {
    this._valueBoolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueBooleanInput() {
    return this._valueBoolean;
  }
}

export class SignOnPolicyActionConditionsUserAttributeEqualsList extends cdktf.ComplexList {
  public internalValue? : SignOnPolicyActionConditionsUserAttributeEquals[] | cdktf.IResolvable

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
  public get(index: number): SignOnPolicyActionConditionsUserAttributeEqualsOutputReference {
    return new SignOnPolicyActionConditionsUserAttributeEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignOnPolicyActionConditions {
  /**
  * A boolean that specifies whether the user should be prompted for re-authentication on this action based on a detected anonymous network.  Applies to policy actions of type `mfa`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#anonymous_network_detected SignOnPolicyAction#anonymous_network_detected}
  */
  readonly anonymousNetworkDetected?: boolean | cdktf.IResolvable;
  /**
  * A list of allowed CIDR when an anonymous network is detected.  Applies to policy actions of type `mfa`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#anonymous_network_detected_allowed_cidr SignOnPolicyAction#anonymous_network_detected_allowed_cidr}
  */
  readonly anonymousNetworkDetectedAllowedCidr?: string[];
  /**
  * A boolean that specifies whether the user should be prompted for re-authentication on this action based on a detected geovelocity anomaly.  Applies to policy actions of type `mfa`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#geovelocity_anomaly_detected SignOnPolicyAction#geovelocity_anomaly_detected}
  */
  readonly geovelocityAnomalyDetected?: boolean | cdktf.IResolvable;
  /**
  * A list of strings that specifies the supported network IP addresses expressed as classless inter-domain routing (CIDR) strings.  Applies to policy actions of type `mfa`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#ip_out_of_range_cidr SignOnPolicyAction#ip_out_of_range_cidr}
  */
  readonly ipOutOfRangeCidr?: string[];
  /**
  * A boolean that specifies whether the user's IP risk should be used when evaluating this policy action.  A value of `HIGH` will prompt the user to authenticate with this action.  Applies to policy actions of type `mfa`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#ip_reputation_high_risk SignOnPolicyAction#ip_reputation_high_risk}
  */
  readonly ipReputationHighRisk?: boolean | cdktf.IResolvable;
  /**
  * Set the number of seconds by which the user will not be prompted for this action following the last successful authentication.  Applies to policy actions of type `identifier_first`, `identity_provider`, `login`, `mfa`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#last_sign_on_older_than_seconds SignOnPolicyAction#last_sign_on_older_than_seconds}
  */
  readonly lastSignOnOlderThanSeconds?: number;
  /**
  * Set the number of seconds by which the user will not be prompted for this action following the last successful authentication of an MFA authenticator device.  Applies to policy actions of type `mfa`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#last_sign_on_older_than_seconds_mfa SignOnPolicyAction#last_sign_on_older_than_seconds_mfa}
  */
  readonly lastSignOnOlderThanSecondsMfa?: number;
  /**
  * Activate this action only for users within the specified list of population IDs.  Applies to policy actions of type `identifier_first`, `login`, `mfa`, but cannot be set on policy actions where the priority is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#user_is_member_of_any_population_id SignOnPolicyAction#user_is_member_of_any_population_id}
  */
  readonly userIsMemberOfAnyPopulationId?: string[];
  /**
  * user_attribute_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#user_attribute_equals SignOnPolicyAction#user_attribute_equals}
  */
  readonly userAttributeEquals?: SignOnPolicyActionConditionsUserAttributeEquals[] | cdktf.IResolvable;
}

export function signOnPolicyActionConditionsToTerraform(struct?: SignOnPolicyActionConditionsOutputReference | SignOnPolicyActionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous_network_detected: cdktf.booleanToTerraform(struct!.anonymousNetworkDetected),
    anonymous_network_detected_allowed_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anonymousNetworkDetectedAllowedCidr),
    geovelocity_anomaly_detected: cdktf.booleanToTerraform(struct!.geovelocityAnomalyDetected),
    ip_out_of_range_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipOutOfRangeCidr),
    ip_reputation_high_risk: cdktf.booleanToTerraform(struct!.ipReputationHighRisk),
    last_sign_on_older_than_seconds: cdktf.numberToTerraform(struct!.lastSignOnOlderThanSeconds),
    last_sign_on_older_than_seconds_mfa: cdktf.numberToTerraform(struct!.lastSignOnOlderThanSecondsMfa),
    user_is_member_of_any_population_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIsMemberOfAnyPopulationId),
    user_attribute_equals: cdktf.listMapper(signOnPolicyActionConditionsUserAttributeEqualsToTerraform, true)(struct!.userAttributeEquals),
  }
}


export function signOnPolicyActionConditionsToHclTerraform(struct?: SignOnPolicyActionConditionsOutputReference | SignOnPolicyActionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous_network_detected: {
      value: cdktf.booleanToHclTerraform(struct!.anonymousNetworkDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anonymous_network_detected_allowed_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anonymousNetworkDetectedAllowedCidr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    geovelocity_anomaly_detected: {
      value: cdktf.booleanToHclTerraform(struct!.geovelocityAnomalyDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_out_of_range_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipOutOfRangeCidr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_reputation_high_risk: {
      value: cdktf.booleanToHclTerraform(struct!.ipReputationHighRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_sign_on_older_than_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lastSignOnOlderThanSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_sign_on_older_than_seconds_mfa: {
      value: cdktf.numberToHclTerraform(struct!.lastSignOnOlderThanSecondsMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_is_member_of_any_population_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIsMemberOfAnyPopulationId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_attribute_equals: {
      value: cdktf.listMapperHcl(signOnPolicyActionConditionsUserAttributeEqualsToHclTerraform, true)(struct!.userAttributeEquals),
      isBlock: true,
      type: "set",
      storageClassType: "SignOnPolicyActionConditionsUserAttributeEqualsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymousNetworkDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousNetworkDetected = this._anonymousNetworkDetected;
    }
    if (this._anonymousNetworkDetectedAllowedCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousNetworkDetectedAllowedCidr = this._anonymousNetworkDetectedAllowedCidr;
    }
    if (this._geovelocityAnomalyDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.geovelocityAnomalyDetected = this._geovelocityAnomalyDetected;
    }
    if (this._ipOutOfRangeCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOutOfRangeCidr = this._ipOutOfRangeCidr;
    }
    if (this._ipReputationHighRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationHighRisk = this._ipReputationHighRisk;
    }
    if (this._lastSignOnOlderThanSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSignOnOlderThanSeconds = this._lastSignOnOlderThanSeconds;
    }
    if (this._lastSignOnOlderThanSecondsMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSignOnOlderThanSecondsMfa = this._lastSignOnOlderThanSecondsMfa;
    }
    if (this._userIsMemberOfAnyPopulationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIsMemberOfAnyPopulationId = this._userIsMemberOfAnyPopulationId;
    }
    if (this._userAttributeEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributeEquals = this._userAttributeEquals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anonymousNetworkDetected = undefined;
      this._anonymousNetworkDetectedAllowedCidr = undefined;
      this._geovelocityAnomalyDetected = undefined;
      this._ipOutOfRangeCidr = undefined;
      this._ipReputationHighRisk = undefined;
      this._lastSignOnOlderThanSeconds = undefined;
      this._lastSignOnOlderThanSecondsMfa = undefined;
      this._userIsMemberOfAnyPopulationId = undefined;
      this._userAttributeEquals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anonymousNetworkDetected = value.anonymousNetworkDetected;
      this._anonymousNetworkDetectedAllowedCidr = value.anonymousNetworkDetectedAllowedCidr;
      this._geovelocityAnomalyDetected = value.geovelocityAnomalyDetected;
      this._ipOutOfRangeCidr = value.ipOutOfRangeCidr;
      this._ipReputationHighRisk = value.ipReputationHighRisk;
      this._lastSignOnOlderThanSeconds = value.lastSignOnOlderThanSeconds;
      this._lastSignOnOlderThanSecondsMfa = value.lastSignOnOlderThanSecondsMfa;
      this._userIsMemberOfAnyPopulationId = value.userIsMemberOfAnyPopulationId;
      this._userAttributeEquals.internalValue = value.userAttributeEquals;
    }
  }

  // anonymous_network_detected - computed: false, optional: true, required: false
  private _anonymousNetworkDetected?: boolean | cdktf.IResolvable; 
  public get anonymousNetworkDetected() {
    return this.getBooleanAttribute('anonymous_network_detected');
  }
  public set anonymousNetworkDetected(value: boolean | cdktf.IResolvable) {
    this._anonymousNetworkDetected = value;
  }
  public resetAnonymousNetworkDetected() {
    this._anonymousNetworkDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousNetworkDetectedInput() {
    return this._anonymousNetworkDetected;
  }

  // anonymous_network_detected_allowed_cidr - computed: false, optional: true, required: false
  private _anonymousNetworkDetectedAllowedCidr?: string[]; 
  public get anonymousNetworkDetectedAllowedCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('anonymous_network_detected_allowed_cidr'));
  }
  public set anonymousNetworkDetectedAllowedCidr(value: string[]) {
    this._anonymousNetworkDetectedAllowedCidr = value;
  }
  public resetAnonymousNetworkDetectedAllowedCidr() {
    this._anonymousNetworkDetectedAllowedCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousNetworkDetectedAllowedCidrInput() {
    return this._anonymousNetworkDetectedAllowedCidr;
  }

  // geovelocity_anomaly_detected - computed: false, optional: true, required: false
  private _geovelocityAnomalyDetected?: boolean | cdktf.IResolvable; 
  public get geovelocityAnomalyDetected() {
    return this.getBooleanAttribute('geovelocity_anomaly_detected');
  }
  public set geovelocityAnomalyDetected(value: boolean | cdktf.IResolvable) {
    this._geovelocityAnomalyDetected = value;
  }
  public resetGeovelocityAnomalyDetected() {
    this._geovelocityAnomalyDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geovelocityAnomalyDetectedInput() {
    return this._geovelocityAnomalyDetected;
  }

  // ip_out_of_range_cidr - computed: false, optional: true, required: false
  private _ipOutOfRangeCidr?: string[]; 
  public get ipOutOfRangeCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_out_of_range_cidr'));
  }
  public set ipOutOfRangeCidr(value: string[]) {
    this._ipOutOfRangeCidr = value;
  }
  public resetIpOutOfRangeCidr() {
    this._ipOutOfRangeCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOutOfRangeCidrInput() {
    return this._ipOutOfRangeCidr;
  }

  // ip_reputation_high_risk - computed: false, optional: true, required: false
  private _ipReputationHighRisk?: boolean | cdktf.IResolvable; 
  public get ipReputationHighRisk() {
    return this.getBooleanAttribute('ip_reputation_high_risk');
  }
  public set ipReputationHighRisk(value: boolean | cdktf.IResolvable) {
    this._ipReputationHighRisk = value;
  }
  public resetIpReputationHighRisk() {
    this._ipReputationHighRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationHighRiskInput() {
    return this._ipReputationHighRisk;
  }

  // last_sign_on_older_than_seconds - computed: false, optional: true, required: false
  private _lastSignOnOlderThanSeconds?: number; 
  public get lastSignOnOlderThanSeconds() {
    return this.getNumberAttribute('last_sign_on_older_than_seconds');
  }
  public set lastSignOnOlderThanSeconds(value: number) {
    this._lastSignOnOlderThanSeconds = value;
  }
  public resetLastSignOnOlderThanSeconds() {
    this._lastSignOnOlderThanSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSignOnOlderThanSecondsInput() {
    return this._lastSignOnOlderThanSeconds;
  }

  // last_sign_on_older_than_seconds_mfa - computed: false, optional: true, required: false
  private _lastSignOnOlderThanSecondsMfa?: number; 
  public get lastSignOnOlderThanSecondsMfa() {
    return this.getNumberAttribute('last_sign_on_older_than_seconds_mfa');
  }
  public set lastSignOnOlderThanSecondsMfa(value: number) {
    this._lastSignOnOlderThanSecondsMfa = value;
  }
  public resetLastSignOnOlderThanSecondsMfa() {
    this._lastSignOnOlderThanSecondsMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSignOnOlderThanSecondsMfaInput() {
    return this._lastSignOnOlderThanSecondsMfa;
  }

  // user_is_member_of_any_population_id - computed: false, optional: true, required: false
  private _userIsMemberOfAnyPopulationId?: string[]; 
  public get userIsMemberOfAnyPopulationId() {
    return cdktf.Fn.tolist(this.getListAttribute('user_is_member_of_any_population_id'));
  }
  public set userIsMemberOfAnyPopulationId(value: string[]) {
    this._userIsMemberOfAnyPopulationId = value;
  }
  public resetUserIsMemberOfAnyPopulationId() {
    this._userIsMemberOfAnyPopulationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIsMemberOfAnyPopulationIdInput() {
    return this._userIsMemberOfAnyPopulationId;
  }

  // user_attribute_equals - computed: false, optional: true, required: false
  private _userAttributeEquals = new SignOnPolicyActionConditionsUserAttributeEqualsList(this, "user_attribute_equals", true);
  public get userAttributeEquals() {
    return this._userAttributeEquals;
  }
  public putUserAttributeEquals(value: SignOnPolicyActionConditionsUserAttributeEquals[] | cdktf.IResolvable) {
    this._userAttributeEquals.internalValue = value;
  }
  public resetUserAttributeEquals() {
    this._userAttributeEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeEqualsInput() {
    return this._userAttributeEquals.internalValue;
  }
}
export interface SignOnPolicyActionIdentifierFirstDiscoveryRule {
  /**
  * Text to match on a user's username. Any users that don't match a discovery rule will authenticate against PingOne.  E.g `@pingidentity.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#attribute_contains_text SignOnPolicyAction#attribute_contains_text}
  */
  readonly attributeContainsText: string;
  /**
  * The ID that specifies the identity provider that will be used to authenticate the user if the condition is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#identity_provider_id SignOnPolicyAction#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function signOnPolicyActionIdentifierFirstDiscoveryRuleToTerraform(struct?: SignOnPolicyActionIdentifierFirstDiscoveryRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contains_text: cdktf.stringToTerraform(struct!.attributeContainsText),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function signOnPolicyActionIdentifierFirstDiscoveryRuleToHclTerraform(struct?: SignOnPolicyActionIdentifierFirstDiscoveryRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contains_text: {
      value: cdktf.stringToHclTerraform(struct!.attributeContainsText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionIdentifierFirstDiscoveryRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignOnPolicyActionIdentifierFirstDiscoveryRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContainsText !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContainsText = this._attributeContainsText;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionIdentifierFirstDiscoveryRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContainsText = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContainsText = value.attributeContainsText;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_contains_text - computed: false, optional: false, required: true
  private _attributeContainsText?: string; 
  public get attributeContainsText() {
    return this.getStringAttribute('attribute_contains_text');
  }
  public set attributeContainsText(value: string) {
    this._attributeContainsText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContainsTextInput() {
    return this._attributeContainsText;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}

export class SignOnPolicyActionIdentifierFirstDiscoveryRuleList extends cdktf.ComplexList {
  public internalValue? : SignOnPolicyActionIdentifierFirstDiscoveryRule[] | cdktf.IResolvable

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
  public get(index: number): SignOnPolicyActionIdentifierFirstDiscoveryRuleOutputReference {
    return new SignOnPolicyActionIdentifierFirstDiscoveryRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignOnPolicyActionIdentifierFirst {
  /**
  * A boolean that specifies whether account recovery features are active on the policy action. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#recovery_enabled SignOnPolicyAction#recovery_enabled}
  */
  readonly recoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * discovery_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#discovery_rule SignOnPolicyAction#discovery_rule}
  */
  readonly discoveryRule?: SignOnPolicyActionIdentifierFirstDiscoveryRule[] | cdktf.IResolvable;
}

export function signOnPolicyActionIdentifierFirstToTerraform(struct?: SignOnPolicyActionIdentifierFirstOutputReference | SignOnPolicyActionIdentifierFirst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_enabled: cdktf.booleanToTerraform(struct!.recoveryEnabled),
    discovery_rule: cdktf.listMapper(signOnPolicyActionIdentifierFirstDiscoveryRuleToTerraform, true)(struct!.discoveryRule),
  }
}


export function signOnPolicyActionIdentifierFirstToHclTerraform(struct?: SignOnPolicyActionIdentifierFirstOutputReference | SignOnPolicyActionIdentifierFirst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.recoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_rule: {
      value: cdktf.listMapperHcl(signOnPolicyActionIdentifierFirstDiscoveryRuleToHclTerraform, true)(struct!.discoveryRule),
      isBlock: true,
      type: "set",
      storageClassType: "SignOnPolicyActionIdentifierFirstDiscoveryRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionIdentifierFirstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionIdentifierFirst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryEnabled = this._recoveryEnabled;
    }
    if (this._discoveryRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryRule = this._discoveryRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionIdentifierFirst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryEnabled = undefined;
      this._discoveryRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryEnabled = value.recoveryEnabled;
      this._discoveryRule.internalValue = value.discoveryRule;
    }
  }

  // recovery_enabled - computed: false, optional: true, required: false
  private _recoveryEnabled?: boolean | cdktf.IResolvable; 
  public get recoveryEnabled() {
    return this.getBooleanAttribute('recovery_enabled');
  }
  public set recoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._recoveryEnabled = value;
  }
  public resetRecoveryEnabled() {
    this._recoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEnabledInput() {
    return this._recoveryEnabled;
  }

  // discovery_rule - computed: false, optional: true, required: false
  private _discoveryRule = new SignOnPolicyActionIdentifierFirstDiscoveryRuleList(this, "discovery_rule", true);
  public get discoveryRule() {
    return this._discoveryRule;
  }
  public putDiscoveryRule(value: SignOnPolicyActionIdentifierFirstDiscoveryRule[] | cdktf.IResolvable) {
    this._discoveryRule.internalValue = value;
  }
  public resetDiscoveryRule() {
    this._discoveryRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryRuleInput() {
    return this._discoveryRule.internalValue;
  }
}
export interface SignOnPolicyActionIdentityProvider {
  /**
  * A string that designates the sign-on policies included in the authorization flow request. Options can include the PingOne predefined sign-on policies, Single_Factor and Multi_Factor, or any custom defined sign-on policy names. Sign-on policy names should be listed in order of preference, and they must be assigned to the application. This property can be configured on the identity provider action and is passed to the identity provider if the identity provider is of type `SAML` or `OPENID_CONNECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#acr_values SignOnPolicyAction#acr_values}
  */
  readonly acrValues?: string;
  /**
  * A string that specifies the ID of the external identity provider to which the user is redirected for sign-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#identity_provider_id SignOnPolicyAction#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * A boolean that specifies whether to pass in a login hint to the identity provider on the sign on request. Based on user context, the login hint is set if (1) the user is set on the flow, and (2) the user already has an account link for the identity provider. If both of these conditions are true, then the user is sent to the identity provider with a login hint equal to their externalId for the identity provider (saved on the account link). If these conditions are not true, then the API checks see if there is an OIDC login hint on the flow. If so, that login hint is used. If none of these conditions are true, the login hint parameter is not included on the authorization request to the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#pass_user_context SignOnPolicyAction#pass_user_context}
  */
  readonly passUserContext?: boolean | cdktf.IResolvable;
}

export function signOnPolicyActionIdentityProviderToTerraform(struct?: SignOnPolicyActionIdentityProviderOutputReference | SignOnPolicyActionIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.stringToTerraform(struct!.acrValues),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    pass_user_context: cdktf.booleanToTerraform(struct!.passUserContext),
  }
}


export function signOnPolicyActionIdentityProviderToHclTerraform(struct?: SignOnPolicyActionIdentityProviderOutputReference | SignOnPolicyActionIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_values: {
      value: cdktf.stringToHclTerraform(struct!.acrValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_user_context: {
      value: cdktf.booleanToHclTerraform(struct!.passUserContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionIdentityProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionIdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._passUserContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.passUserContext = this._passUserContext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionIdentityProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acrValues = undefined;
      this._identityProviderId = undefined;
      this._passUserContext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acrValues = value.acrValues;
      this._identityProviderId = value.identityProviderId;
      this._passUserContext = value.passUserContext;
    }
  }

  // acr_values - computed: false, optional: true, required: false
  private _acrValues?: string; 
  public get acrValues() {
    return this.getStringAttribute('acr_values');
  }
  public set acrValues(value: string) {
    this._acrValues = value;
  }
  public resetAcrValues() {
    this._acrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // pass_user_context - computed: false, optional: true, required: false
  private _passUserContext?: boolean | cdktf.IResolvable; 
  public get passUserContext() {
    return this.getBooleanAttribute('pass_user_context');
  }
  public set passUserContext(value: boolean | cdktf.IResolvable) {
    this._passUserContext = value;
  }
  public resetPassUserContext() {
    this._passUserContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passUserContextInput() {
    return this._passUserContext;
  }
}
export interface SignOnPolicyActionLoginNewUserProvisioningGateway {
  /**
  * A string that specifies the UUID ID of the gateway instance.  The ID may come from the `id` parameter of the `pingone_gateway` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#id SignOnPolicyAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A string that specifies the type of the gateway. Currently, only `LDAP` is supported. Defaults to `LDAP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#type SignOnPolicyAction#type}
  */
  readonly type?: string;
  /**
  * A string that specifies the UUID ID of the user type within the gateway instance.  The ID may come from the `user_type[*].id` parameter of the `pingone_gateway` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#user_type_id SignOnPolicyAction#user_type_id}
  */
  readonly userTypeId: string;
}

export function signOnPolicyActionLoginNewUserProvisioningGatewayToTerraform(struct?: SignOnPolicyActionLoginNewUserProvisioningGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    user_type_id: cdktf.stringToTerraform(struct!.userTypeId),
  }
}


export function signOnPolicyActionLoginNewUserProvisioningGatewayToHclTerraform(struct?: SignOnPolicyActionLoginNewUserProvisioningGateway | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type_id: {
      value: cdktf.stringToHclTerraform(struct!.userTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionLoginNewUserProvisioningGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignOnPolicyActionLoginNewUserProvisioningGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTypeId = this._userTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionLoginNewUserProvisioningGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._userTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
      this._userTypeId = value.userTypeId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // user_type_id - computed: false, optional: false, required: true
  private _userTypeId?: string; 
  public get userTypeId() {
    return this.getStringAttribute('user_type_id');
  }
  public set userTypeId(value: string) {
    this._userTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeIdInput() {
    return this._userTypeId;
  }
}

export class SignOnPolicyActionLoginNewUserProvisioningGatewayList extends cdktf.ComplexList {
  public internalValue? : SignOnPolicyActionLoginNewUserProvisioningGateway[] | cdktf.IResolvable

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
  public get(index: number): SignOnPolicyActionLoginNewUserProvisioningGatewayOutputReference {
    return new SignOnPolicyActionLoginNewUserProvisioningGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignOnPolicyActionLoginNewUserProvisioning {
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#gateway SignOnPolicyAction#gateway}
  */
  readonly gateway: SignOnPolicyActionLoginNewUserProvisioningGateway[] | cdktf.IResolvable;
}

export function signOnPolicyActionLoginNewUserProvisioningToTerraform(struct?: SignOnPolicyActionLoginNewUserProvisioningOutputReference | SignOnPolicyActionLoginNewUserProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.listMapper(signOnPolicyActionLoginNewUserProvisioningGatewayToTerraform, true)(struct!.gateway),
  }
}


export function signOnPolicyActionLoginNewUserProvisioningToHclTerraform(struct?: SignOnPolicyActionLoginNewUserProvisioningOutputReference | SignOnPolicyActionLoginNewUserProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.listMapperHcl(signOnPolicyActionLoginNewUserProvisioningGatewayToHclTerraform, true)(struct!.gateway),
      isBlock: true,
      type: "set",
      storageClassType: "SignOnPolicyActionLoginNewUserProvisioningGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionLoginNewUserProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionLoginNewUserProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionLoginNewUserProvisioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gateway.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gateway.internalValue = value.gateway;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new SignOnPolicyActionLoginNewUserProvisioningGatewayList(this, "gateway", true);
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: SignOnPolicyActionLoginNewUserProvisioningGateway[] | cdktf.IResolvable) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }
}
export interface SignOnPolicyActionLogin {
  /**
  * A boolean that specifies whether account recovery features are active on the policy action. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#recovery_enabled SignOnPolicyAction#recovery_enabled}
  */
  readonly recoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * new_user_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#new_user_provisioning SignOnPolicyAction#new_user_provisioning}
  */
  readonly newUserProvisioning?: SignOnPolicyActionLoginNewUserProvisioning;
}

export function signOnPolicyActionLoginToTerraform(struct?: SignOnPolicyActionLoginOutputReference | SignOnPolicyActionLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_enabled: cdktf.booleanToTerraform(struct!.recoveryEnabled),
    new_user_provisioning: signOnPolicyActionLoginNewUserProvisioningToTerraform(struct!.newUserProvisioning),
  }
}


export function signOnPolicyActionLoginToHclTerraform(struct?: SignOnPolicyActionLoginOutputReference | SignOnPolicyActionLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.recoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    new_user_provisioning: {
      value: signOnPolicyActionLoginNewUserProvisioningToHclTerraform(struct!.newUserProvisioning),
      isBlock: true,
      type: "list",
      storageClassType: "SignOnPolicyActionLoginNewUserProvisioningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryEnabled = this._recoveryEnabled;
    }
    if (this._newUserProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUserProvisioning = this._newUserProvisioning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryEnabled = undefined;
      this._newUserProvisioning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryEnabled = value.recoveryEnabled;
      this._newUserProvisioning.internalValue = value.newUserProvisioning;
    }
  }

  // recovery_enabled - computed: false, optional: true, required: false
  private _recoveryEnabled?: boolean | cdktf.IResolvable; 
  public get recoveryEnabled() {
    return this.getBooleanAttribute('recovery_enabled');
  }
  public set recoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._recoveryEnabled = value;
  }
  public resetRecoveryEnabled() {
    this._recoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEnabledInput() {
    return this._recoveryEnabled;
  }

  // new_user_provisioning - computed: false, optional: true, required: false
  private _newUserProvisioning = new SignOnPolicyActionLoginNewUserProvisioningOutputReference(this, "new_user_provisioning");
  public get newUserProvisioning() {
    return this._newUserProvisioning;
  }
  public putNewUserProvisioning(value: SignOnPolicyActionLoginNewUserProvisioning) {
    this._newUserProvisioning.internalValue = value;
  }
  public resetNewUserProvisioning() {
    this._newUserProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserProvisioningInput() {
    return this._newUserProvisioning.internalValue;
  }
}
export interface SignOnPolicyActionMfa {
  /**
  * The ID of the MFA policy that should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#device_sign_on_policy_id SignOnPolicyAction#device_sign_on_policy_id}
  */
  readonly deviceSignOnPolicyId: string;
  /**
  * A string that specifies the device mode for the MFA flow. Options are `BYPASS` to allow MFA without a specified device, or `BLOCK` to block the MFA flow if no device is specified. To use this configuration option, the authorize request must include a signed `login_hint_token` property. For more information, see Authorize (Browserless and MFA Only Flows). Defaults to `BLOCK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#no_device_mode SignOnPolicyAction#no_device_mode}
  */
  readonly noDeviceMode?: string;
}

export function signOnPolicyActionMfaToTerraform(struct?: SignOnPolicyActionMfaOutputReference | SignOnPolicyActionMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_sign_on_policy_id: cdktf.stringToTerraform(struct!.deviceSignOnPolicyId),
    no_device_mode: cdktf.stringToTerraform(struct!.noDeviceMode),
  }
}


export function signOnPolicyActionMfaToHclTerraform(struct?: SignOnPolicyActionMfaOutputReference | SignOnPolicyActionMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_sign_on_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceSignOnPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_device_mode: {
      value: cdktf.stringToHclTerraform(struct!.noDeviceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceSignOnPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSignOnPolicyId = this._deviceSignOnPolicyId;
    }
    if (this._noDeviceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDeviceMode = this._noDeviceMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceSignOnPolicyId = undefined;
      this._noDeviceMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceSignOnPolicyId = value.deviceSignOnPolicyId;
      this._noDeviceMode = value.noDeviceMode;
    }
  }

  // device_sign_on_policy_id - computed: false, optional: false, required: true
  private _deviceSignOnPolicyId?: string; 
  public get deviceSignOnPolicyId() {
    return this.getStringAttribute('device_sign_on_policy_id');
  }
  public set deviceSignOnPolicyId(value: string) {
    this._deviceSignOnPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSignOnPolicyIdInput() {
    return this._deviceSignOnPolicyId;
  }

  // no_device_mode - computed: false, optional: true, required: false
  private _noDeviceMode?: string; 
  public get noDeviceMode() {
    return this.getStringAttribute('no_device_mode');
  }
  public set noDeviceMode(value: string) {
    this._noDeviceMode = value;
  }
  public resetNoDeviceMode() {
    this._noDeviceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeviceModeInput() {
    return this._noDeviceMode;
  }
}
export interface SignOnPolicyActionPingid {
}

export function signOnPolicyActionPingidToTerraform(struct?: SignOnPolicyActionPingidOutputReference | SignOnPolicyActionPingid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function signOnPolicyActionPingidToHclTerraform(struct?: SignOnPolicyActionPingidOutputReference | SignOnPolicyActionPingid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SignOnPolicyActionPingidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionPingid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionPingid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SignOnPolicyActionPingidWindowsLoginPasswordless {
  /**
  * A boolean that specifies whether to allow users to log in when PingOne and or PingID are not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#offline_mode_enabled SignOnPolicyAction#offline_mode_enabled}
  */
  readonly offlineModeEnabled: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the schema attribute to match against the provided identifier when searching for a user in the directory. Only unique attributes in the directory schema may be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#unique_user_attribute_name SignOnPolicyAction#unique_user_attribute_name}
  */
  readonly uniqueUserAttributeName: string;
}

export function signOnPolicyActionPingidWindowsLoginPasswordlessToTerraform(struct?: SignOnPolicyActionPingidWindowsLoginPasswordlessOutputReference | SignOnPolicyActionPingidWindowsLoginPasswordless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offline_mode_enabled: cdktf.booleanToTerraform(struct!.offlineModeEnabled),
    unique_user_attribute_name: cdktf.stringToTerraform(struct!.uniqueUserAttributeName),
  }
}


export function signOnPolicyActionPingidWindowsLoginPasswordlessToHclTerraform(struct?: SignOnPolicyActionPingidWindowsLoginPasswordlessOutputReference | SignOnPolicyActionPingidWindowsLoginPasswordless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offline_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.offlineModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique_user_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.uniqueUserAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionPingidWindowsLoginPasswordlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionPingidWindowsLoginPasswordless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offlineModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineModeEnabled = this._offlineModeEnabled;
    }
    if (this._uniqueUserAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueUserAttributeName = this._uniqueUserAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionPingidWindowsLoginPasswordless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offlineModeEnabled = undefined;
      this._uniqueUserAttributeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offlineModeEnabled = value.offlineModeEnabled;
      this._uniqueUserAttributeName = value.uniqueUserAttributeName;
    }
  }

  // offline_mode_enabled - computed: false, optional: false, required: true
  private _offlineModeEnabled?: boolean | cdktf.IResolvable; 
  public get offlineModeEnabled() {
    return this.getBooleanAttribute('offline_mode_enabled');
  }
  public set offlineModeEnabled(value: boolean | cdktf.IResolvable) {
    this._offlineModeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineModeEnabledInput() {
    return this._offlineModeEnabled;
  }

  // unique_user_attribute_name - computed: false, optional: false, required: true
  private _uniqueUserAttributeName?: string; 
  public get uniqueUserAttributeName() {
    return this.getStringAttribute('unique_user_attribute_name');
  }
  public set uniqueUserAttributeName(value: string) {
    this._uniqueUserAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueUserAttributeNameInput() {
    return this._uniqueUserAttributeName;
  }
}
export interface SignOnPolicyActionProgressiveProfilingAttribute {
  /**
  * A string that specifies the name and path of the user profile attribute as defined in the user schema (for example, email or address.postalCode).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#name SignOnPolicyAction#name}
  */
  readonly name: string;
  /**
  * A boolean that specifies whether the user is required to provide a value for the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#required SignOnPolicyAction#required}
  */
  readonly required: boolean | cdktf.IResolvable;
}

export function signOnPolicyActionProgressiveProfilingAttributeToTerraform(struct?: SignOnPolicyActionProgressiveProfilingAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function signOnPolicyActionProgressiveProfilingAttributeToHclTerraform(struct?: SignOnPolicyActionProgressiveProfilingAttribute | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionProgressiveProfilingAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignOnPolicyActionProgressiveProfilingAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionProgressiveProfilingAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
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

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class SignOnPolicyActionProgressiveProfilingAttributeList extends cdktf.ComplexList {
  public internalValue? : SignOnPolicyActionProgressiveProfilingAttribute[] | cdktf.IResolvable

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
  public get(index: number): SignOnPolicyActionProgressiveProfilingAttributeOutputReference {
    return new SignOnPolicyActionProgressiveProfilingAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignOnPolicyActionProgressiveProfiling {
  /**
  * A boolean that specifies whether the progressive profiling action will not be executed if another progressive profiling action has already been executed during the flow. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#prevent_multiple_prompts_per_flow SignOnPolicyAction#prevent_multiple_prompts_per_flow}
  */
  readonly preventMultiplePromptsPerFlow?: boolean | cdktf.IResolvable;
  /**
  * An integer that specifies how often to prompt the user to provide profile data for the configured attributes for which they do not have values. Defaults to `7776000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#prompt_interval_seconds SignOnPolicyAction#prompt_interval_seconds}
  */
  readonly promptIntervalSeconds?: number;
  /**
  * A string that specifies text to display to the user when prompting for attribute values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#prompt_text SignOnPolicyAction#prompt_text}
  */
  readonly promptText: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#attribute SignOnPolicyAction#attribute}
  */
  readonly attribute: SignOnPolicyActionProgressiveProfilingAttribute[] | cdktf.IResolvable;
}

export function signOnPolicyActionProgressiveProfilingToTerraform(struct?: SignOnPolicyActionProgressiveProfilingOutputReference | SignOnPolicyActionProgressiveProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_multiple_prompts_per_flow: cdktf.booleanToTerraform(struct!.preventMultiplePromptsPerFlow),
    prompt_interval_seconds: cdktf.numberToTerraform(struct!.promptIntervalSeconds),
    prompt_text: cdktf.stringToTerraform(struct!.promptText),
    attribute: cdktf.listMapper(signOnPolicyActionProgressiveProfilingAttributeToTerraform, true)(struct!.attribute),
  }
}


export function signOnPolicyActionProgressiveProfilingToHclTerraform(struct?: SignOnPolicyActionProgressiveProfilingOutputReference | SignOnPolicyActionProgressiveProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prevent_multiple_prompts_per_flow: {
      value: cdktf.booleanToHclTerraform(struct!.preventMultiplePromptsPerFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.promptIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prompt_text: {
      value: cdktf.stringToHclTerraform(struct!.promptText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute: {
      value: cdktf.listMapperHcl(signOnPolicyActionProgressiveProfilingAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "set",
      storageClassType: "SignOnPolicyActionProgressiveProfilingAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignOnPolicyActionProgressiveProfilingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignOnPolicyActionProgressiveProfiling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preventMultiplePromptsPerFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventMultiplePromptsPerFlow = this._preventMultiplePromptsPerFlow;
    }
    if (this._promptIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptIntervalSeconds = this._promptIntervalSeconds;
    }
    if (this._promptText !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptText = this._promptText;
    }
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignOnPolicyActionProgressiveProfiling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preventMultiplePromptsPerFlow = undefined;
      this._promptIntervalSeconds = undefined;
      this._promptText = undefined;
      this._attribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preventMultiplePromptsPerFlow = value.preventMultiplePromptsPerFlow;
      this._promptIntervalSeconds = value.promptIntervalSeconds;
      this._promptText = value.promptText;
      this._attribute.internalValue = value.attribute;
    }
  }

  // prevent_multiple_prompts_per_flow - computed: false, optional: true, required: false
  private _preventMultiplePromptsPerFlow?: boolean | cdktf.IResolvable; 
  public get preventMultiplePromptsPerFlow() {
    return this.getBooleanAttribute('prevent_multiple_prompts_per_flow');
  }
  public set preventMultiplePromptsPerFlow(value: boolean | cdktf.IResolvable) {
    this._preventMultiplePromptsPerFlow = value;
  }
  public resetPreventMultiplePromptsPerFlow() {
    this._preventMultiplePromptsPerFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventMultiplePromptsPerFlowInput() {
    return this._preventMultiplePromptsPerFlow;
  }

  // prompt_interval_seconds - computed: false, optional: true, required: false
  private _promptIntervalSeconds?: number; 
  public get promptIntervalSeconds() {
    return this.getNumberAttribute('prompt_interval_seconds');
  }
  public set promptIntervalSeconds(value: number) {
    this._promptIntervalSeconds = value;
  }
  public resetPromptIntervalSeconds() {
    this._promptIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptIntervalSecondsInput() {
    return this._promptIntervalSeconds;
  }

  // prompt_text - computed: false, optional: false, required: true
  private _promptText?: string; 
  public get promptText() {
    return this.getStringAttribute('prompt_text');
  }
  public set promptText(value: string) {
    this._promptText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTextInput() {
    return this._promptText;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute = new SignOnPolicyActionProgressiveProfilingAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: SignOnPolicyActionProgressiveProfilingAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action pingone_sign_on_policy_action}
*/
export class SignOnPolicyAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_sign_on_policy_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignOnPolicyAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignOnPolicyAction to import
  * @param importFromId The id of the existing SignOnPolicyAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignOnPolicyAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_sign_on_policy_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/sign_on_policy_action pingone_sign_on_policy_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignOnPolicyActionConfig
  */
  public constructor(scope: Construct, id: string, config: SignOnPolicyActionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_sign_on_policy_action',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforceLockoutForIdentityProviders = config.enforceLockoutForIdentityProviders;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._priority = config.priority;
    this._registrationConfirmUserAttributes = config.registrationConfirmUserAttributes;
    this._registrationExternalHref = config.registrationExternalHref;
    this._registrationLocalPopulationId = config.registrationLocalPopulationId;
    this._signOnPolicyId = config.signOnPolicyId;
    this._socialProviderIds = config.socialProviderIds;
    this._agreement.internalValue = config.agreement;
    this._conditions.internalValue = config.conditions;
    this._identifierFirst.internalValue = config.identifierFirst;
    this._identityProvider.internalValue = config.identityProvider;
    this._login.internalValue = config.login;
    this._mfa.internalValue = config.mfa;
    this._pingid.internalValue = config.pingid;
    this._pingidWindowsLoginPasswordless.internalValue = config.pingidWindowsLoginPasswordless;
    this._progressiveProfiling.internalValue = config.progressiveProfiling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforce_lockout_for_identity_providers - computed: false, optional: true, required: false
  private _enforceLockoutForIdentityProviders?: boolean | cdktf.IResolvable; 
  public get enforceLockoutForIdentityProviders() {
    return this.getBooleanAttribute('enforce_lockout_for_identity_providers');
  }
  public set enforceLockoutForIdentityProviders(value: boolean | cdktf.IResolvable) {
    this._enforceLockoutForIdentityProviders = value;
  }
  public resetEnforceLockoutForIdentityProviders() {
    this._enforceLockoutForIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceLockoutForIdentityProvidersInput() {
    return this._enforceLockoutForIdentityProviders;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // registration_confirm_user_attributes - computed: false, optional: true, required: false
  private _registrationConfirmUserAttributes?: boolean | cdktf.IResolvable; 
  public get registrationConfirmUserAttributes() {
    return this.getBooleanAttribute('registration_confirm_user_attributes');
  }
  public set registrationConfirmUserAttributes(value: boolean | cdktf.IResolvable) {
    this._registrationConfirmUserAttributes = value;
  }
  public resetRegistrationConfirmUserAttributes() {
    this._registrationConfirmUserAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfirmUserAttributesInput() {
    return this._registrationConfirmUserAttributes;
  }

  // registration_external_href - computed: false, optional: true, required: false
  private _registrationExternalHref?: string; 
  public get registrationExternalHref() {
    return this.getStringAttribute('registration_external_href');
  }
  public set registrationExternalHref(value: string) {
    this._registrationExternalHref = value;
  }
  public resetRegistrationExternalHref() {
    this._registrationExternalHref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationExternalHrefInput() {
    return this._registrationExternalHref;
  }

  // registration_local_population_id - computed: false, optional: true, required: false
  private _registrationLocalPopulationId?: string; 
  public get registrationLocalPopulationId() {
    return this.getStringAttribute('registration_local_population_id');
  }
  public set registrationLocalPopulationId(value: string) {
    this._registrationLocalPopulationId = value;
  }
  public resetRegistrationLocalPopulationId() {
    this._registrationLocalPopulationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationLocalPopulationIdInput() {
    return this._registrationLocalPopulationId;
  }

  // sign_on_policy_id - computed: false, optional: false, required: true
  private _signOnPolicyId?: string; 
  public get signOnPolicyId() {
    return this.getStringAttribute('sign_on_policy_id');
  }
  public set signOnPolicyId(value: string) {
    this._signOnPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signOnPolicyIdInput() {
    return this._signOnPolicyId;
  }

  // social_provider_ids - computed: false, optional: true, required: false
  private _socialProviderIds?: string[]; 
  public get socialProviderIds() {
    return cdktf.Fn.tolist(this.getListAttribute('social_provider_ids'));
  }
  public set socialProviderIds(value: string[]) {
    this._socialProviderIds = value;
  }
  public resetSocialProviderIds() {
    this._socialProviderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialProviderIdsInput() {
    return this._socialProviderIds;
  }

  // agreement - computed: false, optional: true, required: false
  private _agreement = new SignOnPolicyActionAgreementOutputReference(this, "agreement");
  public get agreement() {
    return this._agreement;
  }
  public putAgreement(value: SignOnPolicyActionAgreement) {
    this._agreement.internalValue = value;
  }
  public resetAgreement() {
    this._agreement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementInput() {
    return this._agreement.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SignOnPolicyActionConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SignOnPolicyActionConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // identifier_first - computed: false, optional: true, required: false
  private _identifierFirst = new SignOnPolicyActionIdentifierFirstOutputReference(this, "identifier_first");
  public get identifierFirst() {
    return this._identifierFirst;
  }
  public putIdentifierFirst(value: SignOnPolicyActionIdentifierFirst) {
    this._identifierFirst.internalValue = value;
  }
  public resetIdentifierFirst() {
    this._identifierFirst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierFirstInput() {
    return this._identifierFirst.internalValue;
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider = new SignOnPolicyActionIdentityProviderOutputReference(this, "identity_provider");
  public get identityProvider() {
    return this._identityProvider;
  }
  public putIdentityProvider(value: SignOnPolicyActionIdentityProvider) {
    this._identityProvider.internalValue = value;
  }
  public resetIdentityProvider() {
    this._identityProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider.internalValue;
  }

  // login - computed: false, optional: true, required: false
  private _login = new SignOnPolicyActionLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: SignOnPolicyActionLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new SignOnPolicyActionMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: SignOnPolicyActionMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // pingid - computed: false, optional: true, required: false
  private _pingid = new SignOnPolicyActionPingidOutputReference(this, "pingid");
  public get pingid() {
    return this._pingid;
  }
  public putPingid(value: SignOnPolicyActionPingid) {
    this._pingid.internalValue = value;
  }
  public resetPingid() {
    this._pingid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingidInput() {
    return this._pingid.internalValue;
  }

  // pingid_windows_login_passwordless - computed: false, optional: true, required: false
  private _pingidWindowsLoginPasswordless = new SignOnPolicyActionPingidWindowsLoginPasswordlessOutputReference(this, "pingid_windows_login_passwordless");
  public get pingidWindowsLoginPasswordless() {
    return this._pingidWindowsLoginPasswordless;
  }
  public putPingidWindowsLoginPasswordless(value: SignOnPolicyActionPingidWindowsLoginPasswordless) {
    this._pingidWindowsLoginPasswordless.internalValue = value;
  }
  public resetPingidWindowsLoginPasswordless() {
    this._pingidWindowsLoginPasswordless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingidWindowsLoginPasswordlessInput() {
    return this._pingidWindowsLoginPasswordless.internalValue;
  }

  // progressive_profiling - computed: false, optional: true, required: false
  private _progressiveProfiling = new SignOnPolicyActionProgressiveProfilingOutputReference(this, "progressive_profiling");
  public get progressiveProfiling() {
    return this._progressiveProfiling;
  }
  public putProgressiveProfiling(value: SignOnPolicyActionProgressiveProfiling) {
    this._progressiveProfiling.internalValue = value;
  }
  public resetProgressiveProfiling() {
    this._progressiveProfiling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressiveProfilingInput() {
    return this._progressiveProfiling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforce_lockout_for_identity_providers: cdktf.booleanToTerraform(this._enforceLockoutForIdentityProviders),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      registration_confirm_user_attributes: cdktf.booleanToTerraform(this._registrationConfirmUserAttributes),
      registration_external_href: cdktf.stringToTerraform(this._registrationExternalHref),
      registration_local_population_id: cdktf.stringToTerraform(this._registrationLocalPopulationId),
      sign_on_policy_id: cdktf.stringToTerraform(this._signOnPolicyId),
      social_provider_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._socialProviderIds),
      agreement: signOnPolicyActionAgreementToTerraform(this._agreement.internalValue),
      conditions: signOnPolicyActionConditionsToTerraform(this._conditions.internalValue),
      identifier_first: signOnPolicyActionIdentifierFirstToTerraform(this._identifierFirst.internalValue),
      identity_provider: signOnPolicyActionIdentityProviderToTerraform(this._identityProvider.internalValue),
      login: signOnPolicyActionLoginToTerraform(this._login.internalValue),
      mfa: signOnPolicyActionMfaToTerraform(this._mfa.internalValue),
      pingid: signOnPolicyActionPingidToTerraform(this._pingid.internalValue),
      pingid_windows_login_passwordless: signOnPolicyActionPingidWindowsLoginPasswordlessToTerraform(this._pingidWindowsLoginPasswordless.internalValue),
      progressive_profiling: signOnPolicyActionProgressiveProfilingToTerraform(this._progressiveProfiling.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforce_lockout_for_identity_providers: {
        value: cdktf.booleanToHclTerraform(this._enforceLockoutForIdentityProviders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registration_confirm_user_attributes: {
        value: cdktf.booleanToHclTerraform(this._registrationConfirmUserAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registration_external_href: {
        value: cdktf.stringToHclTerraform(this._registrationExternalHref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_local_population_id: {
        value: cdktf.stringToHclTerraform(this._registrationLocalPopulationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_on_policy_id: {
        value: cdktf.stringToHclTerraform(this._signOnPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      social_provider_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._socialProviderIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agreement: {
        value: signOnPolicyActionAgreementToHclTerraform(this._agreement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionAgreementList",
      },
      conditions: {
        value: signOnPolicyActionConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionConditionsList",
      },
      identifier_first: {
        value: signOnPolicyActionIdentifierFirstToHclTerraform(this._identifierFirst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionIdentifierFirstList",
      },
      identity_provider: {
        value: signOnPolicyActionIdentityProviderToHclTerraform(this._identityProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionIdentityProviderList",
      },
      login: {
        value: signOnPolicyActionLoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionLoginList",
      },
      mfa: {
        value: signOnPolicyActionMfaToHclTerraform(this._mfa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionMfaList",
      },
      pingid: {
        value: signOnPolicyActionPingidToHclTerraform(this._pingid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionPingidList",
      },
      pingid_windows_login_passwordless: {
        value: signOnPolicyActionPingidWindowsLoginPasswordlessToHclTerraform(this._pingidWindowsLoginPasswordless.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionPingidWindowsLoginPasswordlessList",
      },
      progressive_profiling: {
        value: signOnPolicyActionProgressiveProfilingToHclTerraform(this._progressiveProfiling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignOnPolicyActionProgressiveProfilingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
