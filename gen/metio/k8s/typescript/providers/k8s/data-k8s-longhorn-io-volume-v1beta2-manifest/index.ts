// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoVolumeV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#metadata DataK8SLonghornIoVolumeV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoVolumeV1Beta2ManifestMetadata;
  /**
  * VolumeSpec defines the desired state of the Longhorn volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#spec DataK8SLonghornIoVolumeV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoVolumeV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoVolumeV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#annotations DataK8SLonghornIoVolumeV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#labels DataK8SLonghornIoVolumeV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#name DataK8SLonghornIoVolumeV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#namespace DataK8SLonghornIoVolumeV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoVolumeV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoVolumeV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoVolumeV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoVolumeV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoVolumeV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoVolumeV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoVolumeV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoVolumeV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#access_mode DataK8SLonghornIoVolumeV1Beta2Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Deprecated:Replaced by field 'dataEngine'.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#backend_store_driver DataK8SLonghornIoVolumeV1Beta2Manifest#backend_store_driver}
  */
  readonly backendStoreDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#backing_image DataK8SLonghornIoVolumeV1Beta2Manifest#backing_image}
  */
  readonly backingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#backup_compression_method DataK8SLonghornIoVolumeV1Beta2Manifest#backup_compression_method}
  */
  readonly backupCompressionMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#data_engine DataK8SLonghornIoVolumeV1Beta2Manifest#data_engine}
  */
  readonly dataEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#data_locality DataK8SLonghornIoVolumeV1Beta2Manifest#data_locality}
  */
  readonly dataLocality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#data_source DataK8SLonghornIoVolumeV1Beta2Manifest#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#disable_frontend DataK8SLonghornIoVolumeV1Beta2Manifest#disable_frontend}
  */
  readonly disableFrontend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#disk_selector DataK8SLonghornIoVolumeV1Beta2Manifest#disk_selector}
  */
  readonly diskSelector?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#encrypted DataK8SLonghornIoVolumeV1Beta2Manifest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: Replaced by field 'image'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#engine_image DataK8SLonghornIoVolumeV1Beta2Manifest#engine_image}
  */
  readonly engineImage?: string;
  /**
  * Setting that freezes the filesystem on the root partition before a snapshot is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#freeze_filesystem_for_snapshot DataK8SLonghornIoVolumeV1Beta2Manifest#freeze_filesystem_for_snapshot}
  */
  readonly freezeFilesystemForSnapshot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#from_backup DataK8SLonghornIoVolumeV1Beta2Manifest#from_backup}
  */
  readonly fromBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#frontend DataK8SLonghornIoVolumeV1Beta2Manifest#frontend}
  */
  readonly frontend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#image DataK8SLonghornIoVolumeV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#last_attached_by DataK8SLonghornIoVolumeV1Beta2Manifest#last_attached_by}
  */
  readonly lastAttachedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#migratable DataK8SLonghornIoVolumeV1Beta2Manifest#migratable}
  */
  readonly migratable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#migration_node_id DataK8SLonghornIoVolumeV1Beta2Manifest#migration_node_id}
  */
  readonly migrationNodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#node_id DataK8SLonghornIoVolumeV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#node_selector DataK8SLonghornIoVolumeV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#number_of_replicas DataK8SLonghornIoVolumeV1Beta2Manifest#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#replica_auto_balance DataK8SLonghornIoVolumeV1Beta2Manifest#replica_auto_balance}
  */
  readonly replicaAutoBalance?: string;
  /**
  * Replica disk soft anti affinity of the volume. Set enabled to allow replicas to be scheduled in the same disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#replica_disk_soft_anti_affinity DataK8SLonghornIoVolumeV1Beta2Manifest#replica_disk_soft_anti_affinity}
  */
  readonly replicaDiskSoftAntiAffinity?: string;
  /**
  * Replica soft anti affinity of the volume. Set enabled to allow replicas to be scheduled on the same node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#replica_soft_anti_affinity DataK8SLonghornIoVolumeV1Beta2Manifest#replica_soft_anti_affinity}
  */
  readonly replicaSoftAntiAffinity?: string;
  /**
  * Replica zone soft anti affinity of the volume. Set enabled to allow replicas to be scheduled in the same zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#replica_zone_soft_anti_affinity DataK8SLonghornIoVolumeV1Beta2Manifest#replica_zone_soft_anti_affinity}
  */
  readonly replicaZoneSoftAntiAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#restore_volume_recurring_job DataK8SLonghornIoVolumeV1Beta2Manifest#restore_volume_recurring_job}
  */
  readonly restoreVolumeRecurringJob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#revision_counter_disabled DataK8SLonghornIoVolumeV1Beta2Manifest#revision_counter_disabled}
  */
  readonly revisionCounterDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#size DataK8SLonghornIoVolumeV1Beta2Manifest#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#snapshot_data_integrity DataK8SLonghornIoVolumeV1Beta2Manifest#snapshot_data_integrity}
  */
  readonly snapshotDataIntegrity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#snapshot_max_count DataK8SLonghornIoVolumeV1Beta2Manifest#snapshot_max_count}
  */
  readonly snapshotMaxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#snapshot_max_size DataK8SLonghornIoVolumeV1Beta2Manifest#snapshot_max_size}
  */
  readonly snapshotMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#stale_replica_timeout DataK8SLonghornIoVolumeV1Beta2Manifest#stale_replica_timeout}
  */
  readonly staleReplicaTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#standby DataK8SLonghornIoVolumeV1Beta2Manifest#standby}
  */
  readonly standby?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#unmap_mark_snap_chain_removed DataK8SLonghornIoVolumeV1Beta2Manifest#unmap_mark_snap_chain_removed}
  */
  readonly unmapMarkSnapChainRemoved?: string;
}

