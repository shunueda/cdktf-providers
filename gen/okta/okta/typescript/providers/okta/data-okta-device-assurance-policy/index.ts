// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaDeviceAssurancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the user type to retrieve, conflicts with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#id DataOktaDeviceAssurancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of user type to retrieve, conflicts with `id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#name DataOktaDeviceAssurancePolicy#name}
  */
  readonly name?: string;
  /**
  * Indicates if the device contains a secure hardware functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#secure_hardware_present DataOktaDeviceAssurancePolicy#secure_hardware_present}
  */
  readonly secureHardwarePresent?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the device contains a secure hardware functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#third_party_signal_provider DataOktaDeviceAssurancePolicy#third_party_signal_provider}
  */
  readonly thirdPartySignalProvider?: DataOktaDeviceAssurancePolicyThirdPartySignalProvider;
}
export interface DataOktaDeviceAssurancePolicyDiskEncryptionType {
}

export function dataOktaDeviceAssurancePolicyDiskEncryptionTypeToTerraform(struct?: DataOktaDeviceAssurancePolicyDiskEncryptionType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDeviceAssurancePolicyDiskEncryptionTypeToHclTerraform(struct?: DataOktaDeviceAssurancePolicyDiskEncryptionType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyDiskEncryptionType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyDiskEncryptionType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}
export interface DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement {
}

export function dataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementToTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementToHclTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distance_from_latest_major - computed: true, optional: false, required: false
  public get distanceFromLatestMajor() {
    return this.getNumberAttribute('distance_from_latest_major');
  }

  // latest_security_patch - computed: true, optional: false, required: false
  public get latestSecurityPatch() {
    return this.getBooleanAttribute('latest_security_patch');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOktaDeviceAssurancePolicyOsVersion {
}

export function dataOktaDeviceAssurancePolicyOsVersionToTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDeviceAssurancePolicyOsVersionToHclTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDeviceAssurancePolicyOsVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyOsVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyOsVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic_version_requirement - computed: true, optional: false, required: false
  private _dynamicVersionRequirement = new DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference(this, "dynamic_version_requirement");
  public get dynamicVersionRequirement() {
    return this._dynamicVersionRequirement;
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
}
export interface DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement {
}

export function dataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementToTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementToHclTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distance_from_latest_major - computed: true, optional: false, required: false
  public get distanceFromLatestMajor() {
    return this.getNumberAttribute('distance_from_latest_major');
  }

  // latest_security_patch - computed: true, optional: false, required: false
  public get latestSecurityPatch() {
    return this.getBooleanAttribute('latest_security_patch');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOktaDeviceAssurancePolicyOsVersionConstraint {
}

export function dataOktaDeviceAssurancePolicyOsVersionConstraintToTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersionConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDeviceAssurancePolicyOsVersionConstraintToHclTerraform(struct?: DataOktaDeviceAssurancePolicyOsVersionConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaDeviceAssurancePolicyOsVersionConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyOsVersionConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic_version_requirement - computed: true, optional: false, required: false
  private _dynamicVersionRequirement = new DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference(this, "dynamic_version_requirement");
  public get dynamicVersionRequirement() {
    return this._dynamicVersionRequirement;
  }

  // major_version_constraint - computed: true, optional: false, required: false
  public get majorVersionConstraint() {
    return this.getStringAttribute('major_version_constraint');
  }
}

export class DataOktaDeviceAssurancePolicyOsVersionConstraintList extends cdktf.ComplexList {

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
  public get(index: number): DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference {
    return new DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaDeviceAssurancePolicyScreenlockType {
}

export function dataOktaDeviceAssurancePolicyScreenlockTypeToTerraform(struct?: DataOktaDeviceAssurancePolicyScreenlockType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDeviceAssurancePolicyScreenlockTypeToHclTerraform(struct?: DataOktaDeviceAssurancePolicyScreenlockType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyScreenlockType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyScreenlockType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}
export interface DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}
  */
  readonly minimum?: string;
}

export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionToTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum: cdktf.stringToTerraform(struct!.minimum),
  }
}


export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionToHclTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimum = value.minimum;
    }
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}
  */
  readonly minimum?: string;
}

