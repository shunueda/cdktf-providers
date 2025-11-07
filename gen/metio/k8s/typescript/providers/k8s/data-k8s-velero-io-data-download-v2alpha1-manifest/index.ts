// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoDataDownloadV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#metadata DataK8SVeleroIoDataDownloadV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata;
  /**
  * DataDownloadSpec is the specification for a DataDownload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#spec DataK8SVeleroIoDataDownloadV2Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec;
}
export interface DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#annotations DataK8SVeleroIoDataDownloadV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#labels DataK8SVeleroIoDataDownloadV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#name DataK8SVeleroIoDataDownloadV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#namespace DataK8SVeleroIoDataDownloadV2Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume {
  /**
  * Namespace is the target namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#namespace DataK8SVeleroIoDataDownloadV2Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * PV is the name of the target PV that is created by Velero restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#pv DataK8SVeleroIoDataDownloadV2Alpha1Manifest#pv}
  */
  readonly pv: string;
  /**
  * PVC is the name of the target PVC that is created by Velero restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#pvc DataK8SVeleroIoDataDownloadV2Alpha1Manifest#pvc}
  */
  readonly pvc: string;
}

export function dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolumeToTerraform(struct?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pv: cdktf.stringToTerraform(struct!.pv),
    pvc: cdktf.stringToTerraform(struct!.pvc),
  }
}


export function dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolumeToHclTerraform(struct?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pv: {
      value: cdktf.stringToHclTerraform(struct!.pv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc: {
      value: cdktf.stringToHclTerraform(struct!.pvc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pv !== undefined) {
      hasAnyValues = true;
      internalValueResult.pv = this._pv;
    }
    if (this._pvc !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._pv = undefined;
      this._pvc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._pv = value.pv;
      this._pvc = value.pvc;
    }
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

  // pv - computed: false, optional: false, required: true
  private _pv?: string; 
  public get pv() {
    return this.getStringAttribute('pv');
  }
  public set pv(value: string) {
    this._pv = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvInput() {
    return this._pv;
  }

  // pvc - computed: false, optional: false, required: true
  private _pvc?: string; 
  public get pvc() {
    return this.getStringAttribute('pvc');
  }
  public set pvc(value: string) {
    this._pvc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc;
  }
}
export interface DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec {
  /**
  * BackupStorageLocation is the name of the backup storage location where the backup repository is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#backup_storage_location DataK8SVeleroIoDataDownloadV2Alpha1Manifest#backup_storage_location}
  */
  readonly backupStorageLocation: string;
  /**
  * Cancel indicates request to cancel the ongoing DataDownload. It can be set when the DataDownload is in InProgress phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#cancel DataK8SVeleroIoDataDownloadV2Alpha1Manifest#cancel}
  */
  readonly cancel?: boolean | cdktf.IResolvable;
  /**
  * DataMoverConfig is for data-mover-specific configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#data_mover_config DataK8SVeleroIoDataDownloadV2Alpha1Manifest#data_mover_config}
  */
  readonly dataMoverConfig?: { [key: string]: string };
  /**
  * DataMover specifies the data mover to be used by the backup. If DataMover is '' or 'velero', the built-in data mover will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#datamover DataK8SVeleroIoDataDownloadV2Alpha1Manifest#datamover}
  */
  readonly datamover?: string;
  /**
  * OperationTimeout specifies the time used to wait internal operations, before returning error as timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#operation_timeout DataK8SVeleroIoDataDownloadV2Alpha1Manifest#operation_timeout}
  */
  readonly operationTimeout: string;
  /**
  * SnapshotID is the ID of the Velero backup snapshot to be restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#snapshot_id DataK8SVeleroIoDataDownloadV2Alpha1Manifest#snapshot_id}
  */
  readonly snapshotId: string;
  /**
  * SourceNamespace is the original namespace where the volume is backed up from. It may be different from SourcePVC's namespace if namespace is remapped during restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#source_namespace DataK8SVeleroIoDataDownloadV2Alpha1Manifest#source_namespace}
  */
  readonly sourceNamespace: string;
  /**
  * TargetVolume is the information of the target PVC and PV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#target_volume DataK8SVeleroIoDataDownloadV2Alpha1Manifest#target_volume}
  */
  readonly targetVolume: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume;
}

export function dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecToTerraform(struct?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_location: cdktf.stringToTerraform(struct!.backupStorageLocation),
    cancel: cdktf.booleanToTerraform(struct!.cancel),
    data_mover_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dataMoverConfig),
    datamover: cdktf.stringToTerraform(struct!.datamover),
    operation_timeout: cdktf.stringToTerraform(struct!.operationTimeout),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    source_namespace: cdktf.stringToTerraform(struct!.sourceNamespace),
    target_volume: dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolumeToTerraform(struct!.targetVolume),
  }
}


export function dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
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
    target_volume: {
      value: dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolumeToHclTerraform(struct!.targetVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._sourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespace = this._sourceNamespace;
    }
    if (this._targetVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVolume = this._targetVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageLocation = undefined;
      this._cancel = undefined;
      this._dataMoverConfig = undefined;
      this._datamover = undefined;
      this._operationTimeout = undefined;
      this._snapshotId = undefined;
      this._sourceNamespace = undefined;
      this._targetVolume.internalValue = undefined;
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
      this._dataMoverConfig = value.dataMoverConfig;
      this._datamover = value.datamover;
      this._operationTimeout = value.operationTimeout;
      this._snapshotId = value.snapshotId;
      this._sourceNamespace = value.sourceNamespace;
      this._targetVolume.internalValue = value.targetVolume;
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

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
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

  // target_volume - computed: false, optional: false, required: true
  private _targetVolume = new DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolumeOutputReference(this, "target_volume");
  public get targetVolume() {
    return this._targetVolume;
  }
  public putTargetVolume(value: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecTargetVolume) {
    this._targetVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVolumeInput() {
    return this._targetVolume.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest k8s_velero_io_data_download_v2alpha1_manifest}
*/
export class DataK8SVeleroIoDataDownloadV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_data_download_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoDataDownloadV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoDataDownloadV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoDataDownloadV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoDataDownloadV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_data_download_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_data_download_v2alpha1_manifest k8s_velero_io_data_download_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoDataDownloadV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoDataDownloadV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_data_download_v2alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec) {
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
      metadata: dataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoDataDownloadV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoDataDownloadV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoDataDownloadV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
