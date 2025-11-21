// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeUserAssessmentUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#access_level DataOciDataSafeUserAssessmentUsers#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#account_status DataOciDataSafeUserAssessmentUsers#account_status}
  */
  readonly accountStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#are_all_schemas_accessible DataOciDataSafeUserAssessmentUsers#are_all_schemas_accessible}
  */
  readonly areAllSchemasAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#authentication_type DataOciDataSafeUserAssessmentUsers#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#compartment_id_in_subtree DataOciDataSafeUserAssessmentUsers#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#id DataOciDataSafeUserAssessmentUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#schema_list DataOciDataSafeUserAssessmentUsers#schema_list}
  */
  readonly schemaList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#target_id DataOciDataSafeUserAssessmentUsers#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_last_login_greater_than_or_equal_to}
  */
  readonly timeLastLoginGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_last_login_less_than DataOciDataSafeUserAssessmentUsers#time_last_login_less_than}
  */
  readonly timeLastLoginLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_password_expiry_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_expiry_greater_than_or_equal_to}
  */
  readonly timePasswordExpiryGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_password_expiry_less_than DataOciDataSafeUserAssessmentUsers#time_password_expiry_less_than}
  */
  readonly timePasswordExpiryLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_password_last_changed_greater_than_or_equal_to}
  */
  readonly timePasswordLastChangedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUsers#time_password_last_changed_less_than}
  */
  readonly timePasswordLastChangedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUsers#time_user_created_greater_than_or_equal_to}
  */
  readonly timeUserCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#time_user_created_less_than DataOciDataSafeUserAssessmentUsers#time_user_created_less_than}
  */
  readonly timeUserCreatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_assessment_id DataOciDataSafeUserAssessmentUsers#user_assessment_id}
  */
  readonly userAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_category DataOciDataSafeUserAssessmentUsers#user_category}
  */
  readonly userCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_key DataOciDataSafeUserAssessmentUsers#user_key}
  */
  readonly userKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_name DataOciDataSafeUserAssessmentUsers#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_profile DataOciDataSafeUserAssessmentUsers#user_profile}
  */
  readonly userProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_role DataOciDataSafeUserAssessmentUsers#user_role}
  */
  readonly userRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#user_type DataOciDataSafeUserAssessmentUsers#user_type}
  */
  readonly userType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#filter DataOciDataSafeUserAssessmentUsers#filter}
  */
  readonly filter?: DataOciDataSafeUserAssessmentUsersFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeUserAssessmentUsersUsers {
}

