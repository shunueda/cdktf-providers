// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementMobileProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile#id DataCheckpointManagementMobileProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile#name DataCheckpointManagementMobileProfile#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile#uid DataCheckpointManagementMobileProfile#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementMobileProfileApplications {
}

export function dataCheckpointManagementMobileProfileApplicationsToTerraform(struct?: DataCheckpointManagementMobileProfileApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementMobileProfileApplicationsToHclTerraform(struct?: DataCheckpointManagementMobileProfileApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementMobileProfileApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementMobileProfileApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementMobileProfileApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_caching_docsec_credentials - computed: true, optional: false, required: false
  public get allowCachingDocsecCredentials() {
    return this.getBooleanAttribute('allow_caching_docsec_credentials');
  }

  // allow_caching_docsec_keys - computed: true, optional: false, required: false
  public get allowCachingDocsecKeys() {
    return this.getBooleanAttribute('allow_caching_docsec_keys');
  }

  // allow_calendar_sync - computed: true, optional: false, required: false
  public get allowCalendarSync() {
    return this.getBooleanAttribute('allow_calendar_sync');
  }

  // allow_contacts_from_global_address_list - computed: true, optional: false, required: false
  public get allowContactsFromGlobalAddressList() {
    return this.getBooleanAttribute('allow_contacts_from_global_address_list');
  }

  // allow_contacts_from_local_phone - computed: true, optional: false, required: false
  public get allowContactsFromLocalPhone() {
    return this.getBooleanAttribute('allow_contacts_from_local_phone');
  }

  // allow_push_notification - computed: true, optional: false, required: false
  public get allowPushNotification() {
    return this.getBooleanAttribute('allow_push_notification');
  }

  // calendar_from_the_last - computed: true, optional: false, required: false
  public get calendarFromTheLast() {
    return this.getNumberAttribute('calendar_from_the_last');
  }

  // calendar_from_the_last_unit - computed: true, optional: false, required: false
  public get calendarFromTheLastUnit() {
    return this.getStringAttribute('calendar_from_the_last_unit');
  }

  // calendar_to_the_following - computed: true, optional: false, required: false
  public get calendarToTheFollowing() {
    return this.getNumberAttribute('calendar_to_the_following');
  }

  // calendar_to_the_following_unit - computed: true, optional: false, required: false
  public get calendarToTheFollowingUnit() {
    return this.getStringAttribute('calendar_to_the_following_unit');
  }

  // enable_print_mails - computed: true, optional: false, required: false
  public get enablePrintMails() {
    return this.getBooleanAttribute('enable_print_mails');
  }

  // mail_from_the_last - computed: true, optional: false, required: false
  public get mailFromTheLast() {
    return this.getNumberAttribute('mail_from_the_last');
  }

  // mail_from_the_last_unit - computed: true, optional: false, required: false
  public get mailFromTheLastUnit() {
    return this.getStringAttribute('mail_from_the_last_unit');
  }

  // max_attachments_size - computed: true, optional: false, required: false
  public get maxAttachmentsSize() {
    return this.getNumberAttribute('max_attachments_size');
  }

  // save_local_web_cache - computed: true, optional: false, required: false
  public get saveLocalWebCache() {
    return this.getBooleanAttribute('save_local_web_cache');
  }

  // synchronize_contacts - computed: true, optional: false, required: false
  public get synchronizeContacts() {
    return this.getStringAttribute('synchronize_contacts');
  }
}

export class DataCheckpointManagementMobileProfileApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementMobileProfileApplicationsOutputReference {
    return new DataCheckpointManagementMobileProfileApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementMobileProfileClientCustomization {
}

export function dataCheckpointManagementMobileProfileClientCustomizationToTerraform(struct?: DataCheckpointManagementMobileProfileClientCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementMobileProfileClientCustomizationToHclTerraform(struct?: DataCheckpointManagementMobileProfileClientCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementMobileProfileClientCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementMobileProfileClientCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementMobileProfileClientCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_calendar - computed: true, optional: false, required: false
  public get allowCalendar() {
    return this.getBooleanAttribute('allow_calendar');
  }

  // allow_contacts - computed: true, optional: false, required: false
  public get allowContacts() {
    return this.getBooleanAttribute('allow_contacts');
  }

  // allow_mail - computed: true, optional: false, required: false
  public get allowMail() {
    return this.getBooleanAttribute('allow_mail');
  }

  // allow_notes_sync - computed: true, optional: false, required: false
  public get allowNotesSync() {
    return this.getBooleanAttribute('allow_notes_sync');
  }

  // allow_saved_file_apps - computed: true, optional: false, required: false
  public get allowSavedFileApps() {
    return this.getBooleanAttribute('allow_saved_file_apps');
  }

  // allow_secure_chat - computed: true, optional: false, required: false
  public get allowSecureChat() {
    return this.getBooleanAttribute('allow_secure_chat');
  }

  // allow_tasks - computed: true, optional: false, required: false
  public get allowTasks() {
    return this.getBooleanAttribute('allow_tasks');
  }

  // app_theme_color_dark - computed: true, optional: false, required: false
  public get appThemeColorDark() {
    return this.getStringAttribute('app_theme_color_dark');
  }

  // app_theme_color_light - computed: true, optional: false, required: false
  public get appThemeColorLight() {
    return this.getStringAttribute('app_theme_color_light');
  }

  // certificate_expire_message - computed: true, optional: false, required: false
  public get certificateExpireMessage() {
    return this.getStringAttribute('certificate_expire_message');
  }
}

export class DataCheckpointManagementMobileProfileClientCustomizationList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementMobileProfileClientCustomizationOutputReference {
    return new DataCheckpointManagementMobileProfileClientCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementMobileProfileDataLeakPrevention {
}

export function dataCheckpointManagementMobileProfileDataLeakPreventionToTerraform(struct?: DataCheckpointManagementMobileProfileDataLeakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementMobileProfileDataLeakPreventionToHclTerraform(struct?: DataCheckpointManagementMobileProfileDataLeakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementMobileProfileDataLeakPreventionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementMobileProfileDataLeakPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementMobileProfileDataLeakPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_protected_file_extensions - computed: true, optional: false, required: false
  public get acceptProtectedFileExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('accept_protected_file_extensions'));
  }

  // accept_unprotected_file_extensions - computed: true, optional: false, required: false
  public get acceptUnprotectedFileExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('accept_unprotected_file_extensions'));
  }

  // allow_copy_paste - computed: true, optional: false, required: false
  public get allowCopyPaste() {
    return this.getBooleanAttribute('allow_copy_paste');
  }

  // allow_import_from_gallery - computed: true, optional: false, required: false
  public get allowImportFromGallery() {
    return this.getBooleanAttribute('allow_import_from_gallery');
  }

  // allow_taking_photos_and_videos - computed: true, optional: false, required: false
  public get allowTakingPhotosAndVideos() {
    return this.getBooleanAttribute('allow_taking_photos_and_videos');
  }

  // allowed_domains_forward_attachment - computed: true, optional: false, required: false
  public get allowedDomainsForwardAttachment() {
    return this.getStringAttribute('allowed_domains_forward_attachment');
  }

  // block_forward_attachments - computed: true, optional: false, required: false
  public get blockForwardAttachments() {
    return this.getBooleanAttribute('block_forward_attachments');
  }

  // block_screenshot - computed: true, optional: false, required: false
  public get blockScreenshot() {
    return this.getBooleanAttribute('block_screenshot');
  }

  // offer_capsule_as_viewer - computed: true, optional: false, required: false
  public get offerCapsuleAsViewer() {
    return this.getBooleanAttribute('offer_capsule_as_viewer');
  }

  // open_extension_with_external_app - computed: true, optional: false, required: false
  public get openExtensionWithExternalApp() {
    return cdktf.Fn.tolist(this.getListAttribute('open_extension_with_external_app'));
  }

  // share_protected_extension - computed: true, optional: false, required: false
  public get shareProtectedExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('share_protected_extension'));
  }

  // share_unprotected_extension - computed: true, optional: false, required: false
  public get shareUnprotectedExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('share_unprotected_extension'));
  }
}

