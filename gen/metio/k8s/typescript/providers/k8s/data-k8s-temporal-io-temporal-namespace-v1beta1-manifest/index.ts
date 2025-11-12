// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#metadata DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata;
  /**
  * TemporalNamespaceSpec defines the desired state of Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#spec DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec;
}
export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#annotations DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#labels DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#name DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#namespace DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadataToTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory {
  /**
  * EnableRead allows temporal to read from the archived Event History.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#enable_read DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#enable_read}
  */
  readonly enableRead: boolean | cdktf.IResolvable;
  /**
  * Enabled defines if the archival is enabled by default for all namespaces or for a particular namespace (depends if it's for a TemporalCluster or a TemporalNamespace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#enabled DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Path is ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#path DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Paused defines if the archival is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#paused DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#paused}
  */
  readonly paused: boolean | cdktf.IResolvable;
}

export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistoryToTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_read: cdktf.booleanToTerraform(struct!.enableRead),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    path: cdktf.stringToTerraform(struct!.path),
    paused: cdktf.booleanToTerraform(struct!.paused),
  }
}


export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistoryToHclTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_read: {
      value: cdktf.booleanToHclTerraform(struct!.enableRead),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRead = this._enableRead;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRead = undefined;
      this._enabled = undefined;
      this._path = undefined;
      this._paused = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRead = value.enableRead;
      this._enabled = value.enabled;
      this._path = value.path;
      this._paused = value.paused;
    }
  }

  // enable_read - computed: false, optional: false, required: true
  private _enableRead?: boolean | cdktf.IResolvable; 
  public get enableRead() {
    return this.getBooleanAttribute('enable_read');
  }
  public set enableRead(value: boolean | cdktf.IResolvable) {
    this._enableRead = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadInput() {
    return this._enableRead;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // paused - computed: false, optional: false, required: true
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }
}
export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility {
  /**
  * EnableRead allows temporal to read from the archived Event History.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#enable_read DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#enable_read}
  */
  readonly enableRead: boolean | cdktf.IResolvable;
  /**
  * Enabled defines if the archival is enabled by default for all namespaces or for a particular namespace (depends if it's for a TemporalCluster or a TemporalNamespace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#enabled DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Path is ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#path DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Paused defines if the archival is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#paused DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#paused}
  */
  readonly paused: boolean | cdktf.IResolvable;
}

export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibilityToTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_read: cdktf.booleanToTerraform(struct!.enableRead),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    path: cdktf.stringToTerraform(struct!.path),
    paused: cdktf.booleanToTerraform(struct!.paused),
  }
}


export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibilityToHclTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_read: {
      value: cdktf.booleanToHclTerraform(struct!.enableRead),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRead = this._enableRead;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRead = undefined;
      this._enabled = undefined;
      this._path = undefined;
      this._paused = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRead = value.enableRead;
      this._enabled = value.enabled;
      this._path = value.path;
      this._paused = value.paused;
    }
  }

  // enable_read - computed: false, optional: false, required: true
  private _enableRead?: boolean | cdktf.IResolvable; 
  public get enableRead() {
    return this.getBooleanAttribute('enable_read');
  }
  public set enableRead(value: boolean | cdktf.IResolvable) {
    this._enableRead = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadInput() {
    return this._enableRead;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // paused - computed: false, optional: false, required: true
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }
}
export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival {
  /**
  * History is the config for this namespace history archival.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#history DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#history}
  */
  readonly history?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory;
  /**
  * Visibility is the config for this namespace visibility archival.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#visibility DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#visibility}
  */
  readonly visibility?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility;
}

export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalToTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    history: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistoryToTerraform(struct!.history),
    visibility: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibilityToTerraform(struct!.visibility),
  }
}


