// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsAuthenticationFactorSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}
  */
  readonly authenticationFactorSettingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}
  */
  readonly autoEnrollEmailFactorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}
  */
  readonly bypassCodeEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}
  */
  readonly emailEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}
  */
  readonly fidoAuthenticatorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}
  */
  readonly hideBackupFactorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}
  */
  readonly mfaEnrollmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}
  */
  readonly phoneCallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}
  */
  readonly pushEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}
  */
  readonly securityQuestionsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}
  */
  readonly smsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}
  */
  readonly totpEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}
  */
  readonly userEnrollmentDisabledFactors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}
  */
  readonly yubicoOtpEnabled?: boolean | cdktf.IResolvable;
  /**
  * bypass_code_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_settings IdentityDomainsAuthenticationFactorSetting#bypass_code_settings}
  */
  readonly bypassCodeSettings: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings;
  /**
  * client_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#client_app_settings IdentityDomainsAuthenticationFactorSetting#client_app_settings}
  */
  readonly clientAppSettings: IdentityDomainsAuthenticationFactorSettingClientAppSettings;
  /**
  * compliance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#compliance_policy IdentityDomainsAuthenticationFactorSetting#compliance_policy}
  */
  readonly compliancePolicy: IdentityDomainsAuthenticationFactorSettingCompliancePolicy[] | cdktf.IResolvable;
  /**
  * email_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#email_settings IdentityDomainsAuthenticationFactorSetting#email_settings}
  */
  readonly emailSettings?: IdentityDomainsAuthenticationFactorSettingEmailSettings;
  /**
  * endpoint_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#endpoint_restrictions IdentityDomainsAuthenticationFactorSetting#endpoint_restrictions}
  */
  readonly endpointRestrictions: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions;
  /**
  * identity_store_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#identity_store_settings IdentityDomainsAuthenticationFactorSetting#identity_store_settings}
  */
  readonly identityStoreSettings?: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#notification_settings IdentityDomainsAuthenticationFactorSetting#notification_settings}
  */
  readonly notificationSettings: IdentityDomainsAuthenticationFactorSettingNotificationSettings;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#tags IdentityDomainsAuthenticationFactorSetting#tags}
  */
  readonly tags?: IdentityDomainsAuthenticationFactorSettingTags[] | cdktf.IResolvable;
  /**
  * third_party_factor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#third_party_factor IdentityDomainsAuthenticationFactorSetting#third_party_factor}
  */
  readonly thirdPartyFactor?: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#timeouts IdentityDomainsAuthenticationFactorSetting#timeouts}
  */
  readonly timeouts?: IdentityDomainsAuthenticationFactorSettingTimeouts;
  /**
  * totp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#totp_settings IdentityDomainsAuthenticationFactorSetting#totp_settings}
  */
  readonly totpSettings: IdentityDomainsAuthenticationFactorSettingTotpSettings;
  /**
  * urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings;
  /**
  * urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings;
}
export interface IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy {
}

export function identityDomainsAuthenticationFactorSettingIdcsCreatedByToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAuthenticationFactorSettingIdcsCreatedByToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy | undefined) {
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

export class IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference {
    return new IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy {
}

export function identityDomainsAuthenticationFactorSettingIdcsLastModifiedByToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAuthenticationFactorSettingIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy | undefined) {
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

export class IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference {
    return new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAuthenticationFactorSettingMeta {
}

export function identityDomainsAuthenticationFactorSettingMetaToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAuthenticationFactorSettingMetaToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAuthenticationFactorSettingMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingMeta | undefined) {
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

export class IdentityDomainsAuthenticationFactorSettingMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAuthenticationFactorSettingMetaOutputReference {
    return new IdentityDomainsAuthenticationFactorSettingMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAuthenticationFactorSettingBypassCodeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}
  */
  readonly helpDeskCodeExpiryInMins: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}
  */
  readonly helpDeskGenerationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}
  */
  readonly helpDeskMaxUsage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}
  */
  readonly length: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}
  */
  readonly maxActive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}
  */
  readonly selfServiceGenerationEnabled: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingBypassCodeSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingBypassCodeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    help_desk_code_expiry_in_mins: cdktf.numberToTerraform(struct!.helpDeskCodeExpiryInMins),
    help_desk_generation_enabled: cdktf.booleanToTerraform(struct!.helpDeskGenerationEnabled),
    help_desk_max_usage: cdktf.numberToTerraform(struct!.helpDeskMaxUsage),
    length: cdktf.numberToTerraform(struct!.length),
    max_active: cdktf.numberToTerraform(struct!.maxActive),
    self_service_generation_enabled: cdktf.booleanToTerraform(struct!.selfServiceGenerationEnabled),
  }
}


export function identityDomainsAuthenticationFactorSettingBypassCodeSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingBypassCodeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    help_desk_code_expiry_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.helpDeskCodeExpiryInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    help_desk_generation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.helpDeskGenerationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    help_desk_max_usage: {
      value: cdktf.numberToHclTerraform(struct!.helpDeskMaxUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_active: {
      value: cdktf.numberToHclTerraform(struct!.maxActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_service_generation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.selfServiceGenerationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingBypassCodeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helpDeskCodeExpiryInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpDeskCodeExpiryInMins = this._helpDeskCodeExpiryInMins;
    }
    if (this._helpDeskGenerationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpDeskGenerationEnabled = this._helpDeskGenerationEnabled;
    }
    if (this._helpDeskMaxUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpDeskMaxUsage = this._helpDeskMaxUsage;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._maxActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxActive = this._maxActive;
    }
    if (this._selfServiceGenerationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceGenerationEnabled = this._selfServiceGenerationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._helpDeskCodeExpiryInMins = undefined;
      this._helpDeskGenerationEnabled = undefined;
      this._helpDeskMaxUsage = undefined;
      this._length = undefined;
      this._maxActive = undefined;
      this._selfServiceGenerationEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._helpDeskCodeExpiryInMins = value.helpDeskCodeExpiryInMins;
      this._helpDeskGenerationEnabled = value.helpDeskGenerationEnabled;
      this._helpDeskMaxUsage = value.helpDeskMaxUsage;
      this._length = value.length;
      this._maxActive = value.maxActive;
      this._selfServiceGenerationEnabled = value.selfServiceGenerationEnabled;
    }
  }

  // help_desk_code_expiry_in_mins - computed: false, optional: false, required: true
  private _helpDeskCodeExpiryInMins?: number; 
  public get helpDeskCodeExpiryInMins() {
    return this.getNumberAttribute('help_desk_code_expiry_in_mins');
  }
  public set helpDeskCodeExpiryInMins(value: number) {
    this._helpDeskCodeExpiryInMins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helpDeskCodeExpiryInMinsInput() {
    return this._helpDeskCodeExpiryInMins;
  }

  // help_desk_generation_enabled - computed: false, optional: false, required: true
  private _helpDeskGenerationEnabled?: boolean | cdktf.IResolvable; 
  public get helpDeskGenerationEnabled() {
    return this.getBooleanAttribute('help_desk_generation_enabled');
  }
  public set helpDeskGenerationEnabled(value: boolean | cdktf.IResolvable) {
    this._helpDeskGenerationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helpDeskGenerationEnabledInput() {
    return this._helpDeskGenerationEnabled;
  }

  // help_desk_max_usage - computed: false, optional: false, required: true
  private _helpDeskMaxUsage?: number; 
  public get helpDeskMaxUsage() {
    return this.getNumberAttribute('help_desk_max_usage');
  }
  public set helpDeskMaxUsage(value: number) {
    this._helpDeskMaxUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helpDeskMaxUsageInput() {
    return this._helpDeskMaxUsage;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // max_active - computed: false, optional: false, required: true
  private _maxActive?: number; 
  public get maxActive() {
    return this.getNumberAttribute('max_active');
  }
  public set maxActive(value: number) {
    this._maxActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActiveInput() {
    return this._maxActive;
  }

  // self_service_generation_enabled - computed: false, optional: false, required: true
  private _selfServiceGenerationEnabled?: boolean | cdktf.IResolvable; 
  public get selfServiceGenerationEnabled() {
    return this.getBooleanAttribute('self_service_generation_enabled');
  }
  public set selfServiceGenerationEnabled(value: boolean | cdktf.IResolvable) {
    this._selfServiceGenerationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceGenerationEnabledInput() {
    return this._selfServiceGenerationEnabled;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingClientAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}
  */
  readonly deviceProtectionPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}
  */
  readonly initialLockoutPeriodInSecs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}
  */
  readonly keyPairLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}
  */
  readonly lockoutEscalationPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}
  */
  readonly maxFailuresBeforeLockout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}
  */
  readonly maxFailuresBeforeWarning: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}
  */
  readonly maxLockoutIntervalInSecs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}
  */
  readonly minPinLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}
  */
  readonly policyUpdateFreqInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}
  */
  readonly requestSigningAlgo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}
  */
  readonly sharedSecretEncoding: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}
  */
  readonly unlockAppForEachRequestEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}
  */
  readonly unlockAppIntervalInSecs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}
  */
  readonly unlockOnAppForegroundEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}
  */
  readonly unlockOnAppStartEnabled: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingClientAppSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingClientAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_protection_policy: cdktf.stringToTerraform(struct!.deviceProtectionPolicy),
    initial_lockout_period_in_secs: cdktf.numberToTerraform(struct!.initialLockoutPeriodInSecs),
    key_pair_length: cdktf.numberToTerraform(struct!.keyPairLength),
    lockout_escalation_pattern: cdktf.stringToTerraform(struct!.lockoutEscalationPattern),
    max_failures_before_lockout: cdktf.numberToTerraform(struct!.maxFailuresBeforeLockout),
    max_failures_before_warning: cdktf.numberToTerraform(struct!.maxFailuresBeforeWarning),
    max_lockout_interval_in_secs: cdktf.numberToTerraform(struct!.maxLockoutIntervalInSecs),
    min_pin_length: cdktf.numberToTerraform(struct!.minPinLength),
    policy_update_freq_in_days: cdktf.numberToTerraform(struct!.policyUpdateFreqInDays),
    request_signing_algo: cdktf.stringToTerraform(struct!.requestSigningAlgo),
    shared_secret_encoding: cdktf.stringToTerraform(struct!.sharedSecretEncoding),
    unlock_app_for_each_request_enabled: cdktf.booleanToTerraform(struct!.unlockAppForEachRequestEnabled),
    unlock_app_interval_in_secs: cdktf.numberToTerraform(struct!.unlockAppIntervalInSecs),
    unlock_on_app_foreground_enabled: cdktf.booleanToTerraform(struct!.unlockOnAppForegroundEnabled),
    unlock_on_app_start_enabled: cdktf.booleanToTerraform(struct!.unlockOnAppStartEnabled),
  }
}


