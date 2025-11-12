// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#metadata DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata;
  /**
  * MigrationSpec defines the desired state of Migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#spec DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec;
}
export interface DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#annotations DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#labels DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#namespace DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#database_name DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#edited_ddl DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#edited_ddl}
  */
  readonly editedDdl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#generated_ddl DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#generated_ddl}
  */
  readonly generatedDdl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#table_name DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#table_namespace DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest#table_namespace}
  */
  readonly tableNamespace: string;
}

export function dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpecToTerraform(struct?: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    edited_ddl: cdktf.stringToTerraform(struct!.editedDdl),
    generated_ddl: cdktf.stringToTerraform(struct!.generatedDdl),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    table_namespace: cdktf.stringToTerraform(struct!.tableNamespace),
  }
}


export function dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec | cdktf.IResolvable): any {
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
    edited_ddl: {
      value: cdktf.stringToHclTerraform(struct!.editedDdl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_ddl: {
      value: cdktf.stringToHclTerraform(struct!.generatedDdl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_namespace: {
      value: cdktf.stringToHclTerraform(struct!.tableNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._editedDdl !== undefined) {
      hasAnyValues = true;
      internalValueResult.editedDdl = this._editedDdl;
    }
    if (this._generatedDdl !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedDdl = this._generatedDdl;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tableNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamespace = this._tableNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._editedDdl = undefined;
      this._generatedDdl = undefined;
      this._tableName = undefined;
      this._tableNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._editedDdl = value.editedDdl;
      this._generatedDdl = value.generatedDdl;
      this._tableName = value.tableName;
      this._tableNamespace = value.tableNamespace;
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

  // edited_ddl - computed: false, optional: true, required: false
  private _editedDdl?: string; 
  public get editedDdl() {
    return this.getStringAttribute('edited_ddl');
  }
  public set editedDdl(value: string) {
    this._editedDdl = value;
  }
  public resetEditedDdl() {
    this._editedDdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editedDdlInput() {
    return this._editedDdl;
  }

  // generated_ddl - computed: false, optional: true, required: false
  private _generatedDdl?: string; 
  public get generatedDdl() {
    return this.getStringAttribute('generated_ddl');
  }
  public set generatedDdl(value: string) {
    this._generatedDdl = value;
  }
  public resetGeneratedDdl() {
    this._generatedDdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedDdlInput() {
    return this._generatedDdl;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_namespace - computed: false, optional: false, required: true
  private _tableNamespace?: string; 
  public get tableNamespace() {
    return this.getStringAttribute('table_namespace');
  }
  public set tableNamespace(value: string) {
    this._tableNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamespaceInput() {
    return this._tableNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest k8s_schemas_schemahero_io_migration_v1alpha4_manifest}
*/
export class DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_schemas_schemahero_io_migration_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchemasSchemaheroIoMigrationV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_schemas_schemahero_io_migration_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/schemas_schemahero_io_migration_v1alpha4_manifest k8s_schemas_schemahero_io_migration_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_schemas_schemahero_io_migration_v1alpha4_manifest',
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
  private _metadata = new DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec) {
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
      metadata: dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchemasSchemaheroIoMigrationV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
