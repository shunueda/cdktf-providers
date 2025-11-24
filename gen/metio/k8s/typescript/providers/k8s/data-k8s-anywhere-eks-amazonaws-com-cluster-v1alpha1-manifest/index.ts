// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata;
  /**
  * ClusterSpec defines the desired state of Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef {
  /**
  * APIVersion refers to the Bundles APIVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#api_version DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Name refers to the name of the Bundles object in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace refers to the Bundles's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium {
  /**
  * EgressMasquaradeInterfaces determines which network interfaces are used for masquerading. Accepted values are a valid interface name or interface prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#egress_masquerade_interfaces DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#egress_masquerade_interfaces}
  */
  readonly egressMasqueradeInterfaces?: string;
  /**
  * IPv4NativeRoutingCIDR specifies the CIDR to use when RoutingMode is set to direct. When specified, Cilium assumes networking for this CIDR is preconfigured and hands traffic destined for that range to the Linux network stack without applying any SNAT. If this is not set autoDirectNodeRoutes will be set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#ipv4_native_routing_cidr DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#ipv4_native_routing_cidr}
  */
  readonly ipv4NativeRoutingCidr?: string;
  /**
  * IPv6NativeRoutingCIDR specifies the IPv6 CIDR to use when RoutingMode is set to direct. When specified, Cilium assumes networking for this CIDR is preconfigured and hands traffic destined for that range to the Linux network stack without applying any SNAT. If this is not set autoDirectNodeRoutes will be set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#ipv6_native_routing_cidr DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#ipv6_native_routing_cidr}
  */
  readonly ipv6NativeRoutingCidr?: string;
  /**
  * PolicyEnforcementMode determines communication allowed between pods. Accepted values are default, always, never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#policy_enforcement_mode DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#policy_enforcement_mode}
  */
  readonly policyEnforcementMode?: string;
  /**
  * RoutingMode indicates the routing tunnel mode to use for Cilium. Accepted values are overlay (geneve tunnel with overlay) or direct (tunneling disabled with direct routing) Defaults to overlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#routing_mode DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * SkipUpgrade indicicates that Cilium maintenance should be skipped during upgrades. This can be used when operators wish to self manage the Cilium installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#skip_upgrade DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#skip_upgrade}
  */
  readonly skipUpgrade?: boolean | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCiliumToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_masquerade_interfaces: cdktf.stringToTerraform(struct!.egressMasqueradeInterfaces),
    ipv4_native_routing_cidr: cdktf.stringToTerraform(struct!.ipv4NativeRoutingCidr),
    ipv6_native_routing_cidr: cdktf.stringToTerraform(struct!.ipv6NativeRoutingCidr),
    policy_enforcement_mode: cdktf.stringToTerraform(struct!.policyEnforcementMode),
    routing_mode: cdktf.stringToTerraform(struct!.routingMode),
    skip_upgrade: cdktf.booleanToTerraform(struct!.skipUpgrade),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCiliumToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_masquerade_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.egressMasqueradeInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_native_routing_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NativeRoutingCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_native_routing_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NativeRoutingCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyEnforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_mode: {
      value: cdktf.stringToHclTerraform(struct!.routingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.skipUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCiliumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressMasqueradeInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressMasqueradeInterfaces = this._egressMasqueradeInterfaces;
    }
    if (this._ipv4NativeRoutingCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NativeRoutingCidr = this._ipv4NativeRoutingCidr;
    }
    if (this._ipv6NativeRoutingCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NativeRoutingCidr = this._ipv6NativeRoutingCidr;
    }
    if (this._policyEnforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcementMode = this._policyEnforcementMode;
    }
    if (this._routingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingMode = this._routingMode;
    }
    if (this._skipUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUpgrade = this._skipUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressMasqueradeInterfaces = undefined;
      this._ipv4NativeRoutingCidr = undefined;
      this._ipv6NativeRoutingCidr = undefined;
      this._policyEnforcementMode = undefined;
      this._routingMode = undefined;
      this._skipUpgrade = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressMasqueradeInterfaces = value.egressMasqueradeInterfaces;
      this._ipv4NativeRoutingCidr = value.ipv4NativeRoutingCidr;
      this._ipv6NativeRoutingCidr = value.ipv6NativeRoutingCidr;
      this._policyEnforcementMode = value.policyEnforcementMode;
      this._routingMode = value.routingMode;
      this._skipUpgrade = value.skipUpgrade;
    }
  }

  // egress_masquerade_interfaces - computed: false, optional: true, required: false
  private _egressMasqueradeInterfaces?: string; 
  public get egressMasqueradeInterfaces() {
    return this.getStringAttribute('egress_masquerade_interfaces');
  }
  public set egressMasqueradeInterfaces(value: string) {
    this._egressMasqueradeInterfaces = value;
  }
  public resetEgressMasqueradeInterfaces() {
    this._egressMasqueradeInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressMasqueradeInterfacesInput() {
    return this._egressMasqueradeInterfaces;
  }

  // ipv4_native_routing_cidr - computed: false, optional: true, required: false
  private _ipv4NativeRoutingCidr?: string; 
  public get ipv4NativeRoutingCidr() {
    return this.getStringAttribute('ipv4_native_routing_cidr');
  }
  public set ipv4NativeRoutingCidr(value: string) {
    this._ipv4NativeRoutingCidr = value;
  }
  public resetIpv4NativeRoutingCidr() {
    this._ipv4NativeRoutingCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NativeRoutingCidrInput() {
    return this._ipv4NativeRoutingCidr;
  }

  // ipv6_native_routing_cidr - computed: false, optional: true, required: false
  private _ipv6NativeRoutingCidr?: string; 
  public get ipv6NativeRoutingCidr() {
    return this.getStringAttribute('ipv6_native_routing_cidr');
  }
  public set ipv6NativeRoutingCidr(value: string) {
    this._ipv6NativeRoutingCidr = value;
  }
  public resetIpv6NativeRoutingCidr() {
    this._ipv6NativeRoutingCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NativeRoutingCidrInput() {
    return this._ipv6NativeRoutingCidr;
  }

  // policy_enforcement_mode - computed: false, optional: true, required: false
  private _policyEnforcementMode?: string; 
  public get policyEnforcementMode() {
    return this.getStringAttribute('policy_enforcement_mode');
  }
  public set policyEnforcementMode(value: string) {
    this._policyEnforcementMode = value;
  }
  public resetPolicyEnforcementMode() {
    this._policyEnforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementModeInput() {
    return this._policyEnforcementMode;
  }

  // routing_mode - computed: false, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
  }

  // skip_upgrade - computed: false, optional: true, required: false
  private _skipUpgrade?: boolean | cdktf.IResolvable; 
  public get skipUpgrade() {
    return this.getBooleanAttribute('skip_upgrade');
  }
  public set skipUpgrade(value: boolean | cdktf.IResolvable) {
    this._skipUpgrade = value;
  }
  public resetSkipUpgrade() {
    this._skipUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUpgradeInput() {
    return this._skipUpgrade;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig {
  /**
  * CiliumConfig contains configuration specific to the Cilium CNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cilium DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cilium}
  */
  readonly cilium?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium;
  /**
  * KindnetdConfig contains configuration specific to the Kindnetd CNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kindnetd DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kindnetd}
  */
  readonly kindnetd?: { [key: string]: string };
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cilium: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCiliumToTerraform(struct!.cilium),
    kindnetd: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kindnetd),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cilium: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCiliumToHclTerraform(struct!.cilium),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium",
    },
    kindnetd: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kindnetd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cilium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cilium = this._cilium?.internalValue;
    }
    if (this._kindnetd !== undefined) {
      hasAnyValues = true;
      internalValueResult.kindnetd = this._kindnetd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cilium.internalValue = undefined;
      this._kindnetd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cilium.internalValue = value.cilium;
      this._kindnetd = value.kindnetd;
    }
  }

  // cilium - computed: false, optional: true, required: false
  private _cilium = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCiliumOutputReference(this, "cilium");
  public get cilium() {
    return this._cilium;
  }
  public putCilium(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigCilium) {
    this._cilium.internalValue = value;
  }
  public resetCilium() {
    this._cilium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciliumInput() {
    return this._cilium.internalValue;
  }

  // kindnetd - computed: false, optional: true, required: false
  private _kindnetd?: { [key: string]: string }; 
  public get kindnetd() {
    return this.getStringMapAttribute('kindnetd');
  }
  public set kindnetd(value: { [key: string]: string }) {
    this._kindnetd = value;
  }
  public resetKindnetd() {
    this._kindnetd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindnetdInput() {
    return this._kindnetd;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf {
  /**
  * Path defines the path to the file that contains the DNS resolver configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#path DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConfToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConfToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns {
  /**
  * ResolvConf refers to the DNS resolver configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#resolv_conf DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#resolv_conf}
  */
  readonly resolvConf?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolv_conf: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConfToTerraform(struct!.resolvConf),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolv_conf: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConfToHclTerraform(struct!.resolvConf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolvConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvConf = this._resolvConf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolvConf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolvConf.internalValue = value.resolvConf;
    }
  }

  // resolv_conf - computed: false, optional: true, required: false
  private _resolvConf = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConfOutputReference(this, "resolv_conf");
  public get resolvConf() {
    return this._resolvConf;
  }
  public putResolvConf(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsResolvConf) {
    this._resolvConf.internalValue = value;
  }
  public resetResolvConf() {
    this._resolvConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvConfInput() {
    return this._resolvConf.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes {
  /**
  * CIDRMaskSize defines the mask size for node cidr in the cluster, default for ipv4 is 24. This is an optional field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cidr_mask_size DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cidr_mask_size}
  */
  readonly cidrMaskSize?: number;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_mask_size: cdktf.numberToTerraform(struct!.cidrMaskSize),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_mask_size: {
      value: cdktf.numberToHclTerraform(struct!.cidrMaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrMaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrMaskSize = this._cidrMaskSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrMaskSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrMaskSize = value.cidrMaskSize;
    }
  }

  // cidr_mask_size - computed: false, optional: true, required: false
  private _cidrMaskSize?: number; 
  public get cidrMaskSize() {
    return this.getNumberAttribute('cidr_mask_size');
  }
  public set cidrMaskSize(value: number) {
    this._cidrMaskSize = value;
  }
  public resetCidrMaskSize() {
    this._cidrMaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMaskSizeInput() {
    return this._cidrMaskSize;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cidr_blocks DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPodsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPodsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cidr_blocks DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServicesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServicesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork {
  /**
  * Deprecated. Use CNIConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cni DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cni}
  */
  readonly cni?: string;
  /**
  * CNIConfig specifies the CNI plugin to be installed in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cni_config DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cni_config}
  */
  readonly cniConfig?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#dns DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#dns}
  */
  readonly dns?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#nodes DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#nodes}
  */
  readonly nodes?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes;
  /**
  * Comma-separated list of CIDR blocks to use for pod and service subnets. Defaults to 192.168.0.0/16 for pod subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#pods DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#services DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#services}
  */
  readonly services?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni: cdktf.stringToTerraform(struct!.cni),
    cni_config: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigToTerraform(struct!.cniConfig),
    dns: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsToTerraform(struct!.dns),
    nodes: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodesToTerraform(struct!.nodes),
    pods: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPodsToTerraform(struct!.pods),
    services: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServicesToTerraform(struct!.services),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni: {
      value: cdktf.stringToHclTerraform(struct!.cni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cni_config: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigToHclTerraform(struct!.cniConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig",
    },
    dns: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns",
    },
    nodes: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodesToHclTerraform(struct!.nodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes",
    },
    pods: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods",
    },
    services: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cni !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni;
    }
    if (this._cniConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniConfig = this._cniConfig?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cni = undefined;
      this._cniConfig.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cni = value.cni;
      this._cniConfig.internalValue = value.cniConfig;
      this._dns.internalValue = value.dns;
      this._nodes.internalValue = value.nodes;
      this._pods.internalValue = value.pods;
      this._services.internalValue = value.services;
    }
  }

  // cni - computed: false, optional: true, required: false
  private _cni?: string; 
  public get cni() {
    return this.getStringAttribute('cni');
  }
  public set cni(value: string) {
    this._cni = value;
  }
  public resetCni() {
    this._cni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni;
  }

  // cni_config - computed: false, optional: true, required: false
  private _cniConfig = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfigOutputReference(this, "cni_config");
  public get cniConfig() {
    return this._cniConfig;
  }
  public putCniConfig(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkCniConfig) {
    this._cniConfig.internalValue = value;
  }
  public resetCniConfig() {
    this._cniConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniConfigInput() {
    return this._cniConfig.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkNodes) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint {
  /**
  * Host defines the ip that you want to use to connect to the control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#host DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#host}
  */
  readonly host: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpointToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpointToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck {
  /**
  * MaxUnhealthy is used to configure the maximum number of unhealthy machines in machine health checks. This setting applies to both control plane and worker machines. If the number of unhealthy machines exceeds the limit set by maxUnhealthy, further remediation will not be performed. If not configured, the default value is set to '100%' for controlplane machines and '40%' for worker machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_unhealthy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout is used to configure the node startup timeout in machine health checks. It determines how long a MachineHealthCheck should wait for a Node to join the cluster, before considering a Machine unhealthy. If not configured, the default value is set to '10m0s' (10 minutes) for all providers. For Tinkerbell provider the default is '20m0s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#node_startup_timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * UnhealthyMachineTimeout is used to configure the unhealthy machine timeout in machine health checks. If any unhealthy conditions are met for the amount of time specified as the timeout, the machines are considered unhealthy. If not configured, the default value is set to '5m0s' (5 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#unhealthy_machine_timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#unhealthy_machine_timeout}
  */
  readonly unhealthyMachineTimeout?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheckToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    unhealthy_machine_timeout: cdktf.stringToTerraform(struct!.unhealthyMachineTimeout),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheckToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_machine_timeout: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyMachineTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._unhealthyMachineTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyMachineTimeout = this._unhealthyMachineTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._unhealthyMachineTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._unhealthyMachineTimeout = value.unhealthyMachineTimeout;
    }
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // unhealthy_machine_timeout - computed: false, optional: true, required: false
  private _unhealthyMachineTimeout?: string; 
  public get unhealthyMachineTimeout() {
    return this.getStringAttribute('unhealthy_machine_timeout');
  }
  public set unhealthyMachineTimeout(value: string) {
    this._unhealthyMachineTimeout = value;
  }
  public resetUnhealthyMachineTimeout() {
    this._unhealthyMachineTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyMachineTimeoutInput() {
    return this._unhealthyMachineTimeout;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#effect DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#key DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#time_added DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#value DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_surge DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_surge}
  */
  readonly maxSurge: number;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdateToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdateToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
    }
  }

  // max_surge - computed: false, optional: false, required: true
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy {
  /**
  * ControlPlaneRollingUpdateParams is API for rolling update strategy knobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#rolling_update DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate;
  /**
  * UpgradeRolloutStrategyType defines the types of upgrade rollout strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration {
  /**
  * APIServerExtraArgs defines the flags to configure for the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#api_server_extra_args DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#api_server_extra_args}
  */
  readonly apiServerExtraArgs?: { [key: string]: string };
  /**
  * CertSANs is a slice of domain names or IPs to be added as Subject Name Alternatives of the Kube API Servers Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cert_sans DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cert_sans}
  */
  readonly certSans?: string[];
  /**
  * Count defines the number of desired control plane nodes. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#count DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Endpoint defines the host ip and port to use for the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#endpoint DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint;
  /**
  * KubeletConfiguration is a struct that exposes the Kubelet settings for the user to set on control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kubelet_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kubelet_configuration}
  */
  readonly kubeletConfiguration?: { [key: string]: string };
  /**
  * Labels define the labels to assign to the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * MachineGroupRef defines the machine group configuration for the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#machine_group_ref DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#machine_group_ref}
  */
  readonly machineGroupRef?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef;
  /**
  * MachineHealthCheck is a control-plane level override for the timeouts and maxUnhealthy specified in the top-level MHC configuration. If not configured, the defaults in the top-level MHC configuration are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#machine_health_check DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck;
  /**
  * SkipLoadBalancerDeployment skip deploying control plane load balancer. Make sure your infrastructure can handle control plane load balancing when you set this field to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#skip_load_balancer_deployment DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#skip_load_balancer_deployment}
  */
  readonly skipLoadBalancerDeployment?: boolean | cdktf.IResolvable;
  /**
  * Taints define the set of taints to be applied on control plane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#taints DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints[] | cdktf.IResolvable;
  /**
  * UpgradeRolloutStrategy determines the rollout strategy to use for rolling upgrades and related parameters/knobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#upgrade_rollout_strategy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#upgrade_rollout_strategy}
  */
  readonly upgradeRolloutStrategy?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.apiServerExtraArgs),
    cert_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certSans),
    count: cdktf.numberToTerraform(struct!.count),
    endpoint: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpointToTerraform(struct!.endpoint),
    kubelet_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeletConfiguration),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_group_ref: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRefToTerraform(struct!.machineGroupRef),
    machine_health_check: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    skip_load_balancer_deployment: cdktf.booleanToTerraform(struct!.skipLoadBalancerDeployment),
    taints: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsToTerraform, false)(struct!.taints),
    upgrade_rollout_strategy: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyToTerraform(struct!.upgradeRolloutStrategy),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.apiServerExtraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cert_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint",
    },
    kubelet_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeletConfiguration),
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
    machine_group_ref: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRefToHclTerraform(struct!.machineGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef",
    },
    machine_health_check: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck",
    },
    skip_load_balancer_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.skipLoadBalancerDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsList",
    },
    upgrade_rollout_strategy: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyToHclTerraform(struct!.upgradeRolloutStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerExtraArgs = this._apiServerExtraArgs;
    }
    if (this._certSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSans = this._certSans;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._kubeletConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfiguration = this._kubeletConfiguration;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineGroupRef = this._machineGroupRef?.internalValue;
    }
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._skipLoadBalancerDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLoadBalancerDeployment = this._skipLoadBalancerDeployment;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._upgradeRolloutStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeRolloutStrategy = this._upgradeRolloutStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServerExtraArgs = undefined;
      this._certSans = undefined;
      this._count = undefined;
      this._endpoint.internalValue = undefined;
      this._kubeletConfiguration = undefined;
      this._labels = undefined;
      this._machineGroupRef.internalValue = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._skipLoadBalancerDeployment = undefined;
      this._taints.internalValue = undefined;
      this._upgradeRolloutStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServerExtraArgs = value.apiServerExtraArgs;
      this._certSans = value.certSans;
      this._count = value.count;
      this._endpoint.internalValue = value.endpoint;
      this._kubeletConfiguration = value.kubeletConfiguration;
      this._labels = value.labels;
      this._machineGroupRef.internalValue = value.machineGroupRef;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._skipLoadBalancerDeployment = value.skipLoadBalancerDeployment;
      this._taints.internalValue = value.taints;
      this._upgradeRolloutStrategy.internalValue = value.upgradeRolloutStrategy;
    }
  }

  // api_server_extra_args - computed: false, optional: true, required: false
  private _apiServerExtraArgs?: { [key: string]: string }; 
  public get apiServerExtraArgs() {
    return this.getStringMapAttribute('api_server_extra_args');
  }
  public set apiServerExtraArgs(value: { [key: string]: string }) {
    this._apiServerExtraArgs = value;
  }
  public resetApiServerExtraArgs() {
    this._apiServerExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerExtraArgsInput() {
    return this._apiServerExtraArgs;
  }

  // cert_sans - computed: false, optional: true, required: false
  private _certSans?: string[]; 
  public get certSans() {
    return this.getListAttribute('cert_sans');
  }
  public set certSans(value: string[]) {
    this._certSans = value;
  }
  public resetCertSans() {
    this._certSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSansInput() {
    return this._certSans;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // kubelet_configuration - computed: false, optional: true, required: false
  private _kubeletConfiguration?: { [key: string]: string }; 
  public get kubeletConfiguration() {
    return this.getStringMapAttribute('kubelet_configuration');
  }
  public set kubeletConfiguration(value: { [key: string]: string }) {
    this._kubeletConfiguration = value;
  }
  public resetKubeletConfiguration() {
    this._kubeletConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigurationInput() {
    return this._kubeletConfiguration;
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

  // machine_group_ref - computed: false, optional: true, required: false
  private _machineGroupRef = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRefOutputReference(this, "machine_group_ref");
  public get machineGroupRef() {
    return this._machineGroupRef;
  }
  public putMachineGroupRef(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineGroupRef) {
    this._machineGroupRef.internalValue = value;
  }
  public resetMachineGroupRef() {
    this._machineGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGroupRefInput() {
    return this._machineGroupRef.internalValue;
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
  }

  // skip_load_balancer_deployment - computed: false, optional: true, required: false
  private _skipLoadBalancerDeployment?: boolean | cdktf.IResolvable; 
  public get skipLoadBalancerDeployment() {
    return this.getBooleanAttribute('skip_load_balancer_deployment');
  }
  public set skipLoadBalancerDeployment(value: boolean | cdktf.IResolvable) {
    this._skipLoadBalancerDeployment = value;
  }
  public resetSkipLoadBalancerDeployment() {
    this._skipLoadBalancerDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLoadBalancerDeploymentInput() {
    return this._skipLoadBalancerDeployment;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // upgrade_rollout_strategy - computed: false, optional: true, required: false
  private _upgradeRolloutStrategy = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategyOutputReference(this, "upgrade_rollout_strategy");
  public get upgradeRolloutStrategy() {
    return this._upgradeRolloutStrategy;
  }
  public putUpgradeRolloutStrategy(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationUpgradeRolloutStrategy) {
    this._upgradeRolloutStrategy.internalValue = value;
  }
  public resetUpgradeRolloutStrategy() {
    this._upgradeRolloutStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeRolloutStrategyInput() {
    return this._upgradeRolloutStrategy.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms {
  /**
  * CacheSize defines the maximum number of encrypted objects to be cached in memory. The default value is 1000. You can set this to a negative value to disable caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cachesize DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cachesize}
  */
  readonly cachesize?: number;
  /**
  * Name defines the name of KMS plugin to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * SocketListenAddress defines a UNIX socket address that the KMS provider listens on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#socket_listen_address DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#socket_listen_address}
  */
  readonly socketListenAddress: string;
  /**
  * Timeout for kube-apiserver to wait for KMS plugin. Default is 3s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKmsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cachesize: cdktf.numberToTerraform(struct!.cachesize),
    name: cdktf.stringToTerraform(struct!.name),
    socket_listen_address: cdktf.stringToTerraform(struct!.socketListenAddress),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKmsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cachesize: {
      value: cdktf.numberToHclTerraform(struct!.cachesize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_listen_address: {
      value: cdktf.stringToHclTerraform(struct!.socketListenAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachesize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachesize = this._cachesize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._socketListenAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketListenAddress = this._socketListenAddress;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachesize = undefined;
      this._name = undefined;
      this._socketListenAddress = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachesize = value.cachesize;
      this._name = value.name;
      this._socketListenAddress = value.socketListenAddress;
      this._timeout = value.timeout;
    }
  }

  // cachesize - computed: false, optional: true, required: false
  private _cachesize?: number; 
  public get cachesize() {
    return this.getNumberAttribute('cachesize');
  }
  public set cachesize(value: number) {
    this._cachesize = value;
  }
  public resetCachesize() {
    this._cachesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachesizeInput() {
    return this._cachesize;
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

  // socket_listen_address - computed: false, optional: false, required: true
  private _socketListenAddress?: string; 
  public get socketListenAddress() {
    return this.getStringAttribute('socket_listen_address');
  }
  public set socketListenAddress(value: string) {
    this._socketListenAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get socketListenAddressInput() {
    return this._socketListenAddress;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders {
  /**
  * KMS defines the configuration for KMS Encryption provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kms DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kms}
  */
  readonly kms: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKmsToTerraform(struct!.kms),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKmsToHclTerraform(struct!.kms),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kms = this._kms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kms.internalValue = value.kms;
    }
  }

  // kms - computed: false, optional: false, required: true
  private _kms = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKmsOutputReference(this, "kms");
  public get kms() {
    return this._kms;
  }
  public putKms(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersKms) {
    this._kms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms.internalValue;
  }
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#providers DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#providers}
  */
  readonly providers: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders[] | cdktf.IResolvable;
  /**
  * Resources defines a list of objects and custom resources definitions that should be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#resources DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#resources}
  */
  readonly resources: string[];
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    providers: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersToTerraform, false)(struct!.providers),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    providers: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersToHclTerraform, false)(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers?.internalValue;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providers.internalValue = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providers.internalValue = value.providers;
      this._resources = value.resources;
    }
  }

  // providers - computed: false, optional: false, required: true
  private _providers = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProvidersList(this, "providers", false);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#count DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * MachineGroupRef defines the machine group configuration for the etcd machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#machine_group_ref DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#machine_group_ref}
  */
  readonly machineGroupRef?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    machine_group_ref: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRefToTerraform(struct!.machineGroupRef),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_group_ref: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRefToHclTerraform(struct!.machineGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._machineGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineGroupRef = this._machineGroupRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._machineGroupRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._machineGroupRef.internalValue = value.machineGroupRef;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // machine_group_ref - computed: false, optional: true, required: false
  private _machineGroupRef = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRefOutputReference(this, "machine_group_ref");
  public get machineGroupRef() {
    return this._machineGroupRef;
  }
  public putMachineGroupRef(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationMachineGroupRef) {
    this._machineGroupRef.internalValue = value;
  }
  public resetMachineGroupRef() {
    this._machineGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGroupRefInput() {
    return this._machineGroupRef.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck {
  /**
  * MaxUnhealthy is used to configure the maximum number of unhealthy machines in machine health checks. This setting applies to both control plane and worker machines. If the number of unhealthy machines exceeds the limit set by maxUnhealthy, further remediation will not be performed. If not configured, the default value is set to '100%' for controlplane machines and '40%' for worker machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_unhealthy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout is used to configure the node startup timeout in machine health checks. It determines how long a MachineHealthCheck should wait for a Node to join the cluster, before considering a Machine unhealthy. If not configured, the default value is set to '10m0s' (10 minutes) for all providers. For Tinkerbell provider the default is '20m0s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#node_startup_timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * UnhealthyMachineTimeout is used to configure the unhealthy machine timeout in machine health checks. If any unhealthy conditions are met for the amount of time specified as the timeout, the machines are considered unhealthy. If not configured, the default value is set to '5m0s' (5 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#unhealthy_machine_timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#unhealthy_machine_timeout}
  */
  readonly unhealthyMachineTimeout?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheckToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    unhealthy_machine_timeout: cdktf.stringToTerraform(struct!.unhealthyMachineTimeout),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheckToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_machine_timeout: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyMachineTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._unhealthyMachineTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyMachineTimeout = this._unhealthyMachineTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._unhealthyMachineTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._unhealthyMachineTimeout = value.unhealthyMachineTimeout;
    }
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // unhealthy_machine_timeout - computed: false, optional: true, required: false
  private _unhealthyMachineTimeout?: string; 
  public get unhealthyMachineTimeout() {
    return this.getStringAttribute('unhealthy_machine_timeout');
  }
  public set unhealthyMachineTimeout(value: string) {
    this._unhealthyMachineTimeout = value;
  }
  public resetUnhealthyMachineTimeout() {
    this._unhealthyMachineTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyMachineTimeoutInput() {
    return this._unhealthyMachineTimeout;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementClusterToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementClusterToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits {
  /**
  * CPU image cpu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cpu DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory image memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#memory DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimitsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimitsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests {
  /**
  * CPU image cpu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cpu DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory image memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#memory DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequestsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequestsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources {
  /**
  * ImageResource resources for container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#limits DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#limits}
  */
  readonly limits?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits;
  /**
  * Requests for image resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#requests DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#requests}
  */
  readonly requests?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimitsToTerraform(struct!.limits),
    requests: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequestsToTerraform(struct!.requests),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits",
    },
    requests: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController {
  /**
  * Digest package controller digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#digest DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#digest}
  */
  readonly digest?: string;
  /**
  * DisableWebhooks on package controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#disable_webhooks DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * Env of package controller in the format 'key=value'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#env DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#env}
  */
  readonly env?: string[];
  /**
  * Repository package controller repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#repository DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Resources of package controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#resources DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources;
  /**
  * Tag package controller tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#tag DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.env),
    repository: cdktf.stringToTerraform(struct!.repository),
    resources: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesToTerraform(struct!.resources),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_webhooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.env),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._disableWebhooks = undefined;
      this._env = undefined;
      this._repository = undefined;
      this._resources.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._disableWebhooks = value.disableWebhooks;
      this._env = value.env;
      this._repository = value.repository;
      this._resources.internalValue = value.resources;
      this._tag = value.tag;
    }
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob {
  /**
  * Digest ecr token refresher digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#digest DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#digest}
  */
  readonly digest?: string;
  /**
  * Disable on cron job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#disable DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Repository ecr token refresher repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#repository DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag ecr token refresher tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#tag DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjobToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    disable: cdktf.booleanToTerraform(struct!.disable),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjobToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._disable = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._disable = value.disable;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages {
  /**
  * Controller package controller configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#controller DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#controller}
  */
  readonly controller?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController;
  /**
  * Cronjob for ecr token refresher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cronjob DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cronjob}
  */
  readonly cronjob?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob;
  /**
  * Disable package controller on cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#disable DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerToTerraform(struct!.controller),
    cronjob: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjobToTerraform(struct!.cronjob),
    disable: cdktf.booleanToTerraform(struct!.disable),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerToHclTerraform(struct!.controller),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController",
    },
    cronjob: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjobToHclTerraform(struct!.cronjob),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._cronjob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronjob = this._cronjob?.internalValue;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controller.internalValue = undefined;
      this._cronjob.internalValue = undefined;
      this._disable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controller.internalValue = value.controller;
      this._cronjob.internalValue = value.cronjob;
      this._disable = value.disable;
    }
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // cronjob - computed: false, optional: true, required: false
  private _cronjob = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjobOutputReference(this, "cronjob");
  public get cronjob() {
    return this._cronjob;
  }
  public putCronjob(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesCronjob) {
    this._cronjob.internalValue = value;
  }
  public resetCronjob() {
    this._cronjob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronjobInput() {
    return this._cronjob.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#service_account_issuer DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#service_account_issuer}
  */
  readonly serviceAccountIssuer: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfigToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_issuer: cdktf.stringToTerraform(struct!.serviceAccountIssuer),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfigToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_issuer: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountIssuer = this._serviceAccountIssuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountIssuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountIssuer = value.serviceAccountIssuer;
    }
  }

  // service_account_issuer - computed: false, optional: false, required: true
  private _serviceAccountIssuer?: string; 
  public get serviceAccountIssuer() {
    return this.getStringAttribute('service_account_issuer');
  }
  public set serviceAccountIssuer(value: string) {
    this._serviceAccountIssuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIssuerInput() {
    return this._serviceAccountIssuer;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#http_proxy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#https_proxy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#no_proxy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string[];
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
    }
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string[]; 
  public get noProxy() {
    return this.getListAttribute('no_proxy');
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces {
  /**
  * Namespace refers to the name of a namespace in the local registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Registry refers to the name of the upstream registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#registry DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#registry}
  */
  readonly registry: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    registry: cdktf.stringToTerraform(struct!.registry),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._registry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._registry = value.registry;
    }
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

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration {
  /**
  * Authenticate defines if registry requires authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#authenticate DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#authenticate}
  */
  readonly authenticate?: boolean | cdktf.IResolvable;
  /**
  * CACertContent defines the contents registry mirror CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#ca_cert_content DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#ca_cert_content}
  */
  readonly caCertContent?: string;
  /**
  * Endpoint defines the registry mirror endpoint to use for pulling images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#endpoint DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * InsecureSkipVerify skips the registry certificate verification. Only use this solution for isolated testing or in a tightly controlled, air-gapped environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#insecure_skip_verify DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * OCINamespaces defines the mapping from an upstream registry to a local namespace where upstream artifacts are placed into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#oci_namespaces DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#oci_namespaces}
  */
  readonly ociNamespaces?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces[] | cdktf.IResolvable;
  /**
  * Port defines the port exposed for registry mirror endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#port DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#port}
  */
  readonly port?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate: cdktf.booleanToTerraform(struct!.authenticate),
    ca_cert_content: cdktf.stringToTerraform(struct!.caCertContent),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    oci_namespaces: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesToTerraform, false)(struct!.ociNamespaces),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate: {
      value: cdktf.booleanToHclTerraform(struct!.authenticate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_cert_content: {
      value: cdktf.stringToHclTerraform(struct!.caCertContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oci_namespaces: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesToHclTerraform, false)(struct!.ociNamespaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesList",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticate !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticate = this._authenticate;
    }
    if (this._caCertContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertContent = this._caCertContent;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._ociNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociNamespaces = this._ociNamespaces?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticate = undefined;
      this._caCertContent = undefined;
      this._endpoint = undefined;
      this._insecureSkipVerify = undefined;
      this._ociNamespaces.internalValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticate = value.authenticate;
      this._caCertContent = value.caCertContent;
      this._endpoint = value.endpoint;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._ociNamespaces.internalValue = value.ociNamespaces;
      this._port = value.port;
    }
  }

  // authenticate - computed: false, optional: true, required: false
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  public resetAuthenticate() {
    this._authenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // ca_cert_content - computed: false, optional: true, required: false
  private _caCertContent?: string; 
  public get caCertContent() {
    return this.getStringAttribute('ca_cert_content');
  }
  public set caCertContent(value: string) {
    this._caCertContent = value;
  }
  public resetCaCertContent() {
    this._caCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertContentInput() {
    return this._caCertContent;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // oci_namespaces - computed: false, optional: true, required: false
  private _ociNamespaces = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespacesList(this, "oci_namespaces", false);
  public get ociNamespaces() {
    return this._ociNamespaces;
  }
  public putOciNamespaces(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOciNamespaces[] | cdktf.IResolvable) {
    this._ociNamespaces.internalValue = value;
  }
  public resetOciNamespaces() {
    this._ociNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociNamespacesInput() {
    return this._ociNamespaces.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration {
  /**
  * MaxCount defines the maximum number of nodes for the associated resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_count DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_count}
  */
  readonly maxCount?: number;
  /**
  * MinCount defines the minimum number of nodes for the associated resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#min_count DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#min_count}
  */
  readonly minCount?: number;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
    }
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck {
  /**
  * MaxUnhealthy is used to configure the maximum number of unhealthy machines in machine health checks. This setting applies to both control plane and worker machines. If the number of unhealthy machines exceeds the limit set by maxUnhealthy, further remediation will not be performed. If not configured, the default value is set to '100%' for controlplane machines and '40%' for worker machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_unhealthy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout is used to configure the node startup timeout in machine health checks. It determines how long a MachineHealthCheck should wait for a Node to join the cluster, before considering a Machine unhealthy. If not configured, the default value is set to '10m0s' (10 minutes) for all providers. For Tinkerbell provider the default is '20m0s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#node_startup_timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * UnhealthyMachineTimeout is used to configure the unhealthy machine timeout in machine health checks. If any unhealthy conditions are met for the amount of time specified as the timeout, the machines are considered unhealthy. If not configured, the default value is set to '5m0s' (5 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#unhealthy_machine_timeout DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#unhealthy_machine_timeout}
  */
  readonly unhealthyMachineTimeout?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheckToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    unhealthy_machine_timeout: cdktf.stringToTerraform(struct!.unhealthyMachineTimeout),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheckToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_machine_timeout: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyMachineTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._unhealthyMachineTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyMachineTimeout = this._unhealthyMachineTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._unhealthyMachineTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._unhealthyMachineTimeout = value.unhealthyMachineTimeout;
    }
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // unhealthy_machine_timeout - computed: false, optional: true, required: false
  private _unhealthyMachineTimeout?: string; 
  public get unhealthyMachineTimeout() {
    return this.getStringAttribute('unhealthy_machine_timeout');
  }
  public set unhealthyMachineTimeout(value: string) {
    this._unhealthyMachineTimeout = value;
  }
  public resetUnhealthyMachineTimeout() {
    this._unhealthyMachineTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyMachineTimeoutInput() {
    return this._unhealthyMachineTimeout;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#effect DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#key DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#time_added DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#value DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_surge DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_surge}
  */
  readonly maxSurge: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#max_unavailable DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable: number;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdateToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdateToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: false, required: true
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: false, required: true
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy {
  /**
  * WorkerNodesRollingUpdateParams is API for rolling update strategy knobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#rolling_update DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate;
  /**
  * UpgradeRolloutStrategyType defines the types of upgrade rollout strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations {
  /**
  * AutoScalingConfiguration defines the auto scaling configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#autoscaling_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#autoscaling_configuration}
  */
  readonly autoscalingConfiguration?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration;
  /**
  * Count defines the number of desired worker nodes. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#count DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * KubeletConfiguration is a struct that exposes the Kubelet settings for the user to set on worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kubelet_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kubelet_configuration}
  */
  readonly kubeletConfiguration?: { [key: string]: string };
  /**
  * KubernetesVersion defines the version for worker nodes. If not set, the top level spec kubernetesVersion will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kubernetes_version DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Labels define the labels to assign to the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * MachineGroupRef defines the machine group configuration for the worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#machine_group_ref DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#machine_group_ref}
  */
  readonly machineGroupRef?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef;
  /**
  * MachineHealthCheck is a worker node level override for the timeouts and maxUnhealthy specified in the top-level MHC configuration. If not configured, the defaults in the top-level MHC configuration are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#machine_health_check DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck;
  /**
  * Name refers to the name of the worker node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Taints define the set of taints to be applied on worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#taints DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints[] | cdktf.IResolvable;
  /**
  * UpgradeRolloutStrategy determines the rollout strategy to use for rolling upgrades and related parameters/knobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#upgrade_rollout_strategy DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#upgrade_rollout_strategy}
  */
  readonly upgradeRolloutStrategy?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_configuration: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfigurationToTerraform(struct!.autoscalingConfiguration),
    count: cdktf.numberToTerraform(struct!.count),
    kubelet_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeletConfiguration),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_group_ref: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRefToTerraform(struct!.machineGroupRef),
    machine_health_check: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    name: cdktf.stringToTerraform(struct!.name),
    taints: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsToTerraform, false)(struct!.taints),
    upgrade_rollout_strategy: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyToTerraform(struct!.upgradeRolloutStrategy),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_configuration: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfigurationToHclTerraform(struct!.autoscalingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kubelet_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeletConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_group_ref: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRefToHclTerraform(struct!.machineGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef",
    },
    machine_health_check: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsList",
    },
    upgrade_rollout_strategy: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyToHclTerraform(struct!.upgradeRolloutStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfiguration = this._autoscalingConfiguration?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._kubeletConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfiguration = this._kubeletConfiguration;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineGroupRef = this._machineGroupRef?.internalValue;
    }
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._upgradeRolloutStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeRolloutStrategy = this._upgradeRolloutStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingConfiguration.internalValue = undefined;
      this._count = undefined;
      this._kubeletConfiguration = undefined;
      this._kubernetesVersion = undefined;
      this._labels = undefined;
      this._machineGroupRef.internalValue = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._name = undefined;
      this._taints.internalValue = undefined;
      this._upgradeRolloutStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingConfiguration.internalValue = value.autoscalingConfiguration;
      this._count = value.count;
      this._kubeletConfiguration = value.kubeletConfiguration;
      this._kubernetesVersion = value.kubernetesVersion;
      this._labels = value.labels;
      this._machineGroupRef.internalValue = value.machineGroupRef;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._name = value.name;
      this._taints.internalValue = value.taints;
      this._upgradeRolloutStrategy.internalValue = value.upgradeRolloutStrategy;
    }
  }

  // autoscaling_configuration - computed: false, optional: true, required: false
  private _autoscalingConfiguration = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfigurationOutputReference(this, "autoscaling_configuration");
  public get autoscalingConfiguration() {
    return this._autoscalingConfiguration;
  }
  public putAutoscalingConfiguration(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsAutoscalingConfiguration) {
    this._autoscalingConfiguration.internalValue = value;
  }
  public resetAutoscalingConfiguration() {
    this._autoscalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigurationInput() {
    return this._autoscalingConfiguration.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // kubelet_configuration - computed: false, optional: true, required: false
  private _kubeletConfiguration?: { [key: string]: string }; 
  public get kubeletConfiguration() {
    return this.getStringMapAttribute('kubelet_configuration');
  }
  public set kubeletConfiguration(value: { [key: string]: string }) {
    this._kubeletConfiguration = value;
  }
  public resetKubeletConfiguration() {
    this._kubeletConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigurationInput() {
    return this._kubeletConfiguration;
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
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

  // machine_group_ref - computed: false, optional: true, required: false
  private _machineGroupRef = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRefOutputReference(this, "machine_group_ref");
  public get machineGroupRef() {
    return this._machineGroupRef;
  }
  public putMachineGroupRef(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineGroupRef) {
    this._machineGroupRef.internalValue = value;
  }
  public resetMachineGroupRef() {
    this._machineGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGroupRefInput() {
    return this._machineGroupRef.internalValue;
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
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

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // upgrade_rollout_strategy - computed: false, optional: true, required: false
  private _upgradeRolloutStrategy = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategyOutputReference(this, "upgrade_rollout_strategy");
  public get upgradeRolloutStrategy() {
    return this._upgradeRolloutStrategy;
  }
  public putUpgradeRolloutStrategy(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsUpgradeRolloutStrategy) {
    this._upgradeRolloutStrategy.internalValue = value;
  }
  public resetUpgradeRolloutStrategy() {
    this._upgradeRolloutStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeRolloutStrategyInput() {
    return this._upgradeRolloutStrategy.internalValue;
  }
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec {
  /**
  * BundlesRef contains a reference to the Bundles containing the desired dependencies for the cluster. DEPRECATED: Use EksaVersion instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#bundles_ref DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#bundles_ref}
  */
  readonly bundlesRef?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#cluster_network DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#cluster_network}
  */
  readonly clusterNetwork?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#control_plane_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#control_plane_configuration}
  */
  readonly controlPlaneConfiguration?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#datacenter_ref DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#datacenter_ref}
  */
  readonly datacenterRef?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef;
  /**
  * EksaVersion is the semver identifying the release of eks-a used to populate the cluster components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#eksa_version DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#eksa_version}
  */
  readonly eksaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#etcd_encryption DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#etcd_encryption}
  */
  readonly etcdEncryption?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption[] | cdktf.IResolvable;
  /**
  * ExternalEtcdConfiguration defines the configuration options for using unstacked etcd topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#external_etcd_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#external_etcd_configuration}
  */
  readonly externalEtcdConfiguration?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#git_ops_ref DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#git_ops_ref}
  */
  readonly gitOpsRef?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#identity_provider_refs DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#identity_provider_refs}
  */
  readonly identityProviderRefs?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#kubernetes_version DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * MachineHealthCheck allows to configure timeouts for machine health checks. Machine Health Checks are responsible for remediating unhealthy Machines. Configuring these values will decide how long to wait to remediate unhealthy machine or determine health of nodes' machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#machine_health_check DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#management_cluster DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#management_cluster}
  */
  readonly managementCluster?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster;
  /**
  * PackageConfiguration for installing EKS Anywhere curated packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#packages DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#packages}
  */
  readonly packages?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#pod_iam_config DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#pod_iam_config}
  */
  readonly podIamConfig?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#proxy_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#proxy_configuration}
  */
  readonly proxyConfiguration?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration;
  /**
  * RegistryMirrorConfiguration defines the settings for image registry mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#registry_mirror_configuration DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#registry_mirror_configuration}
  */
  readonly registryMirrorConfiguration?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#worker_node_group_configurations DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest#worker_node_group_configurations}
  */
  readonly workerNodeGroupConfigurations?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations[] | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundles_ref: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRefToTerraform(struct!.bundlesRef),
    cluster_network: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkToTerraform(struct!.clusterNetwork),
    control_plane_configuration: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationToTerraform(struct!.controlPlaneConfiguration),
    datacenter_ref: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRefToTerraform(struct!.datacenterRef),
    eksa_version: cdktf.stringToTerraform(struct!.eksaVersion),
    etcd_encryption: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionToTerraform, false)(struct!.etcdEncryption),
    external_etcd_configuration: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationToTerraform(struct!.externalEtcdConfiguration),
    git_ops_ref: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRefToTerraform(struct!.gitOpsRef),
    identity_provider_refs: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsToTerraform, false)(struct!.identityProviderRefs),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    machine_health_check: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    management_cluster: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementClusterToTerraform(struct!.managementCluster),
    packages: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesToTerraform(struct!.packages),
    pod_iam_config: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfigToTerraform(struct!.podIamConfig),
    proxy_configuration: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfigurationToTerraform(struct!.proxyConfiguration),
    registry_mirror_configuration: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationToTerraform(struct!.registryMirrorConfiguration),
    worker_node_group_configurations: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsToTerraform, false)(struct!.workerNodeGroupConfigurations),
  }
}


export function dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundles_ref: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRefToHclTerraform(struct!.bundlesRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef",
    },
    cluster_network: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkToHclTerraform(struct!.clusterNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork",
    },
    control_plane_configuration: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationToHclTerraform(struct!.controlPlaneConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration",
    },
    datacenter_ref: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRefToHclTerraform(struct!.datacenterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef",
    },
    eksa_version: {
      value: cdktf.stringToHclTerraform(struct!.eksaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_encryption: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionToHclTerraform, false)(struct!.etcdEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionList",
    },
    external_etcd_configuration: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationToHclTerraform(struct!.externalEtcdConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration",
    },
    git_ops_ref: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRefToHclTerraform(struct!.gitOpsRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef",
    },
    identity_provider_refs: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsToHclTerraform, false)(struct!.identityProviderRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsList",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_health_check: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck",
    },
    management_cluster: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementClusterToHclTerraform(struct!.managementCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster",
    },
    packages: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesToHclTerraform(struct!.packages),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages",
    },
    pod_iam_config: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfigToHclTerraform(struct!.podIamConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig",
    },
    proxy_configuration: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfigurationToHclTerraform(struct!.proxyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration",
    },
    registry_mirror_configuration: {
      value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationToHclTerraform(struct!.registryMirrorConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration",
    },
    worker_node_group_configurations: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsToHclTerraform, false)(struct!.workerNodeGroupConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundlesRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundlesRef = this._bundlesRef?.internalValue;
    }
    if (this._clusterNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNetwork = this._clusterNetwork?.internalValue;
    }
    if (this._controlPlaneConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneConfiguration = this._controlPlaneConfiguration?.internalValue;
    }
    if (this._datacenterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterRef = this._datacenterRef?.internalValue;
    }
    if (this._eksaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksaVersion = this._eksaVersion;
    }
    if (this._etcdEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdEncryption = this._etcdEncryption?.internalValue;
    }
    if (this._externalEtcdConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEtcdConfiguration = this._externalEtcdConfiguration?.internalValue;
    }
    if (this._gitOpsRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitOpsRef = this._gitOpsRef?.internalValue;
    }
    if (this._identityProviderRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderRefs = this._identityProviderRefs?.internalValue;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._managementCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementCluster = this._managementCluster?.internalValue;
    }
    if (this._packages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages?.internalValue;
    }
    if (this._podIamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIamConfig = this._podIamConfig?.internalValue;
    }
    if (this._proxyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfiguration = this._proxyConfiguration?.internalValue;
    }
    if (this._registryMirrorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryMirrorConfiguration = this._registryMirrorConfiguration?.internalValue;
    }
    if (this._workerNodeGroupConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeGroupConfigurations = this._workerNodeGroupConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundlesRef.internalValue = undefined;
      this._clusterNetwork.internalValue = undefined;
      this._controlPlaneConfiguration.internalValue = undefined;
      this._datacenterRef.internalValue = undefined;
      this._eksaVersion = undefined;
      this._etcdEncryption.internalValue = undefined;
      this._externalEtcdConfiguration.internalValue = undefined;
      this._gitOpsRef.internalValue = undefined;
      this._identityProviderRefs.internalValue = undefined;
      this._kubernetesVersion = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._managementCluster.internalValue = undefined;
      this._packages.internalValue = undefined;
      this._podIamConfig.internalValue = undefined;
      this._proxyConfiguration.internalValue = undefined;
      this._registryMirrorConfiguration.internalValue = undefined;
      this._workerNodeGroupConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundlesRef.internalValue = value.bundlesRef;
      this._clusterNetwork.internalValue = value.clusterNetwork;
      this._controlPlaneConfiguration.internalValue = value.controlPlaneConfiguration;
      this._datacenterRef.internalValue = value.datacenterRef;
      this._eksaVersion = value.eksaVersion;
      this._etcdEncryption.internalValue = value.etcdEncryption;
      this._externalEtcdConfiguration.internalValue = value.externalEtcdConfiguration;
      this._gitOpsRef.internalValue = value.gitOpsRef;
      this._identityProviderRefs.internalValue = value.identityProviderRefs;
      this._kubernetesVersion = value.kubernetesVersion;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._managementCluster.internalValue = value.managementCluster;
      this._packages.internalValue = value.packages;
      this._podIamConfig.internalValue = value.podIamConfig;
      this._proxyConfiguration.internalValue = value.proxyConfiguration;
      this._registryMirrorConfiguration.internalValue = value.registryMirrorConfiguration;
      this._workerNodeGroupConfigurations.internalValue = value.workerNodeGroupConfigurations;
    }
  }

  // bundles_ref - computed: false, optional: true, required: false
  private _bundlesRef = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRefOutputReference(this, "bundles_ref");
  public get bundlesRef() {
    return this._bundlesRef;
  }
  public putBundlesRef(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecBundlesRef) {
    this._bundlesRef.internalValue = value;
  }
  public resetBundlesRef() {
    this._bundlesRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesRefInput() {
    return this._bundlesRef.internalValue;
  }

  // cluster_network - computed: false, optional: true, required: false
  private _clusterNetwork = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetworkOutputReference(this, "cluster_network");
  public get clusterNetwork() {
    return this._clusterNetwork;
  }
  public putClusterNetwork(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecClusterNetwork) {
    this._clusterNetwork.internalValue = value;
  }
  public resetClusterNetwork() {
    this._clusterNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkInput() {
    return this._clusterNetwork.internalValue;
  }

  // control_plane_configuration - computed: false, optional: true, required: false
  private _controlPlaneConfiguration = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfigurationOutputReference(this, "control_plane_configuration");
  public get controlPlaneConfiguration() {
    return this._controlPlaneConfiguration;
  }
  public putControlPlaneConfiguration(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecControlPlaneConfiguration) {
    this._controlPlaneConfiguration.internalValue = value;
  }
  public resetControlPlaneConfiguration() {
    this._controlPlaneConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneConfigurationInput() {
    return this._controlPlaneConfiguration.internalValue;
  }

  // datacenter_ref - computed: false, optional: true, required: false
  private _datacenterRef = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRefOutputReference(this, "datacenter_ref");
  public get datacenterRef() {
    return this._datacenterRef;
  }
  public putDatacenterRef(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecDatacenterRef) {
    this._datacenterRef.internalValue = value;
  }
  public resetDatacenterRef() {
    this._datacenterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterRefInput() {
    return this._datacenterRef.internalValue;
  }

  // eksa_version - computed: false, optional: true, required: false
  private _eksaVersion?: string; 
  public get eksaVersion() {
    return this.getStringAttribute('eksa_version');
  }
  public set eksaVersion(value: string) {
    this._eksaVersion = value;
  }
  public resetEksaVersion() {
    this._eksaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksaVersionInput() {
    return this._eksaVersion;
  }

  // etcd_encryption - computed: false, optional: true, required: false
  private _etcdEncryption = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryptionList(this, "etcd_encryption", false);
  public get etcdEncryption() {
    return this._etcdEncryption;
  }
  public putEtcdEncryption(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecEtcdEncryption[] | cdktf.IResolvable) {
    this._etcdEncryption.internalValue = value;
  }
  public resetEtcdEncryption() {
    this._etcdEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdEncryptionInput() {
    return this._etcdEncryption.internalValue;
  }

  // external_etcd_configuration - computed: false, optional: true, required: false
  private _externalEtcdConfiguration = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfigurationOutputReference(this, "external_etcd_configuration");
  public get externalEtcdConfiguration() {
    return this._externalEtcdConfiguration;
  }
  public putExternalEtcdConfiguration(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecExternalEtcdConfiguration) {
    this._externalEtcdConfiguration.internalValue = value;
  }
  public resetExternalEtcdConfiguration() {
    this._externalEtcdConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEtcdConfigurationInput() {
    return this._externalEtcdConfiguration.internalValue;
  }

  // git_ops_ref - computed: false, optional: true, required: false
  private _gitOpsRef = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRefOutputReference(this, "git_ops_ref");
  public get gitOpsRef() {
    return this._gitOpsRef;
  }
  public putGitOpsRef(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecGitOpsRef) {
    this._gitOpsRef.internalValue = value;
  }
  public resetGitOpsRef() {
    this._gitOpsRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitOpsRefInput() {
    return this._gitOpsRef.internalValue;
  }

  // identity_provider_refs - computed: false, optional: true, required: false
  private _identityProviderRefs = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefsList(this, "identity_provider_refs", false);
  public get identityProviderRefs() {
    return this._identityProviderRefs;
  }
  public putIdentityProviderRefs(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecIdentityProviderRefs[] | cdktf.IResolvable) {
    this._identityProviderRefs.internalValue = value;
  }
  public resetIdentityProviderRefs() {
    this._identityProviderRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderRefsInput() {
    return this._identityProviderRefs.internalValue;
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
  }

  // management_cluster - computed: false, optional: true, required: false
  private _managementCluster = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementClusterOutputReference(this, "management_cluster");
  public get managementCluster() {
    return this._managementCluster;
  }
  public putManagementCluster(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecManagementCluster) {
    this._managementCluster.internalValue = value;
  }
  public resetManagementCluster() {
    this._managementCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster.internalValue;
  }

  // packages - computed: false, optional: true, required: false
  private _packages = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackagesOutputReference(this, "packages");
  public get packages() {
    return this._packages;
  }
  public putPackages(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPackages) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // pod_iam_config - computed: false, optional: true, required: false
  private _podIamConfig = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfigOutputReference(this, "pod_iam_config");
  public get podIamConfig() {
    return this._podIamConfig;
  }
  public putPodIamConfig(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecPodIamConfig) {
    this._podIamConfig.internalValue = value;
  }
  public resetPodIamConfig() {
    this._podIamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIamConfigInput() {
    return this._podIamConfig.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfigurationOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecProxyConfiguration) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // registry_mirror_configuration - computed: false, optional: true, required: false
  private _registryMirrorConfiguration = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfigurationOutputReference(this, "registry_mirror_configuration");
  public get registryMirrorConfiguration() {
    return this._registryMirrorConfiguration;
  }
  public putRegistryMirrorConfiguration(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecRegistryMirrorConfiguration) {
    this._registryMirrorConfiguration.internalValue = value;
  }
  public resetRegistryMirrorConfiguration() {
    this._registryMirrorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMirrorConfigurationInput() {
    return this._registryMirrorConfiguration.internalValue;
  }

  // worker_node_group_configurations - computed: false, optional: true, required: false
  private _workerNodeGroupConfigurations = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurationsList(this, "worker_node_group_configurations", false);
  public get workerNodeGroupConfigurations() {
    return this._workerNodeGroupConfigurations;
  }
  public putWorkerNodeGroupConfigurations(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecWorkerNodeGroupConfigurations[] | cdktf.IResolvable) {
    this._workerNodeGroupConfigurations.internalValue = value;
  }
  public resetWorkerNodeGroupConfigurations() {
    this._workerNodeGroupConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeGroupConfigurationsInput() {
    return this._workerNodeGroupConfigurations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
