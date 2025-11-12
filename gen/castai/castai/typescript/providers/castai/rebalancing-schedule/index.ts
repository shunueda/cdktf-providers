// https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RebalancingScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#id RebalancingSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#name RebalancingSchedule#name}
  */
  readonly name: string;
  /**
  * launch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#launch_configuration RebalancingSchedule#launch_configuration}
  */
  readonly launchConfiguration: RebalancingScheduleLaunchConfiguration;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#schedule RebalancingSchedule#schedule}
  */
  readonly schedule: RebalancingScheduleSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#timeouts RebalancingSchedule#timeouts}
  */
  readonly timeouts?: RebalancingScheduleTimeouts;
  /**
  * trigger_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#trigger_conditions RebalancingSchedule#trigger_conditions}
  */
  readonly triggerConditions: RebalancingScheduleTriggerConditions;
}
export interface RebalancingScheduleLaunchConfigurationAggressiveModeConfig {
  /**
  * Rebalance workloads that use local-path Persistent Volumes. THIS WILL RESULT IN DATA LOSS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#ignore_local_persistent_volumes RebalancingSchedule#ignore_local_persistent_volumes}
  */
  readonly ignoreLocalPersistentVolumes: boolean | cdktf.IResolvable;
  /**
  * Pods spawned by Jobs or CronJobs will not prevent the Rebalancer from deleting a node on which they run. WARNING: When true, pods spawned by Jobs or CronJobs will be terminated if the Rebalancer picks a node that runs them. As such, they are likely to lose their progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#ignore_problem_job_pods RebalancingSchedule#ignore_problem_job_pods}
  */
  readonly ignoreProblemJobPods: boolean | cdktf.IResolvable;
  /**
  * Pods that don't have a controller (bare pods) will not prevent the Rebalancer from deleting a node on which they run. WARNING: When true, such pods might not restart, since they have no controller to do it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#ignore_problem_pods_without_controller RebalancingSchedule#ignore_problem_pods_without_controller}
  */
  readonly ignoreProblemPodsWithoutController: boolean | cdktf.IResolvable;
  /**
  * Pods that are marked with "removal disabled" will not prevent the Rebalancer from deleting a node on which they run. WARNING: When true, such pods will be evicted and disrupted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#ignore_problem_removal_disabled_pods RebalancingSchedule#ignore_problem_removal_disabled_pods}
  */
  readonly ignoreProblemRemovalDisabledPods: boolean | cdktf.IResolvable;
}

export function rebalancingScheduleLaunchConfigurationAggressiveModeConfigToTerraform(struct?: RebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference | RebalancingScheduleLaunchConfigurationAggressiveModeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_local_persistent_volumes: cdktf.booleanToTerraform(struct!.ignoreLocalPersistentVolumes),
    ignore_problem_job_pods: cdktf.booleanToTerraform(struct!.ignoreProblemJobPods),
    ignore_problem_pods_without_controller: cdktf.booleanToTerraform(struct!.ignoreProblemPodsWithoutController),
    ignore_problem_removal_disabled_pods: cdktf.booleanToTerraform(struct!.ignoreProblemRemovalDisabledPods),
  }
}


