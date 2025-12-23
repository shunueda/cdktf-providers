// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/attack_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0AttackProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/attack_protection#id DataAuth0AttackProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAuth0AttackProtectionBotDetection {
}

export function dataAuth0AttackProtectionBotDetectionToTerraform(struct?: DataAuth0AttackProtectionBotDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionBotDetectionToHclTerraform(struct?: DataAuth0AttackProtectionBotDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionBotDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionBotDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionBotDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlist - computed: true, optional: false, required: false
  public get allowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist'));
  }

  // bot_detection_level - computed: true, optional: false, required: false
  public get botDetectionLevel() {
    return this.getStringAttribute('bot_detection_level');
  }

  // challenge_password_policy - computed: true, optional: false, required: false
  public get challengePasswordPolicy() {
    return this.getStringAttribute('challenge_password_policy');
  }

  // challenge_password_reset_policy - computed: true, optional: false, required: false
  public get challengePasswordResetPolicy() {
    return this.getStringAttribute('challenge_password_reset_policy');
  }

  // challenge_passwordless_policy - computed: true, optional: false, required: false
  public get challengePasswordlessPolicy() {
    return this.getStringAttribute('challenge_passwordless_policy');
  }

  // monitoring_mode_enabled - computed: true, optional: false, required: false
  public get monitoringModeEnabled() {
    return this.getBooleanAttribute('monitoring_mode_enabled');
  }
}

