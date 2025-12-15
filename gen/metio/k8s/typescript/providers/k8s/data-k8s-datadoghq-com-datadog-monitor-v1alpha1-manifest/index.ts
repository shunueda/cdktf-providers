// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#metadata DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata;
  /**
  * DatadogMonitorSpec defines the desired state of DatadogMonitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#spec DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec;
}
export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#annotations DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#labels DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#name DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#namespace DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions {
  /**
  * DisableRequiredTags disables the automatic addition of required tags to monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#disable_required_tags DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#disable_required_tags}
  */
  readonly disableRequiredTags?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptionsToTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_required_tags: cdktf.booleanToTerraform(struct!.disableRequiredTags),
  }
}


export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptionsToHclTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_required_tags: {
      value: cdktf.booleanToHclTerraform(struct!.disableRequiredTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRequiredTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRequiredTags = this._disableRequiredTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableRequiredTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableRequiredTags = value.disableRequiredTags;
    }
  }

  // disable_required_tags - computed: false, optional: true, required: false
  private _disableRequiredTags?: boolean | cdktf.IResolvable; 
  public get disableRequiredTags() {
    return this.getBooleanAttribute('disable_required_tags');
  }
  public set disableRequiredTags(value: boolean | cdktf.IResolvable) {
    this._disableRequiredTags = value;
  }
  public resetDisableRequiredTags() {
    this._disableRequiredTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRequiredTagsInput() {
    return this._disableRequiredTags;
  }
}
export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows {
  /**
  * Describes how long an anomalous metric must be normal before the alert recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#recovery_window DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#recovery_window}
  */
  readonly recoveryWindow?: string;
  /**
  * Describes how long a metric must be anomalous before an alert triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#trigger_window DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#trigger_window}
  */
  readonly triggerWindow?: string;
}

export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindowsToTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window: cdktf.stringToTerraform(struct!.recoveryWindow),
    trigger_window: cdktf.stringToTerraform(struct!.triggerWindow),
  }
}


