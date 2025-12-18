// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FusionAppsFusionEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#additional_language_packs FusionAppsFusionEnvironment#additional_language_packs}
  */
  readonly additionalLanguagePacks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#compartment_id FusionAppsFusionEnvironment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#defined_tags FusionAppsFusionEnvironment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#display_name FusionAppsFusionEnvironment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#dns_prefix FusionAppsFusionEnvironment#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#freeform_tags FusionAppsFusionEnvironment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#fusion_environment_family_id FusionAppsFusionEnvironment#fusion_environment_family_id}
  */
  readonly fusionEnvironmentFamilyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#fusion_environment_type FusionAppsFusionEnvironment#fusion_environment_type}
  */
  readonly fusionEnvironmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#id FusionAppsFusionEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#is_ipv6dual_stack_enabled FusionAppsFusionEnvironment#is_ipv6dual_stack_enabled}
  */
  readonly isIpv6DualStackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#kms_key_id FusionAppsFusionEnvironment#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * create_fusion_environment_admin_user_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#create_fusion_environment_admin_user_details FusionAppsFusionEnvironment#create_fusion_environment_admin_user_details}
  */
  readonly createFusionEnvironmentAdminUserDetails: FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#maintenance_policy FusionAppsFusionEnvironment#maintenance_policy}
  */
  readonly maintenancePolicy?: FusionAppsFusionEnvironmentMaintenancePolicy;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#rules FusionAppsFusionEnvironment#rules}
  */
  readonly rules?: FusionAppsFusionEnvironmentRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#timeouts FusionAppsFusionEnvironment#timeouts}
  */
  readonly timeouts?: FusionAppsFusionEnvironmentTimeouts;
}
export interface FusionAppsFusionEnvironmentKmsKeyInfo {
}

