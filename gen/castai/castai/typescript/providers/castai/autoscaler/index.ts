// https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * autoscaler policies JSON string to override current autoscaler settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#autoscaler_policies_json Autoscaler#autoscaler_policies_json}
  */
  readonly autoscalerPoliciesJson?: string;
  /**
  * CAST AI cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#cluster_id Autoscaler#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#id Autoscaler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * autoscaler_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#autoscaler_settings Autoscaler#autoscaler_settings}
  */
  readonly autoscalerSettings?: AutoscalerAutoscalerSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#timeouts Autoscaler#timeouts}
  */
  readonly timeouts?: AutoscalerTimeouts;
}
export interface AutoscalerAutoscalerSettingsClusterLimitsCpu {
  /**
  * defines the maximum allowed amount of vCPUs in the whole cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#max_cores Autoscaler#max_cores}
  */
  readonly maxCores?: number;
  /**
  * defines the minimum allowed amount of CPUs in the whole cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#min_cores Autoscaler#min_cores}
  */
  readonly minCores?: number;
}

export function autoscalerAutoscalerSettingsClusterLimitsCpuToTerraform(struct?: AutoscalerAutoscalerSettingsClusterLimitsCpuOutputReference | AutoscalerAutoscalerSettingsClusterLimitsCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cores: cdktf.numberToTerraform(struct!.maxCores),
    min_cores: cdktf.numberToTerraform(struct!.minCores),
  }
}


