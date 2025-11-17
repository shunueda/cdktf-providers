// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#metadata DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata;
  /**
  * DevfileRegistrySpec defines the desired state of DevfileRegistry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#spec DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec;
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#annotations DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#labels DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#name DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#namespace DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex {
  /**
  * Sets the container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#image DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Sets the image pull policy for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#image_pull_policy DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Sets the memory limit for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#memory_limit DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#memory_limit}
  */
  readonly memoryLimit?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndexToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndexToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._memoryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._memoryLimit = value.memoryLimit;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S {
  /**
  * Ingress class for a Kubernetes cluster. Defaults to nginx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#ingress_class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#ingress_class}
  */
  readonly ingressClass?: string;
  /**
  * Ingress domain for a Kubernetes cluster. This MUST be explicitly specified on Kubernetes. There are no defaults
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#ingress_domain DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#ingress_domain}
  */
  readonly ingressDomain?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8SToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_class: cdktf.stringToTerraform(struct!.ingressClass),
    ingress_domain: cdktf.stringToTerraform(struct!.ingressDomain),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8SToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_class: {
      value: cdktf.stringToHclTerraform(struct!.ingressClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_domain: {
      value: cdktf.stringToHclTerraform(struct!.ingressDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClass = this._ingressClass;
    }
    if (this._ingressDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressDomain = this._ingressDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressClass = undefined;
      this._ingressDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressClass = value.ingressClass;
      this._ingressDomain = value.ingressDomain;
    }
  }

  // ingress_class - computed: false, optional: true, required: false
  private _ingressClass?: string; 
  public get ingressClass() {
    return this.getStringAttribute('ingress_class');
  }
  public set ingressClass(value: string) {
    this._ingressClass = value;
  }
  public resetIngressClass() {
    this._ingressClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassInput() {
    return this._ingressClass;
  }

  // ingress_domain - computed: false, optional: true, required: false
  private _ingressDomain?: string; 
  public get ingressDomain() {
    return this.getStringAttribute('ingress_domain');
  }
  public set ingressDomain(value: string) {
    this._ingressDomain = value;
  }
  public resetIngressDomain() {
    this._ingressDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressDomainInput() {
    return this._ingressDomain;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry {
  /**
  * Sets the container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#image DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Sets the image pull policy for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#image_pull_policy DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Sets the memory limit for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#memory_limit DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#memory_limit}
  */
  readonly memoryLimit?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistryToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistryToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._memoryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._memoryLimit = value.memoryLimit;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer {
  /**
  * Sets the container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#image DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Sets the image pull policy for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#image_pull_policy DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Sets the memory limit for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#memory_limit DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#memory_limit}
  */
  readonly memoryLimit?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewerToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewerToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._memoryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._memoryLimit = value.memoryLimit;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage {
  /**
  * Instructs the operator to deploy the DevfileRegistry with persistent storage Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#enabled DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Configures the size of the devfile registry's persistent volume, if enabled. Defaults to 1Gi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#registry_volume_size DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#registry_volume_size}
  */
  readonly registryVolumeSize?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorageToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    registry_volume_size: cdktf.stringToTerraform(struct!.registryVolumeSize),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorageToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_volume_size: {
      value: cdktf.stringToHclTerraform(struct!.registryVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._registryVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVolumeSize = this._registryVolumeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._registryVolumeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._registryVolumeSize = value.registryVolumeSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // registry_volume_size - computed: false, optional: true, required: false
  private _registryVolumeSize?: string; 
  public get registryVolumeSize() {
    return this.getStringAttribute('registry_volume_size');
  }
  public set registryVolumeSize(value: string) {
    this._registryVolumeSize = value;
  }
  public resetRegistryVolumeSize() {
    this._registryVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVolumeSizeInput() {
    return this._registryVolumeSize;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry {
  /**
  * Specify a telemetry key to allow devfile specific data to be sent to a client's own Segment analytics source. If the write key is specified then telemetry will be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#key DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The registry name (can be any string) that is used as identifier for devfile telemetry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#registry_name DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#registry_name}
  */
  readonly registryName?: string;
  /**
  * Specify a telemetry write key for the registry viewer component to allow data to be sent to a client's own Segment analytics source. If the write key is specified then telemetry for the registry viewer component will be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#registry_viewer_write_key DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#registry_viewer_write_key}
  */
  readonly registryViewerWriteKey?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetryToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    registry_viewer_write_key: cdktf.stringToTerraform(struct!.registryViewerWriteKey),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetryToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_viewer_write_key: {
      value: cdktf.stringToHclTerraform(struct!.registryViewerWriteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._registryViewerWriteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryViewerWriteKey = this._registryViewerWriteKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._registryName = undefined;
      this._registryViewerWriteKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._registryName = value.registryName;
      this._registryViewerWriteKey = value.registryViewerWriteKey;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // registry_viewer_write_key - computed: false, optional: true, required: false
  private _registryViewerWriteKey?: string; 
  public get registryViewerWriteKey() {
    return this.getStringAttribute('registry_viewer_write_key');
  }
  public set registryViewerWriteKey(value: string) {
    this._registryViewerWriteKey = value;
  }
  public resetRegistryViewerWriteKey() {
    this._registryViewerWriteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryViewerWriteKeyInput() {
    return this._registryViewerWriteKey;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls {
  /**
  * Instructs the operator to deploy the DevfileRegistry with TLS enabled. Enabled by default. Disabling is only recommended for development or test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#enabled DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of an optional, pre-existing TLS secret to use for TLS termination on ingress/route resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#secret_name DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTlsToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._secretName = value.secretName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec {
  /**
  * Sets the devfile index container spec to be deployed on the Devfile Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#devfile_index DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#devfile_index}
  */
  readonly devfileIndex?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex;
  /**
  * Sets the container image containing devfile stacks to be deployed on the Devfile Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#devfile_index_image DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#devfile_index_image}
  */
  readonly devfileIndexImage?: string;
  /**
  * Overrides the fully qualified app name of the devfile registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#fullname_override DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#fullname_override}
  */
  readonly fullnameOverride?: string;
  /**
  * Sets the registry server deployment to run under headless mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#headless DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#headless}
  */
  readonly headless?: boolean | cdktf.IResolvable;
  /**
  * Overrides the entire hostname and domain of the devfile registry ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#hostname_override DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#hostname_override}
  */
  readonly hostnameOverride?: string;
  /**
  * DevfileRegistrySpecK8sOnly defines the desired state of the kubernetes-only fields of the DevfileRegistry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#k8s DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#k8s}
  */
  readonly k8S?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S;
  /**
  * Overrides the app name of the devfile registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#name_override DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#name_override}
  */
  readonly nameOverride?: string;
  /**
  * Sets the OCI registry container spec to be deployed on the Devfile Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#oci_registry DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#oci_registry}
  */
  readonly ociRegistry?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry;
  /**
  * Overrides the container image used for the OCI registry. Recommended to leave blank and default to the image specified by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#oci_registry_image DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#oci_registry_image}
  */
  readonly ociRegistryImage?: string;
  /**
  * Sets the registry viewer container spec to be deployed on the Devfile Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#registry_viewer DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#registry_viewer}
  */
  readonly registryViewer?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer;
  /**
  * Overrides the container image used for the registry viewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#registry_viewer_image DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#registry_viewer_image}
  */
  readonly registryViewerImage?: string;
  /**
  * DevfileRegistrySpecStorage defines the desired state of the storage for the DevfileRegistry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#storage DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage;
  /**
  * Telemetry defines the desired state for telemetry in the DevfileRegistry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#telemetry DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#telemetry}
  */
  readonly telemetry?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry;
  /**
  * DevfileRegistrySpecTLS defines the desired state for TLS in the DevfileRegistry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#tls DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls;
}

export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devfile_index: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndexToTerraform(struct!.devfileIndex),
    devfile_index_image: cdktf.stringToTerraform(struct!.devfileIndexImage),
    fullname_override: cdktf.stringToTerraform(struct!.fullnameOverride),
    headless: cdktf.booleanToTerraform(struct!.headless),
    hostname_override: cdktf.stringToTerraform(struct!.hostnameOverride),
    k8s: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8SToTerraform(struct!.k8S),
    name_override: cdktf.stringToTerraform(struct!.nameOverride),
    oci_registry: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistryToTerraform(struct!.ociRegistry),
    oci_registry_image: cdktf.stringToTerraform(struct!.ociRegistryImage),
    registry_viewer: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewerToTerraform(struct!.registryViewer),
    registry_viewer_image: cdktf.stringToTerraform(struct!.registryViewerImage),
    storage: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorageToTerraform(struct!.storage),
    telemetry: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetryToTerraform(struct!.telemetry),
    tls: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTlsToTerraform(struct!.tls),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devfile_index: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndexToHclTerraform(struct!.devfileIndex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex",
    },
    devfile_index_image: {
      value: cdktf.stringToHclTerraform(struct!.devfileIndexImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fullname_override: {
      value: cdktf.stringToHclTerraform(struct!.fullnameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headless: {
      value: cdktf.booleanToHclTerraform(struct!.headless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_override: {
      value: cdktf.stringToHclTerraform(struct!.hostnameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8SToHclTerraform(struct!.k8S),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S",
    },
    name_override: {
      value: cdktf.stringToHclTerraform(struct!.nameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oci_registry: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistryToHclTerraform(struct!.ociRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry",
    },
    oci_registry_image: {
      value: cdktf.stringToHclTerraform(struct!.ociRegistryImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_viewer: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewerToHclTerraform(struct!.registryViewer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer",
    },
    registry_viewer_image: {
      value: cdktf.stringToHclTerraform(struct!.registryViewerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage",
    },
    telemetry: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetryToHclTerraform(struct!.telemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry",
    },
    tls: {
      value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devfileIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devfileIndex = this._devfileIndex?.internalValue;
    }
    if (this._devfileIndexImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.devfileIndexImage = this._devfileIndexImage;
    }
    if (this._fullnameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullnameOverride = this._fullnameOverride;
    }
    if (this._headless !== undefined) {
      hasAnyValues = true;
      internalValueResult.headless = this._headless;
    }
    if (this._hostnameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameOverride = this._hostnameOverride;
    }
    if (this._k8S?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8S = this._k8S?.internalValue;
    }
    if (this._nameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOverride = this._nameOverride;
    }
    if (this._ociRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociRegistry = this._ociRegistry?.internalValue;
    }
    if (this._ociRegistryImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociRegistryImage = this._ociRegistryImage;
    }
    if (this._registryViewer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryViewer = this._registryViewer?.internalValue;
    }
    if (this._registryViewerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryViewerImage = this._registryViewerImage;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._telemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devfileIndex.internalValue = undefined;
      this._devfileIndexImage = undefined;
      this._fullnameOverride = undefined;
      this._headless = undefined;
      this._hostnameOverride = undefined;
      this._k8S.internalValue = undefined;
      this._nameOverride = undefined;
      this._ociRegistry.internalValue = undefined;
      this._ociRegistryImage = undefined;
      this._registryViewer.internalValue = undefined;
      this._registryViewerImage = undefined;
      this._storage.internalValue = undefined;
      this._telemetry.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devfileIndex.internalValue = value.devfileIndex;
      this._devfileIndexImage = value.devfileIndexImage;
      this._fullnameOverride = value.fullnameOverride;
      this._headless = value.headless;
      this._hostnameOverride = value.hostnameOverride;
      this._k8S.internalValue = value.k8S;
      this._nameOverride = value.nameOverride;
      this._ociRegistry.internalValue = value.ociRegistry;
      this._ociRegistryImage = value.ociRegistryImage;
      this._registryViewer.internalValue = value.registryViewer;
      this._registryViewerImage = value.registryViewerImage;
      this._storage.internalValue = value.storage;
      this._telemetry.internalValue = value.telemetry;
      this._tls.internalValue = value.tls;
    }
  }

  // devfile_index - computed: false, optional: true, required: false
  private _devfileIndex = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndexOutputReference(this, "devfile_index");
  public get devfileIndex() {
    return this._devfileIndex;
  }
  public putDevfileIndex(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecDevfileIndex) {
    this._devfileIndex.internalValue = value;
  }
  public resetDevfileIndex() {
    this._devfileIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devfileIndexInput() {
    return this._devfileIndex.internalValue;
  }

  // devfile_index_image - computed: false, optional: true, required: false
  private _devfileIndexImage?: string; 
  public get devfileIndexImage() {
    return this.getStringAttribute('devfile_index_image');
  }
  public set devfileIndexImage(value: string) {
    this._devfileIndexImage = value;
  }
  public resetDevfileIndexImage() {
    this._devfileIndexImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devfileIndexImageInput() {
    return this._devfileIndexImage;
  }

  // fullname_override - computed: false, optional: true, required: false
  private _fullnameOverride?: string; 
  public get fullnameOverride() {
    return this.getStringAttribute('fullname_override');
  }
  public set fullnameOverride(value: string) {
    this._fullnameOverride = value;
  }
  public resetFullnameOverride() {
    this._fullnameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullnameOverrideInput() {
    return this._fullnameOverride;
  }

  // headless - computed: false, optional: true, required: false
  private _headless?: boolean | cdktf.IResolvable; 
  public get headless() {
    return this.getBooleanAttribute('headless');
  }
  public set headless(value: boolean | cdktf.IResolvable) {
    this._headless = value;
  }
  public resetHeadless() {
    this._headless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessInput() {
    return this._headless;
  }

  // hostname_override - computed: false, optional: true, required: false
  private _hostnameOverride?: string; 
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }
  public set hostnameOverride(value: string) {
    this._hostnameOverride = value;
  }
  public resetHostnameOverride() {
    this._hostnameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameOverrideInput() {
    return this._hostnameOverride;
  }

  // k8s - computed: false, optional: true, required: false
  private _k8S = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8SOutputReference(this, "k8s");
  public get k8S() {
    return this._k8S;
  }
  public putK8S(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecK8S) {
    this._k8S.internalValue = value;
  }
  public resetK8S() {
    this._k8S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SInput() {
    return this._k8S.internalValue;
  }

  // name_override - computed: false, optional: true, required: false
  private _nameOverride?: string; 
  public get nameOverride() {
    return this.getStringAttribute('name_override');
  }
  public set nameOverride(value: string) {
    this._nameOverride = value;
  }
  public resetNameOverride() {
    this._nameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOverrideInput() {
    return this._nameOverride;
  }

  // oci_registry - computed: false, optional: true, required: false
  private _ociRegistry = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistryOutputReference(this, "oci_registry");
  public get ociRegistry() {
    return this._ociRegistry;
  }
  public putOciRegistry(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOciRegistry) {
    this._ociRegistry.internalValue = value;
  }
  public resetOciRegistry() {
    this._ociRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegistryInput() {
    return this._ociRegistry.internalValue;
  }

  // oci_registry_image - computed: false, optional: true, required: false
  private _ociRegistryImage?: string; 
  public get ociRegistryImage() {
    return this.getStringAttribute('oci_registry_image');
  }
  public set ociRegistryImage(value: string) {
    this._ociRegistryImage = value;
  }
  public resetOciRegistryImage() {
    this._ociRegistryImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegistryImageInput() {
    return this._ociRegistryImage;
  }

  // registry_viewer - computed: false, optional: true, required: false
  private _registryViewer = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewerOutputReference(this, "registry_viewer");
  public get registryViewer() {
    return this._registryViewer;
  }
  public putRegistryViewer(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecRegistryViewer) {
    this._registryViewer.internalValue = value;
  }
  public resetRegistryViewer() {
    this._registryViewer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryViewerInput() {
    return this._registryViewer.internalValue;
  }

  // registry_viewer_image - computed: false, optional: true, required: false
  private _registryViewerImage?: string; 
  public get registryViewerImage() {
    return this.getStringAttribute('registry_viewer_image');
  }
  public set registryViewerImage(value: string) {
    this._registryViewerImage = value;
  }
  public resetRegistryViewerImage() {
    this._registryViewerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryViewerImageInput() {
    return this._registryViewerImage;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetryOutputReference(this, "telemetry");
  public get telemetry() {
    return this._telemetry;
  }
  public putTelemetry(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTelemetry) {
    this._telemetry.internalValue = value;
  }
  public resetTelemetry() {
    this._telemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest k8s_registry_devfile_io_devfile_registry_v1alpha1_manifest}
*/
export class DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_registry_devfile_io_devfile_registry_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_registry_devfile_io_devfile_registry_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/registry_devfile_io_devfile_registry_v1alpha1_manifest k8s_registry_devfile_io_devfile_registry_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_registry_devfile_io_devfile_registry_v1alpha1_manifest',
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
  private _metadata = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRegistryDevfileIoDevfileRegistryV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
