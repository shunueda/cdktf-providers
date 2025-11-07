// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#metadata DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata;
  /**
  * CachePolicySpec defines the desired state of CachePolicy. A cache policy. When it's attached to a cache behavior, the cache policy determines the following: * The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer. * The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache. The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but not include them in the cache key, use OriginRequestPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#spec DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec;
}
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#annotations DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#labels DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#name DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#namespace DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#cookie_behavior DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#cookie_behavior}
  */
  readonly cookieBehavior?: string;
  /**
  * Contains a list of cookie names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#cookies DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#cookies}
  */
  readonly cookies?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct!.cookies),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_behavior: {
      value: cdktf.stringToHclTerraform(struct!.cookieBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookies: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieBehavior = this._cookieBehavior;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieBehavior = undefined;
      this._cookies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieBehavior = value.cookieBehavior;
      this._cookies.internalValue = value.cookies;
    }
  }

  // cookie_behavior - computed: false, optional: true, required: false
  private _cookieBehavior?: string; 
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }
  public set cookieBehavior(value: string) {
    this._cookieBehavior = value;
  }
  public resetCookieBehavior() {
    this._cookieBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieBehaviorInput() {
    return this._cookieBehavior;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#header_behavior DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * Contains a list of HTTP header names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#headers DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct!.headers),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_behavior: {
      value: cdktf.stringToHclTerraform(struct!.headerBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBehavior = this._headerBehavior;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerBehavior = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerBehavior = value.headerBehavior;
      this._headers.internalValue = value.headers;
    }
  }

  // header_behavior - computed: false, optional: true, required: false
  private _headerBehavior?: string; 
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }
  public set headerBehavior(value: string) {
    this._headerBehavior = value;
  }
  public resetHeaderBehavior() {
    this._headerBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBehaviorInput() {
    return this._headerBehavior;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#query_string_behavior DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#query_string_behavior}
  */
  readonly queryStringBehavior?: string;
  /**
  * Contains a list of query string names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#query_strings DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#query_strings}
  */
  readonly queryStrings?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_string_behavior: {
      value: cdktf.stringToHclTerraform(struct!.queryStringBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_strings: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform(struct!.queryStrings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStringBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBehavior = this._queryStringBehavior;
    }
    if (this._queryStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStrings = this._queryStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryStringBehavior = undefined;
      this._queryStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryStringBehavior = value.queryStringBehavior;
      this._queryStrings.internalValue = value.queryStrings;
    }
  }

  // query_string_behavior - computed: false, optional: true, required: false
  private _queryStringBehavior?: string; 
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }
  public set queryStringBehavior(value: string) {
    this._queryStringBehavior = value;
  }
  public resetQueryStringBehavior() {
    this._queryStringBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBehaviorInput() {
    return this._queryStringBehavior;
  }

  // query_strings - computed: false, optional: true, required: false
  private _queryStrings = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this, "query_strings");
  public get queryStrings() {
    return this._queryStrings;
  }
  public putQueryStrings(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings) {
    this._queryStrings.internalValue = value;
  }
  public resetQueryStrings() {
    this._queryStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsInput() {
    return this._queryStrings.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin {
  /**
  * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#cookies_config DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#cookies_config}
  */
  readonly cookiesConfig?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#enable_accept_encoding_brotli DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#enable_accept_encoding_brotli}
  */
  readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#enable_accept_encoding_gzip DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#enable_accept_encoding_gzip}
  */
  readonly enableAcceptEncodingGzip?: boolean | cdktf.IResolvable;
  /**
  * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#headers_config DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#headers_config}
  */
  readonly headersConfig?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig;
  /**
  * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#query_strings_config DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#query_strings_config}
  */
  readonly queryStringsConfig?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookies_config: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct!.cookiesConfig),
    enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    headers_config: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct!.headersConfig),
    query_strings_config: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookies_config: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform(struct!.cookiesConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig",
    },
    enable_accept_encoding_brotli: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceptEncodingBrotli),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_accept_encoding_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceptEncodingGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers_config: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform(struct!.headersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig",
    },
    query_strings_config: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform(struct!.queryStringsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
    }
    if (this._enableAcceptEncodingBrotli !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
    }
    if (this._enableAcceptEncodingGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
    }
    if (this._headersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersConfig = this._headersConfig?.internalValue;
    }
    if (this._queryStringsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookiesConfig.internalValue = undefined;
      this._enableAcceptEncodingBrotli = undefined;
      this._enableAcceptEncodingGzip = undefined;
      this._headersConfig.internalValue = undefined;
      this._queryStringsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookiesConfig.internalValue = value.cookiesConfig;
      this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
      this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
      this._headersConfig.internalValue = value.headersConfig;
      this._queryStringsConfig.internalValue = value.queryStringsConfig;
    }
  }

  // cookies_config - computed: false, optional: true, required: false
  private _cookiesConfig = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }
  public putCookiesConfig(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig) {
    this._cookiesConfig.internalValue = value;
  }
  public resetCookiesConfig() {
    this._cookiesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig.internalValue;
  }

  // enable_accept_encoding_brotli - computed: false, optional: true, required: false
  private _enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable; 
  public get enableAcceptEncodingBrotli() {
    return this.getBooleanAttribute('enable_accept_encoding_brotli');
  }
  public set enableAcceptEncodingBrotli(value: boolean | cdktf.IResolvable) {
    this._enableAcceptEncodingBrotli = value;
  }
  public resetEnableAcceptEncodingBrotli() {
    this._enableAcceptEncodingBrotli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingBrotliInput() {
    return this._enableAcceptEncodingBrotli;
  }

  // enable_accept_encoding_gzip - computed: false, optional: true, required: false
  private _enableAcceptEncodingGzip?: boolean | cdktf.IResolvable; 
  public get enableAcceptEncodingGzip() {
    return this.getBooleanAttribute('enable_accept_encoding_gzip');
  }
  public set enableAcceptEncodingGzip(value: boolean | cdktf.IResolvable) {
    this._enableAcceptEncodingGzip = value;
  }
  public resetEnableAcceptEncodingGzip() {
    this._enableAcceptEncodingGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingGzipInput() {
    return this._enableAcceptEncodingGzip;
  }

  // headers_config - computed: false, optional: true, required: false
  private _headersConfig = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }
  public putHeadersConfig(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig) {
    this._headersConfig.internalValue = value;
  }
  public resetHeadersConfig() {
    this._headersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig.internalValue;
  }

  // query_strings_config - computed: false, optional: true, required: false
  private _queryStringsConfig = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
  public putQueryStringsConfig(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig) {
    this._queryStringsConfig.internalValue = value;
  }
  public resetQueryStringsConfig() {
    this._queryStringsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#comment DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#default_ttl DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#max_ttl DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#min_ttl DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#name DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer. The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but not include them in the cache key, use OriginRequestPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#parameters_in_cache_key_and_forwarded_to_origin DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#parameters_in_cache_key_and_forwarded_to_origin}
  */
  readonly parametersInCacheKeyAndForwardedToOrigin?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    name: cdktf.stringToTerraform(struct!.name),
    parameters_in_cache_key_and_forwarded_to_origin: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct!.parametersInCacheKeyAndForwardedToOrigin),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters_in_cache_key_and_forwarded_to_origin: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToHclTerraform(struct!.parametersInCacheKeyAndForwardedToOrigin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parametersInCacheKeyAndForwardedToOrigin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersInCacheKeyAndForwardedToOrigin = this._parametersInCacheKeyAndForwardedToOrigin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._defaultTtl = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._name = undefined;
      this._parametersInCacheKeyAndForwardedToOrigin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._defaultTtl = value.defaultTtl;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._name = value.name;
      this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value.parametersInCacheKeyAndForwardedToOrigin;
    }
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

  // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: true, required: false
  private _parametersInCacheKeyAndForwardedToOrigin = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin");
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this._parametersInCacheKeyAndForwardedToOrigin;
  }
  public putParametersInCacheKeyAndForwardedToOrigin(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin) {
    this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
  }
  public resetParametersInCacheKeyAndForwardedToOrigin() {
    this._parametersInCacheKeyAndForwardedToOrigin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInCacheKeyAndForwardedToOriginInput() {
    return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec {
  /**
  * A cache policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#cache_policy_config DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest#cache_policy_config}
  */
  readonly cachePolicyConfig: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig;
}

export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy_config: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigToTerraform(struct!.cachePolicyConfig),
  }
}


export function dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy_config: {
      value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigToHclTerraform(struct!.cachePolicyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyConfig = this._cachePolicyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePolicyConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePolicyConfig.internalValue = value.cachePolicyConfig;
    }
  }

  // cache_policy_config - computed: false, optional: false, required: true
  private _cachePolicyConfig = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfigOutputReference(this, "cache_policy_config");
  public get cachePolicyConfig() {
    return this._cachePolicyConfig;
  }
  public putCachePolicyConfig(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecCachePolicyConfig) {
    this._cachePolicyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyConfigInput() {
    return this._cachePolicyConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest k8s_cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest}
*/
export class DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest k8s_cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudfront_services_k8s_aws_cache_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudfrontServicesK8SAwsCachePolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
