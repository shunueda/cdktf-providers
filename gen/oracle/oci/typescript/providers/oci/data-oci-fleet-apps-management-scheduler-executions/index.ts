// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementSchedulerExecutionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#compartment_id DataOciFleetAppsManagementSchedulerExecutions#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#compartment_id_in_subtree DataOciFleetAppsManagementSchedulerExecutions#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#display_name DataOciFleetAppsManagementSchedulerExecutions#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#id DataOciFleetAppsManagementSchedulerExecutions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#lifecycle_operation DataOciFleetAppsManagementSchedulerExecutions#lifecycle_operation}
  */
  readonly lifecycleOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#resource_id DataOciFleetAppsManagementSchedulerExecutions#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#runbook_id DataOciFleetAppsManagementSchedulerExecutions#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#runbook_version_name DataOciFleetAppsManagementSchedulerExecutions#runbook_version_name}
  */
  readonly runbookVersionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#scheduler_defintion_id DataOciFleetAppsManagementSchedulerExecutions#scheduler_defintion_id}
  */
  readonly schedulerDefintionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#scheduler_job_id DataOciFleetAppsManagementSchedulerExecutions#scheduler_job_id}
  */
  readonly schedulerJobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#substate DataOciFleetAppsManagementSchedulerExecutions#substate}
  */
  readonly substate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#time_scheduled_greater_than_or_equal_to DataOciFleetAppsManagementSchedulerExecutions#time_scheduled_greater_than_or_equal_to}
  */
  readonly timeScheduledGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#time_scheduled_less_than DataOciFleetAppsManagementSchedulerExecutions#time_scheduled_less_than}
  */
  readonly timeScheduledLessThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#filter DataOciFleetAppsManagementSchedulerExecutions#filter}
  */
  readonly filter?: DataOciFleetAppsManagementSchedulerExecutionsFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinition {
}

export function dataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionToTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinition | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_recurring - computed: true, optional: false, required: false
  public get isRecurring() {
    return this.getBooleanAttribute('is_recurring');
  }
}

