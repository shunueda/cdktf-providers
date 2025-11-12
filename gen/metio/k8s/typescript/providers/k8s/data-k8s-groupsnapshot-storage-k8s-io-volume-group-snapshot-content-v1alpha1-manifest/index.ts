// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#metadata DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata;
  /**
  * Spec defines properties of a VolumeGroupSnapshotContent created by the underlying storage system. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#spec DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec;
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#annotations DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#labels DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#name DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles {
  /**
  * VolumeGroupSnapshotHandle specifies the CSI 'group_snapshot_id' of a pre-existing group snapshot on the underlying storage system for which a Kubernetes object representation was (or should be) created. This field is immutable. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#volume_group_snapshot_handle DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#volume_group_snapshot_handle}
  */
  readonly volumeGroupSnapshotHandle: string;
  /**
  * VolumeSnapshotHandles is a list of CSI 'snapshot_id' of pre-existing snapshots on the underlying storage system for which Kubernetes objects representation were (or should be) created. This field is immutable. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#volume_snapshot_handles DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#volume_snapshot_handles}
  */
  readonly volumeSnapshotHandles: string[];
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandlesToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_group_snapshot_handle: cdktf.stringToTerraform(struct!.volumeGroupSnapshotHandle),
    volume_snapshot_handles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeSnapshotHandles),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandlesToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_group_snapshot_handle: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupSnapshotHandle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot_handles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeSnapshotHandles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeGroupSnapshotHandle !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupSnapshotHandle = this._volumeGroupSnapshotHandle;
    }
    if (this._volumeSnapshotHandles !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotHandles = this._volumeSnapshotHandles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeGroupSnapshotHandle = undefined;
      this._volumeSnapshotHandles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeGroupSnapshotHandle = value.volumeGroupSnapshotHandle;
      this._volumeSnapshotHandles = value.volumeSnapshotHandles;
    }
  }

  // volume_group_snapshot_handle - computed: false, optional: false, required: true
  private _volumeGroupSnapshotHandle?: string; 
  public get volumeGroupSnapshotHandle() {
    return this.getStringAttribute('volume_group_snapshot_handle');
  }
  public set volumeGroupSnapshotHandle(value: string) {
    this._volumeGroupSnapshotHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupSnapshotHandleInput() {
    return this._volumeGroupSnapshotHandle;
  }

  // volume_snapshot_handles - computed: false, optional: false, required: true
  private _volumeSnapshotHandles?: string[]; 
  public get volumeSnapshotHandles() {
    return this.getListAttribute('volume_snapshot_handles');
  }
  public set volumeSnapshotHandles(value: string[]) {
    this._volumeSnapshotHandles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotHandlesInput() {
    return this._volumeSnapshotHandles;
  }
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource {
  /**
  * GroupSnapshotHandles specifies the CSI 'group_snapshot_id' of a pre-existing group snapshot and a list of CSI 'snapshot_id' of pre-existing snapshots on the underlying storage system for which a Kubernetes object representation was (or should be) created. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#group_snapshot_handles DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#group_snapshot_handles}
  */
  readonly groupSnapshotHandles?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles;
  /**
  * VolumeHandles is a list of volume handles on the backend to be snapshotted together. It is specified for dynamic provisioning of the VolumeGroupSnapshot. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#volume_handles DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#volume_handles}
  */
  readonly volumeHandles?: string[];
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_snapshot_handles: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandlesToTerraform(struct!.groupSnapshotHandles),
    volume_handles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeHandles),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_snapshot_handles: {
      value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandlesToHclTerraform(struct!.groupSnapshotHandles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles",
    },
    volume_handles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeHandles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupSnapshotHandles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSnapshotHandles = this._groupSnapshotHandles?.internalValue;
    }
    if (this._volumeHandles !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeHandles = this._volumeHandles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupSnapshotHandles.internalValue = undefined;
      this._volumeHandles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupSnapshotHandles.internalValue = value.groupSnapshotHandles;
      this._volumeHandles = value.volumeHandles;
    }
  }

  // group_snapshot_handles - computed: false, optional: true, required: false
  private _groupSnapshotHandles = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandlesOutputReference(this, "group_snapshot_handles");
  public get groupSnapshotHandles() {
    return this._groupSnapshotHandles;
  }
  public putGroupSnapshotHandles(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceGroupSnapshotHandles) {
    this._groupSnapshotHandles.internalValue = value;
  }
  public resetGroupSnapshotHandles() {
    this._groupSnapshotHandles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSnapshotHandlesInput() {
    return this._groupSnapshotHandles.internalValue;
  }

  // volume_handles - computed: false, optional: true, required: false
  private _volumeHandles?: string[]; 
  public get volumeHandles() {
    return this.getListAttribute('volume_handles');
  }
  public set volumeHandles(value: string[]) {
    this._volumeHandles = value;
  }
  public resetVolumeHandles() {
    this._volumeHandles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeHandlesInput() {
    return this._volumeHandles;
  }
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#api_version DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#field_path DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#kind DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#name DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#namespace DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#resource_version DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#uid DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRefToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef | cdktf.IResolvable): any {
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


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRefToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef | cdktf.IResolvable): any {
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

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec {
  /**
  * DeletionPolicy determines whether this VolumeGroupSnapshotContent and the physical group snapshot on the underlying storage system should be deleted when the bound VolumeGroupSnapshot is deleted. Supported values are 'Retain' and 'Delete'. 'Retain' means that the VolumeGroupSnapshotContent and its physical group snapshot on underlying storage system are kept. 'Delete' means that the VolumeGroupSnapshotContent and its physical group snapshot on underlying storage system are deleted. For dynamically provisioned group snapshots, this field will automatically be filled in by the CSI snapshotter sidecar with the 'DeletionPolicy' field defined in the corresponding VolumeGroupSnapshotClass. For pre-existing snapshots, users MUST specify this field when creating the VolumeGroupSnapshotContent object. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#deletion_policy DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#deletion_policy}
  */
  readonly deletionPolicy: string;
  /**
  * Driver is the name of the CSI driver used to create the physical group snapshot on the underlying storage system. This MUST be the same as the name returned by the CSI GetPluginName() call for that driver. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#driver DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * Source specifies whether the snapshot is (or should be) dynamically provisioned or already exists, and just requires a Kubernetes object representation. This field is immutable after creation. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#source DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#source}
  */
  readonly source: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource;
  /**
  * VolumeGroupSnapshotClassName is the name of the VolumeGroupSnapshotClass from which this group snapshot was (or will be) created. Note that after provisioning, the VolumeGroupSnapshotClass may be deleted or recreated with different set of values, and as such, should not be referenced post-snapshot creation. For dynamic provisioning, this field must be set. This field may be unset for pre-provisioned snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#volume_group_snapshot_class_name DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#volume_group_snapshot_class_name}
  */
  readonly volumeGroupSnapshotClassName?: string;
  /**
  * VolumeGroupSnapshotRef specifies the VolumeGroupSnapshot object to which this VolumeGroupSnapshotContent object is bound. VolumeGroupSnapshot.Spec.VolumeGroupSnapshotContentName field must reference to this VolumeGroupSnapshotContent's name for the bidirectional binding to be valid. For a pre-existing VolumeGroupSnapshotContent object, name and namespace of the VolumeGroupSnapshot object MUST be provided for binding to happen. This field is immutable after creation. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#volume_group_snapshot_ref DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest#volume_group_snapshot_ref}
  */
  readonly volumeGroupSnapshotRef: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef;
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_policy: cdktf.stringToTerraform(struct!.deletionPolicy),
    driver: cdktf.stringToTerraform(struct!.driver),
    source: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceToTerraform(struct!.source),
    volume_group_snapshot_class_name: cdktf.stringToTerraform(struct!.volumeGroupSnapshotClassName),
    volume_group_snapshot_ref: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRefToTerraform(struct!.volumeGroupSnapshotRef),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource",
    },
    volume_group_snapshot_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupSnapshotClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_snapshot_ref: {
      value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRefToHclTerraform(struct!.volumeGroupSnapshotRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._volumeGroupSnapshotClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupSnapshotClassName = this._volumeGroupSnapshotClassName;
    }
    if (this._volumeGroupSnapshotRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupSnapshotRef = this._volumeGroupSnapshotRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionPolicy = undefined;
      this._driver = undefined;
      this._source.internalValue = undefined;
      this._volumeGroupSnapshotClassName = undefined;
      this._volumeGroupSnapshotRef.internalValue = undefined;
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
      this._volumeGroupSnapshotClassName = value.volumeGroupSnapshotClassName;
      this._volumeGroupSnapshotRef.internalValue = value.volumeGroupSnapshotRef;
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
  private _source = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // volume_group_snapshot_class_name - computed: false, optional: true, required: false
  private _volumeGroupSnapshotClassName?: string; 
  public get volumeGroupSnapshotClassName() {
    return this.getStringAttribute('volume_group_snapshot_class_name');
  }
  public set volumeGroupSnapshotClassName(value: string) {
    this._volumeGroupSnapshotClassName = value;
  }
  public resetVolumeGroupSnapshotClassName() {
    this._volumeGroupSnapshotClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupSnapshotClassNameInput() {
    return this._volumeGroupSnapshotClassName;
  }

  // volume_group_snapshot_ref - computed: false, optional: false, required: true
  private _volumeGroupSnapshotRef = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRefOutputReference(this, "volume_group_snapshot_ref");
  public get volumeGroupSnapshotRef() {
    return this._volumeGroupSnapshotRef;
  }
  public putVolumeGroupSnapshotRef(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecVolumeGroupSnapshotRef) {
    this._volumeGroupSnapshotRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupSnapshotRefInput() {
    return this._volumeGroupSnapshotRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest}
*/
export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_content_v1alpha1_manifest',
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
  private _metadata = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec) {
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
      metadata: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotContentV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