export function rebalancingScheduleLaunchConfigurationAggressiveModeConfigToHclTerraform(struct?: RebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference | RebalancingScheduleLaunchConfigurationAggressiveModeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_local_persistent_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreLocalPersistentVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_problem_job_pods: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreProblemJobPods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_problem_pods_without_controller: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreProblemPodsWithoutController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_problem_removal_disabled_pods: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreProblemRemovalDisabledPods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RebalancingScheduleLaunchConfigurationAggressiveModeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreLocalPersistentVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreLocalPersistentVolumes = this._ignoreLocalPersistentVolumes;
    }
    if (this._ignoreProblemJobPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreProblemJobPods = this._ignoreProblemJobPods;
    }
    if (this._ignoreProblemPodsWithoutController !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreProblemPodsWithoutController = this._ignoreProblemPodsWithoutController;
    }
    if (this._ignoreProblemRemovalDisabledPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreProblemRemovalDisabledPods = this._ignoreProblemRemovalDisabledPods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingScheduleLaunchConfigurationAggressiveModeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreLocalPersistentVolumes = undefined;
      this._ignoreProblemJobPods = undefined;
      this._ignoreProblemPodsWithoutController = undefined;
      this._ignoreProblemRemovalDisabledPods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreLocalPersistentVolumes = value.ignoreLocalPersistentVolumes;
      this._ignoreProblemJobPods = value.ignoreProblemJobPods;
      this._ignoreProblemPodsWithoutController = value.ignoreProblemPodsWithoutController;
      this._ignoreProblemRemovalDisabledPods = value.ignoreProblemRemovalDisabledPods;
    }
  }

  // ignore_local_persistent_volumes - computed: false, optional: false, required: true
  private _ignoreLocalPersistentVolumes?: boolean | cdktf.IResolvable; 
  public get ignoreLocalPersistentVolumes() {
    return this.getBooleanAttribute('ignore_local_persistent_volumes');
  }
  public set ignoreLocalPersistentVolumes(value: boolean | cdktf.IResolvable) {
    this._ignoreLocalPersistentVolumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLocalPersistentVolumesInput() {
    return this._ignoreLocalPersistentVolumes;
  }

  // ignore_problem_job_pods - computed: false, optional: false, required: true
  private _ignoreProblemJobPods?: boolean | cdktf.IResolvable; 
  public get ignoreProblemJobPods() {
    return this.getBooleanAttribute('ignore_problem_job_pods');
  }
  public set ignoreProblemJobPods(value: boolean | cdktf.IResolvable) {
    this._ignoreProblemJobPods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreProblemJobPodsInput() {
    return this._ignoreProblemJobPods;
  }

  // ignore_problem_pods_without_controller - computed: false, optional: false, required: true
  private _ignoreProblemPodsWithoutController?: boolean | cdktf.IResolvable; 
  public get ignoreProblemPodsWithoutController() {
    return this.getBooleanAttribute('ignore_problem_pods_without_controller');
  }
  public set ignoreProblemPodsWithoutController(value: boolean | cdktf.IResolvable) {
    this._ignoreProblemPodsWithoutController = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreProblemPodsWithoutControllerInput() {
    return this._ignoreProblemPodsWithoutController;
  }

  // ignore_problem_removal_disabled_pods - computed: false, optional: false, required: true
  private _ignoreProblemRemovalDisabledPods?: boolean | cdktf.IResolvable; 
  public get ignoreProblemRemovalDisabledPods() {
    return this.getBooleanAttribute('ignore_problem_removal_disabled_pods');
  }
  public set ignoreProblemRemovalDisabledPods(value: boolean | cdktf.IResolvable) {
    this._ignoreProblemRemovalDisabledPods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreProblemRemovalDisabledPodsInput() {
    return this._ignoreProblemRemovalDisabledPods;
  }
}
export interface RebalancingScheduleLaunchConfigurationExecutionConditions {
  /**
  * The percentage of the predicted savings that must be achieved in order to fully execute the plan.If the savings are not achieved after creating the new nodes, the plan will fail and delete the created nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#achieved_savings_percentage RebalancingSchedule#achieved_savings_percentage}
  */
  readonly achievedSavingsPercentage?: number;
  /**
  * Enables or disables the execution conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#enabled RebalancingSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function rebalancingScheduleLaunchConfigurationExecutionConditionsToTerraform(struct?: RebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference | RebalancingScheduleLaunchConfigurationExecutionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    achieved_savings_percentage: cdktf.numberToTerraform(struct!.achievedSavingsPercentage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function rebalancingScheduleLaunchConfigurationExecutionConditionsToHclTerraform(struct?: RebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference | RebalancingScheduleLaunchConfigurationExecutionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    achieved_savings_percentage: {
      value: cdktf.numberToHclTerraform(struct!.achievedSavingsPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RebalancingScheduleLaunchConfigurationExecutionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._achievedSavingsPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.achievedSavingsPercentage = this._achievedSavingsPercentage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingScheduleLaunchConfigurationExecutionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._achievedSavingsPercentage = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._achievedSavingsPercentage = value.achievedSavingsPercentage;
      this._enabled = value.enabled;
    }
  }

  // achieved_savings_percentage - computed: false, optional: true, required: false
  private _achievedSavingsPercentage?: number; 
  public get achievedSavingsPercentage() {
    return this.getNumberAttribute('achieved_savings_percentage');
  }
  public set achievedSavingsPercentage(value: number) {
    this._achievedSavingsPercentage = value;
  }
  public resetAchievedSavingsPercentage() {
    this._achievedSavingsPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get achievedSavingsPercentageInput() {
    return this._achievedSavingsPercentage;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface RebalancingScheduleLaunchConfiguration {
  /**
  * When enabled rebalancing will also consider problematic pods (pods without controller, job pods, pods with removal-disabled annotation) as not-problematic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#aggressive_mode RebalancingSchedule#aggressive_mode}
  */
  readonly aggressiveMode?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the nodes that failed to get drained until a predefined timeout, will be kept with a rebalancing.cast.ai/status=drain-failed annotation instead of forcefully drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#keep_drain_timeout_nodes RebalancingSchedule#keep_drain_timeout_nodes}
  */
  readonly keepDrainTimeoutNodes?: boolean | cdktf.IResolvable;
  /**
  * Specifies amount of time since node creation before the node is allowed to be considered for automated rebalancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#node_ttl_seconds RebalancingSchedule#node_ttl_seconds}
  */
  readonly nodeTtlSeconds?: number;
  /**
  * Maximum number of nodes that will be selected for rebalancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#num_targeted_nodes RebalancingSchedule#num_targeted_nodes}
  */
  readonly numTargetedNodes?: number;
  /**
  * Minimum number of nodes that should be kept in the cluster after rebalancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#rebalancing_min_nodes RebalancingSchedule#rebalancing_min_nodes}
  */
  readonly rebalancingMinNodes?: number;
  /**
  * Node selector in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#selector RebalancingSchedule#selector}
  */
  readonly selector?: string;
  /**
  * Defines the algorithm used to select the target nodes for rebalancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#target_node_selection_algorithm RebalancingSchedule#target_node_selection_algorithm}
  */
  readonly targetNodeSelectionAlgorithm?: string;
  /**
  * aggressive_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#aggressive_mode_config RebalancingSchedule#aggressive_mode_config}
  */
  readonly aggressiveModeConfig?: RebalancingScheduleLaunchConfigurationAggressiveModeConfig;
  /**
  * execution_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#execution_conditions RebalancingSchedule#execution_conditions}
  */
  readonly executionConditions?: RebalancingScheduleLaunchConfigurationExecutionConditions;
}

export function rebalancingScheduleLaunchConfigurationToTerraform(struct?: RebalancingScheduleLaunchConfigurationOutputReference | RebalancingScheduleLaunchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressive_mode: cdktf.booleanToTerraform(struct!.aggressiveMode),
    keep_drain_timeout_nodes: cdktf.booleanToTerraform(struct!.keepDrainTimeoutNodes),
    node_ttl_seconds: cdktf.numberToTerraform(struct!.nodeTtlSeconds),
    num_targeted_nodes: cdktf.numberToTerraform(struct!.numTargetedNodes),
    rebalancing_min_nodes: cdktf.numberToTerraform(struct!.rebalancingMinNodes),
    selector: cdktf.stringToTerraform(struct!.selector),
    target_node_selection_algorithm: cdktf.stringToTerraform(struct!.targetNodeSelectionAlgorithm),
    aggressive_mode_config: rebalancingScheduleLaunchConfigurationAggressiveModeConfigToTerraform(struct!.aggressiveModeConfig),
    execution_conditions: rebalancingScheduleLaunchConfigurationExecutionConditionsToTerraform(struct!.executionConditions),
  }
}


export function rebalancingScheduleLaunchConfigurationToHclTerraform(struct?: RebalancingScheduleLaunchConfigurationOutputReference | RebalancingScheduleLaunchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressive_mode: {
      value: cdktf.booleanToHclTerraform(struct!.aggressiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_drain_timeout_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.keepDrainTimeoutNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.nodeTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_targeted_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numTargetedNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rebalancing_min_nodes: {
      value: cdktf.numberToHclTerraform(struct!.rebalancingMinNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_node_selection_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.targetNodeSelectionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggressive_mode_config: {
      value: rebalancingScheduleLaunchConfigurationAggressiveModeConfigToHclTerraform(struct!.aggressiveModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RebalancingScheduleLaunchConfigurationAggressiveModeConfigList",
    },
    execution_conditions: {
      value: rebalancingScheduleLaunchConfigurationExecutionConditionsToHclTerraform(struct!.executionConditions),
      isBlock: true,
      type: "list",
      storageClassType: "RebalancingScheduleLaunchConfigurationExecutionConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RebalancingScheduleLaunchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RebalancingScheduleLaunchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveMode = this._aggressiveMode;
    }
    if (this._keepDrainTimeoutNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDrainTimeoutNodes = this._keepDrainTimeoutNodes;
    }
    if (this._nodeTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTtlSeconds = this._nodeTtlSeconds;
    }
    if (this._numTargetedNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTargetedNodes = this._numTargetedNodes;
    }
    if (this._rebalancingMinNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalancingMinNodes = this._rebalancingMinNodes;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._targetNodeSelectionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNodeSelectionAlgorithm = this._targetNodeSelectionAlgorithm;
    }
    if (this._aggressiveModeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveModeConfig = this._aggressiveModeConfig?.internalValue;
    }
    if (this._executionConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionConditions = this._executionConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingScheduleLaunchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggressiveMode = undefined;
      this._keepDrainTimeoutNodes = undefined;
      this._nodeTtlSeconds = undefined;
      this._numTargetedNodes = undefined;
      this._rebalancingMinNodes = undefined;
      this._selector = undefined;
      this._targetNodeSelectionAlgorithm = undefined;
      this._aggressiveModeConfig.internalValue = undefined;
      this._executionConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggressiveMode = value.aggressiveMode;
      this._keepDrainTimeoutNodes = value.keepDrainTimeoutNodes;
      this._nodeTtlSeconds = value.nodeTtlSeconds;
      this._numTargetedNodes = value.numTargetedNodes;
      this._rebalancingMinNodes = value.rebalancingMinNodes;
      this._selector = value.selector;
      this._targetNodeSelectionAlgorithm = value.targetNodeSelectionAlgorithm;
      this._aggressiveModeConfig.internalValue = value.aggressiveModeConfig;
      this._executionConditions.internalValue = value.executionConditions;
    }
  }

  // aggressive_mode - computed: false, optional: true, required: false
  private _aggressiveMode?: boolean | cdktf.IResolvable; 
  public get aggressiveMode() {
    return this.getBooleanAttribute('aggressive_mode');
  }
  public set aggressiveMode(value: boolean | cdktf.IResolvable) {
    this._aggressiveMode = value;
  }
  public resetAggressiveMode() {
    this._aggressiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveModeInput() {
    return this._aggressiveMode;
  }

  // keep_drain_timeout_nodes - computed: false, optional: true, required: false
  private _keepDrainTimeoutNodes?: boolean | cdktf.IResolvable; 
  public get keepDrainTimeoutNodes() {
    return this.getBooleanAttribute('keep_drain_timeout_nodes');
  }
  public set keepDrainTimeoutNodes(value: boolean | cdktf.IResolvable) {
    this._keepDrainTimeoutNodes = value;
  }
  public resetKeepDrainTimeoutNodes() {
    this._keepDrainTimeoutNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDrainTimeoutNodesInput() {
    return this._keepDrainTimeoutNodes;
  }

  // node_ttl_seconds - computed: false, optional: true, required: false
  private _nodeTtlSeconds?: number; 
  public get nodeTtlSeconds() {
    return this.getNumberAttribute('node_ttl_seconds');
  }
  public set nodeTtlSeconds(value: number) {
    this._nodeTtlSeconds = value;
  }
  public resetNodeTtlSeconds() {
    this._nodeTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTtlSecondsInput() {
    return this._nodeTtlSeconds;
  }

  // num_targeted_nodes - computed: false, optional: true, required: false
  private _numTargetedNodes?: number; 
  public get numTargetedNodes() {
    return this.getNumberAttribute('num_targeted_nodes');
  }
  public set numTargetedNodes(value: number) {
    this._numTargetedNodes = value;
  }
  public resetNumTargetedNodes() {
    this._numTargetedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTargetedNodesInput() {
    return this._numTargetedNodes;
  }

  // rebalancing_min_nodes - computed: false, optional: true, required: false
  private _rebalancingMinNodes?: number; 
  public get rebalancingMinNodes() {
    return this.getNumberAttribute('rebalancing_min_nodes');
  }
  public set rebalancingMinNodes(value: number) {
    this._rebalancingMinNodes = value;
  }
  public resetRebalancingMinNodes() {
    this._rebalancingMinNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalancingMinNodesInput() {
    return this._rebalancingMinNodes;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // target_node_selection_algorithm - computed: false, optional: true, required: false
  private _targetNodeSelectionAlgorithm?: string; 
  public get targetNodeSelectionAlgorithm() {
    return this.getStringAttribute('target_node_selection_algorithm');
  }
  public set targetNodeSelectionAlgorithm(value: string) {
    this._targetNodeSelectionAlgorithm = value;
  }
  public resetTargetNodeSelectionAlgorithm() {
    this._targetNodeSelectionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeSelectionAlgorithmInput() {
    return this._targetNodeSelectionAlgorithm;
  }

  // aggressive_mode_config - computed: false, optional: true, required: false
  private _aggressiveModeConfig = new RebalancingScheduleLaunchConfigurationAggressiveModeConfigOutputReference(this, "aggressive_mode_config");
  public get aggressiveModeConfig() {
    return this._aggressiveModeConfig;
  }
  public putAggressiveModeConfig(value: RebalancingScheduleLaunchConfigurationAggressiveModeConfig) {
    this._aggressiveModeConfig.internalValue = value;
  }
  public resetAggressiveModeConfig() {
    this._aggressiveModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveModeConfigInput() {
    return this._aggressiveModeConfig.internalValue;
  }

  // execution_conditions - computed: false, optional: true, required: false
  private _executionConditions = new RebalancingScheduleLaunchConfigurationExecutionConditionsOutputReference(this, "execution_conditions");
  public get executionConditions() {
    return this._executionConditions;
  }
  public putExecutionConditions(value: RebalancingScheduleLaunchConfigurationExecutionConditions) {
    this._executionConditions.internalValue = value;
  }
  public resetExecutionConditions() {
    this._executionConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionConditionsInput() {
    return this._executionConditions.internalValue;
  }
}
export interface RebalancingScheduleSchedule {
  /**
  * Cron expression defining when the schedule should trigger.
  * 
  *   The `cron` expression can optionally include the `CRON_TZ` variable at the beginning to specify the timezone in which the schedule should be interpreted.
  * 
  *   Example:
  *   ```plaintext
  *   CRON_TZ=America/New_York 0 12 * * ?
  *   ```
  *   In the example above, the `CRON_TZ` variable is set to "America/New_York" indicating that the cron expression should be interpreted in the Eastern Time (ET) timezone.
  * 
  *   To retrieve a list of available timezone values, you can use the following API endpoint:
  * 
  *   GET https://api.cast.ai/v1/time-zones
  * 
  *   When using the `CRON_TZ` variable, ensure that the specified timezone is valid and supported by checking the list of available timezones from the API endpoint.  If the `CRON_TZ` variable is not specified, the cron expression will be interpreted in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#cron RebalancingSchedule#cron}
  */
  readonly cron: string;
}

export function rebalancingScheduleScheduleToTerraform(struct?: RebalancingScheduleScheduleOutputReference | RebalancingScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
  }
}


export function rebalancingScheduleScheduleToHclTerraform(struct?: RebalancingScheduleScheduleOutputReference | RebalancingScheduleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RebalancingScheduleScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RebalancingScheduleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingScheduleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }
}
export interface RebalancingScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#create RebalancingSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#delete RebalancingSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#read RebalancingSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#update RebalancingSchedule#update}
  */
  readonly update?: string;
}

export function rebalancingScheduleTimeoutsToTerraform(struct?: RebalancingScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function rebalancingScheduleTimeoutsToHclTerraform(struct?: RebalancingScheduleTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class RebalancingScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RebalancingScheduleTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingScheduleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface RebalancingScheduleTriggerConditions {
  /**
  * If true, the savings percentage will be ignored and the rebalancing will be triggered regardless of the savings percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#ignore_savings RebalancingSchedule#ignore_savings}
  */
  readonly ignoreSavings?: boolean | cdktf.IResolvable;
  /**
  * Defines the minimum percentage of savings expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#savings_percentage RebalancingSchedule#savings_percentage}
  */
  readonly savingsPercentage: number;
}

export function rebalancingScheduleTriggerConditionsToTerraform(struct?: RebalancingScheduleTriggerConditionsOutputReference | RebalancingScheduleTriggerConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_savings: cdktf.booleanToTerraform(struct!.ignoreSavings),
    savings_percentage: cdktf.numberToTerraform(struct!.savingsPercentage),
  }
}


export function rebalancingScheduleTriggerConditionsToHclTerraform(struct?: RebalancingScheduleTriggerConditionsOutputReference | RebalancingScheduleTriggerConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_savings: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSavings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    savings_percentage: {
      value: cdktf.numberToHclTerraform(struct!.savingsPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RebalancingScheduleTriggerConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RebalancingScheduleTriggerConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreSavings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSavings = this._ignoreSavings;
    }
    if (this._savingsPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.savingsPercentage = this._savingsPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingScheduleTriggerConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreSavings = undefined;
      this._savingsPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreSavings = value.ignoreSavings;
      this._savingsPercentage = value.savingsPercentage;
    }
  }

  // ignore_savings - computed: false, optional: true, required: false
  private _ignoreSavings?: boolean | cdktf.IResolvable; 
  public get ignoreSavings() {
    return this.getBooleanAttribute('ignore_savings');
  }
  public set ignoreSavings(value: boolean | cdktf.IResolvable) {
    this._ignoreSavings = value;
  }
  public resetIgnoreSavings() {
    this._ignoreSavings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSavingsInput() {
    return this._ignoreSavings;
  }

  // savings_percentage - computed: false, optional: false, required: true
  private _savingsPercentage?: number; 
  public get savingsPercentage() {
    return this.getNumberAttribute('savings_percentage');
  }
  public set savingsPercentage(value: number) {
    this._savingsPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get savingsPercentageInput() {
    return this._savingsPercentage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule castai_rebalancing_schedule}
*/
export class RebalancingSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_rebalancing_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RebalancingSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RebalancingSchedule to import
  * @param importFromId The id of the existing RebalancingSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RebalancingSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_rebalancing_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.1.0/docs/resources/rebalancing_schedule castai_rebalancing_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RebalancingScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: RebalancingScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_rebalancing_schedule',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.1.0',
        providerVersionConstraint: '8.1.0'
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
    this._launchConfiguration.internalValue = config.launchConfiguration;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
    this._triggerConditions.internalValue = config.triggerConditions;
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

  // launch_configuration - computed: false, optional: false, required: true
  private _launchConfiguration = new RebalancingScheduleLaunchConfigurationOutputReference(this, "launch_configuration");
  public get launchConfiguration() {
    return this._launchConfiguration;
  }
  public putLaunchConfiguration(value: RebalancingScheduleLaunchConfiguration) {
    this._launchConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchConfigurationInput() {
    return this._launchConfiguration.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new RebalancingScheduleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: RebalancingScheduleSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RebalancingScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RebalancingScheduleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger_conditions - computed: false, optional: false, required: true
  private _triggerConditions = new RebalancingScheduleTriggerConditionsOutputReference(this, "trigger_conditions");
  public get triggerConditions() {
    return this._triggerConditions;
  }
  public putTriggerConditions(value: RebalancingScheduleTriggerConditions) {
    this._triggerConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionsInput() {
    return this._triggerConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      launch_configuration: rebalancingScheduleLaunchConfigurationToTerraform(this._launchConfiguration.internalValue),
      schedule: rebalancingScheduleScheduleToTerraform(this._schedule.internalValue),
      timeouts: rebalancingScheduleTimeoutsToTerraform(this._timeouts.internalValue),
      trigger_conditions: rebalancingScheduleTriggerConditionsToTerraform(this._triggerConditions.internalValue),
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
      launch_configuration: {
        value: rebalancingScheduleLaunchConfigurationToHclTerraform(this._launchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RebalancingScheduleLaunchConfigurationList",
      },
      schedule: {
        value: rebalancingScheduleScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RebalancingScheduleScheduleList",
      },
      timeouts: {
        value: rebalancingScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RebalancingScheduleTimeouts",
      },
      trigger_conditions: {
        value: rebalancingScheduleTriggerConditionsToHclTerraform(this._triggerConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RebalancingScheduleTriggerConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
