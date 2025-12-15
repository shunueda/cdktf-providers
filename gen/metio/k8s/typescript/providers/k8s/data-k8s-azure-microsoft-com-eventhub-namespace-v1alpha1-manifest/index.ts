// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata;
  /**
  * EventhubNamespaceSpec defines the desired state of EventhubNamespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#spec DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#labels DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#name DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules {
  /**
  * IPMask - IPv4 address 1.1.1.1 or CIDR notation 1.1.0.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#ip_mask DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#ip_mask}
  */
  readonly ipMask?: string;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
  }
}


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipMask = value.ipMask;
    }
  }

  // ip_mask - computed: false, optional: true, required: false
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  public resetIpMask() {
    this._ipMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
  }
}

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesOutputReference {
    return new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules {
  /**
  * IgnoreMissingVnetServiceEndpoint - Value that indicates whether to ignore missing VNet Service Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#ignore_missing_service_endpoint DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#ignore_missing_service_endpoint}
  */
  readonly ignoreMissingServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Subnet - Full Resource ID of Virtual Network Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#subnet_id DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_service_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingServiceEndpoint = this._ignoreMissingServiceEndpoint;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreMissingServiceEndpoint = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreMissingServiceEndpoint = value.ignoreMissingServiceEndpoint;
      this._subnetId = value.subnetId;
    }
  }

  // ignore_missing_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingServiceEndpoint?: boolean | cdktf.IResolvable; 
  public get ignoreMissingServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_service_endpoint');
  }
  public set ignoreMissingServiceEndpoint(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingServiceEndpoint = value;
  }
  public resetIgnoreMissingServiceEndpoint() {
    this._ignoreMissingServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingServiceEndpointInput() {
    return this._ignoreMissingServiceEndpoint;
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

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesOutputReference {
    return new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule {
  /**
  * DefaultAction defined as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#default_action DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#default_action}
  */
  readonly defaultAction?: string;
  /**
  * IPRules - List of IpRules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#ip_rules DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#ip_rules}
  */
  readonly ipRules?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules[] | cdktf.IResolvable;
  /**
  * VirtualNetworkRules - List VirtualNetwork Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#virtual_network_rules DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#virtual_network_rules}
  */
  readonly virtualNetworkRules?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules[] | cdktf.IResolvable;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesToTerraform, false)(struct!.ipRules),
    virtual_network_rules: cdktf.listMapper(dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToTerraform, false)(struct!.virtualNetworkRules),
  }
}


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rules: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesToHclTerraform, false)(struct!.ipRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesList",
    },
    virtual_network_rules: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesToHclTerraform, false)(struct!.virtualNetworkRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules?.internalValue;
    }
    if (this._virtualNetworkRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkRules = this._virtualNetworkRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._ipRules.internalValue = undefined;
      this._virtualNetworkRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._ipRules.internalValue = value.ipRules;
      this._virtualNetworkRules.internalValue = value.virtualNetworkRules;
    }
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRulesList(this, "ip_rules", false);
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleIpRules[] | cdktf.IResolvable) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }

  // virtual_network_rules - computed: false, optional: true, required: false
  private _virtualNetworkRules = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRulesList(this, "virtual_network_rules", false);
  public get virtualNetworkRules() {
    return this._virtualNetworkRules;
  }
  public putVirtualNetworkRules(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleVirtualNetworkRules[] | cdktf.IResolvable) {
    this._virtualNetworkRules.internalValue = value;
  }
  public resetVirtualNetworkRules() {
    this._virtualNetworkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRulesInput() {
    return this._virtualNetworkRules.internalValue;
  }
}
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#is_auto_inflate_enabled DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#is_auto_inflate_enabled}
  */
  readonly isAutoInflateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#kafka_enabled DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#kafka_enabled}
  */
  readonly kafkaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#maximum_throughput_units DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#maximum_throughput_units}
  */
  readonly maximumThroughputUnits?: number;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecPropertiesToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_auto_inflate_enabled: cdktf.booleanToTerraform(struct!.isAutoInflateEnabled),
    kafka_enabled: cdktf.booleanToTerraform(struct!.kafkaEnabled),
    maximum_throughput_units: cdktf.numberToTerraform(struct!.maximumThroughputUnits),
  }
}


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_auto_inflate_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoInflateEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_throughput_units: {
      value: cdktf.numberToHclTerraform(struct!.maximumThroughputUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAutoInflateEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoInflateEnabled = this._isAutoInflateEnabled;
    }
    if (this._kafkaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaEnabled = this._kafkaEnabled;
    }
    if (this._maximumThroughputUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumThroughputUnits = this._maximumThroughputUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isAutoInflateEnabled = undefined;
      this._kafkaEnabled = undefined;
      this._maximumThroughputUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isAutoInflateEnabled = value.isAutoInflateEnabled;
      this._kafkaEnabled = value.kafkaEnabled;
      this._maximumThroughputUnits = value.maximumThroughputUnits;
    }
  }

  // is_auto_inflate_enabled - computed: false, optional: true, required: false
  private _isAutoInflateEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoInflateEnabled() {
    return this.getBooleanAttribute('is_auto_inflate_enabled');
  }
  public set isAutoInflateEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoInflateEnabled = value;
  }
  public resetIsAutoInflateEnabled() {
    this._isAutoInflateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoInflateEnabledInput() {
    return this._isAutoInflateEnabled;
  }

  // kafka_enabled - computed: false, optional: true, required: false
  private _kafkaEnabled?: boolean | cdktf.IResolvable; 
  public get kafkaEnabled() {
    return this.getBooleanAttribute('kafka_enabled');
  }
  public set kafkaEnabled(value: boolean | cdktf.IResolvable) {
    this._kafkaEnabled = value;
  }
  public resetKafkaEnabled() {
    this._kafkaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaEnabledInput() {
    return this._kafkaEnabled;
  }

  // maximum_throughput_units - computed: false, optional: true, required: false
  private _maximumThroughputUnits?: number; 
  public get maximumThroughputUnits() {
    return this.getNumberAttribute('maximum_throughput_units');
  }
  public set maximumThroughputUnits(value: number) {
    this._maximumThroughputUnits = value;
  }
  public resetMaximumThroughputUnits() {
    this._maximumThroughputUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumThroughputUnitsInput() {
    return this._maximumThroughputUnits;
  }
}
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#capacity DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#name DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#tier DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#tier}
  */
  readonly tier?: string;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSkuToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSkuToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
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
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec {
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#location DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * EventhubNamespaceNetworkRule defines the namespace network rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#network_rule DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#network_rule}
  */
  readonly networkRule?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule;
  /**
  * EventhubNamespaceProperties defines the namespace properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#properties DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#properties}
  */
  readonly properties?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * EventhubNamespaceSku defines the sku
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#sku DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest#sku}
  */
  readonly sku?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku;
}

export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    network_rule: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleToTerraform(struct!.networkRule),
    properties: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecPropertiesToTerraform(struct!.properties),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    sku: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSkuToTerraform(struct!.sku),
  }
}


export function dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_rule: {
      value: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleToHclTerraform(struct!.networkRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule",
    },
    properties: {
      value: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._networkRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRule = this._networkRule?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._networkRule.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._resourceGroup = undefined;
      this._sku.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._networkRule.internalValue = value.networkRule;
      this._properties.internalValue = value.properties;
      this._resourceGroup = value.resourceGroup;
      this._sku.internalValue = value.sku;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // network_rule - computed: false, optional: true, required: false
  private _networkRule = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRuleOutputReference(this, "network_rule");
  public get networkRule() {
    return this._networkRule;
  }
  public putNetworkRule(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecNetworkRule) {
    this._networkRule.internalValue = value;
  }
  public resetNetworkRule() {
    this._networkRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleInput() {
    return this._networkRule.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest k8s_azure_microsoft_com_eventhub_namespace_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_eventhub_namespace_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_eventhub_namespace_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_eventhub_namespace_v1alpha1_manifest k8s_azure_microsoft_com_eventhub_namespace_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_eventhub_namespace_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComEventhubNamespaceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
