// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoReplicaV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#metadata DataK8SLonghornIoReplicaV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoReplicaV1Beta2ManifestMetadata;
  /**
  * ReplicaSpec defines the desired state of the Longhorn replica
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#spec DataK8SLonghornIoReplicaV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoReplicaV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoReplicaV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#annotations DataK8SLonghornIoReplicaV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#labels DataK8SLonghornIoReplicaV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#name DataK8SLonghornIoReplicaV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#namespace DataK8SLonghornIoReplicaV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoReplicaV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoReplicaV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoReplicaV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoReplicaV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoReplicaV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoReplicaV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoReplicaV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoReplicaV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#active DataK8SLonghornIoReplicaV1Beta2Manifest#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Deprecated:Replaced by field 'dataEngine'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#backend_store_driver DataK8SLonghornIoReplicaV1Beta2Manifest#backend_store_driver}
  */
  readonly backendStoreDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#backing_image DataK8SLonghornIoReplicaV1Beta2Manifest#backing_image}
  */
  readonly backingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#data_directory_name DataK8SLonghornIoReplicaV1Beta2Manifest#data_directory_name}
  */
  readonly dataDirectoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#data_engine DataK8SLonghornIoReplicaV1Beta2Manifest#data_engine}
  */
  readonly dataEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#desire_state DataK8SLonghornIoReplicaV1Beta2Manifest#desire_state}
  */
  readonly desireState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#disk_id DataK8SLonghornIoReplicaV1Beta2Manifest#disk_id}
  */
  readonly diskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#disk_path DataK8SLonghornIoReplicaV1Beta2Manifest#disk_path}
  */
  readonly diskPath?: string;
  /**
  * Deprecated: Replaced by field 'image'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#engine_image DataK8SLonghornIoReplicaV1Beta2Manifest#engine_image}
  */
  readonly engineImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#engine_name DataK8SLonghornIoReplicaV1Beta2Manifest#engine_name}
  */
  readonly engineName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#eviction_requested DataK8SLonghornIoReplicaV1Beta2Manifest#eviction_requested}
  */
  readonly evictionRequested?: boolean | cdktf.IResolvable;
  /**
  * FailedAt is set when a running replica fails or when a running engine is unable to use a replica for any reason. FailedAt indicates the time the failure occurred. When FailedAt is set, a replica is likely to have useful (though possibly stale) data. A replica with FailedAt set must be rebuilt from a non-failed replica (or it can be used in a salvage if all replicas are failed). FailedAt is cleared before a rebuild or salvage. FailedAt may be later than the corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume controller acknowledges the change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#failed_at DataK8SLonghornIoReplicaV1Beta2Manifest#failed_at}
  */
  readonly failedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#hard_node_affinity DataK8SLonghornIoReplicaV1Beta2Manifest#hard_node_affinity}
  */
  readonly hardNodeAffinity?: string;
  /**
  * HealthyAt is set the first time a replica becomes read/write in an engine after creation or rebuild. HealthyAt indicates the time the last successful rebuild occurred. When HealthyAt is set, a replica is likely to have useful (though possibly stale) data. HealthyAt is cleared before a rebuild. HealthyAt may be later than the corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume controller acknowledges the change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#healthy_at DataK8SLonghornIoReplicaV1Beta2Manifest#healthy_at}
  */
  readonly healthyAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#image DataK8SLonghornIoReplicaV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * LastFailedAt is always set at the same time as FailedAt. Unlike FailedAt, LastFailedAt is never cleared. LastFailedAt is not a reliable indicator of the state of a replica's data. For example, a replica with LastFailedAt may already be healthy and in use again. However, because it is never cleared, it can be compared to LastHealthyAt to help prevent dangerous replica deletion in some corner cases. LastFailedAt may be later than the corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume controller acknowledges the change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#last_failed_at DataK8SLonghornIoReplicaV1Beta2Manifest#last_failed_at}
  */
  readonly lastFailedAt?: string;
  /**
  * LastHealthyAt is set every time a replica becomes read/write in an engine. Unlike HealthyAt, LastHealthyAt is never cleared. LastHealthyAt is not a reliable indicator of the state of a replica's data. For example, a replica with LastHealthyAt set may be in the middle of a rebuild. However, because it is never cleared, it can be compared to LastFailedAt to help prevent dangerous replica deletion in some corner cases. LastHealthyAt may be later than the corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume controller acknowledges the change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#last_healthy_at DataK8SLonghornIoReplicaV1Beta2Manifest#last_healthy_at}
  */
  readonly lastHealthyAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#log_requested DataK8SLonghornIoReplicaV1Beta2Manifest#log_requested}
  */
  readonly logRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#node_id DataK8SLonghornIoReplicaV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#rebuild_retry_count DataK8SLonghornIoReplicaV1Beta2Manifest#rebuild_retry_count}
  */
  readonly rebuildRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#revision_counter_disabled DataK8SLonghornIoReplicaV1Beta2Manifest#revision_counter_disabled}
  */
  readonly revisionCounterDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#salvage_requested DataK8SLonghornIoReplicaV1Beta2Manifest#salvage_requested}
  */
  readonly salvageRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#snapshot_max_count DataK8SLonghornIoReplicaV1Beta2Manifest#snapshot_max_count}
  */
  readonly snapshotMaxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#snapshot_max_size DataK8SLonghornIoReplicaV1Beta2Manifest#snapshot_max_size}
  */
  readonly snapshotMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#unmap_mark_disk_chain_removed_enabled DataK8SLonghornIoReplicaV1Beta2Manifest#unmap_mark_disk_chain_removed_enabled}
  */
  readonly unmapMarkDiskChainRemovedEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#volume_name DataK8SLonghornIoReplicaV1Beta2Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#volume_size DataK8SLonghornIoReplicaV1Beta2Manifest#volume_size}
  */
  readonly volumeSize?: string;
}

