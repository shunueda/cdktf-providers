// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoDataUploadV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#metadata DataK8SVeleroIoDataUploadV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata;
  /**
  * DataUploadSpec is the specification for a DataUpload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#spec DataK8SVeleroIoDataUploadV2Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec;
}
export interface DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#annotations DataK8SVeleroIoDataUploadV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#labels DataK8SVeleroIoDataUploadV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#name DataK8SVeleroIoDataUploadV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#namespace DataK8SVeleroIoDataUploadV2Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoDataUploadV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoDataUploadV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot {
  /**
  * SnapshotClass is the name of the snapshot class that the volume snapshot is created with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#snapshot_class DataK8SVeleroIoDataUploadV2Alpha1Manifest#snapshot_class}
  */
  readonly snapshotClass?: string;
  /**
  * StorageClass is the name of the storage class of the PVC that the volume snapshot is created from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#storage_class DataK8SVeleroIoDataUploadV2Alpha1Manifest#storage_class}
  */
  readonly storageClass: string;
  /**
  * VolumeSnapshot is the name of the volume snapshot to be backed up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#volume_snapshot DataK8SVeleroIoDataUploadV2Alpha1Manifest#volume_snapshot}
  */
  readonly volumeSnapshot: string;
}

export function dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshotToTerraform(struct?: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_class: cdktf.stringToTerraform(struct!.snapshotClass),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volume_snapshot: cdktf.stringToTerraform(struct!.volumeSnapshot),
  }
}