export class DataCheckpointManagementMobileProfileDataLeakPreventionList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementMobileProfileDataLeakPreventionOutputReference {
    return new DataCheckpointManagementMobileProfileDataLeakPreventionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementMobileProfileHarmonyMobile {
}

export function dataCheckpointManagementMobileProfileHarmonyMobileToTerraform(struct?: DataCheckpointManagementMobileProfileHarmonyMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementMobileProfileHarmonyMobileToHclTerraform(struct?: DataCheckpointManagementMobileProfileHarmonyMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementMobileProfileHarmonyMobileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementMobileProfileHarmonyMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementMobileProfileHarmonyMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compromised_behavior - computed: true, optional: false, required: false
  public get compromisedBehavior() {
    return this.getStringAttribute('compromised_behavior');
  }

  // enable_harmony_mobile_sdk - computed: true, optional: false, required: false
  public get enableHarmonyMobileSdk() {
    return this.getBooleanAttribute('enable_harmony_mobile_sdk');
  }

  // harmony_mobile_sdk_license - computed: true, optional: false, required: false
  public get harmonyMobileSdkLicense() {
    return this.getStringAttribute('harmony_mobile_sdk_license');
  }

  // malware_behavior - computed: true, optional: false, required: false
  public get malwareBehavior() {
    return this.getStringAttribute('malware_behavior');
  }

  // man_in_the_middle_attack - computed: true, optional: false, required: false
  public get manInTheMiddleAttack() {
    return this.getStringAttribute('man_in_the_middle_attack');
  }

  // os_integrity_compromised - computed: true, optional: false, required: false
  public get osIntegrityCompromised() {
    return this.getStringAttribute('os_integrity_compromised');
  }

  // protect_high_risk_action - computed: true, optional: false, required: false
  public get protectHighRiskAction() {
    return this.getStringAttribute('protect_high_risk_action');
  }

  // protect_high_risk_message - computed: true, optional: false, required: false
  public get protectHighRiskMessage() {
    return this.getStringAttribute('protect_high_risk_message');
  }

  // protect_medium_risk_action - computed: true, optional: false, required: false
  public get protectMediumRiskAction() {
    return this.getStringAttribute('protect_medium_risk_action');
  }

  // protect_medium_risk_message - computed: true, optional: false, required: false
  public get protectMediumRiskMessage() {
    return this.getStringAttribute('protect_medium_risk_message');
  }

  // protect_not_activated_action - computed: true, optional: false, required: false
  public get protectNotActivatedAction() {
    return this.getStringAttribute('protect_not_activated_action');
  }

  // protect_not_activated_message - computed: true, optional: false, required: false
  public get protectNotActivatedMessage() {
    return this.getStringAttribute('protect_not_activated_message');
  }

  // protect_policy_enabled - computed: true, optional: false, required: false
  public get protectPolicyEnabled() {
    return this.getBooleanAttribute('protect_policy_enabled');
  }

  // suspicious_app - computed: true, optional: false, required: false
  public get suspiciousApp() {
    return this.getStringAttribute('suspicious_app');
  }

  // suspicious_enterprise_certificate - computed: true, optional: false, required: false
  public get suspiciousEnterpriseCertificate() {
    return this.getStringAttribute('suspicious_enterprise_certificate');
  }
}

export class DataCheckpointManagementMobileProfileHarmonyMobileList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementMobileProfileHarmonyMobileOutputReference {
    return new DataCheckpointManagementMobileProfileHarmonyMobileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementMobileProfileSecurity {
}

export function dataCheckpointManagementMobileProfileSecurityToTerraform(struct?: DataCheckpointManagementMobileProfileSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementMobileProfileSecurityToHclTerraform(struct?: DataCheckpointManagementMobileProfileSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementMobileProfileSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementMobileProfileSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementMobileProfileSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_passcode_lock - computed: true, optional: false, required: false
  public get activatePasscodeLock() {
    return this.getBooleanAttribute('activate_passcode_lock');
  }

  // allow_store_credentials - computed: true, optional: false, required: false
  public get allowStoreCredentials() {
    return this.getBooleanAttribute('allow_store_credentials');
  }

  // block_3rd_party_keyboard - computed: true, optional: false, required: false
  public get block3RdPartyKeyboard() {
    return this.getBooleanAttribute('block_3rd_party_keyboard');
  }

  // block_jailbroken - computed: true, optional: false, required: false
  public get blockJailbroken() {
    return this.getStringAttribute('block_jailbroken');
  }

  // hide_ssl_connect_anyway_button - computed: true, optional: false, required: false
  public get hideSslConnectAnywayButton() {
    return this.getBooleanAttribute('hide_ssl_connect_anyway_button');
  }

  // passcode_profile - computed: true, optional: false, required: false
  public get passcodeProfile() {
    return this.getStringAttribute('passcode_profile');
  }

  // report_jailbroken - computed: true, optional: false, required: false
  public get reportJailbroken() {
    return this.getBooleanAttribute('report_jailbroken');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // session_timeout_unit - computed: true, optional: false, required: false
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }
}

export class DataCheckpointManagementMobileProfileSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementMobileProfileSecurityOutputReference {
    return new DataCheckpointManagementMobileProfileSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile checkpoint_management_mobile_profile}
*/
export class DataCheckpointManagementMobileProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_mobile_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementMobileProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementMobileProfile to import
  * @param importFromId The id of the existing DataCheckpointManagementMobileProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementMobileProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_mobile_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_mobile_profile checkpoint_management_mobile_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementMobileProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementMobileProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_mobile_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: false, required: false
  private _applications = new DataCheckpointManagementMobileProfileApplicationsList(this, "applications", false);
  public get applications() {
    return this._applications;
  }

  // client_customization - computed: true, optional: false, required: false
  private _clientCustomization = new DataCheckpointManagementMobileProfileClientCustomizationList(this, "client_customization", false);
  public get clientCustomization() {
    return this._clientCustomization;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // data_leak_prevention - computed: true, optional: false, required: false
  private _dataLeakPrevention = new DataCheckpointManagementMobileProfileDataLeakPreventionList(this, "data_leak_prevention", false);
  public get dataLeakPrevention() {
    return this._dataLeakPrevention;
  }

  // harmony_mobile - computed: true, optional: false, required: false
  private _harmonyMobile = new DataCheckpointManagementMobileProfileHarmonyMobileList(this, "harmony_mobile", false);
  public get harmonyMobile() {
    return this._harmonyMobile;
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

  // security - computed: true, optional: false, required: false
  private _security = new DataCheckpointManagementMobileProfileSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