export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindowsToHclTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_window: {
      value: cdktf.stringToHclTerraform(struct!.recoveryWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_window: {
      value: cdktf.stringToHclTerraform(struct!.triggerWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindow = this._recoveryWindow;
    }
    if (this._triggerWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerWindow = this._triggerWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recoveryWindow = undefined;
      this._triggerWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recoveryWindow = value.recoveryWindow;
      this._triggerWindow = value.triggerWindow;
    }
  }

  // recovery_window - computed: false, optional: true, required: false
  private _recoveryWindow?: string; 
  public get recoveryWindow() {
    return this.getStringAttribute('recovery_window');
  }
  public set recoveryWindow(value: string) {
    this._recoveryWindow = value;
  }
  public resetRecoveryWindow() {
    this._recoveryWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInput() {
    return this._recoveryWindow;
  }

  // trigger_window - computed: false, optional: true, required: false
  private _triggerWindow?: string; 
  public get triggerWindow() {
    return this.getStringAttribute('trigger_window');
  }
  public set triggerWindow(value: string) {
    this._triggerWindow = value;
  }
  public resetTriggerWindow() {
    this._triggerWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWindowInput() {
    return this._triggerWindow;
  }
}
export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds {
  /**
  * The monitor CRITICAL threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#critical DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#critical}
  */
  readonly critical?: string;
  /**
  * The monitor CRITICAL recovery threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#critical_recovery DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#critical_recovery}
  */
  readonly criticalRecovery?: string;
  /**
  * The monitor OK threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#ok DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#ok}
  */
  readonly ok?: string;
  /**
  * The monitor UNKNOWN threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#unknown DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#unknown}
  */
  readonly unknown?: string;
  /**
  * The monitor WARNING threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#warning DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#warning}
  */
  readonly warning?: string;
  /**
  * The monitor WARNING recovery threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#warning_recovery DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#warning_recovery}
  */
  readonly warningRecovery?: string;
}

export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdsToTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.stringToTerraform(struct!.critical),
    critical_recovery: cdktf.stringToTerraform(struct!.criticalRecovery),
    ok: cdktf.stringToTerraform(struct!.ok),
    unknown: cdktf.stringToTerraform(struct!.unknown),
    warning: cdktf.stringToTerraform(struct!.warning),
    warning_recovery: cdktf.stringToTerraform(struct!.warningRecovery),
  }
}


export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdsToHclTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_recovery: {
      value: cdktf.stringToHclTerraform(struct!.criticalRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ok: {
      value: cdktf.stringToHclTerraform(struct!.ok),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown: {
      value: cdktf.stringToHclTerraform(struct!.unknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktf.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_recovery: {
      value: cdktf.stringToHclTerraform(struct!.warningRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._criticalRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalRecovery = this._criticalRecovery;
    }
    if (this._ok !== undefined) {
      hasAnyValues = true;
      internalValueResult.ok = this._ok;
    }
    if (this._unknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknown = this._unknown;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRecovery = this._warningRecovery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._criticalRecovery = undefined;
      this._ok = undefined;
      this._unknown = undefined;
      this._warning = undefined;
      this._warningRecovery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._criticalRecovery = value.criticalRecovery;
      this._ok = value.ok;
      this._unknown = value.unknown;
      this._warning = value.warning;
      this._warningRecovery = value.warningRecovery;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // critical_recovery - computed: false, optional: true, required: false
  private _criticalRecovery?: string; 
  public get criticalRecovery() {
    return this.getStringAttribute('critical_recovery');
  }
  public set criticalRecovery(value: string) {
    this._criticalRecovery = value;
  }
  public resetCriticalRecovery() {
    this._criticalRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalRecoveryInput() {
    return this._criticalRecovery;
  }

  // ok - computed: false, optional: true, required: false
  private _ok?: string; 
  public get ok() {
    return this.getStringAttribute('ok');
  }
  public set ok(value: string) {
    this._ok = value;
  }
  public resetOk() {
    this._ok = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okInput() {
    return this._ok;
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown?: string; 
  public get unknown() {
    return this.getStringAttribute('unknown');
  }
  public set unknown(value: string) {
    this._unknown = value;
  }
  public resetUnknown() {
    this._unknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_recovery - computed: false, optional: true, required: false
  private _warningRecovery?: string; 
  public get warningRecovery() {
    return this.getStringAttribute('warning_recovery');
  }
  public set warningRecovery(value: string) {
    this._warningRecovery = value;
  }
  public resetWarningRecovery() {
    this._warningRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRecoveryInput() {
    return this._warningRecovery;
  }
}
export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions {
  /**
  * A Boolean indicating whether to send a log sample when the log monitor triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#enable_logs_sample DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#enable_logs_sample}
  */
  readonly enableLogsSample?: boolean | cdktf.IResolvable;
  /**
  * A message to include with a re-notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#escalation_message DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * Time (in seconds) to delay evaluation, as a non-negative integer. For example, if the value is set to 300 (5min), the timeframe is set to last_5m and the time is 7:00, the monitor evaluates data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor always has data during evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#evaluation_delay DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#evaluation_delay}
  */
  readonly evaluationDelay?: number;
  /**
  * A Boolean indicating whether the log alert monitor triggers a single alert or multiple alerts when any group breaches a threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#groupby_simple_monitor DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#groupby_simple_monitor}
  */
  readonly groupbySimpleMonitor?: boolean | cdktf.IResolvable;
  /**
  * A Boolean indicating whether notifications from this monitor automatically inserts its triggering tags into the title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#include_tags DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#include_tags}
  */
  readonly includeTags?: boolean | cdktf.IResolvable;
  /**
  * DEPRECATED: Whether or not the monitor is locked (only editable by creator and admins). Use 'restricted_roles' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#locked DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non negative integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#new_group_delay DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#new_group_delay}
  */
  readonly newGroupDelay?: number;
  /**
  * The number of minutes before a monitor notifies after data stops reporting. Datadog recommends at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. If omitted, 2x the evaluation timeframe is used for metric alerts, and 24 hours is used for service checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#no_data_timeframe DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#no_data_timeframe}
  */
  readonly noDataTimeframe?: number;
  /**
  * An enum that toggles the display of additional content sent in the monitor notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#notification_preset_name DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#notification_preset_name}
  */
  readonly notificationPresetName?: string;
  /**
  * A Boolean indicating whether tagged users are notified on changes to this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#notify_audit DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#notify_audit}
  */
  readonly notifyAudit?: boolean | cdktf.IResolvable;
  /**
  * A string indicating the granularity a monitor alerts on. Only available for monitors with groupings. For instance, a monitor grouped by cluster, namespace, and pod can be configured to only notify on each new cluster violating the alert conditions by setting notify_by to ['cluster']. Tags mentioned in notify_by must be a subset of the grouping tags in the query. For example, a query grouped by cluster and namespace cannot notify on region. Setting notify_by to [*] configures the monitor to notify as a simple-alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#notify_by DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#notify_by}
  */
  readonly notifyBy?: string[];
  /**
  * A Boolean indicating whether this monitor notifies when data stops reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#notify_no_data DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#notify_no_data}
  */
  readonly notifyNoData?: boolean | cdktf.IResolvable;
  /**
  * An enum that controls how groups or monitors are treated if an evaluation does not return data points. The default option results in different behavior depending on the monitor query type. For monitors using Count queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than Count, for example Gauge, Measure, or Rate, the monitor shows the last known status. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#on_missing_data DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#on_missing_data}
  */
  readonly onMissingData?: string;
  /**
  * The number of minutes after the last notification before a monitor re-notifies on the current status. It only re-notifies if it’s not resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#renotify_interval DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of times re-notification messages should be sent on the current status at the provided re-notification interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#renotify_occurrences DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
  /**
  * The types of statuses for which re-notification messages should be sent. Valid values are alert, warn, no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#renotify_statuses DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#renotify_statuses}
  */
  readonly renotifyStatuses?: string[];
  /**
  * A Boolean indicating whether this monitor needs a full window of data before it’s evaluated. We highly recommend you set this to false for sparse metrics, otherwise some evaluations are skipped. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#require_full_window DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#require_full_window}
  */
  readonly requireFullWindow?: boolean | cdktf.IResolvable;
  /**
  * A struct of the alerting time window options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#threshold_windows DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#threshold_windows}
  */
  readonly thresholdWindows?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows;
  /**
  * A struct of the different monitor threshold values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#thresholds DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#thresholds}
  */
  readonly thresholds?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds;
  /**
  * The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#timeout_h DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#timeout_h}
  */
  readonly timeoutH?: number;
}

export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsToTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_logs_sample: cdktf.booleanToTerraform(struct!.enableLogsSample),
    escalation_message: cdktf.stringToTerraform(struct!.escalationMessage),
    evaluation_delay: cdktf.numberToTerraform(struct!.evaluationDelay),
    groupby_simple_monitor: cdktf.booleanToTerraform(struct!.groupbySimpleMonitor),
    include_tags: cdktf.booleanToTerraform(struct!.includeTags),
    locked: cdktf.booleanToTerraform(struct!.locked),
    new_group_delay: cdktf.numberToTerraform(struct!.newGroupDelay),
    no_data_timeframe: cdktf.numberToTerraform(struct!.noDataTimeframe),
    notification_preset_name: cdktf.stringToTerraform(struct!.notificationPresetName),
    notify_audit: cdktf.booleanToTerraform(struct!.notifyAudit),
    notify_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyBy),
    notify_no_data: cdktf.booleanToTerraform(struct!.notifyNoData),
    on_missing_data: cdktf.stringToTerraform(struct!.onMissingData),
    renotify_interval: cdktf.numberToTerraform(struct!.renotifyInterval),
    renotify_occurrences: cdktf.numberToTerraform(struct!.renotifyOccurrences),
    renotify_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.renotifyStatuses),
    require_full_window: cdktf.booleanToTerraform(struct!.requireFullWindow),
    threshold_windows: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindowsToTerraform(struct!.thresholdWindows),
    thresholds: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdsToTerraform(struct!.thresholds),
    timeout_h: cdktf.numberToTerraform(struct!.timeoutH),
  }
}


export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsToHclTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_logs_sample: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogsSample),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    escalation_message: {
      value: cdktf.stringToHclTerraform(struct!.escalationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.evaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groupby_simple_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.groupbySimpleMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_tags: {
      value: cdktf.booleanToHclTerraform(struct!.includeTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    new_group_delay: {
      value: cdktf.numberToHclTerraform(struct!.newGroupDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_data_timeframe: {
      value: cdktf.numberToHclTerraform(struct!.noDataTimeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_preset_name: {
      value: cdktf.stringToHclTerraform(struct!.notificationPresetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_audit: {
      value: cdktf.booleanToHclTerraform(struct!.notifyAudit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notify_no_data: {
      value: cdktf.booleanToHclTerraform(struct!.notifyNoData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_missing_data: {
      value: cdktf.stringToHclTerraform(struct!.onMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renotify_interval: {
      value: cdktf.numberToHclTerraform(struct!.renotifyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renotify_occurrences: {
      value: cdktf.numberToHclTerraform(struct!.renotifyOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renotify_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.renotifyStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    require_full_window: {
      value: cdktf.booleanToHclTerraform(struct!.requireFullWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold_windows: {
      value: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindowsToHclTerraform(struct!.thresholdWindows),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows",
    },
    thresholds: {
      value: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds",
    },
    timeout_h: {
      value: cdktf.numberToHclTerraform(struct!.timeoutH),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLogsSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogsSample = this._enableLogsSample;
    }
    if (this._escalationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationMessage = this._escalationMessage;
    }
    if (this._evaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationDelay = this._evaluationDelay;
    }
    if (this._groupbySimpleMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupbySimpleMonitor = this._groupbySimpleMonitor;
    }
    if (this._includeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTags = this._includeTags;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._newGroupDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.newGroupDelay = this._newGroupDelay;
    }
    if (this._noDataTimeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDataTimeframe = this._noDataTimeframe;
    }
    if (this._notificationPresetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPresetName = this._notificationPresetName;
    }
    if (this._notifyAudit !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyAudit = this._notifyAudit;
    }
    if (this._notifyBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyBy = this._notifyBy;
    }
    if (this._notifyNoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyNoData = this._notifyNoData;
    }
    if (this._onMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMissingData = this._onMissingData;
    }
    if (this._renotifyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyInterval = this._renotifyInterval;
    }
    if (this._renotifyOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyOccurrences = this._renotifyOccurrences;
    }
    if (this._renotifyStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyStatuses = this._renotifyStatuses;
    }
    if (this._requireFullWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireFullWindow = this._requireFullWindow;
    }
    if (this._thresholdWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWindows = this._thresholdWindows?.internalValue;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    if (this._timeoutH !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutH = this._timeoutH;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableLogsSample = undefined;
      this._escalationMessage = undefined;
      this._evaluationDelay = undefined;
      this._groupbySimpleMonitor = undefined;
      this._includeTags = undefined;
      this._locked = undefined;
      this._newGroupDelay = undefined;
      this._noDataTimeframe = undefined;
      this._notificationPresetName = undefined;
      this._notifyAudit = undefined;
      this._notifyBy = undefined;
      this._notifyNoData = undefined;
      this._onMissingData = undefined;
      this._renotifyInterval = undefined;
      this._renotifyOccurrences = undefined;
      this._renotifyStatuses = undefined;
      this._requireFullWindow = undefined;
      this._thresholdWindows.internalValue = undefined;
      this._thresholds.internalValue = undefined;
      this._timeoutH = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableLogsSample = value.enableLogsSample;
      this._escalationMessage = value.escalationMessage;
      this._evaluationDelay = value.evaluationDelay;
      this._groupbySimpleMonitor = value.groupbySimpleMonitor;
      this._includeTags = value.includeTags;
      this._locked = value.locked;
      this._newGroupDelay = value.newGroupDelay;
      this._noDataTimeframe = value.noDataTimeframe;
      this._notificationPresetName = value.notificationPresetName;
      this._notifyAudit = value.notifyAudit;
      this._notifyBy = value.notifyBy;
      this._notifyNoData = value.notifyNoData;
      this._onMissingData = value.onMissingData;
      this._renotifyInterval = value.renotifyInterval;
      this._renotifyOccurrences = value.renotifyOccurrences;
      this._renotifyStatuses = value.renotifyStatuses;
      this._requireFullWindow = value.requireFullWindow;
      this._thresholdWindows.internalValue = value.thresholdWindows;
      this._thresholds.internalValue = value.thresholds;
      this._timeoutH = value.timeoutH;
    }
  }

  // enable_logs_sample - computed: false, optional: true, required: false
  private _enableLogsSample?: boolean | cdktf.IResolvable; 
  public get enableLogsSample() {
    return this.getBooleanAttribute('enable_logs_sample');
  }
  public set enableLogsSample(value: boolean | cdktf.IResolvable) {
    this._enableLogsSample = value;
  }
  public resetEnableLogsSample() {
    this._enableLogsSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogsSampleInput() {
    return this._enableLogsSample;
  }

  // escalation_message - computed: false, optional: true, required: false
  private _escalationMessage?: string; 
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }
  public set escalationMessage(value: string) {
    this._escalationMessage = value;
  }
  public resetEscalationMessage() {
    this._escalationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationMessageInput() {
    return this._escalationMessage;
  }

  // evaluation_delay - computed: false, optional: true, required: false
  private _evaluationDelay?: number; 
  public get evaluationDelay() {
    return this.getNumberAttribute('evaluation_delay');
  }
  public set evaluationDelay(value: number) {
    this._evaluationDelay = value;
  }
  public resetEvaluationDelay() {
    this._evaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDelayInput() {
    return this._evaluationDelay;
  }

  // groupby_simple_monitor - computed: false, optional: true, required: false
  private _groupbySimpleMonitor?: boolean | cdktf.IResolvable; 
  public get groupbySimpleMonitor() {
    return this.getBooleanAttribute('groupby_simple_monitor');
  }
  public set groupbySimpleMonitor(value: boolean | cdktf.IResolvable) {
    this._groupbySimpleMonitor = value;
  }
  public resetGroupbySimpleMonitor() {
    this._groupbySimpleMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupbySimpleMonitorInput() {
    return this._groupbySimpleMonitor;
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktf.IResolvable; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }
  public set includeTags(value: boolean | cdktf.IResolvable) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // new_group_delay - computed: false, optional: true, required: false
  private _newGroupDelay?: number; 
  public get newGroupDelay() {
    return this.getNumberAttribute('new_group_delay');
  }
  public set newGroupDelay(value: number) {
    this._newGroupDelay = value;
  }
  public resetNewGroupDelay() {
    this._newGroupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGroupDelayInput() {
    return this._newGroupDelay;
  }

  // no_data_timeframe - computed: false, optional: true, required: false
  private _noDataTimeframe?: number; 
  public get noDataTimeframe() {
    return this.getNumberAttribute('no_data_timeframe');
  }
  public set noDataTimeframe(value: number) {
    this._noDataTimeframe = value;
  }
  public resetNoDataTimeframe() {
    this._noDataTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataTimeframeInput() {
    return this._noDataTimeframe;
  }

  // notification_preset_name - computed: false, optional: true, required: false
  private _notificationPresetName?: string; 
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }
  public set notificationPresetName(value: string) {
    this._notificationPresetName = value;
  }
  public resetNotificationPresetName() {
    this._notificationPresetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPresetNameInput() {
    return this._notificationPresetName;
  }

  // notify_audit - computed: false, optional: true, required: false
  private _notifyAudit?: boolean | cdktf.IResolvable; 
  public get notifyAudit() {
    return this.getBooleanAttribute('notify_audit');
  }
  public set notifyAudit(value: boolean | cdktf.IResolvable) {
    this._notifyAudit = value;
  }
  public resetNotifyAudit() {
    this._notifyAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAuditInput() {
    return this._notifyAudit;
  }

  // notify_by - computed: false, optional: true, required: false
  private _notifyBy?: string[]; 
  public get notifyBy() {
    return this.getListAttribute('notify_by');
  }
  public set notifyBy(value: string[]) {
    this._notifyBy = value;
  }
  public resetNotifyBy() {
    this._notifyBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyByInput() {
    return this._notifyBy;
  }

  // notify_no_data - computed: false, optional: true, required: false
  private _notifyNoData?: boolean | cdktf.IResolvable; 
  public get notifyNoData() {
    return this.getBooleanAttribute('notify_no_data');
  }
  public set notifyNoData(value: boolean | cdktf.IResolvable) {
    this._notifyNoData = value;
  }
  public resetNotifyNoData() {
    this._notifyNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyNoDataInput() {
    return this._notifyNoData;
  }

  // on_missing_data - computed: false, optional: true, required: false
  private _onMissingData?: string; 
  public get onMissingData() {
    return this.getStringAttribute('on_missing_data');
  }
  public set onMissingData(value: string) {
    this._onMissingData = value;
  }
  public resetOnMissingData() {
    this._onMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMissingDataInput() {
    return this._onMissingData;
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }

  // renotify_occurrences - computed: false, optional: true, required: false
  private _renotifyOccurrences?: number; 
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
  public set renotifyOccurrences(value: number) {
    this._renotifyOccurrences = value;
  }
  public resetRenotifyOccurrences() {
    this._renotifyOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOccurrencesInput() {
    return this._renotifyOccurrences;
  }

  // renotify_statuses - computed: false, optional: true, required: false
  private _renotifyStatuses?: string[]; 
  public get renotifyStatuses() {
    return this.getListAttribute('renotify_statuses');
  }
  public set renotifyStatuses(value: string[]) {
    this._renotifyStatuses = value;
  }
  public resetRenotifyStatuses() {
    this._renotifyStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyStatusesInput() {
    return this._renotifyStatuses;
  }

  // require_full_window - computed: false, optional: true, required: false
  private _requireFullWindow?: boolean | cdktf.IResolvable; 
  public get requireFullWindow() {
    return this.getBooleanAttribute('require_full_window');
  }
  public set requireFullWindow(value: boolean | cdktf.IResolvable) {
    this._requireFullWindow = value;
  }
  public resetRequireFullWindow() {
    this._requireFullWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFullWindowInput() {
    return this._requireFullWindow;
  }

  // threshold_windows - computed: false, optional: true, required: false
  private _thresholdWindows = new DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindowsOutputReference(this, "threshold_windows");
  public get thresholdWindows() {
    return this._thresholdWindows;
  }
  public putThresholdWindows(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdWindows) {
    this._thresholdWindows.internalValue = value;
  }
  public resetThresholdWindows() {
    this._thresholdWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWindowsInput() {
    return this._thresholdWindows.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsThresholds) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // timeout_h - computed: false, optional: true, required: false
  private _timeoutH?: number; 
  public get timeoutH() {
    return this.getNumberAttribute('timeout_h');
  }
  public set timeoutH(value: number) {
    this._timeoutH = value;
  }
  public resetTimeoutH() {
    this._timeoutH = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutHInput() {
    return this._timeoutH;
  }
}
export interface DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec {
  /**
  * ControllerOptions are the optional parameters in the DatadogMonitor controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#controller_options DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#controller_options}
  */
  readonly controllerOptions?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions;
  /**
  * Message is a message to include with notifications for this monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#message DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#message}
  */
  readonly message?: string;
  /**
  * Name is the monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#name DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Options are the optional parameters associated with your monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#options DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#options}
  */
  readonly options?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions;
  /**
  * Priority is an integer from 1 (high) to 5 (low) indicating alert severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#priority DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Query is the Datadog monitor query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#query DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#query}
  */
  readonly query?: string;
  /**
  * RestrictedRoles is a list of unique role identifiers to define which roles are allowed to edit the monitor. 'restricted_roles' is the successor of 'locked'. For more information about 'locked' and 'restricted_roles', see the [monitor options docs](https://docs.datadoghq.com/monitors/guide/monitor_api_options/#permissions-options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#restricted_roles DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * Tags is the monitor tags associated with your monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#tags DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#tags}
  */
  readonly tags?: string[];
  /**
  * Type is the monitor type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#type DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_options: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptionsToTerraform(struct!.controllerOptions),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    options: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsToTerraform(struct!.options),
    priority: cdktf.numberToTerraform(struct!.priority),
    query: cdktf.stringToTerraform(struct!.query),
    restricted_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedRoles),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_options: {
      value: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptionsToHclTerraform(struct!.controllerOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restricted_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerOptions = this._controllerOptions?.internalValue;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._restrictedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedRoles = this._restrictedRoles;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerOptions.internalValue = undefined;
      this._message = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
      this._priority = undefined;
      this._query = undefined;
      this._restrictedRoles = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerOptions.internalValue = value.controllerOptions;
      this._message = value.message;
      this._name = value.name;
      this._options.internalValue = value.options;
      this._priority = value.priority;
      this._query = value.query;
      this._restrictedRoles = value.restrictedRoles;
      this._tags = value.tags;
      this._type = value.type;
    }
  }

  // controller_options - computed: false, optional: true, required: false
  private _controllerOptions = new DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptionsOutputReference(this, "controller_options");
  public get controllerOptions() {
    return this._controllerOptions;
  }
  public putControllerOptions(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecControllerOptions) {
    this._controllerOptions.internalValue = value;
  }
  public resetControllerOptions() {
    this._controllerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerOptionsInput() {
    return this._controllerOptions.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // restricted_roles - computed: false, optional: true, required: false
  private _restrictedRoles?: string[]; 
  public get restrictedRoles() {
    return this.getListAttribute('restricted_roles');
  }
  public set restrictedRoles(value: string[]) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest k8s_datadoghq_com_datadog_monitor_v1alpha1_manifest}
*/
export class DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_datadoghq_com_datadog_monitor_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDatadoghqComDatadogMonitorV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_datadoghq_com_datadog_monitor_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/datadoghq_com_datadog_monitor_v1alpha1_manifest k8s_datadoghq_com_datadog_monitor_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_datadoghq_com_datadog_monitor_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDatadoghqComDatadogMonitorV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
