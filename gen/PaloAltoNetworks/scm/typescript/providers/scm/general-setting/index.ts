// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeneralSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#device GeneralSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#folder GeneralSetting#folder}
  */
  readonly folder?: string;
  /**
  * General
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#general GeneralSetting#general}
  */
  readonly general?: GeneralSettingGeneral;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#snippet GeneralSetting#snippet}
  */
  readonly snippet?: string;
}
export interface GeneralSettingGeneralGeoLocation {
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#latitude GeneralSetting#latitude}
  */
  readonly latitude: string;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#longitude GeneralSetting#longitude}
  */
  readonly longitude: string;
}

export function generalSettingGeneralGeoLocationToTerraform(struct?: GeneralSettingGeneralGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
  }
}


export function generalSettingGeneralGeoLocationToHclTerraform(struct?: GeneralSettingGeneralGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeneralSettingGeneralGeoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeneralSettingGeneralGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeneralSettingGeneralGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface GeneralSettingGeneralSettingManagement {
  /**
  * Automatically acquire commit lock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#auto_acquire_commit_lock GeneralSetting#auto_acquire_commit_lock}
  */
  readonly autoAcquireCommitLock?: boolean | cdktf.IResolvable;
  /**
  * Certificate expiration check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#enable_certificate_expiration_check GeneralSetting#enable_certificate_expiration_check}
  */
  readonly enableCertificateExpirationCheck?: boolean | cdktf.IResolvable;
}

export function generalSettingGeneralSettingManagementToTerraform(struct?: GeneralSettingGeneralSettingManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_acquire_commit_lock: cdktf.booleanToTerraform(struct!.autoAcquireCommitLock),
    enable_certificate_expiration_check: cdktf.booleanToTerraform(struct!.enableCertificateExpirationCheck),
  }
}


