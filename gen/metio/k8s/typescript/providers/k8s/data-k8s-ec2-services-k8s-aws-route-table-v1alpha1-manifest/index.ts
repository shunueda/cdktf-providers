// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata;
  /**
  * RouteTableSpec defines the desired state of RouteTable. Describes a route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#carrier_gateway_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#carrier_gateway_id}
  */
  readonly carrierGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#core_network_arn DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#core_network_arn}
  */
  readonly coreNetworkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#destination_cidr_block DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#destination_i_pv6_cidr_block DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#destination_i_pv6_cidr_block}
  */
  readonly destinationIPv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#destination_prefix_list_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#destination_prefix_list_id}
  */
  readonly destinationPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#egress_only_internet_gateway_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#egress_only_internet_gateway_id}
  */
  readonly egressOnlyInternetGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#gateway_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Reference field for GatewayID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#gateway_ref DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#gateway_ref}
  */
  readonly gatewayRef?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#instance_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#local_gateway_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#local_gateway_id}
  */
  readonly localGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#nat_gateway_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#nat_gateway_id}
  */
  readonly natGatewayId?: string;
  /**
  * Reference field for NATGatewayID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#nat_gateway_ref DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#nat_gateway_ref}
  */
  readonly natGatewayRef?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#network_interface_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#transit_gateway_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Reference field for TransitGatewayID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#transit_gateway_ref DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#transit_gateway_ref}
  */
  readonly transitGatewayRef?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#vpc_endpoint_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Reference field for VPCEndpointID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#vpc_endpoint_ref DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#vpc_endpoint_ref}
  */
  readonly vpcEndpointRef?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#vpc_peering_connection_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
  /**
  * Reference field for VPCPeeringConnectionID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#vpc_peering_connection_ref DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#vpc_peering_connection_ref}
  */
  readonly vpcPeeringConnectionRef?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    carrier_gateway_id: cdktf.stringToTerraform(struct!.carrierGatewayId),
    core_network_arn: cdktf.stringToTerraform(struct!.coreNetworkArn),
    destination_cidr_block: cdktf.stringToTerraform(struct!.destinationCidrBlock),
    destination_i_pv6_cidr_block: cdktf.stringToTerraform(struct!.destinationIPv6CidrBlock),
    destination_prefix_list_id: cdktf.stringToTerraform(struct!.destinationPrefixListId),
    egress_only_internet_gateway_id: cdktf.stringToTerraform(struct!.egressOnlyInternetGatewayId),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    gateway_ref: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefToTerraform(struct!.gatewayRef),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    local_gateway_id: cdktf.stringToTerraform(struct!.localGatewayId),
    nat_gateway_id: cdktf.stringToTerraform(struct!.natGatewayId),
    nat_gateway_ref: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefToTerraform(struct!.natGatewayRef),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
    transit_gateway_ref: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefToTerraform(struct!.transitGatewayRef),
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
    vpc_endpoint_ref: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefToTerraform(struct!.vpcEndpointRef),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
    vpc_peering_connection_ref: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefToTerraform(struct!.vpcPeeringConnectionRef),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    carrier_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.carrierGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    core_network_arn: {
      value: cdktf.stringToHclTerraform(struct!.coreNetworkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_i_pv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.destinationIPv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_only_internet_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.egressOnlyInternetGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ref: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefToHclTerraform(struct!.gatewayRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.localGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.natGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_gateway_ref: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefToHclTerraform(struct!.natGatewayRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.transitGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_ref: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefToHclTerraform(struct!.transitGatewayRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef",
    },
    vpc_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_endpoint_ref: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefToHclTerraform(struct!.vpcEndpointRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef",
    },
    vpc_peering_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcPeeringConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_peering_connection_ref: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefToHclTerraform(struct!.vpcPeeringConnectionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._carrierGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrierGatewayId = this._carrierGatewayId;
    }
    if (this._coreNetworkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreNetworkArn = this._coreNetworkArn;
    }
    if (this._destinationCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlock = this._destinationCidrBlock;
    }
    if (this._destinationIPv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIPv6CidrBlock = this._destinationIPv6CidrBlock;
    }
    if (this._destinationPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixListId = this._destinationPrefixListId;
    }
    if (this._egressOnlyInternetGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressOnlyInternetGatewayId = this._egressOnlyInternetGatewayId;
    }
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._gatewayRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayRef = this._gatewayRef?.internalValue;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._localGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localGatewayId = this._localGatewayId;
    }
    if (this._natGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGatewayId = this._natGatewayId;
    }
    if (this._natGatewayRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGatewayRef = this._natGatewayRef?.internalValue;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._transitGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayId = this._transitGatewayId;
    }
    if (this._transitGatewayRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayRef = this._transitGatewayRef?.internalValue;
    }
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    if (this._vpcEndpointRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointRef = this._vpcEndpointRef?.internalValue;
    }
    if (this._vpcPeeringConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPeeringConnectionId = this._vpcPeeringConnectionId;
    }
    if (this._vpcPeeringConnectionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPeeringConnectionRef = this._vpcPeeringConnectionRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._carrierGatewayId = undefined;
      this._coreNetworkArn = undefined;
      this._destinationCidrBlock = undefined;
      this._destinationIPv6CidrBlock = undefined;
      this._destinationPrefixListId = undefined;
      this._egressOnlyInternetGatewayId = undefined;
      this._gatewayId = undefined;
      this._gatewayRef.internalValue = undefined;
      this._instanceId = undefined;
      this._localGatewayId = undefined;
      this._natGatewayId = undefined;
      this._natGatewayRef.internalValue = undefined;
      this._networkInterfaceId = undefined;
      this._transitGatewayId = undefined;
      this._transitGatewayRef.internalValue = undefined;
      this._vpcEndpointId = undefined;
      this._vpcEndpointRef.internalValue = undefined;
      this._vpcPeeringConnectionId = undefined;
      this._vpcPeeringConnectionRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._carrierGatewayId = value.carrierGatewayId;
      this._coreNetworkArn = value.coreNetworkArn;
      this._destinationCidrBlock = value.destinationCidrBlock;
      this._destinationIPv6CidrBlock = value.destinationIPv6CidrBlock;
      this._destinationPrefixListId = value.destinationPrefixListId;
      this._egressOnlyInternetGatewayId = value.egressOnlyInternetGatewayId;
      this._gatewayId = value.gatewayId;
      this._gatewayRef.internalValue = value.gatewayRef;
      this._instanceId = value.instanceId;
      this._localGatewayId = value.localGatewayId;
      this._natGatewayId = value.natGatewayId;
      this._natGatewayRef.internalValue = value.natGatewayRef;
      this._networkInterfaceId = value.networkInterfaceId;
      this._transitGatewayId = value.transitGatewayId;
      this._transitGatewayRef.internalValue = value.transitGatewayRef;
      this._vpcEndpointId = value.vpcEndpointId;
      this._vpcEndpointRef.internalValue = value.vpcEndpointRef;
      this._vpcPeeringConnectionId = value.vpcPeeringConnectionId;
      this._vpcPeeringConnectionRef.internalValue = value.vpcPeeringConnectionRef;
    }
  }

  // carrier_gateway_id - computed: false, optional: true, required: false
  private _carrierGatewayId?: string; 
  public get carrierGatewayId() {
    return this.getStringAttribute('carrier_gateway_id');
  }
  public set carrierGatewayId(value: string) {
    this._carrierGatewayId = value;
  }
  public resetCarrierGatewayId() {
    this._carrierGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierGatewayIdInput() {
    return this._carrierGatewayId;
  }

  // core_network_arn - computed: false, optional: true, required: false
  private _coreNetworkArn?: string; 
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }
  public set coreNetworkArn(value: string) {
    this._coreNetworkArn = value;
  }
  public resetCoreNetworkArn() {
    this._coreNetworkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkArnInput() {
    return this._coreNetworkArn;
  }

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // destination_i_pv6_cidr_block - computed: false, optional: true, required: false
  private _destinationIPv6CidrBlock?: string; 
  public get destinationIPv6CidrBlock() {
    return this.getStringAttribute('destination_i_pv6_cidr_block');
  }
  public set destinationIPv6CidrBlock(value: string) {
    this._destinationIPv6CidrBlock = value;
  }
  public resetDestinationIPv6CidrBlock() {
    this._destinationIPv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIPv6CidrBlockInput() {
    return this._destinationIPv6CidrBlock;
  }

  // destination_prefix_list_id - computed: false, optional: true, required: false
  private _destinationPrefixListId?: string; 
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }
  public set destinationPrefixListId(value: string) {
    this._destinationPrefixListId = value;
  }
  public resetDestinationPrefixListId() {
    this._destinationPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListIdInput() {
    return this._destinationPrefixListId;
  }

  // egress_only_internet_gateway_id - computed: false, optional: true, required: false
  private _egressOnlyInternetGatewayId?: string; 
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }
  public set egressOnlyInternetGatewayId(value: string) {
    this._egressOnlyInternetGatewayId = value;
  }
  public resetEgressOnlyInternetGatewayId() {
    this._egressOnlyInternetGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOnlyInternetGatewayIdInput() {
    return this._egressOnlyInternetGatewayId;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_ref - computed: false, optional: true, required: false
  private _gatewayRef = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRefOutputReference(this, "gateway_ref");
  public get gatewayRef() {
    return this._gatewayRef;
  }
  public putGatewayRef(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesGatewayRef) {
    this._gatewayRef.internalValue = value;
  }
  public resetGatewayRef() {
    this._gatewayRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayRefInput() {
    return this._gatewayRef.internalValue;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // local_gateway_id - computed: false, optional: true, required: false
  private _localGatewayId?: string; 
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }
  public set localGatewayId(value: string) {
    this._localGatewayId = value;
  }
  public resetLocalGatewayId() {
    this._localGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayIdInput() {
    return this._localGatewayId;
  }

  // nat_gateway_id - computed: false, optional: true, required: false
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  public resetNatGatewayId() {
    this._natGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // nat_gateway_ref - computed: false, optional: true, required: false
  private _natGatewayRef = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRefOutputReference(this, "nat_gateway_ref");
  public get natGatewayRef() {
    return this._natGatewayRef;
  }
  public putNatGatewayRef(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesNatGatewayRef) {
    this._natGatewayRef.internalValue = value;
  }
  public resetNatGatewayRef() {
    this._natGatewayRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayRefInput() {
    return this._natGatewayRef.internalValue;
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // transit_gateway_ref - computed: false, optional: true, required: false
  private _transitGatewayRef = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRefOutputReference(this, "transit_gateway_ref");
  public get transitGatewayRef() {
    return this._transitGatewayRef;
  }
  public putTransitGatewayRef(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesTransitGatewayRef) {
    this._transitGatewayRef.internalValue = value;
  }
  public resetTransitGatewayRef() {
    this._transitGatewayRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayRefInput() {
    return this._transitGatewayRef.internalValue;
  }

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_endpoint_ref - computed: false, optional: true, required: false
  private _vpcEndpointRef = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRefOutputReference(this, "vpc_endpoint_ref");
  public get vpcEndpointRef() {
    return this._vpcEndpointRef;
  }
  public putVpcEndpointRef(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcEndpointRef) {
    this._vpcEndpointRef.internalValue = value;
  }
  public resetVpcEndpointRef() {
    this._vpcEndpointRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointRefInput() {
    return this._vpcEndpointRef.internalValue;
  }

  // vpc_peering_connection_id - computed: false, optional: true, required: false
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  public resetVpcPeeringConnectionId() {
    this._vpcPeeringConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // vpc_peering_connection_ref - computed: false, optional: true, required: false
  private _vpcPeeringConnectionRef = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRefOutputReference(this, "vpc_peering_connection_ref");
  public get vpcPeeringConnectionRef() {
    return this._vpcPeeringConnectionRef;
  }
  public putVpcPeeringConnectionRef(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesVpcPeeringConnectionRef) {
    this._vpcPeeringConnectionRef.internalValue = value;
  }
  public resetVpcPeeringConnectionRef() {
    this._vpcPeeringConnectionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionRefInput() {
    return this._vpcPeeringConnectionRef.internalValue;
  }
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesOutputReference {
    return new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#routes DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#routes}
  */
  readonly routes?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable;
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#vpc_id DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#vpc_ref DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest#vpc_ref}
  */
  readonly vpcRef?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef;
}

export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routes: cdktf.listMapper(dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesToTerraform, false)(struct!.routes),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_ref: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefToTerraform(struct!.vpcRef),
  }
}


export function dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routes: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ref: {
      value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefToHclTerraform(struct!.vpcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcRef = this._vpcRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routes.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vpcId = undefined;
      this._vpcRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routes.internalValue = value.routes;
      this._tags.internalValue = value.tags;
      this._vpcId = value.vpcId;
      this._vpcRef.internalValue = value.vpcRef;
    }
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_ref - computed: false, optional: true, required: false
  private _vpcRef = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRefOutputReference(this, "vpc_ref");
  public get vpcRef() {
    return this._vpcRef;
  }
  public putVpcRef(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecVpcRef) {
    this._vpcRef.internalValue = value;
  }
  public resetVpcRef() {
    this._vpcRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRefInput() {
    return this._vpcRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest k8s_ec2_services_k8s_aws_route_table_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_route_table_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_route_table_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ec2_services_k8s_aws_route_table_v1alpha1_manifest k8s_ec2_services_k8s_aws_route_table_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_route_table_v1alpha1_manifest',
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
  private _metadata = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsRouteTableV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
