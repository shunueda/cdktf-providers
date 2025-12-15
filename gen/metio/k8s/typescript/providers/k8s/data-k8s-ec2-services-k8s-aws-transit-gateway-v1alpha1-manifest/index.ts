// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata;
  /**
  * TransitGatewaySpec defines the desired state of TransitGateway. Describes a transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#amazon_side_asn DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#amazon_side_asn}
  */
  readonly amazonSideAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#auto_accept_shared_attachments DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#auto_accept_shared_attachments}
  */
  readonly autoAcceptSharedAttachments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#default_route_table_association DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#default_route_table_association}
  */
  readonly defaultRouteTableAssociation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#default_route_table_propagation DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#default_route_table_propagation}
  */
  readonly defaultRouteTablePropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#dns_support DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#dns_support}
  */
  readonly dnsSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#multicast_support DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#multicast_support}
  */
  readonly multicastSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#transit_gateway_cidr_blocks DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#transit_gateway_cidr_blocks}
  */
  readonly transitGatewayCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#vpn_ecmp_support DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: string;
}

export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_side_asn: cdktf.numberToTerraform(struct!.amazonSideAsn),
    auto_accept_shared_attachments: cdktf.stringToTerraform(struct!.autoAcceptSharedAttachments),
    default_route_table_association: cdktf.stringToTerraform(struct!.defaultRouteTableAssociation),
    default_route_table_propagation: cdktf.stringToTerraform(struct!.defaultRouteTablePropagation),
    dns_support: cdktf.stringToTerraform(struct!.dnsSupport),
    multicast_support: cdktf.stringToTerraform(struct!.multicastSupport),
    transit_gateway_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitGatewayCidrBlocks),
    vpn_ecmp_support: cdktf.stringToTerraform(struct!.vpnEcmpSupport),
  }
}


export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_side_asn: {
      value: cdktf.numberToHclTerraform(struct!.amazonSideAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_accept_shared_attachments: {
      value: cdktf.stringToHclTerraform(struct!.autoAcceptSharedAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_route_table_association: {
      value: cdktf.stringToHclTerraform(struct!.defaultRouteTableAssociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_route_table_propagation: {
      value: cdktf.stringToHclTerraform(struct!.defaultRouteTablePropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_support: {
      value: cdktf.stringToHclTerraform(struct!.dnsSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_support: {
      value: cdktf.stringToHclTerraform(struct!.multicastSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transitGatewayCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpn_ecmp_support: {
      value: cdktf.stringToHclTerraform(struct!.vpnEcmpSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonSideAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSideAsn = this._amazonSideAsn;
    }
    if (this._autoAcceptSharedAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAcceptSharedAttachments = this._autoAcceptSharedAttachments;
    }
    if (this._defaultRouteTableAssociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteTableAssociation = this._defaultRouteTableAssociation;
    }
    if (this._defaultRouteTablePropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteTablePropagation = this._defaultRouteTablePropagation;
    }
    if (this._dnsSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSupport = this._dnsSupport;
    }
    if (this._multicastSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastSupport = this._multicastSupport;
    }
    if (this._transitGatewayCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayCidrBlocks = this._transitGatewayCidrBlocks;
    }
    if (this._vpnEcmpSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnEcmpSupport = this._vpnEcmpSupport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonSideAsn = undefined;
      this._autoAcceptSharedAttachments = undefined;
      this._defaultRouteTableAssociation = undefined;
      this._defaultRouteTablePropagation = undefined;
      this._dnsSupport = undefined;
      this._multicastSupport = undefined;
      this._transitGatewayCidrBlocks = undefined;
      this._vpnEcmpSupport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonSideAsn = value.amazonSideAsn;
      this._autoAcceptSharedAttachments = value.autoAcceptSharedAttachments;
      this._defaultRouteTableAssociation = value.defaultRouteTableAssociation;
      this._defaultRouteTablePropagation = value.defaultRouteTablePropagation;
      this._dnsSupport = value.dnsSupport;
      this._multicastSupport = value.multicastSupport;
      this._transitGatewayCidrBlocks = value.transitGatewayCidrBlocks;
      this._vpnEcmpSupport = value.vpnEcmpSupport;
    }
  }

  // amazon_side_asn - computed: false, optional: true, required: false
  private _amazonSideAsn?: number; 
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }
  public set amazonSideAsn(value: number) {
    this._amazonSideAsn = value;
  }
  public resetAmazonSideAsn() {
    this._amazonSideAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSideAsnInput() {
    return this._amazonSideAsn;
  }

  // auto_accept_shared_attachments - computed: false, optional: true, required: false
  private _autoAcceptSharedAttachments?: string; 
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }
  public set autoAcceptSharedAttachments(value: string) {
    this._autoAcceptSharedAttachments = value;
  }
  public resetAutoAcceptSharedAttachments() {
    this._autoAcceptSharedAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptSharedAttachmentsInput() {
    return this._autoAcceptSharedAttachments;
  }

  // default_route_table_association - computed: false, optional: true, required: false
  private _defaultRouteTableAssociation?: string; 
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }
  public set defaultRouteTableAssociation(value: string) {
    this._defaultRouteTableAssociation = value;
  }
  public resetDefaultRouteTableAssociation() {
    this._defaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTableAssociationInput() {
    return this._defaultRouteTableAssociation;
  }

  // default_route_table_propagation - computed: false, optional: true, required: false
  private _defaultRouteTablePropagation?: string; 
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }
  public set defaultRouteTablePropagation(value: string) {
    this._defaultRouteTablePropagation = value;
  }
  public resetDefaultRouteTablePropagation() {
    this._defaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTablePropagationInput() {
    return this._defaultRouteTablePropagation;
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string; 
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }
  public set dnsSupport(value: string) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport;
  }

  // multicast_support - computed: false, optional: true, required: false
  private _multicastSupport?: string; 
  public get multicastSupport() {
    return this.getStringAttribute('multicast_support');
  }
  public set multicastSupport(value: string) {
    this._multicastSupport = value;
  }
  public resetMulticastSupport() {
    this._multicastSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastSupportInput() {
    return this._multicastSupport;
  }

  // transit_gateway_cidr_blocks - computed: false, optional: true, required: false
  private _transitGatewayCidrBlocks?: string[]; 
  public get transitGatewayCidrBlocks() {
    return this.getListAttribute('transit_gateway_cidr_blocks');
  }
  public set transitGatewayCidrBlocks(value: string[]) {
    this._transitGatewayCidrBlocks = value;
  }
  public resetTransitGatewayCidrBlocks() {
    this._transitGatewayCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayCidrBlocksInput() {
    return this._transitGatewayCidrBlocks;
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: string; 
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: string) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport;
  }
}
export interface DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec {
  /**
  * A description of the transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * The transit gateway options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#options DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#options}
  */
  readonly options?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions;
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    options: dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptionsToTerraform(struct!.options),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    options: {
      value: dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._options.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._options.internalValue = value.options;
      this._tags.internalValue = value.tags;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest k8s_ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest k8s_ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_transit_gateway_v1alpha1_manifest',
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
  private _metadata = new DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsTransitGatewayV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