export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionToTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum: cdktf.stringToTerraform(struct!.minimum),
  }
}


export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionToHclTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimum = value.minimum;
    }
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#allow_screen_lock DataOktaDeviceAssurancePolicy#allow_screen_lock}
  */
  readonly allowScreenLock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#browser_version DataOktaDeviceAssurancePolicy#browser_version}
  */
  readonly browserVersion?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#built_in_dns_client_enabled DataOktaDeviceAssurancePolicy#built_in_dns_client_enabled}
  */
  readonly builtInDnsClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#chrome_remote_desktop_app_blocked DataOktaDeviceAssurancePolicy#chrome_remote_desktop_app_blocked}
  */
  readonly chromeRemoteDesktopAppBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#crowd_strike_agent_id DataOktaDeviceAssurancePolicy#crowd_strike_agent_id}
  */
  readonly crowdStrikeAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#crowd_strike_customer_id DataOktaDeviceAssurancePolicy#crowd_strike_customer_id}
  */
  readonly crowdStrikeCustomerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#device_enrollment_domain DataOktaDeviceAssurancePolicy#device_enrollment_domain}
  */
  readonly deviceEnrollmentDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#disk_encrypted DataOktaDeviceAssurancePolicy#disk_encrypted}
  */
  readonly diskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#key_trust_level DataOktaDeviceAssurancePolicy#key_trust_level}
  */
  readonly keyTrustLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#managed_device DataOktaDeviceAssurancePolicy#managed_device}
  */
  readonly managedDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#os_firewall DataOktaDeviceAssurancePolicy#os_firewall}
  */
  readonly osFirewall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#os_version DataOktaDeviceAssurancePolicy#os_version}
  */
  readonly osVersion?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#password_protection_warning_trigger DataOktaDeviceAssurancePolicy#password_protection_warning_trigger}
  */
  readonly passwordProtectionWarningTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#realtime_url_check_mode DataOktaDeviceAssurancePolicy#realtime_url_check_mode}
  */
  readonly realtimeUrlCheckMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#safe_browsing_protection_level DataOktaDeviceAssurancePolicy#safe_browsing_protection_level}
  */
  readonly safeBrowsingProtectionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#screen_lock_secured DataOktaDeviceAssurancePolicy#screen_lock_secured}
  */
  readonly screenLockSecured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#site_isolation_enabled DataOktaDeviceAssurancePolicy#site_isolation_enabled}
  */
  readonly siteIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#third_party_blocking_enabled DataOktaDeviceAssurancePolicy#third_party_blocking_enabled}
  */
  readonly thirdPartyBlockingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#windows_machine_domain DataOktaDeviceAssurancePolicy#windows_machine_domain}
  */
  readonly windowsMachineDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#windows_user_domain DataOktaDeviceAssurancePolicy#windows_user_domain}
  */
  readonly windowsUserDomain?: string;
}

export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcToTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_screen_lock: cdktf.booleanToTerraform(struct!.allowScreenLock),
    browser_version: dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionToTerraform(struct!.browserVersion),
    built_in_dns_client_enabled: cdktf.booleanToTerraform(struct!.builtInDnsClientEnabled),
    chrome_remote_desktop_app_blocked: cdktf.booleanToTerraform(struct!.chromeRemoteDesktopAppBlocked),
    crowd_strike_agent_id: cdktf.stringToTerraform(struct!.crowdStrikeAgentId),
    crowd_strike_customer_id: cdktf.stringToTerraform(struct!.crowdStrikeCustomerId),
    device_enrollment_domain: cdktf.stringToTerraform(struct!.deviceEnrollmentDomain),
    disk_encrypted: cdktf.booleanToTerraform(struct!.diskEncrypted),
    key_trust_level: cdktf.stringToTerraform(struct!.keyTrustLevel),
    managed_device: cdktf.booleanToTerraform(struct!.managedDevice),
    os_firewall: cdktf.booleanToTerraform(struct!.osFirewall),
    os_version: dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionToTerraform(struct!.osVersion),
    password_protection_warning_trigger: cdktf.stringToTerraform(struct!.passwordProtectionWarningTrigger),
    realtime_url_check_mode: cdktf.booleanToTerraform(struct!.realtimeUrlCheckMode),
    safe_browsing_protection_level: cdktf.stringToTerraform(struct!.safeBrowsingProtectionLevel),
    screen_lock_secured: cdktf.booleanToTerraform(struct!.screenLockSecured),
    site_isolation_enabled: cdktf.booleanToTerraform(struct!.siteIsolationEnabled),
    third_party_blocking_enabled: cdktf.booleanToTerraform(struct!.thirdPartyBlockingEnabled),
    windows_machine_domain: cdktf.stringToTerraform(struct!.windowsMachineDomain),
    windows_user_domain: cdktf.stringToTerraform(struct!.windowsUserDomain),
  }
}