export class DataAuth0AttackProtectionBotDetectionList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionBotDetectionOutputReference {
    return new DataAuth0AttackProtectionBotDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePassword {
}

export function dataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordToTerraform(struct?: DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordToHclTerraform(struct?: DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shields - computed: true, optional: false, required: false
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
}

export class DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference {
    return new DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistration {
}

export function dataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationToTerraform(struct?: DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationToHclTerraform(struct?: DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shields - computed: true, optional: false, required: false
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
}

export class DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference {
    return new DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionBreachedPasswordDetection {
}

export function dataAuth0AttackProtectionBreachedPasswordDetectionToTerraform(struct?: DataAuth0AttackProtectionBreachedPasswordDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionBreachedPasswordDetectionToHclTerraform(struct?: DataAuth0AttackProtectionBreachedPasswordDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionBreachedPasswordDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionBreachedPasswordDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionBreachedPasswordDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_notification_frequency - computed: true, optional: false, required: false
  public get adminNotificationFrequency() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_notification_frequency'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // pre_change_password - computed: true, optional: false, required: false
  private _preChangePassword = new DataAuth0AttackProtectionBreachedPasswordDetectionPreChangePasswordList(this, "pre_change_password", false);
  public get preChangePassword() {
    return this._preChangePassword;
  }

  // pre_user_registration - computed: true, optional: false, required: false
  private _preUserRegistration = new DataAuth0AttackProtectionBreachedPasswordDetectionPreUserRegistrationList(this, "pre_user_registration", false);
  public get preUserRegistration() {
    return this._preUserRegistration;
  }

  // shields - computed: true, optional: false, required: false
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
}

export class DataAuth0AttackProtectionBreachedPasswordDetectionList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionBreachedPasswordDetectionOutputReference {
    return new DataAuth0AttackProtectionBreachedPasswordDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionBruteForceProtection {
}

export function dataAuth0AttackProtectionBruteForceProtectionToTerraform(struct?: DataAuth0AttackProtectionBruteForceProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionBruteForceProtectionToHclTerraform(struct?: DataAuth0AttackProtectionBruteForceProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionBruteForceProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionBruteForceProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionBruteForceProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlist - computed: true, optional: false, required: false
  public get allowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_attempts - computed: true, optional: false, required: false
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // shields - computed: true, optional: false, required: false
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
}

export class DataAuth0AttackProtectionBruteForceProtectionList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionBruteForceProtectionOutputReference {
    return new DataAuth0AttackProtectionBruteForceProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptchaArkose {
}

export function dataAuth0AttackProtectionCaptchaArkoseToTerraform(struct?: DataAuth0AttackProtectionCaptchaArkose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaArkoseToHclTerraform(struct?: DataAuth0AttackProtectionCaptchaArkose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaArkoseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptchaArkose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptchaArkose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_subdomain - computed: true, optional: false, required: false
  public get clientSubdomain() {
    return this.getStringAttribute('client_subdomain');
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // site_key - computed: true, optional: false, required: false
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }

  // verify_subdomain - computed: true, optional: false, required: false
  public get verifySubdomain() {
    return this.getStringAttribute('verify_subdomain');
  }
}

export class DataAuth0AttackProtectionCaptchaArkoseList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaArkoseOutputReference {
    return new DataAuth0AttackProtectionCaptchaArkoseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptchaAuthChallenge {
}

export function dataAuth0AttackProtectionCaptchaAuthChallengeToTerraform(struct?: DataAuth0AttackProtectionCaptchaAuthChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaAuthChallengeToHclTerraform(struct?: DataAuth0AttackProtectionCaptchaAuthChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaAuthChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptchaAuthChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptchaAuthChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
}

export class DataAuth0AttackProtectionCaptchaAuthChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaAuthChallengeOutputReference {
    return new DataAuth0AttackProtectionCaptchaAuthChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptchaFriendlyCaptcha {
}

export function dataAuth0AttackProtectionCaptchaFriendlyCaptchaToTerraform(struct?: DataAuth0AttackProtectionCaptchaFriendlyCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaFriendlyCaptchaToHclTerraform(struct?: DataAuth0AttackProtectionCaptchaFriendlyCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaFriendlyCaptchaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptchaFriendlyCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptchaFriendlyCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // site_key - computed: true, optional: false, required: false
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
}

export class DataAuth0AttackProtectionCaptchaFriendlyCaptchaList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaFriendlyCaptchaOutputReference {
    return new DataAuth0AttackProtectionCaptchaFriendlyCaptchaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptchaHcaptcha {
}

export function dataAuth0AttackProtectionCaptchaHcaptchaToTerraform(struct?: DataAuth0AttackProtectionCaptchaHcaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaHcaptchaToHclTerraform(struct?: DataAuth0AttackProtectionCaptchaHcaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaHcaptchaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptchaHcaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptchaHcaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // site_key - computed: true, optional: false, required: false
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
}

export class DataAuth0AttackProtectionCaptchaHcaptchaList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaHcaptchaOutputReference {
    return new DataAuth0AttackProtectionCaptchaHcaptchaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptchaRecaptchaEnterprise {
}

export function dataAuth0AttackProtectionCaptchaRecaptchaEnterpriseToTerraform(struct?: DataAuth0AttackProtectionCaptchaRecaptchaEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaRecaptchaEnterpriseToHclTerraform(struct?: DataAuth0AttackProtectionCaptchaRecaptchaEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaRecaptchaEnterpriseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptchaRecaptchaEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptchaRecaptchaEnterprise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // site_key - computed: true, optional: false, required: false
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
}

export class DataAuth0AttackProtectionCaptchaRecaptchaEnterpriseList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaRecaptchaEnterpriseOutputReference {
    return new DataAuth0AttackProtectionCaptchaRecaptchaEnterpriseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptchaRecaptchaV2 {
}

export function dataAuth0AttackProtectionCaptchaRecaptchaV2ToTerraform(struct?: DataAuth0AttackProtectionCaptchaRecaptchaV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaRecaptchaV2ToHclTerraform(struct?: DataAuth0AttackProtectionCaptchaRecaptchaV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaRecaptchaV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptchaRecaptchaV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptchaRecaptchaV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // site_key - computed: true, optional: false, required: false
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
}

export class DataAuth0AttackProtectionCaptchaRecaptchaV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaRecaptchaV2OutputReference {
    return new DataAuth0AttackProtectionCaptchaRecaptchaV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionCaptcha {
}

export function dataAuth0AttackProtectionCaptchaToTerraform(struct?: DataAuth0AttackProtectionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionCaptchaToHclTerraform(struct?: DataAuth0AttackProtectionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionCaptchaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_provider_id - computed: true, optional: false, required: false
  public get activeProviderId() {
    return this.getStringAttribute('active_provider_id');
  }

  // arkose - computed: true, optional: false, required: false
  private _arkose = new DataAuth0AttackProtectionCaptchaArkoseList(this, "arkose", false);
  public get arkose() {
    return this._arkose;
  }

  // auth_challenge - computed: true, optional: false, required: false
  private _authChallenge = new DataAuth0AttackProtectionCaptchaAuthChallengeList(this, "auth_challenge", false);
  public get authChallenge() {
    return this._authChallenge;
  }

  // friendly_captcha - computed: true, optional: false, required: false
  private _friendlyCaptcha = new DataAuth0AttackProtectionCaptchaFriendlyCaptchaList(this, "friendly_captcha", false);
  public get friendlyCaptcha() {
    return this._friendlyCaptcha;
  }

  // hcaptcha - computed: true, optional: false, required: false
  private _hcaptcha = new DataAuth0AttackProtectionCaptchaHcaptchaList(this, "hcaptcha", false);
  public get hcaptcha() {
    return this._hcaptcha;
  }

  // recaptcha_enterprise - computed: true, optional: false, required: false
  private _recaptchaEnterprise = new DataAuth0AttackProtectionCaptchaRecaptchaEnterpriseList(this, "recaptcha_enterprise", false);
  public get recaptchaEnterprise() {
    return this._recaptchaEnterprise;
  }

  // recaptcha_v2 - computed: true, optional: false, required: false
  private _recaptchaV2 = new DataAuth0AttackProtectionCaptchaRecaptchaV2List(this, "recaptcha_v2", false);
  public get recaptchaV2() {
    return this._recaptchaV2;
  }
}

export class DataAuth0AttackProtectionCaptchaList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionCaptchaOutputReference {
    return new DataAuth0AttackProtectionCaptchaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionSuspiciousIpThrottlingPreLogin {
}

export function dataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginToTerraform(struct?: DataAuth0AttackProtectionSuspiciousIpThrottlingPreLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginToHclTerraform(struct?: DataAuth0AttackProtectionSuspiciousIpThrottlingPreLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionSuspiciousIpThrottlingPreLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionSuspiciousIpThrottlingPreLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_attempts - computed: true, optional: false, required: false
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }

  // rate - computed: true, optional: false, required: false
  public get rate() {
    return this.getNumberAttribute('rate');
  }
}

export class DataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference {
    return new DataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistration {
}

export function dataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationToTerraform(struct?: DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationToHclTerraform(struct?: DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_attempts - computed: true, optional: false, required: false
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }

  // rate - computed: true, optional: false, required: false
  public get rate() {
    return this.getNumberAttribute('rate');
  }
}

export class DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference {
    return new DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0AttackProtectionSuspiciousIpThrottling {
}

export function dataAuth0AttackProtectionSuspiciousIpThrottlingToTerraform(struct?: DataAuth0AttackProtectionSuspiciousIpThrottling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0AttackProtectionSuspiciousIpThrottlingToHclTerraform(struct?: DataAuth0AttackProtectionSuspiciousIpThrottling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0AttackProtectionSuspiciousIpThrottlingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0AttackProtectionSuspiciousIpThrottling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0AttackProtectionSuspiciousIpThrottling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlist - computed: true, optional: false, required: false
  public get allowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // pre_login - computed: true, optional: false, required: false
  private _preLogin = new DataAuth0AttackProtectionSuspiciousIpThrottlingPreLoginList(this, "pre_login", false);
  public get preLogin() {
    return this._preLogin;
  }

  // pre_user_registration - computed: true, optional: false, required: false
  private _preUserRegistration = new DataAuth0AttackProtectionSuspiciousIpThrottlingPreUserRegistrationList(this, "pre_user_registration", false);
  public get preUserRegistration() {
    return this._preUserRegistration;
  }

  // shields - computed: true, optional: false, required: false
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
}

export class DataAuth0AttackProtectionSuspiciousIpThrottlingList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0AttackProtectionSuspiciousIpThrottlingOutputReference {
    return new DataAuth0AttackProtectionSuspiciousIpThrottlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/attack_protection auth0_attack_protection}
*/
export class DataAuth0AttackProtection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_attack_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0AttackProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0AttackProtection to import
  * @param importFromId The id of the existing DataAuth0AttackProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/attack_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0AttackProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_attack_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/attack_protection auth0_attack_protection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0AttackProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuth0AttackProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_attack_protection',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_detection - computed: true, optional: false, required: false
  private _botDetection = new DataAuth0AttackProtectionBotDetectionList(this, "bot_detection", false);
  public get botDetection() {
    return this._botDetection;
  }

  // breached_password_detection - computed: true, optional: false, required: false
  private _breachedPasswordDetection = new DataAuth0AttackProtectionBreachedPasswordDetectionList(this, "breached_password_detection", false);
  public get breachedPasswordDetection() {
    return this._breachedPasswordDetection;
  }

  // brute_force_protection - computed: true, optional: false, required: false
  private _bruteForceProtection = new DataAuth0AttackProtectionBruteForceProtectionList(this, "brute_force_protection", false);
  public get bruteForceProtection() {
    return this._bruteForceProtection;
  }

  // captcha - computed: true, optional: false, required: false
  private _captcha = new DataAuth0AttackProtectionCaptchaList(this, "captcha", false);
  public get captcha() {
    return this._captcha;
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

  // suspicious_ip_throttling - computed: true, optional: false, required: false
  private _suspiciousIpThrottling = new DataAuth0AttackProtectionSuspiciousIpThrottlingList(this, "suspicious_ip_throttling", false);
  public get suspiciousIpThrottling() {
    return this._suspiciousIpThrottling;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
