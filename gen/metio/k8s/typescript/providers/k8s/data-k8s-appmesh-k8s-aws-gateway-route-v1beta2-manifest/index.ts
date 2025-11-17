// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata;
  /**
  * GatewayRouteSpec defines the desired state of GatewayRoute refers to https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#spec DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#labels DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#default_target_hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#default_target_hostname}
  */
  readonly defaultTargetHostname?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostnameToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_target_hostname: cdktf.stringToTerraform(struct!.defaultTargetHostname),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostnameToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_target_hostname: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetHostname = this._defaultTargetHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTargetHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTargetHostname = value.defaultTargetHostname;
    }
  }

  // default_target_hostname - computed: false, optional: true, required: false
  private _defaultTargetHostname?: string; 
  public get defaultTargetHostname() {
    return this.getStringAttribute('default_target_hostname');
  }
  public set defaultTargetHostname(value: string) {
    this._defaultTargetHostname = value;
  }
  public resetDefaultTargetHostname() {
    this._defaultTargetHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetHostnameInput() {
    return this._defaultTargetHostname;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite {
  /**
  * GatewayRouteHostnameRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_GatewayRouteHostnameRewrite.html ENABLE or DISABLE default behavior for Hostname rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#hostname}
  */
  readonly hostname?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostnameToTerraform(struct!.hostname),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname.internalValue = value.hostname;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef {
  /**
  * Name is the name of VirtualService CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualService CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRefToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService {
  /**
  * Amazon Resource Name to AppMesh VirtualService object to associate with the gateway route virtual service target. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service_arn DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service_arn}
  */
  readonly virtualServiceArn?: string;
  /**
  * Reference to Kubernetes VirtualService CR in cluster to associate with the gateway route virtual service target. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service_ref DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service_ref}
  */
  readonly virtualServiceRef?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_arn: cdktf.stringToTerraform(struct!.virtualServiceArn),
    virtual_service_ref: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRefToTerraform(struct!.virtualServiceRef),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_service_ref: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRefToHclTerraform(struct!.virtualServiceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceArn = this._virtualServiceArn;
    }
    if (this._virtualServiceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceRef = this._virtualServiceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualServiceArn = undefined;
      this._virtualServiceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualServiceArn = value.virtualServiceArn;
      this._virtualServiceRef.internalValue = value.virtualServiceRef;
    }
  }

  // virtual_service_arn - computed: false, optional: true, required: false
  private _virtualServiceArn?: string; 
  public get virtualServiceArn() {
    return this.getStringAttribute('virtual_service_arn');
  }
  public set virtualServiceArn(value: string) {
    this._virtualServiceArn = value;
  }
  public resetVirtualServiceArn() {
    this._virtualServiceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceArnInput() {
    return this._virtualServiceArn;
  }

  // virtual_service_ref - computed: false, optional: true, required: false
  private _virtualServiceRef = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRefOutputReference(this, "virtual_service_ref");
  public get virtualServiceRef() {
    return this._virtualServiceRef;
  }
  public putVirtualServiceRef(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceVirtualServiceRef) {
    this._virtualServiceRef.internalValue = value;
  }
  public resetVirtualServiceRef() {
    this._virtualServiceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceRefInput() {
    return this._virtualServiceRef.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget {
  /**
  * Specifies the port of the gateway route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#port DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * The virtual service to associate with the gateway route target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service}
  */
  readonly virtualService: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_service: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualService.internalValue = value.virtualService;
    }
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

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction {
  /**
  * GrpcGatewayRouteRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_GrpcGatewayRouteRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#rewrite DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#rewrite}
  */
  readonly rewrite?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite;
  /**
  * An object that represents the target that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#target DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#target}
  */
  readonly target: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rewrite: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteToTerraform(struct!.rewrite),
    target: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetToTerraform(struct!.target),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rewrite: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite",
    },
    target: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = value.rewrite;
      this._target.internalValue = value.target;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostnameToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostnameToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange {
  /**
  * The end of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#end DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#end}
  */
  readonly end: number;
  /**
  * The start of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#start DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#start}
  */
  readonly start: number;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRangeToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must begin with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * An object that represents the range of values to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#range DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#range}
  */
  readonly range?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange;
  /**
  * The value sent by the client must include the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#regex DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    range: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
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
    range: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._range.internalValue = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._range.internalValue = value.range;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata {
  /**
  * Specify True to match anything except the match criteria. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#invert DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * An object that represents the data to match from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch;
  /**
  * The name of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch",
    },
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataOutputReference {
    return new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch {
  /**
  * The client specified Hostname to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#hostname}
  */
  readonly hostname?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname;
  /**
  * An object that represents the data to match from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable;
  /**
  * Specifies the port the request to be matched on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#port DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Either ServiceName or Hostname must be specified. Both are allowed as well The fully qualified domain name for the service to match from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#service_name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostnameToTerraform(struct!.hostname),
    metadata: cdktf.listMapper(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataToTerraform, false)(struct!.metadata),
    port: cdktf.numberToTerraform(struct!.port),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname",
    },
    metadata: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._port = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname.internalValue = value.hostname;
      this._metadata.internalValue = value.metadata;
      this._port = value.port;
      this._serviceName = value.serviceName;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute {
  /**
  * An object that represents the action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#action DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#default_target_hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#default_target_hostname}
  */
  readonly defaultTargetHostname?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostnameToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_target_hostname: cdktf.stringToTerraform(struct!.defaultTargetHostname),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostnameToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_target_hostname: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetHostname = this._defaultTargetHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTargetHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTargetHostname = value.defaultTargetHostname;
    }
  }

  // default_target_hostname - computed: false, optional: true, required: false
  private _defaultTargetHostname?: string; 
  public get defaultTargetHostname() {
    return this.getStringAttribute('default_target_hostname');
  }
  public set defaultTargetHostname(value: string) {
    this._defaultTargetHostname = value;
  }
  public resetDefaultTargetHostname() {
    this._defaultTargetHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetHostnameInput() {
    return this._defaultTargetHostname;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePathToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePathToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#default_prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#default_prefix}
  */
  readonly defaultPrefix?: string;
  /**
  * When DefaultPrefix is specified, Value cannot be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#value DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefixToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_prefix: cdktf.stringToTerraform(struct!.defaultPrefix),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefixToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_prefix: {
      value: cdktf.stringToHclTerraform(struct!.defaultPrefix),
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrefix = this._defaultPrefix;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPrefix = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPrefix = value.defaultPrefix;
      this._value = value.value;
    }
  }

  // default_prefix - computed: false, optional: true, required: false
  private _defaultPrefix?: string; 
  public get defaultPrefix() {
    return this.getStringAttribute('default_prefix');
  }
  public set defaultPrefix(value: string) {
    this._defaultPrefix = value;
  }
  public resetDefaultPrefix() {
    this._defaultPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixInput() {
    return this._defaultPrefix;
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite {
  /**
  * GatewayRouteHostnameRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_GatewayRouteHostnameRewrite.html ENABLE or DISABLE default behavior for Hostname rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#hostname}
  */
  readonly hostname?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname;
  /**
  * GatewayRoutePathRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_HttpGatewayRoutePathRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#path DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#path}
  */
  readonly path?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath;
  /**
  * GatewayRoutePrefixRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_HttpGatewayRoutePrefixRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostnameToTerraform(struct!.hostname),
    path: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePathToTerraform(struct!.path),
    prefix: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefixToTerraform(struct!.prefix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname",
    },
    path: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath",
    },
    prefix: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname.internalValue = undefined;
      this._path.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname.internalValue = value.hostname;
      this._path.internalValue = value.path;
      this._prefix.internalValue = value.prefix;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewritePrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef {
  /**
  * Name is the name of VirtualService CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualService CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRefToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService {
  /**
  * Amazon Resource Name to AppMesh VirtualService object to associate with the gateway route virtual service target. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service_arn DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service_arn}
  */
  readonly virtualServiceArn?: string;
  /**
  * Reference to Kubernetes VirtualService CR in cluster to associate with the gateway route virtual service target. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service_ref DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service_ref}
  */
  readonly virtualServiceRef?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_arn: cdktf.stringToTerraform(struct!.virtualServiceArn),
    virtual_service_ref: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRefToTerraform(struct!.virtualServiceRef),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_service_ref: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRefToHclTerraform(struct!.virtualServiceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceArn = this._virtualServiceArn;
    }
    if (this._virtualServiceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceRef = this._virtualServiceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualServiceArn = undefined;
      this._virtualServiceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualServiceArn = value.virtualServiceArn;
      this._virtualServiceRef.internalValue = value.virtualServiceRef;
    }
  }

  // virtual_service_arn - computed: false, optional: true, required: false
  private _virtualServiceArn?: string; 
  public get virtualServiceArn() {
    return this.getStringAttribute('virtual_service_arn');
  }
  public set virtualServiceArn(value: string) {
    this._virtualServiceArn = value;
  }
  public resetVirtualServiceArn() {
    this._virtualServiceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceArnInput() {
    return this._virtualServiceArn;
  }

  // virtual_service_ref - computed: false, optional: true, required: false
  private _virtualServiceRef = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRefOutputReference(this, "virtual_service_ref");
  public get virtualServiceRef() {
    return this._virtualServiceRef;
  }
  public putVirtualServiceRef(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceVirtualServiceRef) {
    this._virtualServiceRef.internalValue = value;
  }
  public resetVirtualServiceRef() {
    this._virtualServiceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceRefInput() {
    return this._virtualServiceRef.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget {
  /**
  * Specifies the port of the gateway route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#port DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * The virtual service to associate with the gateway route target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service}
  */
  readonly virtualService: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_service: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualService.internalValue = value.virtualService;
    }
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

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction {
  /**
  * HTTPGatewayRouteRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_HttpGatewayRouteRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#rewrite DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#rewrite}
  */
  readonly rewrite?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite;
  /**
  * An object that represents the target that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#target DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#target}
  */
  readonly target: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rewrite: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteToTerraform(struct!.rewrite),
    target: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetToTerraform(struct!.target),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rewrite: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite",
    },
    target: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = value.rewrite;
      this._target.internalValue = value.target;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange {
  /**
  * The end of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#end DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#end}
  */
  readonly end: number;
  /**
  * The start of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#start DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#start}
  */
  readonly start: number;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRangeToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRangeToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must begin with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * An object that represents the range of values to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#range DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#range}
  */
  readonly range?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange;
  /**
  * The value sent by the client must include the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#regex DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    range: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRangeToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
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
    range: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._range.internalValue = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._range.internalValue = value.range;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders {
  /**
  * Specify True to match anything except the match criteria. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#invert DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * The HeaderMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch;
  /**
  * A name for the HTTP header in the client request that will be matched on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch",
    },
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersOutputReference {
    return new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostnameToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostnameToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#regex DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPathToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPathToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters {
  /**
  * The QueryMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch",
    },
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersOutputReference {
    return new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch {
  /**
  * An object that represents the client request headers to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#headers DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders[] | cdktf.IResolvable;
  /**
  * The client specified Hostname to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#hostname}
  */
  readonly hostname?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname;
  /**
  * The client request method to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#method DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * Specified path of the request to be matched on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#path DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#path}
  */
  readonly path?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath;
  /**
  * Specifies the port the request to be matched on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#port DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Either Prefix or Hostname must be specified. Both are allowed as well. Specifies the prefix to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Client specified query parameters to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#query_parameters DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#query_parameters}
  */
  readonly queryParameters?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersToTerraform, false)(struct!.headers),
    hostname: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostnameToTerraform(struct!.hostname),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    query_parameters: cdktf.listMapper(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersToTerraform, false)(struct!.queryParameters),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersList",
    },
    hostname: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersToHclTerraform, false)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._hostname.internalValue = value.hostname;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._port = value.port;
      this._prefix = value.prefix;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
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

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route {
  /**
  * An object that represents the action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#action DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#default_target_hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#default_target_hostname}
  */
  readonly defaultTargetHostname?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostnameToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_target_hostname: cdktf.stringToTerraform(struct!.defaultTargetHostname),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostnameToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_target_hostname: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetHostname = this._defaultTargetHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTargetHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTargetHostname = value.defaultTargetHostname;
    }
  }

  // default_target_hostname - computed: false, optional: true, required: false
  private _defaultTargetHostname?: string; 
  public get defaultTargetHostname() {
    return this.getStringAttribute('default_target_hostname');
  }
  public set defaultTargetHostname(value: string) {
    this._defaultTargetHostname = value;
  }
  public resetDefaultTargetHostname() {
    this._defaultTargetHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetHostnameInput() {
    return this._defaultTargetHostname;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePathToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePathToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#default_prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#default_prefix}
  */
  readonly defaultPrefix?: string;
  /**
  * When DefaultPrefix is specified, Value cannot be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#value DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefixToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_prefix: cdktf.stringToTerraform(struct!.defaultPrefix),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefixToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_prefix: {
      value: cdktf.stringToHclTerraform(struct!.defaultPrefix),
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrefix = this._defaultPrefix;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPrefix = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPrefix = value.defaultPrefix;
      this._value = value.value;
    }
  }

  // default_prefix - computed: false, optional: true, required: false
  private _defaultPrefix?: string; 
  public get defaultPrefix() {
    return this.getStringAttribute('default_prefix');
  }
  public set defaultPrefix(value: string) {
    this._defaultPrefix = value;
  }
  public resetDefaultPrefix() {
    this._defaultPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixInput() {
    return this._defaultPrefix;
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite {
  /**
  * GatewayRouteHostnameRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_GatewayRouteHostnameRewrite.html ENABLE or DISABLE default behavior for Hostname rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#hostname}
  */
  readonly hostname?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname;
  /**
  * GatewayRoutePathRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_HttpGatewayRoutePathRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#path DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#path}
  */
  readonly path?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath;
  /**
  * GatewayRoutePrefixRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_HttpGatewayRoutePrefixRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostnameToTerraform(struct!.hostname),
    path: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePathToTerraform(struct!.path),
    prefix: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefixToTerraform(struct!.prefix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname",
    },
    path: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath",
    },
    prefix: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname.internalValue = undefined;
      this._path.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname.internalValue = value.hostname;
      this._path.internalValue = value.path;
      this._prefix.internalValue = value.prefix;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewritePrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef {
  /**
  * Name is the name of VirtualService CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualService CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRefToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService {
  /**
  * Amazon Resource Name to AppMesh VirtualService object to associate with the gateway route virtual service target. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service_arn DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service_arn}
  */
  readonly virtualServiceArn?: string;
  /**
  * Reference to Kubernetes VirtualService CR in cluster to associate with the gateway route virtual service target. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service_ref DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service_ref}
  */
  readonly virtualServiceRef?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_arn: cdktf.stringToTerraform(struct!.virtualServiceArn),
    virtual_service_ref: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRefToTerraform(struct!.virtualServiceRef),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_service_ref: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRefToHclTerraform(struct!.virtualServiceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceArn = this._virtualServiceArn;
    }
    if (this._virtualServiceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceRef = this._virtualServiceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualServiceArn = undefined;
      this._virtualServiceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualServiceArn = value.virtualServiceArn;
      this._virtualServiceRef.internalValue = value.virtualServiceRef;
    }
  }

  // virtual_service_arn - computed: false, optional: true, required: false
  private _virtualServiceArn?: string; 
  public get virtualServiceArn() {
    return this.getStringAttribute('virtual_service_arn');
  }
  public set virtualServiceArn(value: string) {
    this._virtualServiceArn = value;
  }
  public resetVirtualServiceArn() {
    this._virtualServiceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceArnInput() {
    return this._virtualServiceArn;
  }

  // virtual_service_ref - computed: false, optional: true, required: false
  private _virtualServiceRef = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRefOutputReference(this, "virtual_service_ref");
  public get virtualServiceRef() {
    return this._virtualServiceRef;
  }
  public putVirtualServiceRef(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceVirtualServiceRef) {
    this._virtualServiceRef.internalValue = value;
  }
  public resetVirtualServiceRef() {
    this._virtualServiceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceRefInput() {
    return this._virtualServiceRef.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget {
  /**
  * Specifies the port of the gateway route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#port DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * The virtual service to associate with the gateway route target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_service DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_service}
  */
  readonly virtualService: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_service: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualService.internalValue = value.virtualService;
    }
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

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction {
  /**
  * HTTPGatewayRouteRewrite refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_HttpGatewayRouteRewrite.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#rewrite DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#rewrite}
  */
  readonly rewrite?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite;
  /**
  * An object that represents the target that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#target DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#target}
  */
  readonly target: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rewrite: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteToTerraform(struct!.rewrite),
    target: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetToTerraform(struct!.target),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rewrite: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite",
    },
    target: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = value.rewrite;
      this._target.internalValue = value.target;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange {
  /**
  * The end of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#end DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#end}
  */
  readonly end: number;
  /**
  * The start of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#start DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#start}
  */
  readonly start: number;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRangeToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRangeToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must begin with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * An object that represents the range of values to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#range DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#range}
  */
  readonly range?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange;
  /**
  * The value sent by the client must include the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#regex DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    range: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRangeToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
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
    range: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._range.internalValue = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._range.internalValue = value.range;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders {
  /**
  * Specify True to match anything except the match criteria. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#invert DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * The HeaderMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch;
  /**
  * A name for the HTTP header in the client request that will be matched on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch",
    },
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersOutputReference {
    return new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostnameToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostnameToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#regex DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPathToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPathToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#exact DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#exact}
  */
  readonly exact?: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters {
  /**
  * The QueryMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch",
    },
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersOutputReference {
    return new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch {
  /**
  * An object that represents the client request headers to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#headers DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders[] | cdktf.IResolvable;
  /**
  * The client specified Hostname to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#hostname}
  */
  readonly hostname?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname;
  /**
  * The client request method to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#method DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * Specified path of the request to be matched on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#path DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#path}
  */
  readonly path?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath;
  /**
  * Specifies the port the request to be matched on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#port DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Either Prefix or Hostname must be specified. Both are allowed as well. Specifies the prefix to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Client specified query parameters to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#query_parameters DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#query_parameters}
  */
  readonly queryParameters?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersToTerraform, false)(struct!.headers),
    hostname: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostnameToTerraform(struct!.hostname),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    query_parameters: cdktf.listMapper(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersToTerraform, false)(struct!.queryParameters),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersList",
    },
    hostname: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersToHclTerraform, false)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._hostname.internalValue = value.hostname;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._port = value.port;
      this._prefix = value.prefix;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
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

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute {
  /**
  * An object that represents the action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#action DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#match DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef {
  /**
  * Name is the name of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * UID is the UID of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#uid DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRefToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uid = value.uid;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef {
  /**
  * Name is the name of VirtualGateway CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualGateway CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * UID is the UID of VirtualGateway CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#uid DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRefToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef | cdktf.IResolvable | undefined {
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
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._uid = undefined;
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
      this._uid = value.uid;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec {
  /**
  * AWSName is the AppMesh GatewayRoute object's name. If unspecified or empty, it defaults to be '${name}_${namespace}' of k8s GatewayRoute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#aws_name DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#aws_name}
  */
  readonly awsName?: string;
  /**
  * An object that represents the specification of a gRPC gatewayRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#grpc_route DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#grpc_route}
  */
  readonly grpcRoute?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute;
  /**
  * An object that represents the specification of an HTTP/2 gatewayRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#http2_route DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#http2_route}
  */
  readonly http2Route?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route;
  /**
  * An object that represents the specification of an HTTP gatewayRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#http_route DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#http_route}
  */
  readonly httpRoute?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute;
  /**
  * A reference to k8s Mesh CR that this GatewayRoute belongs to. The admission controller populates it using Meshes's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#mesh_ref DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#mesh_ref}
  */
  readonly meshRef?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef;
  /**
  * Priority for the gatewayroute. Default Priority is 1000 which is lowest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#priority DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#priority}
  */
  readonly priority?: number;
  /**
  * A reference to k8s VirtualGateway CR that this GatewayRoute belongs to. The admission controller populates it using VirtualGateway's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#virtual_gateway_ref DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest#virtual_gateway_ref}
  */
  readonly virtualGatewayRef?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef;
}

export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_name: cdktf.stringToTerraform(struct!.awsName),
    grpc_route: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteToTerraform(struct!.grpcRoute),
    http2_route: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteToTerraform(struct!.http2Route),
    http_route: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteToTerraform(struct!.httpRoute),
    mesh_ref: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRefToTerraform(struct!.meshRef),
    priority: cdktf.numberToTerraform(struct!.priority),
    virtual_gateway_ref: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRefToTerraform(struct!.virtualGatewayRef),
  }
}


export function dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_name: {
      value: cdktf.stringToHclTerraform(struct!.awsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc_route: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteToHclTerraform(struct!.grpcRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute",
    },
    http2_route: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteToHclTerraform(struct!.http2Route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route",
    },
    http_route: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteToHclTerraform(struct!.httpRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute",
    },
    mesh_ref: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRefToHclTerraform(struct!.meshRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_gateway_ref: {
      value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRefToHclTerraform(struct!.virtualGatewayRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsName = this._awsName;
    }
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._http2Route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Route = this._http2Route?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    if (this._meshRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshRef = this._meshRef?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._virtualGatewayRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualGatewayRef = this._virtualGatewayRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsName = undefined;
      this._grpcRoute.internalValue = undefined;
      this._http2Route.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
      this._meshRef.internalValue = undefined;
      this._priority = undefined;
      this._virtualGatewayRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsName = value.awsName;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._http2Route.internalValue = value.http2Route;
      this._httpRoute.internalValue = value.httpRoute;
      this._meshRef.internalValue = value.meshRef;
      this._priority = value.priority;
      this._virtualGatewayRef.internalValue = value.virtualGatewayRef;
    }
  }

  // aws_name - computed: false, optional: true, required: false
  private _awsName?: string; 
  public get awsName() {
    return this.getStringAttribute('aws_name');
  }
  public set awsName(value: string) {
    this._awsName = value;
  }
  public resetAwsName() {
    this._awsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNameInput() {
    return this._awsName;
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRouteOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecGrpcRoute) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http2_route - computed: false, optional: true, required: false
  private _http2Route = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2RouteOutputReference(this, "http2_route");
  public get http2Route() {
    return this._http2Route;
  }
  public putHttp2Route(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttp2Route) {
    this._http2Route.internalValue = value;
  }
  public resetHttp2Route() {
    this._http2Route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RouteInput() {
    return this._http2Route.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecHttpRoute) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
  }

  // mesh_ref - computed: false, optional: true, required: false
  private _meshRef = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRefOutputReference(this, "mesh_ref");
  public get meshRef() {
    return this._meshRef;
  }
  public putMeshRef(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecMeshRef) {
    this._meshRef.internalValue = value;
  }
  public resetMeshRef() {
    this._meshRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRefInput() {
    return this._meshRef.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // virtual_gateway_ref - computed: false, optional: true, required: false
  private _virtualGatewayRef = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRefOutputReference(this, "virtual_gateway_ref");
  public get virtualGatewayRef() {
    return this._virtualGatewayRef;
  }
  public putVirtualGatewayRef(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecVirtualGatewayRef) {
    this._virtualGatewayRef.internalValue = value;
  }
  public resetVirtualGatewayRef() {
    this._virtualGatewayRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayRefInput() {
    return this._virtualGatewayRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest k8s_appmesh_k8s_aws_gateway_route_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_gateway_route_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsGatewayRouteV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_gateway_route_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/appmesh_k8s_aws_gateway_route_v1beta2_manifest k8s_appmesh_k8s_aws_gateway_route_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_gateway_route_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsGatewayRouteV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
