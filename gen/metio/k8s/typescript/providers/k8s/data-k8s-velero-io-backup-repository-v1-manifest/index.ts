// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SVeleroIoBackupRepositoryV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#metadata DataK8SVeleroIoBackupRepositoryV1Manifest#metadata}
  */
  readonly metadata: DataK8SVeleroIoBackupRepositoryV1ManifestMetadata;
  /**
  * BackupRepositorySpec is the specification for a BackupRepository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#spec DataK8SVeleroIoBackupRepositoryV1Manifest#spec}
  */
  readonly spec?: DataK8SVeleroIoBackupRepositoryV1ManifestSpec;
}
export interface DataK8SVeleroIoBackupRepositoryV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#annotations DataK8SVeleroIoBackupRepositoryV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#labels DataK8SVeleroIoBackupRepositoryV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#name DataK8SVeleroIoBackupRepositoryV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#namespace DataK8SVeleroIoBackupRepositoryV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SVeleroIoBackupRepositoryV1ManifestMetadataToTerraform(struct?: DataK8SVeleroIoBackupRepositoryV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SVeleroIoBackupRepositoryV1ManifestMetadataToHclTerraform(struct?: DataK8SVeleroIoBackupRepositoryV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SVeleroIoBackupRepositoryV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupRepositoryV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SVeleroIoBackupRepositoryV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SVeleroIoBackupRepositoryV1ManifestSpec {
  /**
  * BackupStorageLocation is the name of the BackupStorageLocation that should contain this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#backup_storage_location DataK8SVeleroIoBackupRepositoryV1Manifest#backup_storage_location}
  */
  readonly backupStorageLocation: string;
  /**
  * MaintenanceFrequency is how often maintenance should be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#maintenance_frequency DataK8SVeleroIoBackupRepositoryV1Manifest#maintenance_frequency}
  */
  readonly maintenanceFrequency: string;
  /**
  * RepositoryConfig is for repository-specific configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#repository_config DataK8SVeleroIoBackupRepositoryV1Manifest#repository_config}
  */
  readonly repositoryConfig?: { [key: string]: string };
  /**
  * RepositoryType indicates the type of the backend repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#repository_type DataK8SVeleroIoBackupRepositoryV1Manifest#repository_type}
  */
  readonly repositoryType?: string;
  /**
  * ResticIdentifier is the full restic-compatible string for identifying this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#restic_identifier DataK8SVeleroIoBackupRepositoryV1Manifest#restic_identifier}
  */
  readonly resticIdentifier: string;
  /**
  * VolumeNamespace is the namespace this backup repository contains pod volume backups for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#volume_namespace DataK8SVeleroIoBackupRepositoryV1Manifest#volume_namespace}
  */
  readonly volumeNamespace: string;
}

export function dataK8SVeleroIoBackupRepositoryV1ManifestSpecToTerraform(struct?: DataK8SVeleroIoBackupRepositoryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_location: cdktf.stringToTerraform(struct!.backupStorageLocation),
    maintenance_frequency: cdktf.stringToTerraform(struct!.maintenanceFrequency),
    repository_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.repositoryConfig),
    repository_type: cdktf.stringToTerraform(struct!.repositoryType),
    restic_identifier: cdktf.stringToTerraform(struct!.resticIdentifier),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SVeleroIoBackupRepositoryV1ManifestSpecToHclTerraform(struct?: DataK8SVeleroIoBackupRepositoryV1ManifestSpec | cdktf.IResolvable): any {
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
    maintenance_frequency: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.repositoryConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repository_type: {
      value: cdktf.stringToHclTerraform(struct!.repositoryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restic_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resticIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SVeleroIoBackupRepositoryV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SVeleroIoBackupRepositoryV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageLocation = this._backupStorageLocation;
    }
    if (this._maintenanceFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceFrequency = this._maintenanceFrequency;
    }
    if (this._repositoryConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryConfig = this._repositoryConfig;
    }
    if (this._repositoryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryType = this._repositoryType;
    }
    if (this._resticIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resticIdentifier = this._resticIdentifier;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SVeleroIoBackupRepositoryV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageLocation = undefined;
      this._maintenanceFrequency = undefined;
      this._repositoryConfig = undefined;
      this._repositoryType = undefined;
      this._resticIdentifier = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageLocation = value.backupStorageLocation;
      this._maintenanceFrequency = value.maintenanceFrequency;
      this._repositoryConfig = value.repositoryConfig;
      this._repositoryType = value.repositoryType;
      this._resticIdentifier = value.resticIdentifier;
      this._volumeNamespace = value.volumeNamespace;
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

  // maintenance_frequency - computed: false, optional: false, required: true
  private _maintenanceFrequency?: string; 
  public get maintenanceFrequency() {
    return this.getStringAttribute('maintenance_frequency');
  }
  public set maintenanceFrequency(value: string) {
    this._maintenanceFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceFrequencyInput() {
    return this._maintenanceFrequency;
  }

  // repository_config - computed: false, optional: true, required: false
  private _repositoryConfig?: { [key: string]: string }; 
  public get repositoryConfig() {
    return this.getStringMapAttribute('repository_config');
  }
  public set repositoryConfig(value: { [key: string]: string }) {
    this._repositoryConfig = value;
  }
  public resetRepositoryConfig() {
    this._repositoryConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConfigInput() {
    return this._repositoryConfig;
  }

  // repository_type - computed: false, optional: true, required: false
  private _repositoryType?: string; 
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }
  public set repositoryType(value: string) {
    this._repositoryType = value;
  }
  public resetRepositoryType() {
    this._repositoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryTypeInput() {
    return this._repositoryType;
  }

  // restic_identifier - computed: false, optional: false, required: true
  private _resticIdentifier?: string; 
  public get resticIdentifier() {
    return this.getStringAttribute('restic_identifier');
  }
  public set resticIdentifier(value: string) {
    this._resticIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resticIdentifierInput() {
    return this._resticIdentifier;
  }

  // volume_namespace - computed: false, optional: false, required: true
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest k8s_velero_io_backup_repository_v1_manifest}
*/
export class DataK8SVeleroIoBackupRepositoryV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_velero_io_backup_repository_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SVeleroIoBackupRepositoryV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SVeleroIoBackupRepositoryV1Manifest to import
  * @param importFromId The id of the existing DataK8SVeleroIoBackupRepositoryV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SVeleroIoBackupRepositoryV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_velero_io_backup_repository_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/velero_io_backup_repository_v1_manifest k8s_velero_io_backup_repository_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SVeleroIoBackupRepositoryV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SVeleroIoBackupRepositoryV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_velero_io_backup_repository_v1_manifest',
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
  private _metadata = new DataK8SVeleroIoBackupRepositoryV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SVeleroIoBackupRepositoryV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SVeleroIoBackupRepositoryV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SVeleroIoBackupRepositoryV1ManifestSpec) {
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
      metadata: dataK8SVeleroIoBackupRepositoryV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SVeleroIoBackupRepositoryV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SVeleroIoBackupRepositoryV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoBackupRepositoryV1ManifestMetadata",
      },
      spec: {
        value: dataK8SVeleroIoBackupRepositoryV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SVeleroIoBackupRepositoryV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
