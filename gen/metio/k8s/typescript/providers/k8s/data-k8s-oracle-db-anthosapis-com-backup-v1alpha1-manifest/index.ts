// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#metadata DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata;
  /**
  * BackupSpec defines the desired state of Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#spec DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec;
}
export interface DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#labels DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec {
  /**
  * For a Physical backup this slice can be used to indicate what PDBs, schemas, tablespaces or tables to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#backup_items DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#backup_items}
  */
  readonly backupItems?: string[];
  /**
  * For a Physical backup the choices are Backupset and Image Copies. Backupset is the default, but if Image Copies are required, flip this flag to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#backupset DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#backupset}
  */
  readonly backupset?: boolean | cdktf.IResolvable;
  /**
  * For a Physical backup, optionally turn on an additional 'check logical' option. The default is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#check_logical DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#check_logical}
  */
  readonly checkLogical?: boolean | cdktf.IResolvable;
  /**
  * For a Physical backup, optionally turn on compression, by flipping this flag to true. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#compressed DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * For a Physical backup, optionally indicate a degree of parallelism also known as DOP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#dop DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#dop}
  */
  readonly dop?: number;
  /**
  * For a Physical backup, optionally specify filesperset. The default depends on a type of backup, generally 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#filesperset DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#filesperset}
  */
  readonly filesperset?: number;
  /**
  * Similar to GcsPath but specify a Gcs directory. The backup sets of physical backup will be transferred to this GcsDir under a folder named .backup.Spec.Name. This field is usually set in .backupSchedule.Spec.backSpec to specify a GcsDir which all scheduled backups will be uploaded to. A user is to ensure proper write access to the bucket from within the Oracle Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#gcs_dir DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#gcs_dir}
  */
  readonly gcsDir?: string;
  /**
  * If set up ahead of time, the backup sets of a physical backup can be optionally transferred to a GCS bucket. A user is to ensure proper write access to the bucket from within the Oracle Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#gcs_path DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#gcs_path}
  */
  readonly gcsPath?: string;
  /**
  * Instance is a name of an instance to take a backup for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#instance DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#instance}
  */
  readonly instance?: string;
  /**
  * KeepDataOnDeletion defines whether to keep backup data when backup resource is removed. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#keep_data_on_deletion DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#keep_data_on_deletion}
  */
  readonly keepDataOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * For a Physical backup, optionally specify an incremental level. The default is 0 (the whole database).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#level DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#level}
  */
  readonly level?: number;
  /**
  * For a Physical backup, optionally specify a local backup dir. If omitted, /u03/app/oracle/rman is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#local_path DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Mode specifies how this backup will be managed by the operator. if it is not set, the operator tries to create a backup based on the specifications. if it is set to VerifyExists, the operator verifies the existence of a backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#mode DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * For a Physical backup, optionally specify a section size in various units (K M G).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#section_size DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#section_size}
  */
  readonly sectionSize?: string;
  /**
  * Backup sub-type, which is only relevant for a Physical backup type (e.g. RMAN). If omitted, the default of Instance(Level) is assumed. Supported options at this point are: Instance or Database level backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#sub_type DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#sub_type}
  */
  readonly subType?: string;
  /**
  * For a Physical backup, optionally specify the time threshold. If a threshold is reached, the backup request would time out and error out. The threshold is expressed in minutes. Don't include the unit (minutes), just the integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#time_limit_minutes DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#time_limit_minutes}
  */
  readonly timeLimitMinutes?: number;
  /**
  * Type describes a type of a backup to take. Immutable. Available options are: - Snapshot: storage level disk snapshot. - Physical: database engine specific backup that relies on a redo stream / continuous archiving (WAL) and may allow a PITR. Examples include pg_backup, pgBackRest, mysqlbackup. A Physical backup may be file based or database block based (e.g. Oracle RMAN). - Logical: database engine specific backup that relies on running SQL statements, e.g. mysqldump, pg_dump, expdp. If not specified, the default of Snapshot is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#type DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * VolumeSnapshotClass points to a particular CSI driver and is used for taking a volume snapshot. If requested here at the Backup level, this setting overrides the platform default as well as the default set via the Config (global user preferences).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#volume_snapshot_class DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest#volume_snapshot_class}
  */
  readonly volumeSnapshotClass?: string;
}

