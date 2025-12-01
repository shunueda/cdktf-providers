// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#metadata DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata;
  /**
  * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#spec DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec;
}
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#annotations DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#labels DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#name DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#namespace DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders {
  /**
  * The HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#name DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The prefix that should be stripped before decoding the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#prefix DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders | cdktf.IResolvable): any {
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._prefix = value.prefix;
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersOutputReference {
    return new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders {
  /**
  * The name of the claim to be copied from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#claim DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#claim}
  */
  readonly claim: string;
  /**
  * The name of the header to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#header DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#header}
  */
  readonly header: string;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._header = value.header;
    }
  }

  // claim - computed: false, optional: false, required: true
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersOutputReference {
    return new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules {
  /**
  * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#audiences DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * If set to true, the original token will be kept for the upstream request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#forward_original_token DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#forward_original_token}
  */
  readonly forwardOriginalToken?: boolean | cdktf.IResolvable;
  /**
  * List of cookie names from which JWT is expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#from_cookies DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#from_cookies}
  */
  readonly fromCookies?: string[];
  /**
  * List of header locations from which JWT is expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#from_headers DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#from_headers}
  */
  readonly fromHeaders?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders[] | cdktf.IResolvable;
  /**
  * List of query parameters from which JWT is expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#from_params DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#from_params}
  */
  readonly fromParams?: string[];
  /**
  * Identifies the issuer that issued the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#issuer DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#issuer}
  */
  readonly issuer: string;
  /**
  * JSON Web Key Set of public keys to validate signature of the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#jwks DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#jwks}
  */
  readonly jwks?: string;
  /**
  * URL of the provider's public key set to validate signature of the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#jwks_uri DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#output_claim_to_headers DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#output_claim_to_headers}
  */
  readonly outputClaimToHeaders?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders[] | cdktf.IResolvable;
  /**
  * This field specifies the header name to output a successfully verified JWT payload to the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#output_payload_to_header DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#output_payload_to_header}
  */
  readonly outputPayloadToHeader?: string;
  /**
  * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#timeout DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    forward_original_token: cdktf.booleanToTerraform(struct!.forwardOriginalToken),
    from_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromCookies),
    from_headers: cdktf.listMapper(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersToTerraform, false)(struct!.fromHeaders),
    from_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromParams),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    output_claim_to_headers: cdktf.listMapper(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersToTerraform, false)(struct!.outputClaimToHeaders),
    output_payload_to_header: cdktf.stringToTerraform(struct!.outputPayloadToHeader),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forward_original_token: {
      value: cdktf.booleanToHclTerraform(struct!.forwardOriginalToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_cookies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_headers: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersToHclTerraform, false)(struct!.fromHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersList",
    },
    from_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_claim_to_headers: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersToHclTerraform, false)(struct!.outputClaimToHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersList",
    },
    output_payload_to_header: {
      value: cdktf.stringToHclTerraform(struct!.outputPayloadToHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._forwardOriginalToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardOriginalToken = this._forwardOriginalToken;
    }
    if (this._fromCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCookies = this._fromCookies;
    }
    if (this._fromHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromHeaders = this._fromHeaders?.internalValue;
    }
    if (this._fromParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromParams = this._fromParams;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._outputClaimToHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputClaimToHeaders = this._outputClaimToHeaders?.internalValue;
    }
    if (this._outputPayloadToHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPayloadToHeader = this._outputPayloadToHeader;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._forwardOriginalToken = undefined;
      this._fromCookies = undefined;
      this._fromHeaders.internalValue = undefined;
      this._fromParams = undefined;
      this._issuer = undefined;
      this._jwks = undefined;
      this._jwksUri = undefined;
      this._outputClaimToHeaders.internalValue = undefined;
      this._outputPayloadToHeader = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._forwardOriginalToken = value.forwardOriginalToken;
      this._fromCookies = value.fromCookies;
      this._fromHeaders.internalValue = value.fromHeaders;
      this._fromParams = value.fromParams;
      this._issuer = value.issuer;
      this._jwks = value.jwks;
      this._jwksUri = value.jwksUri;
      this._outputClaimToHeaders.internalValue = value.outputClaimToHeaders;
      this._outputPayloadToHeader = value.outputPayloadToHeader;
      this._timeout = value.timeout;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // forward_original_token - computed: false, optional: true, required: false
  private _forwardOriginalToken?: boolean | cdktf.IResolvable; 
  public get forwardOriginalToken() {
    return this.getBooleanAttribute('forward_original_token');
  }
  public set forwardOriginalToken(value: boolean | cdktf.IResolvable) {
    this._forwardOriginalToken = value;
  }
  public resetForwardOriginalToken() {
    this._forwardOriginalToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardOriginalTokenInput() {
    return this._forwardOriginalToken;
  }

  // from_cookies - computed: false, optional: true, required: false
  private _fromCookies?: string[]; 
  public get fromCookies() {
    return this.getListAttribute('from_cookies');
  }
  public set fromCookies(value: string[]) {
    this._fromCookies = value;
  }
  public resetFromCookies() {
    this._fromCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCookiesInput() {
    return this._fromCookies;
  }

  // from_headers - computed: false, optional: true, required: false
  private _fromHeaders = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeadersList(this, "from_headers", false);
  public get fromHeaders() {
    return this._fromHeaders;
  }
  public putFromHeaders(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesFromHeaders[] | cdktf.IResolvable) {
    this._fromHeaders.internalValue = value;
  }
  public resetFromHeaders() {
    this._fromHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromHeadersInput() {
    return this._fromHeaders.internalValue;
  }

  // from_params - computed: false, optional: true, required: false
  private _fromParams?: string[]; 
  public get fromParams() {
    return this.getListAttribute('from_params');
  }
  public set fromParams(value: string[]) {
    this._fromParams = value;
  }
  public resetFromParams() {
    this._fromParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromParamsInput() {
    return this._fromParams;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // output_claim_to_headers - computed: false, optional: true, required: false
  private _outputClaimToHeaders = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeadersList(this, "output_claim_to_headers", false);
  public get outputClaimToHeaders() {
    return this._outputClaimToHeaders;
  }
  public putOutputClaimToHeaders(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputClaimToHeaders[] | cdktf.IResolvable) {
    this._outputClaimToHeaders.internalValue = value;
  }
  public resetOutputClaimToHeaders() {
    this._outputClaimToHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputClaimToHeadersInput() {
    return this._outputClaimToHeaders.internalValue;
  }

  // output_payload_to_header - computed: false, optional: true, required: false
  private _outputPayloadToHeader?: string; 
  public get outputPayloadToHeader() {
    return this.getStringAttribute('output_payload_to_header');
  }
  public set outputPayloadToHeader(value: string) {
    this._outputPayloadToHeader = value;
  }
  public resetOutputPayloadToHeader() {
    this._outputPayloadToHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPayloadToHeaderInput() {
    return this._outputPayloadToHeader;
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputReference {
    return new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#match_labels DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelectorToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelectorToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#group DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#kind DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#name DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#namespace DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#group DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#kind DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#name DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#namespace DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsOutputReference {
    return new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec {
  /**
  * Define the list of JWTs that can be validated at the selected workloads' proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#jwt_rules DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#jwt_rules}
  */
  readonly jwtRules?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#selector DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#target_ref DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#target_refs DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest#target_refs}
  */
  readonly targetRefs?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable;
}

export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt_rules: cdktf.listMapper(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesToTerraform, false)(struct!.jwtRules),
    selector: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelectorToTerraform(struct!.selector),
    target_ref: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    target_refs: cdktf.listMapper(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
  }
}