export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalToHclTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    history: {
      value: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistoryToHclTerraform(struct!.history),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory",
    },
    visibility: {
      value: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibilityToHclTerraform(struct!.visibility),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._history?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history?.internalValue;
    }
    if (this._visibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._history.internalValue = undefined;
      this._visibility.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._history.internalValue = value.history;
      this._visibility.internalValue = value.visibility;
    }
  }

  // history - computed: false, optional: true, required: false
  private _history = new DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }
  public putHistory(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalHistory) {
    this._history.internalValue = value;
  }
  public resetHistory() {
    this._history.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history.internalValue;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility = new DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibilityOutputReference(this, "visibility");
  public get visibility() {
    return this._visibility;
  }
  public putVisibility(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalVisibility) {
    this._visibility.internalValue = value;
  }
  public resetVisibility() {
    this._visibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility.internalValue;
  }
}
export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef {
  /**
  * The name of the temporal object to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#name DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * The namespace of the temporal object to reference. Defaults to the namespace of the requested resource if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#namespace DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRefToTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRefToHclTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef | cdktf.IResolvable): any {
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

export class DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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
export interface DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec {
  /**
  * The name of active Temporal Cluster. Only applicable if the namespace is a global namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#active_cluster_name DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#active_cluster_name}
  */
  readonly activeClusterName?: string;
  /**
  * AllowDeletion makes the controller delete the Temporal namespace if the CRD is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#allow_deletion DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#allow_deletion}
  */
  readonly allowDeletion?: boolean | cdktf.IResolvable;
  /**
  * Archival is a per-namespace archival configuration. If not set, the default cluster configuration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#archival DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#archival}
  */
  readonly archival?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival;
  /**
  * Reference to the temporal cluster the namespace will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#cluster_ref DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#cluster_ref}
  */
  readonly clusterRef: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef;
  /**
  * List of clusters names to which the namespace can fail over. Only applicable if the namespace is a global namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#clusters DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#clusters}
  */
  readonly clusters?: string[];
  /**
  * Data is a key-value map for any customized purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#data DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Namespace description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#description DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * IsGlobalNamespace defines whether the namespace is a global namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#is_global_namespace DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#is_global_namespace}
  */
  readonly isGlobalNamespace?: boolean | cdktf.IResolvable;
  /**
  * Namespace owner email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#owner_email DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#owner_email}
  */
  readonly ownerEmail?: string;
  /**
  * RetentionPeriod to apply on closed workflow executions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#retention_period DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#retention_period}
  */
  readonly retentionPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#security_token DataK8STemporalIoTemporalNamespaceV1Beta1Manifest#security_token}
  */
  readonly securityToken?: string;
}

export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecToTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_cluster_name: cdktf.stringToTerraform(struct!.activeClusterName),
    allow_deletion: cdktf.booleanToTerraform(struct!.allowDeletion),
    archival: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalToTerraform(struct!.archival),
    cluster_ref: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    description: cdktf.stringToTerraform(struct!.description),
    is_global_namespace: cdktf.booleanToTerraform(struct!.isGlobalNamespace),
    owner_email: cdktf.stringToTerraform(struct!.ownerEmail),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
    security_token: cdktf.stringToTerraform(struct!.securityToken),
  }
}


