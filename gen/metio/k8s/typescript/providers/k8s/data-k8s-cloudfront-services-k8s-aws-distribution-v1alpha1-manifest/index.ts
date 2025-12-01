// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#metadata DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata;
  /**
  * DistributionSpec defines the desired state of Distribution. A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#spec DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec;
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#annotations DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#labels DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#name DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#namespace DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliasesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliasesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethodsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethodsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods {
  /**
  * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices: * CloudFront caches responses to GET and HEAD requests. * CloudFront caches responses to GET, HEAD, and OPTIONS requests. If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cached_methods DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cached_methods}
  */
  readonly cachedMethods?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached_methods: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethodsToTerraform(struct!.cachedMethods),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached_methods: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethodsToHclTerraform(struct!.cachedMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods",
    },
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods?.internalValue;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedMethods.internalValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedMethods.internalValue = value.cachedMethods;
      this._items = value.items;
    }
  }

  // cached_methods - computed: false, optional: true, required: false
  private _cachedMethods = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethodsOutputReference(this, "cached_methods");
  public get cachedMethods() {
    return this._cachedMethods;
  }
  public putCachedMethods(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsCachedMethods) {
    this._cachedMethods.internalValue = value;
  }
  public resetCachedMethods() {
    this._cachedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods.internalValue;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNamesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNamesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#forward DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#forward}
  */
  readonly forward?: string;
  /**
  * Contains a list of cookie names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#whitelisted_names DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#whitelisted_names}
  */
  readonly whitelistedNames?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNamesToTerraform(struct!.whitelistedNames),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward: {
      value: cdktf.stringToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_names: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNamesToHclTerraform(struct!.whitelistedNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._whitelistedNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedNames = this._whitelistedNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forward = undefined;
      this._whitelistedNames.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forward = value.forward;
      this._whitelistedNames.internalValue = value.whitelistedNames;
    }
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // whitelisted_names - computed: false, optional: true, required: false
  private _whitelistedNames = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNamesOutputReference(this, "whitelisted_names");
  public get whitelistedNames() {
    return this._whitelistedNames;
  }
  public putWhitelistedNames(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesWhitelistedNames) {
    this._whitelistedNames.internalValue = value;
  }
  public resetWhitelistedNames() {
    this._whitelistedNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedNamesInput() {
    return this._whitelistedNames.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeadersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeadersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeysToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeysToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues {
  /**
  * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. If you want to include cookies in the cache key, use CookiesConfig in a cache policy. See CachePolicy. If you want to send cookies to the origin but not include them in the cache key, use CookiesConfig in an origin request policy. See OriginRequestPolicy. A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see Caching Content Based on Cookies (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cookies DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cookies}
  */
  readonly cookies?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies;
  /**
  * Contains a list of HTTP header names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#headers DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#query_string DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#query_string}
  */
  readonly queryString?: boolean | cdktf.IResolvable;
  /**
  * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. If you want to include query strings in the cache key, use QueryStringsConfig in a cache policy. See CachePolicy. If you want to send query strings to the origin but not include them in the cache key, use QueryStringsConfig in an origin request policy. See OriginRequestPolicy. A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#query_string_cache_keys DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookies: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesToTerraform(struct!.cookies),
    headers: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeadersToTerraform(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeysToTerraform(struct!.queryStringCacheKeys),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookies: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies",
    },
    headers: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders",
    },
    query_string: {
      value: cdktf.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_cache_keys: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeysToHclTerraform(struct!.queryStringCacheKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryStringCacheKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._queryString = undefined;
      this._queryStringCacheKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookies.internalValue = value.cookies;
      this._headers.internalValue = value.headers;
      this._queryString = value.queryString;
      this._queryStringCacheKeys.internalValue = value.queryStringCacheKeys;
    }
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: boolean | cdktf.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktf.IResolvable) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_cache_keys - computed: false, optional: true, required: false
  private _queryStringCacheKeys = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeysOutputReference(this, "query_string_cache_keys");
  public get queryStringCacheKeys() {
    return this._queryStringCacheKeys;
  }
  public putQueryStringCacheKeys(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesQueryStringCacheKeys) {
    this._queryStringCacheKeys.internalValue = value;
  }
  public resetQueryStringCacheKeys() {
    this._queryStringCacheKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCacheKeysInput() {
    return this._queryStringCacheKeys.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#event_type DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#function_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#function_arn}
  */
  readonly functionArn?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktf.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionArn = value.functionArn;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_arn - computed: false, optional: true, required: false
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  public resetFunctionArn() {
    this._functionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#event_type DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#include_body DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#lambda_function_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktf.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_function_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._includeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody?: boolean | cdktf.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktf.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_function_arn - computed: false, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroupsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroupsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups | cdktf.IResolvable): any {
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
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
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

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSignersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSignersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners | cdktf.IResolvable): any {
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
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSignersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
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

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems {
  /**
  * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices: * CloudFront forwards only GET and HEAD requests. * CloudFront forwards only GET, HEAD, and OPTIONS requests. * CloudFront forwards GET, HEAD, OPTIONS, PUT, PATCH, POST, and DELETE requests. If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#allowed_methods DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#allowed_methods}
  */
  readonly allowedMethods?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cache_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#compress DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#default_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#field_level_encryption_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. If you want to include values in the cache key, use a cache policy. For more information, see Creating cache policies (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the Amazon CloudFront Developer Guide. If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see Creating origin request policies (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the Amazon CloudFront Developer Guide. A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#forwarded_values DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#forwarded_values}
  */
  readonly forwardedValues?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues;
  /**
  * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the LIVE stage to associate them with a cache behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#function_associations DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#function_associations}
  */
  readonly functionAssociations?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations;
  /**
  * A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior. If you want to invoke one or more Lambda@Edge functions triggered by requests that match the PathPattern of the cache behavior, specify the applicable values for Quantity and Items. Note that there can be up to 4 LambdaFunctionAssociation items in this list (one for each possible value of EventType) and each EventType can be associated with only one function. If you don't want to invoke any Lambda@Edge functions for the requests that match PathPattern, specify 0 for Quantity and omit Items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#lambda_function_associations DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#lambda_function_associations}
  */
  readonly lambdaFunctionAssociations?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#max_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#min_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_request_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#path_pattern DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#path_pattern}
  */
  readonly pathPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#realtime_log_config_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#response_headers_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#smooth_streaming DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#target_origin_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#target_origin_id}
  */
  readonly targetOriginId?: string;
  /**
  * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#trusted_key_groups DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#trusted_key_groups}
  */
  readonly trustedKeyGroups?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups;
  /**
  * A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#trusted_signers DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#trusted_signers}
  */
  readonly trustedSigners?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#viewer_protocol_policy DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_methods: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsToTerraform(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    forwarded_values: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesToTerraform(struct!.forwardedValues),
    function_associations: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsToTerraform(struct!.functionAssociations),
    lambda_function_associations: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsToTerraform(struct!.lambdaFunctionAssociations),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktf.stringToTerraform(struct!.responseHeadersPolicyId),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroupsToTerraform(struct!.trustedKeyGroups),
    trusted_signers: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSignersToTerraform(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_methods: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsToHclTerraform(struct!.allowedMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods",
    },
    cache_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_level_encryption_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarded_values: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesToHclTerraform(struct!.forwardedValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues",
    },
    function_associations: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsToHclTerraform(struct!.functionAssociations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations",
    },
    lambda_function_associations: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsToHclTerraform(struct!.lambdaFunctionAssociations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations",
    },
    max_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktf.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_request_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_pattern: {
      value: cdktf.stringToHclTerraform(struct!.pathPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smooth_streaming: {
      value: cdktf.booleanToHclTerraform(struct!.smoothStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_origin_id: {
      value: cdktf.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_key_groups: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroupsToHclTerraform(struct!.trustedKeyGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups",
    },
    trusted_signers: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSignersToHclTerraform(struct!.trustedSigners),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners",
    },
    viewer_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods?.internalValue;
    }
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
    }
    if (this._forwardedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
    }
    if (this._functionAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociations = this._functionAssociations?.internalValue;
    }
    if (this._lambdaFunctionAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociations = this._lambdaFunctionAssociations?.internalValue;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._originRequestPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
    }
    if (this._pathPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern;
    }
    if (this._realtimeLogConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
    }
    if (this._responseHeadersPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._trustedKeyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups?.internalValue;
    }
    if (this._trustedSigners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSigners = this._trustedSigners?.internalValue;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedMethods.internalValue = undefined;
      this._cachePolicyId = undefined;
      this._compress = undefined;
      this._defaultTtl = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._forwardedValues.internalValue = undefined;
      this._functionAssociations.internalValue = undefined;
      this._lambdaFunctionAssociations.internalValue = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._originRequestPolicyId = undefined;
      this._pathPattern = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._smoothStreaming = undefined;
      this._targetOriginId = undefined;
      this._trustedKeyGroups.internalValue = undefined;
      this._trustedSigners.internalValue = undefined;
      this._viewerProtocolPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedMethods.internalValue = value.allowedMethods;
      this._cachePolicyId = value.cachePolicyId;
      this._compress = value.compress;
      this._defaultTtl = value.defaultTtl;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._forwardedValues.internalValue = value.forwardedValues;
      this._functionAssociations.internalValue = value.functionAssociations;
      this._lambdaFunctionAssociations.internalValue = value.lambdaFunctionAssociations;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._pathPattern = value.pathPattern;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._smoothStreaming = value.smoothStreaming;
      this._targetOriginId = value.targetOriginId;
      this._trustedKeyGroups.internalValue = value.trustedKeyGroups;
      this._trustedSigners.internalValue = value.trustedSigners;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
    }
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethodsOutputReference(this, "allowed_methods");
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsAllowedMethods) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
  }

  // cache_policy_id - computed: false, optional: true, required: false
  private _cachePolicyId?: string; 
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }
  public set cachePolicyId(value: string) {
    this._cachePolicyId = value;
  }
  public resetCachePolicyId() {
    this._cachePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyIdInput() {
    return this._cachePolicyId;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // field_level_encryption_id - computed: false, optional: true, required: false
  private _fieldLevelEncryptionId?: string; 
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }
  public set fieldLevelEncryptionId(value: string) {
    this._fieldLevelEncryptionId = value;
  }
  public resetFieldLevelEncryptionId() {
    this._fieldLevelEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionIdInput() {
    return this._fieldLevelEncryptionId;
  }

  // forwarded_values - computed: false, optional: true, required: false
  private _forwardedValues = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValuesOutputReference(this, "forwarded_values");
  public get forwardedValues() {
    return this._forwardedValues;
  }
  public putForwardedValues(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsForwardedValues) {
    this._forwardedValues.internalValue = value;
  }
  public resetForwardedValues() {
    this._forwardedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedValuesInput() {
    return this._forwardedValues.internalValue;
  }

  // function_associations - computed: false, optional: true, required: false
  private _functionAssociations = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociationsOutputReference(this, "function_associations");
  public get functionAssociations() {
    return this._functionAssociations;
  }
  public putFunctionAssociations(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsFunctionAssociations) {
    this._functionAssociations.internalValue = value;
  }
  public resetFunctionAssociations() {
    this._functionAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationsInput() {
    return this._functionAssociations.internalValue;
  }

  // lambda_function_associations - computed: false, optional: true, required: false
  private _lambdaFunctionAssociations = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociationsOutputReference(this, "lambda_function_associations");
  public get lambdaFunctionAssociations() {
    return this._lambdaFunctionAssociations;
  }
  public putLambdaFunctionAssociations(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsLambdaFunctionAssociations) {
    this._lambdaFunctionAssociations.internalValue = value;
  }
  public resetLambdaFunctionAssociations() {
    this._lambdaFunctionAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationsInput() {
    return this._lambdaFunctionAssociations.internalValue;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // origin_request_policy_id - computed: false, optional: true, required: false
  private _originRequestPolicyId?: string; 
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }
  public set originRequestPolicyId(value: string) {
    this._originRequestPolicyId = value;
  }
  public resetOriginRequestPolicyId() {
    this._originRequestPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyIdInput() {
    return this._originRequestPolicyId;
  }

  // path_pattern - computed: false, optional: true, required: false
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  public resetPathPattern() {
    this._pathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
  }

  // realtime_log_config_arn - computed: false, optional: true, required: false
  private _realtimeLogConfigArn?: string; 
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }
  public set realtimeLogConfigArn(value: string) {
    this._realtimeLogConfigArn = value;
  }
  public resetRealtimeLogConfigArn() {
    this._realtimeLogConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeLogConfigArnInput() {
    return this._realtimeLogConfigArn;
  }

  // response_headers_policy_id - computed: false, optional: true, required: false
  private _responseHeadersPolicyId?: string; 
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }
  public set responseHeadersPolicyId(value: string) {
    this._responseHeadersPolicyId = value;
  }
  public resetResponseHeadersPolicyId() {
    this._responseHeadersPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyIdInput() {
    return this._responseHeadersPolicyId;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }

  // target_origin_id - computed: false, optional: true, required: false
  private _targetOriginId?: string; 
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }
  public set targetOriginId(value: string) {
    this._targetOriginId = value;
  }
  public resetTargetOriginId() {
    this._targetOriginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOriginIdInput() {
    return this._targetOriginId;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroupsOutputReference(this, "trusted_key_groups");
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }
  public putTrustedKeyGroups(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedKeyGroups) {
    this._trustedKeyGroups.internalValue = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups.internalValue;
  }

  // trusted_signers - computed: false, optional: true, required: false
  private _trustedSigners = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSignersOutputReference(this, "trusted_signers");
  public get trustedSigners() {
    return this._trustedSigners;
  }
  public putTrustedSigners(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsTrustedSigners) {
    this._trustedSigners.internalValue = value;
  }
  public resetTrustedSigners() {
    this._trustedSigners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSignersInput() {
    return this._trustedSigners.internalValue;
  }

  // viewer_protocol_policy - computed: false, optional: true, required: false
  private _viewerProtocolPolicy?: string; 
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
  public set viewerProtocolPolicy(value: string) {
    this._viewerProtocolPolicy = value;
  }
  public resetViewerProtocolPolicy() {
    this._viewerProtocolPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerProtocolPolicyInput() {
    return this._viewerProtocolPolicy;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#error_caching_min_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#error_code DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#error_code}
  */
  readonly errorCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#response_code DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#response_page_path DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#response_page_path}
  */
  readonly responsePagePath?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_caching_min_ttl: cdktf.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    response_page_path: cdktf.stringToTerraform(struct!.responsePagePath),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_caching_min_ttl: {
      value: cdktf.numberToHclTerraform(struct!.errorCachingMinTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_code: {
      value: cdktf.numberToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_page_path: {
      value: cdktf.stringToHclTerraform(struct!.responsePagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorCachingMinTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCachingMinTtl = this._errorCachingMinTtl;
    }
    if (this._errorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCode = this._errorCode;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responsePagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePagePath = this._responsePagePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = undefined;
      this._errorCode = undefined;
      this._responseCode = undefined;
      this._responsePagePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = value.errorCachingMinTtl;
      this._errorCode = value.errorCode;
      this._responseCode = value.responseCode;
      this._responsePagePath = value.responsePagePath;
    }
  }

  // error_caching_min_ttl - computed: false, optional: true, required: false
  private _errorCachingMinTtl?: number; 
  public get errorCachingMinTtl() {
    return this.getNumberAttribute('error_caching_min_ttl');
  }
  public set errorCachingMinTtl(value: number) {
    this._errorCachingMinTtl = value;
  }
  public resetErrorCachingMinTtl() {
    this._errorCachingMinTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCachingMinTtlInput() {
    return this._errorCachingMinTtl;
  }

  // error_code - computed: false, optional: true, required: false
  private _errorCode?: number; 
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }
  public set errorCode(value: number) {
    this._errorCode = value;
  }
  public resetErrorCode() {
    this._errorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_page_path - computed: false, optional: true, required: false
  private _responsePagePath?: string; 
  public get responsePagePath() {
    return this.getStringAttribute('response_page_path');
  }
  public set responsePagePath(value: string) {
    this._responsePagePath = value;
  }
  public resetResponsePagePath() {
    this._responsePagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePagePathInput() {
    return this._responsePagePath;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethodsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethodsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods {
  /**
  * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices: * CloudFront caches responses to GET and HEAD requests. * CloudFront caches responses to GET, HEAD, and OPTIONS requests. If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cached_methods DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cached_methods}
  */
  readonly cachedMethods?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached_methods: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethodsToTerraform(struct!.cachedMethods),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached_methods: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethodsToHclTerraform(struct!.cachedMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods",
    },
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods?.internalValue;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedMethods.internalValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedMethods.internalValue = value.cachedMethods;
      this._items = value.items;
    }
  }

  // cached_methods - computed: false, optional: true, required: false
  private _cachedMethods = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethodsOutputReference(this, "cached_methods");
  public get cachedMethods() {
    return this._cachedMethods;
  }
  public putCachedMethods(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsCachedMethods) {
    this._cachedMethods.internalValue = value;
  }
  public resetCachedMethods() {
    this._cachedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods.internalValue;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNamesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNamesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#forward DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#forward}
  */
  readonly forward?: string;
  /**
  * Contains a list of cookie names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#whitelisted_names DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#whitelisted_names}
  */
  readonly whitelistedNames?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNamesToTerraform(struct!.whitelistedNames),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward: {
      value: cdktf.stringToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_names: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNamesToHclTerraform(struct!.whitelistedNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._whitelistedNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedNames = this._whitelistedNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forward = undefined;
      this._whitelistedNames.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forward = value.forward;
      this._whitelistedNames.internalValue = value.whitelistedNames;
    }
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // whitelisted_names - computed: false, optional: true, required: false
  private _whitelistedNames = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNamesOutputReference(this, "whitelisted_names");
  public get whitelistedNames() {
    return this._whitelistedNames;
  }
  public putWhitelistedNames(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesWhitelistedNames) {
    this._whitelistedNames.internalValue = value;
  }
  public resetWhitelistedNames() {
    this._whitelistedNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedNamesInput() {
    return this._whitelistedNames.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeadersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeadersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeysToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeysToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues {
  /**
  * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. If you want to include cookies in the cache key, use CookiesConfig in a cache policy. See CachePolicy. If you want to send cookies to the origin but not include them in the cache key, use CookiesConfig in an origin request policy. See OriginRequestPolicy. A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see Caching Content Based on Cookies (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cookies DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cookies}
  */
  readonly cookies?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies;
  /**
  * Contains a list of HTTP header names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#headers DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#query_string DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#query_string}
  */
  readonly queryString?: boolean | cdktf.IResolvable;
  /**
  * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. If you want to include query strings in the cache key, use QueryStringsConfig in a cache policy. See CachePolicy. If you want to send query strings to the origin but not include them in the cache key, use QueryStringsConfig in an origin request policy. See OriginRequestPolicy. A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#query_string_cache_keys DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookies: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
    headers: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeadersToTerraform(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeysToTerraform(struct!.queryStringCacheKeys),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookies: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies",
    },
    headers: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders",
    },
    query_string: {
      value: cdktf.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_cache_keys: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeysToHclTerraform(struct!.queryStringCacheKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryStringCacheKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._queryString = undefined;
      this._queryStringCacheKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookies.internalValue = value.cookies;
      this._headers.internalValue = value.headers;
      this._queryString = value.queryString;
      this._queryStringCacheKeys.internalValue = value.queryStringCacheKeys;
    }
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: boolean | cdktf.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktf.IResolvable) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_cache_keys - computed: false, optional: true, required: false
  private _queryStringCacheKeys = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeysOutputReference(this, "query_string_cache_keys");
  public get queryStringCacheKeys() {
    return this._queryStringCacheKeys;
  }
  public putQueryStringCacheKeys(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesQueryStringCacheKeys) {
    this._queryStringCacheKeys.internalValue = value;
  }
  public resetQueryStringCacheKeys() {
    this._queryStringCacheKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCacheKeysInput() {
    return this._queryStringCacheKeys.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#event_type DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#function_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#function_arn}
  */
  readonly functionArn?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktf.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionArn = value.functionArn;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_arn - computed: false, optional: true, required: false
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  public resetFunctionArn() {
    this._functionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#event_type DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#include_body DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#lambda_function_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktf.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_function_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._includeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody?: boolean | cdktf.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktf.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_function_arn - computed: false, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroupsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroupsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable): any {
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
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
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

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSignersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSignersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners | cdktf.IResolvable): any {
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
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSignersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
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

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior {
  /**
  * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices: * CloudFront forwards only GET and HEAD requests. * CloudFront forwards only GET, HEAD, and OPTIONS requests. * CloudFront forwards GET, HEAD, OPTIONS, PUT, PATCH, POST, and DELETE requests. If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#allowed_methods DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#allowed_methods}
  */
  readonly allowedMethods?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cache_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#compress DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#default_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#field_level_encryption_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. If you want to include values in the cache key, use a cache policy. For more information, see Creating cache policies (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the Amazon CloudFront Developer Guide. If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see Creating origin request policies (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the Amazon CloudFront Developer Guide. A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#forwarded_values DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#forwarded_values}
  */
  readonly forwardedValues?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues;
  /**
  * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the LIVE stage to associate them with a cache behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#function_associations DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#function_associations}
  */
  readonly functionAssociations?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations;
  /**
  * A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior. If you want to invoke one or more Lambda@Edge functions triggered by requests that match the PathPattern of the cache behavior, specify the applicable values for Quantity and Items. Note that there can be up to 4 LambdaFunctionAssociation items in this list (one for each possible value of EventType) and each EventType can be associated with only one function. If you don't want to invoke any Lambda@Edge functions for the requests that match PathPattern, specify 0 for Quantity and omit Items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#lambda_function_associations DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#lambda_function_associations}
  */
  readonly lambdaFunctionAssociations?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#max_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#min_ttl DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_request_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#realtime_log_config_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#response_headers_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#smooth_streaming DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#target_origin_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#target_origin_id}
  */
  readonly targetOriginId?: string;
  /**
  * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#trusted_key_groups DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#trusted_key_groups}
  */
  readonly trustedKeyGroups?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups;
  /**
  * A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#trusted_signers DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#trusted_signers}
  */
  readonly trustedSigners?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#viewer_protocol_policy DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_methods: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsToTerraform(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    forwarded_values: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
    function_associations: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsToTerraform(struct!.functionAssociations),
    lambda_function_associations: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToTerraform(struct!.lambdaFunctionAssociations),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktf.stringToTerraform(struct!.responseHeadersPolicyId),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroupsToTerraform(struct!.trustedKeyGroups),
    trusted_signers: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSignersToTerraform(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_methods: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsToHclTerraform(struct!.allowedMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods",
    },
    cache_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_level_encryption_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarded_values: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesToHclTerraform(struct!.forwardedValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues",
    },
    function_associations: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsToHclTerraform(struct!.functionAssociations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations",
    },
    lambda_function_associations: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsToHclTerraform(struct!.lambdaFunctionAssociations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations",
    },
    max_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktf.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_request_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smooth_streaming: {
      value: cdktf.booleanToHclTerraform(struct!.smoothStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_origin_id: {
      value: cdktf.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_key_groups: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroupsToHclTerraform(struct!.trustedKeyGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups",
    },
    trusted_signers: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSignersToHclTerraform(struct!.trustedSigners),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners",
    },
    viewer_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods?.internalValue;
    }
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
    }
    if (this._forwardedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
    }
    if (this._functionAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociations = this._functionAssociations?.internalValue;
    }
    if (this._lambdaFunctionAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociations = this._lambdaFunctionAssociations?.internalValue;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._originRequestPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
    }
    if (this._realtimeLogConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
    }
    if (this._responseHeadersPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._trustedKeyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups?.internalValue;
    }
    if (this._trustedSigners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSigners = this._trustedSigners?.internalValue;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedMethods.internalValue = undefined;
      this._cachePolicyId = undefined;
      this._compress = undefined;
      this._defaultTtl = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._forwardedValues.internalValue = undefined;
      this._functionAssociations.internalValue = undefined;
      this._lambdaFunctionAssociations.internalValue = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._originRequestPolicyId = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._smoothStreaming = undefined;
      this._targetOriginId = undefined;
      this._trustedKeyGroups.internalValue = undefined;
      this._trustedSigners.internalValue = undefined;
      this._viewerProtocolPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedMethods.internalValue = value.allowedMethods;
      this._cachePolicyId = value.cachePolicyId;
      this._compress = value.compress;
      this._defaultTtl = value.defaultTtl;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._forwardedValues.internalValue = value.forwardedValues;
      this._functionAssociations.internalValue = value.functionAssociations;
      this._lambdaFunctionAssociations.internalValue = value.lambdaFunctionAssociations;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._smoothStreaming = value.smoothStreaming;
      this._targetOriginId = value.targetOriginId;
      this._trustedKeyGroups.internalValue = value.trustedKeyGroups;
      this._trustedSigners.internalValue = value.trustedSigners;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
    }
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethodsOutputReference(this, "allowed_methods");
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorAllowedMethods) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
  }

  // cache_policy_id - computed: false, optional: true, required: false
  private _cachePolicyId?: string; 
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }
  public set cachePolicyId(value: string) {
    this._cachePolicyId = value;
  }
  public resetCachePolicyId() {
    this._cachePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyIdInput() {
    return this._cachePolicyId;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // field_level_encryption_id - computed: false, optional: true, required: false
  private _fieldLevelEncryptionId?: string; 
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }
  public set fieldLevelEncryptionId(value: string) {
    this._fieldLevelEncryptionId = value;
  }
  public resetFieldLevelEncryptionId() {
    this._fieldLevelEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionIdInput() {
    return this._fieldLevelEncryptionId;
  }

  // forwarded_values - computed: false, optional: true, required: false
  private _forwardedValues = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValuesOutputReference(this, "forwarded_values");
  public get forwardedValues() {
    return this._forwardedValues;
  }
  public putForwardedValues(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorForwardedValues) {
    this._forwardedValues.internalValue = value;
  }
  public resetForwardedValues() {
    this._forwardedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedValuesInput() {
    return this._forwardedValues.internalValue;
  }

  // function_associations - computed: false, optional: true, required: false
  private _functionAssociations = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociationsOutputReference(this, "function_associations");
  public get functionAssociations() {
    return this._functionAssociations;
  }
  public putFunctionAssociations(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorFunctionAssociations) {
    this._functionAssociations.internalValue = value;
  }
  public resetFunctionAssociations() {
    this._functionAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationsInput() {
    return this._functionAssociations.internalValue;
  }

  // lambda_function_associations - computed: false, optional: true, required: false
  private _lambdaFunctionAssociations = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociationsOutputReference(this, "lambda_function_associations");
  public get lambdaFunctionAssociations() {
    return this._lambdaFunctionAssociations;
  }
  public putLambdaFunctionAssociations(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorLambdaFunctionAssociations) {
    this._lambdaFunctionAssociations.internalValue = value;
  }
  public resetLambdaFunctionAssociations() {
    this._lambdaFunctionAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationsInput() {
    return this._lambdaFunctionAssociations.internalValue;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // origin_request_policy_id - computed: false, optional: true, required: false
  private _originRequestPolicyId?: string; 
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }
  public set originRequestPolicyId(value: string) {
    this._originRequestPolicyId = value;
  }
  public resetOriginRequestPolicyId() {
    this._originRequestPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyIdInput() {
    return this._originRequestPolicyId;
  }

  // realtime_log_config_arn - computed: false, optional: true, required: false
  private _realtimeLogConfigArn?: string; 
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }
  public set realtimeLogConfigArn(value: string) {
    this._realtimeLogConfigArn = value;
  }
  public resetRealtimeLogConfigArn() {
    this._realtimeLogConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeLogConfigArnInput() {
    return this._realtimeLogConfigArn;
  }

  // response_headers_policy_id - computed: false, optional: true, required: false
  private _responseHeadersPolicyId?: string; 
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }
  public set responseHeadersPolicyId(value: string) {
    this._responseHeadersPolicyId = value;
  }
  public resetResponseHeadersPolicyId() {
    this._responseHeadersPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyIdInput() {
    return this._responseHeadersPolicyId;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktf.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktf.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }

  // target_origin_id - computed: false, optional: true, required: false
  private _targetOriginId?: string; 
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }
  public set targetOriginId(value: string) {
    this._targetOriginId = value;
  }
  public resetTargetOriginId() {
    this._targetOriginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOriginIdInput() {
    return this._targetOriginId;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroupsOutputReference(this, "trusted_key_groups");
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }
  public putTrustedKeyGroups(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedKeyGroups) {
    this._trustedKeyGroups.internalValue = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups.internalValue;
  }

  // trusted_signers - computed: false, optional: true, required: false
  private _trustedSigners = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSignersOutputReference(this, "trusted_signers");
  public get trustedSigners() {
    return this._trustedSigners;
  }
  public putTrustedSigners(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorTrustedSigners) {
    this._trustedSigners.internalValue = value;
  }
  public resetTrustedSigners() {
    this._trustedSigners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSignersInput() {
    return this._trustedSigners.internalValue;
  }

  // viewer_protocol_policy - computed: false, optional: true, required: false
  private _viewerProtocolPolicy?: string; 
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
  public set viewerProtocolPolicy(value: string) {
    this._viewerProtocolPolicy = value;
  }
  public resetViewerProtocolPolicy() {
    this._viewerProtocolPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerProtocolPolicyInput() {
    return this._viewerProtocolPolicy;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#bucket DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#include_cookies DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#include_cookies}
  */
  readonly includeCookies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#prefix DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLoggingToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_cookies: cdktf.booleanToTerraform(struct!.includeCookies),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLoggingToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_cookies: {
      value: cdktf.booleanToHclTerraform(struct!.includeCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCookies = this._includeCookies;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._enabled = undefined;
      this._includeCookies = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._includeCookies = value.includeCookies;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // include_cookies - computed: false, optional: true, required: false
  private _includeCookies?: boolean | cdktf.IResolvable; 
  public get includeCookies() {
    return this.getBooleanAttribute('include_cookies');
  }
  public set includeCookies(value: boolean | cdktf.IResolvable) {
    this._includeCookies = value;
  }
  public resetIncludeCookies() {
    this._includeCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCookiesInput() {
    return this._includeCookies;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes {
  /**
  * List of status codes for origin failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria {
  /**
  * A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#status_codes DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#status_codes}
  */
  readonly statusCodes?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToTerraform(struct!.statusCodes),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesToHclTerraform(struct!.statusCodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCodes.internalValue = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: true, required: false
  private _statusCodes = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodesOutputReference(this, "status_codes");
  public get statusCodes() {
    return this._statusCodes;
  }
  public putStatusCodes(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaStatusCodes) {
    this._statusCodes.internalValue = value;
  }
  public resetStatusCodes() {
    this._statusCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_id}
  */
  readonly originId?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_id: {
      value: cdktf.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originId = value.originId;
    }
  }

  // origin_id - computed: false, optional: true, required: false
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  public resetOriginId() {
    this._originId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers {
  /**
  * List of origins in an origin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems {
  /**
  * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#failover_criteria DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#failover_criteria}
  */
  readonly failoverCriteria?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A complex data type for the origins included in an origin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#members DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#members}
  */
  readonly members?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_criteria: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaToTerraform(struct!.failoverCriteria),
    id: cdktf.stringToTerraform(struct!.id),
    members: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersToTerraform(struct!.members),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_criteria: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaToHclTerraform(struct!.failoverCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersToHclTerraform(struct!.members),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverCriteria = this._failoverCriteria?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverCriteria.internalValue = undefined;
      this._id = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverCriteria.internalValue = value.failoverCriteria;
      this._id = value.id;
      this._members.internalValue = value.members;
    }
  }

  // failover_criteria - computed: false, optional: true, required: false
  private _failoverCriteria = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteriaOutputReference(this, "failover_criteria");
  public get failoverCriteria() {
    return this._failoverCriteria;
  }
  public putFailoverCriteria(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsFailoverCriteria) {
    this._failoverCriteria.internalValue = value;
  }
  public resetFailoverCriteria() {
    this._failoverCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCriteriaInput() {
    return this._failoverCriteria.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // members - computed: false, optional: true, required: false
  private _members = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembersOutputReference(this, "members");
  public get members() {
    return this._members;
  }
  public putMembers(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsMembers) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups {
  /**
  * List of origin groups for a distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#header_name DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#header_value DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#header_value}
  */
  readonly headerValue?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocolsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocolsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#http_port DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#http_s_port DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#http_s_port}
  */
  readonly httpSPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_keepalive_timeout DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_protocol_policy DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_protocol_policy}
  */
  readonly originProtocolPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_read_timeout DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_ssl_protocols DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_ssl_protocols}
  */
  readonly originSslProtocols?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    http_s_port: cdktf.numberToTerraform(struct!.httpSPort),
    origin_keepalive_timeout: cdktf.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_read_timeout: cdktf.numberToTerraform(struct!.originReadTimeout),
    origin_ssl_protocols: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocolsToTerraform(struct!.originSslProtocols),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_s_port: {
      value: cdktf.numberToHclTerraform(struct!.httpSPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_keepalive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.originProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_ssl_protocols: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocolsToHclTerraform(struct!.originSslProtocols),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpSPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSPort = this._httpSPort;
    }
    if (this._originKeepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
    }
    if (this._originProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
    }
    if (this._originReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originReadTimeout = this._originReadTimeout;
    }
    if (this._originSslProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originSslProtocols = this._originSslProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpPort = undefined;
      this._httpSPort = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originProtocolPolicy = undefined;
      this._originReadTimeout = undefined;
      this._originSslProtocols.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpPort = value.httpPort;
      this._httpSPort = value.httpSPort;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originProtocolPolicy = value.originProtocolPolicy;
      this._originReadTimeout = value.originReadTimeout;
      this._originSslProtocols.internalValue = value.originSslProtocols;
    }
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_s_port - computed: false, optional: true, required: false
  private _httpSPort?: number; 
  public get httpSPort() {
    return this.getNumberAttribute('http_s_port');
  }
  public set httpSPort(value: number) {
    this._httpSPort = value;
  }
  public resetHttpSPort() {
    this._httpSPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSPortInput() {
    return this._httpSPort;
  }

  // origin_keepalive_timeout - computed: false, optional: true, required: false
  private _originKeepaliveTimeout?: number; 
  public get originKeepaliveTimeout() {
    return this.getNumberAttribute('origin_keepalive_timeout');
  }
  public set originKeepaliveTimeout(value: number) {
    this._originKeepaliveTimeout = value;
  }
  public resetOriginKeepaliveTimeout() {
    this._originKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originKeepaliveTimeoutInput() {
    return this._originKeepaliveTimeout;
  }

  // origin_protocol_policy - computed: false, optional: true, required: false
  private _originProtocolPolicy?: string; 
  public get originProtocolPolicy() {
    return this.getStringAttribute('origin_protocol_policy');
  }
  public set originProtocolPolicy(value: string) {
    this._originProtocolPolicy = value;
  }
  public resetOriginProtocolPolicy() {
    this._originProtocolPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolPolicyInput() {
    return this._originProtocolPolicy;
  }

  // origin_read_timeout - computed: false, optional: true, required: false
  private _originReadTimeout?: number; 
  public get originReadTimeout() {
    return this.getNumberAttribute('origin_read_timeout');
  }
  public set originReadTimeout(value: number) {
    this._originReadTimeout = value;
  }
  public resetOriginReadTimeout() {
    this._originReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originReadTimeoutInput() {
    return this._originReadTimeout;
  }

  // origin_ssl_protocols - computed: false, optional: true, required: false
  private _originSslProtocols = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocolsOutputReference(this, "origin_ssl_protocols");
  public get originSslProtocols() {
    return this._originSslProtocols;
  }
  public putOriginSslProtocols(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOriginSslProtocols) {
    this._originSslProtocols.internalValue = value;
  }
  public resetOriginSslProtocols() {
    this._originSslProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSslProtocolsInput() {
    return this._originSslProtocols.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_shield_region DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_shield_region}
  */
  readonly originShieldRegion?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShieldToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktf.stringToTerraform(struct!.originShieldRegion),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShieldToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield | cdktf.IResolvable): any {
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
    origin_shield_region: {
      value: cdktf.stringToHclTerraform(struct!.originShieldRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._originShieldRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.originShieldRegion = this._originShieldRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._originShieldRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._originShieldRegion = value.originShieldRegion;
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

  // origin_shield_region - computed: false, optional: true, required: false
  private _originShieldRegion?: string; 
  public get originShieldRegion() {
    return this.getStringAttribute('origin_shield_region');
  }
  public set originShieldRegion(value: string) {
    this._originShieldRegion = value;
  }
  public resetOriginShieldRegion() {
    this._originShieldRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldRegionInput() {
    return this._originShieldRegion;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_access_identity DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_access_identity}
  */
  readonly originAccessIdentity?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_access_identity: {
      value: cdktf.stringToHclTerraform(struct!.originAccessIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originAccessIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessIdentity = this._originAccessIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originAccessIdentity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originAccessIdentity = value.originAccessIdentity;
    }
  }

  // origin_access_identity - computed: false, optional: true, required: false
  private _originAccessIdentity?: string; 
  public get originAccessIdentity() {
    return this.getStringAttribute('origin_access_identity');
  }
  public set originAccessIdentity(value: string) {
    this._originAccessIdentity = value;
  }
  public resetOriginAccessIdentity() {
    this._originAccessIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessIdentityInput() {
    return this._originAccessIdentity;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#connection_attempts DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#connection_timeout DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * A complex type that contains the list of Custom Headers for each origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#custom_headers DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#custom_headers}
  */
  readonly customHeaders?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders;
  /**
  * A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is configured with static website hosting (https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) is a custom origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#custom_origin_config DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#custom_origin_config}
  */
  readonly customOriginConfig?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#domain_name DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_access_control_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_access_control_id}
  */
  readonly originAccessControlId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_path DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_path}
  */
  readonly originPath?: string;
  /**
  * CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin. For more information, see Using Origin Shield (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_shield DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_shield}
  */
  readonly originShield?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield;
  /**
  * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the CustomOriginConfig element instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#s3_origin_config DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#s3_origin_config}
  */
  readonly s3OriginConfig?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_attempts: cdktf.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    custom_headers: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersToTerraform(struct!.customHeaders),
    custom_origin_config: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigToTerraform(struct!.customOriginConfig),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    id: cdktf.stringToTerraform(struct!.id),
    origin_access_control_id: cdktf.stringToTerraform(struct!.originAccessControlId),
    origin_path: cdktf.stringToTerraform(struct!.originPath),
    origin_shield: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShieldToTerraform(struct!.originShield),
    s3_origin_config: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfigToTerraform(struct!.s3OriginConfig),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_attempts: {
      value: cdktf.numberToHclTerraform(struct!.connectionAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_headers: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersToHclTerraform(struct!.customHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders",
    },
    custom_origin_config: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigToHclTerraform(struct!.customOriginConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_access_control_id: {
      value: cdktf.stringToHclTerraform(struct!.originAccessControlId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_path: {
      value: cdktf.stringToHclTerraform(struct!.originPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_shield: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShieldToHclTerraform(struct!.originShield),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield",
    },
    s3_origin_config: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfigToHclTerraform(struct!.s3OriginConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAttempts = this._connectionAttempts;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._customHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders?.internalValue;
    }
    if (this._customOriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOriginConfig = this._customOriginConfig?.internalValue;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._originAccessControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessControlId = this._originAccessControlId;
    }
    if (this._originPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPath = this._originPath;
    }
    if (this._originShield?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originShield = this._originShield?.internalValue;
    }
    if (this._s3OriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OriginConfig = this._s3OriginConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionAttempts = undefined;
      this._connectionTimeout = undefined;
      this._customHeaders.internalValue = undefined;
      this._customOriginConfig.internalValue = undefined;
      this._domainName = undefined;
      this._id = undefined;
      this._originAccessControlId = undefined;
      this._originPath = undefined;
      this._originShield.internalValue = undefined;
      this._s3OriginConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionAttempts = value.connectionAttempts;
      this._connectionTimeout = value.connectionTimeout;
      this._customHeaders.internalValue = value.customHeaders;
      this._customOriginConfig.internalValue = value.customOriginConfig;
      this._domainName = value.domainName;
      this._id = value.id;
      this._originAccessControlId = value.originAccessControlId;
      this._originPath = value.originPath;
      this._originShield.internalValue = value.originShield;
      this._s3OriginConfig.internalValue = value.s3OriginConfig;
    }
  }

  // connection_attempts - computed: false, optional: true, required: false
  private _connectionAttempts?: number; 
  public get connectionAttempts() {
    return this.getNumberAttribute('connection_attempts');
  }
  public set connectionAttempts(value: number) {
    this._connectionAttempts = value;
  }
  public resetConnectionAttempts() {
    this._connectionAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAttemptsInput() {
    return this._connectionAttempts;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeadersOutputReference(this, "custom_headers");
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomHeaders) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }

  // custom_origin_config - computed: false, optional: true, required: false
  private _customOriginConfig = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfigOutputReference(this, "custom_origin_config");
  public get customOriginConfig() {
    return this._customOriginConfig;
  }
  public putCustomOriginConfig(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsCustomOriginConfig) {
    this._customOriginConfig.internalValue = value;
  }
  public resetCustomOriginConfig() {
    this._customOriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginConfigInput() {
    return this._customOriginConfig.internalValue;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // origin_access_control_id - computed: false, optional: true, required: false
  private _originAccessControlId?: string; 
  public get originAccessControlId() {
    return this.getStringAttribute('origin_access_control_id');
  }
  public set originAccessControlId(value: string) {
    this._originAccessControlId = value;
  }
  public resetOriginAccessControlId() {
    this._originAccessControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessControlIdInput() {
    return this._originAccessControlId;
  }

  // origin_path - computed: false, optional: true, required: false
  private _originPath?: string; 
  public get originPath() {
    return this.getStringAttribute('origin_path');
  }
  public set originPath(value: string) {
    this._originPath = value;
  }
  public resetOriginPath() {
    this._originPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPathInput() {
    return this._originPath;
  }

  // origin_shield - computed: false, optional: true, required: false
  private _originShield = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShieldOutputReference(this, "origin_shield");
  public get originShield() {
    return this._originShield;
  }
  public putOriginShield(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOriginShield) {
    this._originShield.internalValue = value;
  }
  public resetOriginShield() {
    this._originShield.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldInput() {
    return this._originShield.internalValue;
  }

  // s3_origin_config - computed: false, optional: true, required: false
  private _s3OriginConfig = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfigOutputReference(this, "s3_origin_config");
  public get s3OriginConfig() {
    return this._s3OriginConfig;
  }
  public putS3OriginConfig(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsS3OriginConfig) {
    this._s3OriginConfig.internalValue = value;
  }
  public resetS3OriginConfig() {
    this._s3OriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OriginConfigInput() {
    return this._s3OriginConfig.internalValue;
  }
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#items}
  */
  readonly items?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#restriction_type DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#restriction_type}
  */
  readonly restrictionType?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestrictionToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
    restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestrictionToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    restriction_type: {
      value: cdktf.stringToHclTerraform(struct!.restrictionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
      this._restrictionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
      this._restrictionType = value.restrictionType;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // restriction_type - computed: false, optional: true, required: false
  private _restrictionType?: string; 
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
  public set restrictionType(value: string) {
    this._restrictionType = value;
  }
  public resetRestrictionType() {
    this._restrictionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionTypeInput() {
    return this._restrictionType;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions {
  /**
  * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using MaxMind GeoIP databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#geo_restriction DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#geo_restriction}
  */
  readonly geoRestriction?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_restriction: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestrictionToTerraform(struct!.geoRestriction),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_restriction: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestrictionToHclTerraform(struct!.geoRestriction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoRestriction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoRestriction.internalValue = value.geoRestriction;
    }
  }

  // geo_restriction - computed: false, optional: true, required: false
  private _geoRestriction = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestrictionOutputReference(this, "geo_restriction");
  public get geoRestriction() {
    return this._geoRestriction;
  }
  public putGeoRestriction(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsGeoRestriction) {
    this._geoRestriction.internalValue = value;
  }
  public resetGeoRestriction() {
    this._geoRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionInput() {
    return this._geoRestriction.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#name DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#namespace DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFromToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFromToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#from DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFromToTerraform(struct!.from),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#acm_certificate_arn DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Reference field for ACMCertificateARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#acm_certificate_ref DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#acm_certificate_ref}
  */
  readonly acmCertificateRef?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#certificate DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#certificate_source DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#certificate_source}
  */
  readonly certificateSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cloud_front_default_certificate DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cloud_front_default_certificate}
  */
  readonly cloudFrontDefaultCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#iam_certificate_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#iam_certificate_id}
  */
  readonly iamCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#minimum_protocol_version DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#ssl_support_method DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#ssl_support_method}
  */
  readonly sslSupportMethod?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm_certificate_arn: cdktf.stringToTerraform(struct!.acmCertificateArn),
    acm_certificate_ref: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefToTerraform(struct!.acmCertificateRef),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_source: cdktf.stringToTerraform(struct!.certificateSource),
    cloud_front_default_certificate: cdktf.booleanToTerraform(struct!.cloudFrontDefaultCertificate),
    iam_certificate_id: cdktf.stringToTerraform(struct!.iamCertificateId),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktf.stringToTerraform(struct!.sslSupportMethod),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm_certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.acmCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acm_certificate_ref: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefToHclTerraform(struct!.acmCertificateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_source: {
      value: cdktf.stringToHclTerraform(struct!.certificateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_front_default_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.cloudFrontDefaultCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.iamCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_support_method: {
      value: cdktf.stringToHclTerraform(struct!.sslSupportMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmCertificateArn = this._acmCertificateArn;
    }
    if (this._acmCertificateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmCertificateRef = this._acmCertificateRef?.internalValue;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSource = this._certificateSource;
    }
    if (this._cloudFrontDefaultCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFrontDefaultCertificate = this._cloudFrontDefaultCertificate;
    }
    if (this._iamCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamCertificateId = this._iamCertificateId;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._sslSupportMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSupportMethod = this._sslSupportMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmCertificateArn = undefined;
      this._acmCertificateRef.internalValue = undefined;
      this._certificate = undefined;
      this._certificateSource = undefined;
      this._cloudFrontDefaultCertificate = undefined;
      this._iamCertificateId = undefined;
      this._minimumProtocolVersion = undefined;
      this._sslSupportMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmCertificateArn = value.acmCertificateArn;
      this._acmCertificateRef.internalValue = value.acmCertificateRef;
      this._certificate = value.certificate;
      this._certificateSource = value.certificateSource;
      this._cloudFrontDefaultCertificate = value.cloudFrontDefaultCertificate;
      this._iamCertificateId = value.iamCertificateId;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._sslSupportMethod = value.sslSupportMethod;
    }
  }

  // acm_certificate_arn - computed: false, optional: true, required: false
  private _acmCertificateArn?: string; 
  public get acmCertificateArn() {
    return this.getStringAttribute('acm_certificate_arn');
  }
  public set acmCertificateArn(value: string) {
    this._acmCertificateArn = value;
  }
  public resetAcmCertificateArn() {
    this._acmCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmCertificateArnInput() {
    return this._acmCertificateArn;
  }

  // acm_certificate_ref - computed: false, optional: true, required: false
  private _acmCertificateRef = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRefOutputReference(this, "acm_certificate_ref");
  public get acmCertificateRef() {
    return this._acmCertificateRef;
  }
  public putAcmCertificateRef(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateAcmCertificateRef) {
    this._acmCertificateRef.internalValue = value;
  }
  public resetAcmCertificateRef() {
    this._acmCertificateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmCertificateRefInput() {
    return this._acmCertificateRef.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_source - computed: false, optional: true, required: false
  private _certificateSource?: string; 
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }
  public set certificateSource(value: string) {
    this._certificateSource = value;
  }
  public resetCertificateSource() {
    this._certificateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSourceInput() {
    return this._certificateSource;
  }

  // cloud_front_default_certificate - computed: false, optional: true, required: false
  private _cloudFrontDefaultCertificate?: boolean | cdktf.IResolvable; 
  public get cloudFrontDefaultCertificate() {
    return this.getBooleanAttribute('cloud_front_default_certificate');
  }
  public set cloudFrontDefaultCertificate(value: boolean | cdktf.IResolvable) {
    this._cloudFrontDefaultCertificate = value;
  }
  public resetCloudFrontDefaultCertificate() {
    this._cloudFrontDefaultCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFrontDefaultCertificateInput() {
    return this._cloudFrontDefaultCertificate;
  }

  // iam_certificate_id - computed: false, optional: true, required: false
  private _iamCertificateId?: string; 
  public get iamCertificateId() {
    return this.getStringAttribute('iam_certificate_id');
  }
  public set iamCertificateId(value: string) {
    this._iamCertificateId = value;
  }
  public resetIamCertificateId() {
    this._iamCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCertificateIdInput() {
    return this._iamCertificateId;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }

  // ssl_support_method - computed: false, optional: true, required: false
  private _sslSupportMethod?: string; 
  public get sslSupportMethod() {
    return this.getStringAttribute('ssl_support_method');
  }
  public set sslSupportMethod(value: string) {
    this._sslSupportMethod = value;
  }
  public resetSslSupportMethod() {
    this._sslSupportMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSupportMethodInput() {
    return this._sslSupportMethod;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig {
  /**
  * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#aliases DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#aliases}
  */
  readonly aliases?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases;
  /**
  * A complex type that contains zero or more CacheBehavior elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#cache_behaviors DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#cache_behaviors}
  */
  readonly cacheBehaviors?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#comment DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#continuous_deployment_policy_id DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#continuous_deployment_policy_id}
  */
  readonly continuousDeploymentPolicyId?: string;
  /**
  * A complex type that controls: * Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. * How long CloudFront caches HTTP status codes in the 4xx and 5xx range. For more information about custom error pages, see Customizing Error Responses (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#custom_error_responses DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#custom_error_responses}
  */
  readonly customErrorResponses?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses;
  /**
  * A complex type that describes the default cache behavior if you don't specify a CacheBehavior element or if request URLs don't match any of the values of PathPattern in CacheBehavior elements. You must create exactly one default cache behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#default_cache_behavior DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#default_cache_behavior}
  */
  readonly defaultCacheBehavior?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#default_root_object DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#http_version DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#is_ipv6_enabled DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#is_ipv6_enabled}
  */
  readonly isIpv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * A complex type that controls whether access logs are written for the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#logging DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging;
  /**
  * A complex data type for the origin groups specified for a distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origin_groups DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origin_groups}
  */
  readonly originGroups?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups;
  /**
  * Contains information about the origins for this distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#origins DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#origins}
  */
  readonly origins?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#price_class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#price_class}
  */
  readonly priceClass?: string;
  /**
  * A complex type that identifies ways in which you want to restrict distribution of your content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#restrictions DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#restrictions}
  */
  readonly restrictions?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#staging DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#staging}
  */
  readonly staging?: boolean | cdktf.IResolvable;
  /**
  * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers. If the distribution doesn't use Aliases (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as d111111abcdef8.cloudfront.net—set CloudFrontDefaultCertificate to true and leave all other fields empty. If the distribution uses Aliases (alternate domain names or CNAMEs), use the fields in this type to specify the following settings: * Which viewers the distribution accepts HTTPS connections from: only viewers that support server name indication (SNI) (https://en.wikipedia.org/wiki/Server_Name_Indication) (recommended), or all viewers including those that don't support SNI. To accept HTTPS connections from only viewers that support SNI, set SSLSupportMethod to sni-only. This is recommended. Most browsers and clients support SNI. To accept HTTPS connections from all viewers, including those that don't support SNI, set SSLSupportMethod to vip. This is not recommended, and results in additional monthly charges from CloudFront. * The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for MinimumProtocolVersion. For more information, see Security Policy (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) in the Amazon CloudFront Developer Guide. * The location of the SSL/TLS certificate, Certificate Manager (ACM) (https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) (recommended) or Identity and Access Management (IAM) (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html). You specify the location by setting a value in one of the following fields (not both): ACMCertificateArn IAMCertificateId All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use ViewerProtocolPolicy in the CacheBehavior or DefaultCacheBehavior. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use CustomOriginConfig. For more information, see Using HTTPS with CloudFront (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html) and Using Alternate Domain Names and HTTPS (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#viewer_certificate DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#viewer_certificate}
  */
  readonly viewerCertificate?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#web_aclid DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#web_aclid}
  */
  readonly webAclid?: string;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliasesToTerraform(struct!.aliases),
    cache_behaviors: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsToTerraform(struct!.cacheBehaviors),
    comment: cdktf.stringToTerraform(struct!.comment),
    continuous_deployment_policy_id: cdktf.stringToTerraform(struct!.continuousDeploymentPolicyId),
    custom_error_responses: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesToTerraform(struct!.customErrorResponses),
    default_cache_behavior: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorToTerraform(struct!.defaultCacheBehavior),
    default_root_object: cdktf.stringToTerraform(struct!.defaultRootObject),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    is_ipv6_enabled: cdktf.booleanToTerraform(struct!.isIpv6Enabled),
    logging: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLoggingToTerraform(struct!.logging),
    origin_groups: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsToTerraform(struct!.originGroups),
    origins: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsToTerraform(struct!.origins),
    price_class: cdktf.stringToTerraform(struct!.priceClass),
    restrictions: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsToTerraform(struct!.restrictions),
    staging: cdktf.booleanToTerraform(struct!.staging),
    viewer_certificate: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateToTerraform(struct!.viewerCertificate),
    web_aclid: cdktf.stringToTerraform(struct!.webAclid),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliasesToHclTerraform(struct!.aliases),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases",
    },
    cache_behaviors: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsToHclTerraform(struct!.cacheBehaviors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continuous_deployment_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.continuousDeploymentPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_error_responses: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesToHclTerraform(struct!.customErrorResponses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses",
    },
    default_cache_behavior: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorToHclTerraform(struct!.defaultCacheBehavior),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior",
    },
    default_root_object: {
      value: cdktf.stringToHclTerraform(struct!.defaultRootObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_version: {
      value: cdktf.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ipv6_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isIpv6Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging",
    },
    origin_groups: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsToHclTerraform(struct!.originGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups",
    },
    origins: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsToHclTerraform(struct!.origins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins",
    },
    price_class: {
      value: cdktf.stringToHclTerraform(struct!.priceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrictions: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsToHclTerraform(struct!.restrictions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions",
    },
    staging: {
      value: cdktf.booleanToHclTerraform(struct!.staging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    viewer_certificate: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateToHclTerraform(struct!.viewerCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate",
    },
    web_aclid: {
      value: cdktf.stringToHclTerraform(struct!.webAclid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    if (this._cacheBehaviors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBehaviors = this._cacheBehaviors?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._continuousDeploymentPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousDeploymentPolicyId = this._continuousDeploymentPolicyId;
    }
    if (this._customErrorResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorResponses = this._customErrorResponses?.internalValue;
    }
    if (this._defaultCacheBehavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheBehavior = this._defaultCacheBehavior?.internalValue;
    }
    if (this._defaultRootObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRootObject = this._defaultRootObject;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._isIpv6Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIpv6Enabled = this._isIpv6Enabled;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._originGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originGroups = this._originGroups?.internalValue;
    }
    if (this._origins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins?.internalValue;
    }
    if (this._priceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceClass = this._priceClass;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    if (this._staging !== undefined) {
      hasAnyValues = true;
      internalValueResult.staging = this._staging;
    }
    if (this._viewerCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerCertificate = this._viewerCertificate?.internalValue;
    }
    if (this._webAclid !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAclid = this._webAclid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliases.internalValue = undefined;
      this._cacheBehaviors.internalValue = undefined;
      this._comment = undefined;
      this._continuousDeploymentPolicyId = undefined;
      this._customErrorResponses.internalValue = undefined;
      this._defaultCacheBehavior.internalValue = undefined;
      this._defaultRootObject = undefined;
      this._enabled = undefined;
      this._httpVersion = undefined;
      this._isIpv6Enabled = undefined;
      this._logging.internalValue = undefined;
      this._originGroups.internalValue = undefined;
      this._origins.internalValue = undefined;
      this._priceClass = undefined;
      this._restrictions.internalValue = undefined;
      this._staging = undefined;
      this._viewerCertificate.internalValue = undefined;
      this._webAclid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliases.internalValue = value.aliases;
      this._cacheBehaviors.internalValue = value.cacheBehaviors;
      this._comment = value.comment;
      this._continuousDeploymentPolicyId = value.continuousDeploymentPolicyId;
      this._customErrorResponses.internalValue = value.customErrorResponses;
      this._defaultCacheBehavior.internalValue = value.defaultCacheBehavior;
      this._defaultRootObject = value.defaultRootObject;
      this._enabled = value.enabled;
      this._httpVersion = value.httpVersion;
      this._isIpv6Enabled = value.isIpv6Enabled;
      this._logging.internalValue = value.logging;
      this._originGroups.internalValue = value.originGroups;
      this._origins.internalValue = value.origins;
      this._priceClass = value.priceClass;
      this._restrictions.internalValue = value.restrictions;
      this._staging = value.staging;
      this._viewerCertificate.internalValue = value.viewerCertificate;
      this._webAclid = value.webAclid;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliasesOutputReference(this, "aliases");
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigAliases) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }

  // cache_behaviors - computed: false, optional: true, required: false
  private _cacheBehaviors = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviorsOutputReference(this, "cache_behaviors");
  public get cacheBehaviors() {
    return this._cacheBehaviors;
  }
  public putCacheBehaviors(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCacheBehaviors) {
    this._cacheBehaviors.internalValue = value;
  }
  public resetCacheBehaviors() {
    this._cacheBehaviors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorsInput() {
    return this._cacheBehaviors.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // continuous_deployment_policy_id - computed: false, optional: true, required: false
  private _continuousDeploymentPolicyId?: string; 
  public get continuousDeploymentPolicyId() {
    return this.getStringAttribute('continuous_deployment_policy_id');
  }
  public set continuousDeploymentPolicyId(value: string) {
    this._continuousDeploymentPolicyId = value;
  }
  public resetContinuousDeploymentPolicyId() {
    this._continuousDeploymentPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousDeploymentPolicyIdInput() {
    return this._continuousDeploymentPolicyId;
  }

  // custom_error_responses - computed: false, optional: true, required: false
  private _customErrorResponses = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponsesOutputReference(this, "custom_error_responses");
  public get customErrorResponses() {
    return this._customErrorResponses;
  }
  public putCustomErrorResponses(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigCustomErrorResponses) {
    this._customErrorResponses.internalValue = value;
  }
  public resetCustomErrorResponses() {
    this._customErrorResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponsesInput() {
    return this._customErrorResponses.internalValue;
  }

  // default_cache_behavior - computed: false, optional: true, required: false
  private _defaultCacheBehavior = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehaviorOutputReference(this, "default_cache_behavior");
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public putDefaultCacheBehavior(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigDefaultCacheBehavior) {
    this._defaultCacheBehavior.internalValue = value;
  }
  public resetDefaultCacheBehavior() {
    this._defaultCacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior.internalValue;
  }

  // default_root_object - computed: false, optional: true, required: false
  private _defaultRootObject?: string; 
  public get defaultRootObject() {
    return this.getStringAttribute('default_root_object');
  }
  public set defaultRootObject(value: string) {
    this._defaultRootObject = value;
  }
  public resetDefaultRootObject() {
    this._defaultRootObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootObjectInput() {
    return this._defaultRootObject;
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

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // is_ipv6_enabled - computed: false, optional: true, required: false
  private _isIpv6Enabled?: boolean | cdktf.IResolvable; 
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6_enabled');
  }
  public set isIpv6Enabled(value: boolean | cdktf.IResolvable) {
    this._isIpv6Enabled = value;
  }
  public resetIsIpv6Enabled() {
    this._isIpv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6EnabledInput() {
    return this._isIpv6Enabled;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // origin_groups - computed: false, optional: true, required: false
  private _originGroups = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroupsOutputReference(this, "origin_groups");
  public get originGroups() {
    return this._originGroups;
  }
  public putOriginGroups(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginGroups) {
    this._originGroups.internalValue = value;
  }
  public resetOriginGroups() {
    this._originGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupsInput() {
    return this._originGroups.internalValue;
  }

  // origins - computed: false, optional: true, required: false
  private _origins = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOriginsOutputReference(this, "origins");
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOrigins) {
    this._origins.internalValue = value;
  }
  public resetOrigins() {
    this._origins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }

  // price_class - computed: false, optional: true, required: false
  private _priceClass?: string; 
  public get priceClass() {
    return this.getStringAttribute('price_class');
  }
  public set priceClass(value: string) {
    this._priceClass = value;
  }
  public resetPriceClass() {
    this._priceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceClassInput() {
    return this._priceClass;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // staging - computed: false, optional: true, required: false
  private _staging?: boolean | cdktf.IResolvable; 
  public get staging() {
    return this.getBooleanAttribute('staging');
  }
  public set staging(value: boolean | cdktf.IResolvable) {
    this._staging = value;
  }
  public resetStaging() {
    this._staging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingInput() {
    return this._staging;
  }

  // viewer_certificate - computed: false, optional: true, required: false
  private _viewerCertificate = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificateOutputReference(this, "viewer_certificate");
  public get viewerCertificate() {
    return this._viewerCertificate;
  }
  public putViewerCertificate(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigViewerCertificate) {
    this._viewerCertificate.internalValue = value;
  }
  public resetViewerCertificate() {
    this._viewerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerCertificateInput() {
    return this._viewerCertificate.internalValue;
  }

  // web_aclid - computed: false, optional: true, required: false
  private _webAclid?: string; 
  public get webAclid() {
    return this.getStringAttribute('web_aclid');
  }
  public set webAclid(value: string) {
    this._webAclid = value;
  }
  public resetWebAclid() {
    this._webAclid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclidInput() {
    return this._webAclid;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec {
  /**
  * The distribution's configuration information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#distribution_config DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest#distribution_config}
  */
  readonly distributionConfig: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig;
}

export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_config: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigToTerraform(struct!.distributionConfig),
  }
}


export function dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution_config: {
      value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigToHclTerraform(struct!.distributionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionConfig = this._distributionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributionConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributionConfig.internalValue = value.distributionConfig;
    }
  }

  // distribution_config - computed: false, optional: false, required: true
  private _distributionConfig = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfigOutputReference(this, "distribution_config");
  public get distributionConfig() {
    return this._distributionConfig;
  }
  public putDistributionConfig(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecDistributionConfig) {
    this._distributionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigInput() {
    return this._distributionConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest k8s_cloudfront_services_k8s_aws_distribution_v1alpha1_manifest}
*/
export class DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudfront_services_k8s_aws_distribution_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudfront_services_k8s_aws_distribution_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cloudfront_services_k8s_aws_distribution_v1alpha1_manifest k8s_cloudfront_services_k8s_aws_distribution_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudfront_services_k8s_aws_distribution_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudfrontServicesK8SAwsDistributionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
