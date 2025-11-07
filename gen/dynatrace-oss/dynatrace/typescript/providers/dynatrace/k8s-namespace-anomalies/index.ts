// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SNamespaceAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#id K8SNamespaceAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#scope K8SNamespaceAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * cpu_limits_quota_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#cpu_limits_quota_saturation K8SNamespaceAnomalies#cpu_limits_quota_saturation}
  */
  readonly cpuLimitsQuotaSaturation: K8SNamespaceAnomaliesCpuLimitsQuotaSaturation;
  /**
  * cpu_requests_quota_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#cpu_requests_quota_saturation K8SNamespaceAnomalies#cpu_requests_quota_saturation}
  */
  readonly cpuRequestsQuotaSaturation: K8SNamespaceAnomaliesCpuRequestsQuotaSaturation;
  /**
  * memory_limits_quota_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#memory_limits_quota_saturation K8SNamespaceAnomalies#memory_limits_quota_saturation}
  */
  readonly memoryLimitsQuotaSaturation: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation;
  /**
  * memory_requests_quota_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#memory_requests_quota_saturation K8SNamespaceAnomalies#memory_requests_quota_saturation}
  */
  readonly memoryRequestsQuotaSaturation: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation;
  /**
  * pods_quota_saturation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#pods_quota_saturation K8SNamespaceAnomalies#pods_quota_saturation}
  */
  readonly podsQuotaSaturation: K8SNamespaceAnomaliesPodsQuotaSaturation;
}
export interface K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#observation_period_in_minutes K8SNamespaceAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of quota for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#sample_period_in_minutes K8SNamespaceAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of utilized namespace CPU is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#threshold K8SNamespaceAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationToTerraform(struct?: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration): any {
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


export function k8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationToHclTerraform(struct?: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration): any {
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

export class K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration | undefined) {
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
export interface K8SNamespaceAnomaliesCpuLimitsQuotaSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#enabled K8SNamespaceAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#configuration K8SNamespaceAnomalies#configuration}
  */
  readonly configuration?: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration;
}