export function dataK8SLonghornIoReplicaV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoReplicaV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    backend_store_driver: cdktf.stringToTerraform(struct!.backendStoreDriver),
    backing_image: cdktf.stringToTerraform(struct!.backingImage),
    data_directory_name: cdktf.stringToTerraform(struct!.dataDirectoryName),
    data_engine: cdktf.stringToTerraform(struct!.dataEngine),
    desire_state: cdktf.stringToTerraform(struct!.desireState),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    disk_path: cdktf.stringToTerraform(struct!.diskPath),
    engine_image: cdktf.stringToTerraform(struct!.engineImage),
    engine_name: cdktf.stringToTerraform(struct!.engineName),
    eviction_requested: cdktf.booleanToTerraform(struct!.evictionRequested),
    failed_at: cdktf.stringToTerraform(struct!.failedAt),
    hard_node_affinity: cdktf.stringToTerraform(struct!.hardNodeAffinity),
    healthy_at: cdktf.stringToTerraform(struct!.healthyAt),
    image: cdktf.stringToTerraform(struct!.image),
    last_failed_at: cdktf.stringToTerraform(struct!.lastFailedAt),
    last_healthy_at: cdktf.stringToTerraform(struct!.lastHealthyAt),
    log_requested: cdktf.booleanToTerraform(struct!.logRequested),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    rebuild_retry_count: cdktf.numberToTerraform(struct!.rebuildRetryCount),
    revision_counter_disabled: cdktf.booleanToTerraform(struct!.revisionCounterDisabled),
    salvage_requested: cdktf.booleanToTerraform(struct!.salvageRequested),
    snapshot_max_count: cdktf.numberToTerraform(struct!.snapshotMaxCount),
    snapshot_max_size: cdktf.stringToTerraform(struct!.snapshotMaxSize),
    unmap_mark_disk_chain_removed_enabled: cdktf.booleanToTerraform(struct!.unmapMarkDiskChainRemovedEnabled),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_size: cdktf.stringToTerraform(struct!.volumeSize),
  }
}