export function fusionAppsFusionEnvironmentKmsKeyInfoToTerraform(struct?: FusionAppsFusionEnvironmentKmsKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fusionAppsFusionEnvironmentKmsKeyInfoToHclTerraform(struct?: FusionAppsFusionEnvironmentKmsKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FusionAppsFusionEnvironmentKmsKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FusionAppsFusionEnvironmentKmsKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentKmsKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_key_id - computed: true, optional: false, required: false
  public get activeKeyId() {
    return this.getStringAttribute('active_key_id');
  }

  // active_key_version - computed: true, optional: false, required: false
  public get activeKeyVersion() {
    return this.getStringAttribute('active_key_version');
  }

  // current_key_lifecycle_state - computed: true, optional: false, required: false
  public get currentKeyLifecycleState() {
    return this.getStringAttribute('current_key_lifecycle_state');
  }

  // scheduled_key_id - computed: true, optional: false, required: false
  public get scheduledKeyId() {
    return this.getStringAttribute('scheduled_key_id');
  }

  // scheduled_key_status - computed: true, optional: false, required: false
  public get scheduledKeyStatus() {
    return this.getStringAttribute('scheduled_key_status');
  }

  // scheduled_key_version - computed: true, optional: false, required: false
  public get scheduledKeyVersion() {
    return this.getStringAttribute('scheduled_key_version');
  }

  // scheduled_lifecycle_state - computed: true, optional: false, required: false
  public get scheduledLifecycleState() {
    return this.getStringAttribute('scheduled_lifecycle_state');
  }
}

export class FusionAppsFusionEnvironmentKmsKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): FusionAppsFusionEnvironmentKmsKeyInfoOutputReference {
    return new FusionAppsFusionEnvironmentKmsKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FusionAppsFusionEnvironmentRefresh {
}

export function fusionAppsFusionEnvironmentRefreshToTerraform(struct?: FusionAppsFusionEnvironmentRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fusionAppsFusionEnvironmentRefreshToHclTerraform(struct?: FusionAppsFusionEnvironmentRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FusionAppsFusionEnvironmentRefreshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FusionAppsFusionEnvironmentRefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentRefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_fusion_environment_id - computed: true, optional: false, required: false
  public get sourceFusionEnvironmentId() {
    return this.getStringAttribute('source_fusion_environment_id');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_of_restoration_point - computed: true, optional: false, required: false
  public get timeOfRestorationPoint() {
    return this.getStringAttribute('time_of_restoration_point');
  }
}

export class FusionAppsFusionEnvironmentRefreshList extends cdktf.ComplexList {

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
  public get(index: number): FusionAppsFusionEnvironmentRefreshOutputReference {
    return new FusionAppsFusionEnvironmentRefreshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#email_address FusionAppsFusionEnvironment#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#first_name FusionAppsFusionEnvironment#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#last_name FusionAppsFusionEnvironment#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#password FusionAppsFusionEnvironment#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#username FusionAppsFusionEnvironment#username}
  */
  readonly username: string;
}

export function fusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsToTerraform(struct?: FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference | FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function fusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsToHclTerraform(struct?: FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference | FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailAddress = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailAddress = value.emailAddress;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes {
}

export function fusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesToTerraform(struct?: FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesToHclTerraform(struct?: FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_times_value - computed: true, optional: false, required: false
  public get beginTimesValue() {
    return this.getStringAttribute('begin_times_value');
  }

  // override_type - computed: true, optional: false, required: false
  public get overrideType() {
    return this.getStringAttribute('override_type');
  }
}

export class FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList extends cdktf.ComplexList {

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
  public get(index: number): FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference {
    return new FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FusionAppsFusionEnvironmentMaintenancePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#environment_maintenance_override FusionAppsFusionEnvironment#environment_maintenance_override}
  */
  readonly environmentMaintenanceOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#monthly_patching_override FusionAppsFusionEnvironment#monthly_patching_override}
  */
  readonly monthlyPatchingOverride?: string;
}

export function fusionAppsFusionEnvironmentMaintenancePolicyToTerraform(struct?: FusionAppsFusionEnvironmentMaintenancePolicyOutputReference | FusionAppsFusionEnvironmentMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_maintenance_override: cdktf.stringToTerraform(struct!.environmentMaintenanceOverride),
    monthly_patching_override: cdktf.stringToTerraform(struct!.monthlyPatchingOverride),
  }
}


export function fusionAppsFusionEnvironmentMaintenancePolicyToHclTerraform(struct?: FusionAppsFusionEnvironmentMaintenancePolicyOutputReference | FusionAppsFusionEnvironmentMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_maintenance_override: {
      value: cdktf.stringToHclTerraform(struct!.environmentMaintenanceOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_patching_override: {
      value: cdktf.stringToHclTerraform(struct!.monthlyPatchingOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FusionAppsFusionEnvironmentMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FusionAppsFusionEnvironmentMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentMaintenanceOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentMaintenanceOverride = this._environmentMaintenanceOverride;
    }
    if (this._monthlyPatchingOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyPatchingOverride = this._monthlyPatchingOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentMaintenanceOverride = undefined;
      this._monthlyPatchingOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentMaintenanceOverride = value.environmentMaintenanceOverride;
      this._monthlyPatchingOverride = value.monthlyPatchingOverride;
    }
  }

  // environment_maintenance_override - computed: true, optional: true, required: false
  private _environmentMaintenanceOverride?: string; 
  public get environmentMaintenanceOverride() {
    return this.getStringAttribute('environment_maintenance_override');
  }
  public set environmentMaintenanceOverride(value: string) {
    this._environmentMaintenanceOverride = value;
  }
  public resetEnvironmentMaintenanceOverride() {
    this._environmentMaintenanceOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentMaintenanceOverrideInput() {
    return this._environmentMaintenanceOverride;
  }

  // monthly_patching_override - computed: true, optional: true, required: false
  private _monthlyPatchingOverride?: string; 
  public get monthlyPatchingOverride() {
    return this.getStringAttribute('monthly_patching_override');
  }
  public set monthlyPatchingOverride(value: string) {
    this._monthlyPatchingOverride = value;
  }
  public resetMonthlyPatchingOverride() {
    this._monthlyPatchingOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyPatchingOverrideInput() {
    return this._monthlyPatchingOverride;
  }

  // quarterly_upgrade_begin_times - computed: true, optional: false, required: false
  private _quarterlyUpgradeBeginTimes = new FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList(this, "quarterly_upgrade_begin_times", false);
  public get quarterlyUpgradeBeginTimes() {
    return this._quarterlyUpgradeBeginTimes;
  }
}
export interface FusionAppsFusionEnvironmentRulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#attribute_name FusionAppsFusionEnvironment#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#attribute_value FusionAppsFusionEnvironment#attribute_value}
  */
  readonly attributeValue: string;
}

export function fusionAppsFusionEnvironmentRulesConditionsToTerraform(struct?: FusionAppsFusionEnvironmentRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}


export function fusionAppsFusionEnvironmentRulesConditionsToHclTerraform(struct?: FusionAppsFusionEnvironmentRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FusionAppsFusionEnvironmentRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FusionAppsFusionEnvironmentRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}

export class FusionAppsFusionEnvironmentRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : FusionAppsFusionEnvironmentRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): FusionAppsFusionEnvironmentRulesConditionsOutputReference {
    return new FusionAppsFusionEnvironmentRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FusionAppsFusionEnvironmentRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#action FusionAppsFusionEnvironment#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#description FusionAppsFusionEnvironment#description}
  */
  readonly description?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#conditions FusionAppsFusionEnvironment#conditions}
  */
  readonly conditions: FusionAppsFusionEnvironmentRulesConditions[] | cdktf.IResolvable;
}

export function fusionAppsFusionEnvironmentRulesToTerraform(struct?: FusionAppsFusionEnvironmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    conditions: cdktf.listMapper(fusionAppsFusionEnvironmentRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function fusionAppsFusionEnvironmentRulesToHclTerraform(struct?: FusionAppsFusionEnvironmentRules | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(fusionAppsFusionEnvironmentRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "FusionAppsFusionEnvironmentRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FusionAppsFusionEnvironmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FusionAppsFusionEnvironmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._conditions.internalValue = value.conditions;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new FusionAppsFusionEnvironmentRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FusionAppsFusionEnvironmentRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class FusionAppsFusionEnvironmentRulesList extends cdktf.ComplexList {
  public internalValue? : FusionAppsFusionEnvironmentRules[] | cdktf.IResolvable

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
  public get(index: number): FusionAppsFusionEnvironmentRulesOutputReference {
    return new FusionAppsFusionEnvironmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FusionAppsFusionEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#create FusionAppsFusionEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#delete FusionAppsFusionEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#update FusionAppsFusionEnvironment#update}
  */
  readonly update?: string;
}

export function fusionAppsFusionEnvironmentTimeoutsToTerraform(struct?: FusionAppsFusionEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function fusionAppsFusionEnvironmentTimeoutsToHclTerraform(struct?: FusionAppsFusionEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class FusionAppsFusionEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FusionAppsFusionEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FusionAppsFusionEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment oci_fusion_apps_fusion_environment}
*/
export class FusionAppsFusionEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FusionAppsFusionEnvironment to import
  * @param importFromId The id of the existing FusionAppsFusionEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FusionAppsFusionEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/fusion_apps_fusion_environment oci_fusion_apps_fusion_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FusionAppsFusionEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: FusionAppsFusionEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalLanguagePacks = config.additionalLanguagePacks;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._dnsPrefix = config.dnsPrefix;
    this._freeformTags = config.freeformTags;
    this._fusionEnvironmentFamilyId = config.fusionEnvironmentFamilyId;
    this._fusionEnvironmentType = config.fusionEnvironmentType;
    this._id = config.id;
    this._isIpv6DualStackEnabled = config.isIpv6DualStackEnabled;
    this._kmsKeyId = config.kmsKeyId;
    this._createFusionEnvironmentAdminUserDetails.internalValue = config.createFusionEnvironmentAdminUserDetails;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_language_packs - computed: true, optional: true, required: false
  private _additionalLanguagePacks?: string[]; 
  public get additionalLanguagePacks() {
    return this.getListAttribute('additional_language_packs');
  }
  public set additionalLanguagePacks(value: string[]) {
    this._additionalLanguagePacks = value;
  }
  public resetAdditionalLanguagePacks() {
    this._additionalLanguagePacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLanguagePacksInput() {
    return this._additionalLanguagePacks;
  }

  // applied_patch_bundles - computed: true, optional: false, required: false
  public get appliedPatchBundles() {
    return this.getListAttribute('applied_patch_bundles');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dns_prefix - computed: true, optional: true, required: false
  private _dnsPrefix?: string; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // fusion_environment_family_id - computed: false, optional: false, required: true
  private _fusionEnvironmentFamilyId?: string; 
  public get fusionEnvironmentFamilyId() {
    return this.getStringAttribute('fusion_environment_family_id');
  }
  public set fusionEnvironmentFamilyId(value: string) {
    this._fusionEnvironmentFamilyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentFamilyIdInput() {
    return this._fusionEnvironmentFamilyId;
  }

  // fusion_environment_type - computed: false, optional: false, required: true
  private _fusionEnvironmentType?: string; 
  public get fusionEnvironmentType() {
    return this.getStringAttribute('fusion_environment_type');
  }
  public set fusionEnvironmentType(value: string) {
    this._fusionEnvironmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentTypeInput() {
    return this._fusionEnvironmentType;
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

  // idcs_domain_url - computed: true, optional: false, required: false
  public get idcsDomainUrl() {
    return this.getStringAttribute('idcs_domain_url');
  }

  // is_break_glass_enabled - computed: true, optional: false, required: false
  public get isBreakGlassEnabled() {
    return this.getBooleanAttribute('is_break_glass_enabled');
  }

  // is_ipv6dual_stack_enabled - computed: true, optional: true, required: false
  private _isIpv6DualStackEnabled?: boolean | cdktf.IResolvable; 
  public get isIpv6DualStackEnabled() {
    return this.getBooleanAttribute('is_ipv6dual_stack_enabled');
  }
  public set isIpv6DualStackEnabled(value: boolean | cdktf.IResolvable) {
    this._isIpv6DualStackEnabled = value;
  }
  public resetIsIpv6DualStackEnabled() {
    this._isIpv6DualStackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6DualStackEnabledInput() {
    return this._isIpv6DualStackEnabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_info - computed: true, optional: false, required: false
  private _kmsKeyInfo = new FusionAppsFusionEnvironmentKmsKeyInfoList(this, "kms_key_info", false);
  public get kmsKeyInfo() {
    return this._kmsKeyInfo;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lockbox_id - computed: true, optional: false, required: false
  public get lockboxId() {
    return this.getStringAttribute('lockbox_id');
  }

  // public_url - computed: true, optional: false, required: false
  public get publicUrl() {
    return this.getStringAttribute('public_url');
  }

  // refresh - computed: true, optional: false, required: false
  private _refresh = new FusionAppsFusionEnvironmentRefreshList(this, "refresh", false);
  public get refresh() {
    return this._refresh;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_ids - computed: true, optional: false, required: false
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_upcoming_maintenance - computed: true, optional: false, required: false
  public get timeUpcomingMaintenance() {
    return this.getStringAttribute('time_upcoming_maintenance');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // create_fusion_environment_admin_user_details - computed: false, optional: false, required: true
  private _createFusionEnvironmentAdminUserDetails = new FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference(this, "create_fusion_environment_admin_user_details");
  public get createFusionEnvironmentAdminUserDetails() {
    return this._createFusionEnvironmentAdminUserDetails;
  }
  public putCreateFusionEnvironmentAdminUserDetails(value: FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails) {
    this._createFusionEnvironmentAdminUserDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createFusionEnvironmentAdminUserDetailsInput() {
    return this._createFusionEnvironmentAdminUserDetails.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new FusionAppsFusionEnvironmentMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: FusionAppsFusionEnvironmentMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new FusionAppsFusionEnvironmentRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FusionAppsFusionEnvironmentRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FusionAppsFusionEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FusionAppsFusionEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_language_packs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalLanguagePacks),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_prefix: cdktf.stringToTerraform(this._dnsPrefix),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      fusion_environment_family_id: cdktf.stringToTerraform(this._fusionEnvironmentFamilyId),
      fusion_environment_type: cdktf.stringToTerraform(this._fusionEnvironmentType),
      id: cdktf.stringToTerraform(this._id),
      is_ipv6dual_stack_enabled: cdktf.booleanToTerraform(this._isIpv6DualStackEnabled),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      create_fusion_environment_admin_user_details: fusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsToTerraform(this._createFusionEnvironmentAdminUserDetails.internalValue),
      maintenance_policy: fusionAppsFusionEnvironmentMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      rules: cdktf.listMapper(fusionAppsFusionEnvironmentRulesToTerraform, true)(this._rules.internalValue),
      timeouts: fusionAppsFusionEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_language_packs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalLanguagePacks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_prefix: {
        value: cdktf.stringToHclTerraform(this._dnsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fusion_environment_family_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentFamilyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fusion_environment_type: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentType),
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
      is_ipv6dual_stack_enabled: {
        value: cdktf.booleanToHclTerraform(this._isIpv6DualStackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_fusion_environment_admin_user_details: {
        value: fusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsToHclTerraform(this._createFusionEnvironmentAdminUserDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList",
      },
      maintenance_policy: {
        value: fusionAppsFusionEnvironmentMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FusionAppsFusionEnvironmentMaintenancePolicyList",
      },
      rules: {
        value: cdktf.listMapperHcl(fusionAppsFusionEnvironmentRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FusionAppsFusionEnvironmentRulesList",
      },
      timeouts: {
        value: fusionAppsFusionEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FusionAppsFusionEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
