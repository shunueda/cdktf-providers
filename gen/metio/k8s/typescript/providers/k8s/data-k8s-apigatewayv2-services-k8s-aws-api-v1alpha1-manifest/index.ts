// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#metadata DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata;
  /**
  * ApiSpec defines the desired state of Api. Represents an API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#spec DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec;
}
export interface DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#annotations DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#labels DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#allow_credentials DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Represents a collection of allowed headers. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#allow_headers DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Represents a collection of methods. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#allow_methods DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Represents a collection of origins. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#allow_origins DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * Represents a collection of allowed headers. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#expose_headers DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#max_age DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
}

export function dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfigurationToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfigurationToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigins = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigins = value.allowOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
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

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
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
}
export interface DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#api_key_selection_expression DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#api_key_selection_expression}
  */
  readonly apiKeySelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#basepath DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#basepath}
  */
  readonly basepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#body DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#body}
  */
  readonly body?: string;
  /**
  * Represents a CORS configuration. Supported only for HTTP APIs. See Configuring CORS (https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#cors_configuration DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#cors_configuration}
  */
  readonly corsConfiguration?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#credentials_arn DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#credentials_arn}
  */
  readonly credentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#description DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#disable_execute_api_endpoint DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#disable_execute_api_endpoint}
  */
  readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#disable_schema_validation DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#disable_schema_validation}
  */
  readonly disableSchemaValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#fail_on_warnings DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#fail_on_warnings}
  */
  readonly failOnWarnings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#protocol_type DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#route_key DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#route_key}
  */
  readonly routeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#route_selection_expression DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#route_selection_expression}
  */
  readonly routeSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#tags DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#target DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#version DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_selection_expression: cdktf.stringToTerraform(struct!.apiKeySelectionExpression),
    basepath: cdktf.stringToTerraform(struct!.basepath),
    body: cdktf.stringToTerraform(struct!.body),
    cors_configuration: dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfigurationToTerraform(struct!.corsConfiguration),
    credentials_arn: cdktf.stringToTerraform(struct!.credentialsArn),
    description: cdktf.stringToTerraform(struct!.description),
    disable_execute_api_endpoint: cdktf.booleanToTerraform(struct!.disableExecuteApiEndpoint),
    disable_schema_validation: cdktf.booleanToTerraform(struct!.disableSchemaValidation),
    fail_on_warnings: cdktf.booleanToTerraform(struct!.failOnWarnings),
    name: cdktf.stringToTerraform(struct!.name),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    route_key: cdktf.stringToTerraform(struct!.routeKey),
    route_selection_expression: cdktf.stringToTerraform(struct!.routeSelectionExpression),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    target: cdktf.stringToTerraform(struct!.target),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_selection_expression: {
      value: cdktf.stringToHclTerraform(struct!.apiKeySelectionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basepath: {
      value: cdktf.stringToHclTerraform(struct!.basepath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors_configuration: {
      value: dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfigurationToHclTerraform(struct!.corsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration",
    },
    credentials_arn: {
      value: cdktf.stringToHclTerraform(struct!.credentialsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_execute_api_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.disableExecuteApiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_schema_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableSchemaValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.failOnWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_key: {
      value: cdktf.stringToHclTerraform(struct!.routeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_selection_expression: {
      value: cdktf.stringToHclTerraform(struct!.routeSelectionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySelectionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySelectionExpression = this._apiKeySelectionExpression;
    }
    if (this._basepath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basepath = this._basepath;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._corsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsConfiguration = this._corsConfiguration?.internalValue;
    }
    if (this._credentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsArn = this._credentialsArn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableExecuteApiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableExecuteApiEndpoint = this._disableExecuteApiEndpoint;
    }
    if (this._disableSchemaValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSchemaValidation = this._disableSchemaValidation;
    }
    if (this._failOnWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnWarnings = this._failOnWarnings;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._routeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeKey = this._routeKey;
    }
    if (this._routeSelectionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSelectionExpression = this._routeSelectionExpression;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeySelectionExpression = undefined;
      this._basepath = undefined;
      this._body = undefined;
      this._corsConfiguration.internalValue = undefined;
      this._credentialsArn = undefined;
      this._description = undefined;
      this._disableExecuteApiEndpoint = undefined;
      this._disableSchemaValidation = undefined;
      this._failOnWarnings = undefined;
      this._name = undefined;
      this._protocolType = undefined;
      this._routeKey = undefined;
      this._routeSelectionExpression = undefined;
      this._tags = undefined;
      this._target = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeySelectionExpression = value.apiKeySelectionExpression;
      this._basepath = value.basepath;
      this._body = value.body;
      this._corsConfiguration.internalValue = value.corsConfiguration;
      this._credentialsArn = value.credentialsArn;
      this._description = value.description;
      this._disableExecuteApiEndpoint = value.disableExecuteApiEndpoint;
      this._disableSchemaValidation = value.disableSchemaValidation;
      this._failOnWarnings = value.failOnWarnings;
      this._name = value.name;
      this._protocolType = value.protocolType;
      this._routeKey = value.routeKey;
      this._routeSelectionExpression = value.routeSelectionExpression;
      this._tags = value.tags;
      this._target = value.target;
      this._version = value.version;
    }
  }

  // api_key_selection_expression - computed: false, optional: true, required: false
  private _apiKeySelectionExpression?: string; 
  public get apiKeySelectionExpression() {
    return this.getStringAttribute('api_key_selection_expression');
  }
  public set apiKeySelectionExpression(value: string) {
    this._apiKeySelectionExpression = value;
  }
  public resetApiKeySelectionExpression() {
    this._apiKeySelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySelectionExpressionInput() {
    return this._apiKeySelectionExpression;
  }

  // basepath - computed: false, optional: true, required: false
  private _basepath?: string; 
  public get basepath() {
    return this.getStringAttribute('basepath');
  }
  public set basepath(value: string) {
    this._basepath = value;
  }
  public resetBasepath() {
    this._basepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basepathInput() {
    return this._basepath;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration = new DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfigurationOutputReference(this, "cors_configuration");
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public putCorsConfiguration(value: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecCorsConfiguration) {
    this._corsConfiguration.internalValue = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration.internalValue;
  }

  // credentials_arn - computed: false, optional: true, required: false
  private _credentialsArn?: string; 
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }
  public set credentialsArn(value: string) {
    this._credentialsArn = value;
  }
  public resetCredentialsArn() {
    this._credentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsArnInput() {
    return this._credentialsArn;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_execute_api_endpoint - computed: false, optional: true, required: false
  private _disableExecuteApiEndpoint?: boolean | cdktf.IResolvable; 
  public get disableExecuteApiEndpoint() {
    return this.getBooleanAttribute('disable_execute_api_endpoint');
  }
  public set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable) {
    this._disableExecuteApiEndpoint = value;
  }
  public resetDisableExecuteApiEndpoint() {
    this._disableExecuteApiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableExecuteApiEndpointInput() {
    return this._disableExecuteApiEndpoint;
  }

  // disable_schema_validation - computed: false, optional: true, required: false
  private _disableSchemaValidation?: boolean | cdktf.IResolvable; 
  public get disableSchemaValidation() {
    return this.getBooleanAttribute('disable_schema_validation');
  }
  public set disableSchemaValidation(value: boolean | cdktf.IResolvable) {
    this._disableSchemaValidation = value;
  }
  public resetDisableSchemaValidation() {
    this._disableSchemaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSchemaValidationInput() {
    return this._disableSchemaValidation;
  }

  // fail_on_warnings - computed: false, optional: true, required: false
  private _failOnWarnings?: boolean | cdktf.IResolvable; 
  public get failOnWarnings() {
    return this.getBooleanAttribute('fail_on_warnings');
  }
  public set failOnWarnings(value: boolean | cdktf.IResolvable) {
    this._failOnWarnings = value;
  }
  public resetFailOnWarnings() {
    this._failOnWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnWarningsInput() {
    return this._failOnWarnings;
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

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // route_key - computed: false, optional: true, required: false
  private _routeKey?: string; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  public resetRouteKey() {
    this._routeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey;
  }

  // route_selection_expression - computed: false, optional: true, required: false
  private _routeSelectionExpression?: string; 
  public get routeSelectionExpression() {
    return this.getStringAttribute('route_selection_expression');
  }
  public set routeSelectionExpression(value: string) {
    this._routeSelectionExpression = value;
  }
  public resetRouteSelectionExpression() {
    this._routeSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectionExpressionInput() {
    return this._routeSelectionExpression;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_api_v1alpha1_manifest}
*/
export class DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apigatewayv2_services_k8s_aws_api_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apigatewayv2_services_k8s_aws_api_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_api_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_api_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apigatewayv2_services_k8s_aws_api_v1alpha1_manifest',
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
  private _metadata = new DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsApiV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
