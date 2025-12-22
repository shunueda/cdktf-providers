// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#metadata DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata;
  /**
  * FirewallSpec defines the desired state of Firewall. The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding FirewallStatus. You can retrieve both objects by calling DescribeFirewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#spec DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec;
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#annotations DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#labels DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#name DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#namespace DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#key_id DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#type_ DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._type = value.type;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#ip_address_type DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#subnet_id DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._subnetId = value.subnetId;
    }
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
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#key DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#value DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec {
  /**
  * A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#delete_protection DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * A description of the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#description DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * A complex type that contains settings for encryption of your firewall resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#encryption_configuration DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#encryption_configuration}
  */
  readonly encryptionConfiguration?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration;
  /**
  * The descriptive name of the firewall. You can't change the name of a firewall after you create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#firewall_name DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#firewall_name}
  */
  readonly firewallName: string;
  /**
  * The Amazon Resource Name (ARN) of the FirewallPolicy that you want to use for the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#firewall_policy_arn DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#firewall_policy_arn}
  */
  readonly firewallPolicyArn: string;
  /**
  * A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#firewall_policy_change_protection DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#firewall_policy_change_protection}
  */
  readonly firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#subnet_change_protection DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#subnet_change_protection}
  */
  readonly subnetChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#subnet_mappings DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#subnet_mappings}
  */
  readonly subnetMappings: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings[] | cdktf.IResolvable;
  /**
  * The key:value pairs to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#tags DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The unique identifier of the VPC where Network Firewall should create the firewall. You can't change this setting after you create the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#vpc_id DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId: string;
}

export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_protection: cdktf.booleanToTerraform(struct!.deleteProtection),
    description: cdktf.stringToTerraform(struct!.description),
    encryption_configuration: dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    firewall_name: cdktf.stringToTerraform(struct!.firewallName),
    firewall_policy_arn: cdktf.stringToTerraform(struct!.firewallPolicyArn),
    firewall_policy_change_protection: cdktf.booleanToTerraform(struct!.firewallPolicyChangeProtection),
    subnet_change_protection: cdktf.booleanToTerraform(struct!.subnetChangeProtection),
    subnet_mappings: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsToTerraform, false)(struct!.subnetMappings),
    tags: cdktf.listMapper(dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deleteProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_configuration: {
      value: dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration",
    },
    firewall_name: {
      value: cdktf.stringToHclTerraform(struct!.firewallName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_policy_arn: {
      value: cdktf.stringToHclTerraform(struct!.firewallPolicyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_policy_change_protection: {
      value: cdktf.booleanToHclTerraform(struct!.firewallPolicyChangeProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_change_protection: {
      value: cdktf.booleanToHclTerraform(struct!.subnetChangeProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_mappings: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsToHclTerraform, false)(struct!.subnetMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteProtection = this._deleteProtection;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._firewallName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallName = this._firewallName;
    }
    if (this._firewallPolicyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallPolicyArn = this._firewallPolicyArn;
    }
    if (this._firewallPolicyChangeProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallPolicyChangeProtection = this._firewallPolicyChangeProtection;
    }
    if (this._subnetChangeProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetChangeProtection = this._subnetChangeProtection;
    }
    if (this._subnetMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMappings = this._subnetMappings?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteProtection = undefined;
      this._description = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._firewallName = undefined;
      this._firewallPolicyArn = undefined;
      this._firewallPolicyChangeProtection = undefined;
      this._subnetChangeProtection = undefined;
      this._subnetMappings.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteProtection = value.deleteProtection;
      this._description = value.description;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._firewallName = value.firewallName;
      this._firewallPolicyArn = value.firewallPolicyArn;
      this._firewallPolicyChangeProtection = value.firewallPolicyChangeProtection;
      this._subnetChangeProtection = value.subnetChangeProtection;
      this._subnetMappings.internalValue = value.subnetMappings;
      this._tags.internalValue = value.tags;
      this._vpcId = value.vpcId;
    }
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // firewall_name - computed: false, optional: false, required: true
  private _firewallName?: string; 
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
  }

  // firewall_policy_arn - computed: false, optional: false, required: true
  private _firewallPolicyArn?: string; 
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }
  public set firewallPolicyArn(value: string) {
    this._firewallPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyArnInput() {
    return this._firewallPolicyArn;
  }

  // firewall_policy_change_protection - computed: false, optional: true, required: false
  private _firewallPolicyChangeProtection?: boolean | cdktf.IResolvable; 
  public get firewallPolicyChangeProtection() {
    return this.getBooleanAttribute('firewall_policy_change_protection');
  }
  public set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable) {
    this._firewallPolicyChangeProtection = value;
  }
  public resetFirewallPolicyChangeProtection() {
    this._firewallPolicyChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyChangeProtectionInput() {
    return this._firewallPolicyChangeProtection;
  }

  // subnet_change_protection - computed: false, optional: true, required: false
  private _subnetChangeProtection?: boolean | cdktf.IResolvable; 
  public get subnetChangeProtection() {
    return this.getBooleanAttribute('subnet_change_protection');
  }
  public set subnetChangeProtection(value: boolean | cdktf.IResolvable) {
    this._subnetChangeProtection = value;
  }
  public resetSubnetChangeProtection() {
    this._subnetChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetChangeProtectionInput() {
    return this._subnetChangeProtection;
  }

  // subnet_mappings - computed: false, optional: false, required: true
  private _subnetMappings = new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappingsList(this, "subnet_mappings", false);
  public get subnetMappings() {
    return this._subnetMappings;
  }
  public putSubnetMappings(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecSubnetMappings[] | cdktf.IResolvable) {
    this._subnetMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingsInput() {
    return this._subnetMappings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest k8s_networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest}
*/
export class DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest k8s_networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networkfirewall_services_k8s_aws_firewall_v1alpha1_manifest',
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
  private _metadata = new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec) {
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
      metadata: dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkfirewallServicesK8SAwsFirewallV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
