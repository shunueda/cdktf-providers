// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterOrchestratorConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the cluster orchestrator is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#disabled ClusterOrchestratorConfigA#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#id ClusterOrchestratorConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the Cluster Orchestrator Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#orchestrator_id ClusterOrchestratorConfigA#orchestrator_id}
  */
  readonly orchestratorId: string;
  /**
  * binpacking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#binpacking ClusterOrchestratorConfigA#binpacking}
  */
  readonly binpacking?: ClusterOrchestratorConfigBinpacking;
  /**
  * commitment_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#commitment_integration ClusterOrchestratorConfigA#commitment_integration}
  */
  readonly commitmentIntegration?: ClusterOrchestratorConfigCommitmentIntegration;
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#distribution ClusterOrchestratorConfigA#distribution}
  */
  readonly distribution: ClusterOrchestratorConfigDistribution;
  /**
  * node_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#node_preferences ClusterOrchestratorConfigA#node_preferences}
  */
  readonly nodePreferences?: ClusterOrchestratorConfigNodePreferences;
  /**
  * replacement_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#replacement_schedule ClusterOrchestratorConfigA#replacement_schedule}
  */
  readonly replacementSchedule?: ClusterOrchestratorConfigReplacementSchedule;
}
export interface ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule {
  /**
  * Duration for disruption budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#duration ClusterOrchestratorConfigA#duration}
  */
  readonly duration: string;
  /**
  * Frequency for disruption budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#frequency ClusterOrchestratorConfigA#frequency}
  */
  readonly frequency: string;
}

export function clusterOrchestratorConfigBinpackingDisruptionBudgetScheduleToTerraform(struct?: ClusterOrchestratorConfigBinpackingDisruptionBudgetScheduleOutputReference | ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function clusterOrchestratorConfigBinpackingDisruptionBudgetScheduleToHclTerraform(struct?: ClusterOrchestratorConfigBinpackingDisruptionBudgetScheduleOutputReference | ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigBinpackingDisruptionBudgetScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._frequency = value.frequency;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface ClusterOrchestratorConfigBinpackingDisruptionBudget {
  /**
  * Number or percentage of Nodes to consider for disruption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#nodes ClusterOrchestratorConfigA#nodes}
  */
  readonly nodes: string;
  /**
  * Reasons for disruption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#reasons ClusterOrchestratorConfigA#reasons}
  */
  readonly reasons?: string[];
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#schedule ClusterOrchestratorConfigA#schedule}
  */
  readonly schedule?: ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule;
}

export function clusterOrchestratorConfigBinpackingDisruptionBudgetToTerraform(struct?: ClusterOrchestratorConfigBinpackingDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodes: cdktf.stringToTerraform(struct!.nodes),
    reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reasons),
    schedule: clusterOrchestratorConfigBinpackingDisruptionBudgetScheduleToTerraform(struct!.schedule),
  }
}