export function autoscalerAutoscalerSettingsClusterLimitsCpuToHclTerraform(struct?: AutoscalerAutoscalerSettingsClusterLimitsCpuOutputReference | AutoscalerAutoscalerSettingsClusterLimitsCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cores: {
      value: cdktf.numberToHclTerraform(struct!.maxCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cores: {
      value: cdktf.numberToHclTerraform(struct!.minCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsClusterLimitsCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsClusterLimitsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCores = this._maxCores;
    }
    if (this._minCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCores = this._minCores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsClusterLimitsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCores = undefined;
      this._minCores = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCores = value.maxCores;
      this._minCores = value.minCores;
    }
  }

  // max_cores - computed: false, optional: true, required: false
  private _maxCores?: number; 
  public get maxCores() {
    return this.getNumberAttribute('max_cores');
  }
  public set maxCores(value: number) {
    this._maxCores = value;
  }
  public resetMaxCores() {
    this._maxCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCoresInput() {
    return this._maxCores;
  }

  // min_cores - computed: false, optional: true, required: false
  private _minCores?: number; 
  public get minCores() {
    return this.getNumberAttribute('min_cores');
  }
  public set minCores(value: number) {
    this._minCores = value;
  }
  public resetMinCores() {
    this._minCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCoresInput() {
    return this._minCores;
  }
}
export interface AutoscalerAutoscalerSettingsClusterLimits {
  /**
  * enable/disable cluster size limits policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#cpu Autoscaler#cpu}
  */
  readonly cpu?: AutoscalerAutoscalerSettingsClusterLimitsCpu;
}

export function autoscalerAutoscalerSettingsClusterLimitsToTerraform(struct?: AutoscalerAutoscalerSettingsClusterLimitsOutputReference | AutoscalerAutoscalerSettingsClusterLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    cpu: autoscalerAutoscalerSettingsClusterLimitsCpuToTerraform(struct!.cpu),
  }
}


export function autoscalerAutoscalerSettingsClusterLimitsToHclTerraform(struct?: AutoscalerAutoscalerSettingsClusterLimitsOutputReference | AutoscalerAutoscalerSettingsClusterLimits): any {
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
    cpu: {
      value: autoscalerAutoscalerSettingsClusterLimitsCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsClusterLimitsCpuList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsClusterLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsClusterLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsClusterLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._cpu.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._cpu.internalValue = value.cpu;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new AutoscalerAutoscalerSettingsClusterLimitsCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: AutoscalerAutoscalerSettingsClusterLimitsCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }
}
export interface AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes {
  /**
  * period (in seconds) to wait before removing the node. Might be useful to control the aggressiveness of the downscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#delay_seconds Autoscaler#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * enable/disable the empty worker nodes policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function autoscalerAutoscalerSettingsNodeDownscalerEmptyNodesToTerraform(struct?: AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodesOutputReference | AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_seconds: cdktf.numberToTerraform(struct!.delaySeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function autoscalerAutoscalerSettingsNodeDownscalerEmptyNodesToHclTerraform(struct?: AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodesOutputReference | AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.delaySeconds),
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

export class AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delaySeconds = this._delaySeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delaySeconds = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delaySeconds = value.delaySeconds;
      this._enabled = value.enabled;
    }
  }

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AutoscalerAutoscalerSettingsNodeDownscalerEvictor {
  /**
  * enable/disable aggressive mode. By default, Evictor does not target nodes that are running unreplicated pods. This mode will make the Evictor start considering application with just a single replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#aggressive_mode Autoscaler#aggressive_mode}
  */
  readonly aggressiveMode?: boolean | cdktf.IResolvable;
  /**
  * configure the interval duration between Evictor operations. This property can be used to lower or raise the frequency of the Evictor's find-and-drain operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#cycle_interval Autoscaler#cycle_interval}
  */
  readonly cycleInterval?: string;
  /**
  * enable/disable dry-run. This property allows you to prevent the Evictor from carrying any operations out and preview the actions it would take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#dry_run Autoscaler#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * enable/disable the Evictor policy. This will either install or uninstall the Evictor component in your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * if enabled then Evictor will attempt to evict pods that have pod disruption budgets configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#ignore_pod_disruption_budgets Autoscaler#ignore_pod_disruption_budgets}
  */
  readonly ignorePodDisruptionBudgets?: boolean | cdktf.IResolvable;
  /**
  * configure the node grace period which controls the duration which must pass after a node has been created before Evictor starts considering that node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#node_grace_period_minutes Autoscaler#node_grace_period_minutes}
  */
  readonly nodeGracePeriodMinutes?: number;
  /**
  * configure the pod eviction failure back off interval. If pod eviction fails then Evictor will attempt to evict it again after the amount of time specified here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#pod_eviction_failure_back_off_interval Autoscaler#pod_eviction_failure_back_off_interval}
  */
  readonly podEvictionFailureBackOffInterval?: string;
  /**
  * enable/disable scoped mode. By default, Evictor targets all nodes in the cluster. This mode will constrain it to just the nodes which were created by CAST AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#scoped_mode Autoscaler#scoped_mode}
  */
  readonly scopedMode?: boolean | cdktf.IResolvable;
}

export function autoscalerAutoscalerSettingsNodeDownscalerEvictorToTerraform(struct?: AutoscalerAutoscalerSettingsNodeDownscalerEvictorOutputReference | AutoscalerAutoscalerSettingsNodeDownscalerEvictor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressive_mode: cdktf.booleanToTerraform(struct!.aggressiveMode),
    cycle_interval: cdktf.stringToTerraform(struct!.cycleInterval),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignore_pod_disruption_budgets: cdktf.booleanToTerraform(struct!.ignorePodDisruptionBudgets),
    node_grace_period_minutes: cdktf.numberToTerraform(struct!.nodeGracePeriodMinutes),
    pod_eviction_failure_back_off_interval: cdktf.stringToTerraform(struct!.podEvictionFailureBackOffInterval),
    scoped_mode: cdktf.booleanToTerraform(struct!.scopedMode),
  }
}


export function autoscalerAutoscalerSettingsNodeDownscalerEvictorToHclTerraform(struct?: AutoscalerAutoscalerSettingsNodeDownscalerEvictorOutputReference | AutoscalerAutoscalerSettingsNodeDownscalerEvictor): any {
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
    cycle_interval: {
      value: cdktf.stringToHclTerraform(struct!.cycleInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_pod_disruption_budgets: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePodDisruptionBudgets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_grace_period_minutes: {
      value: cdktf.numberToHclTerraform(struct!.nodeGracePeriodMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_eviction_failure_back_off_interval: {
      value: cdktf.stringToHclTerraform(struct!.podEvictionFailureBackOffInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scoped_mode: {
      value: cdktf.booleanToHclTerraform(struct!.scopedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsNodeDownscalerEvictorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsNodeDownscalerEvictor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveMode = this._aggressiveMode;
    }
    if (this._cycleInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleInterval = this._cycleInterval;
    }
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignorePodDisruptionBudgets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePodDisruptionBudgets = this._ignorePodDisruptionBudgets;
    }
    if (this._nodeGracePeriodMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGracePeriodMinutes = this._nodeGracePeriodMinutes;
    }
    if (this._podEvictionFailureBackOffInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.podEvictionFailureBackOffInterval = this._podEvictionFailureBackOffInterval;
    }
    if (this._scopedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopedMode = this._scopedMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsNodeDownscalerEvictor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggressiveMode = undefined;
      this._cycleInterval = undefined;
      this._dryRun = undefined;
      this._enabled = undefined;
      this._ignorePodDisruptionBudgets = undefined;
      this._nodeGracePeriodMinutes = undefined;
      this._podEvictionFailureBackOffInterval = undefined;
      this._scopedMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggressiveMode = value.aggressiveMode;
      this._cycleInterval = value.cycleInterval;
      this._dryRun = value.dryRun;
      this._enabled = value.enabled;
      this._ignorePodDisruptionBudgets = value.ignorePodDisruptionBudgets;
      this._nodeGracePeriodMinutes = value.nodeGracePeriodMinutes;
      this._podEvictionFailureBackOffInterval = value.podEvictionFailureBackOffInterval;
      this._scopedMode = value.scopedMode;
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

  // cycle_interval - computed: false, optional: true, required: false
  private _cycleInterval?: string; 
  public get cycleInterval() {
    return this.getStringAttribute('cycle_interval');
  }
  public set cycleInterval(value: string) {
    this._cycleInterval = value;
  }
  public resetCycleInterval() {
    this._cycleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleIntervalInput() {
    return this._cycleInterval;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ignore_pod_disruption_budgets - computed: false, optional: true, required: false
  private _ignorePodDisruptionBudgets?: boolean | cdktf.IResolvable; 
  public get ignorePodDisruptionBudgets() {
    return this.getBooleanAttribute('ignore_pod_disruption_budgets');
  }
  public set ignorePodDisruptionBudgets(value: boolean | cdktf.IResolvable) {
    this._ignorePodDisruptionBudgets = value;
  }
  public resetIgnorePodDisruptionBudgets() {
    this._ignorePodDisruptionBudgets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePodDisruptionBudgetsInput() {
    return this._ignorePodDisruptionBudgets;
  }

  // node_grace_period_minutes - computed: false, optional: true, required: false
  private _nodeGracePeriodMinutes?: number; 
  public get nodeGracePeriodMinutes() {
    return this.getNumberAttribute('node_grace_period_minutes');
  }
  public set nodeGracePeriodMinutes(value: number) {
    this._nodeGracePeriodMinutes = value;
  }
  public resetNodeGracePeriodMinutes() {
    this._nodeGracePeriodMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGracePeriodMinutesInput() {
    return this._nodeGracePeriodMinutes;
  }

  // pod_eviction_failure_back_off_interval - computed: false, optional: true, required: false
  private _podEvictionFailureBackOffInterval?: string; 
  public get podEvictionFailureBackOffInterval() {
    return this.getStringAttribute('pod_eviction_failure_back_off_interval');
  }
  public set podEvictionFailureBackOffInterval(value: string) {
    this._podEvictionFailureBackOffInterval = value;
  }
  public resetPodEvictionFailureBackOffInterval() {
    this._podEvictionFailureBackOffInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podEvictionFailureBackOffIntervalInput() {
    return this._podEvictionFailureBackOffInterval;
  }

  // scoped_mode - computed: false, optional: true, required: false
  private _scopedMode?: boolean | cdktf.IResolvable; 
  public get scopedMode() {
    return this.getBooleanAttribute('scoped_mode');
  }
  public set scopedMode(value: boolean | cdktf.IResolvable) {
    this._scopedMode = value;
  }
  public resetScopedMode() {
    this._scopedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedModeInput() {
    return this._scopedMode;
  }
}
export interface AutoscalerAutoscalerSettingsNodeDownscaler {
  /**
  * enable/disable node downscaler policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * empty_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#empty_nodes Autoscaler#empty_nodes}
  */
  readonly emptyNodes?: AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes;
  /**
  * evictor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#evictor Autoscaler#evictor}
  */
  readonly evictor?: AutoscalerAutoscalerSettingsNodeDownscalerEvictor;
}

export function autoscalerAutoscalerSettingsNodeDownscalerToTerraform(struct?: AutoscalerAutoscalerSettingsNodeDownscalerOutputReference | AutoscalerAutoscalerSettingsNodeDownscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    empty_nodes: autoscalerAutoscalerSettingsNodeDownscalerEmptyNodesToTerraform(struct!.emptyNodes),
    evictor: autoscalerAutoscalerSettingsNodeDownscalerEvictorToTerraform(struct!.evictor),
  }
}


export function autoscalerAutoscalerSettingsNodeDownscalerToHclTerraform(struct?: AutoscalerAutoscalerSettingsNodeDownscalerOutputReference | AutoscalerAutoscalerSettingsNodeDownscaler): any {
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
    empty_nodes: {
      value: autoscalerAutoscalerSettingsNodeDownscalerEmptyNodesToHclTerraform(struct!.emptyNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodesList",
    },
    evictor: {
      value: autoscalerAutoscalerSettingsNodeDownscalerEvictorToHclTerraform(struct!.evictor),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsNodeDownscalerEvictorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsNodeDownscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsNodeDownscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._emptyNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyNodes = this._emptyNodes?.internalValue;
    }
    if (this._evictor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictor = this._evictor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsNodeDownscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._emptyNodes.internalValue = undefined;
      this._evictor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._emptyNodes.internalValue = value.emptyNodes;
      this._evictor.internalValue = value.evictor;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // empty_nodes - computed: false, optional: true, required: false
  private _emptyNodes = new AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodesOutputReference(this, "empty_nodes");
  public get emptyNodes() {
    return this._emptyNodes;
  }
  public putEmptyNodes(value: AutoscalerAutoscalerSettingsNodeDownscalerEmptyNodes) {
    this._emptyNodes.internalValue = value;
  }
  public resetEmptyNodes() {
    this._emptyNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyNodesInput() {
    return this._emptyNodes.internalValue;
  }

  // evictor - computed: false, optional: true, required: false
  private _evictor = new AutoscalerAutoscalerSettingsNodeDownscalerEvictorOutputReference(this, "evictor");
  public get evictor() {
    return this._evictor;
  }
  public putEvictor(value: AutoscalerAutoscalerSettingsNodeDownscalerEvictor) {
    this._evictor.internalValue = value;
  }
  public resetEvictor() {
    this._evictor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictorInput() {
    return this._evictor.internalValue;
  }
}
export interface AutoscalerAutoscalerSettingsSpotInstancesSpotBackups {
  /**
  * enable/disable spot backups policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * defines interval on how often spot backups restore to real spot should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_backup_restore_rate_seconds Autoscaler#spot_backup_restore_rate_seconds}
  */
  readonly spotBackupRestoreRateSeconds?: number;
}

export function autoscalerAutoscalerSettingsSpotInstancesSpotBackupsToTerraform(struct?: AutoscalerAutoscalerSettingsSpotInstancesSpotBackupsOutputReference | AutoscalerAutoscalerSettingsSpotInstancesSpotBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    spot_backup_restore_rate_seconds: cdktf.numberToTerraform(struct!.spotBackupRestoreRateSeconds),
  }
}


export function autoscalerAutoscalerSettingsSpotInstancesSpotBackupsToHclTerraform(struct?: AutoscalerAutoscalerSettingsSpotInstancesSpotBackupsOutputReference | AutoscalerAutoscalerSettingsSpotInstancesSpotBackups): any {
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
    spot_backup_restore_rate_seconds: {
      value: cdktf.numberToHclTerraform(struct!.spotBackupRestoreRateSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsSpotInstancesSpotBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsSpotInstancesSpotBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._spotBackupRestoreRateSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBackupRestoreRateSeconds = this._spotBackupRestoreRateSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsSpotInstancesSpotBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._spotBackupRestoreRateSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._spotBackupRestoreRateSeconds = value.spotBackupRestoreRateSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // spot_backup_restore_rate_seconds - computed: false, optional: true, required: false
  private _spotBackupRestoreRateSeconds?: number; 
  public get spotBackupRestoreRateSeconds() {
    return this.getNumberAttribute('spot_backup_restore_rate_seconds');
  }
  public set spotBackupRestoreRateSeconds(value: number) {
    this._spotBackupRestoreRateSeconds = value;
  }
  public resetSpotBackupRestoreRateSeconds() {
    this._spotBackupRestoreRateSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBackupRestoreRateSecondsInput() {
    return this._spotBackupRestoreRateSeconds;
  }
}
export interface AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions {
  /**
  * enable/disable spot interruption predictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * define the type of the spot interruption prediction to handle. Allowed values are AWSRebalanceRecommendations, CASTAIInterruptionPredictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_interruption_predictions_type Autoscaler#spot_interruption_predictions_type}
  */
  readonly spotInterruptionPredictionsType?: string;
}

export function autoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsToTerraform(struct?: AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsOutputReference | AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    spot_interruption_predictions_type: cdktf.stringToTerraform(struct!.spotInterruptionPredictionsType),
  }
}


export function autoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsToHclTerraform(struct?: AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsOutputReference | AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions): any {
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
    spot_interruption_predictions_type: {
      value: cdktf.stringToHclTerraform(struct!.spotInterruptionPredictionsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._spotInterruptionPredictionsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInterruptionPredictionsType = this._spotInterruptionPredictionsType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._spotInterruptionPredictionsType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._spotInterruptionPredictionsType = value.spotInterruptionPredictionsType;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // spot_interruption_predictions_type - computed: false, optional: true, required: false
  private _spotInterruptionPredictionsType?: string; 
  public get spotInterruptionPredictionsType() {
    return this.getStringAttribute('spot_interruption_predictions_type');
  }
  public set spotInterruptionPredictionsType(value: string) {
    this._spotInterruptionPredictionsType = value;
  }
  public resetSpotInterruptionPredictionsType() {
    this._spotInterruptionPredictionsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInterruptionPredictionsTypeInput() {
    return this._spotInterruptionPredictionsType;
  }
}
export interface AutoscalerAutoscalerSettingsSpotInstances {
  /**
  * enable/disable spot instances policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * max allowed reclaim rate when choosing spot instance type. E.g. if the value is 10%, instance types having 10% or higher reclaim rate will not be considered. Set to zero to use all instance types regardless of reclaim rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#max_reclaim_rate Autoscaler#max_reclaim_rate}
  */
  readonly maxReclaimRate?: number;
  /**
  * enable/disable spot diversity policy. When enabled, autoscaler will try to balance between diverse and cost optimal instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_diversity_enabled Autoscaler#spot_diversity_enabled}
  */
  readonly spotDiversityEnabled?: boolean | cdktf.IResolvable;
  /**
  * allowed node configuration price increase when diversifying instance types. E.g. if the value is 10%, then the overall price of diversified instance types can be 10% higher than the price of the optimal configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_diversity_price_increase_limit Autoscaler#spot_diversity_price_increase_limit}
  */
  readonly spotDiversityPriceIncreaseLimit?: number;
  /**
  * spot_backups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_backups Autoscaler#spot_backups}
  */
  readonly spotBackups?: AutoscalerAutoscalerSettingsSpotInstancesSpotBackups;
  /**
  * spot_interruption_predictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_interruption_predictions Autoscaler#spot_interruption_predictions}
  */
  readonly spotInterruptionPredictions?: AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions;
}

export function autoscalerAutoscalerSettingsSpotInstancesToTerraform(struct?: AutoscalerAutoscalerSettingsSpotInstancesOutputReference | AutoscalerAutoscalerSettingsSpotInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_reclaim_rate: cdktf.numberToTerraform(struct!.maxReclaimRate),
    spot_diversity_enabled: cdktf.booleanToTerraform(struct!.spotDiversityEnabled),
    spot_diversity_price_increase_limit: cdktf.numberToTerraform(struct!.spotDiversityPriceIncreaseLimit),
    spot_backups: autoscalerAutoscalerSettingsSpotInstancesSpotBackupsToTerraform(struct!.spotBackups),
    spot_interruption_predictions: autoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsToTerraform(struct!.spotInterruptionPredictions),
  }
}


export function autoscalerAutoscalerSettingsSpotInstancesToHclTerraform(struct?: AutoscalerAutoscalerSettingsSpotInstancesOutputReference | AutoscalerAutoscalerSettingsSpotInstances): any {
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
    max_reclaim_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxReclaimRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_diversity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.spotDiversityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_diversity_price_increase_limit: {
      value: cdktf.numberToHclTerraform(struct!.spotDiversityPriceIncreaseLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_backups: {
      value: autoscalerAutoscalerSettingsSpotInstancesSpotBackupsToHclTerraform(struct!.spotBackups),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsSpotInstancesSpotBackupsList",
    },
    spot_interruption_predictions: {
      value: autoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsToHclTerraform(struct!.spotInterruptionPredictions),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsSpotInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsSpotInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxReclaimRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReclaimRate = this._maxReclaimRate;
    }
    if (this._spotDiversityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDiversityEnabled = this._spotDiversityEnabled;
    }
    if (this._spotDiversityPriceIncreaseLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDiversityPriceIncreaseLimit = this._spotDiversityPriceIncreaseLimit;
    }
    if (this._spotBackups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBackups = this._spotBackups?.internalValue;
    }
    if (this._spotInterruptionPredictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInterruptionPredictions = this._spotInterruptionPredictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsSpotInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxReclaimRate = undefined;
      this._spotDiversityEnabled = undefined;
      this._spotDiversityPriceIncreaseLimit = undefined;
      this._spotBackups.internalValue = undefined;
      this._spotInterruptionPredictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxReclaimRate = value.maxReclaimRate;
      this._spotDiversityEnabled = value.spotDiversityEnabled;
      this._spotDiversityPriceIncreaseLimit = value.spotDiversityPriceIncreaseLimit;
      this._spotBackups.internalValue = value.spotBackups;
      this._spotInterruptionPredictions.internalValue = value.spotInterruptionPredictions;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_reclaim_rate - computed: false, optional: true, required: false
  private _maxReclaimRate?: number; 
  public get maxReclaimRate() {
    return this.getNumberAttribute('max_reclaim_rate');
  }
  public set maxReclaimRate(value: number) {
    this._maxReclaimRate = value;
  }
  public resetMaxReclaimRate() {
    this._maxReclaimRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReclaimRateInput() {
    return this._maxReclaimRate;
  }

  // spot_diversity_enabled - computed: false, optional: true, required: false
  private _spotDiversityEnabled?: boolean | cdktf.IResolvable; 
  public get spotDiversityEnabled() {
    return this.getBooleanAttribute('spot_diversity_enabled');
  }
  public set spotDiversityEnabled(value: boolean | cdktf.IResolvable) {
    this._spotDiversityEnabled = value;
  }
  public resetSpotDiversityEnabled() {
    this._spotDiversityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDiversityEnabledInput() {
    return this._spotDiversityEnabled;
  }

  // spot_diversity_price_increase_limit - computed: false, optional: true, required: false
  private _spotDiversityPriceIncreaseLimit?: number; 
  public get spotDiversityPriceIncreaseLimit() {
    return this.getNumberAttribute('spot_diversity_price_increase_limit');
  }
  public set spotDiversityPriceIncreaseLimit(value: number) {
    this._spotDiversityPriceIncreaseLimit = value;
  }
  public resetSpotDiversityPriceIncreaseLimit() {
    this._spotDiversityPriceIncreaseLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDiversityPriceIncreaseLimitInput() {
    return this._spotDiversityPriceIncreaseLimit;
  }

  // spot_backups - computed: false, optional: true, required: false
  private _spotBackups = new AutoscalerAutoscalerSettingsSpotInstancesSpotBackupsOutputReference(this, "spot_backups");
  public get spotBackups() {
    return this._spotBackups;
  }
  public putSpotBackups(value: AutoscalerAutoscalerSettingsSpotInstancesSpotBackups) {
    this._spotBackups.internalValue = value;
  }
  public resetSpotBackups() {
    this._spotBackups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBackupsInput() {
    return this._spotBackups.internalValue;
  }

  // spot_interruption_predictions - computed: false, optional: true, required: false
  private _spotInterruptionPredictions = new AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictionsOutputReference(this, "spot_interruption_predictions");
  public get spotInterruptionPredictions() {
    return this._spotInterruptionPredictions;
  }
  public putSpotInterruptionPredictions(value: AutoscalerAutoscalerSettingsSpotInstancesSpotInterruptionPredictions) {
    this._spotInterruptionPredictions.internalValue = value;
  }
  public resetSpotInterruptionPredictions() {
    this._spotInterruptionPredictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInterruptionPredictionsInput() {
    return this._spotInterruptionPredictions.internalValue;
  }
}
export interface AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom {
  /**
  * defines percentage of additional CPU capacity to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#cpu_percentage Autoscaler#cpu_percentage}
  */
  readonly cpuPercentage?: number;
  /**
  * enable/disable headroom policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * defines percentage of additional memory capacity to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#memory_percentage Autoscaler#memory_percentage}
  */
  readonly memoryPercentage?: number;
}

export function autoscalerAutoscalerSettingsUnschedulablePodsHeadroomToTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_percentage: cdktf.numberToTerraform(struct!.cpuPercentage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    memory_percentage: cdktf.numberToTerraform(struct!.memoryPercentage),
  }
}


export function autoscalerAutoscalerSettingsUnschedulablePodsHeadroomToHclTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_percentage: {
      value: cdktf.numberToHclTerraform(struct!.cpuPercentage),
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
    memory_percentage: {
      value: cdktf.numberToHclTerraform(struct!.memoryPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPercentage = this._cpuPercentage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._memoryPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPercentage = this._memoryPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPercentage = undefined;
      this._enabled = undefined;
      this._memoryPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPercentage = value.cpuPercentage;
      this._enabled = value.enabled;
      this._memoryPercentage = value.memoryPercentage;
    }
  }

  // cpu_percentage - computed: false, optional: true, required: false
  private _cpuPercentage?: number; 
  public get cpuPercentage() {
    return this.getNumberAttribute('cpu_percentage');
  }
  public set cpuPercentage(value: number) {
    this._cpuPercentage = value;
  }
  public resetCpuPercentage() {
    this._cpuPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPercentageInput() {
    return this._cpuPercentage;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // memory_percentage - computed: false, optional: true, required: false
  private _memoryPercentage?: number; 
  public get memoryPercentage() {
    return this.getNumberAttribute('memory_percentage');
  }
  public set memoryPercentage(value: number) {
    this._memoryPercentage = value;
  }
  public resetMemoryPercentage() {
    this._memoryPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPercentageInput() {
    return this._memoryPercentage;
  }
}
export interface AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot {
  /**
  * defines percentage of additional CPU capacity to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#cpu_percentage Autoscaler#cpu_percentage}
  */
  readonly cpuPercentage?: number;
  /**
  * enable/disable headroom_spot policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * defines percentage of additional memory capacity to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#memory_percentage Autoscaler#memory_percentage}
  */
  readonly memoryPercentage?: number;
}

export function autoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotToTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_percentage: cdktf.numberToTerraform(struct!.cpuPercentage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    memory_percentage: cdktf.numberToTerraform(struct!.memoryPercentage),
  }
}


export function autoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotToHclTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_percentage: {
      value: cdktf.numberToHclTerraform(struct!.cpuPercentage),
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
    memory_percentage: {
      value: cdktf.numberToHclTerraform(struct!.memoryPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPercentage = this._cpuPercentage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._memoryPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPercentage = this._memoryPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPercentage = undefined;
      this._enabled = undefined;
      this._memoryPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPercentage = value.cpuPercentage;
      this._enabled = value.enabled;
      this._memoryPercentage = value.memoryPercentage;
    }
  }

  // cpu_percentage - computed: false, optional: true, required: false
  private _cpuPercentage?: number; 
  public get cpuPercentage() {
    return this.getNumberAttribute('cpu_percentage');
  }
  public set cpuPercentage(value: number) {
    this._cpuPercentage = value;
  }
  public resetCpuPercentage() {
    this._cpuPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPercentageInput() {
    return this._cpuPercentage;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // memory_percentage - computed: false, optional: true, required: false
  private _memoryPercentage?: number; 
  public get memoryPercentage() {
    return this.getNumberAttribute('memory_percentage');
  }
  public set memoryPercentage(value: number) {
    this._memoryPercentage = value;
  }
  public resetMemoryPercentage() {
    this._memoryPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPercentageInput() {
    return this._memoryPercentage;
  }
}
export interface AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints {
  /**
  * enable/disable node constraints policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * defines max CPU cores for the node to pick.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#max_cpu_cores Autoscaler#max_cpu_cores}
  */
  readonly maxCpuCores?: number;
  /**
  * defines max RAM in MiB for the node to pick.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#max_ram_mib Autoscaler#max_ram_mib}
  */
  readonly maxRamMib?: number;
  /**
  * defines min CPU cores for the node to pick.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#min_cpu_cores Autoscaler#min_cpu_cores}
  */
  readonly minCpuCores?: number;
  /**
  * defines min RAM in MiB for the node to pick.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#min_ram_mib Autoscaler#min_ram_mib}
  */
  readonly minRamMib?: number;
}

export function autoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsToTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_cpu_cores: cdktf.numberToTerraform(struct!.maxCpuCores),
    max_ram_mib: cdktf.numberToTerraform(struct!.maxRamMib),
    min_cpu_cores: cdktf.numberToTerraform(struct!.minCpuCores),
    min_ram_mib: cdktf.numberToTerraform(struct!.minRamMib),
  }
}


export function autoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsToHclTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints): any {
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
    max_cpu_cores: {
      value: cdktf.numberToHclTerraform(struct!.maxCpuCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ram_mib: {
      value: cdktf.numberToHclTerraform(struct!.maxRamMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu_cores: {
      value: cdktf.numberToHclTerraform(struct!.minCpuCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ram_mib: {
      value: cdktf.numberToHclTerraform(struct!.minRamMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxCpuCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpuCores = this._maxCpuCores;
    }
    if (this._maxRamMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRamMib = this._maxRamMib;
    }
    if (this._minCpuCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuCores = this._minCpuCores;
    }
    if (this._minRamMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRamMib = this._minRamMib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxCpuCores = undefined;
      this._maxRamMib = undefined;
      this._minCpuCores = undefined;
      this._minRamMib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxCpuCores = value.maxCpuCores;
      this._maxRamMib = value.maxRamMib;
      this._minCpuCores = value.minCpuCores;
      this._minRamMib = value.minRamMib;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_cpu_cores - computed: false, optional: true, required: false
  private _maxCpuCores?: number; 
  public get maxCpuCores() {
    return this.getNumberAttribute('max_cpu_cores');
  }
  public set maxCpuCores(value: number) {
    this._maxCpuCores = value;
  }
  public resetMaxCpuCores() {
    this._maxCpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuCoresInput() {
    return this._maxCpuCores;
  }

  // max_ram_mib - computed: false, optional: true, required: false
  private _maxRamMib?: number; 
  public get maxRamMib() {
    return this.getNumberAttribute('max_ram_mib');
  }
  public set maxRamMib(value: number) {
    this._maxRamMib = value;
  }
  public resetMaxRamMib() {
    this._maxRamMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRamMibInput() {
    return this._maxRamMib;
  }

  // min_cpu_cores - computed: false, optional: true, required: false
  private _minCpuCores?: number; 
  public get minCpuCores() {
    return this.getNumberAttribute('min_cpu_cores');
  }
  public set minCpuCores(value: number) {
    this._minCpuCores = value;
  }
  public resetMinCpuCores() {
    this._minCpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuCoresInput() {
    return this._minCpuCores;
  }

  // min_ram_mib - computed: false, optional: true, required: false
  private _minRamMib?: number; 
  public get minRamMib() {
    return this.getNumberAttribute('min_ram_mib');
  }
  public set minRamMib(value: number) {
    this._minRamMib = value;
  }
  public resetMinRamMib() {
    this._minRamMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamMibInput() {
    return this._minRamMib;
  }
}
export interface AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner {
  /**
  * enable/disable the Pod Pinner component's automatic management in your cluster. Default: enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function autoscalerAutoscalerSettingsUnschedulablePodsPodPinnerToTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsPodPinnerOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function autoscalerAutoscalerSettingsUnschedulablePodsPodPinnerToHclTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsPodPinnerOutputReference | AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsUnschedulablePodsPodPinnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AutoscalerAutoscalerSettingsUnschedulablePods {
  /**
  * enable/disable custom instances policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#custom_instances_enabled Autoscaler#custom_instances_enabled}
  */
  readonly customInstancesEnabled?: boolean | cdktf.IResolvable;
  /**
  * enable/disable unschedulable pods detection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#headroom Autoscaler#headroom}
  */
  readonly headroom?: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom;
  /**
  * headroom_spot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#headroom_spot Autoscaler#headroom_spot}
  */
  readonly headroomSpot?: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot;
  /**
  * node_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#node_constraints Autoscaler#node_constraints}
  */
  readonly nodeConstraints?: AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints;
  /**
  * pod_pinner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#pod_pinner Autoscaler#pod_pinner}
  */
  readonly podPinner?: AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner;
}

export function autoscalerAutoscalerSettingsUnschedulablePodsToTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsOutputReference | AutoscalerAutoscalerSettingsUnschedulablePods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_instances_enabled: cdktf.booleanToTerraform(struct!.customInstancesEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    headroom: autoscalerAutoscalerSettingsUnschedulablePodsHeadroomToTerraform(struct!.headroom),
    headroom_spot: autoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotToTerraform(struct!.headroomSpot),
    node_constraints: autoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsToTerraform(struct!.nodeConstraints),
    pod_pinner: autoscalerAutoscalerSettingsUnschedulablePodsPodPinnerToTerraform(struct!.podPinner),
  }
}


export function autoscalerAutoscalerSettingsUnschedulablePodsToHclTerraform(struct?: AutoscalerAutoscalerSettingsUnschedulablePodsOutputReference | AutoscalerAutoscalerSettingsUnschedulablePods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_instances_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customInstancesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headroom: {
      value: autoscalerAutoscalerSettingsUnschedulablePodsHeadroomToHclTerraform(struct!.headroom),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomList",
    },
    headroom_spot: {
      value: autoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotToHclTerraform(struct!.headroomSpot),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotList",
    },
    node_constraints: {
      value: autoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsToHclTerraform(struct!.nodeConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsList",
    },
    pod_pinner: {
      value: autoscalerAutoscalerSettingsUnschedulablePodsPodPinnerToHclTerraform(struct!.podPinner),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsUnschedulablePodsPodPinnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsUnschedulablePodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettingsUnschedulablePods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customInstancesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInstancesEnabled = this._customInstancesEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headroom = this._headroom?.internalValue;
    }
    if (this._headroomSpot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headroomSpot = this._headroomSpot?.internalValue;
    }
    if (this._nodeConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConstraints = this._nodeConstraints?.internalValue;
    }
    if (this._podPinner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPinner = this._podPinner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettingsUnschedulablePods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customInstancesEnabled = undefined;
      this._enabled = undefined;
      this._headroom.internalValue = undefined;
      this._headroomSpot.internalValue = undefined;
      this._nodeConstraints.internalValue = undefined;
      this._podPinner.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customInstancesEnabled = value.customInstancesEnabled;
      this._enabled = value.enabled;
      this._headroom.internalValue = value.headroom;
      this._headroomSpot.internalValue = value.headroomSpot;
      this._nodeConstraints.internalValue = value.nodeConstraints;
      this._podPinner.internalValue = value.podPinner;
    }
  }

  // custom_instances_enabled - computed: false, optional: true, required: false
  private _customInstancesEnabled?: boolean | cdktf.IResolvable; 
  public get customInstancesEnabled() {
    return this.getBooleanAttribute('custom_instances_enabled');
  }
  public set customInstancesEnabled(value: boolean | cdktf.IResolvable) {
    this._customInstancesEnabled = value;
  }
  public resetCustomInstancesEnabled() {
    this._customInstancesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstancesEnabledInput() {
    return this._customInstancesEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // headroom - computed: false, optional: true, required: false
  private _headroom = new AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomOutputReference(this, "headroom");
  public get headroom() {
    return this._headroom;
  }
  public putHeadroom(value: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroom) {
    this._headroom.internalValue = value;
  }
  public resetHeadroom() {
    this._headroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomInput() {
    return this._headroom.internalValue;
  }

  // headroom_spot - computed: false, optional: true, required: false
  private _headroomSpot = new AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpotOutputReference(this, "headroom_spot");
  public get headroomSpot() {
    return this._headroomSpot;
  }
  public putHeadroomSpot(value: AutoscalerAutoscalerSettingsUnschedulablePodsHeadroomSpot) {
    this._headroomSpot.internalValue = value;
  }
  public resetHeadroomSpot() {
    this._headroomSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomSpotInput() {
    return this._headroomSpot.internalValue;
  }

  // node_constraints - computed: false, optional: true, required: false
  private _nodeConstraints = new AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraintsOutputReference(this, "node_constraints");
  public get nodeConstraints() {
    return this._nodeConstraints;
  }
  public putNodeConstraints(value: AutoscalerAutoscalerSettingsUnschedulablePodsNodeConstraints) {
    this._nodeConstraints.internalValue = value;
  }
  public resetNodeConstraints() {
    this._nodeConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConstraintsInput() {
    return this._nodeConstraints.internalValue;
  }

  // pod_pinner - computed: false, optional: true, required: false
  private _podPinner = new AutoscalerAutoscalerSettingsUnschedulablePodsPodPinnerOutputReference(this, "pod_pinner");
  public get podPinner() {
    return this._podPinner;
  }
  public putPodPinner(value: AutoscalerAutoscalerSettingsUnschedulablePodsPodPinner) {
    this._podPinner.internalValue = value;
  }
  public resetPodPinner() {
    this._podPinner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPinnerInput() {
    return this._podPinner.internalValue;
  }
}
export interface AutoscalerAutoscalerSettings {
  /**
  * enable/disable autoscaler policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#enabled Autoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * run autoscaler in scoped mode. Only marked pods and nodes will be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#is_scoped_mode Autoscaler#is_scoped_mode}
  */
  readonly isScopedMode?: boolean | cdktf.IResolvable;
  /**
  * marks whether partial matching should be used when deciding which custom node template to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#node_templates_partial_matching_enabled Autoscaler#node_templates_partial_matching_enabled}
  */
  readonly nodeTemplatesPartialMatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * cluster_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#cluster_limits Autoscaler#cluster_limits}
  */
  readonly clusterLimits?: AutoscalerAutoscalerSettingsClusterLimits;
  /**
  * node_downscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#node_downscaler Autoscaler#node_downscaler}
  */
  readonly nodeDownscaler?: AutoscalerAutoscalerSettingsNodeDownscaler;
  /**
  * spot_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#spot_instances Autoscaler#spot_instances}
  */
  readonly spotInstances?: AutoscalerAutoscalerSettingsSpotInstances;
  /**
  * unschedulable_pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#unschedulable_pods Autoscaler#unschedulable_pods}
  */
  readonly unschedulablePods?: AutoscalerAutoscalerSettingsUnschedulablePods;
}

export function autoscalerAutoscalerSettingsToTerraform(struct?: AutoscalerAutoscalerSettingsOutputReference | AutoscalerAutoscalerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    is_scoped_mode: cdktf.booleanToTerraform(struct!.isScopedMode),
    node_templates_partial_matching_enabled: cdktf.booleanToTerraform(struct!.nodeTemplatesPartialMatchingEnabled),
    cluster_limits: autoscalerAutoscalerSettingsClusterLimitsToTerraform(struct!.clusterLimits),
    node_downscaler: autoscalerAutoscalerSettingsNodeDownscalerToTerraform(struct!.nodeDownscaler),
    spot_instances: autoscalerAutoscalerSettingsSpotInstancesToTerraform(struct!.spotInstances),
    unschedulable_pods: autoscalerAutoscalerSettingsUnschedulablePodsToTerraform(struct!.unschedulablePods),
  }
}


export function autoscalerAutoscalerSettingsToHclTerraform(struct?: AutoscalerAutoscalerSettingsOutputReference | AutoscalerAutoscalerSettings): any {
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
    is_scoped_mode: {
      value: cdktf.booleanToHclTerraform(struct!.isScopedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_templates_partial_matching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodeTemplatesPartialMatchingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_limits: {
      value: autoscalerAutoscalerSettingsClusterLimitsToHclTerraform(struct!.clusterLimits),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsClusterLimitsList",
    },
    node_downscaler: {
      value: autoscalerAutoscalerSettingsNodeDownscalerToHclTerraform(struct!.nodeDownscaler),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsNodeDownscalerList",
    },
    spot_instances: {
      value: autoscalerAutoscalerSettingsSpotInstancesToHclTerraform(struct!.spotInstances),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsSpotInstancesList",
    },
    unschedulable_pods: {
      value: autoscalerAutoscalerSettingsUnschedulablePodsToHclTerraform(struct!.unschedulablePods),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalerAutoscalerSettingsUnschedulablePodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalerAutoscalerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalerAutoscalerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._isScopedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isScopedMode = this._isScopedMode;
    }
    if (this._nodeTemplatesPartialMatchingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTemplatesPartialMatchingEnabled = this._nodeTemplatesPartialMatchingEnabled;
    }
    if (this._clusterLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLimits = this._clusterLimits?.internalValue;
    }
    if (this._nodeDownscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDownscaler = this._nodeDownscaler?.internalValue;
    }
    if (this._spotInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstances = this._spotInstances?.internalValue;
    }
    if (this._unschedulablePods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unschedulablePods = this._unschedulablePods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerAutoscalerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._isScopedMode = undefined;
      this._nodeTemplatesPartialMatchingEnabled = undefined;
      this._clusterLimits.internalValue = undefined;
      this._nodeDownscaler.internalValue = undefined;
      this._spotInstances.internalValue = undefined;
      this._unschedulablePods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._isScopedMode = value.isScopedMode;
      this._nodeTemplatesPartialMatchingEnabled = value.nodeTemplatesPartialMatchingEnabled;
      this._clusterLimits.internalValue = value.clusterLimits;
      this._nodeDownscaler.internalValue = value.nodeDownscaler;
      this._spotInstances.internalValue = value.spotInstances;
      this._unschedulablePods.internalValue = value.unschedulablePods;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // is_scoped_mode - computed: false, optional: true, required: false
  private _isScopedMode?: boolean | cdktf.IResolvable; 
  public get isScopedMode() {
    return this.getBooleanAttribute('is_scoped_mode');
  }
  public set isScopedMode(value: boolean | cdktf.IResolvable) {
    this._isScopedMode = value;
  }
  public resetIsScopedMode() {
    this._isScopedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScopedModeInput() {
    return this._isScopedMode;
  }

  // node_templates_partial_matching_enabled - computed: false, optional: true, required: false
  private _nodeTemplatesPartialMatchingEnabled?: boolean | cdktf.IResolvable; 
  public get nodeTemplatesPartialMatchingEnabled() {
    return this.getBooleanAttribute('node_templates_partial_matching_enabled');
  }
  public set nodeTemplatesPartialMatchingEnabled(value: boolean | cdktf.IResolvable) {
    this._nodeTemplatesPartialMatchingEnabled = value;
  }
  public resetNodeTemplatesPartialMatchingEnabled() {
    this._nodeTemplatesPartialMatchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTemplatesPartialMatchingEnabledInput() {
    return this._nodeTemplatesPartialMatchingEnabled;
  }

  // cluster_limits - computed: false, optional: true, required: false
  private _clusterLimits = new AutoscalerAutoscalerSettingsClusterLimitsOutputReference(this, "cluster_limits");
  public get clusterLimits() {
    return this._clusterLimits;
  }
  public putClusterLimits(value: AutoscalerAutoscalerSettingsClusterLimits) {
    this._clusterLimits.internalValue = value;
  }
  public resetClusterLimits() {
    this._clusterLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLimitsInput() {
    return this._clusterLimits.internalValue;
  }

  // node_downscaler - computed: false, optional: true, required: false
  private _nodeDownscaler = new AutoscalerAutoscalerSettingsNodeDownscalerOutputReference(this, "node_downscaler");
  public get nodeDownscaler() {
    return this._nodeDownscaler;
  }
  public putNodeDownscaler(value: AutoscalerAutoscalerSettingsNodeDownscaler) {
    this._nodeDownscaler.internalValue = value;
  }
  public resetNodeDownscaler() {
    this._nodeDownscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDownscalerInput() {
    return this._nodeDownscaler.internalValue;
  }

  // spot_instances - computed: false, optional: true, required: false
  private _spotInstances = new AutoscalerAutoscalerSettingsSpotInstancesOutputReference(this, "spot_instances");
  public get spotInstances() {
    return this._spotInstances;
  }
  public putSpotInstances(value: AutoscalerAutoscalerSettingsSpotInstances) {
    this._spotInstances.internalValue = value;
  }
  public resetSpotInstances() {
    this._spotInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancesInput() {
    return this._spotInstances.internalValue;
  }

  // unschedulable_pods - computed: false, optional: true, required: false
  private _unschedulablePods = new AutoscalerAutoscalerSettingsUnschedulablePodsOutputReference(this, "unschedulable_pods");
  public get unschedulablePods() {
    return this._unschedulablePods;
  }
  public putUnschedulablePods(value: AutoscalerAutoscalerSettingsUnschedulablePods) {
    this._unschedulablePods.internalValue = value;
  }
  public resetUnschedulablePods() {
    this._unschedulablePods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulablePodsInput() {
    return this._unschedulablePods.internalValue;
  }
}
export interface AutoscalerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#create Autoscaler#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#update Autoscaler#update}
  */
  readonly update?: string;
}

export function autoscalerTimeoutsToTerraform(struct?: AutoscalerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function autoscalerTimeoutsToHclTerraform(struct?: AutoscalerTimeouts | cdktf.IResolvable): any {
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

export class AutoscalerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler castai_autoscaler}
*/
export class Autoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_autoscaler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Autoscaler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Autoscaler to import
  * @param importFromId The id of the existing Autoscaler that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Autoscaler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_autoscaler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/autoscaler castai_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutoscalerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'castai_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalerPoliciesJson = config.autoscalerPoliciesJson;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._autoscalerSettings.internalValue = config.autoscalerSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaler_policies - computed: true, optional: false, required: false
  public get autoscalerPolicies() {
    return this.getStringAttribute('autoscaler_policies');
  }

  // autoscaler_policies_json - computed: false, optional: true, required: false
  private _autoscalerPoliciesJson?: string; 
  public get autoscalerPoliciesJson() {
    return this.getStringAttribute('autoscaler_policies_json');
  }
  public set autoscalerPoliciesJson(value: string) {
    this._autoscalerPoliciesJson = value;
  }
  public resetAutoscalerPoliciesJson() {
    this._autoscalerPoliciesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerPoliciesJsonInput() {
    return this._autoscalerPoliciesJson;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // autoscaler_settings - computed: false, optional: true, required: false
  private _autoscalerSettings = new AutoscalerAutoscalerSettingsOutputReference(this, "autoscaler_settings");
  public get autoscalerSettings() {
    return this._autoscalerSettings;
  }
  public putAutoscalerSettings(value: AutoscalerAutoscalerSettings) {
    this._autoscalerSettings.internalValue = value;
  }
  public resetAutoscalerSettings() {
    this._autoscalerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerSettingsInput() {
    return this._autoscalerSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutoscalerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutoscalerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaler_policies_json: cdktf.stringToTerraform(this._autoscalerPoliciesJson),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      autoscaler_settings: autoscalerAutoscalerSettingsToTerraform(this._autoscalerSettings.internalValue),
      timeouts: autoscalerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaler_policies_json: {
        value: cdktf.stringToHclTerraform(this._autoscalerPoliciesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      autoscaler_settings: {
        value: autoscalerAutoscalerSettingsToHclTerraform(this._autoscalerSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalerAutoscalerSettingsList",
      },
      timeouts: {
        value: autoscalerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
