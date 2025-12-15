// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPgv2PerconaComPerconaPgBackupV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#metadata DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#metadata}
  */
  readonly metadata: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#spec DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#spec}
  */
  readonly spec: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec;
}
export interface DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#annotations DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#labels DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#name DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#namespace DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadataToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadataToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec {
  /**
  * Command line options to include when running the pgBackRest backup command. https://pgbackrest.org/command.html#command-backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#options DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#pg_cluster DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#pg_cluster}
  */
  readonly pgCluster: string;
  /**
  * The name of the pgBackRest repo to run the backup command against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#repo_name DataK8SPgv2PerconaComPerconaPgBackupV2Manifest#repo_name}
  */
  readonly repoName: string;
}

export function dataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpecToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    pg_cluster: cdktf.stringToTerraform(struct!.pgCluster),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
  }
}


export function dataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpecToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pg_cluster: {
      value: cdktf.stringToHclTerraform(struct!.pgCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._pgCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgCluster = this._pgCluster;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._pgCluster = undefined;
      this._repoName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._pgCluster = value.pgCluster;
      this._repoName = value.repoName;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // pg_cluster - computed: false, optional: false, required: true
  private _pgCluster?: string; 
  public get pgCluster() {
    return this.getStringAttribute('pg_cluster');
  }
  public set pgCluster(value: string) {
    this._pgCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgClusterInput() {
    return this._pgCluster;
  }

  // repo_name - computed: false, optional: false, required: true
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest k8s_pgv2_percona_com_percona_pg_backup_v2_manifest}
*/
export class DataK8SPgv2PerconaComPerconaPgBackupV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pgv2_percona_com_percona_pg_backup_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPgv2PerconaComPerconaPgBackupV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPgv2PerconaComPerconaPgBackupV2Manifest to import
  * @param importFromId The id of the existing DataK8SPgv2PerconaComPerconaPgBackupV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPgv2PerconaComPerconaPgBackupV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pgv2_percona_com_percona_pg_backup_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_backup_v2_manifest k8s_pgv2_percona_com_percona_pg_backup_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPgv2PerconaComPerconaPgBackupV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pgv2_percona_com_percona_pg_backup_v2_manifest',
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
  private _metadata = new DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPgv2PerconaComPerconaPgBackupV2ManifestMetadata",
      },
      spec: {
        value: dataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPgv2PerconaComPerconaPgBackupV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
