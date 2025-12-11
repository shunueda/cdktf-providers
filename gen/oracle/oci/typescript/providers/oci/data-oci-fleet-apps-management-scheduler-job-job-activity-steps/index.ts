// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementSchedulerJobJobActivityStepsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#id DataOciFleetAppsManagementSchedulerJobJobActivitySteps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#job_activity_id DataOciFleetAppsManagementSchedulerJobJobActivitySteps#job_activity_id}
  */
  readonly jobActivityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#resource_task_id DataOciFleetAppsManagementSchedulerJobJobActivitySteps#resource_task_id}
  */
  readonly resourceTaskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#scheduler_job_id DataOciFleetAppsManagementSchedulerJobJobActivitySteps#scheduler_job_id}
  */
  readonly schedulerJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#sequence DataOciFleetAppsManagementSchedulerJobJobActivitySteps#sequence}
  */
  readonly sequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#step_name DataOciFleetAppsManagementSchedulerJobJobActivitySteps#step_name}
  */
  readonly stepName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#target_name DataOciFleetAppsManagementSchedulerJobJobActivitySteps#target_name}
  */
  readonly targetName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#filter DataOciFleetAppsManagementSchedulerJobJobActivitySteps#filter}
  */
  readonly filter?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItems {
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItems | undefined) {
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

  // is_rollback_task - computed: true, optional: false, required: false
  public get isRollbackTask() {
    return this.getBooleanAttribute('is_rollback_task');
  }

  // sequence - computed: true, optional: false, required: false
  public get sequence() {
    return this.getStringAttribute('sequence');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // task_record_id - computed: true, optional: false, required: false
  public get taskRecordId() {
    return this.getStringAttribute('task_record_id');
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

export class DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollection {
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#name DataOciFleetAppsManagementSchedulerJobJobActivitySteps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#regex DataOciFleetAppsManagementSchedulerJobJobActivitySteps#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#values DataOciFleetAppsManagementSchedulerJobJobActivitySteps#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterToTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter | cdktf.IResolvable): any {
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


export function dataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterToHclTerraform(struct?: DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter | cdktf.IResolvable): any {
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

export class DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterOutputReference {
    return new DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps oci_fleet_apps_management_scheduler_job_job_activity_steps}
*/
export class DataOciFleetAppsManagementSchedulerJobJobActivitySteps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_scheduler_job_job_activity_steps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerJobJobActivitySteps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerJobJobActivitySteps to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementSchedulerJobJobActivitySteps that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerJobJobActivitySteps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_scheduler_job_job_activity_steps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_scheduler_job_job_activity_steps oci_fleet_apps_management_scheduler_job_job_activity_steps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementSchedulerJobJobActivityStepsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementSchedulerJobJobActivityStepsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_scheduler_job_job_activity_steps',
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

  // step_collection - computed: true, optional: false, required: false
  private _stepCollection = new DataOciFleetAppsManagementSchedulerJobJobActivityStepsStepCollectionList(this, "step_collection", false);
  public get stepCollection() {
    return this._stepCollection;
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
  private _filter = new DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterToTerraform, true)(this._filter.internalValue),
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
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementSchedulerJobJobActivityStepsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
