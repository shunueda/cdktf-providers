// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrivacyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#application_id DataPrivacy#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#id DataPrivacy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * data_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#data_collection DataPrivacy#data_collection}
  */
  readonly dataCollection: DataPrivacyDataCollection;
  /**
  * do_not_track block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#do_not_track DataPrivacy#do_not_track}
  */
  readonly doNotTrack: DataPrivacyDoNotTrack;
  /**
  * masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#masking DataPrivacy#masking}
  */
  readonly masking: DataPrivacyMasking;
  /**
  * user_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#user_tracking DataPrivacy#user_tracking}
  */
  readonly userTracking: DataPrivacyUserTracking;
}
export interface DataPrivacyDataCollection {
  /**
  * With [Data-collection and opt-in mode](https://dt-url.net/7l3p0p3h) enabled, Real User Monitoring data isn't captured until dtrum.enable() is called for specific user sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#opt_in_mode_enabled DataPrivacy#opt_in_mode_enabled}
  */
  readonly optInModeEnabled: boolean | cdktf.IResolvable;
}

export function dataPrivacyDataCollectionToTerraform(struct?: DataPrivacyDataCollectionOutputReference | DataPrivacyDataCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opt_in_mode_enabled: cdktf.booleanToTerraform(struct!.optInModeEnabled),
  }
}


export function dataPrivacyDataCollectionToHclTerraform(struct?: DataPrivacyDataCollectionOutputReference | DataPrivacyDataCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opt_in_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.optInModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPrivacyDataCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPrivacyDataCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optInModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInModeEnabled = this._optInModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrivacyDataCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optInModeEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optInModeEnabled = value.optInModeEnabled;
    }
  }

  // opt_in_mode_enabled - computed: false, optional: false, required: true
  private _optInModeEnabled?: boolean | cdktf.IResolvable; 
  public get optInModeEnabled() {
    return this.getBooleanAttribute('opt_in_mode_enabled');
  }
  public set optInModeEnabled(value: boolean | cdktf.IResolvable) {
    this._optInModeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInModeEnabledInput() {
    return this._optInModeEnabled;
  }
}
export interface DataPrivacyDoNotTrack {
  /**
  * Comply with "Do Not Track" browser settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#comply_with_do_not_track DataPrivacy#comply_with_do_not_track}
  */
  readonly complyWithDoNotTrack: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `Anonymous`, `Disable_rum`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#do_not_track DataPrivacy#do_not_track}
  */
  readonly doNotTrack?: string;
}

export function dataPrivacyDoNotTrackToTerraform(struct?: DataPrivacyDoNotTrackOutputReference | DataPrivacyDoNotTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comply_with_do_not_track: cdktf.booleanToTerraform(struct!.complyWithDoNotTrack),
    do_not_track: cdktf.stringToTerraform(struct!.doNotTrack),
  }
}


