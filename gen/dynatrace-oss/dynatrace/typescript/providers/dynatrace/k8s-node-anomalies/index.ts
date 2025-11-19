// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SNodeAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#id K8SNodeAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#scope K8SNodeAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * cpu_requests_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#cpu_requests_saturation K8SNodeAnomalies#cpu_requests_saturation}
  */
  readonly cpuRequestsSaturation: K8SNodeAnomaliesCpuRequestsSaturation;
  /**
  * memory_requests_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#memory_requests_saturation K8SNodeAnomalies#memory_requests_saturation}
  */
  readonly memoryRequestsSaturation: K8SNodeAnomaliesMemoryRequestsSaturation;
  /**
  * node_problematic_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#node_problematic_condition K8SNodeAnomalies#node_problematic_condition}
  */
  readonly nodeProblematicCondition: K8SNodeAnomaliesNodeProblematicCondition;
  /**
  * pods_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#pods_saturation K8SNodeAnomalies#pods_saturation}
  */
  readonly podsSaturation: K8SNodeAnomaliesPodsSaturation;
  /**
  * readiness_issues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#readiness_issues K8SNodeAnomalies#readiness_issues}
  */
  readonly readinessIssues: K8SNodeAnomaliesReadinessIssues;
}
export interface K8SNodeAnomaliesCpuRequestsSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#observation_period_in_minutes K8SNodeAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of node CPU capacity for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#sample_period_in_minutes K8SNodeAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of requested CPU is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#threshold K8SNodeAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNodeAnomaliesCpuRequestsSaturationConfigurationToTerraform(struct?: K8SNodeAnomaliesCpuRequestsSaturationConfigurationOutputReference | K8SNodeAnomaliesCpuRequestsSaturationConfiguration): any {
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


export function k8SNodeAnomaliesCpuRequestsSaturationConfigurationToHclTerraform(struct?: K8SNodeAnomaliesCpuRequestsSaturationConfigurationOutputReference | K8SNodeAnomaliesCpuRequestsSaturationConfiguration): any {
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

export class K8SNodeAnomaliesCpuRequestsSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesCpuRequestsSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesCpuRequestsSaturationConfiguration | undefined) {
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
export interface K8SNodeAnomaliesCpuRequestsSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#enabled K8SNodeAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#configuration K8SNodeAnomalies#configuration}
  */
  readonly configuration?: K8SNodeAnomaliesCpuRequestsSaturationConfiguration;
}