export function generalSettingGeneralSettingManagementToHclTerraform(struct?: GeneralSettingGeneralSettingManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_acquire_commit_lock: {
      value: cdktf.booleanToHclTerraform(struct!.autoAcquireCommitLock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_certificate_expiration_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertificateExpirationCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeneralSettingGeneralSettingManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeneralSettingGeneralSettingManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAcquireCommitLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAcquireCommitLock = this._autoAcquireCommitLock;
    }
    if (this._enableCertificateExpirationCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertificateExpirationCheck = this._enableCertificateExpirationCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeneralSettingGeneralSettingManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoAcquireCommitLock = undefined;
      this._enableCertificateExpirationCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoAcquireCommitLock = value.autoAcquireCommitLock;
      this._enableCertificateExpirationCheck = value.enableCertificateExpirationCheck;
    }
  }

  // auto_acquire_commit_lock - computed: true, optional: true, required: false
  private _autoAcquireCommitLock?: boolean | cdktf.IResolvable; 
  public get autoAcquireCommitLock() {
    return this.getBooleanAttribute('auto_acquire_commit_lock');
  }
  public set autoAcquireCommitLock(value: boolean | cdktf.IResolvable) {
    this._autoAcquireCommitLock = value;
  }
  public resetAutoAcquireCommitLock() {
    this._autoAcquireCommitLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcquireCommitLockInput() {
    return this._autoAcquireCommitLock;
  }

  // enable_certificate_expiration_check - computed: true, optional: true, required: false
  private _enableCertificateExpirationCheck?: boolean | cdktf.IResolvable; 
  public get enableCertificateExpirationCheck() {
    return this.getBooleanAttribute('enable_certificate_expiration_check');
  }
  public set enableCertificateExpirationCheck(value: boolean | cdktf.IResolvable) {
    this._enableCertificateExpirationCheck = value;
  }
  public resetEnableCertificateExpirationCheck() {
    this._enableCertificateExpirationCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificateExpirationCheckInput() {
    return this._enableCertificateExpirationCheck;
  }
}
export interface GeneralSettingGeneralSetting {
  /**
  * Use hypervisor assigned MAC addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#auto_mac_detect GeneralSetting#auto_mac_detect}
  */
  readonly autoMacDetect?: boolean | cdktf.IResolvable;
  /**
  * Fail open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#fail_open GeneralSetting#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#management GeneralSetting#management}
  */
  readonly management?: GeneralSettingGeneralSettingManagement;
  /**
  * Tunnel acceleration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#tunnel_acceleration GeneralSetting#tunnel_acceleration}
  */
  readonly tunnelAcceleration?: boolean | cdktf.IResolvable;
}

export function generalSettingGeneralSettingToTerraform(struct?: GeneralSettingGeneralSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_mac_detect: cdktf.booleanToTerraform(struct!.autoMacDetect),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    management: generalSettingGeneralSettingManagementToTerraform(struct!.management),
    tunnel_acceleration: cdktf.booleanToTerraform(struct!.tunnelAcceleration),
  }
}


export function generalSettingGeneralSettingToHclTerraform(struct?: GeneralSettingGeneralSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_mac_detect: {
      value: cdktf.booleanToHclTerraform(struct!.autoMacDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    management: {
      value: generalSettingGeneralSettingManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "struct",
      storageClassType: "GeneralSettingGeneralSettingManagement",
    },
    tunnel_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.tunnelAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeneralSettingGeneralSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeneralSettingGeneralSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMacDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMacDetect = this._autoMacDetect;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._tunnelAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelAcceleration = this._tunnelAcceleration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeneralSettingGeneralSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoMacDetect = undefined;
      this._failOpen = undefined;
      this._management.internalValue = undefined;
      this._tunnelAcceleration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoMacDetect = value.autoMacDetect;
      this._failOpen = value.failOpen;
      this._management.internalValue = value.management;
      this._tunnelAcceleration = value.tunnelAcceleration;
    }
  }

  // auto_mac_detect - computed: true, optional: true, required: false
  private _autoMacDetect?: boolean | cdktf.IResolvable; 
  public get autoMacDetect() {
    return this.getBooleanAttribute('auto_mac_detect');
  }
  public set autoMacDetect(value: boolean | cdktf.IResolvable) {
    this._autoMacDetect = value;
  }
  public resetAutoMacDetect() {
    this._autoMacDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMacDetectInput() {
    return this._autoMacDetect;
  }

  // fail_open - computed: true, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // management - computed: false, optional: true, required: false
  private _management = new GeneralSettingGeneralSettingManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GeneralSettingGeneralSettingManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // tunnel_acceleration - computed: true, optional: true, required: false
  private _tunnelAcceleration?: boolean | cdktf.IResolvable; 
  public get tunnelAcceleration() {
    return this.getBooleanAttribute('tunnel_acceleration');
  }
  public set tunnelAcceleration(value: boolean | cdktf.IResolvable) {
    this._tunnelAcceleration = value;
  }
  public resetTunnelAcceleration() {
    this._tunnelAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAccelerationInput() {
    return this._tunnelAcceleration;
  }
}
export interface GeneralSettingGeneral {
  /**
  * Force admins to acknowledge login banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#ack_login_banner GeneralSetting#ack_login_banner}
  */
  readonly ackLoginBanner?: boolean | cdktf.IResolvable;
  /**
  * DNS domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#domain GeneralSetting#domain}
  */
  readonly domain?: string;
  /**
  * Geographic coordinates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#geo_location GeneralSetting#geo_location}
  */
  readonly geoLocation?: GeneralSettingGeneralGeoLocation;
  /**
  * Locale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#locale GeneralSetting#locale}
  */
  readonly locale?: string;
  /**
  * Logon banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#login_banner GeneralSetting#login_banner}
  */
  readonly loginBanner?: string;
  /**
  * Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#setting GeneralSetting#setting}
  */
  readonly setting?: GeneralSettingGeneralSetting;
  /**
  * SSL/TLS service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#ssl_tls_service_profile GeneralSetting#ssl_tls_service_profile}
  */
  readonly sslTlsServiceProfile?: string;
  /**
  * Timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#timezone GeneralSetting#timezone}
  */
  readonly timezone?: string;
}

export function generalSettingGeneralToTerraform(struct?: GeneralSettingGeneral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_login_banner: cdktf.booleanToTerraform(struct!.ackLoginBanner),
    domain: cdktf.stringToTerraform(struct!.domain),
    geo_location: generalSettingGeneralGeoLocationToTerraform(struct!.geoLocation),
    locale: cdktf.stringToTerraform(struct!.locale),
    login_banner: cdktf.stringToTerraform(struct!.loginBanner),
    setting: generalSettingGeneralSettingToTerraform(struct!.setting),
    ssl_tls_service_profile: cdktf.stringToTerraform(struct!.sslTlsServiceProfile),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function generalSettingGeneralToHclTerraform(struct?: GeneralSettingGeneral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_login_banner: {
      value: cdktf.booleanToHclTerraform(struct!.ackLoginBanner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location: {
      value: generalSettingGeneralGeoLocationToHclTerraform(struct!.geoLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "GeneralSettingGeneralGeoLocation",
    },
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_banner: {
      value: cdktf.stringToHclTerraform(struct!.loginBanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting: {
      value: generalSettingGeneralSettingToHclTerraform(struct!.setting),
      isBlock: true,
      type: "struct",
      storageClassType: "GeneralSettingGeneralSetting",
    },
    ssl_tls_service_profile: {
      value: cdktf.stringToHclTerraform(struct!.sslTlsServiceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeneralSettingGeneralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeneralSettingGeneral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackLoginBanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackLoginBanner = this._ackLoginBanner;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._geoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation?.internalValue;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._loginBanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginBanner = this._loginBanner;
    }
    if (this._setting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting?.internalValue;
    }
    if (this._sslTlsServiceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTlsServiceProfile = this._sslTlsServiceProfile;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeneralSettingGeneral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackLoginBanner = undefined;
      this._domain = undefined;
      this._geoLocation.internalValue = undefined;
      this._locale = undefined;
      this._loginBanner = undefined;
      this._setting.internalValue = undefined;
      this._sslTlsServiceProfile = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackLoginBanner = value.ackLoginBanner;
      this._domain = value.domain;
      this._geoLocation.internalValue = value.geoLocation;
      this._locale = value.locale;
      this._loginBanner = value.loginBanner;
      this._setting.internalValue = value.setting;
      this._sslTlsServiceProfile = value.sslTlsServiceProfile;
      this._timezone = value.timezone;
    }
  }

  // ack_login_banner - computed: true, optional: true, required: false
  private _ackLoginBanner?: boolean | cdktf.IResolvable; 
  public get ackLoginBanner() {
    return this.getBooleanAttribute('ack_login_banner');
  }
  public set ackLoginBanner(value: boolean | cdktf.IResolvable) {
    this._ackLoginBanner = value;
  }
  public resetAckLoginBanner() {
    this._ackLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackLoginBannerInput() {
    return this._ackLoginBanner;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation = new GeneralSettingGeneralGeoLocationOutputReference(this, "geo_location");
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: GeneralSettingGeneralGeoLocation) {
    this._geoLocation.internalValue = value;
  }
  public resetGeoLocation() {
    this._geoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
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

  // login_banner - computed: false, optional: true, required: false
  private _loginBanner?: string; 
  public get loginBanner() {
    return this.getStringAttribute('login_banner');
  }
  public set loginBanner(value: string) {
    this._loginBanner = value;
  }
  public resetLoginBanner() {
    this._loginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBannerInput() {
    return this._loginBanner;
  }

  // setting - computed: false, optional: true, required: false
  private _setting = new GeneralSettingGeneralSettingOutputReference(this, "setting");
  public get setting() {
    return this._setting;
  }
  public putSetting(value: GeneralSettingGeneralSetting) {
    this._setting.internalValue = value;
  }
  public resetSetting() {
    this._setting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting.internalValue;
  }

  // ssl_tls_service_profile - computed: false, optional: true, required: false
  private _sslTlsServiceProfile?: string; 
  public get sslTlsServiceProfile() {
    return this.getStringAttribute('ssl_tls_service_profile');
  }
  public set sslTlsServiceProfile(value: string) {
    this._sslTlsServiceProfile = value;
  }
  public resetSslTlsServiceProfile() {
    this._sslTlsServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTlsServiceProfileInput() {
    return this._sslTlsServiceProfile;
  }

  // timezone - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting scm_general_setting}
*/
export class GeneralSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_general_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeneralSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeneralSetting to import
  * @param importFromId The id of the existing GeneralSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeneralSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_general_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/general_setting scm_general_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeneralSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GeneralSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_general_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._general.internalValue = config.general;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // general - computed: false, optional: true, required: false
  private _general = new GeneralSettingGeneralOutputReference(this, "general");
  public get general() {
    return this._general;
  }
  public putGeneral(value: GeneralSettingGeneral) {
    this._general.internalValue = value;
  }
  public resetGeneral() {
    this._general.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalInput() {
    return this._general.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      general: generalSettingGeneralToTerraform(this._general.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      general: {
        value: generalSettingGeneralToHclTerraform(this._general.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GeneralSettingGeneral",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
