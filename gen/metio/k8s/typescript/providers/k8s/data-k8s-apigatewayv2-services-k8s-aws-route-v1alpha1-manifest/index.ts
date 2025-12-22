// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#metadata DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata;
  /**
  * RouteSpec defines the desired state of Route. Represents a route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#spec DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec;
}
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#annotations DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#labels DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefFrom) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefFrom) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#required DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParametersToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParametersToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._required = value.required;
    }
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefFrom) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#api_id DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#api_id}
  */
  readonly apiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#api_key_required DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#api_key_required}
  */
  readonly apiKeyRequired?: boolean | cdktf.IResolvable;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#api_ref DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#api_ref}
  */
  readonly apiRef?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#authorization_scopes DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#authorization_scopes}
  */
  readonly authorizationScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#authorization_type DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#authorizer_id DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#authorizer_ref DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#authorizer_ref}
  */
  readonly authorizerRef?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#model_selection_expression DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#model_selection_expression}
  */
  readonly modelSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#operation_name DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#operation_name}
  */
  readonly operationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#request_models DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#request_models}
  */
  readonly requestModels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#request_parameters DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#request_parameters}
  */
  readonly requestParameters?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#route_key DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#route_key}
  */
  readonly routeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#route_response_selection_expression DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#route_response_selection_expression}
  */
  readonly routeResponseSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#target DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#target}
  */
  readonly target?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#target_ref DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef;
}

