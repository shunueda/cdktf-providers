// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#display_name DataOciFusionAppsFusionEnvironmentScheduledActivities#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivities#fusion_environment_id}
  */
  readonly fusionEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#id DataOciFusionAppsFusionEnvironmentScheduledActivities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#run_cycle DataOciFusionAppsFusionEnvironmentScheduledActivities#run_cycle}
  */
  readonly runCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#state DataOciFusionAppsFusionEnvironmentScheduledActivities#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_expected_finish_less_than_or_equal_to}
  */
  readonly timeExpectedFinishLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_scheduled_start_greater_than_or_equal_to}
  */
  readonly timeScheduledStartGreaterThanOrEqualTo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#filter DataOciFusionAppsFusionEnvironmentScheduledActivities#filter}
  */
  readonly filter?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[] | cdktf.IResolvable;
}
export interface DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions {
}

export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // artifact - computed: true, optional: false, required: false
  public get artifact() {
    return this.getStringAttribute('artifact');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // reference_key - computed: true, optional: false, required: false
  public get referenceKey() {
    return this.getStringAttribute('reference_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems {
}

export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // delay_in_hours - computed: true, optional: false, required: false
  public get delayInHours() {
    return this.getNumberAttribute('delay_in_hours');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // fusion_environment_id - computed: true, optional: false, required: false
  public get fusionEnvironmentId() {
    return this.getStringAttribute('fusion_environment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // run_cycle - computed: true, optional: false, required: false
  public get runCycle() {
    return this.getStringAttribute('run_cycle');
  }

  // service_availability - computed: true, optional: false, required: false
  public get serviceAvailability() {
    return this.getStringAttribute('service_availability');
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

  // time_scheduled_start - computed: true, optional: false, required: false
  public get timeScheduledStart() {
    return this.getStringAttribute('time_scheduled_start');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection {
}

export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionToTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference {
    return new DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#name DataOciFusionAppsFusionEnvironmentScheduledActivities#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#regex DataOciFusionAppsFusionEnvironmentScheduledActivities#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#values DataOciFusionAppsFusionEnvironmentScheduledActivities#values}
  */
  readonly values: string[];
}

export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterToTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter | cdktf.IResolvable): any {
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


export function dataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter | cdktf.IResolvable): any {
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

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference {
    return new DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities oci_fusion_apps_fusion_environment_scheduled_activities}
*/
export class DataOciFusionAppsFusionEnvironmentScheduledActivities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_scheduled_activities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivities to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivities that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_scheduled_activities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities oci_fusion_apps_fusion_environment_scheduled_activities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_scheduled_activities',
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
    this._displayName = config.displayName;
    this._fusionEnvironmentId = config.fusionEnvironmentId;
    this._id = config.id;
    this._runCycle = config.runCycle;
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

  // run_cycle - computed: false, optional: true, required: false
  private _runCycle?: string; 
  public get runCycle() {
    return this.getStringAttribute('run_cycle');
  }
  public set runCycle(value: string) {
    this._runCycle = value;
  }
  public resetRunCycle() {
    this._runCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCycleInput() {
    return this._runCycle;
  }

  // scheduled_activity_collection - computed: true, optional: false, required: false
  private _scheduledActivityCollection = new DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList(this, "scheduled_activity_collection", false);
  public get scheduledActivityCollection() {
    return this._scheduledActivityCollection;
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
  private _filter = new DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[] | cdktf.IResolvable) {
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
      run_cycle: cdktf.stringToTerraform(this._runCycle),
      state: cdktf.stringToTerraform(this._state),
      time_expected_finish_less_than_or_equal_to: cdktf.stringToTerraform(this._timeExpectedFinishLessThanOrEqualTo),
      time_scheduled_start_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeScheduledStartGreaterThanOrEqualTo),
      filter: cdktf.listMapper(dataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterToTerraform, true)(this._filter.internalValue),
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
      run_cycle: {
        value: cdktf.stringToHclTerraform(this._runCycle),
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
        value: cdktf.listMapperHcl(dataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
