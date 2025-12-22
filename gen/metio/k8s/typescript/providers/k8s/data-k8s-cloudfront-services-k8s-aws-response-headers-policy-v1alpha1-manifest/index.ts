// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#metadata DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata;
  /**
  * ResponseHeadersPolicySpec defines the desired state of ResponseHeadersPolicy. A response headers policy. A response headers policy contains information about a set of HTTP response headers. After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy. For more information, see Adding or removing HTTP headers in CloudFront responses (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#spec DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#annotations DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#labels DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#name DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#namespace DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#items}
  */
  readonly items?: string[];
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktf.IResolvable): any {
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

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_allow_credentials DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials?: boolean | cdktf.IResolvable;
  /**
  * A list of HTTP header names that CloudFront includes as values for the Access-Control-Allow-Headers HTTP response header. For more information about the Access-Control-Allow-Headers HTTP response header, see Access-Control-Allow-Headers (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_allow_headers DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders;
  /**
  * A list of HTTP methods that CloudFront includes as values for the Access-Control-Allow-Methods HTTP response header. For more information about the Access-Control-Allow-Methods HTTP response header, see Access-Control-Allow-Methods (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_allow_methods DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_allow_methods}
  */
  readonly accessControlAllowMethods?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods;
  /**
  * A list of origins (domain names) that CloudFront can use as the value for the Access-Control-Allow-Origin HTTP response header. For more information about the Access-Control-Allow-Origin HTTP response header, see Access-Control-Allow-Origin (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_allow_origins DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_allow_origins}
  */
  readonly accessControlAllowOrigins?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins;
  /**
  * A list of HTTP headers that CloudFront includes as values for the Access-Control-Expose-Headers HTTP response header. For more information about the Access-Control-Expose-Headers HTTP response header, see Access-Control-Expose-Headers (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_expose_headers DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_max_age_sec DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#origin_override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#origin_override}
  */
  readonly originOverride?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_allow_credentials: cdktf.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_allow_headers: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToTerraform(struct!.accessControlAllowHeaders),
    access_control_allow_methods: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToTerraform(struct!.accessControlAllowMethods),
    access_control_allow_origins: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToTerraform(struct!.accessControlAllowOrigins),
    access_control_expose_headers: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToTerraform(struct!.accessControlExposeHeaders),
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    origin_override: cdktf.booleanToTerraform(struct!.originOverride),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.accessControlAllowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_control_allow_headers: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToHclTerraform(struct!.accessControlAllowHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders",
    },
    access_control_allow_methods: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToHclTerraform(struct!.accessControlAllowMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods",
    },
    access_control_allow_origins: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToHclTerraform(struct!.accessControlAllowOrigins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins",
    },
    access_control_expose_headers: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToHclTerraform(struct!.accessControlExposeHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders",
    },
    access_control_max_age_sec: {
      value: cdktf.numberToHclTerraform(struct!.accessControlMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_override: {
      value: cdktf.booleanToHclTerraform(struct!.originOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlAllowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
    }
    if (this._accessControlAllowHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders?.internalValue;
    }
    if (this._accessControlAllowMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods?.internalValue;
    }
    if (this._accessControlAllowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowOrigins = this._accessControlAllowOrigins?.internalValue;
    }
    if (this._accessControlExposeHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders?.internalValue;
    }
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._originOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.originOverride = this._originOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlAllowCredentials = undefined;
      this._accessControlAllowHeaders.internalValue = undefined;
      this._accessControlAllowMethods.internalValue = undefined;
      this._accessControlAllowOrigins.internalValue = undefined;
      this._accessControlExposeHeaders.internalValue = undefined;
      this._accessControlMaxAgeSec = undefined;
      this._originOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlAllowCredentials = value.accessControlAllowCredentials;
      this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
      this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
      this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
      this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._originOverride = value.originOverride;
    }
  }

  // access_control_allow_credentials - computed: false, optional: true, required: false
  private _accessControlAllowCredentials?: boolean | cdktf.IResolvable; 
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials');
  }
  public set accessControlAllowCredentials(value: boolean | cdktf.IResolvable) {
    this._accessControlAllowCredentials = value;
  }
  public resetAccessControlAllowCredentials() {
    this._accessControlAllowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowCredentialsInput() {
    return this._accessControlAllowCredentials;
  }

  // access_control_allow_headers - computed: false, optional: true, required: false
  private _accessControlAllowHeaders = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference(this, "access_control_allow_headers");
  public get accessControlAllowHeaders() {
    return this._accessControlAllowHeaders;
  }
  public putAccessControlAllowHeaders(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders) {
    this._accessControlAllowHeaders.internalValue = value;
  }
  public resetAccessControlAllowHeaders() {
    this._accessControlAllowHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowHeadersInput() {
    return this._accessControlAllowHeaders.internalValue;
  }

  // access_control_allow_methods - computed: false, optional: true, required: false
  private _accessControlAllowMethods = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference(this, "access_control_allow_methods");
  public get accessControlAllowMethods() {
    return this._accessControlAllowMethods;
  }
  public putAccessControlAllowMethods(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods) {
    this._accessControlAllowMethods.internalValue = value;
  }
  public resetAccessControlAllowMethods() {
    this._accessControlAllowMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowMethodsInput() {
    return this._accessControlAllowMethods.internalValue;
  }

  // access_control_allow_origins - computed: false, optional: true, required: false
  private _accessControlAllowOrigins = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference(this, "access_control_allow_origins");
  public get accessControlAllowOrigins() {
    return this._accessControlAllowOrigins;
  }
  public putAccessControlAllowOrigins(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins) {
    this._accessControlAllowOrigins.internalValue = value;
  }
  public resetAccessControlAllowOrigins() {
    this._accessControlAllowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginsInput() {
    return this._accessControlAllowOrigins.internalValue;
  }

  // access_control_expose_headers - computed: false, optional: true, required: false
  private _accessControlExposeHeaders = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference(this, "access_control_expose_headers");
  public get accessControlExposeHeaders() {
    return this._accessControlExposeHeaders;
  }
  public putAccessControlExposeHeaders(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders) {
    this._accessControlExposeHeaders.internalValue = value;
  }
  public resetAccessControlExposeHeaders() {
    this._accessControlExposeHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlExposeHeadersInput() {
    return this._accessControlExposeHeaders.internalValue;
  }

  // access_control_max_age_sec - computed: false, optional: true, required: false
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // origin_override - computed: false, optional: true, required: false
  private _originOverride?: boolean | cdktf.IResolvable; 
  public get originOverride() {
    return this.getBooleanAttribute('origin_override');
  }
  public set originOverride(value: boolean | cdktf.IResolvable) {
    this._originOverride = value;
  }
  public resetOriginOverride() {
    this._originOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originOverrideInput() {
    return this._originOverride;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#header DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#value DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    override: cdktf.booleanToTerraform(struct!.override),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._override = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._override = value.override;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigItems[] | cdktf.IResolvable) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#header DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#header}
  */
  readonly header?: string;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference {
    return new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#items DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems[] | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigItems[] | cdktf.IResolvable) {
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
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#content_security_policy DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#content_security_policy}
  */
  readonly contentSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._override = value.override;
    }
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._override = value.override;
    }
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#frame_option DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#frame_option}
  */
  readonly frameOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frame_option: cdktf.stringToTerraform(struct!.frameOption),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frame_option: {
      value: cdktf.stringToHclTerraform(struct!.frameOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOption = this._frameOption;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frameOption = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frameOption = value.frameOption;
      this._override = value.override;
    }
  }

  // frame_option - computed: false, optional: true, required: false
  private _frameOption?: string; 
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }
  public set frameOption(value: string) {
    this._frameOption = value;
  }
  public resetFrameOption() {
    this._frameOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionInput() {
    return this._frameOption;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#referrer_policy DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#referrer_policy}
  */
  readonly referrerPolicy?: string;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
    referrer_policy: cdktf.stringToTerraform(struct!.referrerPolicy),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referrer_policy: {
      value: cdktf.stringToHclTerraform(struct!.referrerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._referrerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._override = undefined;
      this._referrerPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._override = value.override;
      this._referrerPolicy = value.referrerPolicy;
    }
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // referrer_policy - computed: false, optional: true, required: false
  private _referrerPolicy?: string; 
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
  public set referrerPolicy(value: string) {
    this._referrerPolicy = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#access_control_max_age_sec DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#include_subdomains DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#preload DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#preload}
  */
  readonly preload?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    override: cdktf.booleanToTerraform(struct!.override),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_max_age_sec: {
      value: cdktf.numberToHclTerraform(struct!.accessControlMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preload: {
      value: cdktf.booleanToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlMaxAgeSec = undefined;
      this._includeSubdomains = undefined;
      this._override = undefined;
      this._preload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._includeSubdomains = value.includeSubdomains;
      this._override = value.override;
      this._preload = value.preload;
    }
  }

  // access_control_max_age_sec - computed: false, optional: true, required: false
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#mode_block DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#mode_block}
  */
  readonly modeBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#override DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#protection DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#protection}
  */
  readonly protection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#report_uri DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#report_uri}
  */
  readonly reportUri?: string;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode_block: cdktf.booleanToTerraform(struct!.modeBlock),
    override: cdktf.booleanToTerraform(struct!.override),
    protection: cdktf.booleanToTerraform(struct!.protection),
    report_uri: cdktf.stringToTerraform(struct!.reportUri),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode_block: {
      value: cdktf.booleanToHclTerraform(struct!.modeBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protection: {
      value: cdktf.booleanToHclTerraform(struct!.protection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report_uri: {
      value: cdktf.stringToHclTerraform(struct!.reportUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeBlock = this._modeBlock;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._protection !== undefined) {
      hasAnyValues = true;
      internalValueResult.protection = this._protection;
    }
    if (this._reportUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportUri = this._reportUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modeBlock = undefined;
      this._override = undefined;
      this._protection = undefined;
      this._reportUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modeBlock = value.modeBlock;
      this._override = value.override;
      this._protection = value.protection;
      this._reportUri = value.reportUri;
    }
  }

  // mode_block - computed: false, optional: true, required: false
  private _modeBlock?: boolean | cdktf.IResolvable; 
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block');
  }
  public set modeBlock(value: boolean | cdktf.IResolvable) {
    this._modeBlock = value;
  }
  public resetModeBlock() {
    this._modeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeBlockInput() {
    return this._modeBlock;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // protection - computed: false, optional: true, required: false
  private _protection?: boolean | cdktf.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktf.IResolvable) {
    this._protection = value;
  }
  public resetProtection() {
    this._protection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // report_uri - computed: false, optional: true, required: false
  private _reportUri?: string; 
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
  public set reportUri(value: string) {
    this._reportUri = value;
  }
  public resetReportUri() {
    this._reportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUriInput() {
    return this._reportUri;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig {
  /**
  * The policy directives and their values that CloudFront includes as values for the Content-Security-Policy HTTP response header. For more information about the Content-Security-Policy HTTP response header, see Content-Security-Policy (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#content_security_policy DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#content_security_policy}
  */
  readonly contentSecurityPolicy?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy;
  /**
  * Determines whether CloudFront includes the X-Content-Type-Options HTTP response header with its value set to nosniff. For more information about the X-Content-Type-Options HTTP response header, see X-Content-Type-Options (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#content_type_options DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#content_type_options}
  */
  readonly contentTypeOptions?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions;
  /**
  * Determines whether CloudFront includes the X-Frame-Options HTTP response header and the header's value. For more information about the X-Frame-Options HTTP response header, see X-Frame-Options (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#frame_options DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#frame_options}
  */
  readonly frameOptions?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions;
  /**
  * Determines whether CloudFront includes the Referrer-Policy HTTP response header and the header's value. For more information about the Referrer-Policy HTTP response header, see Referrer-Policy (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#referrer_policy DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#referrer_policy}
  */
  readonly referrerPolicy?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy;
  /**
  * Determines whether CloudFront includes the Strict-Transport-Security HTTP response header and the header's value. For more information about the Strict-Transport-Security HTTP response header, see Strict-Transport-Security (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#strict_transport_security DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#strict_transport_security}
  */
  readonly strictTransportSecurity?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity;
  /**
  * Determines whether CloudFront includes the X-XSS-Protection HTTP response header and the header's value. For more information about the X-XSS-Protection HTTP response header, see X-XSS-Protection (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#xss_protection DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#xss_protection}
  */
  readonly xssProtection?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToTerraform(struct!.contentSecurityPolicy),
    content_type_options: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToTerraform(struct!.contentTypeOptions),
    frame_options: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToTerraform(struct!.frameOptions),
    referrer_policy: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToTerraform(struct!.referrerPolicy),
    strict_transport_security: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToTerraform(struct!.strictTransportSecurity),
    xss_protection: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToTerraform(struct!.xssProtection),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_security_policy: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy",
    },
    content_type_options: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToHclTerraform(struct!.contentTypeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions",
    },
    frame_options: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToHclTerraform(struct!.frameOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions",
    },
    referrer_policy: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToHclTerraform(struct!.referrerPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy",
    },
    strict_transport_security: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct!.strictTransportSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity",
    },
    xss_protection: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToHclTerraform(struct!.xssProtection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy?.internalValue;
    }
    if (this._contentTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeOptions = this._contentTypeOptions?.internalValue;
    }
    if (this._frameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOptions = this._frameOptions?.internalValue;
    }
    if (this._referrerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy?.internalValue;
    }
    if (this._strictTransportSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTransportSecurity = this._strictTransportSecurity?.internalValue;
    }
    if (this._xssProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xssProtection = this._xssProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy.internalValue = undefined;
      this._contentTypeOptions.internalValue = undefined;
      this._frameOptions.internalValue = undefined;
      this._referrerPolicy.internalValue = undefined;
      this._strictTransportSecurity.internalValue = undefined;
      this._xssProtection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
      this._contentTypeOptions.internalValue = value.contentTypeOptions;
      this._frameOptions.internalValue = value.frameOptions;
      this._referrerPolicy.internalValue = value.referrerPolicy;
      this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
      this._xssProtection.internalValue = value.xssProtection;
    }
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference(this, "content_security_policy");
  public get contentSecurityPolicy() {
    return this._contentSecurityPolicy;
  }
  public putContentSecurityPolicy(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy) {
    this._contentSecurityPolicy.internalValue = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy.internalValue;
  }

  // content_type_options - computed: false, optional: true, required: false
  private _contentTypeOptions = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference(this, "content_type_options");
  public get contentTypeOptions() {
    return this._contentTypeOptions;
  }
  public putContentTypeOptions(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions) {
    this._contentTypeOptions.internalValue = value;
  }
  public resetContentTypeOptions() {
    this._contentTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeOptionsInput() {
    return this._contentTypeOptions.internalValue;
  }

  // frame_options - computed: false, optional: true, required: false
  private _frameOptions = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference(this, "frame_options");
  public get frameOptions() {
    return this._frameOptions;
  }
  public putFrameOptions(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions) {
    this._frameOptions.internalValue = value;
  }
  public resetFrameOptions() {
    this._frameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionsInput() {
    return this._frameOptions.internalValue;
  }

  // referrer_policy - computed: false, optional: true, required: false
  private _referrerPolicy = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference(this, "referrer_policy");
  public get referrerPolicy() {
    return this._referrerPolicy;
  }
  public putReferrerPolicy(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy) {
    this._referrerPolicy.internalValue = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy.internalValue;
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference(this, "strict_transport_security");
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }
  public putStrictTransportSecurity(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity) {
    this._strictTransportSecurity.internalValue = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity.internalValue;
  }

  // xss_protection - computed: false, optional: true, required: false
  private _xssProtection = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference(this, "xss_protection");
  public get xssProtection() {
    return this._xssProtection;
  }
  public putXssProtection(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection) {
    this._xssProtection.internalValue = value;
  }
  public resetXssProtection() {
    this._xssProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssProtectionInput() {
    return this._xssProtection.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#enabled DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#sampling_rate DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktf.IResolvable): any {
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
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._samplingRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._samplingRate = value.samplingRate;
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

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#comment DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#comment}
  */
  readonly comment?: string;
  /**
  * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy. For more information about CORS, see Cross-Origin Resource Sharing (CORS) (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#cors_config DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#cors_config}
  */
  readonly corsConfig?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig;
  /**
  * A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#custom_headers_config DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#custom_headers_config}
  */
  readonly customHeadersConfig?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#name DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#remove_headers_config DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#remove_headers_config}
  */
  readonly removeHeadersConfig?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig;
  /**
  * A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#security_headers_config DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#security_headers_config}
  */
  readonly securityHeadersConfig?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig;
  /**
  * A configuration for enabling the Server-Timing header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy. You can use the Server-Timing header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the Server-Timing header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see Server-Timing header (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header) in the Amazon CloudFront Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#server_timing_headers_config DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#server_timing_headers_config}
  */
  readonly serverTimingHeadersConfig?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    cors_config: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigToTerraform(struct!.corsConfig),
    custom_headers_config: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigToTerraform(struct!.customHeadersConfig),
    name: cdktf.stringToTerraform(struct!.name),
    remove_headers_config: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigToTerraform(struct!.removeHeadersConfig),
    security_headers_config: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigToTerraform(struct!.securityHeadersConfig),
    server_timing_headers_config: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfigToTerraform(struct!.serverTimingHeadersConfig),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig | cdktf.IResolvable): any {
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
    cors_config: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigToHclTerraform(struct!.corsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig",
    },
    custom_headers_config: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigToHclTerraform(struct!.customHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_headers_config: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigToHclTerraform(struct!.removeHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig",
    },
    security_headers_config: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigToHclTerraform(struct!.securityHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig",
    },
    server_timing_headers_config: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfigToHclTerraform(struct!.serverTimingHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._corsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsConfig = this._corsConfig?.internalValue;
    }
    if (this._customHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeadersConfig = this._customHeadersConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._removeHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeHeadersConfig = this._removeHeadersConfig?.internalValue;
    }
    if (this._securityHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityHeadersConfig = this._securityHeadersConfig?.internalValue;
    }
    if (this._serverTimingHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTimingHeadersConfig = this._serverTimingHeadersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._corsConfig.internalValue = undefined;
      this._customHeadersConfig.internalValue = undefined;
      this._name = undefined;
      this._removeHeadersConfig.internalValue = undefined;
      this._securityHeadersConfig.internalValue = undefined;
      this._serverTimingHeadersConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._corsConfig.internalValue = value.corsConfig;
      this._customHeadersConfig.internalValue = value.customHeadersConfig;
      this._name = value.name;
      this._removeHeadersConfig.internalValue = value.removeHeadersConfig;
      this._securityHeadersConfig.internalValue = value.securityHeadersConfig;
      this._serverTimingHeadersConfig.internalValue = value.serverTimingHeadersConfig;
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

  // cors_config - computed: false, optional: true, required: false
  private _corsConfig = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfigOutputReference(this, "cors_config");
  public get corsConfig() {
    return this._corsConfig;
  }
  public putCorsConfig(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCorsConfig) {
    this._corsConfig.internalValue = value;
  }
  public resetCorsConfig() {
    this._corsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig.internalValue;
  }

  // custom_headers_config - computed: false, optional: true, required: false
  private _customHeadersConfig = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfigOutputReference(this, "custom_headers_config");
  public get customHeadersConfig() {
    return this._customHeadersConfig;
  }
  public putCustomHeadersConfig(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigCustomHeadersConfig) {
    this._customHeadersConfig.internalValue = value;
  }
  public resetCustomHeadersConfig() {
    this._customHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersConfigInput() {
    return this._customHeadersConfig.internalValue;
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

  // remove_headers_config - computed: false, optional: true, required: false
  private _removeHeadersConfig = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference(this, "remove_headers_config");
  public get removeHeadersConfig() {
    return this._removeHeadersConfig;
  }
  public putRemoveHeadersConfig(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigRemoveHeadersConfig) {
    this._removeHeadersConfig.internalValue = value;
  }
  public resetRemoveHeadersConfig() {
    this._removeHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHeadersConfigInput() {
    return this._removeHeadersConfig.internalValue;
  }

  // security_headers_config - computed: false, optional: true, required: false
  private _securityHeadersConfig = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference(this, "security_headers_config");
  public get securityHeadersConfig() {
    return this._securityHeadersConfig;
  }
  public putSecurityHeadersConfig(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigSecurityHeadersConfig) {
    this._securityHeadersConfig.internalValue = value;
  }
  public resetSecurityHeadersConfig() {
    this._securityHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeadersConfigInput() {
    return this._securityHeadersConfig.internalValue;
  }

  // server_timing_headers_config - computed: false, optional: true, required: false
  private _serverTimingHeadersConfig = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference(this, "server_timing_headers_config");
  public get serverTimingHeadersConfig() {
    return this._serverTimingHeadersConfig;
  }
  public putServerTimingHeadersConfig(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigServerTimingHeadersConfig) {
    this._serverTimingHeadersConfig.internalValue = value;
  }
  public resetServerTimingHeadersConfig() {
    this._serverTimingHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimingHeadersConfigInput() {
    return this._serverTimingHeadersConfig.internalValue;
  }
}
export interface DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec {
  /**
  * Contains metadata about the response headers policy, and a set of configurations that specify the HTTP headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#response_headers_policy_config DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest#response_headers_policy_config}
  */
  readonly responseHeadersPolicyConfig: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig;
}

export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_headers_policy_config: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigToTerraform(struct!.responseHeadersPolicyConfig),
  }
}


export function dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_headers_policy_config: {
      value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigToHclTerraform(struct!.responseHeadersPolicyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseHeadersPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyConfig = this._responseHeadersPolicyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseHeadersPolicyConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseHeadersPolicyConfig.internalValue = value.responseHeadersPolicyConfig;
    }
  }

  // response_headers_policy_config - computed: false, optional: false, required: true
  private _responseHeadersPolicyConfig = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfigOutputReference(this, "response_headers_policy_config");
  public get responseHeadersPolicyConfig() {
    return this._responseHeadersPolicyConfig;
  }
  public putResponseHeadersPolicyConfig(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecResponseHeadersPolicyConfig) {
    this._responseHeadersPolicyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyConfigInput() {
    return this._responseHeadersPolicyConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest k8s_cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest}
*/
export class DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest k8s_cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudfront_services_k8s_aws_response_headers_policy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudfrontServicesK8SAwsResponseHeadersPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
