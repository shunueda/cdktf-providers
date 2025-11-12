// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#metadata DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata;
  /**
  * AuthorizerSpec defines the desired state of Authorizer. Represents an authorizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#spec DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec;
}
export interface DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#annotations DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#labels DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefFrom) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#audience DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#audience}
  */
  readonly audience?: string[];
  /**
  * A string representation of a URI with a length between [1-2048].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#issuer DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#issuer}
  */
  readonly issuer?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfigurationToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfigurationToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audience),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._issuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._issuer = value.issuer;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return this.getListAttribute('audience');
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#api_id DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#api_id}
  */
  readonly apiId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#api_ref DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#api_ref}
  */
  readonly apiRef?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#authorizer_credentials_arn DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#authorizer_credentials_arn}
  */
  readonly authorizerCredentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#authorizer_payload_format_version DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#authorizer_payload_format_version}
  */
  readonly authorizerPayloadFormatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#authorizer_result_ttl_in_seconds DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#authorizer_type DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#authorizer_type}
  */
  readonly authorizerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#authorizer_uri DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#enable_simple_responses DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#enable_simple_responses}
  */
  readonly enableSimpleResponses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#identity_source DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#identity_source}
  */
  readonly identitySource: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#identity_validation_expression DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
  /**
  * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#jwt_configuration DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#jwt_configuration}
  */
  readonly jwtConfiguration?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    api_ref: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefToTerraform(struct!.apiRef),
    authorizer_credentials_arn: cdktf.stringToTerraform(struct!.authorizerCredentialsArn),
    authorizer_payload_format_version: cdktf.stringToTerraform(struct!.authorizerPayloadFormatVersion),
    authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(struct!.authorizerResultTtlInSeconds),
    authorizer_type: cdktf.stringToTerraform(struct!.authorizerType),
    authorizer_uri: cdktf.stringToTerraform(struct!.authorizerUri),
    enable_simple_responses: cdktf.booleanToTerraform(struct!.enableSimpleResponses),
    identity_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identitySource),
    identity_validation_expression: cdktf.stringToTerraform(struct!.identityValidationExpression),
    jwt_configuration: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfigurationToTerraform(struct!.jwtConfiguration),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    api_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefToHclTerraform(struct!.apiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef",
    },
    authorizer_credentials_arn: {
      value: cdktf.stringToHclTerraform(struct!.authorizerCredentialsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_payload_format_version: {
      value: cdktf.stringToHclTerraform(struct!.authorizerPayloadFormatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_result_ttl_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.authorizerResultTtlInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_type: {
      value: cdktf.stringToHclTerraform(struct!.authorizerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_uri: {
      value: cdktf.stringToHclTerraform(struct!.authorizerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_simple_responses: {
      value: cdktf.booleanToHclTerraform(struct!.enableSimpleResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_source: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identitySource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    identity_validation_expression: {
      value: cdktf.stringToHclTerraform(struct!.identityValidationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_configuration: {
      value: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfigurationToHclTerraform(struct!.jwtConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration",
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

export class DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._apiRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRef = this._apiRef?.internalValue;
    }
    if (this._authorizerCredentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredentialsArn = this._authorizerCredentialsArn;
    }
    if (this._authorizerPayloadFormatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerPayloadFormatVersion = this._authorizerPayloadFormatVersion;
    }
    if (this._authorizerResultTtlInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
    }
    if (this._authorizerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerType = this._authorizerType;
    }
    if (this._authorizerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerUri = this._authorizerUri;
    }
    if (this._enableSimpleResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSimpleResponses = this._enableSimpleResponses;
    }
    if (this._identitySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.identitySource = this._identitySource;
    }
    if (this._identityValidationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityValidationExpression = this._identityValidationExpression;
    }
    if (this._jwtConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtConfiguration = this._jwtConfiguration?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._apiRef.internalValue = undefined;
      this._authorizerCredentialsArn = undefined;
      this._authorizerPayloadFormatVersion = undefined;
      this._authorizerResultTtlInSeconds = undefined;
      this._authorizerType = undefined;
      this._authorizerUri = undefined;
      this._enableSimpleResponses = undefined;
      this._identitySource = undefined;
      this._identityValidationExpression = undefined;
      this._jwtConfiguration.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._apiRef.internalValue = value.apiRef;
      this._authorizerCredentialsArn = value.authorizerCredentialsArn;
      this._authorizerPayloadFormatVersion = value.authorizerPayloadFormatVersion;
      this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
      this._authorizerType = value.authorizerType;
      this._authorizerUri = value.authorizerUri;
      this._enableSimpleResponses = value.enableSimpleResponses;
      this._identitySource = value.identitySource;
      this._identityValidationExpression = value.identityValidationExpression;
      this._jwtConfiguration.internalValue = value.jwtConfiguration;
      this._name = value.name;
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

  // api_ref - computed: false, optional: true, required: false
  private _apiRef = new DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRefOutputReference(this, "api_ref");
  public get apiRef() {
    return this._apiRef;
  }
  public putApiRef(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecApiRef) {
    this._apiRef.internalValue = value;
  }
  public resetApiRef() {
    this._apiRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRefInput() {
    return this._apiRef.internalValue;
  }

  // authorizer_credentials_arn - computed: false, optional: true, required: false
  private _authorizerCredentialsArn?: string; 
  public get authorizerCredentialsArn() {
    return this.getStringAttribute('authorizer_credentials_arn');
  }
  public set authorizerCredentialsArn(value: string) {
    this._authorizerCredentialsArn = value;
  }
  public resetAuthorizerCredentialsArn() {
    this._authorizerCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialsArnInput() {
    return this._authorizerCredentialsArn;
  }

  // authorizer_payload_format_version - computed: false, optional: true, required: false
  private _authorizerPayloadFormatVersion?: string; 
  public get authorizerPayloadFormatVersion() {
    return this.getStringAttribute('authorizer_payload_format_version');
  }
  public set authorizerPayloadFormatVersion(value: string) {
    this._authorizerPayloadFormatVersion = value;
  }
  public resetAuthorizerPayloadFormatVersion() {
    this._authorizerPayloadFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerPayloadFormatVersionInput() {
    return this._authorizerPayloadFormatVersion;
  }

  // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_type - computed: false, optional: false, required: true
  private _authorizerType?: string; 
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerTypeInput() {
    return this._authorizerType;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // enable_simple_responses - computed: false, optional: true, required: false
  private _enableSimpleResponses?: boolean | cdktf.IResolvable; 
  public get enableSimpleResponses() {
    return this.getBooleanAttribute('enable_simple_responses');
  }
  public set enableSimpleResponses(value: boolean | cdktf.IResolvable) {
    this._enableSimpleResponses = value;
  }
  public resetEnableSimpleResponses() {
    this._enableSimpleResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSimpleResponsesInput() {
    return this._enableSimpleResponses;
  }

  // identity_source - computed: false, optional: false, required: true
  private _identitySource?: string[]; 
  public get identitySource() {
    return this.getListAttribute('identity_source');
  }
  public set identitySource(value: string[]) {
    this._identitySource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceInput() {
    return this._identitySource;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration = new DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecJwtConfiguration) {
    this._jwtConfiguration.internalValue = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest}
*/
export class DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apigatewayv2_services_k8s_aws_authorizer_v1alpha1_manifest',
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
  private _metadata = new DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsAuthorizerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
