// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#metadata DataK8STraefikIoMiddlewareV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata;
  /**
  * MiddlewareSpec defines the desired state of a Middleware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#spec DataK8STraefikIoMiddlewareV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#annotations DataK8STraefikIoMiddlewareV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#labels DataK8STraefikIoMiddlewareV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#name DataK8STraefikIoMiddlewareV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#namespace DataK8STraefikIoMiddlewareV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix {
  /**
  * Prefix is the string to add before the current path in the requested URL. It should include a leading slash (/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#prefix DataK8STraefikIoMiddlewareV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefixToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefixToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
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
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth {
  /**
  * HeaderField defines a header field to store the authenticated user. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/basicauth/#headerfield
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#header_field DataK8STraefikIoMiddlewareV1Alpha1Manifest#header_field}
  */
  readonly headerField?: string;
  /**
  * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme. Default: traefik.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#realm DataK8STraefikIoMiddlewareV1Alpha1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#remove_header DataK8STraefikIoMiddlewareV1Alpha1Manifest#remove_header}
  */
  readonly removeHeader?: boolean | cdktf.IResolvable;
  /**
  * Secret is the name of the referenced Kubernetes Secret containing user credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#secret DataK8STraefikIoMiddlewareV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuthToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_field: cdktf.stringToTerraform(struct!.headerField),
    realm: cdktf.stringToTerraform(struct!.realm),
    remove_header: cdktf.booleanToTerraform(struct!.removeHeader),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuthToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_field: {
      value: cdktf.stringToHclTerraform(struct!.headerField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_header: {
      value: cdktf.booleanToHclTerraform(struct!.removeHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerField !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerField = this._headerField;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._removeHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeHeader = this._removeHeader;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerField = undefined;
      this._realm = undefined;
      this._removeHeader = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerField = value.headerField;
      this._realm = value.realm;
      this._removeHeader = value.removeHeader;
      this._secret = value.secret;
    }
  }

  // header_field - computed: false, optional: true, required: false
  private _headerField?: string; 
  public get headerField() {
    return this.getStringAttribute('header_field');
  }
  public set headerField(value: string) {
    this._headerField = value;
  }
  public resetHeaderField() {
    this._headerField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFieldInput() {
    return this._headerField;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // remove_header - computed: false, optional: true, required: false
  private _removeHeader?: boolean | cdktf.IResolvable; 
  public get removeHeader() {
    return this.getBooleanAttribute('remove_header');
  }
  public set removeHeader(value: boolean | cdktf.IResolvable) {
    this._removeHeader = value;
  }
  public resetRemoveHeader() {
    this._removeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHeaderInput() {
    return this._removeHeader;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering {
  /**
  * MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes). If the request exceeds the allowed size, it is not forwarded to the service, and the client gets a 413 (Request Entity Too Large) response. Default: 0 (no maximum).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#max_request_body_bytes DataK8STraefikIoMiddlewareV1Alpha1Manifest#max_request_body_bytes}
  */
  readonly maxRequestBodyBytes?: number;
  /**
  * MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes). If the response exceeds the allowed size, it is not forwarded to the client. The client gets a 500 (Internal Server Error) response instead. Default: 0 (no maximum).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#max_response_body_bytes DataK8STraefikIoMiddlewareV1Alpha1Manifest#max_response_body_bytes}
  */
  readonly maxResponseBodyBytes?: number;
  /**
  * MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory. Default: 1048576 (1Mi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#mem_request_body_bytes DataK8STraefikIoMiddlewareV1Alpha1Manifest#mem_request_body_bytes}
  */
  readonly memRequestBodyBytes?: number;
  /**
  * MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory. Default: 1048576 (1Mi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#mem_response_body_bytes DataK8STraefikIoMiddlewareV1Alpha1Manifest#mem_response_body_bytes}
  */
  readonly memResponseBodyBytes?: number;
  /**
  * RetryExpression defines the retry conditions. It is a logical combination of functions with operators AND (&&) and OR (||). More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/buffering/#retryexpression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#retry_expression DataK8STraefikIoMiddlewareV1Alpha1Manifest#retry_expression}
  */
  readonly retryExpression?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBufferingToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_request_body_bytes: cdktf.numberToTerraform(struct!.maxRequestBodyBytes),
    max_response_body_bytes: cdktf.numberToTerraform(struct!.maxResponseBodyBytes),
    mem_request_body_bytes: cdktf.numberToTerraform(struct!.memRequestBodyBytes),
    mem_response_body_bytes: cdktf.numberToTerraform(struct!.memResponseBodyBytes),
    retry_expression: cdktf.stringToTerraform(struct!.retryExpression),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBufferingToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_request_body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_response_body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxResponseBodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_request_body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.memRequestBodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_response_body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.memResponseBodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_expression: {
      value: cdktf.stringToHclTerraform(struct!.retryExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBufferingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequestBodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodyBytes = this._maxRequestBodyBytes;
    }
    if (this._maxResponseBodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResponseBodyBytes = this._maxResponseBodyBytes;
    }
    if (this._memRequestBodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memRequestBodyBytes = this._memRequestBodyBytes;
    }
    if (this._memResponseBodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memResponseBodyBytes = this._memResponseBodyBytes;
    }
    if (this._retryExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryExpression = this._retryExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRequestBodyBytes = undefined;
      this._maxResponseBodyBytes = undefined;
      this._memRequestBodyBytes = undefined;
      this._memResponseBodyBytes = undefined;
      this._retryExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRequestBodyBytes = value.maxRequestBodyBytes;
      this._maxResponseBodyBytes = value.maxResponseBodyBytes;
      this._memRequestBodyBytes = value.memRequestBodyBytes;
      this._memResponseBodyBytes = value.memResponseBodyBytes;
      this._retryExpression = value.retryExpression;
    }
  }

  // max_request_body_bytes - computed: false, optional: true, required: false
  private _maxRequestBodyBytes?: number; 
  public get maxRequestBodyBytes() {
    return this.getNumberAttribute('max_request_body_bytes');
  }
  public set maxRequestBodyBytes(value: number) {
    this._maxRequestBodyBytes = value;
  }
  public resetMaxRequestBodyBytes() {
    this._maxRequestBodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodyBytesInput() {
    return this._maxRequestBodyBytes;
  }

  // max_response_body_bytes - computed: false, optional: true, required: false
  private _maxResponseBodyBytes?: number; 
  public get maxResponseBodyBytes() {
    return this.getNumberAttribute('max_response_body_bytes');
  }
  public set maxResponseBodyBytes(value: number) {
    this._maxResponseBodyBytes = value;
  }
  public resetMaxResponseBodyBytes() {
    this._maxResponseBodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResponseBodyBytesInput() {
    return this._maxResponseBodyBytes;
  }

  // mem_request_body_bytes - computed: false, optional: true, required: false
  private _memRequestBodyBytes?: number; 
  public get memRequestBodyBytes() {
    return this.getNumberAttribute('mem_request_body_bytes');
  }
  public set memRequestBodyBytes(value: number) {
    this._memRequestBodyBytes = value;
  }
  public resetMemRequestBodyBytes() {
    this._memRequestBodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memRequestBodyBytesInput() {
    return this._memRequestBodyBytes;
  }

  // mem_response_body_bytes - computed: false, optional: true, required: false
  private _memResponseBodyBytes?: number; 
  public get memResponseBodyBytes() {
    return this.getNumberAttribute('mem_response_body_bytes');
  }
  public set memResponseBodyBytes(value: number) {
    this._memResponseBodyBytes = value;
  }
  public resetMemResponseBodyBytes() {
    this._memResponseBodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memResponseBodyBytesInput() {
    return this._memResponseBodyBytes;
  }

  // retry_expression - computed: false, optional: true, required: false
  private _retryExpression?: string; 
  public get retryExpression() {
    return this.getStringAttribute('retry_expression');
  }
  public set retryExpression(value: string) {
    this._retryExpression = value;
  }
  public resetRetryExpression() {
    this._retryExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryExpressionInput() {
    return this._retryExpression;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares {
  /**
  * Name defines the name of the referenced Middleware resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#name DataK8STraefikIoMiddlewareV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Middleware resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#namespace DataK8STraefikIoMiddlewareV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares | cdktf.IResolvable): any {
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

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares | cdktf.IResolvable | undefined) {
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

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresOutputReference {
    return new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain {
  /**
  * Middlewares is the list of MiddlewareRef which composes the chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#middlewares DataK8STraefikIoMiddlewareV1Alpha1Manifest#middlewares}
  */
  readonly middlewares?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares[] | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    middlewares: cdktf.listMapper(dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresToTerraform, false)(struct!.middlewares),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    middlewares: {
      value: cdktf.listMapperHcl(dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresToHclTerraform, false)(struct!.middlewares),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._middlewares?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.middlewares = this._middlewares?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._middlewares.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._middlewares.internalValue = value.middlewares;
    }
  }

  // middlewares - computed: false, optional: true, required: false
  private _middlewares = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewaresList(this, "middlewares", false);
  public get middlewares() {
    return this._middlewares;
  }
  public putMiddlewares(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainMiddlewares[] | cdktf.IResolvable) {
    this._middlewares.internalValue = value;
  }
  public resetMiddlewares() {
    this._middlewares.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewaresInput() {
    return this._middlewares.internalValue;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker {
  /**
  * CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#check_period DataK8STraefikIoMiddlewareV1Alpha1Manifest#check_period}
  */
  readonly checkPeriod?: string;
  /**
  * Expression is the condition that triggers the tripped state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#expression DataK8STraefikIoMiddlewareV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#fallback_duration DataK8STraefikIoMiddlewareV1Alpha1Manifest#fallback_duration}
  */
  readonly fallbackDuration?: string;
  /**
  * RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#recovery_duration DataK8STraefikIoMiddlewareV1Alpha1Manifest#recovery_duration}
  */
  readonly recoveryDuration?: string;
  /**
  * ResponseCode is the status code that the circuit breaker will return while it is in the open state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#response_code DataK8STraefikIoMiddlewareV1Alpha1Manifest#response_code}
  */
  readonly responseCode?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreakerToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_period: cdktf.stringToTerraform(struct!.checkPeriod),
    expression: cdktf.stringToTerraform(struct!.expression),
    fallback_duration: cdktf.stringToTerraform(struct!.fallbackDuration),
    recovery_duration: cdktf.stringToTerraform(struct!.recoveryDuration),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreakerToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_period: {
      value: cdktf.stringToHclTerraform(struct!.checkPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_duration: {
      value: cdktf.stringToHclTerraform(struct!.fallbackDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_duration: {
      value: cdktf.stringToHclTerraform(struct!.recoveryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPeriod = this._checkPeriod;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._fallbackDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackDuration = this._fallbackDuration;
    }
    if (this._recoveryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryDuration = this._recoveryDuration;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPeriod = undefined;
      this._expression = undefined;
      this._fallbackDuration = undefined;
      this._recoveryDuration = undefined;
      this._responseCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkPeriod = value.checkPeriod;
      this._expression = value.expression;
      this._fallbackDuration = value.fallbackDuration;
      this._recoveryDuration = value.recoveryDuration;
      this._responseCode = value.responseCode;
    }
  }

  // check_period - computed: false, optional: true, required: false
  private _checkPeriod?: string; 
  public get checkPeriod() {
    return this.getStringAttribute('check_period');
  }
  public set checkPeriod(value: string) {
    this._checkPeriod = value;
  }
  public resetCheckPeriod() {
    this._checkPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPeriodInput() {
    return this._checkPeriod;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // fallback_duration - computed: false, optional: true, required: false
  private _fallbackDuration?: string; 
  public get fallbackDuration() {
    return this.getStringAttribute('fallback_duration');
  }
  public set fallbackDuration(value: string) {
    this._fallbackDuration = value;
  }
  public resetFallbackDuration() {
    this._fallbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackDurationInput() {
    return this._fallbackDuration;
  }

  // recovery_duration - computed: false, optional: true, required: false
  private _recoveryDuration?: string; 
  public get recoveryDuration() {
    return this.getStringAttribute('recovery_duration');
  }
  public set recoveryDuration(value: string) {
    this._recoveryDuration = value;
  }
  public resetRecoveryDuration() {
    this._recoveryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryDurationInput() {
    return this._recoveryDuration;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress {
  /**
  * DefaultEncoding specifies the default encoding if the 'Accept-Encoding' header is not in the request or contains a wildcard ('*').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#default_encoding DataK8STraefikIoMiddlewareV1Alpha1Manifest#default_encoding}
  */
  readonly defaultEncoding?: string;
  /**
  * Encodings defines the list of supported compression algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#encodings DataK8STraefikIoMiddlewareV1Alpha1Manifest#encodings}
  */
  readonly encodings?: string[];
  /**
  * ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing. 'application/grpc' is always excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#excluded_content_types DataK8STraefikIoMiddlewareV1Alpha1Manifest#excluded_content_types}
  */
  readonly excludedContentTypes?: string[];
  /**
  * IncludedContentTypes defines the list of content types to compare the Content-Type header of the responses before compressing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#included_content_types DataK8STraefikIoMiddlewareV1Alpha1Manifest#included_content_types}
  */
  readonly includedContentTypes?: string[];
  /**
  * MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed. Default: 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#min_response_body_bytes DataK8STraefikIoMiddlewareV1Alpha1Manifest#min_response_body_bytes}
  */
  readonly minResponseBodyBytes?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompressToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_encoding: cdktf.stringToTerraform(struct!.defaultEncoding),
    encodings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encodings),
    excluded_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedContentTypes),
    included_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedContentTypes),
    min_response_body_bytes: cdktf.numberToTerraform(struct!.minResponseBodyBytes),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompressToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_encoding: {
      value: cdktf.stringToHclTerraform(struct!.defaultEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encodings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encodings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_response_body_bytes: {
      value: cdktf.numberToHclTerraform(struct!.minResponseBodyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEncoding = this._defaultEncoding;
    }
    if (this._encodings !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodings = this._encodings;
    }
    if (this._excludedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedContentTypes = this._excludedContentTypes;
    }
    if (this._includedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedContentTypes = this._includedContentTypes;
    }
    if (this._minResponseBodyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResponseBodyBytes = this._minResponseBodyBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEncoding = undefined;
      this._encodings = undefined;
      this._excludedContentTypes = undefined;
      this._includedContentTypes = undefined;
      this._minResponseBodyBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEncoding = value.defaultEncoding;
      this._encodings = value.encodings;
      this._excludedContentTypes = value.excludedContentTypes;
      this._includedContentTypes = value.includedContentTypes;
      this._minResponseBodyBytes = value.minResponseBodyBytes;
    }
  }

  // default_encoding - computed: false, optional: true, required: false
  private _defaultEncoding?: string; 
  public get defaultEncoding() {
    return this.getStringAttribute('default_encoding');
  }
  public set defaultEncoding(value: string) {
    this._defaultEncoding = value;
  }
  public resetDefaultEncoding() {
    this._defaultEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncodingInput() {
    return this._defaultEncoding;
  }

  // encodings - computed: false, optional: true, required: false
  private _encodings?: string[]; 
  public get encodings() {
    return this.getListAttribute('encodings');
  }
  public set encodings(value: string[]) {
    this._encodings = value;
  }
  public resetEncodings() {
    this._encodings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingsInput() {
    return this._encodings;
  }

  // excluded_content_types - computed: false, optional: true, required: false
  private _excludedContentTypes?: string[]; 
  public get excludedContentTypes() {
    return this.getListAttribute('excluded_content_types');
  }
  public set excludedContentTypes(value: string[]) {
    this._excludedContentTypes = value;
  }
  public resetExcludedContentTypes() {
    this._excludedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedContentTypesInput() {
    return this._excludedContentTypes;
  }

  // included_content_types - computed: false, optional: true, required: false
  private _includedContentTypes?: string[]; 
  public get includedContentTypes() {
    return this.getListAttribute('included_content_types');
  }
  public set includedContentTypes(value: string[]) {
    this._includedContentTypes = value;
  }
  public resetIncludedContentTypes() {
    this._includedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedContentTypesInput() {
    return this._includedContentTypes;
  }

  // min_response_body_bytes - computed: false, optional: true, required: false
  private _minResponseBodyBytes?: number; 
  public get minResponseBodyBytes() {
    return this.getNumberAttribute('min_response_body_bytes');
  }
  public set minResponseBodyBytes(value: number) {
    this._minResponseBodyBytes = value;
  }
  public resetMinResponseBodyBytes() {
    this._minResponseBodyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResponseBodyBytesInput() {
    return this._minResponseBodyBytes;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType {
  /**
  * AutoDetect specifies whether to let the 'Content-Type' header, if it has not been set by the backend, be automatically set to a value derived from the contents of the response. Deprecated: AutoDetect option is deprecated, Content-Type middleware is only meant to be used to enable the content-type detection, please remove any usage of this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#auto_detect DataK8STraefikIoMiddlewareV1Alpha1Manifest#auto_detect}
  */
  readonly autoDetect?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentTypeToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_detect: cdktf.booleanToTerraform(struct!.autoDetect),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentTypeToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_detect: {
      value: cdktf.booleanToHclTerraform(struct!.autoDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetect = this._autoDetect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDetect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDetect = value.autoDetect;
    }
  }

  // auto_detect - computed: false, optional: true, required: false
  private _autoDetect?: boolean | cdktf.IResolvable; 
  public get autoDetect() {
    return this.getBooleanAttribute('auto_detect');
  }
  public set autoDetect(value: boolean | cdktf.IResolvable) {
    this._autoDetect = value;
  }
  public resetAutoDetect() {
    this._autoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectInput() {
    return this._autoDetect;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth {
  /**
  * HeaderField defines a header field to store the authenticated user. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/basicauth/#headerfield
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#header_field DataK8STraefikIoMiddlewareV1Alpha1Manifest#header_field}
  */
  readonly headerField?: string;
  /**
  * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme. Default: traefik.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#realm DataK8STraefikIoMiddlewareV1Alpha1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#remove_header DataK8STraefikIoMiddlewareV1Alpha1Manifest#remove_header}
  */
  readonly removeHeader?: boolean | cdktf.IResolvable;
  /**
  * Secret is the name of the referenced Kubernetes Secret containing user credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#secret DataK8STraefikIoMiddlewareV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuthToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_field: cdktf.stringToTerraform(struct!.headerField),
    realm: cdktf.stringToTerraform(struct!.realm),
    remove_header: cdktf.booleanToTerraform(struct!.removeHeader),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuthToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_field: {
      value: cdktf.stringToHclTerraform(struct!.headerField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_header: {
      value: cdktf.booleanToHclTerraform(struct!.removeHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerField !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerField = this._headerField;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._removeHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeHeader = this._removeHeader;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerField = undefined;
      this._realm = undefined;
      this._removeHeader = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerField = value.headerField;
      this._realm = value.realm;
      this._removeHeader = value.removeHeader;
      this._secret = value.secret;
    }
  }

  // header_field - computed: false, optional: true, required: false
  private _headerField?: string; 
  public get headerField() {
    return this.getStringAttribute('header_field');
  }
  public set headerField(value: string) {
    this._headerField = value;
  }
  public resetHeaderField() {
    this._headerField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFieldInput() {
    return this._headerField;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // remove_header - computed: false, optional: true, required: false
  private _removeHeader?: boolean | cdktf.IResolvable; 
  public get removeHeader() {
    return this.getBooleanAttribute('remove_header');
  }
  public set removeHeader(value: boolean | cdktf.IResolvable) {
    this._removeHeader = value;
  }
  public resetRemoveHeader() {
    this._removeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHeaderInput() {
    return this._removeHeader;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck {
  /**
  * FollowRedirects defines whether redirects should be followed during the health check calls. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#follow_redirects DataK8STraefikIoMiddlewareV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Headers defines custom headers to be sent to the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Hostname defines the value of hostname in the Host header of the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#hostname DataK8STraefikIoMiddlewareV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Interval defines the frequency of the health check calls. Default: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#interval DataK8STraefikIoMiddlewareV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Method defines the healthcheck method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#method DataK8STraefikIoMiddlewareV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Mode defines the health check mode. If defined to grpc, will use the gRPC health check protocol to probe the server. Default: http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#mode DataK8STraefikIoMiddlewareV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Path defines the server URL path for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#path DataK8STraefikIoMiddlewareV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port defines the server URL port for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#port DataK8STraefikIoMiddlewareV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme replaces the server URL scheme for the health check endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#scheme DataK8STraefikIoMiddlewareV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Status defines the expected HTTP status code of the response to the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#status DataK8STraefikIoMiddlewareV1Alpha1Manifest#status}
  */
  readonly status?: number;
  /**
  * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy. Default: 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#timeout DataK8STraefikIoMiddlewareV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheckToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    interval: cdktf.stringToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status: cdktf.numberToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheckToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followRedirects = undefined;
      this._headers = undefined;
      this._hostname = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._status = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followRedirects = value.followRedirects;
      this._headers = value.headers;
      this._hostname = value.hostname;
      this._interval = value.interval;
      this._method = value.method;
      this._mode = value.mode;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._status = value.status;
      this._timeout = value.timeout;
    }
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding {
  /**
  * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#flush_interval DataK8STraefikIoMiddlewareV1Alpha1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwardingToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwardingToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flushInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flushInterval = value.flushInterval;
    }
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: string; 
  public get flushInterval() {
    return this.getStringAttribute('flush_interval');
  }
  public set flushInterval(value: string) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie {
  /**
  * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#http_only DataK8STraefikIoMiddlewareV1Alpha1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * MaxAge indicates the number of seconds until the cookie expires. When set to a negative number, the cookie expires immediately. When set to zero, the cookie never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#max_age DataK8STraefikIoMiddlewareV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Name defines the Cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#name DataK8STraefikIoMiddlewareV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#same_site DataK8STraefikIoMiddlewareV1Alpha1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#secure DataK8STraefikIoMiddlewareV1Alpha1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookieToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    name: cdktf.stringToTerraform(struct!.name),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookieToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
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
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._name = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._name = value.name;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky {
  /**
  * Cookie defines the sticky cookie configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#cookie DataK8STraefikIoMiddlewareV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookieToTerraform(struct!.cookie),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService {
  /**
  * Healthcheck defines health checks for ExternalName services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#health_check DataK8STraefikIoMiddlewareV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck;
  /**
  * Kind defines the kind of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#kind DataK8STraefikIoMiddlewareV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#name DataK8STraefikIoMiddlewareV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#namespace DataK8STraefikIoMiddlewareV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#native_lb DataK8STraefikIoMiddlewareV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#node_port_lb DataK8STraefikIoMiddlewareV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#pass_host_header DataK8STraefikIoMiddlewareV1Alpha1Manifest#pass_host_header}
  */
  readonly passHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#port DataK8STraefikIoMiddlewareV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#response_forwarding DataK8STraefikIoMiddlewareV1Alpha1Manifest#response_forwarding}
  */
  readonly responseForwarding?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding;
  /**
  * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#scheme DataK8STraefikIoMiddlewareV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#servers_transport DataK8STraefikIoMiddlewareV1Alpha1Manifest#servers_transport}
  */
  readonly serversTransport?: string;
  /**
  * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/services/#sticky-sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#sticky DataK8STraefikIoMiddlewareV1Alpha1Manifest#sticky}
  */
  readonly sticky?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky;
  /**
  * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#strategy DataK8STraefikIoMiddlewareV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#weight DataK8STraefikIoMiddlewareV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheckToTerraform(struct!.healthCheck),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    native_lb: cdktf.booleanToTerraform(struct!.nativeLb),
    node_port_lb: cdktf.booleanToTerraform(struct!.nodePortLb),
    pass_host_header: cdktf.booleanToTerraform(struct!.passHostHeader),
    port: cdktf.stringToTerraform(struct!.port),
    response_forwarding: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwardingToTerraform(struct!.responseForwarding),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    servers_transport: cdktf.stringToTerraform(struct!.serversTransport),
    sticky: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyToTerraform(struct!.sticky),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck",
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nativeLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nodePortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.passHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_forwarding: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwardingToHclTerraform(struct!.responseForwarding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers_transport: {
      value: cdktf.stringToHclTerraform(struct!.serversTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyToHclTerraform(struct!.sticky),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nativeLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeLb = this._nativeLb;
    }
    if (this._nodePortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePortLb = this._nodePortLb;
    }
    if (this._passHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.passHostHeader = this._passHostHeader;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._responseForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseForwarding = this._responseForwarding?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serversTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversTransport = this._serversTransport;
    }
    if (this._sticky?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._nativeLb = undefined;
      this._nodePortLb = undefined;
      this._passHostHeader = undefined;
      this._port = undefined;
      this._responseForwarding.internalValue = undefined;
      this._scheme = undefined;
      this._serversTransport = undefined;
      this._sticky.internalValue = undefined;
      this._strategy = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._nativeLb = value.nativeLb;
      this._nodePortLb = value.nodePortLb;
      this._passHostHeader = value.passHostHeader;
      this._port = value.port;
      this._responseForwarding.internalValue = value.responseForwarding;
      this._scheme = value.scheme;
      this._serversTransport = value.serversTransport;
      this._sticky.internalValue = value.sticky;
      this._strategy = value.strategy;
      this._weight = value.weight;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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

  // native_lb - computed: false, optional: true, required: false
  private _nativeLb?: boolean | cdktf.IResolvable; 
  public get nativeLb() {
    return this.getBooleanAttribute('native_lb');
  }
  public set nativeLb(value: boolean | cdktf.IResolvable) {
    this._nativeLb = value;
  }
  public resetNativeLb() {
    this._nativeLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeLbInput() {
    return this._nativeLb;
  }

  // node_port_lb - computed: false, optional: true, required: false
  private _nodePortLb?: boolean | cdktf.IResolvable; 
  public get nodePortLb() {
    return this.getBooleanAttribute('node_port_lb');
  }
  public set nodePortLb(value: boolean | cdktf.IResolvable) {
    this._nodePortLb = value;
  }
  public resetNodePortLb() {
    this._nodePortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortLbInput() {
    return this._nodePortLb;
  }

  // pass_host_header - computed: false, optional: true, required: false
  private _passHostHeader?: boolean | cdktf.IResolvable; 
  public get passHostHeader() {
    return this.getBooleanAttribute('pass_host_header');
  }
  public set passHostHeader(value: boolean | cdktf.IResolvable) {
    this._passHostHeader = value;
  }
  public resetPassHostHeader() {
    this._passHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passHostHeaderInput() {
    return this._passHostHeader;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // response_forwarding - computed: false, optional: true, required: false
  private _responseForwarding = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwardingOutputReference(this, "response_forwarding");
  public get responseForwarding() {
    return this._responseForwarding;
  }
  public putResponseForwarding(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceResponseForwarding) {
    this._responseForwarding.internalValue = value;
  }
  public resetResponseForwarding() {
    this._responseForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseForwardingInput() {
    return this._responseForwarding.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // servers_transport - computed: false, optional: true, required: false
  private _serversTransport?: string; 
  public get serversTransport() {
    return this.getStringAttribute('servers_transport');
  }
  public set serversTransport(value: string) {
    this._serversTransport = value;
  }
  public resetServersTransport() {
    this._serversTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversTransportInput() {
    return this._serversTransport;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceStickyOutputReference(this, "sticky");
  public get sticky() {
    return this._sticky;
  }
  public putSticky(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceSticky) {
    this._sticky.internalValue = value;
  }
  public resetSticky() {
    this._sticky.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors {
  /**
  * Query defines the URL for the error page (hosted by service). The {status} variable can be used in order to insert the status code in the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#query DataK8STraefikIoMiddlewareV1Alpha1Manifest#query}
  */
  readonly query?: string;
  /**
  * Service defines the reference to a Kubernetes Service that will serve the error page. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/errorpages/#service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#service DataK8STraefikIoMiddlewareV1Alpha1Manifest#service}
  */
  readonly service?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService;
  /**
  * Status defines which status or range of statuses should result in an error page. It can be either a status code as a number (500), as multiple comma-separated numbers (500,502), as ranges by separating two codes with a dash (500-599), or a combination of the two (404,418,500-599).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#status DataK8STraefikIoMiddlewareV1Alpha1Manifest#status}
  */
  readonly status?: string[];
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    service: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceToTerraform(struct!.service),
    status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.status),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService",
    },
    status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.status),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._service.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._service.internalValue = value.service;
      this._status = value.status;
    }
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls {
  /**
  * Deprecated: TLS client authentication is a server side option (see https://github.com/golang/go/blob/740a490f71d026bb7d2d13cb8fa2d6d6e0572b70/src/crypto/tls/common.go#L634).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ca_optional DataK8STraefikIoMiddlewareV1Alpha1Manifest#ca_optional}
  */
  readonly caOptional?: boolean | cdktf.IResolvable;
  /**
  * CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate. The CA certificate is extracted from key 'tls.ca' or 'ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ca_secret DataK8STraefikIoMiddlewareV1Alpha1Manifest#ca_secret}
  */
  readonly caSecret?: string;
  /**
  * CertSecret is the name of the referenced Kubernetes Secret containing the client certificate. The client certificate is extracted from the keys 'tls.crt' and 'tls.key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#cert_secret DataK8STraefikIoMiddlewareV1Alpha1Manifest#cert_secret}
  */
  readonly certSecret?: string;
  /**
  * InsecureSkipVerify defines whether the server certificates should be validated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#insecure_skip_verify DataK8STraefikIoMiddlewareV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTlsToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_optional: cdktf.booleanToTerraform(struct!.caOptional),
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    cert_secret: cdktf.stringToTerraform(struct!.certSecret),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTlsToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_optional: {
      value: cdktf.booleanToHclTerraform(struct!.caOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_secret: {
      value: cdktf.stringToHclTerraform(struct!.certSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.caOptional = this._caOptional;
    }
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._certSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecret = this._certSecret;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caOptional = undefined;
      this._caSecret = undefined;
      this._certSecret = undefined;
      this._insecureSkipVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caOptional = value.caOptional;
      this._caSecret = value.caSecret;
      this._certSecret = value.certSecret;
      this._insecureSkipVerify = value.insecureSkipVerify;
    }
  }

  // ca_optional - computed: false, optional: true, required: false
  private _caOptional?: boolean | cdktf.IResolvable; 
  public get caOptional() {
    return this.getBooleanAttribute('ca_optional');
  }
  public set caOptional(value: boolean | cdktf.IResolvable) {
    this._caOptional = value;
  }
  public resetCaOptional() {
    this._caOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionalInput() {
    return this._caOptional;
  }

  // ca_secret - computed: false, optional: true, required: false
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  public resetCaSecret() {
    this._caSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // cert_secret - computed: false, optional: true, required: false
  private _certSecret?: string; 
  public get certSecret() {
    return this.getStringAttribute('cert_secret');
  }
  public set certSecret(value: string) {
    this._certSecret = value;
  }
  public resetCertSecret() {
    this._certSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretInput() {
    return this._certSecret;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth {
  /**
  * AddAuthCookiesToResponse defines the list of cookies to copy from the authentication server response to the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#add_auth_cookies_to_response DataK8STraefikIoMiddlewareV1Alpha1Manifest#add_auth_cookies_to_response}
  */
  readonly addAuthCookiesToResponse?: string[];
  /**
  * Address defines the authentication server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#address DataK8STraefikIoMiddlewareV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server. If not set or empty then all request headers are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#auth_request_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#auth_request_headers}
  */
  readonly authRequestHeaders?: string[];
  /**
  * AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#auth_response_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#auth_response_headers}
  */
  readonly authResponseHeaders?: string[];
  /**
  * AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/forwardauth/#authresponseheadersregex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#auth_response_headers_regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#auth_response_headers_regex}
  */
  readonly authResponseHeadersRegex?: string;
  /**
  * TLS defines the configuration used to secure the connection to the authentication server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#tls DataK8STraefikIoMiddlewareV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls;
  /**
  * TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-* headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#trust_forward_header DataK8STraefikIoMiddlewareV1Alpha1Manifest#trust_forward_header}
  */
  readonly trustForwardHeader?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_auth_cookies_to_response: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addAuthCookiesToResponse),
    address: cdktf.stringToTerraform(struct!.address),
    auth_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authRequestHeaders),
    auth_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authResponseHeaders),
    auth_response_headers_regex: cdktf.stringToTerraform(struct!.authResponseHeadersRegex),
    tls: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTlsToTerraform(struct!.tls),
    trust_forward_header: cdktf.booleanToTerraform(struct!.trustForwardHeader),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_auth_cookies_to_response: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addAuthCookiesToResponse),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_response_headers_regex: {
      value: cdktf.stringToHclTerraform(struct!.authResponseHeadersRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls",
    },
    trust_forward_header: {
      value: cdktf.booleanToHclTerraform(struct!.trustForwardHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addAuthCookiesToResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.addAuthCookiesToResponse = this._addAuthCookiesToResponse;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequestHeaders = this._authRequestHeaders;
    }
    if (this._authResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.authResponseHeaders = this._authResponseHeaders;
    }
    if (this._authResponseHeadersRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.authResponseHeadersRegex = this._authResponseHeadersRegex;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._trustForwardHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustForwardHeader = this._trustForwardHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addAuthCookiesToResponse = undefined;
      this._address = undefined;
      this._authRequestHeaders = undefined;
      this._authResponseHeaders = undefined;
      this._authResponseHeadersRegex = undefined;
      this._tls.internalValue = undefined;
      this._trustForwardHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addAuthCookiesToResponse = value.addAuthCookiesToResponse;
      this._address = value.address;
      this._authRequestHeaders = value.authRequestHeaders;
      this._authResponseHeaders = value.authResponseHeaders;
      this._authResponseHeadersRegex = value.authResponseHeadersRegex;
      this._tls.internalValue = value.tls;
      this._trustForwardHeader = value.trustForwardHeader;
    }
  }

  // add_auth_cookies_to_response - computed: false, optional: true, required: false
  private _addAuthCookiesToResponse?: string[]; 
  public get addAuthCookiesToResponse() {
    return this.getListAttribute('add_auth_cookies_to_response');
  }
  public set addAuthCookiesToResponse(value: string[]) {
    this._addAuthCookiesToResponse = value;
  }
  public resetAddAuthCookiesToResponse() {
    this._addAuthCookiesToResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAuthCookiesToResponseInput() {
    return this._addAuthCookiesToResponse;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_request_headers - computed: false, optional: true, required: false
  private _authRequestHeaders?: string[]; 
  public get authRequestHeaders() {
    return this.getListAttribute('auth_request_headers');
  }
  public set authRequestHeaders(value: string[]) {
    this._authRequestHeaders = value;
  }
  public resetAuthRequestHeaders() {
    this._authRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestHeadersInput() {
    return this._authRequestHeaders;
  }

  // auth_response_headers - computed: false, optional: true, required: false
  private _authResponseHeaders?: string[]; 
  public get authResponseHeaders() {
    return this.getListAttribute('auth_response_headers');
  }
  public set authResponseHeaders(value: string[]) {
    this._authResponseHeaders = value;
  }
  public resetAuthResponseHeaders() {
    this._authResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authResponseHeadersInput() {
    return this._authResponseHeaders;
  }

  // auth_response_headers_regex - computed: false, optional: true, required: false
  private _authResponseHeadersRegex?: string; 
  public get authResponseHeadersRegex() {
    return this.getStringAttribute('auth_response_headers_regex');
  }
  public set authResponseHeadersRegex(value: string) {
    this._authResponseHeadersRegex = value;
  }
  public resetAuthResponseHeadersRegex() {
    this._authResponseHeadersRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authResponseHeadersRegexInput() {
    return this._authResponseHeadersRegex;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // trust_forward_header - computed: false, optional: true, required: false
  private _trustForwardHeader?: boolean | cdktf.IResolvable; 
  public get trustForwardHeader() {
    return this.getBooleanAttribute('trust_forward_header');
  }
  public set trustForwardHeader(value: boolean | cdktf.IResolvable) {
    this._trustForwardHeader = value;
  }
  public resetTrustForwardHeader() {
    this._trustForwardHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustForwardHeaderInput() {
    return this._trustForwardHeader;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb {
  /**
  * AllowOrigins is a list of allowable origins. Can also be a wildcard origin '*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#allow_origins DataK8STraefikIoMiddlewareV1Alpha1Manifest#allow_origins}
  */
  readonly allowOrigins?: string[];
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWebToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWebToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowOrigins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowOrigins = value.allowOrigins;
    }
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders {
  /**
  * AccessControlAllowCredentials defines whether the request can include user credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_allow_credentials DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials?: boolean | cdktf.IResolvable;
  /**
  * AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_allow_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders?: string[];
  /**
  * AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_allow_methods DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_allow_methods}
  */
  readonly accessControlAllowMethods?: string[];
  /**
  * AccessControlAllowOriginList is a list of allowable origins. Can also be a wildcard origin '*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_allow_origin_list DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_allow_origin_list}
  */
  readonly accessControlAllowOriginList?: string[];
  /**
  * AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_allow_origin_list_regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_allow_origin_list_regex}
  */
  readonly accessControlAllowOriginListRegex?: string[];
  /**
  * AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_expose_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: string[];
  /**
  * AccessControlMaxAge defines the time that a preflight request may be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#access_control_max_age DataK8STraefikIoMiddlewareV1Alpha1Manifest#access_control_max_age}
  */
  readonly accessControlMaxAge?: number;
  /**
  * AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#add_vary_header DataK8STraefikIoMiddlewareV1Alpha1Manifest#add_vary_header}
  */
  readonly addVaryHeader?: boolean | cdktf.IResolvable;
  /**
  * AllowedHosts defines the fully qualified list of allowed domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#allowed_hosts DataK8STraefikIoMiddlewareV1Alpha1Manifest#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1; mode=block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#browser_xss_filter DataK8STraefikIoMiddlewareV1Alpha1Manifest#browser_xss_filter}
  */
  readonly browserXssFilter?: boolean | cdktf.IResolvable;
  /**
  * ContentSecurityPolicy defines the Content-Security-Policy header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#content_security_policy DataK8STraefikIoMiddlewareV1Alpha1Manifest#content_security_policy}
  */
  readonly contentSecurityPolicy?: string;
  /**
  * ContentSecurityPolicyReportOnly defines the Content-Security-Policy-Report-Only header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#content_security_policy_report_only DataK8STraefikIoMiddlewareV1Alpha1Manifest#content_security_policy_report_only}
  */
  readonly contentSecurityPolicyReportOnly?: string;
  /**
  * ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#content_type_nosniff DataK8STraefikIoMiddlewareV1Alpha1Manifest#content_type_nosniff}
  */
  readonly contentTypeNosniff?: boolean | cdktf.IResolvable;
  /**
  * CustomBrowserXSSValue defines the X-XSS-Protection header value. This overrides the BrowserXssFilter option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#custom_browser_xss_value DataK8STraefikIoMiddlewareV1Alpha1Manifest#custom_browser_xss_value}
  */
  readonly customBrowserXssValue?: string;
  /**
  * CustomFrameOptionsValue defines the X-Frame-Options header value. This overrides the FrameDeny option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#custom_frame_options_value DataK8STraefikIoMiddlewareV1Alpha1Manifest#custom_frame_options_value}
  */
  readonly customFrameOptionsValue?: string;
  /**
  * CustomRequestHeaders defines the header names and values to apply to the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#custom_request_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#custom_request_headers}
  */
  readonly customRequestHeaders?: { [key: string]: string };
  /**
  * CustomResponseHeaders defines the header names and values to apply to the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#custom_response_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#custom_response_headers}
  */
  readonly customResponseHeaders?: { [key: string]: string };
  /**
  * Deprecated: FeaturePolicy option is deprecated, please use PermissionsPolicy instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#feature_policy DataK8STraefikIoMiddlewareV1Alpha1Manifest#feature_policy}
  */
  readonly featurePolicy?: string;
  /**
  * ForceSTSHeader defines whether to add the STS header even when the connection is HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#force_sts_header DataK8STraefikIoMiddlewareV1Alpha1Manifest#force_sts_header}
  */
  readonly forceStsHeader?: boolean | cdktf.IResolvable;
  /**
  * FrameDeny defines whether to add the X-Frame-Options header with the DENY value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#frame_deny DataK8STraefikIoMiddlewareV1Alpha1Manifest#frame_deny}
  */
  readonly frameDeny?: boolean | cdktf.IResolvable;
  /**
  * HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#hosts_proxy_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#hosts_proxy_headers}
  */
  readonly hostsProxyHeaders?: string[];
  /**
  * IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing. Usually testing takes place using HTTP, not HTTPS, and on localhost, not your production domain. If you would like your development environment to mimic production with complete Host blocking, SSL redirects, and STS headers, leave this as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#is_development DataK8STraefikIoMiddlewareV1Alpha1Manifest#is_development}
  */
  readonly isDevelopment?: boolean | cdktf.IResolvable;
  /**
  * PermissionsPolicy defines the Permissions-Policy header value. This allows sites to control browser features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#permissions_policy DataK8STraefikIoMiddlewareV1Alpha1Manifest#permissions_policy}
  */
  readonly permissionsPolicy?: string;
  /**
  * PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#public_key DataK8STraefikIoMiddlewareV1Alpha1Manifest#public_key}
  */
  readonly publicKey?: string;
  /**
  * ReferrerPolicy defines the Referrer-Policy header value. This allows sites to control whether browsers forward the Referer header to other sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#referrer_policy DataK8STraefikIoMiddlewareV1Alpha1Manifest#referrer_policy}
  */
  readonly referrerPolicy?: string;
  /**
  * Deprecated: SSLForceHost option is deprecated, please use RedirectRegex instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ssl_force_host DataK8STraefikIoMiddlewareV1Alpha1Manifest#ssl_force_host}
  */
  readonly sslForceHost?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: SSLHost option is deprecated, please use RedirectRegex instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ssl_host DataK8STraefikIoMiddlewareV1Alpha1Manifest#ssl_host}
  */
  readonly sslHost?: string;
  /**
  * SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request. It can be useful when using other proxies (example: 'X-Forwarded-Proto': 'https').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ssl_proxy_headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#ssl_proxy_headers}
  */
  readonly sslProxyHeaders?: { [key: string]: string };
  /**
  * Deprecated: SSLRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ssl_redirect DataK8STraefikIoMiddlewareV1Alpha1Manifest#ssl_redirect}
  */
  readonly sslRedirect?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: SSLTemporaryRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ssl_temporary_redirect DataK8STraefikIoMiddlewareV1Alpha1Manifest#ssl_temporary_redirect}
  */
  readonly sslTemporaryRedirect?: boolean | cdktf.IResolvable;
  /**
  * STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#sts_include_subdomains DataK8STraefikIoMiddlewareV1Alpha1Manifest#sts_include_subdomains}
  */
  readonly stsIncludeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#sts_preload DataK8STraefikIoMiddlewareV1Alpha1Manifest#sts_preload}
  */
  readonly stsPreload?: boolean | cdktf.IResolvable;
  /**
  * STSSeconds defines the max-age of the Strict-Transport-Security header. If set to 0, the header is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#sts_seconds DataK8STraefikIoMiddlewareV1Alpha1Manifest#sts_seconds}
  */
  readonly stsSeconds?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeadersToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_allow_credentials: cdktf.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessControlAllowHeaders),
    access_control_allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessControlAllowMethods),
    access_control_allow_origin_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessControlAllowOriginList),
    access_control_allow_origin_list_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessControlAllowOriginListRegex),
    access_control_expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessControlExposeHeaders),
    access_control_max_age: cdktf.numberToTerraform(struct!.accessControlMaxAge),
    add_vary_header: cdktf.booleanToTerraform(struct!.addVaryHeader),
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    browser_xss_filter: cdktf.booleanToTerraform(struct!.browserXssFilter),
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    content_security_policy_report_only: cdktf.stringToTerraform(struct!.contentSecurityPolicyReportOnly),
    content_type_nosniff: cdktf.booleanToTerraform(struct!.contentTypeNosniff),
    custom_browser_xss_value: cdktf.stringToTerraform(struct!.customBrowserXssValue),
    custom_frame_options_value: cdktf.stringToTerraform(struct!.customFrameOptionsValue),
    custom_request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customRequestHeaders),
    custom_response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customResponseHeaders),
    feature_policy: cdktf.stringToTerraform(struct!.featurePolicy),
    force_sts_header: cdktf.booleanToTerraform(struct!.forceStsHeader),
    frame_deny: cdktf.booleanToTerraform(struct!.frameDeny),
    hosts_proxy_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostsProxyHeaders),
    is_development: cdktf.booleanToTerraform(struct!.isDevelopment),
    permissions_policy: cdktf.stringToTerraform(struct!.permissionsPolicy),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    referrer_policy: cdktf.stringToTerraform(struct!.referrerPolicy),
    ssl_force_host: cdktf.booleanToTerraform(struct!.sslForceHost),
    ssl_host: cdktf.stringToTerraform(struct!.sslHost),
    ssl_proxy_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sslProxyHeaders),
    ssl_redirect: cdktf.booleanToTerraform(struct!.sslRedirect),
    ssl_temporary_redirect: cdktf.booleanToTerraform(struct!.sslTemporaryRedirect),
    sts_include_subdomains: cdktf.booleanToTerraform(struct!.stsIncludeSubdomains),
    sts_preload: cdktf.booleanToTerraform(struct!.stsPreload),
    sts_seconds: cdktf.numberToTerraform(struct!.stsSeconds),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeadersToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessControlAllowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_control_allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessControlAllowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_control_allow_origin_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessControlAllowOriginList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_control_allow_origin_list_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessControlAllowOriginListRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_control_expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessControlExposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_control_max_age: {
      value: cdktf.numberToHclTerraform(struct!.accessControlMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    add_vary_header: {
      value: cdktf.booleanToHclTerraform(struct!.addVaryHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    browser_xss_filter: {
      value: cdktf.booleanToHclTerraform(struct!.browserXssFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_security_policy_report_only: {
      value: cdktf.stringToHclTerraform(struct!.contentSecurityPolicyReportOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_nosniff: {
      value: cdktf.booleanToHclTerraform(struct!.contentTypeNosniff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_browser_xss_value: {
      value: cdktf.stringToHclTerraform(struct!.customBrowserXssValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_frame_options_value: {
      value: cdktf.stringToHclTerraform(struct!.customFrameOptionsValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customRequestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_response_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customResponseHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    feature_policy: {
      value: cdktf.stringToHclTerraform(struct!.featurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_sts_header: {
      value: cdktf.booleanToHclTerraform(struct!.forceStsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frame_deny: {
      value: cdktf.booleanToHclTerraform(struct!.frameDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts_proxy_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostsProxyHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_development: {
      value: cdktf.booleanToHclTerraform(struct!.isDevelopment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissions_policy: {
      value: cdktf.stringToHclTerraform(struct!.permissionsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referrer_policy: {
      value: cdktf.stringToHclTerraform(struct!.referrerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_force_host: {
      value: cdktf.booleanToHclTerraform(struct!.sslForceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_host: {
      value: cdktf.stringToHclTerraform(struct!.sslHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_proxy_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sslProxyHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssl_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.sslRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_temporary_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.sslTemporaryRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sts_include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.stsIncludeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sts_preload: {
      value: cdktf.booleanToHclTerraform(struct!.stsPreload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sts_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stsSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlAllowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
    }
    if (this._accessControlAllowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders;
    }
    if (this._accessControlAllowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods;
    }
    if (this._accessControlAllowOriginList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowOriginList = this._accessControlAllowOriginList;
    }
    if (this._accessControlAllowOriginListRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowOriginListRegex = this._accessControlAllowOriginListRegex;
    }
    if (this._accessControlExposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders;
    }
    if (this._accessControlMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAge = this._accessControlMaxAge;
    }
    if (this._addVaryHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addVaryHeader = this._addVaryHeader;
    }
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._browserXssFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserXssFilter = this._browserXssFilter;
    }
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._contentSecurityPolicyReportOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicyReportOnly = this._contentSecurityPolicyReportOnly;
    }
    if (this._contentTypeNosniff !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeNosniff = this._contentTypeNosniff;
    }
    if (this._customBrowserXssValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBrowserXssValue = this._customBrowserXssValue;
    }
    if (this._customFrameOptionsValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFrameOptionsValue = this._customFrameOptionsValue;
    }
    if (this._customRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHeaders = this._customRequestHeaders;
    }
    if (this._customResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseHeaders = this._customResponseHeaders;
    }
    if (this._featurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.featurePolicy = this._featurePolicy;
    }
    if (this._forceStsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceStsHeader = this._forceStsHeader;
    }
    if (this._frameDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameDeny = this._frameDeny;
    }
    if (this._hostsProxyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsProxyHeaders = this._hostsProxyHeaders;
    }
    if (this._isDevelopment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDevelopment = this._isDevelopment;
    }
    if (this._permissionsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionsPolicy = this._permissionsPolicy;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._referrerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy;
    }
    if (this._sslForceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslForceHost = this._sslForceHost;
    }
    if (this._sslHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHost = this._sslHost;
    }
    if (this._sslProxyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProxyHeaders = this._sslProxyHeaders;
    }
    if (this._sslRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRedirect = this._sslRedirect;
    }
    if (this._sslTemporaryRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTemporaryRedirect = this._sslTemporaryRedirect;
    }
    if (this._stsIncludeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsIncludeSubdomains = this._stsIncludeSubdomains;
    }
    if (this._stsPreload !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsPreload = this._stsPreload;
    }
    if (this._stsSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsSeconds = this._stsSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlAllowCredentials = undefined;
      this._accessControlAllowHeaders = undefined;
      this._accessControlAllowMethods = undefined;
      this._accessControlAllowOriginList = undefined;
      this._accessControlAllowOriginListRegex = undefined;
      this._accessControlExposeHeaders = undefined;
      this._accessControlMaxAge = undefined;
      this._addVaryHeader = undefined;
      this._allowedHosts = undefined;
      this._browserXssFilter = undefined;
      this._contentSecurityPolicy = undefined;
      this._contentSecurityPolicyReportOnly = undefined;
      this._contentTypeNosniff = undefined;
      this._customBrowserXssValue = undefined;
      this._customFrameOptionsValue = undefined;
      this._customRequestHeaders = undefined;
      this._customResponseHeaders = undefined;
      this._featurePolicy = undefined;
      this._forceStsHeader = undefined;
      this._frameDeny = undefined;
      this._hostsProxyHeaders = undefined;
      this._isDevelopment = undefined;
      this._permissionsPolicy = undefined;
      this._publicKey = undefined;
      this._referrerPolicy = undefined;
      this._sslForceHost = undefined;
      this._sslHost = undefined;
      this._sslProxyHeaders = undefined;
      this._sslRedirect = undefined;
      this._sslTemporaryRedirect = undefined;
      this._stsIncludeSubdomains = undefined;
      this._stsPreload = undefined;
      this._stsSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlAllowCredentials = value.accessControlAllowCredentials;
      this._accessControlAllowHeaders = value.accessControlAllowHeaders;
      this._accessControlAllowMethods = value.accessControlAllowMethods;
      this._accessControlAllowOriginList = value.accessControlAllowOriginList;
      this._accessControlAllowOriginListRegex = value.accessControlAllowOriginListRegex;
      this._accessControlExposeHeaders = value.accessControlExposeHeaders;
      this._accessControlMaxAge = value.accessControlMaxAge;
      this._addVaryHeader = value.addVaryHeader;
      this._allowedHosts = value.allowedHosts;
      this._browserXssFilter = value.browserXssFilter;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._contentSecurityPolicyReportOnly = value.contentSecurityPolicyReportOnly;
      this._contentTypeNosniff = value.contentTypeNosniff;
      this._customBrowserXssValue = value.customBrowserXssValue;
      this._customFrameOptionsValue = value.customFrameOptionsValue;
      this._customRequestHeaders = value.customRequestHeaders;
      this._customResponseHeaders = value.customResponseHeaders;
      this._featurePolicy = value.featurePolicy;
      this._forceStsHeader = value.forceStsHeader;
      this._frameDeny = value.frameDeny;
      this._hostsProxyHeaders = value.hostsProxyHeaders;
      this._isDevelopment = value.isDevelopment;
      this._permissionsPolicy = value.permissionsPolicy;
      this._publicKey = value.publicKey;
      this._referrerPolicy = value.referrerPolicy;
      this._sslForceHost = value.sslForceHost;
      this._sslHost = value.sslHost;
      this._sslProxyHeaders = value.sslProxyHeaders;
      this._sslRedirect = value.sslRedirect;
      this._sslTemporaryRedirect = value.sslTemporaryRedirect;
      this._stsIncludeSubdomains = value.stsIncludeSubdomains;
      this._stsPreload = value.stsPreload;
      this._stsSeconds = value.stsSeconds;
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
  private _accessControlAllowHeaders?: string[]; 
  public get accessControlAllowHeaders() {
    return this.getListAttribute('access_control_allow_headers');
  }
  public set accessControlAllowHeaders(value: string[]) {
    this._accessControlAllowHeaders = value;
  }
  public resetAccessControlAllowHeaders() {
    this._accessControlAllowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowHeadersInput() {
    return this._accessControlAllowHeaders;
  }

  // access_control_allow_methods - computed: false, optional: true, required: false
  private _accessControlAllowMethods?: string[]; 
  public get accessControlAllowMethods() {
    return this.getListAttribute('access_control_allow_methods');
  }
  public set accessControlAllowMethods(value: string[]) {
    this._accessControlAllowMethods = value;
  }
  public resetAccessControlAllowMethods() {
    this._accessControlAllowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowMethodsInput() {
    return this._accessControlAllowMethods;
  }

  // access_control_allow_origin_list - computed: false, optional: true, required: false
  private _accessControlAllowOriginList?: string[]; 
  public get accessControlAllowOriginList() {
    return this.getListAttribute('access_control_allow_origin_list');
  }
  public set accessControlAllowOriginList(value: string[]) {
    this._accessControlAllowOriginList = value;
  }
  public resetAccessControlAllowOriginList() {
    this._accessControlAllowOriginList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginListInput() {
    return this._accessControlAllowOriginList;
  }

  // access_control_allow_origin_list_regex - computed: false, optional: true, required: false
  private _accessControlAllowOriginListRegex?: string[]; 
  public get accessControlAllowOriginListRegex() {
    return this.getListAttribute('access_control_allow_origin_list_regex');
  }
  public set accessControlAllowOriginListRegex(value: string[]) {
    this._accessControlAllowOriginListRegex = value;
  }
  public resetAccessControlAllowOriginListRegex() {
    this._accessControlAllowOriginListRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginListRegexInput() {
    return this._accessControlAllowOriginListRegex;
  }

  // access_control_expose_headers - computed: false, optional: true, required: false
  private _accessControlExposeHeaders?: string[]; 
  public get accessControlExposeHeaders() {
    return this.getListAttribute('access_control_expose_headers');
  }
  public set accessControlExposeHeaders(value: string[]) {
    this._accessControlExposeHeaders = value;
  }
  public resetAccessControlExposeHeaders() {
    this._accessControlExposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlExposeHeadersInput() {
    return this._accessControlExposeHeaders;
  }

  // access_control_max_age - computed: false, optional: true, required: false
  private _accessControlMaxAge?: number; 
  public get accessControlMaxAge() {
    return this.getNumberAttribute('access_control_max_age');
  }
  public set accessControlMaxAge(value: number) {
    this._accessControlMaxAge = value;
  }
  public resetAccessControlMaxAge() {
    this._accessControlMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeInput() {
    return this._accessControlMaxAge;
  }

  // add_vary_header - computed: false, optional: true, required: false
  private _addVaryHeader?: boolean | cdktf.IResolvable; 
  public get addVaryHeader() {
    return this.getBooleanAttribute('add_vary_header');
  }
  public set addVaryHeader(value: boolean | cdktf.IResolvable) {
    this._addVaryHeader = value;
  }
  public resetAddVaryHeader() {
    this._addVaryHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVaryHeaderInput() {
    return this._addVaryHeader;
  }

  // allowed_hosts - computed: false, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // browser_xss_filter - computed: false, optional: true, required: false
  private _browserXssFilter?: boolean | cdktf.IResolvable; 
  public get browserXssFilter() {
    return this.getBooleanAttribute('browser_xss_filter');
  }
  public set browserXssFilter(value: boolean | cdktf.IResolvable) {
    this._browserXssFilter = value;
  }
  public resetBrowserXssFilter() {
    this._browserXssFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserXssFilterInput() {
    return this._browserXssFilter;
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

  // content_security_policy_report_only - computed: false, optional: true, required: false
  private _contentSecurityPolicyReportOnly?: string; 
  public get contentSecurityPolicyReportOnly() {
    return this.getStringAttribute('content_security_policy_report_only');
  }
  public set contentSecurityPolicyReportOnly(value: string) {
    this._contentSecurityPolicyReportOnly = value;
  }
  public resetContentSecurityPolicyReportOnly() {
    this._contentSecurityPolicyReportOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyReportOnlyInput() {
    return this._contentSecurityPolicyReportOnly;
  }

  // content_type_nosniff - computed: false, optional: true, required: false
  private _contentTypeNosniff?: boolean | cdktf.IResolvable; 
  public get contentTypeNosniff() {
    return this.getBooleanAttribute('content_type_nosniff');
  }
  public set contentTypeNosniff(value: boolean | cdktf.IResolvable) {
    this._contentTypeNosniff = value;
  }
  public resetContentTypeNosniff() {
    this._contentTypeNosniff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeNosniffInput() {
    return this._contentTypeNosniff;
  }

  // custom_browser_xss_value - computed: false, optional: true, required: false
  private _customBrowserXssValue?: string; 
  public get customBrowserXssValue() {
    return this.getStringAttribute('custom_browser_xss_value');
  }
  public set customBrowserXssValue(value: string) {
    this._customBrowserXssValue = value;
  }
  public resetCustomBrowserXssValue() {
    this._customBrowserXssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBrowserXssValueInput() {
    return this._customBrowserXssValue;
  }

  // custom_frame_options_value - computed: false, optional: true, required: false
  private _customFrameOptionsValue?: string; 
  public get customFrameOptionsValue() {
    return this.getStringAttribute('custom_frame_options_value');
  }
  public set customFrameOptionsValue(value: string) {
    this._customFrameOptionsValue = value;
  }
  public resetCustomFrameOptionsValue() {
    this._customFrameOptionsValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFrameOptionsValueInput() {
    return this._customFrameOptionsValue;
  }

  // custom_request_headers - computed: false, optional: true, required: false
  private _customRequestHeaders?: { [key: string]: string }; 
  public get customRequestHeaders() {
    return this.getStringMapAttribute('custom_request_headers');
  }
  public set customRequestHeaders(value: { [key: string]: string }) {
    this._customRequestHeaders = value;
  }
  public resetCustomRequestHeaders() {
    this._customRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHeadersInput() {
    return this._customRequestHeaders;
  }

  // custom_response_headers - computed: false, optional: true, required: false
  private _customResponseHeaders?: { [key: string]: string }; 
  public get customResponseHeaders() {
    return this.getStringMapAttribute('custom_response_headers');
  }
  public set customResponseHeaders(value: { [key: string]: string }) {
    this._customResponseHeaders = value;
  }
  public resetCustomResponseHeaders() {
    this._customResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseHeadersInput() {
    return this._customResponseHeaders;
  }

  // feature_policy - computed: false, optional: true, required: false
  private _featurePolicy?: string; 
  public get featurePolicy() {
    return this.getStringAttribute('feature_policy');
  }
  public set featurePolicy(value: string) {
    this._featurePolicy = value;
  }
  public resetFeaturePolicy() {
    this._featurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePolicyInput() {
    return this._featurePolicy;
  }

  // force_sts_header - computed: false, optional: true, required: false
  private _forceStsHeader?: boolean | cdktf.IResolvable; 
  public get forceStsHeader() {
    return this.getBooleanAttribute('force_sts_header');
  }
  public set forceStsHeader(value: boolean | cdktf.IResolvable) {
    this._forceStsHeader = value;
  }
  public resetForceStsHeader() {
    this._forceStsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStsHeaderInput() {
    return this._forceStsHeader;
  }

  // frame_deny - computed: false, optional: true, required: false
  private _frameDeny?: boolean | cdktf.IResolvable; 
  public get frameDeny() {
    return this.getBooleanAttribute('frame_deny');
  }
  public set frameDeny(value: boolean | cdktf.IResolvable) {
    this._frameDeny = value;
  }
  public resetFrameDeny() {
    this._frameDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameDenyInput() {
    return this._frameDeny;
  }

  // hosts_proxy_headers - computed: false, optional: true, required: false
  private _hostsProxyHeaders?: string[]; 
  public get hostsProxyHeaders() {
    return this.getListAttribute('hosts_proxy_headers');
  }
  public set hostsProxyHeaders(value: string[]) {
    this._hostsProxyHeaders = value;
  }
  public resetHostsProxyHeaders() {
    this._hostsProxyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsProxyHeadersInput() {
    return this._hostsProxyHeaders;
  }

  // is_development - computed: false, optional: true, required: false
  private _isDevelopment?: boolean | cdktf.IResolvable; 
  public get isDevelopment() {
    return this.getBooleanAttribute('is_development');
  }
  public set isDevelopment(value: boolean | cdktf.IResolvable) {
    this._isDevelopment = value;
  }
  public resetIsDevelopment() {
    this._isDevelopment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDevelopmentInput() {
    return this._isDevelopment;
  }

  // permissions_policy - computed: false, optional: true, required: false
  private _permissionsPolicy?: string; 
  public get permissionsPolicy() {
    return this.getStringAttribute('permissions_policy');
  }
  public set permissionsPolicy(value: string) {
    this._permissionsPolicy = value;
  }
  public resetPermissionsPolicy() {
    this._permissionsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsPolicyInput() {
    return this._permissionsPolicy;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
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

  // ssl_force_host - computed: false, optional: true, required: false
  private _sslForceHost?: boolean | cdktf.IResolvable; 
  public get sslForceHost() {
    return this.getBooleanAttribute('ssl_force_host');
  }
  public set sslForceHost(value: boolean | cdktf.IResolvable) {
    this._sslForceHost = value;
  }
  public resetSslForceHost() {
    this._sslForceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForceHostInput() {
    return this._sslForceHost;
  }

  // ssl_host - computed: false, optional: true, required: false
  private _sslHost?: string; 
  public get sslHost() {
    return this.getStringAttribute('ssl_host');
  }
  public set sslHost(value: string) {
    this._sslHost = value;
  }
  public resetSslHost() {
    this._sslHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHostInput() {
    return this._sslHost;
  }

  // ssl_proxy_headers - computed: false, optional: true, required: false
  private _sslProxyHeaders?: { [key: string]: string }; 
  public get sslProxyHeaders() {
    return this.getStringMapAttribute('ssl_proxy_headers');
  }
  public set sslProxyHeaders(value: { [key: string]: string }) {
    this._sslProxyHeaders = value;
  }
  public resetSslProxyHeaders() {
    this._sslProxyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProxyHeadersInput() {
    return this._sslProxyHeaders;
  }

  // ssl_redirect - computed: false, optional: true, required: false
  private _sslRedirect?: boolean | cdktf.IResolvable; 
  public get sslRedirect() {
    return this.getBooleanAttribute('ssl_redirect');
  }
  public set sslRedirect(value: boolean | cdktf.IResolvable) {
    this._sslRedirect = value;
  }
  public resetSslRedirect() {
    this._sslRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRedirectInput() {
    return this._sslRedirect;
  }

  // ssl_temporary_redirect - computed: false, optional: true, required: false
  private _sslTemporaryRedirect?: boolean | cdktf.IResolvable; 
  public get sslTemporaryRedirect() {
    return this.getBooleanAttribute('ssl_temporary_redirect');
  }
  public set sslTemporaryRedirect(value: boolean | cdktf.IResolvable) {
    this._sslTemporaryRedirect = value;
  }
  public resetSslTemporaryRedirect() {
    this._sslTemporaryRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTemporaryRedirectInput() {
    return this._sslTemporaryRedirect;
  }

  // sts_include_subdomains - computed: false, optional: true, required: false
  private _stsIncludeSubdomains?: boolean | cdktf.IResolvable; 
  public get stsIncludeSubdomains() {
    return this.getBooleanAttribute('sts_include_subdomains');
  }
  public set stsIncludeSubdomains(value: boolean | cdktf.IResolvable) {
    this._stsIncludeSubdomains = value;
  }
  public resetStsIncludeSubdomains() {
    this._stsIncludeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsIncludeSubdomainsInput() {
    return this._stsIncludeSubdomains;
  }

  // sts_preload - computed: false, optional: true, required: false
  private _stsPreload?: boolean | cdktf.IResolvable; 
  public get stsPreload() {
    return this.getBooleanAttribute('sts_preload');
  }
  public set stsPreload(value: boolean | cdktf.IResolvable) {
    this._stsPreload = value;
  }
  public resetStsPreload() {
    this._stsPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsPreloadInput() {
    return this._stsPreload;
  }

  // sts_seconds - computed: false, optional: true, required: false
  private _stsSeconds?: number; 
  public get stsSeconds() {
    return this.getNumberAttribute('sts_seconds');
  }
  public set stsSeconds(value: number) {
    this._stsSeconds = value;
  }
  public resetStsSeconds() {
    this._stsSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsSecondsInput() {
    return this._stsSeconds;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy {
  /**
  * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#depth DataK8STraefikIoMiddlewareV1Alpha1Manifest#depth}
  */
  readonly depth?: number;
  /**
  * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#excluded_i_ps DataK8STraefikIoMiddlewareV1Alpha1Manifest#excluded_i_ps}
  */
  readonly excludedIPs?: string[];
  /**
  * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ipv6_subnet DataK8STraefikIoMiddlewareV1Alpha1Manifest#ipv6_subnet}
  */
  readonly ipv6Subnet?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategyToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.numberToTerraform(struct!.depth),
    excluded_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedIPs),
    ipv6_subnet: cdktf.numberToTerraform(struct!.ipv6Subnet),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategyToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._excludedIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIPs = this._excludedIPs;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._depth = undefined;
      this._excludedIPs = undefined;
      this._ipv6Subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._depth = value.depth;
      this._excludedIPs = value.excludedIPs;
      this._ipv6Subnet = value.ipv6Subnet;
    }
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // excluded_i_ps - computed: false, optional: true, required: false
  private _excludedIPs?: string[]; 
  public get excludedIPs() {
    return this.getListAttribute('excluded_i_ps');
  }
  public set excludedIPs(value: string[]) {
    this._excludedIPs = value;
  }
  public resetExcludedIPs() {
    this._excludedIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIPsInput() {
    return this._excludedIPs;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: number; 
  public get ipv6Subnet() {
    return this.getNumberAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: number) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion {
  /**
  * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/ipallowlist/#ipstrategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ip_strategy DataK8STraefikIoMiddlewareV1Alpha1Manifest#ip_strategy}
  */
  readonly ipStrategy?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy;
  /**
  * RequestHeaderName defines the name of the header used to group incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#request_header_name DataK8STraefikIoMiddlewareV1Alpha1Manifest#request_header_name}
  */
  readonly requestHeaderName?: string;
  /**
  * RequestHost defines whether to consider the request Host as the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#request_host DataK8STraefikIoMiddlewareV1Alpha1Manifest#request_host}
  */
  readonly requestHost?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_strategy: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategyToTerraform(struct!.ipStrategy),
    request_header_name: cdktf.stringToTerraform(struct!.requestHeaderName),
    request_host: cdktf.booleanToTerraform(struct!.requestHost),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_strategy: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategyToHclTerraform(struct!.ipStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy",
    },
    request_header_name: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_host: {
      value: cdktf.booleanToHclTerraform(struct!.requestHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipStrategy = this._ipStrategy?.internalValue;
    }
    if (this._requestHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderName = this._requestHeaderName;
    }
    if (this._requestHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHost = this._requestHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = undefined;
      this._requestHeaderName = undefined;
      this._requestHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = value.ipStrategy;
      this._requestHeaderName = value.requestHeaderName;
      this._requestHost = value.requestHost;
    }
  }

  // ip_strategy - computed: false, optional: true, required: false
  private _ipStrategy = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategyOutputReference(this, "ip_strategy");
  public get ipStrategy() {
    return this._ipStrategy;
  }
  public putIpStrategy(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionIpStrategy) {
    this._ipStrategy.internalValue = value;
  }
  public resetIpStrategy() {
    this._ipStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStrategyInput() {
    return this._ipStrategy.internalValue;
  }

  // request_header_name - computed: false, optional: true, required: false
  private _requestHeaderName?: string; 
  public get requestHeaderName() {
    return this.getStringAttribute('request_header_name');
  }
  public set requestHeaderName(value: string) {
    this._requestHeaderName = value;
  }
  public resetRequestHeaderName() {
    this._requestHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderNameInput() {
    return this._requestHeaderName;
  }

  // request_host - computed: false, optional: true, required: false
  private _requestHost?: boolean | cdktf.IResolvable; 
  public get requestHost() {
    return this.getBooleanAttribute('request_host');
  }
  public set requestHost(value: boolean | cdktf.IResolvable) {
    this._requestHost = value;
  }
  public resetRequestHost() {
    this._requestHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHostInput() {
    return this._requestHost;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq {
  /**
  * Amount defines the maximum amount of allowed simultaneous in-flight request. The middleware responds with HTTP 429 Too Many Requests if there are already amount requests in progress (based on the same sourceCriterion strategy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#amount DataK8STraefikIoMiddlewareV1Alpha1Manifest#amount}
  */
  readonly amount?: number;
  /**
  * SourceCriterion defines what criterion is used to group requests as originating from a common source. If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the requestHost. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/inflightreq/#sourcecriterion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#source_criterion DataK8STraefikIoMiddlewareV1Alpha1Manifest#source_criterion}
  */
  readonly sourceCriterion?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    source_criterion: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionToTerraform(struct!.sourceCriterion),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_criterion: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionToHclTerraform(struct!.sourceCriterion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._sourceCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCriterion = this._sourceCriterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._sourceCriterion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._sourceCriterion.internalValue = value.sourceCriterion;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // source_criterion - computed: false, optional: true, required: false
  private _sourceCriterion = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterionOutputReference(this, "source_criterion");
  public get sourceCriterion() {
    return this._sourceCriterion;
  }
  public putSourceCriterion(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqSourceCriterion) {
    this._sourceCriterion.internalValue = value;
  }
  public resetSourceCriterion() {
    this._sourceCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCriterionInput() {
    return this._sourceCriterion.internalValue;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy {
  /**
  * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#depth DataK8STraefikIoMiddlewareV1Alpha1Manifest#depth}
  */
  readonly depth?: number;
  /**
  * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#excluded_i_ps DataK8STraefikIoMiddlewareV1Alpha1Manifest#excluded_i_ps}
  */
  readonly excludedIPs?: string[];
  /**
  * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ipv6_subnet DataK8STraefikIoMiddlewareV1Alpha1Manifest#ipv6_subnet}
  */
  readonly ipv6Subnet?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategyToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.numberToTerraform(struct!.depth),
    excluded_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedIPs),
    ipv6_subnet: cdktf.numberToTerraform(struct!.ipv6Subnet),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategyToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._excludedIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIPs = this._excludedIPs;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._depth = undefined;
      this._excludedIPs = undefined;
      this._ipv6Subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._depth = value.depth;
      this._excludedIPs = value.excludedIPs;
      this._ipv6Subnet = value.ipv6Subnet;
    }
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // excluded_i_ps - computed: false, optional: true, required: false
  private _excludedIPs?: string[]; 
  public get excludedIPs() {
    return this.getListAttribute('excluded_i_ps');
  }
  public set excludedIPs(value: string[]) {
    this._excludedIPs = value;
  }
  public resetExcludedIPs() {
    this._excludedIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIPsInput() {
    return this._excludedIPs;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: number; 
  public get ipv6Subnet() {
    return this.getNumberAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: number) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct {
  /**
  * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/ipallowlist/#ipstrategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ip_strategy DataK8STraefikIoMiddlewareV1Alpha1Manifest#ip_strategy}
  */
  readonly ipStrategy?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy;
  /**
  * RejectStatusCode defines the HTTP status code used for refused requests. If not set, the default is 403 (Forbidden).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#reject_status_code DataK8STraefikIoMiddlewareV1Alpha1Manifest#reject_status_code}
  */
  readonly rejectStatusCode?: number;
  /**
  * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#source_range DataK8STraefikIoMiddlewareV1Alpha1Manifest#source_range}
  */
  readonly sourceRange?: string[];
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStructToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_strategy: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategyToTerraform(struct!.ipStrategy),
    reject_status_code: cdktf.numberToTerraform(struct!.rejectStatusCode),
    source_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRange),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStructToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_strategy: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategyToHclTerraform(struct!.ipStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy",
    },
    reject_status_code: {
      value: cdktf.numberToHclTerraform(struct!.rejectStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipStrategy = this._ipStrategy?.internalValue;
    }
    if (this._rejectStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectStatusCode = this._rejectStatusCode;
    }
    if (this._sourceRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRange = this._sourceRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = undefined;
      this._rejectStatusCode = undefined;
      this._sourceRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = value.ipStrategy;
      this._rejectStatusCode = value.rejectStatusCode;
      this._sourceRange = value.sourceRange;
    }
  }

  // ip_strategy - computed: false, optional: true, required: false
  private _ipStrategy = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategyOutputReference(this, "ip_strategy");
  public get ipStrategy() {
    return this._ipStrategy;
  }
  public putIpStrategy(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListIpStrategy) {
    this._ipStrategy.internalValue = value;
  }
  public resetIpStrategy() {
    this._ipStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStrategyInput() {
    return this._ipStrategy.internalValue;
  }

  // reject_status_code - computed: false, optional: true, required: false
  private _rejectStatusCode?: number; 
  public get rejectStatusCode() {
    return this.getNumberAttribute('reject_status_code');
  }
  public set rejectStatusCode(value: number) {
    this._rejectStatusCode = value;
  }
  public resetRejectStatusCode() {
    this._rejectStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectStatusCodeInput() {
    return this._rejectStatusCode;
  }

  // source_range - computed: false, optional: true, required: false
  private _sourceRange?: string[]; 
  public get sourceRange() {
    return this.getListAttribute('source_range');
  }
  public set sourceRange(value: string[]) {
    this._sourceRange = value;
  }
  public resetSourceRange() {
    this._sourceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangeInput() {
    return this._sourceRange;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy {
  /**
  * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#depth DataK8STraefikIoMiddlewareV1Alpha1Manifest#depth}
  */
  readonly depth?: number;
  /**
  * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#excluded_i_ps DataK8STraefikIoMiddlewareV1Alpha1Manifest#excluded_i_ps}
  */
  readonly excludedIPs?: string[];
  /**
  * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ipv6_subnet DataK8STraefikIoMiddlewareV1Alpha1Manifest#ipv6_subnet}
  */
  readonly ipv6Subnet?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategyToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.numberToTerraform(struct!.depth),
    excluded_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedIPs),
    ipv6_subnet: cdktf.numberToTerraform(struct!.ipv6Subnet),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategyToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._excludedIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIPs = this._excludedIPs;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._depth = undefined;
      this._excludedIPs = undefined;
      this._ipv6Subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._depth = value.depth;
      this._excludedIPs = value.excludedIPs;
      this._ipv6Subnet = value.ipv6Subnet;
    }
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // excluded_i_ps - computed: false, optional: true, required: false
  private _excludedIPs?: string[]; 
  public get excludedIPs() {
    return this.getListAttribute('excluded_i_ps');
  }
  public set excludedIPs(value: string[]) {
    this._excludedIPs = value;
  }
  public resetExcludedIPs() {
    this._excludedIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIPsInput() {
    return this._excludedIPs;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: number; 
  public get ipv6Subnet() {
    return this.getNumberAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: number) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct {
  /**
  * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/ipallowlist/#ipstrategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ip_strategy DataK8STraefikIoMiddlewareV1Alpha1Manifest#ip_strategy}
  */
  readonly ipStrategy?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy;
  /**
  * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation). Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#source_range DataK8STraefikIoMiddlewareV1Alpha1Manifest#source_range}
  */
  readonly sourceRange?: string[];
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStructToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_strategy: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategyToTerraform(struct!.ipStrategy),
    source_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRange),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStructToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_strategy: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategyToHclTerraform(struct!.ipStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy",
    },
    source_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipStrategy = this._ipStrategy?.internalValue;
    }
    if (this._sourceRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRange = this._sourceRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = undefined;
      this._sourceRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = value.ipStrategy;
      this._sourceRange = value.sourceRange;
    }
  }

  // ip_strategy - computed: false, optional: true, required: false
  private _ipStrategy = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategyOutputReference(this, "ip_strategy");
  public get ipStrategy() {
    return this._ipStrategy;
  }
  public putIpStrategy(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListIpStrategy) {
    this._ipStrategy.internalValue = value;
  }
  public resetIpStrategy() {
    this._ipStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStrategyInput() {
    return this._ipStrategy.internalValue;
  }

  // source_range - computed: false, optional: true, required: false
  private _sourceRange?: string[]; 
  public get sourceRange() {
    return this.getListAttribute('source_range');
  }
  public set sourceRange(value: string[]) {
    this._sourceRange = value;
  }
  public resetSourceRange() {
    this._sourceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangeInput() {
    return this._sourceRange;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer {
  /**
  * CommonName defines whether to add the organizationalUnit information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#common_name DataK8STraefikIoMiddlewareV1Alpha1Manifest#common_name}
  */
  readonly commonName?: boolean | cdktf.IResolvable;
  /**
  * Country defines whether to add the country information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#country DataK8STraefikIoMiddlewareV1Alpha1Manifest#country}
  */
  readonly country?: boolean | cdktf.IResolvable;
  /**
  * DomainComponent defines whether to add the domainComponent information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#domain_component DataK8STraefikIoMiddlewareV1Alpha1Manifest#domain_component}
  */
  readonly domainComponent?: boolean | cdktf.IResolvable;
  /**
  * Locality defines whether to add the locality information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#locality DataK8STraefikIoMiddlewareV1Alpha1Manifest#locality}
  */
  readonly locality?: boolean | cdktf.IResolvable;
  /**
  * Organization defines whether to add the organization information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#organization DataK8STraefikIoMiddlewareV1Alpha1Manifest#organization}
  */
  readonly organization?: boolean | cdktf.IResolvable;
  /**
  * Province defines whether to add the province information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#province DataK8STraefikIoMiddlewareV1Alpha1Manifest#province}
  */
  readonly province?: boolean | cdktf.IResolvable;
  /**
  * SerialNumber defines whether to add the serialNumber information into the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#serial_number DataK8STraefikIoMiddlewareV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuerToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.booleanToTerraform(struct!.commonName),
    country: cdktf.booleanToTerraform(struct!.country),
    domain_component: cdktf.booleanToTerraform(struct!.domainComponent),
    locality: cdktf.booleanToTerraform(struct!.locality),
    organization: cdktf.booleanToTerraform(struct!.organization),
    province: cdktf.booleanToTerraform(struct!.province),
    serial_number: cdktf.booleanToTerraform(struct!.serialNumber),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuerToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.booleanToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country: {
      value: cdktf.booleanToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_component: {
      value: cdktf.booleanToHclTerraform(struct!.domainComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locality: {
      value: cdktf.booleanToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.booleanToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    province: {
      value: cdktf.booleanToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.booleanToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._domainComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainComponent = this._domainComponent;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._domainComponent = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._province = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._domainComponent = value.domainComponent;
      this._locality = value.locality;
      this._organization = value.organization;
      this._province = value.province;
      this._serialNumber = value.serialNumber;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: boolean | cdktf.IResolvable; 
  public get commonName() {
    return this.getBooleanAttribute('common_name');
  }
  public set commonName(value: boolean | cdktf.IResolvable) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: boolean | cdktf.IResolvable; 
  public get country() {
    return this.getBooleanAttribute('country');
  }
  public set country(value: boolean | cdktf.IResolvable) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // domain_component - computed: false, optional: true, required: false
  private _domainComponent?: boolean | cdktf.IResolvable; 
  public get domainComponent() {
    return this.getBooleanAttribute('domain_component');
  }
  public set domainComponent(value: boolean | cdktf.IResolvable) {
    this._domainComponent = value;
  }
  public resetDomainComponent() {
    this._domainComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainComponentInput() {
    return this._domainComponent;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: boolean | cdktf.IResolvable; 
  public get locality() {
    return this.getBooleanAttribute('locality');
  }
  public set locality(value: boolean | cdktf.IResolvable) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: boolean | cdktf.IResolvable; 
  public get organization() {
    return this.getBooleanAttribute('organization');
  }
  public set organization(value: boolean | cdktf.IResolvable) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // province - computed: false, optional: true, required: false
  private _province?: boolean | cdktf.IResolvable; 
  public get province() {
    return this.getBooleanAttribute('province');
  }
  public set province(value: boolean | cdktf.IResolvable) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: boolean | cdktf.IResolvable; 
  public get serialNumber() {
    return this.getBooleanAttribute('serial_number');
  }
  public set serialNumber(value: boolean | cdktf.IResolvable) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject {
  /**
  * CommonName defines whether to add the organizationalUnit information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#common_name DataK8STraefikIoMiddlewareV1Alpha1Manifest#common_name}
  */
  readonly commonName?: boolean | cdktf.IResolvable;
  /**
  * Country defines whether to add the country information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#country DataK8STraefikIoMiddlewareV1Alpha1Manifest#country}
  */
  readonly country?: boolean | cdktf.IResolvable;
  /**
  * DomainComponent defines whether to add the domainComponent information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#domain_component DataK8STraefikIoMiddlewareV1Alpha1Manifest#domain_component}
  */
  readonly domainComponent?: boolean | cdktf.IResolvable;
  /**
  * Locality defines whether to add the locality information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#locality DataK8STraefikIoMiddlewareV1Alpha1Manifest#locality}
  */
  readonly locality?: boolean | cdktf.IResolvable;
  /**
  * Organization defines whether to add the organization information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#organization DataK8STraefikIoMiddlewareV1Alpha1Manifest#organization}
  */
  readonly organization?: boolean | cdktf.IResolvable;
  /**
  * OrganizationalUnit defines whether to add the organizationalUnit information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#organizational_unit DataK8STraefikIoMiddlewareV1Alpha1Manifest#organizational_unit}
  */
  readonly organizationalUnit?: boolean | cdktf.IResolvable;
  /**
  * Province defines whether to add the province information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#province DataK8STraefikIoMiddlewareV1Alpha1Manifest#province}
  */
  readonly province?: boolean | cdktf.IResolvable;
  /**
  * SerialNumber defines whether to add the serialNumber information into the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#serial_number DataK8STraefikIoMiddlewareV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubjectToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.booleanToTerraform(struct!.commonName),
    country: cdktf.booleanToTerraform(struct!.country),
    domain_component: cdktf.booleanToTerraform(struct!.domainComponent),
    locality: cdktf.booleanToTerraform(struct!.locality),
    organization: cdktf.booleanToTerraform(struct!.organization),
    organizational_unit: cdktf.booleanToTerraform(struct!.organizationalUnit),
    province: cdktf.booleanToTerraform(struct!.province),
    serial_number: cdktf.booleanToTerraform(struct!.serialNumber),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubjectToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.booleanToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country: {
      value: cdktf.booleanToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_component: {
      value: cdktf.booleanToHclTerraform(struct!.domainComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locality: {
      value: cdktf.booleanToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.booleanToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organizational_unit: {
      value: cdktf.booleanToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    province: {
      value: cdktf.booleanToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.booleanToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._domainComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainComponent = this._domainComponent;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._domainComponent = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._province = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._domainComponent = value.domainComponent;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._province = value.province;
      this._serialNumber = value.serialNumber;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: boolean | cdktf.IResolvable; 
  public get commonName() {
    return this.getBooleanAttribute('common_name');
  }
  public set commonName(value: boolean | cdktf.IResolvable) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: boolean | cdktf.IResolvable; 
  public get country() {
    return this.getBooleanAttribute('country');
  }
  public set country(value: boolean | cdktf.IResolvable) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // domain_component - computed: false, optional: true, required: false
  private _domainComponent?: boolean | cdktf.IResolvable; 
  public get domainComponent() {
    return this.getBooleanAttribute('domain_component');
  }
  public set domainComponent(value: boolean | cdktf.IResolvable) {
    this._domainComponent = value;
  }
  public resetDomainComponent() {
    this._domainComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainComponentInput() {
    return this._domainComponent;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: boolean | cdktf.IResolvable; 
  public get locality() {
    return this.getBooleanAttribute('locality');
  }
  public set locality(value: boolean | cdktf.IResolvable) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: boolean | cdktf.IResolvable; 
  public get organization() {
    return this.getBooleanAttribute('organization');
  }
  public set organization(value: boolean | cdktf.IResolvable) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: boolean | cdktf.IResolvable; 
  public get organizationalUnit() {
    return this.getBooleanAttribute('organizational_unit');
  }
  public set organizationalUnit(value: boolean | cdktf.IResolvable) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // province - computed: false, optional: true, required: false
  private _province?: boolean | cdktf.IResolvable; 
  public get province() {
    return this.getBooleanAttribute('province');
  }
  public set province(value: boolean | cdktf.IResolvable) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: boolean | cdktf.IResolvable; 
  public get serialNumber() {
    return this.getBooleanAttribute('serial_number');
  }
  public set serialNumber(value: boolean | cdktf.IResolvable) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo {
  /**
  * Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#issuer DataK8STraefikIoMiddlewareV1Alpha1Manifest#issuer}
  */
  readonly issuer?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer;
  /**
  * NotAfter defines whether to add the Not After information from the Validity part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#not_after DataK8STraefikIoMiddlewareV1Alpha1Manifest#not_after}
  */
  readonly notAfter?: boolean | cdktf.IResolvable;
  /**
  * NotBefore defines whether to add the Not Before information from the Validity part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#not_before DataK8STraefikIoMiddlewareV1Alpha1Manifest#not_before}
  */
  readonly notBefore?: boolean | cdktf.IResolvable;
  /**
  * Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#sans DataK8STraefikIoMiddlewareV1Alpha1Manifest#sans}
  */
  readonly sans?: boolean | cdktf.IResolvable;
  /**
  * SerialNumber defines whether to add the client serialNumber information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#serial_number DataK8STraefikIoMiddlewareV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: boolean | cdktf.IResolvable;
  /**
  * Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#subject DataK8STraefikIoMiddlewareV1Alpha1Manifest#subject}
  */
  readonly subject?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuerToTerraform(struct!.issuer),
    not_after: cdktf.booleanToTerraform(struct!.notAfter),
    not_before: cdktf.booleanToTerraform(struct!.notBefore),
    sans: cdktf.booleanToTerraform(struct!.sans),
    serial_number: cdktf.booleanToTerraform(struct!.serialNumber),
    subject: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubjectToTerraform(struct!.subject),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuerToHclTerraform(struct!.issuer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer",
    },
    not_after: {
      value: cdktf.booleanToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_before: {
      value: cdktf.booleanToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sans: {
      value: cdktf.booleanToHclTerraform(struct!.sans),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.booleanToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuer.internalValue = undefined;
      this._notAfter = undefined;
      this._notBefore = undefined;
      this._sans = undefined;
      this._serialNumber = undefined;
      this._subject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuer.internalValue = value.issuer;
      this._notAfter = value.notAfter;
      this._notBefore = value.notBefore;
      this._sans = value.sans;
      this._serialNumber = value.serialNumber;
      this._subject.internalValue = value.subject;
    }
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoIssuer) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }

  // not_after - computed: false, optional: true, required: false
  private _notAfter?: boolean | cdktf.IResolvable; 
  public get notAfter() {
    return this.getBooleanAttribute('not_after');
  }
  public set notAfter(value: boolean | cdktf.IResolvable) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: boolean | cdktf.IResolvable; 
  public get notBefore() {
    return this.getBooleanAttribute('not_before');
  }
  public set notBefore(value: boolean | cdktf.IResolvable) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // sans - computed: false, optional: true, required: false
  private _sans?: boolean | cdktf.IResolvable; 
  public get sans() {
    return this.getBooleanAttribute('sans');
  }
  public set sans(value: boolean | cdktf.IResolvable) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: boolean | cdktf.IResolvable; 
  public get serialNumber() {
    return this.getBooleanAttribute('serial_number');
  }
  public set serialNumber(value: boolean | cdktf.IResolvable) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert {
  /**
  * Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#info DataK8STraefikIoMiddlewareV1Alpha1Manifest#info}
  */
  readonly info?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo;
  /**
  * PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#pem DataK8STraefikIoMiddlewareV1Alpha1Manifest#pem}
  */
  readonly pem?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoToTerraform(struct!.info),
    pem: cdktf.booleanToTerraform(struct!.pem),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo",
    },
    pem: {
      value: cdktf.booleanToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._info.internalValue = undefined;
      this._pem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._info.internalValue = value.info;
      this._pem = value.pem;
    }
  }

  // info - computed: false, optional: true, required: false
  private _info = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertInfo) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // pem - computed: false, optional: true, required: false
  private _pem?: boolean | cdktf.IResolvable; 
  public get pem() {
    return this.getBooleanAttribute('pem');
  }
  public set pem(value: boolean | cdktf.IResolvable) {
    this._pem = value;
  }
  public resetPem() {
    this._pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy {
  /**
  * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#depth DataK8STraefikIoMiddlewareV1Alpha1Manifest#depth}
  */
  readonly depth?: number;
  /**
  * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#excluded_i_ps DataK8STraefikIoMiddlewareV1Alpha1Manifest#excluded_i_ps}
  */
  readonly excludedIPs?: string[];
  /**
  * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ipv6_subnet DataK8STraefikIoMiddlewareV1Alpha1Manifest#ipv6_subnet}
  */
  readonly ipv6Subnet?: number;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategyToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.numberToTerraform(struct!.depth),
    excluded_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedIPs),
    ipv6_subnet: cdktf.numberToTerraform(struct!.ipv6Subnet),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategyToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._excludedIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIPs = this._excludedIPs;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._depth = undefined;
      this._excludedIPs = undefined;
      this._ipv6Subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._depth = value.depth;
      this._excludedIPs = value.excludedIPs;
      this._ipv6Subnet = value.ipv6Subnet;
    }
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // excluded_i_ps - computed: false, optional: true, required: false
  private _excludedIPs?: string[]; 
  public get excludedIPs() {
    return this.getListAttribute('excluded_i_ps');
  }
  public set excludedIPs(value: string[]) {
    this._excludedIPs = value;
  }
  public resetExcludedIPs() {
    this._excludedIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIPsInput() {
    return this._excludedIPs;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: number; 
  public get ipv6Subnet() {
    return this.getNumberAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: number) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion {
  /**
  * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/ipallowlist/#ipstrategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ip_strategy DataK8STraefikIoMiddlewareV1Alpha1Manifest#ip_strategy}
  */
  readonly ipStrategy?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy;
  /**
  * RequestHeaderName defines the name of the header used to group incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#request_header_name DataK8STraefikIoMiddlewareV1Alpha1Manifest#request_header_name}
  */
  readonly requestHeaderName?: string;
  /**
  * RequestHost defines whether to consider the request Host as the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#request_host DataK8STraefikIoMiddlewareV1Alpha1Manifest#request_host}
  */
  readonly requestHost?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_strategy: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategyToTerraform(struct!.ipStrategy),
    request_header_name: cdktf.stringToTerraform(struct!.requestHeaderName),
    request_host: cdktf.booleanToTerraform(struct!.requestHost),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_strategy: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategyToHclTerraform(struct!.ipStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy",
    },
    request_header_name: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_host: {
      value: cdktf.booleanToHclTerraform(struct!.requestHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipStrategy = this._ipStrategy?.internalValue;
    }
    if (this._requestHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderName = this._requestHeaderName;
    }
    if (this._requestHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHost = this._requestHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = undefined;
      this._requestHeaderName = undefined;
      this._requestHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipStrategy.internalValue = value.ipStrategy;
      this._requestHeaderName = value.requestHeaderName;
      this._requestHost = value.requestHost;
    }
  }

  // ip_strategy - computed: false, optional: true, required: false
  private _ipStrategy = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategyOutputReference(this, "ip_strategy");
  public get ipStrategy() {
    return this._ipStrategy;
  }
  public putIpStrategy(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionIpStrategy) {
    this._ipStrategy.internalValue = value;
  }
  public resetIpStrategy() {
    this._ipStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStrategyInput() {
    return this._ipStrategy.internalValue;
  }

  // request_header_name - computed: false, optional: true, required: false
  private _requestHeaderName?: string; 
  public get requestHeaderName() {
    return this.getStringAttribute('request_header_name');
  }
  public set requestHeaderName(value: string) {
    this._requestHeaderName = value;
  }
  public resetRequestHeaderName() {
    this._requestHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderNameInput() {
    return this._requestHeaderName;
  }

  // request_host - computed: false, optional: true, required: false
  private _requestHost?: boolean | cdktf.IResolvable; 
  public get requestHost() {
    return this.getBooleanAttribute('request_host');
  }
  public set requestHost(value: boolean | cdktf.IResolvable) {
    this._requestHost = value;
  }
  public resetRequestHost() {
    this._requestHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHostInput() {
    return this._requestHost;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit {
  /**
  * Average is the maximum rate, by default in requests/s, allowed for the given source. It defaults to 0, which means no rate limiting. The rate is actually defined by dividing Average by Period. So for a rate below 1req/s, one needs to define a Period larger than a second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#average DataK8STraefikIoMiddlewareV1Alpha1Manifest#average}
  */
  readonly average?: number;
  /**
  * Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time. It defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#burst DataK8STraefikIoMiddlewareV1Alpha1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * Period, in combination with Average, defines the actual maximum rate, such as: r = Average / Period. It defaults to a second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#period DataK8STraefikIoMiddlewareV1Alpha1Manifest#period}
  */
  readonly period?: string;
  /**
  * SourceCriterion defines what criterion is used to group requests as originating from a common source. If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the request's remote address field (as an ipStrategy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#source_criterion DataK8STraefikIoMiddlewareV1Alpha1Manifest#source_criterion}
  */
  readonly sourceCriterion?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
    period: cdktf.stringToTerraform(struct!.period),
    source_criterion: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionToTerraform(struct!.sourceCriterion),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_criterion: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionToHclTerraform(struct!.sourceCriterion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._sourceCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCriterion = this._sourceCriterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
      this._period = undefined;
      this._sourceCriterion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
      this._period = value.period;
      this._sourceCriterion.internalValue = value.sourceCriterion;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // source_criterion - computed: false, optional: true, required: false
  private _sourceCriterion = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterionOutputReference(this, "source_criterion");
  public get sourceCriterion() {
    return this._sourceCriterion;
  }
  public putSourceCriterion(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitSourceCriterion) {
    this._sourceCriterion.internalValue = value;
  }
  public resetSourceCriterion() {
    this._sourceCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCriterionInput() {
    return this._sourceCriterion.internalValue;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex {
  /**
  * Permanent defines whether the redirection is permanent (301).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#permanent DataK8STraefikIoMiddlewareV1Alpha1Manifest#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Regex defines the regex used to match and capture elements from the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement defines how to modify the URL to have the new target URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#replacement DataK8STraefikIoMiddlewareV1Alpha1Manifest#replacement}
  */
  readonly replacement?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegexToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegexToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permanent = undefined;
      this._regex = undefined;
      this._replacement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permanent = value.permanent;
      this._regex = value.regex;
      this._replacement = value.replacement;
    }
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme {
  /**
  * Permanent defines whether the redirection is permanent (301).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#permanent DataK8STraefikIoMiddlewareV1Alpha1Manifest#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of the new URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#port DataK8STraefikIoMiddlewareV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * Scheme defines the scheme of the new URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#scheme DataK8STraefikIoMiddlewareV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectSchemeToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectSchemeToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permanent = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permanent = value.permanent;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath {
  /**
  * Path defines the path to use as replacement in the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#path DataK8STraefikIoMiddlewareV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex {
  /**
  * Regex defines the regular expression used to match and capture the path from the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement defines the replacement path format, which can include captured variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#replacement DataK8STraefikIoMiddlewareV1Alpha1Manifest#replacement}
  */
  readonly replacement?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegexToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegexToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._replacement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._replacement = value.replacement;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry {
  /**
  * Attempts defines how many times the request should be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#attempts DataK8STraefikIoMiddlewareV1Alpha1Manifest#attempts}
  */
  readonly attempts?: number;
  /**
  * InitialInterval defines the first wait time in the exponential backoff series. The maximum interval is calculated as twice the initialInterval. If unspecified, requests will be retried immediately. The value of initialInterval should be provided in seconds or as a valid duration format, see https://pkg.go.dev/time#ParseDuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#initial_interval DataK8STraefikIoMiddlewareV1Alpha1Manifest#initial_interval}
  */
  readonly initialInterval?: string;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetryToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    initial_interval: cdktf.stringToTerraform(struct!.initialInterval),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetryToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_interval: {
      value: cdktf.stringToHclTerraform(struct!.initialInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._initialInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInterval = this._initialInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._initialInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._initialInterval = value.initialInterval;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // initial_interval - computed: false, optional: true, required: false
  private _initialInterval?: string; 
  public get initialInterval() {
    return this.getStringAttribute('initial_interval');
  }
  public set initialInterval(value: string) {
    this._initialInterval = value;
  }
  public resetInitialInterval() {
    this._initialInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialIntervalInput() {
    return this._initialInterval;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix {
  /**
  * Deprecated: ForceSlash option is deprecated, please remove any usage of this option. ForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary. Default: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#force_slash DataK8STraefikIoMiddlewareV1Alpha1Manifest#force_slash}
  */
  readonly forceSlash?: boolean | cdktf.IResolvable;
  /**
  * Prefixes defines the prefixes to strip from the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#prefixes DataK8STraefikIoMiddlewareV1Alpha1Manifest#prefixes}
  */
  readonly prefixes?: string[];
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_slash: cdktf.booleanToTerraform(struct!.forceSlash),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_slash: {
      value: cdktf.booleanToHclTerraform(struct!.forceSlash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceSlash !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSlash = this._forceSlash;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceSlash = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceSlash = value.forceSlash;
      this._prefixes = value.prefixes;
    }
  }

  // force_slash - computed: false, optional: true, required: false
  private _forceSlash?: boolean | cdktf.IResolvable; 
  public get forceSlash() {
    return this.getBooleanAttribute('force_slash');
  }
  public set forceSlash(value: boolean | cdktf.IResolvable) {
    this._forceSlash = value;
  }
  public resetForceSlash() {
    this._forceSlash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSlashInput() {
    return this._forceSlash;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex {
  /**
  * Regex defines the regular expression to match the path prefix from the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#regex}
  */
  readonly regex?: string[];
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegexToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regex),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegexToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string[]; 
  public get regex() {
    return this.getListAttribute('regex');
  }
  public set regex(value: string[]) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec {
  /**
  * AddPrefix holds the add prefix middleware configuration. This middleware updates the path of a request before forwarding it. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/addprefix/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#add_prefix DataK8STraefikIoMiddlewareV1Alpha1Manifest#add_prefix}
  */
  readonly addPrefix?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix;
  /**
  * BasicAuth holds the basic auth middleware configuration. This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/basicauth/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#basic_auth DataK8STraefikIoMiddlewareV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth;
  /**
  * Buffering holds the buffering middleware configuration. This middleware retries or limits the size of requests that can be forwarded to backends. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/buffering/#maxrequestbodybytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#buffering DataK8STraefikIoMiddlewareV1Alpha1Manifest#buffering}
  */
  readonly buffering?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering;
  /**
  * Chain holds the configuration of the chain middleware. This middleware enables to define reusable combinations of other pieces of middleware. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/chain/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#chain DataK8STraefikIoMiddlewareV1Alpha1Manifest#chain}
  */
  readonly chain?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain;
  /**
  * CircuitBreaker holds the circuit breaker configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#circuit_breaker DataK8STraefikIoMiddlewareV1Alpha1Manifest#circuit_breaker}
  */
  readonly circuitBreaker?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker;
  /**
  * Compress holds the compress middleware configuration. This middleware compresses responses before sending them to the client, using gzip, brotli, or zstd compression. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/compress/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#compress DataK8STraefikIoMiddlewareV1Alpha1Manifest#compress}
  */
  readonly compress?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress;
  /**
  * ContentType holds the content-type middleware configuration. This middleware exists to enable the correct behavior until at least the default one can be changed in a future version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#content_type DataK8STraefikIoMiddlewareV1Alpha1Manifest#content_type}
  */
  readonly contentType?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType;
  /**
  * DigestAuth holds the digest auth middleware configuration. This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/digestauth/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#digest_auth DataK8STraefikIoMiddlewareV1Alpha1Manifest#digest_auth}
  */
  readonly digestAuth?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth;
  /**
  * ErrorPage holds the custom error middleware configuration. This middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/errorpages/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#errors DataK8STraefikIoMiddlewareV1Alpha1Manifest#errors}
  */
  readonly errors?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors;
  /**
  * ForwardAuth holds the forward auth middleware configuration. This middleware delegates the request authentication to a Service. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/forwardauth/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#forward_auth DataK8STraefikIoMiddlewareV1Alpha1Manifest#forward_auth}
  */
  readonly forwardAuth?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth;
  /**
  * GrpcWeb holds the gRPC web middleware configuration. This middleware converts a gRPC web request to an HTTP/2 gRPC request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#grpc_web DataK8STraefikIoMiddlewareV1Alpha1Manifest#grpc_web}
  */
  readonly grpcWeb?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb;
  /**
  * Headers holds the headers middleware configuration. This middleware manages the requests and responses headers. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/headers/#customrequestheaders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#headers DataK8STraefikIoMiddlewareV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders;
  /**
  * InFlightReq holds the in-flight request middleware configuration. This middleware limits the number of requests being processed and served concurrently. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/inflightreq/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#in_flight_req DataK8STraefikIoMiddlewareV1Alpha1Manifest#in_flight_req}
  */
  readonly inFlightReq?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq;
  /**
  * IPAllowList holds the IP allowlist middleware configuration. This middleware limits allowed requests based on the client IP. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/ipallowlist/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ip_allow_list DataK8STraefikIoMiddlewareV1Alpha1Manifest#ip_allow_list}
  */
  readonly ipAllowList?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct;
  /**
  * Deprecated: please use IPAllowList instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#ip_white_list DataK8STraefikIoMiddlewareV1Alpha1Manifest#ip_white_list}
  */
  readonly ipWhiteList?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct;
  /**
  * PassTLSClientCert holds the pass TLS client cert middleware configuration. This middleware adds the selected data from the passed client TLS certificate to a header. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/passtlsclientcert/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#pass_tls_client_cert DataK8STraefikIoMiddlewareV1Alpha1Manifest#pass_tls_client_cert}
  */
  readonly passTlsClientCert?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert;
  /**
  * Plugin defines the middleware plugin configuration. More info: https://doc.traefik.io/traefik/plugins/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#plugin DataK8STraefikIoMiddlewareV1Alpha1Manifest#plugin}
  */
  readonly plugin?: { [key: string]: string };
  /**
  * RateLimit holds the rate limit configuration. This middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/ratelimit/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#rate_limit DataK8STraefikIoMiddlewareV1Alpha1Manifest#rate_limit}
  */
  readonly rateLimit?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit;
  /**
  * RedirectRegex holds the redirect regex middleware configuration. This middleware redirects a request using regex matching and replacement. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/redirectregex/#regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#redirect_regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#redirect_regex}
  */
  readonly redirectRegex?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex;
  /**
  * RedirectScheme holds the redirect scheme middleware configuration. This middleware redirects requests from a scheme/port to another. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/redirectscheme/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#redirect_scheme DataK8STraefikIoMiddlewareV1Alpha1Manifest#redirect_scheme}
  */
  readonly redirectScheme?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme;
  /**
  * ReplacePath holds the replace path middleware configuration. This middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/replacepath/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#replace_path DataK8STraefikIoMiddlewareV1Alpha1Manifest#replace_path}
  */
  readonly replacePath?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath;
  /**
  * ReplacePathRegex holds the replace path regex middleware configuration. This middleware replaces the path of a URL using regex matching and replacement. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/replacepathregex/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#replace_path_regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#replace_path_regex}
  */
  readonly replacePathRegex?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex;
  /**
  * Retry holds the retry middleware configuration. This middleware reissues requests a given number of times to a backend server if that server does not reply. As soon as the server answers, the middleware stops retrying, regardless of the response status. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/retry/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#retry DataK8STraefikIoMiddlewareV1Alpha1Manifest#retry}
  */
  readonly retry?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry;
  /**
  * StripPrefix holds the strip prefix middleware configuration. This middleware removes the specified prefixes from the URL path. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/stripprefix/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#strip_prefix DataK8STraefikIoMiddlewareV1Alpha1Manifest#strip_prefix}
  */
  readonly stripPrefix?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix;
  /**
  * StripPrefixRegex holds the strip prefix regex middleware configuration. This middleware removes the matching prefixes from the URL path. More info: https://doc.traefik.io/traefik/v3.2/middlewares/http/stripprefixregex/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#strip_prefix_regex DataK8STraefikIoMiddlewareV1Alpha1Manifest#strip_prefix_regex}
  */
  readonly stripPrefixRegex?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex;
}

export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_prefix: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefixToTerraform(struct!.addPrefix),
    basic_auth: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuthToTerraform(struct!.basicAuth),
    buffering: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBufferingToTerraform(struct!.buffering),
    chain: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainToTerraform(struct!.chain),
    circuit_breaker: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreakerToTerraform(struct!.circuitBreaker),
    compress: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompressToTerraform(struct!.compress),
    content_type: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentTypeToTerraform(struct!.contentType),
    digest_auth: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuthToTerraform(struct!.digestAuth),
    errors: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsToTerraform(struct!.errors),
    forward_auth: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthToTerraform(struct!.forwardAuth),
    grpc_web: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWebToTerraform(struct!.grpcWeb),
    headers: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeadersToTerraform(struct!.headers),
    in_flight_req: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqToTerraform(struct!.inFlightReq),
    ip_allow_list: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStructToTerraform(struct!.ipAllowList),
    ip_white_list: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStructToTerraform(struct!.ipWhiteList),
    pass_tls_client_cert: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertToTerraform(struct!.passTlsClientCert),
    plugin: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.plugin),
    rate_limit: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitToTerraform(struct!.rateLimit),
    redirect_regex: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegexToTerraform(struct!.redirectRegex),
    redirect_scheme: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectSchemeToTerraform(struct!.redirectScheme),
    replace_path: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathToTerraform(struct!.replacePath),
    replace_path_regex: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegexToTerraform(struct!.replacePathRegex),
    retry: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetryToTerraform(struct!.retry),
    strip_prefix: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixToTerraform(struct!.stripPrefix),
    strip_prefix_regex: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegexToTerraform(struct!.stripPrefixRegex),
  }
}


export function dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_prefix: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefixToHclTerraform(struct!.addPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix",
    },
    basic_auth: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth",
    },
    buffering: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBufferingToHclTerraform(struct!.buffering),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering",
    },
    chain: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainToHclTerraform(struct!.chain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain",
    },
    circuit_breaker: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreakerToHclTerraform(struct!.circuitBreaker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker",
    },
    compress: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompressToHclTerraform(struct!.compress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress",
    },
    content_type: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentTypeToHclTerraform(struct!.contentType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType",
    },
    digest_auth: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuthToHclTerraform(struct!.digestAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth",
    },
    errors: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsToHclTerraform(struct!.errors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors",
    },
    forward_auth: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthToHclTerraform(struct!.forwardAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth",
    },
    grpc_web: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWebToHclTerraform(struct!.grpcWeb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb",
    },
    headers: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders",
    },
    in_flight_req: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqToHclTerraform(struct!.inFlightReq),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq",
    },
    ip_allow_list: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStructToHclTerraform(struct!.ipAllowList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct",
    },
    ip_white_list: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStructToHclTerraform(struct!.ipWhiteList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct",
    },
    pass_tls_client_cert: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertToHclTerraform(struct!.passTlsClientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert",
    },
    plugin: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.plugin),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rate_limit: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit",
    },
    redirect_regex: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegexToHclTerraform(struct!.redirectRegex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex",
    },
    redirect_scheme: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectSchemeToHclTerraform(struct!.redirectScheme),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme",
    },
    replace_path: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathToHclTerraform(struct!.replacePath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath",
    },
    replace_path_regex: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegexToHclTerraform(struct!.replacePathRegex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex",
    },
    retry: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry",
    },
    strip_prefix: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixToHclTerraform(struct!.stripPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix",
    },
    strip_prefix_regex: {
      value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegexToHclTerraform(struct!.stripPrefixRegex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPrefix = this._addPrefix?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._buffering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffering = this._buffering?.internalValue;
    }
    if (this._chain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chain = this._chain?.internalValue;
    }
    if (this._circuitBreaker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreaker = this._circuitBreaker?.internalValue;
    }
    if (this._compress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress?.internalValue;
    }
    if (this._contentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType?.internalValue;
    }
    if (this._digestAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestAuth = this._digestAuth?.internalValue;
    }
    if (this._errors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors?.internalValue;
    }
    if (this._forwardAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardAuth = this._forwardAuth?.internalValue;
    }
    if (this._grpcWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcWeb = this._grpcWeb?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._inFlightReq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inFlightReq = this._inFlightReq?.internalValue;
    }
    if (this._ipAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowList = this._ipAllowList?.internalValue;
    }
    if (this._ipWhiteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipWhiteList = this._ipWhiteList?.internalValue;
    }
    if (this._passTlsClientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passTlsClientCert = this._passTlsClientCert?.internalValue;
    }
    if (this._plugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._redirectRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectRegex = this._redirectRegex?.internalValue;
    }
    if (this._redirectScheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectScheme = this._redirectScheme?.internalValue;
    }
    if (this._replacePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePath = this._replacePath?.internalValue;
    }
    if (this._replacePathRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePathRegex = this._replacePathRegex?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._stripPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripPrefix = this._stripPrefix?.internalValue;
    }
    if (this._stripPrefixRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripPrefixRegex = this._stripPrefixRegex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addPrefix.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._buffering.internalValue = undefined;
      this._chain.internalValue = undefined;
      this._circuitBreaker.internalValue = undefined;
      this._compress.internalValue = undefined;
      this._contentType.internalValue = undefined;
      this._digestAuth.internalValue = undefined;
      this._errors.internalValue = undefined;
      this._forwardAuth.internalValue = undefined;
      this._grpcWeb.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._inFlightReq.internalValue = undefined;
      this._ipAllowList.internalValue = undefined;
      this._ipWhiteList.internalValue = undefined;
      this._passTlsClientCert.internalValue = undefined;
      this._plugin = undefined;
      this._rateLimit.internalValue = undefined;
      this._redirectRegex.internalValue = undefined;
      this._redirectScheme.internalValue = undefined;
      this._replacePath.internalValue = undefined;
      this._replacePathRegex.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._stripPrefix.internalValue = undefined;
      this._stripPrefixRegex.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addPrefix.internalValue = value.addPrefix;
      this._basicAuth.internalValue = value.basicAuth;
      this._buffering.internalValue = value.buffering;
      this._chain.internalValue = value.chain;
      this._circuitBreaker.internalValue = value.circuitBreaker;
      this._compress.internalValue = value.compress;
      this._contentType.internalValue = value.contentType;
      this._digestAuth.internalValue = value.digestAuth;
      this._errors.internalValue = value.errors;
      this._forwardAuth.internalValue = value.forwardAuth;
      this._grpcWeb.internalValue = value.grpcWeb;
      this._headers.internalValue = value.headers;
      this._inFlightReq.internalValue = value.inFlightReq;
      this._ipAllowList.internalValue = value.ipAllowList;
      this._ipWhiteList.internalValue = value.ipWhiteList;
      this._passTlsClientCert.internalValue = value.passTlsClientCert;
      this._plugin = value.plugin;
      this._rateLimit.internalValue = value.rateLimit;
      this._redirectRegex.internalValue = value.redirectRegex;
      this._redirectScheme.internalValue = value.redirectScheme;
      this._replacePath.internalValue = value.replacePath;
      this._replacePathRegex.internalValue = value.replacePathRegex;
      this._retry.internalValue = value.retry;
      this._stripPrefix.internalValue = value.stripPrefix;
      this._stripPrefixRegex.internalValue = value.stripPrefixRegex;
    }
  }

  // add_prefix - computed: false, optional: true, required: false
  private _addPrefix = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefixOutputReference(this, "add_prefix");
  public get addPrefix() {
    return this._addPrefix;
  }
  public putAddPrefix(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecAddPrefix) {
    this._addPrefix.internalValue = value;
  }
  public resetAddPrefix() {
    this._addPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPrefixInput() {
    return this._addPrefix.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // buffering - computed: false, optional: true, required: false
  private _buffering = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBufferingOutputReference(this, "buffering");
  public get buffering() {
    return this._buffering;
  }
  public putBuffering(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecBuffering) {
    this._buffering.internalValue = value;
  }
  public resetBuffering() {
    this._buffering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingInput() {
    return this._buffering.internalValue;
  }

  // chain - computed: false, optional: true, required: false
  private _chain = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChainOutputReference(this, "chain");
  public get chain() {
    return this._chain;
  }
  public putChain(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecChain) {
    this._chain.internalValue = value;
  }
  public resetChain() {
    this._chain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain.internalValue;
  }

  // circuit_breaker - computed: false, optional: true, required: false
  private _circuitBreaker = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreakerOutputReference(this, "circuit_breaker");
  public get circuitBreaker() {
    return this._circuitBreaker;
  }
  public putCircuitBreaker(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCircuitBreaker) {
    this._circuitBreaker.internalValue = value;
  }
  public resetCircuitBreaker() {
    this._circuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakerInput() {
    return this._circuitBreaker.internalValue;
  }

  // compress - computed: false, optional: true, required: false
  private _compress = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompressOutputReference(this, "compress");
  public get compress() {
    return this._compress;
  }
  public putCompress(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecCompress) {
    this._compress.internalValue = value;
  }
  public resetCompress() {
    this._compress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress.internalValue;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentTypeOutputReference(this, "content_type");
  public get contentType() {
    return this._contentType;
  }
  public putContentType(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecContentType) {
    this._contentType.internalValue = value;
  }
  public resetContentType() {
    this._contentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType.internalValue;
  }

  // digest_auth - computed: false, optional: true, required: false
  private _digestAuth = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuthOutputReference(this, "digest_auth");
  public get digestAuth() {
    return this._digestAuth;
  }
  public putDigestAuth(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecDigestAuth) {
    this._digestAuth.internalValue = value;
  }
  public resetDigestAuth() {
    this._digestAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAuthInput() {
    return this._digestAuth.internalValue;
  }

  // errors - computed: false, optional: true, required: false
  private _errors = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrorsOutputReference(this, "errors");
  public get errors() {
    return this._errors;
  }
  public putErrors(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecErrors) {
    this._errors.internalValue = value;
  }
  public resetErrors() {
    this._errors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors.internalValue;
  }

  // forward_auth - computed: false, optional: true, required: false
  private _forwardAuth = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuthOutputReference(this, "forward_auth");
  public get forwardAuth() {
    return this._forwardAuth;
  }
  public putForwardAuth(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecForwardAuth) {
    this._forwardAuth.internalValue = value;
  }
  public resetForwardAuth() {
    this._forwardAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardAuthInput() {
    return this._forwardAuth.internalValue;
  }

  // grpc_web - computed: false, optional: true, required: false
  private _grpcWeb = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWebOutputReference(this, "grpc_web");
  public get grpcWeb() {
    return this._grpcWeb;
  }
  public putGrpcWeb(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecGrpcWeb) {
    this._grpcWeb.internalValue = value;
  }
  public resetGrpcWeb() {
    this._grpcWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcWebInput() {
    return this._grpcWeb.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // in_flight_req - computed: false, optional: true, required: false
  private _inFlightReq = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReqOutputReference(this, "in_flight_req");
  public get inFlightReq() {
    return this._inFlightReq;
  }
  public putInFlightReq(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecInFlightReq) {
    this._inFlightReq.internalValue = value;
  }
  public resetInFlightReq() {
    this._inFlightReq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFlightReqInput() {
    return this._inFlightReq.internalValue;
  }

  // ip_allow_list - computed: false, optional: true, required: false
  private _ipAllowList = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStructOutputReference(this, "ip_allow_list");
  public get ipAllowList() {
    return this._ipAllowList;
  }
  public putIpAllowList(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpAllowListStruct) {
    this._ipAllowList.internalValue = value;
  }
  public resetIpAllowList() {
    this._ipAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList.internalValue;
  }

  // ip_white_list - computed: false, optional: true, required: false
  private _ipWhiteList = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStructOutputReference(this, "ip_white_list");
  public get ipWhiteList() {
    return this._ipWhiteList;
  }
  public putIpWhiteList(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecIpWhiteListStruct) {
    this._ipWhiteList.internalValue = value;
  }
  public resetIpWhiteList() {
    this._ipWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteListInput() {
    return this._ipWhiteList.internalValue;
  }

  // pass_tls_client_cert - computed: false, optional: true, required: false
  private _passTlsClientCert = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCertOutputReference(this, "pass_tls_client_cert");
  public get passTlsClientCert() {
    return this._passTlsClientCert;
  }
  public putPassTlsClientCert(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecPassTlsClientCert) {
    this._passTlsClientCert.internalValue = value;
  }
  public resetPassTlsClientCert() {
    this._passTlsClientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passTlsClientCertInput() {
    return this._passTlsClientCert.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin?: { [key: string]: string }; 
  public get plugin() {
    return this.getStringMapAttribute('plugin');
  }
  public set plugin(value: { [key: string]: string }) {
    this._plugin = value;
  }
  public resetPlugin() {
    this._plugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // redirect_regex - computed: false, optional: true, required: false
  private _redirectRegex = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegexOutputReference(this, "redirect_regex");
  public get redirectRegex() {
    return this._redirectRegex;
  }
  public putRedirectRegex(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectRegex) {
    this._redirectRegex.internalValue = value;
  }
  public resetRedirectRegex() {
    this._redirectRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRegexInput() {
    return this._redirectRegex.internalValue;
  }

  // redirect_scheme - computed: false, optional: true, required: false
  private _redirectScheme = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectSchemeOutputReference(this, "redirect_scheme");
  public get redirectScheme() {
    return this._redirectScheme;
  }
  public putRedirectScheme(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRedirectScheme) {
    this._redirectScheme.internalValue = value;
  }
  public resetRedirectScheme() {
    this._redirectScheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectSchemeInput() {
    return this._redirectScheme.internalValue;
  }

  // replace_path - computed: false, optional: true, required: false
  private _replacePath = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathOutputReference(this, "replace_path");
  public get replacePath() {
    return this._replacePath;
  }
  public putReplacePath(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePath) {
    this._replacePath.internalValue = value;
  }
  public resetReplacePath() {
    this._replacePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePathInput() {
    return this._replacePath.internalValue;
  }

  // replace_path_regex - computed: false, optional: true, required: false
  private _replacePathRegex = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegexOutputReference(this, "replace_path_regex");
  public get replacePathRegex() {
    return this._replacePathRegex;
  }
  public putReplacePathRegex(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecReplacePathRegex) {
    this._replacePathRegex.internalValue = value;
  }
  public resetReplacePathRegex() {
    this._replacePathRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePathRegexInput() {
    return this._replacePathRegex.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // strip_prefix - computed: false, optional: true, required: false
  private _stripPrefix = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixOutputReference(this, "strip_prefix");
  public get stripPrefix() {
    return this._stripPrefix;
  }
  public putStripPrefix(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefix) {
    this._stripPrefix.internalValue = value;
  }
  public resetStripPrefix() {
    this._stripPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPrefixInput() {
    return this._stripPrefix.internalValue;
  }

  // strip_prefix_regex - computed: false, optional: true, required: false
  private _stripPrefixRegex = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegexOutputReference(this, "strip_prefix_regex");
  public get stripPrefixRegex() {
    return this._stripPrefixRegex;
  }
  public putStripPrefixRegex(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecStripPrefixRegex) {
    this._stripPrefixRegex.internalValue = value;
  }
  public resetStripPrefixRegex() {
    this._stripPrefixRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPrefixRegexInput() {
    return this._stripPrefixRegex.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest k8s_traefik_io_middleware_v1alpha1_manifest}
*/
export class DataK8STraefikIoMiddlewareV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_middleware_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoMiddlewareV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoMiddlewareV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoMiddlewareV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoMiddlewareV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_middleware_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_middleware_v1alpha1_manifest k8s_traefik_io_middleware_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoMiddlewareV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoMiddlewareV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_middleware_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoMiddlewareV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoMiddlewareV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoMiddlewareV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoMiddlewareV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoMiddlewareV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
