// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#metadata DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata;
  /**
  * Specification of the behavior of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#spec DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#spec}
  */
  readonly spec: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec;
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#annotations DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#labels DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#namespace DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadataToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders {
  /**
  * Name of the recommender responsible for generating recommendation for this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersOutputReference {
    return new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies {
  /**
  * Name of the container or DefaultContainerResourcePolicy, in which case the policy is used by the containers that don't have their own policy specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#container_name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the type of recommendations that will be computed (and possibly applied) by VPA. If not specified, the default of [ResourceCPU, ResourceMemory] will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#controlled_resources DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#controlled_resources}
  */
  readonly controlledResources?: string[];
  /**
  * Specifies which resource values should be controlled. The default is 'RequestsAndLimits'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#controlled_values DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#controlled_values}
  */
  readonly controlledValues?: string;
  /**
  * Specifies the maximum amount of resources that will be recommended for the container. The default is no maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#max_allowed DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#max_allowed}
  */
  readonly maxAllowed?: { [key: string]: string };
  /**
  * Specifies the minimal amount of resources that will be recommended for the container. The default is no minimum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#min_allowed DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#min_allowed}
  */
  readonly minAllowed?: { [key: string]: string };
  /**
  * Whether autoscaler is enabled for the container. The default is 'Auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#mode DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    controlled_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controlledResources),
    controlled_values: cdktf.stringToTerraform(struct!.controlledValues),
    max_allowed: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.maxAllowed),
    min_allowed: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.minAllowed),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable): any {
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
    controlled_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controlledResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    controlled_values: {
      value: cdktf.stringToHclTerraform(struct!.controlledValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_allowed: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.maxAllowed),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_allowed: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.minAllowed),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._controlledResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlledResources = this._controlledResources;
    }
    if (this._controlledValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlledValues = this._controlledValues;
    }
    if (this._maxAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowed = this._maxAllowed;
    }
    if (this._minAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowed = this._minAllowed;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._controlledResources = undefined;
      this._controlledValues = undefined;
      this._maxAllowed = undefined;
      this._minAllowed = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._controlledResources = value.controlledResources;
      this._controlledValues = value.controlledValues;
      this._maxAllowed = value.maxAllowed;
      this._minAllowed = value.minAllowed;
      this._mode = value.mode;
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

  // controlled_resources - computed: false, optional: true, required: false
  private _controlledResources?: string[]; 
  public get controlledResources() {
    return this.getListAttribute('controlled_resources');
  }
  public set controlledResources(value: string[]) {
    this._controlledResources = value;
  }
  public resetControlledResources() {
    this._controlledResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlledResourcesInput() {
    return this._controlledResources;
  }

  // controlled_values - computed: false, optional: true, required: false
  private _controlledValues?: string; 
  public get controlledValues() {
    return this.getStringAttribute('controlled_values');
  }
  public set controlledValues(value: string) {
    this._controlledValues = value;
  }
  public resetControlledValues() {
    this._controlledValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlledValuesInput() {
    return this._controlledValues;
  }

  // max_allowed - computed: false, optional: true, required: false
  private _maxAllowed?: { [key: string]: string }; 
  public get maxAllowed() {
    return this.getStringMapAttribute('max_allowed');
  }
  public set maxAllowed(value: { [key: string]: string }) {
    this._maxAllowed = value;
  }
  public resetMaxAllowed() {
    this._maxAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedInput() {
    return this._maxAllowed;
  }

  // min_allowed - computed: false, optional: true, required: false
  private _minAllowed?: { [key: string]: string }; 
  public get minAllowed() {
    return this.getStringMapAttribute('min_allowed');
  }
  public set minAllowed(value: { [key: string]: string }) {
    this._minAllowed = value;
  }
  public resetMinAllowed() {
    this._minAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedInput() {
    return this._minAllowed;
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
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesOutputReference {
    return new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy {
  /**
  * Per-container resource policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#container_policies DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#container_policies}
  */
  readonly containerPolicies?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies[] | cdktf.IResolvable;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_policies: cdktf.listMapper(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesToTerraform, false)(struct!.containerPolicies),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesToHclTerraform, false)(struct!.containerPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPolicies = this._containerPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPolicies.internalValue = value.containerPolicies;
    }
  }

  // container_policies - computed: false, optional: true, required: false
  private _containerPolicies = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPoliciesList(this, "container_policies", false);
  public get containerPolicies() {
    return this._containerPolicies;
  }
  public putContainerPolicies(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyContainerPolicies[] | cdktf.IResolvable) {
    this._containerPolicies.internalValue = value;
  }
  public resetContainerPolicies() {
    this._containerPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPoliciesInput() {
    return this._containerPolicies.internalValue;
  }
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#api_version DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#kind DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRefToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements {
  /**
  * EvictionChangeRequirement refers to the relationship between the new target recommendation for a Pod and its current requests, what kind of change is necessary for the Pod to be evicted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#change_requirement DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#change_requirement}
  */
  readonly changeRequirement: string;
  /**
  * Resources is a list of one or more resources that the condition applies to. If more than one resource is given, the EvictionRequirement is fulfilled if at least one resource meets 'changeRequirement'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#resources DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#resources}
  */
  readonly resources: string[];
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_requirement: cdktf.stringToTerraform(struct!.changeRequirement),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_requirement: {
      value: cdktf.stringToHclTerraform(struct!.changeRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeRequirement = this._changeRequirement;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changeRequirement = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changeRequirement = value.changeRequirement;
      this._resources = value.resources;
    }
  }

  // change_requirement - computed: false, optional: false, required: true
  private _changeRequirement?: string; 
  public get changeRequirement() {
    return this.getStringAttribute('change_requirement');
  }
  public set changeRequirement(value: string) {
    this._changeRequirement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changeRequirementInput() {
    return this._changeRequirement;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsOutputReference {
    return new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy {
  /**
  * EvictionRequirements is a list of EvictionRequirements that need to evaluate to true in order for a Pod to be evicted. If more than one EvictionRequirement is specified, all of them need to be fulfilled to allow eviction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#eviction_requirements DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#eviction_requirements}
  */
  readonly evictionRequirements?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements[] | cdktf.IResolvable;
  /**
  * Minimal number of replicas which need to be alive for Updater to attempt pod eviction (pending other checks like PDB). Only positive values are allowed. Overrides global '--min-replicas' flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#min_replicas DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Controls when autoscaler applies changes to the pod resources. The default is 'Auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#update_mode DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#update_mode}
  */
  readonly updateMode?: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_requirements: cdktf.listMapper(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsToTerraform, false)(struct!.evictionRequirements),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    update_mode: cdktf.stringToTerraform(struct!.updateMode),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_requirements: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsToHclTerraform, false)(struct!.evictionRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_mode: {
      value: cdktf.stringToHclTerraform(struct!.updateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionRequirements = this._evictionRequirements?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._updateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMode = this._updateMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evictionRequirements.internalValue = undefined;
      this._minReplicas = undefined;
      this._updateMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evictionRequirements.internalValue = value.evictionRequirements;
      this._minReplicas = value.minReplicas;
      this._updateMode = value.updateMode;
    }
  }

  // eviction_requirements - computed: false, optional: true, required: false
  private _evictionRequirements = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirementsList(this, "eviction_requirements", false);
  public get evictionRequirements() {
    return this._evictionRequirements;
  }
  public putEvictionRequirements(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyEvictionRequirements[] | cdktf.IResolvable) {
    this._evictionRequirements.internalValue = value;
  }
  public resetEvictionRequirements() {
    this._evictionRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionRequirementsInput() {
    return this._evictionRequirements.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // update_mode - computed: false, optional: true, required: false
  private _updateMode?: string; 
  public get updateMode() {
    return this.getStringAttribute('update_mode');
  }
  public set updateMode(value: string) {
    this._updateMode = value;
  }
  public resetUpdateMode() {
    this._updateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateModeInput() {
    return this._updateMode;
  }
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec {
  /**
  * Recommender responsible for generating recommendation for this object. List should be empty (then the default recommender will generate the recommendation) or contain exactly one recommender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#recommenders DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#recommenders}
  */
  readonly recommenders?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders[] | cdktf.IResolvable;
  /**
  * Controls how the autoscaler computes recommended resources. The resource policy may be used to set constraints on the recommendations for individual containers. If any individual containers need to be excluded from getting the VPA recommendations, then it must be disabled explicitly by setting mode to 'Off' under containerPolicies. If not specified, the autoscaler computes recommended resources for all containers in the pod, without additional constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#resource_policy DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#resource_policy}
  */
  readonly resourcePolicy?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy;
  /**
  * TargetRef points to the controller managing the set of pods for the autoscaler to control - e.g. Deployment, StatefulSet. VerticalPodAutoscaler can be targeted at controller implementing scale subresource (the pod set is retrieved from the controller's ScaleStatus) or some well known controllers (e.g. for DaemonSet the pod set is read from the controller's spec). If VerticalPodAutoscaler cannot use specified target it will report ConfigUnsupported condition. Note that VerticalPodAutoscaler does not require full implementation of scale subresource - it will not use it to modify the replica count. The only thing retrieved is a label selector matching pods grouped by the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#target_ref DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#target_ref}
  */
  readonly targetRef: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef;
  /**
  * Describes the rules on how changes are applied to the pods. If not specified, all fields in the 'PodUpdatePolicy' are set to their default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#update_policy DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest#update_policy}
  */
  readonly updatePolicy?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recommenders: cdktf.listMapper(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersToTerraform, false)(struct!.recommenders),
    resource_policy: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyToTerraform(struct!.resourcePolicy),
    target_ref: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    update_policy: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyToTerraform(struct!.updatePolicy),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recommenders: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersToHclTerraform, false)(struct!.recommenders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersList",
    },
    resource_policy: {
      value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyToHclTerraform(struct!.resourcePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy",
    },
    target_ref: {
      value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef",
    },
    update_policy: {
      value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyToHclTerraform(struct!.updatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recommenders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommenders = this._recommenders?.internalValue;
    }
    if (this._resourcePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._updatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePolicy = this._updatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recommenders.internalValue = undefined;
      this._resourcePolicy.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._updatePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recommenders.internalValue = value.recommenders;
      this._resourcePolicy.internalValue = value.resourcePolicy;
      this._targetRef.internalValue = value.targetRef;
      this._updatePolicy.internalValue = value.updatePolicy;
    }
  }

  // recommenders - computed: false, optional: true, required: false
  private _recommenders = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommendersList(this, "recommenders", false);
  public get recommenders() {
    return this._recommenders;
  }
  public putRecommenders(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecRecommenders[] | cdktf.IResolvable) {
    this._recommenders.internalValue = value;
  }
  public resetRecommenders() {
    this._recommenders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendersInput() {
    return this._recommenders.internalValue;
  }

  // resource_policy - computed: false, optional: true, required: false
  private _resourcePolicy = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
  public putResourcePolicy(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecResourcePolicy) {
    this._resourcePolicy.internalValue = value;
  }
  public resetResourcePolicy() {
    this._resourcePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest}
*/
export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1_manifest',
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
  private _metadata = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec) {
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
      metadata: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
