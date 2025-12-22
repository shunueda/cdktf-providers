// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoAuthServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#metadata DataK8SGetambassadorIoAuthServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoAuthServiceV1ManifestMetadata;
  /**
  * AuthServiceSpec defines the desired state of AuthService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#spec DataK8SGetambassadorIoAuthServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoAuthServiceV1ManifestSpec;
}
export interface DataK8SGetambassadorIoAuthServiceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#annotations DataK8SGetambassadorIoAuthServiceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#labels DataK8SGetambassadorIoAuthServiceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#name DataK8SGetambassadorIoAuthServiceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#namespace DataK8SGetambassadorIoAuthServiceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoAuthServiceV1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoAuthServiceV1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoAuthServiceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoAuthServiceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoAuthServiceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#allow_partial DataK8SGetambassadorIoAuthServiceV1Manifest#allow_partial}
  */
  readonly allowPartial: boolean | cdktf.IResolvable;
  /**
  * These aren't pointer types because they are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#max_bytes DataK8SGetambassadorIoAuthServiceV1Manifest#max_bytes}
  */
  readonly maxBytes: number;
}

export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBodyToTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial: cdktf.booleanToTerraform(struct!.allowPartial),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
  }
}


export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBodyToHclTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartial),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartial !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartial = this._allowPartial;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartial = undefined;
      this._maxBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartial = value.allowPartial;
      this._maxBytes = value.maxBytes;
    }
  }

  // allow_partial - computed: false, optional: false, required: true
  private _allowPartial?: boolean | cdktf.IResolvable; 
  public get allowPartial() {
    return this.getBooleanAttribute('allow_partial');
  }
  public set allowPartial(value: boolean | cdktf.IResolvable) {
    this._allowPartial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialInput() {
    return this._allowPartial;
  }

  // max_bytes - computed: false, optional: false, required: true
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }
}
export interface DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#code DataK8SGetambassadorIoAuthServiceV1Manifest#code}
  */
  readonly code?: number;
}

export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnErrorToTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
  }
}


export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnErrorToHclTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}
export interface DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#max_connections DataK8SGetambassadorIoAuthServiceV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#max_pending_requests DataK8SGetambassadorIoAuthServiceV1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#max_requests DataK8SGetambassadorIoAuthServiceV1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#max_retries DataK8SGetambassadorIoAuthServiceV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#priority DataK8SGetambassadorIoAuthServiceV1Manifest#priority}
  */
  readonly priority?: string;
}

export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersToTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersToHclTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
      this._priority = value.priority;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersOutputReference {
    return new DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoAuthServiceV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#add_auth_headers DataK8SGetambassadorIoAuthServiceV1Manifest#add_auth_headers}
  */
  readonly addAuthHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#add_linkerd_headers DataK8SGetambassadorIoAuthServiceV1Manifest#add_linkerd_headers}
  */
  readonly addLinkerdHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#allow_request_body DataK8SGetambassadorIoAuthServiceV1Manifest#allow_request_body}
  */
  readonly allowRequestBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#allowed_authorization_headers DataK8SGetambassadorIoAuthServiceV1Manifest#allowed_authorization_headers}
  */
  readonly allowedAuthorizationHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#allowed_request_headers DataK8SGetambassadorIoAuthServiceV1Manifest#allowed_request_headers}
  */
  readonly allowedRequestHeaders?: string[];
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. May either be a string or a list of strings. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#ambassador_id DataK8SGetambassadorIoAuthServiceV1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#auth_service DataK8SGetambassadorIoAuthServiceV1Manifest#auth_service}
  */
  readonly authService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#failure_mode_allow DataK8SGetambassadorIoAuthServiceV1Manifest#failure_mode_allow}
  */
  readonly failureModeAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#include_body DataK8SGetambassadorIoAuthServiceV1Manifest#include_body}
  */
  readonly includeBody?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#path_prefix DataK8SGetambassadorIoAuthServiceV1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#proto DataK8SGetambassadorIoAuthServiceV1Manifest#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#protocol_version DataK8SGetambassadorIoAuthServiceV1Manifest#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * Why isn't this just an int??
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#status_on_error DataK8SGetambassadorIoAuthServiceV1Manifest#status_on_error}
  */
  readonly statusOnError?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#timeout_ms DataK8SGetambassadorIoAuthServiceV1Manifest#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#tls DataK8SGetambassadorIoAuthServiceV1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#v3_circuit_breakers DataK8SGetambassadorIoAuthServiceV1Manifest#v3_circuit_breakers}
  */
  readonly v3CircuitBreakers?: DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#v3_stats_name DataK8SGetambassadorIoAuthServiceV1Manifest#v3_stats_name}
  */
  readonly v3StatsName?: string;
}

