// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#metadata DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata;
  /**
  * Specification of the behavior of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#spec DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#spec}
  */
  readonly spec: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec;
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#annotations DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#labels DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#namespace DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies {
  /**
  * Name of the container or DefaultContainerResourcePolicy, in which case the policy is used by the containers that don't have their own policy specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#container_name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the maximum amount of resources that will be recommended for the container. The default is no maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#max_allowed DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#max_allowed}
  */
  readonly maxAllowed?: { [key: string]: string };
  /**
  * Specifies the minimal amount of resources that will be recommended for the container. The default is no minimum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#min_allowed DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#min_allowed}
  */
  readonly minAllowed?: { [key: string]: string };
  /**
  * Whether autoscaler is enabled for the container. The default is 'Auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#mode DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    max_allowed: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.maxAllowed),
    min_allowed: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.minAllowed),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesOutputReference {
    return new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy {
  /**
  * Per-container resource policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#container_policies DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#container_policies}
  */
  readonly containerPolicies?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies[] | cdktf.IResolvable;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_policies: cdktf.listMapper(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesToTerraform, false)(struct!.containerPolicies),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesToHclTerraform, false)(struct!.containerPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy | cdktf.IResolvable | undefined) {
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
  private _containerPolicies = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPoliciesList(this, "container_policies", false);
  public get containerPolicies() {
    return this._containerPolicies;
  }
  public putContainerPolicies(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyContainerPolicies[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#api_version DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#kind DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#name DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRefToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRefToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy {
  /**
  * Controls when autoscaler applies changes to the pod resources. The default is 'Auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#update_mode DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#update_mode}
  */
  readonly updateMode?: string;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicyToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update_mode: cdktf.stringToTerraform(struct!.updateMode),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicyToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._updateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMode = this._updateMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._updateMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._updateMode = value.updateMode;
    }
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
export interface DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec {
  /**
  * Controls how the autoscaler computes recommended resources. The resource policy may be used to set constraints on the recommendations for individual containers. If not specified, the autoscaler computes recommended resources for all containers in the pod, without additional constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#resource_policy DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#resource_policy}
  */
  readonly resourcePolicy?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy;
  /**
  * TargetRef points to the controller managing the set of pods for the autoscaler to control - e.g. Deployment, StatefulSet. VerticalPodAutoscaler can be targeted at controller implementing scale subresource (the pod set is retrieved from the controller's ScaleStatus) or some well known controllers (e.g. for DaemonSet the pod set is read from the controller's spec). If VerticalPodAutoscaler cannot use specified target it will report ConfigUnsupported condition. Note that VerticalPodAutoscaler does not require full implementation of scale subresource - it will not use it to modify the replica count. The only thing retrieved is a label selector matching pods grouped by the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#target_ref DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#target_ref}
  */
  readonly targetRef: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef;
  /**
  * Describes the rules on how changes are applied to the pods. If not specified, all fields in the 'PodUpdatePolicy' are set to their default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#update_policy DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest#update_policy}
  */
  readonly updatePolicy?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy;
}

export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecToTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_policy: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyToTerraform(struct!.resourcePolicy),
    target_ref: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRefToTerraform(struct!.targetRef),
    update_policy: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicyToTerraform(struct!.updatePolicy),
  }
}


export function dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_policy: {
      value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyToHclTerraform(struct!.resourcePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy",
    },
    target_ref: {
      value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef",
    },
    update_policy: {
      value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicyToHclTerraform(struct!.updatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._resourcePolicy.internalValue = value.resourcePolicy;
      this._targetRef.internalValue = value.targetRef;
      this._updatePolicy.internalValue = value.updatePolicy;
    }
  }

  // resource_policy - computed: false, optional: true, required: false
  private _resourcePolicy = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
  public putResourcePolicy(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecResourcePolicy) {
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
  private _targetRef = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecUpdatePolicy) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest}
*/
export class DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_k8s_io_vertical_pod_autoscaler_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec) {
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
      metadata: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SIoVerticalPodAutoscalerV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
