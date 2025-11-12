// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementMobileProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#color ManagementMobileProfile#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#comments ManagementMobileProfile#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#id ManagementMobileProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#ignore_errors ManagementMobileProfile#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#ignore_warnings ManagementMobileProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#name ManagementMobileProfile#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#tags ManagementMobileProfile#tags}
  */
  readonly tags?: string[];
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#applications ManagementMobileProfile#applications}
  */
  readonly applications?: ManagementMobileProfileApplications;
  /**
  * client_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#client_customization ManagementMobileProfile#client_customization}
  */
  readonly clientCustomization?: ManagementMobileProfileClientCustomization;
  /**
  * data_leak_prevention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#data_leak_prevention ManagementMobileProfile#data_leak_prevention}
  */
  readonly dataLeakPrevention?: ManagementMobileProfileDataLeakPrevention;
  /**
  * harmony_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#harmony_mobile ManagementMobileProfile#harmony_mobile}
  */
  readonly harmonyMobile?: ManagementMobileProfileHarmonyMobile;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#security ManagementMobileProfile#security}
  */
  readonly security?: ManagementMobileProfileSecurity;
}
export interface ManagementMobileProfileApplications {
  /**
  * Allow store encrypted document credentials in application secure storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_caching_docsec_credentials ManagementMobileProfile#allow_caching_docsec_credentials}
  */
  readonly allowCachingDocsecCredentials?: boolean | cdktf.IResolvable;
  /**
  * Allow store encrypted document keys in application secure storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_caching_docsec_keys ManagementMobileProfile#allow_caching_docsec_keys}
  */
  readonly allowCachingDocsecKeys?: boolean | cdktf.IResolvable;
  /**
  * Allow synchronization between business calendar to device calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_calendar_sync ManagementMobileProfile#allow_calendar_sync}
  */
  readonly allowCalendarSync?: boolean | cdktf.IResolvable;
  /**
  * Allow to add additional contacts from Global Address List to the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_contacts_from_global_address_list ManagementMobileProfile#allow_contacts_from_global_address_list}
  */
  readonly allowContactsFromGlobalAddressList?: boolean | cdktf.IResolvable;
  /**
  * Allow to add additional contacts from local phone to the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_contacts_from_local_phone ManagementMobileProfile#allow_contacts_from_local_phone}
  */
  readonly allowContactsFromLocalPhone?: boolean | cdktf.IResolvable;
  /**
  * Allow to receive push notifications of mails and meetings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_push_notification ManagementMobileProfile#allow_push_notification}
  */
  readonly allowPushNotification?: boolean | cdktf.IResolvable;
  /**
  * How far back to see your Calendar from the current date - you can choose a unit (day, week, month) in "calendar-from-the-last-unit" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#calendar_from_the_last ManagementMobileProfile#calendar_from_the_last}
  */
  readonly calendarFromTheLast?: number;
  /**
  * Unit for "calendar-from-the-last" numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#calendar_from_the_last_unit ManagementMobileProfile#calendar_from_the_last_unit}
  */
  readonly calendarFromTheLastUnit?: string;
  /**
  * How much ahead to see your Calendar from the current date - you can choose a unit (day, week, month) in "calendar-to-the-following-unit" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#calendar_to_the_following ManagementMobileProfile#calendar_to_the_following}
  */
  readonly calendarToTheFollowing?: number;
  /**
  * Unit for "calendar-to-the-following" numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#calendar_to_the_following_unit ManagementMobileProfile#calendar_to_the_following_unit}
  */
  readonly calendarToTheFollowingUnit?: string;
  /**
  * Allow to print mails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#enable_print_mails ManagementMobileProfile#enable_print_mails}
  */
  readonly enablePrintMails?: boolean | cdktf.IResolvable;
  /**
  * How far back to see your emails from the current date - choose a unit (day, week, month) in "mail-from-the-last-unit" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#mail_from_the_last ManagementMobileProfile#mail_from_the_last}
  */
  readonly mailFromTheLast?: number;
  /**
  * Unit for "mail-from-the-last" numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#mail_from_the_last_unit ManagementMobileProfile#mail_from_the_last_unit}
  */
  readonly mailFromTheLastUnit?: string;
  /**
  * Maximum size of attachments allowed for downloading -  you can choose a unit (gbs, kbs, mbs, bytes) in "max-attachments-unit" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#max_attachments_size ManagementMobileProfile#max_attachments_size}
  */
  readonly maxAttachmentsSize?: number;
  /**
  * Configure whether local cache data generated by web browser should be preserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#save_local_web_cache ManagementMobileProfile#save_local_web_cache}
  */
  readonly saveLocalWebCache?: boolean | cdktf.IResolvable;
  /**
  * Contacts synchronization method - from the mail server to device and the app and vice versa or from the mail server to device and the app or from the mail server to the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#synchronize_contacts ManagementMobileProfile#synchronize_contacts}
  */
  readonly synchronizeContacts?: string;
}

export function managementMobileProfileApplicationsToTerraform(struct?: ManagementMobileProfileApplicationsOutputReference | ManagementMobileProfileApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_caching_docsec_credentials: cdktf.booleanToTerraform(struct!.allowCachingDocsecCredentials),
    allow_caching_docsec_keys: cdktf.booleanToTerraform(struct!.allowCachingDocsecKeys),
    allow_calendar_sync: cdktf.booleanToTerraform(struct!.allowCalendarSync),
    allow_contacts_from_global_address_list: cdktf.booleanToTerraform(struct!.allowContactsFromGlobalAddressList),
    allow_contacts_from_local_phone: cdktf.booleanToTerraform(struct!.allowContactsFromLocalPhone),
    allow_push_notification: cdktf.booleanToTerraform(struct!.allowPushNotification),
    calendar_from_the_last: cdktf.numberToTerraform(struct!.calendarFromTheLast),
    calendar_from_the_last_unit: cdktf.stringToTerraform(struct!.calendarFromTheLastUnit),
    calendar_to_the_following: cdktf.numberToTerraform(struct!.calendarToTheFollowing),
    calendar_to_the_following_unit: cdktf.stringToTerraform(struct!.calendarToTheFollowingUnit),
    enable_print_mails: cdktf.booleanToTerraform(struct!.enablePrintMails),
    mail_from_the_last: cdktf.numberToTerraform(struct!.mailFromTheLast),
    mail_from_the_last_unit: cdktf.stringToTerraform(struct!.mailFromTheLastUnit),
    max_attachments_size: cdktf.numberToTerraform(struct!.maxAttachmentsSize),
    save_local_web_cache: cdktf.booleanToTerraform(struct!.saveLocalWebCache),
    synchronize_contacts: cdktf.stringToTerraform(struct!.synchronizeContacts),
  }
}