export function k8SNodeAnomaliesCpuRequestsSaturationToTerraform(struct?: K8SNodeAnomaliesCpuRequestsSaturationOutputReference | K8SNodeAnomaliesCpuRequestsSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNodeAnomaliesCpuRequestsSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNodeAnomaliesCpuRequestsSaturationToHclTerraform(struct?: K8SNodeAnomaliesCpuRequestsSaturationOutputReference | K8SNodeAnomaliesCpuRequestsSaturation): any {
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
      value: k8SNodeAnomaliesCpuRequestsSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNodeAnomaliesCpuRequestsSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNodeAnomaliesCpuRequestsSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesCpuRequestsSaturation | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesCpuRequestsSaturation | undefined) {
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
  private _configuration = new K8SNodeAnomaliesCpuRequestsSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNodeAnomaliesCpuRequestsSaturationConfiguration) {
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
export interface K8SNodeAnomaliesMemoryRequestsSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#observation_period_in_minutes K8SNodeAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of node memory capacity for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#sample_period_in_minutes K8SNodeAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of requested memory is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#threshold K8SNodeAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNodeAnomaliesMemoryRequestsSaturationConfigurationToTerraform(struct?: K8SNodeAnomaliesMemoryRequestsSaturationConfigurationOutputReference | K8SNodeAnomaliesMemoryRequestsSaturationConfiguration): any {
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


export function k8SNodeAnomaliesMemoryRequestsSaturationConfigurationToHclTerraform(struct?: K8SNodeAnomaliesMemoryRequestsSaturationConfigurationOutputReference | K8SNodeAnomaliesMemoryRequestsSaturationConfiguration): any {
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

export class K8SNodeAnomaliesMemoryRequestsSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesMemoryRequestsSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesMemoryRequestsSaturationConfiguration | undefined) {
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
export interface K8SNodeAnomaliesMemoryRequestsSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#enabled K8SNodeAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#configuration K8SNodeAnomalies#configuration}
  */
  readonly configuration?: K8SNodeAnomaliesMemoryRequestsSaturationConfiguration;
}

export function k8SNodeAnomaliesMemoryRequestsSaturationToTerraform(struct?: K8SNodeAnomaliesMemoryRequestsSaturationOutputReference | K8SNodeAnomaliesMemoryRequestsSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNodeAnomaliesMemoryRequestsSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNodeAnomaliesMemoryRequestsSaturationToHclTerraform(struct?: K8SNodeAnomaliesMemoryRequestsSaturationOutputReference | K8SNodeAnomaliesMemoryRequestsSaturation): any {
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
      value: k8SNodeAnomaliesMemoryRequestsSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNodeAnomaliesMemoryRequestsSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNodeAnomaliesMemoryRequestsSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesMemoryRequestsSaturation | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesMemoryRequestsSaturation | undefined) {
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
  private _configuration = new K8SNodeAnomaliesMemoryRequestsSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNodeAnomaliesMemoryRequestsSaturationConfiguration) {
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
export interface K8SNodeAnomaliesNodeProblematicConditionConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#observation_period_in_minutes K8SNodeAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * node has problematic conditions for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#sample_period_in_minutes K8SNodeAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SNodeAnomaliesNodeProblematicConditionConfigurationToTerraform(struct?: K8SNodeAnomaliesNodeProblematicConditionConfigurationOutputReference | K8SNodeAnomaliesNodeProblematicConditionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SNodeAnomaliesNodeProblematicConditionConfigurationToHclTerraform(struct?: K8SNodeAnomaliesNodeProblematicConditionConfigurationOutputReference | K8SNodeAnomaliesNodeProblematicConditionConfiguration): any {
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

export class K8SNodeAnomaliesNodeProblematicConditionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesNodeProblematicConditionConfiguration | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesNodeProblematicConditionConfiguration | undefined) {
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
export interface K8SNodeAnomaliesNodeProblematicCondition {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#enabled K8SNodeAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#configuration K8SNodeAnomalies#configuration}
  */
  readonly configuration?: K8SNodeAnomaliesNodeProblematicConditionConfiguration;
}

export function k8SNodeAnomaliesNodeProblematicConditionToTerraform(struct?: K8SNodeAnomaliesNodeProblematicConditionOutputReference | K8SNodeAnomaliesNodeProblematicCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNodeAnomaliesNodeProblematicConditionConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNodeAnomaliesNodeProblematicConditionToHclTerraform(struct?: K8SNodeAnomaliesNodeProblematicConditionOutputReference | K8SNodeAnomaliesNodeProblematicCondition): any {
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
      value: k8SNodeAnomaliesNodeProblematicConditionConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNodeAnomaliesNodeProblematicConditionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNodeAnomaliesNodeProblematicConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesNodeProblematicCondition | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesNodeProblematicCondition | undefined) {
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
  private _configuration = new K8SNodeAnomaliesNodeProblematicConditionConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNodeAnomaliesNodeProblematicConditionConfiguration) {
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
export interface K8SNodeAnomaliesPodsSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#observation_period_in_minutes K8SNodeAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of node capacity for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#sample_period_in_minutes K8SNodeAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * number of pods running on node is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#threshold K8SNodeAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNodeAnomaliesPodsSaturationConfigurationToTerraform(struct?: K8SNodeAnomaliesPodsSaturationConfigurationOutputReference | K8SNodeAnomaliesPodsSaturationConfiguration): any {
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


export function k8SNodeAnomaliesPodsSaturationConfigurationToHclTerraform(struct?: K8SNodeAnomaliesPodsSaturationConfigurationOutputReference | K8SNodeAnomaliesPodsSaturationConfiguration): any {
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

export class K8SNodeAnomaliesPodsSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesPodsSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesPodsSaturationConfiguration | undefined) {
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
export interface K8SNodeAnomaliesPodsSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#enabled K8SNodeAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#configuration K8SNodeAnomalies#configuration}
  */
  readonly configuration?: K8SNodeAnomaliesPodsSaturationConfiguration;
}

export function k8SNodeAnomaliesPodsSaturationToTerraform(struct?: K8SNodeAnomaliesPodsSaturationOutputReference | K8SNodeAnomaliesPodsSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNodeAnomaliesPodsSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNodeAnomaliesPodsSaturationToHclTerraform(struct?: K8SNodeAnomaliesPodsSaturationOutputReference | K8SNodeAnomaliesPodsSaturation): any {
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
      value: k8SNodeAnomaliesPodsSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNodeAnomaliesPodsSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNodeAnomaliesPodsSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesPodsSaturation | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesPodsSaturation | undefined) {
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
  private _configuration = new K8SNodeAnomaliesPodsSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNodeAnomaliesPodsSaturationConfiguration) {
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
export interface K8SNodeAnomaliesReadinessIssuesConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#observation_period_in_minutes K8SNodeAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * node is not ready for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#sample_period_in_minutes K8SNodeAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SNodeAnomaliesReadinessIssuesConfigurationToTerraform(struct?: K8SNodeAnomaliesReadinessIssuesConfigurationOutputReference | K8SNodeAnomaliesReadinessIssuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SNodeAnomaliesReadinessIssuesConfigurationToHclTerraform(struct?: K8SNodeAnomaliesReadinessIssuesConfigurationOutputReference | K8SNodeAnomaliesReadinessIssuesConfiguration): any {
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

export class K8SNodeAnomaliesReadinessIssuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesReadinessIssuesConfiguration | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesReadinessIssuesConfiguration | undefined) {
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
export interface K8SNodeAnomaliesReadinessIssues {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#enabled K8SNodeAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#configuration K8SNodeAnomalies#configuration}
  */
  readonly configuration?: K8SNodeAnomaliesReadinessIssuesConfiguration;
}

export function k8SNodeAnomaliesReadinessIssuesToTerraform(struct?: K8SNodeAnomaliesReadinessIssuesOutputReference | K8SNodeAnomaliesReadinessIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNodeAnomaliesReadinessIssuesConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNodeAnomaliesReadinessIssuesToHclTerraform(struct?: K8SNodeAnomaliesReadinessIssuesOutputReference | K8SNodeAnomaliesReadinessIssues): any {
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
      value: k8SNodeAnomaliesReadinessIssuesConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNodeAnomaliesReadinessIssuesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNodeAnomaliesReadinessIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodeAnomaliesReadinessIssues | undefined {
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

  public set internalValue(value: K8SNodeAnomaliesReadinessIssues | undefined) {
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
  private _configuration = new K8SNodeAnomaliesReadinessIssuesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNodeAnomaliesReadinessIssuesConfiguration) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies dynatrace_k8s_node_anomalies}
*/
export class K8SNodeAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_node_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SNodeAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SNodeAnomalies to import
  * @param importFromId The id of the existing K8SNodeAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SNodeAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_node_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/k8s_node_anomalies dynatrace_k8s_node_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SNodeAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: K8SNodeAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_node_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._cpuRequestsSaturation.internalValue = config.cpuRequestsSaturation;
    this._memoryRequestsSaturation.internalValue = config.memoryRequestsSaturation;
    this._nodeProblematicCondition.internalValue = config.nodeProblematicCondition;
    this._podsSaturation.internalValue = config.podsSaturation;
    this._readinessIssues.internalValue = config.readinessIssues;
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

  // cpu_requests_saturation - computed: false, optional: false, required: true
  private _cpuRequestsSaturation = new K8SNodeAnomaliesCpuRequestsSaturationOutputReference(this, "cpu_requests_saturation");
  public get cpuRequestsSaturation() {
    return this._cpuRequestsSaturation;
  }
  public putCpuRequestsSaturation(value: K8SNodeAnomaliesCpuRequestsSaturation) {
    this._cpuRequestsSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestsSaturationInput() {
    return this._cpuRequestsSaturation.internalValue;
  }

  // memory_requests_saturation - computed: false, optional: false, required: true
  private _memoryRequestsSaturation = new K8SNodeAnomaliesMemoryRequestsSaturationOutputReference(this, "memory_requests_saturation");
  public get memoryRequestsSaturation() {
    return this._memoryRequestsSaturation;
  }
  public putMemoryRequestsSaturation(value: K8SNodeAnomaliesMemoryRequestsSaturation) {
    this._memoryRequestsSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestsSaturationInput() {
    return this._memoryRequestsSaturation.internalValue;
  }

  // node_problematic_condition - computed: false, optional: false, required: true
  private _nodeProblematicCondition = new K8SNodeAnomaliesNodeProblematicConditionOutputReference(this, "node_problematic_condition");
  public get nodeProblematicCondition() {
    return this._nodeProblematicCondition;
  }
  public putNodeProblematicCondition(value: K8SNodeAnomaliesNodeProblematicCondition) {
    this._nodeProblematicCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeProblematicConditionInput() {
    return this._nodeProblematicCondition.internalValue;
  }

  // pods_saturation - computed: false, optional: false, required: true
  private _podsSaturation = new K8SNodeAnomaliesPodsSaturationOutputReference(this, "pods_saturation");
  public get podsSaturation() {
    return this._podsSaturation;
  }
  public putPodsSaturation(value: K8SNodeAnomaliesPodsSaturation) {
    this._podsSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsSaturationInput() {
    return this._podsSaturation.internalValue;
  }

  // readiness_issues - computed: false, optional: false, required: true
  private _readinessIssues = new K8SNodeAnomaliesReadinessIssuesOutputReference(this, "readiness_issues");
  public get readinessIssues() {
    return this._readinessIssues;
  }
  public putReadinessIssues(value: K8SNodeAnomaliesReadinessIssues) {
    this._readinessIssues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessIssuesInput() {
    return this._readinessIssues.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      cpu_requests_saturation: k8SNodeAnomaliesCpuRequestsSaturationToTerraform(this._cpuRequestsSaturation.internalValue),
      memory_requests_saturation: k8SNodeAnomaliesMemoryRequestsSaturationToTerraform(this._memoryRequestsSaturation.internalValue),
      node_problematic_condition: k8SNodeAnomaliesNodeProblematicConditionToTerraform(this._nodeProblematicCondition.internalValue),
      pods_saturation: k8SNodeAnomaliesPodsSaturationToTerraform(this._podsSaturation.internalValue),
      readiness_issues: k8SNodeAnomaliesReadinessIssuesToTerraform(this._readinessIssues.internalValue),
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
      cpu_requests_saturation: {
        value: k8SNodeAnomaliesCpuRequestsSaturationToHclTerraform(this._cpuRequestsSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNodeAnomaliesCpuRequestsSaturationList",
      },
      memory_requests_saturation: {
        value: k8SNodeAnomaliesMemoryRequestsSaturationToHclTerraform(this._memoryRequestsSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNodeAnomaliesMemoryRequestsSaturationList",
      },
      node_problematic_condition: {
        value: k8SNodeAnomaliesNodeProblematicConditionToHclTerraform(this._nodeProblematicCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNodeAnomaliesNodeProblematicConditionList",
      },
      pods_saturation: {
        value: k8SNodeAnomaliesPodsSaturationToHclTerraform(this._podsSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNodeAnomaliesPodsSaturationList",
      },
      readiness_issues: {
        value: k8SNodeAnomaliesReadinessIssuesToHclTerraform(this._readinessIssues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNodeAnomaliesReadinessIssuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
