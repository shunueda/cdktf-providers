// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#metadata DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata;
  /**
  * AlertSpec defines an alerting rule for events involving a list of objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#spec DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec;
}
export interface DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#annotations DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#labels DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#name DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#namespace DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadataToTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#api_version DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#kind DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#match_labels DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Name of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#name DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#namespace DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesToTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesToHclTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
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

export class DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
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

  public set internalValue(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._matchLabels = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._matchLabels = value.matchLabels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesOutputReference {
    return new DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#name DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRefToTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRefToHclTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec {
  /**
  * Filter events based on severity, defaults to ('info'). If set to 'info' no events will be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#event_severity DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#event_severity}
  */
  readonly eventSeverity?: string;
  /**
  * Filter events based on the involved objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#event_sources DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#event_sources}
  */
  readonly eventSources: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources[] | cdktf.IResolvable;
  /**
  * A list of Golang regular expressions to be used for excluding messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#exclusion_list DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#exclusion_list}
  */
  readonly exclusionList?: string[];
  /**
  * Send events using this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#provider_ref DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#provider_ref}
  */
  readonly providerRef: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef;
  /**
  * Short description of the impact and affected cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#summary DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#summary}
  */
  readonly summary?: string;
  /**
  * This flag tells the controller to suspend subsequent events dispatching. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#suspend DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
}

export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecToTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_severity: cdktf.stringToTerraform(struct!.eventSeverity),
    event_sources: cdktf.listMapper(dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesToTerraform, false)(struct!.eventSources),
    exclusion_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionList),
    provider_ref: dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRefToTerraform(struct!.providerRef),
    summary: cdktf.stringToTerraform(struct!.summary),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
  }
}


export function dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_severity: {
      value: cdktf.stringToHclTerraform(struct!.eventSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_sources: {
      value: cdktf.listMapperHcl(dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesToHclTerraform, false)(struct!.eventSources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesList",
    },
    exclusion_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider_ref: {
      value: dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRefToHclTerraform(struct!.providerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSeverity = this._eventSeverity;
    }
    if (this._eventSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSources = this._eventSources?.internalValue;
    }
    if (this._exclusionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionList = this._exclusionList;
    }
    if (this._providerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerRef = this._providerRef?.internalValue;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventSeverity = undefined;
      this._eventSources.internalValue = undefined;
      this._exclusionList = undefined;
      this._providerRef.internalValue = undefined;
      this._summary = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventSeverity = value.eventSeverity;
      this._eventSources.internalValue = value.eventSources;
      this._exclusionList = value.exclusionList;
      this._providerRef.internalValue = value.providerRef;
      this._summary = value.summary;
      this._suspend = value.suspend;
    }
  }

  // event_severity - computed: false, optional: true, required: false
  private _eventSeverity?: string; 
  public get eventSeverity() {
    return this.getStringAttribute('event_severity');
  }
  public set eventSeverity(value: string) {
    this._eventSeverity = value;
  }
  public resetEventSeverity() {
    this._eventSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSeverityInput() {
    return this._eventSeverity;
  }

  // event_sources - computed: false, optional: false, required: true
  private _eventSources = new DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSourcesList(this, "event_sources", false);
  public get eventSources() {
    return this._eventSources;
  }
  public putEventSources(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecEventSources[] | cdktf.IResolvable) {
    this._eventSources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourcesInput() {
    return this._eventSources.internalValue;
  }

  // exclusion_list - computed: false, optional: true, required: false
  private _exclusionList?: string[]; 
  public get exclusionList() {
    return this.getListAttribute('exclusion_list');
  }
  public set exclusionList(value: string[]) {
    this._exclusionList = value;
  }
  public resetExclusionList() {
    this._exclusionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionListInput() {
    return this._exclusionList;
  }

  // provider_ref - computed: false, optional: false, required: true
  private _providerRef = new DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRefOutputReference(this, "provider_ref");
  public get providerRef() {
    return this._providerRef;
  }
  public putProviderRef(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecProviderRef) {
    this._providerRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerRefInput() {
    return this._providerRef.internalValue;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest k8s_notification_toolkit_fluxcd_io_alert_v1beta1_manifest}
*/
export class DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_notification_toolkit_fluxcd_io_alert_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNotificationToolkitFluxcdIoAlertV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_notification_toolkit_fluxcd_io_alert_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/notification_toolkit_fluxcd_io_alert_v1beta1_manifest k8s_notification_toolkit_fluxcd_io_alert_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_notification_toolkit_fluxcd_io_alert_v1beta1_manifest',
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
  private _metadata = new DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec) {
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
      metadata: dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNotificationToolkitFluxcdIoAlertV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
