// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#metadata DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata;
  /**
  * Specification of the checkpoint. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#spec DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#spec}
  */
  readonly spec?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec;
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#annotations DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#labels DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#name DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#namespace DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadataToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec {
  /**
  * Name of the checkpointed container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#container_name DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Name of the VPA object that stored VerticalPodAutoscalerCheckpoint object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#vpa_object_name DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest#vpa_object_name}
  */
  readonly vpaObjectName?: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpecToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    vpa_object_name: cdktf.stringToTerraform(struct!.vpaObjectName),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpa_object_name: {
      value: cdktf.stringToHclTerraform(struct!.vpaObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._vpaObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpaObjectName = this._vpaObjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._vpaObjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._vpaObjectName = value.vpaObjectName;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // vpa_object_name - computed: false, optional: true, required: false
  private _vpaObjectName?: string; 
  public get vpaObjectName() {
    return this.getStringAttribute('vpa_object_name');
  }
  public set vpaObjectName(value: string) {
    this._vpaObjectName = value;
  }
  public resetVpaObjectName() {
    this._vpaObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpaObjectNameInput() {
    return this._vpaObjectName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest k8s_autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest}
*/
export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest k8s_autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_k8s_io_vertical_pod_autoscaler_checkpoint_v1_manifest',
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
  private _metadata = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec) {
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
      metadata: dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerCheckpointV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
