// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#metadata DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata;
  /**
  * OpenAPISpec defines the desired state of OpenAPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#spec DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec;
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#annotations DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#labels DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#name DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadataToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#direct_access_grants_enabled DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#direct_access_grants_enabled}
  */
  readonly directAccessGrantsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#implicit_flow_enabled DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#implicit_flow_enabled}
  */
  readonly implicitFlowEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#service_accounts_enabled DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#service_accounts_enabled}
  */
  readonly serviceAccountsEnabled: boolean | cdktf.IResolvable;
  /**
  * OIDCIssuer is the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#standard_flow_enabled DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#standard_flow_enabled}
  */
  readonly standardFlowEnabled: boolean | cdktf.IResolvable;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlowToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_access_grants_enabled: cdktf.booleanToTerraform(struct!.directAccessGrantsEnabled),
    implicit_flow_enabled: cdktf.booleanToTerraform(struct!.implicitFlowEnabled),
    service_accounts_enabled: cdktf.booleanToTerraform(struct!.serviceAccountsEnabled),
    standard_flow_enabled: cdktf.booleanToTerraform(struct!.standardFlowEnabled),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlowToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_access_grants_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.directAccessGrantsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    implicit_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.implicitFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_accounts_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccountsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.standardFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directAccessGrantsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.directAccessGrantsEnabled = this._directAccessGrantsEnabled;
    }
    if (this._implicitFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitFlowEnabled = this._implicitFlowEnabled;
    }
    if (this._serviceAccountsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountsEnabled = this._serviceAccountsEnabled;
    }
    if (this._standardFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardFlowEnabled = this._standardFlowEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directAccessGrantsEnabled = undefined;
      this._implicitFlowEnabled = undefined;
      this._serviceAccountsEnabled = undefined;
      this._standardFlowEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directAccessGrantsEnabled = value.directAccessGrantsEnabled;
      this._implicitFlowEnabled = value.implicitFlowEnabled;
      this._serviceAccountsEnabled = value.serviceAccountsEnabled;
      this._standardFlowEnabled = value.standardFlowEnabled;
    }
  }

  // direct_access_grants_enabled - computed: false, optional: false, required: true
  private _directAccessGrantsEnabled?: boolean | cdktf.IResolvable; 
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }
  public set directAccessGrantsEnabled(value: boolean | cdktf.IResolvable) {
    this._directAccessGrantsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessGrantsEnabledInput() {
    return this._directAccessGrantsEnabled;
  }

  // implicit_flow_enabled - computed: false, optional: false, required: true
  private _implicitFlowEnabled?: boolean | cdktf.IResolvable; 
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }
  public set implicitFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitFlowEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitFlowEnabledInput() {
    return this._implicitFlowEnabled;
  }

  // service_accounts_enabled - computed: false, optional: false, required: true
  private _serviceAccountsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }
  public set serviceAccountsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAccountsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsEnabledInput() {
    return this._serviceAccountsEnabled;
  }

  // standard_flow_enabled - computed: false, optional: false, required: true
  private _standardFlowEnabled?: boolean | cdktf.IResolvable; 
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }
  public set standardFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._standardFlowEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardFlowEnabledInput() {
    return this._standardFlowEnabled;
  }
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#name DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRefToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc {
  /**
  * AuthenticationFlow specifies OAuth2.0 authorization grant type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#authentication_flow DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#authentication_flow}
  */
  readonly authenticationFlow?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow;
  /**
  * Credentials Location available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse;
  /**
  * Issuer is the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#issuer_endpoint DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#issuer_endpoint}
  */
  readonly issuerEndpoint?: string;
  /**
  * IssuerEndpointRef is the reference to OIDC issuer Secret that contains IssuerEndpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#issuer_endpoint_ref DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#issuer_endpoint_ref}
  */
  readonly issuerEndpointRef?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef;
  /**
  * IssuerType is the type of the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#issuer_type DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#issuer_type}
  */
  readonly issuerType: string;
  /**
  * JwtClaimWithClientID is the JSON Web Token (JWT) Claim with ClientID that contains the clientID. Defaults to 'azp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#jwt_claim_with_client_id DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#jwt_claim_with_client_id}
  */
  readonly jwtClaimWithClientId?: string;
  /**
  * JwtClaimWithClientIDType sets to process the ClientID Token Claim value as a string or as a liquid template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#jwt_claim_with_client_id_type DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#jwt_claim_with_client_id_type}
  */
  readonly jwtClaimWithClientIdType?: string;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#security DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_flow: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlowToTerraform(struct!.authenticationFlow),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponseToTerraform(struct!.gatewayResponse),
    issuer_endpoint: cdktf.stringToTerraform(struct!.issuerEndpoint),
    issuer_endpoint_ref: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRefToTerraform(struct!.issuerEndpointRef),
    issuer_type: cdktf.stringToTerraform(struct!.issuerType),
    jwt_claim_with_client_id: cdktf.stringToTerraform(struct!.jwtClaimWithClientId),
    jwt_claim_with_client_id_type: cdktf.stringToTerraform(struct!.jwtClaimWithClientIdType),
    security: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_flow: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlowToHclTerraform(struct!.authenticationFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse",
    },
    issuer_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.issuerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_endpoint_ref: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRefToHclTerraform(struct!.issuerEndpointRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef",
    },
    issuer_type: {
      value: cdktf.stringToHclTerraform(struct!.issuerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_claim_with_client_id: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimWithClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_claim_with_client_id_type: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimWithClientIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationFlow = this._authenticationFlow?.internalValue;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._issuerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerEndpoint = this._issuerEndpoint;
    }
    if (this._issuerEndpointRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerEndpointRef = this._issuerEndpointRef?.internalValue;
    }
    if (this._issuerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerType = this._issuerType;
    }
    if (this._jwtClaimWithClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimWithClientId = this._jwtClaimWithClientId;
    }
    if (this._jwtClaimWithClientIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimWithClientIdType = this._jwtClaimWithClientIdType;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationFlow.internalValue = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._issuerEndpoint = undefined;
      this._issuerEndpointRef.internalValue = undefined;
      this._issuerType = undefined;
      this._jwtClaimWithClientId = undefined;
      this._jwtClaimWithClientIdType = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationFlow.internalValue = value.authenticationFlow;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._issuerEndpoint = value.issuerEndpoint;
      this._issuerEndpointRef.internalValue = value.issuerEndpointRef;
      this._issuerType = value.issuerType;
      this._jwtClaimWithClientId = value.jwtClaimWithClientId;
      this._jwtClaimWithClientIdType = value.jwtClaimWithClientIdType;
      this._security.internalValue = value.security;
    }
  }

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlowOutputReference(this, "authentication_flow");
  public get authenticationFlow() {
    return this._authenticationFlow;
  }
  public putAuthenticationFlow(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcAuthenticationFlow) {
    this._authenticationFlow.internalValue = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // issuer_endpoint - computed: false, optional: true, required: false
  private _issuerEndpoint?: string; 
  public get issuerEndpoint() {
    return this.getStringAttribute('issuer_endpoint');
  }
  public set issuerEndpoint(value: string) {
    this._issuerEndpoint = value;
  }
  public resetIssuerEndpoint() {
    this._issuerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerEndpointInput() {
    return this._issuerEndpoint;
  }

  // issuer_endpoint_ref - computed: false, optional: true, required: false
  private _issuerEndpointRef = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRefOutputReference(this, "issuer_endpoint_ref");
  public get issuerEndpointRef() {
    return this._issuerEndpointRef;
  }
  public putIssuerEndpointRef(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcIssuerEndpointRef) {
    this._issuerEndpointRef.internalValue = value;
  }
  public resetIssuerEndpointRef() {
    this._issuerEndpointRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerEndpointRefInput() {
    return this._issuerEndpointRef.internalValue;
  }

  // issuer_type - computed: false, optional: false, required: true
  private _issuerType?: string; 
  public get issuerType() {
    return this.getStringAttribute('issuer_type');
  }
  public set issuerType(value: string) {
    this._issuerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerTypeInput() {
    return this._issuerType;
  }

  // jwt_claim_with_client_id - computed: false, optional: true, required: false
  private _jwtClaimWithClientId?: string; 
  public get jwtClaimWithClientId() {
    return this.getStringAttribute('jwt_claim_with_client_id');
  }
  public set jwtClaimWithClientId(value: string) {
    this._jwtClaimWithClientId = value;
  }
  public resetJwtClaimWithClientId() {
    this._jwtClaimWithClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimWithClientIdInput() {
    return this._jwtClaimWithClientId;
  }

  // jwt_claim_with_client_id_type - computed: false, optional: true, required: false
  private _jwtClaimWithClientIdType?: string; 
  public get jwtClaimWithClientIdType() {
    return this.getStringAttribute('jwt_claim_with_client_id_type');
  }
  public set jwtClaimWithClientIdType(value: string) {
    this._jwtClaimWithClientIdType = value;
  }
  public resetJwtClaimWithClientIdType() {
    this._jwtClaimWithClientIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimWithClientIdTypeInput() {
    return this._jwtClaimWithClientIdType;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#api_version DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#field_path DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#kind DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#name DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#resource_version DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#uid DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRefToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef {
  /**
  * SecretRef refers to the secret object that contains the OpenAPI Document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#secret_ref DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef;
  /**
  * URL Remote URL from where to fetch the OpenAPI Document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#url DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRefToTerraform(struct!.secretRef),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._url = value.url;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#name DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRefToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec {
  /**
  * OIDCSpec defines the desired configuration of OpenID Connect Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#oidc DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#oidc}
  */
  readonly oidc?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc;
  /**
  * OpenAPIRef Reference to the OpenAPI Specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#openapi_ref DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#openapi_ref}
  */
  readonly openapiRef: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef;
  /**
  * PrefixMatching Use prefix matching instead of strict matching on mapping rules derived from openapi operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#prefix_matching DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#prefix_matching}
  */
  readonly prefixMatching?: boolean | cdktf.IResolvable;
  /**
  * PrivateAPIHostHeader Custom host header sent by the API gateway to the private API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#private_api_host_header DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#private_api_host_header}
  */
  readonly privateApiHostHeader?: string;
  /**
  * PrivateAPISecretToken Custom secret token sent by the API gateway to the private API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#private_api_secret_token DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#private_api_secret_token}
  */
  readonly privateApiSecretToken?: string;
  /**
  * PrivateBaseURL Custom private base URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#private_base_url DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#private_base_url}
  */
  readonly privateBaseUrl?: string;
  /**
  * ProductSystemName 3scale product system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#product_system_name DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#product_system_name}
  */
  readonly productSystemName?: string;
  /**
  * ProductionPublicBaseURL Custom public production URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#production_public_base_url DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#production_public_base_url}
  */
  readonly productionPublicBaseUrl?: string;
  /**
  * ProviderAccountRef references account provider credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#provider_account_ref DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#provider_account_ref}
  */
  readonly providerAccountRef?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef;
  /**
  * StagingPublicBaseURL Custom public staging URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#staging_public_base_url DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest#staging_public_base_url}
  */
  readonly stagingPublicBaseUrl?: string;
}

export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecToTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcToTerraform(struct!.oidc),
    openapi_ref: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefToTerraform(struct!.openapiRef),
    prefix_matching: cdktf.booleanToTerraform(struct!.prefixMatching),
    private_api_host_header: cdktf.stringToTerraform(struct!.privateApiHostHeader),
    private_api_secret_token: cdktf.stringToTerraform(struct!.privateApiSecretToken),
    private_base_url: cdktf.stringToTerraform(struct!.privateBaseUrl),
    product_system_name: cdktf.stringToTerraform(struct!.productSystemName),
    production_public_base_url: cdktf.stringToTerraform(struct!.productionPublicBaseUrl),
    provider_account_ref: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRefToTerraform(struct!.providerAccountRef),
    staging_public_base_url: cdktf.stringToTerraform(struct!.stagingPublicBaseUrl),
  }
}


export function dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc",
    },
    openapi_ref: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefToHclTerraform(struct!.openapiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef",
    },
    prefix_matching: {
      value: cdktf.booleanToHclTerraform(struct!.prefixMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_api_host_header: {
      value: cdktf.stringToHclTerraform(struct!.privateApiHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_api_secret_token: {
      value: cdktf.stringToHclTerraform(struct!.privateApiSecretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_base_url: {
      value: cdktf.stringToHclTerraform(struct!.privateBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_system_name: {
      value: cdktf.stringToHclTerraform(struct!.productSystemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    production_public_base_url: {
      value: cdktf.stringToHclTerraform(struct!.productionPublicBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_account_ref: {
      value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct!.providerAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef",
    },
    staging_public_base_url: {
      value: cdktf.stringToHclTerraform(struct!.stagingPublicBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._openapiRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openapiRef = this._openapiRef?.internalValue;
    }
    if (this._prefixMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatching = this._prefixMatching;
    }
    if (this._privateApiHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateApiHostHeader = this._privateApiHostHeader;
    }
    if (this._privateApiSecretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateApiSecretToken = this._privateApiSecretToken;
    }
    if (this._privateBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateBaseUrl = this._privateBaseUrl;
    }
    if (this._productSystemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSystemName = this._productSystemName;
    }
    if (this._productionPublicBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionPublicBaseUrl = this._productionPublicBaseUrl;
    }
    if (this._providerAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountRef = this._providerAccountRef?.internalValue;
    }
    if (this._stagingPublicBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingPublicBaseUrl = this._stagingPublicBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidc.internalValue = undefined;
      this._openapiRef.internalValue = undefined;
      this._prefixMatching = undefined;
      this._privateApiHostHeader = undefined;
      this._privateApiSecretToken = undefined;
      this._privateBaseUrl = undefined;
      this._productSystemName = undefined;
      this._productionPublicBaseUrl = undefined;
      this._providerAccountRef.internalValue = undefined;
      this._stagingPublicBaseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidc.internalValue = value.oidc;
      this._openapiRef.internalValue = value.openapiRef;
      this._prefixMatching = value.prefixMatching;
      this._privateApiHostHeader = value.privateApiHostHeader;
      this._privateApiSecretToken = value.privateApiSecretToken;
      this._privateBaseUrl = value.privateBaseUrl;
      this._productSystemName = value.productSystemName;
      this._productionPublicBaseUrl = value.productionPublicBaseUrl;
      this._providerAccountRef.internalValue = value.providerAccountRef;
      this._stagingPublicBaseUrl = value.stagingPublicBaseUrl;
    }
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // openapi_ref - computed: false, optional: false, required: true
  private _openapiRef = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRefOutputReference(this, "openapi_ref");
  public get openapiRef() {
    return this._openapiRef;
  }
  public putOpenapiRef(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOpenapiRef) {
    this._openapiRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiRefInput() {
    return this._openapiRef.internalValue;
  }

  // prefix_matching - computed: false, optional: true, required: false
  private _prefixMatching?: boolean | cdktf.IResolvable; 
  public get prefixMatching() {
    return this.getBooleanAttribute('prefix_matching');
  }
  public set prefixMatching(value: boolean | cdktf.IResolvable) {
    this._prefixMatching = value;
  }
  public resetPrefixMatching() {
    this._prefixMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchingInput() {
    return this._prefixMatching;
  }

  // private_api_host_header - computed: false, optional: true, required: false
  private _privateApiHostHeader?: string; 
  public get privateApiHostHeader() {
    return this.getStringAttribute('private_api_host_header');
  }
  public set privateApiHostHeader(value: string) {
    this._privateApiHostHeader = value;
  }
  public resetPrivateApiHostHeader() {
    this._privateApiHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateApiHostHeaderInput() {
    return this._privateApiHostHeader;
  }

  // private_api_secret_token - computed: false, optional: true, required: false
  private _privateApiSecretToken?: string; 
  public get privateApiSecretToken() {
    return this.getStringAttribute('private_api_secret_token');
  }
  public set privateApiSecretToken(value: string) {
    this._privateApiSecretToken = value;
  }
  public resetPrivateApiSecretToken() {
    this._privateApiSecretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateApiSecretTokenInput() {
    return this._privateApiSecretToken;
  }

  // private_base_url - computed: false, optional: true, required: false
  private _privateBaseUrl?: string; 
  public get privateBaseUrl() {
    return this.getStringAttribute('private_base_url');
  }
  public set privateBaseUrl(value: string) {
    this._privateBaseUrl = value;
  }
  public resetPrivateBaseUrl() {
    this._privateBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateBaseUrlInput() {
    return this._privateBaseUrl;
  }

  // product_system_name - computed: false, optional: true, required: false
  private _productSystemName?: string; 
  public get productSystemName() {
    return this.getStringAttribute('product_system_name');
  }
  public set productSystemName(value: string) {
    this._productSystemName = value;
  }
  public resetProductSystemName() {
    this._productSystemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSystemNameInput() {
    return this._productSystemName;
  }

  // production_public_base_url - computed: false, optional: true, required: false
  private _productionPublicBaseUrl?: string; 
  public get productionPublicBaseUrl() {
    return this.getStringAttribute('production_public_base_url');
  }
  public set productionPublicBaseUrl(value: string) {
    this._productionPublicBaseUrl = value;
  }
  public resetProductionPublicBaseUrl() {
    this._productionPublicBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionPublicBaseUrlInput() {
    return this._productionPublicBaseUrl;
  }

  // provider_account_ref - computed: false, optional: true, required: false
  private _providerAccountRef = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRefOutputReference(this, "provider_account_ref");
  public get providerAccountRef() {
    return this._providerAccountRef;
  }
  public putProviderAccountRef(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecProviderAccountRef) {
    this._providerAccountRef.internalValue = value;
  }
  public resetProviderAccountRef() {
    this._providerAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountRefInput() {
    return this._providerAccountRef.internalValue;
  }

  // staging_public_base_url - computed: false, optional: true, required: false
  private _stagingPublicBaseUrl?: string; 
  public get stagingPublicBaseUrl() {
    return this.getStringAttribute('staging_public_base_url');
  }
  public set stagingPublicBaseUrl(value: string) {
    this._stagingPublicBaseUrl = value;
  }
  public resetStagingPublicBaseUrl() {
    this._stagingPublicBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingPublicBaseUrlInput() {
    return this._stagingPublicBaseUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest k8s_capabilities_3scale_net_open_api_v1beta1_manifest}
*/
export class DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capabilities_3scale_net_open_api_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapabilities3ScaleNetOpenApiV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capabilities_3scale_net_open_api_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/capabilities_3scale_net_open_api_v1beta1_manifest k8s_capabilities_3scale_net_open_api_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capabilities_3scale_net_open_api_v1beta1_manifest',
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
  private _metadata = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec) {
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
      metadata: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetOpenApiV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
