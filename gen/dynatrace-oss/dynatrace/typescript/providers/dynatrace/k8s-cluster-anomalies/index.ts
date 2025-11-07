// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SClusterAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#id K8SClusterAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#scope K8SClusterAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * cpu_requests_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#cpu_requests_saturation K8SClusterAnomalies#cpu_requests_saturation}
  */
  readonly cpuRequestsSaturation: K8SClusterAnomaliesCpuRequestsSaturation;
  /**
  * memory_requests_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#memory_requests_saturation K8SClusterAnomalies#memory_requests_saturation}
  */
  readonly memoryRequestsSaturation: K8SClusterAnomaliesMemoryRequestsSaturation;
  /**
  * monitoring_issues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#monitoring_issues K8SClusterAnomalies#monitoring_issues}
  */
  readonly monitoringIssues: K8SClusterAnomaliesMonitoringIssues;
  /**
  * pods_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#pods_saturation K8SClusterAnomalies#pods_saturation}
  */
  readonly podsSaturation: K8SClusterAnomaliesPodsSaturation;
  /**
  * readiness_issues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#readiness_issues K8SClusterAnomalies#readiness_issues}
  */
  readonly readinessIssues: K8SClusterAnomaliesReadinessIssues;
}
export interface K8SClusterAnomaliesCpuRequestsSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#observation_period_in_minutes K8SClusterAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of cluster CPU capacity for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#sample_period_in_minutes K8SClusterAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of requested CPU is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#threshold K8SClusterAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SClusterAnomaliesCpuRequestsSaturationConfigurationToTerraform(struct?: K8SClusterAnomaliesCpuRequestsSaturationConfigurationOutputReference | K8SClusterAnomaliesCpuRequestsSaturationConfiguration): any {
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


export function k8SClusterAnomaliesCpuRequestsSaturationConfigurationToHclTerraform(struct?: K8SClusterAnomaliesCpuRequestsSaturationConfigurationOutputReference | K8SClusterAnomaliesCpuRequestsSaturationConfiguration): any {
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

export class K8SClusterAnomaliesCpuRequestsSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesCpuRequestsSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesCpuRequestsSaturationConfiguration | undefined) {
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
export interface K8SClusterAnomaliesCpuRequestsSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#enabled K8SClusterAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#configuration K8SClusterAnomalies#configuration}
  */
  readonly configuration?: K8SClusterAnomaliesCpuRequestsSaturationConfiguration;
}

