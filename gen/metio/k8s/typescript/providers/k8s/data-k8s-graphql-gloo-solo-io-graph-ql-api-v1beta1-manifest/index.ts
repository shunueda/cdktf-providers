// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#metadata DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#spec DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec;
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#annotations DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#labels DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespace DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#max_depth DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#max_depth}
  */
  readonly maxDepth?: number;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptionsToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_depth: cdktf.numberToTerraform(struct!.maxDepth),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptionsToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxDepth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxDepth = value.maxDepth;
    }
  }

  // max_depth - computed: false, optional: true, required: false
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  public resetMaxDepth() {
    this._maxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#method_name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#method_name}
  */
  readonly methodName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#outgoing_message_json DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#outgoing_message_json}
  */
  readonly outgoingMessageJson?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#request_metadata DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#request_metadata}
  */
  readonly requestMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#service_name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransformToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method_name: cdktf.stringToTerraform(struct!.methodName),
    outgoing_message_json: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.outgoingMessageJson),
    request_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestMetadata),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransformToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method_name: {
      value: cdktf.stringToHclTerraform(struct!.methodName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outgoing_message_json: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.outgoingMessageJson),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodName = this._methodName;
    }
    if (this._outgoingMessageJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.outgoingMessageJson = this._outgoingMessageJson;
    }
    if (this._requestMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMetadata = this._requestMetadata;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methodName = undefined;
      this._outgoingMessageJson = undefined;
      this._requestMetadata = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methodName = value.methodName;
      this._outgoingMessageJson = value.outgoingMessageJson;
      this._requestMetadata = value.requestMetadata;
      this._serviceName = value.serviceName;
    }
  }

  // method_name - computed: false, optional: true, required: false
  private _methodName?: string; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string) {
    this._methodName = value;
  }
  public resetMethodName() {
    this._methodName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName;
  }

  // outgoing_message_json - computed: false, optional: true, required: false
  private _outgoingMessageJson?: { [key: string]: string }; 
  public get outgoingMessageJson() {
    return this.getStringMapAttribute('outgoing_message_json');
  }
  public set outgoingMessageJson(value: { [key: string]: string }) {
    this._outgoingMessageJson = value;
  }
  public resetOutgoingMessageJson() {
    this._outgoingMessageJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingMessageJsonInput() {
    return this._outgoingMessageJson;
  }

  // request_metadata - computed: false, optional: true, required: false
  private _requestMetadata?: { [key: string]: string }; 
  public get requestMetadata() {
    return this.getStringMapAttribute('request_metadata');
  }
  public set requestMetadata(value: { [key: string]: string }) {
    this._requestMetadata = value;
  }
  public resetRequestMetadata() {
    this._requestMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMetadataInput() {
    return this._requestMetadata;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespace DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRefToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRefToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef | cdktf.IResolvable): any {
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

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#request_transform DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#request_transform}
  */
  readonly requestTransform?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#span_name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#span_name}
  */
  readonly spanName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#timeout DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#upstream_ref DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#upstream_ref}
  */
  readonly upstreamRef?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_transform: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransformToTerraform(struct!.requestTransform),
    span_name: cdktf.stringToTerraform(struct!.spanName),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    upstream_ref: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRefToTerraform(struct!.upstreamRef),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_transform: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransformToHclTerraform(struct!.requestTransform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform",
    },
    span_name: {
      value: cdktf.stringToHclTerraform(struct!.spanName),
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
    upstream_ref: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRefToHclTerraform(struct!.upstreamRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestTransform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTransform = this._requestTransform?.internalValue;
    }
    if (this._spanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanName = this._spanName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._upstreamRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRef = this._upstreamRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestTransform.internalValue = undefined;
      this._spanName = undefined;
      this._timeout = undefined;
      this._upstreamRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestTransform.internalValue = value.requestTransform;
      this._spanName = value.spanName;
      this._timeout = value.timeout;
      this._upstreamRef.internalValue = value.upstreamRef;
    }
  }

  // request_transform - computed: false, optional: true, required: false
  private _requestTransform = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransformOutputReference(this, "request_transform");
  public get requestTransform() {
    return this._requestTransform;
  }
  public putRequestTransform(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverRequestTransform) {
    this._requestTransform.internalValue = value;
  }
  public resetRequestTransform() {
    this._requestTransform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTransformInput() {
    return this._requestTransform.internalValue;
  }

  // span_name - computed: false, optional: true, required: false
  private _spanName?: string; 
  public get spanName() {
    return this.getStringAttribute('span_name');
  }
  public set spanName(value: string) {
    this._spanName = value;
  }
  public resetSpanName() {
    this._spanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNameInput() {
    return this._spanName;
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

  // upstream_ref - computed: false, optional: true, required: false
  private _upstreamRef = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRefOutputReference(this, "upstream_ref");
  public get upstreamRef() {
    return this._upstreamRef;
  }
  public putUpstreamRef(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverUpstreamRef) {
    this._upstreamRef.internalValue = value;
  }
  public resetUpstreamRef() {
    this._upstreamRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRefInput() {
    return this._upstreamRef.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#delay DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#response DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#response}
  */
  readonly response?: { [key: string]: string };
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponseToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponseToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._response = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._response = value.response;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // response - computed: false, optional: true, required: false
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#async_response DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#async_response}
  */
  readonly asyncResponse?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#error_response DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#error_response}
  */
  readonly errorResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#sync_response DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#sync_response}
  */
  readonly syncResponse?: { [key: string]: string };
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async_response: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponseToTerraform(struct!.asyncResponse),
    error_response: cdktf.stringToTerraform(struct!.errorResponse),
    sync_response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.syncResponse),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async_response: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponseToHclTerraform(struct!.asyncResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse",
    },
    error_response: {
      value: cdktf.stringToHclTerraform(struct!.errorResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.syncResponse),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncResponse = this._asyncResponse?.internalValue;
    }
    if (this._errorResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponse = this._errorResponse;
    }
    if (this._syncResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResponse = this._syncResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asyncResponse.internalValue = undefined;
      this._errorResponse = undefined;
      this._syncResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asyncResponse.internalValue = value.asyncResponse;
      this._errorResponse = value.errorResponse;
      this._syncResponse = value.syncResponse;
    }
  }

  // async_response - computed: false, optional: true, required: false
  private _asyncResponse = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponseOutputReference(this, "async_response");
  public get asyncResponse() {
    return this._asyncResponse;
  }
  public putAsyncResponse(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverAsyncResponse) {
    this._asyncResponse.internalValue = value;
  }
  public resetAsyncResponse() {
    this._asyncResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncResponseInput() {
    return this._asyncResponse.internalValue;
  }

  // error_response - computed: false, optional: true, required: false
  private _errorResponse?: string; 
  public get errorResponse() {
    return this.getStringAttribute('error_response');
  }
  public set errorResponse(value: string) {
    this._errorResponse = value;
  }
  public resetErrorResponse() {
    this._errorResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseInput() {
    return this._errorResponse;
  }

  // sync_response - computed: false, optional: true, required: false
  private _syncResponse?: { [key: string]: string }; 
  public get syncResponse() {
    return this.getStringMapAttribute('sync_response');
  }
  public set syncResponse(value: { [key: string]: string }) {
    this._syncResponse = value;
  }
  public resetSyncResponse() {
    this._syncResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResponseInput() {
    return this._syncResponse;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#body DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#headers DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#query_params DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#query_params}
  */
  readonly queryParams?: { [key: string]: string };
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequestToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryParams),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequestToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.body),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers = undefined;
      this._queryParams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers = value.headers;
      this._queryParams = value.queryParams;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: string }; 
  public get body() {
    return this.getStringMapAttribute('body');
  }
  public set body(value: { [key: string]: string }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: { [key: string]: string }; 
  public get queryParams() {
    return this.getStringMapAttribute('query_params');
  }
  public set queryParams(value: { [key: string]: string }) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#result_root DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#result_root}
  */
  readonly resultRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#setters DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#setters}
  */
  readonly setters?: { [key: string]: string };
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponseToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    result_root: cdktf.stringToTerraform(struct!.resultRoot),
    setters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.setters),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponseToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    result_root: {
      value: cdktf.stringToHclTerraform(struct!.resultRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.setters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resultRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultRoot = this._resultRoot;
    }
    if (this._setters !== undefined) {
      hasAnyValues = true;
      internalValueResult.setters = this._setters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resultRoot = undefined;
      this._setters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resultRoot = value.resultRoot;
      this._setters = value.setters;
    }
  }

  // result_root - computed: false, optional: true, required: false
  private _resultRoot?: string; 
  public get resultRoot() {
    return this.getStringAttribute('result_root');
  }
  public set resultRoot(value: string) {
    this._resultRoot = value;
  }
  public resetResultRoot() {
    this._resultRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultRootInput() {
    return this._resultRoot;
  }

  // setters - computed: false, optional: true, required: false
  private _setters?: { [key: string]: string }; 
  public get setters() {
    return this.getStringMapAttribute('setters');
  }
  public set setters(value: { [key: string]: string }) {
    this._setters = value;
  }
  public resetSetters() {
    this._setters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settersInput() {
    return this._setters;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespace DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRefToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRefToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef | cdktf.IResolvable): any {
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

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#request DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#request}
  */
  readonly request?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#response DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#response}
  */
  readonly response?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#span_name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#span_name}
  */
  readonly spanName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#timeout DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#upstream_ref DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#upstream_ref}
  */
  readonly upstreamRef?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequestToTerraform(struct!.request),
    response: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponseToTerraform(struct!.response),
    span_name: cdktf.stringToTerraform(struct!.spanName),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    upstream_ref: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRefToTerraform(struct!.upstreamRef),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest",
    },
    response: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse",
    },
    span_name: {
      value: cdktf.stringToHclTerraform(struct!.spanName),
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
    upstream_ref: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRefToHclTerraform(struct!.upstreamRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    if (this._spanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanName = this._spanName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._upstreamRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRef = this._upstreamRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
      this._spanName = undefined;
      this._timeout = undefined;
      this._upstreamRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
      this._spanName = value.spanName;
      this._timeout = value.timeout;
      this._upstreamRef.internalValue = value.upstreamRef;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }

  // span_name - computed: false, optional: true, required: false
  private _spanName?: string; 
  public get spanName() {
    return this.getStringAttribute('span_name');
  }
  public set spanName(value: string) {
    this._spanName = value;
  }
  public resetSpanName() {
    this._spanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNameInput() {
    return this._spanName;
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

  // upstream_ref - computed: false, optional: true, required: false
  private _upstreamRef = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRefOutputReference(this, "upstream_ref");
  public get upstreamRef() {
    return this._upstreamRef;
  }
  public putUpstreamRef(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverUpstreamRef) {
    this._upstreamRef.internalValue = value;
  }
  public resetUpstreamRef() {
    this._upstreamRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRefInput() {
    return this._upstreamRef.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#grpc_resolver DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#grpc_resolver}
  */
  readonly grpcResolver?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#mock_resolver DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#mock_resolver}
  */
  readonly mockResolver?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#rest_resolver DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#rest_resolver}
  */
  readonly restResolver?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#stat_prefix DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#stat_prefix}
  */
  readonly statPrefix?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_resolver: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverToTerraform(struct!.grpcResolver),
    mock_resolver: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverToTerraform(struct!.mockResolver),
    rest_resolver: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverToTerraform(struct!.restResolver),
    stat_prefix: cdktf.stringToTerraform(struct!.statPrefix),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_resolver: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverToHclTerraform(struct!.grpcResolver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver",
    },
    mock_resolver: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverToHclTerraform(struct!.mockResolver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver",
    },
    rest_resolver: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverToHclTerraform(struct!.restResolver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver",
    },
    stat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcResolver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcResolver = this._grpcResolver?.internalValue;
    }
    if (this._mockResolver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mockResolver = this._mockResolver?.internalValue;
    }
    if (this._restResolver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restResolver = this._restResolver?.internalValue;
    }
    if (this._statPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statPrefix = this._statPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcResolver.internalValue = undefined;
      this._mockResolver.internalValue = undefined;
      this._restResolver.internalValue = undefined;
      this._statPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcResolver.internalValue = value.grpcResolver;
      this._mockResolver.internalValue = value.mockResolver;
      this._restResolver.internalValue = value.restResolver;
      this._statPrefix = value.statPrefix;
    }
  }

  // grpc_resolver - computed: false, optional: true, required: false
  private _grpcResolver = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolverOutputReference(this, "grpc_resolver");
  public get grpcResolver() {
    return this._grpcResolver;
  }
  public putGrpcResolver(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsGrpcResolver) {
    this._grpcResolver.internalValue = value;
  }
  public resetGrpcResolver() {
    this._grpcResolver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcResolverInput() {
    return this._grpcResolver.internalValue;
  }

  // mock_resolver - computed: false, optional: true, required: false
  private _mockResolver = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolverOutputReference(this, "mock_resolver");
  public get mockResolver() {
    return this._mockResolver;
  }
  public putMockResolver(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsMockResolver) {
    this._mockResolver.internalValue = value;
  }
  public resetMockResolver() {
    this._mockResolver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockResolverInput() {
    return this._mockResolver.internalValue;
  }

  // rest_resolver - computed: false, optional: true, required: false
  private _restResolver = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolverOutputReference(this, "rest_resolver");
  public get restResolver() {
    return this._restResolver;
  }
  public putRestResolver(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsRestResolver) {
    this._restResolver.internalValue = value;
  }
  public resetRestResolver() {
    this._restResolver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restResolverInput() {
    return this._restResolver.internalValue;
  }

  // stat_prefix - computed: false, optional: true, required: false
  private _statPrefix?: string; 
  public get statPrefix() {
    return this.getStringAttribute('stat_prefix');
  }
  public set statPrefix(value: string) {
    this._statPrefix = value;
  }
  public resetStatPrefix() {
    this._statPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statPrefixInput() {
    return this._statPrefix;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#enable_introspection DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#enable_introspection}
  */
  readonly enableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#options DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#options}
  */
  readonly options?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#resolutions DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#resolutions}
  */
  readonly resolutions?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_introspection: cdktf.booleanToTerraform(struct!.enableIntrospection),
    options: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptionsToTerraform(struct!.options),
    resolutions: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsToTerraform(struct!.resolutions),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions",
    },
    resolutions: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsToHclTerraform(struct!.resolutions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntrospection = this._enableIntrospection;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._resolutions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutions = this._resolutions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIntrospection = undefined;
      this._options.internalValue = undefined;
      this._resolutions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIntrospection = value.enableIntrospection;
      this._options.internalValue = value.options;
      this._resolutions.internalValue = value.resolutions;
    }
  }

  // enable_introspection - computed: false, optional: true, required: false
  private _enableIntrospection?: boolean | cdktf.IResolvable; 
  public get enableIntrospection() {
    return this.getBooleanAttribute('enable_introspection');
  }
  public set enableIntrospection(value: boolean | cdktf.IResolvable) {
    this._enableIntrospection = value;
  }
  public resetEnableIntrospection() {
    this._enableIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntrospectionInput() {
    return this._enableIntrospection;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // resolutions - computed: false, optional: true, required: false
  private _resolutions = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutionsOutputReference(this, "resolutions");
  public get resolutions() {
    return this._resolutions;
  }
  public putResolutions(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalResolutions) {
    this._resolutions.internalValue = value;
  }
  public resetResolutions() {
    this._resolutions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionsInput() {
    return this._resolutions.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespace DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRefToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRefToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef | cdktf.IResolvable): any {
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

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#headers DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#query_params DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#query_params}
  */
  readonly queryParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#span_name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#span_name}
  */
  readonly spanName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#upstream_ref DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#upstream_ref}
  */
  readonly upstreamRef?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryParams),
    span_name: cdktf.stringToTerraform(struct!.spanName),
    upstream_ref: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRefToTerraform(struct!.upstreamRef),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    span_name: {
      value: cdktf.stringToHclTerraform(struct!.spanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_ref: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRefToHclTerraform(struct!.upstreamRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    if (this._spanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanName = this._spanName;
    }
    if (this._upstreamRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRef = this._upstreamRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._queryParams = undefined;
      this._spanName = undefined;
      this._upstreamRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._queryParams = value.queryParams;
      this._spanName = value.spanName;
      this._upstreamRef.internalValue = value.upstreamRef;
    }
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

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: { [key: string]: string }; 
  public get queryParams() {
    return this.getStringMapAttribute('query_params');
  }
  public set queryParams(value: { [key: string]: string }) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }

  // span_name - computed: false, optional: true, required: false
  private _spanName?: string; 
  public get spanName() {
    return this.getStringAttribute('span_name');
  }
  public set spanName(value: string) {
    this._spanName = value;
  }
  public resetSpanName() {
    this._spanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNameInput() {
    return this._spanName;
  }

  // upstream_ref - computed: false, optional: true, required: false
  private _upstreamRef = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRefOutputReference(this, "upstream_ref");
  public get upstreamRef() {
    return this._upstreamRef;
  }
  public putUpstreamRef(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteUpstreamRef) {
    this._upstreamRef.internalValue = value;
  }
  public resetUpstreamRef() {
    this._upstreamRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRefInput() {
    return this._upstreamRef.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#local DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#local}
  */
  readonly local?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#remote DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#remote}
  */
  readonly remote?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalToTerraform(struct!.local),
    remote: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteToTerraform(struct!.remote),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal",
    },
    remote: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
      this._remote.internalValue = value.remote;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespace DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs | cdktf.IResolvable): any {
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

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsOutputReference {
    return new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#config_map_refs DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#config_map_refs}
  */
  readonly configMapRefs?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs[] | cdktf.IResolvable;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStructToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_refs: cdktf.listMapper(dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsToTerraform, false)(struct!.configMapRefs),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStructToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_refs: {
      value: cdktf.listMapperHcl(dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsToHclTerraform, false)(struct!.configMapRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRefs = this._configMapRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRefs.internalValue = value.configMapRefs;
    }
  }

  // config_map_refs - computed: false, optional: true, required: false
  private _configMapRefs = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefsList(this, "config_map_refs", false);
  public get configMapRefs() {
    return this._configMapRefs;
  }
  public putConfigMapRefs(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListConfigMapRefs[] | cdktf.IResolvable) {
    this._configMapRefs.internalValue = value;
  }
  public resetConfigMapRefs() {
    this._configMapRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefsInput() {
    return this._configMapRefs.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#proto_descriptor DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#proto_descriptor}
  */
  readonly protoDescriptor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#proto_descriptor_bin DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#proto_descriptor_bin}
  */
  readonly protoDescriptorBin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#proto_refs_list DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#proto_refs_list}
  */
  readonly protoRefsList?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto_descriptor: cdktf.stringToTerraform(struct!.protoDescriptor),
    proto_descriptor_bin: cdktf.stringToTerraform(struct!.protoDescriptorBin),
    proto_refs_list: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStructToTerraform(struct!.protoRefsList),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto_descriptor: {
      value: cdktf.stringToHclTerraform(struct!.protoDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_descriptor_bin: {
      value: cdktf.stringToHclTerraform(struct!.protoDescriptorBin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_refs_list: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStructToHclTerraform(struct!.protoRefsList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protoDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptor = this._protoDescriptor;
    }
    if (this._protoDescriptorBin !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptorBin = this._protoDescriptorBin;
    }
    if (this._protoRefsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoRefsList = this._protoRefsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protoDescriptor = undefined;
      this._protoDescriptorBin = undefined;
      this._protoRefsList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protoDescriptor = value.protoDescriptor;
      this._protoDescriptorBin = value.protoDescriptorBin;
      this._protoRefsList.internalValue = value.protoRefsList;
    }
  }

  // proto_descriptor - computed: false, optional: true, required: false
  private _protoDescriptor?: string; 
  public get protoDescriptor() {
    return this.getStringAttribute('proto_descriptor');
  }
  public set protoDescriptor(value: string) {
    this._protoDescriptor = value;
  }
  public resetProtoDescriptor() {
    this._protoDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorInput() {
    return this._protoDescriptor;
  }

  // proto_descriptor_bin - computed: false, optional: true, required: false
  private _protoDescriptorBin?: string; 
  public get protoDescriptorBin() {
    return this.getStringAttribute('proto_descriptor_bin');
  }
  public set protoDescriptorBin(value: string) {
    this._protoDescriptorBin = value;
  }
  public resetProtoDescriptorBin() {
    this._protoDescriptorBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorBinInput() {
    return this._protoDescriptorBin;
  }

  // proto_refs_list - computed: false, optional: true, required: false
  private _protoRefsList = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStructOutputReference(this, "proto_refs_list");
  public get protoRefsList() {
    return this._protoRefsList;
  }
  public putProtoRefsList(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryProtoRefsListStruct) {
    this._protoRefsList.internalValue = value;
  }
  public resetProtoRefsList() {
    this._protoRefsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoRefsListInput() {
    return this._protoRefsList.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#executor DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#executor}
  */
  readonly executor?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#grpc_descriptor_registry DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#grpc_descriptor_registry}
  */
  readonly grpcDescriptorRegistry?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#schema_definition DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    executor: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorToTerraform(struct!.executor),
    grpc_descriptor_registry: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryToTerraform(struct!.grpcDescriptorRegistry),
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    executor: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorToHclTerraform(struct!.executor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor",
    },
    grpc_descriptor_registry: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryToHclTerraform(struct!.grpcDescriptorRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry",
    },
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executor = this._executor?.internalValue;
    }
    if (this._grpcDescriptorRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcDescriptorRegistry = this._grpcDescriptorRegistry?.internalValue;
    }
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executor.internalValue = undefined;
      this._grpcDescriptorRegistry.internalValue = undefined;
      this._schemaDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executor.internalValue = value.executor;
      this._grpcDescriptorRegistry.internalValue = value.grpcDescriptorRegistry;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // executor - computed: false, optional: true, required: false
  private _executor = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutorOutputReference(this, "executor");
  public get executor() {
    return this._executor;
  }
  public putExecutor(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaExecutor) {
    this._executor.internalValue = value;
  }
  public resetExecutor() {
    this._executor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorInput() {
    return this._executor.internalValue;
  }

  // grpc_descriptor_registry - computed: false, optional: true, required: false
  private _grpcDescriptorRegistry = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistryOutputReference(this, "grpc_descriptor_registry");
  public get grpcDescriptorRegistry() {
    return this._grpcDescriptorRegistry;
  }
  public putGrpcDescriptorRegistry(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaGrpcDescriptorRegistry) {
    this._grpcDescriptorRegistry.internalValue = value;
  }
  public resetGrpcDescriptorRegistry() {
    this._grpcDescriptorRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcDescriptorRegistryInput() {
    return this._grpcDescriptorRegistry.internalValue;
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#statuses DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#statuses}
  */
  readonly statuses?: { [key: string]: string };
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatusesToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.statuses),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatusesToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statuses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.statuses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatusesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statuses = value.statuses;
    }
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: { [key: string]: string }; 
  public get statuses() {
    return this.getStringMapAttribute('statuses');
  }
  public set statuses(value: { [key: string]: string }) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#log_sensitive_info DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#log_sensitive_info}
  */
  readonly logSensitiveInfo?: boolean | cdktf.IResolvable;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptionsToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_sensitive_info: cdktf.booleanToTerraform(struct!.logSensitiveInfo),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptionsToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_sensitive_info: {
      value: cdktf.booleanToHclTerraform(struct!.logSensitiveInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSensitiveInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSensitiveInfo = this._logSensitiveInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logSensitiveInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logSensitiveInfo = value.logSensitiveInfo;
    }
  }

  // log_sensitive_info - computed: false, optional: true, required: false
  private _logSensitiveInfo?: boolean | cdktf.IResolvable; 
  public get logSensitiveInfo() {
    return this.getBooleanAttribute('log_sensitive_info');
  }
  public set logSensitiveInfo(value: boolean | cdktf.IResolvable) {
    this._logSensitiveInfo = value;
  }
  public resetLogSensitiveInfo() {
    this._logSensitiveInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSensitiveInfoInput() {
    return this._logSensitiveInfo;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#cache_size DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#cache_size}
  */
  readonly cacheSize?: number;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfigToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_size: cdktf.numberToTerraform(struct!.cacheSize),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfigToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_size: {
      value: cdktf.numberToHclTerraform(struct!.cacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSize = this._cacheSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheSize = value.cacheSize;
    }
  }

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#args DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#query_name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#query_name}
  */
  readonly queryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#selection_set DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#selection_set}
  */
  readonly selectionSet?: string;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMergeToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    selection_set: cdktf.stringToTerraform(struct!.selectionSet),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMergeToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_set: {
      value: cdktf.stringToHclTerraform(struct!.selectionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMergeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._selectionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionSet = this._selectionSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._queryName = undefined;
      this._selectionSet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._queryName = value.queryName;
      this._selectionSet = value.selectionSet;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // query_name - computed: false, optional: true, required: false
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  public resetQueryName() {
    this._queryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // selection_set - computed: false, optional: true, required: false
  private _selectionSet?: string; 
  public get selectionSet() {
    return this.getStringAttribute('selection_set');
  }
  public set selectionSet(value: string) {
    this._selectionSet = value;
  }
  public resetSelectionSet() {
    this._selectionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionSetInput() {
    return this._selectionSet;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#name DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespace DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#type_merge DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#type_merge}
  */
  readonly typeMerge?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type_merge: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMergeToTerraform(struct!.typeMerge),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas | cdktf.IResolvable): any {
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
    type_merge: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMergeToHclTerraform(struct!.typeMerge),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas | cdktf.IResolvable | undefined {
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
    if (this._typeMerge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeMerge = this._typeMerge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._typeMerge.internalValue = undefined;
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
      this._typeMerge.internalValue = value.typeMerge;
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

  // type_merge - computed: false, optional: true, required: false
  private _typeMerge = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMergeOutputReference(this, "type_merge");
  public get typeMerge() {
    return this._typeMerge;
  }
  public putTypeMerge(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasTypeMerge) {
    this._typeMerge.internalValue = value;
  }
  public resetTypeMerge() {
    this._typeMerge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMergeInput() {
    return this._typeMerge.internalValue;
  }
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasList extends cdktf.ComplexList {
  public internalValue? : DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasOutputReference {
    return new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#subschemas DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#subschemas}
  */
  readonly subschemas?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas[] | cdktf.IResolvable;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subschemas: cdktf.listMapper(dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasToTerraform, false)(struct!.subschemas),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subschemas: {
      value: cdktf.listMapperHcl(dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasToHclTerraform, false)(struct!.subschemas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subschemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subschemas = this._subschemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subschemas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subschemas.internalValue = value.subschemas;
    }
  }

  // subschemas - computed: false, optional: true, required: false
  private _subschemas = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemasList(this, "subschemas", false);
  public get subschemas() {
    return this._subschemas;
  }
  public putSubschemas(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaSubschemas[] | cdktf.IResolvable) {
    this._subschemas.internalValue = value;
  }
  public resetSubschemas() {
    this._subschemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subschemasInput() {
    return this._subschemas.internalValue;
  }
}
export interface DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#allowed_query_hashes DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#allowed_query_hashes}
  */
  readonly allowedQueryHashes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#executable_schema DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#executable_schema}
  */
  readonly executableSchema?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#namespaced_statuses DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#options DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#options}
  */
  readonly options?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#persisted_query_cache_config DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#persisted_query_cache_config}
  */
  readonly persistedQueryCacheConfig?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#stat_prefix DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#stat_prefix}
  */
  readonly statPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#stitched_schema DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest#stitched_schema}
  */
  readonly stitchedSchema?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema;
}

export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecToTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_query_hashes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedQueryHashes),
    executable_schema: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaToTerraform(struct!.executableSchema),
    namespaced_statuses: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
    options: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptionsToTerraform(struct!.options),
    persisted_query_cache_config: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfigToTerraform(struct!.persistedQueryCacheConfig),
    stat_prefix: cdktf.stringToTerraform(struct!.statPrefix),
    stitched_schema: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaToTerraform(struct!.stitchedSchema),
  }
}


export function dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_query_hashes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedQueryHashes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    executable_schema: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaToHclTerraform(struct!.executableSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema",
    },
    namespaced_statuses: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses",
    },
    options: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions",
    },
    persisted_query_cache_config: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfigToHclTerraform(struct!.persistedQueryCacheConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig",
    },
    stat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stitched_schema: {
      value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaToHclTerraform(struct!.stitchedSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedQueryHashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedQueryHashes = this._allowedQueryHashes;
    }
    if (this._executableSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executableSchema = this._executableSchema?.internalValue;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._persistedQueryCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistedQueryCacheConfig = this._persistedQueryCacheConfig?.internalValue;
    }
    if (this._statPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statPrefix = this._statPrefix;
    }
    if (this._stitchedSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitchedSchema = this._stitchedSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedQueryHashes = undefined;
      this._executableSchema.internalValue = undefined;
      this._namespacedStatuses.internalValue = undefined;
      this._options.internalValue = undefined;
      this._persistedQueryCacheConfig.internalValue = undefined;
      this._statPrefix = undefined;
      this._stitchedSchema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedQueryHashes = value.allowedQueryHashes;
      this._executableSchema.internalValue = value.executableSchema;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
      this._options.internalValue = value.options;
      this._persistedQueryCacheConfig.internalValue = value.persistedQueryCacheConfig;
      this._statPrefix = value.statPrefix;
      this._stitchedSchema.internalValue = value.stitchedSchema;
    }
  }

  // allowed_query_hashes - computed: false, optional: true, required: false
  private _allowedQueryHashes?: string[]; 
  public get allowedQueryHashes() {
    return this.getListAttribute('allowed_query_hashes');
  }
  public set allowedQueryHashes(value: string[]) {
    this._allowedQueryHashes = value;
  }
  public resetAllowedQueryHashes() {
    this._allowedQueryHashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedQueryHashesInput() {
    return this._allowedQueryHashes;
  }

  // executable_schema - computed: false, optional: true, required: false
  private _executableSchema = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchemaOutputReference(this, "executable_schema");
  public get executableSchema() {
    return this._executableSchema;
  }
  public putExecutableSchema(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecExecutableSchema) {
    this._executableSchema.internalValue = value;
  }
  public resetExecutableSchema() {
    this._executableSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableSchemaInput() {
    return this._executableSchema.internalValue;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // persisted_query_cache_config - computed: false, optional: true, required: false
  private _persistedQueryCacheConfig = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfigOutputReference(this, "persisted_query_cache_config");
  public get persistedQueryCacheConfig() {
    return this._persistedQueryCacheConfig;
  }
  public putPersistedQueryCacheConfig(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecPersistedQueryCacheConfig) {
    this._persistedQueryCacheConfig.internalValue = value;
  }
  public resetPersistedQueryCacheConfig() {
    this._persistedQueryCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistedQueryCacheConfigInput() {
    return this._persistedQueryCacheConfig.internalValue;
  }

  // stat_prefix - computed: false, optional: true, required: false
  private _statPrefix?: string; 
  public get statPrefix() {
    return this.getStringAttribute('stat_prefix');
  }
  public set statPrefix(value: string) {
    this._statPrefix = value;
  }
  public resetStatPrefix() {
    this._statPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statPrefixInput() {
    return this._statPrefix;
  }

  // stitched_schema - computed: false, optional: true, required: false
  private _stitchedSchema = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchemaOutputReference(this, "stitched_schema");
  public get stitchedSchema() {
    return this._stitchedSchema;
  }
  public putStitchedSchema(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecStitchedSchema) {
    this._stitchedSchema.internalValue = value;
  }
  public resetStitchedSchema() {
    this._stitchedSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchedSchemaInput() {
    return this._stitchedSchema.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest k8s_graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest}
*/
export class DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest k8s_graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_graphql_gloo_solo_io_graph_ql_api_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec) {
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
      metadata: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGraphqlGlooSoloIoGraphQlApiV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
