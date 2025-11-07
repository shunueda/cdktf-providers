// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/attack_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0AttackProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/attack_protection#id DataAuth0AttackProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/attack_protection auth0_attack_protection}
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
  * @param importFromId The id of the existing DataAuth0AttackProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/attack_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0AttackProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_attack_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/data-sources/attack_protection auth0_attack_protection} Data Source
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
        providerVersion: '1.33.0'
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
