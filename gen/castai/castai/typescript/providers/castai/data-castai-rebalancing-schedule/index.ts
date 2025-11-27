// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/rebalancing_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCastaiRebalancingScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/rebalancing_schedule#id DataCastaiRebalancingSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/rebalancing_schedule#name DataCastaiRebalancingSchedule#name}
  */
  readonly name: string;
}
export interface DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfig {
}

export function dataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigToTerraform(struct?: DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigToHclTerraform(struct?: DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_local_persistent_volumes - computed: true, optional: false, required: false
  public get ignoreLocalPersistentVolumes() {
    return this.getBooleanAttribute('ignore_local_persistent_volumes');
  }

  // ignore_problem_job_pods - computed: true, optional: false, required: false
  public get ignoreProblemJobPods() {
    return this.getBooleanAttribute('ignore_problem_job_pods');
  }

  // ignore_problem_pods_without_controller - computed: true, optional: false, required: false
  public get ignoreProblemPodsWithoutController() {
    return this.getBooleanAttribute('ignore_problem_pods_without_controller');
  }

  // ignore_problem_removal_disabled_pods - computed: true, optional: false, required: false
  public get ignoreProblemRemovalDisabledPods() {
    return this.getBooleanAttribute('ignore_problem_removal_disabled_pods');
  }
}

export class DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference {
    return new DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditions {
}

export function dataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsToTerraform(struct?: DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsToHclTerraform(struct?: DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // achieved_savings_percentage - computed: true, optional: false, required: false
  public get achievedSavingsPercentage() {
    return this.getNumberAttribute('achieved_savings_percentage');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference {
    return new DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiRebalancingScheduleLaunchConfiguration {
}

export function dataCastaiRebalancingScheduleLaunchConfigurationToTerraform(struct?: DataCastaiRebalancingScheduleLaunchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiRebalancingScheduleLaunchConfigurationToHclTerraform(struct?: DataCastaiRebalancingScheduleLaunchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiRebalancingScheduleLaunchConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiRebalancingScheduleLaunchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiRebalancingScheduleLaunchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggressive_mode - computed: true, optional: false, required: false
  public get aggressiveMode() {
    return this.getBooleanAttribute('aggressive_mode');
  }

  // aggressive_mode_config - computed: true, optional: false, required: false
  private _aggressiveModeConfig = new DataCastaiRebalancingScheduleLaunchConfigurationAggressiveModeConfigList(this, "aggressive_mode_config", false);
  public get aggressiveModeConfig() {
    return this._aggressiveModeConfig;
  }

  // execution_conditions - computed: true, optional: false, required: false
  private _executionConditions = new DataCastaiRebalancingScheduleLaunchConfigurationExecutionConditionsList(this, "execution_conditions", false);
  public get executionConditions() {
    return this._executionConditions;
  }

  // keep_drain_timeout_nodes - computed: true, optional: false, required: false
  public get keepDrainTimeoutNodes() {
    return this.getBooleanAttribute('keep_drain_timeout_nodes');
  }

  // node_ttl_seconds - computed: true, optional: false, required: false
  public get nodeTtlSeconds() {
    return this.getNumberAttribute('node_ttl_seconds');
  }

  // num_targeted_nodes - computed: true, optional: false, required: false
  public get numTargetedNodes() {
    return this.getNumberAttribute('num_targeted_nodes');
  }

  // rebalancing_min_nodes - computed: true, optional: false, required: false
  public get rebalancingMinNodes() {
    return this.getNumberAttribute('rebalancing_min_nodes');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }

  // target_node_selection_algorithm - computed: true, optional: false, required: false
  public get targetNodeSelectionAlgorithm() {
    return this.getStringAttribute('target_node_selection_algorithm');
  }
}

export class DataCastaiRebalancingScheduleLaunchConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiRebalancingScheduleLaunchConfigurationOutputReference {
    return new DataCastaiRebalancingScheduleLaunchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiRebalancingScheduleSchedule {
}

export function dataCastaiRebalancingScheduleScheduleToTerraform(struct?: DataCastaiRebalancingScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiRebalancingScheduleScheduleToHclTerraform(struct?: DataCastaiRebalancingScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiRebalancingScheduleScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiRebalancingScheduleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiRebalancingScheduleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return this.getStringAttribute('cron');
  }
}

export class DataCastaiRebalancingScheduleScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiRebalancingScheduleScheduleOutputReference {
    return new DataCastaiRebalancingScheduleScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiRebalancingScheduleTriggerConditions {
}

export function dataCastaiRebalancingScheduleTriggerConditionsToTerraform(struct?: DataCastaiRebalancingScheduleTriggerConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiRebalancingScheduleTriggerConditionsToHclTerraform(struct?: DataCastaiRebalancingScheduleTriggerConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiRebalancingScheduleTriggerConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiRebalancingScheduleTriggerConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiRebalancingScheduleTriggerConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_savings - computed: true, optional: false, required: false
  public get ignoreSavings() {
    return this.getBooleanAttribute('ignore_savings');
  }

  // savings_percentage - computed: true, optional: false, required: false
  public get savingsPercentage() {
    return this.getNumberAttribute('savings_percentage');
  }
}

export class DataCastaiRebalancingScheduleTriggerConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiRebalancingScheduleTriggerConditionsOutputReference {
    return new DataCastaiRebalancingScheduleTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/rebalancing_schedule castai_rebalancing_schedule}
*/
export class DataCastaiRebalancingSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_rebalancing_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCastaiRebalancingSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCastaiRebalancingSchedule to import
  * @param importFromId The id of the existing DataCastaiRebalancingSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/rebalancing_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCastaiRebalancingSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_rebalancing_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/rebalancing_schedule castai_rebalancing_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCastaiRebalancingScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCastaiRebalancingScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_rebalancing_schedule',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
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

  // launch_configuration - computed: true, optional: false, required: false
  private _launchConfiguration = new DataCastaiRebalancingScheduleLaunchConfigurationList(this, "launch_configuration", false);
  public get launchConfiguration() {
    return this._launchConfiguration;
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

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCastaiRebalancingScheduleScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // trigger_conditions - computed: true, optional: false, required: false
  private _triggerConditions = new DataCastaiRebalancingScheduleTriggerConditionsList(this, "trigger_conditions", false);
  public get triggerConditions() {
    return this._triggerConditions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