export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    api_key_required: cdktf.booleanToTerraform(struct!.apiKeyRequired),
    api_ref: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefToTerraform(struct!.apiRef),
    authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizationScopes),
    authorization_type: cdktf.stringToTerraform(struct!.authorizationType),
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    authorizer_ref: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefToTerraform(struct!.authorizerRef),
    model_selection_expression: cdktf.stringToTerraform(struct!.modelSelectionExpression),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    request_models: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestModels),
    request_parameters: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParametersToTerraform(struct!.requestParameters),
    route_key: cdktf.stringToTerraform(struct!.routeKey),
    route_response_selection_expression: cdktf.stringToTerraform(struct!.routeResponseSelectionExpression),
    target: cdktf.stringToTerraform(struct!.target),
    target_ref: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_id: {
      value: cdktf.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_required: {
      value: cdktf.booleanToHclTerraform(struct!.apiKeyRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefToHclTerraform(struct!.apiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef",
    },
    authorization_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizationScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authorization_type: {
      value: cdktf.stringToHclTerraform(struct!.authorizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefToHclTerraform(struct!.authorizerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef",
    },
    model_selection_expression: {
      value: cdktf.stringToHclTerraform(struct!.modelSelectionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_name: {
      value: cdktf.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_models: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestModels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_parameters: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParametersToHclTerraform(struct!.requestParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters",
    },
    route_key: {
      value: cdktf.stringToHclTerraform(struct!.routeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_response_selection_expression: {
      value: cdktf.stringToHclTerraform(struct!.routeResponseSelectionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._apiKeyRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyRequired = this._apiKeyRequired;
    }
    if (this._apiRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRef = this._apiRef?.internalValue;
    }
    if (this._authorizationScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationScopes = this._authorizationScopes;
    }
    if (this._authorizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationType = this._authorizationType;
    }
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._authorizerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerRef = this._authorizerRef?.internalValue;
    }
    if (this._modelSelectionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSelectionExpression = this._modelSelectionExpression;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._requestModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestModels = this._requestModels;
    }
    if (this._requestParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestParameters = this._requestParameters?.internalValue;
    }
    if (this._routeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeKey = this._routeKey;
    }
    if (this._routeResponseSelectionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeResponseSelectionExpression = this._routeResponseSelectionExpression;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._apiKeyRequired = undefined;
      this._apiRef.internalValue = undefined;
      this._authorizationScopes = undefined;
      this._authorizationType = undefined;
      this._authorizerId = undefined;
      this._authorizerRef.internalValue = undefined;
      this._modelSelectionExpression = undefined;
      this._operationName = undefined;
      this._requestModels = undefined;
      this._requestParameters.internalValue = undefined;
      this._routeKey = undefined;
      this._routeResponseSelectionExpression = undefined;
      this._target = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._apiKeyRequired = value.apiKeyRequired;
      this._apiRef.internalValue = value.apiRef;
      this._authorizationScopes = value.authorizationScopes;
      this._authorizationType = value.authorizationType;
      this._authorizerId = value.authorizerId;
      this._authorizerRef.internalValue = value.authorizerRef;
      this._modelSelectionExpression = value.modelSelectionExpression;
      this._operationName = value.operationName;
      this._requestModels = value.requestModels;
      this._requestParameters.internalValue = value.requestParameters;
      this._routeKey = value.routeKey;
      this._routeResponseSelectionExpression = value.routeResponseSelectionExpression;
      this._target = value.target;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // api_id - computed: false, optional: true, required: false
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  public resetApiId() {
    this._apiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean | cdktf.IResolvable; 
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean | cdktf.IResolvable) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired;
  }

  // api_ref - computed: false, optional: true, required: false
  private _apiRef = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRefOutputReference(this, "api_ref");
  public get apiRef() {
    return this._apiRef;
  }
  public putApiRef(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecApiRef) {
    this._apiRef.internalValue = value;
  }
  public resetApiRef() {
    this._apiRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRefInput() {
    return this._apiRef.internalValue;
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[]; 
  public get authorizationScopes() {
    return this.getListAttribute('authorization_scopes');
  }
  public set authorizationScopes(value: string[]) {
    this._authorizationScopes = value;
  }
  public resetAuthorizationScopes() {
    this._authorizationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationScopesInput() {
    return this._authorizationScopes;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // authorizer_ref - computed: false, optional: true, required: false
  private _authorizerRef = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRefOutputReference(this, "authorizer_ref");
  public get authorizerRef() {
    return this._authorizerRef;
  }
  public putAuthorizerRef(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecAuthorizerRef) {
    this._authorizerRef.internalValue = value;
  }
  public resetAuthorizerRef() {
    this._authorizerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerRefInput() {
    return this._authorizerRef.internalValue;
  }

  // model_selection_expression - computed: false, optional: true, required: false
  private _modelSelectionExpression?: string; 
  public get modelSelectionExpression() {
    return this.getStringAttribute('model_selection_expression');
  }
  public set modelSelectionExpression(value: string) {
    this._modelSelectionExpression = value;
  }
  public resetModelSelectionExpression() {
    this._modelSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSelectionExpressionInput() {
    return this._modelSelectionExpression;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string }; 
  public get requestModels() {
    return this.getStringMapAttribute('request_models');
  }
  public set requestModels(value: { [key: string]: string }) {
    this._requestModels = value;
  }
  public resetRequestModels() {
    this._requestModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModelsInput() {
    return this._requestModels;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParametersOutputReference(this, "request_parameters");
  public get requestParameters() {
    return this._requestParameters;
  }
  public putRequestParameters(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecRequestParameters) {
    this._requestParameters.internalValue = value;
  }
  public resetRequestParameters() {
    this._requestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters.internalValue;
  }

  // route_key - computed: false, optional: false, required: true
  private _routeKey?: string; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey;
  }

  // route_response_selection_expression - computed: false, optional: true, required: false
  private _routeResponseSelectionExpression?: string; 
  public get routeResponseSelectionExpression() {
    return this.getStringAttribute('route_response_selection_expression');
  }
  public set routeResponseSelectionExpression(value: string) {
    this._routeResponseSelectionExpression = value;
  }
  public resetRouteResponseSelectionExpression() {
    this._routeResponseSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeResponseSelectionExpressionInput() {
    return this._routeResponseSelectionExpression;
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

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_route_v1alpha1_manifest}
*/
export class DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apigatewayv2_services_k8s_aws_route_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apigatewayv2_services_k8s_aws_route_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_route_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_route_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apigatewayv2_services_k8s_aws_route_v1alpha1_manifest',
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
  private _metadata = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsRouteV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