export function dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecToHclTerraform(struct?: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.activeClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.allowDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archival: {
      value: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalToHclTerraform(struct!.archival),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival",
    },
    cluster_ref: {
      value: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef",
    },
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_global_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.isGlobalNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner_email: {
      value: cdktf.stringToHclTerraform(struct!.ownerEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_token: {
      value: cdktf.stringToHclTerraform(struct!.securityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeClusterName = this._activeClusterName;
    }
    if (this._allowDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDeletion = this._allowDeletion;
    }
    if (this._archival?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archival = this._archival?.internalValue;
    }
    if (this._clusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef?.internalValue;
    }
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isGlobalNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGlobalNamespace = this._isGlobalNamespace;
    }
    if (this._ownerEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerEmail = this._ownerEmail;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._securityToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityToken = this._securityToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeClusterName = undefined;
      this._allowDeletion = undefined;
      this._archival.internalValue = undefined;
      this._clusterRef.internalValue = undefined;
      this._clusters = undefined;
      this._data = undefined;
      this._description = undefined;
      this._isGlobalNamespace = undefined;
      this._ownerEmail = undefined;
      this._retentionPeriod = undefined;
      this._securityToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeClusterName = value.activeClusterName;
      this._allowDeletion = value.allowDeletion;
      this._archival.internalValue = value.archival;
      this._clusterRef.internalValue = value.clusterRef;
      this._clusters = value.clusters;
      this._data = value.data;
      this._description = value.description;
      this._isGlobalNamespace = value.isGlobalNamespace;
      this._ownerEmail = value.ownerEmail;
      this._retentionPeriod = value.retentionPeriod;
      this._securityToken = value.securityToken;
    }
  }

  // active_cluster_name - computed: false, optional: true, required: false
  private _activeClusterName?: string; 
  public get activeClusterName() {
    return this.getStringAttribute('active_cluster_name');
  }
  public set activeClusterName(value: string) {
    this._activeClusterName = value;
  }
  public resetActiveClusterName() {
    this._activeClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeClusterNameInput() {
    return this._activeClusterName;
  }

  // allow_deletion - computed: false, optional: true, required: false
  private _allowDeletion?: boolean | cdktf.IResolvable; 
  public get allowDeletion() {
    return this.getBooleanAttribute('allow_deletion');
  }
  public set allowDeletion(value: boolean | cdktf.IResolvable) {
    this._allowDeletion = value;
  }
  public resetAllowDeletion() {
    this._allowDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeletionInput() {
    return this._allowDeletion;
  }

  // archival - computed: false, optional: true, required: false
  private _archival = new DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchivalOutputReference(this, "archival");
  public get archival() {
    return this._archival;
  }
  public putArchival(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecArchival) {
    this._archival.internalValue = value;
  }
  public resetArchival() {
    this._archival.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalInput() {
    return this._archival.internalValue;
  }

  // cluster_ref - computed: false, optional: false, required: true
  private _clusterRef = new DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // is_global_namespace - computed: false, optional: true, required: false
  private _isGlobalNamespace?: boolean | cdktf.IResolvable; 
  public get isGlobalNamespace() {
    return this.getBooleanAttribute('is_global_namespace');
  }
  public set isGlobalNamespace(value: boolean | cdktf.IResolvable) {
    this._isGlobalNamespace = value;
  }
  public resetIsGlobalNamespace() {
    this._isGlobalNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGlobalNamespaceInput() {
    return this._isGlobalNamespace;
  }

  // owner_email - computed: false, optional: true, required: false
  private _ownerEmail?: string; 
  public get ownerEmail() {
    return this.getStringAttribute('owner_email');
  }
  public set ownerEmail(value: string) {
    this._ownerEmail = value;
  }
  public resetOwnerEmail() {
    this._ownerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerEmailInput() {
    return this._ownerEmail;
  }

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // security_token - computed: false, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this.getStringAttribute('security_token');
  }
  public set securityToken(value: string) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest k8s_temporal_io_temporal_namespace_v1beta1_manifest}
*/
export class DataK8STemporalIoTemporalNamespaceV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_temporal_io_temporal_namespace_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STemporalIoTemporalNamespaceV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STemporalIoTemporalNamespaceV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8STemporalIoTemporalNamespaceV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STemporalIoTemporalNamespaceV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_temporal_io_temporal_namespace_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/temporal_io_temporal_namespace_v1beta1_manifest k8s_temporal_io_temporal_namespace_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STemporalIoTemporalNamespaceV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_temporal_io_temporal_namespace_v1beta1_manifest',
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
  private _metadata = new DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec) {
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
      metadata: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STemporalIoTemporalNamespaceV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STemporalIoTemporalNamespaceV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