export function managementMobileProfileApplicationsToHclTerraform(struct?: ManagementMobileProfileApplicationsOutputReference | ManagementMobileProfileApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_caching_docsec_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCachingDocsecCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_caching_docsec_keys: {
      value: cdktf.booleanToHclTerraform(struct!.allowCachingDocsecKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_calendar_sync: {
      value: cdktf.booleanToHclTerraform(struct!.allowCalendarSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_contacts_from_global_address_list: {
      value: cdktf.booleanToHclTerraform(struct!.allowContactsFromGlobalAddressList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_contacts_from_local_phone: {
      value: cdktf.booleanToHclTerraform(struct!.allowContactsFromLocalPhone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_push_notification: {
      value: cdktf.booleanToHclTerraform(struct!.allowPushNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    calendar_from_the_last: {
      value: cdktf.numberToHclTerraform(struct!.calendarFromTheLast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    calendar_from_the_last_unit: {
      value: cdktf.stringToHclTerraform(struct!.calendarFromTheLastUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calendar_to_the_following: {
      value: cdktf.numberToHclTerraform(struct!.calendarToTheFollowing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    calendar_to_the_following_unit: {
      value: cdktf.stringToHclTerraform(struct!.calendarToTheFollowingUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_print_mails: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrintMails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mail_from_the_last: {
      value: cdktf.numberToHclTerraform(struct!.mailFromTheLast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mail_from_the_last_unit: {
      value: cdktf.stringToHclTerraform(struct!.mailFromTheLastUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_attachments_size: {
      value: cdktf.numberToHclTerraform(struct!.maxAttachmentsSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save_local_web_cache: {
      value: cdktf.booleanToHclTerraform(struct!.saveLocalWebCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synchronize_contacts: {
      value: cdktf.stringToHclTerraform(struct!.synchronizeContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementMobileProfileApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementMobileProfileApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCachingDocsecCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCachingDocsecCredentials = this._allowCachingDocsecCredentials;
    }
    if (this._allowCachingDocsecKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCachingDocsecKeys = this._allowCachingDocsecKeys;
    }
    if (this._allowCalendarSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCalendarSync = this._allowCalendarSync;
    }
    if (this._allowContactsFromGlobalAddressList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowContactsFromGlobalAddressList = this._allowContactsFromGlobalAddressList;
    }
    if (this._allowContactsFromLocalPhone !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowContactsFromLocalPhone = this._allowContactsFromLocalPhone;
    }
    if (this._allowPushNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPushNotification = this._allowPushNotification;
    }
    if (this._calendarFromTheLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarFromTheLast = this._calendarFromTheLast;
    }
    if (this._calendarFromTheLastUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarFromTheLastUnit = this._calendarFromTheLastUnit;
    }
    if (this._calendarToTheFollowing !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarToTheFollowing = this._calendarToTheFollowing;
    }
    if (this._calendarToTheFollowingUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarToTheFollowingUnit = this._calendarToTheFollowingUnit;
    }
    if (this._enablePrintMails !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrintMails = this._enablePrintMails;
    }
    if (this._mailFromTheLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFromTheLast = this._mailFromTheLast;
    }
    if (this._mailFromTheLastUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFromTheLastUnit = this._mailFromTheLastUnit;
    }
    if (this._maxAttachmentsSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttachmentsSize = this._maxAttachmentsSize;
    }
    if (this._saveLocalWebCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveLocalWebCache = this._saveLocalWebCache;
    }
    if (this._synchronizeContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronizeContacts = this._synchronizeContacts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementMobileProfileApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCachingDocsecCredentials = undefined;
      this._allowCachingDocsecKeys = undefined;
      this._allowCalendarSync = undefined;
      this._allowContactsFromGlobalAddressList = undefined;
      this._allowContactsFromLocalPhone = undefined;
      this._allowPushNotification = undefined;
      this._calendarFromTheLast = undefined;
      this._calendarFromTheLastUnit = undefined;
      this._calendarToTheFollowing = undefined;
      this._calendarToTheFollowingUnit = undefined;
      this._enablePrintMails = undefined;
      this._mailFromTheLast = undefined;
      this._mailFromTheLastUnit = undefined;
      this._maxAttachmentsSize = undefined;
      this._saveLocalWebCache = undefined;
      this._synchronizeContacts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCachingDocsecCredentials = value.allowCachingDocsecCredentials;
      this._allowCachingDocsecKeys = value.allowCachingDocsecKeys;
      this._allowCalendarSync = value.allowCalendarSync;
      this._allowContactsFromGlobalAddressList = value.allowContactsFromGlobalAddressList;
      this._allowContactsFromLocalPhone = value.allowContactsFromLocalPhone;
      this._allowPushNotification = value.allowPushNotification;
      this._calendarFromTheLast = value.calendarFromTheLast;
      this._calendarFromTheLastUnit = value.calendarFromTheLastUnit;
      this._calendarToTheFollowing = value.calendarToTheFollowing;
      this._calendarToTheFollowingUnit = value.calendarToTheFollowingUnit;
      this._enablePrintMails = value.enablePrintMails;
      this._mailFromTheLast = value.mailFromTheLast;
      this._mailFromTheLastUnit = value.mailFromTheLastUnit;
      this._maxAttachmentsSize = value.maxAttachmentsSize;
      this._saveLocalWebCache = value.saveLocalWebCache;
      this._synchronizeContacts = value.synchronizeContacts;
    }
  }

  // allow_caching_docsec_credentials - computed: false, optional: true, required: false
  private _allowCachingDocsecCredentials?: boolean | cdktf.IResolvable; 
  public get allowCachingDocsecCredentials() {
    return this.getBooleanAttribute('allow_caching_docsec_credentials');
  }
  public set allowCachingDocsecCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCachingDocsecCredentials = value;
  }
  public resetAllowCachingDocsecCredentials() {
    this._allowCachingDocsecCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCachingDocsecCredentialsInput() {
    return this._allowCachingDocsecCredentials;
  }

  // allow_caching_docsec_keys - computed: false, optional: true, required: false
  private _allowCachingDocsecKeys?: boolean | cdktf.IResolvable; 
  public get allowCachingDocsecKeys() {
    return this.getBooleanAttribute('allow_caching_docsec_keys');
  }
  public set allowCachingDocsecKeys(value: boolean | cdktf.IResolvable) {
    this._allowCachingDocsecKeys = value;
  }
  public resetAllowCachingDocsecKeys() {
    this._allowCachingDocsecKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCachingDocsecKeysInput() {
    return this._allowCachingDocsecKeys;
  }

  // allow_calendar_sync - computed: false, optional: true, required: false
  private _allowCalendarSync?: boolean | cdktf.IResolvable; 
  public get allowCalendarSync() {
    return this.getBooleanAttribute('allow_calendar_sync');
  }
  public set allowCalendarSync(value: boolean | cdktf.IResolvable) {
    this._allowCalendarSync = value;
  }
  public resetAllowCalendarSync() {
    this._allowCalendarSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCalendarSyncInput() {
    return this._allowCalendarSync;
  }

  // allow_contacts_from_global_address_list - computed: false, optional: true, required: false
  private _allowContactsFromGlobalAddressList?: boolean | cdktf.IResolvable; 
  public get allowContactsFromGlobalAddressList() {
    return this.getBooleanAttribute('allow_contacts_from_global_address_list');
  }
  public set allowContactsFromGlobalAddressList(value: boolean | cdktf.IResolvable) {
    this._allowContactsFromGlobalAddressList = value;
  }
  public resetAllowContactsFromGlobalAddressList() {
    this._allowContactsFromGlobalAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContactsFromGlobalAddressListInput() {
    return this._allowContactsFromGlobalAddressList;
  }

  // allow_contacts_from_local_phone - computed: false, optional: true, required: false
  private _allowContactsFromLocalPhone?: boolean | cdktf.IResolvable; 
  public get allowContactsFromLocalPhone() {
    return this.getBooleanAttribute('allow_contacts_from_local_phone');
  }
  public set allowContactsFromLocalPhone(value: boolean | cdktf.IResolvable) {
    this._allowContactsFromLocalPhone = value;
  }
  public resetAllowContactsFromLocalPhone() {
    this._allowContactsFromLocalPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContactsFromLocalPhoneInput() {
    return this._allowContactsFromLocalPhone;
  }

  // allow_push_notification - computed: false, optional: true, required: false
  private _allowPushNotification?: boolean | cdktf.IResolvable; 
  public get allowPushNotification() {
    return this.getBooleanAttribute('allow_push_notification');
  }
  public set allowPushNotification(value: boolean | cdktf.IResolvable) {
    this._allowPushNotification = value;
  }
  public resetAllowPushNotification() {
    this._allowPushNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushNotificationInput() {
    return this._allowPushNotification;
  }

  // calendar_from_the_last - computed: false, optional: true, required: false
  private _calendarFromTheLast?: number; 
  public get calendarFromTheLast() {
    return this.getNumberAttribute('calendar_from_the_last');
  }
  public set calendarFromTheLast(value: number) {
    this._calendarFromTheLast = value;
  }
  public resetCalendarFromTheLast() {
    this._calendarFromTheLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarFromTheLastInput() {
    return this._calendarFromTheLast;
  }

  // calendar_from_the_last_unit - computed: false, optional: true, required: false
  private _calendarFromTheLastUnit?: string; 
  public get calendarFromTheLastUnit() {
    return this.getStringAttribute('calendar_from_the_last_unit');
  }
  public set calendarFromTheLastUnit(value: string) {
    this._calendarFromTheLastUnit = value;
  }
  public resetCalendarFromTheLastUnit() {
    this._calendarFromTheLastUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarFromTheLastUnitInput() {
    return this._calendarFromTheLastUnit;
  }

  // calendar_to_the_following - computed: false, optional: true, required: false
  private _calendarToTheFollowing?: number; 
  public get calendarToTheFollowing() {
    return this.getNumberAttribute('calendar_to_the_following');
  }
  public set calendarToTheFollowing(value: number) {
    this._calendarToTheFollowing = value;
  }
  public resetCalendarToTheFollowing() {
    this._calendarToTheFollowing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarToTheFollowingInput() {
    return this._calendarToTheFollowing;
  }

  // calendar_to_the_following_unit - computed: false, optional: true, required: false
  private _calendarToTheFollowingUnit?: string; 
  public get calendarToTheFollowingUnit() {
    return this.getStringAttribute('calendar_to_the_following_unit');
  }
  public set calendarToTheFollowingUnit(value: string) {
    this._calendarToTheFollowingUnit = value;
  }
  public resetCalendarToTheFollowingUnit() {
    this._calendarToTheFollowingUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarToTheFollowingUnitInput() {
    return this._calendarToTheFollowingUnit;
  }

  // enable_print_mails - computed: false, optional: true, required: false
  private _enablePrintMails?: boolean | cdktf.IResolvable; 
  public get enablePrintMails() {
    return this.getBooleanAttribute('enable_print_mails');
  }
  public set enablePrintMails(value: boolean | cdktf.IResolvable) {
    this._enablePrintMails = value;
  }
  public resetEnablePrintMails() {
    this._enablePrintMails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrintMailsInput() {
    return this._enablePrintMails;
  }

  // mail_from_the_last - computed: false, optional: true, required: false
  private _mailFromTheLast?: number; 
  public get mailFromTheLast() {
    return this.getNumberAttribute('mail_from_the_last');
  }
  public set mailFromTheLast(value: number) {
    this._mailFromTheLast = value;
  }
  public resetMailFromTheLast() {
    this._mailFromTheLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromTheLastInput() {
    return this._mailFromTheLast;
  }

  // mail_from_the_last_unit - computed: false, optional: true, required: false
  private _mailFromTheLastUnit?: string; 
  public get mailFromTheLastUnit() {
    return this.getStringAttribute('mail_from_the_last_unit');
  }
  public set mailFromTheLastUnit(value: string) {
    this._mailFromTheLastUnit = value;
  }
  public resetMailFromTheLastUnit() {
    this._mailFromTheLastUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromTheLastUnitInput() {
    return this._mailFromTheLastUnit;
  }

  // max_attachments_size - computed: false, optional: true, required: false
  private _maxAttachmentsSize?: number; 
  public get maxAttachmentsSize() {
    return this.getNumberAttribute('max_attachments_size');
  }
  public set maxAttachmentsSize(value: number) {
    this._maxAttachmentsSize = value;
  }
  public resetMaxAttachmentsSize() {
    this._maxAttachmentsSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttachmentsSizeInput() {
    return this._maxAttachmentsSize;
  }

  // save_local_web_cache - computed: false, optional: true, required: false
  private _saveLocalWebCache?: boolean | cdktf.IResolvable; 
  public get saveLocalWebCache() {
    return this.getBooleanAttribute('save_local_web_cache');
  }
  public set saveLocalWebCache(value: boolean | cdktf.IResolvable) {
    this._saveLocalWebCache = value;
  }
  public resetSaveLocalWebCache() {
    this._saveLocalWebCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveLocalWebCacheInput() {
    return this._saveLocalWebCache;
  }

  // synchronize_contacts - computed: false, optional: true, required: false
  private _synchronizeContacts?: string; 
  public get synchronizeContacts() {
    return this.getStringAttribute('synchronize_contacts');
  }
  public set synchronizeContacts(value: string) {
    this._synchronizeContacts = value;
  }
  public resetSynchronizeContacts() {
    this._synchronizeContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizeContactsInput() {
    return this._synchronizeContacts;
  }
}
export interface ManagementMobileProfileClientCustomization {
  /**
  * Allow sync business calendar to device calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_calendar ManagementMobileProfile#allow_calendar}
  */
  readonly allowCalendar?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable contacts app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_contacts ManagementMobileProfile#allow_contacts}
  */
  readonly allowContacts?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable email app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_mail ManagementMobileProfile#allow_mail}
  */
  readonly allowMail?: boolean | cdktf.IResolvable;
  /**
  * Allow sync business notes to device notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_notes_sync ManagementMobileProfile#allow_notes_sync}
  */
  readonly allowNotesSync?: boolean | cdktf.IResolvable;
  /**
  * Allow the appearance of 'Saved file app' in the app list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_saved_file_apps ManagementMobileProfile#allow_saved_file_apps}
  */
  readonly allowSavedFileApps?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable Messages app (depends on Mail app).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_secure_chat ManagementMobileProfile#allow_secure_chat}
  */
  readonly allowSecureChat?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable Tasks app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_tasks ManagementMobileProfile#allow_tasks}
  */
  readonly allowTasks?: boolean | cdktf.IResolvable;
  /**
  * Configure the application display colors in Dark mode. 6 hex digits that define RGB color - relevant for IOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#app_theme_color_dark ManagementMobileProfile#app_theme_color_dark}
  */
  readonly appThemeColorDark?: string;
  /**
  * Configure the application display colors in light mode. 6 hex digits that define RGB color - relevant for IOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#app_theme_color_light ManagementMobileProfile#app_theme_color_light}
  */
  readonly appThemeColorLight?: string;
  /**
  * message to show users when certificate is expired - for admin to fill - can contain only English characters, digits, comma, spaces and points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#certificate_expire_message ManagementMobileProfile#certificate_expire_message}
  */
  readonly certificateExpireMessage?: string;
}

export function managementMobileProfileClientCustomizationToTerraform(struct?: ManagementMobileProfileClientCustomizationOutputReference | ManagementMobileProfileClientCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_calendar: cdktf.booleanToTerraform(struct!.allowCalendar),
    allow_contacts: cdktf.booleanToTerraform(struct!.allowContacts),
    allow_mail: cdktf.booleanToTerraform(struct!.allowMail),
    allow_notes_sync: cdktf.booleanToTerraform(struct!.allowNotesSync),
    allow_saved_file_apps: cdktf.booleanToTerraform(struct!.allowSavedFileApps),
    allow_secure_chat: cdktf.booleanToTerraform(struct!.allowSecureChat),
    allow_tasks: cdktf.booleanToTerraform(struct!.allowTasks),
    app_theme_color_dark: cdktf.stringToTerraform(struct!.appThemeColorDark),
    app_theme_color_light: cdktf.stringToTerraform(struct!.appThemeColorLight),
    certificate_expire_message: cdktf.stringToTerraform(struct!.certificateExpireMessage),
  }
}


export function managementMobileProfileClientCustomizationToHclTerraform(struct?: ManagementMobileProfileClientCustomizationOutputReference | ManagementMobileProfileClientCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_calendar: {
      value: cdktf.booleanToHclTerraform(struct!.allowCalendar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_contacts: {
      value: cdktf.booleanToHclTerraform(struct!.allowContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_mail: {
      value: cdktf.booleanToHclTerraform(struct!.allowMail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_notes_sync: {
      value: cdktf.booleanToHclTerraform(struct!.allowNotesSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_saved_file_apps: {
      value: cdktf.booleanToHclTerraform(struct!.allowSavedFileApps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_secure_chat: {
      value: cdktf.booleanToHclTerraform(struct!.allowSecureChat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.allowTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_theme_color_dark: {
      value: cdktf.stringToHclTerraform(struct!.appThemeColorDark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_theme_color_light: {
      value: cdktf.stringToHclTerraform(struct!.appThemeColorLight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_expire_message: {
      value: cdktf.stringToHclTerraform(struct!.certificateExpireMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementMobileProfileClientCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementMobileProfileClientCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCalendar !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCalendar = this._allowCalendar;
    }
    if (this._allowContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowContacts = this._allowContacts;
    }
    if (this._allowMail !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMail = this._allowMail;
    }
    if (this._allowNotesSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNotesSync = this._allowNotesSync;
    }
    if (this._allowSavedFileApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSavedFileApps = this._allowSavedFileApps;
    }
    if (this._allowSecureChat !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSecureChat = this._allowSecureChat;
    }
    if (this._allowTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTasks = this._allowTasks;
    }
    if (this._appThemeColorDark !== undefined) {
      hasAnyValues = true;
      internalValueResult.appThemeColorDark = this._appThemeColorDark;
    }
    if (this._appThemeColorLight !== undefined) {
      hasAnyValues = true;
      internalValueResult.appThemeColorLight = this._appThemeColorLight;
    }
    if (this._certificateExpireMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateExpireMessage = this._certificateExpireMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementMobileProfileClientCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCalendar = undefined;
      this._allowContacts = undefined;
      this._allowMail = undefined;
      this._allowNotesSync = undefined;
      this._allowSavedFileApps = undefined;
      this._allowSecureChat = undefined;
      this._allowTasks = undefined;
      this._appThemeColorDark = undefined;
      this._appThemeColorLight = undefined;
      this._certificateExpireMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCalendar = value.allowCalendar;
      this._allowContacts = value.allowContacts;
      this._allowMail = value.allowMail;
      this._allowNotesSync = value.allowNotesSync;
      this._allowSavedFileApps = value.allowSavedFileApps;
      this._allowSecureChat = value.allowSecureChat;
      this._allowTasks = value.allowTasks;
      this._appThemeColorDark = value.appThemeColorDark;
      this._appThemeColorLight = value.appThemeColorLight;
      this._certificateExpireMessage = value.certificateExpireMessage;
    }
  }

  // allow_calendar - computed: false, optional: true, required: false
  private _allowCalendar?: boolean | cdktf.IResolvable; 
  public get allowCalendar() {
    return this.getBooleanAttribute('allow_calendar');
  }
  public set allowCalendar(value: boolean | cdktf.IResolvable) {
    this._allowCalendar = value;
  }
  public resetAllowCalendar() {
    this._allowCalendar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCalendarInput() {
    return this._allowCalendar;
  }

  // allow_contacts - computed: false, optional: true, required: false
  private _allowContacts?: boolean | cdktf.IResolvable; 
  public get allowContacts() {
    return this.getBooleanAttribute('allow_contacts');
  }
  public set allowContacts(value: boolean | cdktf.IResolvable) {
    this._allowContacts = value;
  }
  public resetAllowContacts() {
    this._allowContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContactsInput() {
    return this._allowContacts;
  }

  // allow_mail - computed: false, optional: true, required: false
  private _allowMail?: boolean | cdktf.IResolvable; 
  public get allowMail() {
    return this.getBooleanAttribute('allow_mail');
  }
  public set allowMail(value: boolean | cdktf.IResolvable) {
    this._allowMail = value;
  }
  public resetAllowMail() {
    this._allowMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMailInput() {
    return this._allowMail;
  }

  // allow_notes_sync - computed: false, optional: true, required: false
  private _allowNotesSync?: boolean | cdktf.IResolvable; 
  public get allowNotesSync() {
    return this.getBooleanAttribute('allow_notes_sync');
  }
  public set allowNotesSync(value: boolean | cdktf.IResolvable) {
    this._allowNotesSync = value;
  }
  public resetAllowNotesSync() {
    this._allowNotesSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNotesSyncInput() {
    return this._allowNotesSync;
  }

  // allow_saved_file_apps - computed: false, optional: true, required: false
  private _allowSavedFileApps?: boolean | cdktf.IResolvable; 
  public get allowSavedFileApps() {
    return this.getBooleanAttribute('allow_saved_file_apps');
  }
  public set allowSavedFileApps(value: boolean | cdktf.IResolvable) {
    this._allowSavedFileApps = value;
  }
  public resetAllowSavedFileApps() {
    this._allowSavedFileApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSavedFileAppsInput() {
    return this._allowSavedFileApps;
  }

  // allow_secure_chat - computed: false, optional: true, required: false
  private _allowSecureChat?: boolean | cdktf.IResolvable; 
  public get allowSecureChat() {
    return this.getBooleanAttribute('allow_secure_chat');
  }
  public set allowSecureChat(value: boolean | cdktf.IResolvable) {
    this._allowSecureChat = value;
  }
  public resetAllowSecureChat() {
    this._allowSecureChat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSecureChatInput() {
    return this._allowSecureChat;
  }

  // allow_tasks - computed: false, optional: true, required: false
  private _allowTasks?: boolean | cdktf.IResolvable; 
  public get allowTasks() {
    return this.getBooleanAttribute('allow_tasks');
  }
  public set allowTasks(value: boolean | cdktf.IResolvable) {
    this._allowTasks = value;
  }
  public resetAllowTasks() {
    this._allowTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTasksInput() {
    return this._allowTasks;
  }

  // app_theme_color_dark - computed: false, optional: true, required: false
  private _appThemeColorDark?: string; 
  public get appThemeColorDark() {
    return this.getStringAttribute('app_theme_color_dark');
  }
  public set appThemeColorDark(value: string) {
    this._appThemeColorDark = value;
  }
  public resetAppThemeColorDark() {
    this._appThemeColorDark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appThemeColorDarkInput() {
    return this._appThemeColorDark;
  }

  // app_theme_color_light - computed: false, optional: true, required: false
  private _appThemeColorLight?: string; 
  public get appThemeColorLight() {
    return this.getStringAttribute('app_theme_color_light');
  }
  public set appThemeColorLight(value: string) {
    this._appThemeColorLight = value;
  }
  public resetAppThemeColorLight() {
    this._appThemeColorLight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appThemeColorLightInput() {
    return this._appThemeColorLight;
  }

  // certificate_expire_message - computed: false, optional: true, required: false
  private _certificateExpireMessage?: string; 
  public get certificateExpireMessage() {
    return this.getStringAttribute('certificate_expire_message');
  }
  public set certificateExpireMessage(value: string) {
    this._certificateExpireMessage = value;
  }
  public resetCertificateExpireMessage() {
    this._certificateExpireMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateExpireMessageInput() {
    return this._certificateExpireMessage;
  }
}
export interface ManagementMobileProfileDataLeakPrevention {
  /**
  * Accept protected files with these extensions from external apps to your app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#accept_protected_file_extensions ManagementMobileProfile#accept_protected_file_extensions}
  */
  readonly acceptProtectedFileExtensions?: string[];
  /**
  * Accept unprotected files with these extensions from external apps to your app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#accept_unprotected_file_extensions ManagementMobileProfile#accept_unprotected_file_extensions}
  */
  readonly acceptUnprotectedFileExtensions?: string[];
  /**
  * Allow copy paste of mail content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_copy_paste ManagementMobileProfile#allow_copy_paste}
  */
  readonly allowCopyPaste?: boolean | cdktf.IResolvable;
  /**
  * Allow import media from gallery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_import_from_gallery ManagementMobileProfile#allow_import_from_gallery}
  */
  readonly allowImportFromGallery?: boolean | cdktf.IResolvable;
  /**
  * Allow the camera to be used from your app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_taking_photos_and_videos ManagementMobileProfile#allow_taking_photos_and_videos}
  */
  readonly allowTakingPhotosAndVideos?: boolean | cdktf.IResolvable;
  /**
  * exclusion of domains which attachments are allowed to be sent, even that shared policy prevents sharing these kinds of attached files - can contain only English characters, digits, comma, spaces and points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allowed_domains_forward_attachment ManagementMobileProfile#allowed_domains_forward_attachment}
  */
  readonly allowedDomainsForwardAttachment?: string;
  /**
  * Allow share mail attachments with external mails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#block_forward_attachments ManagementMobileProfile#block_forward_attachments}
  */
  readonly blockForwardAttachments?: boolean | cdktf.IResolvable;
  /**
  * If true - you can't make a screenshot from your app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#block_screenshot ManagementMobileProfile#block_screenshot}
  */
  readonly blockScreenshot?: boolean | cdktf.IResolvable;
  /**
  * Offer Capsule as a viewer for external protected documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#offer_capsule_as_viewer ManagementMobileProfile#offer_capsule_as_viewer}
  */
  readonly offerCapsuleAsViewer?: boolean | cdktf.IResolvable;
  /**
  * Open the following extensions from your app with external apps when they cannot be opened with Capsule viewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#open_extension_with_external_app ManagementMobileProfile#open_extension_with_external_app}
  */
  readonly openExtensionWithExternalApp?: string[];
  /**
  * Share protected files extensions to external apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#share_protected_extension ManagementMobileProfile#share_protected_extension}
  */
  readonly shareProtectedExtension?: string[];
  /**
  * Share unprotected files extensions to external apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#share_unprotected_extension ManagementMobileProfile#share_unprotected_extension}
  */
  readonly shareUnprotectedExtension?: string[];
}

export function managementMobileProfileDataLeakPreventionToTerraform(struct?: ManagementMobileProfileDataLeakPreventionOutputReference | ManagementMobileProfileDataLeakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_protected_file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptProtectedFileExtensions),
    accept_unprotected_file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptUnprotectedFileExtensions),
    allow_copy_paste: cdktf.booleanToTerraform(struct!.allowCopyPaste),
    allow_import_from_gallery: cdktf.booleanToTerraform(struct!.allowImportFromGallery),
    allow_taking_photos_and_videos: cdktf.booleanToTerraform(struct!.allowTakingPhotosAndVideos),
    allowed_domains_forward_attachment: cdktf.stringToTerraform(struct!.allowedDomainsForwardAttachment),
    block_forward_attachments: cdktf.booleanToTerraform(struct!.blockForwardAttachments),
    block_screenshot: cdktf.booleanToTerraform(struct!.blockScreenshot),
    offer_capsule_as_viewer: cdktf.booleanToTerraform(struct!.offerCapsuleAsViewer),
    open_extension_with_external_app: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.openExtensionWithExternalApp),
    share_protected_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shareProtectedExtension),
    share_unprotected_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shareUnprotectedExtension),
  }
}


export function managementMobileProfileDataLeakPreventionToHclTerraform(struct?: ManagementMobileProfileDataLeakPreventionOutputReference | ManagementMobileProfileDataLeakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_protected_file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptProtectedFileExtensions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accept_unprotected_file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptUnprotectedFileExtensions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allow_copy_paste: {
      value: cdktf.booleanToHclTerraform(struct!.allowCopyPaste),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_import_from_gallery: {
      value: cdktf.booleanToHclTerraform(struct!.allowImportFromGallery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_taking_photos_and_videos: {
      value: cdktf.booleanToHclTerraform(struct!.allowTakingPhotosAndVideos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains_forward_attachment: {
      value: cdktf.stringToHclTerraform(struct!.allowedDomainsForwardAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_forward_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.blockForwardAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_screenshot: {
      value: cdktf.booleanToHclTerraform(struct!.blockScreenshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    offer_capsule_as_viewer: {
      value: cdktf.booleanToHclTerraform(struct!.offerCapsuleAsViewer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_extension_with_external_app: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.openExtensionWithExternalApp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    share_protected_extension: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shareProtectedExtension),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    share_unprotected_extension: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shareUnprotectedExtension),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementMobileProfileDataLeakPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementMobileProfileDataLeakPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptProtectedFileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptProtectedFileExtensions = this._acceptProtectedFileExtensions;
    }
    if (this._acceptUnprotectedFileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptUnprotectedFileExtensions = this._acceptUnprotectedFileExtensions;
    }
    if (this._allowCopyPaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCopyPaste = this._allowCopyPaste;
    }
    if (this._allowImportFromGallery !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowImportFromGallery = this._allowImportFromGallery;
    }
    if (this._allowTakingPhotosAndVideos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTakingPhotosAndVideos = this._allowTakingPhotosAndVideos;
    }
    if (this._allowedDomainsForwardAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomainsForwardAttachment = this._allowedDomainsForwardAttachment;
    }
    if (this._blockForwardAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockForwardAttachments = this._blockForwardAttachments;
    }
    if (this._blockScreenshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockScreenshot = this._blockScreenshot;
    }
    if (this._offerCapsuleAsViewer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offerCapsuleAsViewer = this._offerCapsuleAsViewer;
    }
    if (this._openExtensionWithExternalApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.openExtensionWithExternalApp = this._openExtensionWithExternalApp;
    }
    if (this._shareProtectedExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProtectedExtension = this._shareProtectedExtension;
    }
    if (this._shareUnprotectedExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareUnprotectedExtension = this._shareUnprotectedExtension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementMobileProfileDataLeakPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptProtectedFileExtensions = undefined;
      this._acceptUnprotectedFileExtensions = undefined;
      this._allowCopyPaste = undefined;
      this._allowImportFromGallery = undefined;
      this._allowTakingPhotosAndVideos = undefined;
      this._allowedDomainsForwardAttachment = undefined;
      this._blockForwardAttachments = undefined;
      this._blockScreenshot = undefined;
      this._offerCapsuleAsViewer = undefined;
      this._openExtensionWithExternalApp = undefined;
      this._shareProtectedExtension = undefined;
      this._shareUnprotectedExtension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptProtectedFileExtensions = value.acceptProtectedFileExtensions;
      this._acceptUnprotectedFileExtensions = value.acceptUnprotectedFileExtensions;
      this._allowCopyPaste = value.allowCopyPaste;
      this._allowImportFromGallery = value.allowImportFromGallery;
      this._allowTakingPhotosAndVideos = value.allowTakingPhotosAndVideos;
      this._allowedDomainsForwardAttachment = value.allowedDomainsForwardAttachment;
      this._blockForwardAttachments = value.blockForwardAttachments;
      this._blockScreenshot = value.blockScreenshot;
      this._offerCapsuleAsViewer = value.offerCapsuleAsViewer;
      this._openExtensionWithExternalApp = value.openExtensionWithExternalApp;
      this._shareProtectedExtension = value.shareProtectedExtension;
      this._shareUnprotectedExtension = value.shareUnprotectedExtension;
    }
  }

  // accept_protected_file_extensions - computed: false, optional: true, required: false
  private _acceptProtectedFileExtensions?: string[]; 
  public get acceptProtectedFileExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('accept_protected_file_extensions'));
  }
  public set acceptProtectedFileExtensions(value: string[]) {
    this._acceptProtectedFileExtensions = value;
  }
  public resetAcceptProtectedFileExtensions() {
    this._acceptProtectedFileExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptProtectedFileExtensionsInput() {
    return this._acceptProtectedFileExtensions;
  }

  // accept_unprotected_file_extensions - computed: false, optional: true, required: false
  private _acceptUnprotectedFileExtensions?: string[]; 
  public get acceptUnprotectedFileExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('accept_unprotected_file_extensions'));
  }
  public set acceptUnprotectedFileExtensions(value: string[]) {
    this._acceptUnprotectedFileExtensions = value;
  }
  public resetAcceptUnprotectedFileExtensions() {
    this._acceptUnprotectedFileExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUnprotectedFileExtensionsInput() {
    return this._acceptUnprotectedFileExtensions;
  }

  // allow_copy_paste - computed: false, optional: true, required: false
  private _allowCopyPaste?: boolean | cdktf.IResolvable; 
  public get allowCopyPaste() {
    return this.getBooleanAttribute('allow_copy_paste');
  }
  public set allowCopyPaste(value: boolean | cdktf.IResolvable) {
    this._allowCopyPaste = value;
  }
  public resetAllowCopyPaste() {
    this._allowCopyPaste = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCopyPasteInput() {
    return this._allowCopyPaste;
  }

  // allow_import_from_gallery - computed: false, optional: true, required: false
  private _allowImportFromGallery?: boolean | cdktf.IResolvable; 
  public get allowImportFromGallery() {
    return this.getBooleanAttribute('allow_import_from_gallery');
  }
  public set allowImportFromGallery(value: boolean | cdktf.IResolvable) {
    this._allowImportFromGallery = value;
  }
  public resetAllowImportFromGallery() {
    this._allowImportFromGallery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowImportFromGalleryInput() {
    return this._allowImportFromGallery;
  }

  // allow_taking_photos_and_videos - computed: false, optional: true, required: false
  private _allowTakingPhotosAndVideos?: boolean | cdktf.IResolvable; 
  public get allowTakingPhotosAndVideos() {
    return this.getBooleanAttribute('allow_taking_photos_and_videos');
  }
  public set allowTakingPhotosAndVideos(value: boolean | cdktf.IResolvable) {
    this._allowTakingPhotosAndVideos = value;
  }
  public resetAllowTakingPhotosAndVideos() {
    this._allowTakingPhotosAndVideos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTakingPhotosAndVideosInput() {
    return this._allowTakingPhotosAndVideos;
  }

  // allowed_domains_forward_attachment - computed: false, optional: true, required: false
  private _allowedDomainsForwardAttachment?: string; 
  public get allowedDomainsForwardAttachment() {
    return this.getStringAttribute('allowed_domains_forward_attachment');
  }
  public set allowedDomainsForwardAttachment(value: string) {
    this._allowedDomainsForwardAttachment = value;
  }
  public resetAllowedDomainsForwardAttachment() {
    this._allowedDomainsForwardAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsForwardAttachmentInput() {
    return this._allowedDomainsForwardAttachment;
  }

  // block_forward_attachments - computed: false, optional: true, required: false
  private _blockForwardAttachments?: boolean | cdktf.IResolvable; 
  public get blockForwardAttachments() {
    return this.getBooleanAttribute('block_forward_attachments');
  }
  public set blockForwardAttachments(value: boolean | cdktf.IResolvable) {
    this._blockForwardAttachments = value;
  }
  public resetBlockForwardAttachments() {
    this._blockForwardAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockForwardAttachmentsInput() {
    return this._blockForwardAttachments;
  }

  // block_screenshot - computed: false, optional: true, required: false
  private _blockScreenshot?: boolean | cdktf.IResolvable; 
  public get blockScreenshot() {
    return this.getBooleanAttribute('block_screenshot');
  }
  public set blockScreenshot(value: boolean | cdktf.IResolvable) {
    this._blockScreenshot = value;
  }
  public resetBlockScreenshot() {
    this._blockScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockScreenshotInput() {
    return this._blockScreenshot;
  }

  // offer_capsule_as_viewer - computed: false, optional: true, required: false
  private _offerCapsuleAsViewer?: boolean | cdktf.IResolvable; 
  public get offerCapsuleAsViewer() {
    return this.getBooleanAttribute('offer_capsule_as_viewer');
  }
  public set offerCapsuleAsViewer(value: boolean | cdktf.IResolvable) {
    this._offerCapsuleAsViewer = value;
  }
  public resetOfferCapsuleAsViewer() {
    this._offerCapsuleAsViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerCapsuleAsViewerInput() {
    return this._offerCapsuleAsViewer;
  }

  // open_extension_with_external_app - computed: false, optional: true, required: false
  private _openExtensionWithExternalApp?: string[]; 
  public get openExtensionWithExternalApp() {
    return cdktf.Fn.tolist(this.getListAttribute('open_extension_with_external_app'));
  }
  public set openExtensionWithExternalApp(value: string[]) {
    this._openExtensionWithExternalApp = value;
  }
  public resetOpenExtensionWithExternalApp() {
    this._openExtensionWithExternalApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openExtensionWithExternalAppInput() {
    return this._openExtensionWithExternalApp;
  }

  // share_protected_extension - computed: false, optional: true, required: false
  private _shareProtectedExtension?: string[]; 
  public get shareProtectedExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('share_protected_extension'));
  }
  public set shareProtectedExtension(value: string[]) {
    this._shareProtectedExtension = value;
  }
  public resetShareProtectedExtension() {
    this._shareProtectedExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProtectedExtensionInput() {
    return this._shareProtectedExtension;
  }

  // share_unprotected_extension - computed: false, optional: true, required: false
  private _shareUnprotectedExtension?: string[]; 
  public get shareUnprotectedExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('share_unprotected_extension'));
  }
  public set shareUnprotectedExtension(value: string[]) {
    this._shareUnprotectedExtension = value;
  }
  public resetShareUnprotectedExtension() {
    this._shareUnprotectedExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareUnprotectedExtensionInput() {
    return this._shareUnprotectedExtension;
  }
}
export interface ManagementMobileProfileHarmonyMobile {
  /**
  * Device configuration - response to malicious behavior (configuration for Harmony SDK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#compromised_behavior ManagementMobileProfile#compromised_behavior}
  */
  readonly compromisedBehavior?: string;
  /**
  * Enable/disable Harmony SDK - cannot be enable if Harmony Mobile Application is enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#enable_harmony_mobile_sdk ManagementMobileProfile#enable_harmony_mobile_sdk}
  */
  readonly enableHarmonyMobileSdk?: boolean | cdktf.IResolvable;
  /**
  * License for Harmony Mobile Sdk (configuration for Harmony SDK) - can contain only English characters, digits, comma, spaces and point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#harmony_mobile_sdk_license ManagementMobileProfile#harmony_mobile_sdk_license}
  */
  readonly harmonyMobileSdkLicense?: string;
  /**
  * Behavior when App is identified as malicious (configuration for Harmony SDK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#malware_behavior ManagementMobileProfile#malware_behavior}
  */
  readonly malwareBehavior?: string;
  /**
  * Behavior when there is a network man-in-the-middle attack (configuration for Harmony SDK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#man_in_the_middle_attack ManagementMobileProfile#man_in_the_middle_attack}
  */
  readonly manInTheMiddleAttack?: string;
  /**
  * Behavior when Device OS is compromised (configuration for Harmony SDK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#os_integrity_compromised ManagementMobileProfile#os_integrity_compromised}
  */
  readonly osIntegrityCompromised?: string;
  /**
  * What is the action if there is high risk found by Harmony Mobile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_high_risk_action ManagementMobileProfile#protect_high_risk_action}
  */
  readonly protectHighRiskAction?: string;
  /**
  * The message can contain only English characters, digits, comma, spaces and points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_high_risk_message ManagementMobileProfile#protect_high_risk_message}
  */
  readonly protectHighRiskMessage?: string;
  /**
  * What is the action if there is medium risk found by Harmony Mobile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_medium_risk_action ManagementMobileProfile#protect_medium_risk_action}
  */
  readonly protectMediumRiskAction?: string;
  /**
  * The message can contain only English characters, digits, comma, spaces and points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_medium_risk_message ManagementMobileProfile#protect_medium_risk_message}
  */
  readonly protectMediumRiskMessage?: string;
  /**
  * What is the action if there is policy violation (configuration for Harmony Mobile).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_not_activated_action ManagementMobileProfile#protect_not_activated_action}
  */
  readonly protectNotActivatedAction?: string;
  /**
  * The message can contain only English characters, digits, comma, spaces and points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_not_activated_message ManagementMobileProfile#protect_not_activated_message}
  */
  readonly protectNotActivatedMessage?: string;
  /**
  * Enable/disable Protect Application- cannot be enable if Harmony SDK is enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#protect_policy_enabled ManagementMobileProfile#protect_policy_enabled}
  */
  readonly protectPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Behavior when App is suspected as malicious (configuration for Harmony SDK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#suspicious_app ManagementMobileProfile#suspicious_app}
  */
  readonly suspiciousApp?: string;
  /**
  * Behavior when a certificate profile has been installed allowing the installing of apps on device from unknown source - iOS only (configuration for Harmony SDK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#suspicious_enterprise_certificate ManagementMobileProfile#suspicious_enterprise_certificate}
  */
  readonly suspiciousEnterpriseCertificate?: string;
}

export function managementMobileProfileHarmonyMobileToTerraform(struct?: ManagementMobileProfileHarmonyMobileOutputReference | ManagementMobileProfileHarmonyMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compromised_behavior: cdktf.stringToTerraform(struct!.compromisedBehavior),
    enable_harmony_mobile_sdk: cdktf.booleanToTerraform(struct!.enableHarmonyMobileSdk),
    harmony_mobile_sdk_license: cdktf.stringToTerraform(struct!.harmonyMobileSdkLicense),
    malware_behavior: cdktf.stringToTerraform(struct!.malwareBehavior),
    man_in_the_middle_attack: cdktf.stringToTerraform(struct!.manInTheMiddleAttack),
    os_integrity_compromised: cdktf.stringToTerraform(struct!.osIntegrityCompromised),
    protect_high_risk_action: cdktf.stringToTerraform(struct!.protectHighRiskAction),
    protect_high_risk_message: cdktf.stringToTerraform(struct!.protectHighRiskMessage),
    protect_medium_risk_action: cdktf.stringToTerraform(struct!.protectMediumRiskAction),
    protect_medium_risk_message: cdktf.stringToTerraform(struct!.protectMediumRiskMessage),
    protect_not_activated_action: cdktf.stringToTerraform(struct!.protectNotActivatedAction),
    protect_not_activated_message: cdktf.stringToTerraform(struct!.protectNotActivatedMessage),
    protect_policy_enabled: cdktf.booleanToTerraform(struct!.protectPolicyEnabled),
    suspicious_app: cdktf.stringToTerraform(struct!.suspiciousApp),
    suspicious_enterprise_certificate: cdktf.stringToTerraform(struct!.suspiciousEnterpriseCertificate),
  }
}


export function managementMobileProfileHarmonyMobileToHclTerraform(struct?: ManagementMobileProfileHarmonyMobileOutputReference | ManagementMobileProfileHarmonyMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compromised_behavior: {
      value: cdktf.stringToHclTerraform(struct!.compromisedBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_harmony_mobile_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.enableHarmonyMobileSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    harmony_mobile_sdk_license: {
      value: cdktf.stringToHclTerraform(struct!.harmonyMobileSdkLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_behavior: {
      value: cdktf.stringToHclTerraform(struct!.malwareBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    man_in_the_middle_attack: {
      value: cdktf.stringToHclTerraform(struct!.manInTheMiddleAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_integrity_compromised: {
      value: cdktf.stringToHclTerraform(struct!.osIntegrityCompromised),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_high_risk_action: {
      value: cdktf.stringToHclTerraform(struct!.protectHighRiskAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_high_risk_message: {
      value: cdktf.stringToHclTerraform(struct!.protectHighRiskMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_medium_risk_action: {
      value: cdktf.stringToHclTerraform(struct!.protectMediumRiskAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_medium_risk_message: {
      value: cdktf.stringToHclTerraform(struct!.protectMediumRiskMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_not_activated_action: {
      value: cdktf.stringToHclTerraform(struct!.protectNotActivatedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_not_activated_message: {
      value: cdktf.stringToHclTerraform(struct!.protectNotActivatedMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_policy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.protectPolicyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspicious_app: {
      value: cdktf.stringToHclTerraform(struct!.suspiciousApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspicious_enterprise_certificate: {
      value: cdktf.stringToHclTerraform(struct!.suspiciousEnterpriseCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementMobileProfileHarmonyMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementMobileProfileHarmonyMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compromisedBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.compromisedBehavior = this._compromisedBehavior;
    }
    if (this._enableHarmonyMobileSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHarmonyMobileSdk = this._enableHarmonyMobileSdk;
    }
    if (this._harmonyMobileSdkLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.harmonyMobileSdkLicense = this._harmonyMobileSdkLicense;
    }
    if (this._malwareBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareBehavior = this._malwareBehavior;
    }
    if (this._manInTheMiddleAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.manInTheMiddleAttack = this._manInTheMiddleAttack;
    }
    if (this._osIntegrityCompromised !== undefined) {
      hasAnyValues = true;
      internalValueResult.osIntegrityCompromised = this._osIntegrityCompromised;
    }
    if (this._protectHighRiskAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectHighRiskAction = this._protectHighRiskAction;
    }
    if (this._protectHighRiskMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectHighRiskMessage = this._protectHighRiskMessage;
    }
    if (this._protectMediumRiskAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectMediumRiskAction = this._protectMediumRiskAction;
    }
    if (this._protectMediumRiskMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectMediumRiskMessage = this._protectMediumRiskMessage;
    }
    if (this._protectNotActivatedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectNotActivatedAction = this._protectNotActivatedAction;
    }
    if (this._protectNotActivatedMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectNotActivatedMessage = this._protectNotActivatedMessage;
    }
    if (this._protectPolicyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectPolicyEnabled = this._protectPolicyEnabled;
    }
    if (this._suspiciousApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspiciousApp = this._suspiciousApp;
    }
    if (this._suspiciousEnterpriseCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspiciousEnterpriseCertificate = this._suspiciousEnterpriseCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementMobileProfileHarmonyMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compromisedBehavior = undefined;
      this._enableHarmonyMobileSdk = undefined;
      this._harmonyMobileSdkLicense = undefined;
      this._malwareBehavior = undefined;
      this._manInTheMiddleAttack = undefined;
      this._osIntegrityCompromised = undefined;
      this._protectHighRiskAction = undefined;
      this._protectHighRiskMessage = undefined;
      this._protectMediumRiskAction = undefined;
      this._protectMediumRiskMessage = undefined;
      this._protectNotActivatedAction = undefined;
      this._protectNotActivatedMessage = undefined;
      this._protectPolicyEnabled = undefined;
      this._suspiciousApp = undefined;
      this._suspiciousEnterpriseCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compromisedBehavior = value.compromisedBehavior;
      this._enableHarmonyMobileSdk = value.enableHarmonyMobileSdk;
      this._harmonyMobileSdkLicense = value.harmonyMobileSdkLicense;
      this._malwareBehavior = value.malwareBehavior;
      this._manInTheMiddleAttack = value.manInTheMiddleAttack;
      this._osIntegrityCompromised = value.osIntegrityCompromised;
      this._protectHighRiskAction = value.protectHighRiskAction;
      this._protectHighRiskMessage = value.protectHighRiskMessage;
      this._protectMediumRiskAction = value.protectMediumRiskAction;
      this._protectMediumRiskMessage = value.protectMediumRiskMessage;
      this._protectNotActivatedAction = value.protectNotActivatedAction;
      this._protectNotActivatedMessage = value.protectNotActivatedMessage;
      this._protectPolicyEnabled = value.protectPolicyEnabled;
      this._suspiciousApp = value.suspiciousApp;
      this._suspiciousEnterpriseCertificate = value.suspiciousEnterpriseCertificate;
    }
  }

  // compromised_behavior - computed: false, optional: true, required: false
  private _compromisedBehavior?: string; 
  public get compromisedBehavior() {
    return this.getStringAttribute('compromised_behavior');
  }
  public set compromisedBehavior(value: string) {
    this._compromisedBehavior = value;
  }
  public resetCompromisedBehavior() {
    this._compromisedBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compromisedBehaviorInput() {
    return this._compromisedBehavior;
  }

  // enable_harmony_mobile_sdk - computed: false, optional: true, required: false
  private _enableHarmonyMobileSdk?: boolean | cdktf.IResolvable; 
  public get enableHarmonyMobileSdk() {
    return this.getBooleanAttribute('enable_harmony_mobile_sdk');
  }
  public set enableHarmonyMobileSdk(value: boolean | cdktf.IResolvable) {
    this._enableHarmonyMobileSdk = value;
  }
  public resetEnableHarmonyMobileSdk() {
    this._enableHarmonyMobileSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHarmonyMobileSdkInput() {
    return this._enableHarmonyMobileSdk;
  }

  // harmony_mobile_sdk_license - computed: false, optional: true, required: false
  private _harmonyMobileSdkLicense?: string; 
  public get harmonyMobileSdkLicense() {
    return this.getStringAttribute('harmony_mobile_sdk_license');
  }
  public set harmonyMobileSdkLicense(value: string) {
    this._harmonyMobileSdkLicense = value;
  }
  public resetHarmonyMobileSdkLicense() {
    this._harmonyMobileSdkLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harmonyMobileSdkLicenseInput() {
    return this._harmonyMobileSdkLicense;
  }

  // malware_behavior - computed: false, optional: true, required: false
  private _malwareBehavior?: string; 
  public get malwareBehavior() {
    return this.getStringAttribute('malware_behavior');
  }
  public set malwareBehavior(value: string) {
    this._malwareBehavior = value;
  }
  public resetMalwareBehavior() {
    this._malwareBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareBehaviorInput() {
    return this._malwareBehavior;
  }

  // man_in_the_middle_attack - computed: false, optional: true, required: false
  private _manInTheMiddleAttack?: string; 
  public get manInTheMiddleAttack() {
    return this.getStringAttribute('man_in_the_middle_attack');
  }
  public set manInTheMiddleAttack(value: string) {
    this._manInTheMiddleAttack = value;
  }
  public resetManInTheMiddleAttack() {
    this._manInTheMiddleAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manInTheMiddleAttackInput() {
    return this._manInTheMiddleAttack;
  }

  // os_integrity_compromised - computed: false, optional: true, required: false
  private _osIntegrityCompromised?: string; 
  public get osIntegrityCompromised() {
    return this.getStringAttribute('os_integrity_compromised');
  }
  public set osIntegrityCompromised(value: string) {
    this._osIntegrityCompromised = value;
  }
  public resetOsIntegrityCompromised() {
    this._osIntegrityCompromised = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osIntegrityCompromisedInput() {
    return this._osIntegrityCompromised;
  }

  // protect_high_risk_action - computed: false, optional: true, required: false
  private _protectHighRiskAction?: string; 
  public get protectHighRiskAction() {
    return this.getStringAttribute('protect_high_risk_action');
  }
  public set protectHighRiskAction(value: string) {
    this._protectHighRiskAction = value;
  }
  public resetProtectHighRiskAction() {
    this._protectHighRiskAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectHighRiskActionInput() {
    return this._protectHighRiskAction;
  }

  // protect_high_risk_message - computed: false, optional: true, required: false
  private _protectHighRiskMessage?: string; 
  public get protectHighRiskMessage() {
    return this.getStringAttribute('protect_high_risk_message');
  }
  public set protectHighRiskMessage(value: string) {
    this._protectHighRiskMessage = value;
  }
  public resetProtectHighRiskMessage() {
    this._protectHighRiskMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectHighRiskMessageInput() {
    return this._protectHighRiskMessage;
  }

  // protect_medium_risk_action - computed: false, optional: true, required: false
  private _protectMediumRiskAction?: string; 
  public get protectMediumRiskAction() {
    return this.getStringAttribute('protect_medium_risk_action');
  }
  public set protectMediumRiskAction(value: string) {
    this._protectMediumRiskAction = value;
  }
  public resetProtectMediumRiskAction() {
    this._protectMediumRiskAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectMediumRiskActionInput() {
    return this._protectMediumRiskAction;
  }

  // protect_medium_risk_message - computed: false, optional: true, required: false
  private _protectMediumRiskMessage?: string; 
  public get protectMediumRiskMessage() {
    return this.getStringAttribute('protect_medium_risk_message');
  }
  public set protectMediumRiskMessage(value: string) {
    this._protectMediumRiskMessage = value;
  }
  public resetProtectMediumRiskMessage() {
    this._protectMediumRiskMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectMediumRiskMessageInput() {
    return this._protectMediumRiskMessage;
  }

  // protect_not_activated_action - computed: false, optional: true, required: false
  private _protectNotActivatedAction?: string; 
  public get protectNotActivatedAction() {
    return this.getStringAttribute('protect_not_activated_action');
  }
  public set protectNotActivatedAction(value: string) {
    this._protectNotActivatedAction = value;
  }
  public resetProtectNotActivatedAction() {
    this._protectNotActivatedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectNotActivatedActionInput() {
    return this._protectNotActivatedAction;
  }

  // protect_not_activated_message - computed: false, optional: true, required: false
  private _protectNotActivatedMessage?: string; 
  public get protectNotActivatedMessage() {
    return this.getStringAttribute('protect_not_activated_message');
  }
  public set protectNotActivatedMessage(value: string) {
    this._protectNotActivatedMessage = value;
  }
  public resetProtectNotActivatedMessage() {
    this._protectNotActivatedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectNotActivatedMessageInput() {
    return this._protectNotActivatedMessage;
  }

  // protect_policy_enabled - computed: false, optional: true, required: false
  private _protectPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get protectPolicyEnabled() {
    return this.getBooleanAttribute('protect_policy_enabled');
  }
  public set protectPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._protectPolicyEnabled = value;
  }
  public resetProtectPolicyEnabled() {
    this._protectPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectPolicyEnabledInput() {
    return this._protectPolicyEnabled;
  }

  // suspicious_app - computed: false, optional: true, required: false
  private _suspiciousApp?: string; 
  public get suspiciousApp() {
    return this.getStringAttribute('suspicious_app');
  }
  public set suspiciousApp(value: string) {
    this._suspiciousApp = value;
  }
  public resetSuspiciousApp() {
    this._suspiciousApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousAppInput() {
    return this._suspiciousApp;
  }

  // suspicious_enterprise_certificate - computed: false, optional: true, required: false
  private _suspiciousEnterpriseCertificate?: string; 
  public get suspiciousEnterpriseCertificate() {
    return this.getStringAttribute('suspicious_enterprise_certificate');
  }
  public set suspiciousEnterpriseCertificate(value: string) {
    this._suspiciousEnterpriseCertificate = value;
  }
  public resetSuspiciousEnterpriseCertificate() {
    this._suspiciousEnterpriseCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousEnterpriseCertificateInput() {
    return this._suspiciousEnterpriseCertificate;
  }
}
export interface ManagementMobileProfileSecurity {
  /**
  * Require passcode to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#activate_passcode_lock ManagementMobileProfile#activate_passcode_lock}
  */
  readonly activatePasscodeLock?: boolean | cdktf.IResolvable;
  /**
  * Allow storing the credentials on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#allow_store_credentials ManagementMobileProfile#allow_store_credentials}
  */
  readonly allowStoreCredentials?: boolean | cdktf.IResolvable;
  /**
  * Block 3rd party keyboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#block_3rd_party_keyboard ManagementMobileProfile#block_3rd_party_keyboard}
  */
  readonly block3RdPartyKeyboard?: boolean | cdktf.IResolvable;
  /**
  * Action upon detection of jail broken devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#block_jailbroken ManagementMobileProfile#block_jailbroken}
  */
  readonly blockJailbroken?: string;
  /**
  * Hide connect button on critical SSL trust failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#hide_ssl_connect_anyway_button ManagementMobileProfile#hide_ssl_connect_anyway_button}
  */
  readonly hideSslConnectAnywayButton?: boolean | cdktf.IResolvable;
  /**
  * Passcode Policy object identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#passcode_profile ManagementMobileProfile#passcode_profile}
  */
  readonly passcodeProfile?: string;
  /**
  * Issue log when device is detected as jail broken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#report_jailbroken ManagementMobileProfile#report_jailbroken}
  */
  readonly reportJailbroken?: boolean | cdktf.IResolvable;
  /**
  * Session timeout - you can choose a unit (day, week, month) in "session-timeout-unit" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#session_timeout ManagementMobileProfile#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Unit for "session-timeout" numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#session_timeout_unit ManagementMobileProfile#session_timeout_unit}
  */
  readonly sessionTimeoutUnit?: string;
}

export function managementMobileProfileSecurityToTerraform(struct?: ManagementMobileProfileSecurityOutputReference | ManagementMobileProfileSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_passcode_lock: cdktf.booleanToTerraform(struct!.activatePasscodeLock),
    allow_store_credentials: cdktf.booleanToTerraform(struct!.allowStoreCredentials),
    block_3rd_party_keyboard: cdktf.booleanToTerraform(struct!.block3RdPartyKeyboard),
    block_jailbroken: cdktf.stringToTerraform(struct!.blockJailbroken),
    hide_ssl_connect_anyway_button: cdktf.booleanToTerraform(struct!.hideSslConnectAnywayButton),
    passcode_profile: cdktf.stringToTerraform(struct!.passcodeProfile),
    report_jailbroken: cdktf.booleanToTerraform(struct!.reportJailbroken),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    session_timeout_unit: cdktf.stringToTerraform(struct!.sessionTimeoutUnit),
  }
}


export function managementMobileProfileSecurityToHclTerraform(struct?: ManagementMobileProfileSecurityOutputReference | ManagementMobileProfileSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_passcode_lock: {
      value: cdktf.booleanToHclTerraform(struct!.activatePasscodeLock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_store_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowStoreCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_3rd_party_keyboard: {
      value: cdktf.booleanToHclTerraform(struct!.block3RdPartyKeyboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_jailbroken: {
      value: cdktf.stringToHclTerraform(struct!.blockJailbroken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_ssl_connect_anyway_button: {
      value: cdktf.booleanToHclTerraform(struct!.hideSslConnectAnywayButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passcode_profile: {
      value: cdktf.stringToHclTerraform(struct!.passcodeProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_jailbroken: {
      value: cdktf.booleanToHclTerraform(struct!.reportJailbroken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_timeout_unit: {
      value: cdktf.stringToHclTerraform(struct!.sessionTimeoutUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementMobileProfileSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementMobileProfileSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activatePasscodeLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.activatePasscodeLock = this._activatePasscodeLock;
    }
    if (this._allowStoreCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStoreCredentials = this._allowStoreCredentials;
    }
    if (this._block3RdPartyKeyboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.block3RdPartyKeyboard = this._block3RdPartyKeyboard;
    }
    if (this._blockJailbroken !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockJailbroken = this._blockJailbroken;
    }
    if (this._hideSslConnectAnywayButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideSslConnectAnywayButton = this._hideSslConnectAnywayButton;
    }
    if (this._passcodeProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeProfile = this._passcodeProfile;
    }
    if (this._reportJailbroken !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportJailbroken = this._reportJailbroken;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._sessionTimeoutUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutUnit = this._sessionTimeoutUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementMobileProfileSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activatePasscodeLock = undefined;
      this._allowStoreCredentials = undefined;
      this._block3RdPartyKeyboard = undefined;
      this._blockJailbroken = undefined;
      this._hideSslConnectAnywayButton = undefined;
      this._passcodeProfile = undefined;
      this._reportJailbroken = undefined;
      this._sessionTimeout = undefined;
      this._sessionTimeoutUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activatePasscodeLock = value.activatePasscodeLock;
      this._allowStoreCredentials = value.allowStoreCredentials;
      this._block3RdPartyKeyboard = value.block3RdPartyKeyboard;
      this._blockJailbroken = value.blockJailbroken;
      this._hideSslConnectAnywayButton = value.hideSslConnectAnywayButton;
      this._passcodeProfile = value.passcodeProfile;
      this._reportJailbroken = value.reportJailbroken;
      this._sessionTimeout = value.sessionTimeout;
      this._sessionTimeoutUnit = value.sessionTimeoutUnit;
    }
  }

  // activate_passcode_lock - computed: false, optional: true, required: false
  private _activatePasscodeLock?: boolean | cdktf.IResolvable; 
  public get activatePasscodeLock() {
    return this.getBooleanAttribute('activate_passcode_lock');
  }
  public set activatePasscodeLock(value: boolean | cdktf.IResolvable) {
    this._activatePasscodeLock = value;
  }
  public resetActivatePasscodeLock() {
    this._activatePasscodeLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatePasscodeLockInput() {
    return this._activatePasscodeLock;
  }

  // allow_store_credentials - computed: false, optional: true, required: false
  private _allowStoreCredentials?: boolean | cdktf.IResolvable; 
  public get allowStoreCredentials() {
    return this.getBooleanAttribute('allow_store_credentials');
  }
  public set allowStoreCredentials(value: boolean | cdktf.IResolvable) {
    this._allowStoreCredentials = value;
  }
  public resetAllowStoreCredentials() {
    this._allowStoreCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoreCredentialsInput() {
    return this._allowStoreCredentials;
  }

  // block_3rd_party_keyboard - computed: false, optional: true, required: false
  private _block3RdPartyKeyboard?: boolean | cdktf.IResolvable; 
  public get block3RdPartyKeyboard() {
    return this.getBooleanAttribute('block_3rd_party_keyboard');
  }
  public set block3RdPartyKeyboard(value: boolean | cdktf.IResolvable) {
    this._block3RdPartyKeyboard = value;
  }
  public resetBlock3RdPartyKeyboard() {
    this._block3RdPartyKeyboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get block3RdPartyKeyboardInput() {
    return this._block3RdPartyKeyboard;
  }

  // block_jailbroken - computed: false, optional: true, required: false
  private _blockJailbroken?: string; 
  public get blockJailbroken() {
    return this.getStringAttribute('block_jailbroken');
  }
  public set blockJailbroken(value: string) {
    this._blockJailbroken = value;
  }
  public resetBlockJailbroken() {
    this._blockJailbroken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockJailbrokenInput() {
    return this._blockJailbroken;
  }

  // hide_ssl_connect_anyway_button - computed: false, optional: true, required: false
  private _hideSslConnectAnywayButton?: boolean | cdktf.IResolvable; 
  public get hideSslConnectAnywayButton() {
    return this.getBooleanAttribute('hide_ssl_connect_anyway_button');
  }
  public set hideSslConnectAnywayButton(value: boolean | cdktf.IResolvable) {
    this._hideSslConnectAnywayButton = value;
  }
  public resetHideSslConnectAnywayButton() {
    this._hideSslConnectAnywayButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSslConnectAnywayButtonInput() {
    return this._hideSslConnectAnywayButton;
  }

  // passcode_profile - computed: false, optional: true, required: false
  private _passcodeProfile?: string; 
  public get passcodeProfile() {
    return this.getStringAttribute('passcode_profile');
  }
  public set passcodeProfile(value: string) {
    this._passcodeProfile = value;
  }
  public resetPasscodeProfile() {
    this._passcodeProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeProfileInput() {
    return this._passcodeProfile;
  }

  // report_jailbroken - computed: false, optional: true, required: false
  private _reportJailbroken?: boolean | cdktf.IResolvable; 
  public get reportJailbroken() {
    return this.getBooleanAttribute('report_jailbroken');
  }
  public set reportJailbroken(value: boolean | cdktf.IResolvable) {
    this._reportJailbroken = value;
  }
  public resetReportJailbroken() {
    this._reportJailbroken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportJailbrokenInput() {
    return this._reportJailbroken;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // session_timeout_unit - computed: false, optional: true, required: false
  private _sessionTimeoutUnit?: string; 
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }
  public set sessionTimeoutUnit(value: string) {
    this._sessionTimeoutUnit = value;
  }
  public resetSessionTimeoutUnit() {
    this._sessionTimeoutUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutUnitInput() {
    return this._sessionTimeoutUnit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile checkpoint_management_mobile_profile}
*/
export class ManagementMobileProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_mobile_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementMobileProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementMobileProfile to import
  * @param importFromId The id of the existing ManagementMobileProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementMobileProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_mobile_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_mobile_profile checkpoint_management_mobile_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementMobileProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementMobileProfileConfig) {
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
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
    this._applications.internalValue = config.applications;
    this._clientCustomization.internalValue = config.clientCustomization;
    this._dataLeakPrevention.internalValue = config.dataLeakPrevention;
    this._harmonyMobile.internalValue = config.harmonyMobile;
    this._security.internalValue = config.security;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // applications - computed: false, optional: true, required: false
  private _applications = new ManagementMobileProfileApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: ManagementMobileProfileApplications) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // client_customization - computed: false, optional: true, required: false
  private _clientCustomization = new ManagementMobileProfileClientCustomizationOutputReference(this, "client_customization");
  public get clientCustomization() {
    return this._clientCustomization;
  }
  public putClientCustomization(value: ManagementMobileProfileClientCustomization) {
    this._clientCustomization.internalValue = value;
  }
  public resetClientCustomization() {
    this._clientCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCustomizationInput() {
    return this._clientCustomization.internalValue;
  }

  // data_leak_prevention - computed: false, optional: true, required: false
  private _dataLeakPrevention = new ManagementMobileProfileDataLeakPreventionOutputReference(this, "data_leak_prevention");
  public get dataLeakPrevention() {
    return this._dataLeakPrevention;
  }
  public putDataLeakPrevention(value: ManagementMobileProfileDataLeakPrevention) {
    this._dataLeakPrevention.internalValue = value;
  }
  public resetDataLeakPrevention() {
    this._dataLeakPrevention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLeakPreventionInput() {
    return this._dataLeakPrevention.internalValue;
  }

  // harmony_mobile - computed: false, optional: true, required: false
  private _harmonyMobile = new ManagementMobileProfileHarmonyMobileOutputReference(this, "harmony_mobile");
  public get harmonyMobile() {
    return this._harmonyMobile;
  }
  public putHarmonyMobile(value: ManagementMobileProfileHarmonyMobile) {
    this._harmonyMobile.internalValue = value;
  }
  public resetHarmonyMobile() {
    this._harmonyMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harmonyMobileInput() {
    return this._harmonyMobile.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ManagementMobileProfileSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ManagementMobileProfileSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      applications: managementMobileProfileApplicationsToTerraform(this._applications.internalValue),
      client_customization: managementMobileProfileClientCustomizationToTerraform(this._clientCustomization.internalValue),
      data_leak_prevention: managementMobileProfileDataLeakPreventionToTerraform(this._dataLeakPrevention.internalValue),
      harmony_mobile: managementMobileProfileHarmonyMobileToTerraform(this._harmonyMobile.internalValue),
      security: managementMobileProfileSecurityToTerraform(this._security.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      applications: {
        value: managementMobileProfileApplicationsToHclTerraform(this._applications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementMobileProfileApplicationsList",
      },
      client_customization: {
        value: managementMobileProfileClientCustomizationToHclTerraform(this._clientCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementMobileProfileClientCustomizationList",
      },
      data_leak_prevention: {
        value: managementMobileProfileDataLeakPreventionToHclTerraform(this._dataLeakPrevention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementMobileProfileDataLeakPreventionList",
      },
      harmony_mobile: {
        value: managementMobileProfileHarmonyMobileToHclTerraform(this._harmonyMobile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementMobileProfileHarmonyMobileList",
      },
      security: {
        value: managementMobileProfileSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementMobileProfileSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