export function dataK8SLonghornIoVolumeV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoVolumeV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    backend_store_driver: cdktf.stringToTerraform(struct!.backendStoreDriver),
    backing_image: cdktf.stringToTerraform(struct!.backingImage),
    backup_compression_method: cdktf.stringToTerraform(struct!.backupCompressionMethod),
    data_engine: cdktf.stringToTerraform(struct!.dataEngine),
    data_locality: cdktf.stringToTerraform(struct!.dataLocality),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    disable_frontend: cdktf.booleanToTerraform(struct!.disableFrontend),
    disk_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskSelector),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    engine_image: cdktf.stringToTerraform(struct!.engineImage),
    freeze_filesystem_for_snapshot: cdktf.stringToTerraform(struct!.freezeFilesystemForSnapshot),
    from_backup: cdktf.stringToTerraform(struct!.fromBackup),
    frontend: cdktf.stringToTerraform(struct!.frontend),
    image: cdktf.stringToTerraform(struct!.image),
    last_attached_by: cdktf.stringToTerraform(struct!.lastAttachedBy),
    migratable: cdktf.booleanToTerraform(struct!.migratable),
    migration_node_id: cdktf.stringToTerraform(struct!.migrationNodeId),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    node_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeSelector),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    replica_auto_balance: cdktf.stringToTerraform(struct!.replicaAutoBalance),
    replica_disk_soft_anti_affinity: cdktf.stringToTerraform(struct!.replicaDiskSoftAntiAffinity),
    replica_soft_anti_affinity: cdktf.stringToTerraform(struct!.replicaSoftAntiAffinity),
    replica_zone_soft_anti_affinity: cdktf.stringToTerraform(struct!.replicaZoneSoftAntiAffinity),
    restore_volume_recurring_job: cdktf.stringToTerraform(struct!.restoreVolumeRecurringJob),
    revision_counter_disabled: cdktf.booleanToTerraform(struct!.revisionCounterDisabled),
    size: cdktf.stringToTerraform(struct!.size),
    snapshot_data_integrity: cdktf.stringToTerraform(struct!.snapshotDataIntegrity),
    snapshot_max_count: cdktf.numberToTerraform(struct!.snapshotMaxCount),
    snapshot_max_size: cdktf.stringToTerraform(struct!.snapshotMaxSize),
    stale_replica_timeout: cdktf.numberToTerraform(struct!.staleReplicaTimeout),
    standby: cdktf.booleanToTerraform(struct!.standby),
    unmap_mark_snap_chain_removed: cdktf.stringToTerraform(struct!.unmapMarkSnapChainRemoved),
  }
}