export function dataK8SLonghornIoReplicaV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoReplicaV1Beta2ManifestSpec | cdktf.IResolvable): any {
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
    backing_image: {
      value: cdktf.stringToHclTerraform(struct!.backingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_directory_name: {
      value: cdktf.stringToHclTerraform(struct!.dataDirectoryName),
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
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_path: {
      value: cdktf.stringToHclTerraform(struct!.diskPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_image: {
      value: cdktf.stringToHclTerraform(struct!.engineImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_name: {
      value: cdktf.stringToHclTerraform(struct!.engineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_requested: {
      value: cdktf.booleanToHclTerraform(struct!.evictionRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_at: {
      value: cdktf.stringToHclTerraform(struct!.failedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_node_affinity: {
      value: cdktf.stringToHclTerraform(struct!.hardNodeAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthy_at: {
      value: cdktf.stringToHclTerraform(struct!.healthyAt),
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
    last_failed_at: {
      value: cdktf.stringToHclTerraform(struct!.lastFailedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_healthy_at: {
      value: cdktf.stringToHclTerraform(struct!.lastHealthyAt),
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
    rebuild_retry_count: {
      value: cdktf.numberToHclTerraform(struct!.rebuildRetryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    unmap_mark_disk_chain_removed_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unmapMarkDiskChainRemovedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SLonghornIoReplicaV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoReplicaV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._backingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingImage = this._backingImage;
    }
    if (this._dataDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDirectoryName = this._dataDirectoryName;
    }
    if (this._dataEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEngine = this._dataEngine;
    }
    if (this._desireState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desireState = this._desireState;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPath = this._diskPath;
    }
    if (this._engineImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineImage = this._engineImage;
    }
    if (this._engineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineName = this._engineName;
    }
    if (this._evictionRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionRequested = this._evictionRequested;
    }
    if (this._failedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAt = this._failedAt;
    }
    if (this._hardNodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardNodeAffinity = this._hardNodeAffinity;
    }
    if (this._healthyAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyAt = this._healthyAt;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._lastFailedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastFailedAt = this._lastFailedAt;
    }
    if (this._lastHealthyAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastHealthyAt = this._lastHealthyAt;
    }
    if (this._logRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequested = this._logRequested;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._rebuildRetryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildRetryCount = this._rebuildRetryCount;
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
    if (this._unmapMarkDiskChainRemovedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmapMarkDiskChainRemovedEnabled = this._unmapMarkDiskChainRemovedEnabled;
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

  public set internalValue(value: DataK8SLonghornIoReplicaV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._backendStoreDriver = undefined;
      this._backingImage = undefined;
      this._dataDirectoryName = undefined;
      this._dataEngine = undefined;
      this._desireState = undefined;
      this._diskId = undefined;
      this._diskPath = undefined;
      this._engineImage = undefined;
      this._engineName = undefined;
      this._evictionRequested = undefined;
      this._failedAt = undefined;
      this._hardNodeAffinity = undefined;
      this._healthyAt = undefined;
      this._image = undefined;
      this._lastFailedAt = undefined;
      this._lastHealthyAt = undefined;
      this._logRequested = undefined;
      this._nodeId = undefined;
      this._rebuildRetryCount = undefined;
      this._revisionCounterDisabled = undefined;
      this._salvageRequested = undefined;
      this._snapshotMaxCount = undefined;
      this._snapshotMaxSize = undefined;
      this._unmapMarkDiskChainRemovedEnabled = undefined;
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
      this._backingImage = value.backingImage;
      this._dataDirectoryName = value.dataDirectoryName;
      this._dataEngine = value.dataEngine;
      this._desireState = value.desireState;
      this._diskId = value.diskId;
      this._diskPath = value.diskPath;
      this._engineImage = value.engineImage;
      this._engineName = value.engineName;
      this._evictionRequested = value.evictionRequested;
      this._failedAt = value.failedAt;
      this._hardNodeAffinity = value.hardNodeAffinity;
      this._healthyAt = value.healthyAt;
      this._image = value.image;
      this._lastFailedAt = value.lastFailedAt;
      this._lastHealthyAt = value.lastHealthyAt;
      this._logRequested = value.logRequested;
      this._nodeId = value.nodeId;
      this._rebuildRetryCount = value.rebuildRetryCount;
      this._revisionCounterDisabled = value.revisionCounterDisabled;
      this._salvageRequested = value.salvageRequested;
      this._snapshotMaxCount = value.snapshotMaxCount;
      this._snapshotMaxSize = value.snapshotMaxSize;
      this._unmapMarkDiskChainRemovedEnabled = value.unmapMarkDiskChainRemovedEnabled;
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

  // backing_image - computed: false, optional: true, required: false
  private _backingImage?: string; 
  public get backingImage() {
    return this.getStringAttribute('backing_image');
  }
  public set backingImage(value: string) {
    this._backingImage = value;
  }
  public resetBackingImage() {
    this._backingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingImageInput() {
    return this._backingImage;
  }

  // data_directory_name - computed: false, optional: true, required: false
  private _dataDirectoryName?: string; 
  public get dataDirectoryName() {
    return this.getStringAttribute('data_directory_name');
  }
  public set dataDirectoryName(value: string) {
    this._dataDirectoryName = value;
  }
  public resetDataDirectoryName() {
    this._dataDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDirectoryNameInput() {
    return this._dataDirectoryName;
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

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_path - computed: false, optional: true, required: false
  private _diskPath?: string; 
  public get diskPath() {
    return this.getStringAttribute('disk_path');
  }
  public set diskPath(value: string) {
    this._diskPath = value;
  }
  public resetDiskPath() {
    this._diskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPathInput() {
    return this._diskPath;
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

  // engine_name - computed: false, optional: true, required: false
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  public resetEngineName() {
    this._engineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // eviction_requested - computed: false, optional: true, required: false
  private _evictionRequested?: boolean | cdktf.IResolvable; 
  public get evictionRequested() {
    return this.getBooleanAttribute('eviction_requested');
  }
  public set evictionRequested(value: boolean | cdktf.IResolvable) {
    this._evictionRequested = value;
  }
  public resetEvictionRequested() {
    this._evictionRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionRequestedInput() {
    return this._evictionRequested;
  }

  // failed_at - computed: false, optional: true, required: false
  private _failedAt?: string; 
  public get failedAt() {
    return this.getStringAttribute('failed_at');
  }
  public set failedAt(value: string) {
    this._failedAt = value;
  }
  public resetFailedAt() {
    this._failedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAtInput() {
    return this._failedAt;
  }

  // hard_node_affinity - computed: false, optional: true, required: false
  private _hardNodeAffinity?: string; 
  public get hardNodeAffinity() {
    return this.getStringAttribute('hard_node_affinity');
  }
  public set hardNodeAffinity(value: string) {
    this._hardNodeAffinity = value;
  }
  public resetHardNodeAffinity() {
    this._hardNodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardNodeAffinityInput() {
    return this._hardNodeAffinity;
  }

  // healthy_at - computed: false, optional: true, required: false
  private _healthyAt?: string; 
  public get healthyAt() {
    return this.getStringAttribute('healthy_at');
  }
  public set healthyAt(value: string) {
    this._healthyAt = value;
  }
  public resetHealthyAt() {
    this._healthyAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyAtInput() {
    return this._healthyAt;
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

  // last_failed_at - computed: false, optional: true, required: false
  private _lastFailedAt?: string; 
  public get lastFailedAt() {
    return this.getStringAttribute('last_failed_at');
  }
  public set lastFailedAt(value: string) {
    this._lastFailedAt = value;
  }
  public resetLastFailedAt() {
    this._lastFailedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastFailedAtInput() {
    return this._lastFailedAt;
  }

  // last_healthy_at - computed: false, optional: true, required: false
  private _lastHealthyAt?: string; 
  public get lastHealthyAt() {
    return this.getStringAttribute('last_healthy_at');
  }
  public set lastHealthyAt(value: string) {
    this._lastHealthyAt = value;
  }
  public resetLastHealthyAt() {
    this._lastHealthyAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHealthyAtInput() {
    return this._lastHealthyAt;
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

  // rebuild_retry_count - computed: false, optional: true, required: false
  private _rebuildRetryCount?: number; 
  public get rebuildRetryCount() {
    return this.getNumberAttribute('rebuild_retry_count');
  }
  public set rebuildRetryCount(value: number) {
    this._rebuildRetryCount = value;
  }
  public resetRebuildRetryCount() {
    this._rebuildRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildRetryCountInput() {
    return this._rebuildRetryCount;
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

  // unmap_mark_disk_chain_removed_enabled - computed: false, optional: true, required: false
  private _unmapMarkDiskChainRemovedEnabled?: boolean | cdktf.IResolvable; 
  public get unmapMarkDiskChainRemovedEnabled() {
    return this.getBooleanAttribute('unmap_mark_disk_chain_removed_enabled');
  }
  public set unmapMarkDiskChainRemovedEnabled(value: boolean | cdktf.IResolvable) {
    this._unmapMarkDiskChainRemovedEnabled = value;
  }
  public resetUnmapMarkDiskChainRemovedEnabled() {
    this._unmapMarkDiskChainRemovedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmapMarkDiskChainRemovedEnabledInput() {
    return this._unmapMarkDiskChainRemovedEnabled;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest k8s_longhorn_io_replica_v1beta2_manifest}
*/
export class DataK8SLonghornIoReplicaV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_replica_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoReplicaV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoReplicaV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoReplicaV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoReplicaV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_replica_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/longhorn_io_replica_v1beta2_manifest k8s_longhorn_io_replica_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoReplicaV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoReplicaV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_replica_v1beta2_manifest',
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
  private _metadata = new DataK8SLonghornIoReplicaV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoReplicaV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoReplicaV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoReplicaV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoReplicaV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoReplicaV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoReplicaV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoReplicaV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoReplicaV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoReplicaV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
