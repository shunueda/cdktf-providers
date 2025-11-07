// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SWorkloadAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#id K8SWorkloadAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#scope K8SWorkloadAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * container_restarts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#container_restarts K8SWorkloadAnomalies#container_restarts}
  */
  readonly containerRestarts: K8SWorkloadAnomaliesContainerRestarts;
  /**
  * deployment_stuck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#deployment_stuck K8SWorkloadAnomalies#deployment_stuck}
  */
  readonly deploymentStuck: K8SWorkloadAnomaliesDeploymentStuck;
  /**
  * high_cpu_throttling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#high_cpu_throttling K8SWorkloadAnomalies#high_cpu_throttling}
  */
  readonly highCpuThrottling: K8SWorkloadAnomaliesHighCpuThrottling;
  /**
  * high_cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#high_cpu_usage K8SWorkloadAnomalies#high_cpu_usage}
  */
  readonly highCpuUsage: K8SWorkloadAnomaliesHighCpuUsage;
  /**
  * high_memory_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#high_memory_usage K8SWorkloadAnomalies#high_memory_usage}
  */
  readonly highMemoryUsage: K8SWorkloadAnomaliesHighMemoryUsage;
  /**
  * job_failure_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#job_failure_events K8SWorkloadAnomalies#job_failure_events}
  */
  readonly jobFailureEvents: K8SWorkloadAnomaliesJobFailureEvents;
  /**
  * not_all_pods_ready block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#not_all_pods_ready K8SWorkloadAnomalies#not_all_pods_ready}
  */
  readonly notAllPodsReady: K8SWorkloadAnomaliesNotAllPodsReady;
  /**
  * oom_kills block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#oom_kills K8SWorkloadAnomalies#oom_kills}
  */
  readonly oomKills: K8SWorkloadAnomaliesOomKills;
  /**
  * pending_pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#pending_pods K8SWorkloadAnomalies#pending_pods}
  */
  readonly pendingPods: K8SWorkloadAnomaliesPendingPods;
  /**
  * pod_backoff_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#pod_backoff_events K8SWorkloadAnomalies#pod_backoff_events}
  */
  readonly podBackoffEvents: K8SWorkloadAnomaliesPodBackoffEvents;
  /**
  * pod_eviction_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#pod_eviction_events K8SWorkloadAnomalies#pod_eviction_events}
  */
  readonly podEvictionEvents: K8SWorkloadAnomaliesPodEvictionEvents;
  /**
  * pod_preemption_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#pod_preemption_events K8SWorkloadAnomalies#pod_preemption_events}
  */
  readonly podPreemptionEvents: K8SWorkloadAnomaliesPodPreemptionEvents;
  /**
  * pod_stuck_in_terminating block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#pod_stuck_in_terminating K8SWorkloadAnomalies#pod_stuck_in_terminating}
  */
  readonly podStuckInTerminating: K8SWorkloadAnomaliesPodStuckInTerminating;
  /**
  * workload_without_ready_pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#workload_without_ready_pods K8SWorkloadAnomalies#workload_without_ready_pods}
  */
  readonly workloadWithoutReadyPods: K8SWorkloadAnomaliesWorkloadWithoutReadyPods;
}
export interface K8SWorkloadAnomaliesContainerRestartsConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * per minute, for any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * there is at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#threshold K8SWorkloadAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SWorkloadAnomaliesContainerRestartsConfigurationToTerraform(struct?: K8SWorkloadAnomaliesContainerRestartsConfigurationOutputReference | K8SWorkloadAnomaliesContainerRestartsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function k8SWorkloadAnomaliesContainerRestartsConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesContainerRestartsConfigurationOutputReference | K8SWorkloadAnomaliesContainerRestartsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesContainerRestartsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesContainerRestartsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesContainerRestartsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
      this._threshold = value.threshold;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface K8SWorkloadAnomaliesContainerRestarts {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesContainerRestartsConfiguration;
}