export function clusterOrchestratorConfigBinpackingDisruptionBudgetToHclTerraform(struct?: ClusterOrchestratorConfigBinpackingDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodes: {
      value: cdktf.stringToHclTerraform(struct!.nodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reasons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: clusterOrchestratorConfigBinpackingDisruptionBudgetScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigBinpackingDisruptionBudgetScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigBinpackingDisruptionBudgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterOrchestratorConfigBinpackingDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._reasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasons = this._reasons;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigBinpackingDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodes = undefined;
      this._reasons = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodes = value.nodes;
      this._reasons = value.reasons;
      this._schedule.internalValue = value.schedule;
    }
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes?: string; 
  public get nodes() {
    return this.getStringAttribute('nodes');
  }
  public set nodes(value: string) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // reasons - computed: false, optional: true, required: false
  private _reasons?: string[]; 
  public get reasons() {
    return this.getListAttribute('reasons');
  }
  public set reasons(value: string[]) {
    this._reasons = value;
  }
  public resetReasons() {
    this._reasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonsInput() {
    return this._reasons;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new ClusterOrchestratorConfigBinpackingDisruptionBudgetScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ClusterOrchestratorConfigBinpackingDisruptionBudgetSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class ClusterOrchestratorConfigBinpackingDisruptionBudgetList extends cdktf.ComplexList {
  public internalValue? : ClusterOrchestratorConfigBinpackingDisruptionBudget[] | cdktf.IResolvable

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
  public get(index: number): ClusterOrchestratorConfigBinpackingDisruptionBudgetOutputReference {
    return new ClusterOrchestratorConfigBinpackingDisruptionBudgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterOrchestratorConfigBinpackingDisruption {
  /**
  * Criteria for considering a nodes for disruption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#criteria ClusterOrchestratorConfigA#criteria}
  */
  readonly criteria?: string;
  /**
  * Deletion delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#delay ClusterOrchestratorConfigA#delay}
  */
  readonly delay?: string;
  /**
  * budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#budget ClusterOrchestratorConfigA#budget}
  */
  readonly budget?: ClusterOrchestratorConfigBinpackingDisruptionBudget[] | cdktf.IResolvable;
}

export function clusterOrchestratorConfigBinpackingDisruptionToTerraform(struct?: ClusterOrchestratorConfigBinpackingDisruptionOutputReference | ClusterOrchestratorConfigBinpackingDisruption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    delay: cdktf.stringToTerraform(struct!.delay),
    budget: cdktf.listMapper(clusterOrchestratorConfigBinpackingDisruptionBudgetToTerraform, true)(struct!.budget),
  }
}


export function clusterOrchestratorConfigBinpackingDisruptionToHclTerraform(struct?: ClusterOrchestratorConfigBinpackingDisruptionOutputReference | ClusterOrchestratorConfigBinpackingDisruption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    budget: {
      value: cdktf.listMapperHcl(clusterOrchestratorConfigBinpackingDisruptionBudgetToHclTerraform, true)(struct!.budget),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigBinpackingDisruptionBudgetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigBinpackingDisruptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigBinpackingDisruption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._budget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.budget = this._budget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigBinpackingDisruption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._delay = undefined;
      this._budget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._delay = value.delay;
      this._budget.internalValue = value.budget;
    }
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // budget - computed: false, optional: true, required: false
  private _budget = new ClusterOrchestratorConfigBinpackingDisruptionBudgetList(this, "budget", false);
  public get budget() {
    return this._budget;
  }
  public putBudget(value: ClusterOrchestratorConfigBinpackingDisruptionBudget[] | cdktf.IResolvable) {
    this._budget.internalValue = value;
  }
  public resetBudget() {
    this._budget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetInput() {
    return this._budget.internalValue;
  }
}
export interface ClusterOrchestratorConfigBinpackingPodEvictionThreshold {
  /**
  * CPU percentage for considering a node as underutilized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#cpu ClusterOrchestratorConfigA#cpu}
  */
  readonly cpu: number;
  /**
  * Memory percentage for considering a node as underutilized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#memory ClusterOrchestratorConfigA#memory}
  */
  readonly memory: number;
}

export function clusterOrchestratorConfigBinpackingPodEvictionThresholdToTerraform(struct?: ClusterOrchestratorConfigBinpackingPodEvictionThresholdOutputReference | ClusterOrchestratorConfigBinpackingPodEvictionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function clusterOrchestratorConfigBinpackingPodEvictionThresholdToHclTerraform(struct?: ClusterOrchestratorConfigBinpackingPodEvictionThresholdOutputReference | ClusterOrchestratorConfigBinpackingPodEvictionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigBinpackingPodEvictionThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigBinpackingPodEvictionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigBinpackingPodEvictionThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface ClusterOrchestratorConfigBinpackingPodEviction {
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#threshold ClusterOrchestratorConfigA#threshold}
  */
  readonly threshold: ClusterOrchestratorConfigBinpackingPodEvictionThreshold;
}

export function clusterOrchestratorConfigBinpackingPodEvictionToTerraform(struct?: ClusterOrchestratorConfigBinpackingPodEvictionOutputReference | ClusterOrchestratorConfigBinpackingPodEviction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: clusterOrchestratorConfigBinpackingPodEvictionThresholdToTerraform(struct!.threshold),
  }
}


export function clusterOrchestratorConfigBinpackingPodEvictionToHclTerraform(struct?: ClusterOrchestratorConfigBinpackingPodEvictionOutputReference | ClusterOrchestratorConfigBinpackingPodEviction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: clusterOrchestratorConfigBinpackingPodEvictionThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigBinpackingPodEvictionThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigBinpackingPodEvictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigBinpackingPodEviction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigBinpackingPodEviction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold.internalValue = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new ClusterOrchestratorConfigBinpackingPodEvictionThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: ClusterOrchestratorConfigBinpackingPodEvictionThreshold) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface ClusterOrchestratorConfigBinpacking {
  /**
  * disruption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#disruption ClusterOrchestratorConfigA#disruption}
  */
  readonly disruption?: ClusterOrchestratorConfigBinpackingDisruption;
  /**
  * pod_eviction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#pod_eviction ClusterOrchestratorConfigA#pod_eviction}
  */
  readonly podEviction?: ClusterOrchestratorConfigBinpackingPodEviction;
}

export function clusterOrchestratorConfigBinpackingToTerraform(struct?: ClusterOrchestratorConfigBinpackingOutputReference | ClusterOrchestratorConfigBinpacking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disruption: clusterOrchestratorConfigBinpackingDisruptionToTerraform(struct!.disruption),
    pod_eviction: clusterOrchestratorConfigBinpackingPodEvictionToTerraform(struct!.podEviction),
  }
}


export function clusterOrchestratorConfigBinpackingToHclTerraform(struct?: ClusterOrchestratorConfigBinpackingOutputReference | ClusterOrchestratorConfigBinpacking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disruption: {
      value: clusterOrchestratorConfigBinpackingDisruptionToHclTerraform(struct!.disruption),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigBinpackingDisruptionList",
    },
    pod_eviction: {
      value: clusterOrchestratorConfigBinpackingPodEvictionToHclTerraform(struct!.podEviction),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigBinpackingPodEvictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigBinpackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigBinpacking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disruption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruption = this._disruption?.internalValue;
    }
    if (this._podEviction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podEviction = this._podEviction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigBinpacking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disruption.internalValue = undefined;
      this._podEviction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disruption.internalValue = value.disruption;
      this._podEviction.internalValue = value.podEviction;
    }
  }

  // disruption - computed: false, optional: true, required: false
  private _disruption = new ClusterOrchestratorConfigBinpackingDisruptionOutputReference(this, "disruption");
  public get disruption() {
    return this._disruption;
  }
  public putDisruption(value: ClusterOrchestratorConfigBinpackingDisruption) {
    this._disruption.internalValue = value;
  }
  public resetDisruption() {
    this._disruption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionInput() {
    return this._disruption.internalValue;
  }

  // pod_eviction - computed: false, optional: true, required: false
  private _podEviction = new ClusterOrchestratorConfigBinpackingPodEvictionOutputReference(this, "pod_eviction");
  public get podEviction() {
    return this._podEviction;
  }
  public putPodEviction(value: ClusterOrchestratorConfigBinpackingPodEviction) {
    this._podEviction.internalValue = value;
  }
  public resetPodEviction() {
    this._podEviction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podEvictionInput() {
    return this._podEviction.internalValue;
  }
}
export interface ClusterOrchestratorConfigCommitmentIntegration {
  /**
  * Flag to enable Commitment Integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#enabled ClusterOrchestratorConfigA#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Master AWS account id for commitment integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#master_account_id ClusterOrchestratorConfigA#master_account_id}
  */
  readonly masterAccountId: string;
}

export function clusterOrchestratorConfigCommitmentIntegrationToTerraform(struct?: ClusterOrchestratorConfigCommitmentIntegrationOutputReference | ClusterOrchestratorConfigCommitmentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    master_account_id: cdktf.stringToTerraform(struct!.masterAccountId),
  }
}


export function clusterOrchestratorConfigCommitmentIntegrationToHclTerraform(struct?: ClusterOrchestratorConfigCommitmentIntegrationOutputReference | ClusterOrchestratorConfigCommitmentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_account_id: {
      value: cdktf.stringToHclTerraform(struct!.masterAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigCommitmentIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigCommitmentIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._masterAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterAccountId = this._masterAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigCommitmentIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._masterAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._masterAccountId = value.masterAccountId;
    }
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

  // master_account_id - computed: false, optional: false, required: true
  private _masterAccountId?: string; 
  public get masterAccountId() {
    return this.getStringAttribute('master_account_id');
  }
  public set masterAccountId(value: string) {
    this._masterAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAccountIdInput() {
    return this._masterAccountId;
  }
}
export interface ClusterOrchestratorConfigDistribution {
  /**
  * Number of minimum ondemand replicas required for workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#base_ondemand_capacity ClusterOrchestratorConfigA#base_ondemand_capacity}
  */
  readonly baseOndemandCapacity?: number;
  /**
  * Percentage of on-demand replicas required for workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#ondemand_replica_percentage ClusterOrchestratorConfigA#ondemand_replica_percentage}
  */
  readonly ondemandReplicaPercentage: number;
  /**
  * Selector for choosing workloads for distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#selector ClusterOrchestratorConfigA#selector}
  */
  readonly selector?: string;
  /**
  * Strategy for choosing spot nodes for cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#strategy ClusterOrchestratorConfigA#strategy}
  */
  readonly strategy?: string;
}

export function clusterOrchestratorConfigDistributionToTerraform(struct?: ClusterOrchestratorConfigDistributionOutputReference | ClusterOrchestratorConfigDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ondemand_capacity: cdktf.numberToTerraform(struct!.baseOndemandCapacity),
    ondemand_replica_percentage: cdktf.numberToTerraform(struct!.ondemandReplicaPercentage),
    selector: cdktf.stringToTerraform(struct!.selector),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function clusterOrchestratorConfigDistributionToHclTerraform(struct?: ClusterOrchestratorConfigDistributionOutputReference | ClusterOrchestratorConfigDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ondemand_capacity: {
      value: cdktf.numberToHclTerraform(struct!.baseOndemandCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ondemand_replica_percentage: {
      value: cdktf.numberToHclTerraform(struct!.ondemandReplicaPercentage),
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
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseOndemandCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseOndemandCapacity = this._baseOndemandCapacity;
    }
    if (this._ondemandReplicaPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ondemandReplicaPercentage = this._ondemandReplicaPercentage;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseOndemandCapacity = undefined;
      this._ondemandReplicaPercentage = undefined;
      this._selector = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseOndemandCapacity = value.baseOndemandCapacity;
      this._ondemandReplicaPercentage = value.ondemandReplicaPercentage;
      this._selector = value.selector;
      this._strategy = value.strategy;
    }
  }

  // base_ondemand_capacity - computed: false, optional: true, required: false
  private _baseOndemandCapacity?: number; 
  public get baseOndemandCapacity() {
    return this.getNumberAttribute('base_ondemand_capacity');
  }
  public set baseOndemandCapacity(value: number) {
    this._baseOndemandCapacity = value;
  }
  public resetBaseOndemandCapacity() {
    this._baseOndemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOndemandCapacityInput() {
    return this._baseOndemandCapacity;
  }

  // ondemand_replica_percentage - computed: false, optional: false, required: true
  private _ondemandReplicaPercentage?: number; 
  public get ondemandReplicaPercentage() {
    return this.getNumberAttribute('ondemand_replica_percentage');
  }
  public set ondemandReplicaPercentage(value: number) {
    this._ondemandReplicaPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ondemandReplicaPercentageInput() {
    return this._ondemandReplicaPercentage;
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

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface ClusterOrchestratorConfigNodePreferences {
  /**
  * Reverse fallback interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#reverse_fallback_interval ClusterOrchestratorConfigA#reverse_fallback_interval}
  */
  readonly reverseFallbackInterval?: string;
  /**
  * TTL for nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#ttl ClusterOrchestratorConfigA#ttl}
  */
  readonly ttl?: string;
}

export function clusterOrchestratorConfigNodePreferencesToTerraform(struct?: ClusterOrchestratorConfigNodePreferencesOutputReference | ClusterOrchestratorConfigNodePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reverse_fallback_interval: cdktf.stringToTerraform(struct!.reverseFallbackInterval),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function clusterOrchestratorConfigNodePreferencesToHclTerraform(struct?: ClusterOrchestratorConfigNodePreferencesOutputReference | ClusterOrchestratorConfigNodePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reverse_fallback_interval: {
      value: cdktf.stringToHclTerraform(struct!.reverseFallbackInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigNodePreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigNodePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reverseFallbackInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseFallbackInterval = this._reverseFallbackInterval;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigNodePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reverseFallbackInterval = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reverseFallbackInterval = value.reverseFallbackInterval;
      this._ttl = value.ttl;
    }
  }

  // reverse_fallback_interval - computed: false, optional: true, required: false
  private _reverseFallbackInterval?: string; 
  public get reverseFallbackInterval() {
    return this.getStringAttribute('reverse_fallback_interval');
  }
  public set reverseFallbackInterval(value: string) {
    this._reverseFallbackInterval = value;
  }
  public resetReverseFallbackInterval() {
    this._reverseFallbackInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseFallbackIntervalInput() {
    return this._reverseFallbackInterval;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface ClusterOrchestratorConfigReplacementScheduleAppliesTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#consolidation ClusterOrchestratorConfigA#consolidation}
  */
  readonly consolidation: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#harness_pod_eviction ClusterOrchestratorConfigA#harness_pod_eviction}
  */
  readonly harnessPodEviction: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#reverse_fallback ClusterOrchestratorConfigA#reverse_fallback}
  */
  readonly reverseFallback: boolean | cdktf.IResolvable;
}

export function clusterOrchestratorConfigReplacementScheduleAppliesToToTerraform(struct?: ClusterOrchestratorConfigReplacementScheduleAppliesToOutputReference | ClusterOrchestratorConfigReplacementScheduleAppliesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consolidation: cdktf.booleanToTerraform(struct!.consolidation),
    harness_pod_eviction: cdktf.booleanToTerraform(struct!.harnessPodEviction),
    reverse_fallback: cdktf.booleanToTerraform(struct!.reverseFallback),
  }
}


export function clusterOrchestratorConfigReplacementScheduleAppliesToToHclTerraform(struct?: ClusterOrchestratorConfigReplacementScheduleAppliesToOutputReference | ClusterOrchestratorConfigReplacementScheduleAppliesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consolidation: {
      value: cdktf.booleanToHclTerraform(struct!.consolidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    harness_pod_eviction: {
      value: cdktf.booleanToHclTerraform(struct!.harnessPodEviction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reverse_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.reverseFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigReplacementScheduleAppliesToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigReplacementScheduleAppliesTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation;
    }
    if (this._harnessPodEviction !== undefined) {
      hasAnyValues = true;
      internalValueResult.harnessPodEviction = this._harnessPodEviction;
    }
    if (this._reverseFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseFallback = this._reverseFallback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigReplacementScheduleAppliesTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consolidation = undefined;
      this._harnessPodEviction = undefined;
      this._reverseFallback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consolidation = value.consolidation;
      this._harnessPodEviction = value.harnessPodEviction;
      this._reverseFallback = value.reverseFallback;
    }
  }

  // consolidation - computed: false, optional: false, required: true
  private _consolidation?: boolean | cdktf.IResolvable; 
  public get consolidation() {
    return this.getBooleanAttribute('consolidation');
  }
  public set consolidation(value: boolean | cdktf.IResolvable) {
    this._consolidation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation;
  }

  // harness_pod_eviction - computed: false, optional: false, required: true
  private _harnessPodEviction?: boolean | cdktf.IResolvable; 
  public get harnessPodEviction() {
    return this.getBooleanAttribute('harness_pod_eviction');
  }
  public set harnessPodEviction(value: boolean | cdktf.IResolvable) {
    this._harnessPodEviction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get harnessPodEvictionInput() {
    return this._harnessPodEviction;
  }

  // reverse_fallback - computed: false, optional: false, required: true
  private _reverseFallback?: boolean | cdktf.IResolvable; 
  public get reverseFallback() {
    return this.getBooleanAttribute('reverse_fallback');
  }
  public set reverseFallback(value: boolean | cdktf.IResolvable) {
    this._reverseFallback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseFallbackInput() {
    return this._reverseFallback;
  }
}
export interface ClusterOrchestratorConfigReplacementScheduleWindowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#all_day ClusterOrchestratorConfigA#all_day}
  */
  readonly allDay?: boolean | cdktf.IResolvable;
  /**
  * List of days on which schedule need to be active. Valid values are SUN, MON, TUE, WED, THU, FRI and SAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#days ClusterOrchestratorConfigA#days}
  */
  readonly days: string[];
  /**
  * End time of schedule in the format HH:MM. Eg : 13:15 for 01:15pm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#end_time ClusterOrchestratorConfigA#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time of schedule in the format HH:MM. Eg : 13:15 for 01:15pm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#start_time ClusterOrchestratorConfigA#start_time}
  */
  readonly startTime?: string;
  /**
  * Time zone in which the schedule needs to be executed. Example Valid values: UTC, America/New_York, Europe/London, Asia/Kolkata, Asia/Tokyo, Asia/Hong_Kong, Asia/Singapore, Australia/Melbourne and Australia/Sydney.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#time_zone ClusterOrchestratorConfigA#time_zone}
  */
  readonly timeZone: string;
}

export function clusterOrchestratorConfigReplacementScheduleWindowDetailsToTerraform(struct?: ClusterOrchestratorConfigReplacementScheduleWindowDetailsOutputReference | ClusterOrchestratorConfigReplacementScheduleWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_day: cdktf.booleanToTerraform(struct!.allDay),
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function clusterOrchestratorConfigReplacementScheduleWindowDetailsToHclTerraform(struct?: ClusterOrchestratorConfigReplacementScheduleWindowDetailsOutputReference | ClusterOrchestratorConfigReplacementScheduleWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_day: {
      value: cdktf.booleanToHclTerraform(struct!.allDay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigReplacementScheduleWindowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigReplacementScheduleWindowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDay = this._allDay;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigReplacementScheduleWindowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allDay = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allDay = value.allDay;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // all_day - computed: false, optional: true, required: false
  private _allDay?: boolean | cdktf.IResolvable; 
  public get allDay() {
    return this.getBooleanAttribute('all_day');
  }
  public set allDay(value: boolean | cdktf.IResolvable) {
    this._allDay = value;
  }
  public resetAllDay() {
    this._allDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDayInput() {
    return this._allDay;
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface ClusterOrchestratorConfigReplacementSchedule {
  /**
  * Window type for replacement schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#window_type ClusterOrchestratorConfigA#window_type}
  */
  readonly windowType: string;
  /**
  * applies_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#applies_to ClusterOrchestratorConfigA#applies_to}
  */
  readonly appliesTo: ClusterOrchestratorConfigReplacementScheduleAppliesTo;
  /**
  * window_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#window_details ClusterOrchestratorConfigA#window_details}
  */
  readonly windowDetails?: ClusterOrchestratorConfigReplacementScheduleWindowDetails;
}

export function clusterOrchestratorConfigReplacementScheduleToTerraform(struct?: ClusterOrchestratorConfigReplacementScheduleOutputReference | ClusterOrchestratorConfigReplacementSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_type: cdktf.stringToTerraform(struct!.windowType),
    applies_to: clusterOrchestratorConfigReplacementScheduleAppliesToToTerraform(struct!.appliesTo),
    window_details: clusterOrchestratorConfigReplacementScheduleWindowDetailsToTerraform(struct!.windowDetails),
  }
}


export function clusterOrchestratorConfigReplacementScheduleToHclTerraform(struct?: ClusterOrchestratorConfigReplacementScheduleOutputReference | ClusterOrchestratorConfigReplacementSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_type: {
      value: cdktf.stringToHclTerraform(struct!.windowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applies_to: {
      value: clusterOrchestratorConfigReplacementScheduleAppliesToToHclTerraform(struct!.appliesTo),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigReplacementScheduleAppliesToList",
    },
    window_details: {
      value: clusterOrchestratorConfigReplacementScheduleWindowDetailsToHclTerraform(struct!.windowDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOrchestratorConfigReplacementScheduleWindowDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOrchestratorConfigReplacementScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOrchestratorConfigReplacementSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowType = this._windowType;
    }
    if (this._appliesTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo?.internalValue;
    }
    if (this._windowDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDetails = this._windowDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOrchestratorConfigReplacementSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowType = undefined;
      this._appliesTo.internalValue = undefined;
      this._windowDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowType = value.windowType;
      this._appliesTo.internalValue = value.appliesTo;
      this._windowDetails.internalValue = value.windowDetails;
    }
  }

  // window_type - computed: false, optional: false, required: true
  private _windowType?: string; 
  public get windowType() {
    return this.getStringAttribute('window_type');
  }
  public set windowType(value: string) {
    this._windowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowTypeInput() {
    return this._windowType;
  }

  // applies_to - computed: false, optional: false, required: true
  private _appliesTo = new ClusterOrchestratorConfigReplacementScheduleAppliesToOutputReference(this, "applies_to");
  public get appliesTo() {
    return this._appliesTo;
  }
  public putAppliesTo(value: ClusterOrchestratorConfigReplacementScheduleAppliesTo) {
    this._appliesTo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo.internalValue;
  }

  // window_details - computed: false, optional: true, required: false
  private _windowDetails = new ClusterOrchestratorConfigReplacementScheduleWindowDetailsOutputReference(this, "window_details");
  public get windowDetails() {
    return this._windowDetails;
  }
  public putWindowDetails(value: ClusterOrchestratorConfigReplacementScheduleWindowDetails) {
    this._windowDetails.internalValue = value;
  }
  public resetWindowDetails() {
    this._windowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDetailsInput() {
    return this._windowDetails.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config harness_cluster_orchestrator_config}
*/
export class ClusterOrchestratorConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_cluster_orchestrator_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterOrchestratorConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterOrchestratorConfigA to import
  * @param importFromId The id of the existing ClusterOrchestratorConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterOrchestratorConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_cluster_orchestrator_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/cluster_orchestrator_config harness_cluster_orchestrator_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterOrchestratorConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterOrchestratorConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_cluster_orchestrator_config',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._id = config.id;
    this._orchestratorId = config.orchestratorId;
    this._binpacking.internalValue = config.binpacking;
    this._commitmentIntegration.internalValue = config.commitmentIntegration;
    this._distribution.internalValue = config.distribution;
    this._nodePreferences.internalValue = config.nodePreferences;
    this._replacementSchedule.internalValue = config.replacementSchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // orchestrator_id - computed: false, optional: false, required: true
  private _orchestratorId?: string; 
  public get orchestratorId() {
    return this.getStringAttribute('orchestrator_id');
  }
  public set orchestratorId(value: string) {
    this._orchestratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorIdInput() {
    return this._orchestratorId;
  }

  // binpacking - computed: false, optional: true, required: false
  private _binpacking = new ClusterOrchestratorConfigBinpackingOutputReference(this, "binpacking");
  public get binpacking() {
    return this._binpacking;
  }
  public putBinpacking(value: ClusterOrchestratorConfigBinpacking) {
    this._binpacking.internalValue = value;
  }
  public resetBinpacking() {
    this._binpacking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binpackingInput() {
    return this._binpacking.internalValue;
  }

  // commitment_integration - computed: false, optional: true, required: false
  private _commitmentIntegration = new ClusterOrchestratorConfigCommitmentIntegrationOutputReference(this, "commitment_integration");
  public get commitmentIntegration() {
    return this._commitmentIntegration;
  }
  public putCommitmentIntegration(value: ClusterOrchestratorConfigCommitmentIntegration) {
    this._commitmentIntegration.internalValue = value;
  }
  public resetCommitmentIntegration() {
    this._commitmentIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentIntegrationInput() {
    return this._commitmentIntegration.internalValue;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution = new ClusterOrchestratorConfigDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: ClusterOrchestratorConfigDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // node_preferences - computed: false, optional: true, required: false
  private _nodePreferences = new ClusterOrchestratorConfigNodePreferencesOutputReference(this, "node_preferences");
  public get nodePreferences() {
    return this._nodePreferences;
  }
  public putNodePreferences(value: ClusterOrchestratorConfigNodePreferences) {
    this._nodePreferences.internalValue = value;
  }
  public resetNodePreferences() {
    this._nodePreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePreferencesInput() {
    return this._nodePreferences.internalValue;
  }

  // replacement_schedule - computed: false, optional: true, required: false
  private _replacementSchedule = new ClusterOrchestratorConfigReplacementScheduleOutputReference(this, "replacement_schedule");
  public get replacementSchedule() {
    return this._replacementSchedule;
  }
  public putReplacementSchedule(value: ClusterOrchestratorConfigReplacementSchedule) {
    this._replacementSchedule.internalValue = value;
  }
  public resetReplacementSchedule() {
    this._replacementSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementScheduleInput() {
    return this._replacementSchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      orchestrator_id: cdktf.stringToTerraform(this._orchestratorId),
      binpacking: clusterOrchestratorConfigBinpackingToTerraform(this._binpacking.internalValue),
      commitment_integration: clusterOrchestratorConfigCommitmentIntegrationToTerraform(this._commitmentIntegration.internalValue),
      distribution: clusterOrchestratorConfigDistributionToTerraform(this._distribution.internalValue),
      node_preferences: clusterOrchestratorConfigNodePreferencesToTerraform(this._nodePreferences.internalValue),
      replacement_schedule: clusterOrchestratorConfigReplacementScheduleToTerraform(this._replacementSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      orchestrator_id: {
        value: cdktf.stringToHclTerraform(this._orchestratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binpacking: {
        value: clusterOrchestratorConfigBinpackingToHclTerraform(this._binpacking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOrchestratorConfigBinpackingList",
      },
      commitment_integration: {
        value: clusterOrchestratorConfigCommitmentIntegrationToHclTerraform(this._commitmentIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOrchestratorConfigCommitmentIntegrationList",
      },
      distribution: {
        value: clusterOrchestratorConfigDistributionToHclTerraform(this._distribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOrchestratorConfigDistributionList",
      },
      node_preferences: {
        value: clusterOrchestratorConfigNodePreferencesToHclTerraform(this._nodePreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOrchestratorConfigNodePreferencesList",
      },
      replacement_schedule: {
        value: clusterOrchestratorConfigReplacementScheduleToHclTerraform(this._replacementSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOrchestratorConfigReplacementScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
