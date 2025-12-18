// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#display_name DataOciFusionAppsFusionEnvironmentRefreshActivities#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivities#fusion_environment_id}
  */
  readonly fusionEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#id DataOciFusionAppsFusionEnvironmentRefreshActivities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#state DataOciFusionAppsFusionEnvironmentRefreshActivities#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_expected_finish_less_than_or_equal_to}
  */
  readonly timeExpectedFinishLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_scheduled_start_greater_than_or_equal_to}
  */
  readonly timeScheduledStartGreaterThanOrEqualTo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#filter DataOciFusionAppsFusionEnvironmentRefreshActivities#filter}
  */
  readonly filter?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter[] | cdktf.IResolvable;
}
export interface DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct {
}

export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructToTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // refresh_issues - computed: true, optional: false, required: false
  public get refreshIssues() {
    return this.getStringAttribute('refresh_issues');
  }
}

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference {
    return new DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems {
}

export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fusion_environment_id - computed: true, optional: false, required: false
  public get fusionEnvironmentId() {
    return this.getStringAttribute('fusion_environment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_data_masking_opted - computed: true, optional: false, required: false
  public get isDataMaskingOpted() {
    return this.getBooleanAttribute('is_data_masking_opted');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // refresh_activity_id - computed: true, optional: false, required: false
  public get refreshActivityId() {
    return this.getStringAttribute('refresh_activity_id');
  }

  // refresh_issue_details_list - computed: true, optional: false, required: false
  private _refreshIssueDetailsList = new DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList(this, "refresh_issue_details_list", false);
  public get refreshIssueDetailsList() {
    return this._refreshIssueDetailsList;
  }

  // service_availability - computed: true, optional: false, required: false
  public get serviceAvailability() {
    return this.getStringAttribute('service_availability');
  }

  // source_fusion_environment_id - computed: true, optional: false, required: false
  public get sourceFusionEnvironmentId() {
    return this.getStringAttribute('source_fusion_environment_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_expected_finish - computed: true, optional: false, required: false
  public get timeExpectedFinish() {
    return this.getStringAttribute('time_expected_finish');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_of_restoration_point - computed: true, optional: false, required: false
  public get timeOfRestorationPoint() {
    return this.getStringAttribute('time_of_restoration_point');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection {
}

export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionToTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference {
    return new DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#name DataOciFusionAppsFusionEnvironmentRefreshActivities#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#regex DataOciFusionAppsFusionEnvironmentRefreshActivities#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#values DataOciFusionAppsFusionEnvironmentRefreshActivities#values}
  */
  readonly values: string[];
}

export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterToTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter | cdktf.IResolvable): any {
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


export function dataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter | cdktf.IResolvable): any {
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

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference {
    return new DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities oci_fusion_apps_fusion_environment_refresh_activities}
*/
export class DataOciFusionAppsFusionEnvironmentRefreshActivities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_refresh_activities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentRefreshActivities to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentRefreshActivities that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentRefreshActivities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_refresh_activities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities oci_fusion_apps_fusion_environment_refresh_activities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_refresh_activities',
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
    this._displayName = config.displayName;
    this._fusionEnvironmentId = config.fusionEnvironmentId;
    this._id = config.id;
    this._state = config.state;
    this._timeExpectedFinishLessThanOrEqualTo = config.timeExpectedFinishLessThanOrEqualTo;
    this._timeScheduledStartGreaterThanOrEqualTo = config.timeScheduledStartGreaterThanOrEqualTo;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fusion_environment_id - computed: false, optional: false, required: true
  private _fusionEnvironmentId?: string; 
  public get fusionEnvironmentId() {
    return this.getStringAttribute('fusion_environment_id');
  }
  public set fusionEnvironmentId(value: string) {
    this._fusionEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentIdInput() {
    return this._fusionEnvironmentId;
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

  // refresh_activity_collection - computed: true, optional: false, required: false
  private _refreshActivityCollection = new DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList(this, "refresh_activity_collection", false);
  public get refreshActivityCollection() {
    return this._refreshActivityCollection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_expected_finish_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeExpectedFinishLessThanOrEqualTo?: string; 
  public get timeExpectedFinishLessThanOrEqualTo() {
    return this.getStringAttribute('time_expected_finish_less_than_or_equal_to');
  }
  public set timeExpectedFinishLessThanOrEqualTo(value: string) {
    this._timeExpectedFinishLessThanOrEqualTo = value;
  }
  public resetTimeExpectedFinishLessThanOrEqualTo() {
    this._timeExpectedFinishLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpectedFinishLessThanOrEqualToInput() {
    return this._timeExpectedFinishLessThanOrEqualTo;
  }

  // time_scheduled_start_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeScheduledStartGreaterThanOrEqualTo?: string; 
  public get timeScheduledStartGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_scheduled_start_greater_than_or_equal_to');
  }
  public set timeScheduledStartGreaterThanOrEqualTo(value: string) {
    this._timeScheduledStartGreaterThanOrEqualTo = value;
  }
  public resetTimeScheduledStartGreaterThanOrEqualTo() {
    this._timeScheduledStartGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduledStartGreaterThanOrEqualToInput() {
    return this._timeScheduledStartGreaterThanOrEqualTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      fusion_environment_id: cdktf.stringToTerraform(this._fusionEnvironmentId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      time_expected_finish_less_than_or_equal_to: cdktf.stringToTerraform(this._timeExpectedFinishLessThanOrEqualTo),
      time_scheduled_start_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeScheduledStartGreaterThanOrEqualTo),
      filter: cdktf.listMapper(dataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fusion_environment_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_expected_finish_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeExpectedFinishLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_scheduled_start_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeScheduledStartGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
