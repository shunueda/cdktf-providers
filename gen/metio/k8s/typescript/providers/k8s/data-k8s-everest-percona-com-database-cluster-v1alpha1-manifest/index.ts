// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#metadata DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata;
  /**
  * DatabaseClusterSpec defines the desired state of DatabaseCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#spec DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec;
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#annotations DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#labels DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#namespace DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr {
  /**
  * BackupStorageName is the name of the BackupStorage where the PITR is enabled The BackupStorage must be created in the same namespace as the DatabaseCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#backup_storage_name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#backup_storage_name}
  */
  readonly backupStorageName?: string;
  /**
  * Enabled is a flag to enable PITR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#enabled DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * UploadIntervalSec number of seconds between the binlogs uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#upload_interval_sec DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#upload_interval_sec}
  */
  readonly uploadIntervalSec?: number;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitrToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_name: cdktf.stringToTerraform(struct!.backupStorageName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    upload_interval_sec: cdktf.numberToTerraform(struct!.uploadIntervalSec),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitrToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_storage_name: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upload_interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.uploadIntervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageName = this._backupStorageName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._uploadIntervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadIntervalSec = this._uploadIntervalSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageName = undefined;
      this._enabled = undefined;
      this._uploadIntervalSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageName = value.backupStorageName;
      this._enabled = value.enabled;
      this._uploadIntervalSec = value.uploadIntervalSec;
    }
  }

  // backup_storage_name - computed: false, optional: true, required: false
  private _backupStorageName?: string; 
  public get backupStorageName() {
    return this.getStringAttribute('backup_storage_name');
  }
  public set backupStorageName(value: string) {
    this._backupStorageName = value;
  }
  public resetBackupStorageName() {
    this._backupStorageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageNameInput() {
    return this._backupStorageName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // upload_interval_sec - computed: false, optional: true, required: false
  private _uploadIntervalSec?: number; 
  public get uploadIntervalSec() {
    return this.getNumberAttribute('upload_interval_sec');
  }
  public set uploadIntervalSec(value: number) {
    this._uploadIntervalSec = value;
  }
  public resetUploadIntervalSec() {
    this._uploadIntervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalSecInput() {
    return this._uploadIntervalSec;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules {
  /**
  * BackupStorageName is the name of the BackupStorage CR that defines the storage location. The BackupStorage must be created in the same namespace as the DatabaseCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#backup_storage_name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#backup_storage_name}
  */
  readonly backupStorageName: string;
  /**
  * Enabled is a flag to enable the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#enabled DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * RetentionCopies is the number of backup copies to retain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#retention_copies DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#retention_copies}
  */
  readonly retentionCopies?: number;
  /**
  * Schedule is the cron schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#schedule DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#schedule}
  */
  readonly schedule: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_name: cdktf.stringToTerraform(struct!.backupStorageName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    retention_copies: cdktf.numberToTerraform(struct!.retentionCopies),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_storage_name: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_copies: {
      value: cdktf.numberToHclTerraform(struct!.retentionCopies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageName = this._backupStorageName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retentionCopies !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionCopies = this._retentionCopies;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageName = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._retentionCopies = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageName = value.backupStorageName;
      this._enabled = value.enabled;
      this._name = value.name;
      this._retentionCopies = value.retentionCopies;
      this._schedule = value.schedule;
    }
  }

  // backup_storage_name - computed: false, optional: false, required: true
  private _backupStorageName?: string; 
  public get backupStorageName() {
    return this.getStringAttribute('backup_storage_name');
  }
  public set backupStorageName(value: string) {
    this._backupStorageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageNameInput() {
    return this._backupStorageName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // retention_copies - computed: false, optional: true, required: false
  private _retentionCopies?: number; 
  public get retentionCopies() {
    return this.getNumberAttribute('retention_copies');
  }
  public set retentionCopies(value: number) {
    this._retentionCopies = value;
  }
  public resetRetentionCopies() {
    this._retentionCopies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionCopiesInput() {
    return this._retentionCopies;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesOutputReference {
    return new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup {
  /**
  * Enabled is a flag to enable backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#enabled DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * PITR is the configuration of the point in time recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#pitr DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#pitr}
  */
  readonly pitr?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr;
  /**
  * Schedules is a list of backup schedules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#schedules DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#schedules}
  */
  readonly schedules?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules[] | cdktf.IResolvable;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    pitr: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitrToTerraform(struct!.pitr),
    schedules: cdktf.listMapper(dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesToTerraform, false)(struct!.schedules),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pitr: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitrToHclTerraform(struct!.pitr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr",
    },
    schedules: {
      value: cdktf.listMapperHcl(dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesToHclTerraform, false)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._pitr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitr = this._pitr?.internalValue;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._pitr.internalValue = undefined;
      this._schedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._pitr.internalValue = value.pitr;
      this._schedules.internalValue = value.schedules;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // pitr - computed: false, optional: true, required: false
  private _pitr = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitrOutputReference(this, "pitr");
  public get pitr() {
    return this._pitr;
  }
  public putPitr(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupPitr) {
    this._pitr.internalValue = value;
  }
  public resetPitr() {
    this._pitr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitrInput() {
    return this._pitr.internalValue;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource {
  /**
  * BackupStorageName is the name of the BackupStorage used for backups. The BackupStorage must be created in the same namespace as the DatabaseCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#backup_storage_name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#backup_storage_name}
  */
  readonly backupStorageName: string;
  /**
  * Path is the path to the backup file/directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#path DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSourceToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_name: cdktf.stringToTerraform(struct!.backupStorageName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSourceToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_storage_name: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageName = this._backupStorageName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageName = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageName = value.backupStorageName;
      this._path = value.path;
    }
  }

  // backup_storage_name - computed: false, optional: false, required: true
  private _backupStorageName?: string; 
  public get backupStorageName() {
    return this.getStringAttribute('backup_storage_name');
  }
  public set backupStorageName(value: string) {
    this._backupStorageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageNameInput() {
    return this._backupStorageName;
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
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr {
  /**
  * Date is the UTC date to recover to. The accepted format: '2006-01-02T15:04:05Z'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#date DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#date}
  */
  readonly date?: string;
  /**
  * Type is the type of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#type DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitrToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitrToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._type = value.type;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource {
  /**
  * BackupSource is the backup source to restore from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#backup_source DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#backup_source}
  */
  readonly backupSource?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource;
  /**
  * DBClusterBackupName is the name of the DB cluster backup to restore from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#db_cluster_backup_name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#db_cluster_backup_name}
  */
  readonly dbClusterBackupName?: string;
  /**
  * PITR is the point-in-time recovery configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#pitr DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#pitr}
  */
  readonly pitr?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_source: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSourceToTerraform(struct!.backupSource),
    db_cluster_backup_name: cdktf.stringToTerraform(struct!.dbClusterBackupName),
    pitr: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitrToTerraform(struct!.pitr),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_source: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSourceToHclTerraform(struct!.backupSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource",
    },
    db_cluster_backup_name: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterBackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pitr: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitrToHclTerraform(struct!.pitr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSource = this._backupSource?.internalValue;
    }
    if (this._dbClusterBackupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterBackupName = this._dbClusterBackupName;
    }
    if (this._pitr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitr = this._pitr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupSource.internalValue = undefined;
      this._dbClusterBackupName = undefined;
      this._pitr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupSource.internalValue = value.backupSource;
      this._dbClusterBackupName = value.dbClusterBackupName;
      this._pitr.internalValue = value.pitr;
    }
  }

  // backup_source - computed: false, optional: true, required: false
  private _backupSource = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSourceOutputReference(this, "backup_source");
  public get backupSource() {
    return this._backupSource;
  }
  public putBackupSource(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceBackupSource) {
    this._backupSource.internalValue = value;
  }
  public resetBackupSource() {
    this._backupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceInput() {
    return this._backupSource.internalValue;
  }

  // db_cluster_backup_name - computed: false, optional: true, required: false
  private _dbClusterBackupName?: string; 
  public get dbClusterBackupName() {
    return this.getStringAttribute('db_cluster_backup_name');
  }
  public set dbClusterBackupName(value: string) {
    this._dbClusterBackupName = value;
  }
  public resetDbClusterBackupName() {
    this._dbClusterBackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterBackupNameInput() {
    return this._dbClusterBackupName;
  }

  // pitr - computed: false, optional: true, required: false
  private _pitr = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitrOutputReference(this, "pitr");
  public get pitr() {
    return this._pitr;
  }
  public putPitr(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourcePitr) {
    this._pitr.internalValue = value;
  }
  public resetPitr() {
    this._pitr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitrInput() {
    return this._pitr.internalValue;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources {
  /**
  * CPU is the CPU resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#cpu DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory is the memory resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#memory DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResourcesToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResourcesToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage {
  /**
  * Class is the storage class to use for the persistent volume claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#class DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#class}
  */
  readonly class?: string;
  /**
  * Size is the size of the persistent volume claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#size DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#size}
  */
  readonly size: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorageToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorageToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._size = value.size;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine {
  /**
  * Config is the engine configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#config DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: string;
  /**
  * CRVersion is the desired version of the CR to use with the underlying operator. If unspecified, everest-operator will use the same version as the operator. NOTE: Updating this property post installation may lead to a restart of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#cr_version DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#cr_version}
  */
  readonly crVersion?: string;
  /**
  * Replicas is the number of engine replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#replicas DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources are the resource limits for each engine replica. If not set, resource limits are not imposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#resources DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources;
  /**
  * Storage is the engine storage configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#storage DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#storage}
  */
  readonly storage: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage;
  /**
  * Type is the engine type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#type DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * UserSecretsName is the name of the secret containing the user secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#user_secrets_name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#user_secrets_name}
  */
  readonly userSecretsName?: string;
  /**
  * Version is the engine version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#version DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    cr_version: cdktf.stringToTerraform(struct!.crVersion),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResourcesToTerraform(struct!.resources),
    storage: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorageToTerraform(struct!.storage),
    type: cdktf.stringToTerraform(struct!.type),
    user_secrets_name: cdktf.stringToTerraform(struct!.userSecretsName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cr_version: {
      value: cdktf.stringToHclTerraform(struct!.crVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources",
    },
    storage: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_secrets_name: {
      value: cdktf.stringToHclTerraform(struct!.userSecretsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._crVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.crVersion = this._crVersion;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userSecretsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSecretsName = this._userSecretsName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._crVersion = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._type = undefined;
      this._userSecretsName = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._crVersion = value.crVersion;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._storage.internalValue = value.storage;
      this._type = value.type;
      this._userSecretsName = value.userSecretsName;
      this._version = value.version;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // cr_version - computed: false, optional: true, required: false
  private _crVersion?: string; 
  public get crVersion() {
    return this.getStringAttribute('cr_version');
  }
  public set crVersion(value: string) {
    this._crVersion = value;
  }
  public resetCrVersion() {
    this._crVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crVersionInput() {
    return this._crVersion;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_secrets_name - computed: false, optional: true, required: false
  private _userSecretsName?: string; 
  public get userSecretsName() {
    return this.getStringAttribute('user_secrets_name');
  }
  public set userSecretsName(value: string) {
    this._userSecretsName = value;
  }
  public resetUserSecretsName() {
    this._userSecretsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSecretsNameInput() {
    return this._userSecretsName;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#request DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsOutputReference {
    return new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#claims DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#limits DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#requests DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring {
  /**
  * MonitoringConfigName is the name of a monitoringConfig CR. The MonitoringConfig must be created in the same namespace as the DatabaseCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#monitoring_config_name DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#monitoring_config_name}
  */
  readonly monitoringConfigName?: string;
  /**
  * Resources defines resource limitations for the monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#resources DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitoring_config_name: cdktf.stringToTerraform(struct!.monitoringConfigName),
    resources: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitoring_config_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoringConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfigName = this._monitoringConfigName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitoringConfigName = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitoringConfigName = value.monitoringConfigName;
      this._resources.internalValue = value.resources;
    }
  }

  // monitoring_config_name - computed: false, optional: true, required: false
  private _monitoringConfigName?: string; 
  public get monitoringConfigName() {
    return this.getStringAttribute('monitoring_config_name');
  }
  public set monitoringConfigName(value: string) {
    this._monitoringConfigName = value;
  }
  public resetMonitoringConfigName() {
    this._monitoringConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigNameInput() {
    return this._monitoringConfigName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose {
  /**
  * IPSourceRanges is the list of IP source ranges (CIDR notation) to allow access from. If not set, there is no limitations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#ip_source_ranges DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#ip_source_ranges}
  */
  readonly ipSourceRanges?: string[];
  /**
  * Type is the expose type, can be internal or external
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#type DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExposeToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSourceRanges),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExposeToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExposeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSourceRanges = this._ipSourceRanges;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSourceRanges = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSourceRanges = value.ipSourceRanges;
      this._type = value.type;
    }
  }

  // ip_source_ranges - computed: false, optional: true, required: false
  private _ipSourceRanges?: string[]; 
  public get ipSourceRanges() {
    return this.getListAttribute('ip_source_ranges');
  }
  public set ipSourceRanges(value: string[]) {
    this._ipSourceRanges = value;
  }
  public resetIpSourceRanges() {
    this._ipSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceRangesInput() {
    return this._ipSourceRanges;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources {
  /**
  * CPU is the CPU resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#cpu DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory is the memory resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#memory DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResourcesToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResourcesToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy {
  /**
  * Config is the proxy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#config DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#config}
  */
  readonly config?: string;
  /**
  * Expose is the proxy expose configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#expose DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#expose}
  */
  readonly expose?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose;
  /**
  * Replicas is the number of proxy replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#replicas DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources are the resource limits for each proxy replica. If not set, resource limits are not imposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#resources DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources;
  /**
  * Type is the proxy type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#type DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    expose: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExposeToTerraform(struct!.expose),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResourcesToTerraform(struct!.resources),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expose: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExposeToHclTerraform(struct!.expose),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._expose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expose = this._expose?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._expose.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._expose.internalValue = value.expose;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // expose - computed: false, optional: true, required: false
  private _expose = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExposeOutputReference(this, "expose");
  public get expose() {
    return this._expose;
  }
  public putExpose(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyExpose) {
    this._expose.internalValue = value;
  }
  public resetExpose() {
    this._expose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer {
  /**
  * Replicas is the amount of configServers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#replicas DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas: number;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServerToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServerToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicas = value.replicas;
    }
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding {
  /**
  * ConfigServer represents the sharding configuration server settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#config_server DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#config_server}
  */
  readonly configServer: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer;
  /**
  * Enabled defines if the sharding is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#enabled DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Shards defines the number of shards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#shards DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#shards}
  */
  readonly shards: number;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_server: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServerToTerraform(struct!.configServer),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    shards: cdktf.numberToTerraform(struct!.shards),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_server: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServerToHclTerraform(struct!.configServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shards: {
      value: cdktf.numberToHclTerraform(struct!.shards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configServer = this._configServer?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._shards !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configServer.internalValue = undefined;
      this._enabled = undefined;
      this._shards = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configServer.internalValue = value.configServer;
      this._enabled = value.enabled;
      this._shards = value.shards;
    }
  }

  // config_server - computed: false, optional: false, required: true
  private _configServer = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServerOutputReference(this, "config_server");
  public get configServer() {
    return this._configServer;
  }
  public putConfigServer(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingConfigServer) {
    this._configServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerInput() {
    return this._configServer.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // shards - computed: false, optional: false, required: true
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards;
  }
}
export interface DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec {
  /**
  * AllowUnsafeConfiguration field used to ensure that the user can create configurations unfit for production use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#allow_unsafe_configuration DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#allow_unsafe_configuration}
  */
  readonly allowUnsafeConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Backup is the backup specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#backup DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#backup}
  */
  readonly backup?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup;
  /**
  * DataSource defines a data source for bootstraping a new cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#data_source DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource;
  /**
  * Engine is the database engine specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#engine DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#engine}
  */
  readonly engine: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine;
  /**
  * Monitoring is the monitoring configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#monitoring DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring;
  /**
  * Paused is a flag to stop the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#paused DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Proxy is the proxy specification. If not set, an appropriate proxy specification will be applied for the given engine. A common use case for setting this field is to control the external access to the database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#proxy DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#proxy}
  */
  readonly proxy?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy;
  /**
  * Sharding is the sharding configuration. PSMDB-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#sharding DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest#sharding}
  */
  readonly sharding?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding;
}

export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unsafe_configuration: cdktf.booleanToTerraform(struct!.allowUnsafeConfiguration),
    backup: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupToTerraform(struct!.backup),
    data_source: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceToTerraform(struct!.dataSource),
    engine: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineToTerraform(struct!.engine),
    monitoring: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    paused: cdktf.booleanToTerraform(struct!.paused),
    proxy: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyToTerraform(struct!.proxy),
    sharding: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingToTerraform(struct!.sharding),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unsafe_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnsafeConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup",
    },
    data_source: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource",
    },
    engine: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineToHclTerraform(struct!.engine),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine",
    },
    monitoring: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy",
    },
    sharding: {
      value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingToHclTerraform(struct!.sharding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnsafeConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnsafeConfiguration = this._allowUnsafeConfiguration;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._engine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._sharding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharding = this._sharding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUnsafeConfiguration = undefined;
      this._backup.internalValue = undefined;
      this._dataSource.internalValue = undefined;
      this._engine.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._paused = undefined;
      this._proxy.internalValue = undefined;
      this._sharding.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowUnsafeConfiguration = value.allowUnsafeConfiguration;
      this._backup.internalValue = value.backup;
      this._dataSource.internalValue = value.dataSource;
      this._engine.internalValue = value.engine;
      this._monitoring.internalValue = value.monitoring;
      this._paused = value.paused;
      this._proxy.internalValue = value.proxy;
      this._sharding.internalValue = value.sharding;
    }
  }

  // allow_unsafe_configuration - computed: false, optional: true, required: false
  private _allowUnsafeConfiguration?: boolean | cdktf.IResolvable; 
  public get allowUnsafeConfiguration() {
    return this.getBooleanAttribute('allow_unsafe_configuration');
  }
  public set allowUnsafeConfiguration(value: boolean | cdktf.IResolvable) {
    this._allowUnsafeConfiguration = value;
  }
  public resetAllowUnsafeConfiguration() {
    this._allowUnsafeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnsafeConfigurationInput() {
    return this._allowUnsafeConfiguration;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // engine - computed: false, optional: false, required: true
  private _engine = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngineOutputReference(this, "engine");
  public get engine() {
    return this._engine;
  }
  public putEngine(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecEngine) {
    this._engine.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // sharding - computed: false, optional: true, required: false
  private _sharding = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecShardingOutputReference(this, "sharding");
  public get sharding() {
    return this._sharding;
  }
  public putSharding(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecSharding) {
    this._sharding.internalValue = value;
  }
  public resetSharding() {
    this._sharding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingInput() {
    return this._sharding.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest k8s_everest_percona_com_database_cluster_v1alpha1_manifest}
*/
export class DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_everest_percona_com_database_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEverestPerconaComDatabaseClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_everest_percona_com_database_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/everest_percona_com_database_cluster_v1alpha1_manifest k8s_everest_percona_com_database_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_everest_percona_com_database_cluster_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEverestPerconaComDatabaseClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
