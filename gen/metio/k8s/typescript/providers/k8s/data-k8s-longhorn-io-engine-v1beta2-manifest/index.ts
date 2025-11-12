// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoEngineV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#metadata DataK8SLonghornIoEngineV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoEngineV1Beta2ManifestMetadata;
  /**
  * EngineSpec defines the desired state of the Longhorn engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#spec DataK8SLonghornIoEngineV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoEngineV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoEngineV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#annotations DataK8SLonghornIoEngineV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#labels DataK8SLonghornIoEngineV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#name DataK8SLonghornIoEngineV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#namespace DataK8SLonghornIoEngineV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoEngineV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoEngineV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoEngineV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoEngineV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoEngineV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoEngineV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoEngineV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoEngineV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#active DataK8SLonghornIoEngineV1Beta2Manifest#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Deprecated:Replaced by field 'dataEngine'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#backend_store_driver DataK8SLonghornIoEngineV1Beta2Manifest#backend_store_driver}
  */
  readonly backendStoreDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#backup_volume DataK8SLonghornIoEngineV1Beta2Manifest#backup_volume}
  */
  readonly backupVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#data_engine DataK8SLonghornIoEngineV1Beta2Manifest#data_engine}
  */
  readonly dataEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#desire_state DataK8SLonghornIoEngineV1Beta2Manifest#desire_state}
  */
  readonly desireState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#disable_frontend DataK8SLonghornIoEngineV1Beta2Manifest#disable_frontend}
  */
  readonly disableFrontend?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: Replaced by field 'image'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#engine_image DataK8SLonghornIoEngineV1Beta2Manifest#engine_image}
  */
  readonly engineImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#frontend DataK8SLonghornIoEngineV1Beta2Manifest#frontend}
  */
  readonly frontend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#image DataK8SLonghornIoEngineV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#log_requested DataK8SLonghornIoEngineV1Beta2Manifest#log_requested}
  */
  readonly logRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#node_id DataK8SLonghornIoEngineV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#replica_address_map DataK8SLonghornIoEngineV1Beta2Manifest#replica_address_map}
  */
  readonly replicaAddressMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#requested_backup_restore DataK8SLonghornIoEngineV1Beta2Manifest#requested_backup_restore}
  */
  readonly requestedBackupRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#requested_data_source DataK8SLonghornIoEngineV1Beta2Manifest#requested_data_source}
  */
  readonly requestedDataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#revision_counter_disabled DataK8SLonghornIoEngineV1Beta2Manifest#revision_counter_disabled}
  */
  readonly revisionCounterDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#salvage_requested DataK8SLonghornIoEngineV1Beta2Manifest#salvage_requested}
  */
  readonly salvageRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#snapshot_max_count DataK8SLonghornIoEngineV1Beta2Manifest#snapshot_max_count}
  */
  readonly snapshotMaxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#snapshot_max_size DataK8SLonghornIoEngineV1Beta2Manifest#snapshot_max_size}
  */
  readonly snapshotMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#unmap_mark_snap_chain_removed_enabled DataK8SLonghornIoEngineV1Beta2Manifest#unmap_mark_snap_chain_removed_enabled}
  */
  readonly unmapMarkSnapChainRemovedEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#upgraded_replica_address_map DataK8SLonghornIoEngineV1Beta2Manifest#upgraded_replica_address_map}
  */
  readonly upgradedReplicaAddressMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#volume_name DataK8SLonghornIoEngineV1Beta2Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#volume_size DataK8SLonghornIoEngineV1Beta2Manifest#volume_size}
  */
  readonly volumeSize?: string;
}

export function dataK8SLonghornIoEngineV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoEngineV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    backend_store_driver: cdktf.stringToTerraform(struct!.backendStoreDriver),
    backup_volume: cdktf.stringToTerraform(struct!.backupVolume),
    data_engine: cdktf.stringToTerraform(struct!.dataEngine),
    desire_state: cdktf.stringToTerraform(struct!.desireState),
    disable_frontend: cdktf.booleanToTerraform(struct!.disableFrontend),
    engine_image: cdktf.stringToTerraform(struct!.engineImage),
    frontend: cdktf.stringToTerraform(struct!.frontend),
    image: cdktf.stringToTerraform(struct!.image),
    log_requested: cdktf.booleanToTerraform(struct!.logRequested),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    replica_address_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.replicaAddressMap),
    requested_backup_restore: cdktf.stringToTerraform(struct!.requestedBackupRestore),
    requested_data_source: cdktf.stringToTerraform(struct!.requestedDataSource),
    revision_counter_disabled: cdktf.booleanToTerraform(struct!.revisionCounterDisabled),
    salvage_requested: cdktf.booleanToTerraform(struct!.salvageRequested),
    snapshot_max_count: cdktf.numberToTerraform(struct!.snapshotMaxCount),
    snapshot_max_size: cdktf.stringToTerraform(struct!.snapshotMaxSize),
    unmap_mark_snap_chain_removed_enabled: cdktf.booleanToTerraform(struct!.unmapMarkSnapChainRemovedEnabled),
    upgraded_replica_address_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.upgradedReplicaAddressMap),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_size: cdktf.stringToTerraform(struct!.volumeSize),
  }
}


