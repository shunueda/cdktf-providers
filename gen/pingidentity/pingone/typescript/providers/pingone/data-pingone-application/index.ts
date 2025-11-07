// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier (UUID) of the application.  Exactly one of the following must be defined: `application_id`, `name`.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application#application_id DataPingoneApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * PingOne environment identifier (UUID) in which the application exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application#environment_id DataPingoneApplication#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name of the application.  Exactly one of the following must be defined: `application_id`, `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application#name DataPingoneApplication#name}
  */
  readonly name?: string;
}
export interface DataPingoneApplicationAccessControlGroupOptions {
}

export function dataPingoneApplicationAccessControlGroupOptionsToTerraform(struct?: DataPingoneApplicationAccessControlGroupOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationAccessControlGroupOptionsToHclTerraform(struct?: DataPingoneApplicationAccessControlGroupOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationAccessControlGroupOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationAccessControlGroupOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationAccessControlGroupOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingoneApplicationExternalLinkOptions {
}

export function dataPingoneApplicationExternalLinkOptionsToTerraform(struct?: DataPingoneApplicationExternalLinkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationExternalLinkOptionsToHclTerraform(struct?: DataPingoneApplicationExternalLinkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationExternalLinkOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationExternalLinkOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationExternalLinkOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // home_page_url - computed: true, optional: false, required: false
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }
}
export interface DataPingoneApplicationIcon {
}

export function dataPingoneApplicationIconToTerraform(struct?: DataPingoneApplicationIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationIconToHclTerraform(struct?: DataPingoneApplicationIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingoneApplicationOidcOptionsCertificateBasedAuthentication {
}

export function dataPingoneApplicationOidcOptionsCertificateBasedAuthenticationToTerraform(struct?: DataPingoneApplicationOidcOptionsCertificateBasedAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsCertificateBasedAuthenticationToHclTerraform(struct?: DataPingoneApplicationOidcOptionsCertificateBasedAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsCertificateBasedAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptionsCertificateBasedAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptionsCertificateBasedAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataPingoneApplicationOidcOptionsCorsSettings {
}

export function dataPingoneApplicationOidcOptionsCorsSettingsToTerraform(struct?: DataPingoneApplicationOidcOptionsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsCorsSettingsToHclTerraform(struct?: DataPingoneApplicationOidcOptionsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptionsCorsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptionsCorsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // origins - computed: true, optional: false, required: false
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
}
export interface DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration {
}

export function dataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDurationToTerraform(struct?: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDurationToHclTerraform(struct?: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}
export interface DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay {
}

export function dataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlayToTerraform(struct?: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlayToHclTerraform(struct?: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption_key - computed: true, optional: false, required: false
  public get decryptionKey() {
    return this.getStringAttribute('decryption_key');
  }

  // service_account_credentials_json - computed: true, optional: false, required: false
  public get serviceAccountCredentialsJson() {
    return this.getStringAttribute('service_account_credentials_json');
  }

  // verification_key - computed: true, optional: false, required: false
  public get verificationKey() {
    return this.getStringAttribute('verification_key');
  }

  // verification_type - computed: true, optional: false, required: false
  public get verificationType() {
    return this.getStringAttribute('verification_type');
  }
}
export interface DataPingoneApplicationOidcOptionsMobileAppIntegrityDetection {
}

export function dataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionToTerraform(struct?: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionToHclTerraform(struct?: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptionsMobileAppIntegrityDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptionsMobileAppIntegrityDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_duration - computed: true, optional: false, required: false
  private _cacheDuration = new DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionCacheDurationOutputReference(this, "cache_duration");
  public get cacheDuration() {
    return this._cacheDuration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // excluded_platforms - computed: true, optional: false, required: false
  public get excludedPlatforms() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_platforms'));
  }

  // google_play - computed: true, optional: false, required: false
  private _googlePlay = new DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlayOutputReference(this, "google_play");
  public get googlePlay() {
    return this._googlePlay;
  }
}
export interface DataPingoneApplicationOidcOptionsMobileApp {
}

export function dataPingoneApplicationOidcOptionsMobileAppToTerraform(struct?: DataPingoneApplicationOidcOptionsMobileApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsMobileAppToHclTerraform(struct?: DataPingoneApplicationOidcOptionsMobileApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsMobileAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptionsMobileApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptionsMobileApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // huawei_app_id - computed: true, optional: false, required: false
  public get huaweiAppId() {
    return this.getStringAttribute('huawei_app_id');
  }

  // huawei_package_name - computed: true, optional: false, required: false
  public get huaweiPackageName() {
    return this.getStringAttribute('huawei_package_name');
  }

  // integrity_detection - computed: true, optional: false, required: false
  private _integrityDetection = new DataPingoneApplicationOidcOptionsMobileAppIntegrityDetectionOutputReference(this, "integrity_detection");
  public get integrityDetection() {
    return this._integrityDetection;
  }

  // package_name - computed: true, optional: false, required: false
  public get packageName() {
    return this.getStringAttribute('package_name');
  }

  // passcode_refresh_seconds - computed: true, optional: false, required: false
  public get passcodeRefreshSeconds() {
    return this.getNumberAttribute('passcode_refresh_seconds');
  }

  // universal_app_link - computed: true, optional: false, required: false
  public get universalAppLink() {
    return this.getStringAttribute('universal_app_link');
  }
}
export interface DataPingoneApplicationOidcOptions {
}

export function dataPingoneApplicationOidcOptionsToTerraform(struct?: DataPingoneApplicationOidcOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationOidcOptionsToHclTerraform(struct?: DataPingoneApplicationOidcOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationOidcOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationOidcOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationOidcOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_refresh_token_replay_protection_enabled - computed: true, optional: false, required: false
  public get additionalRefreshTokenReplayProtectionEnabled() {
    return this.getBooleanAttribute('additional_refresh_token_replay_protection_enabled');
  }

  // allow_wildcard_in_redirect_uris - computed: true, optional: false, required: false
  public get allowWildcardInRedirectUris() {
    return this.getBooleanAttribute('allow_wildcard_in_redirect_uris');
  }

  // certificate_based_authentication - computed: true, optional: false, required: false
  private _certificateBasedAuthentication = new DataPingoneApplicationOidcOptionsCertificateBasedAuthenticationOutputReference(this, "certificate_based_authentication");
  public get certificateBasedAuthentication() {
    return this._certificateBasedAuthentication;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // cors_settings - computed: true, optional: false, required: false
  private _corsSettings = new DataPingoneApplicationOidcOptionsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }

  // device_custom_verification_uri - computed: true, optional: false, required: false
  public get deviceCustomVerificationUri() {
    return this.getStringAttribute('device_custom_verification_uri');
  }

  // device_path_id - computed: true, optional: false, required: false
  public get devicePathId() {
    return this.getStringAttribute('device_path_id');
  }

  // device_polling_interval - computed: true, optional: false, required: false
  public get devicePollingInterval() {
    return this.getNumberAttribute('device_polling_interval');
  }

  // device_timeout - computed: true, optional: false, required: false
  public get deviceTimeout() {
    return this.getNumberAttribute('device_timeout');
  }

  // grant_types - computed: true, optional: false, required: false
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }

  // home_page_url - computed: true, optional: false, required: false
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }

  // idp_signoff - computed: true, optional: false, required: false
  public get idpSignoff() {
    return this.getBooleanAttribute('idp_signoff');
  }

  // initiate_login_uri - computed: true, optional: false, required: false
  public get initiateLoginUri() {
    return this.getStringAttribute('initiate_login_uri');
  }

  // jwks - computed: true, optional: false, required: false
  public get jwks() {
    return this.getStringAttribute('jwks');
  }

  // jwks_url - computed: true, optional: false, required: false
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }

  // mobile_app - computed: true, optional: false, required: false
  private _mobileApp = new DataPingoneApplicationOidcOptionsMobileAppOutputReference(this, "mobile_app");
  public get mobileApp() {
    return this._mobileApp;
  }

  // par_requirement - computed: true, optional: false, required: false
  public get parRequirement() {
    return this.getStringAttribute('par_requirement');
  }

  // par_timeout - computed: true, optional: false, required: false
  public get parTimeout() {
    return this.getNumberAttribute('par_timeout');
  }

  // pkce_enforcement - computed: true, optional: false, required: false
  public get pkceEnforcement() {
    return this.getStringAttribute('pkce_enforcement');
  }

  // post_logout_redirect_uris - computed: true, optional: false, required: false
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }

  // refresh_token_duration - computed: true, optional: false, required: false
  public get refreshTokenDuration() {
    return this.getNumberAttribute('refresh_token_duration');
  }

  // refresh_token_rolling_duration - computed: true, optional: false, required: false
  public get refreshTokenRollingDuration() {
    return this.getNumberAttribute('refresh_token_rolling_duration');
  }

  // refresh_token_rolling_grace_period_duration - computed: true, optional: false, required: false
  public get refreshTokenRollingGracePeriodDuration() {
    return this.getNumberAttribute('refresh_token_rolling_grace_period_duration');
  }

  // require_signed_request_object - computed: true, optional: false, required: false
  public get requireSignedRequestObject() {
    return this.getBooleanAttribute('require_signed_request_object');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_types'));
  }

  // support_unsigned_request_object - computed: true, optional: false, required: false
  public get supportUnsignedRequestObject() {
    return this.getBooleanAttribute('support_unsigned_request_object');
  }

  // target_link_uri - computed: true, optional: false, required: false
  public get targetLinkUri() {
    return this.getStringAttribute('target_link_uri');
  }

  // token_endpoint_auth_method - computed: true, optional: false, required: false
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingoneApplicationSamlOptionsCorsSettings {
}

export function dataPingoneApplicationSamlOptionsCorsSettingsToTerraform(struct?: DataPingoneApplicationSamlOptionsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsCorsSettingsToHclTerraform(struct?: DataPingoneApplicationSamlOptionsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptionsCorsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsCorsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // origins - computed: true, optional: false, required: false
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
}
export interface DataPingoneApplicationSamlOptionsIdpSigningKey {
}

export function dataPingoneApplicationSamlOptionsIdpSigningKeyToTerraform(struct?: DataPingoneApplicationSamlOptionsIdpSigningKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsIdpSigningKeyToHclTerraform(struct?: DataPingoneApplicationSamlOptionsIdpSigningKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsIdpSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptionsIdpSigningKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsIdpSigningKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataPingoneApplicationSamlOptionsSpEncryptionCertificate {
}

export function dataPingoneApplicationSamlOptionsSpEncryptionCertificateToTerraform(struct?: DataPingoneApplicationSamlOptionsSpEncryptionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsSpEncryptionCertificateToHclTerraform(struct?: DataPingoneApplicationSamlOptionsSpEncryptionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsSpEncryptionCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptionsSpEncryptionCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsSpEncryptionCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingoneApplicationSamlOptionsSpEncryption {
}

export function dataPingoneApplicationSamlOptionsSpEncryptionToTerraform(struct?: DataPingoneApplicationSamlOptionsSpEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsSpEncryptionToHclTerraform(struct?: DataPingoneApplicationSamlOptionsSpEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsSpEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptionsSpEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsSpEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataPingoneApplicationSamlOptionsSpEncryptionCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
}
export interface DataPingoneApplicationSamlOptionsSpVerification {
}

export function dataPingoneApplicationSamlOptionsSpVerificationToTerraform(struct?: DataPingoneApplicationSamlOptionsSpVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsSpVerificationToHclTerraform(struct?: DataPingoneApplicationSamlOptionsSpVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsSpVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptionsSpVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsSpVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authn_request_signed - computed: true, optional: false, required: false
  public get authnRequestSigned() {
    return this.getBooleanAttribute('authn_request_signed');
  }

  // certificate_ids - computed: true, optional: false, required: false
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
}
export interface DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds {
}

export function dataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsToTerraform(struct?: DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsToHclTerraform(struct?: DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // vs_id - computed: true, optional: false, required: false
  public get vsId() {
    return this.getStringAttribute('vs_id');
  }
}

export class DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsOutputReference {
    return new DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneApplicationSamlOptionsVirtualServerIdSettings {
}

export function dataPingoneApplicationSamlOptionsVirtualServerIdSettingsToTerraform(struct?: DataPingoneApplicationSamlOptionsVirtualServerIdSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsVirtualServerIdSettingsToHclTerraform(struct?: DataPingoneApplicationSamlOptionsVirtualServerIdSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsVirtualServerIdSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptionsVirtualServerIdSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptionsVirtualServerIdSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // virtual_server_ids - computed: true, optional: false, required: false
  private _virtualServerIds = new DataPingoneApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsList(this, "virtual_server_ids", false);
  public get virtualServerIds() {
    return this._virtualServerIds;
  }
}
export interface DataPingoneApplicationSamlOptions {
}

export function dataPingoneApplicationSamlOptionsToTerraform(struct?: DataPingoneApplicationSamlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationSamlOptionsToHclTerraform(struct?: DataPingoneApplicationSamlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationSamlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationSamlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationSamlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acs_urls - computed: true, optional: false, required: false
  public get acsUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('acs_urls'));
  }

  // assertion_duration - computed: true, optional: false, required: false
  public get assertionDuration() {
    return this.getNumberAttribute('assertion_duration');
  }

  // assertion_signed_enabled - computed: true, optional: false, required: false
  public get assertionSignedEnabled() {
    return this.getBooleanAttribute('assertion_signed_enabled');
  }

  // cors_settings - computed: true, optional: false, required: false
  private _corsSettings = new DataPingoneApplicationSamlOptionsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }

  // default_target_url - computed: true, optional: false, required: false
  public get defaultTargetUrl() {
    return this.getStringAttribute('default_target_url');
  }

  // enable_requested_authn_context - computed: true, optional: false, required: false
  public get enableRequestedAuthnContext() {
    return this.getBooleanAttribute('enable_requested_authn_context');
  }

  // home_page_url - computed: true, optional: false, required: false
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }

  // idp_signing_key - computed: true, optional: false, required: false
  private _idpSigningKey = new DataPingoneApplicationSamlOptionsIdpSigningKeyOutputReference(this, "idp_signing_key");
  public get idpSigningKey() {
    return this._idpSigningKey;
  }

  // nameid_format - computed: true, optional: false, required: false
  public get nameidFormat() {
    return this.getStringAttribute('nameid_format');
  }

  // response_is_signed - computed: true, optional: false, required: false
  public get responseIsSigned() {
    return this.getBooleanAttribute('response_is_signed');
  }

  // session_not_on_or_after_duration - computed: true, optional: false, required: false
  public get sessionNotOnOrAfterDuration() {
    return this.getNumberAttribute('session_not_on_or_after_duration');
  }

  // slo_binding - computed: true, optional: false, required: false
  public get sloBinding() {
    return this.getStringAttribute('slo_binding');
  }

  // slo_endpoint - computed: true, optional: false, required: false
  public get sloEndpoint() {
    return this.getStringAttribute('slo_endpoint');
  }

  // slo_response_endpoint - computed: true, optional: false, required: false
  public get sloResponseEndpoint() {
    return this.getStringAttribute('slo_response_endpoint');
  }

  // slo_window - computed: true, optional: false, required: false
  public get sloWindow() {
    return this.getNumberAttribute('slo_window');
  }

  // sp_encryption - computed: true, optional: false, required: false
  private _spEncryption = new DataPingoneApplicationSamlOptionsSpEncryptionOutputReference(this, "sp_encryption");
  public get spEncryption() {
    return this._spEncryption;
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // sp_verification - computed: true, optional: false, required: false
  private _spVerification = new DataPingoneApplicationSamlOptionsSpVerificationOutputReference(this, "sp_verification");
  public get spVerification() {
    return this._spVerification;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_server_id_settings - computed: true, optional: false, required: false
  private _virtualServerIdSettings = new DataPingoneApplicationSamlOptionsVirtualServerIdSettingsOutputReference(this, "virtual_server_id_settings");
  public get virtualServerIdSettings() {
    return this._virtualServerIdSettings;
  }
}
export interface DataPingoneApplicationWsfedOptionsCorsSettings {
}

export function dataPingoneApplicationWsfedOptionsCorsSettingsToTerraform(struct?: DataPingoneApplicationWsfedOptionsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationWsfedOptionsCorsSettingsToHclTerraform(struct?: DataPingoneApplicationWsfedOptionsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationWsfedOptionsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationWsfedOptionsCorsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationWsfedOptionsCorsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // origins - computed: true, optional: false, required: false
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
}
export interface DataPingoneApplicationWsfedOptionsIdpSigningKey {
}

export function dataPingoneApplicationWsfedOptionsIdpSigningKeyToTerraform(struct?: DataPingoneApplicationWsfedOptionsIdpSigningKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationWsfedOptionsIdpSigningKeyToHclTerraform(struct?: DataPingoneApplicationWsfedOptionsIdpSigningKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationWsfedOptionsIdpSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationWsfedOptionsIdpSigningKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationWsfedOptionsIdpSigningKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataPingoneApplicationWsfedOptionsKerberosGatewaysUserType {
}

export function dataPingoneApplicationWsfedOptionsKerberosGatewaysUserTypeToTerraform(struct?: DataPingoneApplicationWsfedOptionsKerberosGatewaysUserType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationWsfedOptionsKerberosGatewaysUserTypeToHclTerraform(struct?: DataPingoneApplicationWsfedOptionsKerberosGatewaysUserType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationWsfedOptionsKerberosGatewaysUserTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationWsfedOptionsKerberosGatewaysUserType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationWsfedOptionsKerberosGatewaysUserType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingoneApplicationWsfedOptionsKerberosGateways {
}

export function dataPingoneApplicationWsfedOptionsKerberosGatewaysToTerraform(struct?: DataPingoneApplicationWsfedOptionsKerberosGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationWsfedOptionsKerberosGatewaysToHclTerraform(struct?: DataPingoneApplicationWsfedOptionsKerberosGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationWsfedOptionsKerberosGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingoneApplicationWsfedOptionsKerberosGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationWsfedOptionsKerberosGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_type - computed: true, optional: false, required: false
  private _userType = new DataPingoneApplicationWsfedOptionsKerberosGatewaysUserTypeOutputReference(this, "user_type");
  public get userType() {
    return this._userType;
  }
}

export class DataPingoneApplicationWsfedOptionsKerberosGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneApplicationWsfedOptionsKerberosGatewaysOutputReference {
    return new DataPingoneApplicationWsfedOptionsKerberosGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneApplicationWsfedOptionsKerberos {
}

export function dataPingoneApplicationWsfedOptionsKerberosToTerraform(struct?: DataPingoneApplicationWsfedOptionsKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationWsfedOptionsKerberosToHclTerraform(struct?: DataPingoneApplicationWsfedOptionsKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationWsfedOptionsKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationWsfedOptionsKerberos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationWsfedOptionsKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new DataPingoneApplicationWsfedOptionsKerberosGatewaysList(this, "gateways", true);
  public get gateways() {
    return this._gateways;
  }
}
export interface DataPingoneApplicationWsfedOptions {
}

export function dataPingoneApplicationWsfedOptionsToTerraform(struct?: DataPingoneApplicationWsfedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneApplicationWsfedOptionsToHclTerraform(struct?: DataPingoneApplicationWsfedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneApplicationWsfedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneApplicationWsfedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneApplicationWsfedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience_restriction - computed: true, optional: false, required: false
  public get audienceRestriction() {
    return this.getStringAttribute('audience_restriction');
  }

  // cors_settings - computed: true, optional: false, required: false
  private _corsSettings = new DataPingoneApplicationWsfedOptionsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // idp_signing_key - computed: true, optional: false, required: false
  private _idpSigningKey = new DataPingoneApplicationWsfedOptionsIdpSigningKeyOutputReference(this, "idp_signing_key");
  public get idpSigningKey() {
    return this._idpSigningKey;
  }

  // kerberos - computed: true, optional: false, required: false
  private _kerberos = new DataPingoneApplicationWsfedOptionsKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }

  // reply_url - computed: true, optional: false, required: false
  public get replyUrl() {
    return this.getStringAttribute('reply_url');
  }

  // slo_endpoint - computed: true, optional: false, required: false
  public get sloEndpoint() {
    return this.getStringAttribute('slo_endpoint');
  }

  // subject_name_identifier_format - computed: true, optional: false, required: false
  public get subjectNameIdentifierFormat() {
    return this.getStringAttribute('subject_name_identifier_format');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application pingone_application}
*/
export class DataPingoneApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneApplication to import
  * @param importFromId The id of the existing DataPingoneApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/application pingone_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_application',
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
    this._applicationId = config.applicationId;
    this._environmentId = config.environmentId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_options - computed: true, optional: false, required: false
  private _accessControlGroupOptions = new DataPingoneApplicationAccessControlGroupOptionsOutputReference(this, "access_control_group_options");
  public get accessControlGroupOptions() {
    return this._accessControlGroupOptions;
  }

  // access_control_role_type - computed: true, optional: false, required: false
  public get accessControlRoleType() {
    return this.getStringAttribute('access_control_role_type');
  }

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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // external_link_options - computed: true, optional: false, required: false
  private _externalLinkOptions = new DataPingoneApplicationExternalLinkOptionsOutputReference(this, "external_link_options");
  public get externalLinkOptions() {
    return this._externalLinkOptions;
  }

  // hidden_from_app_portal - computed: true, optional: false, required: false
  public get hiddenFromAppPortal() {
    return this.getBooleanAttribute('hidden_from_app_portal');
  }

  // icon - computed: true, optional: false, required: false
  private _icon = new DataPingoneApplicationIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_page_url - computed: true, optional: false, required: false
  public get loginPageUrl() {
    return this.getStringAttribute('login_page_url');
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

  // oidc_options - computed: true, optional: false, required: false
  private _oidcOptions = new DataPingoneApplicationOidcOptionsOutputReference(this, "oidc_options");
  public get oidcOptions() {
    return this._oidcOptions;
  }

  // saml_options - computed: true, optional: false, required: false
  private _samlOptions = new DataPingoneApplicationSamlOptionsOutputReference(this, "saml_options");
  public get samlOptions() {
    return this._samlOptions;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // wsfed_options - computed: true, optional: false, required: false
  private _wsfedOptions = new DataPingoneApplicationWsfedOptionsOutputReference(this, "wsfed_options");
  public get wsfedOptions() {
    return this._wsfedOptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