export function k8SWorkloadAnomaliesContainerRestartsToTerraform(struct?: K8SWorkloadAnomaliesContainerRestartsOutputReference | K8SWorkloadAnomaliesContainerRestarts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesContainerRestartsConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesContainerRestartsToHclTerraform(struct?: K8SWorkloadAnomaliesContainerRestartsOutputReference | K8SWorkloadAnomaliesContainerRestarts): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesContainerRestartsConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesContainerRestartsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesContainerRestartsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesContainerRestarts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesContainerRestarts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesContainerRestartsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesContainerRestartsConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesDeploymentStuckConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * workload stops progressing for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SWorkloadAnomaliesDeploymentStuckConfigurationToTerraform(struct?: K8SWorkloadAnomaliesDeploymentStuckConfigurationOutputReference | K8SWorkloadAnomaliesDeploymentStuckConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SWorkloadAnomaliesDeploymentStuckConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesDeploymentStuckConfigurationOutputReference | K8SWorkloadAnomaliesDeploymentStuckConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesDeploymentStuckConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesDeploymentStuckConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesDeploymentStuckConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }
}
export interface K8SWorkloadAnomaliesDeploymentStuck {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesDeploymentStuckConfiguration;
}

export function k8SWorkloadAnomaliesDeploymentStuckToTerraform(struct?: K8SWorkloadAnomaliesDeploymentStuckOutputReference | K8SWorkloadAnomaliesDeploymentStuck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesDeploymentStuckConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesDeploymentStuckToHclTerraform(struct?: K8SWorkloadAnomaliesDeploymentStuckOutputReference | K8SWorkloadAnomaliesDeploymentStuck): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesDeploymentStuckConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesDeploymentStuckConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesDeploymentStuckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesDeploymentStuck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesDeploymentStuck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesDeploymentStuckConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesDeploymentStuckConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesHighCpuThrottlingConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of CPU usage for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of CPU throttling is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#threshold K8SWorkloadAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SWorkloadAnomaliesHighCpuThrottlingConfigurationToTerraform(struct?: K8SWorkloadAnomaliesHighCpuThrottlingConfigurationOutputReference | K8SWorkloadAnomaliesHighCpuThrottlingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function k8SWorkloadAnomaliesHighCpuThrottlingConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesHighCpuThrottlingConfigurationOutputReference | K8SWorkloadAnomaliesHighCpuThrottlingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesHighCpuThrottlingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesHighCpuThrottlingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesHighCpuThrottlingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
      this._threshold = value.threshold;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface K8SWorkloadAnomaliesHighCpuThrottling {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesHighCpuThrottlingConfiguration;
}

export function k8SWorkloadAnomaliesHighCpuThrottlingToTerraform(struct?: K8SWorkloadAnomaliesHighCpuThrottlingOutputReference | K8SWorkloadAnomaliesHighCpuThrottling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesHighCpuThrottlingConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesHighCpuThrottlingToHclTerraform(struct?: K8SWorkloadAnomaliesHighCpuThrottlingOutputReference | K8SWorkloadAnomaliesHighCpuThrottling): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesHighCpuThrottlingConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesHighCpuThrottlingConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesHighCpuThrottlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesHighCpuThrottling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesHighCpuThrottling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesHighCpuThrottlingConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesHighCpuThrottlingConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesHighCpuUsageConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of defined CPU limits for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of utilized workload CPU is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#threshold K8SWorkloadAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SWorkloadAnomaliesHighCpuUsageConfigurationToTerraform(struct?: K8SWorkloadAnomaliesHighCpuUsageConfigurationOutputReference | K8SWorkloadAnomaliesHighCpuUsageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function k8SWorkloadAnomaliesHighCpuUsageConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesHighCpuUsageConfigurationOutputReference | K8SWorkloadAnomaliesHighCpuUsageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesHighCpuUsageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesHighCpuUsageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesHighCpuUsageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
      this._threshold = value.threshold;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface K8SWorkloadAnomaliesHighCpuUsage {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesHighCpuUsageConfiguration;
}

export function k8SWorkloadAnomaliesHighCpuUsageToTerraform(struct?: K8SWorkloadAnomaliesHighCpuUsageOutputReference | K8SWorkloadAnomaliesHighCpuUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesHighCpuUsageConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesHighCpuUsageToHclTerraform(struct?: K8SWorkloadAnomaliesHighCpuUsageOutputReference | K8SWorkloadAnomaliesHighCpuUsage): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesHighCpuUsageConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesHighCpuUsageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesHighCpuUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesHighCpuUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesHighCpuUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesHighCpuUsageConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesHighCpuUsageConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesHighMemoryUsageConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of defined memory limits for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of utilized workload memory is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#threshold K8SWorkloadAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SWorkloadAnomaliesHighMemoryUsageConfigurationToTerraform(struct?: K8SWorkloadAnomaliesHighMemoryUsageConfigurationOutputReference | K8SWorkloadAnomaliesHighMemoryUsageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function k8SWorkloadAnomaliesHighMemoryUsageConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesHighMemoryUsageConfigurationOutputReference | K8SWorkloadAnomaliesHighMemoryUsageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesHighMemoryUsageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesHighMemoryUsageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesHighMemoryUsageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
      this._threshold = value.threshold;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface K8SWorkloadAnomaliesHighMemoryUsage {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesHighMemoryUsageConfiguration;
}

export function k8SWorkloadAnomaliesHighMemoryUsageToTerraform(struct?: K8SWorkloadAnomaliesHighMemoryUsageOutputReference | K8SWorkloadAnomaliesHighMemoryUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesHighMemoryUsageConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesHighMemoryUsageToHclTerraform(struct?: K8SWorkloadAnomaliesHighMemoryUsageOutputReference | K8SWorkloadAnomaliesHighMemoryUsage): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesHighMemoryUsageConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesHighMemoryUsageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesHighMemoryUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesHighMemoryUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesHighMemoryUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesHighMemoryUsageConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesHighMemoryUsageConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesJobFailureEvents {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function k8SWorkloadAnomaliesJobFailureEventsToTerraform(struct?: K8SWorkloadAnomaliesJobFailureEventsOutputReference | K8SWorkloadAnomaliesJobFailureEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function k8SWorkloadAnomaliesJobFailureEventsToHclTerraform(struct?: K8SWorkloadAnomaliesJobFailureEventsOutputReference | K8SWorkloadAnomaliesJobFailureEvents): any {
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

export class K8SWorkloadAnomaliesJobFailureEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesJobFailureEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesJobFailureEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface K8SWorkloadAnomaliesNotAllPodsReadyConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * some workload pods are not ready for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SWorkloadAnomaliesNotAllPodsReadyConfigurationToTerraform(struct?: K8SWorkloadAnomaliesNotAllPodsReadyConfigurationOutputReference | K8SWorkloadAnomaliesNotAllPodsReadyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SWorkloadAnomaliesNotAllPodsReadyConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesNotAllPodsReadyConfigurationOutputReference | K8SWorkloadAnomaliesNotAllPodsReadyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesNotAllPodsReadyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesNotAllPodsReadyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesNotAllPodsReadyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }
}
export interface K8SWorkloadAnomaliesNotAllPodsReady {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesNotAllPodsReadyConfiguration;
}

export function k8SWorkloadAnomaliesNotAllPodsReadyToTerraform(struct?: K8SWorkloadAnomaliesNotAllPodsReadyOutputReference | K8SWorkloadAnomaliesNotAllPodsReady): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesNotAllPodsReadyConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesNotAllPodsReadyToHclTerraform(struct?: K8SWorkloadAnomaliesNotAllPodsReadyOutputReference | K8SWorkloadAnomaliesNotAllPodsReady): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesNotAllPodsReadyConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesNotAllPodsReadyConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesNotAllPodsReadyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesNotAllPodsReady | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesNotAllPodsReady | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesNotAllPodsReadyConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesNotAllPodsReadyConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesOomKills {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function k8SWorkloadAnomaliesOomKillsToTerraform(struct?: K8SWorkloadAnomaliesOomKillsOutputReference | K8SWorkloadAnomaliesOomKills): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function k8SWorkloadAnomaliesOomKillsToHclTerraform(struct?: K8SWorkloadAnomaliesOomKillsOutputReference | K8SWorkloadAnomaliesOomKills): any {
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

export class K8SWorkloadAnomaliesOomKillsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesOomKills | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesOomKills | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface K8SWorkloadAnomaliesPendingPodsConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * stuck in pending state for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * there is at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#threshold K8SWorkloadAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SWorkloadAnomaliesPendingPodsConfigurationToTerraform(struct?: K8SWorkloadAnomaliesPendingPodsConfigurationOutputReference | K8SWorkloadAnomaliesPendingPodsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function k8SWorkloadAnomaliesPendingPodsConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesPendingPodsConfigurationOutputReference | K8SWorkloadAnomaliesPendingPodsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesPendingPodsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPendingPodsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPendingPodsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
      this._threshold = value.threshold;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface K8SWorkloadAnomaliesPendingPods {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesPendingPodsConfiguration;
}

export function k8SWorkloadAnomaliesPendingPodsToTerraform(struct?: K8SWorkloadAnomaliesPendingPodsOutputReference | K8SWorkloadAnomaliesPendingPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesPendingPodsConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesPendingPodsToHclTerraform(struct?: K8SWorkloadAnomaliesPendingPodsOutputReference | K8SWorkloadAnomaliesPendingPods): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesPendingPodsConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesPendingPodsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesPendingPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPendingPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPendingPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesPendingPodsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesPendingPodsConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesPodBackoffEvents {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function k8SWorkloadAnomaliesPodBackoffEventsToTerraform(struct?: K8SWorkloadAnomaliesPodBackoffEventsOutputReference | K8SWorkloadAnomaliesPodBackoffEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function k8SWorkloadAnomaliesPodBackoffEventsToHclTerraform(struct?: K8SWorkloadAnomaliesPodBackoffEventsOutputReference | K8SWorkloadAnomaliesPodBackoffEvents): any {
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

export class K8SWorkloadAnomaliesPodBackoffEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPodBackoffEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPodBackoffEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface K8SWorkloadAnomaliesPodEvictionEvents {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function k8SWorkloadAnomaliesPodEvictionEventsToTerraform(struct?: K8SWorkloadAnomaliesPodEvictionEventsOutputReference | K8SWorkloadAnomaliesPodEvictionEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function k8SWorkloadAnomaliesPodEvictionEventsToHclTerraform(struct?: K8SWorkloadAnomaliesPodEvictionEventsOutputReference | K8SWorkloadAnomaliesPodEvictionEvents): any {
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

export class K8SWorkloadAnomaliesPodEvictionEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPodEvictionEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPodEvictionEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface K8SWorkloadAnomaliesPodPreemptionEvents {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function k8SWorkloadAnomaliesPodPreemptionEventsToTerraform(struct?: K8SWorkloadAnomaliesPodPreemptionEventsOutputReference | K8SWorkloadAnomaliesPodPreemptionEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function k8SWorkloadAnomaliesPodPreemptionEventsToHclTerraform(struct?: K8SWorkloadAnomaliesPodPreemptionEventsOutputReference | K8SWorkloadAnomaliesPodPreemptionEvents): any {
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

export class K8SWorkloadAnomaliesPodPreemptionEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPodPreemptionEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPodPreemptionEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * pod termination stops progressing for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SWorkloadAnomaliesPodStuckInTerminatingConfigurationToTerraform(struct?: K8SWorkloadAnomaliesPodStuckInTerminatingConfigurationOutputReference | K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SWorkloadAnomaliesPodStuckInTerminatingConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesPodStuckInTerminatingConfigurationOutputReference | K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesPodStuckInTerminatingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }
}
export interface K8SWorkloadAnomaliesPodStuckInTerminating {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration;
}

export function k8SWorkloadAnomaliesPodStuckInTerminatingToTerraform(struct?: K8SWorkloadAnomaliesPodStuckInTerminatingOutputReference | K8SWorkloadAnomaliesPodStuckInTerminating): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesPodStuckInTerminatingConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesPodStuckInTerminatingToHclTerraform(struct?: K8SWorkloadAnomaliesPodStuckInTerminatingOutputReference | K8SWorkloadAnomaliesPodStuckInTerminating): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesPodStuckInTerminatingConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesPodStuckInTerminatingConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesPodStuckInTerminatingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesPodStuckInTerminating | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesPodStuckInTerminating | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesPodStuckInTerminatingConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesPodStuckInTerminatingConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#observation_period_in_minutes K8SWorkloadAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * workload has no ready pods for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#sample_period_in_minutes K8SWorkloadAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationToTerraform(struct?: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationOutputReference | K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationToHclTerraform(struct?: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationOutputReference | K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.observationPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.samplePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationPeriodInMinutes = this._observationPeriodInMinutes;
    }
    if (this._samplePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriodInMinutes = this._samplePeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observationPeriodInMinutes = undefined;
      this._samplePeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observationPeriodInMinutes = value.observationPeriodInMinutes;
      this._samplePeriodInMinutes = value.samplePeriodInMinutes;
    }
  }

  // observation_period_in_minutes - computed: false, optional: false, required: true
  private _observationPeriodInMinutes?: number; 
  public get observationPeriodInMinutes() {
    return this.getNumberAttribute('observation_period_in_minutes');
  }
  public set observationPeriodInMinutes(value: number) {
    this._observationPeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationPeriodInMinutesInput() {
    return this._observationPeriodInMinutes;
  }

  // sample_period_in_minutes - computed: false, optional: false, required: true
  private _samplePeriodInMinutes?: number; 
  public get samplePeriodInMinutes() {
    return this.getNumberAttribute('sample_period_in_minutes');
  }
  public set samplePeriodInMinutes(value: number) {
    this._samplePeriodInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInMinutesInput() {
    return this._samplePeriodInMinutes;
  }
}
export interface K8SWorkloadAnomaliesWorkloadWithoutReadyPods {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#enabled K8SWorkloadAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#configuration K8SWorkloadAnomalies#configuration}
  */
  readonly configuration?: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration;
}

export function k8SWorkloadAnomaliesWorkloadWithoutReadyPodsToTerraform(struct?: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsOutputReference | K8SWorkloadAnomaliesWorkloadWithoutReadyPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SWorkloadAnomaliesWorkloadWithoutReadyPodsToHclTerraform(struct?: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsOutputReference | K8SWorkloadAnomaliesWorkloadWithoutReadyPods): any {
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
    configuration: {
      value: k8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SWorkloadAnomaliesWorkloadWithoutReadyPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SWorkloadAnomaliesWorkloadWithoutReadyPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SWorkloadAnomaliesWorkloadWithoutReadyPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SWorkloadAnomaliesWorkloadWithoutReadyPodsConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies dynatrace_k8s_workload_anomalies}
*/
export class K8SWorkloadAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_workload_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SWorkloadAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SWorkloadAnomalies to import
  * @param importFromId The id of the existing K8SWorkloadAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SWorkloadAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_workload_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_workload_anomalies dynatrace_k8s_workload_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SWorkloadAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: K8SWorkloadAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_workload_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._scope = config.scope;
    this._containerRestarts.internalValue = config.containerRestarts;
    this._deploymentStuck.internalValue = config.deploymentStuck;
    this._highCpuThrottling.internalValue = config.highCpuThrottling;
    this._highCpuUsage.internalValue = config.highCpuUsage;
    this._highMemoryUsage.internalValue = config.highMemoryUsage;
    this._jobFailureEvents.internalValue = config.jobFailureEvents;
    this._notAllPodsReady.internalValue = config.notAllPodsReady;
    this._oomKills.internalValue = config.oomKills;
    this._pendingPods.internalValue = config.pendingPods;
    this._podBackoffEvents.internalValue = config.podBackoffEvents;
    this._podEvictionEvents.internalValue = config.podEvictionEvents;
    this._podPreemptionEvents.internalValue = config.podPreemptionEvents;
    this._podStuckInTerminating.internalValue = config.podStuckInTerminating;
    this._workloadWithoutReadyPods.internalValue = config.workloadWithoutReadyPods;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // container_restarts - computed: false, optional: false, required: true
  private _containerRestarts = new K8SWorkloadAnomaliesContainerRestartsOutputReference(this, "container_restarts");
  public get containerRestarts() {
    return this._containerRestarts;
  }
  public putContainerRestarts(value: K8SWorkloadAnomaliesContainerRestarts) {
    this._containerRestarts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRestartsInput() {
    return this._containerRestarts.internalValue;
  }

  // deployment_stuck - computed: false, optional: false, required: true
  private _deploymentStuck = new K8SWorkloadAnomaliesDeploymentStuckOutputReference(this, "deployment_stuck");
  public get deploymentStuck() {
    return this._deploymentStuck;
  }
  public putDeploymentStuck(value: K8SWorkloadAnomaliesDeploymentStuck) {
    this._deploymentStuck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStuckInput() {
    return this._deploymentStuck.internalValue;
  }

  // high_cpu_throttling - computed: false, optional: false, required: true
  private _highCpuThrottling = new K8SWorkloadAnomaliesHighCpuThrottlingOutputReference(this, "high_cpu_throttling");
  public get highCpuThrottling() {
    return this._highCpuThrottling;
  }
  public putHighCpuThrottling(value: K8SWorkloadAnomaliesHighCpuThrottling) {
    this._highCpuThrottling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highCpuThrottlingInput() {
    return this._highCpuThrottling.internalValue;
  }

  // high_cpu_usage - computed: false, optional: false, required: true
  private _highCpuUsage = new K8SWorkloadAnomaliesHighCpuUsageOutputReference(this, "high_cpu_usage");
  public get highCpuUsage() {
    return this._highCpuUsage;
  }
  public putHighCpuUsage(value: K8SWorkloadAnomaliesHighCpuUsage) {
    this._highCpuUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highCpuUsageInput() {
    return this._highCpuUsage.internalValue;
  }

  // high_memory_usage - computed: false, optional: false, required: true
  private _highMemoryUsage = new K8SWorkloadAnomaliesHighMemoryUsageOutputReference(this, "high_memory_usage");
  public get highMemoryUsage() {
    return this._highMemoryUsage;
  }
  public putHighMemoryUsage(value: K8SWorkloadAnomaliesHighMemoryUsage) {
    this._highMemoryUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highMemoryUsageInput() {
    return this._highMemoryUsage.internalValue;
  }

  // job_failure_events - computed: false, optional: false, required: true
  private _jobFailureEvents = new K8SWorkloadAnomaliesJobFailureEventsOutputReference(this, "job_failure_events");
  public get jobFailureEvents() {
    return this._jobFailureEvents;
  }
  public putJobFailureEvents(value: K8SWorkloadAnomaliesJobFailureEvents) {
    this._jobFailureEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobFailureEventsInput() {
    return this._jobFailureEvents.internalValue;
  }

  // not_all_pods_ready - computed: false, optional: false, required: true
  private _notAllPodsReady = new K8SWorkloadAnomaliesNotAllPodsReadyOutputReference(this, "not_all_pods_ready");
  public get notAllPodsReady() {
    return this._notAllPodsReady;
  }
  public putNotAllPodsReady(value: K8SWorkloadAnomaliesNotAllPodsReady) {
    this._notAllPodsReady.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllPodsReadyInput() {
    return this._notAllPodsReady.internalValue;
  }

  // oom_kills - computed: false, optional: false, required: true
  private _oomKills = new K8SWorkloadAnomaliesOomKillsOutputReference(this, "oom_kills");
  public get oomKills() {
    return this._oomKills;
  }
  public putOomKills(value: K8SWorkloadAnomaliesOomKills) {
    this._oomKills.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oomKillsInput() {
    return this._oomKills.internalValue;
  }

  // pending_pods - computed: false, optional: false, required: true
  private _pendingPods = new K8SWorkloadAnomaliesPendingPodsOutputReference(this, "pending_pods");
  public get pendingPods() {
    return this._pendingPods;
  }
  public putPendingPods(value: K8SWorkloadAnomaliesPendingPods) {
    this._pendingPods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingPodsInput() {
    return this._pendingPods.internalValue;
  }

  // pod_backoff_events - computed: false, optional: false, required: true
  private _podBackoffEvents = new K8SWorkloadAnomaliesPodBackoffEventsOutputReference(this, "pod_backoff_events");
  public get podBackoffEvents() {
    return this._podBackoffEvents;
  }
  public putPodBackoffEvents(value: K8SWorkloadAnomaliesPodBackoffEvents) {
    this._podBackoffEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podBackoffEventsInput() {
    return this._podBackoffEvents.internalValue;
  }

  // pod_eviction_events - computed: false, optional: false, required: true
  private _podEvictionEvents = new K8SWorkloadAnomaliesPodEvictionEventsOutputReference(this, "pod_eviction_events");
  public get podEvictionEvents() {
    return this._podEvictionEvents;
  }
  public putPodEvictionEvents(value: K8SWorkloadAnomaliesPodEvictionEvents) {
    this._podEvictionEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podEvictionEventsInput() {
    return this._podEvictionEvents.internalValue;
  }

  // pod_preemption_events - computed: false, optional: false, required: true
  private _podPreemptionEvents = new K8SWorkloadAnomaliesPodPreemptionEventsOutputReference(this, "pod_preemption_events");
  public get podPreemptionEvents() {
    return this._podPreemptionEvents;
  }
  public putPodPreemptionEvents(value: K8SWorkloadAnomaliesPodPreemptionEvents) {
    this._podPreemptionEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podPreemptionEventsInput() {
    return this._podPreemptionEvents.internalValue;
  }

  // pod_stuck_in_terminating - computed: false, optional: false, required: true
  private _podStuckInTerminating = new K8SWorkloadAnomaliesPodStuckInTerminatingOutputReference(this, "pod_stuck_in_terminating");
  public get podStuckInTerminating() {
    return this._podStuckInTerminating;
  }
  public putPodStuckInTerminating(value: K8SWorkloadAnomaliesPodStuckInTerminating) {
    this._podStuckInTerminating.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podStuckInTerminatingInput() {
    return this._podStuckInTerminating.internalValue;
  }

  // workload_without_ready_pods - computed: false, optional: false, required: true
  private _workloadWithoutReadyPods = new K8SWorkloadAnomaliesWorkloadWithoutReadyPodsOutputReference(this, "workload_without_ready_pods");
  public get workloadWithoutReadyPods() {
    return this._workloadWithoutReadyPods;
  }
  public putWorkloadWithoutReadyPods(value: K8SWorkloadAnomaliesWorkloadWithoutReadyPods) {
    this._workloadWithoutReadyPods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadWithoutReadyPodsInput() {
    return this._workloadWithoutReadyPods.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      container_restarts: k8SWorkloadAnomaliesContainerRestartsToTerraform(this._containerRestarts.internalValue),
      deployment_stuck: k8SWorkloadAnomaliesDeploymentStuckToTerraform(this._deploymentStuck.internalValue),
      high_cpu_throttling: k8SWorkloadAnomaliesHighCpuThrottlingToTerraform(this._highCpuThrottling.internalValue),
      high_cpu_usage: k8SWorkloadAnomaliesHighCpuUsageToTerraform(this._highCpuUsage.internalValue),
      high_memory_usage: k8SWorkloadAnomaliesHighMemoryUsageToTerraform(this._highMemoryUsage.internalValue),
      job_failure_events: k8SWorkloadAnomaliesJobFailureEventsToTerraform(this._jobFailureEvents.internalValue),
      not_all_pods_ready: k8SWorkloadAnomaliesNotAllPodsReadyToTerraform(this._notAllPodsReady.internalValue),
      oom_kills: k8SWorkloadAnomaliesOomKillsToTerraform(this._oomKills.internalValue),
      pending_pods: k8SWorkloadAnomaliesPendingPodsToTerraform(this._pendingPods.internalValue),
      pod_backoff_events: k8SWorkloadAnomaliesPodBackoffEventsToTerraform(this._podBackoffEvents.internalValue),
      pod_eviction_events: k8SWorkloadAnomaliesPodEvictionEventsToTerraform(this._podEvictionEvents.internalValue),
      pod_preemption_events: k8SWorkloadAnomaliesPodPreemptionEventsToTerraform(this._podPreemptionEvents.internalValue),
      pod_stuck_in_terminating: k8SWorkloadAnomaliesPodStuckInTerminatingToTerraform(this._podStuckInTerminating.internalValue),
      workload_without_ready_pods: k8SWorkloadAnomaliesWorkloadWithoutReadyPodsToTerraform(this._workloadWithoutReadyPods.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_restarts: {
        value: k8SWorkloadAnomaliesContainerRestartsToHclTerraform(this._containerRestarts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesContainerRestartsList",
      },
      deployment_stuck: {
        value: k8SWorkloadAnomaliesDeploymentStuckToHclTerraform(this._deploymentStuck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesDeploymentStuckList",
      },
      high_cpu_throttling: {
        value: k8SWorkloadAnomaliesHighCpuThrottlingToHclTerraform(this._highCpuThrottling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesHighCpuThrottlingList",
      },
      high_cpu_usage: {
        value: k8SWorkloadAnomaliesHighCpuUsageToHclTerraform(this._highCpuUsage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesHighCpuUsageList",
      },
      high_memory_usage: {
        value: k8SWorkloadAnomaliesHighMemoryUsageToHclTerraform(this._highMemoryUsage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesHighMemoryUsageList",
      },
      job_failure_events: {
        value: k8SWorkloadAnomaliesJobFailureEventsToHclTerraform(this._jobFailureEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesJobFailureEventsList",
      },
      not_all_pods_ready: {
        value: k8SWorkloadAnomaliesNotAllPodsReadyToHclTerraform(this._notAllPodsReady.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesNotAllPodsReadyList",
      },
      oom_kills: {
        value: k8SWorkloadAnomaliesOomKillsToHclTerraform(this._oomKills.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesOomKillsList",
      },
      pending_pods: {
        value: k8SWorkloadAnomaliesPendingPodsToHclTerraform(this._pendingPods.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesPendingPodsList",
      },
      pod_backoff_events: {
        value: k8SWorkloadAnomaliesPodBackoffEventsToHclTerraform(this._podBackoffEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesPodBackoffEventsList",
      },
      pod_eviction_events: {
        value: k8SWorkloadAnomaliesPodEvictionEventsToHclTerraform(this._podEvictionEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesPodEvictionEventsList",
      },
      pod_preemption_events: {
        value: k8SWorkloadAnomaliesPodPreemptionEventsToHclTerraform(this._podPreemptionEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesPodPreemptionEventsList",
      },
      pod_stuck_in_terminating: {
        value: k8SWorkloadAnomaliesPodStuckInTerminatingToHclTerraform(this._podStuckInTerminating.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesPodStuckInTerminatingList",
      },
      workload_without_ready_pods: {
        value: k8SWorkloadAnomaliesWorkloadWithoutReadyPodsToHclTerraform(this._workloadWithoutReadyPods.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SWorkloadAnomaliesWorkloadWithoutReadyPodsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
