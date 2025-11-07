// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#metadata DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata;
  /**
  * DatabaseClusterRestoreSpec defines the desired state of DatabaseClusterRestore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#spec DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec;
}
export interface DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#annotations DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#labels DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#name DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#namespace DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource {
  /**
  * BackupStorageName is the name of the BackupStorage used for backups. The BackupStorage must be created in the same namespace as the DatabaseCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#backup_storage_name DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#backup_storage_name}
  */
  readonly backupStorageName: string;
  /**
  * Path is the path to the backup file/directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#path DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSourceToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_name: cdktf.stringToTerraform(struct!.backupStorageName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSourceToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable): any {
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

export class DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr {
  /**
  * Date is the UTC date to recover to. The accepted format: '2006-01-02T15:04:05Z'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#date DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#date}
  */
  readonly date?: string;
  /**
  * Type is the type of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#type DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitrToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitrToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable): any {
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

export class DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr | cdktf.IResolvable | undefined) {
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
export interface DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource {
  /**
  * BackupSource is the backup source to restore from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#backup_source DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#backup_source}
  */
  readonly backupSource?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource;
  /**
  * DBClusterBackupName is the name of the DB cluster backup to restore from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#db_cluster_backup_name DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#db_cluster_backup_name}
  */
  readonly dbClusterBackupName?: string;
  /**
  * PITR is the point-in-time recovery configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#pitr DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#pitr}
  */
  readonly pitr?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr;
}

export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_source: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSourceToTerraform(struct!.backupSource),
    db_cluster_backup_name: cdktf.stringToTerraform(struct!.dbClusterBackupName),
    pitr: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitrToTerraform(struct!.pitr),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_source: {
      value: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSourceToHclTerraform(struct!.backupSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource",
    },
    db_cluster_backup_name: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterBackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pitr: {
      value: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitrToHclTerraform(struct!.pitr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource | cdktf.IResolvable | undefined) {
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
  private _backupSource = new DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSourceOutputReference(this, "backup_source");
  public get backupSource() {
    return this._backupSource;
  }
  public putBackupSource(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceBackupSource) {
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
  private _pitr = new DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitrOutputReference(this, "pitr");
  public get pitr() {
    return this._pitr;
  }
  public putPitr(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourcePitr) {
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
export interface DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec {
  /**
  * DataSource defines a data source for restoration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#data_source DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#data_source}
  */
  readonly dataSource: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource;
  /**
  * DBClusterName defines the cluster name to restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#db_cluster_name DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest#db_cluster_name}
  */
  readonly dbClusterName: string;
}

export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceToTerraform(struct!.dataSource),
    db_cluster_name: cdktf.stringToTerraform(struct!.dbClusterName),
  }
}


export function dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source: {
      value: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource",
    },
    db_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dbClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterName = this._dbClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSource.internalValue = undefined;
      this._dbClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSource.internalValue = value.dataSource;
      this._dbClusterName = value.dbClusterName;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource = new DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // db_cluster_name - computed: false, optional: false, required: true
  private _dbClusterName?: string; 
  public get dbClusterName() {
    return this.getStringAttribute('db_cluster_name');
  }
  public set dbClusterName(value: string) {
    this._dbClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterNameInput() {
    return this._dbClusterName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest k8s_everest_percona_com_database_cluster_restore_v1alpha1_manifest}
*/
export class DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_everest_percona_com_database_cluster_restore_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_everest_percona_com_database_cluster_restore_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/everest_percona_com_database_cluster_restore_v1alpha1_manifest k8s_everest_percona_com_database_cluster_restore_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_everest_percona_com_database_cluster_restore_v1alpha1_manifest',
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
  private _metadata = new DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEverestPerconaComDatabaseClusterRestoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
