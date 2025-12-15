// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata;
  /**
  * VpcEndpointSpec defines the desired state of VpcEndpoint. Describes a VPC endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#dns_record_ip_type DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#dns_record_ip_type}
  */
  readonly dnsRecordIpType?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_record_ip_type: cdktf.stringToTerraform(struct!.dnsRecordIpType),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_record_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsRecordIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsRecordIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecordIpType = this._dnsRecordIpType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsRecordIpType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsRecordIpType = value.dnsRecordIpType;
    }
  }

  // dns_record_ip_type - computed: false, optional: true, required: false
  private _dnsRecordIpType?: string; 
  public get dnsRecordIpType() {
    return this.getStringAttribute('dns_record_ip_type');
  }
  public set dnsRecordIpType(value: string) {
    this._dnsRecordIpType = value;
  }
  public resetDnsRecordIpType() {
    this._dnsRecordIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordIpTypeInput() {
    return this._dnsRecordIpType;
  }
}
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsFrom) {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsOutputReference {
    return new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsFrom) {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsOutputReference {
    return new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsFrom) {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsOutputReference {
    return new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec {
  /**
  * The DNS options for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#dns_options DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#dns_options}
  */
  readonly dnsOptions?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions;
  /**
  * The IP address type for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#ip_address_type DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * (Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format. If this parameter is not specified, we attach a default policy that allows full access to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#policy_document DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * (Interface endpoint) Indicates whether to associate a private hosted zone with the specified VPC. The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, kinesis.us-east-1.amazonaws.com), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service. To use a private hosted zone, you must set the following VPC attributes to true: enableDnsHostnames and enableDnsSupport. Use ModifyVpcAttribute to set the VPC attributes. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#private_dns_enabled DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#private_dns_enabled}
  */
  readonly privateDnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Gateway endpoint) One or more route table IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#route_table_i_ds DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#route_table_i_ds}
  */
  readonly routeTableIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#route_table_refs DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#route_table_refs}
  */
  readonly routeTableRefs?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs[] | cdktf.IResolvable;
  /**
  * (Interface endpoint) The ID of one or more security groups to associate with the endpoint network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#security_group_i_ds DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#security_group_refs DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * The service name. To get a list of available services, use the DescribeVpcEndpointServices request, or get the name from the service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#service_name DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#service_name}
  */
  readonly serviceName: string;
  /**
  * (Interface and Gateway Load Balancer endpoints) The ID of one or more subnets in which to create an endpoint network interface. For a Gateway Load Balancer endpoint, you can specify one subnet only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#subnet_i_ds DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#subnet_i_ds}
  */
  readonly subnetIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#subnet_refs DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#subnet_refs}
  */
  readonly subnetRefs?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable;
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The type of endpoint. Default: Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#vpc_endpoint_type DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#vpc_endpoint_type}
  */
  readonly vpcEndpointType?: string;
  /**
  * The ID of the VPC in which the endpoint will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#vpc_id DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#vpc_ref DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest#vpc_ref}
  */
  readonly vpcRef?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef;
}

export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_options: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptionsToTerraform(struct!.dnsOptions),
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    policy_document: cdktf.stringToTerraform(struct!.policyDocument),
    private_dns_enabled: cdktf.booleanToTerraform(struct!.privateDnsEnabled),
    route_table_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTableIDs),
    route_table_refs: cdktf.listMapper(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsToTerraform, false)(struct!.routeTableRefs),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_group_refs: cdktf.listMapper(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIDs),
    subnet_refs: cdktf.listMapper(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsToTerraform, false)(struct!.subnetRefs),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_endpoint_type: cdktf.stringToTerraform(struct!.vpcEndpointType),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_ref: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefToTerraform(struct!.vpcRef),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_options: {
      value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptionsToHclTerraform(struct!.dnsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions",
    },
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_document: {
      value: cdktf.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_dns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.privateDnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_table_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeTableIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    route_table_refs: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsToHclTerraform, false)(struct!.routeTableRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsList",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsList",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_refs: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsToHclTerraform, false)(struct!.subnetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsList",
    },
    vpc_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ref: {
      value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefToHclTerraform(struct!.vpcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOptions = this._dnsOptions?.internalValue;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    if (this._privateDnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsEnabled = this._privateDnsEnabled;
    }
    if (this._routeTableIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableIDs = this._routeTableIDs;
    }
    if (this._routeTableRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableRefs = this._routeTableRefs?.internalValue;
    }
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._subnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIDs = this._subnetIDs;
    }
    if (this._subnetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRefs = this._subnetRefs?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointType = this._vpcEndpointType;
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsOptions.internalValue = undefined;
      this._ipAddressType = undefined;
      this._policyDocument = undefined;
      this._privateDnsEnabled = undefined;
      this._routeTableIDs = undefined;
      this._routeTableRefs.internalValue = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._serviceName = undefined;
      this._subnetIDs = undefined;
      this._subnetRefs.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vpcEndpointType = undefined;
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
      this._dnsOptions.internalValue = value.dnsOptions;
      this._ipAddressType = value.ipAddressType;
      this._policyDocument = value.policyDocument;
      this._privateDnsEnabled = value.privateDnsEnabled;
      this._routeTableIDs = value.routeTableIDs;
      this._routeTableRefs.internalValue = value.routeTableRefs;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._serviceName = value.serviceName;
      this._subnetIDs = value.subnetIDs;
      this._subnetRefs.internalValue = value.subnetRefs;
      this._tags.internalValue = value.tags;
      this._vpcEndpointType = value.vpcEndpointType;
      this._vpcId = value.vpcId;
      this._vpcRef.internalValue = value.vpcRef;
    }
  }

  // dns_options - computed: false, optional: true, required: false
  private _dnsOptions = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptionsOutputReference(this, "dns_options");
  public get dnsOptions() {
    return this._dnsOptions;
  }
  public putDnsOptions(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecDnsOptions) {
    this._dnsOptions.internalValue = value;
  }
  public resetDnsOptions() {
    this._dnsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOptionsInput() {
    return this._dnsOptions.internalValue;
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // policy_document - computed: false, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // private_dns_enabled - computed: false, optional: true, required: false
  private _privateDnsEnabled?: boolean | cdktf.IResolvable; 
  public get privateDnsEnabled() {
    return this.getBooleanAttribute('private_dns_enabled');
  }
  public set privateDnsEnabled(value: boolean | cdktf.IResolvable) {
    this._privateDnsEnabled = value;
  }
  public resetPrivateDnsEnabled() {
    this._privateDnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsEnabledInput() {
    return this._privateDnsEnabled;
  }

  // route_table_i_ds - computed: false, optional: true, required: false
  private _routeTableIDs?: string[]; 
  public get routeTableIDs() {
    return this.getListAttribute('route_table_i_ds');
  }
  public set routeTableIDs(value: string[]) {
    this._routeTableIDs = value;
  }
  public resetRouteTableIDs() {
    this._routeTableIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIDsInput() {
    return this._routeTableIDs;
  }

  // route_table_refs - computed: false, optional: true, required: false
  private _routeTableRefs = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefsList(this, "route_table_refs", false);
  public get routeTableRefs() {
    return this._routeTableRefs;
  }
  public putRouteTableRefs(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecRouteTableRefs[] | cdktf.IResolvable) {
    this._routeTableRefs.internalValue = value;
  }
  public resetRouteTableRefs() {
    this._routeTableRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRefsInput() {
    return this._routeTableRefs.internalValue;
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
  private _securityGroupRefs = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // subnet_i_ds - computed: false, optional: true, required: false
  private _subnetIDs?: string[]; 
  public get subnetIDs() {
    return this.getListAttribute('subnet_i_ds');
  }
  public set subnetIDs(value: string[]) {
    this._subnetIDs = value;
  }
  public resetSubnetIDs() {
    this._subnetIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIDsInput() {
    return this._subnetIDs;
  }

  // subnet_refs - computed: false, optional: true, required: false
  private _subnetRefs = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefsList(this, "subnet_refs", false);
  public get subnetRefs() {
    return this._subnetRefs;
  }
  public putSubnetRefs(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable) {
    this._subnetRefs.internalValue = value;
  }
  public resetSubnetRefs() {
    this._subnetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefsInput() {
    return this._subnetRefs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_endpoint_type - computed: false, optional: true, required: false
  private _vpcEndpointType?: string; 
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }
  public set vpcEndpointType(value: string) {
    this._vpcEndpointType = value;
  }
  public resetVpcEndpointType() {
    this._vpcEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointTypeInput() {
    return this._vpcEndpointType;
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
  private _vpcRef = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRefOutputReference(this, "vpc_ref");
  public get vpcRef() {
    return this._vpcRef;
  }
  public putVpcRef(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecVpcRef) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest k8s_ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest k8s_ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_vpc_endpoint_v1alpha1_manifest',
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
  private _metadata = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsVpcEndpointV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
