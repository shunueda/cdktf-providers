// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}
  */
  readonly allowedChars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}
  */
  readonly dictionaryDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}
  */
  readonly dictionaryLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}
  */
  readonly dictionaryWordDisallowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}
  */
  readonly disallowedChars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}
  */
  readonly disallowedSubstrings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}
  */
  readonly disallowedUserAttributeValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}
  */
  readonly distinctCharacters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}
  */
  readonly firstNameDisallowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}
  */
  readonly forcePasswordReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}
  */
  readonly lastNameDisallowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}
  */
  readonly lockoutDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}
  */
  readonly maxIncorrectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}
  */
  readonly maxRepeatedChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}
  */
  readonly maxSpecialChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}
  */
  readonly minAlphaNumerals?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}
  */
  readonly minAlphas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}
  */
  readonly minLowerCase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}
  */
  readonly minNumerals?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}
  */
  readonly minPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}
  */
  readonly minSpecialChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}
  */
  readonly minUniqueChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}
  */
  readonly minUpperCase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}
  */
  readonly numPasswordsInHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}
  */
  readonly passwordExpireWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}
  */
  readonly passwordExpiresAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}
  */
  readonly passwordStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}
  */
  readonly requiredChars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}
  */
  readonly startsWithAlphabet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}
  */
  readonly userNameDisallowed?: boolean | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}
  */
  readonly groups?: IdentityDomainsPasswordPolicyGroups[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}
  */
  readonly tags?: IdentityDomainsPasswordPolicyTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}
  */
  readonly timeouts?: IdentityDomainsPasswordPolicyTimeouts;
}
export interface IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules {
}

