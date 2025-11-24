// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#metadata DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata;
  /**
  * IntegrationSpec defines the desired state of Integration. Represents an integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#spec DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec;
}
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#annotations DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#labels DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefFrom) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefFrom) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig {
  /**
  * A string with a length between [1-512].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#server_name_to_verify DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#server_name_to_verify}
  */
  readonly serverNameToVerify?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfigToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_name_to_verify: cdktf.stringToTerraform(struct!.serverNameToVerify),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_name_to_verify: {
      value: cdktf.stringToHclTerraform(struct!.serverNameToVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverNameToVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameToVerify = this._serverNameToVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverNameToVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverNameToVerify = value.serverNameToVerify;
    }
  }

  // server_name_to_verify - computed: false, optional: true, required: false
  private _serverNameToVerify?: string; 
  public get serverNameToVerify() {
    return this.getStringAttribute('server_name_to_verify');
  }
  public set serverNameToVerify(value: string) {
    this._serverNameToVerify = value;
  }
  public resetServerNameToVerify() {
    this._serverNameToVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameToVerifyInput() {
    return this._serverNameToVerify;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#api_id DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#api_id}
  */
  readonly apiId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#api_ref DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#api_ref}
  */
  readonly apiRef?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#connection_id DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#connection_id}
  */
  readonly connectionId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#connection_ref DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#connection_ref}
  */
  readonly connectionRef?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#connection_type DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#content_handling_strategy DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#content_handling_strategy}
  */
  readonly contentHandlingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#credentials_arn DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#credentials_arn}
  */
  readonly credentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#description DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#integration_method DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#integration_method}
  */
  readonly integrationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#integration_subtype DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#integration_subtype}
  */
  readonly integrationSubtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#integration_type DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#integration_type}
  */
  readonly integrationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#integration_uri DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#integration_uri}
  */
  readonly integrationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#passthrough_behavior DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#passthrough_behavior}
  */
  readonly passthroughBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#payload_format_version DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#payload_format_version}
  */
  readonly payloadFormatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#request_parameters DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#request_parameters}
  */
  readonly requestParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#request_templates DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#request_templates}
  */
  readonly requestTemplates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#response_parameters DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#response_parameters}
  */
  readonly responseParameters?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#template_selection_expression DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#template_selection_expression}
  */
  readonly templateSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#timeout_in_millis DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#timeout_in_millis}
  */
  readonly timeoutInMillis?: number;
  /**
  * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#tls_config DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig;
}

export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    api_ref: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefToTerraform(struct!.apiRef),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_ref: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefToTerraform(struct!.connectionRef),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    content_handling_strategy: cdktf.stringToTerraform(struct!.contentHandlingStrategy),
    credentials_arn: cdktf.stringToTerraform(struct!.credentialsArn),
    description: cdktf.stringToTerraform(struct!.description),
    integration_method: cdktf.stringToTerraform(struct!.integrationMethod),
    integration_subtype: cdktf.stringToTerraform(struct!.integrationSubtype),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    integration_uri: cdktf.stringToTerraform(struct!.integrationUri),
    passthrough_behavior: cdktf.stringToTerraform(struct!.passthroughBehavior),
    payload_format_version: cdktf.stringToTerraform(struct!.payloadFormatVersion),
    request_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestParameters),
    request_templates: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestTemplates),
    response_parameters: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.responseParameters),
    template_selection_expression: cdktf.stringToTerraform(struct!.templateSelectionExpression),
    timeout_in_millis: cdktf.numberToTerraform(struct!.timeoutInMillis),
    tls_config: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefToHclTerraform(struct!.apiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefToHclTerraform(struct!.connectionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_handling_strategy: {
      value: cdktf.stringToHclTerraform(struct!.contentHandlingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    integration_method: {
      value: cdktf.stringToHclTerraform(struct!.integrationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_subtype: {
      value: cdktf.stringToHclTerraform(struct!.integrationSubtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_uri: {
      value: cdktf.stringToHclTerraform(struct!.integrationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough_behavior: {
      value: cdktf.stringToHclTerraform(struct!.passthroughBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_format_version: {
      value: cdktf.stringToHclTerraform(struct!.payloadFormatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_templates: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestTemplates),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_parameters: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.responseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    template_selection_expression: {
      value: cdktf.stringToHclTerraform(struct!.templateSelectionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_millis: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_config: {
      value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRef = this._connectionRef?.internalValue;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._contentHandlingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentHandlingStrategy = this._contentHandlingStrategy;
    }
    if (this._credentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsArn = this._credentialsArn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._integrationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationMethod = this._integrationMethod;
    }
    if (this._integrationSubtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationSubtype = this._integrationSubtype;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._integrationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUri = this._integrationUri;
    }
    if (this._passthroughBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughBehavior = this._passthroughBehavior;
    }
    if (this._payloadFormatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFormatVersion = this._payloadFormatVersion;
    }
    if (this._requestParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestParameters = this._requestParameters;
    }
    if (this._requestTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplates = this._requestTemplates;
    }
    if (this._responseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseParameters = this._responseParameters;
    }
    if (this._templateSelectionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSelectionExpression = this._templateSelectionExpression;
    }
    if (this._timeoutInMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMillis = this._timeoutInMillis;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._apiRef.internalValue = undefined;
      this._connectionId = undefined;
      this._connectionRef.internalValue = undefined;
      this._connectionType = undefined;
      this._contentHandlingStrategy = undefined;
      this._credentialsArn = undefined;
      this._description = undefined;
      this._integrationMethod = undefined;
      this._integrationSubtype = undefined;
      this._integrationType = undefined;
      this._integrationUri = undefined;
      this._passthroughBehavior = undefined;
      this._payloadFormatVersion = undefined;
      this._requestParameters = undefined;
      this._requestTemplates = undefined;
      this._responseParameters = undefined;
      this._templateSelectionExpression = undefined;
      this._timeoutInMillis = undefined;
      this._tlsConfig.internalValue = undefined;
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
      this._connectionId = value.connectionId;
      this._connectionRef.internalValue = value.connectionRef;
      this._connectionType = value.connectionType;
      this._contentHandlingStrategy = value.contentHandlingStrategy;
      this._credentialsArn = value.credentialsArn;
      this._description = value.description;
      this._integrationMethod = value.integrationMethod;
      this._integrationSubtype = value.integrationSubtype;
      this._integrationType = value.integrationType;
      this._integrationUri = value.integrationUri;
      this._passthroughBehavior = value.passthroughBehavior;
      this._payloadFormatVersion = value.payloadFormatVersion;
      this._requestParameters = value.requestParameters;
      this._requestTemplates = value.requestTemplates;
      this._responseParameters = value.responseParameters;
      this._templateSelectionExpression = value.templateSelectionExpression;
      this._timeoutInMillis = value.timeoutInMillis;
      this._tlsConfig.internalValue = value.tlsConfig;
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
  private _apiRef = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRefOutputReference(this, "api_ref");
  public get apiRef() {
    return this._apiRef;
  }
  public putApiRef(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecApiRef) {
    this._apiRef.internalValue = value;
  }
  public resetApiRef() {
    this._apiRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRefInput() {
    return this._apiRef.internalValue;
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_ref - computed: false, optional: true, required: false
  private _connectionRef = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRefOutputReference(this, "connection_ref");
  public get connectionRef() {
    return this._connectionRef;
  }
  public putConnectionRef(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecConnectionRef) {
    this._connectionRef.internalValue = value;
  }
  public resetConnectionRef() {
    this._connectionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRefInput() {
    return this._connectionRef.internalValue;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string; 
  public get contentHandlingStrategy() {
    return this.getStringAttribute('content_handling_strategy');
  }
  public set contentHandlingStrategy(value: string) {
    this._contentHandlingStrategy = value;
  }
  public resetContentHandlingStrategy() {
    this._contentHandlingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingStrategyInput() {
    return this._contentHandlingStrategy;
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

  // integration_method - computed: false, optional: true, required: false
  private _integrationMethod?: string; 
  public get integrationMethod() {
    return this.getStringAttribute('integration_method');
  }
  public set integrationMethod(value: string) {
    this._integrationMethod = value;
  }
  public resetIntegrationMethod() {
    this._integrationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMethodInput() {
    return this._integrationMethod;
  }

  // integration_subtype - computed: false, optional: true, required: false
  private _integrationSubtype?: string; 
  public get integrationSubtype() {
    return this.getStringAttribute('integration_subtype');
  }
  public set integrationSubtype(value: string) {
    this._integrationSubtype = value;
  }
  public resetIntegrationSubtype() {
    this._integrationSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSubtypeInput() {
    return this._integrationSubtype;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // integration_uri - computed: false, optional: true, required: false
  private _integrationUri?: string; 
  public get integrationUri() {
    return this.getStringAttribute('integration_uri');
  }
  public set integrationUri(value: string) {
    this._integrationUri = value;
  }
  public resetIntegrationUri() {
    this._integrationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUriInput() {
    return this._integrationUri;
  }

  // passthrough_behavior - computed: false, optional: true, required: false
  private _passthroughBehavior?: string; 
  public get passthroughBehavior() {
    return this.getStringAttribute('passthrough_behavior');
  }
  public set passthroughBehavior(value: string) {
    this._passthroughBehavior = value;
  }
  public resetPassthroughBehavior() {
    this._passthroughBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughBehaviorInput() {
    return this._passthroughBehavior;
  }

  // payload_format_version - computed: false, optional: true, required: false
  private _payloadFormatVersion?: string; 
  public get payloadFormatVersion() {
    return this.getStringAttribute('payload_format_version');
  }
  public set payloadFormatVersion(value: string) {
    this._payloadFormatVersion = value;
  }
  public resetPayloadFormatVersion() {
    this._payloadFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatVersionInput() {
    return this._payloadFormatVersion;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string }; 
  public get requestParameters() {
    return this.getStringMapAttribute('request_parameters');
  }
  public set requestParameters(value: { [key: string]: string }) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters;
  }

  // request_templates - computed: false, optional: true, required: false
  private _requestTemplates?: { [key: string]: string }; 
  public get requestTemplates() {
    return this.getStringMapAttribute('request_templates');
  }
  public set requestTemplates(value: { [key: string]: string }) {
    this._requestTemplates = value;
  }
  public resetRequestTemplates() {
    this._requestTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplatesInput() {
    return this._requestTemplates;
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get responseParameters() {
    return this.interpolationForAttribute('response_parameters');
  }
  public set responseParameters(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._responseParameters = value;
  }
  public resetResponseParameters() {
    this._responseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInput() {
    return this._responseParameters;
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string; 
  public get templateSelectionExpression() {
    return this.getStringAttribute('template_selection_expression');
  }
  public set templateSelectionExpression(value: string) {
    this._templateSelectionExpression = value;
  }
  public resetTemplateSelectionExpression() {
    this._templateSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSelectionExpressionInput() {
    return this._templateSelectionExpression;
  }

  // timeout_in_millis - computed: false, optional: true, required: false
  private _timeoutInMillis?: number; 
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }
  public set timeoutInMillis(value: number) {
    this._timeoutInMillis = value;
  }
  public resetTimeoutInMillis() {
    this._timeoutInMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisInput() {
    return this._timeoutInMillis;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest}
*/
export class DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apigatewayv2_services_k8s_aws_integration_v1alpha1_manifest',
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
  private _metadata = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsIntegrationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
