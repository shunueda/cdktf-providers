// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementSchedulerJobJobActivityResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#id DataOciFleetAppsManagementSchedulerJobJobActivityResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#job_activity_id DataOciFleetAppsManagementSchedulerJobJobActivityResources#job_activity_id}
  */
  readonly jobActivityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#resource_task_id DataOciFleetAppsManagementSchedulerJobJobActivityResources#resource_task_id}
  */
  readonly resourceTaskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#scheduler_job_id DataOciFleetAppsManagementSchedulerJobJobActivityResources#scheduler_job_id}
  */
  readonly schedulerJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#sequence DataOciFleetAppsManagementSchedulerJobJobActivityResources#sequence}
  */
  readonly sequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#step_name DataOciFleetAppsManagementSchedulerJobJobActivityResources#step_name}
  */
  readonly stepName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#target_name DataOciFleetAppsManagementSchedulerJobJobActivityResources#target_name}
  */
  readonly targetName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#filter DataOciFleetAppsManagementSchedulerJobJobActivityResources#filter}
  */
  readonly filter?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargets {
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItems {
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // resource_display_name - computed: true, optional: false, required: false
  public get resourceDisplayName() {
    return this.getStringAttribute('resource_display_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // sequence - computed: true, optional: false, required: false
  public get sequence() {
    return this.getStringAttribute('sequence');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollection {
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#name DataOciFleetAppsManagementSchedulerJobJobActivityResources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#regex DataOciFleetAppsManagementSchedulerJobJobActivityResources#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#values DataOciFleetAppsManagementSchedulerJobJobActivityResources#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter | cdktf.IResolvable): any {
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


export function dataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter | cdktf.IResolvable): any {
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

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources oci_fleet_apps_management_scheduler_job_job_activity_resources}
*/
export class DataOciFleetAppsManagementSchedulerJobJobActivityResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_scheduler_job_job_activity_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerJobJobActivityResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerJobJobActivityResources to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementSchedulerJobJobActivityResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerJobJobActivityResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_scheduler_job_job_activity_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_resources oci_fleet_apps_management_scheduler_job_job_activity_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementSchedulerJobJobActivityResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_scheduler_job_job_activity_resources',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._jobActivityId = config.jobActivityId;
    this._resourceTaskId = config.resourceTaskId;
    this._schedulerJobId = config.schedulerJobId;
    this._sequence = config.sequence;
    this._stepName = config.stepName;
    this._targetName = config.targetName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // job_activity_id - computed: false, optional: false, required: true
  private _jobActivityId?: string; 
  public get jobActivityId() {
    return this.getStringAttribute('job_activity_id');
  }
  public set jobActivityId(value: string) {
    this._jobActivityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobActivityIdInput() {
    return this._jobActivityId;
  }

  // resource_collection - computed: true, optional: false, required: false
  private _resourceCollection = new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesResourceCollectionList(this, "resource_collection", false);
  public get resourceCollection() {
    return this._resourceCollection;
  }

  // resource_task_id - computed: false, optional: true, required: false
  private _resourceTaskId?: string; 
  public get resourceTaskId() {
    return this.getStringAttribute('resource_task_id');
  }
  public set resourceTaskId(value: string) {
    this._resourceTaskId = value;
  }
  public resetResourceTaskId() {
    this._resourceTaskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTaskIdInput() {
    return this._resourceTaskId;
  }

  // scheduler_job_id - computed: false, optional: false, required: true
  private _schedulerJobId?: string; 
  public get schedulerJobId() {
    return this.getStringAttribute('scheduler_job_id');
  }
  public set schedulerJobId(value: string) {
    this._schedulerJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerJobIdInput() {
    return this._schedulerJobId;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // step_name - computed: false, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      job_activity_id: cdktf.stringToTerraform(this._jobActivityId),
      resource_task_id: cdktf.stringToTerraform(this._resourceTaskId),
      scheduler_job_id: cdktf.stringToTerraform(this._schedulerJobId),
      sequence: cdktf.stringToTerraform(this._sequence),
      step_name: cdktf.stringToTerraform(this._stepName),
      target_name: cdktf.stringToTerraform(this._targetName),
      filter: cdktf.listMapper(dataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterToTerraform, true)(this._filter.internalValue),
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
      job_activity_id: {
        value: cdktf.stringToHclTerraform(this._jobActivityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_task_id: {
        value: cdktf.stringToHclTerraform(this._resourceTaskId),
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
      sequence: {
        value: cdktf.stringToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      step_name: {
        value: cdktf.stringToHclTerraform(this._stepName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementSchedulerJobJobActivityResourcesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
