// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#metadata DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#metadata}
  */
  readonly metadata: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#spec DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#spec}
  */
  readonly spec?: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec;
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#annotations DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#labels DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#name DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#namespace DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadataToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadataToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#cluster_name DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#compression_level DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#compression_level}
  */
  readonly compressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#compression_type DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#psmdb_cluster DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#psmdb_cluster}
  */
  readonly psmdbCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#storage_name DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#storage_name}
  */
  readonly storageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#type DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpecToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    psmdb_cluster: cdktf.stringToTerraform(struct!.psmdbCluster),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpecToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_level: {
      value: cdktf.numberToHclTerraform(struct!.compressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psmdb_cluster: {
      value: cdktf.stringToHclTerraform(struct!.psmdbCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._compressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLevel = this._compressionLevel;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._psmdbCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.psmdbCluster = this._psmdbCluster;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._compressionLevel = undefined;
      this._compressionType = undefined;
      this._psmdbCluster = undefined;
      this._storageName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._compressionLevel = value.compressionLevel;
      this._compressionType = value.compressionType;
      this._psmdbCluster = value.psmdbCluster;
      this._storageName = value.storageName;
      this._type = value.type;
    }
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // compression_level - computed: false, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // psmdb_cluster - computed: false, optional: true, required: false
  private _psmdbCluster?: string; 
  public get psmdbCluster() {
    return this.getStringAttribute('psmdb_cluster');
  }
  public set psmdbCluster(value: string) {
    this._psmdbCluster = value;
  }
  public resetPsmdbCluster() {
    this._psmdbCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psmdbClusterInput() {
    return this._psmdbCluster;
  }

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest k8s_psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest}
*/
export class DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest to import
  * @param importFromId The id of the existing DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest k8s_psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_psmdb_percona_com_percona_server_mongo_db_backup_v1_manifest',
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
  private _metadata = new DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec) {
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
      metadata: dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbBackupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
