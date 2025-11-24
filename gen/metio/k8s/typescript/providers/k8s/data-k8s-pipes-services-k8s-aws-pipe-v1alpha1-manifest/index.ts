// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#metadata DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata;
  /**
  * PipeSpec defines the desired state of Pipe. An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#spec DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec;
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#annotations DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#labels DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#namespace DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#header_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#header_parameters}
  */
  readonly headerParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#path_parameter_values DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#path_parameter_values}
  */
  readonly pathParameterValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#query_string_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#query_string_parameters}
  */
  readonly queryStringParameters?: { [key: string]: string };
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headerParameters),
    path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathParameterValues),
    query_string_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryStringParameters),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headerParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path_parameter_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathParameterValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_string_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryStringParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters;
    }
    if (this._pathParameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameterValues = this._pathParameterValues;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerParameters = undefined;
      this._pathParameterValues = undefined;
      this._queryStringParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerParameters = value.headerParameters;
      this._pathParameterValues = value.pathParameterValues;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // header_parameters - computed: false, optional: true, required: false
  private _headerParameters?: { [key: string]: string }; 
  public get headerParameters() {
    return this.getStringMapAttribute('header_parameters');
  }
  public set headerParameters(value: { [key: string]: string }) {
    this._headerParameters = value;
  }
  public resetHeaderParameters() {
    this._headerParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: false, optional: true, required: false
  private _pathParameterValues?: string[]; 
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }
  public set pathParameterValues(value: string[]) {
    this._pathParameterValues = value;
  }
  public resetPathParameterValues() {
    this._pathParameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParameterValuesInput() {
    return this._pathParameterValues;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: { [key: string]: string }; 
  public get queryStringParameters() {
    return this.getStringMapAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: { [key: string]: string }) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters {
  /**
  * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#http_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#http_parameters}
  */
  readonly httpParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#input_template DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#input_template}
  */
  readonly inputTemplate?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParametersToTerraform(struct!.httpParameters),
    input_template: cdktf.stringToTerraform(struct!.inputTemplate),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParametersToHclTerraform(struct!.httpParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters",
    },
    input_template: {
      value: cdktf.stringToHclTerraform(struct!.inputTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpParameters = this._httpParameters?.internalValue;
    }
    if (this._inputTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTemplate = this._inputTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpParameters.internalValue = undefined;
      this._inputTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpParameters.internalValue = value.httpParameters;
      this._inputTemplate = value.inputTemplate;
    }
  }

  // http_parameters - computed: false, optional: true, required: false
  private _httpParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }
  public putHttpParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersHttpParameters) {
    this._httpParameters.internalValue = value;
  }
  public resetHttpParameters() {
    this._httpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpParametersInput() {
    return this._httpParameters.internalValue;
  }

  // input_template - computed: false, optional: true, required: false
  private _inputTemplate?: string; 
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
  public set inputTemplate(value: string) {
    this._inputTemplate = value;
  }
  public resetInputTemplate() {
    this._inputTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTemplateInput() {
    return this._inputTemplate;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials {
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#basic_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentialsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: cdktf.stringToTerraform(struct!.basicAuth),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentialsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: cdktf.stringToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth = value.basicAuth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: string; 
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
  public set basicAuth(value: string) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * The Secrets Manager secret that stores your broker credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#credentials DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#queue_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#queue_name}
  */
  readonly queueName?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    credentials: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentialsToTerraform(struct!.credentials),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credentials: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._credentials.internalValue = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._queueName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._credentials.internalValue = value.credentials;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._queueName = value.queueName;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // queue_name - computed: false, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#arn}
  */
  readonly arn?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfigToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfigToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#dead_letter_config DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#dead_letter_config}
  */
  readonly deadLetterConfig?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_record_age_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_retry_attempts DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#on_partial_batch_item_failure DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#on_partial_batch_item_failure}
  */
  readonly onPartialBatchItemFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#parallelization_factor DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#starting_position DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#starting_position}
  */
  readonly startingPosition?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    dead_letter_config: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfigToTerraform(struct!.deadLetterConfig),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    maximum_record_age_in_seconds: cdktf.numberToTerraform(struct!.maximumRecordAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    on_partial_batch_item_failure: cdktf.stringToTerraform(struct!.onPartialBatchItemFailure),
    parallelization_factor: cdktf.numberToTerraform(struct!.parallelizationFactor),
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_letter_config: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfigToHclTerraform(struct!.deadLetterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_record_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_partial_batch_item_failure: {
      value: cdktf.stringToHclTerraform(struct!.onPartialBatchItemFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelization_factor: {
      value: cdktf.numberToHclTerraform(struct!.parallelizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_position: {
      value: cdktf.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._maximumRecordAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._onPartialBatchItemFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPartialBatchItemFailure = this._onPartialBatchItemFailure;
    }
    if (this._parallelizationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelizationFactor = this._parallelizationFactor;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._deadLetterConfig.internalValue = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._maximumRecordAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._onPartialBatchItemFailure = undefined;
      this._parallelizationFactor = undefined;
      this._startingPosition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._onPartialBatchItemFailure = value.onPartialBatchItemFailure;
      this._parallelizationFactor = value.parallelizationFactor;
      this._startingPosition = value.startingPosition;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: false, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // on_partial_batch_item_failure - computed: false, optional: true, required: false
  private _onPartialBatchItemFailure?: string; 
  public get onPartialBatchItemFailure() {
    return this.getStringAttribute('on_partial_batch_item_failure');
  }
  public set onPartialBatchItemFailure(value: string) {
    this._onPartialBatchItemFailure = value;
  }
  public resetOnPartialBatchItemFailure() {
    this._onPartialBatchItemFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPartialBatchItemFailureInput() {
    return this._onPartialBatchItemFailure;
  }

  // parallelization_factor - computed: false, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#pattern DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#filters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#filters}
  */
  readonly filters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters[] | cdktf.IResolvable;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersToTerraform, false)(struct!.filters),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#arn}
  */
  readonly arn?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfigToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfigToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#dead_letter_config DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#dead_letter_config}
  */
  readonly deadLetterConfig?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_record_age_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_retry_attempts DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#on_partial_batch_item_failure DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#on_partial_batch_item_failure}
  */
  readonly onPartialBatchItemFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#parallelization_factor DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#starting_position DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#starting_position_timestamp DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#starting_position_timestamp}
  */
  readonly startingPositionTimestamp?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    dead_letter_config: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfigToTerraform(struct!.deadLetterConfig),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    maximum_record_age_in_seconds: cdktf.numberToTerraform(struct!.maximumRecordAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    on_partial_batch_item_failure: cdktf.stringToTerraform(struct!.onPartialBatchItemFailure),
    parallelization_factor: cdktf.numberToTerraform(struct!.parallelizationFactor),
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
    starting_position_timestamp: cdktf.stringToTerraform(struct!.startingPositionTimestamp),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_letter_config: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfigToHclTerraform(struct!.deadLetterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_record_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_partial_batch_item_failure: {
      value: cdktf.stringToHclTerraform(struct!.onPartialBatchItemFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelization_factor: {
      value: cdktf.numberToHclTerraform(struct!.parallelizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_position: {
      value: cdktf.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_position_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.startingPositionTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._maximumRecordAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._onPartialBatchItemFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPartialBatchItemFailure = this._onPartialBatchItemFailure;
    }
    if (this._parallelizationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelizationFactor = this._parallelizationFactor;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._startingPositionTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPositionTimestamp = this._startingPositionTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._deadLetterConfig.internalValue = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._maximumRecordAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._onPartialBatchItemFailure = undefined;
      this._parallelizationFactor = undefined;
      this._startingPosition = undefined;
      this._startingPositionTimestamp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._onPartialBatchItemFailure = value.onPartialBatchItemFailure;
      this._parallelizationFactor = value.parallelizationFactor;
      this._startingPosition = value.startingPosition;
      this._startingPositionTimestamp = value.startingPositionTimestamp;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: false, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // on_partial_batch_item_failure - computed: false, optional: true, required: false
  private _onPartialBatchItemFailure?: string; 
  public get onPartialBatchItemFailure() {
    return this.getStringAttribute('on_partial_batch_item_failure');
  }
  public set onPartialBatchItemFailure(value: string) {
    this._onPartialBatchItemFailure = value;
  }
  public resetOnPartialBatchItemFailure() {
    this._onPartialBatchItemFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPartialBatchItemFailureInput() {
    return this._onPartialBatchItemFailure;
  }

  // parallelization_factor - computed: false, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string; 
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
  public set startingPositionTimestamp(value: string) {
    this._startingPositionTimestamp = value;
  }
  public resetStartingPositionTimestamp() {
    this._startingPositionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionTimestampInput() {
    return this._startingPositionTimestamp;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials {
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#client_certificate_tls_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#client_certificate_tls_auth}
  */
  readonly clientCertificateTlsAuth?: string;
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sasl_scram512_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sasl_scram512_auth}
  */
  readonly saslScram512Auth?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentialsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_tls_auth: cdktf.stringToTerraform(struct!.clientCertificateTlsAuth),
    sasl_scram512_auth: cdktf.stringToTerraform(struct!.saslScram512Auth),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentialsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_tls_auth: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateTlsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_scram512_auth: {
      value: cdktf.stringToHclTerraform(struct!.saslScram512Auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateTlsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateTlsAuth = this._clientCertificateTlsAuth;
    }
    if (this._saslScram512Auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScram512Auth = this._saslScram512Auth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificateTlsAuth = undefined;
      this._saslScram512Auth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificateTlsAuth = value.clientCertificateTlsAuth;
      this._saslScram512Auth = value.saslScram512Auth;
    }
  }

  // client_certificate_tls_auth - computed: false, optional: true, required: false
  private _clientCertificateTlsAuth?: string; 
  public get clientCertificateTlsAuth() {
    return this.getStringAttribute('client_certificate_tls_auth');
  }
  public set clientCertificateTlsAuth(value: string) {
    this._clientCertificateTlsAuth = value;
  }
  public resetClientCertificateTlsAuth() {
    this._clientCertificateTlsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateTlsAuthInput() {
    return this._clientCertificateTlsAuth;
  }

  // sasl_scram512_auth - computed: false, optional: true, required: false
  private _saslScram512Auth?: string; 
  public get saslScram512Auth() {
    return this.getStringAttribute('sasl_scram512_auth');
  }
  public set saslScram512Auth(value: string) {
    this._saslScram512Auth = value;
  }
  public resetSaslScram512Auth() {
    this._saslScram512Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScram512AuthInput() {
    return this._saslScram512Auth;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#consumer_group_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#consumer_group_id}
  */
  readonly consumerGroupId?: string;
  /**
  * The Secrets Manager secret that stores your stream credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#credentials DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#starting_position DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#topic_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#topic_name}
  */
  readonly topicName?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    consumer_group_id: cdktf.stringToTerraform(struct!.consumerGroupId),
    credentials: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentialsToTerraform(struct!.credentials),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_position: {
      value: cdktf.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._consumerGroupId = undefined;
      this._credentials.internalValue = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._startingPosition = undefined;
      this._topicName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._consumerGroupId = value.consumerGroupId;
      this._credentials.internalValue = value.credentials;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._startingPosition = value.startingPosition;
      this._topicName = value.topicName;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // consumer_group_id - computed: false, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials {
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#basic_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentialsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: cdktf.stringToTerraform(struct!.basicAuth),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentialsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: cdktf.stringToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth = value.basicAuth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: string; 
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
  public set basicAuth(value: string) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * The Secrets Manager secret that stores your broker credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#credentials DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#queue_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#queue_name}
  */
  readonly queueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#virtual_host DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#virtual_host}
  */
  readonly virtualHost?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    credentials: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentialsToTerraform(struct!.credentials),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    virtual_host: cdktf.stringToTerraform(struct!.virtualHost),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credentials: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_host: {
      value: cdktf.stringToHclTerraform(struct!.virtualHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._virtualHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHost = this._virtualHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._credentials.internalValue = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._queueName = undefined;
      this._virtualHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._credentials.internalValue = value.credentials;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._queueName = value.queueName;
      this._virtualHost = value.virtualHost;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // queue_name - computed: false, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  public resetVirtualHost() {
    this._virtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials {
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#basic_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: string;
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#client_certificate_tls_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#client_certificate_tls_auth}
  */
  readonly clientCertificateTlsAuth?: string;
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sasl_scram256_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sasl_scram256_auth}
  */
  readonly saslScram256Auth?: string;
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sasl_scram512_auth DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sasl_scram512_auth}
  */
  readonly saslScram512Auth?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentialsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: cdktf.stringToTerraform(struct!.basicAuth),
    client_certificate_tls_auth: cdktf.stringToTerraform(struct!.clientCertificateTlsAuth),
    sasl_scram256_auth: cdktf.stringToTerraform(struct!.saslScram256Auth),
    sasl_scram512_auth: cdktf.stringToTerraform(struct!.saslScram512Auth),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentialsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: cdktf.stringToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_tls_auth: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateTlsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_scram256_auth: {
      value: cdktf.stringToHclTerraform(struct!.saslScram256Auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_scram512_auth: {
      value: cdktf.stringToHclTerraform(struct!.saslScram512Auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    if (this._clientCertificateTlsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateTlsAuth = this._clientCertificateTlsAuth;
    }
    if (this._saslScram256Auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScram256Auth = this._saslScram256Auth;
    }
    if (this._saslScram512Auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScram512Auth = this._saslScram512Auth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth = undefined;
      this._clientCertificateTlsAuth = undefined;
      this._saslScram256Auth = undefined;
      this._saslScram512Auth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth = value.basicAuth;
      this._clientCertificateTlsAuth = value.clientCertificateTlsAuth;
      this._saslScram256Auth = value.saslScram256Auth;
      this._saslScram512Auth = value.saslScram512Auth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: string; 
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
  public set basicAuth(value: string) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }

  // client_certificate_tls_auth - computed: false, optional: true, required: false
  private _clientCertificateTlsAuth?: string; 
  public get clientCertificateTlsAuth() {
    return this.getStringAttribute('client_certificate_tls_auth');
  }
  public set clientCertificateTlsAuth(value: string) {
    this._clientCertificateTlsAuth = value;
  }
  public resetClientCertificateTlsAuth() {
    this._clientCertificateTlsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateTlsAuthInput() {
    return this._clientCertificateTlsAuth;
  }

  // sasl_scram256_auth - computed: false, optional: true, required: false
  private _saslScram256Auth?: string; 
  public get saslScram256Auth() {
    return this.getStringAttribute('sasl_scram256_auth');
  }
  public set saslScram256Auth(value: string) {
    this._saslScram256Auth = value;
  }
  public resetSaslScram256Auth() {
    this._saslScram256Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScram256AuthInput() {
    return this._saslScram256Auth;
  }

  // sasl_scram512_auth - computed: false, optional: true, required: false
  private _saslScram512Auth?: string; 
  public get saslScram512Auth() {
    return this.getStringAttribute('sasl_scram512_auth');
  }
  public set saslScram512Auth(value: string) {
    this._saslScram512Auth = value;
  }
  public resetSaslScram512Auth() {
    this._saslScram512Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScram512AuthInput() {
    return this._saslScram512Auth;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc {
  /**
  * List of SecurityGroupId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#security_group DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#security_group}
  */
  readonly securityGroup?: string[];
  /**
  * List of SubnetId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#subnets DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpcToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroup),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpcToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroup = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroup = value.securityGroup;
      this._subnets = value.subnets;
    }
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string[]; 
  public get securityGroup() {
    return this.getListAttribute('security_group');
  }
  public set securityGroup(value: string[]) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#additional_bootstrap_servers DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#additional_bootstrap_servers}
  */
  readonly additionalBootstrapServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#consumer_group_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#consumer_group_id}
  */
  readonly consumerGroupId?: string;
  /**
  * The Secrets Manager secret that stores your stream credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#credentials DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * // Optional SecretManager ARN which stores the database credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#server_root_ca_certificate DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#server_root_ca_certificate}
  */
  readonly serverRootCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#starting_position DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#topic_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#topic_name}
  */
  readonly topicName?: string;
  /**
  * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#vpc DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#vpc}
  */
  readonly vpc?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_bootstrap_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBootstrapServers),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    consumer_group_id: cdktf.stringToTerraform(struct!.consumerGroupId),
    credentials: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentialsToTerraform(struct!.credentials),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    server_root_ca_certificate: cdktf.stringToTerraform(struct!.serverRootCaCertificate),
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    vpc: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpcToTerraform(struct!.vpc),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_bootstrap_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalBootstrapServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_root_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.serverRootCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_position: {
      value: cdktf.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBootstrapServers = this._additionalBootstrapServers;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._serverRootCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRootCaCertificate = this._serverRootCaCertificate;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalBootstrapServers = undefined;
      this._batchSize = undefined;
      this._consumerGroupId = undefined;
      this._credentials.internalValue = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._serverRootCaCertificate = undefined;
      this._startingPosition = undefined;
      this._topicName = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalBootstrapServers = value.additionalBootstrapServers;
      this._batchSize = value.batchSize;
      this._consumerGroupId = value.consumerGroupId;
      this._credentials.internalValue = value.credentials;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._serverRootCaCertificate = value.serverRootCaCertificate;
      this._startingPosition = value.startingPosition;
      this._topicName = value.topicName;
      this._vpc.internalValue = value.vpc;
    }
  }

  // additional_bootstrap_servers - computed: false, optional: true, required: false
  private _additionalBootstrapServers?: string[]; 
  public get additionalBootstrapServers() {
    return this.getListAttribute('additional_bootstrap_servers');
  }
  public set additionalBootstrapServers(value: string[]) {
    this._additionalBootstrapServers = value;
  }
  public resetAdditionalBootstrapServers() {
    this._additionalBootstrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBootstrapServersInput() {
    return this._additionalBootstrapServers;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // consumer_group_id - computed: false, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // server_root_ca_certificate - computed: false, optional: true, required: false
  private _serverRootCaCertificate?: string; 
  public get serverRootCaCertificate() {
    return this.getStringAttribute('server_root_ca_certificate');
  }
  public set serverRootCaCertificate(value: string) {
    this._serverRootCaCertificate = value;
  }
  public resetServerRootCaCertificate() {
    this._serverRootCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCaCertificateInput() {
    return this._serverRootCaCertificate;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters {
  /**
  * The parameters for using an Active MQ broker as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#active_mq_broker_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#active_mq_broker_parameters}
  */
  readonly activeMqBrokerParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters;
  /**
  * The parameters for using a DynamoDB stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#dynamo_db_stream_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#dynamo_db_stream_parameters}
  */
  readonly dynamoDbStreamParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters;
  /**
  * The collection of event patterns used to filter events. For more information, see Events and Event Patterns (https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the Amazon EventBridge User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#filter_criteria DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#filter_criteria}
  */
  readonly filterCriteria?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria;
  /**
  * The parameters for using a Kinesis stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#kinesis_stream_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#kinesis_stream_parameters}
  */
  readonly kinesisStreamParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters;
  /**
  * The parameters for using an MSK stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#managed_streaming_kafka_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#managed_streaming_kafka_parameters}
  */
  readonly managedStreamingKafkaParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters;
  /**
  * The parameters for using a Rabbit MQ broker as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#rabbit_mq_broker_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#rabbit_mq_broker_parameters}
  */
  readonly rabbitMqBrokerParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters;
  /**
  * The parameters for using a self-managed Apache Kafka stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#self_managed_kafka_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#self_managed_kafka_parameters}
  */
  readonly selfManagedKafkaParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters;
  /**
  * The parameters for using a Amazon SQS stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sqs_queue_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sqs_queue_parameters}
  */
  readonly sqsQueueParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_mq_broker_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersToTerraform(struct!.activeMqBrokerParameters),
    dynamo_db_stream_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersToTerraform(struct!.dynamoDbStreamParameters),
    filter_criteria: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaToTerraform(struct!.filterCriteria),
    kinesis_stream_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersToTerraform(struct!.kinesisStreamParameters),
    managed_streaming_kafka_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersToTerraform(struct!.managedStreamingKafkaParameters),
    rabbit_mq_broker_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersToTerraform(struct!.rabbitMqBrokerParameters),
    self_managed_kafka_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersToTerraform(struct!.selfManagedKafkaParameters),
    sqs_queue_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParametersToTerraform(struct!.sqsQueueParameters),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_mq_broker_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersToHclTerraform(struct!.activeMqBrokerParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters",
    },
    dynamo_db_stream_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersToHclTerraform(struct!.dynamoDbStreamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters",
    },
    filter_criteria: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaToHclTerraform(struct!.filterCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria",
    },
    kinesis_stream_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersToHclTerraform(struct!.kinesisStreamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters",
    },
    managed_streaming_kafka_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersToHclTerraform(struct!.managedStreamingKafkaParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters",
    },
    rabbit_mq_broker_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersToHclTerraform(struct!.rabbitMqBrokerParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters",
    },
    self_managed_kafka_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersToHclTerraform(struct!.selfManagedKafkaParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters",
    },
    sqs_queue_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParametersToHclTerraform(struct!.sqsQueueParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeMqBrokerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMqBrokerParameters = this._activeMqBrokerParameters?.internalValue;
    }
    if (this._dynamoDbStreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDbStreamParameters = this._dynamoDbStreamParameters?.internalValue;
    }
    if (this._filterCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCriteria = this._filterCriteria?.internalValue;
    }
    if (this._kinesisStreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamParameters = this._kinesisStreamParameters?.internalValue;
    }
    if (this._managedStreamingKafkaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedStreamingKafkaParameters = this._managedStreamingKafkaParameters?.internalValue;
    }
    if (this._rabbitMqBrokerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbitMqBrokerParameters = this._rabbitMqBrokerParameters?.internalValue;
    }
    if (this._selfManagedKafkaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedKafkaParameters = this._selfManagedKafkaParameters?.internalValue;
    }
    if (this._sqsQueueParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueParameters = this._sqsQueueParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeMqBrokerParameters.internalValue = undefined;
      this._dynamoDbStreamParameters.internalValue = undefined;
      this._filterCriteria.internalValue = undefined;
      this._kinesisStreamParameters.internalValue = undefined;
      this._managedStreamingKafkaParameters.internalValue = undefined;
      this._rabbitMqBrokerParameters.internalValue = undefined;
      this._selfManagedKafkaParameters.internalValue = undefined;
      this._sqsQueueParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeMqBrokerParameters.internalValue = value.activeMqBrokerParameters;
      this._dynamoDbStreamParameters.internalValue = value.dynamoDbStreamParameters;
      this._filterCriteria.internalValue = value.filterCriteria;
      this._kinesisStreamParameters.internalValue = value.kinesisStreamParameters;
      this._managedStreamingKafkaParameters.internalValue = value.managedStreamingKafkaParameters;
      this._rabbitMqBrokerParameters.internalValue = value.rabbitMqBrokerParameters;
      this._selfManagedKafkaParameters.internalValue = value.selfManagedKafkaParameters;
      this._sqsQueueParameters.internalValue = value.sqsQueueParameters;
    }
  }

  // active_mq_broker_parameters - computed: false, optional: true, required: false
  private _activeMqBrokerParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParametersOutputReference(this, "active_mq_broker_parameters");
  public get activeMqBrokerParameters() {
    return this._activeMqBrokerParameters;
  }
  public putActiveMqBrokerParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersActiveMqBrokerParameters) {
    this._activeMqBrokerParameters.internalValue = value;
  }
  public resetActiveMqBrokerParameters() {
    this._activeMqBrokerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMqBrokerParametersInput() {
    return this._activeMqBrokerParameters.internalValue;
  }

  // dynamo_db_stream_parameters - computed: false, optional: true, required: false
  private _dynamoDbStreamParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParametersOutputReference(this, "dynamo_db_stream_parameters");
  public get dynamoDbStreamParameters() {
    return this._dynamoDbStreamParameters;
  }
  public putDynamoDbStreamParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersDynamoDbStreamParameters) {
    this._dynamoDbStreamParameters.internalValue = value;
  }
  public resetDynamoDbStreamParameters() {
    this._dynamoDbStreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbStreamParametersInput() {
    return this._dynamoDbStreamParameters.internalValue;
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // kinesis_stream_parameters - computed: false, optional: true, required: false
  private _kinesisStreamParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParametersOutputReference(this, "kinesis_stream_parameters");
  public get kinesisStreamParameters() {
    return this._kinesisStreamParameters;
  }
  public putKinesisStreamParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersKinesisStreamParameters) {
    this._kinesisStreamParameters.internalValue = value;
  }
  public resetKinesisStreamParameters() {
    this._kinesisStreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamParametersInput() {
    return this._kinesisStreamParameters.internalValue;
  }

  // managed_streaming_kafka_parameters - computed: false, optional: true, required: false
  private _managedStreamingKafkaParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParametersOutputReference(this, "managed_streaming_kafka_parameters");
  public get managedStreamingKafkaParameters() {
    return this._managedStreamingKafkaParameters;
  }
  public putManagedStreamingKafkaParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersManagedStreamingKafkaParameters) {
    this._managedStreamingKafkaParameters.internalValue = value;
  }
  public resetManagedStreamingKafkaParameters() {
    this._managedStreamingKafkaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStreamingKafkaParametersInput() {
    return this._managedStreamingKafkaParameters.internalValue;
  }

  // rabbit_mq_broker_parameters - computed: false, optional: true, required: false
  private _rabbitMqBrokerParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParametersOutputReference(this, "rabbit_mq_broker_parameters");
  public get rabbitMqBrokerParameters() {
    return this._rabbitMqBrokerParameters;
  }
  public putRabbitMqBrokerParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersRabbitMqBrokerParameters) {
    this._rabbitMqBrokerParameters.internalValue = value;
  }
  public resetRabbitMqBrokerParameters() {
    this._rabbitMqBrokerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitMqBrokerParametersInput() {
    return this._rabbitMqBrokerParameters.internalValue;
  }

  // self_managed_kafka_parameters - computed: false, optional: true, required: false
  private _selfManagedKafkaParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParametersOutputReference(this, "self_managed_kafka_parameters");
  public get selfManagedKafkaParameters() {
    return this._selfManagedKafkaParameters;
  }
  public putSelfManagedKafkaParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSelfManagedKafkaParameters) {
    this._selfManagedKafkaParameters.internalValue = value;
  }
  public resetSelfManagedKafkaParameters() {
    this._selfManagedKafkaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedKafkaParametersInput() {
    return this._selfManagedKafkaParameters.internalValue;
  }

  // sqs_queue_parameters - computed: false, optional: true, required: false
  private _sqsQueueParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParametersOutputReference(this, "sqs_queue_parameters");
  public get sqsQueueParameters() {
    return this._sqsQueueParameters;
  }
  public putSqsQueueParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersSqsQueueParameters) {
    this._sqsQueueParameters.internalValue = value;
  }
  public resetSqsQueueParameters() {
    this._sqsQueueParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueParametersInput() {
    return this._sqsQueueParameters.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#size DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#size}
  */
  readonly size?: number;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayPropertiesToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayPropertiesToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable): any {
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#type_ DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#command DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#environment DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#environment}
  */
  readonly environment?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#instance_type DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#resource_requirements DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements[] | cdktf.IResolvable;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    environment: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentToTerraform, false)(struct!.environment),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    resource_requirements: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsToTerraform, false)(struct!.resourceRequirements),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentToHclTerraform, false)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentList",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsToHclTerraform, false)(struct!.resourceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._environment.internalValue = undefined;
      this._instanceType = undefined;
      this._resourceRequirements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._environment.internalValue = value.environment;
      this._instanceType = value.instanceType;
      this._resourceRequirements.internalValue = value.resourceRequirements;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesResourceRequirements[] | cdktf.IResolvable) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#job_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#type_ DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.stringToTerraform(struct!.jobId),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_id: {
      value: cdktf.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._type = value.type;
    }
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#attempts DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#attempts}
  */
  readonly attempts?: number;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategyToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategyToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
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
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters {
  /**
  * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#array_properties DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#array_properties}
  */
  readonly arrayProperties?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties;
  /**
  * The overrides that are sent to a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#container_overrides DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#container_overrides}
  */
  readonly containerOverrides?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#depends_on DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#job_definition DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#job_definition}
  */
  readonly jobDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#job_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The retry strategy that's associated with a job. For more information, see Automated job retries (https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the Batch User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#retry_strategy DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#retry_strategy}
  */
  readonly retryStrategy?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_properties: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayPropertiesToTerraform(struct!.arrayProperties),
    container_overrides: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesToTerraform(struct!.containerOverrides),
    depends_on: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnToTerraform, false)(struct!.dependsOn),
    job_definition: cdktf.stringToTerraform(struct!.jobDefinition),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    retry_strategy: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategyToTerraform(struct!.retryStrategy),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_properties: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayPropertiesToHclTerraform(struct!.arrayProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties",
    },
    container_overrides: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesToHclTerraform(struct!.containerOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnList",
    },
    job_definition: {
      value: cdktf.stringToHclTerraform(struct!.jobDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktf.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    retry_strategy: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategyToHclTerraform(struct!.retryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProperties = this._arrayProperties?.internalValue;
    }
    if (this._containerOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOverrides = this._containerOverrides?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._jobDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDefinition = this._jobDefinition;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayProperties.internalValue = undefined;
      this._containerOverrides.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._jobDefinition = undefined;
      this._jobName = undefined;
      this._parameters = undefined;
      this._retryStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayProperties.internalValue = value.arrayProperties;
      this._containerOverrides.internalValue = value.containerOverrides;
      this._dependsOn.internalValue = value.dependsOn;
      this._jobDefinition = value.jobDefinition;
      this._jobName = value.jobName;
      this._parameters = value.parameters;
      this._retryStrategy.internalValue = value.retryStrategy;
    }
  }

  // array_properties - computed: false, optional: true, required: false
  private _arrayProperties = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayPropertiesOutputReference(this, "array_properties");
  public get arrayProperties() {
    return this._arrayProperties;
  }
  public putArrayProperties(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersArrayProperties) {
    this._arrayProperties.internalValue = value;
  }
  public resetArrayProperties() {
    this._arrayProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayPropertiesInput() {
    return this._arrayProperties.internalValue;
  }

  // container_overrides - computed: false, optional: true, required: false
  private _containerOverrides = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverridesOutputReference(this, "container_overrides");
  public get containerOverrides() {
    return this._containerOverrides;
  }
  public putContainerOverrides(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersContainerOverrides) {
    this._containerOverrides.internalValue = value;
  }
  public resetContainerOverrides() {
    this._containerOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOverridesInput() {
    return this._containerOverrides.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // job_definition - computed: false, optional: true, required: false
  private _jobDefinition?: string; 
  public get jobDefinition() {
    return this.getStringAttribute('job_definition');
  }
  public set jobDefinition(value: string) {
    this._jobDefinition = value;
  }
  public resetJobDefinition() {
    this._jobDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionInput() {
    return this._jobDefinition;
  }

  // job_name - computed: false, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#log_stream_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#log_stream_name}
  */
  readonly logStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#timestamp DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#timestamp}
  */
  readonly timestamp?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logStreamName = undefined;
      this._timestamp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logStreamName = value.logStreamName;
      this._timestamp = value.timestamp;
    }
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#base DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#capacity_provider DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#capacity_provider}
  */
  readonly capacityProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#weight DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktf.stringToHclTerraform(struct!.capacityProvider),
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: true, required: false
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  public resetCapacityProvider() {
    this._capacityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#assign_public_ip DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#assign_public_ip}
  */
  readonly assignPublicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#security_groups DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#subnets DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.stringToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: string; 
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: string) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration {
  /**
  * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#aws_vpc_configuration DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#aws_vpc_configuration}
  */
  readonly awsVpcConfiguration?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_vpc_configuration: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToTerraform(struct!.awsVpcConfiguration),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_vpc_configuration: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToHclTerraform(struct!.awsVpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsVpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsVpcConfiguration = this._awsVpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsVpcConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsVpcConfiguration.internalValue = value.awsVpcConfiguration;
    }
  }

  // aws_vpc_configuration - computed: false, optional: true, required: false
  private _awsVpcConfiguration = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference(this, "aws_vpc_configuration");
  public get awsVpcConfiguration() {
    return this._awsVpcConfiguration;
  }
  public putAwsVpcConfiguration(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration) {
    this._awsVpcConfiguration.internalValue = value;
  }
  public resetAwsVpcConfiguration() {
    this._awsVpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcConfigurationInput() {
    return this._awsVpcConfiguration.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment | cdktf.IResolvable): any {
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#type_ DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#type_ DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#command DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#cpu DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#environment DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#environment}
  */
  readonly environment?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#environment_files DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#environment_files}
  */
  readonly environmentFiles?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#memory DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#memory_reservation DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#resource_requirements DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements[] | cdktf.IResolvable;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    environment: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentToTerraform, false)(struct!.environment),
    environment_files: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesToTerraform, false)(struct!.environmentFiles),
    memory: cdktf.numberToTerraform(struct!.memory),
    memory_reservation: cdktf.numberToTerraform(struct!.memoryReservation),
    name: cdktf.stringToTerraform(struct!.name),
    resource_requirements: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsToTerraform, false)(struct!.resourceRequirements),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    environment: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentToHclTerraform, false)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentList",
    },
    environment_files: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesToHclTerraform, false)(struct!.environmentFiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesList",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservation),
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
    resource_requirements: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsToHclTerraform, false)(struct!.resourceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._environmentFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFiles = this._environmentFiles?.internalValue;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._environment.internalValue = undefined;
      this._environmentFiles.internalValue = undefined;
      this._memory = undefined;
      this._memoryReservation = undefined;
      this._name = undefined;
      this._resourceRequirements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._cpu = value.cpu;
      this._environment.internalValue = value.environment;
      this._environmentFiles.internalValue = value.environmentFiles;
      this._memory = value.memory;
      this._memoryReservation = value.memoryReservation;
      this._name = value.name;
      this._resourceRequirements.internalValue = value.resourceRequirements;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // environment_files - computed: false, optional: true, required: false
  private _environmentFiles = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesList(this, "environment_files", false);
  public get environmentFiles() {
    return this._environmentFiles;
  }
  public putEnvironmentFiles(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles[] | cdktf.IResolvable) {
    this._environmentFiles.internalValue = value;
  }
  public resetEnvironmentFiles() {
    this._environmentFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilesInput() {
    return this._environmentFiles.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_reservation - computed: false, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements[] | cdktf.IResolvable) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#size_in_gi_b DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#size_in_gi_b}
  */
  readonly sizeInGiB?: number;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorageToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_in_gi_b: cdktf.numberToTerraform(struct!.sizeInGiB),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorageToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_in_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeInGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGiB = this._sizeInGiB;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sizeInGiB = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sizeInGiB = value.sizeInGiB;
    }
  }

  // size_in_gi_b - computed: false, optional: true, required: false
  private _sizeInGiB?: number; 
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
  public set sizeInGiB(value: number) {
    this._sizeInGiB = value;
  }
  public resetSizeInGiB() {
    this._sizeInGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGiBInput() {
    return this._sizeInGiB;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#device_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#device_type DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#device_type}
  */
  readonly deviceType?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._deviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._deviceType = value.deviceType;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#container_overrides DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#container_overrides}
  */
  readonly containerOverrides?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#cpu DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see Fargate task storage (https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html) in the Amazon ECS User Guide for Fargate. This parameter is only supported for tasks hosted on Fargate using Linux platform version 1.4.0 or later. This parameter is not supported for Windows containers on Fargate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#ephemeral_storage DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#ephemeral_storage}
  */
  readonly ephemeralStorage?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#execution_role_arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#inference_accelerator_overrides DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#inference_accelerator_overrides}
  */
  readonly inferenceAcceleratorOverrides?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#memory DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#task_role_arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#task_role_arn}
  */
  readonly taskRoleArn?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_overrides: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesToTerraform, false)(struct!.containerOverrides),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    ephemeral_storage: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorageToTerraform(struct!.ephemeralStorage),
    execution_role_arn: cdktf.stringToTerraform(struct!.executionRoleArn),
    inference_accelerator_overrides: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesToTerraform, false)(struct!.inferenceAcceleratorOverrides),
    memory: cdktf.stringToTerraform(struct!.memory),
    task_role_arn: cdktf.stringToTerraform(struct!.taskRoleArn),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_overrides: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesToHclTerraform, false)(struct!.containerOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesList",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorageToHclTerraform(struct!.ephemeralStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage",
    },
    execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_accelerator_overrides: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesToHclTerraform, false)(struct!.inferenceAcceleratorOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesList",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.taskRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOverrides = this._containerOverrides?.internalValue;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ephemeralStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage?.internalValue;
    }
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._inferenceAcceleratorOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAcceleratorOverrides = this._inferenceAcceleratorOverrides?.internalValue;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._taskRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskRoleArn = this._taskRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerOverrides.internalValue = undefined;
      this._cpu = undefined;
      this._ephemeralStorage.internalValue = undefined;
      this._executionRoleArn = undefined;
      this._inferenceAcceleratorOverrides.internalValue = undefined;
      this._memory = undefined;
      this._taskRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerOverrides.internalValue = value.containerOverrides;
      this._cpu = value.cpu;
      this._ephemeralStorage.internalValue = value.ephemeralStorage;
      this._executionRoleArn = value.executionRoleArn;
      this._inferenceAcceleratorOverrides.internalValue = value.inferenceAcceleratorOverrides;
      this._memory = value.memory;
      this._taskRoleArn = value.taskRoleArn;
    }
  }

  // container_overrides - computed: false, optional: true, required: false
  private _containerOverrides = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverridesList(this, "container_overrides", false);
  public get containerOverrides() {
    return this._containerOverrides;
  }
  public putContainerOverrides(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesContainerOverrides[] | cdktf.IResolvable) {
    this._containerOverrides.internalValue = value;
  }
  public resetContainerOverrides() {
    this._containerOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOverridesInput() {
    return this._containerOverrides.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesEphemeralStorage) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // inference_accelerator_overrides - computed: false, optional: true, required: false
  private _inferenceAcceleratorOverrides = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesList(this, "inference_accelerator_overrides", false);
  public get inferenceAcceleratorOverrides() {
    return this._inferenceAcceleratorOverrides;
  }
  public putInferenceAcceleratorOverrides(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides[] | cdktf.IResolvable) {
    this._inferenceAcceleratorOverrides.internalValue = value;
  }
  public resetInferenceAcceleratorOverrides() {
    this._inferenceAcceleratorOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorOverridesInput() {
    return this._inferenceAcceleratorOverrides.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#expression DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#type_ DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
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

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#field DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#type_ DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#key DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#capacity_provider_strategy DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#enable_ecs_managed_tags DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#enable_execute_command DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#group DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#launch_type DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#launch_type}
  */
  readonly launchType?: string;
  /**
  * This structure specifies the network configuration for an Amazon ECS task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#network_configuration DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#network_configuration}
  */
  readonly networkConfiguration?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration;
  /**
  * The overrides that are associated with a task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#overrides DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#overrides}
  */
  readonly overrides?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#placement_constraints DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#placement_constraints}
  */
  readonly placementConstraints?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#placement_strategy DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#placement_strategy}
  */
  readonly placementStrategy?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#platform_version DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#propagate_tags DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#reference_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#reference_id}
  */
  readonly referenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#tags DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#task_count DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#task_definition_arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#task_definition_arn}
  */
  readonly taskDefinitionArn?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_provider_strategy: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyToTerraform, false)(struct!.capacityProviderStrategy),
    enable_ecs_managed_tags: cdktf.booleanToTerraform(struct!.enableEcsManagedTags),
    enable_execute_command: cdktf.booleanToTerraform(struct!.enableExecuteCommand),
    group: cdktf.stringToTerraform(struct!.group),
    launch_type: cdktf.stringToTerraform(struct!.launchType),
    network_configuration: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationToTerraform(struct!.networkConfiguration),
    overrides: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesToTerraform(struct!.overrides),
    placement_constraints: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsToTerraform, false)(struct!.placementConstraints),
    placement_strategy: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyToTerraform, false)(struct!.placementStrategy),
    platform_version: cdktf.stringToTerraform(struct!.platformVersion),
    propagate_tags: cdktf.stringToTerraform(struct!.propagateTags),
    reference_id: cdktf.stringToTerraform(struct!.referenceId),
    tags: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsToTerraform, false)(struct!.tags),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_provider_strategy: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyToHclTerraform, false)(struct!.capacityProviderStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyList",
    },
    enable_ecs_managed_tags: {
      value: cdktf.booleanToHclTerraform(struct!.enableEcsManagedTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_execute_command: {
      value: cdktf.booleanToHclTerraform(struct!.enableExecuteCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_type: {
      value: cdktf.stringToHclTerraform(struct!.launchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_configuration: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration",
    },
    overrides: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides",
    },
    placement_constraints: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsToHclTerraform, false)(struct!.placementConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsList",
    },
    placement_strategy: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyToHclTerraform, false)(struct!.placementStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyList",
    },
    platform_version: {
      value: cdktf.stringToHclTerraform(struct!.platformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_tags: {
      value: cdktf.stringToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsList",
    },
    task_count: {
      value: cdktf.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_definition_arn: {
      value: cdktf.stringToHclTerraform(struct!.taskDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityProviderStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
    }
    if (this._enableEcsManagedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
    }
    if (this._enableExecuteCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._placementConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraints = this._placementConstraints?.internalValue;
    }
    if (this._placementStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy?.internalValue;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityProviderStrategy.internalValue = undefined;
      this._enableEcsManagedTags = undefined;
      this._enableExecuteCommand = undefined;
      this._group = undefined;
      this._launchType = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._placementConstraints.internalValue = undefined;
      this._placementStrategy.internalValue = undefined;
      this._platformVersion = undefined;
      this._propagateTags = undefined;
      this._referenceId = undefined;
      this._tags.internalValue = undefined;
      this._taskCount = undefined;
      this._taskDefinitionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
      this._enableEcsManagedTags = value.enableEcsManagedTags;
      this._enableExecuteCommand = value.enableExecuteCommand;
      this._group = value.group;
      this._launchType = value.launchType;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._overrides.internalValue = value.overrides;
      this._placementConstraints.internalValue = value.placementConstraints;
      this._placementStrategy.internalValue = value.placementStrategy;
      this._platformVersion = value.platformVersion;
      this._propagateTags = value.propagateTags;
      this._referenceId = value.referenceId;
      this._tags.internalValue = value.tags;
      this._taskCount = value.taskCount;
      this._taskDefinitionArn = value.taskDefinitionArn;
    }
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategyList(this, "capacity_provider_strategy", false);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktf.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktf.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktf.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktf.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktf.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
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

  // launch_type - computed: false, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraintsList(this, "placement_constraints", false);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementConstraints[] | cdktf.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategyList(this, "placement_strategy", false);
  public get placementStrategy() {
    return this._placementStrategy;
  }
  public putPlacementStrategy(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersPlacementStrategy[] | cdktf.IResolvable) {
    this._placementStrategy.internalValue = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy.internalValue;
  }

  // platform_version - computed: false, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // reference_id - computed: false, optional: true, required: false
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  public resetReferenceId() {
    this._referenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_definition_arn - computed: false, optional: true, required: false
  private _taskDefinitionArn?: string; 
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  public resetTaskDefinitionArn() {
    this._taskDefinitionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#detail_type DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#detail_type}
  */
  readonly detailType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#endpoint_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#resources DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#source DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#time DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_type: cdktf.stringToTerraform(struct!.detailType),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    source: cdktf.stringToTerraform(struct!.source),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_type: {
      value: cdktf.stringToHclTerraform(struct!.detailType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailType !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailType = this._detailType;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detailType = undefined;
      this._endpointId = undefined;
      this._resources = undefined;
      this._source = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detailType = value.detailType;
      this._endpointId = value.endpointId;
      this._resources = value.resources;
      this._source = value.source;
      this._time = value.time;
    }
  }

  // detail_type - computed: false, optional: true, required: false
  private _detailType?: string; 
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  public resetDetailType() {
    this._detailType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType;
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#header_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#header_parameters}
  */
  readonly headerParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#path_parameter_values DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#path_parameter_values}
  */
  readonly pathParameterValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#query_string_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#query_string_parameters}
  */
  readonly queryStringParameters?: { [key: string]: string };
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headerParameters),
    path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathParameterValues),
    query_string_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryStringParameters),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headerParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path_parameter_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathParameterValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_string_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryStringParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters;
    }
    if (this._pathParameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameterValues = this._pathParameterValues;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerParameters = undefined;
      this._pathParameterValues = undefined;
      this._queryStringParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerParameters = value.headerParameters;
      this._pathParameterValues = value.pathParameterValues;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // header_parameters - computed: false, optional: true, required: false
  private _headerParameters?: { [key: string]: string }; 
  public get headerParameters() {
    return this.getStringMapAttribute('header_parameters');
  }
  public set headerParameters(value: { [key: string]: string }) {
    this._headerParameters = value;
  }
  public resetHeaderParameters() {
    this._headerParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: false, optional: true, required: false
  private _pathParameterValues?: string[]; 
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }
  public set pathParameterValues(value: string[]) {
    this._pathParameterValues = value;
  }
  public resetPathParameterValues() {
    this._pathParameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParameterValuesInput() {
    return this._pathParameterValues;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: { [key: string]: string }; 
  public get queryStringParameters() {
    return this.getStringMapAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: { [key: string]: string }) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#partition_key DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#partition_key}
  */
  readonly partitionKey?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_key: {
      value: cdktf.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionKey = value.partitionKey;
    }
  }

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#invocation_type DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#invocation_type}
  */
  readonly invocationType?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invocation_type: {
      value: cdktf.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationType = value.invocationType;
    }
  }

  // invocation_type - computed: false, optional: true, required: false
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  public resetInvocationType() {
    this._invocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters {
  /**
  * // Redshift Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#database DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * // Database user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#db_user DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#db_user}
  */
  readonly dbUser?: string;
  /**
  * // For targets, can either specify an ARN or a jsonpath pointing to the ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#secret_manager_arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#secret_manager_arn}
  */
  readonly secretManagerArn?: string;
  /**
  * // A list of SQLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sqls DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sqls}
  */
  readonly sqls?: string[];
  /**
  * // A name for Redshift DataAPI statement which can be used as filter of // ListStatement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#statement_name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#statement_name}
  */
  readonly statementName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#with_event DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#with_event}
  */
  readonly withEvent?: boolean | cdktf.IResolvable;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    db_user: cdktf.stringToTerraform(struct!.dbUser),
    secret_manager_arn: cdktf.stringToTerraform(struct!.secretManagerArn),
    sqls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqls),
    statement_name: cdktf.stringToTerraform(struct!.statementName),
    with_event: cdktf.booleanToTerraform(struct!.withEvent),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user: {
      value: cdktf.stringToHclTerraform(struct!.dbUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    statement_name: {
      value: cdktf.stringToHclTerraform(struct!.statementName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_event: {
      value: cdktf.booleanToHclTerraform(struct!.withEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._secretManagerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerArn = this._secretManagerArn;
    }
    if (this._sqls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqls = this._sqls;
    }
    if (this._statementName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementName = this._statementName;
    }
    if (this._withEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEvent = this._withEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._dbUser = undefined;
      this._secretManagerArn = undefined;
      this._sqls = undefined;
      this._statementName = undefined;
      this._withEvent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._dbUser = value.dbUser;
      this._secretManagerArn = value.secretManagerArn;
      this._sqls = value.sqls;
      this._statementName = value.statementName;
      this._withEvent = value.withEvent;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_user - computed: false, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
  }

  // secret_manager_arn - computed: false, optional: true, required: false
  private _secretManagerArn?: string; 
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }
  public set secretManagerArn(value: string) {
    this._secretManagerArn = value;
  }
  public resetSecretManagerArn() {
    this._secretManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerArnInput() {
    return this._secretManagerArn;
  }

  // sqls - computed: false, optional: true, required: false
  private _sqls?: string[]; 
  public get sqls() {
    return this.getListAttribute('sqls');
  }
  public set sqls(value: string[]) {
    this._sqls = value;
  }
  public resetSqls() {
    this._sqls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlsInput() {
    return this._sqls;
  }

  // statement_name - computed: false, optional: true, required: false
  private _statementName?: string; 
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }
  public set statementName(value: string) {
    this._statementName = value;
  }
  public resetStatementName() {
    this._statementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementNameInput() {
    return this._statementName;
  }

  // with_event - computed: false, optional: true, required: false
  private _withEvent?: boolean | cdktf.IResolvable; 
  public get withEvent() {
    return this.getBooleanAttribute('with_event');
  }
  public set withEvent(value: boolean | cdktf.IResolvable) {
    this._withEvent = value;
  }
  public resetWithEvent() {
    this._withEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEventInput() {
    return this._withEvent;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#value DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct | cdktf.IResolvable): any {
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructOutputReference {
    return new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#pipeline_parameter_list DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#pipeline_parameter_list}
  */
  readonly pipelineParameterList?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct[] | cdktf.IResolvable;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_parameter_list: cdktf.listMapper(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructToTerraform, false)(struct!.pipelineParameterList),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline_parameter_list: {
      value: cdktf.listMapperHcl(dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructToHclTerraform, false)(struct!.pipelineParameterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineParameterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParameterList = this._pipelineParameterList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pipelineParameterList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pipelineParameterList.internalValue = value.pipelineParameterList;
    }
  }

  // pipeline_parameter_list - computed: false, optional: true, required: false
  private _pipelineParameterList = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStructList(this, "pipeline_parameter_list", false);
  public get pipelineParameterList() {
    return this._pipelineParameterList;
  }
  public putPipelineParameterList(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersPipelineParameterListStruct[] | cdktf.IResolvable) {
    this._pipelineParameterList.internalValue = value;
  }
  public resetPipelineParameterList() {
    this._pipelineParameterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParameterListInput() {
    return this._pipelineParameterList.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#message_deduplication_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#message_deduplication_id}
  */
  readonly messageDeduplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#message_group_id DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#message_group_id}
  */
  readonly messageGroupId?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_deduplication_id: cdktf.stringToTerraform(struct!.messageDeduplicationId),
    message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_deduplication_id: {
      value: cdktf.stringToHclTerraform(struct!.messageDeduplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_group_id: {
      value: cdktf.stringToHclTerraform(struct!.messageGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageDeduplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDeduplicationId = this._messageDeduplicationId;
    }
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageDeduplicationId = undefined;
      this._messageGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageDeduplicationId = value.messageDeduplicationId;
      this._messageGroupId = value.messageGroupId;
    }
  }

  // message_deduplication_id - computed: false, optional: true, required: false
  private _messageDeduplicationId?: string; 
  public get messageDeduplicationId() {
    return this.getStringAttribute('message_deduplication_id');
  }
  public set messageDeduplicationId(value: string) {
    this._messageDeduplicationId = value;
  }
  public resetMessageDeduplicationId() {
    this._messageDeduplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDeduplicationIdInput() {
    return this._messageDeduplicationId;
  }

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#invocation_type DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#invocation_type}
  */
  readonly invocationType?: string;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invocation_type: {
      value: cdktf.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationType = value.invocationType;
    }
  }

  // invocation_type - computed: false, optional: true, required: false
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  public resetInvocationType() {
    this._invocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters {
  /**
  * The parameters for using an Batch job as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#batch_job_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#batch_job_parameters}
  */
  readonly batchJobParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters;
  /**
  * The parameters for using an CloudWatch Logs log stream as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#cloud_watch_logs_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#cloud_watch_logs_parameters}
  */
  readonly cloudWatchLogsParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters;
  /**
  * The parameters for using an Amazon ECS task as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#ecs_task_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#ecs_task_parameters}
  */
  readonly ecsTaskParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters;
  /**
  * The parameters for using an EventBridge event bus as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#event_bridge_event_bus_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#event_bridge_event_bus_parameters}
  */
  readonly eventBridgeEventBusParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters;
  /**
  * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#http_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#http_parameters}
  */
  readonly httpParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#input_template DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#input_template}
  */
  readonly inputTemplate?: string;
  /**
  * The parameters for using a Kinesis stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#kinesis_stream_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#kinesis_stream_parameters}
  */
  readonly kinesisStreamParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters;
  /**
  * The parameters for using a Lambda function as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#lambda_function_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#lambda_function_parameters}
  */
  readonly lambdaFunctionParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters;
  /**
  * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#redshift_data_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#redshift_data_parameters}
  */
  readonly redshiftDataParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters;
  /**
  * The parameters for using a SageMaker pipeline as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sage_maker_pipeline_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sage_maker_pipeline_parameters}
  */
  readonly sageMakerPipelineParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters;
  /**
  * The parameters for using a Amazon SQS stream as a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#sqs_queue_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#sqs_queue_parameters}
  */
  readonly sqsQueueParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters;
  /**
  * The parameters for using a Step Functions state machine as a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#step_function_state_machine_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#step_function_state_machine_parameters}
  */
  readonly stepFunctionStateMachineParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_job_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersToTerraform(struct!.batchJobParameters),
    cloud_watch_logs_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParametersToTerraform(struct!.cloudWatchLogsParameters),
    ecs_task_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersToTerraform(struct!.ecsTaskParameters),
    event_bridge_event_bus_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParametersToTerraform(struct!.eventBridgeEventBusParameters),
    http_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParametersToTerraform(struct!.httpParameters),
    input_template: cdktf.stringToTerraform(struct!.inputTemplate),
    kinesis_stream_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParametersToTerraform(struct!.kinesisStreamParameters),
    lambda_function_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParametersToTerraform(struct!.lambdaFunctionParameters),
    redshift_data_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParametersToTerraform(struct!.redshiftDataParameters),
    sage_maker_pipeline_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersToTerraform(struct!.sageMakerPipelineParameters),
    sqs_queue_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParametersToTerraform(struct!.sqsQueueParameters),
    step_function_state_machine_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParametersToTerraform(struct!.stepFunctionStateMachineParameters),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_job_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersToHclTerraform(struct!.batchJobParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters",
    },
    cloud_watch_logs_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParametersToHclTerraform(struct!.cloudWatchLogsParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters",
    },
    ecs_task_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersToHclTerraform(struct!.ecsTaskParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters",
    },
    event_bridge_event_bus_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParametersToHclTerraform(struct!.eventBridgeEventBusParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters",
    },
    http_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParametersToHclTerraform(struct!.httpParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters",
    },
    input_template: {
      value: cdktf.stringToHclTerraform(struct!.inputTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_stream_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParametersToHclTerraform(struct!.kinesisStreamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters",
    },
    lambda_function_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParametersToHclTerraform(struct!.lambdaFunctionParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters",
    },
    redshift_data_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParametersToHclTerraform(struct!.redshiftDataParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters",
    },
    sage_maker_pipeline_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersToHclTerraform(struct!.sageMakerPipelineParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters",
    },
    sqs_queue_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParametersToHclTerraform(struct!.sqsQueueParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters",
    },
    step_function_state_machine_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParametersToHclTerraform(struct!.stepFunctionStateMachineParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchJobParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchJobParameters = this._batchJobParameters?.internalValue;
    }
    if (this._cloudWatchLogsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsParameters = this._cloudWatchLogsParameters?.internalValue;
    }
    if (this._ecsTaskParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsTaskParameters = this._ecsTaskParameters?.internalValue;
    }
    if (this._eventBridgeEventBusParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridgeEventBusParameters = this._eventBridgeEventBusParameters?.internalValue;
    }
    if (this._httpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpParameters = this._httpParameters?.internalValue;
    }
    if (this._inputTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTemplate = this._inputTemplate;
    }
    if (this._kinesisStreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamParameters = this._kinesisStreamParameters?.internalValue;
    }
    if (this._lambdaFunctionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionParameters = this._lambdaFunctionParameters?.internalValue;
    }
    if (this._redshiftDataParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftDataParameters = this._redshiftDataParameters?.internalValue;
    }
    if (this._sageMakerPipelineParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerPipelineParameters = this._sageMakerPipelineParameters?.internalValue;
    }
    if (this._sqsQueueParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueParameters = this._sqsQueueParameters?.internalValue;
    }
    if (this._stepFunctionStateMachineParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctionStateMachineParameters = this._stepFunctionStateMachineParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchJobParameters.internalValue = undefined;
      this._cloudWatchLogsParameters.internalValue = undefined;
      this._ecsTaskParameters.internalValue = undefined;
      this._eventBridgeEventBusParameters.internalValue = undefined;
      this._httpParameters.internalValue = undefined;
      this._inputTemplate = undefined;
      this._kinesisStreamParameters.internalValue = undefined;
      this._lambdaFunctionParameters.internalValue = undefined;
      this._redshiftDataParameters.internalValue = undefined;
      this._sageMakerPipelineParameters.internalValue = undefined;
      this._sqsQueueParameters.internalValue = undefined;
      this._stepFunctionStateMachineParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchJobParameters.internalValue = value.batchJobParameters;
      this._cloudWatchLogsParameters.internalValue = value.cloudWatchLogsParameters;
      this._ecsTaskParameters.internalValue = value.ecsTaskParameters;
      this._eventBridgeEventBusParameters.internalValue = value.eventBridgeEventBusParameters;
      this._httpParameters.internalValue = value.httpParameters;
      this._inputTemplate = value.inputTemplate;
      this._kinesisStreamParameters.internalValue = value.kinesisStreamParameters;
      this._lambdaFunctionParameters.internalValue = value.lambdaFunctionParameters;
      this._redshiftDataParameters.internalValue = value.redshiftDataParameters;
      this._sageMakerPipelineParameters.internalValue = value.sageMakerPipelineParameters;
      this._sqsQueueParameters.internalValue = value.sqsQueueParameters;
      this._stepFunctionStateMachineParameters.internalValue = value.stepFunctionStateMachineParameters;
    }
  }

  // batch_job_parameters - computed: false, optional: true, required: false
  private _batchJobParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParametersOutputReference(this, "batch_job_parameters");
  public get batchJobParameters() {
    return this._batchJobParameters;
  }
  public putBatchJobParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersBatchJobParameters) {
    this._batchJobParameters.internalValue = value;
  }
  public resetBatchJobParameters() {
    this._batchJobParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchJobParametersInput() {
    return this._batchJobParameters.internalValue;
  }

  // cloud_watch_logs_parameters - computed: false, optional: true, required: false
  private _cloudWatchLogsParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParametersOutputReference(this, "cloud_watch_logs_parameters");
  public get cloudWatchLogsParameters() {
    return this._cloudWatchLogsParameters;
  }
  public putCloudWatchLogsParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersCloudWatchLogsParameters) {
    this._cloudWatchLogsParameters.internalValue = value;
  }
  public resetCloudWatchLogsParameters() {
    this._cloudWatchLogsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsParametersInput() {
    return this._cloudWatchLogsParameters.internalValue;
  }

  // ecs_task_parameters - computed: false, optional: true, required: false
  private _ecsTaskParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParametersOutputReference(this, "ecs_task_parameters");
  public get ecsTaskParameters() {
    return this._ecsTaskParameters;
  }
  public putEcsTaskParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEcsTaskParameters) {
    this._ecsTaskParameters.internalValue = value;
  }
  public resetEcsTaskParameters() {
    this._ecsTaskParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTaskParametersInput() {
    return this._ecsTaskParameters.internalValue;
  }

  // event_bridge_event_bus_parameters - computed: false, optional: true, required: false
  private _eventBridgeEventBusParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParametersOutputReference(this, "event_bridge_event_bus_parameters");
  public get eventBridgeEventBusParameters() {
    return this._eventBridgeEventBusParameters;
  }
  public putEventBridgeEventBusParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersEventBridgeEventBusParameters) {
    this._eventBridgeEventBusParameters.internalValue = value;
  }
  public resetEventBridgeEventBusParameters() {
    this._eventBridgeEventBusParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeEventBusParametersInput() {
    return this._eventBridgeEventBusParameters.internalValue;
  }

  // http_parameters - computed: false, optional: true, required: false
  private _httpParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }
  public putHttpParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersHttpParameters) {
    this._httpParameters.internalValue = value;
  }
  public resetHttpParameters() {
    this._httpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpParametersInput() {
    return this._httpParameters.internalValue;
  }

  // input_template - computed: false, optional: true, required: false
  private _inputTemplate?: string; 
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
  public set inputTemplate(value: string) {
    this._inputTemplate = value;
  }
  public resetInputTemplate() {
    this._inputTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTemplateInput() {
    return this._inputTemplate;
  }

  // kinesis_stream_parameters - computed: false, optional: true, required: false
  private _kinesisStreamParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParametersOutputReference(this, "kinesis_stream_parameters");
  public get kinesisStreamParameters() {
    return this._kinesisStreamParameters;
  }
  public putKinesisStreamParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersKinesisStreamParameters) {
    this._kinesisStreamParameters.internalValue = value;
  }
  public resetKinesisStreamParameters() {
    this._kinesisStreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamParametersInput() {
    return this._kinesisStreamParameters.internalValue;
  }

  // lambda_function_parameters - computed: false, optional: true, required: false
  private _lambdaFunctionParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParametersOutputReference(this, "lambda_function_parameters");
  public get lambdaFunctionParameters() {
    return this._lambdaFunctionParameters;
  }
  public putLambdaFunctionParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersLambdaFunctionParameters) {
    this._lambdaFunctionParameters.internalValue = value;
  }
  public resetLambdaFunctionParameters() {
    this._lambdaFunctionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionParametersInput() {
    return this._lambdaFunctionParameters.internalValue;
  }

  // redshift_data_parameters - computed: false, optional: true, required: false
  private _redshiftDataParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParametersOutputReference(this, "redshift_data_parameters");
  public get redshiftDataParameters() {
    return this._redshiftDataParameters;
  }
  public putRedshiftDataParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersRedshiftDataParameters) {
    this._redshiftDataParameters.internalValue = value;
  }
  public resetRedshiftDataParameters() {
    this._redshiftDataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftDataParametersInput() {
    return this._redshiftDataParameters.internalValue;
  }

  // sage_maker_pipeline_parameters - computed: false, optional: true, required: false
  private _sageMakerPipelineParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParametersOutputReference(this, "sage_maker_pipeline_parameters");
  public get sageMakerPipelineParameters() {
    return this._sageMakerPipelineParameters;
  }
  public putSageMakerPipelineParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSageMakerPipelineParameters) {
    this._sageMakerPipelineParameters.internalValue = value;
  }
  public resetSageMakerPipelineParameters() {
    this._sageMakerPipelineParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerPipelineParametersInput() {
    return this._sageMakerPipelineParameters.internalValue;
  }

  // sqs_queue_parameters - computed: false, optional: true, required: false
  private _sqsQueueParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParametersOutputReference(this, "sqs_queue_parameters");
  public get sqsQueueParameters() {
    return this._sqsQueueParameters;
  }
  public putSqsQueueParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersSqsQueueParameters) {
    this._sqsQueueParameters.internalValue = value;
  }
  public resetSqsQueueParameters() {
    this._sqsQueueParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueParametersInput() {
    return this._sqsQueueParameters.internalValue;
  }

  // step_function_state_machine_parameters - computed: false, optional: true, required: false
  private _stepFunctionStateMachineParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParametersOutputReference(this, "step_function_state_machine_parameters");
  public get stepFunctionStateMachineParameters() {
    return this._stepFunctionStateMachineParameters;
  }
  public putStepFunctionStateMachineParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersStepFunctionStateMachineParameters) {
    this._stepFunctionStateMachineParameters.internalValue = value;
  }
  public resetStepFunctionStateMachineParameters() {
    this._stepFunctionStateMachineParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionStateMachineParametersInput() {
    return this._stepFunctionStateMachineParameters.internalValue;
  }
}
export interface DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec {
  /**
  * A description of the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#description DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * The state the pipe should be in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#desired_state DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#desired_state}
  */
  readonly desiredState?: string;
  /**
  * The ARN of the enrichment resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#enrichment DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#enrichment}
  */
  readonly enrichment?: string;
  /**
  * The parameters required to set up enrichment on your pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#enrichment_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#enrichment_parameters}
  */
  readonly enrichmentParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters;
  /**
  * The name of the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#name DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The ARN of the role that allows the pipe to send data to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#role_arn DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * The ARN of the source resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#source DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#source}
  */
  readonly source: string;
  /**
  * The parameters required to set up a source for your pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#source_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#source_parameters}
  */
  readonly sourceParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters;
  /**
  * The list of key-value pairs to associate with the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#tags DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The ARN of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#target DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#target}
  */
  readonly target: string;
  /**
  * The parameters required to set up a target for your pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#target_parameters DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest#target_parameters}
  */
  readonly targetParameters?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters;
}

export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    enrichment: cdktf.stringToTerraform(struct!.enrichment),
    enrichment_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersToTerraform(struct!.enrichmentParameters),
    name: cdktf.stringToTerraform(struct!.name),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    source: cdktf.stringToTerraform(struct!.source),
    source_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersToTerraform(struct!.sourceParameters),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    target: cdktf.stringToTerraform(struct!.target),
    target_parameters: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersToTerraform(struct!.targetParameters),
  }
}


export function dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrichment: {
      value: cdktf.stringToHclTerraform(struct!.enrichment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrichment_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersToHclTerraform(struct!.enrichmentParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersToHclTerraform(struct!.sourceParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters",
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
    target_parameters: {
      value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersToHclTerraform(struct!.targetParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._enrichment !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment;
    }
    if (this._enrichmentParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichmentParameters = this._enrichmentParameters?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameters = this._sourceParameters?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetParameters = this._targetParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._desiredState = undefined;
      this._enrichment = undefined;
      this._enrichmentParameters.internalValue = undefined;
      this._name = undefined;
      this._roleArn = undefined;
      this._source = undefined;
      this._sourceParameters.internalValue = undefined;
      this._tags = undefined;
      this._target = undefined;
      this._targetParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._desiredState = value.desiredState;
      this._enrichment = value.enrichment;
      this._enrichmentParameters.internalValue = value.enrichmentParameters;
      this._name = value.name;
      this._roleArn = value.roleArn;
      this._source = value.source;
      this._sourceParameters.internalValue = value.sourceParameters;
      this._tags = value.tags;
      this._target = value.target;
      this._targetParameters.internalValue = value.targetParameters;
    }
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

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment?: string; 
  public get enrichment() {
    return this.getStringAttribute('enrichment');
  }
  public set enrichment(value: string) {
    this._enrichment = value;
  }
  public resetEnrichment() {
    this._enrichment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment;
  }

  // enrichment_parameters - computed: false, optional: true, required: false
  private _enrichmentParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParametersOutputReference(this, "enrichment_parameters");
  public get enrichmentParameters() {
    return this._enrichmentParameters;
  }
  public putEnrichmentParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecEnrichmentParameters) {
    this._enrichmentParameters.internalValue = value;
  }
  public resetEnrichmentParameters() {
    this._enrichmentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentParametersInput() {
    return this._enrichmentParameters.internalValue;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_parameters - computed: false, optional: true, required: false
  private _sourceParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParametersOutputReference(this, "source_parameters");
  public get sourceParameters() {
    return this._sourceParameters;
  }
  public putSourceParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecSourceParameters) {
    this._sourceParameters.internalValue = value;
  }
  public resetSourceParameters() {
    this._sourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParametersInput() {
    return this._sourceParameters.internalValue;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_parameters - computed: false, optional: true, required: false
  private _targetParameters = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParametersOutputReference(this, "target_parameters");
  public get targetParameters() {
    return this._targetParameters;
  }
  public putTargetParameters(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecTargetParameters) {
    this._targetParameters.internalValue = value;
  }
  public resetTargetParameters() {
    this._targetParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetParametersInput() {
    return this._targetParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest k8s_pipes_services_k8s_aws_pipe_v1alpha1_manifest}
*/
export class DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pipes_services_k8s_aws_pipe_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPipesServicesK8SAwsPipeV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pipes_services_k8s_aws_pipe_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/pipes_services_k8s_aws_pipe_v1alpha1_manifest k8s_pipes_services_k8s_aws_pipe_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pipes_services_k8s_aws_pipe_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPipesServicesK8SAwsPipeV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
