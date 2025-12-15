// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#metadata DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata;
  /**
  * spec defines properties of a VolumeSnapshotContent created by the underlying storage system. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#spec DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec;
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#annotations DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#labels DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#name DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource {
  /**
  * snapshotHandle specifies the CSI 'snapshot_id' of a pre-existing snapshot on the underlying storage system for which a Kubernetes object representation was (or should be) created. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#snapshot_handle DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#snapshot_handle}
  */
  readonly snapshotHandle?: string;
  /**
  * volumeHandle specifies the CSI 'volume_id' of the volume from which a snapshot should be dynamically taken from. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#volume_handle DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#volume_handle}
  */
  readonly volumeHandle?: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSourceToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_handle: cdktf.stringToTerraform(struct!.snapshotHandle),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSourceToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snapshot_handle: {
      value: cdktf.stringToHclTerraform(struct!.snapshotHandle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_handle: {
      value: cdktf.stringToHclTerraform(struct!.volumeHandle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotHandle !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotHandle = this._snapshotHandle;
    }
    if (this._volumeHandle !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeHandle = this._volumeHandle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snapshotHandle = undefined;
      this._volumeHandle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snapshotHandle = value.snapshotHandle;
      this._volumeHandle = value.volumeHandle;
    }
  }

  // snapshot_handle - computed: false, optional: true, required: false
  private _snapshotHandle?: string; 
  public get snapshotHandle() {
    return this.getStringAttribute('snapshot_handle');
  }
  public set snapshotHandle(value: string) {
    this._snapshotHandle = value;
  }
  public resetSnapshotHandle() {
    this._snapshotHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotHandleInput() {
    return this._snapshotHandle;
  }

  // volume_handle - computed: false, optional: true, required: false
  private _volumeHandle?: string; 
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
  public set volumeHandle(value: string) {
    this._volumeHandle = value;
  }
  public resetVolumeHandle() {
    this._volumeHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeHandleInput() {
    return this._volumeHandle;
  }
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#api_version DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#field_path DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#kind DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#name DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#namespace DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#resource_version DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#uid DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRefToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRefToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec {
  /**
  * deletionPolicy determines whether this VolumeSnapshotContent and its physical snapshot on the underlying storage system should be deleted when its bound VolumeSnapshot is deleted. Supported values are 'Retain' and 'Delete'. 'Retain' means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are kept. 'Delete' means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are deleted. For dynamically provisioned snapshots, this field will automatically be filled in by the CSI snapshotter sidecar with the 'DeletionPolicy' field defined in the corresponding VolumeSnapshotClass. For pre-existing snapshots, users MUST specify this field when creating the VolumeSnapshotContent object. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#deletion_policy DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#deletion_policy}
  */
  readonly deletionPolicy: string;
  /**
  * driver is the name of the CSI driver used to create the physical snapshot on the underlying storage system. This MUST be the same as the name returned by the CSI GetPluginName() call for that driver. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#driver DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * source specifies whether the snapshot is (or should be) dynamically provisioned or already exists, and just requires a Kubernetes object representation. This field is immutable after creation. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#source DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#source}
  */
  readonly source: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource;
  /**
  * name of the VolumeSnapshotClass from which this snapshot was (or will be) created. Note that after provisioning, the VolumeSnapshotClass may be deleted or recreated with different set of values, and as such, should not be referenced post-snapshot creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#volume_snapshot_class_name DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#volume_snapshot_class_name}
  */
  readonly volumeSnapshotClassName?: string;
  /**
  * volumeSnapshotRef specifies the VolumeSnapshot object to which this VolumeSnapshotContent object is bound. VolumeSnapshot.Spec.VolumeSnapshotContentName field must reference to this VolumeSnapshotContent's name for the bidirectional binding to be valid. For a pre-existing VolumeSnapshotContent object, name and namespace of the VolumeSnapshot object MUST be provided for binding to happen. This field is immutable after creation. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#volume_snapshot_ref DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest#volume_snapshot_ref}
  */
  readonly volumeSnapshotRef: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_policy: cdktf.stringToTerraform(struct!.deletionPolicy),
    driver: cdktf.stringToTerraform(struct!.driver),
    source: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSourceToTerraform(struct!.source),
    volume_snapshot_class_name: cdktf.stringToTerraform(struct!.volumeSnapshotClassName),
    volume_snapshot_ref: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRefToTerraform(struct!.volumeSnapshotRef),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource",
    },
    volume_snapshot_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshotClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot_ref: {
      value: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRefToHclTerraform(struct!.volumeSnapshotRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPolicy = this._deletionPolicy;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._volumeSnapshotClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotClassName = this._volumeSnapshotClassName;
    }
    if (this._volumeSnapshotRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotRef = this._volumeSnapshotRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionPolicy = undefined;
      this._driver = undefined;
      this._source.internalValue = undefined;
      this._volumeSnapshotClassName = undefined;
      this._volumeSnapshotRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionPolicy = value.deletionPolicy;
      this._driver = value.driver;
      this._source.internalValue = value.source;
      this._volumeSnapshotClassName = value.volumeSnapshotClassName;
      this._volumeSnapshotRef.internalValue = value.volumeSnapshotRef;
    }
  }

  // deletion_policy - computed: false, optional: false, required: true
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // source - computed: false, optional: false, required: true
  private _source = new DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // volume_snapshot_class_name - computed: false, optional: true, required: false
  private _volumeSnapshotClassName?: string; 
  public get volumeSnapshotClassName() {
    return this.getStringAttribute('volume_snapshot_class_name');
  }
  public set volumeSnapshotClassName(value: string) {
    this._volumeSnapshotClassName = value;
  }
  public resetVolumeSnapshotClassName() {
    this._volumeSnapshotClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotClassNameInput() {
    return this._volumeSnapshotClassName;
  }

  // volume_snapshot_ref - computed: false, optional: false, required: true
  private _volumeSnapshotRef = new DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRefOutputReference(this, "volume_snapshot_ref");
  public get volumeSnapshotRef() {
    return this._volumeSnapshotRef;
  }
  public putVolumeSnapshotRef(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecVolumeSnapshotRef) {
    this._volumeSnapshotRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotRefInput() {
    return this._volumeSnapshotRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest k8s_snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest}
*/
export class DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest k8s_snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_snapshot_storage_k8s_io_volume_snapshot_content_v1beta1_manifest',
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
  private _metadata = new DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotContentV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