export function dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt_rules: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesToHclTerraform, false)(struct!.jwtRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesList",
    },
    selector: {
      value: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector",
    },
    target_ref: {
      value: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwtRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtRules = this._jwtRules?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwtRules.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._targetRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jwtRules.internalValue = value.jwtRules;
      this._selector.internalValue = value.selector;
      this._targetRef.internalValue = value.targetRef;
      this._targetRefs.internalValue = value.targetRefs;
    }
  }

  // jwt_rules - computed: false, optional: true, required: false
  private _jwtRules = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRulesList(this, "jwt_rules", false);
  public get jwtRules() {
    return this._jwtRules;
  }
  public putJwtRules(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecJwtRules[] | cdktf.IResolvable) {
    this._jwtRules.internalValue = value;
  }
  public resetJwtRules() {
    this._jwtRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtRulesInput() {
    return this._jwtRules.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // target_refs - computed: false, optional: true, required: false
  private _targetRefs = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  public resetTargetRefs() {
    this._targetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest k8s_security_istio_io_request_authentication_v1beta1_manifest}
*/
export class DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_istio_io_request_authentication_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityIstioIoRequestAuthenticationV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_istio_io_request_authentication_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_istio_io_request_authentication_v1beta1_manifest k8s_security_istio_io_request_authentication_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_istio_io_request_authentication_v1beta1_manifest',
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
  private _metadata = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityIstioIoRequestAuthenticationV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
