// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STinkerbellOrgStackV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#metadata DataK8STinkerbellOrgStackV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata;
  /**
  * Spec describes the desired tinkerbell stack state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#spec DataK8STinkerbellOrgStackV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STinkerbellOrgStackV1Alpha1ManifestSpec;
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#annotations DataK8STinkerbellOrgStackV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#labels DataK8STinkerbellOrgStackV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#name DataK8STinkerbellOrgStackV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#namespace DataK8STinkerbellOrgStackV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STinkerbellOrgStackV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STinkerbellOrgStackV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage {
  /**
  * Repository is used to set the image repository for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#repository DataK8STinkerbellOrgStackV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag is used to set the image tag for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tag DataK8STinkerbellOrgStackV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImageToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImageToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel {
  /**
  * Image specifies the details of a tinkerbell services images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#image DataK8STinkerbellOrgStackV1Alpha1Manifest#image}
  */
  readonly image?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage;
  /**
  * TrustedProxies comma separated allowed CIDRs subnets to be used as trusted proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#trusted_proxies DataK8STinkerbellOrgStackV1Alpha1Manifest#trusted_proxies}
  */
  readonly trustedProxies?: string[];
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImageToTerraform(struct!.image),
    trusted_proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedProxies),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage",
    },
    trusted_proxies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedProxies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._trustedProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedProxies = this._trustedProxies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
      this._trustedProxies = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image.internalValue = value.image;
      this._trustedProxies = value.trustedProxies;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // trusted_proxies - computed: false, optional: true, required: false
  private _trustedProxies?: string[]; 
  public get trustedProxies() {
    return this.getListAttribute('trusted_proxies');
  }
  public set trustedProxies(value: string[]) {
    this._trustedProxies = value;
  }
  public resetTrustedProxies() {
    this._trustedProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedProxiesInput() {
    return this._trustedProxies;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage {
  /**
  * Repository is used to set the image repository for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#repository DataK8STinkerbellOrgStackV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag is used to set the image tag for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tag DataK8STinkerbellOrgStackV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImageToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImageToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio {
  /**
  * Image specifies the details of a tinkerbell services images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#image DataK8STinkerbellOrgStackV1Alpha1Manifest#image}
  */
  readonly image?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImageToTerraform(struct!.image),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image.internalValue = value.image;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode {
  /**
  * FilePath specifies the hardware yaml file path for the file backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#file_path DataK8STinkerbellOrgStackV1Alpha1Manifest#file_path}
  */
  readonly filePath: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileModeToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileModeToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filePath = value.filePath;
    }
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode {
  /**
  * ConfigFilePath specifies the Kubernetes config file location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#config_file_path DataK8STinkerbellOrgStackV1Alpha1Manifest#config_file_path}
  */
  readonly configFilePath?: string;
  /**
  * KubeAPIURL specifies the Kubernetes API URL, used for in-cluster client construction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#kube_api_url DataK8STinkerbellOrgStackV1Alpha1Manifest#kube_api_url}
  */
  readonly kubeApiUrl?: string;
  /**
  * KubeNamespace specifies an optional Kubernetes namespace override to query hardware data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#kube_namespace DataK8STinkerbellOrgStackV1Alpha1Manifest#kube_namespace}
  */
  readonly kubeNamespace?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeModeToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file_path: cdktf.stringToTerraform(struct!.configFilePath),
    kube_api_url: cdktf.stringToTerraform(struct!.kubeApiUrl),
    kube_namespace: cdktf.stringToTerraform(struct!.kubeNamespace),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeModeToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file_path: {
      value: cdktf.stringToHclTerraform(struct!.configFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_api_url: {
      value: cdktf.stringToHclTerraform(struct!.kubeApiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_namespace: {
      value: cdktf.stringToHclTerraform(struct!.kubeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFilePath = this._configFilePath;
    }
    if (this._kubeApiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiUrl = this._kubeApiUrl;
    }
    if (this._kubeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeNamespace = this._kubeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFilePath = undefined;
      this._kubeApiUrl = undefined;
      this._kubeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFilePath = value.configFilePath;
      this._kubeApiUrl = value.kubeApiUrl;
      this._kubeNamespace = value.kubeNamespace;
    }
  }

  // config_file_path - computed: false, optional: true, required: false
  private _configFilePath?: string; 
  public get configFilePath() {
    return this.getStringAttribute('config_file_path');
  }
  public set configFilePath(value: string) {
    this._configFilePath = value;
  }
  public resetConfigFilePath() {
    this._configFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFilePathInput() {
    return this._configFilePath;
  }

  // kube_api_url - computed: false, optional: true, required: false
  private _kubeApiUrl?: string; 
  public get kubeApiUrl() {
    return this.getStringAttribute('kube_api_url');
  }
  public set kubeApiUrl(value: string) {
    this._kubeApiUrl = value;
  }
  public resetKubeApiUrl() {
    this._kubeApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiUrlInput() {
    return this._kubeApiUrl;
  }

  // kube_namespace - computed: false, optional: true, required: false
  private _kubeNamespace?: string; 
  public get kubeNamespace() {
    return this.getStringAttribute('kube_namespace');
  }
  public set kubeNamespace(value: string) {
    this._kubeNamespace = value;
  }
  public resetKubeNamespace() {
    this._kubeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeNamespaceInput() {
    return this._kubeNamespace;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs {
  /**
  * BackendFileMode contains the file backend configurations for DHCP and the HTTP iPXE script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#backend_file_mode DataK8STinkerbellOrgStackV1Alpha1Manifest#backend_file_mode}
  */
  readonly backendFileMode?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode;
  /**
  * BackendKubeMode contains the Kubernetes backend configurations for DHCP and the HTTP iPXE script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#backend_kube_mode DataK8STinkerbellOrgStackV1Alpha1Manifest#backend_kube_mode}
  */
  readonly backendKubeMode?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_file_mode: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileModeToTerraform(struct!.backendFileMode),
    backend_kube_mode: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeModeToTerraform(struct!.backendKubeMode),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_file_mode: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileModeToHclTerraform(struct!.backendFileMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode",
    },
    backend_kube_mode: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeModeToHclTerraform(struct!.backendKubeMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendFileMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendFileMode = this._backendFileMode?.internalValue;
    }
    if (this._backendKubeMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendKubeMode = this._backendKubeMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendFileMode.internalValue = undefined;
      this._backendKubeMode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendFileMode.internalValue = value.backendFileMode;
      this._backendKubeMode.internalValue = value.backendKubeMode;
    }
  }

  // backend_file_mode - computed: false, optional: true, required: false
  private _backendFileMode = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileModeOutputReference(this, "backend_file_mode");
  public get backendFileMode() {
    return this._backendFileMode;
  }
  public putBackendFileMode(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendFileMode) {
    this._backendFileMode.internalValue = value;
  }
  public resetBackendFileMode() {
    this._backendFileMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendFileModeInput() {
    return this._backendFileMode.internalValue;
  }

  // backend_kube_mode - computed: false, optional: true, required: false
  private _backendKubeMode = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeModeOutputReference(this, "backend_kube_mode");
  public get backendKubeMode() {
    return this._backendKubeMode;
  }
  public putBackendKubeMode(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsBackendKubeMode) {
    this._backendKubeMode.internalValue = value;
  }
  public resetBackendKubeMode() {
    this._backendKubeMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendKubeModeInput() {
    return this._backendKubeMode.internalValue;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs {
  /**
  * HTTPIPXEBinaryAddress specifies the http ipxe binary server address (IP:Port) to use in DHCP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#http_ipxe_binary_address DataK8STinkerbellOrgStackV1Alpha1Manifest#http_ipxe_binary_address}
  */
  readonly httpIpxeBinaryAddress?: string;
  /**
  * HTTPIPXEBinaryURI specifies the http ipxe script server URL to use in DHCP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#http_ipxe_binary_uri DataK8STinkerbellOrgStackV1Alpha1Manifest#http_ipxe_binary_uri}
  */
  readonly httpIpxeBinaryUri?: string;
  /**
  * IP is the local IP to listen on to serve TFTP binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#ip DataK8STinkerbellOrgStackV1Alpha1Manifest#ip}
  */
  readonly ip: string;
  /**
  * IPForPacket IP address to use in DHCP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#ip_for_packet DataK8STinkerbellOrgStackV1Alpha1Manifest#ip_for_packet}
  */
  readonly ipForPacket?: string;
  /**
  * Port is the local port to listen on to serve TFTP binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#port DataK8STinkerbellOrgStackV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * SyslogIP specifies the syslog server IP address to use in DHCP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#syslog_ip DataK8STinkerbellOrgStackV1Alpha1Manifest#syslog_ip}
  */
  readonly syslogIp?: string;
  /**
  * TFTPAddress specifies the tftp server address to use in DHCP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tftp_address DataK8STinkerbellOrgStackV1Alpha1Manifest#tftp_address}
  */
  readonly tftpAddress?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigsToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_ipxe_binary_address: cdktf.stringToTerraform(struct!.httpIpxeBinaryAddress),
    http_ipxe_binary_uri: cdktf.stringToTerraform(struct!.httpIpxeBinaryUri),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_for_packet: cdktf.stringToTerraform(struct!.ipForPacket),
    port: cdktf.numberToTerraform(struct!.port),
    syslog_ip: cdktf.stringToTerraform(struct!.syslogIp),
    tftp_address: cdktf.stringToTerraform(struct!.tftpAddress),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigsToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_ipxe_binary_address: {
      value: cdktf.stringToHclTerraform(struct!.httpIpxeBinaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_ipxe_binary_uri: {
      value: cdktf.stringToHclTerraform(struct!.httpIpxeBinaryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_for_packet: {
      value: cdktf.stringToHclTerraform(struct!.ipForPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syslog_ip: {
      value: cdktf.stringToHclTerraform(struct!.syslogIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tftp_address: {
      value: cdktf.stringToHclTerraform(struct!.tftpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpIpxeBinaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIpxeBinaryAddress = this._httpIpxeBinaryAddress;
    }
    if (this._httpIpxeBinaryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIpxeBinaryUri = this._httpIpxeBinaryUri;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipForPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipForPacket = this._ipForPacket;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._syslogIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogIp = this._syslogIp;
    }
    if (this._tftpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpAddress = this._tftpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpIpxeBinaryAddress = undefined;
      this._httpIpxeBinaryUri = undefined;
      this._ip = undefined;
      this._ipForPacket = undefined;
      this._port = undefined;
      this._syslogIp = undefined;
      this._tftpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpIpxeBinaryAddress = value.httpIpxeBinaryAddress;
      this._httpIpxeBinaryUri = value.httpIpxeBinaryUri;
      this._ip = value.ip;
      this._ipForPacket = value.ipForPacket;
      this._port = value.port;
      this._syslogIp = value.syslogIp;
      this._tftpAddress = value.tftpAddress;
    }
  }

  // http_ipxe_binary_address - computed: false, optional: true, required: false
  private _httpIpxeBinaryAddress?: string; 
  public get httpIpxeBinaryAddress() {
    return this.getStringAttribute('http_ipxe_binary_address');
  }
  public set httpIpxeBinaryAddress(value: string) {
    this._httpIpxeBinaryAddress = value;
  }
  public resetHttpIpxeBinaryAddress() {
    this._httpIpxeBinaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIpxeBinaryAddressInput() {
    return this._httpIpxeBinaryAddress;
  }

  // http_ipxe_binary_uri - computed: false, optional: true, required: false
  private _httpIpxeBinaryUri?: string; 
  public get httpIpxeBinaryUri() {
    return this.getStringAttribute('http_ipxe_binary_uri');
  }
  public set httpIpxeBinaryUri(value: string) {
    this._httpIpxeBinaryUri = value;
  }
  public resetHttpIpxeBinaryUri() {
    this._httpIpxeBinaryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIpxeBinaryUriInput() {
    return this._httpIpxeBinaryUri;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_for_packet - computed: false, optional: true, required: false
  private _ipForPacket?: string; 
  public get ipForPacket() {
    return this.getStringAttribute('ip_for_packet');
  }
  public set ipForPacket(value: string) {
    this._ipForPacket = value;
  }
  public resetIpForPacket() {
    this._ipForPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForPacketInput() {
    return this._ipForPacket;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // syslog_ip - computed: false, optional: true, required: false
  private _syslogIp?: string; 
  public get syslogIp() {
    return this.getStringAttribute('syslog_ip');
  }
  public set syslogIp(value: string) {
    this._syslogIp = value;
  }
  public resetSyslogIp() {
    this._syslogIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogIpInput() {
    return this._syslogIp;
  }

  // tftp_address - computed: false, optional: true, required: false
  private _tftpAddress?: string; 
  public get tftpAddress() {
    return this.getStringAttribute('tftp_address');
  }
  public set tftpAddress(value: string) {
    this._tftpAddress = value;
  }
  public resetTftpAddress() {
    this._tftpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpAddressInput() {
    return this._tftpAddress;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage {
  /**
  * Repository is used to set the image repository for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#repository DataK8STinkerbellOrgStackV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag is used to set the image tag for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tag DataK8STinkerbellOrgStackV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImageToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImageToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs {
  /**
  * EnableHTTPBinary enable iPXE HTTP binary server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#enable_http_binary DataK8STinkerbellOrgStackV1Alpha1Manifest#enable_http_binary}
  */
  readonly enableHttpBinary?: boolean | cdktf.IResolvable;
  /**
  * EnableTLS sets if the smee should run with TLS or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#enable_tls DataK8STinkerbellOrgStackV1Alpha1Manifest#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * ExtraKernelArgs specifies extra set of kernel args (k=v k=v) that are appended to the kernel cmdline iPXE script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#extra_kernel_args DataK8STinkerbellOrgStackV1Alpha1Manifest#extra_kernel_args}
  */
  readonly extraKernelArgs?: string;
  /**
  * HookURL specifies the URL where OSIE(Hook) images are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#hook_url DataK8STinkerbellOrgStackV1Alpha1Manifest#hook_url}
  */
  readonly hookUrl?: string;
  /**
  * IP is the local IP to listen on to serve TFTP binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#ip DataK8STinkerbellOrgStackV1Alpha1Manifest#ip}
  */
  readonly ip: string;
  /**
  * Port is the local port to listen on to serve TFTP binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#port DataK8STinkerbellOrgStackV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * TinkServerAddress specifies the IP:Port of the tink server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tink_server_address DataK8STinkerbellOrgStackV1Alpha1Manifest#tink_server_address}
  */
  readonly tinkServerAddress?: string;
  /**
  * TrustedProxies comma separated allowed CIDRs subnets to be used as trusted proxies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#trusted_proxies DataK8STinkerbellOrgStackV1Alpha1Manifest#trusted_proxies}
  */
  readonly trustedProxies?: string[];
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigsToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http_binary: cdktf.booleanToTerraform(struct!.enableHttpBinary),
    enable_tls: cdktf.booleanToTerraform(struct!.enableTls),
    extra_kernel_args: cdktf.stringToTerraform(struct!.extraKernelArgs),
    hook_url: cdktf.stringToTerraform(struct!.hookUrl),
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    tink_server_address: cdktf.stringToTerraform(struct!.tinkServerAddress),
    trusted_proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedProxies),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigsToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_http_binary: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttpBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.enableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_kernel_args: {
      value: cdktf.stringToHclTerraform(struct!.extraKernelArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hook_url: {
      value: cdktf.stringToHclTerraform(struct!.hookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tink_server_address: {
      value: cdktf.stringToHclTerraform(struct!.tinkServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_proxies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedProxies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttpBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpBinary = this._enableHttpBinary;
    }
    if (this._enableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls = this._enableTls;
    }
    if (this._extraKernelArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraKernelArgs = this._extraKernelArgs;
    }
    if (this._hookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookUrl = this._hookUrl;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tinkServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkServerAddress = this._tinkServerAddress;
    }
    if (this._trustedProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedProxies = this._trustedProxies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableHttpBinary = undefined;
      this._enableTls = undefined;
      this._extraKernelArgs = undefined;
      this._hookUrl = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._tinkServerAddress = undefined;
      this._trustedProxies = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableHttpBinary = value.enableHttpBinary;
      this._enableTls = value.enableTls;
      this._extraKernelArgs = value.extraKernelArgs;
      this._hookUrl = value.hookUrl;
      this._ip = value.ip;
      this._port = value.port;
      this._tinkServerAddress = value.tinkServerAddress;
      this._trustedProxies = value.trustedProxies;
    }
  }

  // enable_http_binary - computed: false, optional: true, required: false
  private _enableHttpBinary?: boolean | cdktf.IResolvable; 
  public get enableHttpBinary() {
    return this.getBooleanAttribute('enable_http_binary');
  }
  public set enableHttpBinary(value: boolean | cdktf.IResolvable) {
    this._enableHttpBinary = value;
  }
  public resetEnableHttpBinary() {
    this._enableHttpBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpBinaryInput() {
    return this._enableHttpBinary;
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // extra_kernel_args - computed: false, optional: true, required: false
  private _extraKernelArgs?: string; 
  public get extraKernelArgs() {
    return this.getStringAttribute('extra_kernel_args');
  }
  public set extraKernelArgs(value: string) {
    this._extraKernelArgs = value;
  }
  public resetExtraKernelArgs() {
    this._extraKernelArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraKernelArgsInput() {
    return this._extraKernelArgs;
  }

  // hook_url - computed: false, optional: true, required: false
  private _hookUrl?: string; 
  public get hookUrl() {
    return this.getStringAttribute('hook_url');
  }
  public set hookUrl(value: string) {
    this._hookUrl = value;
  }
  public resetHookUrl() {
    this._hookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookUrlInput() {
    return this._hookUrl;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tink_server_address - computed: false, optional: true, required: false
  private _tinkServerAddress?: string; 
  public get tinkServerAddress() {
    return this.getStringAttribute('tink_server_address');
  }
  public set tinkServerAddress(value: string) {
    this._tinkServerAddress = value;
  }
  public resetTinkServerAddress() {
    this._tinkServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkServerAddressInput() {
    return this._tinkServerAddress;
  }

  // trusted_proxies - computed: false, optional: true, required: false
  private _trustedProxies?: string[]; 
  public get trustedProxies() {
    return this.getListAttribute('trusted_proxies');
  }
  public set trustedProxies(value: string[]) {
    this._trustedProxies = value;
  }
  public resetTrustedProxies() {
    this._trustedProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedProxiesInput() {
    return this._trustedProxies;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs {
  /**
  * IP is the local IP to listen on for syslog messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#bind_address DataK8STinkerbellOrgStackV1Alpha1Manifest#bind_address}
  */
  readonly bindAddress: string;
  /**
  * Port is the local port to listen on for syslog messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#port DataK8STinkerbellOrgStackV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigsToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_address: cdktf.stringToTerraform(struct!.bindAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigsToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_address: {
      value: cdktf.stringToHclTerraform(struct!.bindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddress = this._bindAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindAddress = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindAddress = value.bindAddress;
      this._port = value.port;
    }
  }

  // bind_address - computed: false, optional: false, required: true
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs {
  /**
  * IP is the local IP to listen on to serve TFTP binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#ip DataK8STinkerbellOrgStackV1Alpha1Manifest#ip}
  */
  readonly ip: string;
  /**
  * IPXEScriptPatch specifies the iPXE script fragment to patch into served iPXE binaries served via TFTP or HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#ipxe_script_patch DataK8STinkerbellOrgStackV1Alpha1Manifest#ipxe_script_patch}
  */
  readonly ipxeScriptPatch?: string;
  /**
  * Port is the local port to listen on to serve TFTP binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#port DataK8STinkerbellOrgStackV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * TFTPTimeout specifies the iPXE tftp binary server requests timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tftp_timeout DataK8STinkerbellOrgStackV1Alpha1Manifest#tftp_timeout}
  */
  readonly tftpTimeout?: number;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigsToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipxe_script_patch: cdktf.stringToTerraform(struct!.ipxeScriptPatch),
    port: cdktf.numberToTerraform(struct!.port),
    tftp_timeout: cdktf.numberToTerraform(struct!.tftpTimeout),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigsToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipxe_script_patch: {
      value: cdktf.stringToHclTerraform(struct!.ipxeScriptPatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tftp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tftpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipxeScriptPatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeScriptPatch = this._ipxeScriptPatch;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tftpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpTimeout = this._tftpTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ipxeScriptPatch = undefined;
      this._port = undefined;
      this._tftpTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ipxeScriptPatch = value.ipxeScriptPatch;
      this._port = value.port;
      this._tftpTimeout = value.tftpTimeout;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipxe_script_patch - computed: false, optional: true, required: false
  private _ipxeScriptPatch?: string; 
  public get ipxeScriptPatch() {
    return this.getStringAttribute('ipxe_script_patch');
  }
  public set ipxeScriptPatch(value: string) {
    this._ipxeScriptPatch = value;
  }
  public resetIpxeScriptPatch() {
    this._ipxeScriptPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptPatchInput() {
    return this._ipxeScriptPatch;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tftp_timeout - computed: false, optional: true, required: false
  private _tftpTimeout?: number; 
  public get tftpTimeout() {
    return this.getNumberAttribute('tftp_timeout');
  }
  public set tftpTimeout(value: number) {
    this._tftpTimeout = value;
  }
  public resetTftpTimeout() {
    this._tftpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpTimeoutInput() {
    return this._tftpTimeout;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee {
  /**
  * BackendConfigs contains the configurations for smee backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#backend_configs DataK8STinkerbellOrgStackV1Alpha1Manifest#backend_configs}
  */
  readonly backendConfigs: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs;
  /**
  * DHCPConfigs contains the DHCP server configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#dhcp_configs DataK8STinkerbellOrgStackV1Alpha1Manifest#dhcp_configs}
  */
  readonly dhcpConfigs?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs;
  /**
  * Image specifies the image repo and tag for Smee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#image DataK8STinkerbellOrgStackV1Alpha1Manifest#image}
  */
  readonly image: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage;
  /**
  * IPXEConfigs contains the iPXE configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#ipxe_configs DataK8STinkerbellOrgStackV1Alpha1Manifest#ipxe_configs}
  */
  readonly ipxeConfigs?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs;
  /**
  * LogLevel sets the debug level for smee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#log_level DataK8STinkerbellOrgStackV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * SyslogConfigs contains the configurations of the syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#syslog_configs DataK8STinkerbellOrgStackV1Alpha1Manifest#syslog_configs}
  */
  readonly syslogConfigs?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs;
  /**
  * TFTPConfigs contains the configurations of Tinkerbell TFTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tftp_configs DataK8STinkerbellOrgStackV1Alpha1Manifest#tftp_configs}
  */
  readonly tftpConfigs?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_configs: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsToTerraform(struct!.backendConfigs),
    dhcp_configs: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigsToTerraform(struct!.dhcpConfigs),
    image: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImageToTerraform(struct!.image),
    ipxe_configs: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigsToTerraform(struct!.ipxeConfigs),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    syslog_configs: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigsToTerraform(struct!.syslogConfigs),
    tftp_configs: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigsToTerraform(struct!.tftpConfigs),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_configs: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsToHclTerraform(struct!.backendConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs",
    },
    dhcp_configs: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigsToHclTerraform(struct!.dhcpConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs",
    },
    image: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage",
    },
    ipxe_configs: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigsToHclTerraform(struct!.ipxeConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_configs: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigsToHclTerraform(struct!.syslogConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs",
    },
    tftp_configs: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigsToHclTerraform(struct!.tftpConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendConfigs = this._backendConfigs?.internalValue;
    }
    if (this._dhcpConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfigs = this._dhcpConfigs?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._ipxeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeConfigs = this._ipxeConfigs?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._syslogConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogConfigs = this._syslogConfigs?.internalValue;
    }
    if (this._tftpConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpConfigs = this._tftpConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendConfigs.internalValue = undefined;
      this._dhcpConfigs.internalValue = undefined;
      this._image.internalValue = undefined;
      this._ipxeConfigs.internalValue = undefined;
      this._logLevel = undefined;
      this._syslogConfigs.internalValue = undefined;
      this._tftpConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendConfigs.internalValue = value.backendConfigs;
      this._dhcpConfigs.internalValue = value.dhcpConfigs;
      this._image.internalValue = value.image;
      this._ipxeConfigs.internalValue = value.ipxeConfigs;
      this._logLevel = value.logLevel;
      this._syslogConfigs.internalValue = value.syslogConfigs;
      this._tftpConfigs.internalValue = value.tftpConfigs;
    }
  }

  // backend_configs - computed: false, optional: false, required: true
  private _backendConfigs = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigsOutputReference(this, "backend_configs");
  public get backendConfigs() {
    return this._backendConfigs;
  }
  public putBackendConfigs(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeBackendConfigs) {
    this._backendConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigsInput() {
    return this._backendConfigs.internalValue;
  }

  // dhcp_configs - computed: false, optional: true, required: false
  private _dhcpConfigs = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigsOutputReference(this, "dhcp_configs");
  public get dhcpConfigs() {
    return this._dhcpConfigs;
  }
  public putDhcpConfigs(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeDhcpConfigs) {
    this._dhcpConfigs.internalValue = value;
  }
  public resetDhcpConfigs() {
    this._dhcpConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigsInput() {
    return this._dhcpConfigs.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // ipxe_configs - computed: false, optional: true, required: false
  private _ipxeConfigs = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigsOutputReference(this, "ipxe_configs");
  public get ipxeConfigs() {
    return this._ipxeConfigs;
  }
  public putIpxeConfigs(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeIpxeConfigs) {
    this._ipxeConfigs.internalValue = value;
  }
  public resetIpxeConfigs() {
    this._ipxeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeConfigsInput() {
    return this._ipxeConfigs.internalValue;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // syslog_configs - computed: false, optional: true, required: false
  private _syslogConfigs = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigsOutputReference(this, "syslog_configs");
  public get syslogConfigs() {
    return this._syslogConfigs;
  }
  public putSyslogConfigs(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeSyslogConfigs) {
    this._syslogConfigs.internalValue = value;
  }
  public resetSyslogConfigs() {
    this._syslogConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogConfigsInput() {
    return this._syslogConfigs.internalValue;
  }

  // tftp_configs - computed: false, optional: true, required: false
  private _tftpConfigs = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigsOutputReference(this, "tftp_configs");
  public get tftpConfigs() {
    return this._tftpConfigs;
  }
  public putTftpConfigs(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeTftpConfigs) {
    this._tftpConfigs.internalValue = value;
  }
  public resetTftpConfigs() {
    this._tftpConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpConfigsInput() {
    return this._tftpConfigs.internalValue;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage {
  /**
  * Repository is used to set the image repository for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#repository DataK8STinkerbellOrgStackV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag is used to set the image tag for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tag DataK8STinkerbellOrgStackV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImageToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImageToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController {
  /**
  * Image specifies the details of a tinkerbell services images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#image DataK8STinkerbellOrgStackV1Alpha1Manifest#image}
  */
  readonly image?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImageToTerraform(struct!.image),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image.internalValue = value.image;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage {
  /**
  * Repository is used to set the image repository for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#repository DataK8STinkerbellOrgStackV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag is used to set the image tag for tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tag DataK8STinkerbellOrgStackV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImageToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImageToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer {
  /**
  * EnableTLS sets if the tink server should run with TLS or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#enable_tls DataK8STinkerbellOrgStackV1Alpha1Manifest#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Image specifies the details of a tinkerbell services images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#image DataK8STinkerbellOrgStackV1Alpha1Manifest#image}
  */
  readonly image?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_tls: cdktf.booleanToTerraform(struct!.enableTls),
    image: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImageToTerraform(struct!.image),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.enableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls = this._enableTls;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTls = undefined;
      this._image.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTls = value.enableTls;
      this._image.internalValue = value.image;
    }
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices {
  /**
  * Hegel contains all the information and spec about smee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#hegel DataK8STinkerbellOrgStackV1Alpha1Manifest#hegel}
  */
  readonly hegel?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel;
  /**
  * Rufio contains all the information and spec about rufio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#rufio DataK8STinkerbellOrgStackV1Alpha1Manifest#rufio}
  */
  readonly rufio?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio;
  /**
  * Smee contains all the information and spec about smee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#smee DataK8STinkerbellOrgStackV1Alpha1Manifest#smee}
  */
  readonly smee?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee;
  /**
  * TinkController contains all the information and spec about tink controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tink_controller DataK8STinkerbellOrgStackV1Alpha1Manifest#tink_controller}
  */
  readonly tinkController: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController;
  /**
  * TinkServer contains all the information and spec about tink server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#tink_server DataK8STinkerbellOrgStackV1Alpha1Manifest#tink_server}
  */
  readonly tinkServer: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hegel: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelToTerraform(struct!.hegel),
    rufio: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioToTerraform(struct!.rufio),
    smee: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeToTerraform(struct!.smee),
    tink_controller: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerToTerraform(struct!.tinkController),
    tink_server: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerToTerraform(struct!.tinkServer),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hegel: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelToHclTerraform(struct!.hegel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel",
    },
    rufio: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioToHclTerraform(struct!.rufio),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio",
    },
    smee: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeToHclTerraform(struct!.smee),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee",
    },
    tink_controller: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerToHclTerraform(struct!.tinkController),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController",
    },
    tink_server: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerToHclTerraform(struct!.tinkServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hegel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hegel = this._hegel?.internalValue;
    }
    if (this._rufio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rufio = this._rufio?.internalValue;
    }
    if (this._smee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smee = this._smee?.internalValue;
    }
    if (this._tinkController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkController = this._tinkController?.internalValue;
    }
    if (this._tinkServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkServer = this._tinkServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hegel.internalValue = undefined;
      this._rufio.internalValue = undefined;
      this._smee.internalValue = undefined;
      this._tinkController.internalValue = undefined;
      this._tinkServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hegel.internalValue = value.hegel;
      this._rufio.internalValue = value.rufio;
      this._smee.internalValue = value.smee;
      this._tinkController.internalValue = value.tinkController;
      this._tinkServer.internalValue = value.tinkServer;
    }
  }

  // hegel - computed: false, optional: true, required: false
  private _hegel = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegelOutputReference(this, "hegel");
  public get hegel() {
    return this._hegel;
  }
  public putHegel(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesHegel) {
    this._hegel.internalValue = value;
  }
  public resetHegel() {
    this._hegel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hegelInput() {
    return this._hegel.internalValue;
  }

  // rufio - computed: false, optional: true, required: false
  private _rufio = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufioOutputReference(this, "rufio");
  public get rufio() {
    return this._rufio;
  }
  public putRufio(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesRufio) {
    this._rufio.internalValue = value;
  }
  public resetRufio() {
    this._rufio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rufioInput() {
    return this._rufio.internalValue;
  }

  // smee - computed: false, optional: true, required: false
  private _smee = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmeeOutputReference(this, "smee");
  public get smee() {
    return this._smee;
  }
  public putSmee(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesSmee) {
    this._smee.internalValue = value;
  }
  public resetSmee() {
    this._smee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smeeInput() {
    return this._smee.internalValue;
  }

  // tink_controller - computed: false, optional: false, required: true
  private _tinkController = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkControllerOutputReference(this, "tink_controller");
  public get tinkController() {
    return this._tinkController;
  }
  public putTinkController(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkController) {
    this._tinkController.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkControllerInput() {
    return this._tinkController.internalValue;
  }

  // tink_server - computed: false, optional: false, required: true
  private _tinkServer = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServerOutputReference(this, "tink_server");
  public get tinkServer() {
    return this._tinkServer;
  }
  public putTinkServer(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesTinkServer) {
    this._tinkServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkServerInput() {
    return this._tinkServer.internalValue;
  }
}
export interface DataK8STinkerbellOrgStackV1Alpha1ManifestSpec {
  /**
  * DNSResolverIP is indicative of the resolver IP utilized for setting up the nginx server responsible for proxying to the Tinkerbell services and serving the Hook artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#dns_resolver_ip DataK8STinkerbellOrgStackV1Alpha1Manifest#dns_resolver_ip}
  */
  readonly dnsResolverIp?: string;
  /**
  * ImagePullSecrets the secret name containing the docker auth config which should exist in the same namespace where the operator is deployed(typically tinkerbell)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#image_pull_secrets DataK8STinkerbellOrgStackV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * Registry is the registry to use for all images. If this field is set, all tink service deployment images will be prefixed with this value. For example if the value here was set to docker.io, then smee image will be docker.io/tinkerbell/smee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#registry DataK8STinkerbellOrgStackV1Alpha1Manifest#registry}
  */
  readonly registry?: string;
  /**
  * Services contains all Tinkerbell Stack services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#services DataK8STinkerbellOrgStackV1Alpha1Manifest#services}
  */
  readonly services: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices;
  /**
  * Version is the Tinkerbell CRD version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#version DataK8STinkerbellOrgStackV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecToTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_resolver_ip: cdktf.stringToTerraform(struct!.dnsResolverIp),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    registry: cdktf.stringToTerraform(struct!.registry),
    services: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesToTerraform(struct!.services),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8STinkerbellOrgStackV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STinkerbellOrgStackV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_resolver_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsResolverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgStackV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgStackV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsResolverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolverIp = this._dnsResolverIp;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsResolverIp = undefined;
      this._imagePullSecrets = undefined;
      this._registry = undefined;
      this._services.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsResolverIp = value.dnsResolverIp;
      this._imagePullSecrets = value.imagePullSecrets;
      this._registry = value.registry;
      this._services.internalValue = value.services;
      this._version = value.version;
    }
  }

  // dns_resolver_ip - computed: false, optional: true, required: false
  private _dnsResolverIp?: string; 
  public get dnsResolverIp() {
    return this.getStringAttribute('dns_resolver_ip');
  }
  public set dnsResolverIp(value: string) {
    this._dnsResolverIp = value;
  }
  public resetDnsResolverIp() {
    this._dnsResolverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverIpInput() {
    return this._dnsResolverIp;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string[]; 
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string[]) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpecServices) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest k8s_tinkerbell_org_stack_v1alpha1_manifest}
*/
export class DataK8STinkerbellOrgStackV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tinkerbell_org_stack_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STinkerbellOrgStackV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STinkerbellOrgStackV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STinkerbellOrgStackV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STinkerbellOrgStackV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tinkerbell_org_stack_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_stack_v1alpha1_manifest k8s_tinkerbell_org_stack_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STinkerbellOrgStackV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STinkerbellOrgStackV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tinkerbell_org_stack_v1alpha1_manifest',
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
  private _metadata = new DataK8STinkerbellOrgStackV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STinkerbellOrgStackV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STinkerbellOrgStackV1Alpha1ManifestSpec) {
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
      metadata: dataK8STinkerbellOrgStackV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STinkerbellOrgStackV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STinkerbellOrgStackV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgStackV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