export function dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshotToHclTerraform(struct?: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snapshot_class: {
      value: cdktf.stringToHclTerraform(struct!.snapshotClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotClass = this._snapshotClass;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumeSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshot = this._volumeSnapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snapshotClass = undefined;
      this._storageClass = undefined;
      this._volumeSnapshot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snapshotClass = value.snapshotClass;
      this._storageClass = value.storageClass;
      this._volumeSnapshot = value.volumeSnapshot;
    }
  }

  // snapshot_class - computed: false, optional: true, required: false
  private _snapshotClass?: string; 
  public get snapshotClass() {
    return this.getStringAttribute('snapshot_class');
  }
  public set snapshotClass(value: string) {
    this._snapshotClass = value;
  }
  public resetSnapshotClass() {
    this._snapshotClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotClassInput() {
    return this._snapshotClass;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volume_snapshot - computed: false, optional: false, required: true
  private _volumeSnapshot?: string; 
  public get volumeSnapshot() {
    return this.getStringAttribute('volume_snapshot');
  }
  public set volumeSnapshot(value: string) {
    this._volumeSnapshot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotInput() {
    return this._volumeSnapshot;
  }
}
export interface DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec {
  /**
  * BackupStorageLocation is the name of the backup storage location where the backup repository is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#backup_storage_location DataK8SVeleroIoDataUploadV2Alpha1Manifest#backup_storage_location}
  */
  readonly backupStorageLocation: string;
  /**
  * Cancel indicates request to cancel the ongoing DataUpload. It can be set when the DataUpload is in InProgress phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#cancel DataK8SVeleroIoDataUploadV2Alpha1Manifest#cancel}
  */
  readonly cancel?: boolean | cdktf.IResolvable;
  /**
  * If SnapshotType is CSI, CSISnapshot provides the information of the CSI snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#csi_snapshot DataK8SVeleroIoDataUploadV2Alpha1Manifest#csi_snapshot}
  */
  readonly csiSnapshot?: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot;
  /**
  * DataMoverConfig is for data-mover-specific configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#data_mover_config DataK8SVeleroIoDataUploadV2Alpha1Manifest#data_mover_config}
  */
  readonly dataMoverConfig?: { [key: string]: string };
  /**
  * DataMover specifies the data mover to be used by the backup. If DataMover is '' or 'velero', the built-in data mover will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#datamover DataK8SVeleroIoDataUploadV2Alpha1Manifest#datamover}
  */
  readonly datamover?: string;
  /**
  * OperationTimeout specifies the time used to wait internal operations, before returning error as timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#operation_timeout DataK8SVeleroIoDataUploadV2Alpha1Manifest#operation_timeout}
  */
  readonly operationTimeout: string;
  /**
  * SnapshotType is the type of the snapshot to be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#snapshot_type DataK8SVeleroIoDataUploadV2Alpha1Manifest#snapshot_type}
  */
  readonly snapshotType: string;
  /**
  * SourceNamespace is the original namespace where the volume is backed up from. It is the same namespace for SourcePVC and CSI namespaced objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#source_namespace DataK8SVeleroIoDataUploadV2Alpha1Manifest#source_namespace}
  */
  readonly sourceNamespace: string;
  /**
  * SourcePVC is the name of the PVC which the snapshot is taken for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#source_pvc DataK8SVeleroIoDataUploadV2Alpha1Manifest#source_pvc}
  */
  readonly sourcePvc: string;
}

export function dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecToTerraform(struct?: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_location: cdktf.stringToTerraform(struct!.backupStorageLocation),
    cancel: cdktf.booleanToTerraform(struct!.cancel),
    csi_snapshot: dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshotToTerraform(struct!.csiSnapshot),
    data_mover_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dataMoverConfig),
    datamover: cdktf.stringToTerraform(struct!.datamover),
    operation_timeout: cdktf.stringToTerraform(struct!.operationTimeout),
    snapshot_type: cdktf.stringToTerraform(struct!.snapshotType),
    source_namespace: cdktf.stringToTerraform(struct!.sourceNamespace),
    source_pvc: cdktf.stringToTerraform(struct!.sourcePvc),
  }
}


export function dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    cancel: {
      value: cdktf.booleanToHclTerraform(struct!.cancel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    csi_snapshot: {
      value: dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshotToHclTerraform(struct!.csiSnapshot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot",
    },
    data_mover_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dataMoverConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    datamover: {
      value: cdktf.stringToHclTerraform(struct!.datamover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.operationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_type: {
      value: cdktf.stringToHclTerraform(struct!.snapshotType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_namespace: {
      value: cdktf.stringToHclTerraform(struct!.sourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_pvc: {
      value: cdktf.stringToHclTerraform(struct!.sourcePvc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageLocation = this._backupStorageLocation;
    }
    if (this._cancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancel = this._cancel;
    }
    if (this._csiSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiSnapshot = this._csiSnapshot?.internalValue;
    }
    if (this._dataMoverConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMoverConfig = this._dataMoverConfig;
    }
    if (this._datamover !== undefined) {
      hasAnyValues = true;
      internalValueResult.datamover = this._datamover;
    }
    if (this._operationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationTimeout = this._operationTimeout;
    }
    if (this._snapshotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotType = this._snapshotType;
    }
    if (this._sourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespace = this._sourceNamespace;
    }
    if (this._sourcePvc !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePvc = this._sourcePvc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageLocation = undefined;
      this._cancel = undefined;
      this._csiSnapshot.internalValue = undefined;
      this._dataMoverConfig = undefined;
      this._datamover = undefined;
      this._operationTimeout = undefined;
      this._snapshotType = undefined;
      this._sourceNamespace = undefined;
      this._sourcePvc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageLocation = value.backupStorageLocation;
      this._cancel = value.cancel;
      this._csiSnapshot.internalValue = value.csiSnapshot;
      this._dataMoverConfig = value.dataMoverConfig;
      this._datamover = value.datamover;
      this._operationTimeout = value.operationTimeout;
      this._snapshotType = value.snapshotType;
      this._sourceNamespace = value.sourceNamespace;
      this._sourcePvc = value.sourcePvc;
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

  // cancel - computed: false, optional: true, required: false
  private _cancel?: boolean | cdktf.IResolvable; 
  public get cancel() {
    return this.getBooleanAttribute('cancel');
  }
  public set cancel(value: boolean | cdktf.IResolvable) {
    this._cancel = value;
  }
  public resetCancel() {
    this._cancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelInput() {
    return this._cancel;
  }

  // csi_snapshot - computed: false, optional: true, required: false
  private _csiSnapshot = new DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshotOutputReference(this, "csi_snapshot");
  public get csiSnapshot() {
    return this._csiSnapshot;
  }
  public putCsiSnapshot(value: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecCsiSnapshot) {
    this._csiSnapshot.internalValue = value;
  }
  public resetCsiSnapshot() {
    this._csiSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiSnapshotInput() {
    return this._csiSnapshot.internalValue;
  }

  // data_mover_config - computed: false, optional: true, required: false
  private _dataMoverConfig?: { [key: string]: string }; 
  public get dataMoverConfig() {
    return this.getStringMapAttribute('data_mover_config');
  }
  public set dataMoverConfig(value: { [key: string]: string }) {
    this._dataMoverConfig = value;
  }
  public resetDataMoverConfig() {
    this._dataMoverConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMoverConfigInput() {
    return this._dataMoverConfig;
  }

  // datamover - computed: false, optional: true, required: false
  private _datamover?: string; 
  public get datamover() {
    return this.getStringAttribute('datamover');
  }
  public set datamover(value: string) {
    this._datamover = value;
  }
  public resetDatamover() {
    this._datamover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamoverInput() {
    return this._datamover;
  }

  // operation_timeout - computed: false, optional: false, required: true
  private _operationTimeout?: string; 
  public get operationTimeout() {
    return this.getStringAttribute('operation_timeout');
  }
  public set operationTimeout(value: string) {
    this._operationTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTimeoutInput() {
    return this._operationTimeout;
  }

  // snapshot_type - computed: false, optional: false, required: true
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // source_namespace - computed: false, optional: false, required: true
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // source_pvc - computed: false, optional: false, required: true
  private _sourcePvc?: string; 
  public get sourcePvc() {
    return this.getStringAttribute('source_pvc');
  }
  public set sourcePvc(value: string) {
    this._sourcePvc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePvcInput() {
    return this._sourcePvc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest k8s_velero_io_data_upload_v2alpha1_manifest}
*/
export class DataK8SVeleroIoDataUploadV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_data_upload_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoDataUploadV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoDataUploadV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoDataUploadV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoDataUploadV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_data_upload_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/velero_io_data_upload_v2alpha1_manifest k8s_velero_io_data_upload_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoDataUploadV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoDataUploadV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_data_upload_v2alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoDataUploadV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec) {
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
      metadata: dataK8SVeleroIoDataUploadV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoDataUploadV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoDataUploadV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoDataUploadV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoDataUploadV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
