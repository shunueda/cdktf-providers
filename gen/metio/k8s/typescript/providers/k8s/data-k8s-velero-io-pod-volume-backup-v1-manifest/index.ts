// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoPodVolumeBackupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#metadata DataK8SVeleroIoPodVolumeBackupV1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata;
  /**
  * PodVolumeBackupSpec is the specification for a PodVolumeBackup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#spec DataK8SVeleroIoPodVolumeBackupV1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoPodVolumeBackupV1ManifestSpec;
}
export interface DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#annotations DataK8SVeleroIoPodVolumeBackupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#labels DataK8SVeleroIoPodVolumeBackupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#name DataK8SVeleroIoPodVolumeBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#namespace DataK8SVeleroIoPodVolumeBackupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoPodVolumeBackupV1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoPodVolumeBackupV1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoPodVolumeBackupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#api_version DataK8SVeleroIoPodVolumeBackupV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#field_path DataK8SVeleroIoPodVolumeBackupV1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#kind DataK8SVeleroIoPodVolumeBackupV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#name DataK8SVeleroIoPodVolumeBackupV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#namespace DataK8SVeleroIoPodVolumeBackupV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#resource_version DataK8SVeleroIoPodVolumeBackupV1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#uid DataK8SVeleroIoPodVolumeBackupV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SVeleroIoPodVolumeBackupV1ManifestSpecPodToTerraform(struct?: DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoPodVolumeBackupV1ManifestSpecPodToHclTerraform(struct?: DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoPodVolumeBackupV1ManifestSpec {
  /**
  * BackupStorageLocation is the name of the backup storage location where the backup repository is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#backup_storage_location DataK8SVeleroIoPodVolumeBackupV1Manifest#backup_storage_location}
  */
  readonly backupStorageLocation: string;
  /**
  * Node is the name of the node that the Pod is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#node DataK8SVeleroIoPodVolumeBackupV1Manifest#node}
  */
  readonly nodeAttribute: string;
  /**
  * Pod is a reference to the pod containing the volume to be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#pod DataK8SVeleroIoPodVolumeBackupV1Manifest#pod}
  */
  readonly pod: DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod;
  /**
  * RepoIdentifier is the backup repository identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#repo_identifier DataK8SVeleroIoPodVolumeBackupV1Manifest#repo_identifier}
  */
  readonly repoIdentifier: string;
  /**
  * Tags are a map of key-value pairs that should be applied to the volume backup as tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#tags DataK8SVeleroIoPodVolumeBackupV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * UploaderSettings are a map of key-value pairs that should be applied to the uploader configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#uploader_settings DataK8SVeleroIoPodVolumeBackupV1Manifest#uploader_settings}
  */
  readonly uploaderSettings?: { [key: string]: string };
  /**
  * UploaderType is the type of the uploader to handle the data transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#uploader_type DataK8SVeleroIoPodVolumeBackupV1Manifest#uploader_type}
  */
  readonly uploaderType?: string;
  /**
  * Volume is the name of the volume within the Pod to be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#volume DataK8SVeleroIoPodVolumeBackupV1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SVeleroIoPodVolumeBackupV1ManifestSpecToTerraform(struct?: DataK8SVeleroIoPodVolumeBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_location: cdktf.stringToTerraform(struct!.backupStorageLocation),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    pod: dataK8SVeleroIoPodVolumeBackupV1ManifestSpecPodToTerraform(struct!.pod),
    repo_identifier: cdktf.stringToTerraform(struct!.repoIdentifier),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    uploader_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.uploaderSettings),
    uploader_type: cdktf.stringToTerraform(struct!.uploaderType),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SVeleroIoPodVolumeBackupV1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoPodVolumeBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_storage_location: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod: {
      value: dataK8SVeleroIoPodVolumeBackupV1ManifestSpecPodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod",
    },
    repo_identifier: {
      value: cdktf.stringToHclTerraform(struct!.repoIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    uploader_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.uploaderSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    uploader_type: {
      value: cdktf.stringToHclTerraform(struct!.uploaderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoPodVolumeBackupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoPodVolumeBackupV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageLocation = this._backupStorageLocation;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._repoIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoIdentifier = this._repoIdentifier;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._uploaderSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploaderSettings = this._uploaderSettings;
    }
    if (this._uploaderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploaderType = this._uploaderType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoPodVolumeBackupV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageLocation = undefined;
      this._node = undefined;
      this._pod.internalValue = undefined;
      this._repoIdentifier = undefined;
      this._tags = undefined;
      this._uploaderSettings = undefined;
      this._uploaderType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageLocation = value.backupStorageLocation;
      this._node = value.nodeAttribute;
      this._pod.internalValue = value.pod;
      this._repoIdentifier = value.repoIdentifier;
      this._tags = value.tags;
      this._uploaderSettings = value.uploaderSettings;
      this._uploaderType = value.uploaderType;
      this._volume = value.volume;
    }
  }

  // backup_storage_location - computed: false, optional: false, required: true
  private _backupStorageLocation?: string; 
  public get backupStorageLocation() {
    return this.getStringAttribute('backup_storage_location');
  }
  public set backupStorageLocation(value: string) {
    this._backupStorageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageLocationInput() {
    return this._backupStorageLocation;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: false, required: true
  private _pod = new DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SVeleroIoPodVolumeBackupV1ManifestSpecPod) {
    this._pod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // repo_identifier - computed: false, optional: false, required: true
  private _repoIdentifier?: string; 
  public get repoIdentifier() {
    return this.getStringAttribute('repo_identifier');
  }
  public set repoIdentifier(value: string) {
    this._repoIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdentifierInput() {
    return this._repoIdentifier;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uploader_settings - computed: false, optional: true, required: false
  private _uploaderSettings?: { [key: string]: string }; 
  public get uploaderSettings() {
    return this.getStringMapAttribute('uploader_settings');
  }
  public set uploaderSettings(value: { [key: string]: string }) {
    this._uploaderSettings = value;
  }
  public resetUploaderSettings() {
    this._uploaderSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploaderSettingsInput() {
    return this._uploaderSettings;
  }

  // uploader_type - computed: false, optional: true, required: false
  private _uploaderType?: string; 
  public get uploaderType() {
    return this.getStringAttribute('uploader_type');
  }
  public set uploaderType(value: string) {
    this._uploaderType = value;
  }
  public resetUploaderType() {
    this._uploaderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploaderTypeInput() {
    return this._uploaderType;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest k8s_velero_io_pod_volume_backup_v1_manifest}
*/
export class DataK8SVeleroIoPodVolumeBackupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_pod_volume_backup_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoPodVolumeBackupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoPodVolumeBackupV1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoPodVolumeBackupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoPodVolumeBackupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_pod_volume_backup_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/velero_io_pod_volume_backup_v1_manifest k8s_velero_io_pod_volume_backup_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoPodVolumeBackupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoPodVolumeBackupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_pod_volume_backup_v1_manifest',
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
  private _metadata = new DataK8SVeleroIoPodVolumeBackupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoPodVolumeBackupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoPodVolumeBackupV1ManifestSpec) {
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
      metadata: dataK8SVeleroIoPodVolumeBackupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoPodVolumeBackupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoPodVolumeBackupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoPodVolumeBackupV1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoPodVolumeBackupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoPodVolumeBackupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
