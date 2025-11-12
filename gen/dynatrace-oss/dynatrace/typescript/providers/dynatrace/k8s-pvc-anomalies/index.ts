// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SPvcAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#id K8SPvcAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#scope K8SPvcAnomalies#scope}
  */
  readonly scope?: string;
  /**
  * low_disk_space_critical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#low_disk_space_critical K8SPvcAnomalies#low_disk_space_critical}
  */
  readonly lowDiskSpaceCritical: K8SPvcAnomaliesLowDiskSpaceCritical;
  /**
  * low_disk_space_critical_percentage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#low_disk_space_critical_percentage K8SPvcAnomalies#low_disk_space_critical_percentage}
  */
  readonly lowDiskSpaceCriticalPercentage: K8SPvcAnomaliesLowDiskSpaceCriticalPercentage;
}
export interface K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#observation_period_in_minutes K8SPvcAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#sample_period_in_minutes K8SPvcAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * the available disk space is below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#threshold K8SPvcAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SPvcAnomaliesLowDiskSpaceCriticalConfigurationToTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalConfigurationOutputReference | K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration): any {
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


export function k8SPvcAnomaliesLowDiskSpaceCriticalConfigurationToHclTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalConfigurationOutputReference | K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration): any {
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

export class K8SPvcAnomaliesLowDiskSpaceCriticalConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration | undefined {
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

  public set internalValue(value: K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration | undefined) {
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
export interface K8SPvcAnomaliesLowDiskSpaceCritical {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#enabled K8SPvcAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#configuration K8SPvcAnomalies#configuration}
  */
  readonly configuration?: K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration;
}

export function k8SPvcAnomaliesLowDiskSpaceCriticalToTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalOutputReference | K8SPvcAnomaliesLowDiskSpaceCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SPvcAnomaliesLowDiskSpaceCriticalConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SPvcAnomaliesLowDiskSpaceCriticalToHclTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalOutputReference | K8SPvcAnomaliesLowDiskSpaceCritical): any {
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
      value: k8SPvcAnomaliesLowDiskSpaceCriticalConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPvcAnomaliesLowDiskSpaceCriticalConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPvcAnomaliesLowDiskSpaceCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPvcAnomaliesLowDiskSpaceCritical | undefined {
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

  public set internalValue(value: K8SPvcAnomaliesLowDiskSpaceCritical | undefined) {
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
  private _configuration = new K8SPvcAnomaliesLowDiskSpaceCriticalConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SPvcAnomaliesLowDiskSpaceCriticalConfiguration) {
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
export interface K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration {
  /**
  * within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#observation_period_in_minutes K8SPvcAnomalies#observation_period_in_minutes}
  */
  readonly observationPeriodInMinutes: number;
  /**
  * for at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#sample_period_in_minutes K8SPvcAnomalies#sample_period_in_minutes}
  */
  readonly samplePeriodInMinutes: number;
  /**
  * the available disk space is below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#threshold K8SPvcAnomalies#threshold}
  */
  readonly threshold: number;
}

export function k8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationToTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationOutputReference | K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration): any {
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


export function k8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationToHclTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationOutputReference | K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration): any {
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

export class K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration | undefined {
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

  public set internalValue(value: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration | undefined) {
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
export interface K8SPvcAnomaliesLowDiskSpaceCriticalPercentage {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#enabled K8SPvcAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#configuration K8SPvcAnomalies#configuration}
  */
  readonly configuration?: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration;
}

export function k8SPvcAnomaliesLowDiskSpaceCriticalPercentageToTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageOutputReference | K8SPvcAnomaliesLowDiskSpaceCriticalPercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: k8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationToTerraform(struct!.configuration),
  }
}


export function k8SPvcAnomaliesLowDiskSpaceCriticalPercentageToHclTerraform(struct?: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageOutputReference | K8SPvcAnomaliesLowDiskSpaceCriticalPercentage): any {
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
      value: k8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPvcAnomaliesLowDiskSpaceCriticalPercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPvcAnomaliesLowDiskSpaceCriticalPercentage | undefined {
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

  public set internalValue(value: K8SPvcAnomaliesLowDiskSpaceCriticalPercentage | undefined) {
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
  private _configuration = new K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: K8SPvcAnomaliesLowDiskSpaceCriticalPercentageConfiguration) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies dynatrace_k8s_pvc_anomalies}
*/
export class K8SPvcAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_pvc_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SPvcAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SPvcAnomalies to import
  * @param importFromId The id of the existing K8SPvcAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SPvcAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_pvc_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_pvc_anomalies dynatrace_k8s_pvc_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SPvcAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: K8SPvcAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_pvc_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._lowDiskSpaceCritical.internalValue = config.lowDiskSpaceCritical;
    this._lowDiskSpaceCriticalPercentage.internalValue = config.lowDiskSpaceCriticalPercentage;
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

  // low_disk_space_critical - computed: false, optional: false, required: true
  private _lowDiskSpaceCritical = new K8SPvcAnomaliesLowDiskSpaceCriticalOutputReference(this, "low_disk_space_critical");
  public get lowDiskSpaceCritical() {
    return this._lowDiskSpaceCritical;
  }
  public putLowDiskSpaceCritical(value: K8SPvcAnomaliesLowDiskSpaceCritical) {
    this._lowDiskSpaceCritical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowDiskSpaceCriticalInput() {
    return this._lowDiskSpaceCritical.internalValue;
  }

  // low_disk_space_critical_percentage - computed: false, optional: false, required: true
  private _lowDiskSpaceCriticalPercentage = new K8SPvcAnomaliesLowDiskSpaceCriticalPercentageOutputReference(this, "low_disk_space_critical_percentage");
  public get lowDiskSpaceCriticalPercentage() {
    return this._lowDiskSpaceCriticalPercentage;
  }
  public putLowDiskSpaceCriticalPercentage(value: K8SPvcAnomaliesLowDiskSpaceCriticalPercentage) {
    this._lowDiskSpaceCriticalPercentage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowDiskSpaceCriticalPercentageInput() {
    return this._lowDiskSpaceCriticalPercentage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      low_disk_space_critical: k8SPvcAnomaliesLowDiskSpaceCriticalToTerraform(this._lowDiskSpaceCritical.internalValue),
      low_disk_space_critical_percentage: k8SPvcAnomaliesLowDiskSpaceCriticalPercentageToTerraform(this._lowDiskSpaceCriticalPercentage.internalValue),
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
      low_disk_space_critical: {
        value: k8SPvcAnomaliesLowDiskSpaceCriticalToHclTerraform(this._lowDiskSpaceCritical.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SPvcAnomaliesLowDiskSpaceCriticalList",
      },
      low_disk_space_critical_percentage: {
        value: k8SPvcAnomaliesLowDiskSpaceCriticalPercentageToHclTerraform(this._lowDiskSpaceCriticalPercentage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SPvcAnomaliesLowDiskSpaceCriticalPercentageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
