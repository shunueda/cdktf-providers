// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#metadata DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata;
  /**
  * KubernetesImagePullerSpec defines the desired state of KubernetesImagePuller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#spec DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec;
}
export interface DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#annotations DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#labels DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#name DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#namespace DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#affinity DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#affinity}
  */
  readonly affinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#caching_cpu_limit DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#caching_cpu_limit}
  */
  readonly cachingCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#caching_cpu_request DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#caching_cpu_request}
  */
  readonly cachingCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#caching_interval_hours DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#caching_interval_hours}
  */
  readonly cachingIntervalHours?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#caching_memory_limit DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#caching_memory_limit}
  */
  readonly cachingMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#caching_memory_request DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#caching_memory_request}
  */
  readonly cachingMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#config_map_name DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#config_map_name}
  */
  readonly configMapName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#daemonset_name DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#daemonset_name}
  */
  readonly daemonsetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#deployment_name DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#deployment_name}
  */
  readonly deploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#image_pull_secrets DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#image_puller_image DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#image_puller_image}
  */
  readonly imagePullerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#images DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#images}
  */
  readonly images?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#node_selector DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: string;
}

export function dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    caching_cpu_limit: cdktf.stringToTerraform(struct!.cachingCpuLimit),
    caching_cpu_request: cdktf.stringToTerraform(struct!.cachingCpuRequest),
    caching_interval_hours: cdktf.stringToTerraform(struct!.cachingIntervalHours),
    caching_memory_limit: cdktf.stringToTerraform(struct!.cachingMemoryLimit),
    caching_memory_request: cdktf.stringToTerraform(struct!.cachingMemoryRequest),
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    daemonset_name: cdktf.stringToTerraform(struct!.daemonsetName),
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    image_pull_secrets: cdktf.stringToTerraform(struct!.imagePullSecrets),
    image_puller_image: cdktf.stringToTerraform(struct!.imagePullerImage),
    images: cdktf.stringToTerraform(struct!.images),
    node_selector: cdktf.stringToTerraform(struct!.nodeSelector),
  }
}