export function dataK8SLonghornIoEngineV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoEngineV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_store_driver: {
      value: cdktf.stringToHclTerraform(struct!.backendStoreDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_volume: {
      value: cdktf.stringToHclTerraform(struct!.backupVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_engine: {
      value: cdktf.stringToHclTerraform(struct!.dataEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desire_state: {
      value: cdktf.stringToHclTerraform(struct!.desireState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_frontend: {
      value: cdktf.booleanToHclTerraform(struct!.disableFrontend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine_image: {
      value: cdktf.stringToHclTerraform(struct!.engineImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend: {
      value: cdktf.stringToHclTerraform(struct!.frontend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_requested: {
      value: cdktf.booleanToHclTerraform(struct!.logRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_address_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.replicaAddressMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requested_backup_restore: {
      value: cdktf.stringToHclTerraform(struct!.requestedBackupRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requested_data_source: {
      value: cdktf.stringToHclTerraform(struct!.requestedDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_counter_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.revisionCounterDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    salvage_requested: {
      value: cdktf.booleanToHclTerraform(struct!.salvageRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_max_count: {
      value: cdktf.numberToHclTerraform(struct!.snapshotMaxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_max_size: {
      value: cdktf.stringToHclTerraform(struct!.snapshotMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unmap_mark_snap_chain_removed_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unmapMarkSnapChainRemovedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgraded_replica_address_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.upgradedReplicaAddressMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoEngineV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoEngineV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._backendStoreDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendStoreDriver = this._backendStoreDriver;
    }
    if (this._backupVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupVolume = this._backupVolume;
    }
    if (this._dataEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEngine = this._dataEngine;
    }
    if (this._desireState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desireState = this._desireState;
    }
    if (this._disableFrontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFrontend = this._disableFrontend;
    }
    if (this._engineImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineImage = this._engineImage;
    }
    if (this._frontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontend = this._frontend;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._logRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequested = this._logRequested;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._replicaAddressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaAddressMap = this._replicaAddressMap;
    }
    if (this._requestedBackupRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedBackupRestore = this._requestedBackupRestore;
    }
    if (this._requestedDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedDataSource = this._requestedDataSource;
    }
    if (this._revisionCounterDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionCounterDisabled = this._revisionCounterDisabled;
    }
    if (this._salvageRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.salvageRequested = this._salvageRequested;
    }
    if (this._snapshotMaxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMaxCount = this._snapshotMaxCount;
    }
    if (this._snapshotMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMaxSize = this._snapshotMaxSize;
    }
    if (this._unmapMarkSnapChainRemovedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmapMarkSnapChainRemovedEnabled = this._unmapMarkSnapChainRemovedEnabled;
    }
    if (this._upgradedReplicaAddressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradedReplicaAddressMap = this._upgradedReplicaAddressMap;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoEngineV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._backendStoreDriver = undefined;
      this._backupVolume = undefined;
      this._dataEngine = undefined;
      this._desireState = undefined;
      this._disableFrontend = undefined;
      this._engineImage = undefined;
      this._frontend = undefined;
      this._image = undefined;
      this._logRequested = undefined;
      this._nodeId = undefined;
      this._replicaAddressMap = undefined;
      this._requestedBackupRestore = undefined;
      this._requestedDataSource = undefined;
      this._revisionCounterDisabled = undefined;
      this._salvageRequested = undefined;
      this._snapshotMaxCount = undefined;
      this._snapshotMaxSize = undefined;
      this._unmapMarkSnapChainRemovedEnabled = undefined;
      this._upgradedReplicaAddressMap = undefined;
      this._volumeName = undefined;
      this._volumeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._backendStoreDriver = value.backendStoreDriver;
      this._backupVolume = value.backupVolume;
      this._dataEngine = value.dataEngine;
      this._desireState = value.desireState;
      this._disableFrontend = value.disableFrontend;
      this._engineImage = value.engineImage;
      this._frontend = value.frontend;
      this._image = value.image;
      this._logRequested = value.logRequested;
      this._nodeId = value.nodeId;
      this._replicaAddressMap = value.replicaAddressMap;
      this._requestedBackupRestore = value.requestedBackupRestore;
      this._requestedDataSource = value.requestedDataSource;
      this._revisionCounterDisabled = value.revisionCounterDisabled;
      this._salvageRequested = value.salvageRequested;
      this._snapshotMaxCount = value.snapshotMaxCount;
      this._snapshotMaxSize = value.snapshotMaxSize;
      this._unmapMarkSnapChainRemovedEnabled = value.unmapMarkSnapChainRemovedEnabled;
      this._upgradedReplicaAddressMap = value.upgradedReplicaAddressMap;
      this._volumeName = value.volumeName;
      this._volumeSize = value.volumeSize;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // backend_store_driver - computed: false, optional: true, required: false
  private _backendStoreDriver?: string; 
  public get backendStoreDriver() {
    return this.getStringAttribute('backend_store_driver');
  }
  public set backendStoreDriver(value: string) {
    this._backendStoreDriver = value;
  }
  public resetBackendStoreDriver() {
    this._backendStoreDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendStoreDriverInput() {
    return this._backendStoreDriver;
  }

  // backup_volume - computed: false, optional: true, required: false
  private _backupVolume?: string; 
  public get backupVolume() {
    return this.getStringAttribute('backup_volume');
  }
  public set backupVolume(value: string) {
    this._backupVolume = value;
  }
  public resetBackupVolume() {
    this._backupVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVolumeInput() {
    return this._backupVolume;
  }

  // data_engine - computed: false, optional: true, required: false
  private _dataEngine?: string; 
  public get dataEngine() {
    return this.getStringAttribute('data_engine');
  }
  public set dataEngine(value: string) {
    this._dataEngine = value;
  }
  public resetDataEngine() {
    this._dataEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineInput() {
    return this._dataEngine;
  }

  // desire_state - computed: false, optional: true, required: false
  private _desireState?: string; 
  public get desireState() {
    return this.getStringAttribute('desire_state');
  }
  public set desireState(value: string) {
    this._desireState = value;
  }
  public resetDesireState() {
    this._desireState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desireStateInput() {
    return this._desireState;
  }

  // disable_frontend - computed: false, optional: true, required: false
  private _disableFrontend?: boolean | cdktf.IResolvable; 
  public get disableFrontend() {
    return this.getBooleanAttribute('disable_frontend');
  }
  public set disableFrontend(value: boolean | cdktf.IResolvable) {
    this._disableFrontend = value;
  }
  public resetDisableFrontend() {
    this._disableFrontend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFrontendInput() {
    return this._disableFrontend;
  }

  // engine_image - computed: false, optional: true, required: false
  private _engineImage?: string; 
  public get engineImage() {
    return this.getStringAttribute('engine_image');
  }
  public set engineImage(value: string) {
    this._engineImage = value;
  }
  public resetEngineImage() {
    this._engineImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineImageInput() {
    return this._engineImage;
  }

  // frontend - computed: false, optional: true, required: false
  private _frontend?: string; 
  public get frontend() {
    return this.getStringAttribute('frontend');
  }
  public set frontend(value: string) {
    this._frontend = value;
  }
  public resetFrontend() {
    this._frontend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendInput() {
    return this._frontend;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // log_requested - computed: false, optional: true, required: false
  private _logRequested?: boolean | cdktf.IResolvable; 
  public get logRequested() {
    return this.getBooleanAttribute('log_requested');
  }
  public set logRequested(value: boolean | cdktf.IResolvable) {
    this._logRequested = value;
  }
  public resetLogRequested() {
    this._logRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestedInput() {
    return this._logRequested;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // replica_address_map - computed: false, optional: true, required: false
  private _replicaAddressMap?: { [key: string]: string }; 
  public get replicaAddressMap() {
    return this.getStringMapAttribute('replica_address_map');
  }
  public set replicaAddressMap(value: { [key: string]: string }) {
    this._replicaAddressMap = value;
  }
  public resetReplicaAddressMap() {
    this._replicaAddressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaAddressMapInput() {
    return this._replicaAddressMap;
  }

  // requested_backup_restore - computed: false, optional: true, required: false
  private _requestedBackupRestore?: string; 
  public get requestedBackupRestore() {
    return this.getStringAttribute('requested_backup_restore');
  }
  public set requestedBackupRestore(value: string) {
    this._requestedBackupRestore = value;
  }
  public resetRequestedBackupRestore() {
    this._requestedBackupRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedBackupRestoreInput() {
    return this._requestedBackupRestore;
  }

  // requested_data_source - computed: false, optional: true, required: false
  private _requestedDataSource?: string; 
  public get requestedDataSource() {
    return this.getStringAttribute('requested_data_source');
  }
  public set requestedDataSource(value: string) {
    this._requestedDataSource = value;
  }
  public resetRequestedDataSource() {
    this._requestedDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedDataSourceInput() {
    return this._requestedDataSource;
  }

  // revision_counter_disabled - computed: false, optional: true, required: false
  private _revisionCounterDisabled?: boolean | cdktf.IResolvable; 
  public get revisionCounterDisabled() {
    return this.getBooleanAttribute('revision_counter_disabled');
  }
  public set revisionCounterDisabled(value: boolean | cdktf.IResolvable) {
    this._revisionCounterDisabled = value;
  }
  public resetRevisionCounterDisabled() {
    this._revisionCounterDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionCounterDisabledInput() {
    return this._revisionCounterDisabled;
  }

  // salvage_requested - computed: false, optional: true, required: false
  private _salvageRequested?: boolean | cdktf.IResolvable; 
  public get salvageRequested() {
    return this.getBooleanAttribute('salvage_requested');
  }
  public set salvageRequested(value: boolean | cdktf.IResolvable) {
    this._salvageRequested = value;
  }
  public resetSalvageRequested() {
    this._salvageRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salvageRequestedInput() {
    return this._salvageRequested;
  }

  // snapshot_max_count - computed: false, optional: true, required: false
  private _snapshotMaxCount?: number; 
  public get snapshotMaxCount() {
    return this.getNumberAttribute('snapshot_max_count');
  }
  public set snapshotMaxCount(value: number) {
    this._snapshotMaxCount = value;
  }
  public resetSnapshotMaxCount() {
    this._snapshotMaxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotMaxCountInput() {
    return this._snapshotMaxCount;
  }

  // snapshot_max_size - computed: false, optional: true, required: false
  private _snapshotMaxSize?: string; 
  public get snapshotMaxSize() {
    return this.getStringAttribute('snapshot_max_size');
  }
  public set snapshotMaxSize(value: string) {
    this._snapshotMaxSize = value;
  }
  public resetSnapshotMaxSize() {
    this._snapshotMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotMaxSizeInput() {
    return this._snapshotMaxSize;
  }

  // unmap_mark_snap_chain_removed_enabled - computed: false, optional: true, required: false
  private _unmapMarkSnapChainRemovedEnabled?: boolean | cdktf.IResolvable; 
  public get unmapMarkSnapChainRemovedEnabled() {
    return this.getBooleanAttribute('unmap_mark_snap_chain_removed_enabled');
  }
  public set unmapMarkSnapChainRemovedEnabled(value: boolean | cdktf.IResolvable) {
    this._unmapMarkSnapChainRemovedEnabled = value;
  }
  public resetUnmapMarkSnapChainRemovedEnabled() {
    this._unmapMarkSnapChainRemovedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmapMarkSnapChainRemovedEnabledInput() {
    return this._unmapMarkSnapChainRemovedEnabled;
  }

  // upgraded_replica_address_map - computed: false, optional: true, required: false
  private _upgradedReplicaAddressMap?: { [key: string]: string }; 
  public get upgradedReplicaAddressMap() {
    return this.getStringMapAttribute('upgraded_replica_address_map');
  }
  public set upgradedReplicaAddressMap(value: { [key: string]: string }) {
    this._upgradedReplicaAddressMap = value;
  }
  public resetUpgradedReplicaAddressMap() {
    this._upgradedReplicaAddressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradedReplicaAddressMapInput() {
    return this._upgradedReplicaAddressMap;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: string; 
  public get volumeSize() {
    return this.getStringAttribute('volume_size');
  }
  public set volumeSize(value: string) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest k8s_longhorn_io_engine_v1beta2_manifest}
*/
export class DataK8SLonghornIoEngineV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_engine_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoEngineV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoEngineV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoEngineV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoEngineV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_engine_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_engine_v1beta2_manifest k8s_longhorn_io_engine_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoEngineV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoEngineV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_engine_v1beta2_manifest',
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
  private _metadata = new DataK8SLonghornIoEngineV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoEngineV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoEngineV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoEngineV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoEngineV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoEngineV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoEngineV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoEngineV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoEngineV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoEngineV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