export class DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionOutputReference {
    return new DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItems {
}

export function dataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity_id - computed: true, optional: false, required: false
  public get activityId() {
    return this.getStringAttribute('activity_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_runbook_version_name - computed: true, optional: false, required: false
  public get latestRunbookVersionName() {
    return this.getStringAttribute('latest_runbook_version_name');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // resource_display_name - computed: true, optional: false, required: false
  public get resourceDisplayName() {
    return this.getStringAttribute('resource_display_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // runbook_display_name - computed: true, optional: false, required: false
  public get runbookDisplayName() {
    return this.getStringAttribute('runbook_display_name');
  }

  // runbook_id - computed: true, optional: false, required: false
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }

  // runbook_version_name - computed: true, optional: false, required: false
  public get runbookVersionName() {
    return this.getStringAttribute('runbook_version_name');
  }

  // scheduler_definition - computed: true, optional: false, required: false
  private _schedulerDefinition = new DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsSchedulerDefinitionList(this, "scheduler_definition", false);
  public get schedulerDefinition() {
    return this._schedulerDefinition;
  }

  // scheduler_job_id - computed: true, optional: false, required: false
  public get schedulerJobId() {
    return this.getStringAttribute('scheduler_job_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_scheduled - computed: true, optional: false, required: false
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollection {
}

export function dataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionToTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionOutputReference {
    return new DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerExecutionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#name DataOciFleetAppsManagementSchedulerExecutions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#regex DataOciFleetAppsManagementSchedulerExecutions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#values DataOciFleetAppsManagementSchedulerExecutions#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementSchedulerExecutionsFilterToTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsFilter | cdktf.IResolvable): any {
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


export function dataOciFleetAppsManagementSchedulerExecutionsFilterToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerExecutionsFilter | cdktf.IResolvable): any {
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

export class DataOciFleetAppsManagementSchedulerExecutionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerExecutionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetAppsManagementSchedulerExecutionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetAppsManagementSchedulerExecutionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementSchedulerExecutionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementSchedulerExecutionsFilterOutputReference {
    return new DataOciFleetAppsManagementSchedulerExecutionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions oci_fleet_apps_management_scheduler_executions}
*/
export class DataOciFleetAppsManagementSchedulerExecutions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_scheduler_executions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerExecutions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerExecutions to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementSchedulerExecutions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerExecutions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_scheduler_executions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_scheduler_executions oci_fleet_apps_management_scheduler_executions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementSchedulerExecutionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementSchedulerExecutionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_scheduler_executions',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._displayName = config.displayName;
    this._id = config.id;
    this._lifecycleOperation = config.lifecycleOperation;
    this._resourceId = config.resourceId;
    this._runbookId = config.runbookId;
    this._runbookVersionName = config.runbookVersionName;
    this._schedulerDefintionId = config.schedulerDefintionId;
    this._schedulerJobId = config.schedulerJobId;
    this._substate = config.substate;
    this._timeScheduledGreaterThanOrEqualTo = config.timeScheduledGreaterThanOrEqualTo;
    this._timeScheduledLessThan = config.timeScheduledLessThan;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // lifecycle_operation - computed: false, optional: true, required: false
  private _lifecycleOperation?: string; 
  public get lifecycleOperation() {
    return this.getStringAttribute('lifecycle_operation');
  }
  public set lifecycleOperation(value: string) {
    this._lifecycleOperation = value;
  }
  public resetLifecycleOperation() {
    this._lifecycleOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleOperationInput() {
    return this._lifecycleOperation;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // runbook_version_name - computed: false, optional: true, required: false
  private _runbookVersionName?: string; 
  public get runbookVersionName() {
    return this.getStringAttribute('runbook_version_name');
  }
  public set runbookVersionName(value: string) {
    this._runbookVersionName = value;
  }
  public resetRunbookVersionName() {
    this._runbookVersionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookVersionNameInput() {
    return this._runbookVersionName;
  }

  // scheduler_defintion_id - computed: false, optional: true, required: false
  private _schedulerDefintionId?: string; 
  public get schedulerDefintionId() {
    return this.getStringAttribute('scheduler_defintion_id');
  }
  public set schedulerDefintionId(value: string) {
    this._schedulerDefintionId = value;
  }
  public resetSchedulerDefintionId() {
    this._schedulerDefintionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerDefintionIdInput() {
    return this._schedulerDefintionId;
  }

  // scheduler_execution_collection - computed: true, optional: false, required: false
  private _schedulerExecutionCollection = new DataOciFleetAppsManagementSchedulerExecutionsSchedulerExecutionCollectionList(this, "scheduler_execution_collection", false);
  public get schedulerExecutionCollection() {
    return this._schedulerExecutionCollection;
  }

  // scheduler_job_id - computed: false, optional: true, required: false
  private _schedulerJobId?: string; 
  public get schedulerJobId() {
    return this.getStringAttribute('scheduler_job_id');
  }
  public set schedulerJobId(value: string) {
    this._schedulerJobId = value;
  }
  public resetSchedulerJobId() {
    this._schedulerJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerJobIdInput() {
    return this._schedulerJobId;
  }

  // substate - computed: false, optional: true, required: false
  private _substate?: string; 
  public get substate() {
    return this.getStringAttribute('substate');
  }
  public set substate(value: string) {
    this._substate = value;
  }
  public resetSubstate() {
    this._substate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substateInput() {
    return this._substate;
  }

  // time_scheduled_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeScheduledGreaterThanOrEqualTo?: string; 
  public get timeScheduledGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_scheduled_greater_than_or_equal_to');
  }
  public set timeScheduledGreaterThanOrEqualTo(value: string) {
    this._timeScheduledGreaterThanOrEqualTo = value;
  }
  public resetTimeScheduledGreaterThanOrEqualTo() {
    this._timeScheduledGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduledGreaterThanOrEqualToInput() {
    return this._timeScheduledGreaterThanOrEqualTo;
  }

  // time_scheduled_less_than - computed: false, optional: true, required: false
  private _timeScheduledLessThan?: string; 
  public get timeScheduledLessThan() {
    return this.getStringAttribute('time_scheduled_less_than');
  }
  public set timeScheduledLessThan(value: string) {
    this._timeScheduledLessThan = value;
  }
  public resetTimeScheduledLessThan() {
    this._timeScheduledLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduledLessThanInput() {
    return this._timeScheduledLessThan;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementSchedulerExecutionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementSchedulerExecutionsFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_operation: cdktf.stringToTerraform(this._lifecycleOperation),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      runbook_id: cdktf.stringToTerraform(this._runbookId),
      runbook_version_name: cdktf.stringToTerraform(this._runbookVersionName),
      scheduler_defintion_id: cdktf.stringToTerraform(this._schedulerDefintionId),
      scheduler_job_id: cdktf.stringToTerraform(this._schedulerJobId),
      substate: cdktf.stringToTerraform(this._substate),
      time_scheduled_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeScheduledGreaterThanOrEqualTo),
      time_scheduled_less_than: cdktf.stringToTerraform(this._timeScheduledLessThan),
      filter: cdktf.listMapper(dataOciFleetAppsManagementSchedulerExecutionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      lifecycle_operation: {
        value: cdktf.stringToHclTerraform(this._lifecycleOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook_id: {
        value: cdktf.stringToHclTerraform(this._runbookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook_version_name: {
        value: cdktf.stringToHclTerraform(this._runbookVersionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_defintion_id: {
        value: cdktf.stringToHclTerraform(this._schedulerDefintionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_job_id: {
        value: cdktf.stringToHclTerraform(this._schedulerJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substate: {
        value: cdktf.stringToHclTerraform(this._substate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_scheduled_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeScheduledGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_scheduled_less_than: {
        value: cdktf.stringToHclTerraform(this._timeScheduledLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementSchedulerExecutionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementSchedulerExecutionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
