// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeycloakRealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#attributes DataKeycloakRealm#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#default_default_client_scopes DataKeycloakRealm#default_default_client_scopes}
  */
  readonly defaultDefaultClientScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#default_optional_client_scopes DataKeycloakRealm#default_optional_client_scopes}
  */
  readonly defaultOptionalClientScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#display_name_html DataKeycloakRealm#display_name_html}
  */
  readonly displayNameHtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#id DataKeycloakRealm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#realm DataKeycloakRealm#realm}
  */
  readonly realm: string;
  /**
  * internationalization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#internationalization DataKeycloakRealm#internationalization}
  */
  readonly internationalization?: DataKeycloakRealmInternationalization[] | cdktf.IResolvable;
  /**
  * otp_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#otp_policy DataKeycloakRealm#otp_policy}
  */
  readonly otpPolicy?: DataKeycloakRealmOtpPolicy;
  /**
  * security_defenses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#security_defenses DataKeycloakRealm#security_defenses}
  */
  readonly securityDefenses?: DataKeycloakRealmSecurityDefenses[] | cdktf.IResolvable;
  /**
  * smtp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#smtp_server DataKeycloakRealm#smtp_server}
  */
  readonly smtpServer?: DataKeycloakRealmSmtpServer[] | cdktf.IResolvable;
  /**
  * web_authn_passwordless_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#web_authn_passwordless_policy DataKeycloakRealm#web_authn_passwordless_policy}
  */
  readonly webAuthnPasswordlessPolicy?: DataKeycloakRealmWebAuthnPasswordlessPolicy;
  /**
  * web_authn_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#web_authn_policy DataKeycloakRealm#web_authn_policy}
  */
  readonly webAuthnPolicy?: DataKeycloakRealmWebAuthnPolicy;
}
export interface DataKeycloakRealmInternationalization {
}

export function dataKeycloakRealmInternationalizationToTerraform(struct?: DataKeycloakRealmInternationalization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmInternationalizationToHclTerraform(struct?: DataKeycloakRealmInternationalization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmInternationalizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmInternationalization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmInternationalization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // default_locale - computed: true, optional: false, required: false
  public get defaultLocale() {
    return this.getStringAttribute('default_locale');
  }

  // supported_locales - computed: true, optional: false, required: false
  public get supportedLocales() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_locales'));
  }
}