export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcToHclTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_screen_lock: {
      value: cdktf.booleanToHclTerraform(struct!.allowScreenLock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    browser_version: {
      value: dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionToHclTerraform(struct!.browserVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion",
    },
    built_in_dns_client_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.builtInDnsClientEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chrome_remote_desktop_app_blocked: {
      value: cdktf.booleanToHclTerraform(struct!.chromeRemoteDesktopAppBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crowd_strike_agent_id: {
      value: cdktf.stringToHclTerraform(struct!.crowdStrikeAgentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crowd_strike_customer_id: {
      value: cdktf.stringToHclTerraform(struct!.crowdStrikeCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_enrollment_domain: {
      value: cdktf.stringToHclTerraform(struct!.deviceEnrollmentDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.diskEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_trust_level: {
      value: cdktf.stringToHclTerraform(struct!.keyTrustLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_device: {
      value: cdktf.booleanToHclTerraform(struct!.managedDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os_firewall: {
      value: cdktf.booleanToHclTerraform(struct!.osFirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os_version: {
      value: dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionToHclTerraform(struct!.osVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion",
    },
    password_protection_warning_trigger: {
      value: cdktf.stringToHclTerraform(struct!.passwordProtectionWarningTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_url_check_mode: {
      value: cdktf.booleanToHclTerraform(struct!.realtimeUrlCheckMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    safe_browsing_protection_level: {
      value: cdktf.stringToHclTerraform(struct!.safeBrowsingProtectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screen_lock_secured: {
      value: cdktf.booleanToHclTerraform(struct!.screenLockSecured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_isolation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteIsolationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    third_party_blocking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.thirdPartyBlockingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    windows_machine_domain: {
      value: cdktf.stringToHclTerraform(struct!.windowsMachineDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_user_domain: {
      value: cdktf.stringToHclTerraform(struct!.windowsUserDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowScreenLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowScreenLock = this._allowScreenLock;
    }
    if (this._browserVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserVersion = this._browserVersion?.internalValue;
    }
    if (this._builtInDnsClientEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInDnsClientEnabled = this._builtInDnsClientEnabled;
    }
    if (this._chromeRemoteDesktopAppBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromeRemoteDesktopAppBlocked = this._chromeRemoteDesktopAppBlocked;
    }
    if (this._crowdStrikeAgentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdStrikeAgentId = this._crowdStrikeAgentId;
    }
    if (this._crowdStrikeCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdStrikeCustomerId = this._crowdStrikeCustomerId;
    }
    if (this._deviceEnrollmentDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceEnrollmentDomain = this._deviceEnrollmentDomain;
    }
    if (this._diskEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncrypted = this._diskEncrypted;
    }
    if (this._keyTrustLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTrustLevel = this._keyTrustLevel;
    }
    if (this._managedDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDevice = this._managedDevice;
    }
    if (this._osFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFirewall = this._osFirewall;
    }
    if (this._osVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion?.internalValue;
    }
    if (this._passwordProtectionWarningTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordProtectionWarningTrigger = this._passwordProtectionWarningTrigger;
    }
    if (this._realtimeUrlCheckMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeUrlCheckMode = this._realtimeUrlCheckMode;
    }
    if (this._safeBrowsingProtectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeBrowsingProtectionLevel = this._safeBrowsingProtectionLevel;
    }
    if (this._screenLockSecured !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenLockSecured = this._screenLockSecured;
    }
    if (this._siteIsolationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIsolationEnabled = this._siteIsolationEnabled;
    }
    if (this._thirdPartyBlockingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyBlockingEnabled = this._thirdPartyBlockingEnabled;
    }
    if (this._windowsMachineDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsMachineDomain = this._windowsMachineDomain;
    }
    if (this._windowsUserDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsUserDomain = this._windowsUserDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowScreenLock = undefined;
      this._browserVersion.internalValue = undefined;
      this._builtInDnsClientEnabled = undefined;
      this._chromeRemoteDesktopAppBlocked = undefined;
      this._crowdStrikeAgentId = undefined;
      this._crowdStrikeCustomerId = undefined;
      this._deviceEnrollmentDomain = undefined;
      this._diskEncrypted = undefined;
      this._keyTrustLevel = undefined;
      this._managedDevice = undefined;
      this._osFirewall = undefined;
      this._osVersion.internalValue = undefined;
      this._passwordProtectionWarningTrigger = undefined;
      this._realtimeUrlCheckMode = undefined;
      this._safeBrowsingProtectionLevel = undefined;
      this._screenLockSecured = undefined;
      this._siteIsolationEnabled = undefined;
      this._thirdPartyBlockingEnabled = undefined;
      this._windowsMachineDomain = undefined;
      this._windowsUserDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowScreenLock = value.allowScreenLock;
      this._browserVersion.internalValue = value.browserVersion;
      this._builtInDnsClientEnabled = value.builtInDnsClientEnabled;
      this._chromeRemoteDesktopAppBlocked = value.chromeRemoteDesktopAppBlocked;
      this._crowdStrikeAgentId = value.crowdStrikeAgentId;
      this._crowdStrikeCustomerId = value.crowdStrikeCustomerId;
      this._deviceEnrollmentDomain = value.deviceEnrollmentDomain;
      this._diskEncrypted = value.diskEncrypted;
      this._keyTrustLevel = value.keyTrustLevel;
      this._managedDevice = value.managedDevice;
      this._osFirewall = value.osFirewall;
      this._osVersion.internalValue = value.osVersion;
      this._passwordProtectionWarningTrigger = value.passwordProtectionWarningTrigger;
      this._realtimeUrlCheckMode = value.realtimeUrlCheckMode;
      this._safeBrowsingProtectionLevel = value.safeBrowsingProtectionLevel;
      this._screenLockSecured = value.screenLockSecured;
      this._siteIsolationEnabled = value.siteIsolationEnabled;
      this._thirdPartyBlockingEnabled = value.thirdPartyBlockingEnabled;
      this._windowsMachineDomain = value.windowsMachineDomain;
      this._windowsUserDomain = value.windowsUserDomain;
    }
  }

  // allow_screen_lock - computed: false, optional: true, required: false
  private _allowScreenLock?: boolean | cdktf.IResolvable; 
  public get allowScreenLock() {
    return this.getBooleanAttribute('allow_screen_lock');
  }
  public set allowScreenLock(value: boolean | cdktf.IResolvable) {
    this._allowScreenLock = value;
  }
  public resetAllowScreenLock() {
    this._allowScreenLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowScreenLockInput() {
    return this._allowScreenLock;
  }

  // browser_version - computed: false, optional: true, required: false
  private _browserVersion = new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference(this, "browser_version");
  public get browserVersion() {
    return this._browserVersion;
  }
  public putBrowserVersion(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion) {
    this._browserVersion.internalValue = value;
  }
  public resetBrowserVersion() {
    this._browserVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVersionInput() {
    return this._browserVersion.internalValue;
  }

  // built_in_dns_client_enabled - computed: false, optional: true, required: false
  private _builtInDnsClientEnabled?: boolean | cdktf.IResolvable; 
  public get builtInDnsClientEnabled() {
    return this.getBooleanAttribute('built_in_dns_client_enabled');
  }
  public set builtInDnsClientEnabled(value: boolean | cdktf.IResolvable) {
    this._builtInDnsClientEnabled = value;
  }
  public resetBuiltInDnsClientEnabled() {
    this._builtInDnsClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInDnsClientEnabledInput() {
    return this._builtInDnsClientEnabled;
  }

  // chrome_remote_desktop_app_blocked - computed: false, optional: true, required: false
  private _chromeRemoteDesktopAppBlocked?: boolean | cdktf.IResolvable; 
  public get chromeRemoteDesktopAppBlocked() {
    return this.getBooleanAttribute('chrome_remote_desktop_app_blocked');
  }
  public set chromeRemoteDesktopAppBlocked(value: boolean | cdktf.IResolvable) {
    this._chromeRemoteDesktopAppBlocked = value;
  }
  public resetChromeRemoteDesktopAppBlocked() {
    this._chromeRemoteDesktopAppBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromeRemoteDesktopAppBlockedInput() {
    return this._chromeRemoteDesktopAppBlocked;
  }

  // crowd_strike_agent_id - computed: false, optional: true, required: false
  private _crowdStrikeAgentId?: string; 
  public get crowdStrikeAgentId() {
    return this.getStringAttribute('crowd_strike_agent_id');
  }
  public set crowdStrikeAgentId(value: string) {
    this._crowdStrikeAgentId = value;
  }
  public resetCrowdStrikeAgentId() {
    this._crowdStrikeAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdStrikeAgentIdInput() {
    return this._crowdStrikeAgentId;
  }

  // crowd_strike_customer_id - computed: false, optional: true, required: false
  private _crowdStrikeCustomerId?: string; 
  public get crowdStrikeCustomerId() {
    return this.getStringAttribute('crowd_strike_customer_id');
  }
  public set crowdStrikeCustomerId(value: string) {
    this._crowdStrikeCustomerId = value;
  }
  public resetCrowdStrikeCustomerId() {
    this._crowdStrikeCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdStrikeCustomerIdInput() {
    return this._crowdStrikeCustomerId;
  }

  // device_enrollment_domain - computed: false, optional: true, required: false
  private _deviceEnrollmentDomain?: string; 
  public get deviceEnrollmentDomain() {
    return this.getStringAttribute('device_enrollment_domain');
  }
  public set deviceEnrollmentDomain(value: string) {
    this._deviceEnrollmentDomain = value;
  }
  public resetDeviceEnrollmentDomain() {
    this._deviceEnrollmentDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceEnrollmentDomainInput() {
    return this._deviceEnrollmentDomain;
  }

  // disk_encrypted - computed: false, optional: true, required: false
  private _diskEncrypted?: boolean | cdktf.IResolvable; 
  public get diskEncrypted() {
    return this.getBooleanAttribute('disk_encrypted');
  }
  public set diskEncrypted(value: boolean | cdktf.IResolvable) {
    this._diskEncrypted = value;
  }
  public resetDiskEncrypted() {
    this._diskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptedInput() {
    return this._diskEncrypted;
  }

  // key_trust_level - computed: false, optional: true, required: false
  private _keyTrustLevel?: string; 
  public get keyTrustLevel() {
    return this.getStringAttribute('key_trust_level');
  }
  public set keyTrustLevel(value: string) {
    this._keyTrustLevel = value;
  }
  public resetKeyTrustLevel() {
    this._keyTrustLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTrustLevelInput() {
    return this._keyTrustLevel;
  }

  // managed_device - computed: false, optional: true, required: false
  private _managedDevice?: boolean | cdktf.IResolvable; 
  public get managedDevice() {
    return this.getBooleanAttribute('managed_device');
  }
  public set managedDevice(value: boolean | cdktf.IResolvable) {
    this._managedDevice = value;
  }
  public resetManagedDevice() {
    this._managedDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDeviceInput() {
    return this._managedDevice;
  }

  // os_firewall - computed: false, optional: true, required: false
  private _osFirewall?: boolean | cdktf.IResolvable; 
  public get osFirewall() {
    return this.getBooleanAttribute('os_firewall');
  }
  public set osFirewall(value: boolean | cdktf.IResolvable) {
    this._osFirewall = value;
  }
  public resetOsFirewall() {
    this._osFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFirewallInput() {
    return this._osFirewall;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion = new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference(this, "os_version");
  public get osVersion() {
    return this._osVersion;
  }
  public putOsVersion(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion) {
    this._osVersion.internalValue = value;
  }
  public resetOsVersion() {
    this._osVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion.internalValue;
  }

  // password_protection_warning_trigger - computed: false, optional: true, required: false
  private _passwordProtectionWarningTrigger?: string; 
  public get passwordProtectionWarningTrigger() {
    return this.getStringAttribute('password_protection_warning_trigger');
  }
  public set passwordProtectionWarningTrigger(value: string) {
    this._passwordProtectionWarningTrigger = value;
  }
  public resetPasswordProtectionWarningTrigger() {
    this._passwordProtectionWarningTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordProtectionWarningTriggerInput() {
    return this._passwordProtectionWarningTrigger;
  }

  // realtime_url_check_mode - computed: false, optional: true, required: false
  private _realtimeUrlCheckMode?: boolean | cdktf.IResolvable; 
  public get realtimeUrlCheckMode() {
    return this.getBooleanAttribute('realtime_url_check_mode');
  }
  public set realtimeUrlCheckMode(value: boolean | cdktf.IResolvable) {
    this._realtimeUrlCheckMode = value;
  }
  public resetRealtimeUrlCheckMode() {
    this._realtimeUrlCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeUrlCheckModeInput() {
    return this._realtimeUrlCheckMode;
  }

  // safe_browsing_protection_level - computed: false, optional: true, required: false
  private _safeBrowsingProtectionLevel?: string; 
  public get safeBrowsingProtectionLevel() {
    return this.getStringAttribute('safe_browsing_protection_level');
  }
  public set safeBrowsingProtectionLevel(value: string) {
    this._safeBrowsingProtectionLevel = value;
  }
  public resetSafeBrowsingProtectionLevel() {
    this._safeBrowsingProtectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeBrowsingProtectionLevelInput() {
    return this._safeBrowsingProtectionLevel;
  }

  // screen_lock_secured - computed: false, optional: true, required: false
  private _screenLockSecured?: boolean | cdktf.IResolvable; 
  public get screenLockSecured() {
    return this.getBooleanAttribute('screen_lock_secured');
  }
  public set screenLockSecured(value: boolean | cdktf.IResolvable) {
    this._screenLockSecured = value;
  }
  public resetScreenLockSecured() {
    this._screenLockSecured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenLockSecuredInput() {
    return this._screenLockSecured;
  }

  // site_isolation_enabled - computed: false, optional: true, required: false
  private _siteIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get siteIsolationEnabled() {
    return this.getBooleanAttribute('site_isolation_enabled');
  }
  public set siteIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._siteIsolationEnabled = value;
  }
  public resetSiteIsolationEnabled() {
    this._siteIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIsolationEnabledInput() {
    return this._siteIsolationEnabled;
  }

  // third_party_blocking_enabled - computed: false, optional: true, required: false
  private _thirdPartyBlockingEnabled?: boolean | cdktf.IResolvable; 
  public get thirdPartyBlockingEnabled() {
    return this.getBooleanAttribute('third_party_blocking_enabled');
  }
  public set thirdPartyBlockingEnabled(value: boolean | cdktf.IResolvable) {
    this._thirdPartyBlockingEnabled = value;
  }
  public resetThirdPartyBlockingEnabled() {
    this._thirdPartyBlockingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyBlockingEnabledInput() {
    return this._thirdPartyBlockingEnabled;
  }

  // windows_machine_domain - computed: false, optional: true, required: false
  private _windowsMachineDomain?: string; 
  public get windowsMachineDomain() {
    return this.getStringAttribute('windows_machine_domain');
  }
  public set windowsMachineDomain(value: string) {
    this._windowsMachineDomain = value;
  }
  public resetWindowsMachineDomain() {
    this._windowsMachineDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsMachineDomainInput() {
    return this._windowsMachineDomain;
  }

  // windows_user_domain - computed: false, optional: true, required: false
  private _windowsUserDomain?: string; 
  public get windowsUserDomain() {
    return this.getStringAttribute('windows_user_domain');
  }
  public set windowsUserDomain(value: string) {
    this._windowsUserDomain = value;
  }
  public resetWindowsUserDomain() {
    this._windowsUserDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUserDomainInput() {
    return this._windowsUserDomain;
  }
}
export interface DataOktaDeviceAssurancePolicyThirdPartySignalProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#dtc DataOktaDeviceAssurancePolicy#dtc}
  */
  readonly dtc?: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc;
}

export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderToTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dtc: dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcToTerraform(struct!.dtc),
  }
}


export function dataOktaDeviceAssurancePolicyThirdPartySignalProviderToHclTerraform(struct?: DataOktaDeviceAssurancePolicyThirdPartySignalProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dtc: {
      value: dataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcToHclTerraform(struct!.dtc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaDeviceAssurancePolicyThirdPartySignalProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dtc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtc = this._dtc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDeviceAssurancePolicyThirdPartySignalProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dtc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dtc.internalValue = value.dtc;
    }
  }

  // dtc - computed: false, optional: true, required: false
  private _dtc = new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference(this, "dtc");
  public get dtc() {
    return this._dtc;
  }
  public putDtc(value: DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc) {
    this._dtc.internalValue = value;
  }
  public resetDtc() {
    this._dtc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtcInput() {
    return this._dtc.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy okta_device_assurance_policy}
*/
export class DataOktaDeviceAssurancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_device_assurance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaDeviceAssurancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaDeviceAssurancePolicy to import
  * @param importFromId The id of the existing DataOktaDeviceAssurancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaDeviceAssurancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_device_assurance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/device_assurance_policy okta_device_assurance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaDeviceAssurancePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaDeviceAssurancePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_device_assurance_policy',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
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
    this._secureHardwarePresent = config.secureHardwarePresent;
    this._thirdPartySignalProvider.internalValue = config.thirdPartySignalProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_encryption_type - computed: true, optional: false, required: false
  private _diskEncryptionType = new DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference(this, "disk_encryption_type");
  public get diskEncryptionType() {
    return this._diskEncryptionType;
  }

  // id - computed: false, optional: true, required: false
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

  // jailbreak - computed: true, optional: false, required: false
  public get jailbreak() {
    return this.getBooleanAttribute('jailbreak');
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

  // os_version - computed: true, optional: false, required: false
  private _osVersion = new DataOktaDeviceAssurancePolicyOsVersionOutputReference(this, "os_version");
  public get osVersion() {
    return this._osVersion;
  }

  // os_version_constraint - computed: true, optional: false, required: false
  private _osVersionConstraint = new DataOktaDeviceAssurancePolicyOsVersionConstraintList(this, "os_version_constraint", false);
  public get osVersionConstraint() {
    return this._osVersionConstraint;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // screenlock_type - computed: true, optional: false, required: false
  private _screenlockType = new DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference(this, "screenlock_type");
  public get screenlockType() {
    return this._screenlockType;
  }

  // secure_hardware_present - computed: false, optional: true, required: false
  private _secureHardwarePresent?: boolean | cdktf.IResolvable; 
  public get secureHardwarePresent() {
    return this.getBooleanAttribute('secure_hardware_present');
  }
  public set secureHardwarePresent(value: boolean | cdktf.IResolvable) {
    this._secureHardwarePresent = value;
  }
  public resetSecureHardwarePresent() {
    this._secureHardwarePresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureHardwarePresentInput() {
    return this._secureHardwarePresent;
  }

  // third_party_signal_provider - computed: false, optional: true, required: false
  private _thirdPartySignalProvider = new DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference(this, "third_party_signal_provider");
  public get thirdPartySignalProvider() {
    return this._thirdPartySignalProvider;
  }
  public putThirdPartySignalProvider(value: DataOktaDeviceAssurancePolicyThirdPartySignalProvider) {
    this._thirdPartySignalProvider.internalValue = value;
  }
  public resetThirdPartySignalProvider() {
    this._thirdPartySignalProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartySignalProviderInput() {
    return this._thirdPartySignalProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secure_hardware_present: cdktf.booleanToTerraform(this._secureHardwarePresent),
      third_party_signal_provider: dataOktaDeviceAssurancePolicyThirdPartySignalProviderToTerraform(this._thirdPartySignalProvider.internalValue),
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
      secure_hardware_present: {
        value: cdktf.booleanToHclTerraform(this._secureHardwarePresent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      third_party_signal_provider: {
        value: dataOktaDeviceAssurancePolicyThirdPartySignalProviderToHclTerraform(this._thirdPartySignalProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaDeviceAssurancePolicyThirdPartySignalProvider",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
