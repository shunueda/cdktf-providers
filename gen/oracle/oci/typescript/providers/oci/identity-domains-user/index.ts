// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#active IdentityDomainsUser#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#attribute_sets IdentityDomainsUser#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#attributes IdentityDomainsUser#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#authorization IdentityDomainsUser#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#description IdentityDomainsUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display_name IdentityDomainsUser#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#external_id IdentityDomainsUser#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#force_delete IdentityDomainsUser#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#idcs_endpoint IdentityDomainsUser#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#locale IdentityDomainsUser#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#nick_name IdentityDomainsUser#nick_name}
  */
  readonly nickName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#ocid IdentityDomainsUser#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#password IdentityDomainsUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#preferred_language IdentityDomainsUser#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#profile_url IdentityDomainsUser#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#resource_type_schema_version IdentityDomainsUser#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#schemas IdentityDomainsUser#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#timezone IdentityDomainsUser#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#title IdentityDomainsUser#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#user_name IdentityDomainsUser#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#user_type IdentityDomainsUser#user_type}
  */
  readonly userType?: string;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#addresses IdentityDomainsUser#addresses}
  */
  readonly addresses?: IdentityDomainsUserAddresses[] | cdktf.IResolvable;
  /**
  * emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#emails IdentityDomainsUser#emails}
  */
  readonly emails?: IdentityDomainsUserEmails[] | cdktf.IResolvable;
  /**
  * entitlements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#entitlements IdentityDomainsUser#entitlements}
  */
  readonly entitlements?: IdentityDomainsUserEntitlements[] | cdktf.IResolvable;
  /**
  * ims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#ims IdentityDomainsUser#ims}
  */
  readonly ims?: IdentityDomainsUserIms[] | cdktf.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#name IdentityDomainsUser#name}
  */
  readonly name?: IdentityDomainsUserName;
  /**
  * phone_numbers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#phone_numbers IdentityDomainsUser#phone_numbers}
  */
  readonly phoneNumbers?: IdentityDomainsUserPhoneNumbers[] | cdktf.IResolvable;
  /**
  * photos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#photos IdentityDomainsUser#photos}
  */
  readonly photos?: IdentityDomainsUserPhotos[] | cdktf.IResolvable;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#roles IdentityDomainsUser#roles}
  */
  readonly roles?: IdentityDomainsUserRoles[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#tags IdentityDomainsUser#tags}
  */
  readonly tags?: IdentityDomainsUserTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#timeouts IdentityDomainsUser#timeouts}
  */
  readonly timeouts?: IdentityDomainsUserTimeouts;
  /**
  * urnietfparamsscimschemasextensionenterprise20user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasextensionenterprise20user IdentityDomainsUser#urnietfparamsscimschemasextensionenterprise20user}
  */
  readonly urnietfparamsscimschemasextensionenterprise20User?: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User;
  /**
  * urnietfparamsscimschemasoracleidcsextension_oci_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextension_oci_tags IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextension_oci_tags}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionOciTags?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags;
  /**
  * urnietfparamsscimschemasoracleidcsextensionadaptive_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionadaptive_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionadaptive_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionadaptiveUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensioncapabilities_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensioncapabilities_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensioncapabilities_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensiondb_credentials_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensiondb_credentials_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensiondb_credentials_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionkerberos_user_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionkerberos_user_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionkerberos_user_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionkerberosUserUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionmfa_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionmfa_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionmfa_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionmfaUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionpasswordless_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionpasswordless_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionpasswordless_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionpasswordlessUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionposix_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionposix_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionposix_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionposixUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionself_change_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionself_change_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionself_change_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionself_registration_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionself_registration_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionself_registration_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionsff_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionsff_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionsff_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionsffUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionsocial_account_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionsocial_account_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionsocial_account_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionsocialAccountUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionterms_of_use_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionterms_of_use_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionterms_of_use_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionuser_state_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionuser_state_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionuser_state_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionuserStateUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser;
  /**
  * urnietfparamsscimschemasoracleidcsextensionuser_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#urnietfparamsscimschemasoracleidcsextensionuser_user IdentityDomainsUser#urnietfparamsscimschemasoracleidcsextensionuser_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionuserUser?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser;
  /**
  * x509certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#x509certificates IdentityDomainsUser#x509certificates}
  */
  readonly x509Certificates?: IdentityDomainsUserX509Certificates[] | cdktf.IResolvable;
}
export interface IdentityDomainsUserGroups {
}