export function k8SClusterAnomaliesCpuRequestsSaturationToTerraform(struct?: K8SClusterAnomaliesCpuRequestsSaturationOutputReference | K8SClusterAnomaliesCpuRequestsSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SClusterAnomaliesCpuRequestsSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SClusterAnomaliesCpuRequestsSaturationToHclTerraform(struct?: K8SClusterAnomaliesCpuRequestsSaturationOutputReference | K8SClusterAnomaliesCpuRequestsSaturation): any {
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
      value: k8SClusterAnomaliesCpuRequestsSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterAnomaliesCpuRequestsSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterAnomaliesCpuRequestsSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesCpuRequestsSaturation | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesCpuRequestsSaturation | undefined) {
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
  private _configuration = new K8SClusterAnomaliesCpuRequestsSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SClusterAnomaliesCpuRequestsSaturationConfiguration) {
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
export interface K8SClusterAnomaliesMemoryRequestsSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#observation_period_in_minutes K8SClusterAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of cluster memory capacity for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#sample_period_in_minutes K8SClusterAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of requested memory is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#threshold K8SClusterAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SClusterAnomaliesMemoryRequestsSaturationConfigurationToTerraform(struct?: K8SClusterAnomaliesMemoryRequestsSaturationConfigurationOutputReference | K8SClusterAnomaliesMemoryRequestsSaturationConfiguration): any {
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


export function k8SClusterAnomaliesMemoryRequestsSaturationConfigurationToHclTerraform(struct?: K8SClusterAnomaliesMemoryRequestsSaturationConfigurationOutputReference | K8SClusterAnomaliesMemoryRequestsSaturationConfiguration): any {
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

export class K8SClusterAnomaliesMemoryRequestsSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesMemoryRequestsSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesMemoryRequestsSaturationConfiguration | undefined) {
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
export interface K8SClusterAnomaliesMemoryRequestsSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#enabled K8SClusterAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#configuration K8SClusterAnomalies#configuration}
  */
  readonly configuration?: K8SClusterAnomaliesMemoryRequestsSaturationConfiguration;
}

export function k8SClusterAnomaliesMemoryRequestsSaturationToTerraform(struct?: K8SClusterAnomaliesMemoryRequestsSaturationOutputReference | K8SClusterAnomaliesMemoryRequestsSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SClusterAnomaliesMemoryRequestsSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SClusterAnomaliesMemoryRequestsSaturationToHclTerraform(struct?: K8SClusterAnomaliesMemoryRequestsSaturationOutputReference | K8SClusterAnomaliesMemoryRequestsSaturation): any {
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
      value: k8SClusterAnomaliesMemoryRequestsSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterAnomaliesMemoryRequestsSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterAnomaliesMemoryRequestsSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesMemoryRequestsSaturation | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesMemoryRequestsSaturation | undefined) {
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
  private _configuration = new K8SClusterAnomaliesMemoryRequestsSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SClusterAnomaliesMemoryRequestsSaturationConfiguration) {
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
export interface K8SClusterAnomaliesMonitoringIssuesConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#observation_period_in_minutes K8SClusterAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * monitoring is not available for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#sample_period_in_minutes K8SClusterAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SClusterAnomaliesMonitoringIssuesConfigurationToTerraform(struct?: K8SClusterAnomaliesMonitoringIssuesConfigurationOutputReference | K8SClusterAnomaliesMonitoringIssuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SClusterAnomaliesMonitoringIssuesConfigurationToHclTerraform(struct?: K8SClusterAnomaliesMonitoringIssuesConfigurationOutputReference | K8SClusterAnomaliesMonitoringIssuesConfiguration): any {
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

export class K8SClusterAnomaliesMonitoringIssuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesMonitoringIssuesConfiguration | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesMonitoringIssuesConfiguration | undefined) {
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
export interface K8SClusterAnomaliesMonitoringIssues {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#enabled K8SClusterAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#configuration K8SClusterAnomalies#configuration}
  */
  readonly configuration?: K8SClusterAnomaliesMonitoringIssuesConfiguration;
}

export function k8SClusterAnomaliesMonitoringIssuesToTerraform(struct?: K8SClusterAnomaliesMonitoringIssuesOutputReference | K8SClusterAnomaliesMonitoringIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SClusterAnomaliesMonitoringIssuesConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SClusterAnomaliesMonitoringIssuesToHclTerraform(struct?: K8SClusterAnomaliesMonitoringIssuesOutputReference | K8SClusterAnomaliesMonitoringIssues): any {
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
      value: k8SClusterAnomaliesMonitoringIssuesConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterAnomaliesMonitoringIssuesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterAnomaliesMonitoringIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesMonitoringIssues | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesMonitoringIssues | undefined) {
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
  private _configuration = new K8SClusterAnomaliesMonitoringIssuesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SClusterAnomaliesMonitoringIssuesConfiguration) {
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
export interface K8SClusterAnomaliesPodsSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#observation_period_in_minutes K8SClusterAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of schedulable pod capacity for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#sample_period_in_minutes K8SClusterAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * number of running pods is higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#threshold K8SClusterAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SClusterAnomaliesPodsSaturationConfigurationToTerraform(struct?: K8SClusterAnomaliesPodsSaturationConfigurationOutputReference | K8SClusterAnomaliesPodsSaturationConfiguration): any {
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


export function k8SClusterAnomaliesPodsSaturationConfigurationToHclTerraform(struct?: K8SClusterAnomaliesPodsSaturationConfigurationOutputReference | K8SClusterAnomaliesPodsSaturationConfiguration): any {
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

export class K8SClusterAnomaliesPodsSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesPodsSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesPodsSaturationConfiguration | undefined) {
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
export interface K8SClusterAnomaliesPodsSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#enabled K8SClusterAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#configuration K8SClusterAnomalies#configuration}
  */
  readonly configuration?: K8SClusterAnomaliesPodsSaturationConfiguration;
}

export function k8SClusterAnomaliesPodsSaturationToTerraform(struct?: K8SClusterAnomaliesPodsSaturationOutputReference | K8SClusterAnomaliesPodsSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SClusterAnomaliesPodsSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SClusterAnomaliesPodsSaturationToHclTerraform(struct?: K8SClusterAnomaliesPodsSaturationOutputReference | K8SClusterAnomaliesPodsSaturation): any {
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
      value: k8SClusterAnomaliesPodsSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterAnomaliesPodsSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterAnomaliesPodsSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesPodsSaturation | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesPodsSaturation | undefined) {
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
  private _configuration = new K8SClusterAnomaliesPodsSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SClusterAnomaliesPodsSaturationConfiguration) {
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
export interface K8SClusterAnomaliesReadinessIssuesConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#observation_period_in_minutes K8SClusterAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * cluster is not ready for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#sample_period_in_minutes K8SClusterAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
}

export function k8SClusterAnomaliesReadinessIssuesConfigurationToTerraform(struct?: K8SClusterAnomaliesReadinessIssuesConfigurationOutputReference | K8SClusterAnomaliesReadinessIssuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_period_in_minutes: cdktf.numberToTerraform(struct!.observationPeriodInMinutes),
    sample_period_in_minutes: cdktf.numberToTerraform(struct!.samplePeriodInMinutes),
  }
}


export function k8SClusterAnomaliesReadinessIssuesConfigurationToHclTerraform(struct?: K8SClusterAnomaliesReadinessIssuesConfigurationOutputReference | K8SClusterAnomaliesReadinessIssuesConfiguration): any {
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

export class K8SClusterAnomaliesReadinessIssuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesReadinessIssuesConfiguration | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesReadinessIssuesConfiguration | undefined) {
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
export interface K8SClusterAnomaliesReadinessIssues {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#enabled K8SClusterAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#configuration K8SClusterAnomalies#configuration}
  */
  readonly configuration?: K8SClusterAnomaliesReadinessIssuesConfiguration;
}

export function k8SClusterAnomaliesReadinessIssuesToTerraform(struct?: K8SClusterAnomaliesReadinessIssuesOutputReference | K8SClusterAnomaliesReadinessIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SClusterAnomaliesReadinessIssuesConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SClusterAnomaliesReadinessIssuesToHclTerraform(struct?: K8SClusterAnomaliesReadinessIssuesOutputReference | K8SClusterAnomaliesReadinessIssues): any {
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
      value: k8SClusterAnomaliesReadinessIssuesConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterAnomaliesReadinessIssuesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterAnomaliesReadinessIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterAnomaliesReadinessIssues | undefined {
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

  public set internalValue(value: K8SClusterAnomaliesReadinessIssues | undefined) {
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
  private _configuration = new K8SClusterAnomaliesReadinessIssuesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SClusterAnomaliesReadinessIssuesConfiguration) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies dynatrace_k8s_cluster_anomalies}
*/
export class K8SClusterAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_cluster_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SClusterAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SClusterAnomalies to import
  * @param importFromId The id of the existing K8SClusterAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SClusterAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_cluster_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_cluster_anomalies dynatrace_k8s_cluster_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SClusterAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: K8SClusterAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_cluster_anomalies',
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
    this._cpuRequestsSaturation.internalValue = config.cpuRequestsSaturation;
    this._memoryRequestsSaturation.internalValue = config.memoryRequestsSaturation;
    this._monitoringIssues.internalValue = config.monitoringIssues;
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
  private _cpuRequestsSaturation = new K8SClusterAnomaliesCpuRequestsSaturationOutputReference(this, "cpu_requests_saturation");
  public get cpuRequestsSaturation() {
    return this._cpuRequestsSaturation;
  }
  public putCpuRequestsSaturation(value: K8SClusterAnomaliesCpuRequestsSaturation) {
    this._cpuRequestsSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestsSaturationInput() {
    return this._cpuRequestsSaturation.internalValue;
  }

  // memory_requests_saturation - computed: false, optional: false, required: true
  private _memoryRequestsSaturation = new K8SClusterAnomaliesMemoryRequestsSaturationOutputReference(this, "memory_requests_saturation");
  public get memoryRequestsSaturation() {
    return this._memoryRequestsSaturation;
  }
  public putMemoryRequestsSaturation(value: K8SClusterAnomaliesMemoryRequestsSaturation) {
    this._memoryRequestsSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestsSaturationInput() {
    return this._memoryRequestsSaturation.internalValue;
  }

  // monitoring_issues - computed: false, optional: false, required: true
  private _monitoringIssues = new K8SClusterAnomaliesMonitoringIssuesOutputReference(this, "monitoring_issues");
  public get monitoringIssues() {
    return this._monitoringIssues;
  }
  public putMonitoringIssues(value: K8SClusterAnomaliesMonitoringIssues) {
    this._monitoringIssues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIssuesInput() {
    return this._monitoringIssues.internalValue;
  }

  // pods_saturation - computed: false, optional: false, required: true
  private _podsSaturation = new K8SClusterAnomaliesPodsSaturationOutputReference(this, "pods_saturation");
  public get podsSaturation() {
    return this._podsSaturation;
  }
  public putPodsSaturation(value: K8SClusterAnomaliesPodsSaturation) {
    this._podsSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsSaturationInput() {
    return this._podsSaturation.internalValue;
  }

  // readiness_issues - computed: false, optional: false, required: true
  private _readinessIssues = new K8SClusterAnomaliesReadinessIssuesOutputReference(this, "readiness_issues");
  public get readinessIssues() {
    return this._readinessIssues;
  }
  public putReadinessIssues(value: K8SClusterAnomaliesReadinessIssues) {
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
      cpu_requests_saturation: k8SClusterAnomaliesCpuRequestsSaturationToTerraform(this._cpuRequestsSaturation.internalValue),
      memory_requests_saturation: k8SClusterAnomaliesMemoryRequestsSaturationToTerraform(this._memoryRequestsSaturation.internalValue),
      monitoring_issues: k8SClusterAnomaliesMonitoringIssuesToTerraform(this._monitoringIssues.internalValue),
      pods_saturation: k8SClusterAnomaliesPodsSaturationToTerraform(this._podsSaturation.internalValue),
      readiness_issues: k8SClusterAnomaliesReadinessIssuesToTerraform(this._readinessIssues.internalValue),
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
        value: k8SClusterAnomaliesCpuRequestsSaturationToHclTerraform(this._cpuRequestsSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterAnomaliesCpuRequestsSaturationList",
      },
      memory_requests_saturation: {
        value: k8SClusterAnomaliesMemoryRequestsSaturationToHclTerraform(this._memoryRequestsSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterAnomaliesMemoryRequestsSaturationList",
      },
      monitoring_issues: {
        value: k8SClusterAnomaliesMonitoringIssuesToHclTerraform(this._monitoringIssues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterAnomaliesMonitoringIssuesList",
      },
      pods_saturation: {
        value: k8SClusterAnomaliesPodsSaturationToHclTerraform(this._podsSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterAnomaliesPodsSaturationList",
      },
      readiness_issues: {
        value: k8SClusterAnomaliesReadinessIssuesToHclTerraform(this._readinessIssues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterAnomaliesReadinessIssuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
