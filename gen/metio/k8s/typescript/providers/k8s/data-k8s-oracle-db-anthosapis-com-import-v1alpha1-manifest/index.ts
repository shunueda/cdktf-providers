// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#metadata DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata;
  /**
  * ImportSpec defines the desired state of Import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#spec DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec;
}
export interface DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#labels DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec {
  /**
  * DatabaseName is the database resource name within Instance to import into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#database_name DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#database_name}
  */
  readonly databaseName?: string;
  /**
  * GcsLogPath is an optional path in GCS to copy import log to. A user is to ensure proper write access to the bucket from within the Oracle Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#gcs_log_path DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#gcs_log_path}
  */
  readonly gcsLogPath?: string;
  /**
  * GcsPath is a full path to the input file in GCS containing import data. A user is to ensure proper write access to the bucket from within the Oracle Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#gcs_path DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#gcs_path}
  */
  readonly gcsPath?: string;
  /**
  * Instance is the resource name within same namespace to import into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#instance DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#instance}
  */
  readonly instance?: string;
  /**
  * Options is a map of options and their values for usage with the specified Import Type. Right now this is only supported for passing additional impdp specific options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#options DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Type of the Import. If not specified, the default of DataPump is assumed, which is the only supported option currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#type DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    gcs_log_path: cdktf.stringToTerraform(struct!.gcsLogPath),
    gcs_path: cdktf.stringToTerraform(struct!.gcsPath),
    instance: cdktf.stringToTerraform(struct!.instance),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    gcs_log_path: {
      value: cdktf.stringToHclTerraform(struct!.gcsLogPath),
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
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._gcsLogPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsLogPath = this._gcsLogPath;
    }
    if (this._gcsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsPath = this._gcsPath;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._gcsLogPath = undefined;
      this._gcsPath = undefined;
      this._instance = undefined;
      this._options = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._gcsLogPath = value.gcsLogPath;
      this._gcsPath = value.gcsPath;
      this._instance = value.instance;
      this._options = value.options;
      this._type = value.type;
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

  // gcs_log_path - computed: false, optional: true, required: false
  private _gcsLogPath?: string; 
  public get gcsLogPath() {
    return this.getStringAttribute('gcs_log_path');
  }
  public set gcsLogPath(value: string) {
    this._gcsLogPath = value;
  }
  public resetGcsLogPath() {
    this._gcsLogPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsLogPathInput() {
    return this._gcsLogPath;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest k8s_oracle_db_anthosapis_com_import_v1alpha1_manifest}
*/
export class DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_oracle_db_anthosapis_com_import_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOracleDbAnthosapisComImportV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_oracle_db_anthosapis_com_import_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_import_v1alpha1_manifest k8s_oracle_db_anthosapis_com_import_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_oracle_db_anthosapis_com_import_v1alpha1_manifest',
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
  private _metadata = new DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComImportV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
