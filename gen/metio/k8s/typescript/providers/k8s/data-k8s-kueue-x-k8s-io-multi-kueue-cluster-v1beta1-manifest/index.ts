// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#metadata DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#spec DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec;
}
export interface DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#annotations DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#labels DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#name DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig {
  /**
  * Location of the KubeConfig. If LocationType is Secret then Location is the name of the secret inside the namespace in which the kueue controller manager is running. The config should be stored in the 'kubeconfig' key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#location DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#location}
  */
  readonly location: string;
  /**
  * Type of the KubeConfig location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#location_type DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#location_type}
  */
  readonly locationType: string;
}

export function dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfigToTerraform(struct?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    location_type: cdktf.stringToTerraform(struct!.locationType),
  }
}


export function dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfigToHclTerraform(struct?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._locationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._locationType = value.locationType;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }
}
export interface DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec {
  /**
  * Information how to connect to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#kube_config DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest#kube_config}
  */
  readonly kubeConfig: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig;
}

export function dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecToTerraform(struct?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_config: dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfigToTerraform(struct!.kubeConfig),
  }
}


export function dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_config: {
      value: dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfigToHclTerraform(struct!.kubeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubeConfig.internalValue = value.kubeConfig;
    }
  }

  // kube_config - computed: false, optional: false, required: true
  private _kubeConfig = new DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfigOutputReference(this, "kube_config");
  public get kubeConfig() {
    return this._kubeConfig;
  }
  public putKubeConfig(value: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecKubeConfig) {
    this._kubeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest k8s_kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest}
*/
export class DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKueueXK8SIoMultiKueueClusterV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest k8s_kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kueue_x_k8s_io_multi_kueue_cluster_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec) {
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
      metadata: dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoMultiKueueClusterV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