export function dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cachingCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cachingCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_interval_hours: {
      value: cdktf.stringToHclTerraform(struct!.cachingIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.cachingMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.cachingMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daemonset_name: {
      value: cdktf.stringToHclTerraform(struct!.daemonsetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_puller_image: {
      value: cdktf.stringToHclTerraform(struct!.imagePullerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    images: {
      value: cdktf.stringToHclTerraform(struct!.images),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.stringToHclTerraform(struct!.nodeSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._cachingCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingCpuLimit = this._cachingCpuLimit;
    }
    if (this._cachingCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingCpuRequest = this._cachingCpuRequest;
    }
    if (this._cachingIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingIntervalHours = this._cachingIntervalHours;
    }
    if (this._cachingMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMemoryLimit = this._cachingMemoryLimit;
    }
    if (this._cachingMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMemoryRequest = this._cachingMemoryRequest;
    }
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._daemonsetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonsetName = this._daemonsetName;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._imagePullerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullerImage = this._imagePullerImage;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._cachingCpuLimit = undefined;
      this._cachingCpuRequest = undefined;
      this._cachingIntervalHours = undefined;
      this._cachingMemoryLimit = undefined;
      this._cachingMemoryRequest = undefined;
      this._configMapName = undefined;
      this._daemonsetName = undefined;
      this._deploymentName = undefined;
      this._imagePullSecrets = undefined;
      this._imagePullerImage = undefined;
      this._images = undefined;
      this._nodeSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._cachingCpuLimit = value.cachingCpuLimit;
      this._cachingCpuRequest = value.cachingCpuRequest;
      this._cachingIntervalHours = value.cachingIntervalHours;
      this._cachingMemoryLimit = value.cachingMemoryLimit;
      this._cachingMemoryRequest = value.cachingMemoryRequest;
      this._configMapName = value.configMapName;
      this._daemonsetName = value.daemonsetName;
      this._deploymentName = value.deploymentName;
      this._imagePullSecrets = value.imagePullSecrets;
      this._imagePullerImage = value.imagePullerImage;
      this._images = value.images;
      this._nodeSelector = value.nodeSelector;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // caching_cpu_limit - computed: false, optional: true, required: false
  private _cachingCpuLimit?: string; 
  public get cachingCpuLimit() {
    return this.getStringAttribute('caching_cpu_limit');
  }
  public set cachingCpuLimit(value: string) {
    this._cachingCpuLimit = value;
  }
  public resetCachingCpuLimit() {
    this._cachingCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingCpuLimitInput() {
    return this._cachingCpuLimit;
  }

  // caching_cpu_request - computed: false, optional: true, required: false
  private _cachingCpuRequest?: string; 
  public get cachingCpuRequest() {
    return this.getStringAttribute('caching_cpu_request');
  }
  public set cachingCpuRequest(value: string) {
    this._cachingCpuRequest = value;
  }
  public resetCachingCpuRequest() {
    this._cachingCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingCpuRequestInput() {
    return this._cachingCpuRequest;
  }

  // caching_interval_hours - computed: false, optional: true, required: false
  private _cachingIntervalHours?: string; 
  public get cachingIntervalHours() {
    return this.getStringAttribute('caching_interval_hours');
  }
  public set cachingIntervalHours(value: string) {
    this._cachingIntervalHours = value;
  }
  public resetCachingIntervalHours() {
    this._cachingIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingIntervalHoursInput() {
    return this._cachingIntervalHours;
  }

  // caching_memory_limit - computed: false, optional: true, required: false
  private _cachingMemoryLimit?: string; 
  public get cachingMemoryLimit() {
    return this.getStringAttribute('caching_memory_limit');
  }
  public set cachingMemoryLimit(value: string) {
    this._cachingMemoryLimit = value;
  }
  public resetCachingMemoryLimit() {
    this._cachingMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingMemoryLimitInput() {
    return this._cachingMemoryLimit;
  }

  // caching_memory_request - computed: false, optional: true, required: false
  private _cachingMemoryRequest?: string; 
  public get cachingMemoryRequest() {
    return this.getStringAttribute('caching_memory_request');
  }
  public set cachingMemoryRequest(value: string) {
    this._cachingMemoryRequest = value;
  }
  public resetCachingMemoryRequest() {
    this._cachingMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingMemoryRequestInput() {
    return this._cachingMemoryRequest;
  }

  // config_map_name - computed: false, optional: true, required: false
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  public resetConfigMapName() {
    this._configMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
  }

  // daemonset_name - computed: false, optional: true, required: false
  private _daemonsetName?: string; 
  public get daemonsetName() {
    return this.getStringAttribute('daemonset_name');
  }
  public set daemonsetName(value: string) {
    this._daemonsetName = value;
  }
  public resetDaemonsetName() {
    this._daemonsetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetNameInput() {
    return this._daemonsetName;
  }

  // deployment_name - computed: false, optional: true, required: false
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  public resetDeploymentName() {
    this._deploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string; 
  public get imagePullSecrets() {
    return this.getStringAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // image_puller_image - computed: false, optional: true, required: false
  private _imagePullerImage?: string; 
  public get imagePullerImage() {
    return this.getStringAttribute('image_puller_image');
  }
  public set imagePullerImage(value: string) {
    this._imagePullerImage = value;
  }
  public resetImagePullerImage() {
    this._imagePullerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullerImageInput() {
    return this._imagePullerImage;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string; 
  public get images() {
    return this.getStringAttribute('images');
  }
  public set images(value: string) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: string; 
  public get nodeSelector() {
    return this.getStringAttribute('node_selector');
  }
  public set nodeSelector(value: string) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest k8s_che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest}
*/
export class DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest k8s_che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_che_eclipse_org_kubernetes_image_puller_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCheEclipseOrgKubernetesImagePullerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
