// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#metadata DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#metadata}
  */
  readonly metadata: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata;
  /**
  * ServiceLevelSpec is the spec for a PrometheusServiceLevel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#spec DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#spec}
  */
  readonly spec?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec;
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#annotations DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#labels DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#name DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#namespace DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadataToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadataToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert {
  /**
  * Annotations are the Prometheus annotations for the specific alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#annotations DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Disable disables the alert and makes Sloth not generating this alert. This can be helpful for example to disable ticket(warning) alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#disable DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Labels are the Prometheus labels for the specific alert. For example can be useful to route the Page alert to specific Slack channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#labels DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlertToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable: cdktf.booleanToTerraform(struct!.disable),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlertToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert | cdktf.IResolvable): any {
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
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._disable = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._disable = value.disable;
      this._labels = value.labels;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert {
  /**
  * Annotations are the Prometheus annotations for the specific alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#annotations DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Disable disables the alert and makes Sloth not generating this alert. This can be helpful for example to disable ticket(warning) alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#disable DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Labels are the Prometheus labels for the specific alert. For example can be useful to route the Page alert to specific Slack channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#labels DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlertToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable: cdktf.booleanToTerraform(struct!.disable),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlertToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert | cdktf.IResolvable): any {
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
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._disable = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._disable = value.disable;
      this._labels = value.labels;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting {
  /**
  * Annotations are the Prometheus annotations that will have all the alerts generated by this SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#annotations DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels are the Prometheus labels that will have all the alerts generated by this SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#labels DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name is the name used by the alerts generated for this SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#name DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Page alert refers to the critical alert (check multiwindow-multiburn alerts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#page_alert DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#page_alert}
  */
  readonly pageAlert?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert;
  /**
  * TicketAlert alert refers to the warning alert (check multiwindow-multiburn alerts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#ticket_alert DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#ticket_alert}
  */
  readonly ticketAlert?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    page_alert: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlertToTerraform(struct!.pageAlert),
    ticket_alert: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlertToTerraform(struct!.ticketAlert),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting | cdktf.IResolvable): any {
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
    page_alert: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlertToHclTerraform(struct!.pageAlert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert",
    },
    ticket_alert: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlertToHclTerraform(struct!.ticketAlert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting | cdktf.IResolvable | undefined {
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
    if (this._pageAlert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageAlert = this._pageAlert?.internalValue;
    }
    if (this._ticketAlert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketAlert = this._ticketAlert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._pageAlert.internalValue = undefined;
      this._ticketAlert.internalValue = undefined;
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
      this._pageAlert.internalValue = value.pageAlert;
      this._ticketAlert.internalValue = value.ticketAlert;
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

  // page_alert - computed: false, optional: true, required: false
  private _pageAlert = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlertOutputReference(this, "page_alert");
  public get pageAlert() {
    return this._pageAlert;
  }
  public putPageAlert(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingPageAlert) {
    this._pageAlert.internalValue = value;
  }
  public resetPageAlert() {
    this._pageAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageAlertInput() {
    return this._pageAlert.internalValue;
  }

  // ticket_alert - computed: false, optional: true, required: false
  private _ticketAlert = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlertOutputReference(this, "ticket_alert");
  public get ticketAlert() {
    return this._ticketAlert;
  }
  public putTicketAlert(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingTicketAlert) {
    this._ticketAlert.internalValue = value;
  }
  public resetTicketAlert() {
    this._ticketAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketAlertInput() {
    return this._ticketAlert.internalValue;
  }
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents {
  /**
  * ErrorQuery is a Prometheus query that will get the number/count of events that we consider that are bad for the SLO (e.g 'http 5xx', 'latency > 250ms'...). Requires the usage of '{{.window}}' template variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#error_query DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#error_query}
  */
  readonly errorQuery: string;
  /**
  * TotalQuery is a Prometheus query that will get the total number/count of events for the SLO (e.g 'all http requests'...). Requires the usage of '{{.window}}' template variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#total_query DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#total_query}
  */
  readonly totalQuery: string;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEventsToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_query: cdktf.stringToTerraform(struct!.errorQuery),
    total_query: cdktf.stringToTerraform(struct!.totalQuery),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEventsToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_query: {
      value: cdktf.stringToHclTerraform(struct!.errorQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_query: {
      value: cdktf.stringToHclTerraform(struct!.totalQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorQuery = this._errorQuery;
    }
    if (this._totalQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalQuery = this._totalQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorQuery = undefined;
      this._totalQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorQuery = value.errorQuery;
      this._totalQuery = value.totalQuery;
    }
  }

  // error_query - computed: false, optional: false, required: true
  private _errorQuery?: string; 
  public get errorQuery() {
    return this.getStringAttribute('error_query');
  }
  public set errorQuery(value: string) {
    this._errorQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorQueryInput() {
    return this._errorQuery;
  }

  // total_query - computed: false, optional: false, required: true
  private _totalQuery?: string; 
  public get totalQuery() {
    return this.getStringAttribute('total_query');
  }
  public set totalQuery(value: string) {
    this._totalQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalQueryInput() {
    return this._totalQuery;
  }
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin {
  /**
  * Name is the name of the plugin that needs to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#id DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Options are the options used for the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#options DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#options}
  */
  readonly options?: { [key: string]: string };
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPluginToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPluginToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._options = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._options = value.options;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw {
  /**
  * ErrorRatioQuery is a Prometheus query that will get the raw error ratio (0-1) for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#error_ratio_query DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#error_ratio_query}
  */
  readonly errorRatioQuery: string;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRawToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_ratio_query: cdktf.stringToTerraform(struct!.errorRatioQuery),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRawToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_ratio_query: {
      value: cdktf.stringToHclTerraform(struct!.errorRatioQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRawOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorRatioQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRatioQuery = this._errorRatioQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorRatioQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorRatioQuery = value.errorRatioQuery;
    }
  }

  // error_ratio_query - computed: false, optional: false, required: true
  private _errorRatioQuery?: string; 
  public get errorRatioQuery() {
    return this.getStringAttribute('error_ratio_query');
  }
  public set errorRatioQuery(value: string) {
    this._errorRatioQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRatioQueryInput() {
    return this._errorRatioQuery;
  }
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli {
  /**
  * Events is the events SLI type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#events DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#events}
  */
  readonly events?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents;
  /**
  * Plugin is the pluggable SLI type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#plugin DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#plugin}
  */
  readonly plugin?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin;
  /**
  * Raw is the raw SLI type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#raw DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#raw}
  */
  readonly raw?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEventsToTerraform(struct!.events),
    plugin: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPluginToTerraform(struct!.plugin),
    raw: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRawToTerraform(struct!.raw),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents",
    },
    plugin: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin",
    },
    raw: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRawToHclTerraform(struct!.raw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._raw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events.internalValue = undefined;
      this._plugin.internalValue = undefined;
      this._raw.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events.internalValue = value.events;
      this._plugin.internalValue = value.plugin;
      this._raw.internalValue = value.raw;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliEvents) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliPlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // raw - computed: false, optional: true, required: false
  private _raw = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRawOutputReference(this, "raw");
  public get raw() {
    return this._raw;
  }
  public putRaw(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliRaw) {
    this._raw.internalValue = value;
  }
  public resetRaw() {
    this._raw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw.internalValue;
  }
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos {
  /**
  * Alerting is the configuration with all the things related with the SLO alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#alerting DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#alerting}
  */
  readonly alerting: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting;
  /**
  * Description is the description of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#description DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Labels are the Prometheus labels that will have all the recording and alerting rules for this specific SLO. These labels are merged with the previous level labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#labels DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name is the name of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#name DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#name}
  */
  readonly name: string;
  /**
  * Objective is target of the SLO the percentage (0, 100] (e.g 99.9).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#objective DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#objective}
  */
  readonly objective: number;
  /**
  * SLI is the indicator (service level indicator) for this specific SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#sli DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#sli}
  */
  readonly sli: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingToTerraform(struct!.alerting),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    objective: cdktf.numberToTerraform(struct!.objective),
    sli: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliToTerraform(struct!.sli),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingToHclTerraform(struct!.alerting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    objective: {
      value: cdktf.numberToHclTerraform(struct!.objective),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sli: {
      value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliToHclTerraform(struct!.sli),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alerting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alerting = this._alerting?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objective !== undefined) {
      hasAnyValues = true;
      internalValueResult.objective = this._objective;
    }
    if (this._sli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sli = this._sli?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alerting.internalValue = undefined;
      this._description = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._objective = undefined;
      this._sli.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alerting.internalValue = value.alerting;
      this._description = value.description;
      this._labels = value.labels;
      this._name = value.name;
      this._objective = value.objective;
      this._sli.internalValue = value.sli;
    }
  }

  // alerting - computed: false, optional: false, required: true
  private _alerting = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlertingOutputReference(this, "alerting");
  public get alerting() {
    return this._alerting;
  }
  public putAlerting(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosAlerting) {
    this._alerting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // objective - computed: false, optional: false, required: true
  private _objective?: number; 
  public get objective() {
    return this.getNumberAttribute('objective');
  }
  public set objective(value: number) {
    this._objective = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective;
  }

  // sli - computed: false, optional: false, required: true
  private _sli = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSliOutputReference(this, "sli");
  public get sli() {
    return this._sli;
  }
  public putSli(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosSli) {
    this._sli.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliInput() {
    return this._sli.internalValue;
  }
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosList extends cdktf.ComplexList {
  public internalValue? : DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosOutputReference {
    return new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec {
  /**
  * Labels are the Prometheus labels that will have all the recording and alerting rules generated for the service SLOs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#labels DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Service is the application of the SLOs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#service DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#service}
  */
  readonly service: string;
  /**
  * SLOs are the SLOs of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#slos DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest#slos}
  */
  readonly slos?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos[] | cdktf.IResolvable;
}

export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecToTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    service: cdktf.stringToTerraform(struct!.service),
    slos: cdktf.listMapper(dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosToTerraform, false)(struct!.slos),
  }
}


export function dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecToHclTerraform(struct?: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slos: {
      value: cdktf.listMapperHcl(dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosToHclTerraform, false)(struct!.slos),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._slos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slos = this._slos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._service = undefined;
      this._slos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._service = value.service;
      this._slos.internalValue = value.slos;
    }
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // slos - computed: false, optional: true, required: false
  private _slos = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlosList(this, "slos", false);
  public get slos() {
    return this._slos;
  }
  public putSlos(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecSlos[] | cdktf.IResolvable) {
    this._slos.internalValue = value;
  }
  public resetSlos() {
    this._slos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slosInput() {
    return this._slos.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest k8s_sloth_slok_dev_prometheus_service_level_v1_manifest}
*/
export class DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sloth_slok_dev_prometheus_service_level_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest to import
  * @param importFromId The id of the existing DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSlothSlokDevPrometheusServiceLevelV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sloth_slok_dev_prometheus_service_level_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sloth_slok_dev_prometheus_service_level_v1_manifest k8s_sloth_slok_dev_prometheus_service_level_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sloth_slok_dev_prometheus_service_level_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec) {
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
      metadata: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSlothSlokDevPrometheusServiceLevelV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
