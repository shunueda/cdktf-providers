// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#metadata DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata;
  /**
  * FunctionUrlConfigSpec defines the desired state of FunctionUrlConfig. Details about a Lambda function URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#spec DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec;
}
export interface DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#annotations DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#labels DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#allow_credentials DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#allow_headers DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#allow_methods DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#allow_origins DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#expose_headers DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#max_age DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#max_age}
  */
  readonly maxAge?: number;
}

export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCorsToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors | cdktf.IResolvable): any {
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


export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCorsToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom;
}

export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefFrom) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec {
  /**
  * The type of authentication that your function URL uses. Set to AWS_IAM if you want to restrict access to authenticated IAM users only. Set to NONE if you want to bypass IAM authentication to create a public endpoint. For more information, see Security and auth model for Lambda function URLs (https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#auth_type DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#auth_type}
  */
  readonly authType: string;
  /**
  * The cross-origin resource sharing (CORS) (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#cors DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#cors}
  */
  readonly cors?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors;
  /**
  * The name of the Lambda function. Name formats * Function name – my-function. * Function ARN – arn:aws:lambda:us-west-2:123456789012:function:my-function. * Partial ARN – 123456789012:function:my-function. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#function_name DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#function_ref DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#function_ref}
  */
  readonly functionRef?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef;
  /**
  * The alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#qualifier DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest#qualifier}
  */
  readonly qualifier?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    cors: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCorsToTerraform(struct!.cors),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    function_ref: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefToTerraform(struct!.functionRef),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors: {
      value: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_ref: {
      value: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefToHclTerraform(struct!.functionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._functionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionRef = this._functionRef?.internalValue;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._cors.internalValue = undefined;
      this._functionName = undefined;
      this._functionRef.internalValue = undefined;
      this._qualifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._cors.internalValue = value.cors;
      this._functionName = value.functionName;
      this._functionRef.internalValue = value.functionRef;
      this._qualifier = value.qualifier;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_ref - computed: false, optional: true, required: false
  private _functionRef = new DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRefOutputReference(this, "function_ref");
  public get functionRef() {
    return this._functionRef;
  }
  public putFunctionRef(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecFunctionRef) {
    this._functionRef.internalValue = value;
  }
  public resetFunctionRef() {
    this._functionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionRefInput() {
    return this._functionRef.internalValue;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest k8s_lambda_services_k8s_aws_function_url_config_v1alpha1_manifest}
*/
export class DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lambda_services_k8s_aws_function_url_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lambda_services_k8s_aws_function_url_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_url_config_v1alpha1_manifest k8s_lambda_services_k8s_aws_function_url_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lambda_services_k8s_aws_function_url_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsFunctionUrlConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
