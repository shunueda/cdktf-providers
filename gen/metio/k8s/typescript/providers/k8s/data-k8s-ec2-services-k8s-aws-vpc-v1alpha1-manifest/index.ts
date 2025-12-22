// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata;
  /**
  * VpcSpec defines the desired state of Vpc. Describes a VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec {
  /**
  * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#amazon_provided_i_pv6_cidr_block DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#amazon_provided_i_pv6_cidr_block}
  */
  readonly amazonProvidedIPv6CidrBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#cidr_blocks DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#cidr_blocks}
  */
  readonly cidrBlocks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#disallow_security_group_default_rules DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#disallow_security_group_default_rules}
  */
  readonly disallowSecurityGroupDefaultRules?: boolean | cdktf.IResolvable;
  /**
  * The attribute value. The valid values are true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#enable_dns_hostnames DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#enable_dns_hostnames}
  */
  readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
  /**
  * The attribute value. The valid values are true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#enable_dns_support DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#enable_dns_support}
  */
  readonly enableDnsSupport?: boolean | cdktf.IResolvable;
  /**
  * The tenancy options for instances launched into the VPC. For default, instances are launched with shared tenancy by default. You can launch instances with any tenancy into a shared tenancy VPC. For dedicated, instances are launched as dedicated tenancy instances by default. You can only launch instances with a tenancy of dedicated or host into a dedicated tenancy VPC. Important: The host value cannot be used with this parameter. Use the default or dedicated values only. Default: default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#instance_tenancy DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#instance_tenancy}
  */
  readonly instanceTenancy?: string;
  /**
  * The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see What is IPAM? (https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the Amazon VPC IPAM User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv4_ipam_pool_id DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv4_ipam_pool_id}
  */
  readonly ipv4IpamPoolId?: string;
  /**
  * The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? (https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the Amazon VPC IPAM User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv4_netmask_length DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv4_netmask_length}
  */
  readonly ipv4NetmaskLength?: number;
  /**
  * The IPv6 CIDR block from the IPv6 address pool. You must also specify Ipv6Pool in the request. To let Amazon choose the IPv6 CIDR block for you, omit this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv6_cidr_block DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location. You must set AmazonProvidedIpv6CidrBlock to true to use this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv6_cidr_block_network_border_group DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv6_cidr_block_network_border_group}
  */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;
  /**
  * The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see What is IPAM? (https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the Amazon VPC IPAM User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv6_ipam_pool_id DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv6_ipam_pool_id}
  */
  readonly ipv6IpamPoolId?: string;
  /**
  * The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see What is IPAM? (https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the Amazon VPC IPAM User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv6_netmask_length DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv6_netmask_length}
  */
  readonly ipv6NetmaskLength?: number;
  /**
  * The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#ipv6_pool DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#ipv6_pool}
  */
  readonly ipv6Pool?: string;
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_provided_i_pv6_cidr_block: cdktf.booleanToTerraform(struct!.amazonProvidedIPv6CidrBlock),
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    disallow_security_group_default_rules: cdktf.booleanToTerraform(struct!.disallowSecurityGroupDefaultRules),
    enable_dns_hostnames: cdktf.booleanToTerraform(struct!.enableDnsHostnames),
    enable_dns_support: cdktf.booleanToTerraform(struct!.enableDnsSupport),
    instance_tenancy: cdktf.stringToTerraform(struct!.instanceTenancy),
    ipv4_ipam_pool_id: cdktf.stringToTerraform(struct!.ipv4IpamPoolId),
    ipv4_netmask_length: cdktf.numberToTerraform(struct!.ipv4NetmaskLength),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    ipv6_cidr_block_network_border_group: cdktf.stringToTerraform(struct!.ipv6CidrBlockNetworkBorderGroup),
    ipv6_ipam_pool_id: cdktf.stringToTerraform(struct!.ipv6IpamPoolId),
    ipv6_netmask_length: cdktf.numberToTerraform(struct!.ipv6NetmaskLength),
    ipv6_pool: cdktf.stringToTerraform(struct!.ipv6Pool),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_provided_i_pv6_cidr_block: {
      value: cdktf.booleanToHclTerraform(struct!.amazonProvidedIPv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disallow_security_group_default_rules: {
      value: cdktf.booleanToHclTerraform(struct!.disallowSecurityGroupDefaultRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_dns_hostnames: {
      value: cdktf.booleanToHclTerraform(struct!.enableDnsHostnames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_dns_support: {
      value: cdktf.booleanToHclTerraform(struct!.enableDnsSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_tenancy: {
      value: cdktf.stringToHclTerraform(struct!.instanceTenancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_ipam_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.ipv4IpamPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4NetmaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr_block_network_border_group: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlockNetworkBorderGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_ipam_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.ipv6IpamPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_netmask_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NetmaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonProvidedIPv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonProvidedIPv6CidrBlock = this._amazonProvidedIPv6CidrBlock;
    }
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._disallowSecurityGroupDefaultRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowSecurityGroupDefaultRules = this._disallowSecurityGroupDefaultRules;
    }
    if (this._enableDnsHostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDnsHostnames = this._enableDnsHostnames;
    }
    if (this._enableDnsSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDnsSupport = this._enableDnsSupport;
    }
    if (this._instanceTenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTenancy = this._instanceTenancy;
    }
    if (this._ipv4IpamPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4IpamPoolId = this._ipv4IpamPoolId;
    }
    if (this._ipv4NetmaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NetmaskLength = this._ipv4NetmaskLength;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._ipv6CidrBlockNetworkBorderGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlockNetworkBorderGroup = this._ipv6CidrBlockNetworkBorderGroup;
    }
    if (this._ipv6IpamPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6IpamPoolId = this._ipv6IpamPoolId;
    }
    if (this._ipv6NetmaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NetmaskLength = this._ipv6NetmaskLength;
    }
    if (this._ipv6Pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Pool = this._ipv6Pool;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonProvidedIPv6CidrBlock = undefined;
      this._cidrBlocks = undefined;
      this._disallowSecurityGroupDefaultRules = undefined;
      this._enableDnsHostnames = undefined;
      this._enableDnsSupport = undefined;
      this._instanceTenancy = undefined;
      this._ipv4IpamPoolId = undefined;
      this._ipv4NetmaskLength = undefined;
      this._ipv6CidrBlock = undefined;
      this._ipv6CidrBlockNetworkBorderGroup = undefined;
      this._ipv6IpamPoolId = undefined;
      this._ipv6NetmaskLength = undefined;
      this._ipv6Pool = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonProvidedIPv6CidrBlock = value.amazonProvidedIPv6CidrBlock;
      this._cidrBlocks = value.cidrBlocks;
      this._disallowSecurityGroupDefaultRules = value.disallowSecurityGroupDefaultRules;
      this._enableDnsHostnames = value.enableDnsHostnames;
      this._enableDnsSupport = value.enableDnsSupport;
      this._instanceTenancy = value.instanceTenancy;
      this._ipv4IpamPoolId = value.ipv4IpamPoolId;
      this._ipv4NetmaskLength = value.ipv4NetmaskLength;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._ipv6CidrBlockNetworkBorderGroup = value.ipv6CidrBlockNetworkBorderGroup;
      this._ipv6IpamPoolId = value.ipv6IpamPoolId;
      this._ipv6NetmaskLength = value.ipv6NetmaskLength;
      this._ipv6Pool = value.ipv6Pool;
      this._tags.internalValue = value.tags;
    }
  }

  // amazon_provided_i_pv6_cidr_block - computed: false, optional: true, required: false
  private _amazonProvidedIPv6CidrBlock?: boolean | cdktf.IResolvable; 
  public get amazonProvidedIPv6CidrBlock() {
    return this.getBooleanAttribute('amazon_provided_i_pv6_cidr_block');
  }
  public set amazonProvidedIPv6CidrBlock(value: boolean | cdktf.IResolvable) {
    this._amazonProvidedIPv6CidrBlock = value;
  }
  public resetAmazonProvidedIPv6CidrBlock() {
    this._amazonProvidedIPv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonProvidedIPv6CidrBlockInput() {
    return this._amazonProvidedIPv6CidrBlock;
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // disallow_security_group_default_rules - computed: false, optional: true, required: false
  private _disallowSecurityGroupDefaultRules?: boolean | cdktf.IResolvable; 
  public get disallowSecurityGroupDefaultRules() {
    return this.getBooleanAttribute('disallow_security_group_default_rules');
  }
  public set disallowSecurityGroupDefaultRules(value: boolean | cdktf.IResolvable) {
    this._disallowSecurityGroupDefaultRules = value;
  }
  public resetDisallowSecurityGroupDefaultRules() {
    this._disallowSecurityGroupDefaultRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowSecurityGroupDefaultRulesInput() {
    return this._disallowSecurityGroupDefaultRules;
  }

  // enable_dns_hostnames - computed: false, optional: true, required: false
  private _enableDnsHostnames?: boolean | cdktf.IResolvable; 
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames');
  }
  public set enableDnsHostnames(value: boolean | cdktf.IResolvable) {
    this._enableDnsHostnames = value;
  }
  public resetEnableDnsHostnames() {
    this._enableDnsHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsHostnamesInput() {
    return this._enableDnsHostnames;
  }

  // enable_dns_support - computed: false, optional: true, required: false
  private _enableDnsSupport?: boolean | cdktf.IResolvable; 
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support');
  }
  public set enableDnsSupport(value: boolean | cdktf.IResolvable) {
    this._enableDnsSupport = value;
  }
  public resetEnableDnsSupport() {
    this._enableDnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsSupportInput() {
    return this._enableDnsSupport;
  }

  // instance_tenancy - computed: false, optional: true, required: false
  private _instanceTenancy?: string; 
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }
  public set instanceTenancy(value: string) {
    this._instanceTenancy = value;
  }
  public resetInstanceTenancy() {
    this._instanceTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenancyInput() {
    return this._instanceTenancy;
  }

  // ipv4_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv4IpamPoolId?: string; 
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv4_ipam_pool_id');
  }
  public set ipv4IpamPoolId(value: string) {
    this._ipv4IpamPoolId = value;
  }
  public resetIpv4IpamPoolId() {
    this._ipv4IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IpamPoolIdInput() {
    return this._ipv4IpamPoolId;
  }

  // ipv4_netmask_length - computed: false, optional: true, required: false
  private _ipv4NetmaskLength?: number; 
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv4_netmask_length');
  }
  public set ipv4NetmaskLength(value: number) {
    this._ipv4NetmaskLength = value;
  }
  public resetIpv4NetmaskLength() {
    this._ipv4NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskLengthInput() {
    return this._ipv4NetmaskLength;
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_cidr_block_network_border_group - computed: false, optional: true, required: false
  private _ipv6CidrBlockNetworkBorderGroup?: string; 
  public get ipv6CidrBlockNetworkBorderGroup() {
    return this.getStringAttribute('ipv6_cidr_block_network_border_group');
  }
  public set ipv6CidrBlockNetworkBorderGroup(value: string) {
    this._ipv6CidrBlockNetworkBorderGroup = value;
  }
  public resetIpv6CidrBlockNetworkBorderGroup() {
    this._ipv6CidrBlockNetworkBorderGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockNetworkBorderGroupInput() {
    return this._ipv6CidrBlockNetworkBorderGroup;
  }

  // ipv6_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv6IpamPoolId?: string; 
  public get ipv6IpamPoolId() {
    return this.getStringAttribute('ipv6_ipam_pool_id');
  }
  public set ipv6IpamPoolId(value: string) {
    this._ipv6IpamPoolId = value;
  }
  public resetIpv6IpamPoolId() {
    this._ipv6IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpamPoolIdInput() {
    return this._ipv6IpamPoolId;
  }

  // ipv6_netmask_length - computed: false, optional: true, required: false
  private _ipv6NetmaskLength?: number; 
  public get ipv6NetmaskLength() {
    return this.getNumberAttribute('ipv6_netmask_length');
  }
  public set ipv6NetmaskLength(value: number) {
    this._ipv6NetmaskLength = value;
  }
  public resetIpv6NetmaskLength() {
    this._ipv6NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskLengthInput() {
    return this._ipv6NetmaskLength;
  }

  // ipv6_pool - computed: false, optional: true, required: false
  private _ipv6Pool?: string; 
  public get ipv6Pool() {
    return this.getStringAttribute('ipv6_pool');
  }
  public set ipv6Pool(value: string) {
    this._ipv6Pool = value;
  }
  public resetIpv6Pool() {
    this._ipv6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolInput() {
    return this._ipv6Pool;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest k8s_ec2_services_k8s_aws_vpc_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_vpc_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsVpcV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_vpc_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_vpc_v1alpha1_manifest k8s_ec2_services_k8s_aws_vpc_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_vpc_v1alpha1_manifest',
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
  private _metadata = new DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsVpcV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