export function dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupItems),
    backupset: cdktf.booleanToTerraform(struct!.backupset),
    check_logical: cdktf.booleanToTerraform(struct!.checkLogical),
    compressed: cdktf.booleanToTerraform(struct!.compressed),
    dop: cdktf.numberToTerraform(struct!.dop),
    filesperset: cdktf.numberToTerraform(struct!.filesperset),
    gcs_dir: cdktf.stringToTerraform(struct!.gcsDir),
    gcs_path: cdktf.stringToTerraform(struct!.gcsPath),
    instance: cdktf.stringToTerraform(struct!.instance),
    keep_data_on_deletion: cdktf.booleanToTerraform(struct!.keepDataOnDeletion),
    level: cdktf.numberToTerraform(struct!.level),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    mode: cdktf.stringToTerraform(struct!.mode),
    section_size: cdktf.stringToTerraform(struct!.sectionSize),
    sub_type: cdktf.stringToTerraform(struct!.subType),
    time_limit_minutes: cdktf.numberToTerraform(struct!.timeLimitMinutes),
    type: cdktf.stringToTerraform(struct!.type),
    volume_snapshot_class: cdktf.stringToTerraform(struct!.volumeSnapshotClass),
  }
}


export function dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backupset: {
      value: cdktf.booleanToHclTerraform(struct!.backupset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_logical: {
      value: cdktf.booleanToHclTerraform(struct!.checkLogical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compressed: {
      value: cdktf.booleanToHclTerraform(struct!.compressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dop: {
      value: cdktf.numberToHclTerraform(struct!.dop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filesperset: {
      value: cdktf.numberToHclTerraform(struct!.filesperset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gcs_dir: {
      value: cdktf.stringToHclTerraform(struct!.gcsDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_path: {
      value: cdktf.stringToHclTerraform(struct!.gcsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_data_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.keepDataOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    section_size: {
      value: cdktf.stringToHclTerraform(struct!.sectionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_type: {
      value: cdktf.stringToHclTerraform(struct!.subType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_limit_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeLimitMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot_class: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshotClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupItems = this._backupItems;
    }
    if (this._backupset !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupset = this._backupset;
    }
    if (this._checkLogical !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkLogical = this._checkLogical;
    }
    if (this._compressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._dop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dop = this._dop;
    }
    if (this._filesperset !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesperset = this._filesperset;
    }
    if (this._gcsDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDir = this._gcsDir;
    }
    if (this._gcsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsPath = this._gcsPath;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._keepDataOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDataOnDeletion = this._keepDataOnDeletion;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sectionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionSize = this._sectionSize;
    }
    if (this._subType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subType = this._subType;
    }
    if (this._timeLimitMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeLimitMinutes = this._timeLimitMinutes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumeSnapshotClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotClass = this._volumeSnapshotClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupItems = undefined;
      this._backupset = undefined;
      this._checkLogical = undefined;
      this._compressed = undefined;
      this._dop = undefined;
      this._filesperset = undefined;
      this._gcsDir = undefined;
      this._gcsPath = undefined;
      this._instance = undefined;
      this._keepDataOnDeletion = undefined;
      this._level = undefined;
      this._localPath = undefined;
      this._mode = undefined;
      this._sectionSize = undefined;
      this._subType = undefined;
      this._timeLimitMinutes = undefined;
      this._type = undefined;
      this._volumeSnapshotClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupItems = value.backupItems;
      this._backupset = value.backupset;
      this._checkLogical = value.checkLogical;
      this._compressed = value.compressed;
      this._dop = value.dop;
      this._filesperset = value.filesperset;
      this._gcsDir = value.gcsDir;
      this._gcsPath = value.gcsPath;
      this._instance = value.instance;
      this._keepDataOnDeletion = value.keepDataOnDeletion;
      this._level = value.level;
      this._localPath = value.localPath;
      this._mode = value.mode;
      this._sectionSize = value.sectionSize;
      this._subType = value.subType;
      this._timeLimitMinutes = value.timeLimitMinutes;
      this._type = value.type;
      this._volumeSnapshotClass = value.volumeSnapshotClass;
    }
  }

  // backup_items - computed: false, optional: true, required: false
  private _backupItems?: string[]; 
  public get backupItems() {
    return this.getListAttribute('backup_items');
  }
  public set backupItems(value: string[]) {
    this._backupItems = value;
  }
  public resetBackupItems() {
    this._backupItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupItemsInput() {
    return this._backupItems;
  }

  // backupset - computed: false, optional: true, required: false
  private _backupset?: boolean | cdktf.IResolvable; 
  public get backupset() {
    return this.getBooleanAttribute('backupset');
  }
  public set backupset(value: boolean | cdktf.IResolvable) {
    this._backupset = value;
  }
  public resetBackupset() {
    this._backupset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsetInput() {
    return this._backupset;
  }

  // check_logical - computed: false, optional: true, required: false
  private _checkLogical?: boolean | cdktf.IResolvable; 
  public get checkLogical() {
    return this.getBooleanAttribute('check_logical');
  }
  public set checkLogical(value: boolean | cdktf.IResolvable) {
    this._checkLogical = value;
  }
  public resetCheckLogical() {
    this._checkLogical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkLogicalInput() {
    return this._checkLogical;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktf.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktf.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // dop - computed: false, optional: true, required: false
  private _dop?: number; 
  public get dop() {
    return this.getNumberAttribute('dop');
  }
  public set dop(value: number) {
    this._dop = value;
  }
  public resetDop() {
    this._dop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dopInput() {
    return this._dop;
  }

  // filesperset - computed: false, optional: true, required: false
  private _filesperset?: number; 
  public get filesperset() {
    return this.getNumberAttribute('filesperset');
  }
  public set filesperset(value: number) {
    this._filesperset = value;
  }
  public resetFilesperset() {
    this._filesperset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filespersetInput() {
    return this._filesperset;
  }

  // gcs_dir - computed: false, optional: true, required: false
  private _gcsDir?: string; 
  public get gcsDir() {
    return this.getStringAttribute('gcs_dir');
  }
  public set gcsDir(value: string) {
    this._gcsDir = value;
  }
  public resetGcsDir() {
    this._gcsDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDirInput() {
    return this._gcsDir;
  }

  // gcs_path - computed: false, optional: true, required: false
  private _gcsPath?: string; 
  public get gcsPath() {
    return this.getStringAttribute('gcs_path');
  }
  public set gcsPath(value: string) {
    this._gcsPath = value;
  }
  public resetGcsPath() {
    this._gcsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsPathInput() {
    return this._gcsPath;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // keep_data_on_deletion - computed: false, optional: true, required: false
  private _keepDataOnDeletion?: boolean | cdktf.IResolvable; 
  public get keepDataOnDeletion() {
    return this.getBooleanAttribute('keep_data_on_deletion');
  }
  public set keepDataOnDeletion(value: boolean | cdktf.IResolvable) {
    this._keepDataOnDeletion = value;
  }
  public resetKeepDataOnDeletion() {
    this._keepDataOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDataOnDeletionInput() {
    return this._keepDataOnDeletion;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // section_size - computed: false, optional: true, required: false
  private _sectionSize?: string; 
  public get sectionSize() {
    return this.getStringAttribute('section_size');
  }
  public set sectionSize(value: string) {
    this._sectionSize = value;
  }
  public resetSectionSize() {
    this._sectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionSizeInput() {
    return this._sectionSize;
  }

  // sub_type - computed: false, optional: true, required: false
  private _subType?: string; 
  public get subType() {
    return this.getStringAttribute('sub_type');
  }
  public set subType(value: string) {
    this._subType = value;
  }
  public resetSubType() {
    this._subType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeInput() {
    return this._subType;
  }

  // time_limit_minutes - computed: false, optional: true, required: false
  private _timeLimitMinutes?: number; 
  public get timeLimitMinutes() {
    return this.getNumberAttribute('time_limit_minutes');
  }
  public set timeLimitMinutes(value: number) {
    this._timeLimitMinutes = value;
  }
  public resetTimeLimitMinutes() {
    this._timeLimitMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitMinutesInput() {
    return this._timeLimitMinutes;
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

  // volume_snapshot_class - computed: false, optional: true, required: false
  private _volumeSnapshotClass?: string; 
  public get volumeSnapshotClass() {
    return this.getStringAttribute('volume_snapshot_class');
  }
  public set volumeSnapshotClass(value: string) {
    this._volumeSnapshotClass = value;
  }
  public resetVolumeSnapshotClass() {
    this._volumeSnapshotClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotClassInput() {
    return this._volumeSnapshotClass;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest k8s_oracle_db_anthosapis_com_backup_v1alpha1_manifest}
*/
export class DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_oracle_db_anthosapis_com_backup_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOracleDbAnthosapisComBackupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_oracle_db_anthosapis_com_backup_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/oracle_db_anthosapis_com_backup_v1alpha1_manifest k8s_oracle_db_anthosapis_com_backup_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_oracle_db_anthosapis_com_backup_v1alpha1_manifest',
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
  private _metadata = new DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComBackupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
