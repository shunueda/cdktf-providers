// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#metadata DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata;
  /**
  * ResolverEndpointSpec defines the desired state of ResolverEndpoint. In the response to a CreateResolverEndpoint (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html), DeleteResolverEndpoint (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html), GetResolverEndpoint (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html), Updates the name, or ResolverEndpointType for an endpoint, or UpdateResolverEndpoint (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html) request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#spec DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec;
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#annotations DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#labels DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#namespace DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#namespace DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFromToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFromToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#from DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefFrom) {
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
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#ip DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#ipv6 DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#subnet_id DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Reference field for SubnetID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#subnet_ref DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#subnet_ref}
  */
  readonly subnetRef?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_ref: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefToTerraform(struct!.subnetRef),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ref: {
      value: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefToHclTerraform(struct!.subnetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRef = this._subnetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._subnetId = undefined;
      this._subnetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._subnetId = value.subnetId;
      this._subnetRef.internalValue = value.subnetRef;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ref - computed: false, optional: true, required: false
  private _subnetRef = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRefOutputReference(this, "subnet_ref");
  public get subnetRef() {
    return this._subnetRef;
  }
  public putSubnetRef(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesSubnetRef) {
    this._subnetRef.internalValue = value;
  }
  public resetSubnetRef() {
    this._subnetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefInput() {
    return this._subnetRef.internalValue;
  }
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesOutputReference {
    return new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#namespace DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#from DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom) {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsOutputReference {
    return new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#key DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#value DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec {
  /**
  * Specify the applicable value: * INBOUND: Resolver forwards DNS queries to the DNS service for a VPC from your network * OUTBOUND: Resolver forwards DNS queries from the DNS service for a VPC to your network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#direction DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#direction}
  */
  readonly direction: string;
  /**
  * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#ip_addresses DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#ip_addresses}
  */
  readonly ipAddresses: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses[] | cdktf.IResolvable;
  /**
  * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * For the endpoint type you can choose either IPv4, IPv6. or dual-stack. A dual-stack endpoint means that it will resolve via both IPv4 and IPv6. This endpoint type is applied to all IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#resolver_endpoint_type DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#resolver_endpoint_type}
  */
  readonly resolverEndpointType?: string;
  /**
  * The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#security_group_i_ds DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#security_group_refs DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * A list of the tag keys and values that you want to associate with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#tags DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    ip_addresses: cdktf.listMapper(dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesToTerraform, false)(struct!.ipAddresses),
    name: cdktf.stringToTerraform(struct!.name),
    resolver_endpoint_type: cdktf.stringToTerraform(struct!.resolverEndpointType),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_group_refs: cdktf.listMapper(dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    tags: cdktf.listMapper(dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesToHclTerraform, false)(struct!.ipAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolver_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.resolverEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ipAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolverEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverEndpointType = this._resolverEndpointType;
    }
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._ipAddresses.internalValue = undefined;
      this._name = undefined;
      this._resolverEndpointType = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._ipAddresses.internalValue = value.ipAddresses;
      this._name = value.name;
      this._resolverEndpointType = value.resolverEndpointType;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._tags.internalValue = value.tags;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }
  public putIpAddresses(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecIpAddresses[] | cdktf.IResolvable) {
    this._ipAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses.internalValue;
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

  // resolver_endpoint_type - computed: false, optional: true, required: false
  private _resolverEndpointType?: string; 
  public get resolverEndpointType() {
    return this.getStringAttribute('resolver_endpoint_type');
  }
  public set resolverEndpointType(value: string) {
    this._resolverEndpointType = value;
  }
  public resetResolverEndpointType() {
    this._resolverEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverEndpointTypeInput() {
    return this._resolverEndpointType;
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // security_group_refs - computed: false, optional: true, required: false
  private _securityGroupRefs = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest k8s_route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest}
*/
export class DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest k8s_route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_route53resolver_services_k8s_aws_resolver_endpoint_v1alpha1_manifest',
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
  private _metadata = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverEndpointV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