export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_auth_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addAuthHeaders),
    add_linkerd_headers: cdktf.booleanToTerraform(struct!.addLinkerdHeaders),
    allow_request_body: cdktf.booleanToTerraform(struct!.allowRequestBody),
    allowed_authorization_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAuthorizationHeaders),
    allowed_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRequestHeaders),
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    auth_service: cdktf.stringToTerraform(struct!.authService),
    failure_mode_allow: cdktf.booleanToTerraform(struct!.failureModeAllow),
    include_body: dataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBodyToTerraform(struct!.includeBody),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    proto: cdktf.stringToTerraform(struct!.proto),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    status_on_error: dataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnErrorToTerraform(struct!.statusOnError),
    timeout_ms: cdktf.numberToTerraform(struct!.timeoutMs),
    tls: cdktf.booleanToTerraform(struct!.tls),
    v3_circuit_breakers: cdktf.listMapper(dataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersToTerraform, false)(struct!.v3CircuitBreakers),
    v3_stats_name: cdktf.stringToTerraform(struct!.v3StatsName),
  }
}


export function dataK8SGetambassadorIoAuthServiceV1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoAuthServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_auth_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addAuthHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    add_linkerd_headers: {
      value: cdktf.booleanToHclTerraform(struct!.addLinkerdHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_request_body: {
      value: cdktf.booleanToHclTerraform(struct!.allowRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_authorization_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAuthorizationHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_service: {
      value: cdktf.stringToHclTerraform(struct!.authService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.failureModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_body: {
      value: dataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBodyToHclTerraform(struct!.includeBody),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_on_error: {
      value: dataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnErrorToHclTerraform(struct!.statusOnError),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError",
    },
    timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v3_circuit_breakers: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersToHclTerraform, false)(struct!.v3CircuitBreakers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersList",
    },
    v3_stats_name: {
      value: cdktf.stringToHclTerraform(struct!.v3StatsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoAuthServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoAuthServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addAuthHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addAuthHeaders = this._addAuthHeaders;
    }
    if (this._addLinkerdHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLinkerdHeaders = this._addLinkerdHeaders;
    }
    if (this._allowRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRequestBody = this._allowRequestBody;
    }
    if (this._allowedAuthorizationHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAuthorizationHeaders = this._allowedAuthorizationHeaders;
    }
    if (this._allowedRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRequestHeaders = this._allowedRequestHeaders;
    }
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._authService !== undefined) {
      hasAnyValues = true;
      internalValueResult.authService = this._authService;
    }
    if (this._failureModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureModeAllow = this._failureModeAllow;
    }
    if (this._includeBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody?.internalValue;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._statusOnError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusOnError = this._statusOnError?.internalValue;
    }
    if (this._timeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMs = this._timeoutMs;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._v3CircuitBreakers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3CircuitBreakers = this._v3CircuitBreakers?.internalValue;
    }
    if (this._v3StatsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3StatsName = this._v3StatsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addAuthHeaders = undefined;
      this._addLinkerdHeaders = undefined;
      this._allowRequestBody = undefined;
      this._allowedAuthorizationHeaders = undefined;
      this._allowedRequestHeaders = undefined;
      this._ambassadorId = undefined;
      this._authService = undefined;
      this._failureModeAllow = undefined;
      this._includeBody.internalValue = undefined;
      this._pathPrefix = undefined;
      this._proto = undefined;
      this._protocolVersion = undefined;
      this._statusOnError.internalValue = undefined;
      this._timeoutMs = undefined;
      this._tls = undefined;
      this._v3CircuitBreakers.internalValue = undefined;
      this._v3StatsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addAuthHeaders = value.addAuthHeaders;
      this._addLinkerdHeaders = value.addLinkerdHeaders;
      this._allowRequestBody = value.allowRequestBody;
      this._allowedAuthorizationHeaders = value.allowedAuthorizationHeaders;
      this._allowedRequestHeaders = value.allowedRequestHeaders;
      this._ambassadorId = value.ambassadorId;
      this._authService = value.authService;
      this._failureModeAllow = value.failureModeAllow;
      this._includeBody.internalValue = value.includeBody;
      this._pathPrefix = value.pathPrefix;
      this._proto = value.proto;
      this._protocolVersion = value.protocolVersion;
      this._statusOnError.internalValue = value.statusOnError;
      this._timeoutMs = value.timeoutMs;
      this._tls = value.tls;
      this._v3CircuitBreakers.internalValue = value.v3CircuitBreakers;
      this._v3StatsName = value.v3StatsName;
    }
  }

  // add_auth_headers - computed: false, optional: true, required: false
  private _addAuthHeaders?: { [key: string]: string }; 
  public get addAuthHeaders() {
    return this.getStringMapAttribute('add_auth_headers');
  }
  public set addAuthHeaders(value: { [key: string]: string }) {
    this._addAuthHeaders = value;
  }
  public resetAddAuthHeaders() {
    this._addAuthHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAuthHeadersInput() {
    return this._addAuthHeaders;
  }

  // add_linkerd_headers - computed: false, optional: true, required: false
  private _addLinkerdHeaders?: boolean | cdktf.IResolvable; 
  public get addLinkerdHeaders() {
    return this.getBooleanAttribute('add_linkerd_headers');
  }
  public set addLinkerdHeaders(value: boolean | cdktf.IResolvable) {
    this._addLinkerdHeaders = value;
  }
  public resetAddLinkerdHeaders() {
    this._addLinkerdHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLinkerdHeadersInput() {
    return this._addLinkerdHeaders;
  }

  // allow_request_body - computed: false, optional: true, required: false
  private _allowRequestBody?: boolean | cdktf.IResolvable; 
  public get allowRequestBody() {
    return this.getBooleanAttribute('allow_request_body');
  }
  public set allowRequestBody(value: boolean | cdktf.IResolvable) {
    this._allowRequestBody = value;
  }
  public resetAllowRequestBody() {
    this._allowRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRequestBodyInput() {
    return this._allowRequestBody;
  }

  // allowed_authorization_headers - computed: false, optional: true, required: false
  private _allowedAuthorizationHeaders?: string[]; 
  public get allowedAuthorizationHeaders() {
    return this.getListAttribute('allowed_authorization_headers');
  }
  public set allowedAuthorizationHeaders(value: string[]) {
    this._allowedAuthorizationHeaders = value;
  }
  public resetAllowedAuthorizationHeaders() {
    this._allowedAuthorizationHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthorizationHeadersInput() {
    return this._allowedAuthorizationHeaders;
  }

  // allowed_request_headers - computed: false, optional: true, required: false
  private _allowedRequestHeaders?: string[]; 
  public get allowedRequestHeaders() {
    return this.getListAttribute('allowed_request_headers');
  }
  public set allowedRequestHeaders(value: string[]) {
    this._allowedRequestHeaders = value;
  }
  public resetAllowedRequestHeaders() {
    this._allowedRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestHeadersInput() {
    return this._allowedRequestHeaders;
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // auth_service - computed: false, optional: false, required: true
  private _authService?: string; 
  public get authService() {
    return this.getStringAttribute('auth_service');
  }
  public set authService(value: string) {
    this._authService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authServiceInput() {
    return this._authService;
  }

  // failure_mode_allow - computed: false, optional: true, required: false
  private _failureModeAllow?: boolean | cdktf.IResolvable; 
  public get failureModeAllow() {
    return this.getBooleanAttribute('failure_mode_allow');
  }
  public set failureModeAllow(value: boolean | cdktf.IResolvable) {
    this._failureModeAllow = value;
  }
  public resetFailureModeAllow() {
    this._failureModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeAllowInput() {
    return this._failureModeAllow;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody = new DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBodyOutputReference(this, "include_body");
  public get includeBody() {
    return this._includeBody;
  }
  public putIncludeBody(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpecIncludeBody) {
    this._includeBody.internalValue = value;
  }
  public resetIncludeBody() {
    this._includeBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody.internalValue;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // status_on_error - computed: false, optional: true, required: false
  private _statusOnError = new DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnErrorOutputReference(this, "status_on_error");
  public get statusOnError() {
    return this._statusOnError;
  }
  public putStatusOnError(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpecStatusOnError) {
    this._statusOnError.internalValue = value;
  }
  public resetStatusOnError() {
    this._statusOnError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusOnErrorInput() {
    return this._statusOnError.internalValue;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // v3_circuit_breakers - computed: false, optional: true, required: false
  private _v3CircuitBreakers = new DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakersList(this, "v3_circuit_breakers", false);
  public get v3CircuitBreakers() {
    return this._v3CircuitBreakers;
  }
  public putV3CircuitBreakers(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpecV3CircuitBreakers[] | cdktf.IResolvable) {
    this._v3CircuitBreakers.internalValue = value;
  }
  public resetV3CircuitBreakers() {
    this._v3CircuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3CircuitBreakersInput() {
    return this._v3CircuitBreakers.internalValue;
  }

  // v3_stats_name - computed: false, optional: true, required: false
  private _v3StatsName?: string; 
  public get v3StatsName() {
    return this.getStringAttribute('v3_stats_name');
  }
  public set v3StatsName(value: string) {
    this._v3StatsName = value;
  }
  public resetV3StatsName() {
    this._v3StatsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3StatsNameInput() {
    return this._v3StatsName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest k8s_getambassador_io_auth_service_v1_manifest}
*/
export class DataK8SGetambassadorIoAuthServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_auth_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoAuthServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoAuthServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoAuthServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoAuthServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_auth_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/getambassador_io_auth_service_v1_manifest k8s_getambassador_io_auth_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoAuthServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoAuthServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_auth_service_v1_manifest',
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
  private _metadata = new DataK8SGetambassadorIoAuthServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoAuthServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoAuthServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoAuthServiceV1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoAuthServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoAuthServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoAuthServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoAuthServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoAuthServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoAuthServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