export function identityDomainsUserGroupsToTerraform(struct?: IdentityDomainsUserGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserGroupsToHclTerraform(struct?: IdentityDomainsUserGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_added - computed: true, optional: false, required: false
  public get dateAdded() {
    return this.getStringAttribute('date_added');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // membership_ocid - computed: true, optional: false, required: false
  public get membershipOcid() {
    return this.getStringAttribute('membership_ocid');
  }

  // non_unique_display - computed: true, optional: false, required: false
  public get nonUniqueDisplay() {
    return this.getStringAttribute('non_unique_display');
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

export class IdentityDomainsUserGroupsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserGroupsOutputReference {
    return new IdentityDomainsUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserIdcsCreatedBy {
}

export function identityDomainsUserIdcsCreatedByToTerraform(struct?: IdentityDomainsUserIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserIdcsCreatedByToHclTerraform(struct?: IdentityDomainsUserIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserIdcsCreatedBy | undefined) {
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

export class IdentityDomainsUserIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserIdcsCreatedByOutputReference {
    return new IdentityDomainsUserIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserIdcsLastModifiedBy {
}

export function identityDomainsUserIdcsLastModifiedByToTerraform(struct?: IdentityDomainsUserIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsUserIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserIdcsLastModifiedBy | undefined) {
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

export class IdentityDomainsUserIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserIdcsLastModifiedByOutputReference {
    return new IdentityDomainsUserIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserMeta {
}

export function identityDomainsUserMetaToTerraform(struct?: IdentityDomainsUserMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserMetaToHclTerraform(struct?: IdentityDomainsUserMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserMeta | undefined) {
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

export class IdentityDomainsUserMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserMetaOutputReference {
    return new IdentityDomainsUserMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_global_roles - computed: true, optional: false, required: false
  public get dbGlobalRoles() {
    return this.getListAttribute('db_global_roles');
  }

  // domain_level_schema - computed: true, optional: false, required: false
  public get domainLevelSchema() {
    return this.getStringAttribute('domain_level_schema');
  }

  // instance_level_schema - computed: true, optional: false, required: false
  public get instanceLevelSchema() {
    return this.getStringAttribute('instance_level_schema');
  }

  // is_db_user - computed: true, optional: false, required: false
  public get isDbUser() {
    return this.getBooleanAttribute('is_db_user');
  }

  // password_verifiers - computed: true, optional: false, required: false
  private _passwordVerifiers = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersList(this, "password_verifiers", false);
  public get passwordVerifiers() {
    return this._passwordVerifiers;
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy | undefined) {
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_password_policy - computed: true, optional: false, required: false
  private _applicablePasswordPolicy = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyList(this, "applicable_password_policy", false);
  public get applicablePasswordPolicy() {
    return this._applicablePasswordPolicy;
  }

  // cant_change - computed: true, optional: false, required: false
  public get cantChange() {
    return this.getBooleanAttribute('cant_change');
  }

  // cant_expire - computed: true, optional: false, required: false
  public get cantExpire() {
    return this.getBooleanAttribute('cant_expire');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // last_failed_validation_date - computed: true, optional: false, required: false
  public get lastFailedValidationDate() {
    return this.getStringAttribute('last_failed_validation_date');
  }

  // last_successful_set_date - computed: true, optional: false, required: false
  public get lastSuccessfulSetDate() {
    return this.getStringAttribute('last_successful_set_date');
  }

  // last_successful_validation_date - computed: true, optional: false, required: false
  public get lastSuccessfulValidationDate() {
    return this.getStringAttribute('last_successful_validation_date');
  }

  // must_change - computed: true, optional: false, required: false
  public get mustChange() {
    return this.getBooleanAttribute('must_change');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys | undefined) {
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

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // auth_tokens - computed: true, optional: false, required: false
  private _authTokens = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensList(this, "auth_tokens", false);
  public get authTokens() {
    return this._authTokens;
  }

  // customer_secret_keys - computed: true, optional: false, required: false
  private _customerSecretKeys = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysList(this, "customer_secret_keys", false);
  public get customerSecretKeys() {
    return this._customerSecretKeys;
  }

  // db_credentials - computed: true, optional: false, required: false
  private _dbCredentials = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsList(this, "db_credentials", false);
  public get dbCredentials() {
    return this._dbCredentials;
  }

  // o_auth2client_credentials - computed: true, optional: false, required: false
  private _oAuth2ClientCredentials = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsList(this, "o_auth2client_credentials", false);
  public get oAuth2ClientCredentials() {
    return this._oAuth2ClientCredentials;
  }

  // smtp_credentials - computed: true, optional: false, required: false
  private _smtpCredentials = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsList(this, "smtp_credentials", false);
  public get smtpCredentials() {
    return this._smtpCredentials;
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#country IdentityDomainsUser#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#formatted IdentityDomainsUser#formatted}
  */
  readonly formatted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#locality IdentityDomainsUser#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#postal_code IdentityDomainsUser#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#region IdentityDomainsUser#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#street_address IdentityDomainsUser#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
}

export function identityDomainsUserAddressesToTerraform(struct?: IdentityDomainsUserAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    formatted: cdktf.stringToTerraform(struct!.formatted),
    locality: cdktf.stringToTerraform(struct!.locality),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    primary: cdktf.booleanToTerraform(struct!.primary),
    region: cdktf.stringToTerraform(struct!.region),
    street_address: cdktf.stringToTerraform(struct!.streetAddress),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function identityDomainsUserAddressesToHclTerraform(struct?: IdentityDomainsUserAddresses | cdktf.IResolvable): any {
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

export class IdentityDomainsUserAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._formatted !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatted = this._formatted;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
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

  public set internalValue(value: IdentityDomainsUserAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._formatted = undefined;
      this._locality = undefined;
      this._postalCode = undefined;
      this._primary = undefined;
      this._region = undefined;
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
      this._formatted = value.formatted;
      this._locality = value.locality;
      this._postalCode = value.postalCode;
      this._primary = value.primary;
      this._region = value.region;
      this._streetAddress = value.streetAddress;
      this._type = value.type;
    }
  }

  // country - computed: true, optional: true, required: false
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

  // formatted - computed: true, optional: true, required: false
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

  // locality - computed: true, optional: true, required: false
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

  // postal_code - computed: true, optional: true, required: false
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

  // primary - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
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

  // street_address - computed: true, optional: true, required: false
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

export class IdentityDomainsUserAddressesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserAddresses[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserAddressesOutputReference {
    return new IdentityDomainsUserAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserEmails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#secondary IdentityDomainsUser#secondary}
  */
  readonly secondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#verified IdentityDomainsUser#verified}
  */
  readonly verified?: boolean | cdktf.IResolvable;
}

export function identityDomainsUserEmailsToTerraform(struct?: IdentityDomainsUserEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    secondary: cdktf.booleanToTerraform(struct!.secondary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    verified: cdktf.booleanToTerraform(struct!.verified),
  }
}


export function identityDomainsUserEmailsToHclTerraform(struct?: IdentityDomainsUserEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secondary: {
      value: cdktf.booleanToHclTerraform(struct!.secondary),
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
    verified: {
      value: cdktf.booleanToHclTerraform(struct!.verified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._verified !== undefined) {
      hasAnyValues = true;
      internalValueResult.verified = this._verified;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
      this._type = undefined;
      this._value = undefined;
      this._verified = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
      this._type = value.type;
      this._value = value.value;
      this._verified = value.verified;
    }
  }

  // pending_verification_data - computed: true, optional: false, required: false
  public get pendingVerificationData() {
    return this.getStringAttribute('pending_verification_data');
  }

  // primary - computed: true, optional: true, required: false
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

  // secondary - computed: true, optional: true, required: false
  private _secondary?: boolean | cdktf.IResolvable; 
  public get secondary() {
    return this.getBooleanAttribute('secondary');
  }
  public set secondary(value: boolean | cdktf.IResolvable) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
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

  // verified - computed: true, optional: true, required: false
  private _verified?: boolean | cdktf.IResolvable; 
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
  public set verified(value: boolean | cdktf.IResolvable) {
    this._verified = value;
  }
  public resetVerified() {
    this._verified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedInput() {
    return this._verified;
  }
}

export class IdentityDomainsUserEmailsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserEmails[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserEmailsOutputReference {
    return new IdentityDomainsUserEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserEntitlements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserEntitlementsToTerraform(struct?: IdentityDomainsUserEntitlements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserEntitlementsToHclTerraform(struct?: IdentityDomainsUserEntitlements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserEntitlements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserEntitlements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
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
      this._display = value.display;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
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

  // primary - computed: true, optional: true, required: false
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

export class IdentityDomainsUserEntitlementsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserEntitlements[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserEntitlementsOutputReference {
    return new IdentityDomainsUserEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserIms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserImsToTerraform(struct?: IdentityDomainsUserIms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserImsToHclTerraform(struct?: IdentityDomainsUserIms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserImsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserIms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserIms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
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
      this._display = value.display;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
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

  // primary - computed: true, optional: true, required: false
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

export class IdentityDomainsUserImsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserIms[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserImsOutputReference {
    return new IdentityDomainsUserImsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#family_name IdentityDomainsUser#family_name}
  */
  readonly familyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#formatted IdentityDomainsUser#formatted}
  */
  readonly formatted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#given_name IdentityDomainsUser#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#honorific_prefix IdentityDomainsUser#honorific_prefix}
  */
  readonly honorificPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#honorific_suffix IdentityDomainsUser#honorific_suffix}
  */
  readonly honorificSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#middle_name IdentityDomainsUser#middle_name}
  */
  readonly middleName?: string;
}

export function identityDomainsUserNameToTerraform(struct?: IdentityDomainsUserNameOutputReference | IdentityDomainsUserName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_name: cdktf.stringToTerraform(struct!.familyName),
    formatted: cdktf.stringToTerraform(struct!.formatted),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    honorific_prefix: cdktf.stringToTerraform(struct!.honorificPrefix),
    honorific_suffix: cdktf.stringToTerraform(struct!.honorificSuffix),
    middle_name: cdktf.stringToTerraform(struct!.middleName),
  }
}


export function identityDomainsUserNameToHclTerraform(struct?: IdentityDomainsUserNameOutputReference | IdentityDomainsUserName): any {
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
    formatted: {
      value: cdktf.stringToHclTerraform(struct!.formatted),
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
    honorific_prefix: {
      value: cdktf.stringToHclTerraform(struct!.honorificPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    honorific_suffix: {
      value: cdktf.stringToHclTerraform(struct!.honorificSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle_name: {
      value: cdktf.stringToHclTerraform(struct!.middleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._formatted !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatted = this._formatted;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._honorificPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorificPrefix = this._honorificPrefix;
    }
    if (this._honorificSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorificSuffix = this._honorificSuffix;
    }
    if (this._middleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleName = this._middleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._familyName = undefined;
      this._formatted = undefined;
      this._givenName = undefined;
      this._honorificPrefix = undefined;
      this._honorificSuffix = undefined;
      this._middleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._familyName = value.familyName;
      this._formatted = value.formatted;
      this._givenName = value.givenName;
      this._honorificPrefix = value.honorificPrefix;
      this._honorificSuffix = value.honorificSuffix;
      this._middleName = value.middleName;
    }
  }

  // family_name - computed: true, optional: true, required: false
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  public resetFamilyName() {
    this._familyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // formatted - computed: true, optional: true, required: false
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

  // given_name - computed: true, optional: true, required: false
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

  // honorific_prefix - computed: true, optional: true, required: false
  private _honorificPrefix?: string; 
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }
  public set honorificPrefix(value: string) {
    this._honorificPrefix = value;
  }
  public resetHonorificPrefix() {
    this._honorificPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificPrefixInput() {
    return this._honorificPrefix;
  }

  // honorific_suffix - computed: true, optional: true, required: false
  private _honorificSuffix?: string; 
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }
  public set honorificSuffix(value: string) {
    this._honorificSuffix = value;
  }
  public resetHonorificSuffix() {
    this._honorificSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificSuffixInput() {
    return this._honorificSuffix;
  }

  // middle_name - computed: true, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }
}
export interface IdentityDomainsUserPhoneNumbers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserPhoneNumbersToTerraform(struct?: IdentityDomainsUserPhoneNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserPhoneNumbersToHclTerraform(struct?: IdentityDomainsUserPhoneNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsUserPhoneNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserPhoneNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IdentityDomainsUserPhoneNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: true, required: false
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

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
}

export class IdentityDomainsUserPhoneNumbersList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserPhoneNumbers[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserPhoneNumbersOutputReference {
    return new IdentityDomainsUserPhoneNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserPhotos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserPhotosToTerraform(struct?: IdentityDomainsUserPhotos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserPhotosToHclTerraform(struct?: IdentityDomainsUserPhotos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserPhotosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserPhotos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserPhotos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
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
      this._display = value.display;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
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

  // primary - computed: true, optional: true, required: false
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

export class IdentityDomainsUserPhotosList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserPhotos[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserPhotosOutputReference {
    return new IdentityDomainsUserPhotosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserRolesToTerraform(struct?: IdentityDomainsUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserRolesToHclTerraform(struct?: IdentityDomainsUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
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
      this._display = value.display;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
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

  // primary - computed: true, optional: true, required: false
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

export class IdentityDomainsUserRolesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserRoles[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserRolesOutputReference {
    return new IdentityDomainsUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#key IdentityDomainsUser#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserTagsToTerraform(struct?: IdentityDomainsUserTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserTagsToHclTerraform(struct?: IdentityDomainsUserTags | cdktf.IResolvable): any {
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

export class IdentityDomainsUserTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsUserTags | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsUserTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserTagsOutputReference {
    return new IdentityDomainsUserTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#create IdentityDomainsUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#delete IdentityDomainsUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#update IdentityDomainsUser#update}
  */
  readonly update?: string;
}

export function identityDomainsUserTimeoutsToTerraform(struct?: IdentityDomainsUserTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsUserTimeoutsToHclTerraform(struct?: IdentityDomainsUserTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsUserTimeouts | cdktf.IResolvable | undefined) {
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
export interface IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value?: string;
}

export function identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference | IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference | IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager): any {
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

export class IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: true, required: false
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
}
export interface IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#cost_center IdentityDomainsUser#cost_center}
  */
  readonly costCenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#department IdentityDomainsUser#department}
  */
  readonly department?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#division IdentityDomainsUser#division}
  */
  readonly division?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#employee_number IdentityDomainsUser#employee_number}
  */
  readonly employeeNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#organization IdentityDomainsUser#organization}
  */
  readonly organization?: string;
  /**
  * manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#manager IdentityDomainsUser#manager}
  */
  readonly manager?: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager;
}

export function identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_center: cdktf.stringToTerraform(struct!.costCenter),
    department: cdktf.stringToTerraform(struct!.department),
    division: cdktf.stringToTerraform(struct!.division),
    employee_number: cdktf.stringToTerraform(struct!.employeeNumber),
    organization: cdktf.stringToTerraform(struct!.organization),
    manager: identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerToTerraform(struct!.manager),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User): any {
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
    department: {
      value: cdktf.stringToHclTerraform(struct!.department),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    division: {
      value: cdktf.stringToHclTerraform(struct!.division),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    employee_number: {
      value: cdktf.stringToHclTerraform(struct!.employeeNumber),
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
    manager: {
      value: identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerToHclTerraform(struct!.manager),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCenter = this._costCenter;
    }
    if (this._department !== undefined) {
      hasAnyValues = true;
      internalValueResult.department = this._department;
    }
    if (this._division !== undefined) {
      hasAnyValues = true;
      internalValueResult.division = this._division;
    }
    if (this._employeeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.employeeNumber = this._employeeNumber;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._manager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manager = this._manager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCenter = undefined;
      this._department = undefined;
      this._division = undefined;
      this._employeeNumber = undefined;
      this._organization = undefined;
      this._manager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCenter = value.costCenter;
      this._department = value.department;
      this._division = value.division;
      this._employeeNumber = value.employeeNumber;
      this._organization = value.organization;
      this._manager.internalValue = value.manager;
    }
  }

  // cost_center - computed: true, optional: true, required: false
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

  // department - computed: true, optional: true, required: false
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

  // division - computed: true, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
  }

  // employee_number - computed: true, optional: true, required: false
  private _employeeNumber?: string; 
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }
  public set employeeNumber(value: string) {
    this._employeeNumber = value;
  }
  public resetEmployeeNumber() {
    this._employeeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeNumberInput() {
    return this._employeeNumber;
  }

  // organization - computed: true, optional: true, required: false
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

  // manager - computed: false, optional: true, required: false
  private _manager = new IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference(this, "manager");
  public get manager() {
    return this._manager;
  }
  public putManager(value: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager) {
    this._manager.internalValue = value;
  }
  public resetManager() {
    this._manager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#key IdentityDomainsUser#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#namespace IdentityDomainsUser#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#key IdentityDomainsUser#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable): any {
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags {
  /**
  * defined_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#defined_tags IdentityDomainsUser#defined_tags}
  */
  readonly definedTags?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags[] | cdktf.IResolvable;
  /**
  * freeform_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#freeform_tags IdentityDomainsUser#freeform_tags}
  */
  readonly freeformTags?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform, true)(struct!.definedTags),
    freeform_tags: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform, true)(struct!.freeformTags),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform, true)(struct!.definedTags),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList",
    },
    freeform_tags: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform, true)(struct!.freeformTags),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags?.internalValue;
    }
    if (this._freeformTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags.internalValue = undefined;
      this._freeformTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags.internalValue = value.definedTags;
      this._freeformTags.internalValue = value.freeformTags;
    }
  }

  // tag_slug - computed: true, optional: false, required: false
  public get tagSlug() {
    return this.getStringAttribute('tag_slug');
  }

  // defined_tags - computed: false, optional: true, required: false
  private _definedTags = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(this, "defined_tags", false);
  public get definedTags() {
    return this._definedTags;
  }
  public putDefinedTags(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags[] | cdktf.IResolvable) {
    this._definedTags.internalValue = value;
  }
  public resetDefinedTags() {
    this._definedTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags.internalValue;
  }

  // freeform_tags - computed: false, optional: true, required: false
  private _freeformTags = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(this, "freeform_tags", false);
  public get freeformTags() {
    return this._freeformTags;
  }
  public putFreeformTags(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags[] | cdktf.IResolvable) {
    this._freeformTags.internalValue = value;
  }
  public resetFreeformTags() {
    this._freeformTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#last_update_timestamp IdentityDomainsUser#last_update_timestamp}
  */
  readonly lastUpdateTimestamp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#risk_level IdentityDomainsUser#risk_level}
  */
  readonly riskLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#score IdentityDomainsUser#score}
  */
  readonly score: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#source IdentityDomainsUser#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#status IdentityDomainsUser#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_update_timestamp: cdktf.stringToTerraform(struct!.lastUpdateTimestamp),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
    score: cdktf.numberToTerraform(struct!.score),
    source: cdktf.stringToTerraform(struct!.source),
    status: cdktf.stringToTerraform(struct!.status),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_update_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdateTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk_level: {
      value: cdktf.stringToHclTerraform(struct!.riskLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastUpdateTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdateTimestamp = this._lastUpdateTimestamp;
    }
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastUpdateTimestamp = undefined;
      this._riskLevel = undefined;
      this._score = undefined;
      this._source = undefined;
      this._status = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastUpdateTimestamp = value.lastUpdateTimestamp;
      this._riskLevel = value.riskLevel;
      this._score = value.score;
      this._source = value.source;
      this._status = value.status;
      this._value = value.value;
    }
  }

  // last_update_timestamp - computed: false, optional: false, required: true
  private _lastUpdateTimestamp?: string; 
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
  }
  public set lastUpdateTimestamp(value: string) {
    this._lastUpdateTimestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimestampInput() {
    return this._lastUpdateTimestamp;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // risk_level - computed: false, optional: false, required: true
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // score - computed: false, optional: false, required: true
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#risk_level IdentityDomainsUser#risk_level}
  */
  readonly riskLevel?: string;
  /**
  * risk_scores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#risk_scores IdentityDomainsUser#risk_scores}
  */
  readonly riskScores?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
    risk_scores: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToTerraform, true)(struct!.riskScores),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    risk_level: {
      value: cdktf.stringToHclTerraform(struct!.riskLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk_scores: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToHclTerraform, true)(struct!.riskScores),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    if (this._riskScores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskScores = this._riskScores?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._riskLevel = undefined;
      this._riskScores.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._riskLevel = value.riskLevel;
      this._riskScores.internalValue = value.riskScores;
    }
  }

  // risk_level - computed: true, optional: true, required: false
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  public resetRiskLevel() {
    this._riskLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // risk_scores - computed: false, optional: true, required: false
  private _riskScores = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList(this, "risk_scores", false);
  public get riskScores() {
    return this._riskScores;
  }
  public putRiskScores(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores[] | cdktf.IResolvable) {
    this._riskScores.internalValue = value;
  }
  public resetRiskScores() {
    this._riskScores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskScoresInput() {
    return this._riskScores.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_api_keys IdentityDomainsUser#can_use_api_keys}
  */
  readonly canUseApiKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_auth_tokens IdentityDomainsUser#can_use_auth_tokens}
  */
  readonly canUseAuthTokens?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_console IdentityDomainsUser#can_use_console}
  */
  readonly canUseConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_console_password IdentityDomainsUser#can_use_console_password}
  */
  readonly canUseConsolePassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_customer_secret_keys IdentityDomainsUser#can_use_customer_secret_keys}
  */
  readonly canUseCustomerSecretKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_db_credentials IdentityDomainsUser#can_use_db_credentials}
  */
  readonly canUseDbCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_oauth2client_credentials IdentityDomainsUser#can_use_oauth2client_credentials}
  */
  readonly canUseOauth2ClientCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#can_use_smtp_credentials IdentityDomainsUser#can_use_smtp_credentials}
  */
  readonly canUseSmtpCredentials?: boolean | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_use_api_keys: cdktf.booleanToTerraform(struct!.canUseApiKeys),
    can_use_auth_tokens: cdktf.booleanToTerraform(struct!.canUseAuthTokens),
    can_use_console: cdktf.booleanToTerraform(struct!.canUseConsole),
    can_use_console_password: cdktf.booleanToTerraform(struct!.canUseConsolePassword),
    can_use_customer_secret_keys: cdktf.booleanToTerraform(struct!.canUseCustomerSecretKeys),
    can_use_db_credentials: cdktf.booleanToTerraform(struct!.canUseDbCredentials),
    can_use_oauth2client_credentials: cdktf.booleanToTerraform(struct!.canUseOauth2ClientCredentials),
    can_use_smtp_credentials: cdktf.booleanToTerraform(struct!.canUseSmtpCredentials),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_use_api_keys: {
      value: cdktf.booleanToHclTerraform(struct!.canUseApiKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_auth_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.canUseAuthTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_console: {
      value: cdktf.booleanToHclTerraform(struct!.canUseConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_console_password: {
      value: cdktf.booleanToHclTerraform(struct!.canUseConsolePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_customer_secret_keys: {
      value: cdktf.booleanToHclTerraform(struct!.canUseCustomerSecretKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_db_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.canUseDbCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_oauth2client_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.canUseOauth2ClientCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_use_smtp_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.canUseSmtpCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canUseApiKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseApiKeys = this._canUseApiKeys;
    }
    if (this._canUseAuthTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseAuthTokens = this._canUseAuthTokens;
    }
    if (this._canUseConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseConsole = this._canUseConsole;
    }
    if (this._canUseConsolePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseConsolePassword = this._canUseConsolePassword;
    }
    if (this._canUseCustomerSecretKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseCustomerSecretKeys = this._canUseCustomerSecretKeys;
    }
    if (this._canUseDbCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseDbCredentials = this._canUseDbCredentials;
    }
    if (this._canUseOauth2ClientCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseOauth2ClientCredentials = this._canUseOauth2ClientCredentials;
    }
    if (this._canUseSmtpCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.canUseSmtpCredentials = this._canUseSmtpCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canUseApiKeys = undefined;
      this._canUseAuthTokens = undefined;
      this._canUseConsole = undefined;
      this._canUseConsolePassword = undefined;
      this._canUseCustomerSecretKeys = undefined;
      this._canUseDbCredentials = undefined;
      this._canUseOauth2ClientCredentials = undefined;
      this._canUseSmtpCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canUseApiKeys = value.canUseApiKeys;
      this._canUseAuthTokens = value.canUseAuthTokens;
      this._canUseConsole = value.canUseConsole;
      this._canUseConsolePassword = value.canUseConsolePassword;
      this._canUseCustomerSecretKeys = value.canUseCustomerSecretKeys;
      this._canUseDbCredentials = value.canUseDbCredentials;
      this._canUseOauth2ClientCredentials = value.canUseOauth2ClientCredentials;
      this._canUseSmtpCredentials = value.canUseSmtpCredentials;
    }
  }

  // can_use_api_keys - computed: true, optional: true, required: false
  private _canUseApiKeys?: boolean | cdktf.IResolvable; 
  public get canUseApiKeys() {
    return this.getBooleanAttribute('can_use_api_keys');
  }
  public set canUseApiKeys(value: boolean | cdktf.IResolvable) {
    this._canUseApiKeys = value;
  }
  public resetCanUseApiKeys() {
    this._canUseApiKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseApiKeysInput() {
    return this._canUseApiKeys;
  }

  // can_use_auth_tokens - computed: true, optional: true, required: false
  private _canUseAuthTokens?: boolean | cdktf.IResolvable; 
  public get canUseAuthTokens() {
    return this.getBooleanAttribute('can_use_auth_tokens');
  }
  public set canUseAuthTokens(value: boolean | cdktf.IResolvable) {
    this._canUseAuthTokens = value;
  }
  public resetCanUseAuthTokens() {
    this._canUseAuthTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseAuthTokensInput() {
    return this._canUseAuthTokens;
  }

  // can_use_console - computed: true, optional: true, required: false
  private _canUseConsole?: boolean | cdktf.IResolvable; 
  public get canUseConsole() {
    return this.getBooleanAttribute('can_use_console');
  }
  public set canUseConsole(value: boolean | cdktf.IResolvable) {
    this._canUseConsole = value;
  }
  public resetCanUseConsole() {
    this._canUseConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseConsoleInput() {
    return this._canUseConsole;
  }

  // can_use_console_password - computed: true, optional: true, required: false
  private _canUseConsolePassword?: boolean | cdktf.IResolvable; 
  public get canUseConsolePassword() {
    return this.getBooleanAttribute('can_use_console_password');
  }
  public set canUseConsolePassword(value: boolean | cdktf.IResolvable) {
    this._canUseConsolePassword = value;
  }
  public resetCanUseConsolePassword() {
    this._canUseConsolePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseConsolePasswordInput() {
    return this._canUseConsolePassword;
  }

  // can_use_customer_secret_keys - computed: true, optional: true, required: false
  private _canUseCustomerSecretKeys?: boolean | cdktf.IResolvable; 
  public get canUseCustomerSecretKeys() {
    return this.getBooleanAttribute('can_use_customer_secret_keys');
  }
  public set canUseCustomerSecretKeys(value: boolean | cdktf.IResolvable) {
    this._canUseCustomerSecretKeys = value;
  }
  public resetCanUseCustomerSecretKeys() {
    this._canUseCustomerSecretKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseCustomerSecretKeysInput() {
    return this._canUseCustomerSecretKeys;
  }

  // can_use_db_credentials - computed: true, optional: true, required: false
  private _canUseDbCredentials?: boolean | cdktf.IResolvable; 
  public get canUseDbCredentials() {
    return this.getBooleanAttribute('can_use_db_credentials');
  }
  public set canUseDbCredentials(value: boolean | cdktf.IResolvable) {
    this._canUseDbCredentials = value;
  }
  public resetCanUseDbCredentials() {
    this._canUseDbCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseDbCredentialsInput() {
    return this._canUseDbCredentials;
  }

  // can_use_oauth2client_credentials - computed: true, optional: true, required: false
  private _canUseOauth2ClientCredentials?: boolean | cdktf.IResolvable; 
  public get canUseOauth2ClientCredentials() {
    return this.getBooleanAttribute('can_use_oauth2client_credentials');
  }
  public set canUseOauth2ClientCredentials(value: boolean | cdktf.IResolvable) {
    this._canUseOauth2ClientCredentials = value;
  }
  public resetCanUseOauth2ClientCredentials() {
    this._canUseOauth2ClientCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseOauth2ClientCredentialsInput() {
    return this._canUseOauth2ClientCredentials;
  }

  // can_use_smtp_credentials - computed: true, optional: true, required: false
  private _canUseSmtpCredentials?: boolean | cdktf.IResolvable; 
  public get canUseSmtpCredentials() {
    return this.getBooleanAttribute('can_use_smtp_credentials');
  }
  public set canUseSmtpCredentials(value: boolean | cdktf.IResolvable) {
    this._canUseSmtpCredentials = value;
  }
  public resetCanUseSmtpCredentials() {
    this._canUseSmtpCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseSmtpCredentialsInput() {
    return this._canUseSmtpCredentials;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#db_user_name IdentityDomainsUser#db_user_name}
  */
  readonly dbUserName?: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_user_name: cdktf.stringToTerraform(struct!.dbUserName),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_user_name: {
      value: cdktf.stringToHclTerraform(struct!.dbUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUserName = this._dbUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbUserName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbUserName = value.dbUserName;
    }
  }

  // db_login_attempts - computed: true, optional: false, required: false
  public get dbLoginAttempts() {
    return this.getNumberAttribute('db_login_attempts');
  }

  // db_user_name - computed: true, optional: true, required: false
  private _dbUserName?: string; 
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }
  public set dbUserName(value: string) {
    this._dbUserName = value;
  }
  public resetDbUserName() {
    this._dbUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserNameInput() {
    return this._dbUserName;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#principal_name IdentityDomainsUser#principal_name}
  */
  readonly principalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#realm_name IdentityDomainsUser#realm_name}
  */
  readonly realmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_name: cdktf.stringToTerraform(struct!.principalName),
    realm_name: cdktf.stringToTerraform(struct!.realmName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_name: {
      value: cdktf.stringToHclTerraform(struct!.principalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm_name: {
      value: cdktf.stringToHclTerraform(struct!.realmName),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalName = this._principalName;
    }
    if (this._realmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmName = this._realmName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalName = undefined;
      this._realmName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalName = value.principalName;
      this._realmName = value.realmName;
      this._value = value.value;
    }
  }

  // principal_name - computed: true, optional: true, required: false
  private _principalName?: string; 
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
  public set principalName(value: string) {
    this._principalName = value;
  }
  public resetPrincipalName() {
    this._principalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalNameInput() {
    return this._principalName;
  }

  // realm_name - computed: true, optional: true, required: false
  private _realmName?: string; 
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }
  public set realmName(value: string) {
    this._realmName = value;
  }
  public resetRealmName() {
    this._realmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmNameInput() {
    return this._realmName;
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser {
  /**
  * realm_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#realm_users IdentityDomainsUser#realm_users}
  */
  readonly realmUsers?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm_users: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToTerraform, true)(struct!.realmUsers),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm_users: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToHclTerraform, true)(struct!.realmUsers),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realmUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmUsers = this._realmUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realmUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realmUsers.internalValue = value.realmUsers;
    }
  }

  // realm_users - computed: false, optional: true, required: false
  private _realmUsers = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList(this, "realm_users", false);
  public get realmUsers() {
    return this._realmUsers;
  }
  public putRealmUsers(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers[] | cdktf.IResolvable) {
    this._realmUsers.internalValue = value;
  }
  public resetRealmUsers() {
    this._realmUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmUsersInput() {
    return this._realmUsers.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | cdktf.IResolvable): any {
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#authentication_method IdentityDomainsUser#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#factor_status IdentityDomainsUser#factor_status}
  */
  readonly factorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#factor_type IdentityDomainsUser#factor_type}
  */
  readonly factorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#last_sync_time IdentityDomainsUser#last_sync_time}
  */
  readonly lastSyncTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#status IdentityDomainsUser#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#third_party_vendor_name IdentityDomainsUser#third_party_vendor_name}
  */
  readonly thirdPartyVendorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    display: cdktf.stringToTerraform(struct!.display),
    factor_status: cdktf.stringToTerraform(struct!.factorStatus),
    factor_type: cdktf.stringToTerraform(struct!.factorType),
    last_sync_time: cdktf.stringToTerraform(struct!.lastSyncTime),
    status: cdktf.stringToTerraform(struct!.status),
    third_party_vendor_name: cdktf.stringToTerraform(struct!.thirdPartyVendorName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
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
    factor_status: {
      value: cdktf.stringToHclTerraform(struct!.factorStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor_type: {
      value: cdktf.stringToHclTerraform(struct!.factorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_sync_time: {
      value: cdktf.stringToHclTerraform(struct!.lastSyncTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    third_party_vendor_name: {
      value: cdktf.stringToHclTerraform(struct!.thirdPartyVendorName),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._factorStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.factorStatus = this._factorStatus;
    }
    if (this._factorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.factorType = this._factorType;
    }
    if (this._lastSyncTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSyncTime = this._lastSyncTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._thirdPartyVendorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyVendorName = this._thirdPartyVendorName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMethod = undefined;
      this._display = undefined;
      this._factorStatus = undefined;
      this._factorType = undefined;
      this._lastSyncTime = undefined;
      this._status = undefined;
      this._thirdPartyVendorName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMethod = value.authenticationMethod;
      this._display = value.display;
      this._factorStatus = value.factorStatus;
      this._factorType = value.factorType;
      this._lastSyncTime = value.lastSyncTime;
      this._status = value.status;
      this._thirdPartyVendorName = value.thirdPartyVendorName;
      this._value = value.value;
    }
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
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

  // factor_status - computed: true, optional: true, required: false
  private _factorStatus?: string; 
  public get factorStatus() {
    return this.getStringAttribute('factor_status');
  }
  public set factorStatus(value: string) {
    this._factorStatus = value;
  }
  public resetFactorStatus() {
    this._factorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorStatusInput() {
    return this._factorStatus;
  }

  // factor_type - computed: true, optional: true, required: false
  private _factorType?: string; 
  public get factorType() {
    return this.getStringAttribute('factor_type');
  }
  public set factorType(value: string) {
    this._factorType = value;
  }
  public resetFactorType() {
    this._factorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorTypeInput() {
    return this._factorType;
  }

  // last_sync_time - computed: true, optional: true, required: false
  private _lastSyncTime?: string; 
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }
  public set lastSyncTime(value: string) {
    this._lastSyncTime = value;
  }
  public resetLastSyncTime() {
    this._lastSyncTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSyncTimeInput() {
    return this._lastSyncTime;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

  // third_party_vendor_name - computed: true, optional: true, required: false
  private _thirdPartyVendorName?: string; 
  public get thirdPartyVendorName() {
    return this.getStringAttribute('third_party_vendor_name');
  }
  public set thirdPartyVendorName(value: string) {
    this._thirdPartyVendorName = value;
  }
  public resetThirdPartyVendorName() {
    this._thirdPartyVendorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyVendorNameInput() {
    return this._thirdPartyVendorName;
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._value = value.value;
    }
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
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._value = value.value;
    }
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#login_attempts IdentityDomainsUser#login_attempts}
  */
  readonly loginAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#mfa_enabled_on IdentityDomainsUser#mfa_enabled_on}
  */
  readonly mfaEnabledOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#mfa_ignored_apps IdentityDomainsUser#mfa_ignored_apps}
  */
  readonly mfaIgnoredApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#mfa_status IdentityDomainsUser#mfa_status}
  */
  readonly mfaStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#preferred_authentication_factor IdentityDomainsUser#preferred_authentication_factor}
  */
  readonly preferredAuthenticationFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#preferred_authentication_method IdentityDomainsUser#preferred_authentication_method}
  */
  readonly preferredAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#preferred_third_party_vendor IdentityDomainsUser#preferred_third_party_vendor}
  */
  readonly preferredThirdPartyVendor?: string;
  /**
  * bypass_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#bypass_codes IdentityDomainsUser#bypass_codes}
  */
  readonly bypassCodes?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes[] | cdktf.IResolvable;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#devices IdentityDomainsUser#devices}
  */
  readonly devices?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices[] | cdktf.IResolvable;
  /**
  * preferred_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#preferred_device IdentityDomainsUser#preferred_device}
  */
  readonly preferredDevice?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice;
  /**
  * trusted_user_agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#trusted_user_agents IdentityDomainsUser#trusted_user_agents}
  */
  readonly trustedUserAgents?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_attempts: cdktf.numberToTerraform(struct!.loginAttempts),
    mfa_enabled_on: cdktf.stringToTerraform(struct!.mfaEnabledOn),
    mfa_ignored_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mfaIgnoredApps),
    mfa_status: cdktf.stringToTerraform(struct!.mfaStatus),
    preferred_authentication_factor: cdktf.stringToTerraform(struct!.preferredAuthenticationFactor),
    preferred_authentication_method: cdktf.stringToTerraform(struct!.preferredAuthenticationMethod),
    preferred_third_party_vendor: cdktf.stringToTerraform(struct!.preferredThirdPartyVendor),
    bypass_codes: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToTerraform, true)(struct!.bypassCodes),
    devices: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToTerraform, true)(struct!.devices),
    preferred_device: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToTerraform(struct!.preferredDevice),
    trusted_user_agents: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToTerraform, true)(struct!.trustedUserAgents),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_attempts: {
      value: cdktf.numberToHclTerraform(struct!.loginAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mfa_enabled_on: {
      value: cdktf.stringToHclTerraform(struct!.mfaEnabledOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfa_ignored_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mfaIgnoredApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mfa_status: {
      value: cdktf.stringToHclTerraform(struct!.mfaStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_authentication_factor: {
      value: cdktf.stringToHclTerraform(struct!.preferredAuthenticationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.preferredAuthenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_third_party_vendor: {
      value: cdktf.stringToHclTerraform(struct!.preferredThirdPartyVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_codes: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToHclTerraform, true)(struct!.bypassCodes),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList",
    },
    devices: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToHclTerraform, true)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList",
    },
    preferred_device: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToHclTerraform(struct!.preferredDevice),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceList",
    },
    trusted_user_agents: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToHclTerraform, true)(struct!.trustedUserAgents),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAttempts = this._loginAttempts;
    }
    if (this._mfaEnabledOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEnabledOn = this._mfaEnabledOn;
    }
    if (this._mfaIgnoredApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaIgnoredApps = this._mfaIgnoredApps;
    }
    if (this._mfaStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaStatus = this._mfaStatus;
    }
    if (this._preferredAuthenticationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAuthenticationFactor = this._preferredAuthenticationFactor;
    }
    if (this._preferredAuthenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAuthenticationMethod = this._preferredAuthenticationMethod;
    }
    if (this._preferredThirdPartyVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredThirdPartyVendor = this._preferredThirdPartyVendor;
    }
    if (this._bypassCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCodes = this._bypassCodes?.internalValue;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._preferredDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDevice = this._preferredDevice?.internalValue;
    }
    if (this._trustedUserAgents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedUserAgents = this._trustedUserAgents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginAttempts = undefined;
      this._mfaEnabledOn = undefined;
      this._mfaIgnoredApps = undefined;
      this._mfaStatus = undefined;
      this._preferredAuthenticationFactor = undefined;
      this._preferredAuthenticationMethod = undefined;
      this._preferredThirdPartyVendor = undefined;
      this._bypassCodes.internalValue = undefined;
      this._devices.internalValue = undefined;
      this._preferredDevice.internalValue = undefined;
      this._trustedUserAgents.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginAttempts = value.loginAttempts;
      this._mfaEnabledOn = value.mfaEnabledOn;
      this._mfaIgnoredApps = value.mfaIgnoredApps;
      this._mfaStatus = value.mfaStatus;
      this._preferredAuthenticationFactor = value.preferredAuthenticationFactor;
      this._preferredAuthenticationMethod = value.preferredAuthenticationMethod;
      this._preferredThirdPartyVendor = value.preferredThirdPartyVendor;
      this._bypassCodes.internalValue = value.bypassCodes;
      this._devices.internalValue = value.devices;
      this._preferredDevice.internalValue = value.preferredDevice;
      this._trustedUserAgents.internalValue = value.trustedUserAgents;
    }
  }

  // login_attempts - computed: true, optional: true, required: false
  private _loginAttempts?: number; 
  public get loginAttempts() {
    return this.getNumberAttribute('login_attempts');
  }
  public set loginAttempts(value: number) {
    this._loginAttempts = value;
  }
  public resetLoginAttempts() {
    this._loginAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttemptsInput() {
    return this._loginAttempts;
  }

  // mfa_enabled_on - computed: true, optional: true, required: false
  private _mfaEnabledOn?: string; 
  public get mfaEnabledOn() {
    return this.getStringAttribute('mfa_enabled_on');
  }
  public set mfaEnabledOn(value: string) {
    this._mfaEnabledOn = value;
  }
  public resetMfaEnabledOn() {
    this._mfaEnabledOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnabledOnInput() {
    return this._mfaEnabledOn;
  }

  // mfa_ignored_apps - computed: true, optional: true, required: false
  private _mfaIgnoredApps?: string[]; 
  public get mfaIgnoredApps() {
    return this.getListAttribute('mfa_ignored_apps');
  }
  public set mfaIgnoredApps(value: string[]) {
    this._mfaIgnoredApps = value;
  }
  public resetMfaIgnoredApps() {
    this._mfaIgnoredApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaIgnoredAppsInput() {
    return this._mfaIgnoredApps;
  }

  // mfa_status - computed: true, optional: true, required: false
  private _mfaStatus?: string; 
  public get mfaStatus() {
    return this.getStringAttribute('mfa_status');
  }
  public set mfaStatus(value: string) {
    this._mfaStatus = value;
  }
  public resetMfaStatus() {
    this._mfaStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaStatusInput() {
    return this._mfaStatus;
  }

  // preferred_authentication_factor - computed: true, optional: true, required: false
  private _preferredAuthenticationFactor?: string; 
  public get preferredAuthenticationFactor() {
    return this.getStringAttribute('preferred_authentication_factor');
  }
  public set preferredAuthenticationFactor(value: string) {
    this._preferredAuthenticationFactor = value;
  }
  public resetPreferredAuthenticationFactor() {
    this._preferredAuthenticationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAuthenticationFactorInput() {
    return this._preferredAuthenticationFactor;
  }

  // preferred_authentication_method - computed: true, optional: true, required: false
  private _preferredAuthenticationMethod?: string; 
  public get preferredAuthenticationMethod() {
    return this.getStringAttribute('preferred_authentication_method');
  }
  public set preferredAuthenticationMethod(value: string) {
    this._preferredAuthenticationMethod = value;
  }
  public resetPreferredAuthenticationMethod() {
    this._preferredAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAuthenticationMethodInput() {
    return this._preferredAuthenticationMethod;
  }

  // preferred_third_party_vendor - computed: true, optional: true, required: false
  private _preferredThirdPartyVendor?: string; 
  public get preferredThirdPartyVendor() {
    return this.getStringAttribute('preferred_third_party_vendor');
  }
  public set preferredThirdPartyVendor(value: string) {
    this._preferredThirdPartyVendor = value;
  }
  public resetPreferredThirdPartyVendor() {
    this._preferredThirdPartyVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredThirdPartyVendorInput() {
    return this._preferredThirdPartyVendor;
  }

  // bypass_codes - computed: false, optional: true, required: false
  private _bypassCodes = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList(this, "bypass_codes", false);
  public get bypassCodes() {
    return this._bypassCodes;
  }
  public putBypassCodes(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes[] | cdktf.IResolvable) {
    this._bypassCodes.internalValue = value;
  }
  public resetBypassCodes() {
    this._bypassCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCodesInput() {
    return this._bypassCodes.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // preferred_device - computed: false, optional: true, required: false
  private _preferredDevice = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference(this, "preferred_device");
  public get preferredDevice() {
    return this._preferredDevice;
  }
  public putPreferredDevice(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice) {
    this._preferredDevice.internalValue = value;
  }
  public resetPreferredDevice() {
    this._preferredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDeviceInput() {
    return this._preferredDevice.internalValue;
  }

  // trusted_user_agents - computed: false, optional: true, required: false
  private _trustedUserAgents = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList(this, "trusted_user_agents", false);
  public get trustedUserAgents() {
    return this._trustedUserAgents;
  }
  public putTrustedUserAgents(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents[] | cdktf.IResolvable) {
    this._trustedUserAgents.internalValue = value;
  }
  public resetTrustedUserAgents() {
    this._trustedUserAgents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedUserAgentsInput() {
    return this._trustedUserAgents.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._value = value.value;
    }
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
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#factor_method IdentityDomainsUser#factor_method}
  */
  readonly factorMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#factor_type IdentityDomainsUser#factor_type}
  */
  readonly factorType?: string;
  /**
  * factor_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#factor_identifier IdentityDomainsUser#factor_identifier}
  */
  readonly factorIdentifier?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    factor_method: cdktf.stringToTerraform(struct!.factorMethod),
    factor_type: cdktf.stringToTerraform(struct!.factorType),
    factor_identifier: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToTerraform(struct!.factorIdentifier),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    factor_method: {
      value: cdktf.stringToHclTerraform(struct!.factorMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor_type: {
      value: cdktf.stringToHclTerraform(struct!.factorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor_identifier: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToHclTerraform(struct!.factorIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._factorMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.factorMethod = this._factorMethod;
    }
    if (this._factorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.factorType = this._factorType;
    }
    if (this._factorIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.factorIdentifier = this._factorIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._factorMethod = undefined;
      this._factorType = undefined;
      this._factorIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._factorMethod = value.factorMethod;
      this._factorType = value.factorType;
      this._factorIdentifier.internalValue = value.factorIdentifier;
    }
  }

  // factor_method - computed: true, optional: true, required: false
  private _factorMethod?: string; 
  public get factorMethod() {
    return this.getStringAttribute('factor_method');
  }
  public set factorMethod(value: string) {
    this._factorMethod = value;
  }
  public resetFactorMethod() {
    this._factorMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorMethodInput() {
    return this._factorMethod;
  }

  // factor_type - computed: true, optional: true, required: false
  private _factorType?: string; 
  public get factorType() {
    return this.getStringAttribute('factor_type');
  }
  public set factorType(value: string) {
    this._factorType = value;
  }
  public resetFactorType() {
    this._factorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorTypeInput() {
    return this._factorType;
  }

  // factor_identifier - computed: false, optional: true, required: false
  private _factorIdentifier = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference(this, "factor_identifier");
  public get factorIdentifier() {
    return this._factorIdentifier;
  }
  public putFactorIdentifier(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier) {
    this._factorIdentifier.internalValue = value;
  }
  public resetFactorIdentifier() {
    this._factorIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorIdentifierInput() {
    return this._factorIdentifier.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#gecos IdentityDomainsUser#gecos}
  */
  readonly gecos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#gid_number IdentityDomainsUser#gid_number}
  */
  readonly gidNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#home_directory IdentityDomainsUser#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#login_shell IdentityDomainsUser#login_shell}
  */
  readonly loginShell?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#uid_number IdentityDomainsUser#uid_number}
  */
  readonly uidNumber?: number;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gecos: cdktf.stringToTerraform(struct!.gecos),
    gid_number: cdktf.numberToTerraform(struct!.gidNumber),
    home_directory: cdktf.stringToTerraform(struct!.homeDirectory),
    login_shell: cdktf.stringToTerraform(struct!.loginShell),
    uid_number: cdktf.numberToTerraform(struct!.uidNumber),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gecos: {
      value: cdktf.stringToHclTerraform(struct!.gecos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid_number: {
      value: cdktf.numberToHclTerraform(struct!.gidNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    home_directory: {
      value: cdktf.stringToHclTerraform(struct!.homeDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_shell: {
      value: cdktf.stringToHclTerraform(struct!.loginShell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid_number: {
      value: cdktf.numberToHclTerraform(struct!.uidNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gecos !== undefined) {
      hasAnyValues = true;
      internalValueResult.gecos = this._gecos;
    }
    if (this._gidNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.gidNumber = this._gidNumber;
    }
    if (this._homeDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDirectory = this._homeDirectory;
    }
    if (this._loginShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginShell = this._loginShell;
    }
    if (this._uidNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.uidNumber = this._uidNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gecos = undefined;
      this._gidNumber = undefined;
      this._homeDirectory = undefined;
      this._loginShell = undefined;
      this._uidNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gecos = value.gecos;
      this._gidNumber = value.gidNumber;
      this._homeDirectory = value.homeDirectory;
      this._loginShell = value.loginShell;
      this._uidNumber = value.uidNumber;
    }
  }

  // gecos - computed: true, optional: true, required: false
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

  // gid_number - computed: true, optional: true, required: false
  private _gidNumber?: number; 
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }
  public set gidNumber(value: number) {
    this._gidNumber = value;
  }
  public resetGidNumber() {
    this._gidNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidNumberInput() {
    return this._gidNumber;
  }

  // home_directory - computed: true, optional: true, required: false
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

  // login_shell - computed: true, optional: true, required: false
  private _loginShell?: string; 
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }
  public set loginShell(value: string) {
    this._loginShell = value;
  }
  public resetLoginShell() {
    this._loginShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginShellInput() {
    return this._loginShell;
  }

  // uid_number - computed: true, optional: true, required: false
  private _uidNumber?: number; 
  public get uidNumber() {
    return this.getNumberAttribute('uid_number');
  }
  public set uidNumber(value: number) {
    this._uidNumber = value;
  }
  public resetUidNumber() {
    this._uidNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidNumberInput() {
    return this._uidNumber;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#answer IdentityDomainsUser#answer}
  */
  readonly answer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#hint_text IdentityDomainsUser#hint_text}
  */
  readonly hintText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    answer: cdktf.stringToTerraform(struct!.answer),
    hint_text: cdktf.stringToTerraform(struct!.hintText),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    answer: {
      value: cdktf.stringToHclTerraform(struct!.answer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hint_text: {
      value: cdktf.stringToHclTerraform(struct!.hintText),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answer !== undefined) {
      hasAnyValues = true;
      internalValueResult.answer = this._answer;
    }
    if (this._hintText !== undefined) {
      hasAnyValues = true;
      internalValueResult.hintText = this._hintText;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answer = undefined;
      this._hintText = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answer = value.answer;
      this._hintText = value.hintText;
      this._value = value.value;
    }
  }

  // answer - computed: false, optional: false, required: true
  private _answer?: string; 
  public get answer() {
    return this.getStringAttribute('answer');
  }
  public set answer(value: string) {
    this._answer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get answerInput() {
    return this._answer;
  }

  // hint_text - computed: true, optional: true, required: false
  private _hintText?: string; 
  public get hintText() {
    return this.getStringAttribute('hint_text');
  }
  public set hintText(value: string) {
    this._hintText = value;
  }
  public resetHintText() {
    this._hintText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintTextInput() {
    return this._hintText;
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser {
  /**
  * sec_questions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#sec_questions IdentityDomainsUser#sec_questions}
  */
  readonly secQuestions?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sec_questions: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToTerraform, true)(struct!.secQuestions),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sec_questions: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToHclTerraform, true)(struct!.secQuestions),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secQuestions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secQuestions = this._secQuestions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secQuestions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secQuestions.internalValue = value.secQuestions;
    }
  }

  // sec_questions - computed: false, optional: true, required: false
  private _secQuestions = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList(this, "sec_questions", false);
  public get secQuestions() {
    return this._secQuestions;
  }
  public putSecQuestions(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions[] | cdktf.IResolvable) {
    this._secQuestions.internalValue = value;
  }
  public resetSecQuestions() {
    this._secQuestions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secQuestionsInput() {
    return this._secQuestions.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#allow_self_change IdentityDomainsUser#allow_self_change}
  */
  readonly allowSelfChange?: boolean | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_self_change: cdktf.booleanToTerraform(struct!.allowSelfChange),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_self_change: {
      value: cdktf.booleanToHclTerraform(struct!.allowSelfChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSelfChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSelfChange = this._allowSelfChange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSelfChange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSelfChange = value.allowSelfChange;
    }
  }

  // allow_self_change - computed: true, optional: true, required: false
  private _allowSelfChange?: boolean | cdktf.IResolvable; 
  public get allowSelfChange() {
    return this.getBooleanAttribute('allow_self_change');
  }
  public set allowSelfChange(value: boolean | cdktf.IResolvable) {
    this._allowSelfChange = value;
  }
  public resetAllowSelfChange() {
    this._allowSelfChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelfChangeInput() {
    return this._allowSelfChange;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._value = value.value;
    }
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
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#consent_granted IdentityDomainsUser#consent_granted}
  */
  readonly consentGranted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#user_token IdentityDomainsUser#user_token}
  */
  readonly userToken?: string;
  /**
  * self_registration_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#self_registration_profile IdentityDomainsUser#self_registration_profile}
  */
  readonly selfRegistrationProfile: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consent_granted: cdktf.booleanToTerraform(struct!.consentGranted),
    user_token: cdktf.stringToTerraform(struct!.userToken),
    self_registration_profile: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToTerraform(struct!.selfRegistrationProfile),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consent_granted: {
      value: cdktf.booleanToHclTerraform(struct!.consentGranted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_token: {
      value: cdktf.stringToHclTerraform(struct!.userToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_registration_profile: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToHclTerraform(struct!.selfRegistrationProfile),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consentGranted !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentGranted = this._consentGranted;
    }
    if (this._userToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.userToken = this._userToken;
    }
    if (this._selfRegistrationProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfRegistrationProfile = this._selfRegistrationProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consentGranted = undefined;
      this._userToken = undefined;
      this._selfRegistrationProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consentGranted = value.consentGranted;
      this._userToken = value.userToken;
      this._selfRegistrationProfile.internalValue = value.selfRegistrationProfile;
    }
  }

  // consent_granted - computed: true, optional: true, required: false
  private _consentGranted?: boolean | cdktf.IResolvable; 
  public get consentGranted() {
    return this.getBooleanAttribute('consent_granted');
  }
  public set consentGranted(value: boolean | cdktf.IResolvable) {
    this._consentGranted = value;
  }
  public resetConsentGranted() {
    this._consentGranted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentGrantedInput() {
    return this._consentGranted;
  }

  // user_token - computed: true, optional: true, required: false
  private _userToken?: string; 
  public get userToken() {
    return this.getStringAttribute('user_token');
  }
  public set userToken(value: string) {
    this._userToken = value;
  }
  public resetUserToken() {
    this._userToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenInput() {
    return this._userToken;
  }

  // self_registration_profile - computed: false, optional: false, required: true
  private _selfRegistrationProfile = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference(this, "self_registration_profile");
  public get selfRegistrationProfile() {
    return this._selfRegistrationProfile;
  }
  public putSelfRegistrationProfile(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile) {
    this._selfRegistrationProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfRegistrationProfileInput() {
    return this._selfRegistrationProfile.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#sff_auth_keys IdentityDomainsUser#sff_auth_keys}
  */
  readonly sffAuthKeys?: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sff_auth_keys: cdktf.stringToTerraform(struct!.sffAuthKeys),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sff_auth_keys: {
      value: cdktf.stringToHclTerraform(struct!.sffAuthKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sffAuthKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sffAuthKeys = this._sffAuthKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sffAuthKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sffAuthKeys = value.sffAuthKeys;
    }
  }

  // sff_auth_keys - computed: true, optional: true, required: false
  private _sffAuthKeys?: string; 
  public get sffAuthKeys() {
    return this.getStringAttribute('sff_auth_keys');
  }
  public set sffAuthKeys(value: string) {
    this._sffAuthKeys = value;
  }
  public resetSffAuthKeys() {
    this._sffAuthKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sffAuthKeysInput() {
    return this._sffAuthKeys;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._value = value.value;
    }
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser {
  /**
  * social_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#social_accounts IdentityDomainsUser#social_accounts}
  */
  readonly socialAccounts?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    social_accounts: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToTerraform, true)(struct!.socialAccounts),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    social_accounts: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToHclTerraform, true)(struct!.socialAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._socialAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socialAccounts = this._socialAccounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._socialAccounts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._socialAccounts.internalValue = value.socialAccounts;
    }
  }

  // social_accounts - computed: false, optional: true, required: false
  private _socialAccounts = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList(this, "social_accounts", false);
  public get socialAccounts() {
    return this._socialAccounts;
  }
  public putSocialAccounts(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts[] | cdktf.IResolvable) {
    this._socialAccounts.internalValue = value;
  }
  public resetSocialAccounts() {
    this._socialAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialAccountsInput() {
    return this._socialAccounts.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | cdktf.IResolvable): any {
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser {
  /**
  * terms_of_use_consents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#terms_of_use_consents IdentityDomainsUser#terms_of_use_consents}
  */
  readonly termsOfUseConsents?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents[] | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    terms_of_use_consents: cdktf.listMapper(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToTerraform, true)(struct!.termsOfUseConsents),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    terms_of_use_consents: {
      value: cdktf.listMapperHcl(identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToHclTerraform, true)(struct!.termsOfUseConsents),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._termsOfUseConsents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.termsOfUseConsents = this._termsOfUseConsents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._termsOfUseConsents.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._termsOfUseConsents.internalValue = value.termsOfUseConsents;
    }
  }

  // terms_of_use_consents - computed: false, optional: true, required: false
  private _termsOfUseConsents = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList(this, "terms_of_use_consents", false);
  public get termsOfUseConsents() {
    return this._termsOfUseConsents;
  }
  public putTermsOfUseConsents(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents[] | cdktf.IResolvable) {
    this._termsOfUseConsents.internalValue = value;
  }
  public resetTermsOfUseConsents() {
    this._termsOfUseConsents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfUseConsentsInput() {
    return this._termsOfUseConsents.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#expired IdentityDomainsUser#expired}
  */
  readonly expired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#lock_date IdentityDomainsUser#lock_date}
  */
  readonly lockDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#on IdentityDomainsUser#on}
  */
  readonly on?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#reason IdentityDomainsUser#reason}
  */
  readonly reason?: number;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expired: cdktf.booleanToTerraform(struct!.expired),
    lock_date: cdktf.stringToTerraform(struct!.lockDate),
    on: cdktf.booleanToTerraform(struct!.on),
    reason: cdktf.numberToTerraform(struct!.reason),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expired: {
      value: cdktf.booleanToHclTerraform(struct!.expired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lock_date: {
      value: cdktf.stringToHclTerraform(struct!.lockDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on: {
      value: cdktf.booleanToHclTerraform(struct!.on),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reason: {
      value: cdktf.numberToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expired = this._expired;
    }
    if (this._lockDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockDate = this._lockDate;
    }
    if (this._on !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expired = undefined;
      this._lockDate = undefined;
      this._on = undefined;
      this._reason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expired = value.expired;
      this._lockDate = value.lockDate;
      this._on = value.on;
      this._reason = value.reason;
    }
  }

  // expired - computed: true, optional: true, required: false
  private _expired?: boolean | cdktf.IResolvable; 
  public get expired() {
    return this.getBooleanAttribute('expired');
  }
  public set expired(value: boolean | cdktf.IResolvable) {
    this._expired = value;
  }
  public resetExpired() {
    this._expired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredInput() {
    return this._expired;
  }

  // lock_date - computed: true, optional: true, required: false
  private _lockDate?: string; 
  public get lockDate() {
    return this.getStringAttribute('lock_date');
  }
  public set lockDate(value: string) {
    this._lockDate = value;
  }
  public resetLockDate() {
    this._lockDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDateInput() {
    return this._lockDate;
  }

  // on - computed: true, optional: true, required: false
  private _on?: boolean | cdktf.IResolvable; 
  public get on() {
    return this.getBooleanAttribute('on');
  }
  public set on(value: boolean | cdktf.IResolvable) {
    this._on = value;
  }
  public resetOn() {
    this._on = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: number; 
  public get reason() {
    return this.getNumberAttribute('reason');
  }
  public set reason(value: number) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#lock_date IdentityDomainsUser#lock_date}
  */
  readonly lockDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#on IdentityDomainsUser#on}
  */
  readonly on?: boolean | cdktf.IResolvable;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lock_date: cdktf.stringToTerraform(struct!.lockDate),
    on: cdktf.booleanToTerraform(struct!.on),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lock_date: {
      value: cdktf.stringToHclTerraform(struct!.lockDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on: {
      value: cdktf.booleanToHclTerraform(struct!.on),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockDate = this._lockDate;
    }
    if (this._on !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockDate = undefined;
      this._on = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockDate = value.lockDate;
      this._on = value.on;
    }
  }

  // lock_date - computed: true, optional: true, required: false
  private _lockDate?: string; 
  public get lockDate() {
    return this.getStringAttribute('lock_date');
  }
  public set lockDate(value: string) {
    this._lockDate = value;
  }
  public resetLockDate() {
    this._lockDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDateInput() {
    return this._lockDate;
  }

  // on - computed: true, optional: true, required: false
  private _on?: boolean | cdktf.IResolvable; 
  public get on() {
    return this.getBooleanAttribute('on');
  }
  public set on(value: boolean | cdktf.IResolvable) {
    this._on = value;
  }
  public resetOn() {
    this._on = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#max_concurrent_sessions IdentityDomainsUser#max_concurrent_sessions}
  */
  readonly maxConcurrentSessions?: number;
  /**
  * locked block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#locked IdentityDomainsUser#locked}
  */
  readonly locked?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked;
  /**
  * recovery_locked block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#recovery_locked IdentityDomainsUser#recovery_locked}
  */
  readonly recoveryLocked?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_sessions: cdktf.numberToTerraform(struct!.maxConcurrentSessions),
    locked: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToTerraform(struct!.locked),
    recovery_locked: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToTerraform(struct!.recoveryLocked),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_sessions: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    locked: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToHclTerraform(struct!.locked),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedList",
    },
    recovery_locked: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToHclTerraform(struct!.recoveryLocked),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentSessions = this._maxConcurrentSessions;
    }
    if (this._locked?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked?.internalValue;
    }
    if (this._recoveryLocked?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryLocked = this._recoveryLocked?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentSessions = undefined;
      this._locked.internalValue = undefined;
      this._recoveryLocked.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentSessions = value.maxConcurrentSessions;
      this._locked.internalValue = value.locked;
      this._recoveryLocked.internalValue = value.recoveryLocked;
    }
  }

  // last_failed_login_date - computed: true, optional: false, required: false
  public get lastFailedLoginDate() {
    return this.getStringAttribute('last_failed_login_date');
  }

  // last_successful_login_date - computed: true, optional: false, required: false
  public get lastSuccessfulLoginDate() {
    return this.getStringAttribute('last_successful_login_date');
  }

  // login_attempts - computed: true, optional: false, required: false
  public get loginAttempts() {
    return this.getNumberAttribute('login_attempts');
  }

  // max_concurrent_sessions - computed: true, optional: true, required: false
  private _maxConcurrentSessions?: number; 
  public get maxConcurrentSessions() {
    return this.getNumberAttribute('max_concurrent_sessions');
  }
  public set maxConcurrentSessions(value: number) {
    this._maxConcurrentSessions = value;
  }
  public resetMaxConcurrentSessions() {
    this._maxConcurrentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentSessionsInput() {
    return this._maxConcurrentSessions;
  }

  // previous_successful_login_date - computed: true, optional: false, required: false
  public get previousSuccessfulLoginDate() {
    return this.getStringAttribute('previous_successful_login_date');
  }

  // recovery_attempts - computed: true, optional: false, required: false
  public get recoveryAttempts() {
    return this.getNumberAttribute('recovery_attempts');
  }

  // recovery_enroll_attempts - computed: true, optional: false, required: false
  public get recoveryEnrollAttempts() {
    return this.getNumberAttribute('recovery_enroll_attempts');
  }

  // locked - computed: false, optional: true, required: false
  private _locked = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference(this, "locked");
  public get locked() {
    return this._locked;
  }
  public putLocked(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked) {
    this._locked.internalValue = value;
  }
  public resetLocked() {
    this._locked.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked.internalValue;
  }

  // recovery_locked - computed: false, optional: true, required: false
  private _recoveryLocked = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference(this, "recovery_locked");
  public get recoveryLocked() {
    return this._recoveryLocked;
  }
  public putRecoveryLocked(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked) {
    this._recoveryLocked.internalValue = value;
  }
  public resetRecoveryLocked() {
    this._recoveryLocked.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryLockedInput() {
    return this._recoveryLocked.internalValue;
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_role - computed: true, optional: false, required: false
  public get adminRole() {
    return this.getBooleanAttribute('admin_role');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // legacy_group_name - computed: true, optional: false, required: false
  public get legacyGroupName() {
    return this.getStringAttribute('legacy_group_name');
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp | undefined) {
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // target_request_timeout - computed: true, optional: false, required: false
  public get targetRequestTimeout() {
    return this.getNumberAttribute('target_request_timeout');
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // grant_mechanism - computed: true, optional: false, required: false
  public get grantMechanism() {
    return this.getStringAttribute('grant_mechanism');
  }

  // grantor_id - computed: true, optional: false, required: false
  public get grantorId() {
    return this.getStringAttribute('grantor_id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups | undefined) {
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

  // idcs_app_role_id - computed: true, optional: false, required: false
  public get idcsAppRoleId() {
    return this.getStringAttribute('idcs_app_role_id');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_provider - computed: true, optional: false, required: false
  public get userProvider() {
    return this.getStringAttribute('user_provider');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken {
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference {
    return new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._type = value.type;
      this._value = value.value;
    }
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._type = value.type;
      this._value = value.value;
    }
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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
export interface IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#account_recovery_required IdentityDomainsUser#account_recovery_required}
  */
  readonly accountRecoveryRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#bypass_notification IdentityDomainsUser#bypass_notification}
  */
  readonly bypassNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#creation_mechanism IdentityDomainsUser#creation_mechanism}
  */
  readonly creationMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#do_not_show_getting_started IdentityDomainsUser#do_not_show_getting_started}
  */
  readonly doNotShowGettingStarted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#is_authentication_delegated IdentityDomainsUser#is_authentication_delegated}
  */
  readonly isAuthenticationDelegated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#is_federated_user IdentityDomainsUser#is_federated_user}
  */
  readonly isFederatedUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#is_group_membership_normalized IdentityDomainsUser#is_group_membership_normalized}
  */
  readonly isGroupMembershipNormalized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#is_group_membership_synced_to_users_groups IdentityDomainsUser#is_group_membership_synced_to_users_groups}
  */
  readonly isGroupMembershipSyncedToUsersGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#notification_email_template_id IdentityDomainsUser#notification_email_template_id}
  */
  readonly notificationEmailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#preferred_ui_landing_page IdentityDomainsUser#preferred_ui_landing_page}
  */
  readonly preferredUiLandingPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#service_user IdentityDomainsUser#service_user}
  */
  readonly serviceUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#user_flow_controlled_by_external_client IdentityDomainsUser#user_flow_controlled_by_external_client}
  */
  readonly userFlowControlledByExternalClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#user_provider IdentityDomainsUser#user_provider}
  */
  readonly userProvider?: string;
  /**
  * delegated_authentication_target_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#delegated_authentication_target_app IdentityDomainsUser#delegated_authentication_target_app}
  */
  readonly delegatedAuthenticationTargetApp?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp;
  /**
  * synced_from_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#synced_from_app IdentityDomainsUser#synced_from_app}
  */
  readonly syncedFromApp?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp;
}

export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserToTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_recovery_required: cdktf.booleanToTerraform(struct!.accountRecoveryRequired),
    bypass_notification: cdktf.booleanToTerraform(struct!.bypassNotification),
    creation_mechanism: cdktf.stringToTerraform(struct!.creationMechanism),
    do_not_show_getting_started: cdktf.booleanToTerraform(struct!.doNotShowGettingStarted),
    is_authentication_delegated: cdktf.booleanToTerraform(struct!.isAuthenticationDelegated),
    is_federated_user: cdktf.booleanToTerraform(struct!.isFederatedUser),
    is_group_membership_normalized: cdktf.booleanToTerraform(struct!.isGroupMembershipNormalized),
    is_group_membership_synced_to_users_groups: cdktf.booleanToTerraform(struct!.isGroupMembershipSyncedToUsersGroups),
    notification_email_template_id: cdktf.stringToTerraform(struct!.notificationEmailTemplateId),
    preferred_ui_landing_page: cdktf.stringToTerraform(struct!.preferredUiLandingPage),
    service_user: cdktf.booleanToTerraform(struct!.serviceUser),
    user_flow_controlled_by_external_client: cdktf.booleanToTerraform(struct!.userFlowControlledByExternalClient),
    user_provider: cdktf.stringToTerraform(struct!.userProvider),
    delegated_authentication_target_app: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToTerraform(struct!.delegatedAuthenticationTargetApp),
    synced_from_app: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToTerraform(struct!.syncedFromApp),
  }
}


export function identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserToHclTerraform(struct?: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference | IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_recovery_required: {
      value: cdktf.booleanToHclTerraform(struct!.accountRecoveryRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_notification: {
      value: cdktf.booleanToHclTerraform(struct!.bypassNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    creation_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.creationMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_not_show_getting_started: {
      value: cdktf.booleanToHclTerraform(struct!.doNotShowGettingStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_authentication_delegated: {
      value: cdktf.booleanToHclTerraform(struct!.isAuthenticationDelegated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_federated_user: {
      value: cdktf.booleanToHclTerraform(struct!.isFederatedUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_group_membership_normalized: {
      value: cdktf.booleanToHclTerraform(struct!.isGroupMembershipNormalized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_group_membership_synced_to_users_groups: {
      value: cdktf.booleanToHclTerraform(struct!.isGroupMembershipSyncedToUsersGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.notificationEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_ui_landing_page: {
      value: cdktf.stringToHclTerraform(struct!.preferredUiLandingPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_user: {
      value: cdktf.booleanToHclTerraform(struct!.serviceUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_flow_controlled_by_external_client: {
      value: cdktf.booleanToHclTerraform(struct!.userFlowControlledByExternalClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_provider: {
      value: cdktf.stringToHclTerraform(struct!.userProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_authentication_target_app: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToHclTerraform(struct!.delegatedAuthenticationTargetApp),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppList",
    },
    synced_from_app: {
      value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToHclTerraform(struct!.syncedFromApp),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountRecoveryRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRecoveryRequired = this._accountRecoveryRequired;
    }
    if (this._bypassNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassNotification = this._bypassNotification;
    }
    if (this._creationMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationMechanism = this._creationMechanism;
    }
    if (this._doNotShowGettingStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotShowGettingStarted = this._doNotShowGettingStarted;
    }
    if (this._isAuthenticationDelegated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthenticationDelegated = this._isAuthenticationDelegated;
    }
    if (this._isFederatedUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFederatedUser = this._isFederatedUser;
    }
    if (this._isGroupMembershipNormalized !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGroupMembershipNormalized = this._isGroupMembershipNormalized;
    }
    if (this._isGroupMembershipSyncedToUsersGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGroupMembershipSyncedToUsersGroups = this._isGroupMembershipSyncedToUsersGroups;
    }
    if (this._notificationEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEmailTemplateId = this._notificationEmailTemplateId;
    }
    if (this._preferredUiLandingPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUiLandingPage = this._preferredUiLandingPage;
    }
    if (this._serviceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUser = this._serviceUser;
    }
    if (this._userFlowControlledByExternalClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFlowControlledByExternalClient = this._userFlowControlledByExternalClient;
    }
    if (this._userProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProvider = this._userProvider;
    }
    if (this._delegatedAuthenticationTargetApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedAuthenticationTargetApp = this._delegatedAuthenticationTargetApp?.internalValue;
    }
    if (this._syncedFromApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncedFromApp = this._syncedFromApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountRecoveryRequired = undefined;
      this._bypassNotification = undefined;
      this._creationMechanism = undefined;
      this._doNotShowGettingStarted = undefined;
      this._isAuthenticationDelegated = undefined;
      this._isFederatedUser = undefined;
      this._isGroupMembershipNormalized = undefined;
      this._isGroupMembershipSyncedToUsersGroups = undefined;
      this._notificationEmailTemplateId = undefined;
      this._preferredUiLandingPage = undefined;
      this._serviceUser = undefined;
      this._userFlowControlledByExternalClient = undefined;
      this._userProvider = undefined;
      this._delegatedAuthenticationTargetApp.internalValue = undefined;
      this._syncedFromApp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountRecoveryRequired = value.accountRecoveryRequired;
      this._bypassNotification = value.bypassNotification;
      this._creationMechanism = value.creationMechanism;
      this._doNotShowGettingStarted = value.doNotShowGettingStarted;
      this._isAuthenticationDelegated = value.isAuthenticationDelegated;
      this._isFederatedUser = value.isFederatedUser;
      this._isGroupMembershipNormalized = value.isGroupMembershipNormalized;
      this._isGroupMembershipSyncedToUsersGroups = value.isGroupMembershipSyncedToUsersGroups;
      this._notificationEmailTemplateId = value.notificationEmailTemplateId;
      this._preferredUiLandingPage = value.preferredUiLandingPage;
      this._serviceUser = value.serviceUser;
      this._userFlowControlledByExternalClient = value.userFlowControlledByExternalClient;
      this._userProvider = value.userProvider;
      this._delegatedAuthenticationTargetApp.internalValue = value.delegatedAuthenticationTargetApp;
      this._syncedFromApp.internalValue = value.syncedFromApp;
    }
  }

  // account_recovery_required - computed: true, optional: true, required: false
  private _accountRecoveryRequired?: boolean | cdktf.IResolvable; 
  public get accountRecoveryRequired() {
    return this.getBooleanAttribute('account_recovery_required');
  }
  public set accountRecoveryRequired(value: boolean | cdktf.IResolvable) {
    this._accountRecoveryRequired = value;
  }
  public resetAccountRecoveryRequired() {
    this._accountRecoveryRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRecoveryRequiredInput() {
    return this._accountRecoveryRequired;
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // app_roles - computed: true, optional: false, required: false
  private _appRoles = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesList(this, "app_roles", false);
  public get appRoles() {
    return this._appRoles;
  }

  // applicable_authentication_target_app - computed: true, optional: false, required: false
  private _applicableAuthenticationTargetApp = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppList(this, "applicable_authentication_target_app", false);
  public get applicableAuthenticationTargetApp() {
    return this._applicableAuthenticationTargetApp;
  }

  // bypass_notification - computed: true, optional: true, required: false
  private _bypassNotification?: boolean | cdktf.IResolvable; 
  public get bypassNotification() {
    return this.getBooleanAttribute('bypass_notification');
  }
  public set bypassNotification(value: boolean | cdktf.IResolvable) {
    this._bypassNotification = value;
  }
  public resetBypassNotification() {
    this._bypassNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassNotificationInput() {
    return this._bypassNotification;
  }

  // creation_mechanism - computed: true, optional: true, required: false
  private _creationMechanism?: string; 
  public get creationMechanism() {
    return this.getStringAttribute('creation_mechanism');
  }
  public set creationMechanism(value: string) {
    this._creationMechanism = value;
  }
  public resetCreationMechanism() {
    this._creationMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationMechanismInput() {
    return this._creationMechanism;
  }

  // do_not_show_getting_started - computed: true, optional: true, required: false
  private _doNotShowGettingStarted?: boolean | cdktf.IResolvable; 
  public get doNotShowGettingStarted() {
    return this.getBooleanAttribute('do_not_show_getting_started');
  }
  public set doNotShowGettingStarted(value: boolean | cdktf.IResolvable) {
    this._doNotShowGettingStarted = value;
  }
  public resetDoNotShowGettingStarted() {
    this._doNotShowGettingStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotShowGettingStartedInput() {
    return this._doNotShowGettingStarted;
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // group_membership_last_modified - computed: true, optional: false, required: false
  public get groupMembershipLastModified() {
    return this.getStringAttribute('group_membership_last_modified');
  }

  // idcs_app_roles_limited_to_groups - computed: true, optional: false, required: false
  private _idcsAppRolesLimitedToGroups = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsList(this, "idcs_app_roles_limited_to_groups", false);
  public get idcsAppRolesLimitedToGroups() {
    return this._idcsAppRolesLimitedToGroups;
  }

  // is_account_recovery_enrolled - computed: true, optional: false, required: false
  public get isAccountRecoveryEnrolled() {
    return this.getBooleanAttribute('is_account_recovery_enrolled');
  }

  // is_authentication_delegated - computed: true, optional: true, required: false
  private _isAuthenticationDelegated?: boolean | cdktf.IResolvable; 
  public get isAuthenticationDelegated() {
    return this.getBooleanAttribute('is_authentication_delegated');
  }
  public set isAuthenticationDelegated(value: boolean | cdktf.IResolvable) {
    this._isAuthenticationDelegated = value;
  }
  public resetIsAuthenticationDelegated() {
    this._isAuthenticationDelegated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthenticationDelegatedInput() {
    return this._isAuthenticationDelegated;
  }

  // is_federated_user - computed: true, optional: true, required: false
  private _isFederatedUser?: boolean | cdktf.IResolvable; 
  public get isFederatedUser() {
    return this.getBooleanAttribute('is_federated_user');
  }
  public set isFederatedUser(value: boolean | cdktf.IResolvable) {
    this._isFederatedUser = value;
  }
  public resetIsFederatedUser() {
    this._isFederatedUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedUserInput() {
    return this._isFederatedUser;
  }

  // is_group_membership_normalized - computed: true, optional: true, required: false
  private _isGroupMembershipNormalized?: boolean | cdktf.IResolvable; 
  public get isGroupMembershipNormalized() {
    return this.getBooleanAttribute('is_group_membership_normalized');
  }
  public set isGroupMembershipNormalized(value: boolean | cdktf.IResolvable) {
    this._isGroupMembershipNormalized = value;
  }
  public resetIsGroupMembershipNormalized() {
    this._isGroupMembershipNormalized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupMembershipNormalizedInput() {
    return this._isGroupMembershipNormalized;
  }

  // is_group_membership_synced_to_users_groups - computed: true, optional: true, required: false
  private _isGroupMembershipSyncedToUsersGroups?: boolean | cdktf.IResolvable; 
  public get isGroupMembershipSyncedToUsersGroups() {
    return this.getBooleanAttribute('is_group_membership_synced_to_users_groups');
  }
  public set isGroupMembershipSyncedToUsersGroups(value: boolean | cdktf.IResolvable) {
    this._isGroupMembershipSyncedToUsersGroups = value;
  }
  public resetIsGroupMembershipSyncedToUsersGroups() {
    this._isGroupMembershipSyncedToUsersGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupMembershipSyncedToUsersGroupsInput() {
    return this._isGroupMembershipSyncedToUsersGroups;
  }

  // notification_email_template_id - computed: true, optional: true, required: false
  private _notificationEmailTemplateId?: string; 
  public get notificationEmailTemplateId() {
    return this.getStringAttribute('notification_email_template_id');
  }
  public set notificationEmailTemplateId(value: string) {
    this._notificationEmailTemplateId = value;
  }
  public resetNotificationEmailTemplateId() {
    this._notificationEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailTemplateIdInput() {
    return this._notificationEmailTemplateId;
  }

  // preferred_ui_landing_page - computed: true, optional: true, required: false
  private _preferredUiLandingPage?: string; 
  public get preferredUiLandingPage() {
    return this.getStringAttribute('preferred_ui_landing_page');
  }
  public set preferredUiLandingPage(value: string) {
    this._preferredUiLandingPage = value;
  }
  public resetPreferredUiLandingPage() {
    this._preferredUiLandingPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUiLandingPageInput() {
    return this._preferredUiLandingPage;
  }

  // service_user - computed: true, optional: true, required: false
  private _serviceUser?: boolean | cdktf.IResolvable; 
  public get serviceUser() {
    return this.getBooleanAttribute('service_user');
  }
  public set serviceUser(value: boolean | cdktf.IResolvable) {
    this._serviceUser = value;
  }
  public resetServiceUser() {
    this._serviceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUserInput() {
    return this._serviceUser;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_accounts - computed: true, optional: false, required: false
  private _supportAccounts = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsList(this, "support_accounts", false);
  public get supportAccounts() {
    return this._supportAccounts;
  }

  // user_flow_controlled_by_external_client - computed: true, optional: true, required: false
  private _userFlowControlledByExternalClient?: boolean | cdktf.IResolvable; 
  public get userFlowControlledByExternalClient() {
    return this.getBooleanAttribute('user_flow_controlled_by_external_client');
  }
  public set userFlowControlledByExternalClient(value: boolean | cdktf.IResolvable) {
    this._userFlowControlledByExternalClient = value;
  }
  public resetUserFlowControlledByExternalClient() {
    this._userFlowControlledByExternalClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFlowControlledByExternalClientInput() {
    return this._userFlowControlledByExternalClient;
  }

  // user_provider - computed: true, optional: true, required: false
  private _userProvider?: string; 
  public get userProvider() {
    return this.getStringAttribute('user_provider');
  }
  public set userProvider(value: string) {
    this._userProvider = value;
  }
  public resetUserProvider() {
    this._userProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProviderInput() {
    return this._userProvider;
  }

  // user_token - computed: true, optional: false, required: false
  private _userToken = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenList(this, "user_token", false);
  public get userToken() {
    return this._userToken;
  }

  // delegated_authentication_target_app - computed: false, optional: true, required: false
  private _delegatedAuthenticationTargetApp = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference(this, "delegated_authentication_target_app");
  public get delegatedAuthenticationTargetApp() {
    return this._delegatedAuthenticationTargetApp;
  }
  public putDelegatedAuthenticationTargetApp(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp) {
    this._delegatedAuthenticationTargetApp.internalValue = value;
  }
  public resetDelegatedAuthenticationTargetApp() {
    this._delegatedAuthenticationTargetApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAuthenticationTargetAppInput() {
    return this._delegatedAuthenticationTargetApp.internalValue;
  }

  // synced_from_app - computed: false, optional: true, required: false
  private _syncedFromApp = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference(this, "synced_from_app");
  public get syncedFromApp() {
    return this._syncedFromApp;
  }
  public putSyncedFromApp(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp) {
    this._syncedFromApp.internalValue = value;
  }
  public resetSyncedFromApp() {
    this._syncedFromApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncedFromAppInput() {
    return this._syncedFromApp.internalValue;
  }
}
export interface IdentityDomainsUserX509Certificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#display IdentityDomainsUser#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#primary IdentityDomainsUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#type IdentityDomainsUser#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#value IdentityDomainsUser#value}
  */
  readonly value: string;
}

export function identityDomainsUserX509CertificatesToTerraform(struct?: IdentityDomainsUserX509Certificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsUserX509CertificatesToHclTerraform(struct?: IdentityDomainsUserX509Certificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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

export class IdentityDomainsUserX509CertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsUserX509Certificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
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

  public set internalValue(value: IdentityDomainsUserX509Certificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
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
      this._display = value.display;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
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

  // primary - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

export class IdentityDomainsUserX509CertificatesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsUserX509Certificates[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsUserX509CertificatesOutputReference {
    return new IdentityDomainsUserX509CertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user oci_identity_domains_user}
*/
export class IdentityDomainsUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsUser to import
  * @param importFromId The id of the existing IdentityDomainsUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_user oci_identity_domains_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsUserConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsUserConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_user',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._description = config.description;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._forceDelete = config.forceDelete;
    this._idcsEndpoint = config.idcsEndpoint;
    this._locale = config.locale;
    this._nickName = config.nickName;
    this._ocid = config.ocid;
    this._password = config.password;
    this._preferredLanguage = config.preferredLanguage;
    this._profileUrl = config.profileUrl;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._timezone = config.timezone;
    this._title = config.title;
    this._userName = config.userName;
    this._userType = config.userType;
    this._addresses.internalValue = config.addresses;
    this._emails.internalValue = config.emails;
    this._entitlements.internalValue = config.entitlements;
    this._ims.internalValue = config.ims;
    this._name.internalValue = config.name;
    this._phoneNumbers.internalValue = config.phoneNumbers;
    this._photos.internalValue = config.photos;
    this._roles.internalValue = config.roles;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._urnietfparamsscimschemasextensionenterprise20User.internalValue = config.urnietfparamsscimschemasextensionenterprise20User;
    this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue = config.urnietfparamsscimschemasoracleidcsextensionOciTags;
    this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionadaptiveUser;
    this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser;
    this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser;
    this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionkerberosUserUser;
    this._urnietfparamsscimschemasoracleidcsextensionmfaUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionmfaUser;
    this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionpasswordlessUser;
    this._urnietfparamsscimschemasoracleidcsextensionposixUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionposixUser;
    this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser;
    this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionselfChangeUser;
    this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser;
    this._urnietfparamsscimschemasoracleidcsextensionsffUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionsffUser;
    this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionsocialAccountUser;
    this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser;
    this._urnietfparamsscimschemasoracleidcsextensionuserStateUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionuserStateUser;
    this._urnietfparamsscimschemasoracleidcsextensionuserUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionuserUser;
    this._x509Certificates.internalValue = config.x509Certificates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new IdentityDomainsUserGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsUserIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new IdentityDomainsUserIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsUserMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // nick_name - computed: true, optional: true, required: false
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  public resetNickName() {
    this._nickName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
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

  // password - computed: true, optional: true, required: false
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

  // preferred_language - computed: true, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // profile_url - computed: true, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
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

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // title - computed: true, optional: true, required: false
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

  // urnietfparamsscimschemasoracleidcsextensiondb_user_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbUserUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserList(this, "urnietfparamsscimschemasoracleidcsextensiondb_user_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbUserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbUserUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionpassword_state_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionpasswordStateUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserList(this, "urnietfparamsscimschemasoracleidcsextensionpassword_state_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionpasswordStateUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordStateUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_credentials_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_credentials_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_type - computed: true, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new IdentityDomainsUserAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: IdentityDomainsUserAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // emails - computed: false, optional: true, required: false
  private _emails = new IdentityDomainsUserEmailsList(this, "emails", true);
  public get emails() {
    return this._emails;
  }
  public putEmails(value: IdentityDomainsUserEmails[] | cdktf.IResolvable) {
    this._emails.internalValue = value;
  }
  public resetEmails() {
    this._emails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails.internalValue;
  }

  // entitlements - computed: false, optional: true, required: false
  private _entitlements = new IdentityDomainsUserEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
  }
  public putEntitlements(value: IdentityDomainsUserEntitlements[] | cdktf.IResolvable) {
    this._entitlements.internalValue = value;
  }
  public resetEntitlements() {
    this._entitlements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsInput() {
    return this._entitlements.internalValue;
  }

  // ims - computed: false, optional: true, required: false
  private _ims = new IdentityDomainsUserImsList(this, "ims", false);
  public get ims() {
    return this._ims;
  }
  public putIms(value: IdentityDomainsUserIms[] | cdktf.IResolvable) {
    this._ims.internalValue = value;
  }
  public resetIms() {
    this._ims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsInput() {
    return this._ims.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new IdentityDomainsUserNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: IdentityDomainsUserName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // phone_numbers - computed: false, optional: true, required: false
  private _phoneNumbers = new IdentityDomainsUserPhoneNumbersList(this, "phone_numbers", false);
  public get phoneNumbers() {
    return this._phoneNumbers;
  }
  public putPhoneNumbers(value: IdentityDomainsUserPhoneNumbers[] | cdktf.IResolvable) {
    this._phoneNumbers.internalValue = value;
  }
  public resetPhoneNumbers() {
    this._phoneNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumbersInput() {
    return this._phoneNumbers.internalValue;
  }

  // photos - computed: false, optional: true, required: false
  private _photos = new IdentityDomainsUserPhotosList(this, "photos", false);
  public get photos() {
    return this._photos;
  }
  public putPhotos(value: IdentityDomainsUserPhotos[] | cdktf.IResolvable) {
    this._photos.internalValue = value;
  }
  public resetPhotos() {
    this._photos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photosInput() {
    return this._photos.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new IdentityDomainsUserRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: IdentityDomainsUserRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsUserTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsUserTags[] | cdktf.IResolvable) {
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
  private _timeouts = new IdentityDomainsUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // urnietfparamsscimschemasextensionenterprise20user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasextensionenterprise20User = new IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference(this, "urnietfparamsscimschemasextensionenterprise20user");
  public get urnietfparamsscimschemasextensionenterprise20User() {
    return this._urnietfparamsscimschemasextensionenterprise20User;
  }
  public putUrnietfparamsscimschemasextensionenterprise20User(value: IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User) {
    this._urnietfparamsscimschemasextensionenterprise20User.internalValue = value;
  }
  public resetUrnietfparamsscimschemasextensionenterprise20User() {
    this._urnietfparamsscimschemasextensionenterprise20User.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasextensionenterprise20UserInput() {
    return this._urnietfparamsscimschemasextensionenterprise20User.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextension_oci_tags - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionOciTags = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(this, "urnietfparamsscimschemasoracleidcsextension_oci_tags");
  public get urnietfparamsscimschemasoracleidcsextensionOciTags() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionOciTags(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags) {
    this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionOciTags() {
    this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionOciTagsInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionadaptive_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionadaptiveUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionadaptive_user");
  public get urnietfparamsscimschemasoracleidcsextensionadaptiveUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionadaptiveUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser) {
    this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionadaptiveUser() {
    this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionadaptiveUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensioncapabilities_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensioncapabilities_user");
  public get urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser() {
    return this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser) {
    this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser() {
    this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensioncapabilitiesUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensiondb_credentials_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensiondb_credentials_user");
  public get urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser) {
    this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser() {
    this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensiondbCredentialsUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionkerberos_user_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionkerberosUserUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionkerberos_user_user");
  public get urnietfparamsscimschemasoracleidcsextensionkerberosUserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser) {
    this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser() {
    this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionkerberosUserUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionmfa_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmfaUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionmfa_user");
  public get urnietfparamsscimschemasoracleidcsextensionmfaUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionmfaUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionmfaUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser) {
    this._urnietfparamsscimschemasoracleidcsextensionmfaUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionmfaUser() {
    this._urnietfparamsscimschemasoracleidcsextensionmfaUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionmfaUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionmfaUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionpasswordless_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionpasswordlessUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionpasswordless_user");
  public get urnietfparamsscimschemasoracleidcsextensionpasswordlessUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser) {
    this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser() {
    this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionpasswordlessUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionposix_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionposixUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionposix_user");
  public get urnietfparamsscimschemasoracleidcsextensionposixUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionposixUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionposixUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser) {
    this._urnietfparamsscimschemasoracleidcsextensionposixUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionposixUser() {
    this._urnietfparamsscimschemasoracleidcsextensionposixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionposixUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionposixUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user");
  public get urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser) {
    this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser() {
    this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_change_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfChangeUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionself_change_user");
  public get urnietfparamsscimschemasoracleidcsextensionselfChangeUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser) {
    this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser() {
    this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_registration_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionself_registration_user");
  public get urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser) {
    this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser() {
    this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionselfRegistrationUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionsff_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsffUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionsff_user");
  public get urnietfparamsscimschemasoracleidcsextensionsffUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsffUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionsffUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser) {
    this._urnietfparamsscimschemasoracleidcsextensionsffUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionsffUser() {
    this._urnietfparamsscimschemasoracleidcsextensionsffUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionsffUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionsffUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionsocial_account_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsocialAccountUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionsocial_account_user");
  public get urnietfparamsscimschemasoracleidcsextensionsocialAccountUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser) {
    this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser() {
    this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionsocialAccountUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionterms_of_use_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionterms_of_use_user");
  public get urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser) {
    this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser() {
    this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensiontermsOfUseUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_state_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserStateUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionuser_state_user");
  public get urnietfparamsscimschemasoracleidcsextensionuserStateUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserStateUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionuserStateUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser) {
    this._urnietfparamsscimschemasoracleidcsextensionuserStateUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionuserStateUser() {
    this._urnietfparamsscimschemasoracleidcsextensionuserStateUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionuserStateUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserStateUser.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserUser = new IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionuser_user");
  public get urnietfparamsscimschemasoracleidcsextensionuserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionuserUser(value: IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser) {
    this._urnietfparamsscimschemasoracleidcsextensionuserUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionuserUser() {
    this._urnietfparamsscimschemasoracleidcsextensionuserUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionuserUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserUser.internalValue;
  }

  // x509certificates - computed: false, optional: true, required: false
  private _x509Certificates = new IdentityDomainsUserX509CertificatesList(this, "x509certificates", false);
  public get x509Certificates() {
    return this._x509Certificates;
  }
  public putX509Certificates(value: IdentityDomainsUserX509Certificates[] | cdktf.IResolvable) {
    this._x509Certificates.internalValue = value;
  }
  public resetX509Certificates() {
    this._x509Certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificatesInput() {
    return this._x509Certificates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      locale: cdktf.stringToTerraform(this._locale),
      nick_name: cdktf.stringToTerraform(this._nickName),
      ocid: cdktf.stringToTerraform(this._ocid),
      password: cdktf.stringToTerraform(this._password),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      profile_url: cdktf.stringToTerraform(this._profileUrl),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      user_name: cdktf.stringToTerraform(this._userName),
      user_type: cdktf.stringToTerraform(this._userType),
      addresses: cdktf.listMapper(identityDomainsUserAddressesToTerraform, true)(this._addresses.internalValue),
      emails: cdktf.listMapper(identityDomainsUserEmailsToTerraform, true)(this._emails.internalValue),
      entitlements: cdktf.listMapper(identityDomainsUserEntitlementsToTerraform, true)(this._entitlements.internalValue),
      ims: cdktf.listMapper(identityDomainsUserImsToTerraform, true)(this._ims.internalValue),
      name: identityDomainsUserNameToTerraform(this._name.internalValue),
      phone_numbers: cdktf.listMapper(identityDomainsUserPhoneNumbersToTerraform, true)(this._phoneNumbers.internalValue),
      photos: cdktf.listMapper(identityDomainsUserPhotosToTerraform, true)(this._photos.internalValue),
      roles: cdktf.listMapper(identityDomainsUserRolesToTerraform, true)(this._roles.internalValue),
      tags: cdktf.listMapper(identityDomainsUserTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsUserTimeoutsToTerraform(this._timeouts.internalValue),
      urnietfparamsscimschemasextensionenterprise20user: identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserToTerraform(this._urnietfparamsscimschemasextensionenterprise20User.internalValue),
      urnietfparamsscimschemasoracleidcsextension_oci_tags: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue),
      urnietfparamsscimschemasoracleidcsextensionadaptive_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensioncapabilities_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensiondb_credentials_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionkerberos_user_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionmfa_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionmfaUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionpasswordless_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionposix_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionposixUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionself_change_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionself_registration_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionsff_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionsffUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionsocial_account_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionterms_of_use_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionuser_state_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionuserStateUser.internalValue),
      urnietfparamsscimschemasoracleidcsextensionuser_user: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionuserUser.internalValue),
      x509certificates: cdktf.listMapper(identityDomainsUserX509CertificatesToTerraform, true)(this._x509Certificates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nick_name: {
        value: cdktf.stringToHclTerraform(this._nickName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
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
      preferred_language: {
        value: cdktf.stringToHclTerraform(this._preferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_url: {
        value: cdktf.stringToHclTerraform(this._profileUrl),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addresses: {
        value: cdktf.listMapperHcl(identityDomainsUserAddressesToHclTerraform, true)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserAddressesList",
      },
      emails: {
        value: cdktf.listMapperHcl(identityDomainsUserEmailsToHclTerraform, true)(this._emails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsUserEmailsList",
      },
      entitlements: {
        value: cdktf.listMapperHcl(identityDomainsUserEntitlementsToHclTerraform, true)(this._entitlements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserEntitlementsList",
      },
      ims: {
        value: cdktf.listMapperHcl(identityDomainsUserImsToHclTerraform, true)(this._ims.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserImsList",
      },
      name: {
        value: identityDomainsUserNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserNameList",
      },
      phone_numbers: {
        value: cdktf.listMapperHcl(identityDomainsUserPhoneNumbersToHclTerraform, true)(this._phoneNumbers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserPhoneNumbersList",
      },
      photos: {
        value: cdktf.listMapperHcl(identityDomainsUserPhotosToHclTerraform, true)(this._photos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserPhotosList",
      },
      roles: {
        value: cdktf.listMapperHcl(identityDomainsUserRolesToHclTerraform, true)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserRolesList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsUserTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserTagsList",
      },
      timeouts: {
        value: identityDomainsUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsUserTimeouts",
      },
      urnietfparamsscimschemasextensionenterprise20user: {
        value: identityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserToHclTerraform(this._urnietfparamsscimschemasextensionenterprise20User.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserList",
      },
      urnietfparamsscimschemasoracleidcsextension_oci_tags: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsList",
      },
      urnietfparamsscimschemasoracleidcsextensionadaptive_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserList",
      },
      urnietfparamsscimschemasoracleidcsextensioncapabilities_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserList",
      },
      urnietfparamsscimschemasoracleidcsextensiondb_credentials_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionkerberos_user_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionmfa_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionmfaUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionpasswordless_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionposix_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionposixUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionself_change_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionself_registration_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionsff_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionsffUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionsocial_account_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionterms_of_use_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionuser_state_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionuserStateUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserList",
      },
      urnietfparamsscimschemasoracleidcsextensionuser_user: {
        value: identityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionuserUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserList",
      },
      x509certificates: {
        value: cdktf.listMapperHcl(identityDomainsUserX509CertificatesToHclTerraform, true)(this._x509Certificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsUserX509CertificatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
