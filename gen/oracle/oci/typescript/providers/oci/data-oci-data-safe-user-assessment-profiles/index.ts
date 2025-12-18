// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeUserAssessmentProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}
  */
  readonly failedLoginAttemptsGreaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}
  */
  readonly failedLoginAttemptsLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}
  */
  readonly inactiveAccountTimeGreaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}
  */
  readonly inactiveAccountTimeLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}
  */
  readonly isUserCreated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}
  */
  readonly passwordLockTimeGreaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}
  */
  readonly passwordLockTimeLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}
  */
  readonly passwordVerificationFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}
  */
  readonly sessionsPerUserGreaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}
  */
  readonly sessionsPerUserLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}
  */
  readonly userAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}
  */
  readonly userCountGreaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}
  */
  readonly userCountLessThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#filter DataOciDataSafeUserAssessmentProfiles#filter}
  */
  readonly filter?: DataOciDataSafeUserAssessmentProfilesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeUserAssessmentProfilesProfiles {
}

export function dataOciDataSafeUserAssessmentProfilesProfilesToTerraform(struct?: DataOciDataSafeUserAssessmentProfilesProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentProfilesProfilesToHclTerraform(struct?: DataOciDataSafeUserAssessmentProfilesProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentProfilesProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentProfilesProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentProfilesProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // composite_limit - computed: true, optional: false, required: false
  public get compositeLimit() {
    return this.getStringAttribute('composite_limit');
  }

  // connect_time - computed: true, optional: false, required: false
  public get connectTime() {
    return this.getStringAttribute('connect_time');
  }

  // cpu_per_call - computed: true, optional: false, required: false
  public get cpuPerCall() {
    return this.getStringAttribute('cpu_per_call');
  }

  // cpu_per_session - computed: true, optional: false, required: false
  public get cpuPerSession() {
    return this.getStringAttribute('cpu_per_session');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // failed_login_attempts - computed: true, optional: false, required: false
  public get failedLoginAttempts() {
    return this.getStringAttribute('failed_login_attempts');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // idle_time - computed: true, optional: false, required: false
  public get idleTime() {
    return this.getStringAttribute('idle_time');
  }

  // inactive_account_time - computed: true, optional: false, required: false
  public get inactiveAccountTime() {
    return this.getStringAttribute('inactive_account_time');
  }

  // is_user_created - computed: true, optional: false, required: false
  public get isUserCreated() {
    return this.getBooleanAttribute('is_user_created');
  }

  // logical_reads_per_call - computed: true, optional: false, required: false
  public get logicalReadsPerCall() {
    return this.getStringAttribute('logical_reads_per_call');
  }

  // logical_reads_per_session - computed: true, optional: false, required: false
  public get logicalReadsPerSession() {
    return this.getStringAttribute('logical_reads_per_session');
  }

  // password_grace_time - computed: true, optional: false, required: false
  public get passwordGraceTime() {
    return this.getStringAttribute('password_grace_time');
  }

  // password_life_time - computed: true, optional: false, required: false
  public get passwordLifeTime() {
    return this.getStringAttribute('password_life_time');
  }

  // password_lock_time - computed: true, optional: false, required: false
  public get passwordLockTime() {
    return this.getStringAttribute('password_lock_time');
  }

  // password_reuse_max - computed: true, optional: false, required: false
  public get passwordReuseMax() {
    return this.getStringAttribute('password_reuse_max');
  }

  // password_reuse_time - computed: true, optional: false, required: false
  public get passwordReuseTime() {
    return this.getStringAttribute('password_reuse_time');
  }

  // password_rollover_time - computed: true, optional: false, required: false
  public get passwordRolloverTime() {
    return this.getStringAttribute('password_rollover_time');
  }

  // password_verification_function - computed: true, optional: false, required: false
  public get passwordVerificationFunction() {
    return this.getStringAttribute('password_verification_function');
  }

  // password_verification_function_details - computed: true, optional: false, required: false
  public get passwordVerificationFunctionDetails() {
    return this.getStringAttribute('password_verification_function_details');
  }

  // private_sga - computed: true, optional: false, required: false
  public get privateSga() {
    return this.getStringAttribute('private_sga');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // sessions_per_user - computed: true, optional: false, required: false
  public get sessionsPerUser() {
    return this.getStringAttribute('sessions_per_user');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // user_assessment_id - computed: true, optional: false, required: false
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }
}

export class DataOciDataSafeUserAssessmentProfilesProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentProfilesProfilesOutputReference {
    return new DataOciDataSafeUserAssessmentProfilesProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUserAssessmentProfilesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeUserAssessmentProfilesFilterToTerraform(struct?: DataOciDataSafeUserAssessmentProfilesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeUserAssessmentProfilesFilterToHclTerraform(struct?: DataOciDataSafeUserAssessmentProfilesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataSafeUserAssessmentProfilesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentProfilesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentProfilesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeUserAssessmentProfilesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeUserAssessmentProfilesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeUserAssessmentProfilesFilterOutputReference {
    return new DataOciDataSafeUserAssessmentProfilesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles oci_data_safe_user_assessment_profiles}
*/
export class DataOciDataSafeUserAssessmentProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_user_assessment_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfiles to import
  * @param importFromId The id of the existing DataOciDataSafeUserAssessmentProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_user_assessment_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_profiles oci_data_safe_user_assessment_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeUserAssessmentProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_user_assessment_profiles',
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
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._failedLoginAttemptsGreaterThanOrEqual = config.failedLoginAttemptsGreaterThanOrEqual;
    this._failedLoginAttemptsLessThan = config.failedLoginAttemptsLessThan;
    this._id = config.id;
    this._inactiveAccountTimeGreaterThanOrEqual = config.inactiveAccountTimeGreaterThanOrEqual;
    this._inactiveAccountTimeLessThan = config.inactiveAccountTimeLessThan;
    this._isUserCreated = config.isUserCreated;
    this._passwordLockTimeGreaterThanOrEqual = config.passwordLockTimeGreaterThanOrEqual;
    this._passwordLockTimeLessThan = config.passwordLockTimeLessThan;
    this._passwordVerificationFunction = config.passwordVerificationFunction;
    this._profileName = config.profileName;
    this._sessionsPerUserGreaterThanOrEqual = config.sessionsPerUserGreaterThanOrEqual;
    this._sessionsPerUserLessThan = config.sessionsPerUserLessThan;
    this._targetId = config.targetId;
    this._userAssessmentId = config.userAssessmentId;
    this._userCountGreaterThanOrEqual = config.userCountGreaterThanOrEqual;
    this._userCountLessThan = config.userCountLessThan;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // failed_login_attempts_greater_than_or_equal - computed: false, optional: true, required: false
  private _failedLoginAttemptsGreaterThanOrEqual?: string; 
  public get failedLoginAttemptsGreaterThanOrEqual() {
    return this.getStringAttribute('failed_login_attempts_greater_than_or_equal');
  }
  public set failedLoginAttemptsGreaterThanOrEqual(value: string) {
    this._failedLoginAttemptsGreaterThanOrEqual = value;
  }
  public resetFailedLoginAttemptsGreaterThanOrEqual() {
    this._failedLoginAttemptsGreaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoginAttemptsGreaterThanOrEqualInput() {
    return this._failedLoginAttemptsGreaterThanOrEqual;
  }

  // failed_login_attempts_less_than - computed: false, optional: true, required: false
  private _failedLoginAttemptsLessThan?: string; 
  public get failedLoginAttemptsLessThan() {
    return this.getStringAttribute('failed_login_attempts_less_than');
  }
  public set failedLoginAttemptsLessThan(value: string) {
    this._failedLoginAttemptsLessThan = value;
  }
  public resetFailedLoginAttemptsLessThan() {
    this._failedLoginAttemptsLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoginAttemptsLessThanInput() {
    return this._failedLoginAttemptsLessThan;
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

  // inactive_account_time_greater_than_or_equal - computed: false, optional: true, required: false
  private _inactiveAccountTimeGreaterThanOrEqual?: string; 
  public get inactiveAccountTimeGreaterThanOrEqual() {
    return this.getStringAttribute('inactive_account_time_greater_than_or_equal');
  }
  public set inactiveAccountTimeGreaterThanOrEqual(value: string) {
    this._inactiveAccountTimeGreaterThanOrEqual = value;
  }
  public resetInactiveAccountTimeGreaterThanOrEqual() {
    this._inactiveAccountTimeGreaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveAccountTimeGreaterThanOrEqualInput() {
    return this._inactiveAccountTimeGreaterThanOrEqual;
  }

  // inactive_account_time_less_than - computed: false, optional: true, required: false
  private _inactiveAccountTimeLessThan?: string; 
  public get inactiveAccountTimeLessThan() {
    return this.getStringAttribute('inactive_account_time_less_than');
  }
  public set inactiveAccountTimeLessThan(value: string) {
    this._inactiveAccountTimeLessThan = value;
  }
  public resetInactiveAccountTimeLessThan() {
    this._inactiveAccountTimeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveAccountTimeLessThanInput() {
    return this._inactiveAccountTimeLessThan;
  }

  // is_user_created - computed: false, optional: true, required: false
  private _isUserCreated?: boolean | cdktf.IResolvable; 
  public get isUserCreated() {
    return this.getBooleanAttribute('is_user_created');
  }
  public set isUserCreated(value: boolean | cdktf.IResolvable) {
    this._isUserCreated = value;
  }
  public resetIsUserCreated() {
    this._isUserCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUserCreatedInput() {
    return this._isUserCreated;
  }

  // password_lock_time_greater_than_or_equal - computed: false, optional: true, required: false
  private _passwordLockTimeGreaterThanOrEqual?: string; 
  public get passwordLockTimeGreaterThanOrEqual() {
    return this.getStringAttribute('password_lock_time_greater_than_or_equal');
  }
  public set passwordLockTimeGreaterThanOrEqual(value: string) {
    this._passwordLockTimeGreaterThanOrEqual = value;
  }
  public resetPasswordLockTimeGreaterThanOrEqual() {
    this._passwordLockTimeGreaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLockTimeGreaterThanOrEqualInput() {
    return this._passwordLockTimeGreaterThanOrEqual;
  }

  // password_lock_time_less_than - computed: false, optional: true, required: false
  private _passwordLockTimeLessThan?: string; 
  public get passwordLockTimeLessThan() {
    return this.getStringAttribute('password_lock_time_less_than');
  }
  public set passwordLockTimeLessThan(value: string) {
    this._passwordLockTimeLessThan = value;
  }
  public resetPasswordLockTimeLessThan() {
    this._passwordLockTimeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLockTimeLessThanInput() {
    return this._passwordLockTimeLessThan;
  }

  // password_verification_function - computed: false, optional: true, required: false
  private _passwordVerificationFunction?: string; 
  public get passwordVerificationFunction() {
    return this.getStringAttribute('password_verification_function');
  }
  public set passwordVerificationFunction(value: string) {
    this._passwordVerificationFunction = value;
  }
  public resetPasswordVerificationFunction() {
    this._passwordVerificationFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVerificationFunctionInput() {
    return this._passwordVerificationFunction;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataOciDataSafeUserAssessmentProfilesProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // sessions_per_user_greater_than_or_equal - computed: false, optional: true, required: false
  private _sessionsPerUserGreaterThanOrEqual?: string; 
  public get sessionsPerUserGreaterThanOrEqual() {
    return this.getStringAttribute('sessions_per_user_greater_than_or_equal');
  }
  public set sessionsPerUserGreaterThanOrEqual(value: string) {
    this._sessionsPerUserGreaterThanOrEqual = value;
  }
  public resetSessionsPerUserGreaterThanOrEqual() {
    this._sessionsPerUserGreaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsPerUserGreaterThanOrEqualInput() {
    return this._sessionsPerUserGreaterThanOrEqual;
  }

  // sessions_per_user_less_than - computed: false, optional: true, required: false
  private _sessionsPerUserLessThan?: string; 
  public get sessionsPerUserLessThan() {
    return this.getStringAttribute('sessions_per_user_less_than');
  }
  public set sessionsPerUserLessThan(value: string) {
    this._sessionsPerUserLessThan = value;
  }
  public resetSessionsPerUserLessThan() {
    this._sessionsPerUserLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsPerUserLessThanInput() {
    return this._sessionsPerUserLessThan;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // user_assessment_id - computed: false, optional: false, required: true
  private _userAssessmentId?: string; 
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }
  public set userAssessmentId(value: string) {
    this._userAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssessmentIdInput() {
    return this._userAssessmentId;
  }

  // user_count_greater_than_or_equal - computed: false, optional: true, required: false
  private _userCountGreaterThanOrEqual?: string; 
  public get userCountGreaterThanOrEqual() {
    return this.getStringAttribute('user_count_greater_than_or_equal');
  }
  public set userCountGreaterThanOrEqual(value: string) {
    this._userCountGreaterThanOrEqual = value;
  }
  public resetUserCountGreaterThanOrEqual() {
    this._userCountGreaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCountGreaterThanOrEqualInput() {
    return this._userCountGreaterThanOrEqual;
  }

  // user_count_less_than - computed: false, optional: true, required: false
  private _userCountLessThan?: string; 
  public get userCountLessThan() {
    return this.getStringAttribute('user_count_less_than');
  }
  public set userCountLessThan(value: string) {
    this._userCountLessThan = value;
  }
  public resetUserCountLessThan() {
    this._userCountLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCountLessThanInput() {
    return this._userCountLessThan;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeUserAssessmentProfilesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeUserAssessmentProfilesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      failed_login_attempts_greater_than_or_equal: cdktf.stringToTerraform(this._failedLoginAttemptsGreaterThanOrEqual),
      failed_login_attempts_less_than: cdktf.stringToTerraform(this._failedLoginAttemptsLessThan),
      id: cdktf.stringToTerraform(this._id),
      inactive_account_time_greater_than_or_equal: cdktf.stringToTerraform(this._inactiveAccountTimeGreaterThanOrEqual),
      inactive_account_time_less_than: cdktf.stringToTerraform(this._inactiveAccountTimeLessThan),
      is_user_created: cdktf.booleanToTerraform(this._isUserCreated),
      password_lock_time_greater_than_or_equal: cdktf.stringToTerraform(this._passwordLockTimeGreaterThanOrEqual),
      password_lock_time_less_than: cdktf.stringToTerraform(this._passwordLockTimeLessThan),
      password_verification_function: cdktf.stringToTerraform(this._passwordVerificationFunction),
      profile_name: cdktf.stringToTerraform(this._profileName),
      sessions_per_user_greater_than_or_equal: cdktf.stringToTerraform(this._sessionsPerUserGreaterThanOrEqual),
      sessions_per_user_less_than: cdktf.stringToTerraform(this._sessionsPerUserLessThan),
      target_id: cdktf.stringToTerraform(this._targetId),
      user_assessment_id: cdktf.stringToTerraform(this._userAssessmentId),
      user_count_greater_than_or_equal: cdktf.stringToTerraform(this._userCountGreaterThanOrEqual),
      user_count_less_than: cdktf.stringToTerraform(this._userCountLessThan),
      filter: cdktf.listMapper(dataOciDataSafeUserAssessmentProfilesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failed_login_attempts_greater_than_or_equal: {
        value: cdktf.stringToHclTerraform(this._failedLoginAttemptsGreaterThanOrEqual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_login_attempts_less_than: {
        value: cdktf.stringToHclTerraform(this._failedLoginAttemptsLessThan),
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
      inactive_account_time_greater_than_or_equal: {
        value: cdktf.stringToHclTerraform(this._inactiveAccountTimeGreaterThanOrEqual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactive_account_time_less_than: {
        value: cdktf.stringToHclTerraform(this._inactiveAccountTimeLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_user_created: {
        value: cdktf.booleanToHclTerraform(this._isUserCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_lock_time_greater_than_or_equal: {
        value: cdktf.stringToHclTerraform(this._passwordLockTimeGreaterThanOrEqual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_lock_time_less_than: {
        value: cdktf.stringToHclTerraform(this._passwordLockTimeLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_verification_function: {
        value: cdktf.stringToHclTerraform(this._passwordVerificationFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessions_per_user_greater_than_or_equal: {
        value: cdktf.stringToHclTerraform(this._sessionsPerUserGreaterThanOrEqual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessions_per_user_less_than: {
        value: cdktf.stringToHclTerraform(this._sessionsPerUserLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_assessment_id: {
        value: cdktf.stringToHclTerraform(this._userAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_count_greater_than_or_equal: {
        value: cdktf.stringToHclTerraform(this._userCountGreaterThanOrEqual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_count_less_than: {
        value: cdktf.stringToHclTerraform(this._userCountLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeUserAssessmentProfilesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeUserAssessmentProfilesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
