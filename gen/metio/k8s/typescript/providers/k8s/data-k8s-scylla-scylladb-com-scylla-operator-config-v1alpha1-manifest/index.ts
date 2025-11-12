// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#metadata DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata;
  /**
  * spec defines the desired state of the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#spec DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec;
}
export interface DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#annotations DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#labels DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#name DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec {
  /**
  * scyllaUtilsImage is a ScyllaDB image used for running ScyllaDB utilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#scylla_utils_image DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#scylla_utils_image}
  */
  readonly scyllaUtilsImage?: string;
  /**
  * unsupportedBashToolsImageOverride allows to adjust a generic Bash image with extra tools used by the operator for auxiliary purposes. Setting this field renders your cluster unsupported. Use at your own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#unsupported_bash_tools_image_override DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#unsupported_bash_tools_image_override}
  */
  readonly unsupportedBashToolsImageOverride?: string;
  /**
  * unsupportedGrafanaImageOverride allows to adjust Grafana image used by the operator for testing, dev or emergencies. Setting this field renders your cluster unsupported. Use at your own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#unsupported_grafana_image_override DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#unsupported_grafana_image_override}
  */
  readonly unsupportedGrafanaImageOverride?: string;
  /**
  * unsupportedPrometheusVersionOverride allows to adjust Prometheus version used by the operator for testing, dev or emergencies. Setting this field renders your cluster unsupported. Use at your own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#unsupported_prometheus_version_override DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest#unsupported_prometheus_version_override}
  */
  readonly unsupportedPrometheusVersionOverride?: string;
}

export function dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scylla_utils_image: cdktf.stringToTerraform(struct!.scyllaUtilsImage),
    unsupported_bash_tools_image_override: cdktf.stringToTerraform(struct!.unsupportedBashToolsImageOverride),
    unsupported_grafana_image_override: cdktf.stringToTerraform(struct!.unsupportedGrafanaImageOverride),
    unsupported_prometheus_version_override: cdktf.stringToTerraform(struct!.unsupportedPrometheusVersionOverride),
  }
}


export function dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scylla_utils_image: {
      value: cdktf.stringToHclTerraform(struct!.scyllaUtilsImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_bash_tools_image_override: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedBashToolsImageOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_grafana_image_override: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedGrafanaImageOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_prometheus_version_override: {
      value: cdktf.stringToHclTerraform(struct!.unsupportedPrometheusVersionOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scyllaUtilsImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.scyllaUtilsImage = this._scyllaUtilsImage;
    }
    if (this._unsupportedBashToolsImageOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedBashToolsImageOverride = this._unsupportedBashToolsImageOverride;
    }
    if (this._unsupportedGrafanaImageOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedGrafanaImageOverride = this._unsupportedGrafanaImageOverride;
    }
    if (this._unsupportedPrometheusVersionOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedPrometheusVersionOverride = this._unsupportedPrometheusVersionOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scyllaUtilsImage = undefined;
      this._unsupportedBashToolsImageOverride = undefined;
      this._unsupportedGrafanaImageOverride = undefined;
      this._unsupportedPrometheusVersionOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scyllaUtilsImage = value.scyllaUtilsImage;
      this._unsupportedBashToolsImageOverride = value.unsupportedBashToolsImageOverride;
      this._unsupportedGrafanaImageOverride = value.unsupportedGrafanaImageOverride;
      this._unsupportedPrometheusVersionOverride = value.unsupportedPrometheusVersionOverride;
    }
  }

  // scylla_utils_image - computed: false, optional: true, required: false
  private _scyllaUtilsImage?: string; 
  public get scyllaUtilsImage() {
    return this.getStringAttribute('scylla_utils_image');
  }
  public set scyllaUtilsImage(value: string) {
    this._scyllaUtilsImage = value;
  }
  public resetScyllaUtilsImage() {
    this._scyllaUtilsImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scyllaUtilsImageInput() {
    return this._scyllaUtilsImage;
  }

  // unsupported_bash_tools_image_override - computed: false, optional: true, required: false
  private _unsupportedBashToolsImageOverride?: string; 
  public get unsupportedBashToolsImageOverride() {
    return this.getStringAttribute('unsupported_bash_tools_image_override');
  }
  public set unsupportedBashToolsImageOverride(value: string) {
    this._unsupportedBashToolsImageOverride = value;
  }
  public resetUnsupportedBashToolsImageOverride() {
    this._unsupportedBashToolsImageOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedBashToolsImageOverrideInput() {
    return this._unsupportedBashToolsImageOverride;
  }

  // unsupported_grafana_image_override - computed: false, optional: true, required: false
  private _unsupportedGrafanaImageOverride?: string; 
  public get unsupportedGrafanaImageOverride() {
    return this.getStringAttribute('unsupported_grafana_image_override');
  }
  public set unsupportedGrafanaImageOverride(value: string) {
    this._unsupportedGrafanaImageOverride = value;
  }
  public resetUnsupportedGrafanaImageOverride() {
    this._unsupportedGrafanaImageOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedGrafanaImageOverrideInput() {
    return this._unsupportedGrafanaImageOverride;
  }

  // unsupported_prometheus_version_override - computed: false, optional: true, required: false
  private _unsupportedPrometheusVersionOverride?: string; 
  public get unsupportedPrometheusVersionOverride() {
    return this.getStringAttribute('unsupported_prometheus_version_override');
  }
  public set unsupportedPrometheusVersionOverride(value: string) {
    this._unsupportedPrometheusVersionOverride = value;
  }
  public resetUnsupportedPrometheusVersionOverride() {
    this._unsupportedPrometheusVersionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedPrometheusVersionOverrideInput() {
    return this._unsupportedPrometheusVersionOverride;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest k8s_scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest}
*/
export class DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest k8s_scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scylla_scylladb_com_scylla_operator_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SScyllaScylladbComScyllaOperatorConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