export function identityDomainsPasswordPolicyConfiguredPasswordPolicyRulesToTerraform(struct?: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsPasswordPolicyConfiguredPasswordPolicyRulesToHclTerraform(struct?: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference {
    return new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsPasswordPolicyIdcsCreatedBy {
}

export function identityDomainsPasswordPolicyIdcsCreatedByToTerraform(struct?: IdentityDomainsPasswordPolicyIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsPasswordPolicyIdcsCreatedByToHclTerraform(struct?: IdentityDomainsPasswordPolicyIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsPasswordPolicyIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsPasswordPolicyIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsPasswordPolicyIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference {
    return new IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsPasswordPolicyIdcsLastModifiedBy {
}

export function identityDomainsPasswordPolicyIdcsLastModifiedByToTerraform(struct?: IdentityDomainsPasswordPolicyIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsPasswordPolicyIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsPasswordPolicyIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsPasswordPolicyIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsPasswordPolicyIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsPasswordPolicyIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference {
    return new IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsPasswordPolicyMeta {
}

export function identityDomainsPasswordPolicyMetaToTerraform(struct?: IdentityDomainsPasswordPolicyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsPasswordPolicyMetaToHclTerraform(struct?: IdentityDomainsPasswordPolicyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsPasswordPolicyMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityDomainsPasswordPolicyMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsPasswordPolicyMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsPasswordPolicyMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsPasswordPolicyMetaOutputReference {
    return new IdentityDomainsPasswordPolicyMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsPasswordPolicyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}
  */
  readonly value: string;
}

export function identityDomainsPasswordPolicyGroupsToTerraform(struct?: IdentityDomainsPasswordPolicyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsPasswordPolicyGroupsToHclTerraform(struct?: IdentityDomainsPasswordPolicyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsPasswordPolicyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsPasswordPolicyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsPasswordPolicyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

export class IdentityDomainsPasswordPolicyGroupsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsPasswordPolicyGroups[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsPasswordPolicyGroupsOutputReference {
    return new IdentityDomainsPasswordPolicyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsPasswordPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}
  */
  readonly value: string;
}

export function identityDomainsPasswordPolicyTagsToTerraform(struct?: IdentityDomainsPasswordPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsPasswordPolicyTagsToHclTerraform(struct?: IdentityDomainsPasswordPolicyTags | cdktf.IResolvable): any {
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

export class IdentityDomainsPasswordPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsPasswordPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsPasswordPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class IdentityDomainsPasswordPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsPasswordPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsPasswordPolicyTagsOutputReference {
    return new IdentityDomainsPasswordPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsPasswordPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}
  */
  readonly update?: string;
}

export function identityDomainsPasswordPolicyTimeoutsToTerraform(struct?: IdentityDomainsPasswordPolicyTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsPasswordPolicyTimeoutsToHclTerraform(struct?: IdentityDomainsPasswordPolicyTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsPasswordPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsPasswordPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsPasswordPolicyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy oci_identity_domains_password_policy}
*/
export class IdentityDomainsPasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsPasswordPolicy to import
  * @param importFromId The id of the existing IdentityDomainsPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsPasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_password_policy oci_identity_domains_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsPasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsPasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedChars = config.allowedChars;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._description = config.description;
    this._dictionaryDelimiter = config.dictionaryDelimiter;
    this._dictionaryLocation = config.dictionaryLocation;
    this._dictionaryWordDisallowed = config.dictionaryWordDisallowed;
    this._disallowedChars = config.disallowedChars;
    this._disallowedSubstrings = config.disallowedSubstrings;
    this._disallowedUserAttributeValues = config.disallowedUserAttributeValues;
    this._distinctCharacters = config.distinctCharacters;
    this._externalId = config.externalId;
    this._firstNameDisallowed = config.firstNameDisallowed;
    this._forcePasswordReset = config.forcePasswordReset;
    this._idcsEndpoint = config.idcsEndpoint;
    this._lastNameDisallowed = config.lastNameDisallowed;
    this._lockoutDuration = config.lockoutDuration;
    this._maxIncorrectAttempts = config.maxIncorrectAttempts;
    this._maxLength = config.maxLength;
    this._maxRepeatedChars = config.maxRepeatedChars;
    this._maxSpecialChars = config.maxSpecialChars;
    this._minAlphaNumerals = config.minAlphaNumerals;
    this._minAlphas = config.minAlphas;
    this._minLength = config.minLength;
    this._minLowerCase = config.minLowerCase;
    this._minNumerals = config.minNumerals;
    this._minPasswordAge = config.minPasswordAge;
    this._minSpecialChars = config.minSpecialChars;
    this._minUniqueChars = config.minUniqueChars;
    this._minUpperCase = config.minUpperCase;
    this._name = config.name;
    this._numPasswordsInHistory = config.numPasswordsInHistory;
    this._ocid = config.ocid;
    this._passwordExpireWarning = config.passwordExpireWarning;
    this._passwordExpiresAfter = config.passwordExpiresAfter;
    this._passwordStrength = config.passwordStrength;
    this._priority = config.priority;
    this._requiredChars = config.requiredChars;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._startsWithAlphabet = config.startsWithAlphabet;
    this._userNameDisallowed = config.userNameDisallowed;
    this._groups.internalValue = config.groups;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_chars - computed: true, optional: true, required: false
  private _allowedChars?: string; 
  public get allowedChars() {
    return this.getStringAttribute('allowed_chars');
  }
  public set allowedChars(value: string) {
    this._allowedChars = value;
  }
  public resetAllowedChars() {
    this._allowedChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCharsInput() {
    return this._allowedChars;
  }

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // configured_password_policy_rules - computed: true, optional: false, required: false
  private _configuredPasswordPolicyRules = new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(this, "configured_password_policy_rules", false);
  public get configuredPasswordPolicyRules() {
    return this._configuredPasswordPolicyRules;
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: true, required: false
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

  // dictionary_delimiter - computed: true, optional: true, required: false
  private _dictionaryDelimiter?: string; 
  public get dictionaryDelimiter() {
    return this.getStringAttribute('dictionary_delimiter');
  }
  public set dictionaryDelimiter(value: string) {
    this._dictionaryDelimiter = value;
  }
  public resetDictionaryDelimiter() {
    this._dictionaryDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryDelimiterInput() {
    return this._dictionaryDelimiter;
  }

  // dictionary_location - computed: true, optional: true, required: false
  private _dictionaryLocation?: string; 
  public get dictionaryLocation() {
    return this.getStringAttribute('dictionary_location');
  }
  public set dictionaryLocation(value: string) {
    this._dictionaryLocation = value;
  }
  public resetDictionaryLocation() {
    this._dictionaryLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryLocationInput() {
    return this._dictionaryLocation;
  }

  // dictionary_word_disallowed - computed: true, optional: true, required: false
  private _dictionaryWordDisallowed?: boolean | cdktf.IResolvable; 
  public get dictionaryWordDisallowed() {
    return this.getBooleanAttribute('dictionary_word_disallowed');
  }
  public set dictionaryWordDisallowed(value: boolean | cdktf.IResolvable) {
    this._dictionaryWordDisallowed = value;
  }
  public resetDictionaryWordDisallowed() {
    this._dictionaryWordDisallowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryWordDisallowedInput() {
    return this._dictionaryWordDisallowed;
  }

  // disallowed_chars - computed: true, optional: true, required: false
  private _disallowedChars?: string; 
  public get disallowedChars() {
    return this.getStringAttribute('disallowed_chars');
  }
  public set disallowedChars(value: string) {
    this._disallowedChars = value;
  }
  public resetDisallowedChars() {
    this._disallowedChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedCharsInput() {
    return this._disallowedChars;
  }

  // disallowed_substrings - computed: true, optional: true, required: false
  private _disallowedSubstrings?: string[]; 
  public get disallowedSubstrings() {
    return this.getListAttribute('disallowed_substrings');
  }
  public set disallowedSubstrings(value: string[]) {
    this._disallowedSubstrings = value;
  }
  public resetDisallowedSubstrings() {
    this._disallowedSubstrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedSubstringsInput() {
    return this._disallowedSubstrings;
  }

  // disallowed_user_attribute_values - computed: true, optional: true, required: false
  private _disallowedUserAttributeValues?: string[]; 
  public get disallowedUserAttributeValues() {
    return this.getListAttribute('disallowed_user_attribute_values');
  }
  public set disallowedUserAttributeValues(value: string[]) {
    this._disallowedUserAttributeValues = value;
  }
  public resetDisallowedUserAttributeValues() {
    this._disallowedUserAttributeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedUserAttributeValuesInput() {
    return this._disallowedUserAttributeValues;
  }

  // distinct_characters - computed: true, optional: true, required: false
  private _distinctCharacters?: number; 
  public get distinctCharacters() {
    return this.getNumberAttribute('distinct_characters');
  }
  public set distinctCharacters(value: number) {
    this._distinctCharacters = value;
  }
  public resetDistinctCharacters() {
    this._distinctCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctCharactersInput() {
    return this._distinctCharacters;
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // external_id - computed: true, optional: true, required: false
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

  // first_name_disallowed - computed: true, optional: true, required: false
  private _firstNameDisallowed?: boolean | cdktf.IResolvable; 
  public get firstNameDisallowed() {
    return this.getBooleanAttribute('first_name_disallowed');
  }
  public set firstNameDisallowed(value: boolean | cdktf.IResolvable) {
    this._firstNameDisallowed = value;
  }
  public resetFirstNameDisallowed() {
    this._firstNameDisallowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameDisallowedInput() {
    return this._firstNameDisallowed;
  }

  // force_password_reset - computed: true, optional: true, required: false
  private _forcePasswordReset?: boolean | cdktf.IResolvable; 
  public get forcePasswordReset() {
    return this.getBooleanAttribute('force_password_reset');
  }
  public set forcePasswordReset(value: boolean | cdktf.IResolvable) {
    this._forcePasswordReset = value;
  }
  public resetForcePasswordReset() {
    this._forcePasswordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePasswordResetInput() {
    return this._forcePasswordReset;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsPasswordPolicyIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsPasswordPolicyIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // last_name_disallowed - computed: true, optional: true, required: false
  private _lastNameDisallowed?: boolean | cdktf.IResolvable; 
  public get lastNameDisallowed() {
    return this.getBooleanAttribute('last_name_disallowed');
  }
  public set lastNameDisallowed(value: boolean | cdktf.IResolvable) {
    this._lastNameDisallowed = value;
  }
  public resetLastNameDisallowed() {
    this._lastNameDisallowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameDisallowedInput() {
    return this._lastNameDisallowed;
  }

  // lockout_duration - computed: true, optional: true, required: false
  private _lockoutDuration?: number; 
  public get lockoutDuration() {
    return this.getNumberAttribute('lockout_duration');
  }
  public set lockoutDuration(value: number) {
    this._lockoutDuration = value;
  }
  public resetLockoutDuration() {
    this._lockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutDurationInput() {
    return this._lockoutDuration;
  }

  // max_incorrect_attempts - computed: true, optional: true, required: false
  private _maxIncorrectAttempts?: number; 
  public get maxIncorrectAttempts() {
    return this.getNumberAttribute('max_incorrect_attempts');
  }
  public set maxIncorrectAttempts(value: number) {
    this._maxIncorrectAttempts = value;
  }
  public resetMaxIncorrectAttempts() {
    this._maxIncorrectAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncorrectAttemptsInput() {
    return this._maxIncorrectAttempts;
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_repeated_chars - computed: true, optional: true, required: false
  private _maxRepeatedChars?: number; 
  public get maxRepeatedChars() {
    return this.getNumberAttribute('max_repeated_chars');
  }
  public set maxRepeatedChars(value: number) {
    this._maxRepeatedChars = value;
  }
  public resetMaxRepeatedChars() {
    this._maxRepeatedChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRepeatedCharsInput() {
    return this._maxRepeatedChars;
  }

  // max_special_chars - computed: true, optional: true, required: false
  private _maxSpecialChars?: number; 
  public get maxSpecialChars() {
    return this.getNumberAttribute('max_special_chars');
  }
  public set maxSpecialChars(value: number) {
    this._maxSpecialChars = value;
  }
  public resetMaxSpecialChars() {
    this._maxSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpecialCharsInput() {
    return this._maxSpecialChars;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsPasswordPolicyMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // min_alpha_numerals - computed: true, optional: true, required: false
  private _minAlphaNumerals?: number; 
  public get minAlphaNumerals() {
    return this.getNumberAttribute('min_alpha_numerals');
  }
  public set minAlphaNumerals(value: number) {
    this._minAlphaNumerals = value;
  }
  public resetMinAlphaNumerals() {
    this._minAlphaNumerals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAlphaNumeralsInput() {
    return this._minAlphaNumerals;
  }

  // min_alphas - computed: true, optional: true, required: false
  private _minAlphas?: number; 
  public get minAlphas() {
    return this.getNumberAttribute('min_alphas');
  }
  public set minAlphas(value: number) {
    this._minAlphas = value;
  }
  public resetMinAlphas() {
    this._minAlphas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAlphasInput() {
    return this._minAlphas;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_lower_case - computed: true, optional: true, required: false
  private _minLowerCase?: number; 
  public get minLowerCase() {
    return this.getNumberAttribute('min_lower_case');
  }
  public set minLowerCase(value: number) {
    this._minLowerCase = value;
  }
  public resetMinLowerCase() {
    this._minLowerCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerCaseInput() {
    return this._minLowerCase;
  }

  // min_numerals - computed: true, optional: true, required: false
  private _minNumerals?: number; 
  public get minNumerals() {
    return this.getNumberAttribute('min_numerals');
  }
  public set minNumerals(value: number) {
    this._minNumerals = value;
  }
  public resetMinNumerals() {
    this._minNumerals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumeralsInput() {
    return this._minNumerals;
  }

  // min_password_age - computed: true, optional: true, required: false
  private _minPasswordAge?: number; 
  public get minPasswordAge() {
    return this.getNumberAttribute('min_password_age');
  }
  public set minPasswordAge(value: number) {
    this._minPasswordAge = value;
  }
  public resetMinPasswordAge() {
    this._minPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordAgeInput() {
    return this._minPasswordAge;
  }

  // min_special_chars - computed: true, optional: true, required: false
  private _minSpecialChars?: number; 
  public get minSpecialChars() {
    return this.getNumberAttribute('min_special_chars');
  }
  public set minSpecialChars(value: number) {
    this._minSpecialChars = value;
  }
  public resetMinSpecialChars() {
    this._minSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialCharsInput() {
    return this._minSpecialChars;
  }

  // min_unique_chars - computed: true, optional: true, required: false
  private _minUniqueChars?: number; 
  public get minUniqueChars() {
    return this.getNumberAttribute('min_unique_chars');
  }
  public set minUniqueChars(value: number) {
    this._minUniqueChars = value;
  }
  public resetMinUniqueChars() {
    this._minUniqueChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUniqueCharsInput() {
    return this._minUniqueChars;
  }

  // min_upper_case - computed: true, optional: true, required: false
  private _minUpperCase?: number; 
  public get minUpperCase() {
    return this.getNumberAttribute('min_upper_case');
  }
  public set minUpperCase(value: number) {
    this._minUpperCase = value;
  }
  public resetMinUpperCase() {
    this._minUpperCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperCaseInput() {
    return this._minUpperCase;
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

  // num_passwords_in_history - computed: true, optional: true, required: false
  private _numPasswordsInHistory?: number; 
  public get numPasswordsInHistory() {
    return this.getNumberAttribute('num_passwords_in_history');
  }
  public set numPasswordsInHistory(value: number) {
    this._numPasswordsInHistory = value;
  }
  public resetNumPasswordsInHistory() {
    this._numPasswordsInHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPasswordsInHistoryInput() {
    return this._numPasswordsInHistory;
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // password_expire_warning - computed: true, optional: true, required: false
  private _passwordExpireWarning?: number; 
  public get passwordExpireWarning() {
    return this.getNumberAttribute('password_expire_warning');
  }
  public set passwordExpireWarning(value: number) {
    this._passwordExpireWarning = value;
  }
  public resetPasswordExpireWarning() {
    this._passwordExpireWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpireWarningInput() {
    return this._passwordExpireWarning;
  }

  // password_expires_after - computed: true, optional: true, required: false
  private _passwordExpiresAfter?: number; 
  public get passwordExpiresAfter() {
    return this.getNumberAttribute('password_expires_after');
  }
  public set passwordExpiresAfter(value: number) {
    this._passwordExpiresAfter = value;
  }
  public resetPasswordExpiresAfter() {
    this._passwordExpiresAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiresAfterInput() {
    return this._passwordExpiresAfter;
  }

  // password_strength - computed: true, optional: true, required: false
  private _passwordStrength?: string; 
  public get passwordStrength() {
    return this.getStringAttribute('password_strength');
  }
  public set passwordStrength(value: string) {
    this._passwordStrength = value;
  }
  public resetPasswordStrength() {
    this._passwordStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStrengthInput() {
    return this._passwordStrength;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // required_chars - computed: true, optional: true, required: false
  private _requiredChars?: string; 
  public get requiredChars() {
    return this.getStringAttribute('required_chars');
  }
  public set requiredChars(value: string) {
    this._requiredChars = value;
  }
  public resetRequiredChars() {
    this._requiredChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCharsInput() {
    return this._requiredChars;
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // starts_with_alphabet - computed: true, optional: true, required: false
  private _startsWithAlphabet?: boolean | cdktf.IResolvable; 
  public get startsWithAlphabet() {
    return this.getBooleanAttribute('starts_with_alphabet');
  }
  public set startsWithAlphabet(value: boolean | cdktf.IResolvable) {
    this._startsWithAlphabet = value;
  }
  public resetStartsWithAlphabet() {
    this._startsWithAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithAlphabetInput() {
    return this._startsWithAlphabet;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // user_name_disallowed - computed: true, optional: true, required: false
  private _userNameDisallowed?: boolean | cdktf.IResolvable; 
  public get userNameDisallowed() {
    return this.getBooleanAttribute('user_name_disallowed');
  }
  public set userNameDisallowed(value: boolean | cdktf.IResolvable) {
    this._userNameDisallowed = value;
  }
  public resetUserNameDisallowed() {
    this._userNameDisallowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameDisallowedInput() {
    return this._userNameDisallowed;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new IdentityDomainsPasswordPolicyGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: IdentityDomainsPasswordPolicyGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsPasswordPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsPasswordPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsPasswordPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsPasswordPolicyTimeouts) {
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
      allowed_chars: cdktf.stringToTerraform(this._allowedChars),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      description: cdktf.stringToTerraform(this._description),
      dictionary_delimiter: cdktf.stringToTerraform(this._dictionaryDelimiter),
      dictionary_location: cdktf.stringToTerraform(this._dictionaryLocation),
      dictionary_word_disallowed: cdktf.booleanToTerraform(this._dictionaryWordDisallowed),
      disallowed_chars: cdktf.stringToTerraform(this._disallowedChars),
      disallowed_substrings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedSubstrings),
      disallowed_user_attribute_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedUserAttributeValues),
      distinct_characters: cdktf.numberToTerraform(this._distinctCharacters),
      external_id: cdktf.stringToTerraform(this._externalId),
      first_name_disallowed: cdktf.booleanToTerraform(this._firstNameDisallowed),
      force_password_reset: cdktf.booleanToTerraform(this._forcePasswordReset),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      last_name_disallowed: cdktf.booleanToTerraform(this._lastNameDisallowed),
      lockout_duration: cdktf.numberToTerraform(this._lockoutDuration),
      max_incorrect_attempts: cdktf.numberToTerraform(this._maxIncorrectAttempts),
      max_length: cdktf.numberToTerraform(this._maxLength),
      max_repeated_chars: cdktf.numberToTerraform(this._maxRepeatedChars),
      max_special_chars: cdktf.numberToTerraform(this._maxSpecialChars),
      min_alpha_numerals: cdktf.numberToTerraform(this._minAlphaNumerals),
      min_alphas: cdktf.numberToTerraform(this._minAlphas),
      min_length: cdktf.numberToTerraform(this._minLength),
      min_lower_case: cdktf.numberToTerraform(this._minLowerCase),
      min_numerals: cdktf.numberToTerraform(this._minNumerals),
      min_password_age: cdktf.numberToTerraform(this._minPasswordAge),
      min_special_chars: cdktf.numberToTerraform(this._minSpecialChars),
      min_unique_chars: cdktf.numberToTerraform(this._minUniqueChars),
      min_upper_case: cdktf.numberToTerraform(this._minUpperCase),
      name: cdktf.stringToTerraform(this._name),
      num_passwords_in_history: cdktf.numberToTerraform(this._numPasswordsInHistory),
      ocid: cdktf.stringToTerraform(this._ocid),
      password_expire_warning: cdktf.numberToTerraform(this._passwordExpireWarning),
      password_expires_after: cdktf.numberToTerraform(this._passwordExpiresAfter),
      password_strength: cdktf.stringToTerraform(this._passwordStrength),
      priority: cdktf.numberToTerraform(this._priority),
      required_chars: cdktf.stringToTerraform(this._requiredChars),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      starts_with_alphabet: cdktf.booleanToTerraform(this._startsWithAlphabet),
      user_name_disallowed: cdktf.booleanToTerraform(this._userNameDisallowed),
      groups: cdktf.listMapper(identityDomainsPasswordPolicyGroupsToTerraform, true)(this._groups.internalValue),
      tags: cdktf.listMapper(identityDomainsPasswordPolicyTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsPasswordPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_chars: {
        value: cdktf.stringToHclTerraform(this._allowedChars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_delimiter: {
        value: cdktf.stringToHclTerraform(this._dictionaryDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_location: {
        value: cdktf.stringToHclTerraform(this._dictionaryLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_word_disallowed: {
        value: cdktf.booleanToHclTerraform(this._dictionaryWordDisallowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disallowed_chars: {
        value: cdktf.stringToHclTerraform(this._disallowedChars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_substrings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disallowedSubstrings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disallowed_user_attribute_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disallowedUserAttributeValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      distinct_characters: {
        value: cdktf.numberToHclTerraform(this._distinctCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_disallowed: {
        value: cdktf.booleanToHclTerraform(this._firstNameDisallowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_password_reset: {
        value: cdktf.booleanToHclTerraform(this._forcePasswordReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name_disallowed: {
        value: cdktf.booleanToHclTerraform(this._lastNameDisallowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lockout_duration: {
        value: cdktf.numberToHclTerraform(this._lockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_incorrect_attempts: {
        value: cdktf.numberToHclTerraform(this._maxIncorrectAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_length: {
        value: cdktf.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_repeated_chars: {
        value: cdktf.numberToHclTerraform(this._maxRepeatedChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_special_chars: {
        value: cdktf.numberToHclTerraform(this._maxSpecialChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_alpha_numerals: {
        value: cdktf.numberToHclTerraform(this._minAlphaNumerals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_alphas: {
        value: cdktf.numberToHclTerraform(this._minAlphas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_length: {
        value: cdktf.numberToHclTerraform(this._minLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_lower_case: {
        value: cdktf.numberToHclTerraform(this._minLowerCase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_numerals: {
        value: cdktf.numberToHclTerraform(this._minNumerals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_password_age: {
        value: cdktf.numberToHclTerraform(this._minPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_special_chars: {
        value: cdktf.numberToHclTerraform(this._minSpecialChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_unique_chars: {
        value: cdktf.numberToHclTerraform(this._minUniqueChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_upper_case: {
        value: cdktf.numberToHclTerraform(this._minUpperCase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_passwords_in_history: {
        value: cdktf.numberToHclTerraform(this._numPasswordsInHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expire_warning: {
        value: cdktf.numberToHclTerraform(this._passwordExpireWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_expires_after: {
        value: cdktf.numberToHclTerraform(this._passwordExpiresAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_strength: {
        value: cdktf.stringToHclTerraform(this._passwordStrength),
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
      required_chars: {
        value: cdktf.stringToHclTerraform(this._requiredChars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      starts_with_alphabet: {
        value: cdktf.booleanToHclTerraform(this._startsWithAlphabet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_name_disallowed: {
        value: cdktf.booleanToHclTerraform(this._userNameDisallowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(identityDomainsPasswordPolicyGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsPasswordPolicyGroupsList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsPasswordPolicyTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsPasswordPolicyTagsList",
      },
      timeouts: {
        value: identityDomainsPasswordPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsPasswordPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