export function dataK8SLonghornIoVolumeV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoVolumeV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    backup_compression_method: {
      value: cdktf.stringToHclTerraform(struct!.backupCompressionMethod),
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
    data_locality: {
      value: cdktf.stringToHclTerraform(struct!.dataLocality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
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
    disk_selector: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskSelector),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
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
    freeze_filesystem_for_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.freezeFilesystemForSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_backup: {
      value: cdktf.stringToHclTerraform(struct!.fromBackup),
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
    last_attached_by: {
      value: cdktf.stringToHclTerraform(struct!.lastAttachedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migratable: {
      value: cdktf.booleanToHclTerraform(struct!.migratable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    migration_node_id: {
      value: cdktf.stringToHclTerraform(struct!.migrationNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeSelector),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_auto_balance: {
      value: cdktf.stringToHclTerraform(struct!.replicaAutoBalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_disk_soft_anti_affinity: {
      value: cdktf.stringToHclTerraform(struct!.replicaDiskSoftAntiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_soft_anti_affinity: {
      value: cdktf.stringToHclTerraform(struct!.replicaSoftAntiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_zone_soft_anti_affinity: {
      value: cdktf.stringToHclTerraform(struct!.replicaZoneSoftAntiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_volume_recurring_job: {
      value: cdktf.stringToHclTerraform(struct!.restoreVolumeRecurringJob),
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
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_data_integrity: {
      value: cdktf.stringToHclTerraform(struct!.snapshotDataIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    stale_replica_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staleReplicaTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby: {
      value: cdktf.booleanToHclTerraform(struct!.standby),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unmap_mark_snap_chain_removed: {
      value: cdktf.stringToHclTerraform(struct!.unmapMarkSnapChainRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoVolumeV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoVolumeV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._backendStoreDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendStoreDriver = this._backendStoreDriver;
    }
    if (this._backingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingImage = this._backingImage;
    }
    if (this._backupCompressionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCompressionMethod = this._backupCompressionMethod;
    }
    if (this._dataEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEngine = this._dataEngine;
    }
    if (this._dataLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLocality = this._dataLocality;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._disableFrontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFrontend = this._disableFrontend;
    }
    if (this._diskSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSelector = this._diskSelector;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._engineImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineImage = this._engineImage;
    }
    if (this._freezeFilesystemForSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.freezeFilesystemForSnapshot = this._freezeFilesystemForSnapshot;
    }
    if (this._fromBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromBackup = this._fromBackup;
    }
    if (this._frontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontend = this._frontend;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._lastAttachedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAttachedBy = this._lastAttachedBy;
    }
    if (this._migratable !== undefined) {
      hasAnyValues = true;
      internalValueResult.migratable = this._migratable;
    }
    if (this._migrationNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrationNodeId = this._migrationNodeId;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._replicaAutoBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaAutoBalance = this._replicaAutoBalance;
    }
    if (this._replicaDiskSoftAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaDiskSoftAntiAffinity = this._replicaDiskSoftAntiAffinity;
    }
    if (this._replicaSoftAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSoftAntiAffinity = this._replicaSoftAntiAffinity;
    }
    if (this._replicaZoneSoftAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaZoneSoftAntiAffinity = this._replicaZoneSoftAntiAffinity;
    }
    if (this._restoreVolumeRecurringJob !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreVolumeRecurringJob = this._restoreVolumeRecurringJob;
    }
    if (this._revisionCounterDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionCounterDisabled = this._revisionCounterDisabled;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotDataIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDataIntegrity = this._snapshotDataIntegrity;
    }
    if (this._snapshotMaxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMaxCount = this._snapshotMaxCount;
    }
    if (this._snapshotMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMaxSize = this._snapshotMaxSize;
    }
    if (this._staleReplicaTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleReplicaTimeout = this._staleReplicaTimeout;
    }
    if (this._standby !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby;
    }
    if (this._unmapMarkSnapChainRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmapMarkSnapChainRemoved = this._unmapMarkSnapChainRemoved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoVolumeV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._backendStoreDriver = undefined;
      this._backingImage = undefined;
      this._backupCompressionMethod = undefined;
      this._dataEngine = undefined;
      this._dataLocality = undefined;
      this._dataSource = undefined;
      this._disableFrontend = undefined;
      this._diskSelector = undefined;
      this._encrypted = undefined;
      this._engineImage = undefined;
      this._freezeFilesystemForSnapshot = undefined;
      this._fromBackup = undefined;
      this._frontend = undefined;
      this._image = undefined;
      this._lastAttachedBy = undefined;
      this._migratable = undefined;
      this._migrationNodeId = undefined;
      this._nodeId = undefined;
      this._nodeSelector = undefined;
      this._numberOfReplicas = undefined;
      this._replicaAutoBalance = undefined;
      this._replicaDiskSoftAntiAffinity = undefined;
      this._replicaSoftAntiAffinity = undefined;
      this._replicaZoneSoftAntiAffinity = undefined;
      this._restoreVolumeRecurringJob = undefined;
      this._revisionCounterDisabled = undefined;
      this._size = undefined;
      this._snapshotDataIntegrity = undefined;
      this._snapshotMaxCount = undefined;
      this._snapshotMaxSize = undefined;
      this._staleReplicaTimeout = undefined;
      this._standby = undefined;
      this._unmapMarkSnapChainRemoved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._backendStoreDriver = value.backendStoreDriver;
      this._backingImage = value.backingImage;
      this._backupCompressionMethod = value.backupCompressionMethod;
      this._dataEngine = value.dataEngine;
      this._dataLocality = value.dataLocality;
      this._dataSource = value.dataSource;
      this._disableFrontend = value.disableFrontend;
      this._diskSelector = value.diskSelector;
      this._encrypted = value.encrypted;
      this._engineImage = value.engineImage;
      this._freezeFilesystemForSnapshot = value.freezeFilesystemForSnapshot;
      this._fromBackup = value.fromBackup;
      this._frontend = value.frontend;
      this._image = value.image;
      this._lastAttachedBy = value.lastAttachedBy;
      this._migratable = value.migratable;
      this._migrationNodeId = value.migrationNodeId;
      this._nodeId = value.nodeId;
      this._nodeSelector = value.nodeSelector;
      this._numberOfReplicas = value.numberOfReplicas;
      this._replicaAutoBalance = value.replicaAutoBalance;
      this._replicaDiskSoftAntiAffinity = value.replicaDiskSoftAntiAffinity;
      this._replicaSoftAntiAffinity = value.replicaSoftAntiAffinity;
      this._replicaZoneSoftAntiAffinity = value.replicaZoneSoftAntiAffinity;
      this._restoreVolumeRecurringJob = value.restoreVolumeRecurringJob;
      this._revisionCounterDisabled = value.revisionCounterDisabled;
      this._size = value.size;
      this._snapshotDataIntegrity = value.snapshotDataIntegrity;
      this._snapshotMaxCount = value.snapshotMaxCount;
      this._snapshotMaxSize = value.snapshotMaxSize;
      this._staleReplicaTimeout = value.staleReplicaTimeout;
      this._standby = value.standby;
      this._unmapMarkSnapChainRemoved = value.unmapMarkSnapChainRemoved;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
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

  // backup_compression_method - computed: false, optional: true, required: false
  private _backupCompressionMethod?: string; 
  public get backupCompressionMethod() {
    return this.getStringAttribute('backup_compression_method');
  }
  public set backupCompressionMethod(value: string) {
    this._backupCompressionMethod = value;
  }
  public resetBackupCompressionMethod() {
    this._backupCompressionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCompressionMethodInput() {
    return this._backupCompressionMethod;
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

  // data_locality - computed: false, optional: true, required: false
  private _dataLocality?: string; 
  public get dataLocality() {
    return this.getStringAttribute('data_locality');
  }
  public set dataLocality(value: string) {
    this._dataLocality = value;
  }
  public resetDataLocality() {
    this._dataLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocalityInput() {
    return this._dataLocality;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // disk_selector - computed: false, optional: true, required: false
  private _diskSelector?: string[]; 
  public get diskSelector() {
    return this.getListAttribute('disk_selector');
  }
  public set diskSelector(value: string[]) {
    this._diskSelector = value;
  }
  public resetDiskSelector() {
    this._diskSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSelectorInput() {
    return this._diskSelector;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // freeze_filesystem_for_snapshot - computed: false, optional: true, required: false
  private _freezeFilesystemForSnapshot?: string; 
  public get freezeFilesystemForSnapshot() {
    return this.getStringAttribute('freeze_filesystem_for_snapshot');
  }
  public set freezeFilesystemForSnapshot(value: string) {
    this._freezeFilesystemForSnapshot = value;
  }
  public resetFreezeFilesystemForSnapshot() {
    this._freezeFilesystemForSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeFilesystemForSnapshotInput() {
    return this._freezeFilesystemForSnapshot;
  }

  // from_backup - computed: false, optional: true, required: false
  private _fromBackup?: string; 
  public get fromBackup() {
    return this.getStringAttribute('from_backup');
  }
  public set fromBackup(value: string) {
    this._fromBackup = value;
  }
  public resetFromBackup() {
    this._fromBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromBackupInput() {
    return this._fromBackup;
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

  // last_attached_by - computed: false, optional: true, required: false
  private _lastAttachedBy?: string; 
  public get lastAttachedBy() {
    return this.getStringAttribute('last_attached_by');
  }
  public set lastAttachedBy(value: string) {
    this._lastAttachedBy = value;
  }
  public resetLastAttachedBy() {
    this._lastAttachedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAttachedByInput() {
    return this._lastAttachedBy;
  }

  // migratable - computed: false, optional: true, required: false
  private _migratable?: boolean | cdktf.IResolvable; 
  public get migratable() {
    return this.getBooleanAttribute('migratable');
  }
  public set migratable(value: boolean | cdktf.IResolvable) {
    this._migratable = value;
  }
  public resetMigratable() {
    this._migratable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migratableInput() {
    return this._migratable;
  }

  // migration_node_id - computed: false, optional: true, required: false
  private _migrationNodeId?: string; 
  public get migrationNodeId() {
    return this.getStringAttribute('migration_node_id');
  }
  public set migrationNodeId(value: string) {
    this._migrationNodeId = value;
  }
  public resetMigrationNodeId() {
    this._migrationNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationNodeIdInput() {
    return this._migrationNodeId;
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

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: string[]; 
  public get nodeSelector() {
    return this.getListAttribute('node_selector');
  }
  public set nodeSelector(value: string[]) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // number_of_replicas - computed: false, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // replica_auto_balance - computed: false, optional: true, required: false
  private _replicaAutoBalance?: string; 
  public get replicaAutoBalance() {
    return this.getStringAttribute('replica_auto_balance');
  }
  public set replicaAutoBalance(value: string) {
    this._replicaAutoBalance = value;
  }
  public resetReplicaAutoBalance() {
    this._replicaAutoBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaAutoBalanceInput() {
    return this._replicaAutoBalance;
  }

  // replica_disk_soft_anti_affinity - computed: false, optional: true, required: false
  private _replicaDiskSoftAntiAffinity?: string; 
  public get replicaDiskSoftAntiAffinity() {
    return this.getStringAttribute('replica_disk_soft_anti_affinity');
  }
  public set replicaDiskSoftAntiAffinity(value: string) {
    this._replicaDiskSoftAntiAffinity = value;
  }
  public resetReplicaDiskSoftAntiAffinity() {
    this._replicaDiskSoftAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaDiskSoftAntiAffinityInput() {
    return this._replicaDiskSoftAntiAffinity;
  }

  // replica_soft_anti_affinity - computed: false, optional: true, required: false
  private _replicaSoftAntiAffinity?: string; 
  public get replicaSoftAntiAffinity() {
    return this.getStringAttribute('replica_soft_anti_affinity');
  }
  public set replicaSoftAntiAffinity(value: string) {
    this._replicaSoftAntiAffinity = value;
  }
  public resetReplicaSoftAntiAffinity() {
    this._replicaSoftAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSoftAntiAffinityInput() {
    return this._replicaSoftAntiAffinity;
  }

  // replica_zone_soft_anti_affinity - computed: false, optional: true, required: false
  private _replicaZoneSoftAntiAffinity?: string; 
  public get replicaZoneSoftAntiAffinity() {
    return this.getStringAttribute('replica_zone_soft_anti_affinity');
  }
  public set replicaZoneSoftAntiAffinity(value: string) {
    this._replicaZoneSoftAntiAffinity = value;
  }
  public resetReplicaZoneSoftAntiAffinity() {
    this._replicaZoneSoftAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZoneSoftAntiAffinityInput() {
    return this._replicaZoneSoftAntiAffinity;
  }

  // restore_volume_recurring_job - computed: false, optional: true, required: false
  private _restoreVolumeRecurringJob?: string; 
  public get restoreVolumeRecurringJob() {
    return this.getStringAttribute('restore_volume_recurring_job');
  }
  public set restoreVolumeRecurringJob(value: string) {
    this._restoreVolumeRecurringJob = value;
  }
  public resetRestoreVolumeRecurringJob() {
    this._restoreVolumeRecurringJob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreVolumeRecurringJobInput() {
    return this._restoreVolumeRecurringJob;
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

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_data_integrity - computed: false, optional: true, required: false
  private _snapshotDataIntegrity?: string; 
  public get snapshotDataIntegrity() {
    return this.getStringAttribute('snapshot_data_integrity');
  }
  public set snapshotDataIntegrity(value: string) {
    this._snapshotDataIntegrity = value;
  }
  public resetSnapshotDataIntegrity() {
    this._snapshotDataIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDataIntegrityInput() {
    return this._snapshotDataIntegrity;
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

  // stale_replica_timeout - computed: false, optional: true, required: false
  private _staleReplicaTimeout?: number; 
  public get staleReplicaTimeout() {
    return this.getNumberAttribute('stale_replica_timeout');
  }
  public set staleReplicaTimeout(value: number) {
    this._staleReplicaTimeout = value;
  }
  public resetStaleReplicaTimeout() {
    this._staleReplicaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleReplicaTimeoutInput() {
    return this._staleReplicaTimeout;
  }

  // standby - computed: false, optional: true, required: false
  private _standby?: boolean | cdktf.IResolvable; 
  public get standby() {
    return this.getBooleanAttribute('standby');
  }
  public set standby(value: boolean | cdktf.IResolvable) {
    this._standby = value;
  }
  public resetStandby() {
    this._standby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby;
  }

  // unmap_mark_snap_chain_removed - computed: false, optional: true, required: false
  private _unmapMarkSnapChainRemoved?: string; 
  public get unmapMarkSnapChainRemoved() {
    return this.getStringAttribute('unmap_mark_snap_chain_removed');
  }
  public set unmapMarkSnapChainRemoved(value: string) {
    this._unmapMarkSnapChainRemoved = value;
  }
  public resetUnmapMarkSnapChainRemoved() {
    this._unmapMarkSnapChainRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmapMarkSnapChainRemovedInput() {
    return this._unmapMarkSnapChainRemoved;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest k8s_longhorn_io_volume_v1beta2_manifest}
*/
export class DataK8SLonghornIoVolumeV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_volume_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoVolumeV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoVolumeV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoVolumeV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoVolumeV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_volume_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/longhorn_io_volume_v1beta2_manifest k8s_longhorn_io_volume_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoVolumeV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoVolumeV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_volume_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SLonghornIoVolumeV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoVolumeV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoVolumeV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoVolumeV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoVolumeV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoVolumeV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoVolumeV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoVolumeV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoVolumeV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoVolumeV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