export function dataPrivacyDoNotTrackToHclTerraform(struct?: DataPrivacyDoNotTrackOutputReference | DataPrivacyDoNotTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comply_with_do_not_track: {
      value: cdktf.booleanToHclTerraform(struct!.complyWithDoNotTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_track: {
      value: cdktf.stringToHclTerraform(struct!.doNotTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPrivacyDoNotTrackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPrivacyDoNotTrack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complyWithDoNotTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.complyWithDoNotTrack = this._complyWithDoNotTrack;
    }
    if (this._doNotTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotTrack = this._doNotTrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrivacyDoNotTrack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complyWithDoNotTrack = undefined;
      this._doNotTrack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complyWithDoNotTrack = value.complyWithDoNotTrack;
      this._doNotTrack = value.doNotTrack;
    }
  }

  // comply_with_do_not_track - computed: false, optional: false, required: true
  private _complyWithDoNotTrack?: boolean | cdktf.IResolvable; 
  public get complyWithDoNotTrack() {
    return this.getBooleanAttribute('comply_with_do_not_track');
  }
  public set complyWithDoNotTrack(value: boolean | cdktf.IResolvable) {
    this._complyWithDoNotTrack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complyWithDoNotTrackInput() {
    return this._complyWithDoNotTrack;
  }

  // do_not_track - computed: false, optional: true, required: false
  private _doNotTrack?: string; 
  public get doNotTrack() {
    return this.getStringAttribute('do_not_track');
  }
  public set doNotTrack(value: string) {
    this._doNotTrack = value;
  }
  public resetDoNotTrack() {
    this._doNotTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotTrackInput() {
    return this._doNotTrack;
  }
}
export interface DataPrivacyMasking {
  /**
  * Possible Values: `All`, `Public`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#ip_address_masking DataPrivacy#ip_address_masking}
  */
  readonly ipAddressMasking?: string;
  /**
  * Dynatrace captures the IP addresses of your end-users to determine the regions from which they access your application. To learn more, visit [Mask IPs and GPS coordinates](https://dt-url.net/mask-end-users-ip-addresses).. Dynatrace also captures GPS data from mobile apps that provide their users with the option of sharing geolocation data. On the server side, Dynatrace captures IP addresses to enable detailed troubleshooting for Dynatrace service calls.
  * 
  * Once enabled, IP address masking sets the last octet of monitored IPv4 addresses and the last 80 bits of IPv6 addresses to zeroes. GPS coordinates are rounded up to 1 decimal place (~10 km). This masking occurs in memory. Full IP addresses are never written to disk. Location lookups are made using anonymized IP addresses and GPS coordinates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#ip_address_masking_enabled DataPrivacy#ip_address_masking_enabled}
  */
  readonly ipAddressMaskingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Dynatrace captures the URIs and request headers sent from desktop and mobile browsers. Dynatrace also captures full URIs on the server-side to enable detailed performance analysis of your applications. For complete details, visit [Mask personal data in URIs](https://dt-url.net/mask-personal-data-in-URIs).. URIs and request headers contain personal data. When this setting is enabled, Dynatrace automatically detects UUIDs, credit card numbers, email addresses, IP addresses, and other IDs and replaces those values with placeholders. The personal data is then masked in PurePath analysis, error analysis, user action naming for RUM, and elsewhere in Dynatrace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#personal_data_uri_masking_enabled DataPrivacy#personal_data_uri_masking_enabled}
  */
  readonly personalDataUriMaskingEnabled: boolean | cdktf.IResolvable;
  /**
  * When Dynatrace detects a user action that triggers a page load or an AJAX/XHR action. To learn more about masking user actions, visit [Mask user actions](https://dt-url.net/mask-user-action).. When Dynatrace detects a user action that triggers a page load or an AJAX/XHR action, it constructs a name for the user action based on:
  * 
  * - User event type (click on..., loading of page..., or keypress on...)
  * - Title, caption, label, value, ID, className, or other available property of the related HTML element (for example, an image, button, checkbox, or text input field).
  * 
  * In most instances, the default approach to user-action naming works well, resulting in user-action names such as:
  * 
  * - click on "Search" on page /search.html
  * - keypress on "Feedback" on page /contact.html
  * - touch on "Homescreen" of page /list.jsf
  * 
  * In rare circumstances, confidential data (for example, email addresses, usernames, or account numbers) can be unintentionally included in user action names because the confidential data itself is included in an HTML element label, attribute, or other value (for example, click on "my Account Number: 1231231"...). If such confidential data appears in your application's user action names, enable the Mask user action names setting. This setting replaces specific HTML element names and values with generic HTML element names. With user-action name masking enabled, the user action names listed above appear as:
  * 
  * - click on INPUT on page /search.html
  * - keypress on TEXTAREA on page /contact.html
  * - touch on DIV of page /list.jsf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#user_action_masking_enabled DataPrivacy#user_action_masking_enabled}
  */
  readonly userActionMaskingEnabled: boolean | cdktf.IResolvable;
}

export function dataPrivacyMaskingToTerraform(struct?: DataPrivacyMaskingOutputReference | DataPrivacyMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_masking: cdktf.stringToTerraform(struct!.ipAddressMasking),
    ip_address_masking_enabled: cdktf.booleanToTerraform(struct!.ipAddressMaskingEnabled),
    personal_data_uri_masking_enabled: cdktf.booleanToTerraform(struct!.personalDataUriMaskingEnabled),
    user_action_masking_enabled: cdktf.booleanToTerraform(struct!.userActionMaskingEnabled),
  }
}


export function dataPrivacyMaskingToHclTerraform(struct?: DataPrivacyMaskingOutputReference | DataPrivacyMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_masking: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressMasking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_masking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipAddressMaskingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    personal_data_uri_masking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.personalDataUriMaskingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_action_masking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.userActionMaskingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPrivacyMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPrivacyMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressMasking !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressMasking = this._ipAddressMasking;
    }
    if (this._ipAddressMaskingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressMaskingEnabled = this._ipAddressMaskingEnabled;
    }
    if (this._personalDataUriMaskingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalDataUriMaskingEnabled = this._personalDataUriMaskingEnabled;
    }
    if (this._userActionMaskingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActionMaskingEnabled = this._userActionMaskingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrivacyMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressMasking = undefined;
      this._ipAddressMaskingEnabled = undefined;
      this._personalDataUriMaskingEnabled = undefined;
      this._userActionMaskingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressMasking = value.ipAddressMasking;
      this._ipAddressMaskingEnabled = value.ipAddressMaskingEnabled;
      this._personalDataUriMaskingEnabled = value.personalDataUriMaskingEnabled;
      this._userActionMaskingEnabled = value.userActionMaskingEnabled;
    }
  }

  // ip_address_masking - computed: false, optional: true, required: false
  private _ipAddressMasking?: string; 
  public get ipAddressMasking() {
    return this.getStringAttribute('ip_address_masking');
  }
  public set ipAddressMasking(value: string) {
    this._ipAddressMasking = value;
  }
  public resetIpAddressMasking() {
    this._ipAddressMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressMaskingInput() {
    return this._ipAddressMasking;
  }

  // ip_address_masking_enabled - computed: false, optional: true, required: false
  private _ipAddressMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get ipAddressMaskingEnabled() {
    return this.getBooleanAttribute('ip_address_masking_enabled');
  }
  public set ipAddressMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._ipAddressMaskingEnabled = value;
  }
  public resetIpAddressMaskingEnabled() {
    this._ipAddressMaskingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressMaskingEnabledInput() {
    return this._ipAddressMaskingEnabled;
  }

  // personal_data_uri_masking_enabled - computed: false, optional: false, required: true
  private _personalDataUriMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get personalDataUriMaskingEnabled() {
    return this.getBooleanAttribute('personal_data_uri_masking_enabled');
  }
  public set personalDataUriMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._personalDataUriMaskingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personalDataUriMaskingEnabledInput() {
    return this._personalDataUriMaskingEnabled;
  }

  // user_action_masking_enabled - computed: false, optional: false, required: true
  private _userActionMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get userActionMaskingEnabled() {
    return this.getBooleanAttribute('user_action_masking_enabled');
  }
  public set userActionMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._userActionMaskingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionMaskingEnabledInput() {
    return this._userActionMaskingEnabled;
  }
}
export interface DataPrivacyUserTracking {
  /**
  * When enabled, Dynatrace places a [persistent cookie](https://dt-url.net/313o0p4n) on all end-user devices to identify returning users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#persistent_cookie_enabled DataPrivacy#persistent_cookie_enabled}
  */
  readonly persistentCookieEnabled: boolean | cdktf.IResolvable;
}

export function dataPrivacyUserTrackingToTerraform(struct?: DataPrivacyUserTrackingOutputReference | DataPrivacyUserTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_cookie_enabled: cdktf.booleanToTerraform(struct!.persistentCookieEnabled),
  }
}


export function dataPrivacyUserTrackingToHclTerraform(struct?: DataPrivacyUserTrackingOutputReference | DataPrivacyUserTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_cookie_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentCookieEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPrivacyUserTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPrivacyUserTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentCookieEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentCookieEnabled = this._persistentCookieEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrivacyUserTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistentCookieEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistentCookieEnabled = value.persistentCookieEnabled;
    }
  }

  // persistent_cookie_enabled - computed: false, optional: false, required: true
  private _persistentCookieEnabled?: boolean | cdktf.IResolvable; 
  public get persistentCookieEnabled() {
    return this.getBooleanAttribute('persistent_cookie_enabled');
  }
  public set persistentCookieEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentCookieEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentCookieEnabledInput() {
    return this._persistentCookieEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy dynatrace_data_privacy}
*/
export class DataPrivacy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_data_privacy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrivacy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrivacy to import
  * @param importFromId The id of the existing DataPrivacy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrivacy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_data_privacy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/data_privacy dynatrace_data_privacy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrivacyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrivacyConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_data_privacy',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._dataCollection.internalValue = config.dataCollection;
    this._doNotTrack.internalValue = config.doNotTrack;
    this._masking.internalValue = config.masking;
    this._userTracking.internalValue = config.userTracking;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // data_collection - computed: false, optional: false, required: true
  private _dataCollection = new DataPrivacyDataCollectionOutputReference(this, "data_collection");
  public get dataCollection() {
    return this._dataCollection;
  }
  public putDataCollection(value: DataPrivacyDataCollection) {
    this._dataCollection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionInput() {
    return this._dataCollection.internalValue;
  }

  // do_not_track - computed: false, optional: false, required: true
  private _doNotTrack = new DataPrivacyDoNotTrackOutputReference(this, "do_not_track");
  public get doNotTrack() {
    return this._doNotTrack;
  }
  public putDoNotTrack(value: DataPrivacyDoNotTrack) {
    this._doNotTrack.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotTrackInput() {
    return this._doNotTrack.internalValue;
  }

  // masking - computed: false, optional: false, required: true
  private _masking = new DataPrivacyMaskingOutputReference(this, "masking");
  public get masking() {
    return this._masking;
  }
  public putMasking(value: DataPrivacyMasking) {
    this._masking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingInput() {
    return this._masking.internalValue;
  }

  // user_tracking - computed: false, optional: false, required: true
  private _userTracking = new DataPrivacyUserTrackingOutputReference(this, "user_tracking");
  public get userTracking() {
    return this._userTracking;
  }
  public putUserTracking(value: DataPrivacyUserTracking) {
    this._userTracking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTrackingInput() {
    return this._userTracking.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      data_collection: dataPrivacyDataCollectionToTerraform(this._dataCollection.internalValue),
      do_not_track: dataPrivacyDoNotTrackToTerraform(this._doNotTrack.internalValue),
      masking: dataPrivacyMaskingToTerraform(this._masking.internalValue),
      user_tracking: dataPrivacyUserTrackingToTerraform(this._userTracking.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      data_collection: {
        value: dataPrivacyDataCollectionToHclTerraform(this._dataCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPrivacyDataCollectionList",
      },
      do_not_track: {
        value: dataPrivacyDoNotTrackToHclTerraform(this._doNotTrack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPrivacyDoNotTrackList",
      },
      masking: {
        value: dataPrivacyMaskingToHclTerraform(this._masking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPrivacyMaskingList",
      },
      user_tracking: {
        value: dataPrivacyUserTrackingToHclTerraform(this._userTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPrivacyUserTrackingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
