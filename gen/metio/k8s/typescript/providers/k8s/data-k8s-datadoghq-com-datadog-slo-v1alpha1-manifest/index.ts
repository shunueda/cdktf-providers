// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDatadoghqComDatadogSloV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#metadata DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#spec DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec;
}
export interface DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#annotations DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#labels DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#name DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#namespace DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions {
  /**
  * DisableRequiredTags disables the automatic addition of required tags to SLOs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#disable_required_tags DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#disable_required_tags}
  */
  readonly disableRequiredTags?: boolean | cdktf.IResolvable;
}

export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptionsToTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_required_tags: cdktf.booleanToTerraform(struct!.disableRequiredTags),
  }
}


export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptionsToHclTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable): any {
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

export class DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery {
  /**
  * Denominator is a Datadog metric query for total (valid) events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#denominator DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#denominator}
  */
  readonly denominator: string;
  /**
  * Numerator is a Datadog metric query for good events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#numerator DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#numerator}
  */
  readonly numerator: string;
}

export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQueryToTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.stringToTerraform(struct!.numerator),
  }
}


export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQueryToHclTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerator: {
      value: cdktf.stringToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: false, required: true
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: false, required: true
  private _numerator?: string; 
  public get numerator() {
    return this.getStringAttribute('numerator');
  }
  public set numerator(value: string) {
    this._numerator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec {
  /**
  * ControllerOptions are the optional parameters in the DatadogSLO controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#controller_options DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#controller_options}
  */
  readonly controllerOptions?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions;
  /**
  * Description is a user-defined description of the service level objective. Always included in service level objective responses (but may be null). Optional in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#description DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Groups is a list of (up to 100) monitor groups that narrow the scope of a monitor service level objective. Included in service level objective responses if it is not empty. Optional in create/update requests for monitor service level objectives, but may only be used when the length of the monitor_ids field is one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#groups DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * MonitorIDs is a list of monitor IDs that defines the scope of a monitor service level objective. Required if type is monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#monitor_i_ds DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#monitor_i_ds}
  */
  readonly monitorIDs?: string[];
  /**
  * Name is the name of the service level objective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#name DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Query is the query for a metric-based SLO. Required if type is metric. Note that only the 'sum by' aggregator is allowed, which sums all request counts. 'Average', 'max', nor 'min' request aggregators are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#query DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#query}
  */
  readonly query?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery;
  /**
  * Tags is a list of tags to associate with your service level objective. This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#tags DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#tags}
  */
  readonly tags?: string[];
  /**
  * TargetThreshold is the target threshold such that when the service level indicator is above this threshold over the given timeframe, the objective is being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#target_threshold DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#target_threshold}
  */
  readonly targetThreshold: string;
  /**
  * The SLO time window options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#timeframe DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#timeframe}
  */
  readonly timeframe: string;
  /**
  * Type is the type of the service level objective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#type DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * WarningThreshold is a optional warning threshold such that when the service level indicator is below this value for the given threshold, but above the target threshold, the objective appears in a 'warning' state. This value must be greater than the target threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#warning_threshold DataK8SDatadoghqComDatadogSloV1Alpha1Manifest#warning_threshold}
  */
  readonly warningThreshold?: string;
}

export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_options: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptionsToTerraform(struct!.controllerOptions),
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    monitor_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitorIDs),
    name: cdktf.stringToTerraform(struct!.name),
    query: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQueryToTerraform(struct!.query),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    target_threshold: cdktf.stringToTerraform(struct!.targetThreshold),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    type: cdktf.stringToTerraform(struct!.type),
    warning_threshold: cdktf.stringToTerraform(struct!.warningThreshold),
  }
}


export function dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_options: {
      value: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptionsToHclTerraform(struct!.controllerOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitor_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitorIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_threshold: {
      value: cdktf.stringToHclTerraform(struct!.targetThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframe: {
      value: cdktf.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_threshold: {
      value: cdktf.stringToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerOptions = this._controllerOptions?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._monitorIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorIDs = this._monitorIDs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._targetThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetThreshold = this._targetThreshold;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerOptions.internalValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._monitorIDs = undefined;
      this._name = undefined;
      this._query.internalValue = undefined;
      this._tags = undefined;
      this._targetThreshold = undefined;
      this._timeframe = undefined;
      this._type = undefined;
      this._warningThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerOptions.internalValue = value.controllerOptions;
      this._description = value.description;
      this._groups = value.groups;
      this._monitorIDs = value.monitorIDs;
      this._name = value.name;
      this._query.internalValue = value.query;
      this._tags = value.tags;
      this._targetThreshold = value.targetThreshold;
      this._timeframe = value.timeframe;
      this._type = value.type;
      this._warningThreshold = value.warningThreshold;
    }
  }

  // controller_options - computed: false, optional: true, required: false
  private _controllerOptions = new DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptionsOutputReference(this, "controller_options");
  public get controllerOptions() {
    return this._controllerOptions;
  }
  public putControllerOptions(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecControllerOptions) {
    this._controllerOptions.internalValue = value;
  }
  public resetControllerOptions() {
    this._controllerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerOptionsInput() {
    return this._controllerOptions.internalValue;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // monitor_i_ds - computed: false, optional: true, required: false
  private _monitorIDs?: string[]; 
  public get monitorIDs() {
    return this.getListAttribute('monitor_i_ds');
  }
  public set monitorIDs(value: string[]) {
    this._monitorIDs = value;
  }
  public resetMonitorIDs() {
    this._monitorIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIDsInput() {
    return this._monitorIDs;
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

  // query - computed: false, optional: true, required: false
  private _query = new DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
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

  // target_threshold - computed: false, optional: false, required: true
  private _targetThreshold?: string; 
  public get targetThreshold() {
    return this.getStringAttribute('target_threshold');
  }
  public set targetThreshold(value: string) {
    this._targetThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetThresholdInput() {
    return this._targetThreshold;
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: string; 
  public get warningThreshold() {
    return this.getStringAttribute('warning_threshold');
  }
  public set warningThreshold(value: string) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest k8s_datadoghq_com_datadog_slo_v1alpha1_manifest}
*/
export class DataK8SDatadoghqComDatadogSloV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_datadoghq_com_datadog_slo_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDatadoghqComDatadogSloV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDatadoghqComDatadogSloV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDatadoghqComDatadogSloV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDatadoghqComDatadogSloV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_datadoghq_com_datadog_slo_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/datadoghq_com_datadog_slo_v1alpha1_manifest k8s_datadoghq_com_datadog_slo_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDatadoghqComDatadogSloV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_datadoghq_com_datadog_slo_v1alpha1_manifest',
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
  private _metadata = new DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDatadoghqComDatadogSloV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDatadoghqComDatadogSloV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
