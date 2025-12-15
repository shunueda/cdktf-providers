// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#metadata DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata;
  /**
  * GlobalClusterSpec defines the desired state of GlobalCluster. A data type representing an Aurora global database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#spec DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec;
}
export interface DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#annotations DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#labels DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec {
  /**
  * The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon Aurora will not create a database in the global database cluster you are creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#database_name DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#database_name}
  */
  readonly databaseName?: string;
  /**
  * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#deletion_protection DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The name of the database engine to be used for this DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#engine DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#engine}
  */
  readonly engine?: string;
  /**
  * The engine version of the Aurora global database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#engine_version DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The cluster identifier of the new global database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#global_cluster_identifier DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#global_cluster_identifier}
  */
  readonly globalClusterIdentifier?: string;
  /**
  * The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#source_db_cluster_identifier DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#source_db_cluster_identifier}
  */
  readonly sourceDbClusterIdentifier?: string;
  /**
  * The storage encryption setting for the new global database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#storage_encrypted DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
}

export function dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    engine: cdktf.stringToTerraform(struct!.engine),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    source_db_cluster_identifier: cdktf.stringToTerraform(struct!.sourceDbClusterIdentifier),
    storage_encrypted: cdktf.booleanToTerraform(struct!.storageEncrypted),
  }
}


export function dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_db_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceDbClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.storageEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._sourceDbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbClusterIdentifier = this._sourceDbClusterIdentifier;
    }
    if (this._storageEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEncrypted = this._storageEncrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._deletionProtection = undefined;
      this._engine = undefined;
      this._engineVersion = undefined;
      this._globalClusterIdentifier = undefined;
      this._sourceDbClusterIdentifier = undefined;
      this._storageEncrypted = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._deletionProtection = value.deletionProtection;
      this._engine = value.engine;
      this._engineVersion = value.engineVersion;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._sourceDbClusterIdentifier = value.sourceDbClusterIdentifier;
      this._storageEncrypted = value.storageEncrypted;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // global_cluster_identifier - computed: false, optional: true, required: false
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  public resetGlobalClusterIdentifier() {
    this._globalClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // source_db_cluster_identifier - computed: false, optional: true, required: false
  private _sourceDbClusterIdentifier?: string; 
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }
  public set sourceDbClusterIdentifier(value: string) {
    this._sourceDbClusterIdentifier = value;
  }
  public resetSourceDbClusterIdentifier() {
    this._sourceDbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbClusterIdentifierInput() {
    return this._sourceDbClusterIdentifier;
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable; 
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest k8s_rds_services_k8s_aws_global_cluster_v1alpha1_manifest}
*/
export class DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rds_services_k8s_aws_global_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rds_services_k8s_aws_global_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/rds_services_k8s_aws_global_cluster_v1alpha1_manifest k8s_rds_services_k8s_aws_global_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rds_services_k8s_aws_global_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsGlobalClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