export function k8SNamespaceAnomaliesCpuLimitsQuotaSaturationToTerraform(struct?: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationOutputReference | K8SNamespaceAnomaliesCpuLimitsQuotaSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNamespaceAnomaliesCpuLimitsQuotaSaturationToHclTerraform(struct?: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationOutputReference | K8SNamespaceAnomaliesCpuLimitsQuotaSaturation): any {
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
      value: k8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNamespaceAnomaliesCpuLimitsQuotaSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesCpuLimitsQuotaSaturation | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesCpuLimitsQuotaSaturation | undefined) {
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
  private _configuration = new K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNamespaceAnomaliesCpuLimitsQuotaSaturationConfiguration) {
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
export interface K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#observation_period_in_minutes K8SNamespaceAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of quota for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#sample_period_in_minutes K8SNamespaceAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of requested namespace CPU is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#threshold K8SNamespaceAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationToTerraform(struct?: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration): any {
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


export function k8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationToHclTerraform(struct?: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration): any {
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

export class K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration | undefined) {
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
export interface K8SNamespaceAnomaliesCpuRequestsQuotaSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#enabled K8SNamespaceAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#configuration K8SNamespaceAnomalies#configuration}
  */
  readonly configuration?: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration;
}

export function k8SNamespaceAnomaliesCpuRequestsQuotaSaturationToTerraform(struct?: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationOutputReference | K8SNamespaceAnomaliesCpuRequestsQuotaSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNamespaceAnomaliesCpuRequestsQuotaSaturationToHclTerraform(struct?: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationOutputReference | K8SNamespaceAnomaliesCpuRequestsQuotaSaturation): any {
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
      value: k8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNamespaceAnomaliesCpuRequestsQuotaSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesCpuRequestsQuotaSaturation | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesCpuRequestsQuotaSaturation | undefined) {
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
  private _configuration = new K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNamespaceAnomaliesCpuRequestsQuotaSaturationConfiguration) {
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
export interface K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#observation_period_in_minutes K8SNamespaceAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of quota for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#sample_period_in_minutes K8SNamespaceAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of utilized namespace memory is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#threshold K8SNamespaceAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationToTerraform(struct?: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration): any {
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


export function k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationToHclTerraform(struct?: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration): any {
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

export class K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration | undefined) {
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
export interface K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#enabled K8SNamespaceAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#configuration K8SNamespaceAnomalies#configuration}
  */
  readonly configuration?: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration;
}

export function k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationToTerraform(struct?: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationOutputReference | K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationToHclTerraform(struct?: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationOutputReference | K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation): any {
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
      value: k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation | undefined) {
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
  private _configuration = new K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationConfiguration) {
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
export interface K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#observation_period_in_minutes K8SNamespaceAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of quota for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#sample_period_in_minutes K8SNamespaceAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * amount of requested namespace memory is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#threshold K8SNamespaceAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationToTerraform(struct?: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration): any {
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


export function k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationToHclTerraform(struct?: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration): any {
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

export class K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration | undefined) {
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
export interface K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#enabled K8SNamespaceAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#configuration K8SNamespaceAnomalies#configuration}
  */
  readonly configuration?: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration;
}

export function k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationToTerraform(struct?: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationOutputReference | K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationToHclTerraform(struct?: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationOutputReference | K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation): any {
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
      value: k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation | undefined) {
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
  private _configuration = new K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationConfiguration) {
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
export interface K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#observation_period_in_minutes K8SNamespaceAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * of quota for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#sample_period_in_minutes K8SNamespaceAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * number of utilized namespace pods is above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#threshold K8SNamespaceAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SNamespaceAnomaliesPodsQuotaSaturationConfigurationToTerraform(struct?: K8SNamespaceAnomaliesPodsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration): any {
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


export function k8SNamespaceAnomaliesPodsQuotaSaturationConfigurationToHclTerraform(struct?: K8SNamespaceAnomaliesPodsQuotaSaturationConfigurationOutputReference | K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration): any {
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

export class K8SNamespaceAnomaliesPodsQuotaSaturationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration | undefined) {
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
export interface K8SNamespaceAnomaliesPodsQuotaSaturation {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#enabled K8SNamespaceAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#configuration K8SNamespaceAnomalies#configuration}
  */
  readonly configuration?: K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration;
}

export function k8SNamespaceAnomaliesPodsQuotaSaturationToTerraform(struct?: K8SNamespaceAnomaliesPodsQuotaSaturationOutputReference | K8SNamespaceAnomaliesPodsQuotaSaturation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SNamespaceAnomaliesPodsQuotaSaturationConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SNamespaceAnomaliesPodsQuotaSaturationToHclTerraform(struct?: K8SNamespaceAnomaliesPodsQuotaSaturationOutputReference | K8SNamespaceAnomaliesPodsQuotaSaturation): any {
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
      value: k8SNamespaceAnomaliesPodsQuotaSaturationConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SNamespaceAnomaliesPodsQuotaSaturationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNamespaceAnomaliesPodsQuotaSaturationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNamespaceAnomaliesPodsQuotaSaturation | undefined {
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

  public set internalValue(value: K8SNamespaceAnomaliesPodsQuotaSaturation | undefined) {
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
  private _configuration = new K8SNamespaceAnomaliesPodsQuotaSaturationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SNamespaceAnomaliesPodsQuotaSaturationConfiguration) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies dynatrace_k8s_namespace_anomalies}
*/
export class K8SNamespaceAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_namespace_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SNamespaceAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SNamespaceAnomalies to import
  * @param importFromId The id of the existing K8SNamespaceAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SNamespaceAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_namespace_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_namespace_anomalies dynatrace_k8s_namespace_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SNamespaceAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: K8SNamespaceAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_namespace_anomalies',
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
    this._cpuLimitsQuotaSaturation.internalValue = config.cpuLimitsQuotaSaturation;
    this._cpuRequestsQuotaSaturation.internalValue = config.cpuRequestsQuotaSaturation;
    this._memoryLimitsQuotaSaturation.internalValue = config.memoryLimitsQuotaSaturation;
    this._memoryRequestsQuotaSaturation.internalValue = config.memoryRequestsQuotaSaturation;
    this._podsQuotaSaturation.internalValue = config.podsQuotaSaturation;
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

  // cpu_limits_quota_saturation - computed: false, optional: false, required: true
  private _cpuLimitsQuotaSaturation = new K8SNamespaceAnomaliesCpuLimitsQuotaSaturationOutputReference(this, "cpu_limits_quota_saturation");
  public get cpuLimitsQuotaSaturation() {
    return this._cpuLimitsQuotaSaturation;
  }
  public putCpuLimitsQuotaSaturation(value: K8SNamespaceAnomaliesCpuLimitsQuotaSaturation) {
    this._cpuLimitsQuotaSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitsQuotaSaturationInput() {
    return this._cpuLimitsQuotaSaturation.internalValue;
  }

  // cpu_requests_quota_saturation - computed: false, optional: false, required: true
  private _cpuRequestsQuotaSaturation = new K8SNamespaceAnomaliesCpuRequestsQuotaSaturationOutputReference(this, "cpu_requests_quota_saturation");
  public get cpuRequestsQuotaSaturation() {
    return this._cpuRequestsQuotaSaturation;
  }
  public putCpuRequestsQuotaSaturation(value: K8SNamespaceAnomaliesCpuRequestsQuotaSaturation) {
    this._cpuRequestsQuotaSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestsQuotaSaturationInput() {
    return this._cpuRequestsQuotaSaturation.internalValue;
  }

  // memory_limits_quota_saturation - computed: false, optional: false, required: true
  private _memoryLimitsQuotaSaturation = new K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationOutputReference(this, "memory_limits_quota_saturation");
  public get memoryLimitsQuotaSaturation() {
    return this._memoryLimitsQuotaSaturation;
  }
  public putMemoryLimitsQuotaSaturation(value: K8SNamespaceAnomaliesMemoryLimitsQuotaSaturation) {
    this._memoryLimitsQuotaSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitsQuotaSaturationInput() {
    return this._memoryLimitsQuotaSaturation.internalValue;
  }

  // memory_requests_quota_saturation - computed: false, optional: false, required: true
  private _memoryRequestsQuotaSaturation = new K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationOutputReference(this, "memory_requests_quota_saturation");
  public get memoryRequestsQuotaSaturation() {
    return this._memoryRequestsQuotaSaturation;
  }
  public putMemoryRequestsQuotaSaturation(value: K8SNamespaceAnomaliesMemoryRequestsQuotaSaturation) {
    this._memoryRequestsQuotaSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestsQuotaSaturationInput() {
    return this._memoryRequestsQuotaSaturation.internalValue;
  }

  // pods_quota_saturation - computed: false, optional: false, required: true
  private _podsQuotaSaturation = new K8SNamespaceAnomaliesPodsQuotaSaturationOutputReference(this, "pods_quota_saturation");
  public get podsQuotaSaturation() {
    return this._podsQuotaSaturation;
  }
  public putPodsQuotaSaturation(value: K8SNamespaceAnomaliesPodsQuotaSaturation) {
    this._podsQuotaSaturation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsQuotaSaturationInput() {
    return this._podsQuotaSaturation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      cpu_limits_quota_saturation: k8SNamespaceAnomaliesCpuLimitsQuotaSaturationToTerraform(this._cpuLimitsQuotaSaturation.internalValue),
      cpu_requests_quota_saturation: k8SNamespaceAnomaliesCpuRequestsQuotaSaturationToTerraform(this._cpuRequestsQuotaSaturation.internalValue),
      memory_limits_quota_saturation: k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationToTerraform(this._memoryLimitsQuotaSaturation.internalValue),
      memory_requests_quota_saturation: k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationToTerraform(this._memoryRequestsQuotaSaturation.internalValue),
      pods_quota_saturation: k8SNamespaceAnomaliesPodsQuotaSaturationToTerraform(this._podsQuotaSaturation.internalValue),
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
      cpu_limits_quota_saturation: {
        value: k8SNamespaceAnomaliesCpuLimitsQuotaSaturationToHclTerraform(this._cpuLimitsQuotaSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNamespaceAnomaliesCpuLimitsQuotaSaturationList",
      },
      cpu_requests_quota_saturation: {
        value: k8SNamespaceAnomaliesCpuRequestsQuotaSaturationToHclTerraform(this._cpuRequestsQuotaSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNamespaceAnomaliesCpuRequestsQuotaSaturationList",
      },
      memory_limits_quota_saturation: {
        value: k8SNamespaceAnomaliesMemoryLimitsQuotaSaturationToHclTerraform(this._memoryLimitsQuotaSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNamespaceAnomaliesMemoryLimitsQuotaSaturationList",
      },
      memory_requests_quota_saturation: {
        value: k8SNamespaceAnomaliesMemoryRequestsQuotaSaturationToHclTerraform(this._memoryRequestsQuotaSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNamespaceAnomaliesMemoryRequestsQuotaSaturationList",
      },
      pods_quota_saturation: {
        value: k8SNamespaceAnomaliesPodsQuotaSaturationToHclTerraform(this._podsQuotaSaturation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNamespaceAnomaliesPodsQuotaSaturationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