export function dataOciDataSafeUserAssessmentUsersUsersToTerraform(struct?: DataOciDataSafeUserAssessmentUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentUsersUsersToHclTerraform(struct?: DataOciDataSafeUserAssessmentUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_status - computed: true, optional: false, required: false
  public get accountStatus() {
    return this.getStringAttribute('account_status');
  }

  // admin_roles - computed: true, optional: false, required: false
  public get adminRoles() {
    return this.getListAttribute('admin_roles');
  }

  // are_all_schemas_accessible - computed: true, optional: false, required: false
  public get areAllSchemasAccessible() {
    return this.getBooleanAttribute('are_all_schemas_accessible');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // schema_list - computed: true, optional: false, required: false
  public get schemaList() {
    return this.getListAttribute('schema_list');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_last_login - computed: true, optional: false, required: false
  public get timeLastLogin() {
    return this.getStringAttribute('time_last_login');
  }

  // time_password_changed - computed: true, optional: false, required: false
  public get timePasswordChanged() {
    return this.getStringAttribute('time_password_changed');
  }

  // time_password_expiry - computed: true, optional: false, required: false
  public get timePasswordExpiry() {
    return this.getStringAttribute('time_password_expiry');
  }

  // time_user_created - computed: true, optional: false, required: false
  public get timeUserCreated() {
    return this.getStringAttribute('time_user_created');
  }

  // user_category - computed: true, optional: false, required: false
  public get userCategory() {
    return this.getStringAttribute('user_category');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_profile - computed: true, optional: false, required: false
  public get userProfile() {
    return this.getStringAttribute('user_profile');
  }

  // user_types - computed: true, optional: false, required: false
  public get userTypes() {
    return this.getListAttribute('user_types');
  }
}

export class DataOciDataSafeUserAssessmentUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentUsersUsersOutputReference {
    return new DataOciDataSafeUserAssessmentUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUserAssessmentUsersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#name DataOciDataSafeUserAssessmentUsers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#regex DataOciDataSafeUserAssessmentUsers#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#values DataOciDataSafeUserAssessmentUsers#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeUserAssessmentUsersFilterToTerraform(struct?: DataOciDataSafeUserAssessmentUsersFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeUserAssessmentUsersFilterToHclTerraform(struct?: DataOciDataSafeUserAssessmentUsersFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeUserAssessmentUsersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentUsersFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeUserAssessmentUsersFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeUserAssessmentUsersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeUserAssessmentUsersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeUserAssessmentUsersFilterOutputReference {
    return new DataOciDataSafeUserAssessmentUsersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users oci_data_safe_user_assessment_users}
*/
export class DataOciDataSafeUserAssessmentUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_user_assessment_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeUserAssessmentUsers to import
  * @param importFromId The id of the existing DataOciDataSafeUserAssessmentUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeUserAssessmentUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_user_assessment_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_user_assessment_users oci_data_safe_user_assessment_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeUserAssessmentUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_user_assessment_users',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._accountStatus = config.accountStatus;
    this._areAllSchemasAccessible = config.areAllSchemasAccessible;
    this._authenticationType = config.authenticationType;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._id = config.id;
    this._schemaList = config.schemaList;
    this._targetId = config.targetId;
    this._timeLastLoginGreaterThanOrEqualTo = config.timeLastLoginGreaterThanOrEqualTo;
    this._timeLastLoginLessThan = config.timeLastLoginLessThan;
    this._timePasswordExpiryGreaterThanOrEqualTo = config.timePasswordExpiryGreaterThanOrEqualTo;
    this._timePasswordExpiryLessThan = config.timePasswordExpiryLessThan;
    this._timePasswordLastChangedGreaterThanOrEqualTo = config.timePasswordLastChangedGreaterThanOrEqualTo;
    this._timePasswordLastChangedLessThan = config.timePasswordLastChangedLessThan;
    this._timeUserCreatedGreaterThanOrEqualTo = config.timeUserCreatedGreaterThanOrEqualTo;
    this._timeUserCreatedLessThan = config.timeUserCreatedLessThan;
    this._userAssessmentId = config.userAssessmentId;
    this._userCategory = config.userCategory;
    this._userKey = config.userKey;
    this._userName = config.userName;
    this._userProfile = config.userProfile;
    this._userRole = config.userRole;
    this._userType = config.userType;
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

  // account_status - computed: false, optional: true, required: false
  private _accountStatus?: string; 
  public get accountStatus() {
    return this.getStringAttribute('account_status');
  }
  public set accountStatus(value: string) {
    this._accountStatus = value;
  }
  public resetAccountStatus() {
    this._accountStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountStatusInput() {
    return this._accountStatus;
  }

  // are_all_schemas_accessible - computed: false, optional: true, required: false
  private _areAllSchemasAccessible?: boolean | cdktf.IResolvable; 
  public get areAllSchemasAccessible() {
    return this.getBooleanAttribute('are_all_schemas_accessible');
  }
  public set areAllSchemasAccessible(value: boolean | cdktf.IResolvable) {
    this._areAllSchemasAccessible = value;
  }
  public resetAreAllSchemasAccessible() {
    this._areAllSchemasAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areAllSchemasAccessibleInput() {
    return this._areAllSchemasAccessible;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
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

  // schema_list - computed: false, optional: true, required: false
  private _schemaList?: string[]; 
  public get schemaList() {
    return this.getListAttribute('schema_list');
  }
  public set schemaList(value: string[]) {
    this._schemaList = value;
  }
  public resetSchemaList() {
    this._schemaList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaListInput() {
    return this._schemaList;
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

  // time_last_login_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLastLoginGreaterThanOrEqualTo?: string; 
  public get timeLastLoginGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_last_login_greater_than_or_equal_to');
  }
  public set timeLastLoginGreaterThanOrEqualTo(value: string) {
    this._timeLastLoginGreaterThanOrEqualTo = value;
  }
  public resetTimeLastLoginGreaterThanOrEqualTo() {
    this._timeLastLoginGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLastLoginGreaterThanOrEqualToInput() {
    return this._timeLastLoginGreaterThanOrEqualTo;
  }

  // time_last_login_less_than - computed: false, optional: true, required: false
  private _timeLastLoginLessThan?: string; 
  public get timeLastLoginLessThan() {
    return this.getStringAttribute('time_last_login_less_than');
  }
  public set timeLastLoginLessThan(value: string) {
    this._timeLastLoginLessThan = value;
  }
  public resetTimeLastLoginLessThan() {
    this._timeLastLoginLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLastLoginLessThanInput() {
    return this._timeLastLoginLessThan;
  }

  // time_password_expiry_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timePasswordExpiryGreaterThanOrEqualTo?: string; 
  public get timePasswordExpiryGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_password_expiry_greater_than_or_equal_to');
  }
  public set timePasswordExpiryGreaterThanOrEqualTo(value: string) {
    this._timePasswordExpiryGreaterThanOrEqualTo = value;
  }
  public resetTimePasswordExpiryGreaterThanOrEqualTo() {
    this._timePasswordExpiryGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePasswordExpiryGreaterThanOrEqualToInput() {
    return this._timePasswordExpiryGreaterThanOrEqualTo;
  }

  // time_password_expiry_less_than - computed: false, optional: true, required: false
  private _timePasswordExpiryLessThan?: string; 
  public get timePasswordExpiryLessThan() {
    return this.getStringAttribute('time_password_expiry_less_than');
  }
  public set timePasswordExpiryLessThan(value: string) {
    this._timePasswordExpiryLessThan = value;
  }
  public resetTimePasswordExpiryLessThan() {
    this._timePasswordExpiryLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePasswordExpiryLessThanInput() {
    return this._timePasswordExpiryLessThan;
  }

  // time_password_last_changed_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timePasswordLastChangedGreaterThanOrEqualTo?: string; 
  public get timePasswordLastChangedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_password_last_changed_greater_than_or_equal_to');
  }
  public set timePasswordLastChangedGreaterThanOrEqualTo(value: string) {
    this._timePasswordLastChangedGreaterThanOrEqualTo = value;
  }
  public resetTimePasswordLastChangedGreaterThanOrEqualTo() {
    this._timePasswordLastChangedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePasswordLastChangedGreaterThanOrEqualToInput() {
    return this._timePasswordLastChangedGreaterThanOrEqualTo;
  }

  // time_password_last_changed_less_than - computed: false, optional: true, required: false
  private _timePasswordLastChangedLessThan?: string; 
  public get timePasswordLastChangedLessThan() {
    return this.getStringAttribute('time_password_last_changed_less_than');
  }
  public set timePasswordLastChangedLessThan(value: string) {
    this._timePasswordLastChangedLessThan = value;
  }
  public resetTimePasswordLastChangedLessThan() {
    this._timePasswordLastChangedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePasswordLastChangedLessThanInput() {
    return this._timePasswordLastChangedLessThan;
  }

  // time_user_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeUserCreatedGreaterThanOrEqualTo?: string; 
  public get timeUserCreatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_user_created_greater_than_or_equal_to');
  }
  public set timeUserCreatedGreaterThanOrEqualTo(value: string) {
    this._timeUserCreatedGreaterThanOrEqualTo = value;
  }
  public resetTimeUserCreatedGreaterThanOrEqualTo() {
    this._timeUserCreatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUserCreatedGreaterThanOrEqualToInput() {
    return this._timeUserCreatedGreaterThanOrEqualTo;
  }

  // time_user_created_less_than - computed: false, optional: true, required: false
  private _timeUserCreatedLessThan?: string; 
  public get timeUserCreatedLessThan() {
    return this.getStringAttribute('time_user_created_less_than');
  }
  public set timeUserCreatedLessThan(value: string) {
    this._timeUserCreatedLessThan = value;
  }
  public resetTimeUserCreatedLessThan() {
    this._timeUserCreatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUserCreatedLessThanInput() {
    return this._timeUserCreatedLessThan;
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

  // user_category - computed: false, optional: true, required: false
  private _userCategory?: string; 
  public get userCategory() {
    return this.getStringAttribute('user_category');
  }
  public set userCategory(value: string) {
    this._userCategory = value;
  }
  public resetUserCategory() {
    this._userCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCategoryInput() {
    return this._userCategory;
  }

  // user_key - computed: false, optional: true, required: false
  private _userKey?: string; 
  public get userKey() {
    return this.getStringAttribute('user_key');
  }
  public set userKey(value: string) {
    this._userKey = value;
  }
  public resetUserKey() {
    this._userKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userKeyInput() {
    return this._userKey;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_profile - computed: false, optional: true, required: false
  private _userProfile?: string; 
  public get userProfile() {
    return this.getStringAttribute('user_profile');
  }
  public set userProfile(value: string) {
    this._userProfile = value;
  }
  public resetUserProfile() {
    this._userProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileInput() {
    return this._userProfile;
  }

  // user_role - computed: false, optional: true, required: false
  private _userRole?: string; 
  public get userRole() {
    return this.getStringAttribute('user_role');
  }
  public set userRole(value: string) {
    this._userRole = value;
  }
  public resetUserRole() {
    this._userRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOciDataSafeUserAssessmentUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeUserAssessmentUsersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeUserAssessmentUsersFilter[] | cdktf.IResolvable) {
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
      account_status: cdktf.stringToTerraform(this._accountStatus),
      are_all_schemas_accessible: cdktf.booleanToTerraform(this._areAllSchemasAccessible),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      id: cdktf.stringToTerraform(this._id),
      schema_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaList),
      target_id: cdktf.stringToTerraform(this._targetId),
      time_last_login_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeLastLoginGreaterThanOrEqualTo),
      time_last_login_less_than: cdktf.stringToTerraform(this._timeLastLoginLessThan),
      time_password_expiry_greater_than_or_equal_to: cdktf.stringToTerraform(this._timePasswordExpiryGreaterThanOrEqualTo),
      time_password_expiry_less_than: cdktf.stringToTerraform(this._timePasswordExpiryLessThan),
      time_password_last_changed_greater_than_or_equal_to: cdktf.stringToTerraform(this._timePasswordLastChangedGreaterThanOrEqualTo),
      time_password_last_changed_less_than: cdktf.stringToTerraform(this._timePasswordLastChangedLessThan),
      time_user_created_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeUserCreatedGreaterThanOrEqualTo),
      time_user_created_less_than: cdktf.stringToTerraform(this._timeUserCreatedLessThan),
      user_assessment_id: cdktf.stringToTerraform(this._userAssessmentId),
      user_category: cdktf.stringToTerraform(this._userCategory),
      user_key: cdktf.stringToTerraform(this._userKey),
      user_name: cdktf.stringToTerraform(this._userName),
      user_profile: cdktf.stringToTerraform(this._userProfile),
      user_role: cdktf.stringToTerraform(this._userRole),
      user_type: cdktf.stringToTerraform(this._userType),
      filter: cdktf.listMapper(dataOciDataSafeUserAssessmentUsersFilterToTerraform, true)(this._filter.internalValue),
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
      account_status: {
        value: cdktf.stringToHclTerraform(this._accountStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      are_all_schemas_accessible: {
        value: cdktf.booleanToHclTerraform(this._areAllSchemasAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_last_login_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLastLoginGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_last_login_less_than: {
        value: cdktf.stringToHclTerraform(this._timeLastLoginLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_password_expiry_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timePasswordExpiryGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_password_expiry_less_than: {
        value: cdktf.stringToHclTerraform(this._timePasswordExpiryLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_password_last_changed_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timePasswordLastChangedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_password_last_changed_less_than: {
        value: cdktf.stringToHclTerraform(this._timePasswordLastChangedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_user_created_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeUserCreatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_user_created_less_than: {
        value: cdktf.stringToHclTerraform(this._timeUserCreatedLessThan),
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
      user_category: {
        value: cdktf.stringToHclTerraform(this._userCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_key: {
        value: cdktf.stringToHclTerraform(this._userKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_profile: {
        value: cdktf.stringToHclTerraform(this._userProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_role: {
        value: cdktf.stringToHclTerraform(this._userRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeUserAssessmentUsersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeUserAssessmentUsersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