export function identityDomainsAuthenticationFactorSettingClientAppSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingClientAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_protection_policy: {
      value: cdktf.stringToHclTerraform(struct!.deviceProtectionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_lockout_period_in_secs: {
      value: cdktf.numberToHclTerraform(struct!.initialLockoutPeriodInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_pair_length: {
      value: cdktf.numberToHclTerraform(struct!.keyPairLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_escalation_pattern: {
      value: cdktf.stringToHclTerraform(struct!.lockoutEscalationPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_failures_before_lockout: {
      value: cdktf.numberToHclTerraform(struct!.maxFailuresBeforeLockout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_failures_before_warning: {
      value: cdktf.numberToHclTerraform(struct!.maxFailuresBeforeWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lockout_interval_in_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxLockoutIntervalInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_pin_length: {
      value: cdktf.numberToHclTerraform(struct!.minPinLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_update_freq_in_days: {
      value: cdktf.numberToHclTerraform(struct!.policyUpdateFreqInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_signing_algo: {
      value: cdktf.stringToHclTerraform(struct!.requestSigningAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unlock_app_for_each_request_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unlockAppForEachRequestEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unlock_app_interval_in_secs: {
      value: cdktf.numberToHclTerraform(struct!.unlockAppIntervalInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlock_on_app_foreground_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unlockOnAppForegroundEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unlock_on_app_start_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unlockOnAppStartEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingClientAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceProtectionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceProtectionPolicy = this._deviceProtectionPolicy;
    }
    if (this._initialLockoutPeriodInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLockoutPeriodInSecs = this._initialLockoutPeriodInSecs;
    }
    if (this._keyPairLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairLength = this._keyPairLength;
    }
    if (this._lockoutEscalationPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutEscalationPattern = this._lockoutEscalationPattern;
    }
    if (this._maxFailuresBeforeLockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailuresBeforeLockout = this._maxFailuresBeforeLockout;
    }
    if (this._maxFailuresBeforeWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailuresBeforeWarning = this._maxFailuresBeforeWarning;
    }
    if (this._maxLockoutIntervalInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLockoutIntervalInSecs = this._maxLockoutIntervalInSecs;
    }
    if (this._minPinLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPinLength = this._minPinLength;
    }
    if (this._policyUpdateFreqInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyUpdateFreqInDays = this._policyUpdateFreqInDays;
    }
    if (this._requestSigningAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSigningAlgo = this._requestSigningAlgo;
    }
    if (this._sharedSecretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecretEncoding = this._sharedSecretEncoding;
    }
    if (this._unlockAppForEachRequestEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockAppForEachRequestEnabled = this._unlockAppForEachRequestEnabled;
    }
    if (this._unlockAppIntervalInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockAppIntervalInSecs = this._unlockAppIntervalInSecs;
    }
    if (this._unlockOnAppForegroundEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockOnAppForegroundEnabled = this._unlockOnAppForegroundEnabled;
    }
    if (this._unlockOnAppStartEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockOnAppStartEnabled = this._unlockOnAppStartEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingClientAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceProtectionPolicy = undefined;
      this._initialLockoutPeriodInSecs = undefined;
      this._keyPairLength = undefined;
      this._lockoutEscalationPattern = undefined;
      this._maxFailuresBeforeLockout = undefined;
      this._maxFailuresBeforeWarning = undefined;
      this._maxLockoutIntervalInSecs = undefined;
      this._minPinLength = undefined;
      this._policyUpdateFreqInDays = undefined;
      this._requestSigningAlgo = undefined;
      this._sharedSecretEncoding = undefined;
      this._unlockAppForEachRequestEnabled = undefined;
      this._unlockAppIntervalInSecs = undefined;
      this._unlockOnAppForegroundEnabled = undefined;
      this._unlockOnAppStartEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceProtectionPolicy = value.deviceProtectionPolicy;
      this._initialLockoutPeriodInSecs = value.initialLockoutPeriodInSecs;
      this._keyPairLength = value.keyPairLength;
      this._lockoutEscalationPattern = value.lockoutEscalationPattern;
      this._maxFailuresBeforeLockout = value.maxFailuresBeforeLockout;
      this._maxFailuresBeforeWarning = value.maxFailuresBeforeWarning;
      this._maxLockoutIntervalInSecs = value.maxLockoutIntervalInSecs;
      this._minPinLength = value.minPinLength;
      this._policyUpdateFreqInDays = value.policyUpdateFreqInDays;
      this._requestSigningAlgo = value.requestSigningAlgo;
      this._sharedSecretEncoding = value.sharedSecretEncoding;
      this._unlockAppForEachRequestEnabled = value.unlockAppForEachRequestEnabled;
      this._unlockAppIntervalInSecs = value.unlockAppIntervalInSecs;
      this._unlockOnAppForegroundEnabled = value.unlockOnAppForegroundEnabled;
      this._unlockOnAppStartEnabled = value.unlockOnAppStartEnabled;
    }
  }

  // device_protection_policy - computed: false, optional: false, required: true
  private _deviceProtectionPolicy?: string; 
  public get deviceProtectionPolicy() {
    return this.getStringAttribute('device_protection_policy');
  }
  public set deviceProtectionPolicy(value: string) {
    this._deviceProtectionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProtectionPolicyInput() {
    return this._deviceProtectionPolicy;
  }

  // initial_lockout_period_in_secs - computed: false, optional: false, required: true
  private _initialLockoutPeriodInSecs?: number; 
  public get initialLockoutPeriodInSecs() {
    return this.getNumberAttribute('initial_lockout_period_in_secs');
  }
  public set initialLockoutPeriodInSecs(value: number) {
    this._initialLockoutPeriodInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLockoutPeriodInSecsInput() {
    return this._initialLockoutPeriodInSecs;
  }

  // key_pair_length - computed: false, optional: false, required: true
  private _keyPairLength?: number; 
  public get keyPairLength() {
    return this.getNumberAttribute('key_pair_length');
  }
  public set keyPairLength(value: number) {
    this._keyPairLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairLengthInput() {
    return this._keyPairLength;
  }

  // lockout_escalation_pattern - computed: false, optional: false, required: true
  private _lockoutEscalationPattern?: string; 
  public get lockoutEscalationPattern() {
    return this.getStringAttribute('lockout_escalation_pattern');
  }
  public set lockoutEscalationPattern(value: string) {
    this._lockoutEscalationPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutEscalationPatternInput() {
    return this._lockoutEscalationPattern;
  }

  // max_failures_before_lockout - computed: false, optional: false, required: true
  private _maxFailuresBeforeLockout?: number; 
  public get maxFailuresBeforeLockout() {
    return this.getNumberAttribute('max_failures_before_lockout');
  }
  public set maxFailuresBeforeLockout(value: number) {
    this._maxFailuresBeforeLockout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresBeforeLockoutInput() {
    return this._maxFailuresBeforeLockout;
  }

  // max_failures_before_warning - computed: false, optional: false, required: true
  private _maxFailuresBeforeWarning?: number; 
  public get maxFailuresBeforeWarning() {
    return this.getNumberAttribute('max_failures_before_warning');
  }
  public set maxFailuresBeforeWarning(value: number) {
    this._maxFailuresBeforeWarning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresBeforeWarningInput() {
    return this._maxFailuresBeforeWarning;
  }

  // max_lockout_interval_in_secs - computed: false, optional: false, required: true
  private _maxLockoutIntervalInSecs?: number; 
  public get maxLockoutIntervalInSecs() {
    return this.getNumberAttribute('max_lockout_interval_in_secs');
  }
  public set maxLockoutIntervalInSecs(value: number) {
    this._maxLockoutIntervalInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLockoutIntervalInSecsInput() {
    return this._maxLockoutIntervalInSecs;
  }

  // min_pin_length - computed: false, optional: false, required: true
  private _minPinLength?: number; 
  public get minPinLength() {
    return this.getNumberAttribute('min_pin_length');
  }
  public set minPinLength(value: number) {
    this._minPinLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minPinLengthInput() {
    return this._minPinLength;
  }

  // policy_update_freq_in_days - computed: false, optional: false, required: true
  private _policyUpdateFreqInDays?: number; 
  public get policyUpdateFreqInDays() {
    return this.getNumberAttribute('policy_update_freq_in_days');
  }
  public set policyUpdateFreqInDays(value: number) {
    this._policyUpdateFreqInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUpdateFreqInDaysInput() {
    return this._policyUpdateFreqInDays;
  }

  // request_signing_algo - computed: false, optional: false, required: true
  private _requestSigningAlgo?: string; 
  public get requestSigningAlgo() {
    return this.getStringAttribute('request_signing_algo');
  }
  public set requestSigningAlgo(value: string) {
    this._requestSigningAlgo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningAlgoInput() {
    return this._requestSigningAlgo;
  }

  // shared_secret_encoding - computed: false, optional: false, required: true
  private _sharedSecretEncoding?: string; 
  public get sharedSecretEncoding() {
    return this.getStringAttribute('shared_secret_encoding');
  }
  public set sharedSecretEncoding(value: string) {
    this._sharedSecretEncoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretEncodingInput() {
    return this._sharedSecretEncoding;
  }

  // unlock_app_for_each_request_enabled - computed: false, optional: false, required: true
  private _unlockAppForEachRequestEnabled?: boolean | cdktf.IResolvable; 
  public get unlockAppForEachRequestEnabled() {
    return this.getBooleanAttribute('unlock_app_for_each_request_enabled');
  }
  public set unlockAppForEachRequestEnabled(value: boolean | cdktf.IResolvable) {
    this._unlockAppForEachRequestEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAppForEachRequestEnabledInput() {
    return this._unlockAppForEachRequestEnabled;
  }

  // unlock_app_interval_in_secs - computed: false, optional: false, required: true
  private _unlockAppIntervalInSecs?: number; 
  public get unlockAppIntervalInSecs() {
    return this.getNumberAttribute('unlock_app_interval_in_secs');
  }
  public set unlockAppIntervalInSecs(value: number) {
    this._unlockAppIntervalInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAppIntervalInSecsInput() {
    return this._unlockAppIntervalInSecs;
  }

  // unlock_on_app_foreground_enabled - computed: false, optional: false, required: true
  private _unlockOnAppForegroundEnabled?: boolean | cdktf.IResolvable; 
  public get unlockOnAppForegroundEnabled() {
    return this.getBooleanAttribute('unlock_on_app_foreground_enabled');
  }
  public set unlockOnAppForegroundEnabled(value: boolean | cdktf.IResolvable) {
    this._unlockOnAppForegroundEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockOnAppForegroundEnabledInput() {
    return this._unlockOnAppForegroundEnabled;
  }

  // unlock_on_app_start_enabled - computed: false, optional: false, required: true
  private _unlockOnAppStartEnabled?: boolean | cdktf.IResolvable; 
  public get unlockOnAppStartEnabled() {
    return this.getBooleanAttribute('unlock_on_app_start_enabled');
  }
  public set unlockOnAppStartEnabled(value: boolean | cdktf.IResolvable) {
    this._unlockOnAppStartEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockOnAppStartEnabledInput() {
    return this._unlockOnAppStartEnabled;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingCompliancePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}
  */
  readonly value: string;
}

export function identityDomainsAuthenticationFactorSettingCompliancePolicyToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingCompliancePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAuthenticationFactorSettingCompliancePolicyToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingCompliancePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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

export class IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingCompliancePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingCompliancePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class IdentityDomainsAuthenticationFactorSettingCompliancePolicyList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAuthenticationFactorSettingCompliancePolicy[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference {
    return new IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAuthenticationFactorSettingEmailSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}
  */
  readonly emailLinkCustomUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}
  */
  readonly emailLinkEnabled: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingEmailSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingEmailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_link_custom_url: cdktf.stringToTerraform(struct!.emailLinkCustomUrl),
    email_link_enabled: cdktf.booleanToTerraform(struct!.emailLinkEnabled),
  }
}


export function identityDomainsAuthenticationFactorSettingEmailSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingEmailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_link_custom_url: {
      value: cdktf.stringToHclTerraform(struct!.emailLinkCustomUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_link_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.emailLinkEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingEmailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailLinkCustomUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLinkCustomUrl = this._emailLinkCustomUrl;
    }
    if (this._emailLinkEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLinkEnabled = this._emailLinkEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingEmailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailLinkCustomUrl = undefined;
      this._emailLinkEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailLinkCustomUrl = value.emailLinkCustomUrl;
      this._emailLinkEnabled = value.emailLinkEnabled;
    }
  }

  // email_link_custom_url - computed: true, optional: true, required: false
  private _emailLinkCustomUrl?: string; 
  public get emailLinkCustomUrl() {
    return this.getStringAttribute('email_link_custom_url');
  }
  public set emailLinkCustomUrl(value: string) {
    this._emailLinkCustomUrl = value;
  }
  public resetEmailLinkCustomUrl() {
    this._emailLinkCustomUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLinkCustomUrlInput() {
    return this._emailLinkCustomUrl;
  }

  // email_link_enabled - computed: false, optional: false, required: true
  private _emailLinkEnabled?: boolean | cdktf.IResolvable; 
  public get emailLinkEnabled() {
    return this.getBooleanAttribute('email_link_enabled');
  }
  public set emailLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._emailLinkEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLinkEnabledInput() {
    return this._emailLinkEnabled;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingEndpointRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}
  */
  readonly maxEndpointTrustDurationInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}
  */
  readonly maxEnrolledDevices: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}
  */
  readonly maxIncorrectAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}
  */
  readonly maxTrustedEndpoints: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}
  */
  readonly trustedEndpointsEnabled: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingEndpointRestrictionsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference | IdentityDomainsAuthenticationFactorSettingEndpointRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_endpoint_trust_duration_in_days: cdktf.numberToTerraform(struct!.maxEndpointTrustDurationInDays),
    max_enrolled_devices: cdktf.numberToTerraform(struct!.maxEnrolledDevices),
    max_incorrect_attempts: cdktf.numberToTerraform(struct!.maxIncorrectAttempts),
    max_trusted_endpoints: cdktf.numberToTerraform(struct!.maxTrustedEndpoints),
    trusted_endpoints_enabled: cdktf.booleanToTerraform(struct!.trustedEndpointsEnabled),
  }
}


export function identityDomainsAuthenticationFactorSettingEndpointRestrictionsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference | IdentityDomainsAuthenticationFactorSettingEndpointRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_endpoint_trust_duration_in_days: {
      value: cdktf.numberToHclTerraform(struct!.maxEndpointTrustDurationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_enrolled_devices: {
      value: cdktf.numberToHclTerraform(struct!.maxEnrolledDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_incorrect_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxIncorrectAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_trusted_endpoints: {
      value: cdktf.numberToHclTerraform(struct!.maxTrustedEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trusted_endpoints_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.trustedEndpointsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingEndpointRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEndpointTrustDurationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEndpointTrustDurationInDays = this._maxEndpointTrustDurationInDays;
    }
    if (this._maxEnrolledDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEnrolledDevices = this._maxEnrolledDevices;
    }
    if (this._maxIncorrectAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIncorrectAttempts = this._maxIncorrectAttempts;
    }
    if (this._maxTrustedEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrustedEndpoints = this._maxTrustedEndpoints;
    }
    if (this._trustedEndpointsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedEndpointsEnabled = this._trustedEndpointsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxEndpointTrustDurationInDays = undefined;
      this._maxEnrolledDevices = undefined;
      this._maxIncorrectAttempts = undefined;
      this._maxTrustedEndpoints = undefined;
      this._trustedEndpointsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxEndpointTrustDurationInDays = value.maxEndpointTrustDurationInDays;
      this._maxEnrolledDevices = value.maxEnrolledDevices;
      this._maxIncorrectAttempts = value.maxIncorrectAttempts;
      this._maxTrustedEndpoints = value.maxTrustedEndpoints;
      this._trustedEndpointsEnabled = value.trustedEndpointsEnabled;
    }
  }

  // max_endpoint_trust_duration_in_days - computed: false, optional: false, required: true
  private _maxEndpointTrustDurationInDays?: number; 
  public get maxEndpointTrustDurationInDays() {
    return this.getNumberAttribute('max_endpoint_trust_duration_in_days');
  }
  public set maxEndpointTrustDurationInDays(value: number) {
    this._maxEndpointTrustDurationInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEndpointTrustDurationInDaysInput() {
    return this._maxEndpointTrustDurationInDays;
  }

  // max_enrolled_devices - computed: false, optional: false, required: true
  private _maxEnrolledDevices?: number; 
  public get maxEnrolledDevices() {
    return this.getNumberAttribute('max_enrolled_devices');
  }
  public set maxEnrolledDevices(value: number) {
    this._maxEnrolledDevices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEnrolledDevicesInput() {
    return this._maxEnrolledDevices;
  }

  // max_incorrect_attempts - computed: false, optional: false, required: true
  private _maxIncorrectAttempts?: number; 
  public get maxIncorrectAttempts() {
    return this.getNumberAttribute('max_incorrect_attempts');
  }
  public set maxIncorrectAttempts(value: number) {
    this._maxIncorrectAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncorrectAttemptsInput() {
    return this._maxIncorrectAttempts;
  }

  // max_trusted_endpoints - computed: false, optional: false, required: true
  private _maxTrustedEndpoints?: number; 
  public get maxTrustedEndpoints() {
    return this.getNumberAttribute('max_trusted_endpoints');
  }
  public set maxTrustedEndpoints(value: number) {
    this._maxTrustedEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrustedEndpointsInput() {
    return this._maxTrustedEndpoints;
  }

  // trusted_endpoints_enabled - computed: false, optional: false, required: true
  private _trustedEndpointsEnabled?: boolean | cdktf.IResolvable; 
  public get trustedEndpointsEnabled() {
    return this.getBooleanAttribute('trusted_endpoints_enabled');
  }
  public set trustedEndpointsEnabled(value: boolean | cdktf.IResolvable) {
    this._trustedEndpointsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedEndpointsEnabledInput() {
    return this._trustedEndpointsEnabled;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}
  */
  readonly mobileNumberEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}
  */
  readonly mobileNumberUpdateEnabled?: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingIdentityStoreSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_number_enabled: cdktf.booleanToTerraform(struct!.mobileNumberEnabled),
    mobile_number_update_enabled: cdktf.booleanToTerraform(struct!.mobileNumberUpdateEnabled),
  }
}


export function identityDomainsAuthenticationFactorSettingIdentityStoreSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_number_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mobileNumberEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobile_number_update_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mobileNumberUpdateEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileNumberEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileNumberEnabled = this._mobileNumberEnabled;
    }
    if (this._mobileNumberUpdateEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileNumberUpdateEnabled = this._mobileNumberUpdateEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileNumberEnabled = undefined;
      this._mobileNumberUpdateEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileNumberEnabled = value.mobileNumberEnabled;
      this._mobileNumberUpdateEnabled = value.mobileNumberUpdateEnabled;
    }
  }

  // mobile_number_enabled - computed: true, optional: true, required: false
  private _mobileNumberEnabled?: boolean | cdktf.IResolvable; 
  public get mobileNumberEnabled() {
    return this.getBooleanAttribute('mobile_number_enabled');
  }
  public set mobileNumberEnabled(value: boolean | cdktf.IResolvable) {
    this._mobileNumberEnabled = value;
  }
  public resetMobileNumberEnabled() {
    this._mobileNumberEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNumberEnabledInput() {
    return this._mobileNumberEnabled;
  }

  // mobile_number_update_enabled - computed: true, optional: true, required: false
  private _mobileNumberUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get mobileNumberUpdateEnabled() {
    return this.getBooleanAttribute('mobile_number_update_enabled');
  }
  public set mobileNumberUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._mobileNumberUpdateEnabled = value;
  }
  public resetMobileNumberUpdateEnabled() {
    this._mobileNumberUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNumberUpdateEnabledInput() {
    return this._mobileNumberUpdateEnabled;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}
  */
  readonly pullEnabled: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingNotificationSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_enabled: cdktf.booleanToTerraform(struct!.pullEnabled),
  }
}


export function identityDomainsAuthenticationFactorSettingNotificationSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pullEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullEnabled = this._pullEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullEnabled = value.pullEnabled;
    }
  }

  // pull_enabled - computed: false, optional: false, required: true
  private _pullEnabled?: boolean | cdktf.IResolvable; 
  public get pullEnabled() {
    return this.getBooleanAttribute('pull_enabled');
  }
  public set pullEnabled(value: boolean | cdktf.IResolvable) {
    this._pullEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullEnabledInput() {
    return this._pullEnabled;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}
  */
  readonly value: string;
}

export function identityDomainsAuthenticationFactorSettingTagsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAuthenticationFactorSettingTagsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingTags | cdktf.IResolvable): any {
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

export class IdentityDomainsAuthenticationFactorSettingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingTags | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsAuthenticationFactorSettingTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAuthenticationFactorSettingTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAuthenticationFactorSettingTagsOutputReference {
    return new IdentityDomainsAuthenticationFactorSettingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAuthenticationFactorSettingThirdPartyFactor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}
  */
  readonly duoSecurity: boolean | cdktf.IResolvable;
}

export function identityDomainsAuthenticationFactorSettingThirdPartyFactorToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference | IdentityDomainsAuthenticationFactorSettingThirdPartyFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duo_security: cdktf.booleanToTerraform(struct!.duoSecurity),
  }
}


export function identityDomainsAuthenticationFactorSettingThirdPartyFactorToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference | IdentityDomainsAuthenticationFactorSettingThirdPartyFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duo_security: {
      value: cdktf.booleanToHclTerraform(struct!.duoSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingThirdPartyFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duoSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoSecurity = this._duoSecurity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duoSecurity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duoSecurity = value.duoSecurity;
    }
  }

  // duo_security - computed: false, optional: false, required: true
  private _duoSecurity?: boolean | cdktf.IResolvable; 
  public get duoSecurity() {
    return this.getBooleanAttribute('duo_security');
  }
  public set duoSecurity(value: boolean | cdktf.IResolvable) {
    this._duoSecurity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get duoSecurityInput() {
    return this._duoSecurity;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}
  */
  readonly update?: string;
}

export function identityDomainsAuthenticationFactorSettingTimeoutsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsAuthenticationFactorSettingTimeoutsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingTimeouts | cdktf.IResolvable | undefined) {
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
export interface IdentityDomainsAuthenticationFactorSettingTotpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}
  */
  readonly emailOtpValidityDurationInMins: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}
  */
  readonly emailPasscodeLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}
  */
  readonly hashingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}
  */
  readonly jwtValidityDurationInSecs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}
  */
  readonly keyRefreshIntervalInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}
  */
  readonly passcodeLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}
  */
  readonly smsOtpValidityDurationInMins: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}
  */
  readonly smsPasscodeLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}
  */
  readonly timeStepInSecs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}
  */
  readonly timeStepTolerance: number;
}

export function identityDomainsAuthenticationFactorSettingTotpSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingTotpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_otp_validity_duration_in_mins: cdktf.numberToTerraform(struct!.emailOtpValidityDurationInMins),
    email_passcode_length: cdktf.numberToTerraform(struct!.emailPasscodeLength),
    hashing_algorithm: cdktf.stringToTerraform(struct!.hashingAlgorithm),
    jwt_validity_duration_in_secs: cdktf.numberToTerraform(struct!.jwtValidityDurationInSecs),
    key_refresh_interval_in_days: cdktf.numberToTerraform(struct!.keyRefreshIntervalInDays),
    passcode_length: cdktf.numberToTerraform(struct!.passcodeLength),
    sms_otp_validity_duration_in_mins: cdktf.numberToTerraform(struct!.smsOtpValidityDurationInMins),
    sms_passcode_length: cdktf.numberToTerraform(struct!.smsPasscodeLength),
    time_step_in_secs: cdktf.numberToTerraform(struct!.timeStepInSecs),
    time_step_tolerance: cdktf.numberToTerraform(struct!.timeStepTolerance),
  }
}


export function identityDomainsAuthenticationFactorSettingTotpSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingTotpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_otp_validity_duration_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.emailOtpValidityDurationInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_passcode_length: {
      value: cdktf.numberToHclTerraform(struct!.emailPasscodeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hashing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.hashingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_validity_duration_in_secs: {
      value: cdktf.numberToHclTerraform(struct!.jwtValidityDurationInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_refresh_interval_in_days: {
      value: cdktf.numberToHclTerraform(struct!.keyRefreshIntervalInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode_length: {
      value: cdktf.numberToHclTerraform(struct!.passcodeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sms_otp_validity_duration_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.smsOtpValidityDurationInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sms_passcode_length: {
      value: cdktf.numberToHclTerraform(struct!.smsPasscodeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_step_in_secs: {
      value: cdktf.numberToHclTerraform(struct!.timeStepInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_step_tolerance: {
      value: cdktf.numberToHclTerraform(struct!.timeStepTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingTotpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailOtpValidityDurationInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailOtpValidityDurationInMins = this._emailOtpValidityDurationInMins;
    }
    if (this._emailPasscodeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailPasscodeLength = this._emailPasscodeLength;
    }
    if (this._hashingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashingAlgorithm = this._hashingAlgorithm;
    }
    if (this._jwtValidityDurationInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidityDurationInSecs = this._jwtValidityDurationInSecs;
    }
    if (this._keyRefreshIntervalInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRefreshIntervalInDays = this._keyRefreshIntervalInDays;
    }
    if (this._passcodeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeLength = this._passcodeLength;
    }
    if (this._smsOtpValidityDurationInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsOtpValidityDurationInMins = this._smsOtpValidityDurationInMins;
    }
    if (this._smsPasscodeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsPasscodeLength = this._smsPasscodeLength;
    }
    if (this._timeStepInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStepInSecs = this._timeStepInSecs;
    }
    if (this._timeStepTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStepTolerance = this._timeStepTolerance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingTotpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailOtpValidityDurationInMins = undefined;
      this._emailPasscodeLength = undefined;
      this._hashingAlgorithm = undefined;
      this._jwtValidityDurationInSecs = undefined;
      this._keyRefreshIntervalInDays = undefined;
      this._passcodeLength = undefined;
      this._smsOtpValidityDurationInMins = undefined;
      this._smsPasscodeLength = undefined;
      this._timeStepInSecs = undefined;
      this._timeStepTolerance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailOtpValidityDurationInMins = value.emailOtpValidityDurationInMins;
      this._emailPasscodeLength = value.emailPasscodeLength;
      this._hashingAlgorithm = value.hashingAlgorithm;
      this._jwtValidityDurationInSecs = value.jwtValidityDurationInSecs;
      this._keyRefreshIntervalInDays = value.keyRefreshIntervalInDays;
      this._passcodeLength = value.passcodeLength;
      this._smsOtpValidityDurationInMins = value.smsOtpValidityDurationInMins;
      this._smsPasscodeLength = value.smsPasscodeLength;
      this._timeStepInSecs = value.timeStepInSecs;
      this._timeStepTolerance = value.timeStepTolerance;
    }
  }

  // email_otp_validity_duration_in_mins - computed: false, optional: false, required: true
  private _emailOtpValidityDurationInMins?: number; 
  public get emailOtpValidityDurationInMins() {
    return this.getNumberAttribute('email_otp_validity_duration_in_mins');
  }
  public set emailOtpValidityDurationInMins(value: number) {
    this._emailOtpValidityDurationInMins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailOtpValidityDurationInMinsInput() {
    return this._emailOtpValidityDurationInMins;
  }

  // email_passcode_length - computed: false, optional: false, required: true
  private _emailPasscodeLength?: number; 
  public get emailPasscodeLength() {
    return this.getNumberAttribute('email_passcode_length');
  }
  public set emailPasscodeLength(value: number) {
    this._emailPasscodeLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPasscodeLengthInput() {
    return this._emailPasscodeLength;
  }

  // hashing_algorithm - computed: false, optional: false, required: true
  private _hashingAlgorithm?: string; 
  public get hashingAlgorithm() {
    return this.getStringAttribute('hashing_algorithm');
  }
  public set hashingAlgorithm(value: string) {
    this._hashingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingAlgorithmInput() {
    return this._hashingAlgorithm;
  }

  // jwt_validity_duration_in_secs - computed: false, optional: false, required: true
  private _jwtValidityDurationInSecs?: number; 
  public get jwtValidityDurationInSecs() {
    return this.getNumberAttribute('jwt_validity_duration_in_secs');
  }
  public set jwtValidityDurationInSecs(value: number) {
    this._jwtValidityDurationInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidityDurationInSecsInput() {
    return this._jwtValidityDurationInSecs;
  }

  // key_refresh_interval_in_days - computed: false, optional: false, required: true
  private _keyRefreshIntervalInDays?: number; 
  public get keyRefreshIntervalInDays() {
    return this.getNumberAttribute('key_refresh_interval_in_days');
  }
  public set keyRefreshIntervalInDays(value: number) {
    this._keyRefreshIntervalInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefreshIntervalInDaysInput() {
    return this._keyRefreshIntervalInDays;
  }

  // passcode_length - computed: false, optional: false, required: true
  private _passcodeLength?: number; 
  public get passcodeLength() {
    return this.getNumberAttribute('passcode_length');
  }
  public set passcodeLength(value: number) {
    this._passcodeLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeLengthInput() {
    return this._passcodeLength;
  }

  // sms_otp_validity_duration_in_mins - computed: false, optional: false, required: true
  private _smsOtpValidityDurationInMins?: number; 
  public get smsOtpValidityDurationInMins() {
    return this.getNumberAttribute('sms_otp_validity_duration_in_mins');
  }
  public set smsOtpValidityDurationInMins(value: number) {
    this._smsOtpValidityDurationInMins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsOtpValidityDurationInMinsInput() {
    return this._smsOtpValidityDurationInMins;
  }

  // sms_passcode_length - computed: false, optional: false, required: true
  private _smsPasscodeLength?: number; 
  public get smsPasscodeLength() {
    return this.getNumberAttribute('sms_passcode_length');
  }
  public set smsPasscodeLength(value: number) {
    this._smsPasscodeLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsPasscodeLengthInput() {
    return this._smsPasscodeLength;
  }

  // time_step_in_secs - computed: false, optional: false, required: true
  private _timeStepInSecs?: number; 
  public get timeStepInSecs() {
    return this.getNumberAttribute('time_step_in_secs');
  }
  public set timeStepInSecs(value: number) {
    this._timeStepInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInSecsInput() {
    return this._timeStepInSecs;
  }

  // time_step_tolerance - computed: false, optional: false, required: true
  private _timeStepTolerance?: number; 
  public get timeStepTolerance() {
    return this.getNumberAttribute('time_step_tolerance');
  }
  public set timeStepTolerance(value: number) {
    this._timeStepTolerance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepToleranceInput() {
    return this._timeStepTolerance;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}
  */
  readonly attestation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}
  */
  readonly authenticatorSelectionAttachment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}
  */
  readonly authenticatorSelectionRequireResidentKey: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}
  */
  readonly authenticatorSelectionResidentKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}
  */
  readonly authenticatorSelectionUserVerification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}
  */
  readonly domainValidationLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}
  */
  readonly excludeCredentials: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}
  */
  readonly publicKeyTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}
  */
  readonly timeout: number;
}

export function identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attestation: cdktf.stringToTerraform(struct!.attestation),
    authenticator_selection_attachment: cdktf.stringToTerraform(struct!.authenticatorSelectionAttachment),
    authenticator_selection_require_resident_key: cdktf.booleanToTerraform(struct!.authenticatorSelectionRequireResidentKey),
    authenticator_selection_resident_key: cdktf.stringToTerraform(struct!.authenticatorSelectionResidentKey),
    authenticator_selection_user_verification: cdktf.stringToTerraform(struct!.authenticatorSelectionUserVerification),
    domain_validation_level: cdktf.numberToTerraform(struct!.domainValidationLevel),
    exclude_credentials: cdktf.booleanToTerraform(struct!.excludeCredentials),
    public_key_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicKeyTypes),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attestation: {
      value: cdktf.stringToHclTerraform(struct!.attestation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_selection_attachment: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorSelectionAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_selection_require_resident_key: {
      value: cdktf.booleanToHclTerraform(struct!.authenticatorSelectionRequireResidentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authenticator_selection_resident_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorSelectionResidentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_selection_user_verification: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorSelectionUserVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_validation_level: {
      value: cdktf.numberToHclTerraform(struct!.domainValidationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.excludeCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_key_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicKeyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attestation !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestation = this._attestation;
    }
    if (this._authenticatorSelectionAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorSelectionAttachment = this._authenticatorSelectionAttachment;
    }
    if (this._authenticatorSelectionRequireResidentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorSelectionRequireResidentKey = this._authenticatorSelectionRequireResidentKey;
    }
    if (this._authenticatorSelectionResidentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorSelectionResidentKey = this._authenticatorSelectionResidentKey;
    }
    if (this._authenticatorSelectionUserVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorSelectionUserVerification = this._authenticatorSelectionUserVerification;
    }
    if (this._domainValidationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainValidationLevel = this._domainValidationLevel;
    }
    if (this._excludeCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeCredentials = this._excludeCredentials;
    }
    if (this._publicKeyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyTypes = this._publicKeyTypes;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attestation = undefined;
      this._authenticatorSelectionAttachment = undefined;
      this._authenticatorSelectionRequireResidentKey = undefined;
      this._authenticatorSelectionResidentKey = undefined;
      this._authenticatorSelectionUserVerification = undefined;
      this._domainValidationLevel = undefined;
      this._excludeCredentials = undefined;
      this._publicKeyTypes = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attestation = value.attestation;
      this._authenticatorSelectionAttachment = value.authenticatorSelectionAttachment;
      this._authenticatorSelectionRequireResidentKey = value.authenticatorSelectionRequireResidentKey;
      this._authenticatorSelectionResidentKey = value.authenticatorSelectionResidentKey;
      this._authenticatorSelectionUserVerification = value.authenticatorSelectionUserVerification;
      this._domainValidationLevel = value.domainValidationLevel;
      this._excludeCredentials = value.excludeCredentials;
      this._publicKeyTypes = value.publicKeyTypes;
      this._timeout = value.timeout;
    }
  }

  // attestation - computed: false, optional: false, required: true
  private _attestation?: string; 
  public get attestation() {
    return this.getStringAttribute('attestation');
  }
  public set attestation(value: string) {
    this._attestation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationInput() {
    return this._attestation;
  }

  // authenticator_selection_attachment - computed: false, optional: false, required: true
  private _authenticatorSelectionAttachment?: string; 
  public get authenticatorSelectionAttachment() {
    return this.getStringAttribute('authenticator_selection_attachment');
  }
  public set authenticatorSelectionAttachment(value: string) {
    this._authenticatorSelectionAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorSelectionAttachmentInput() {
    return this._authenticatorSelectionAttachment;
  }

  // authenticator_selection_require_resident_key - computed: false, optional: false, required: true
  private _authenticatorSelectionRequireResidentKey?: boolean | cdktf.IResolvable; 
  public get authenticatorSelectionRequireResidentKey() {
    return this.getBooleanAttribute('authenticator_selection_require_resident_key');
  }
  public set authenticatorSelectionRequireResidentKey(value: boolean | cdktf.IResolvable) {
    this._authenticatorSelectionRequireResidentKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorSelectionRequireResidentKeyInput() {
    return this._authenticatorSelectionRequireResidentKey;
  }

  // authenticator_selection_resident_key - computed: false, optional: false, required: true
  private _authenticatorSelectionResidentKey?: string; 
  public get authenticatorSelectionResidentKey() {
    return this.getStringAttribute('authenticator_selection_resident_key');
  }
  public set authenticatorSelectionResidentKey(value: string) {
    this._authenticatorSelectionResidentKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorSelectionResidentKeyInput() {
    return this._authenticatorSelectionResidentKey;
  }

  // authenticator_selection_user_verification - computed: false, optional: false, required: true
  private _authenticatorSelectionUserVerification?: string; 
  public get authenticatorSelectionUserVerification() {
    return this.getStringAttribute('authenticator_selection_user_verification');
  }
  public set authenticatorSelectionUserVerification(value: string) {
    this._authenticatorSelectionUserVerification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorSelectionUserVerificationInput() {
    return this._authenticatorSelectionUserVerification;
  }

  // domain_validation_level - computed: true, optional: true, required: false
  private _domainValidationLevel?: number; 
  public get domainValidationLevel() {
    return this.getNumberAttribute('domain_validation_level');
  }
  public set domainValidationLevel(value: number) {
    this._domainValidationLevel = value;
  }
  public resetDomainValidationLevel() {
    this._domainValidationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainValidationLevelInput() {
    return this._domainValidationLevel;
  }

  // exclude_credentials - computed: false, optional: false, required: true
  private _excludeCredentials?: boolean | cdktf.IResolvable; 
  public get excludeCredentials() {
    return this.getBooleanAttribute('exclude_credentials');
  }
  public set excludeCredentials(value: boolean | cdktf.IResolvable) {
    this._excludeCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCredentialsInput() {
    return this._excludeCredentials;
  }

  // public_key_types - computed: false, optional: false, required: true
  private _publicKeyTypes?: string[]; 
  public get publicKeyTypes() {
    return this.getListAttribute('public_key_types');
  }
  public set publicKeyTypes(value: string[]) {
    this._publicKeyTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyTypesInput() {
    return this._publicKeyTypes;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}
  */
  readonly apiHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}
  */
  readonly attestationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}
  */
  readonly secretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}
  */
  readonly userMappingAttribute: string;
}

export function identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference | IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_hostname: cdktf.stringToTerraform(struct!.apiHostname),
    attestation_key: cdktf.stringToTerraform(struct!.attestationKey),
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    user_mapping_attribute: cdktf.stringToTerraform(struct!.userMappingAttribute),
  }
}


export function identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference | IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_hostname: {
      value: cdktf.stringToHclTerraform(struct!.apiHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attestation_key: {
      value: cdktf.stringToHclTerraform(struct!.attestationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_mapping_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userMappingAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiHostname = this._apiHostname;
    }
    if (this._attestationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationKey = this._attestationKey;
    }
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._userMappingAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMappingAttribute = this._userMappingAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiHostname = undefined;
      this._attestationKey = undefined;
      this._integrationKey = undefined;
      this._secretKey = undefined;
      this._userMappingAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiHostname = value.apiHostname;
      this._attestationKey = value.attestationKey;
      this._integrationKey = value.integrationKey;
      this._secretKey = value.secretKey;
      this._userMappingAttribute = value.userMappingAttribute;
    }
  }

  // api_hostname - computed: false, optional: false, required: true
  private _apiHostname?: string; 
  public get apiHostname() {
    return this.getStringAttribute('api_hostname');
  }
  public set apiHostname(value: string) {
    this._apiHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostnameInput() {
    return this._apiHostname;
  }

  // attestation_key - computed: true, optional: true, required: false
  private _attestationKey?: string; 
  public get attestationKey() {
    return this.getStringAttribute('attestation_key');
  }
  public set attestationKey(value: string) {
    this._attestationKey = value;
  }
  public resetAttestationKey() {
    this._attestationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationKeyInput() {
    return this._attestationKey;
  }

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // user_mapping_attribute - computed: false, optional: false, required: true
  private _userMappingAttribute?: string; 
  public get userMappingAttribute() {
    return this.getStringAttribute('user_mapping_attribute');
  }
  public set userMappingAttribute(value: string) {
    this._userMappingAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingAttributeInput() {
    return this._userMappingAttribute;
  }
}
export interface IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings {
  /**
  * duo_security_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#duo_security_settings IdentityDomainsAuthenticationFactorSetting#duo_security_settings}
  */
  readonly duoSecuritySettings?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings;
}

export function identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsToTerraform(struct?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duo_security_settings: identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsToTerraform(struct!.duoSecuritySettings),
  }
}


export function identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsToHclTerraform(struct?: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference | IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duo_security_settings: {
      value: identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsToHclTerraform(struct!.duoSecuritySettings),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duoSecuritySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoSecuritySettings = this._duoSecuritySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duoSecuritySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duoSecuritySettings.internalValue = value.duoSecuritySettings;
    }
  }

  // duo_security_settings - computed: false, optional: true, required: false
  private _duoSecuritySettings = new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(this, "duo_security_settings");
  public get duoSecuritySettings() {
    return this._duoSecuritySettings;
  }
  public putDuoSecuritySettings(value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings) {
    this._duoSecuritySettings.internalValue = value;
  }
  public resetDuoSecuritySettings() {
    this._duoSecuritySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoSecuritySettingsInput() {
    return this._duoSecuritySettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}
*/
export class IdentityDomainsAuthenticationFactorSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_authentication_factor_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsAuthenticationFactorSetting to import
  * @param importFromId The id of the existing IdentityDomainsAuthenticationFactorSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsAuthenticationFactorSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_authentication_factor_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsAuthenticationFactorSettingConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsAuthenticationFactorSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_authentication_factor_setting',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authenticationFactorSettingId = config.authenticationFactorSettingId;
    this._authorization = config.authorization;
    this._autoEnrollEmailFactorDisabled = config.autoEnrollEmailFactorDisabled;
    this._bypassCodeEnabled = config.bypassCodeEnabled;
    this._emailEnabled = config.emailEnabled;
    this._fidoAuthenticatorEnabled = config.fidoAuthenticatorEnabled;
    this._hideBackupFactorEnabled = config.hideBackupFactorEnabled;
    this._idcsEndpoint = config.idcsEndpoint;
    this._mfaEnrollmentType = config.mfaEnrollmentType;
    this._ocid = config.ocid;
    this._phoneCallEnabled = config.phoneCallEnabled;
    this._pushEnabled = config.pushEnabled;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._securityQuestionsEnabled = config.securityQuestionsEnabled;
    this._smsEnabled = config.smsEnabled;
    this._totpEnabled = config.totpEnabled;
    this._userEnrollmentDisabledFactors = config.userEnrollmentDisabledFactors;
    this._yubicoOtpEnabled = config.yubicoOtpEnabled;
    this._bypassCodeSettings.internalValue = config.bypassCodeSettings;
    this._clientAppSettings.internalValue = config.clientAppSettings;
    this._compliancePolicy.internalValue = config.compliancePolicy;
    this._emailSettings.internalValue = config.emailSettings;
    this._endpointRestrictions.internalValue = config.endpointRestrictions;
    this._identityStoreSettings.internalValue = config.identityStoreSettings;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._tags.internalValue = config.tags;
    this._thirdPartyFactor.internalValue = config.thirdPartyFactor;
    this._timeouts.internalValue = config.timeouts;
    this._totpSettings.internalValue = config.totpSettings;
    this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.internalValue = config.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings;
    this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.internalValue = config.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // authentication_factor_setting_id - computed: false, optional: false, required: true
  private _authenticationFactorSettingId?: string; 
  public get authenticationFactorSettingId() {
    return this.getStringAttribute('authentication_factor_setting_id');
  }
  public set authenticationFactorSettingId(value: string) {
    this._authenticationFactorSettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFactorSettingIdInput() {
    return this._authenticationFactorSettingId;
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

  // auto_enroll_email_factor_disabled - computed: true, optional: true, required: false
  private _autoEnrollEmailFactorDisabled?: boolean | cdktf.IResolvable; 
  public get autoEnrollEmailFactorDisabled() {
    return this.getBooleanAttribute('auto_enroll_email_factor_disabled');
  }
  public set autoEnrollEmailFactorDisabled(value: boolean | cdktf.IResolvable) {
    this._autoEnrollEmailFactorDisabled = value;
  }
  public resetAutoEnrollEmailFactorDisabled() {
    this._autoEnrollEmailFactorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollEmailFactorDisabledInput() {
    return this._autoEnrollEmailFactorDisabled;
  }

  // bypass_code_enabled - computed: false, optional: false, required: true
  private _bypassCodeEnabled?: boolean | cdktf.IResolvable; 
  public get bypassCodeEnabled() {
    return this.getBooleanAttribute('bypass_code_enabled');
  }
  public set bypassCodeEnabled(value: boolean | cdktf.IResolvable) {
    this._bypassCodeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCodeEnabledInput() {
    return this._bypassCodeEnabled;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // email_enabled - computed: true, optional: true, required: false
  private _emailEnabled?: boolean | cdktf.IResolvable; 
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }
  public set emailEnabled(value: boolean | cdktf.IResolvable) {
    this._emailEnabled = value;
  }
  public resetEmailEnabled() {
    this._emailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailEnabledInput() {
    return this._emailEnabled;
  }

  // fido_authenticator_enabled - computed: true, optional: true, required: false
  private _fidoAuthenticatorEnabled?: boolean | cdktf.IResolvable; 
  public get fidoAuthenticatorEnabled() {
    return this.getBooleanAttribute('fido_authenticator_enabled');
  }
  public set fidoAuthenticatorEnabled(value: boolean | cdktf.IResolvable) {
    this._fidoAuthenticatorEnabled = value;
  }
  public resetFidoAuthenticatorEnabled() {
    this._fidoAuthenticatorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoAuthenticatorEnabledInput() {
    return this._fidoAuthenticatorEnabled;
  }

  // hide_backup_factor_enabled - computed: true, optional: true, required: false
  private _hideBackupFactorEnabled?: boolean | cdktf.IResolvable; 
  public get hideBackupFactorEnabled() {
    return this.getBooleanAttribute('hide_backup_factor_enabled');
  }
  public set hideBackupFactorEnabled(value: boolean | cdktf.IResolvable) {
    this._hideBackupFactorEnabled = value;
  }
  public resetHideBackupFactorEnabled() {
    this._hideBackupFactorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideBackupFactorEnabledInput() {
    return this._hideBackupFactorEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsAuthenticationFactorSettingMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // mfa_enabled_category - computed: true, optional: false, required: false
  public get mfaEnabledCategory() {
    return this.getStringAttribute('mfa_enabled_category');
  }

  // mfa_enrollment_type - computed: false, optional: false, required: true
  private _mfaEnrollmentType?: string; 
  public get mfaEnrollmentType() {
    return this.getStringAttribute('mfa_enrollment_type');
  }
  public set mfaEnrollmentType(value: string) {
    this._mfaEnrollmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnrollmentTypeInput() {
    return this._mfaEnrollmentType;
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

  // phone_call_enabled - computed: true, optional: true, required: false
  private _phoneCallEnabled?: boolean | cdktf.IResolvable; 
  public get phoneCallEnabled() {
    return this.getBooleanAttribute('phone_call_enabled');
  }
  public set phoneCallEnabled(value: boolean | cdktf.IResolvable) {
    this._phoneCallEnabled = value;
  }
  public resetPhoneCallEnabled() {
    this._phoneCallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCallEnabledInput() {
    return this._phoneCallEnabled;
  }

  // push_enabled - computed: false, optional: false, required: true
  private _pushEnabled?: boolean | cdktf.IResolvable; 
  public get pushEnabled() {
    return this.getBooleanAttribute('push_enabled');
  }
  public set pushEnabled(value: boolean | cdktf.IResolvable) {
    this._pushEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEnabledInput() {
    return this._pushEnabled;
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

  // security_questions_enabled - computed: false, optional: false, required: true
  private _securityQuestionsEnabled?: boolean | cdktf.IResolvable; 
  public get securityQuestionsEnabled() {
    return this.getBooleanAttribute('security_questions_enabled');
  }
  public set securityQuestionsEnabled(value: boolean | cdktf.IResolvable) {
    this._securityQuestionsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQuestionsEnabledInput() {
    return this._securityQuestionsEnabled;
  }

  // sms_enabled - computed: false, optional: false, required: true
  private _smsEnabled?: boolean | cdktf.IResolvable; 
  public get smsEnabled() {
    return this.getBooleanAttribute('sms_enabled');
  }
  public set smsEnabled(value: boolean | cdktf.IResolvable) {
    this._smsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsEnabledInput() {
    return this._smsEnabled;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // totp_enabled - computed: false, optional: false, required: true
  private _totpEnabled?: boolean | cdktf.IResolvable; 
  public get totpEnabled() {
    return this.getBooleanAttribute('totp_enabled');
  }
  public set totpEnabled(value: boolean | cdktf.IResolvable) {
    this._totpEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totpEnabledInput() {
    return this._totpEnabled;
  }

  // user_enrollment_disabled_factors - computed: true, optional: true, required: false
  private _userEnrollmentDisabledFactors?: string[]; 
  public get userEnrollmentDisabledFactors() {
    return this.getListAttribute('user_enrollment_disabled_factors');
  }
  public set userEnrollmentDisabledFactors(value: string[]) {
    this._userEnrollmentDisabledFactors = value;
  }
  public resetUserEnrollmentDisabledFactors() {
    this._userEnrollmentDisabledFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEnrollmentDisabledFactorsInput() {
    return this._userEnrollmentDisabledFactors;
  }

  // yubico_otp_enabled - computed: true, optional: true, required: false
  private _yubicoOtpEnabled?: boolean | cdktf.IResolvable; 
  public get yubicoOtpEnabled() {
    return this.getBooleanAttribute('yubico_otp_enabled');
  }
  public set yubicoOtpEnabled(value: boolean | cdktf.IResolvable) {
    this._yubicoOtpEnabled = value;
  }
  public resetYubicoOtpEnabled() {
    this._yubicoOtpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubicoOtpEnabledInput() {
    return this._yubicoOtpEnabled;
  }

  // bypass_code_settings - computed: false, optional: false, required: true
  private _bypassCodeSettings = new IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(this, "bypass_code_settings");
  public get bypassCodeSettings() {
    return this._bypassCodeSettings;
  }
  public putBypassCodeSettings(value: IdentityDomainsAuthenticationFactorSettingBypassCodeSettings) {
    this._bypassCodeSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCodeSettingsInput() {
    return this._bypassCodeSettings.internalValue;
  }

  // client_app_settings - computed: false, optional: false, required: true
  private _clientAppSettings = new IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(this, "client_app_settings");
  public get clientAppSettings() {
    return this._clientAppSettings;
  }
  public putClientAppSettings(value: IdentityDomainsAuthenticationFactorSettingClientAppSettings) {
    this._clientAppSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppSettingsInput() {
    return this._clientAppSettings.internalValue;
  }

  // compliance_policy - computed: false, optional: false, required: true
  private _compliancePolicy = new IdentityDomainsAuthenticationFactorSettingCompliancePolicyList(this, "compliance_policy", false);
  public get compliancePolicy() {
    return this._compliancePolicy;
  }
  public putCompliancePolicy(value: IdentityDomainsAuthenticationFactorSettingCompliancePolicy[] | cdktf.IResolvable) {
    this._compliancePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancePolicyInput() {
    return this._compliancePolicy.internalValue;
  }

  // email_settings - computed: false, optional: true, required: false
  private _emailSettings = new IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(this, "email_settings");
  public get emailSettings() {
    return this._emailSettings;
  }
  public putEmailSettings(value: IdentityDomainsAuthenticationFactorSettingEmailSettings) {
    this._emailSettings.internalValue = value;
  }
  public resetEmailSettings() {
    this._emailSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSettingsInput() {
    return this._emailSettings.internalValue;
  }

  // endpoint_restrictions - computed: false, optional: false, required: true
  private _endpointRestrictions = new IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(this, "endpoint_restrictions");
  public get endpointRestrictions() {
    return this._endpointRestrictions;
  }
  public putEndpointRestrictions(value: IdentityDomainsAuthenticationFactorSettingEndpointRestrictions) {
    this._endpointRestrictions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRestrictionsInput() {
    return this._endpointRestrictions.internalValue;
  }

  // identity_store_settings - computed: false, optional: true, required: false
  private _identityStoreSettings = new IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(this, "identity_store_settings");
  public get identityStoreSettings() {
    return this._identityStoreSettings;
  }
  public putIdentityStoreSettings(value: IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings) {
    this._identityStoreSettings.internalValue = value;
  }
  public resetIdentityStoreSettings() {
    this._identityStoreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreSettingsInput() {
    return this._identityStoreSettings.internalValue;
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings = new IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: IdentityDomainsAuthenticationFactorSettingNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsAuthenticationFactorSettingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsAuthenticationFactorSettingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // third_party_factor - computed: false, optional: true, required: false
  private _thirdPartyFactor = new IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(this, "third_party_factor");
  public get thirdPartyFactor() {
    return this._thirdPartyFactor;
  }
  public putThirdPartyFactor(value: IdentityDomainsAuthenticationFactorSettingThirdPartyFactor) {
    this._thirdPartyFactor.internalValue = value;
  }
  public resetThirdPartyFactor() {
    this._thirdPartyFactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyFactorInput() {
    return this._thirdPartyFactor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsAuthenticationFactorSettingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // totp_settings - computed: false, optional: false, required: true
  private _totpSettings = new IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(this, "totp_settings");
  public get totpSettings() {
    return this._totpSettings;
  }
  public putTotpSettings(value: IdentityDomainsAuthenticationFactorSettingTotpSettings) {
    this._totpSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totpSettingsInput() {
    return this._totpSettings.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings = new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings");
  public get urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings() {
    return this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings(value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings) {
    this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings() {
    this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings = new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings");
  public get urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings() {
    return this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings(value: IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings) {
    this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings() {
    this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authentication_factor_setting_id: cdktf.stringToTerraform(this._authenticationFactorSettingId),
      authorization: cdktf.stringToTerraform(this._authorization),
      auto_enroll_email_factor_disabled: cdktf.booleanToTerraform(this._autoEnrollEmailFactorDisabled),
      bypass_code_enabled: cdktf.booleanToTerraform(this._bypassCodeEnabled),
      email_enabled: cdktf.booleanToTerraform(this._emailEnabled),
      fido_authenticator_enabled: cdktf.booleanToTerraform(this._fidoAuthenticatorEnabled),
      hide_backup_factor_enabled: cdktf.booleanToTerraform(this._hideBackupFactorEnabled),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      mfa_enrollment_type: cdktf.stringToTerraform(this._mfaEnrollmentType),
      ocid: cdktf.stringToTerraform(this._ocid),
      phone_call_enabled: cdktf.booleanToTerraform(this._phoneCallEnabled),
      push_enabled: cdktf.booleanToTerraform(this._pushEnabled),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      security_questions_enabled: cdktf.booleanToTerraform(this._securityQuestionsEnabled),
      sms_enabled: cdktf.booleanToTerraform(this._smsEnabled),
      totp_enabled: cdktf.booleanToTerraform(this._totpEnabled),
      user_enrollment_disabled_factors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userEnrollmentDisabledFactors),
      yubico_otp_enabled: cdktf.booleanToTerraform(this._yubicoOtpEnabled),
      bypass_code_settings: identityDomainsAuthenticationFactorSettingBypassCodeSettingsToTerraform(this._bypassCodeSettings.internalValue),
      client_app_settings: identityDomainsAuthenticationFactorSettingClientAppSettingsToTerraform(this._clientAppSettings.internalValue),
      compliance_policy: cdktf.listMapper(identityDomainsAuthenticationFactorSettingCompliancePolicyToTerraform, true)(this._compliancePolicy.internalValue),
      email_settings: identityDomainsAuthenticationFactorSettingEmailSettingsToTerraform(this._emailSettings.internalValue),
      endpoint_restrictions: identityDomainsAuthenticationFactorSettingEndpointRestrictionsToTerraform(this._endpointRestrictions.internalValue),
      identity_store_settings: identityDomainsAuthenticationFactorSettingIdentityStoreSettingsToTerraform(this._identityStoreSettings.internalValue),
      notification_settings: identityDomainsAuthenticationFactorSettingNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      tags: cdktf.listMapper(identityDomainsAuthenticationFactorSettingTagsToTerraform, true)(this._tags.internalValue),
      third_party_factor: identityDomainsAuthenticationFactorSettingThirdPartyFactorToTerraform(this._thirdPartyFactor.internalValue),
      timeouts: identityDomainsAuthenticationFactorSettingTimeoutsToTerraform(this._timeouts.internalValue),
      totp_settings: identityDomainsAuthenticationFactorSettingTotpSettingsToTerraform(this._totpSettings.internalValue),
      urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsToTerraform(this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.internalValue),
      urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsToTerraform(this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      authentication_factor_setting_id: {
        value: cdktf.stringToHclTerraform(this._authenticationFactorSettingId),
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
      auto_enroll_email_factor_disabled: {
        value: cdktf.booleanToHclTerraform(this._autoEnrollEmailFactorDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_code_enabled: {
        value: cdktf.booleanToHclTerraform(this._bypassCodeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_enabled: {
        value: cdktf.booleanToHclTerraform(this._emailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fido_authenticator_enabled: {
        value: cdktf.booleanToHclTerraform(this._fidoAuthenticatorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_backup_factor_enabled: {
        value: cdktf.booleanToHclTerraform(this._hideBackupFactorEnabled),
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
      mfa_enrollment_type: {
        value: cdktf.stringToHclTerraform(this._mfaEnrollmentType),
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
      phone_call_enabled: {
        value: cdktf.booleanToHclTerraform(this._phoneCallEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_enabled: {
        value: cdktf.booleanToHclTerraform(this._pushEnabled),
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
      security_questions_enabled: {
        value: cdktf.booleanToHclTerraform(this._securityQuestionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sms_enabled: {
        value: cdktf.booleanToHclTerraform(this._smsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      totp_enabled: {
        value: cdktf.booleanToHclTerraform(this._totpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_enrollment_disabled_factors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userEnrollmentDisabledFactors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      yubico_otp_enabled: {
        value: cdktf.booleanToHclTerraform(this._yubicoOtpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_code_settings: {
        value: identityDomainsAuthenticationFactorSettingBypassCodeSettingsToHclTerraform(this._bypassCodeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList",
      },
      client_app_settings: {
        value: identityDomainsAuthenticationFactorSettingClientAppSettingsToHclTerraform(this._clientAppSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingClientAppSettingsList",
      },
      compliance_policy: {
        value: cdktf.listMapperHcl(identityDomainsAuthenticationFactorSettingCompliancePolicyToHclTerraform, true)(this._compliancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingCompliancePolicyList",
      },
      email_settings: {
        value: identityDomainsAuthenticationFactorSettingEmailSettingsToHclTerraform(this._emailSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingEmailSettingsList",
      },
      endpoint_restrictions: {
        value: identityDomainsAuthenticationFactorSettingEndpointRestrictionsToHclTerraform(this._endpointRestrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList",
      },
      identity_store_settings: {
        value: identityDomainsAuthenticationFactorSettingIdentityStoreSettingsToHclTerraform(this._identityStoreSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList",
      },
      notification_settings: {
        value: identityDomainsAuthenticationFactorSettingNotificationSettingsToHclTerraform(this._notificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingNotificationSettingsList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsAuthenticationFactorSettingTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingTagsList",
      },
      third_party_factor: {
        value: identityDomainsAuthenticationFactorSettingThirdPartyFactorToHclTerraform(this._thirdPartyFactor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingThirdPartyFactorList",
      },
      timeouts: {
        value: identityDomainsAuthenticationFactorSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingTimeouts",
      },
      totp_settings: {
        value: identityDomainsAuthenticationFactorSettingTotpSettingsToHclTerraform(this._totpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingTotpSettingsList",
      },
      urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: {
        value: identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList",
      },
      urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: {
        value: identityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