export class DataKeycloakRealmInternationalizationList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmInternationalization[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmInternationalizationOutputReference {
    return new DataKeycloakRealmInternationalizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmOtpPolicy {
}

export function dataKeycloakRealmOtpPolicyToTerraform(struct?: DataKeycloakRealmOtpPolicyOutputReference | DataKeycloakRealmOtpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmOtpPolicyToHclTerraform(struct?: DataKeycloakRealmOtpPolicyOutputReference | DataKeycloakRealmOtpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmOtpPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKeycloakRealmOtpPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmOtpPolicy | undefined) {
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

  // digits - computed: true, optional: false, required: false
  public get digits() {
    return this.getNumberAttribute('digits');
  }

  // initial_counter - computed: true, optional: false, required: false
  public get initialCounter() {
    return this.getNumberAttribute('initial_counter');
  }

  // look_ahead_window - computed: true, optional: false, required: false
  public get lookAheadWindow() {
    return this.getNumberAttribute('look_ahead_window');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataKeycloakRealmSecurityDefensesBruteForceDetection {
}

export function dataKeycloakRealmSecurityDefensesBruteForceDetectionToTerraform(struct?: DataKeycloakRealmSecurityDefensesBruteForceDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmSecurityDefensesBruteForceDetectionToHclTerraform(struct?: DataKeycloakRealmSecurityDefensesBruteForceDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmSecurityDefensesBruteForceDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmSecurityDefensesBruteForceDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmSecurityDefensesBruteForceDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // failure_reset_time_seconds - computed: true, optional: false, required: false
  public get failureResetTimeSeconds() {
    return this.getNumberAttribute('failure_reset_time_seconds');
  }

  // max_failure_wait_seconds - computed: true, optional: false, required: false
  public get maxFailureWaitSeconds() {
    return this.getNumberAttribute('max_failure_wait_seconds');
  }

  // max_login_failures - computed: true, optional: false, required: false
  public get maxLoginFailures() {
    return this.getNumberAttribute('max_login_failures');
  }

  // minimum_quick_login_wait_seconds - computed: true, optional: false, required: false
  public get minimumQuickLoginWaitSeconds() {
    return this.getNumberAttribute('minimum_quick_login_wait_seconds');
  }

  // permanent_lockout - computed: true, optional: false, required: false
  public get permanentLockout() {
    return this.getBooleanAttribute('permanent_lockout');
  }

  // quick_login_check_milli_seconds - computed: true, optional: false, required: false
  public get quickLoginCheckMilliSeconds() {
    return this.getNumberAttribute('quick_login_check_milli_seconds');
  }

  // wait_increment_seconds - computed: true, optional: false, required: false
  public get waitIncrementSeconds() {
    return this.getNumberAttribute('wait_increment_seconds');
  }
}

export class DataKeycloakRealmSecurityDefensesBruteForceDetectionList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmSecurityDefensesBruteForceDetection[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmSecurityDefensesBruteForceDetectionOutputReference {
    return new DataKeycloakRealmSecurityDefensesBruteForceDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmSecurityDefensesHeaders {
}

export function dataKeycloakRealmSecurityDefensesHeadersToTerraform(struct?: DataKeycloakRealmSecurityDefensesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmSecurityDefensesHeadersToHclTerraform(struct?: DataKeycloakRealmSecurityDefensesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmSecurityDefensesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmSecurityDefensesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmSecurityDefensesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // content_security_policy - computed: true, optional: false, required: false
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }

  // content_security_policy_report_only - computed: true, optional: false, required: false
  public get contentSecurityPolicyReportOnly() {
    return this.getStringAttribute('content_security_policy_report_only');
  }

  // referrer_policy - computed: true, optional: false, required: false
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }

  // strict_transport_security - computed: true, optional: false, required: false
  public get strictTransportSecurity() {
    return this.getStringAttribute('strict_transport_security');
  }

  // x_content_type_options - computed: true, optional: false, required: false
  public get xContentTypeOptions() {
    return this.getStringAttribute('x_content_type_options');
  }

  // x_frame_options - computed: true, optional: false, required: false
  public get xFrameOptions() {
    return this.getStringAttribute('x_frame_options');
  }

  // x_robots_tag - computed: true, optional: false, required: false
  public get xRobotsTag() {
    return this.getStringAttribute('x_robots_tag');
  }

  // x_xss_protection - computed: true, optional: false, required: false
  public get xXssProtection() {
    return this.getStringAttribute('x_xss_protection');
  }
}

export class DataKeycloakRealmSecurityDefensesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmSecurityDefensesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmSecurityDefensesHeadersOutputReference {
    return new DataKeycloakRealmSecurityDefensesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmSecurityDefenses {
  /**
  * brute_force_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#brute_force_detection DataKeycloakRealm#brute_force_detection}
  */
  readonly bruteForceDetection?: DataKeycloakRealmSecurityDefensesBruteForceDetection[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#headers DataKeycloakRealm#headers}
  */
  readonly headers?: DataKeycloakRealmSecurityDefensesHeaders[] | cdktf.IResolvable;
}

export function dataKeycloakRealmSecurityDefensesToTerraform(struct?: DataKeycloakRealmSecurityDefenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brute_force_detection: cdktf.listMapper(dataKeycloakRealmSecurityDefensesBruteForceDetectionToTerraform, true)(struct!.bruteForceDetection),
    headers: cdktf.listMapper(dataKeycloakRealmSecurityDefensesHeadersToTerraform, true)(struct!.headers),
  }
}


export function dataKeycloakRealmSecurityDefensesToHclTerraform(struct?: DataKeycloakRealmSecurityDefenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brute_force_detection: {
      value: cdktf.listMapperHcl(dataKeycloakRealmSecurityDefensesBruteForceDetectionToHclTerraform, true)(struct!.bruteForceDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DataKeycloakRealmSecurityDefensesBruteForceDetectionList",
    },
    headers: {
      value: cdktf.listMapperHcl(dataKeycloakRealmSecurityDefensesHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataKeycloakRealmSecurityDefensesHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeycloakRealmSecurityDefensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmSecurityDefenses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bruteForceDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceDetection = this._bruteForceDetection?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmSecurityDefenses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bruteForceDetection.internalValue = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bruteForceDetection.internalValue = value.bruteForceDetection;
      this._headers.internalValue = value.headers;
    }
  }

  // brute_force_detection - computed: false, optional: true, required: false
  private _bruteForceDetection = new DataKeycloakRealmSecurityDefensesBruteForceDetectionList(this, "brute_force_detection", false);
  public get bruteForceDetection() {
    return this._bruteForceDetection;
  }
  public putBruteForceDetection(value: DataKeycloakRealmSecurityDefensesBruteForceDetection[] | cdktf.IResolvable) {
    this._bruteForceDetection.internalValue = value;
  }
  public resetBruteForceDetection() {
    this._bruteForceDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceDetectionInput() {
    return this._bruteForceDetection.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataKeycloakRealmSecurityDefensesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataKeycloakRealmSecurityDefensesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

export class DataKeycloakRealmSecurityDefensesList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmSecurityDefenses[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmSecurityDefensesOutputReference {
    return new DataKeycloakRealmSecurityDefensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmSmtpServerAuth {
}

export function dataKeycloakRealmSmtpServerAuthToTerraform(struct?: DataKeycloakRealmSmtpServerAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmSmtpServerAuthToHclTerraform(struct?: DataKeycloakRealmSmtpServerAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmSmtpServerAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmSmtpServerAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmSmtpServerAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataKeycloakRealmSmtpServerAuthList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmSmtpServerAuth[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmSmtpServerAuthOutputReference {
    return new DataKeycloakRealmSmtpServerAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmSmtpServerTokenAuth {
}

export function dataKeycloakRealmSmtpServerTokenAuthToTerraform(struct?: DataKeycloakRealmSmtpServerTokenAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmSmtpServerTokenAuthToHclTerraform(struct?: DataKeycloakRealmSmtpServerTokenAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmSmtpServerTokenAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmSmtpServerTokenAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmSmtpServerTokenAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataKeycloakRealmSmtpServerTokenAuthList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmSmtpServerTokenAuth[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmSmtpServerTokenAuthOutputReference {
    return new DataKeycloakRealmSmtpServerTokenAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmSmtpServer {
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#auth DataKeycloakRealm#auth}
  */
  readonly auth?: DataKeycloakRealmSmtpServerAuth[] | cdktf.IResolvable;
  /**
  * token_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#token_auth DataKeycloakRealm#token_auth}
  */
  readonly tokenAuth?: DataKeycloakRealmSmtpServerTokenAuth[] | cdktf.IResolvable;
}

export function dataKeycloakRealmSmtpServerToTerraform(struct?: DataKeycloakRealmSmtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.listMapper(dataKeycloakRealmSmtpServerAuthToTerraform, true)(struct!.auth),
    token_auth: cdktf.listMapper(dataKeycloakRealmSmtpServerTokenAuthToTerraform, true)(struct!.tokenAuth),
  }
}


export function dataKeycloakRealmSmtpServerToHclTerraform(struct?: DataKeycloakRealmSmtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.listMapperHcl(dataKeycloakRealmSmtpServerAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "DataKeycloakRealmSmtpServerAuthList",
    },
    token_auth: {
      value: cdktf.listMapperHcl(dataKeycloakRealmSmtpServerTokenAuthToHclTerraform, true)(struct!.tokenAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataKeycloakRealmSmtpServerTokenAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeycloakRealmSmtpServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeycloakRealmSmtpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tokenAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuth = this._tokenAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmSmtpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._tokenAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._tokenAuth.internalValue = value.tokenAuth;
    }
  }

  // envelope_from - computed: true, optional: false, required: false
  public get envelopeFrom() {
    return this.getStringAttribute('envelope_from');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // from_display_name - computed: true, optional: false, required: false
  public get fromDisplayName() {
    return this.getStringAttribute('from_display_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // reply_to - computed: true, optional: false, required: false
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }

  // reply_to_display_name - computed: true, optional: false, required: false
  public get replyToDisplayName() {
    return this.getStringAttribute('reply_to_display_name');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // starttls - computed: true, optional: false, required: false
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataKeycloakRealmSmtpServerAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataKeycloakRealmSmtpServerAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // token_auth - computed: false, optional: true, required: false
  private _tokenAuth = new DataKeycloakRealmSmtpServerTokenAuthList(this, "token_auth", false);
  public get tokenAuth() {
    return this._tokenAuth;
  }
  public putTokenAuth(value: DataKeycloakRealmSmtpServerTokenAuth[] | cdktf.IResolvable) {
    this._tokenAuth.internalValue = value;
  }
  public resetTokenAuth() {
    this._tokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthInput() {
    return this._tokenAuth.internalValue;
  }
}

export class DataKeycloakRealmSmtpServerList extends cdktf.ComplexList {
  public internalValue? : DataKeycloakRealmSmtpServer[] | cdktf.IResolvable

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
  public get(index: number): DataKeycloakRealmSmtpServerOutputReference {
    return new DataKeycloakRealmSmtpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakRealmWebAuthnPasswordlessPolicy {
}

export function dataKeycloakRealmWebAuthnPasswordlessPolicyToTerraform(struct?: DataKeycloakRealmWebAuthnPasswordlessPolicyOutputReference | DataKeycloakRealmWebAuthnPasswordlessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmWebAuthnPasswordlessPolicyToHclTerraform(struct?: DataKeycloakRealmWebAuthnPasswordlessPolicyOutputReference | DataKeycloakRealmWebAuthnPasswordlessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmWebAuthnPasswordlessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKeycloakRealmWebAuthnPasswordlessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmWebAuthnPasswordlessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acceptable_aaguids - computed: true, optional: false, required: false
  public get acceptableAaguids() {
    return cdktf.Fn.tolist(this.getListAttribute('acceptable_aaguids'));
  }

  // attestation_conveyance_preference - computed: true, optional: false, required: false
  public get attestationConveyancePreference() {
    return this.getStringAttribute('attestation_conveyance_preference');
  }

  // authenticator_attachment - computed: true, optional: false, required: false
  public get authenticatorAttachment() {
    return this.getStringAttribute('authenticator_attachment');
  }

  // avoid_same_authenticator_register - computed: true, optional: false, required: false
  public get avoidSameAuthenticatorRegister() {
    return this.getBooleanAttribute('avoid_same_authenticator_register');
  }

  // create_timeout - computed: true, optional: false, required: false
  public get createTimeout() {
    return this.getNumberAttribute('create_timeout');
  }

  // extra_origins - computed: true, optional: false, required: false
  public get extraOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_origins'));
  }

  // relying_party_entity_name - computed: true, optional: false, required: false
  public get relyingPartyEntityName() {
    return this.getStringAttribute('relying_party_entity_name');
  }

  // relying_party_id - computed: true, optional: false, required: false
  public get relyingPartyId() {
    return this.getStringAttribute('relying_party_id');
  }

  // require_resident_key - computed: true, optional: false, required: false
  public get requireResidentKey() {
    return this.getStringAttribute('require_resident_key');
  }

  // signature_algorithms - computed: true, optional: false, required: false
  public get signatureAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_algorithms'));
  }

  // user_verification_requirement - computed: true, optional: false, required: false
  public get userVerificationRequirement() {
    return this.getStringAttribute('user_verification_requirement');
  }
}
export interface DataKeycloakRealmWebAuthnPolicy {
}

export function dataKeycloakRealmWebAuthnPolicyToTerraform(struct?: DataKeycloakRealmWebAuthnPolicyOutputReference | DataKeycloakRealmWebAuthnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakRealmWebAuthnPolicyToHclTerraform(struct?: DataKeycloakRealmWebAuthnPolicyOutputReference | DataKeycloakRealmWebAuthnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakRealmWebAuthnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKeycloakRealmWebAuthnPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakRealmWebAuthnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acceptable_aaguids - computed: true, optional: false, required: false
  public get acceptableAaguids() {
    return cdktf.Fn.tolist(this.getListAttribute('acceptable_aaguids'));
  }

  // attestation_conveyance_preference - computed: true, optional: false, required: false
  public get attestationConveyancePreference() {
    return this.getStringAttribute('attestation_conveyance_preference');
  }

  // authenticator_attachment - computed: true, optional: false, required: false
  public get authenticatorAttachment() {
    return this.getStringAttribute('authenticator_attachment');
  }

  // avoid_same_authenticator_register - computed: true, optional: false, required: false
  public get avoidSameAuthenticatorRegister() {
    return this.getBooleanAttribute('avoid_same_authenticator_register');
  }

  // create_timeout - computed: true, optional: false, required: false
  public get createTimeout() {
    return this.getNumberAttribute('create_timeout');
  }

  // extra_origins - computed: true, optional: false, required: false
  public get extraOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_origins'));
  }

  // relying_party_entity_name - computed: true, optional: false, required: false
  public get relyingPartyEntityName() {
    return this.getStringAttribute('relying_party_entity_name');
  }

  // relying_party_id - computed: true, optional: false, required: false
  public get relyingPartyId() {
    return this.getStringAttribute('relying_party_id');
  }

  // require_resident_key - computed: true, optional: false, required: false
  public get requireResidentKey() {
    return this.getStringAttribute('require_resident_key');
  }

  // signature_algorithms - computed: true, optional: false, required: false
  public get signatureAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_algorithms'));
  }

  // user_verification_requirement - computed: true, optional: false, required: false
  public get userVerificationRequirement() {
    return this.getStringAttribute('user_verification_requirement');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm keycloak_realm}
*/
export class DataKeycloakRealm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeycloakRealm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeycloakRealm to import
  * @param importFromId The id of the existing DataKeycloakRealm that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeycloakRealm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/data-sources/realm keycloak_realm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeycloakRealmConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeycloakRealmConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._defaultDefaultClientScopes = config.defaultDefaultClientScopes;
    this._defaultOptionalClientScopes = config.defaultOptionalClientScopes;
    this._displayNameHtml = config.displayNameHtml;
    this._id = config.id;
    this._realm = config.realm;
    this._internationalization.internalValue = config.internationalization;
    this._otpPolicy.internalValue = config.otpPolicy;
    this._securityDefenses.internalValue = config.securityDefenses;
    this._smtpServer.internalValue = config.smtpServer;
    this._webAuthnPasswordlessPolicy.internalValue = config.webAuthnPasswordlessPolicy;
    this._webAuthnPolicy.internalValue = config.webAuthnPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_code_lifespan - computed: true, optional: false, required: false
  public get accessCodeLifespan() {
    return this.getStringAttribute('access_code_lifespan');
  }

  // access_code_lifespan_login - computed: true, optional: false, required: false
  public get accessCodeLifespanLogin() {
    return this.getStringAttribute('access_code_lifespan_login');
  }

  // access_code_lifespan_user_action - computed: true, optional: false, required: false
  public get accessCodeLifespanUserAction() {
    return this.getStringAttribute('access_code_lifespan_user_action');
  }

  // access_token_lifespan - computed: true, optional: false, required: false
  public get accessTokenLifespan() {
    return this.getStringAttribute('access_token_lifespan');
  }

  // access_token_lifespan_for_implicit_flow - computed: true, optional: false, required: false
  public get accessTokenLifespanForImplicitFlow() {
    return this.getStringAttribute('access_token_lifespan_for_implicit_flow');
  }

  // account_theme - computed: true, optional: false, required: false
  public get accountTheme() {
    return this.getStringAttribute('account_theme');
  }

  // action_token_generated_by_admin_lifespan - computed: true, optional: false, required: false
  public get actionTokenGeneratedByAdminLifespan() {
    return this.getStringAttribute('action_token_generated_by_admin_lifespan');
  }

  // action_token_generated_by_user_lifespan - computed: true, optional: false, required: false
  public get actionTokenGeneratedByUserLifespan() {
    return this.getStringAttribute('action_token_generated_by_user_lifespan');
  }

  // admin_theme - computed: true, optional: false, required: false
  public get adminTheme() {
    return this.getStringAttribute('admin_theme');
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // browser_flow - computed: true, optional: false, required: false
  public get browserFlow() {
    return this.getStringAttribute('browser_flow');
  }

  // client_authentication_flow - computed: true, optional: false, required: false
  public get clientAuthenticationFlow() {
    return this.getStringAttribute('client_authentication_flow');
  }

  // client_session_idle_timeout - computed: true, optional: false, required: false
  public get clientSessionIdleTimeout() {
    return this.getStringAttribute('client_session_idle_timeout');
  }

  // client_session_max_lifespan - computed: true, optional: false, required: false
  public get clientSessionMaxLifespan() {
    return this.getStringAttribute('client_session_max_lifespan');
  }

  // default_default_client_scopes - computed: true, optional: true, required: false
  private _defaultDefaultClientScopes?: string[]; 
  public get defaultDefaultClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('default_default_client_scopes'));
  }
  public set defaultDefaultClientScopes(value: string[]) {
    this._defaultDefaultClientScopes = value;
  }
  public resetDefaultDefaultClientScopes() {
    this._defaultDefaultClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDefaultClientScopesInput() {
    return this._defaultDefaultClientScopes;
  }

  // default_optional_client_scopes - computed: true, optional: true, required: false
  private _defaultOptionalClientScopes?: string[]; 
  public get defaultOptionalClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('default_optional_client_scopes'));
  }
  public set defaultOptionalClientScopes(value: string[]) {
    this._defaultOptionalClientScopes = value;
  }
  public resetDefaultOptionalClientScopes() {
    this._defaultOptionalClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOptionalClientScopesInput() {
    return this._defaultOptionalClientScopes;
  }

  // default_signature_algorithm - computed: true, optional: false, required: false
  public get defaultSignatureAlgorithm() {
    return this.getStringAttribute('default_signature_algorithm');
  }

  // direct_grant_flow - computed: true, optional: false, required: false
  public get directGrantFlow() {
    return this.getStringAttribute('direct_grant_flow');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // display_name_html - computed: false, optional: true, required: false
  private _displayNameHtml?: string; 
  public get displayNameHtml() {
    return this.getStringAttribute('display_name_html');
  }
  public set displayNameHtml(value: string) {
    this._displayNameHtml = value;
  }
  public resetDisplayNameHtml() {
    this._displayNameHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameHtmlInput() {
    return this._displayNameHtml;
  }

  // docker_authentication_flow - computed: true, optional: false, required: false
  public get dockerAuthenticationFlow() {
    return this.getStringAttribute('docker_authentication_flow');
  }

  // duplicate_emails_allowed - computed: true, optional: false, required: false
  public get duplicateEmailsAllowed() {
    return this.getBooleanAttribute('duplicate_emails_allowed');
  }

  // edit_username_allowed - computed: true, optional: false, required: false
  public get editUsernameAllowed() {
    return this.getBooleanAttribute('edit_username_allowed');
  }

  // email_theme - computed: true, optional: false, required: false
  public get emailTheme() {
    return this.getStringAttribute('email_theme');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_broker_login_flow - computed: true, optional: false, required: false
  public get firstBrokerLoginFlow() {
    return this.getStringAttribute('first_broker_login_flow');
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // login_theme - computed: true, optional: false, required: false
  public get loginTheme() {
    return this.getStringAttribute('login_theme');
  }

  // login_with_email_allowed - computed: true, optional: false, required: false
  public get loginWithEmailAllowed() {
    return this.getBooleanAttribute('login_with_email_allowed');
  }

  // oauth2_device_code_lifespan - computed: true, optional: false, required: false
  public get oauth2DeviceCodeLifespan() {
    return this.getStringAttribute('oauth2_device_code_lifespan');
  }

  // oauth2_device_polling_interval - computed: true, optional: false, required: false
  public get oauth2DevicePollingInterval() {
    return this.getNumberAttribute('oauth2_device_polling_interval');
  }

  // offline_session_idle_timeout - computed: true, optional: false, required: false
  public get offlineSessionIdleTimeout() {
    return this.getStringAttribute('offline_session_idle_timeout');
  }

  // offline_session_max_lifespan - computed: true, optional: false, required: false
  public get offlineSessionMaxLifespan() {
    return this.getStringAttribute('offline_session_max_lifespan');
  }

  // offline_session_max_lifespan_enabled - computed: true, optional: false, required: false
  public get offlineSessionMaxLifespanEnabled() {
    return this.getBooleanAttribute('offline_session_max_lifespan_enabled');
  }

  // organizations_enabled - computed: true, optional: false, required: false
  public get organizationsEnabled() {
    return this.getBooleanAttribute('organizations_enabled');
  }

  // password_policy - computed: true, optional: false, required: false
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // refresh_token_max_reuse - computed: true, optional: false, required: false
  public get refreshTokenMaxReuse() {
    return this.getNumberAttribute('refresh_token_max_reuse');
  }

  // registration_allowed - computed: true, optional: false, required: false
  public get registrationAllowed() {
    return this.getBooleanAttribute('registration_allowed');
  }

  // registration_email_as_username - computed: true, optional: false, required: false
  public get registrationEmailAsUsername() {
    return this.getBooleanAttribute('registration_email_as_username');
  }

  // registration_flow - computed: true, optional: false, required: false
  public get registrationFlow() {
    return this.getStringAttribute('registration_flow');
  }

  // remember_me - computed: true, optional: false, required: false
  public get rememberMe() {
    return this.getBooleanAttribute('remember_me');
  }

  // reset_credentials_flow - computed: true, optional: false, required: false
  public get resetCredentialsFlow() {
    return this.getStringAttribute('reset_credentials_flow');
  }

  // reset_password_allowed - computed: true, optional: false, required: false
  public get resetPasswordAllowed() {
    return this.getBooleanAttribute('reset_password_allowed');
  }

  // revoke_refresh_token - computed: true, optional: false, required: false
  public get revokeRefreshToken() {
    return this.getBooleanAttribute('revoke_refresh_token');
  }

  // ssl_required - computed: true, optional: false, required: false
  public get sslRequired() {
    return this.getStringAttribute('ssl_required');
  }

  // sso_session_idle_timeout - computed: true, optional: false, required: false
  public get ssoSessionIdleTimeout() {
    return this.getStringAttribute('sso_session_idle_timeout');
  }

  // sso_session_idle_timeout_remember_me - computed: true, optional: false, required: false
  public get ssoSessionIdleTimeoutRememberMe() {
    return this.getStringAttribute('sso_session_idle_timeout_remember_me');
  }

  // sso_session_max_lifespan - computed: true, optional: false, required: false
  public get ssoSessionMaxLifespan() {
    return this.getStringAttribute('sso_session_max_lifespan');
  }

  // sso_session_max_lifespan_remember_me - computed: true, optional: false, required: false
  public get ssoSessionMaxLifespanRememberMe() {
    return this.getStringAttribute('sso_session_max_lifespan_remember_me');
  }

  // user_managed_access - computed: true, optional: false, required: false
  public get userManagedAccess() {
    return this.getBooleanAttribute('user_managed_access');
  }

  // verify_email - computed: true, optional: false, required: false
  public get verifyEmail() {
    return this.getBooleanAttribute('verify_email');
  }

  // internationalization - computed: false, optional: true, required: false
  private _internationalization = new DataKeycloakRealmInternationalizationList(this, "internationalization", false);
  public get internationalization() {
    return this._internationalization;
  }
  public putInternationalization(value: DataKeycloakRealmInternationalization[] | cdktf.IResolvable) {
    this._internationalization.internalValue = value;
  }
  public resetInternationalization() {
    this._internationalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalizationInput() {
    return this._internationalization.internalValue;
  }

  // otp_policy - computed: false, optional: true, required: false
  private _otpPolicy = new DataKeycloakRealmOtpPolicyOutputReference(this, "otp_policy");
  public get otpPolicy() {
    return this._otpPolicy;
  }
  public putOtpPolicy(value: DataKeycloakRealmOtpPolicy) {
    this._otpPolicy.internalValue = value;
  }
  public resetOtpPolicy() {
    this._otpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyInput() {
    return this._otpPolicy.internalValue;
  }

  // security_defenses - computed: false, optional: true, required: false
  private _securityDefenses = new DataKeycloakRealmSecurityDefensesList(this, "security_defenses", false);
  public get securityDefenses() {
    return this._securityDefenses;
  }
  public putSecurityDefenses(value: DataKeycloakRealmSecurityDefenses[] | cdktf.IResolvable) {
    this._securityDefenses.internalValue = value;
  }
  public resetSecurityDefenses() {
    this._securityDefenses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDefensesInput() {
    return this._securityDefenses.internalValue;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer = new DataKeycloakRealmSmtpServerList(this, "smtp_server", false);
  public get smtpServer() {
    return this._smtpServer;
  }
  public putSmtpServer(value: DataKeycloakRealmSmtpServer[] | cdktf.IResolvable) {
    this._smtpServer.internalValue = value;
  }
  public resetSmtpServer() {
    this._smtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer.internalValue;
  }

  // web_authn_passwordless_policy - computed: false, optional: true, required: false
  private _webAuthnPasswordlessPolicy = new DataKeycloakRealmWebAuthnPasswordlessPolicyOutputReference(this, "web_authn_passwordless_policy");
  public get webAuthnPasswordlessPolicy() {
    return this._webAuthnPasswordlessPolicy;
  }
  public putWebAuthnPasswordlessPolicy(value: DataKeycloakRealmWebAuthnPasswordlessPolicy) {
    this._webAuthnPasswordlessPolicy.internalValue = value;
  }
  public resetWebAuthnPasswordlessPolicy() {
    this._webAuthnPasswordlessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthnPasswordlessPolicyInput() {
    return this._webAuthnPasswordlessPolicy.internalValue;
  }

  // web_authn_policy - computed: false, optional: true, required: false
  private _webAuthnPolicy = new DataKeycloakRealmWebAuthnPolicyOutputReference(this, "web_authn_policy");
  public get webAuthnPolicy() {
    return this._webAuthnPolicy;
  }
  public putWebAuthnPolicy(value: DataKeycloakRealmWebAuthnPolicy) {
    this._webAuthnPolicy.internalValue = value;
  }
  public resetWebAuthnPolicy() {
    this._webAuthnPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthnPolicyInput() {
    return this._webAuthnPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      default_default_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultDefaultClientScopes),
      default_optional_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultOptionalClientScopes),
      display_name_html: cdktf.stringToTerraform(this._displayNameHtml),
      id: cdktf.stringToTerraform(this._id),
      realm: cdktf.stringToTerraform(this._realm),
      internationalization: cdktf.listMapper(dataKeycloakRealmInternationalizationToTerraform, true)(this._internationalization.internalValue),
      otp_policy: dataKeycloakRealmOtpPolicyToTerraform(this._otpPolicy.internalValue),
      security_defenses: cdktf.listMapper(dataKeycloakRealmSecurityDefensesToTerraform, true)(this._securityDefenses.internalValue),
      smtp_server: cdktf.listMapper(dataKeycloakRealmSmtpServerToTerraform, true)(this._smtpServer.internalValue),
      web_authn_passwordless_policy: dataKeycloakRealmWebAuthnPasswordlessPolicyToTerraform(this._webAuthnPasswordlessPolicy.internalValue),
      web_authn_policy: dataKeycloakRealmWebAuthnPolicyToTerraform(this._webAuthnPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_default_client_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultDefaultClientScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_optional_client_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultOptionalClientScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name_html: {
        value: cdktf.stringToHclTerraform(this._displayNameHtml),
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
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internationalization: {
        value: cdktf.listMapperHcl(dataKeycloakRealmInternationalizationToHclTerraform, true)(this._internationalization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKeycloakRealmInternationalizationList",
      },
      otp_policy: {
        value: dataKeycloakRealmOtpPolicyToHclTerraform(this._otpPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKeycloakRealmOtpPolicyList",
      },
      security_defenses: {
        value: cdktf.listMapperHcl(dataKeycloakRealmSecurityDefensesToHclTerraform, true)(this._securityDefenses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKeycloakRealmSecurityDefensesList",
      },
      smtp_server: {
        value: cdktf.listMapperHcl(dataKeycloakRealmSmtpServerToHclTerraform, true)(this._smtpServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKeycloakRealmSmtpServerList",
      },
      web_authn_passwordless_policy: {
        value: dataKeycloakRealmWebAuthnPasswordlessPolicyToHclTerraform(this._webAuthnPasswordlessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKeycloakRealmWebAuthnPasswordlessPolicyList",
      },
      web_authn_policy: {
        value: dataKeycloakRealmWebAuthnPolicyToHclTerraform(this._webAuthnPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKeycloakRealmWebAuthnPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
