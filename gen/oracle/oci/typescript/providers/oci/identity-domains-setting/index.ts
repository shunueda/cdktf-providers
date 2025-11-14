// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#account_always_trust_scope IdentityDomainsSetting#account_always_trust_scope}
  */
  readonly accountAlwaysTrustScope?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#allowed_domains IdentityDomainsSetting#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#allowed_forgot_password_flow_return_urls IdentityDomainsSetting#allowed_forgot_password_flow_return_urls}
  */
  readonly allowedForgotPasswordFlowReturnUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#allowed_notification_redirect_urls IdentityDomainsSetting#allowed_notification_redirect_urls}
  */
  readonly allowedNotificationRedirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#attribute_sets IdentityDomainsSetting#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#attributes IdentityDomainsSetting#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#audit_event_retention_period IdentityDomainsSetting#audit_event_retention_period}
  */
  readonly auditEventRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#authorization IdentityDomainsSetting#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_migration_custom_url IdentityDomainsSetting#cloud_migration_custom_url}
  */
  readonly cloudMigrationCustomUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_migration_url_enabled IdentityDomainsSetting#cloud_migration_url_enabled}
  */
  readonly cloudMigrationUrlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#contact_emails IdentityDomainsSetting#contact_emails}
  */
  readonly contactEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#csr_access IdentityDomainsSetting#csr_access}
  */
  readonly csrAccess: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#custom_branding IdentityDomainsSetting#custom_branding}
  */
  readonly customBranding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#custom_css_location IdentityDomainsSetting#custom_css_location}
  */
  readonly customCssLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#custom_html_location IdentityDomainsSetting#custom_html_location}
  */
  readonly customHtmlLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#custom_translation IdentityDomainsSetting#custom_translation}
  */
  readonly customTranslation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#default_trust_scope IdentityDomainsSetting#default_trust_scope}
  */
  readonly defaultTrustScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#diagnostic_level IdentityDomainsSetting#diagnostic_level}
  */
  readonly diagnosticLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#diagnostic_record_for_search_identifies_returned_resources IdentityDomainsSetting#diagnostic_record_for_search_identifies_returned_resources}
  */
  readonly diagnosticRecordForSearchIdentifiesReturnedResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#enable_terms_of_use IdentityDomainsSetting#enable_terms_of_use}
  */
  readonly enableTermsOfUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#external_id IdentityDomainsSetting#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#iam_upst_session_expiry IdentityDomainsSetting#iam_upst_session_expiry}
  */
  readonly iamUpstSessionExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#id IdentityDomainsSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#idcs_endpoint IdentityDomainsSetting#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#is_hosted_page IdentityDomainsSetting#is_hosted_page}
  */
  readonly isHostedPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#issuer IdentityDomainsSetting#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#max_no_of_app_cmva_to_return IdentityDomainsSetting#max_no_of_app_cmva_to_return}
  */
  readonly maxNoOfAppCmvaToReturn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#max_no_of_app_role_members_to_return IdentityDomainsSetting#max_no_of_app_role_members_to_return}
  */
  readonly maxNoOfAppRoleMembersToReturn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocid IdentityDomainsSetting#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#preferred_language IdentityDomainsSetting#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#prev_issuer IdentityDomainsSetting#prev_issuer}
  */
  readonly prevIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#privacy_policy_url IdentityDomainsSetting#privacy_policy_url}
  */
  readonly privacyPolicyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#re_auth_factor IdentityDomainsSetting#re_auth_factor}
  */
  readonly reAuthFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#re_auth_when_changing_my_authentication_factors IdentityDomainsSetting#re_auth_when_changing_my_authentication_factors}
  */
  readonly reAuthWhenChangingMyAuthenticationFactors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#resource_type_schema_version IdentityDomainsSetting#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#schemas IdentityDomainsSetting#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#service_admin_cannot_list_other_users IdentityDomainsSetting#service_admin_cannot_list_other_users}
  */
  readonly serviceAdminCannotListOtherUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#setting_id IdentityDomainsSetting#setting_id}
  */
  readonly settingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#signing_cert_public_access IdentityDomainsSetting#signing_cert_public_access}
  */
  readonly signingCertPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#sub_mapping_attr IdentityDomainsSetting#sub_mapping_attr}
  */
  readonly subMappingAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#terms_of_use_url IdentityDomainsSetting#terms_of_use_url}
  */
  readonly termsOfUseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#timezone IdentityDomainsSetting#timezone}
  */
  readonly timezone?: string;
  /**
  * certificate_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#certificate_validation IdentityDomainsSetting#certificate_validation}
  */
  readonly certificateValidation?: IdentityDomainsSettingCertificateValidation;
  /**
  * cloud_gate_cors_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_gate_cors_settings IdentityDomainsSetting#cloud_gate_cors_settings}
  */
  readonly cloudGateCorsSettings?: IdentityDomainsSettingCloudGateCorsSettings;
  /**
  * company_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#company_names IdentityDomainsSetting#company_names}
  */
  readonly companyNames?: IdentityDomainsSettingCompanyNames[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#images IdentityDomainsSetting#images}
  */
  readonly images?: IdentityDomainsSettingImages[] | cdktf.IResolvable;
  /**
  * login_texts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#login_texts IdentityDomainsSetting#login_texts}
  */
  readonly loginTexts?: IdentityDomainsSettingLoginTexts[] | cdktf.IResolvable;
  /**
  * purge_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#purge_configs IdentityDomainsSetting#purge_configs}
  */
  readonly purgeConfigs?: IdentityDomainsSettingPurgeConfigs[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#tags IdentityDomainsSetting#tags}
  */
  readonly tags?: IdentityDomainsSettingTags[] | cdktf.IResolvable;
  /**
  * tenant_custom_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#tenant_custom_claims IdentityDomainsSetting#tenant_custom_claims}
  */
  readonly tenantCustomClaims?: IdentityDomainsSettingTenantCustomClaims[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#timeouts IdentityDomainsSetting#timeouts}
  */
  readonly timeouts?: IdentityDomainsSettingTimeouts;
}
export interface IdentityDomainsSettingDefaultCompanyNames {
}

export function identityDomainsSettingDefaultCompanyNamesToTerraform(struct?: IdentityDomainsSettingDefaultCompanyNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSettingDefaultCompanyNamesToHclTerraform(struct?: IdentityDomainsSettingDefaultCompanyNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSettingDefaultCompanyNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingDefaultCompanyNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingDefaultCompanyNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsSettingDefaultCompanyNamesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSettingDefaultCompanyNamesOutputReference {
    return new IdentityDomainsSettingDefaultCompanyNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingDefaultImages {
}

export function identityDomainsSettingDefaultImagesToTerraform(struct?: IdentityDomainsSettingDefaultImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSettingDefaultImagesToHclTerraform(struct?: IdentityDomainsSettingDefaultImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSettingDefaultImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingDefaultImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingDefaultImages | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsSettingDefaultImagesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSettingDefaultImagesOutputReference {
    return new IdentityDomainsSettingDefaultImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingDefaultLoginTexts {
}

export function identityDomainsSettingDefaultLoginTextsToTerraform(struct?: IdentityDomainsSettingDefaultLoginTexts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSettingDefaultLoginTextsToHclTerraform(struct?: IdentityDomainsSettingDefaultLoginTexts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSettingDefaultLoginTextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingDefaultLoginTexts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingDefaultLoginTexts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsSettingDefaultLoginTextsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSettingDefaultLoginTextsOutputReference {
    return new IdentityDomainsSettingDefaultLoginTextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingIdcsCreatedBy {
}

export function identityDomainsSettingIdcsCreatedByToTerraform(struct?: IdentityDomainsSettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSettingIdcsCreatedByToHclTerraform(struct?: IdentityDomainsSettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSettingIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingIdcsCreatedBy | undefined) {
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

export class IdentityDomainsSettingIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSettingIdcsCreatedByOutputReference {
    return new IdentityDomainsSettingIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingIdcsLastModifiedBy {
}

export function identityDomainsSettingIdcsLastModifiedByToTerraform(struct?: IdentityDomainsSettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSettingIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsSettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSettingIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingIdcsLastModifiedBy | undefined) {
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

export class IdentityDomainsSettingIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSettingIdcsLastModifiedByOutputReference {
    return new IdentityDomainsSettingIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingMeta {
}

export function identityDomainsSettingMetaToTerraform(struct?: IdentityDomainsSettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSettingMetaToHclTerraform(struct?: IdentityDomainsSettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSettingMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingMeta | undefined) {
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

export class IdentityDomainsSettingMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSettingMetaOutputReference {
    return new IdentityDomainsSettingMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingCertificateValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#crl_check_on_ocsp_failure_enabled IdentityDomainsSetting#crl_check_on_ocsp_failure_enabled}
  */
  readonly crlCheckOnOcspFailureEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#crl_enabled IdentityDomainsSetting#crl_enabled}
  */
  readonly crlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#crl_location IdentityDomainsSetting#crl_location}
  */
  readonly crlLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#crl_refresh_interval IdentityDomainsSetting#crl_refresh_interval}
  */
  readonly crlRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocsp_enabled IdentityDomainsSetting#ocsp_enabled}
  */
  readonly ocspEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocsp_responder_url IdentityDomainsSetting#ocsp_responder_url}
  */
  readonly ocspResponderUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocsp_settings_responder_url_preferred IdentityDomainsSetting#ocsp_settings_responder_url_preferred}
  */
  readonly ocspSettingsResponderUrlPreferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocsp_signing_certificate_alias IdentityDomainsSetting#ocsp_signing_certificate_alias}
  */
  readonly ocspSigningCertificateAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocsp_timeout_duration IdentityDomainsSetting#ocsp_timeout_duration}
  */
  readonly ocspTimeoutDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#ocsp_unknown_response_status_allowed IdentityDomainsSetting#ocsp_unknown_response_status_allowed}
  */
  readonly ocspUnknownResponseStatusAllowed?: boolean | cdktf.IResolvable;
}

export function identityDomainsSettingCertificateValidationToTerraform(struct?: IdentityDomainsSettingCertificateValidationOutputReference | IdentityDomainsSettingCertificateValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_check_on_ocsp_failure_enabled: cdktf.booleanToTerraform(struct!.crlCheckOnOcspFailureEnabled),
    crl_enabled: cdktf.booleanToTerraform(struct!.crlEnabled),
    crl_location: cdktf.stringToTerraform(struct!.crlLocation),
    crl_refresh_interval: cdktf.numberToTerraform(struct!.crlRefreshInterval),
    ocsp_enabled: cdktf.booleanToTerraform(struct!.ocspEnabled),
    ocsp_responder_url: cdktf.stringToTerraform(struct!.ocspResponderUrl),
    ocsp_settings_responder_url_preferred: cdktf.booleanToTerraform(struct!.ocspSettingsResponderUrlPreferred),
    ocsp_signing_certificate_alias: cdktf.stringToTerraform(struct!.ocspSigningCertificateAlias),
    ocsp_timeout_duration: cdktf.numberToTerraform(struct!.ocspTimeoutDuration),
    ocsp_unknown_response_status_allowed: cdktf.booleanToTerraform(struct!.ocspUnknownResponseStatusAllowed),
  }
}


export function identityDomainsSettingCertificateValidationToHclTerraform(struct?: IdentityDomainsSettingCertificateValidationOutputReference | IdentityDomainsSettingCertificateValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_check_on_ocsp_failure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.crlCheckOnOcspFailureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.crlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_location: {
      value: cdktf.stringToHclTerraform(struct!.crlLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.crlRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ocspEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_responder_url: {
      value: cdktf.stringToHclTerraform(struct!.ocspResponderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_settings_responder_url_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.ocspSettingsResponderUrlPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_signing_certificate_alias: {
      value: cdktf.stringToHclTerraform(struct!.ocspSigningCertificateAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_timeout_duration: {
      value: cdktf.numberToHclTerraform(struct!.ocspTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_unknown_response_status_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.ocspUnknownResponseStatusAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsSettingCertificateValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsSettingCertificateValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlCheckOnOcspFailureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlCheckOnOcspFailureEnabled = this._crlCheckOnOcspFailureEnabled;
    }
    if (this._crlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlEnabled = this._crlEnabled;
    }
    if (this._crlLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlLocation = this._crlLocation;
    }
    if (this._crlRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlRefreshInterval = this._crlRefreshInterval;
    }
    if (this._ocspEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspEnabled = this._ocspEnabled;
    }
    if (this._ocspResponderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponderUrl = this._ocspResponderUrl;
    }
    if (this._ocspSettingsResponderUrlPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSettingsResponderUrlPreferred = this._ocspSettingsResponderUrlPreferred;
    }
    if (this._ocspSigningCertificateAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSigningCertificateAlias = this._ocspSigningCertificateAlias;
    }
    if (this._ocspTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspTimeoutDuration = this._ocspTimeoutDuration;
    }
    if (this._ocspUnknownResponseStatusAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspUnknownResponseStatusAllowed = this._ocspUnknownResponseStatusAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingCertificateValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crlCheckOnOcspFailureEnabled = undefined;
      this._crlEnabled = undefined;
      this._crlLocation = undefined;
      this._crlRefreshInterval = undefined;
      this._ocspEnabled = undefined;
      this._ocspResponderUrl = undefined;
      this._ocspSettingsResponderUrlPreferred = undefined;
      this._ocspSigningCertificateAlias = undefined;
      this._ocspTimeoutDuration = undefined;
      this._ocspUnknownResponseStatusAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crlCheckOnOcspFailureEnabled = value.crlCheckOnOcspFailureEnabled;
      this._crlEnabled = value.crlEnabled;
      this._crlLocation = value.crlLocation;
      this._crlRefreshInterval = value.crlRefreshInterval;
      this._ocspEnabled = value.ocspEnabled;
      this._ocspResponderUrl = value.ocspResponderUrl;
      this._ocspSettingsResponderUrlPreferred = value.ocspSettingsResponderUrlPreferred;
      this._ocspSigningCertificateAlias = value.ocspSigningCertificateAlias;
      this._ocspTimeoutDuration = value.ocspTimeoutDuration;
      this._ocspUnknownResponseStatusAllowed = value.ocspUnknownResponseStatusAllowed;
    }
  }

  // crl_check_on_ocsp_failure_enabled - computed: true, optional: true, required: false
  private _crlCheckOnOcspFailureEnabled?: boolean | cdktf.IResolvable; 
  public get crlCheckOnOcspFailureEnabled() {
    return this.getBooleanAttribute('crl_check_on_ocsp_failure_enabled');
  }
  public set crlCheckOnOcspFailureEnabled(value: boolean | cdktf.IResolvable) {
    this._crlCheckOnOcspFailureEnabled = value;
  }
  public resetCrlCheckOnOcspFailureEnabled() {
    this._crlCheckOnOcspFailureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCheckOnOcspFailureEnabledInput() {
    return this._crlCheckOnOcspFailureEnabled;
  }

  // crl_enabled - computed: true, optional: true, required: false
  private _crlEnabled?: boolean | cdktf.IResolvable; 
  public get crlEnabled() {
    return this.getBooleanAttribute('crl_enabled');
  }
  public set crlEnabled(value: boolean | cdktf.IResolvable) {
    this._crlEnabled = value;
  }
  public resetCrlEnabled() {
    this._crlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlEnabledInput() {
    return this._crlEnabled;
  }

  // crl_location - computed: true, optional: true, required: false
  private _crlLocation?: string; 
  public get crlLocation() {
    return this.getStringAttribute('crl_location');
  }
  public set crlLocation(value: string) {
    this._crlLocation = value;
  }
  public resetCrlLocation() {
    this._crlLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlLocationInput() {
    return this._crlLocation;
  }

  // crl_refresh_interval - computed: true, optional: true, required: false
  private _crlRefreshInterval?: number; 
  public get crlRefreshInterval() {
    return this.getNumberAttribute('crl_refresh_interval');
  }
  public set crlRefreshInterval(value: number) {
    this._crlRefreshInterval = value;
  }
  public resetCrlRefreshInterval() {
    this._crlRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlRefreshIntervalInput() {
    return this._crlRefreshInterval;
  }

  // ocsp_enabled - computed: true, optional: true, required: false
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

  // ocsp_responder_url - computed: true, optional: true, required: false
  private _ocspResponderUrl?: string; 
  public get ocspResponderUrl() {
    return this.getStringAttribute('ocsp_responder_url');
  }
  public set ocspResponderUrl(value: string) {
    this._ocspResponderUrl = value;
  }
  public resetOcspResponderUrl() {
    this._ocspResponderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponderUrlInput() {
    return this._ocspResponderUrl;
  }

  // ocsp_settings_responder_url_preferred - computed: true, optional: true, required: false
  private _ocspSettingsResponderUrlPreferred?: boolean | cdktf.IResolvable; 
  public get ocspSettingsResponderUrlPreferred() {
    return this.getBooleanAttribute('ocsp_settings_responder_url_preferred');
  }
  public set ocspSettingsResponderUrlPreferred(value: boolean | cdktf.IResolvable) {
    this._ocspSettingsResponderUrlPreferred = value;
  }
  public resetOcspSettingsResponderUrlPreferred() {
    this._ocspSettingsResponderUrlPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSettingsResponderUrlPreferredInput() {
    return this._ocspSettingsResponderUrlPreferred;
  }

  // ocsp_signing_certificate_alias - computed: true, optional: true, required: false
  private _ocspSigningCertificateAlias?: string; 
  public get ocspSigningCertificateAlias() {
    return this.getStringAttribute('ocsp_signing_certificate_alias');
  }
  public set ocspSigningCertificateAlias(value: string) {
    this._ocspSigningCertificateAlias = value;
  }
  public resetOcspSigningCertificateAlias() {
    this._ocspSigningCertificateAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSigningCertificateAliasInput() {
    return this._ocspSigningCertificateAlias;
  }

  // ocsp_timeout_duration - computed: true, optional: true, required: false
  private _ocspTimeoutDuration?: number; 
  public get ocspTimeoutDuration() {
    return this.getNumberAttribute('ocsp_timeout_duration');
  }
  public set ocspTimeoutDuration(value: number) {
    this._ocspTimeoutDuration = value;
  }
  public resetOcspTimeoutDuration() {
    this._ocspTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspTimeoutDurationInput() {
    return this._ocspTimeoutDuration;
  }

  // ocsp_unknown_response_status_allowed - computed: true, optional: true, required: false
  private _ocspUnknownResponseStatusAllowed?: boolean | cdktf.IResolvable; 
  public get ocspUnknownResponseStatusAllowed() {
    return this.getBooleanAttribute('ocsp_unknown_response_status_allowed');
  }
  public set ocspUnknownResponseStatusAllowed(value: boolean | cdktf.IResolvable) {
    this._ocspUnknownResponseStatusAllowed = value;
  }
  public resetOcspUnknownResponseStatusAllowed() {
    this._ocspUnknownResponseStatusAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspUnknownResponseStatusAllowedInput() {
    return this._ocspUnknownResponseStatusAllowed;
  }
}
export interface IdentityDomainsSettingCloudGateCorsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_gate_cors_allow_null_origin IdentityDomainsSetting#cloud_gate_cors_allow_null_origin}
  */
  readonly cloudGateCorsAllowNullOrigin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_gate_cors_allowed_origins IdentityDomainsSetting#cloud_gate_cors_allowed_origins}
  */
  readonly cloudGateCorsAllowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_gate_cors_enabled IdentityDomainsSetting#cloud_gate_cors_enabled}
  */
  readonly cloudGateCorsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_gate_cors_exposed_headers IdentityDomainsSetting#cloud_gate_cors_exposed_headers}
  */
  readonly cloudGateCorsExposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#cloud_gate_cors_max_age IdentityDomainsSetting#cloud_gate_cors_max_age}
  */
  readonly cloudGateCorsMaxAge?: number;
}

export function identityDomainsSettingCloudGateCorsSettingsToTerraform(struct?: IdentityDomainsSettingCloudGateCorsSettingsOutputReference | IdentityDomainsSettingCloudGateCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_gate_cors_allow_null_origin: cdktf.booleanToTerraform(struct!.cloudGateCorsAllowNullOrigin),
    cloud_gate_cors_allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudGateCorsAllowedOrigins),
    cloud_gate_cors_enabled: cdktf.booleanToTerraform(struct!.cloudGateCorsEnabled),
    cloud_gate_cors_exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudGateCorsExposedHeaders),
    cloud_gate_cors_max_age: cdktf.numberToTerraform(struct!.cloudGateCorsMaxAge),
  }
}


export function identityDomainsSettingCloudGateCorsSettingsToHclTerraform(struct?: IdentityDomainsSettingCloudGateCorsSettingsOutputReference | IdentityDomainsSettingCloudGateCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_gate_cors_allow_null_origin: {
      value: cdktf.booleanToHclTerraform(struct!.cloudGateCorsAllowNullOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_gate_cors_allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudGateCorsAllowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_gate_cors_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cloudGateCorsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_gate_cors_exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudGateCorsExposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_gate_cors_max_age: {
      value: cdktf.numberToHclTerraform(struct!.cloudGateCorsMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsSettingCloudGateCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsSettingCloudGateCorsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudGateCorsAllowNullOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateCorsAllowNullOrigin = this._cloudGateCorsAllowNullOrigin;
    }
    if (this._cloudGateCorsAllowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateCorsAllowedOrigins = this._cloudGateCorsAllowedOrigins;
    }
    if (this._cloudGateCorsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateCorsEnabled = this._cloudGateCorsEnabled;
    }
    if (this._cloudGateCorsExposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateCorsExposedHeaders = this._cloudGateCorsExposedHeaders;
    }
    if (this._cloudGateCorsMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateCorsMaxAge = this._cloudGateCorsMaxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingCloudGateCorsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudGateCorsAllowNullOrigin = undefined;
      this._cloudGateCorsAllowedOrigins = undefined;
      this._cloudGateCorsEnabled = undefined;
      this._cloudGateCorsExposedHeaders = undefined;
      this._cloudGateCorsMaxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudGateCorsAllowNullOrigin = value.cloudGateCorsAllowNullOrigin;
      this._cloudGateCorsAllowedOrigins = value.cloudGateCorsAllowedOrigins;
      this._cloudGateCorsEnabled = value.cloudGateCorsEnabled;
      this._cloudGateCorsExposedHeaders = value.cloudGateCorsExposedHeaders;
      this._cloudGateCorsMaxAge = value.cloudGateCorsMaxAge;
    }
  }

  // cloud_gate_cors_allow_null_origin - computed: true, optional: true, required: false
  private _cloudGateCorsAllowNullOrigin?: boolean | cdktf.IResolvable; 
  public get cloudGateCorsAllowNullOrigin() {
    return this.getBooleanAttribute('cloud_gate_cors_allow_null_origin');
  }
  public set cloudGateCorsAllowNullOrigin(value: boolean | cdktf.IResolvable) {
    this._cloudGateCorsAllowNullOrigin = value;
  }
  public resetCloudGateCorsAllowNullOrigin() {
    this._cloudGateCorsAllowNullOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGateCorsAllowNullOriginInput() {
    return this._cloudGateCorsAllowNullOrigin;
  }

  // cloud_gate_cors_allowed_origins - computed: true, optional: true, required: false
  private _cloudGateCorsAllowedOrigins?: string[]; 
  public get cloudGateCorsAllowedOrigins() {
    return this.getListAttribute('cloud_gate_cors_allowed_origins');
  }
  public set cloudGateCorsAllowedOrigins(value: string[]) {
    this._cloudGateCorsAllowedOrigins = value;
  }
  public resetCloudGateCorsAllowedOrigins() {
    this._cloudGateCorsAllowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGateCorsAllowedOriginsInput() {
    return this._cloudGateCorsAllowedOrigins;
  }

  // cloud_gate_cors_enabled - computed: true, optional: true, required: false
  private _cloudGateCorsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudGateCorsEnabled() {
    return this.getBooleanAttribute('cloud_gate_cors_enabled');
  }
  public set cloudGateCorsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudGateCorsEnabled = value;
  }
  public resetCloudGateCorsEnabled() {
    this._cloudGateCorsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGateCorsEnabledInput() {
    return this._cloudGateCorsEnabled;
  }

  // cloud_gate_cors_exposed_headers - computed: true, optional: true, required: false
  private _cloudGateCorsExposedHeaders?: string[]; 
  public get cloudGateCorsExposedHeaders() {
    return this.getListAttribute('cloud_gate_cors_exposed_headers');
  }
  public set cloudGateCorsExposedHeaders(value: string[]) {
    this._cloudGateCorsExposedHeaders = value;
  }
  public resetCloudGateCorsExposedHeaders() {
    this._cloudGateCorsExposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGateCorsExposedHeadersInput() {
    return this._cloudGateCorsExposedHeaders;
  }

  // cloud_gate_cors_max_age - computed: true, optional: true, required: false
  private _cloudGateCorsMaxAge?: number; 
  public get cloudGateCorsMaxAge() {
    return this.getNumberAttribute('cloud_gate_cors_max_age');
  }
  public set cloudGateCorsMaxAge(value: number) {
    this._cloudGateCorsMaxAge = value;
  }
  public resetCloudGateCorsMaxAge() {
    this._cloudGateCorsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGateCorsMaxAgeInput() {
    return this._cloudGateCorsMaxAge;
  }
}
export interface IdentityDomainsSettingCompanyNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}
  */
  readonly locale: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}
  */
  readonly value: string;
}

export function identityDomainsSettingCompanyNamesToTerraform(struct?: IdentityDomainsSettingCompanyNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locale: cdktf.stringToTerraform(struct!.locale),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsSettingCompanyNamesToHclTerraform(struct?: IdentityDomainsSettingCompanyNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
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

export class IdentityDomainsSettingCompanyNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingCompanyNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingCompanyNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locale = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locale = value.locale;
      this._value = value.value;
    }
  }

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
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

export class IdentityDomainsSettingCompanyNamesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSettingCompanyNames[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSettingCompanyNamesOutputReference {
    return new IdentityDomainsSettingCompanyNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#display IdentityDomainsSetting#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#type IdentityDomainsSetting#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}
  */
  readonly value: string;
}

export function identityDomainsSettingImagesToTerraform(struct?: IdentityDomainsSettingImages | cdktf.IResolvable): any {
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


export function identityDomainsSettingImagesToHclTerraform(struct?: IdentityDomainsSettingImages | cdktf.IResolvable): any {
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

export class IdentityDomainsSettingImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: IdentityDomainsSettingImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
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

export class IdentityDomainsSettingImagesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSettingImages[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSettingImagesOutputReference {
    return new IdentityDomainsSettingImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingLoginTexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#locale IdentityDomainsSetting#locale}
  */
  readonly locale: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}
  */
  readonly value: string;
}

export function identityDomainsSettingLoginTextsToTerraform(struct?: IdentityDomainsSettingLoginTexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locale: cdktf.stringToTerraform(struct!.locale),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsSettingLoginTextsToHclTerraform(struct?: IdentityDomainsSettingLoginTexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
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

export class IdentityDomainsSettingLoginTextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingLoginTexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingLoginTexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locale = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locale = value.locale;
      this._value = value.value;
    }
  }

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
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

export class IdentityDomainsSettingLoginTextsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSettingLoginTexts[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSettingLoginTextsOutputReference {
    return new IdentityDomainsSettingLoginTextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingPurgeConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#resource_name IdentityDomainsSetting#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#retention_period IdentityDomainsSetting#retention_period}
  */
  readonly retentionPeriod: number;
}

export function identityDomainsSettingPurgeConfigsToTerraform(struct?: IdentityDomainsSettingPurgeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
  }
}


export function identityDomainsSettingPurgeConfigsToHclTerraform(struct?: IdentityDomainsSettingPurgeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsSettingPurgeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingPurgeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingPurgeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceName = undefined;
      this._retentionPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceName = value.resourceName;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}

export class IdentityDomainsSettingPurgeConfigsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSettingPurgeConfigs[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSettingPurgeConfigsOutputReference {
    return new IdentityDomainsSettingPurgeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#key IdentityDomainsSetting#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}
  */
  readonly value: string;
}

export function identityDomainsSettingTagsToTerraform(struct?: IdentityDomainsSettingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsSettingTagsToHclTerraform(struct?: IdentityDomainsSettingTags | cdktf.IResolvable): any {
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

export class IdentityDomainsSettingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsSettingTags | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsSettingTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSettingTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSettingTagsOutputReference {
    return new IdentityDomainsSettingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingTenantCustomClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#all_scopes IdentityDomainsSetting#all_scopes}
  */
  readonly allScopes: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#expression IdentityDomainsSetting#expression}
  */
  readonly expression: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#mode IdentityDomainsSetting#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#name IdentityDomainsSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#scopes IdentityDomainsSetting#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#token_type IdentityDomainsSetting#token_type}
  */
  readonly tokenType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#value IdentityDomainsSetting#value}
  */
  readonly value: string;
}

export function identityDomainsSettingTenantCustomClaimsToTerraform(struct?: IdentityDomainsSettingTenantCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_scopes: cdktf.booleanToTerraform(struct!.allScopes),
    expression: cdktf.booleanToTerraform(struct!.expression),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_type: cdktf.stringToTerraform(struct!.tokenType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsSettingTenantCustomClaimsToHclTerraform(struct?: IdentityDomainsSettingTenantCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.allScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.booleanToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_type: {
      value: cdktf.stringToHclTerraform(struct!.tokenType),
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

export class IdentityDomainsSettingTenantCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSettingTenantCustomClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allScopes = this._allScopes;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSettingTenantCustomClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allScopes = undefined;
      this._expression = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._scopes = undefined;
      this._tokenType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allScopes = value.allScopes;
      this._expression = value.expression;
      this._mode = value.mode;
      this._name = value.name;
      this._scopes = value.scopes;
      this._tokenType = value.tokenType;
      this._value = value.value;
    }
  }

  // all_scopes - computed: false, optional: false, required: true
  private _allScopes?: boolean | cdktf.IResolvable; 
  public get allScopes() {
    return this.getBooleanAttribute('all_scopes');
  }
  public set allScopes(value: boolean | cdktf.IResolvable) {
    this._allScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allScopesInput() {
    return this._allScopes;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: boolean | cdktf.IResolvable; 
  public get expression() {
    return this.getBooleanAttribute('expression');
  }
  public set expression(value: boolean | cdktf.IResolvable) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_type - computed: false, optional: false, required: true
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
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

export class IdentityDomainsSettingTenantCustomClaimsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSettingTenantCustomClaims[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSettingTenantCustomClaimsOutputReference {
    return new IdentityDomainsSettingTenantCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#create IdentityDomainsSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#delete IdentityDomainsSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#update IdentityDomainsSetting#update}
  */
  readonly update?: string;
}

export function identityDomainsSettingTimeoutsToTerraform(struct?: IdentityDomainsSettingTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsSettingTimeoutsToHclTerraform(struct?: IdentityDomainsSettingTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsSettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsSettingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsSettingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting oci_identity_domains_setting}
*/
export class IdentityDomainsSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsSetting to import
  * @param importFromId The id of the existing IdentityDomainsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_domains_setting oci_identity_domains_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsSettingConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_setting',
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
    this._accountAlwaysTrustScope = config.accountAlwaysTrustScope;
    this._allowedDomains = config.allowedDomains;
    this._allowedForgotPasswordFlowReturnUrls = config.allowedForgotPasswordFlowReturnUrls;
    this._allowedNotificationRedirectUrls = config.allowedNotificationRedirectUrls;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._auditEventRetentionPeriod = config.auditEventRetentionPeriod;
    this._authorization = config.authorization;
    this._cloudMigrationCustomUrl = config.cloudMigrationCustomUrl;
    this._cloudMigrationUrlEnabled = config.cloudMigrationUrlEnabled;
    this._contactEmails = config.contactEmails;
    this._csrAccess = config.csrAccess;
    this._customBranding = config.customBranding;
    this._customCssLocation = config.customCssLocation;
    this._customHtmlLocation = config.customHtmlLocation;
    this._customTranslation = config.customTranslation;
    this._defaultTrustScope = config.defaultTrustScope;
    this._diagnosticLevel = config.diagnosticLevel;
    this._diagnosticRecordForSearchIdentifiesReturnedResources = config.diagnosticRecordForSearchIdentifiesReturnedResources;
    this._enableTermsOfUse = config.enableTermsOfUse;
    this._externalId = config.externalId;
    this._iamUpstSessionExpiry = config.iamUpstSessionExpiry;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._isHostedPage = config.isHostedPage;
    this._issuer = config.issuer;
    this._locale = config.locale;
    this._maxNoOfAppCmvaToReturn = config.maxNoOfAppCmvaToReturn;
    this._maxNoOfAppRoleMembersToReturn = config.maxNoOfAppRoleMembersToReturn;
    this._ocid = config.ocid;
    this._preferredLanguage = config.preferredLanguage;
    this._prevIssuer = config.prevIssuer;
    this._privacyPolicyUrl = config.privacyPolicyUrl;
    this._reAuthFactor = config.reAuthFactor;
    this._reAuthWhenChangingMyAuthenticationFactors = config.reAuthWhenChangingMyAuthenticationFactors;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._serviceAdminCannotListOtherUsers = config.serviceAdminCannotListOtherUsers;
    this._settingId = config.settingId;
    this._signingCertPublicAccess = config.signingCertPublicAccess;
    this._subMappingAttr = config.subMappingAttr;
    this._termsOfUseUrl = config.termsOfUseUrl;
    this._timezone = config.timezone;
    this._certificateValidation.internalValue = config.certificateValidation;
    this._cloudGateCorsSettings.internalValue = config.cloudGateCorsSettings;
    this._companyNames.internalValue = config.companyNames;
    this._images.internalValue = config.images;
    this._loginTexts.internalValue = config.loginTexts;
    this._purgeConfigs.internalValue = config.purgeConfigs;
    this._tags.internalValue = config.tags;
    this._tenantCustomClaims.internalValue = config.tenantCustomClaims;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_always_trust_scope - computed: true, optional: true, required: false
  private _accountAlwaysTrustScope?: boolean | cdktf.IResolvable; 
  public get accountAlwaysTrustScope() {
    return this.getBooleanAttribute('account_always_trust_scope');
  }
  public set accountAlwaysTrustScope(value: boolean | cdktf.IResolvable) {
    this._accountAlwaysTrustScope = value;
  }
  public resetAccountAlwaysTrustScope() {
    this._accountAlwaysTrustScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAlwaysTrustScopeInput() {
    return this._accountAlwaysTrustScope;
  }

  // allowed_domains - computed: true, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_forgot_password_flow_return_urls - computed: true, optional: true, required: false
  private _allowedForgotPasswordFlowReturnUrls?: string[]; 
  public get allowedForgotPasswordFlowReturnUrls() {
    return this.getListAttribute('allowed_forgot_password_flow_return_urls');
  }
  public set allowedForgotPasswordFlowReturnUrls(value: string[]) {
    this._allowedForgotPasswordFlowReturnUrls = value;
  }
  public resetAllowedForgotPasswordFlowReturnUrls() {
    this._allowedForgotPasswordFlowReturnUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedForgotPasswordFlowReturnUrlsInput() {
    return this._allowedForgotPasswordFlowReturnUrls;
  }

  // allowed_notification_redirect_urls - computed: true, optional: true, required: false
  private _allowedNotificationRedirectUrls?: string[]; 
  public get allowedNotificationRedirectUrls() {
    return this.getListAttribute('allowed_notification_redirect_urls');
  }
  public set allowedNotificationRedirectUrls(value: string[]) {
    this._allowedNotificationRedirectUrls = value;
  }
  public resetAllowedNotificationRedirectUrls() {
    this._allowedNotificationRedirectUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNotificationRedirectUrlsInput() {
    return this._allowedNotificationRedirectUrls;
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

  // audit_event_retention_period - computed: true, optional: true, required: false
  private _auditEventRetentionPeriod?: number; 
  public get auditEventRetentionPeriod() {
    return this.getNumberAttribute('audit_event_retention_period');
  }
  public set auditEventRetentionPeriod(value: number) {
    this._auditEventRetentionPeriod = value;
  }
  public resetAuditEventRetentionPeriod() {
    this._auditEventRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEventRetentionPeriodInput() {
    return this._auditEventRetentionPeriod;
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

  // cloud_account_name - computed: true, optional: false, required: false
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }

  // cloud_migration_custom_url - computed: true, optional: true, required: false
  private _cloudMigrationCustomUrl?: string; 
  public get cloudMigrationCustomUrl() {
    return this.getStringAttribute('cloud_migration_custom_url');
  }
  public set cloudMigrationCustomUrl(value: string) {
    this._cloudMigrationCustomUrl = value;
  }
  public resetCloudMigrationCustomUrl() {
    this._cloudMigrationCustomUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMigrationCustomUrlInput() {
    return this._cloudMigrationCustomUrl;
  }

  // cloud_migration_url_enabled - computed: true, optional: true, required: false
  private _cloudMigrationUrlEnabled?: boolean | cdktf.IResolvable; 
  public get cloudMigrationUrlEnabled() {
    return this.getBooleanAttribute('cloud_migration_url_enabled');
  }
  public set cloudMigrationUrlEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudMigrationUrlEnabled = value;
  }
  public resetCloudMigrationUrlEnabled() {
    this._cloudMigrationUrlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMigrationUrlEnabledInput() {
    return this._cloudMigrationUrlEnabled;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // contact_emails - computed: true, optional: true, required: false
  private _contactEmails?: string[]; 
  public get contactEmails() {
    return this.getListAttribute('contact_emails');
  }
  public set contactEmails(value: string[]) {
    this._contactEmails = value;
  }
  public resetContactEmails() {
    this._contactEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailsInput() {
    return this._contactEmails;
  }

  // csr_access - computed: false, optional: false, required: true
  private _csrAccess?: string; 
  public get csrAccess() {
    return this.getStringAttribute('csr_access');
  }
  public set csrAccess(value: string) {
    this._csrAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrAccessInput() {
    return this._csrAccess;
  }

  // custom_branding - computed: true, optional: true, required: false
  private _customBranding?: boolean | cdktf.IResolvable; 
  public get customBranding() {
    return this.getBooleanAttribute('custom_branding');
  }
  public set customBranding(value: boolean | cdktf.IResolvable) {
    this._customBranding = value;
  }
  public resetCustomBranding() {
    this._customBranding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBrandingInput() {
    return this._customBranding;
  }

  // custom_css_location - computed: true, optional: true, required: false
  private _customCssLocation?: string; 
  public get customCssLocation() {
    return this.getStringAttribute('custom_css_location');
  }
  public set customCssLocation(value: string) {
    this._customCssLocation = value;
  }
  public resetCustomCssLocation() {
    this._customCssLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCssLocationInput() {
    return this._customCssLocation;
  }

  // custom_html_location - computed: true, optional: true, required: false
  private _customHtmlLocation?: string; 
  public get customHtmlLocation() {
    return this.getStringAttribute('custom_html_location');
  }
  public set customHtmlLocation(value: string) {
    this._customHtmlLocation = value;
  }
  public resetCustomHtmlLocation() {
    this._customHtmlLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHtmlLocationInput() {
    return this._customHtmlLocation;
  }

  // custom_translation - computed: true, optional: true, required: false
  private _customTranslation?: string; 
  public get customTranslation() {
    return this.getStringAttribute('custom_translation');
  }
  public set customTranslation(value: string) {
    this._customTranslation = value;
  }
  public resetCustomTranslation() {
    this._customTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTranslationInput() {
    return this._customTranslation;
  }

  // default_company_names - computed: true, optional: false, required: false
  private _defaultCompanyNames = new IdentityDomainsSettingDefaultCompanyNamesList(this, "default_company_names", false);
  public get defaultCompanyNames() {
    return this._defaultCompanyNames;
  }

  // default_images - computed: true, optional: false, required: false
  private _defaultImages = new IdentityDomainsSettingDefaultImagesList(this, "default_images", false);
  public get defaultImages() {
    return this._defaultImages;
  }

  // default_login_texts - computed: true, optional: false, required: false
  private _defaultLoginTexts = new IdentityDomainsSettingDefaultLoginTextsList(this, "default_login_texts", false);
  public get defaultLoginTexts() {
    return this._defaultLoginTexts;
  }

  // default_trust_scope - computed: true, optional: true, required: false
  private _defaultTrustScope?: string; 
  public get defaultTrustScope() {
    return this.getStringAttribute('default_trust_scope');
  }
  public set defaultTrustScope(value: string) {
    this._defaultTrustScope = value;
  }
  public resetDefaultTrustScope() {
    this._defaultTrustScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTrustScopeInput() {
    return this._defaultTrustScope;
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // diagnostic_level - computed: true, optional: true, required: false
  private _diagnosticLevel?: number; 
  public get diagnosticLevel() {
    return this.getNumberAttribute('diagnostic_level');
  }
  public set diagnosticLevel(value: number) {
    this._diagnosticLevel = value;
  }
  public resetDiagnosticLevel() {
    this._diagnosticLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticLevelInput() {
    return this._diagnosticLevel;
  }

  // diagnostic_record_for_search_identifies_returned_resources - computed: true, optional: true, required: false
  private _diagnosticRecordForSearchIdentifiesReturnedResources?: boolean | cdktf.IResolvable; 
  public get diagnosticRecordForSearchIdentifiesReturnedResources() {
    return this.getBooleanAttribute('diagnostic_record_for_search_identifies_returned_resources');
  }
  public set diagnosticRecordForSearchIdentifiesReturnedResources(value: boolean | cdktf.IResolvable) {
    this._diagnosticRecordForSearchIdentifiesReturnedResources = value;
  }
  public resetDiagnosticRecordForSearchIdentifiesReturnedResources() {
    this._diagnosticRecordForSearchIdentifiesReturnedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticRecordForSearchIdentifiesReturnedResourcesInput() {
    return this._diagnosticRecordForSearchIdentifiesReturnedResources;
  }

  // diagnostic_tracing_upto - computed: true, optional: false, required: false
  public get diagnosticTracingUpto() {
    return this.getStringAttribute('diagnostic_tracing_upto');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // enable_terms_of_use - computed: true, optional: true, required: false
  private _enableTermsOfUse?: boolean | cdktf.IResolvable; 
  public get enableTermsOfUse() {
    return this.getBooleanAttribute('enable_terms_of_use');
  }
  public set enableTermsOfUse(value: boolean | cdktf.IResolvable) {
    this._enableTermsOfUse = value;
  }
  public resetEnableTermsOfUse() {
    this._enableTermsOfUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTermsOfUseInput() {
    return this._enableTermsOfUse;
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

  // iam_upst_session_expiry - computed: true, optional: true, required: false
  private _iamUpstSessionExpiry?: number; 
  public get iamUpstSessionExpiry() {
    return this.getNumberAttribute('iam_upst_session_expiry');
  }
  public set iamUpstSessionExpiry(value: number) {
    this._iamUpstSessionExpiry = value;
  }
  public resetIamUpstSessionExpiry() {
    this._iamUpstSessionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUpstSessionExpiryInput() {
    return this._iamUpstSessionExpiry;
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

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsSettingIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new IdentityDomainsSettingIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // is_hosted_page - computed: true, optional: true, required: false
  private _isHostedPage?: boolean | cdktf.IResolvable; 
  public get isHostedPage() {
    return this.getBooleanAttribute('is_hosted_page');
  }
  public set isHostedPage(value: boolean | cdktf.IResolvable) {
    this._isHostedPage = value;
  }
  public resetIsHostedPage() {
    this._isHostedPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHostedPageInput() {
    return this._isHostedPage;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // max_no_of_app_cmva_to_return - computed: true, optional: true, required: false
  private _maxNoOfAppCmvaToReturn?: number; 
  public get maxNoOfAppCmvaToReturn() {
    return this.getNumberAttribute('max_no_of_app_cmva_to_return');
  }
  public set maxNoOfAppCmvaToReturn(value: number) {
    this._maxNoOfAppCmvaToReturn = value;
  }
  public resetMaxNoOfAppCmvaToReturn() {
    this._maxNoOfAppCmvaToReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNoOfAppCmvaToReturnInput() {
    return this._maxNoOfAppCmvaToReturn;
  }

  // max_no_of_app_role_members_to_return - computed: true, optional: true, required: false
  private _maxNoOfAppRoleMembersToReturn?: number; 
  public get maxNoOfAppRoleMembersToReturn() {
    return this.getNumberAttribute('max_no_of_app_role_members_to_return');
  }
  public set maxNoOfAppRoleMembersToReturn(value: number) {
    this._maxNoOfAppRoleMembersToReturn = value;
  }
  public resetMaxNoOfAppRoleMembersToReturn() {
    this._maxNoOfAppRoleMembersToReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNoOfAppRoleMembersToReturnInput() {
    return this._maxNoOfAppRoleMembersToReturn;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsSettingMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // migration_status - computed: true, optional: false, required: false
  public get migrationStatus() {
    return this.getStringAttribute('migration_status');
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

  // on_premises_provisioning - computed: true, optional: false, required: false
  public get onPremisesProvisioning() {
    return this.getBooleanAttribute('on_premises_provisioning');
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

  // prev_issuer - computed: true, optional: true, required: false
  private _prevIssuer?: string; 
  public get prevIssuer() {
    return this.getStringAttribute('prev_issuer');
  }
  public set prevIssuer(value: string) {
    this._prevIssuer = value;
  }
  public resetPrevIssuer() {
    this._prevIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevIssuerInput() {
    return this._prevIssuer;
  }

  // privacy_policy_url - computed: true, optional: true, required: false
  private _privacyPolicyUrl?: string; 
  public get privacyPolicyUrl() {
    return this.getStringAttribute('privacy_policy_url');
  }
  public set privacyPolicyUrl(value: string) {
    this._privacyPolicyUrl = value;
  }
  public resetPrivacyPolicyUrl() {
    this._privacyPolicyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyUrlInput() {
    return this._privacyPolicyUrl;
  }

  // re_auth_factor - computed: true, optional: true, required: false
  private _reAuthFactor?: string[]; 
  public get reAuthFactor() {
    return this.getListAttribute('re_auth_factor');
  }
  public set reAuthFactor(value: string[]) {
    this._reAuthFactor = value;
  }
  public resetReAuthFactor() {
    this._reAuthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAuthFactorInput() {
    return this._reAuthFactor;
  }

  // re_auth_when_changing_my_authentication_factors - computed: true, optional: true, required: false
  private _reAuthWhenChangingMyAuthenticationFactors?: boolean | cdktf.IResolvable; 
  public get reAuthWhenChangingMyAuthenticationFactors() {
    return this.getBooleanAttribute('re_auth_when_changing_my_authentication_factors');
  }
  public set reAuthWhenChangingMyAuthenticationFactors(value: boolean | cdktf.IResolvable) {
    this._reAuthWhenChangingMyAuthenticationFactors = value;
  }
  public resetReAuthWhenChangingMyAuthenticationFactors() {
    this._reAuthWhenChangingMyAuthenticationFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAuthWhenChangingMyAuthenticationFactorsInput() {
    return this._reAuthWhenChangingMyAuthenticationFactors;
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

  // service_admin_cannot_list_other_users - computed: true, optional: true, required: false
  private _serviceAdminCannotListOtherUsers?: boolean | cdktf.IResolvable; 
  public get serviceAdminCannotListOtherUsers() {
    return this.getBooleanAttribute('service_admin_cannot_list_other_users');
  }
  public set serviceAdminCannotListOtherUsers(value: boolean | cdktf.IResolvable) {
    this._serviceAdminCannotListOtherUsers = value;
  }
  public resetServiceAdminCannotListOtherUsers() {
    this._serviceAdminCannotListOtherUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAdminCannotListOtherUsersInput() {
    return this._serviceAdminCannotListOtherUsers;
  }

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // signing_cert_public_access - computed: true, optional: true, required: false
  private _signingCertPublicAccess?: boolean | cdktf.IResolvable; 
  public get signingCertPublicAccess() {
    return this.getBooleanAttribute('signing_cert_public_access');
  }
  public set signingCertPublicAccess(value: boolean | cdktf.IResolvable) {
    this._signingCertPublicAccess = value;
  }
  public resetSigningCertPublicAccess() {
    this._signingCertPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertPublicAccessInput() {
    return this._signingCertPublicAccess;
  }

  // sub_mapping_attr - computed: true, optional: true, required: false
  private _subMappingAttr?: string; 
  public get subMappingAttr() {
    return this.getStringAttribute('sub_mapping_attr');
  }
  public set subMappingAttr(value: string) {
    this._subMappingAttr = value;
  }
  public resetSubMappingAttr() {
    this._subMappingAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subMappingAttrInput() {
    return this._subMappingAttr;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // terms_of_use_url - computed: true, optional: true, required: false
  private _termsOfUseUrl?: string; 
  public get termsOfUseUrl() {
    return this.getStringAttribute('terms_of_use_url');
  }
  public set termsOfUseUrl(value: string) {
    this._termsOfUseUrl = value;
  }
  public resetTermsOfUseUrl() {
    this._termsOfUseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfUseUrlInput() {
    return this._termsOfUseUrl;
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

  // certificate_validation - computed: false, optional: true, required: false
  private _certificateValidation = new IdentityDomainsSettingCertificateValidationOutputReference(this, "certificate_validation");
  public get certificateValidation() {
    return this._certificateValidation;
  }
  public putCertificateValidation(value: IdentityDomainsSettingCertificateValidation) {
    this._certificateValidation.internalValue = value;
  }
  public resetCertificateValidation() {
    this._certificateValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationInput() {
    return this._certificateValidation.internalValue;
  }

  // cloud_gate_cors_settings - computed: false, optional: true, required: false
  private _cloudGateCorsSettings = new IdentityDomainsSettingCloudGateCorsSettingsOutputReference(this, "cloud_gate_cors_settings");
  public get cloudGateCorsSettings() {
    return this._cloudGateCorsSettings;
  }
  public putCloudGateCorsSettings(value: IdentityDomainsSettingCloudGateCorsSettings) {
    this._cloudGateCorsSettings.internalValue = value;
  }
  public resetCloudGateCorsSettings() {
    this._cloudGateCorsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGateCorsSettingsInput() {
    return this._cloudGateCorsSettings.internalValue;
  }

  // company_names - computed: false, optional: true, required: false
  private _companyNames = new IdentityDomainsSettingCompanyNamesList(this, "company_names", false);
  public get companyNames() {
    return this._companyNames;
  }
  public putCompanyNames(value: IdentityDomainsSettingCompanyNames[] | cdktf.IResolvable) {
    this._companyNames.internalValue = value;
  }
  public resetCompanyNames() {
    this._companyNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNamesInput() {
    return this._companyNames.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new IdentityDomainsSettingImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: IdentityDomainsSettingImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // login_texts - computed: false, optional: true, required: false
  private _loginTexts = new IdentityDomainsSettingLoginTextsList(this, "login_texts", false);
  public get loginTexts() {
    return this._loginTexts;
  }
  public putLoginTexts(value: IdentityDomainsSettingLoginTexts[] | cdktf.IResolvable) {
    this._loginTexts.internalValue = value;
  }
  public resetLoginTexts() {
    this._loginTexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTextsInput() {
    return this._loginTexts.internalValue;
  }

  // purge_configs - computed: false, optional: true, required: false
  private _purgeConfigs = new IdentityDomainsSettingPurgeConfigsList(this, "purge_configs", false);
  public get purgeConfigs() {
    return this._purgeConfigs;
  }
  public putPurgeConfigs(value: IdentityDomainsSettingPurgeConfigs[] | cdktf.IResolvable) {
    this._purgeConfigs.internalValue = value;
  }
  public resetPurgeConfigs() {
    this._purgeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeConfigsInput() {
    return this._purgeConfigs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsSettingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsSettingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tenant_custom_claims - computed: false, optional: true, required: false
  private _tenantCustomClaims = new IdentityDomainsSettingTenantCustomClaimsList(this, "tenant_custom_claims", false);
  public get tenantCustomClaims() {
    return this._tenantCustomClaims;
  }
  public putTenantCustomClaims(value: IdentityDomainsSettingTenantCustomClaims[] | cdktf.IResolvable) {
    this._tenantCustomClaims.internalValue = value;
  }
  public resetTenantCustomClaims() {
    this._tenantCustomClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantCustomClaimsInput() {
    return this._tenantCustomClaims.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsSettingTimeouts) {
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
      account_always_trust_scope: cdktf.booleanToTerraform(this._accountAlwaysTrustScope),
      allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDomains),
      allowed_forgot_password_flow_return_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedForgotPasswordFlowReturnUrls),
      allowed_notification_redirect_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNotificationRedirectUrls),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      audit_event_retention_period: cdktf.numberToTerraform(this._auditEventRetentionPeriod),
      authorization: cdktf.stringToTerraform(this._authorization),
      cloud_migration_custom_url: cdktf.stringToTerraform(this._cloudMigrationCustomUrl),
      cloud_migration_url_enabled: cdktf.booleanToTerraform(this._cloudMigrationUrlEnabled),
      contact_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactEmails),
      csr_access: cdktf.stringToTerraform(this._csrAccess),
      custom_branding: cdktf.booleanToTerraform(this._customBranding),
      custom_css_location: cdktf.stringToTerraform(this._customCssLocation),
      custom_html_location: cdktf.stringToTerraform(this._customHtmlLocation),
      custom_translation: cdktf.stringToTerraform(this._customTranslation),
      default_trust_scope: cdktf.stringToTerraform(this._defaultTrustScope),
      diagnostic_level: cdktf.numberToTerraform(this._diagnosticLevel),
      diagnostic_record_for_search_identifies_returned_resources: cdktf.booleanToTerraform(this._diagnosticRecordForSearchIdentifiesReturnedResources),
      enable_terms_of_use: cdktf.booleanToTerraform(this._enableTermsOfUse),
      external_id: cdktf.stringToTerraform(this._externalId),
      iam_upst_session_expiry: cdktf.numberToTerraform(this._iamUpstSessionExpiry),
      id: cdktf.stringToTerraform(this._id),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      is_hosted_page: cdktf.booleanToTerraform(this._isHostedPage),
      issuer: cdktf.stringToTerraform(this._issuer),
      locale: cdktf.stringToTerraform(this._locale),
      max_no_of_app_cmva_to_return: cdktf.numberToTerraform(this._maxNoOfAppCmvaToReturn),
      max_no_of_app_role_members_to_return: cdktf.numberToTerraform(this._maxNoOfAppRoleMembersToReturn),
      ocid: cdktf.stringToTerraform(this._ocid),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      prev_issuer: cdktf.stringToTerraform(this._prevIssuer),
      privacy_policy_url: cdktf.stringToTerraform(this._privacyPolicyUrl),
      re_auth_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reAuthFactor),
      re_auth_when_changing_my_authentication_factors: cdktf.booleanToTerraform(this._reAuthWhenChangingMyAuthenticationFactors),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      service_admin_cannot_list_other_users: cdktf.booleanToTerraform(this._serviceAdminCannotListOtherUsers),
      setting_id: cdktf.stringToTerraform(this._settingId),
      signing_cert_public_access: cdktf.booleanToTerraform(this._signingCertPublicAccess),
      sub_mapping_attr: cdktf.stringToTerraform(this._subMappingAttr),
      terms_of_use_url: cdktf.stringToTerraform(this._termsOfUseUrl),
      timezone: cdktf.stringToTerraform(this._timezone),
      certificate_validation: identityDomainsSettingCertificateValidationToTerraform(this._certificateValidation.internalValue),
      cloud_gate_cors_settings: identityDomainsSettingCloudGateCorsSettingsToTerraform(this._cloudGateCorsSettings.internalValue),
      company_names: cdktf.listMapper(identityDomainsSettingCompanyNamesToTerraform, true)(this._companyNames.internalValue),
      images: cdktf.listMapper(identityDomainsSettingImagesToTerraform, true)(this._images.internalValue),
      login_texts: cdktf.listMapper(identityDomainsSettingLoginTextsToTerraform, true)(this._loginTexts.internalValue),
      purge_configs: cdktf.listMapper(identityDomainsSettingPurgeConfigsToTerraform, true)(this._purgeConfigs.internalValue),
      tags: cdktf.listMapper(identityDomainsSettingTagsToTerraform, true)(this._tags.internalValue),
      tenant_custom_claims: cdktf.listMapper(identityDomainsSettingTenantCustomClaimsToTerraform, true)(this._tenantCustomClaims.internalValue),
      timeouts: identityDomainsSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_always_trust_scope: {
        value: cdktf.booleanToHclTerraform(this._accountAlwaysTrustScope),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_forgot_password_flow_return_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedForgotPasswordFlowReturnUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_notification_redirect_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNotificationRedirectUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      audit_event_retention_period: {
        value: cdktf.numberToHclTerraform(this._auditEventRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_migration_custom_url: {
        value: cdktf.stringToHclTerraform(this._cloudMigrationCustomUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_migration_url_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudMigrationUrlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      csr_access: {
        value: cdktf.stringToHclTerraform(this._csrAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_branding: {
        value: cdktf.booleanToHclTerraform(this._customBranding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_css_location: {
        value: cdktf.stringToHclTerraform(this._customCssLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_html_location: {
        value: cdktf.stringToHclTerraform(this._customHtmlLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_translation: {
        value: cdktf.stringToHclTerraform(this._customTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_trust_scope: {
        value: cdktf.stringToHclTerraform(this._defaultTrustScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnostic_level: {
        value: cdktf.numberToHclTerraform(this._diagnosticLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      diagnostic_record_for_search_identifies_returned_resources: {
        value: cdktf.booleanToHclTerraform(this._diagnosticRecordForSearchIdentifiesReturnedResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_terms_of_use: {
        value: cdktf.booleanToHclTerraform(this._enableTermsOfUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_upst_session_expiry: {
        value: cdktf.numberToHclTerraform(this._iamUpstSessionExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_hosted_page: {
        value: cdktf.booleanToHclTerraform(this._isHostedPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      max_no_of_app_cmva_to_return: {
        value: cdktf.numberToHclTerraform(this._maxNoOfAppCmvaToReturn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_no_of_app_role_members_to_return: {
        value: cdktf.numberToHclTerraform(this._maxNoOfAppRoleMembersToReturn),
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
      preferred_language: {
        value: cdktf.stringToHclTerraform(this._preferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prev_issuer: {
        value: cdktf.stringToHclTerraform(this._prevIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_policy_url: {
        value: cdktf.stringToHclTerraform(this._privacyPolicyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      re_auth_factor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reAuthFactor),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      re_auth_when_changing_my_authentication_factors: {
        value: cdktf.booleanToHclTerraform(this._reAuthWhenChangingMyAuthenticationFactors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      service_admin_cannot_list_other_users: {
        value: cdktf.booleanToHclTerraform(this._serviceAdminCannotListOtherUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_cert_public_access: {
        value: cdktf.booleanToHclTerraform(this._signingCertPublicAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sub_mapping_attr: {
        value: cdktf.stringToHclTerraform(this._subMappingAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terms_of_use_url: {
        value: cdktf.stringToHclTerraform(this._termsOfUseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_validation: {
        value: identityDomainsSettingCertificateValidationToHclTerraform(this._certificateValidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingCertificateValidationList",
      },
      cloud_gate_cors_settings: {
        value: identityDomainsSettingCloudGateCorsSettingsToHclTerraform(this._cloudGateCorsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingCloudGateCorsSettingsList",
      },
      company_names: {
        value: cdktf.listMapperHcl(identityDomainsSettingCompanyNamesToHclTerraform, true)(this._companyNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingCompanyNamesList",
      },
      images: {
        value: cdktf.listMapperHcl(identityDomainsSettingImagesToHclTerraform, true)(this._images.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingImagesList",
      },
      login_texts: {
        value: cdktf.listMapperHcl(identityDomainsSettingLoginTextsToHclTerraform, true)(this._loginTexts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingLoginTextsList",
      },
      purge_configs: {
        value: cdktf.listMapperHcl(identityDomainsSettingPurgeConfigsToHclTerraform, true)(this._purgeConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingPurgeConfigsList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsSettingTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingTagsList",
      },
      tenant_custom_claims: {
        value: cdktf.listMapperHcl(identityDomainsSettingTenantCustomClaimsToHclTerraform, true)(this._tenantCustomClaims.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSettingTenantCustomClaimsList",
      },
      timeouts: {
        value: identityDomainsSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
