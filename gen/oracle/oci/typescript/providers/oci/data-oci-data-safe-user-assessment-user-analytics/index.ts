// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeUserAssessmentUserAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}
  */
  readonly accountStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}
  */
  readonly timeLastLoginGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}
  */
  readonly timeLastLoginLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_expiry_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_expiry_greater_than_or_equal_to}
  */
  readonly timePasswordExpiryGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_expiry_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_expiry_less_than}
  */
  readonly timePasswordExpiryLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}
  */
  readonly timePasswordLastChangedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}
  */
  readonly timePasswordLastChangedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}
  */
  readonly timeUserCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}
  */
  readonly timeUserCreatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}
  */
  readonly userAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}
  */
  readonly userCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}
  */
  readonly userKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}
  */
  readonly userName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#filter DataOciDataSafeUserAssessmentUserAnalytics#filter}
  */
  readonly filter?: DataOciDataSafeUserAssessmentUserAnalyticsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems {
}

export function dataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsToTerraform(struct?: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsToHclTerraform(struct?: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference {
    return new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations {
}

export function dataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsToTerraform(struct?: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsToHclTerraform(struct?: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference {
    return new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUserAssessmentUserAnalyticsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeUserAssessmentUserAnalyticsFilterToTerraform(struct?: DataOciDataSafeUserAssessmentUserAnalyticsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeUserAssessmentUserAnalyticsFilterToHclTerraform(struct?: DataOciDataSafeUserAssessmentUserAnalyticsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentUserAnalyticsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeUserAssessmentUserAnalyticsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeUserAssessmentUserAnalyticsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeUserAssessmentUserAnalyticsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference {
    return new DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics oci_data_safe_user_assessment_user_analytics}
*/
export class DataOciDataSafeUserAssessmentUserAnalytics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_user_assessment_user_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeUserAssessmentUserAnalytics to import
  * @param importFromId The id of the existing DataOciDataSafeUserAssessmentUserAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeUserAssessmentUserAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_user_assessment_user_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_user_assessment_user_analytics oci_data_safe_user_assessment_user_analytics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeUserAssessmentUserAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentUserAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_user_assessment_user_analytics',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._authenticationType = config.authenticationType;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._id = config.id;
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

  // user_aggregations - computed: true, optional: false, required: false
  private _userAggregations = new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList(this, "user_aggregations", false);
  public get userAggregations() {
    return this._userAggregations;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeUserAssessmentUserAnalyticsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeUserAssessmentUserAnalyticsFilter[] | cdktf.IResolvable) {
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
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      id: cdktf.stringToTerraform(this._id),
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
      filter: cdktf.listMapper(dataOciDataSafeUserAssessmentUserAnalyticsFilterToTerraform, true)(this._filter.internalValue),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeUserAssessmentUserAnalyticsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeUserAssessmentUserAnalyticsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
